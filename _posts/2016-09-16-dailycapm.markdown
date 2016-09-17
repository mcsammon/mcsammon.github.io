---
layout: page
title:  "Using Daily Data to Improve the CAPM"
---

One of the problems with assessing the CAPM using monthly returns is measurement error in the $$\beta_i$$'s.  Sample size is part of the problem, as even using a 5-year rolling window, you only get 60 observations.  Using the same window with daily data would yield 1,260 observations (assuming 252 trading days per year).  This post explores how the fit of the CAPM changes when using daily data, instead of monthly data.

# The CAPM

The CAPM has a simple prediction: the expected excess return on an asset should be a linear function of the expected excess return on the market:
\begin{equation}
E(R_i)-R_f = \beta_i (E(R_m)-R_f)
 \end{equation}
 Where $$R_i$$ is the return on asset $$i$$, $$R_f$$ is the risk free rate, and $$R_m$$ is the return on the market portfolio. <br />
This model relies on several assumptions, one being that the return on a broad market index (such as the S&P 500) is a good approximation of the return on the aggregate wealth portfolio, $$R_w$$ (which is not observed).  Papers like Jagannathan and Wang (1996) show the fit of the CAPM can be improved by adding better measures of $$R_w$$, such as the return on human capital.  For now, let's assume using $$R_m$$ to approximate $$R_w$$ is valid.

# Testing the CAPM

In the style of Fama-MacBeth (1973), let's fit the model in two stages: The first stage is estimating the $$\beta_i$$ for each test asset, $$i=1,\dots,N$$ in a time-series regression:
\begin{equation}
R_{it}- R_{ft}= \alpha_i + \beta_i (R_{mt} - R_{ft})
\end{equation}
The second stage is relating the betas to expected (average) excess returns, $$\bar{R_i^e}=\overline{R_i-R_f}$$ in the cross-section:
\begin{equation}
\bar{R_i^e}=\alpha_0 + \lambda \beta_i
\end{equation}
where $$\lambda$$ captures the risk premium associated with exposure to the market portfolio.
 If the CAPM were true then $$\alpha_0$$ would equal zero.  Equivalently, if you plotted the $$\lambda \beta_i$$ (predicted return) against $$\bar{R_i^e}$$ (relized return) all the points would lie on a 45 degree line.

# Empirics

Following the suggestion in Lewellen, Nagel and Shanken (2006) I use the 30 Fama-French industry portfolios as test assets.  I get monthly and daily portfolio returns and factor returns from Ken French's data library.  I estimate the $$\beta_i$$ and $$\bar{R_i^e}$$ using data from January 2000 to December 2015.  This assumes that $$\beta_i$$ and expected returns are constant over time, which is not true, but simplifies the interpretation.  Predicted returns and average returns are annualized - for monthly I multiply by 12 and for daily I multiply by 252.  <br />
Below I plot predicted returns against average return (the sample analogue to expected return).  As mentioned above, if the CAPM were true, all the blue dots would lie on the green line. <br />


![fig](/Post_Images/9_16_2016/monthly.png)

The fit is not good, with an $$R^2$$ of only 11% and a statistically significant $$\alpha_0$$.  Using daily data makes a small difference, increasing the $$R^2$$ to 14%, but keeping the significant $$\alpha_0$$:  <br />

![fig](/Post_Images/9_16_2016/daily.png)


# Improving the Fit

The failure of the CAPM has motivated the search for additional factors which explain returns, such as the Fama-French (1993) size and value factors, the momentum factor of Jegadeesh and Titman (1993), the q-Factor model of Hou, Xue and Zhang (2014) and many more.  Let's add the Fama-French size (SMB) and value (HML) factors to improve the fit.  Now, our first stage is:
\begin{equation}
R_{it}- R_{ft}= \alpha_i + \beta_{i,m} (R_{mt} - R_{ft}) +\beta_{i,SMB} SMB_t + \beta_{i,HML} HML_t
\end{equation}
and the second stage is:
\begin{equation}
\bar{R_i^e}=\alpha_0 + \lambda_{m} \beta_{i,m} +\lambda_{SMB} \beta_{i,SMB} + \lambda_{HML} \beta_{i,HML}
\end{equation}
Including these factors improves the $$R^2$$ to 28% in monthly data: <br />
![fig](/Post_Images/9_16_2016/monthly_3.png)
And 33% in daily data: <br />
![fig](/Post_Images/9_16_2016/daily_3.png)
While this is a substantial improvement over using only the market, even daily data does not save the Fama-French 3-factor model, as $$\alpha_0$$ is still significant.  <br />
Using the Fama-French 25 portfolios sorted on size and book-to-market yields a much higher $$R^2$$, but this is not surprising - these factors are designed to price those portfolios.  Using the industry portfolios is much more informative about the models' performance, because these portfolios were not sorted on the characteristics we're using to predict returns.

# Conclusion

The CAPM does not explain the 30 industry portfolios' returns.  Even augmenting the model with the size and value factors, we only explain 28% of the variation of expected monthly return.  <br />
If the CAPM is true, the measurement error problem is not solved by switching to daily data, as $$\alpha_0$$ is still significant (in unreported results, the $$\alpha_i$$ are also jointly significant using the Gibbons, Ross and Shanken test).  A recent paper by Jegadeesh, Noh, Pukthuanthong, Roll and Wang (2015) uses a more sophisticated instrumental variables (IV) technique for estimating $$\beta_i$$ with daily data.  They find, however, that the market risk premium (as well as the size and value premia) are insignificant.  The search for new factors continues.
