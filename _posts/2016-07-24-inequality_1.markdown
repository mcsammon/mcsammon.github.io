---
layout: page
title:  "Income and Wealth Inequality: The Facts"
---

Income and wealth inequality has been getting mainstream attention, with books like Capital in the Twenty-First Century (Piketty, 2013) selling over 1.5 million copies. This post presents some basic facts about the distribution of income and wealth over the past 15 years.

# Income Inequality

A common "fact" mentioned in discussions on income inequality is that the average CEO makes over 200 times as much as the median worker (see <a href="https://www.glassdoor.com/research/ceo-pay-ratio/">glassdoor</a> for one such example). <br />
While I don't have data to test this directly, we can still get a general idea of how incomes are distributed.  Below, I've tabulated several income percentiles for men aged 18-65 (the 50th percentile is the median):

![income_dist](/Post_Images/7_24_2016/income_dist.PNG)

Over the past 15 years, the 5th, 10th, 25th and 50th percentiles have decreased, while the higher percentiles have increased.  This is why the median has stayed about the same but the mean has increased.  The ACS data actually understates this result, as the income of very wealthy people is replaced with the average income of people with similar characteristics, so you can't identify individuals (i.e. Bill Gates, Tim Cook, etc.).  See <a href="https://cps.ipums.org/cps/topcodes_tables.shtml">here</a> for more details.  <br />
This also means we are not getting the top 1% of the top 1% (i.e. the CEO's).  We can see, however, that the top 1% are earning at least 10x as much as the median household. <br />

Below, I show a frequency distribution of income (weighted by  the "person weight" in the ACS data) for 2001 and 2014:

![2001](/Post_Images/7_24_2016/2001.png)
![2014](/Post_Images/7_24_2016/2014.png)

As you can see, the right tail has become "heavier", with more individuals well above the median.

# Wealth Inequality

People like Tim Cook don't just earn a lot of money, they also accumulate substantial wealth.  For this type of analysis, I can only get very aggregated data (source: <a href="http://www.census.gov/people/wealth/data/disttables.html">census</a>).  The wealth distribution is broken into 5 groups (Q1 being the lowest, and Q5 being the highest).  Below, I plot the evolution of median net worth by group:

![MedianNetWorth](/Post_Images/7_24_2016/MedianNetWorth.PNG)

Similar to income, it has increased for the top groups, and stayed flat or decreased for the bottom groups.  <br />
The median of the top 20% (the 90th percentile) has been flat for the past few years, but the mean has continued to increase:

![MeanNetWorth](/Post_Images/7_24_2016/MeanNetWorth.PNG)

This implies that the net worth of those in the top of Q5 is increasing (if everyone in Q5 had increasing net worth, the median would be growing as well).

# Rates of Return

One of the factors that may drive wealth inequality is that wealth can be invested, and turned into even more wealth.  Below I present two charts showing the total return on housing, stocks and bonds, relative to GDP (source Federal Reserve Economic Data): <br />
![gdpbond](/Post_Images/7_24_2016/gdpbond.png)
![gdphousingstock](/Post_Images/7_24_2016/gdphousingstock.png)

According to the census data above, mean net worth increased by an average of 5.65% per year for the top 20% of households and 3.59% per year for the next 20% of households.  It's interesting that this is close to the average growth rate for housing and stocks over the same period (although this is purely suggestive evidence).

# Future Work

One of the problems with the evidence I've presented is its static nature.  It's true that top 20% are increasing their wealth/income relative to everyone else - but that group isn't necessarily the same people every year.  <br />
According to a <a href="http://fortune.com/2015/03/02/economic-inequality-myth-1-percent-wealth/">Fortune article</a>, "70% of the population will have experienced at least one year within the top 20th percentile of income."  A next step would be to use the Panel Study of Income Dynamics (PSID), which unlike the census tracks the same individuals over time.  The PSID can be used to compute the transition probabilities between income quantiles to understand the dynamic nature of inequality over time.
