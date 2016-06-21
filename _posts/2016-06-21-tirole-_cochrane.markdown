---
layout: page
title:  "Two-for-One Tuesday: Tirole(1982) and Cochrane(2002)"
---

Today, I discuss two papers on a similar topic: On the Possibility of Speculation under Rational Expectations, Tirole (1982) and Stocks as Money, Cochrane (2002).

## Overview

Although many authors have written papers testing for and describing bubbles, there is an even more fundamental question - should bubbles exist?  The first paper by Tirole examines bubbles in Rational Expectations Equilibria (REE), while the second paper by Cochrane uses similarities between technology stocks and money to explain the Nasdaq bubble in the late 1990s.

## On the Possibility of Speculation under Rational Expectations, Tirole (1982)

# Speculation
Like bubbles, speculation does not have a unanimous definition.  Tirole presets three definitions: <br />
1) "The Working Theory" (WT): Speculation comes from differences in beliefs and better informed traders make money on average <br />
2) Keynes-Hicks (KH): Speculation comes from differences in risk tolerance and initial positions.  Speculation is like insurance in that it shifts risk from traders with high risk aversion to those with low risk aversion <br />
3) Harrison and Kreps (HK):  The right to resell an asset at any time is valuable.  As a result, traders are willing to pay more for an asset they can resell than an asset they must hold forever. <br />
Tirole's take is that these ideas all have some internal inconsistency.  He establishes conditions on REE where speculation cannot exist. <br />

# Rational Expectations Equilibrium (REE)

The discussion below on REE is based heavily on lecture notes from Marciano Siniscalchi's Microeconomic Theory course.  <br />
Consider an economy with uncertainty.  For simplicity, suppose there are two agents, two possible states and complete markets, with $$x_1$$ ($$x_2$$) denoting a claim on consumption in state 1 (2).  Further, suppose one of the agents is informed, so he knows the state.  <br />
Without loss of generality, suppose the true state is 1, so the informed agent will only demand $$x_1$$.  Given that the uninformed agent must demand the same $$x_1$$ and $$x_2$$ regardless of the true state, the market clearing price of $$x_1$$, $$p_1$$, will be higher than $$p_2$$.  <br />
Now we run into a consistency issue - the uninformed agent should use the higher price of $$x_1$$ as a signal that the true state is 1.  This is fixed by REE, which requires that agents make all possible inferences from prices, and market clear. <br />
In an REE, agents never trade only on differences of information (this will be established more formally in the following section).  The basic point is that rational agents will only trade if the expected gain is positive.  Market clearing, however, requires no expected gains from trade.  So no trade occurs.  <br />  
Consider a simple example: An agent selling an asset.  Suppose it is common knowledge that there are two types of buyers in the market - fully informed and uninformed.  Uninformed buyers have no information about the asset's value, and thus have no expected gains from trade, so they stay out.  Informed buyers will only buy if the price is lower than the asset's true value.  Knowing he will only make a sale if he sets the price too low, the seller decides to stay out of the market as well, and there is no trade.

# Stock Market

Having discussed REE, we can define a stock market as a series of REE.  Suppose the dividend stream $$(d_0, d_1, \dots, d_t, \dots)$$ follows a stochastic process.  Each period, traders get some signal (which varies across traders) about the process.  We will now discuss static and dynamic versions of this model to see how speculation can arise.  

# Static Market

Consider a one-shot economy with a finite number, $$I$$, traders.  The asset is traded at price $$p$$, while the true (stochastic) value is $$\tilde{p}$$.  Trader $$i$$'s realized gain from trade is: $$G^i=(\tilde{p}-p)x^i$$ where $$x^i$$ represents the size of $$i$$'s position (can be negative to indicate shorting).  Utility is concave in $$G^i$$ (risk aversion) and traders maximize expected utility.  The asset is in zero net supply, so market clearing implies: $$\sum_i x^i=0$$. <br />
In this economy, there are two types of information, the private signal $$s_i \in S_i$$ and the information contained in the price $$S(p)$$.  Suppose agents have a common prior $$v$$, and denote the probability of signal $$s^i$$ as $$v^i(s^i)$$ (we need the superscript on $$v$$, as the sets of possible signals might be different across traders, $$S_i \neq S_j$$).

# Gains from Trade

Given that the asset is in zero net supply, we know that $$\sum_i G^i=0$$.  Using the definition of REE, we want to prove that no trader expects to gain from trade. <br />
To trade, an agent must have
\begin{equation}
E(G^i|s^i, S(P))\geq0
\end{equation}
Now, suppose the number of possible signals $$S_i$$ is finite.  Then applying the law of iterated expectations and the definition of expectations for a finite number of states we get:
\begin{equation}
E(G^i|S(p))=\sum\limits_{s^i\in S^i(p)} E(G^i|,s^i,S(p))v^i(s^i|S(p)) = E(E(G^i|s^i,S(p))|S(p))\geq 0
\end{equation}
Now, take expectations of the market clearing condition with respect to $$S(p)$$
\begin{equation}
\sum_i E(G^i|S(p))=0
\end{equation}
Now, recall that all $$i$$ have a common prior.  Equation 3 then implies that $$E(G^i|S(p))=0$$ as all $$i$$ are conditioning on the same information, $$S(p)$$.  Finally, use this, in combination with Equation 2, to get that
\begin{equation}
E(G^i|s^i,S(p))=0
\end{equation}
Given this is true for all $$i$$, no agent expects to gain from trade.  This has big implications - if no agent expects to gain from trade, and traders are risk averse, there will be no trade. <br />
Proving there will be no trade makes speculation a non-starter.  Even in this model, however, we can get speculation by relaxing some of our assumptions.  For example, we could introduce risk-loving traders, impose different priors or make the game "positive sum" by introducing non-rational agents.  

# Dynamic Market

Now suppose the stock can be traded at dates $$t=0,1,2,\dots$$.  Traders are risk neutral and discount the future at rate $$\gamma$$ (this drove me nuts - why doesn't he use $$\beta$$ like everyone else!).  In the absence of short selling, trader $$i$$ is called "active" in the market if his position has changed from last period, or he holds a positive amount of the asset, $$x_t^i$$, but does not hold the entire supply $$\bar{x}$$.  Note: with no expected gains from trade, risk neutral agents might trade in the first period, but would not be active in any future period (to see this just recall the argument made above for the static case). <br />
In this environment, Tirole defines a bubble as the difference between prices and fundamental values:
\begin{equation}
B(s_t^i,p_t) \equiv p_t-F(s_t^i,S_t)
\end{equation}
where $$B$$ is the bubble, $$p$$ is the price, and $$F$$ is the expected discounted value of future dividends. <br />
REE alone is not enough to rule out bubbles.  Bubbles still occur, for example, if traders only compare current price and the distribution of tomorrow's price.  Call this one-period-ahead behavior a myopic REE.

# Myopic REE

Formally, a myopic REE is an REE with short run optimizing behavior.  This means
\begin{equation}
p_t=E[\gamma d_{t+1} + \gamma p_{t+1}| s_t^i ,S_t]
\end{equation}
I refer to this as the Euler equation (even though this is a slight abuse of terminology). <br />
Now, in any finite horizon model there cannot be bubbles.  To see this, consider the last period, $$T$$ - all uncertainty is realized by then so the price must equal the fundamental value.  Now, anticipating that the bubble will "burst" at time $$T$$, no trader is active at $$T-1$$, and so on. <br />
In an infinite period model, the bubble component must follow a discounted martingale:
\begin{equation}
B(s_t^i,S_t)=\gamma^T E\Big[ B(s_{t+T}^i,p_{t+T}|s_t^i,S_t) \Big]
\end{equation}
This can be proved by substituting forward, and applying the law of iterated expectations. <br />
A special case of this model is one of homogeneous information - when all traders have the same signal $$s_i$$ - then the price has no additional information, and $$B(s_t^i,S_t)=B(s_t^j,S_t)$$ for all $$i$$ and $$j$$.  An important corollary of this is that if the REE is fully revealing in the presence of heterogeneous information, then the price contains all the information (in other words, we are back to the special case). <br />
As for how a bubble can arise in a myopic REE, consider the following example: <br />
Suppose there is an asset that pays off a dividend of 1 every period.  If the discount factor is 1/2, the fundamental value is 1 (geometric series with x=1/2, times 1/2).  Using the one period Euler equation we get:
\begin{equation}
p_t=\frac{1}{2}(1+p_{t+1})
\end{equation}
Solving this difference equation, we get that $$p_t=1+\alpha 2^t$$, where $$\alpha 2^t$$ is the bubble term.  Now, consider the special case where $$\alpha=1$$.  <br />
Suppose there are two traders in this economy, A and B, and A starts with the asset.  Then in period 0, A sells to B for 2, at 1 B sells to A for 3, at 2 A sells to B for 5 and so on (already we have a problem, as both agents gains from trade are not finite).  This is consistent with the Euler equation.  To "realize" gains from trade, however, an agent must refuse to repurchase the asset at some future date.  But now both agents always want to refuse, to avoid getting stuck with the asset after paying a high price.  <br />
As you can see, there are many issues with this framework.  The takeaway is that in a myopic REE you have to believe that you will always be able to sell the asset, and you will be able to leave the market in finite time to realize your gains.  This is inconsistent with a finite number of traders (as can be seen by the issues above).  A myopic REE can arise with an infinite number of traders, such as an overlapping generations(OG) model, where each generation leaves the market after realizing their profits.  Solving OG models will be the topic of a future post.

# Fully Dynamic REE

Now, suppose agents want to maximize expected discounted gains from trade, as opposed to just solving their one period Euler equation.  In other words, traders maximize gains from $$t$$ onward, conditional on the information available at time $$t$$ ($$i$$'s signal, $$p_t$$ and the common prior).  This is a fully dynamic REE. <br />
In this model, price bubbles cannot exist.  This proof is pretty involved and I will not present it here, but the intuition is strong: Suppose a bubble has grown in the market.  Given that some traders leave (to realize their gains) a negative-sum game remains for any traders active in the market.  Knowing it's a negative sum game, everyone stays out of the market. So there is no trade, and no bubble.

## Stocks as Money, Cochrane(2002)

# Overview

As we've seen in previous posts, the technology "bubble" presents problems for many standard asset pricing models.  Cochrane establishes that by many definitions, money is a bubble asset - dollar bills yield zero, yet people continue to hold money for its "convenience yield."  Thinking of stocks as money can explain many facets of the technology bubble in the late 1990s, such as high valuations, and high trading volumes.

# Convenience Yield

There are two ways to buy a payoff of 100 dollars one year from now.  You could buy a one-year Treasury bill for about 94 dollars (remember, this is 2000, interest rates were not zero!), or you could just "buy" 100 dollars and hold it for one year.  Any rational investor should buy cheaper Treasury bills rather than overpriced dollars.  Despite this, pretty much everyone holds money, as unlike Treasury bills, money can be used to complete everyday transactions.  The benefit from being able to use money for transactions is its convenience yield.  <br />
Note that the amount which money is overpriced (relative to bonds) is not constant over time.  When there is a large money supply, and few transactions (low demand), we will have lower interest rates, and the "overpricing" goes down (similar to what is happening now in the U.S.).  

# Palm and 3Com

On March 2, 2000, 3Com announced it would spin off Palm.  3Com sold 5% of Palm's shares in an IPO and retained 95% to distribute to 3Com shareholders by the end of the year.  Each 3Com share would get about 1.5 shares of Palm.  As in the 100 dollars example above, there are two ways to buy the same payoff (a share of Palm) - you could buy a share of Palm directly, or you could buy 1/1.5 shares of 3Com.  Also, as above, we have a violation of the law of one price: On the day of the announcement, Palm shares closed at 95.06 while 3Com shares closed at 81.81.  Buying a share of Palm through 3Com cost 54.54 (and you get the rest of 3Com for free).

# What Caused the Mispricing in 3Com and Palm?

Cochrane presents several analogies between 3Com/Palm and money to explain why prices deviated from fundamentals: <br />
1) Turnover and short-term losses -  Dollars turn over faster when interest rates rise (i.e. when dollars become more expensive).  As an aside - this seems like a partial equilibrium argument - my intuition is that interest rates rise because there is low demand for savings, not the other way around.  <br />
Similarly, Palm was expensive, but turnover was high.  About 20% of Palm shares turned over every day in the month after the shares were released.  This implied that the average holding period for Palm stock was fewer than 5 days.  Even if you are paying too much for Palm, the negative daily drift implied by the overpricing amounts to about 0.2% per day.  This small downward drift is drowned out by a daily volatility of 7.5%  (note that this was the same volatility as the S&P 500 index over the whole year).  Any information on the direction of Palm will swamp the small drift and make investing profitable.  <br />
Another point is that the loss on drift over 5 days of 1% is about the same as losses induced by the bid ask spread, commissions, etc.  Given that we don't think people are irrational for being sloppy about transaction costs, it doesn't make sense to claim Palm investors were irrational for "paying" the negative drift.  <br />
2) Price and volume - As mentioned above, there should be a positive correlation between the price of money (interest rate) and volume, as people economize cash holdings.  This also held true for Palm stock, as not only was there big turnover, but dollar volume was large as well. <br />
3) Arbitrage and short sale constraints -  A way to "arbitrage" the difference between money and bonds would be to short dollars and buy bonds.  The problem is, you cannot do this (printing your own money, small denomination bank notes, etc. is illegal).  Similarly, given that shorting Palm was difficult and expensive (more on this below), we expect there to be some spread between the price of Palm and 3Com. <br />
4) Share supply and short sales - Money is more expensive (interest rates are higher) when supply is lower.  Recall that only 5% of Palm's shares were available for trading, and the float (number of shares actively trading) might have been even smaller than that.  Similar to money, Palm's "over valuation" came when the supply was restricted.  <br />
Also, note that shorting can increase the supply of shares (as people borrow and resell to one another).  Palm shorts were about 150% of shares outstanding.  Cochrane shows that as effective share supply (accounting for shorting) increased, overpricing decreased (in line with the money supply and interest rate argument). <br />
5) Lack of substitutes - There are no real substitutes for money (although this has changed a little since 2002 when the paper was written, I would say it is still mostly true).  Similarly, there was no close substitute for buying Palm stock.  The paper shows that 3Com and Palm were not linked at short or long horizons, and there was no profitable way to synthesize Palm with options.  If you wanted exposure to Palm, you had  to buy Palm. <br />
6) Fall of 3Com - On the day of the Palm IPO, 3Com fell 21%.  This is bizarre, as 3Com held 95% of Palm's stock, so a high valuation for Palm should have boosted 3Com.  In the context of the convenience yield argument, however, this drop makes sense.  Before the IPO, the only way to bet on Palm was to buy 3Com, giving 3Com a convenience yield.  After the IPO, traders could buy Palm directly, diminishing 3Com's appeal and it's price.

# The Contribution
Consider 5 benchmark models: <br />
1) Frictionless rational pricing with high earnings growth - recall from Bubbles Part 4 the Gordon growth model: $$\frac{p_t}{d_t}=\frac{1}{r-g}$$.  With sufficiently high $$g$$ we get high prices. <br />
2) Frictionless rational pricing with low risk premia - Same as above, except instead of high $$g$$ we have low $$r$$ <br />
3) Rational bubbles - agents hold stocks for any finite number of periods, but prices grow at least as fast as the discount rate (see discussion in Myopic REE section above).  A simple example is a stock that satisfies: $$p_{t+1}=(1+r)p_t + \epsilon_{t+1}$$, it pays no dividends but does not have $$p_t=0$$.  This will be the topic of a future blog post.  <br />
4) Irrational valuation - agents just put "too high" of a valuation on Palm.  This will also be the topic of a future blog post. <br />
5) Short sale constraints keep out pessimists - similar flavor to the model we saw in the Betting Against Winners paper.  Only the most optimistic traders remain in the market and the price stays high.  <br />
The problem with these models is that they can't explain why every "bubble" episode in history has been accompanied by high trading volume.  The contribution of Cochrane's paper is that thinking of stocks as money gives us a reason why this should be true!  As an aside, there is a more modern paper out by Barberis, Greenwood, Jin and Shleifer (2015) that attempts to explain volume in bubbles, but that will be the topic of a future post. <br />

## The Connection

I think seeing these papers helps understand which assumptions underly Cochrane's analysis: <br />
1) No common prior - People are willing to buy Palm on differences in private information (for example, beliefs on short term price movements).  In Tirole's model, we saw that the price contains all relevant information. <br />
2) Expected gains from trade - In Tirole's model, there are no expected gains from trade, so everyone stays out of the market.  With Cochrane's model, we have volume, so agents must have expected gains from buying Palm.  A possible explanation (that I don't find convincing)  is that agents betting on technology stocks were risk loving. <br />
3) Not a zero sum game - In Tirole's market, trading in the asset was a zero sum game (this is one of the reasons we had no trade).  In Cochrane's model, investors must have believed trading in Palm was not a zero sum game.  This is consistent with the idea that there would always be a "fish" (read: non-rational trader) who will buy overpriced Palm stock in the future. <br />
Common to both papers is the need for short-term behavior to get "bubbles."  In Tirole's analysis, we need myopic agents solving a one-period Euler equation, while in Cochrane's paper we have agents holding Palm stock for 5 days on average.

## Conclusion

I think the takeaway here is the need for short run behavior to have "bubbles" in any model with rational agents. This presents another problem - why don't agents fully optimize?  Future posts will explore explanations of myopic investing behavior.
