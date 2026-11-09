# Redlands Coast Intelligence - independent dashboard draft

> **Status: independent draft and prototype.** This is not a Redland City Council publication, an adopted strategy, an official service or an authoritative data source.

This project is a compact, single-page dashboard of sourced population, economy, household-cost, island, project and council-budget information for Redlands Coast. It accompanies independent economic-strategy discussion and links residents to official documents and meeting broadcasts.

Visit the [public dashboard](https://auraofintelligence.github.io/Redlands_draft_ES2026-2031/) or review the [GitHub repository](https://github.com/auraofintelligence/Redlands_draft_ES2026-2031).

## Read it as a draft

Sources were checked on **9 November 2026**. The page has six views: Core, Economy, Household costs, Islands, Projects, and Budget & services. Each card identifies its reference period and public source. Budget figures describe 2026-27; Census figures describe 2021; the economic figures identify their earlier reference periods. This is a dated snapshot, not a live data feed.

Core is present in the initial HTML, so the dashboard opens with content before JavaScript runs. Section switching supports direct section links, Previous and Next buttons, and a floating Top link. With JavaScript disabled, all sections remain readable.

Council minutes, agendas, the budget, financial results, the official YouTube channel, live-meeting page and indexed webcast recordings are linked directly. A broadcast is only live when a meeting is in progress.

## Find your way around

- [index.html](index.html) is the generated, complete public page.
- [data/dashboard.json](data/dashboard.json) contains dated cards and source notes.
- [assets/dashboard.js](assets/dashboard.js) controls section switching without relying on an implicit browser click event.
- [assets/site.css](assets/site.css) retains the ocean and teal visual style and adds responsive and print layouts.
- [scripts/build.mjs](scripts/build.mjs) generates the page using Node.js, with no external packages.
- [docs/SOURCE-REFRESH-2026-11-09.md](docs/SOURCE-REFRESH-2026-11-09.md) records the research boundaries and material updates.
- [assets](assets) also contains the existing raster favicon files.
- [LICENCE.md](LICENCE.md) sets the public-source terms for this repository.

## Update the dashboard

Edit `data/dashboard.json`, preserve each measure's period and definition, then run:

```sh
node scripts/build.mjs
```

Check the initial Core view, section links, Previous/Next controls and local assets before publishing. Rechecking a source does not turn an older observation into a current-year estimate.

<!-- github-organisation:start -->

## Project links and history

- First substantive build: 19 April 2026.
- GitHub repository: [Redlands_draft_ES2026-2031](https://github.com/auraofintelligence/Redlands_draft_ES2026-2031).
- Public site: [visit the public site](https://auraofintelligence.github.io/Redlands_draft_ES2026-2031/).

## Related public projects

Each link below reflects an evidenced family, lineage or direct connection. This project has 5 relevant public connections.

### Regional wealth and resilience architecture

- [mineral-moonshots](https://github.com/auraofintelligence/mineral-moonshots) - [public page](https://auraofintelligence.github.io/mineral-moonshots/) - shared community programme.
- [Minjerribah-Resilience](https://github.com/auraofintelligence/Minjerribah-Resilience) - [public page](https://auraofintelligence.github.io/Minjerribah-Resilience/) - shared community programme.
- [moreton-bay-community-wealth-and-mutuals](https://github.com/auraofintelligence/moreton-bay-community-wealth-and-mutuals) - [public page](https://auraofintelligence.github.io/moreton-bay-community-wealth-and-mutuals/) - explicit cross-reference, shared community programme.
- [ready-set-co-op-trust-hub](https://github.com/auraofintelligence/ready-set-co-op-trust-hub) - [public page](https://auraofintelligence.github.io/ready-set-co-op-trust-hub/) - shared community programme.
- [Redland_Flow](https://github.com/auraofintelligence/Redland_Flow) - [public page](https://auraofintelligence.github.io/Redland_Flow/) - explicit cross-reference, shared community programme.

<!-- github-organisation:end -->
