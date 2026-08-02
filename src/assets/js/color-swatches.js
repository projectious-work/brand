(() => {
  const colorPattern = /^(?:#[0-9a-f]{3,8}|rgba?\([\d\s.,%/+()-]+\)|hsla?\([\d\s.,%/+()-]+\))$/i;

  const addColorSwatches = () => {
    document.querySelectorAll('code').forEach((code) => {
      if (code.closest('pre, .pj-inline-color')) return;

      const value = code.textContent.trim();
      if (!colorPattern.test(value)) return;

      // The theme matrices contain explicit paired swatches. Leave those
      // examples intact and only decorate otherwise bare color code.
      if (code.previousElementSibling?.classList.contains('pj-color-chip')) return;

      const wrapper = document.createElement('span');
      wrapper.className = 'pj-inline-color';

      const chip = document.createElement('span');
      chip.className = 'pj-color-chip';
      chip.setAttribute('aria-hidden', 'true');
      chip.style.setProperty('--pj-chip', value);

      code.parentNode.insertBefore(wrapper, code);
      wrapper.append(chip, code);
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addColorSwatches);
  } else {
    addColorSwatches();
  }
})();
