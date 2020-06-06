---
layout: page
title:  "Mean Reversion"
---

If you believe in efficient markets, then there should not be any predictability in stock returns.  Now, predictability in stock returns has been well documented (see e.g. *Discount Rates* by John Cochrane), but really only over longer horizons.  In this post, I am going to show how predictability over shorter horizons has changed with respect to a particular type of predictability: mean reversion.   

# Set Up 

\begin{equation}
r_{(t+n,t+1)}=a_n + \beta_{n}r_{(t,t-n)}  + e_{n,t}
\end{equation}
where $$r_{(t+n,t+1)}$$ is the cumulative return from $$t+1$$ to $$t+n$$,  and $$r_{(t,t-n)} is the cumulative return from $$t-n$$ to $$t$$.  Here, $$t$$ always denotes time in trading days.  Suppose $$n=5$$, then this regression is using last week's return to try and predict this week's return.

I am going to do two sets of predictions.  One is going to be 'low frequency' with daily returns: so this will be 1 day, 5-day (one week) and 22-day (one month).  I use the crsp value weighted index, so this data goes from 1927-2018.  I am also going to tap into high frequency data, and look at mean reversion over shorter intervals: hourly, 30-min, 15-min, 10-min, 5-min and 2-min.  This data runs from 1990-2015.

# Results

![fig](/Post_Images/6_6_2020/beta.png)

![fig](/Post_Images/6_6_2020/r2.png)

# Wrap Up

