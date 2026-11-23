// ==UserScript==
// @name         PropHawk — pari Winamax au ticket
// @namespace    https://yoa2n11.github.io/prophawk-calculateur/
// @version      1.0
// @description  Lien d'alerte PropHawk « …/paris-sportifs/match/<n°>?ph=<pari>-<issue> » : met la cote au ticket Winamax (ne valide rien).
// @match        https://www.winamax.fr/paris-sportifs/match/*
// @run-at       document-idle
// @grant        none
// @downloadURL  https://yoa2n11.github.io/prophawk-calculateur/prophawk-winamax.user.js
// @updateURL    https://yoa2n11.github.io/prophawk-calculateur/prophawk-winamax.user.js
// ==/UserScript==

// Le site Winamax lit lui-même les liens de son appli (wam://betting?target=match-<m>&c=<pari>-<issue>) avec sa
// fonction window.navigateBetting : la cote est mise au ticket comme par un clic (essai PropHawk du 23/11/2026).
// Sans ce script, le lien ouvre simplement la page du match.
(function () {
  var ph = new URLSearchParams(location.search).get("ph");
  var match = location.pathname.match(/\/match\/(\d+)/);
  if (!ph || !match || !/^\d{1,15}-\d{1,15}(,\d{1,15}-\d{1,15})*$/.test(ph)) {
    return;
  }
  var essais = 0;
  var minuterie = setInterval(function () {
    if (typeof window.navigateBetting === "function") {
      clearInterval(minuterie);
      window.navigateBetting("wam://betting?target=match-" + match[1] + "&c=" + ph);
    } else if (++essais > 60) {
      clearInterval(minuterie);  // site pas chargé en 30 s : on laisse la page du match
    }
  }, 500);
})();
