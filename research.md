---
layout: page
title: Research
permalink: /research/
order: 1
---

<style>
  /* Section headings */
  h2.section-header {
    margin-top: 2rem;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 0.25rem;
  }

  /* Paper titles */
  h3.paper-title {
    font-size: 1.05rem;
    font-weight: 600;
    margin-bottom: 0.1rem;
    margin-top: 1.2rem;
  }

  /* Coauthor / status line */
  p.paper-meta {
    margin: 0 0 0.25rem 0;
    font-size: 0.9rem;
    color: #555;
  }

  /* Abstract toggle styling */
  details.abstract-toggle {
    margin: 0.25rem 0 0.75rem 0;
  }
  details.abstract-toggle > summary {
    cursor: pointer;
    display: inline-block;
    padding: 4px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f7f7f7;
    font-size: 0.9rem;
    list-style: none;
  }
  details.abstract-toggle > summary::-webkit-details-marker {
    display: none;
  }

  /* Abstract text */
  details.abstract-toggle > div {
    margin-top: 0.5rem;
    font-size: 0.95rem;
  }
</style>

<script>
// Change "Show abstract" <-> "Hide abstract" dynamically
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("details.abstract-toggle").forEach(function (det) {
    const summary = det.querySelector("summary");
    const original = "Show abstract";
    const open = "Hide abstract";

    if (!summary) return;

    // Initialize label
    summary.textContent = det.open ? open : original;

    det.addEventListener("toggle", function () {
      summary.textContent = det.open ? open : original;
    });
  });
});
</script>

## <span class="section-header">Working Papers</span>

<h3 class="paper-title">Who Clears the Market When Passive Investors Trade? (Updated 11/2025)</h3>
<p class="paper-meta">Joint with John J. Shim &mdash; Revise and Resubmit at <em>The Review of Financial Studies</em></p>
<p>
  <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4777585" title="b1">SSRN Link</a>
</p>
<details class="abstract-toggle">
  <summary>Show abstract</summary>
  <div>
    We find that firms are the primary sellers who clear the market for index fund buying, providing shares at a nearly one-for-one rate. Most demand-side institutions trade in the same direction as index funds rather than accommodating passive demand. We use two instruments for index fund demand and show that firms causally respond to exogenous passive demand, with prices serving as the coordinating mechanism. Firms satisfy passive demand mostly through non-primary market issuance, for example through employee stock-based compensation. Our results suggest that passive investing has systematically supplied capital to firms by enabling equity issuance over the last two decades.
  </div>
</details>

<h3 class="paper-title">Categorical Processing in a Complex World (Updated 7/2025)</h3>
<p class="paper-meta">Joint with Thomas Graeber and Christopher Roth</p>
<p>
  <a href="https://papers.ssrn.com/abstract=5366458" title="b1">SSRN Link</a>
</p>
<details class="abstract-toggle">
  <summary>Show abstract</summary>
  <div>
    Most news stories contain both granular quantitative information and coarse categorizations. For instance, company earnings are typically reported as a dollar figure alongside categorizations, such as whether earnings beat or missed market expectations. We study the hypothesis that when a decision is harder, people rely more on easier-to-process signals: people still discriminate between coarse categories but distinguish less granularly within them, creating higher sensitivity around category thresholds but lower sensitivity elsewhere. Using stock market reactions to earnings announcements, we document that hard-to-value stocks are associated with a more pronounced S-shaped response pattern around category thresholds. Experiments that exogenously manipulate the problem difficulty provide supporting causal evidence in individual investor behavior. We then exploit variation in investor familiarity with earnings surprises of different sizes to show that returns exhibit greater sensitivity in regions with more historical density.
  </div>
</details>

<h3 class="paper-title">Retail Investors' Contrarian Behavior Around News and the Momentum Effect (Updated 7/2025)</h3>
<p class="paper-meta">Joint with Patrick Luo, Enrichetta Ravina and Luis M. Viceira</p>
<p>
  <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3544949" title="b1">SSRN Link</a>
</p>
<details class="abstract-toggle">
  <summary>Show abstract</summary>
  <div>
    Using a large and representative panel of U.S. brokerage accounts, we show that retail investors trade as contrarians after large earnings surprises, especially for loser stocks, and that such contrarian trading contributes to price momentum and post earnings announcement drift (PEAD). We show that extreme return streaks and surprises are not enough for stocks to exhibit PEAD and momentum and that the intensity of contrarian retail trading plays a key role: the PEAD of loser stocks with bad earnings surprises becomes increasingly more negative as retail buying pressure increases, and the PEAD of the stocks with the highest past returns and largest earnings surprises is the most positive for the stocks with the biggest net retail outflow. Finer sorts confirm the results, as do sorts by firm size and institutional ownership level. Younger and more attentive individuals are more likely to be contrarian, and a firm’s dividend yield, leverage, size, book to market, and analyst coverage are associated with the fraction of contrarian trades they face around earnings announcements. The disposition effect and stale limit orders, while present in our sample, do not explain our results. Our findings are consistent with investors’ conservatism, sticky beliefs, and cognitive uncertainty, as well as an incorrect belief in the Law of Small Numbers.
  </div>
</details>

<h3 class="paper-title">What Triggers National Stock Market Jumps? (Updated 4/2025)</h3>
<p class="paper-meta">Joint with Scott Baker, Nicholas Bloom and Steven Davis</p>
<p>
  <a href="/images/big_jumps.pdf" target="_blank">A copy of the paper can be found here</a>
  &nbsp;|&nbsp;
  <a href="https://sites.google.com/view/stock-market-jumps/home" title="b1">View our data</a>
</p>
<details class="abstract-toggle">
  <summary>Show abstract</summary>
  <div>
    We examine next-day newspaper accounts of large daily jumps in 19 national stock markets to assess their proximate cause, clarity as to cause, and geographic source. Our sample of over 8,000 jumps, reaching back to 1900 for the United States, yields several novel findings. First, jumps have become more grounded in readily perceived news developments over the past century. Second, news about monetary policy and government spending accounts for a highly disproportionate share of upward jumps. Third, upward jumps attributed to monetary policy and government spending shocks are much more likely after a stock market crash. In this sense, the “Fed put” emerged decades before the 1990s, characterizes fiscal policy as well, and extends to other countries. Fourth, jumps triggered by monetary policy foreshadow much lower volatility than other jumps. Finally, leading newspapers attribute 38 percent of jumps in their own national stock markets to U.S. economic and policy developments. The U.S. role in this regard dwarfs that of Europe and China.
  </div>
</details>

<h3 class="paper-title">Do Active Funds Do Better in What They Trade? (Updated 12/2023)</h3>
<p class="paper-meta">Joint with John J. Shim</p>
<p>
  <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4624934" title="b1">SSRN Link</a>
  &nbsp;|&nbsp;
  <a href="/images/replication_code.zip" target="_blank">Download Replication Code</a>
</p>
<details class="abstract-toggle">
  <summary>Show abstract</summary>
  <div>
    We develop two new measures to quantify active fund decisions at the position level. Our measures are designed to separate flow-based passive scaling from active rebalancing decisions. We find that additive active rebalancing &mdash; both for existing and new positions &mdash; predicts higher stock-level alpha over the following quarter. We show our results are not driven by mechanical price pressure, and provide evidence that funds may trade on forecasts for future earnings. Finally, we aggregate our stock-level measure to the portfolio level and show that actively adding to positions translates to outsized returns for fund investors.
  </div>
</details>

---

## <span class="section-header">Publications</span>

<h3 class="paper-title">Index Rebalancing and Stock Market Composition: Do Index Funds Incur Adverse Selection Costs? (Accepted at the Journal of Financial Economics, Updated 9/2025)</h3>
<p class="paper-meta">Joint with John J. Shim</p>
<p>
  <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5080459" title="b1">SSRN Link</a>
</p>
<details class="abstract-toggle">
  <summary>Show abstract</summary>
  <div>
    Value-weighted indexes must rebalance in response to stock market composition changes, e.g., issuance, buybacks, and IPOs. In doing so, existing index funds implicitly engage in market timing. Index funds' long-short rebalancing portfolios have an annualized return of -4.67% and load negatively on value and profitability factors. We estimate these trades impose a 47–70 bps annual index-level performance drag. We explore alternative value-weighted indexes that rebalance less and delay responding to compositional changes. Despite still closely tracking the market, these indexes improve market timing and lower trading costs, saving 50 bps annually, an order of magnitude greater than index fund fees.
  </div>
</details>

<h3 class="paper-title">Primary Capital Market Transactions and Index Funds (Accepted at RAPS, Updated 7/2025)</h3>
<p class="paper-meta">Joint with Chris Murray</p>
<p>
  <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4929872" title="b1">SSRN Link</a>
</p>
<details class="abstract-toggle">
  <summary>Show abstract</summary>
  <div>
    We document how mechanical buying by CRSP-index-tracking funds five days post IPO affects stock returns and IPO deal structure. Using a difference-in-differences design, we show that expected indexer demand causes Fast Track IPOs to outperform their non-Fast Track counterparts by over five percentage points, peaking at the index inclusion date and reverting significantly within three weeks. Anticipated CRSP index inclusion also affects IPO terms, with Fast Track IPOs raising 6% more capital. Our findings support a proposed index rule change to eliminate a \$5.8 billion "shadow tax" paid to intermediaries by index fund investors and firms raising capital through IPOs.
  </div>
</details>

<h3 class="paper-title">The Retail Habitat (Journal of Financial Economics, 10/2025)</h3>
<p class="paper-meta">Joint with Toomas Laarits</p>
<p>
  <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4262861" title="b1">SSRN Link</a>
  &nbsp;|&nbsp;
  <a href="https://www.sciencedirect.com/science/article/abs/pii/S0304405X25001527" title="b1">Publisher Link</a>
</p>
<details class="abstract-toggle">
  <summary>Show abstract</summary>
  <div>
    Retail investors trade hard-to-value stocks. We document a large and persistent spread in the stock-level intensity of retail trading, even allowing for known biases in the attribution of retail trades. Stocks with a high share of retail-initiated trades exhibit higher shares of intangible capital, longer duration cash flows, and a higher likelihood of being mispriced. Consistent with retail-favored stocks being harder to value, we document that these stocks are less sensitive to earnings news and more sensitive to retail order imbalances. Such segmentation of trading intensity arises in a model where informed investors face a trade-off between the benefits of hiding their trades within noisy retail investor order flow and the costs of producing information about the fundamentals of hard-to-value stocks.
  </div>
</details>

<h3 class="paper-title">The Disappearing Index Effect (Journal of Finance, 12/2024)</h3>
<p class="paper-meta">Joint with Robin Greenwood</p>
<p>
  <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4649650" title="b1">SSRN Link</a>
  &nbsp;|&nbsp;
  <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/jofi.13410" title="b1">Publisher Link</a>
</p>
<details class="abstract-toggle">
  <summary>Show abstract</summary>
  <div>
    The abnormal return associated with a stock being added to the S&amp;P 500 has fallen from an average of 7.4% in the 1990s to less than 1% over the past decade. This has occurred despite a significant increase in the share of stock market assets linked to the index. A similar pattern has occurred for index deletions, with large negative abnormal returns during the 1990s, but only 0.1% between 2010 and 2020. We investigate the drivers of this surprising phenomenon and discuss implications for market efficiency. Finally, we document a similar decline in the index effect among other families of indices.
  </div>
</details>

<h3 class="paper-title">Passive Ownership and Price Informativeness (Management Science, 9/2024)</h3>
<p class="paper-meta"></p>
<p>
  <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3243910" title="b1">SSRN Link</a>
  &nbsp;|&nbsp;
  <a href="https://pubsonline.informs.org/doi/abs/10.1287/mnsc.2023.00836" title="b1">Publisher Link</a>
  &nbsp;|&nbsp;
  <a href="https://www.dropbox.com/scl/fi/4py049lsl5qmhmot20e1b/replication_file_sammon_2024.zip?rlkey=w62s8dgavwv983rzuo6lkf8u9&dl=0">Replication Package</a>
</p>
<details class="abstract-toggle">
  <summary>Show abstract</summary>
  <div>
    I show that passive ownership negatively affects the degree to which stock prices anticipate earnings announcements. Estimates across several research designs imply that the rise in passive ownership over the last 30 years has caused the amount of information incorporated into prices ahead of earnings announcements to decline by approximately one-quarter of its whole-sample mean and one-sixth of its whole-sample standard deviation.
  </div>
</details>

<h3 class="paper-title">The Passive-Ownership Share Is Double What You Think It Is (Journal of Financial Economics, 7/2024)</h3>
<p class="paper-meta">Previously circulated with the title <em>Excess Reconstitution-Day Volume</em> &mdash; Joint with Alex Chinco</p>
<p>
  <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4188052" title="b1">SSRN Link</a>
  &nbsp;|&nbsp;
  <a href="https://www.sciencedirect.com/science/article/pii/S0304405X24000837?casa_token=IsqHxdi0XGEAAAAA:CDTB-LeCHeeyunaYfGTIIETXHJBe56MCtS_5BHABF7OyoeUIxoldoZrmIHTK9UsZhWvV3vYg00M" title="b1">Publisher Link</a>
  &nbsp;|&nbsp;
  <a href="https://www.dropbox.com/scl/fi/psgr7dfx4i7d1vwybkrzy/recon_events.zip?rlkey=aj7wi2kav97k9tyim5gysmg5c&st=r7wvm1sz&dl=0">Reconstitution Event Data</a>
</p>
<details class="abstract-toggle">
  <summary>Show abstract</summary>
  <div>
    Each time a stock gets added to or dropped from an index, we ask: “How much money would have to be tracking that index to explain the huge spike in rebalancing volume we observe on reconstitution day?” While index funds held 16% of the U.S. stock market in 2021, we put the overall passive ownership share at 33.5%. Our headline number is twice as large because it reflects index funds as well as other kinds of passive investors, such as institutional investors with internally managed index portfolios and active managers who are closet indexing.
  </div>
</details>

<h3 class="paper-title">Customer Churn and Intangible Capital (JPE: Macro, September 2023)</h3>
<p class="paper-meta">Previously circulated with the title <em>Firm Customer Bases: Churn and Networks</em> &mdash; Joint with Scott Baker and Brian Baugh</p>
<p>
  <a href="https://drive.google.com/file/d/1O-_FVgwk3dTCWrb7Q3hcwT9MgFfaLbBu/view" title="b1">Firm-level data</a>
  &nbsp;|&nbsp;
  <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3605582" title="b1">SSRN link</a>
  &nbsp;|&nbsp;
  <a href="https://www.journals.uchicago.edu/doi/abs/10.1086/725789?journalCode=jpema" title="b1">Publisher Link</a>
</p>
<details class="abstract-toggle">
  <summary>Show abstract</summary>
  <div>
    Intangible capital is a crucial and growing piece of firms’ capital structure, but many of its distinct components are difficult to measure. We develop and make available several new firm-level metrics regarding a key component of intangible capital &mdash; firms’ customer bases &mdash; using an increasingly common class of household transaction data. Linking household spending to customer-facing firms that make up over 30% of total household spending, we show that churn in customer bases is associated with lower markups and market-to-book ratios and higher leverage. Churn is closely linked to firm-level volatility and risk, both cross-sectionally and over time. This new measure provides a clearer picture of firms’ customer and brand capital than existing metrics like capitalized SG&amp;A, R&amp;D, or advertising expenditures and is also observable for private firms. We demonstrate that low levels of customer churn push firms away from neoclassical investment responsiveness and that low churn firms are better able to insulate organization capital from the risk of key talent flight.
  </div>
</details>

<h3 class="paper-title">Trade Policy Uncertainty and Stock Returns (Journal of International Money and Finance, September 2021)</h3>
<p class="paper-meta">Joint with Marcelo Bianconi and Federico Esposito</p>
<p>
  <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3340700" title="b1">SSRN Link</a>
  &nbsp;|&nbsp;
  <a href="https://doi.org/10.1016/j.jimonfin.2021.102492" title="b1">Publisher Link</a>
</p>
<details class="abstract-toggle">
  <summary>Show abstract</summary>
  <div>
    A recent literature has documented large real effects of trade policy uncertainty (TPU) on trade, employment, and investment, but there is little evidence that investors are compensated for bearing such risk. To quantify the risk premium associated with TPU, we exploit quasi-experimental variation in exposure to TPU arising from Congressional votes to revoke China's preferential tariff treatment between 1990 and 2001. A long-short portfolio designed to isolate exposure to TPU earns a risk-adjusted return of 3.6–6.2% per year. This effect is larger in sectors less protected from globalization and more reliant on inputs from China. Industries more exposed to trade policy uncertainty also had a larger drop in stock prices when the uncertainty began, and more volatile returns around key policy dates. Our results are not explained by the effects of policy uncertainty on expected cash-flows, investors' forecast errors, and import competition from China.
  </div>
</details>

<h3 class="paper-title">The Unprecedented Stock Market Reaction to COVID-19 (The Review of Asset Pricing Studies, July 2020)</h3>
<p class="paper-meta">Joint with Scott Baker, Nicholas Bloom, Steven J. Davis, Kyle Kost, and Tasaneeya Viratyosin</p>
<p>
  <a href="/images/unprecedented_6_2020.pdf" target="_blank">A copy of the paper can be found here</a>
  &nbsp;|&nbsp;
  <a href="https://academic.oup.com/raps/advance-article/doi/10.1093/rapstu/raaa008/5873533" target="_blank">Publisher link</a>
</p>
<details class="abstract-toggle">
  <summary>Show abstract</summary>
  <div>
    No previous infectious disease outbreak, including the Spanish Flu, has impacted the stock market as forcefully as the COVID-19 pandemic. In fact, previous pandemics left only mild traces on the U.S. stock market. We use text-based methods to develop these points with respect to large daily stock market moves back to 1900 and with respect to overall stock market volatility back to 1985. We also evaluate potential explanations for the unprecedented stock market reaction to the COVID-19 pandemic. The evidence we amass suggests that government restrictions on commercial activity and voluntary social distancing, operating with powerful effects in a service-oriented economy, are the main reasons the U.S. stock market reacted so much more forcefully to COVID-19 than to previous pandemics in 1918–19, 1957–58 and 1968.
  </div>
</details>

<h3 class="paper-title">Environmental, Social, and Governance Criteria: Why Investors Are Paying Attention (Journal of Investment Management, January 2018)</h3>
<p class="paper-meta">Joint with Ravi Jagannathan and Ashwin Ravikumar</p>
<p>
  <a href="/images/ESG_9_5_2017.pdf" target="_blank">A copy of the paper can be found here</a>
  &nbsp;|&nbsp;
  <a href="https://www.nber.org/papers/w24063" title="b1">NBER Link</a>
</p>
<details class="abstract-toggle">
  <summary>Show abstract</summary>
  <div>
    We find that money managers could reduce portfolio risk by incorporating Environmental, Social, and Governance (ESG) criteria into their investment process. ESG-related issues can cause sudden regulatory changes and shifts in consumer tastes, resulting in large asset price swings which leave investors limited time to react. By incorporating ESG criteria in their investment strategy, money managers can tilt their holdings towards firms which are well prepared to deal with these changes, thereby managing exposure to these rare but potentially large risks.
  </div>
</details>
