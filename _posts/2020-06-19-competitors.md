---
layout: page
title:  "Cluster Analysis"
---

Who are Amazon's (AMZN) competitors?  This seems like a simple question, but I don't think there is an easy answer.  In the finance literature, competitors are often identified using some definition of industries like SIC or NAICS, but I don't think that will work for AMZN.  What industry is Amazon in?  Books?  General merchandise (Amazon basics)? e-Commerce (Amazon Prime)?  Entertainment (Prime Video/Music)? Business Services (Amazon Web Services i.e. AWS)?  Technology (Alexa, Kindle, Fire, ...)? Or all of the above?

I went on S&P Capital IQ, and their system identified the following competitors for amazon: 

Alibaba (another e-commerce giant)
Walmart (another store that sells almost everything)
jd.com (another e-commerce giant)
Priceline (not sure that amazon is in the hotel/airfare business yet...)
ebay (another e-commerce giant)
Netflix (amazon streams movies and tv shows, and creates original content)
Apple (amazon now makes many tech products: the kindle, fire, alexa, etc.)
Google (another tech giant)
Facebook (not sure that amazon is in the social media business yet...)  

I found this list dissatisfying, so I wanted use different technique to identify similar firms.  My idea was that stock returns could be used to identify groups of similar firms.  Speficially, if firms returns were sufficently correlated with Amazon's returns, after accounting for the effect of common components like the market, then they could be somehow related to Amazon. I settled on using Affinity Propagation, a clustering algorithm which I will describe in the next subsection.

# Set Up 

I am not an expert on cluster analysis, but here is my understanding based on reading the
<a href="https://en.wikipedia.org/wiki/Affinity_propagation" title="b1">Wikipedia page</a>, the 
<a href="https://scikit-learn.org/stable/modules/generated/sklearn.cluster.AffinityPropagation.html" title="b1">Python package documentation</a> and one of the <a href="https://scikit-learn.org/stable/auto_examples/applications/plot_stock_market.html" title="b1">associated examples</a>.

Affinity Propagation is a clustering algorithm i.e. it is an algorithm for grouping data.  The key trade off is minimizing the distance between the closest cluster center (called an *'exemplar'*) and minimizing the number of clusters.  The two extremes of this are (1) Set the distance between all the points and the exemplars to zero by making each data point its own cluster (2) Only have one exemplar.  Which of these forces will dominate depends on some parameters you choose when running the algorithm.

For this blog post, the affinity propagation model will have the following ingredients:

Input: Sparse covariance matrix of stock returns (computed using <a href="https://scikit-learn.org/stable/modules/generated/sklearn.covariance.GraphicalLassoCV.html" title="b1">this python package</a>).  How the sparsity works: If two firms have independent returns conditioning on the returns of all other firms, the corresponding coefficient in the precision matrix (inverse covariance matrix) will be zero. Why do this?  We are looking at the marginal relationship between firms.

Output: Exemplars i.e. the firms that are most representative of other firms, as well as the members of each cluster.  Note that the model chooses the number of clusters.

I am also going to be drawing some plots based on this sparse covariance matrix. We can think of the distance between points on the plot as how useful the firms are for predicting variation in other firms.  These plots are collapsing something that may have many dimensions (e.g. a factor model with more than 2 factors) to just a 2-D picture.   

One last point (that I was wondering when I was doing all this): How is this affinity propagation algorithm different than just grouping on correlation? It ends up doing something similar: the firms within each cluster will for sure be more correlated with each other than with any group of firms outside the cluster.  But the algorithm does some extra work: it tells us the number of clusters we want.

# Application One: Simulation

Before I started working with real data, I wanted to work with simulated data.  This way I could get a better understanding for exactly how the clustering algorithm was working.  I started by simulating the following model: 
\begin{equation}
r_{i,t}=\beta_{i,1} r_{1,t} + \beta_{i,2} r_{2,t} + \beta_{i,3} r_{3,t} + e_{i,t}
\end{equation}
where $$r_{i,t}$$ is the return on stock $$i$$ in period $$t$$, $$\beta_{i,j}$$ is the loading of stock $$i$$ on factor $$j$$, $$r_{j,t}$$ is the return of factor $$j$$ at time $$t$$, and $$e_{i,t}$$ is a firm-specific error term at time $$t$$.

I wanted to bake some clusters into the simulation, so I had 4 groups of firms.  Within each cluster each $$\beta_{i,j}$$ is equal to a constant plus some noise.  So if the average firm in group 1 has a beta of 1 on the first factor, each of the invidiual firms will have betas normally distributed around 1 with some positive variance.  I add this noise to the betas because if you try to simulate a model with constant factor loadings, covariance matrix can end up too close to singular.


AP Model usually correctly groups firms in the same cluster, but may split clusters into smaller sub-clusters. Depends on calibration parameters.
More noise -> more clusters
More dispersion in underlying factor loadings -> fewer clusters

Three factor model with noise, get 4 clusters
![fig](/Post_Images/6_11_2020/3factornoise.PNG)
Correctly identifies 4 clusters, but some firms get grouped incorrectly

What if we decrease the volatility of the noise? 
![fig](/Post_Images/6_11_2020/3factorlessnoise.PNG)
Incorrectly identifies 5 clusters, mostly done by splitting up "correct" clusters 

What if we make beta noise independent i.e. make the betas $$i.i.d.$$ for each factor, and factor loadings between clusters more dispersed? And reduce noise?  Then can get all correct!  This convinced me that the algorithm had some use: when given a precise enough signal, it is able to identify a cluster strcture in the underlying data.

# Application Two: Fama French Size/Value Factor Portfolios

FF 1926-present monthly
![fig](/Post_Images/6_11_2020/famafrench25.PNG)
Cluster 1: SMALL LoBM
Cluster 2: ME1 BM2, ME1 BM3, ME1 BM4, SMALL HiBM
Cluster 3: ME2 BM1, ME2 BM2, ME3 BM1, ME3 BM2, ME4 BM1
Cluster 4: ME2 BM3, ME2 BM4, ME2 BM5, ME3 BM3, ME3 BM4, ME3 BM5, ME4 BM2, ME4 BM3, ME4 BM4, ME4 BM5, ME5 BM4
Cluster 5: BIG LoBM, ME5 BM2, ME5 BM3
Cluster 6: BIG HiBM

![fig](/Post_Images/6_11_2020/ff25pca.PNG)
<a href="https://johnhcochrane.blogspot.com/2014/12/level-slope-and-curve-for-stocks.html" title="b1">https://stockmarketjumps.com/</a>

# Application Three: Fama French Industry Portfolios 

![fig](/Post_Images/6_11_2020/2017dailyindustry.PNG)
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

industries in italics are the exemplars -- note that which firms get chosen as exemplars depends on the parameters for the affinity propagation model.

# Application Four: Individual Firms
100 Largest firms traded on the NYSE, AMEX and NASDAQ US stock market
![fig](/Post_Images/6_11_2020/2000firmlevel.PNG)

![fig](/Post_Images/6_11_2020/2008firmlevel.PNG)

![fig](/Post_Images/6_11_2020/2012firmlevel.PNG)

![fig](/Post_Images/6_11_2020/2017firmlevel.PNG)

# Wrap Up 