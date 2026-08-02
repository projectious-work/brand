/**
 * Colour-mode control in the navbar.
 *
 * Hextra v0.10.0 renders the theme toggle in the sidebar and the footer only.
 * Its navbar builds from `menu.main` and handles exactly one special entry type
 * — `search` — so there is no configuration that places the toggle beside it.
 *
 * Rather than override `_partials/navbar.html`, which would make the whole
 * navbar this project's to maintain across theme upgrades, this moves the
 * control the theme already rendered into the navbar and hides the sidebar
 * copy. The toggle keeps its own behaviour and event handlers; only its
 * position changes.
 *
 * Loaded through Hextra's documented `custom/head-end.html` hook. If a future
 * Hextra grows a navbar toggle, delete this file and the CSS rule that hides
 * the sidebar copy.
 */
(function () {
  "use strict";

  function move() {
    var nav = document.querySelector(".hextra-nav-container nav");
    if (!nav) return;

    // Prefer the sidebar instance: the footer one is far down the page and is
    // removed from the layout on small screens.
    var toggle = document.querySelector(
      ".hextra-sidebar-container .hextra-theme-toggle"
    );
    if (!toggle) toggle = document.querySelector(".hextra-theme-toggle");
    if (!toggle) return;

    var host = toggle.closest("div") || toggle;

    var slot = document.createElement("div");
    slot.className = "pj-navbar-theme";
    slot.appendChild(toggle);

    // After search if it is present, otherwise before the last icon link.
    var search = nav.querySelector(".hextra-search-wrapper, .search-wrapper");
    if (search && search.parentNode === nav) {
      search.insertAdjacentElement("afterend", slot);
    } else {
      nav.appendChild(slot);
    }

    // The emptied sidebar wrapper would otherwise keep its border and padding.
    if (host !== toggle && host.children.length === 0) {
      host.setAttribute("hidden", "");
    }
    document.documentElement.classList.add("pj-navbar-theme-ready");
    markCurrent(nav);
  }

  /**
   * Hextra marks both the current page and its ancestor section as active, so a
   * page reached through a section shows two accent underlines — and the system
   * allows one accent element per view. Keep the marker on the most specific
   * match, which is the last one in menu order.
   */
  function markCurrent(nav) {
    var active = nav.querySelectorAll("a.hx\\:font-medium");
    if (!active.length) return;
    for (var i = 0; i < active.length; i++) {
      active[i].classList.toggle("pj-nav-current", i === active.length - 1);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", move);
  } else {
    move();
  }
})();
