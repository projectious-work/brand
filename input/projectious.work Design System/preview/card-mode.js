/* preview/card-mode.js — the appearance switch every card carries.
   Three appearances, matching the system's three supported modes:
     light      body[data-theme="light"]
     deep dark  body[data-theme="dark"]
     navy dark  body[data-theme="dark"][data-surface="navy"]
   The attributes go on <body>, not <html>: a card may be embedded as markup
   rather than loaded as a document, and an <html> attribute is lost when it is.
   Cards that show a fixed palette as their *content* (a light ramp, a dark
   ramp) opt out with `data-mode-lock` and only re-chrome themselves. */
(function () {
  var MODES = [
    { id: 'light', label: 'Light',     theme: 'light', surface: null },
    { id: 'navy',  label: 'Navy dark', theme: 'dark',  surface: null },
    { id: 'deep',  label: 'Deep dark', theme: 'dark',  surface: 'deep' }
  ];

  function apply(id) {
    var m = MODES.filter(function (x) { return x.id === id; })[0] || MODES[0];
    var b = document.body;
    b.setAttribute('data-theme', m.theme);
    if (m.surface) { b.setAttribute('data-surface', m.surface); }
    else { b.removeAttribute('data-surface'); }
    b.setAttribute('data-mode', m.id);
    document.documentElement.setAttribute('data-theme', m.theme);
    if (m.surface) { document.documentElement.setAttribute('data-surface', m.surface); }
    else { document.documentElement.removeAttribute('data-surface'); }
    Array.prototype.forEach.call(document.querySelectorAll('[data-mode-btn]'), function (btn) {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-mode-btn') === m.id ? 'true' : 'false');
    });
    document.dispatchEvent(new CustomEvent('cardmode', { detail: m }));
  }

  function build() {
    var bar = document.createElement('div');
    bar.className = 'mode-switch';
    bar.setAttribute('role', 'group');
    bar.setAttribute('aria-label', 'Appearance');
    MODES.forEach(function (m) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = m.label;
      b.setAttribute('data-mode-btn', m.id);
      b.setAttribute('aria-pressed', 'false');
      b.addEventListener('click', function () { apply(m.id); });
      bar.appendChild(b);
    });
    document.body.insertBefore(bar, document.body.firstChild);
    apply(document.body.getAttribute('data-mode') || 'light');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else { build(); }

  window.cardMode = { apply: apply, current: function () { return document.body.getAttribute('data-mode'); } };
})();
