---
layout: page
title:  "Mean Reversion"
---

If you believe markets are efficient, then there should be limited predictability in stock returns.  Why?  Suppose returns were predictable: specifically suppose you received some information that the returns of Apple (AAPL) were *certain* to be high in the future.  On this information, you start buying AAPL today, which pushes up the price.  Now, suppose it's not just you who got that information, but all investors -- this is likely true, as long as you are not doing insider trading!  Then everyone will demand AAPL today and push up the price.  In the limit, the price will instantaneously adjust to the good news, and your information would have no predictive power for future stock returns.

In the data, however, return predictability has been well documented (see e.g. *Discount Rates* by John Cochrane), but this predictive power only exists over longer horizons, and is usually attributed to time-variation risk premia.  An example of this would be that at the bottom of a recession, predicted future returns i.e. risk premia are high -- there is a lot of uncertainty about the future path of the economy, so investing in stocks is risky -- but not many investors have capital to put into the stock market, which is why prices stay low and predictability remains. 

In this post, I am going to show how predictability over shorter horizon -- of one month to two minutes -- has changed over the past 100 years.   

# Set Up 

The type of predictability I'm going to be focusing on in this blog post is mean reversion.  One way to measure mean reversion would be with a regression like:
\begin{equation}
r_{(t+n,t+1)}=a_n + \beta_{n}r_{(t,t-n)}  + e_{n,t}
\end{equation}
where $$r_{(t+n,t+1)}$$ is the cumulative return from $$t+1$$ to $$t+n$$, and $$r_{(t,t-n)}$$ is the cumulative return from $$t-n$$ to $$t$$.  Here, $$t$$ always denotes time in trading days.  Suppose $$n=5$$: then this regression is using last week's return to try and predict this week's return.  If mean reversion is high, we would expect $$\beta_n$$ to be high, and the R-squared of this regression to be high.

I am going to run this regression with two sets of data: One is going to be 'low frequency', built up from daily returns on the CRSP value-weighted index from 1927-2018: the horizons will be 1 day, 5-day (one week) and 22-day (one month).  I am also going to use high frequency data, and look at mean reversion over shorter intervals: hourly, 30-min, 15-min, 10-min, 5-min and 2-min.  The high-frequency data I have runs from 1990-2015.

# Results

I run the mean-reversion regression at each horizon, every year, and plot the $$\beta_n$$'s in the figure below:
![fig](/Post_Images/6_6_2020/beta.png)

In all the plots, the red line represents a moving-average of the yearly betas. For the 22-day and 5-day frequency 

From the same regressions, I plot the R-squared i.e. the percent of variation in future returns, $$r_{(t+n,t+1)}$$, explained by past returns $$r_{(t,t-n)}$$.

![fig](/Post_Images/6_6_2020/r2.png)

The R-squared values tell a similar picture to the betas.  The R-squareds at all horizons has pretty much dropped to zero: this means that past returns have almost no predictive power for future returns, at least over these 'short' horizons.

# Wrap Up

Mean reversion at the 1-day level has decreased significantly from the 1970's to today.  At the high-frequency level, things appeared to have changed in stages.  First, mean reversion disappeared at 15 min frequencies, then 10 min, then 5 min and finally 2 min.  