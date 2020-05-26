---
layout: page
title:  "Early vs. Late Resolution of Uncertainty"
---

My new paper, 
<a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3571409">
ETFs, Learning, and Information in Stock Prices
</a> studies the effect of introducing an ETF into a model with endogenous information acquisition.  Introducing the ETF has two competing effects on learning: (1) the ETF makes it easier for investors to take aggressive bets on stock-specific information, making it more attractive to learn about stock-specific risks (2) the ETF allows investors to directly trade on systematic risk, which cannot otherwise be diversified away.  This makes it more attractive to learn about systematic risk and makes it less attractive to pay a fixed cost and becoming informed at all.  

Which of these forces dominates in equilibrium depends on the economy's risk bearing capacity, a function of the share of agents who decide to become informed and risk aversion.  If risk aversion is sufficiently high, introducing the ETF decreases learning about stock-specific risks, increases learning about systematic risk and decreases the share of agents who become informed.  The model provides an explanation for the empirical results in my <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3243910"> job market paper</a>, where I link the rise of passive ownership to decreased firm-specific information in stock prices. 

My model mainly builds two papers: (1) <a href="https://www.jstor.org/stable/1911659?seq=1#metadata_info_tab_contents"> A Noisy Rational Expectations Equilibrium for Multi-Asset Securities Markets </a> by Anat Admati  and (2) <a href="https://onlinelibrary.wiley.com/doi/abs/10.3982/ECTA11412"> A Rational Theory of Mutual Funds' Attention Allocation
</a> by Kacperczyk, Van Nieuwerburgh and Veldkamp. While working through the second paper, I noticed the following sentence defining the agents' objective function when deciding how to allocate their limited attention, *"The objective is $$−E[lnE_j[exp(−\rho W_j)]]$$."*  For context, the outer expectation is taken with respect to time 0 information, while the inner expectation is taken with respect to time 1 information.  Going forward, I will use $$E_t$$ to denote the expectation with respect to the time $$t$$ information set.  

I didn't understand why the authors put the $$ln$$ inside the outer expectation i.e. why the objective function was not $$-E_0[E_1[exp(-\rho W_j)]]$$.  Reading through the Appendix of the paper, I saw that putting this $$ln$$ inside the outer expectation, *"is a transformation that induces a preference for early resolution of uncertainty."*  

Still confused, I re-read chapter 8 of Information Choice in Macroeconomics and Finance (Veldkamp (2011)) and found this line in section 8.2.4 explaining what the $$ln$$ is doing: *"This formulation of utility
is related to Epstein and Zin’s (1989) preference for early resolution of uncertainty."*  This was the last hint I needed to put the pieces together.  In this post, I will walk through why this transformation introduces a preference for an early resolution of uncertainty, and why this matters in models with endogenous information acquisition. 

# The Setup

In my model, terminal wealth i.e. wealth at time 2 is defined as: 
$$ w_{2,j}=\left(w_{0,j}-1_{informed,j} c\right) +\mathbf{q_j} (\mathbf{z} - \mathbf{p}) $$
where $$w_{0,j}$$ is initial wealth, $$1_{informed,j}$$ is an indicator of whether or not agent $$j$$ decides to become informed and $$c$$ is the cost (in dollars) of becoming informed. If an agent decides to become informed, they get a signal at time 1 about the asset payoffs, and the precision of this signal depends on how they allocate their limited attention.  $$\mathbf{q_j} (\mathbf{z} - \mathbf{p}) $$ is investor $$j$$'s trading profits: their portfolio $$\mathbf{q_j}$$, times the payoff of each asset $$\mathbf{z}$$ minus the price $$\mathbf{p}$$.  The bold typeface denotes a vector, which is needed because there are multiple risky assets.

At time 1, agent $$j$$ submits demand $$\mathbf{q_j}$$ to maximize expected utility over time two wealth:
$$ U_{1,j}=E_{1,j}[-exp(-\rho w_{2,j})] $$, so investors have Constant Absolute Risk Aversion (CARA) or exponential utility at time 1, with risk aversion $$\rho$$.

At time 0, agent $$j$$ decides whether or not to pay $$c$$ and become informed.  If informed, agent $$j$$ allocates attention to maximize time 0 expected utility.  In line with Kacperczyk et. al. (2016), I define agents' time 0 objective function as: $$ -E_0[ln(-U_{1,j})]/\rho $$  which simplifies to: $$ U_0 = E_0\left[E_{1,j}[w_{2,j}]-0.5 \rho Var_{1,j}[w_{2,j}] \right] $$.  This simplification comes from the fact that (1) $$w_{2,j}$$ is normally distributed in the model, and (2) $$E[exp(a x)]=exp(a \mu_x + \frac{1}{2}a^2 \sigma_x^2)$$ where $$x$$ is a normally distributed random variable with mean $$\mu_x$$ and standard deviation $$\sigma_x$$, and $$a$$ is a constant.

# Formulation as Recursive Utility

Too see how the log transformation, $$ -E_0[ln(-U_{1,j})]/\rho $$, induces a preference for an early resolution of uncertainty relative to expected utility $$E_0[U_{1,j}]$$  we can follow the hint in Veldkamp (2011) and cast preferences as recursive utility a la Epstein-Zin (1989).

Start by writing down the formulation of Epstein-Zin preferences on the <a href="https://en.wikipedia.org/wiki/Epstein%E2%80%93Zin_preferences">
Wikipedia Page </a> :
$$	U_t = \left[(1-\beta)c_t^\alpha + \beta \mu_t\left(U_{t+1}\right)^\alpha \right]^{1/\alpha} $$
where the elasticity of intertemporal substitution (EIS)=$$1/(1-\alpha)$$ and $$\mu_t$$ is the certainty equivalent (CE) operator.   Note, the Wikipedia page labels uses $$\rho$$ instead of $$\alpha$$, but I've re-labeled it to avoid confusion with risk aversion.

In my setting, all consumption happens at time 2, so let's simplify $$U_t$$ from the perspective of $$t=0$$.  To further simplify things, set $$\beta=1$$.

Choose the von Neumann-Morgenstern utility index $$u(w)=-exp(-\rho w)$$ i.e. the CARA utility at time 1 described above. We can then define the certainty equivalent operator $$\mu_t(U_{t+1})=E_t\left[-ln(-U_{t+1})/\rho\right]$$.  This $$\mu_t$$ is just the inverse function of the von Neumann-Morgenstern utility index. It makes sense to call this a certainty equivalent operator because it returns the amount of dollars for sure that would yield the same utility as the risky investment. Recall that $$	U_{1,j}=E_{1,j}[-exp(-\rho w_{2,j})]$$ and   wealth is normally distributed so $$U_{1,j}=-exp(-\rho E_{1,j}[w_{2,j}]+0.5 \rho^2 Var_{1,j}[w_{2,j}])$$

Starting with setting $$\beta=0$$ and $$c_1=0$$: $$ U_0 = \left[\mu_0\left(U_{1}\right)^\alpha \right]^{1/\alpha}  $$

Substituting in the expression for the CE operator:  $$ U_0 = \left[ E_0\left[-ln(-U_{1})/\rho\right]^\alpha  \right]^{1/\alpha}   $$

Putting in our expression for $$U_1$$: $$ U_0 = \left[ E_0\left[-ln(exp(-\rho E_{1,j}[w_{2,j}]+0.5 \rho^2 Var_{1,j}[w_{2,j}]))/\rho\right]^\alpha \right]^{1/\alpha}  $$

Simplifying: $$ U_0 = \left[ E_0\left[ \left(E_{1,j}[w_{2,j}]-0.5 \rho Var_{1,j}[w_{2,j}]\right) \right]^\alpha  \right]^{1/\alpha}  $$
	
Setting $$\alpha=1$$ i.e. an infinite EIS:
$$ U_0 = E_0\left[ \left(E_{1,j}[w_{2,j}]-0.5 \rho Var_{1,j}[w_{2,j}]\right) \right] $$

which matches Equation 6 in Kacperczyk et. al. (2016)! This shows that we can derive their utility function from Epstein-Zin preferences, but does make it totally clear what this transformation has to do with an early vs. late resolution of uncertainty. 

# Another Way to View the Recursive Formulation

Start with the version of Epstein-Zin in <a href="http://people.bu.edu/sgilchri/teaching/EC%20745%20Fall%202013/Lecture%20Slides/lecture6_recursive_preferences.pdf"> Gilchrist's lecture notes</a> (these were very helpful when I first learned about recursive utility!): $$ V_t = \left((1-\beta)c_t^{1-\rho}+\beta[E_t(V_{t+1}^{1-\alpha})]^{(1-\rho)/(1-\alpha)}\right)^{1/(1-\rho)} $$

Set $$t=0$$, $$c_0=0$$, $$c_1=0$$, $$\beta=1$$: $$ 	V_0 = \left([E_0(V_{1}^{1-\alpha})]^{(1-\rho)/(1-\alpha)}\right)^{1/(1-\rho)} $$

Notice that $$c^{1-alpha}$$ is a version of Constant Relative Risk Aversion (CRRA) utility. CRRA utility simplifies to log utility if risk aversion is equal to 1.
So, with this in mind, set $$\alpha=1$$: $$ V_0 = \left(exp[E_0(ln[V_1])]^{(1-\rho)}\right)^{1/(1-\rho)} $$

Set $$\rho=0$$ (i.e. infinite EIS as we did above): $$	V_0=exp[E_0(ln[V_1])]  $$

This is equivalent to maximizing: $$ \quad V_0=E_0(ln[V_1]) $$ because $$exp(x)$$ is a monotone function.

In my setting: $$ \quad V_1=E_1[exp(-\rho w)]$$ i.e. time 1 utility times -1

So the final maximization problem is: $$ \quad V_0=-E_0(ln[-V_1])	$$

With Epstein-Zin, there is a preference for an early resolution of uncertainty if $$\alpha>(1/EIS)$$.  As set up here, $$\alpha=1$$ and $$1/EIS=0$$, so agents have a preference for early resolution of uncertainty.  For expected utility, we would set $$\alpha=0$$, and then there would be no preference for early resolution of uncertainty.

# Why this Matters

As I said above, $$	U_0 = E_0\left[ \left(E_{1,j}[w_{2,j}]-0.5 \rho Var_{1,j}[w_{2,j}]\right) \right]$$ introduces a preference for the early resolution of uncertainty and specialization (Veldkamp, 2011).

The intuitive way to see this is that increases in expected variance, $$ E_0\left[ Var_{1,j}[w_{2,j}]\right)$$, linearly decrease utility.  With expected utility $$-E_0[E_1[exp(-\rho w)]]$$ simplifies to $$-E_0[exp\left(-\rho E_{1,j}[w_{2,j}]+0.5 \rho^2 Var_{1,j}[w_{2,j}]\right)]$$

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