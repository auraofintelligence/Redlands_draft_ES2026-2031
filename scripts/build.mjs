import {readFileSync, writeFileSync} from 'node:fs';

const data = JSON.parse(readFileSync(new URL('../data/dashboard.json', import.meta.url), 'utf8'));
const e = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
const date = new Intl.DateTimeFormat('en-AU', {day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(`${data.checked}T00:00:00Z`));
const sourceLink = (id, label) => `<a href="${e(data.sources[id].url)}">${e(label || data.sources[id].title)}</a>`;
const panels = data.views.map((view, index) => `<section class="dashboard-panel" id="${e(view.id)}" data-panel="${e(view.id)}" aria-labelledby="${e(view.id)}-heading"${index ? ' hidden' : ''}>
  <h2 id="${e(view.id)}-heading" tabindex="-1">${e(view.title)}</h2>
  <p class="section-intro">${e(view.intro)}</p>
  <div class="grid">${view.cards.map(card => `<article class="card">
    <h3>${e(card.title)}</h3><div class="metric${card.textMetric ? ' metric--text' : ''}">${e(card.metric)}</div>
    <p class="period">${e(card.period)}</p><p class="card-detail">${e(card.detail)}</p>
    <p class="card-source">Source: ${sourceLink(card.source, data.sources[card.source].publisher)}${card.additionalSources?.length?'<br>Also: '+card.additionalSources.map(id=>sourceLink(id)).join(' · '):''}</p>
  </article>`).join('\n')}</div>
</section>`).join('\n');
const sourceList = Object.entries(data.sources).map(([id, source]) => `<li id="source-${e(id)}">${sourceLink(id)}<p class="source-period">${e(source.period)}</p><p>${e(source.publisher)}. ${e(source.note)}</p></li>`).join('\n');

const html = `<!DOCTYPE html>
<html lang="en-AU">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Redlands Coast Intelligence | Local data and council decisions</title>
<meta name="description" content="Dated Redlands Coast population, economy, island, project and budget information, with direct links to official council minutes and meeting broadcasts.">
<meta name="theme-color" content="#0a3a5c">
<link rel="stylesheet" href="assets/site.css">
<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-raster-32.png">
<link rel="icon" type="image/png" sizes="192x192" href="assets/favicon-raster-192.png">
<link rel="apple-touch-icon" sizes="180x180" href="assets/apple-touch-icon-raster-180.png">
<script src="assets/dashboard.js" defer></script>
</head>
<body id="top">
<a class="skip-link" href="#dashboard">Skip to dashboard</a>
<header>
  <h1>Redlands Coast Intelligence</h1>
  <p class="subtitle">Local data, public decisions and strategic signals</p>
  <p class="header-note">An independent dashboard by Luke Nathan Hayes. Figures and project updates link to their public sources.</p>
  <nav aria-label="Council quick links"><ul class="quick-links">
    <li>${sourceLink('minutes', 'Minutes & agendas')}</li>
    <li>${sourceLink('budget', 'Council budget 2026-27')}</li>
    <li>${sourceLink('youtube', 'Council on YouTube')}</li>
    <li>${sourceLink('livestream', 'Live meetings & recordings')}</li>
  </ul></nav>
</header>
<main class="container" id="dashboard">
  <aside class="review-note" aria-label="Data dates"><p><strong>Sources checked ${e(date)}.</strong> Each card shows its reference period. This is a sourced snapshot, not a live data feed.</p><p>Budget figures describe 2026-27. Census figures describe 2021; economic figures below identify their own earlier periods.</p></aside>
  <noscript><style>.dashboard-panel[hidden]{display:block!important}.controls,.section-nav{display:none}.dashboard-panel{margin-top:36px}</style><p class="no-script-note">All dashboard sections are shown below. JavaScript adds section switching.</p></noscript>
  <nav class="controls" aria-label="Dashboard sections">${data.views.map((view,index) => `<button type="button" data-view="${e(view.id)}" aria-controls="${e(view.id)}" aria-pressed="${index === 0}"${index === 0 ? ' class="active"' : ''}>${e(view.title)}</button>`).join('\n')}</nav>
  <div id="dashboard-views">${panels}</div>
  <nav class="section-nav" aria-label="Previous and next dashboard sections"><button type="button" data-step="-1" disabled>Previous</button><span class="view-status" id="view-status" role="status" aria-live="polite">Core, 1 of ${data.views.length}</span><button type="button" data-step="1">Next</button></nav>
  <section class="official-resources" aria-labelledby="official-resources-heading">
    <h2 id="official-resources-heading">Follow council decisions</h2>
    <div class="resource-grid">
      <div><h3>Read the decisions</h3><ul><li>${sourceLink('minutes', 'Council minutes and agendas')}</li><li>${sourceLink('meetingRegister', 'Open the meeting document register')}</li><li>${sourceLink('schedule', 'Meeting dates, times and location')}</li></ul></div>
      <div><h3>Watch the meetings</h3><ul><li>${sourceLink('youtube', 'Official Council YouTube channel')} <span>(choose the Live tab)</span></li><li>${sourceLink('livestream', 'Council livestream and recording page')}</li><li>${sourceLink('webcast', 'Recordings indexed by agenda item')}</li></ul></div>
      <div><h3>Follow the money</h3><ul><li>${sourceLink('budget', '2026-27 budget summary and rates')}</li><li>${sourceLink('budgetDocument', 'Download the full 2026-27 budget')}</li><li>${sourceLink('annualReport', '2025-26 annual report and financial results')}</li></ul></div>
    </div>
    <p class="resource-note">Live broadcasts appear when a meeting is in progress. Council's official pages provide the current schedule and viewing options. For deeper local analysis, explore ${sourceLink('profiles', 'Council’s city profile and data hub')}.</p>
  </section>
  <section class="sources" aria-labelledby="sources-heading"><h2 id="sources-heading">Sources and definitions</h2><details><summary>Read the source notes and reference periods</summary><ol class="source-list">${sourceList}</ol></details></section>
</main>
<footer class="page-footer"><p>Independent work by Luke Nathan Hayes / Strange But True / Aura of Intelligence. This site is separate from Redland City Council.</p><nav aria-label="Footer"><a href="https://auraofintelligence.github.io/redlands-mayoral-campaign/">Luke’s Redlands projects</a><a href="https://auraofintelligence.github.io/strange-but-true/">Strange But True</a><a href="https://github.com/auraofintelligence/open-record-luke-nathan-hayes/blob/main/README.md">Luke’s Open Record (public document)</a><a href="licence.html">Strange But True Public Source Licence</a></nav></footer>
<a class="to-top" href="#top">Top ↑</a>
</body>
</html>
`;
writeFileSync(new URL('../index.html', import.meta.url), html);
const licence=readFileSync(new URL('../LICENCE.md',import.meta.url),'utf8');
writeFileSync(new URL('../licence.html',import.meta.url),`<!doctype html><html lang="en-AU"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Licence | Redlands Coast Intelligence</title><link rel="stylesheet" href="assets/site.css"><link rel="icon" href="assets/favicon-raster-32.png" type="image/png"></head><body id="top"><header><h1>Licence and reuse</h1><p><a href="index.html">Return to Redlands Coast Intelligence</a></p></header><main class="container"><pre class="licence-copy">${e(licence)}</pre></main><footer class="page-footer"><a href="https://auraofintelligence.github.io/strange-but-true/">Strange But True</a></footer><a class="to-top" href="#top">Top ↑</a></body></html>`);
console.log(`Built ${data.views.length} sections and ${data.views.reduce((count, view) => count + view.cards.length, 0)} sourced cards. Core is present in the initial HTML.`);
