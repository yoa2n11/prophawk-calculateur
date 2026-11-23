# Calculateur PropHawk

Calculateur de surebet ouvert depuis les alertes Telegram @PropHawkBot.
Lien pré-rempli : `#m=<match>&t=<pari>&s=<issue>~<site>~<cote>&s=…`

## Winamax : pari au ticket

`prophawk-winamax.user.js` (Tampermonkey / Violentmonkey) : sur un lien d'alerte
`https://www.winamax.fr/paris-sportifs/match/<n°>?ph=<pari>-<issue>`, met la cote au ticket par la fonction du site
`window.navigateBetting` (ne valide rien). Installation : ouvrir
https://yoa2n11.github.io/prophawk-calculateur/prophawk-winamax.user.js avec l'extension installée.
