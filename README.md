## Todo
- Prettier: corriger la conf pour qu'elle suive le même standard qu'ESLint
- Documentation
- Testing

## Done

- Prettier installé
- ESLint installé
- Husky installé et configuré
- Commandes npm sur les `package.json`
- Standards Airbnb en place
- Base Vite pour le front
- Base express-MVC pour le back
- #Back Fix `.eslintrc.json` pour la règle "no-console":
  - Qu'elle provoque une error (pas un warn comme actuellement)
  - Autoriser les console.warn() et console.error()
  - (En front elle peut être plus stricte, on est dans un contexte Web)
- #Front Fix `vite.config.js` pour les imports absolus (alias)
- Concurrently: y a moyen de separer les logs des deux serveurs autrement qu'avec le "[0]/[1]" d'en-tête 