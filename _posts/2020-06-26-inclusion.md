---
layout: page
title:  "Index Inclusion vs. Passive Ownership"
---


One concern is that these results are driven by index inclusion effects (see e.g. \cite{elliott2006drives}), rather than the increase in passive ownership associated with index inclusion.  For example, the general consensus is that when a firm is added to an index, its stock returns become more correlated with the stock returns of other firms in that index.  If this changed the distribution of stock returns on non-earnings announcement dates, it could bias my results for the pre-earnings drift, and share of annual volatility on earnings dates.

In this blog post, I am going to (1) Measure index inclusion effects (2) Relate these effects to my results.

# Set Up

The last two subsections showed there is less trading before earnings announcements, and the pre-earnings drift declined. If the total amount of information is not changing over time, we would expect there to be (1) relatively larger returns on earnings days and (2) relatively more trading volume on earnings days.  I propose an empirical measure for testing this hypothesis: the share of total annual volatility occurring on earnings dates.  

Specifically, define the quadratic variation share (QVS) for firm $i$ in year $t$ as: 
\begin{equation}\label{eq:qvs}
QVS_{i,t}=\sum\limits_{\tau=1}^4 r_{i,\tau}^2/\sum\limits_{j=1}^{252} r_{i,j}^2
\end{equation}
where $r$ denotes a market-adjusted daily return. The numerator is the sum of squared returns on the 4 quarterly earnings days in year $t$, while the denominator is the sum of squared returns for all days in year $t$. $QVS$ is going to be my third main measure of price informativeness.  If relatively more information is being learned and incorporated into prices on earnings dates, we would expect larger values of $QVS$.

![fig](/Post_Images/6_19_2020/trend.PNG)

Earnings days make up roughly 1.6\% of trading days, so values of $QVS_{i,t}$ larger than 0.016 imply that earnings days account for a disproportionately large share of total volatility. Figure \ref{fig:baselineedvol} shows the cross-sectional average of $QVS_{i,t}$ by year for all CRSP firms that can be matched to 4 non-missing earnings days in a given year in IBES. Average $QVS$ increased from 3.0\% in 1990 to almost 16\% in 2018.  Figure \ref{fig:baselineedvoldecomp} in the Appendix shows that the increase in $QVS$ was due to a simultaneous increase in the numerator (volatility on earnings days) and a decrease in the denominator (volatility on all other days).

![fig](/Post_Images/6_19_2020/distribution.png)

# S&P 500 Index Addition

Each year, a committee from Standard \& Poor's selects firms to be added/removed from the S\&P 500 index. 
For a firm to be added to the index, it has to meet criteria set out by S\&P, including a sufficiently large market capitalization, a specific industry classification and financial health. Once a firm is added to the S\&P 500 index, it experiences a large increase in passive ownership, as many index funds and ETFs buy the stock.

![fig](/Post_Images/6_19_2020/spfs.PNG)


I find that when a firm is added to the S\&P 500 index, its CAPM beta increases (marginally statistically significant) and its CAPM R-squared increases (statistically significant).  There is no effect on the magnitude of CAPM residuals (i.e. idiosyncratic volatility), but there is an increase in total volatility (statistically significant).  This last fact is consistent with \cite{ben2018etfs} and \cite{chinco2019sound}, where being a member of an ETF basket leads to additional volatility.  

![fig](/Post_Images/6_19_2020/spcapm.PNG)


# Russell 1000/2000 Rebalancing
The Russell 3000 contains approximately the 3000 largest stocks in the United States stock market. Each May, FTSE Russell selects the 1000 largest stocks by float to be members of the Russell 1000, while it selects the next 2000 largest stocks by float to be members of the Russell 2000.\footnote{This rule changed in 2006 -- to reduce turnover between the two indices, Russell now has a bandwidth rule: As long as the firm's market capitalization is within 5\% of the 1000th ranked stock, it will remain in the same index it was in the previous year. Given that this is still a mechanical rule, however, the increases in passive ownership are still plausibly exogenous to firm fundamentals.} Both of these indices are value-weighted, so moving from the 1000 to the 2000 significantly increases the share of passive ownership in a stock. The firm goes from being the smallest firm in an index of large firms, to the biggest firm in an index of small firms, increasing its relative weight by a factor of 10 (see e.g. \cite{appel2016passive}). 

The increase in passive ownership corresponding to S\&P 500 index addition is not a perfect natural experiment because firms are not added at random.  Once added, firms receive increased attention, and added firms may start marketing their stock differently to institutional investors. The increase in passive ownership associated with the Russell reconstitution sidesteps many of these issues, as moving from the 1000 to the 2000 is based on a mechanical rule, rather than committee selection. Further, because the firm's market capitalization shrunk, it is less likely to change the way the firm is marketing itself to institutions.

![fig](/Post_Images/6_19_2020/russellfs.PNG)


For the Russell experiment, firms which switch have a significant increase in CAPM beta, and a marginally significant decrease in CAPM R-squared.  Switching firms also have significant increases in idiosyncratic volatility and total volatility.  Firms which switch from the Russell 1000 to the 2000 are shrinking, so these last two facts are consistent with bad news usually being associated with increased volatility.

![fig](/Post_Images/6_19_2020/russellcapm.PNG)


# Implications

![fig](/Post_Images/6_19_2020/spresults.PNG)

![fig](/Post_Images/6_19_2020/russellresults.PNG)

These facts imply that index inclusion effects are likely working against my results on the share of volatility on earnings days.  If total volatility increases after index addition/rebalancing, the denominator of $QVS$ should increase, and shrink $QVS$.  This may explain why the volatility results are insignificant for the Russell experiment:  In the post period, treated firms had an increase in total volatility that was two times as large as the increase in total volatility for the corresponding firms in the S\&P 500 experiment.

# Wrap Up