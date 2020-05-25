---
layout: page
title:  "Early vs. Late Resolution of Uncertainty"
---


My new paper, 
<a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3571409">
   ETFs, Learning, and Information in Stock Prices
  </a> studies the effect of introducing an ETF into a model with endogenous information acquisition.  I characterize the conditions where intrdoducing the ETF decreases learning about stock-specific risks, and increase learning about systematic risk.  This provides a foundation for my <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3243910"> job market paper
  </a>, where I link the rise of passive ownership to decreased firm-specific information in stock prices.

   My model mainly builds on two other papers: (1)  
   <a href="https://www.jstor.org/stable/1911659?seq=1#metadata_info_tab_contents">
  A Noisy Rational Expectations Equilibrium for Multi-Asset Securities Markets
  </a> by Anat Admati  and (2)
<a href="https://onlinelibrary.wiley.com/doi/abs/10.3982/ECTA11412">
   A Rational Theory of Mutual Funds' Attention Allocation
  </a> by Kacperczyk, Van Nieuwerburgh and Veldkamp. 

While working through A Rational Theory of Mutual Funds' Attention Allocation, I noticed a seemingly innocuous line "The objective is $$−E[lnE_j[exp(−\rho W_j)]]$$".  For context, the outer expectation is taken with respect to time 0 information, while the inner expectation is taken with respect to time 1 information.  I didn't understand why we needed the $$ln$$ inside the outer expectation i.e. why utility was not just $$-E_0[E_1[exp(-\rho W_j)]]$$.  Reading through the appendix section S.2 I saw that this "[$$ln$$] is a transformation that induces a preference for early resolution of uncertainty."  Still not understanding, I went into and found this line in section 8.2.4 of Information Choice in Macroeconomics and Finance."This formulation of utility
is related to Epstein and Zin’s (1989) preference for early resolution of uncertainty."  This was the last hint I needed to figure things out.  In this post, I will walk through why this transformation introduces a preference for an early resolution of uncertainty, and why this matters. 

<a href="https://en.wikipedia.org/wiki/Epstein%E2%80%93Zin_preferences">
   Wikipedia article
  </a> on Epstein-Zin (1989) preferences. 

 <a href="http://people.bu.edu/sgilchri/teaching/EC%20745%20Fall%202013/Lecture%20Slides/lecture6_recursive_preferences.pdf">
   lecture notes
  </a> by Simon Gilchrist.
    


  \begin{frame}
	\frametitle{Agents' Problems}
	\label{problem}
	Define terminal wealth as: 
	\begin{equation*}
	w_{2,j}=\left(w_{0,j}-\mathds{1}_{informed,j} c\right) +\mathbf{q}_j'(\mathbf{z} - \mathbf{p})
	\end{equation*}
	At time 1, agent $j$ submits demand $\mathbf{q}_j$ to maximize expected utility over time two wealth:
	\begin{equation*}
	U_{1,j}=E_{1,j}[-exp(-\rho w_{2,j})]
	\end{equation*}
	\pause
	At time 0, agent $j$ decides whether or not to pay $c$ and become informed.  If informed, allocates attention $K_{i,j}$'s to maximize time 0 expected utility.  Follow Veldkamp (2011) and Kacperczyk et. al. (2016) and define time 0 objective function as:
	\begin{equation*}
	-E_0[ln(-U_{1,j})]/\rho
	\end{equation*} 
	which simplifies to:
	\begin{equation*}
		U_0 = E_0\left[E_{1,j}[w_{2,j}]-0.5 \rho Var_{1,j}[w_{2,j}] \right]
	\end{equation*}	
\hyperlink{recursive}{\beamerbutton{formulation as recursive utility with infinite EIS}}	\hyperlink{resolution}{\beamerbutton{expected utility}}	
\hyperlink{initialwelath}{\beamerbutton{does initial wealth matter?}}
\end{frame}

 asdf 
\begin{frame}
	\label{recursive}
	\frametitle{Recursive Utility Formulation (1)}
	Start with Epstein-Zin preferences:
	\begin{equation*}
	\begin{split}
	U_t = \left[(1-\beta)c_t^\alpha + \beta \mu_t\left(U_{t+1}\right)^\alpha \right]^{1/\alpha} 
	\end{split}
	\end{equation*}
	where EIS=$1/(1-\alpha)$ and $\mu_t$ is certainty equivalent operator. \\
	\medskip 
	\begin{itemize}
		\item In my setting, all consumption happens at time 2, so set $t=0$.  The risk-free rate is zero, so set $\beta=1$.
		\item Choose the von Neumann-Morgenstern utility index $u(w)=-exp(-\rho w)$.
		\item Following Veldkamp (2011), define the certainty equivalent operator $\mu_t(U_{t+1})=E_t\left[-ln(-U_{t+1})/\rho\right]$. 
		\item Recall: $	U_{1,j}=E_{1,j}[-exp(-\rho w_{2,j})]$.  Wealth is normally distributed so $U_{1,j}=-exp(-\rho E_{1,j}[w_{2,j}]+0.5 \rho^2 Var_{1,j}[w_{2,j}])$
	\end{itemize}
	
\end{frame}

\begin{frame}
	\frametitle{Recursive Utility Formulation (2)}
	Substitute in expression for CE operator:
	\begin{equation*}
	\begin{split}
	U_0 = \left[\mu_0\left(U_{1}\right)^\alpha \right]^{1/\alpha}  \\
	U_0 = \left[ E_0\left[-ln(-U_{1})/\rho\right]^\alpha  \right]^{1/\alpha}  \\
	U_0 = \left[ E_0\left[-ln(exp(-\rho E_{1,j}[w_{2,j}]+0.5 \rho^2 Var_{1,j}[w_{2,j}]))/\rho\right]^\alpha \right]^{1/\alpha}  \\
	U_0 = \left[ E_0\left[ \left(E_{1,j}[w_{2,j}]-0.5 \rho Var_{1,j}[w_{2,j}]\right) \right]^\alpha  \right]^{1/\alpha}  \\
	\end{split}
	\end{equation*}	
	Setting $\alpha=1$ i.e. infinite EIS:
	\begin{equation*}
	U_0 = E_0\left[ \left(E_{1,j}[w_{2,j}]-0.5 \rho Var_{1,j}[w_{2,j}]\right) \right]
	\end{equation*}
	Which matches Equation 6 in Kacperczyk et. al. (2016). 	\hyperlink{problem}{\beamerbutton{back}}
\end{frame}

\begin{frame}
	\frametitle{Recursive Utility Formulation (3)}
	When solving for optimal information choice, need to compute:
	\begin{equation*}
	U_0 = E_0\left[ \left(E_{1,j}[w_{2,j}]-0.5 \rho Var_{1,j}[w_{2,j}]\right) \right]
	\end{equation*}
	We have closed form expressions for $E_{1,j}[w_{2,j}]$ and $Var_{1,j}[w_{2,j}]$:
	\begin{equation*}
	\begin{split}
	\text{Posterior mean}: \quad E[z]=B_0 + B_1 s_j + B_2 p \\
	\text{Posterior Variance}: \quad \hat{\Sigma} = \left(inv(V)+Q \times inv(U) \times Q + inv(S) \right)^{-1} \\
	E_{1,j}[w_{2,j}] = q' (E[z] - p)  \\
	Var_{1,j}[w_{2,j}] = q' \times \hat{\Sigma} \times q
	\end{split}
	\end{equation*}
	where $B_0$, $B_1$, $B_2$, $V$, $Q$, and $U$ are defined as in Admati (1985). Numerically integrate over draws of $s$, $\eta$ and $x$ to compute $U_0$. 
	\hyperlink{problem}{\beamerbutton{back}}
\end{frame}



\begin{frame}
	\frametitle{Expected Utility}
	\label{resolution}
	Suppose we have $n$ independent assets (no systematic risk)
	\begin{itemize}
		\item $	U_0 = E_0\left[ \left(E_{1,j}[w_{2,j}]-0.5 \rho Var_{1,j}[w_{2,j}]\right) \right]$ introduces a preference for the early resolution of uncertainty \textit{and specialization} (Veldkamp, 2011).
		\only<1>{
		\begin{itemize}
			\item Optimal demand: $q=\frac{1}{\rho} \hat{\Sigma}^{-1}\left(\hat{\mu}-p\right)$ where $\hat{\Sigma}^{-1}$ is the posterior covariance matrix and $\hat{\mu}$ is the posterior mean
			%\item Putting optimal demand into the utility function, and setting initial wealth to zero: $U_0 = \frac{1}{2} E_0\left[\left(\hat{\mu}-p\right)' \hat{\Sigma}^{-1}\left(\hat{\mu}-p\right) \right]$
			%\item Posterior mean has distribution $\hat{\mu} \sim N(\mu,\Sigma-\hat{\Sigma})$ where $\mu$ and $\Sigma$ are the prior mean and variance.  This implies that $U_0$ is a multivariate chi-squared distribution.
			%\item Mean of this distribution is: $\frac{1}{2}Tr(\hat{\Sigma}^{-1}\Sigma-I)+\frac{1}{2}\left(\mu-p\right)' \hat{\Sigma}^{-1}\left(\mu-p\right) $ where $Tr(\cdot)$ is the trace of a matrix.
			\item Expected excess portfolio return achieved through learning depends on $cov(q,f-p)$=$E_0\left[q'(f-p)\right]-E_0\left[q\right]'E_0\left[(f-p)\right]$.
			\item Specializing in learning about one asset leads to a high covariance between payoffs and holdings of that asset.  Realized portfolio can, however, deviate substantially from the time 0 expected portfolio.
			\item Learning a little about every risk leads to smaller deviations between the realized and time 0 expected portfolio, but also lowers $cov(q,f-p)$.
		\end{itemize}
	}
		\item Expected utility, $U_{0,j}=E_{0,j}\left[E_{1,j}[-exp(-\rho w_{2,j})]\right]$
		\only<2>{
		\begin{itemize}
			\item $U_{0,j}=E_{0,j}\left[-exp\left(-\rho E_{1,j}[w_{2,j}]+0.5 \rho^2 Var_{1,j}[w_{2,j}]\right) \right]$
			\item Agents are averse to time 1 portfolio uncertainty (i.e. risk that signals will lead them to take aggressive bets), so do not like portfolios that deviate substantially from $E_0\left[q\right]$
			\begin{itemize}
				\item Why?  Utility is a concave function of mean and variance
			\end{itemize}
			\item The utility cost of higher uncertainty from specialization just offsets the utility
			benefit of higher portfolio returns, removing the ``planning benefit'' experienced by the mean-variance specification
			\item Recursive utility investors are not averse to risks resolved before time 2, so specialization is a low-risk strategy.  Lowers time 2 portfolio risk by loading portfolio heavily on an asset whose payoff risk will be reduced by learning.
		\end{itemize}
			}
	\end{itemize}
	\only<3>{
	When solving the model, I don't find any qualitative differences using expected utility.  Not surprising given the results in the appendix of Kacperczyk et. al. (2016).
}
	\hyperlink{problem}{\beamerbutton{back}}		\hyperlink{rhoalpha}{\beamerbutton{risk aversion vs. 1/EIS}}
\end{frame}

\begin{frame}
	\label{rhoalpha}
	\frametitle{Another Way to View the Recursive Formulation}
	\begin{equation*}
	\begin{split}
	V_t = \left((1-\beta)c_t^{1-\rho}+\beta[E_t(V_{t+1}^{1-\alpha})]^{(1-\rho)/(1-\alpha)}\right)^{1/(1-\rho)} \\
	\text{Set $t$=0, $c_0$=0, $\beta=1$:} \quad 	V_0 = \left([E_0(V_{1}^{1-\alpha})]^{(1-\rho)/(1-\alpha)}\right)^{1/(1-\rho)} \\
	\text{Set $\alpha=1$:} \quad   	V_0 = \left(exp[E_0(ln[V_1])]^{(1-\rho)}\right)^{1/(1-\rho)} \\
	\text{Set $\rho=0$:} \quad 	V_0=exp[E_0(ln[V_1])] \\
	\text{This is equivilent to maximizing:} \quad V_0=E_0(ln[V_1]) \\
	\text{In my setting:} \quad V_1=E_1[-exp(-\rho w)] \quad	\text{i.e. utility times -1} \\
	\text{So the final maximization problem is:} \quad V_0=-E_0(ln[-V_1])	
	\end{split}
	\end{equation*}
	$\alpha>\rho$ so agents have a preference for early resolution of uncertainty.  For expected utility, would set $\alpha=0$, and then there would be no preference for early resolution of uncertainty. 	\hyperlink{resolution}{\beamerbutton{back}}
\end{frame}