---
layout: page
title:  "Cluster Analysis"
---

Who are Amazon's (AMZN) competitors?  This seems like a simple question, but I don't think there is an easy answer.  In the finance literature, competitors are often identified using some definition of industries like SIC or NAICS, but I don't think that will work for AMZN.  What industry is Amazon in?  Books?  General merchandise (Amazon basics)? e-Commerce (Amazon Prime)?  Entertainment (Prime Video and Prime Music)? Business Services (Amazon Web Services i.e. AWS)?  Technology (Alexa, Kindle, Fire, ...)? Or all of the above?

I went on S&P Capital IQ, and their system identified the following competitors for Amazon: 

Alibaba (another e-commerce giant)  
Walmart (another store that sells almost everything)  
jd.com (another e-commerce giant)  
Priceline (not sure that Amazon is in the hotel/airfare business yet...)  
ebay (another e-commerce giant)  
Netflix (Amazon streams movies and TV shows, and produces original content)  
Apple (Amazon makes their own tech products: the Kindle, Fire, Alexa, etc.)  
Google (another tech giant)  
Facebook (not sure that Amazon is in the social media business yet...)  

I found this list dissatisfying, so I wanted to try something different: Let the stock market tell me which firms are connected to Amazon. Specifically, if a firm's returns were sufficiently correlated with Amazon's returns, after accounting for the effect of common components like the market, then those firms could be somehow connected to Amazon. I settled on using Affinity Propagation, a clustering algorithm which I will describe in the next subsection.

# Set Up 

I am not an expert on cluster analysis, but here is my understanding based on reading the
<a href="https://en.wikipedia.org/wiki/Affinity_propagation" title="b1">Wikipedia page</a>, the 
<a href="https://scikit-learn.org/stable/modules/generated/sklearn.cluster.AffinityPropagation.html" title="b1">Python package documentation</a> and one of the <a href="https://scikit-learn.org/stable/auto_examples/applications/plot_stock_market.html" title="b1">associated examples</a>.

Affinity Propagation is a clustering algorithm i.e. it is an algorithm for grouping data.  The key trade off is minimizing the distance between each data point and the closest cluster center (called an *'exemplar'*) and minimizing the number of clusters.  The two extremes of this are (1) Set the distance between all the points and the exemplars to zero by making each data point its own cluster (2) Only have one exemplar.  Which of these forces will dominate depends on parameters you choose when running the algorithm.

For all the applications in this blog post, the affinity propagation model will have the following ingredients:  
*Input:* Sparse covariance matrix of stock returns (computed using <a href="https://scikit-learn.org/stable/modules/generated/sklearn.covariance.GraphicalLassoCV.html" title="b1">this python package</a>).  How the sparsity works: If two firms have independent returns conditioning on the returns of all other firms, the corresponding coefficient in the precision matrix (i.e. the inverse of this sparse covariance matrix) will be zero. I am using the sparse covariance matrix, rather than the standard covariance matrix, to take out common factors in stock returns.  
*Output:* Exemplars i.e. the firms that are most representative of other firms, as well as the members of each cluster.  Note that the model chooses the number of clusters by itself, but the number of clusters chosen depends on a parameter the user chooses to determine which of the two trade-off forces outlined above (small distance between data and exemplars vs. small number of clusters) dominate.  For all the applications in this blog post, I used the default parameters, and did not attempt to do any tuning.

In the subsections that follow, I draw plots based on the sparse covariance matrix. We can think of the distance between points on the plot as how useful a firm's stock returns are for predicting *contemporaneous* variation in other firms' stock returns (closer means more predictive power).  These plots are collapsing something that may have many dimensions to a 2-D picture, which is why I can find them hard to interpret.   

One last point (that I was wondering when I was doing all this): How is this affinity propagation algorithm different than just forming groups of firms based on correlation? It ends up doing something similar: the firms within each cluster are likely more correlated with each other than with any group of firms outside the cluster.  But the algorithm does some extra work: it tells us the number of clusters we want.  Even though the number of clusters depends on a parameter (so there is some equivalence between choosing the number of clusters, and choosing this parameter), we can fix the parameter and feed in data from different time periods, and see how the number of clusters the algorithm chooses changes over time. 

# Application One: Simulation

Before I started working with real data, I wanted to work with simulated data.  This way I could get a better understanding for exactly how the clustering algorithm was working.  I started by simulating the following model: 
\begin{equation}
r_{i,t}=\beta_{i,1} r_{1,t} + \beta_{i,2} r_{2,t} + \beta_{i,3} r_{3,t} + e_{i,t}
\end{equation}
where $$r_{i,t}$$ is the return on stock $$i$$ in period $$t$$, $$\beta_{i,j}$$ is the loading of stock $$i$$ on factor $$j$$, $$r_{j,t}$$ is the return of factor $$j$$ at time $$t$$, and $$e_{i,t}$$ is a firm-specific error term at time $$t$$.

I wanted to bake some clusters into the simulation, so I decided to create 4 groups of firms.  Within each of these four groups, each $$\beta_{i,j}$$ is equal to a constant plus some noise.  For example: If the average firm in group 1 has a $$\beta_{i,1}$$ i.e. a beta of one on the first factor, each of the individual firms will have betas normally distributed around 1 with some positive variance.  I add this noise to the betas because if I found that simulating a model with constant factor loadings can lead to a sparse covariance matrix which is close to singular (which creates other issues down the road...).

I find that the affinity propagation (AP) model usually correctly groups firms in the same cluster, but may split clusters into smaller sub-clusters.  What matters for this are (1) How far apart the average betas in each group from one another and (2) The variance of the noise i.e. $$var(e_{i,t})$$. More dispersion in underlying factor loadings usually leads to fewer clusters, while more noise usually leads to more clusters.


Here is an example where I simulated this three factor model. The algorithm correctly identifies 4 clusters, but some firms get grouped incorrectly
![fig](/Post_Images/6_11_2020/3factornoise.PNG)

Here is the same picture, but after I decrease the volatility of the noise.
![fig](/Post_Images/6_11_2020/3factorlessnoise.PNG)  
Incorrectly identifies 5 clusters, mostly done by splitting up "correct" clusters 

What if we make beta noise independent i.e. make the betas $$i.i.d.$$ for each factor, and factor loadings between clusters more dispersed? And reduce noise?  Then can get all correct!  This convinced me that the algorithm had some use: when given a precise enough signal, it is able to identify a cluster structure in the underlying data.

# Application Two: Fama French Size/Value Factor Portfolios

The Fama-French 25 size and book-to-market portfolios have been studied extnsively.  It is well known that there is a strong factor strcture in these portfolios, so I was curious what would happen if we took the monthly returns from 1926-preset, and put them into the AP model.
![fig](/Post_Images/6_11_2020/famafrench25.PNG)
The algorithm identified 6 clusters:
Cluster 1: SMALL LoBM  
Cluster 2: ME1 BM2, ME1 BM3, ME1 BM4, SMALL HiBM  
Cluster 3: ME2 BM1, ME2 BM2, ME3 BM1, ME3 BM2, ME4 BM1  
Cluster 4: ME2 BM3, ME2 BM4, ME2 BM5, ME3 BM3, ME3 BM4, ME3 BM5, ME4 BM2, ME4 BM3, ME4 BM4, ME4 BM5, ME5 BM4  
Cluster 5: BIG LoBM, ME5 BM2, ME5 BM3  
Cluster 6: BIG HiBM  

This got me thinking, how is AP different than factor analysis.  Here is what it look like if we do a PCA on the same 25 portfolios, and plot the loadings on the factors.  Note that portfolios 1-5 are the smallest 20\% of firms by market capitalization, while portfolios 21-25 are the largest by market capitalization.  Note that going portfolios 1-5 we are increasing book-to-market. 
![fig](/Post_Images/6_11_2020/ff25pca.PNG)
The factor strcture is clear here -- factor one is pretty much constant, and is probably something like the market.  As we increase size, we increase loading on factor two.  As we increase book to market, we decrease the loading on factor three.  This point has been made before for different groups of portfolios, see e.g.
<a href="https://johnhcochrane.blogspot.com/2014/12/level-slope-and-curve-for-stocks.html" title="b1">John Cochrane's blog post</a>.

# Application Three: Fama French Industry Portfolios 

Now I wanted to try the AP model on a set of portfolios that is not well known to have a factor strcture.  The Fama-French industry portfolios:

![fig](/Post_Images/6_11_2020/2017dailyindustry.PNG)
Here are the clusters the algorithm identifies 
Cluster 1: *Agric*  
Cluster 2: Food , Soda , *Beer* , Smoke, Hshld  
Cluster 3: *Toys*  
Cluster 4: *Hlth* , MedEq, Drugs, LabEq  
Cluster 5: Books, Clths, Chems, Rubbr, Txtls, BldMt, Cnstr, *Steel*, FabPr, Mach , ElcEq, Autos, Ships, Mines, PerSv, BusSv, Paper, Boxes, Trans, Whlsl, Rtail, Meals, RlEst  
Cluster 6: *Aero* , Guns  
Cluster 7: *Gold*  
Cluster 8: Coal , *Oil*    
Cluster 9: *Util*  
Cluster 10: *Telcm*  
Cluster 11: Fun  , Hardw, *Softw*, Chips  
Cluster 12: Banks, Insur, *Fin*  , Other  
Industries in italics are the exemplars -- note that which firms get chosen as exemplars depends on the parameters for the affinity propagation model.

These clusters make intuitive sense.  Cluster 8 looks like energy.  Cluster 12 looks like finance.  Cluster 2 looks like consumer non-durable goods.  Some clusters make less sense, like cluster 5, which looks like a mixture of manufacturing, retail/wholesale, basic materials, and real-estate.  

# Application Four: Individual Firms
100 Largest firms traded on the NYSE, AMEX and NASDAQ US stock market.
I was curious how the clusters would change over time so I plotted it for 4 years.  2000, 2008, 2012 and 2017:

Here is the plot for 2000:
![fig](/Post_Images/6_11_2020/2000firmlevel.PNG)  
A few groups really stand out.  The energy firms in the bottom cluster, the tech firms on the far right, the biotech firms on the middle right, the pharmacy firms on the top, and the consumer products near the 'middle'.

Here is the plot for 2008:
![fig](/Post_Images/6_11_2020/2008firmlevel.PNG)
The big difference from the 2000 plot is that (1) All the finance firms are on their own in the far right (2)  All the other firms have been compressed in a big ball.  This is consistent with systematic risk dominating in a criris.

Here's the plot for 2012:
![fig](/Post_Images/6_11_2020/2012firmlevel.PNG)
The big difference from 2012 is that things have spread out again.  The financial frims are still in their own group, but the rest of the firms have spread out as well.

Finally, here is the plot for 2017:
![fig](/Post_Images/6_11_2020/2017firmlevel.PNG)
Now the tech firms have formed their own grou pin the top right.

# Wrap Up 

Based on the simulation results, I think the AP algorithm has something useful to say about the data.  That being said, 