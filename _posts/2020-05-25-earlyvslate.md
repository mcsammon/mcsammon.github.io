---
layout: page
title:  "Early vs. Late Resolution of Uncertainty"
---

My new paper, 
<a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3571409">
ETFs, Learning, and Information in Stock Prices
</a> studies the effect of introducing an ETF into a model with endogenous information acquisition.  The ETF has two main competing effects: (1) the ETF makes it easier for investors to take aggressive bets on stock-specific information and (2) the ETF allows investors to directly trade on systematic risk, which cannot otherwise be diversified away.  Which of these forces dominates in equilibrium depends on risk aversion.  If risk aversion is sufficiently high, introducing the ETF decreases learning about stock-specific risks, and increases learning about systematic risk.  The model provides an explanation for the empirical results in my <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3243910"> job market paper </a>, where I link the rise of passive ownership to decreased firm-specific information in stock prices. 

My model mainly builds on two other papers: (1)  
<a href="https://www.jstor.org/stable/1911659?seq=1#metadata_info_tab_contents">
A Noisy Rational Expectations Equilibrium for Multi-Asset Securities Markets
</a> by Anat Admati  and (2) <a href="https://onlinelibrary.wiley.com/doi/abs/10.3982/ECTA11412">
A Rational Theory of Mutual Funds' Attention Allocation
</a> by Kacperczyk, Van Nieuwerburgh and Veldkamp. While working through the second paper, I noticed the following sentence defining the agents' utility function, "The objective is $$−E[lnE_j[exp(−\rho W_j)]]$$".  For context, the outer expectation is taken with respect to time 0 information, while the inner expectation is taken with respect to time 1 information.  I didn't understand why we needed the $$ln$$ inside the outer expectation i.e. why the objective function was not $$-E_0[E_1[exp(-\rho W_j)]]$$ where $$E_t$$ denotes the expectation with respect to the time $$t$$ information set.  Reading through the appendix section S.2 I saw that this $$ln$$, "is a transformation that induces a preference for early resolution of uncertainty."  

Still confused, I re-read chapter 8 of Information Choice in Macroeconomics and Finance by Veldkamp (2011) and found this line in section 8.2.4 explaining what the $$ln$$ is doing: "This formulation of utility
is related to Epstein and Zin’s (1989) preference for early resolution of uncertainty."  This was the last hint I needed.  In this post, I will walk through why this transformation introduces a preference for an early resolution of uncertainty, and why this matters in models with endogenous information acquisition. 

# The Setup

In my model, terminal wealth i.e. wealth at time 2 is defined as: 
$$ w_{2,j}=\left(w_{0,j}-1_{informed,j} c\right) +\mathbf{q_j} (\mathbf{z} - \mathbf{p}) $$
where $$w_{0,j}$$ is initial wealth (which is not going to matter with exponential utility, $$1_{informed,j}$$ is an indicator of whether or not agent $$j$$ decides to become informed and $$c$$ is the cost (in dollars) of becoming informed. $$\mathbf{q_j} (\mathbf{z} - \mathbf{p}) $$ is investor $$j$$'s trading profits: their portfolio $$\mathbf{q_j}$$, times the payoff of each asset $$z$$ minus the price $$p$$.  The bold is denoting that these are vectors, which is needed because there are multiple assets.

At time 1, agent $$j$$ submits demand $$\mathbf{q_j}$$ to maximize expected utility over time two wealth:
$$ U_{1,j}=E_{1,j}[-exp(-\rho w_{2,j})] $$ so they have CARA or exponential utility.

At time 0, agent $$j$$ decides whether or not to pay $$c$$ and become informed.  If informed, allocates attention $$K_{i,j}$$'s to maximize time 0 expected utility.  Define time 0 objective function as:
$$ -E_0[ln(-U_{1,j})]/\rho $$  which simplifies to: $$ U_0 = E_0\left[E_{1,j}[w_{2,j}]-0.5 \rho Var_{1,j}[w_{2,j}] \right] $$.  This simplification comes from the fact that (1) $$w_{2,j}$$ is normally distributed in the model, and (2) $$E[exp(a x)]=exp(a \mu_x + \frac{1}{2}a^2 \sigma_x^2$$ where $$x$$ is a normally distributed random variable, and $$a$$ is a constant.

# Formulation as Recursive Utility

Too see how this transformation, $$ -E_0[ln(-U_{1,j})]/\rho $$, as opposed to regular expected utility $$E_0[U_{1,j}]$$ induces a prefrence for an early resolution of uncertainty, we can set things up as <a href="https://en.wikipedia.org/wiki/Epstein%E2%80%93Zin_preferences">
on Epstein-Zin (1989) </a>  preferences.  While writing this section, I found it helpful to first review these <a href="http://people.bu.edu/sgilchri/teaching/EC%20745%20Fall%202013/Lecture%20Slides/lecture6_recursive_preferences.pdf"> lecture notes </a> by Simon Gilchrist.

Start by writing down Epstein-Zin preferences:
$$	U_t = \left[(1-\beta)c_t^\alpha + \beta \mu_t\left(U_{t+1}\right)^\alpha \right]^{1/\alpha} $$
where the elasticity of intertemporal substitution (EIS)=$$1/(1-\alpha)$$ and $$\mu_t$$ is the certainty equivalent (CE) operator. 


In my setting, all consumption happens at time 2, so set $$t=0$$.  To simplify things, set the net risk-free rate to zero as well, and then we can set $$\beta=1$$.

Choose the von Neumann-Morgenstern utility index $$u(w)=-exp(-\rho w)$$ i.e. the CARA utility described above, we can define the certainty equivalent operator $$\mu_t(U_{t+1})=E_t\left[-ln(-U_{t+1})/\rho\right]$$.  Note that this is just the inverse of the utility function. Recall: $$	U_{1,j}=E_{1,j}[-exp(-\rho w_{2,j})]$$.  Wealth is normally distributed so $$U_{1,j}=-exp(-\rho E_{1,j}[w_{2,j}]+0.5 \rho^2 Var_{1,j}[w_{2,j}])$$

Substituting in the expression for CE operator: 
$$ U_0 = \left[\mu_0\left(U_{1}\right)^\alpha \right]^{1/\alpha}  $$
$$ U_0 = \left[ E_0\left[-ln(-U_{1})/\rho\right]^\alpha  \right]^{1/\alpha}   $$
$$ U_0 = \left[ E_0\left[-ln(exp(-\rho E_{1,j}[w_{2,j}]+0.5 \rho^2 Var_{1,j}[w_{2,j}]))/\rho\right]^\alpha \right]^{1/\alpha}  $$
$$ U_0 = \left[ E_0\left[ \left(E_{1,j}[w_{2,j}]-0.5 \rho Var_{1,j}[w_{2,j}]\right) \right]^\alpha  \right]^{1/\alpha}  $$
	
Setting $$\alpha=1$$ i.e. an infinite EIS:
$$ U_0 = E_0\left[ \left(E_{1,j}[w_{2,j}]-0.5 \rho Var_{1,j}[w_{2,j}]\right) \right] $$
Which matches Equation 6 in Kacperczyk et. al. (2016). 

Another Way to View the Recursive Formulation}
$$ V_t = \left((1-\beta)c_t^{1-\rho}+\beta[E_t(V_{t+1}^{1-\alpha})]^{(1-\rho)/(1-\alpha)}\right)^{1/(1-\rho)} $$

Set $$t$$=0, $$c_0$$=0, $$\beta=1$$: $$ \quad 	V_0 = \left([E_0(V_{1}^{1-\alpha})]^{(1-\rho)/(1-\alpha)}\right)^{1/(1-\rho)} $$

Set $$\alpha=1$$: $$ V_0 = \left(exp[E_0(ln[V_1])]^{(1-\rho)}\right)^{1/(1-\rho)} $$

Set $$\rho=0$$: $$	V_0=exp[E_0(ln[V_1])]  $$

This is equivalent to maximizing: $$ \quad V_0=E_0(ln[V_1]) $$

In my setting: $$ \quad V_1=E_1[-exp(-\rho w)]$$ i.e. utility times -1

So the final maximization problem is: $$ \quad V_0=-E_0(ln[-V_1])	$$

With these preferences, there is a preference for an early resolution of uncertainty if $$\alpha>(1/EIS)$$.  As set up here, $$\alpha=1$$ and $$1/EIS$$=0, so agents have a preference for early resolution of uncertainty.  For expected utility, we would set $$\alpha=0$$, and then there would be no preference for early resolution of uncertainty. 	

# Solving for Optimal Information Choice

When solving for optimal information choice, need to compute:
$$ U_0 = E_0\left[ \left(E_{1,j}[w_{2,j}]-0.5 \rho Var_{1,j}[w_{2,j}]\right) \right] $$
We have closed form expressions for $$E_{1,j}[w_{2,j}]$$ and $$Var_{1,j}[w_{2,j}]$$: 
Posterior mean$$ \quad E[z]=B_0 + B_1 s_j + B_2 p $$
Posterior Variance $$ \quad \hat{\Sigma} = \left(inv(V)+Q \times inv(U) \times Q + inv(S) \right)^{-1} 
E_{1,j}[w_{2,j}] = q' (E[z] - p)  $$
$$ Var_{1,j}[w_{2,j}] = q' \times \hat{\Sigma} \times q $$
where $$B_0$$, $$B_1$$, $$B_2$$, $$V$$, $$Q$$, and $$U$$ are defined as in Admati (1985). Numerically integrate over draws of $$s$$, $$\eta$$ and $$x$$ to compute $$U_0$$. 


# Why this Matters

As I said above, $$	U_0 = E_0\left[ \left(E_{1,j}[w_{2,j}]-0.5 \rho Var_{1,j}[w_{2,j}]\right) \right]$$ introduces a preference for the early resolution of uncertainty and specialization (Veldkamp, 2011).

The optimal is demand: $$q=\frac{1}{\rho} \hat{\Sigma}^{-1}\left(\hat{\mu}-p\right)$$ where $$\hat{\Sigma}^{-1}$$ is the posterior covariance matrix and $$\hat{\mu}$$ is the posterior mean
Expected excess portfolio return achieved through learning depends on $$cov(q,f-p)$$=$$E_0\left[q'(f-p)\right]-E_0\left[q\right]'E_0\left[(f-p)\right]$$.
Specializing in learning about one asset leads to a high covariance between payoffs and holdings of that asset.  Realized portfolio can, however, deviate substantially from the time 0 expected portfolio.
Learning a little about every risk leads to smaller deviations between the realized and time 0 expected portfolio, but also lowers $$cov(q,f-p)$$.

Expected utility, $$U_{0,j}=E_{0,j}\left[E_{1,j}[-exp(-\rho w_{2,j})]\right]$$

$$U_{0,j}=E_{0,j}\left[-exp\left(-\rho E_{1,j}[w_{2,j}]+0.5 \rho^2 Var_{1,j}[w_{2,j}]\right) \right]$$
Agents are averse to time 1 portfolio uncertainty (i.e. risk that signals will lead them to take aggressive bets), so do not like portfolios that deviate substantially from $$E_0\left[q\right]$$

Why?  Utility is a concave function of mean and variance

The utility cost of higher uncertainty from specialization just offsets the utility
benefit of higher portfolio returns, removing the "planning benefit" experienced by the mean-variance specification.  
Recursive utility investors are not averse to risks resolved before time 2, so specialization is a low-risk strategy.  Lowers time 2 portfolio risk by loading portfolio heavily on an asset whose payoff risk will be reduced by learning.
When solving the model, I don't find any qualitative differences using expected utility.  Not surprising given the results in the appendix of Kacperczyk et. al. (2016).

This explains why it is desirable to introduce a preference for an early resolution of uncertainty.  

# Wrap Up

In this post, I showed (1) and (2) why this matters. 