---
layout: page
title:  "Who are Amazon's Competitors?"
---

# Motivation

* amazon 84788
* alibaba 14888
* walmart 55976
* jd.com 14655
* priceline 86783
* ebay 86356
* netflix 89393
* aapl 14593
* Google 14542/90319
* facebook 13407 

Source: S&P Capital IQ – they have a large list of competitors from various sources (could be used for any company they cover)

Conjecture: b/c Amazon has become larger (both in size and scope) competitors have become more responsive to amazon news over the past 20 years
Can compute cumulative n-day returns around each earnings announcement window for Amazon and all other firms
Compute covariance matrix of these returns
Look for groups of firms that respond similarly to Amazon’s news (can condition on good/bad news, big/small surprise, etc.)
Maybe upstream firms will respond one way, downstream firms will respond another way, etc.
One issue I’ve found is that industry component may dominate when forming the clusters i.e. all oil firms highly correlated around amazon’s earnings announcements, but that has nothing to do with Amazon – may want to remove industry component before running cluster analysis

# Set Up 

Affinity Propogation 
Affinity Propagation creates clusters 
Trade off of minimizing distance to closest cluster center and minimizing the number of clusters
Input: Sparse covariance matrix [of ex. returns, earnings surprises within a quarter for firms/industries]
How the sparsity works: If two firms are independent conditioning on all others, the corresponding coefficient in the precision matrix (inverse covariance matrix) will be zero. 
Output: exemplars, firms that are most representative of other firms (or whatever the panel unit of observation is), as well as the members of each cluster

# Application One: Simulation

Three factor model with noise, get 4 clusters
![fig](/Post_Images/6_11_2020/3factornoise.PNG)
What if we decrease the volatility of the noise?  Go down to 3 clusters
![fig](/Post_Images/6_11_2020/3factorlessnoise.PNG)
# Application Two: Fama French Size/Value Factor Portfolios

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

![fig](/Post_Images/6_11_2020/2000firmlevel.PNG)

![fig](/Post_Images/6_11_2020/2008firmlevel.PNG)

![fig](/Post_Images/6_11_2020/2012firmlevel.PNG)

![fig](/Post_Images/6_11_2020/2017firmlevel.PNG)

# Wrap Up 