(() => {
  const colorPattern = /^(?:#[0-9a-f]{3,8}|rgba?\([\d\s.,%/+()-]+\)|hsla?\([\d\s.,%/+()-]+\))$/i;
  const scalePattern = /^(midnight|orange|slate)(-dark)?-(1[0-2]|[1-9])$/i;
  const namedColors = {
    midnight: 'var(--pj-midnight-9)',
    orange: 'var(--pj-orange-9)',
    slate: 'var(--pj-slate-9)',
    success: 'var(--color-success)',
    warning: 'var(--color-warning)',
    danger: 'var(--color-danger)',
    info: 'var(--color-info)',
    white: '#fff',
    black: '#000'
  };

  const tokenColor = (value) => {
    if (colorPattern.test(value)) return value;

    const scale = value.match(scalePattern);
    if (scale) return `var(--pj-${value.toLowerCase()})`;

    const named = namedColors[value.toLowerCase()];
    if (named) return named;

    if (/^--[a-z0-9_-]+$/i.test(value)) {
      const resolved = getComputedStyle(document.documentElement)
        .getPropertyValue(value).trim();
      if (resolved && CSS.supports('color', resolved)) return `var(${value})`;
    }

    return null;
  };

  const makeChip = (value) => {
    const chip = document.createElement('span');
    chip.className = 'pj-color-chip';
    chip.setAttribute('aria-hidden', 'true');
    chip.style.setProperty('--pj-chip', value);
    return chip;
  };

  const addColorSwatches = () => {
    document.querySelectorAll('code').forEach((code) => {
      if (code.closest('pre, .pj-inline-color')) return;

      const value = code.textContent.trim();
      const color = tokenColor(value);
      if (!color) return;

      // The theme matrices contain explicit paired swatches. Leave those
      // examples intact and only decorate otherwise bare color code.
      if (code.previousElementSibling?.classList.contains('pj-color-chip')) return;

      const wrapper = document.createElement('span');
      wrapper.className = 'pj-inline-color';

      code.parentNode.insertBefore(wrapper, code);
      wrapper.append(makeChip(color), code);
    });

    // Palette family and semantic names are often intentionally written as
    // prose rather than code. Decorate those exact words too, while leaving
    // navigation, controls, source examples, and existing specimens alone.
    const root = document.querySelector('main');
    if (!root) return;

    const prosePattern = /\b(midnight|orange|slate|success|warning|danger|info|white|black)\b/gi;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        prosePattern.lastIndex = 0;
        if (!prosePattern.test(node.nodeValue)) {
          prosePattern.lastIndex = 0;
          return NodeFilter.FILTER_REJECT;
        }
        prosePattern.lastIndex = 0;
        if (node.parentElement.closest(
          'pre, code, script, style, svg, a, button, .pj-color-chip, '
          + '.pj-swatches, .pj-scale, .pj-semantic-swatches, .pj-demo'
        )) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
      const fragment = document.createDocumentFragment();
      let cursor = 0;
      prosePattern.lastIndex = 0;
      for (const match of node.nodeValue.matchAll(prosePattern)) {
        fragment.append(node.nodeValue.slice(cursor, match.index));
        const mention = document.createElement('span');
        mention.className = 'pj-color-mention';
        mention.append(makeChip(namedColors[match[0].toLowerCase()]), match[0]);
        fragment.append(mention);
        cursor = match.index + match[0].length;
      }
      fragment.append(node.nodeValue.slice(cursor));
      node.replaceWith(fragment);
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addColorSwatches);
  } else {
    addColorSwatches();
  }
})();
