// Extends the design system's THEMES (agent-console) with tokens this project's
// admin/dashboard/docs mockups need but the shipped THEMES doesn't carry.
// Requires _ds_bundle.js to be loaded first.
window.ConsoleTheme = (function () {
  var base = (window.ProjectiousWorkDesignSystem_019de8 && window.ProjectiousWorkDesignSystem_019de8.THEMES) || { light: {}, dark: {} };
  function extend(t, extra) {
    var r = Object.assign({}, t, extra);
    r.pill = Object.assign({}, t.pill, extra.pill);
    return r;
  }
  return {
    light: extend(base.light, {
      accent: '#E05232', accentSolid: '#cc4528',
      success: '#276754', successBg: '#d1ebe0',
      warning: '#6f5106', warningBg: '#f5ecd0',
      danger: '#a8261c', dangerBg: '#fce8e8',
      info: '#1d3352', infoBg: '#dae2ec',
      pill: { admin: { bg: '#dae2ec', fg: '#1d3352' }, pending: { bg: '#f5ecd0', fg: '#6f5106' } }
    }),
    dark: extend(base.dark, {
      accent: '#ea7558', accentSolid: '#cc4528',
      success: '#6cc090', successBg: 'rgba(108,192,144,0.15)',
      warning: '#e0a92a', warningBg: 'rgba(230,185,74,0.16)',
      danger: '#f09878', dangerBg: 'rgba(234,117,88,0.16)',
      info: '#8aacc8', infoBg: 'rgba(122,148,176,0.18)',
      pill: { admin: { bg: 'rgba(122,148,176,0.18)', fg: '#8aacc8' }, pending: { bg: 'rgba(230,185,74,0.16)', fg: '#e0a92a' } }
    })
  };
})();
