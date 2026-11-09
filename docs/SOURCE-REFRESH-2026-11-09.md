# Source refresh, 9 November 2026

The dashboard now identifies each card's reference period and links to its public source. It distinguishes resident population estimates, Census counts, economic modelling, budget plans and project status reports.

## Initial display

The previous startup call to `view('core')` accessed `event.target` without a click event, interrupting the first render. Core is now rendered into the HTML at build time. The section controller initialises from the URL fragment, or Core by default, without using a browser-global event. It leaves ordinary page anchors such as Top alone. All sections can be read without JavaScript, and printed together.

## Material information updates

- QGSO's 2024-25 population bulletin, based on the ABS release of 31 March 2026, gives a preliminary Redland City population of 172,831 at 30 June 2025 and an annual increase of 2,891. Its revised 2024 comparator must not be mixed with the older 170,225 estimate in Council's disaster plan.
- The median age of 43 remains explicitly labelled as a 2021 Census observation.
- Council's December 2025 Local Disaster Management Plan reproduces a 2024 economic snapshot and 2023-24 tourism and agriculture measures. The dashboard identifies these periods and does not present them as 2026 estimates. GRP, output, value added, local jobs and employed residents retain distinct definitions.
- The former System Stress cards contained undated or unsupported general labels. The retained `system` section identifier now presents Household costs, using the adopted 2026-27 rates and utility-charge summary.
- Council's Southern Moreton Bay Islands Census snapshot includes Coochiemudlo. Its geography is disclosed beside the data rather than treating it as a four-island count. Minjerribah figures are separately identified as whole-island Census observations.
- The annual budget page publishes the adopted 2026-27 summary, including $468.2 million operating revenue and $136.2 million capital works. The general-rate increase applies to the median owner-occupied Category 1A property, not every property or the whole rates notice.
- Council's latest annual-report page states that the 2025-26 report was adopted on 14 October 2026. It is linked separately from the forward budget.
- Birkdale's planning designation is a July 2026 milestone, not a completion claim.
- The dated 12 March 2026 Capalaba update gives a $183 million renewal estimate. Council's undated RIC overview still gives $250 million. The dashboard uses the dated update and makes the difference visible instead of silently treating either estimate as a final cost.
- Council acknowledged Walker Group's withdrawal as Toondah development partner on 24 April 2026. The previous generic gateway label no longer describes the project's status.
- Council's Weinam Creek update reports completed state land resumption as at 31 July 2026 and an EDQ design tender for the car park. The old unsupported jobs figure was removed.
- TMR's Dunwich page, updated 29 September 2026, identifies planning and feedback from May-June consultation. Its broad planning and business-case completion dates differ; no completion deadline or unverified funding total is inferred.
- Cleveland's public update is linked to agenda item 9.2 of the 14 October 2026 meeting. The existence of that item does not establish a budget or delivery milestone.

## Official resident routes

The source register links to Council's minutes and agendas page and its InfoCouncil register; the official meeting schedule; Council's exact linked YouTube channel; Council's live and recorded meeting page; agenda-indexed webcast recordings; the budget summary and full 2026-27 publication; and the 2025-26 annual-report page.

Council's own website links to `https://www.youtube.com/user/RedlandCityCouncil`. The dashboard uses that verified address and explains that residents can choose the Live tab. No guessed playlist ID or claim of a continuously live broadcast has been added.

## Research limits

The official City Profile and Data Hub page was available in indexed search results but rejected direct retrieval during this check. The official economic profile provider also rejected direct retrieval. The full 2025-26 annual-report PDF exceeded the web reader's size limit and rejected direct download. Consequently, no newer economic figures have been inferred from those documents. The dashboard links to the current hubs and latest report while retaining explicitly dated economic observations that could be verified in Council's published disaster plan.

Exact source URLs, publishers, reference periods and measure notes are maintained in `data/dashboard.json`. The review date means the sources were checked on that date; it does not change their underlying observation periods.
