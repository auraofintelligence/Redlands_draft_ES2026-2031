(() => {
  const buttons = [...document.querySelectorAll('[data-view]')];
  const panels = [...document.querySelectorAll('[data-panel]')];
  const previous = document.querySelector('[data-step="-1"]');
  const next = document.querySelector('[data-step="1"]');
  const status = document.getElementById('view-status');
  let current = 'core';

  function showView(id, { updateHash = true, focus = false, resetScroll = false } = {}) {
    if (!panels.some(panel => panel.dataset.panel === id)) id = 'core';
    current = id;
    const index = panels.findIndex(panel => panel.dataset.panel === id);
    panels.forEach(panel => { panel.hidden = panel.dataset.panel !== id; });
    buttons.forEach(button => {
      const selected = button.dataset.view === id;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    previous.disabled = index === 0;
    next.disabled = index === panels.length - 1;
    const title = buttons.find(button => button.dataset.view === id).textContent;
    status.textContent = `${title}, ${index + 1} of ${panels.length}`;
    if (updateHash && location.hash !== `#${id}`) history.replaceState(null, '', `#${id}`);
    if (focus) document.getElementById(`${id}-heading`).focus({ preventScroll: true });
    if (resetScroll) window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }

  buttons.forEach(button => button.addEventListener('click', () => showView(button.dataset.view, { resetScroll: true })));
  document.querySelectorAll('[data-step]').forEach(button => button.addEventListener('click', () => {
    const index = panels.findIndex(panel => panel.dataset.panel === current);
    const destination = panels[index + Number(button.dataset.step)];
    if (destination) showView(destination.dataset.panel, { focus: true, resetScroll: true });
  }));
  window.addEventListener('hashchange', () => {
    const id = location.hash.slice(1);
    if (panels.some(panel => panel.dataset.panel === id)) showView(id, { updateHash: false, resetScroll: true });
  });

  // Initialise without depending on a click or the browser's implicit event object.
  showView(location.hash.slice(1), { updateHash: false });
})();
