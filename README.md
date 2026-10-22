# Portfolio de Mihanta Randrianaivo

Portfolio en français, en HTML, CSS et JavaScript sans dépendance à installer. Direction artistique scrapbook noir et blanc inspirée du Canva fourni : rubans, textures, photographies en polaroïd et titres manuscrits.

## Consulter et lancer

Ouvrir `index.html` dans un navigateur pour consulter le site directement. Pour le développement, utiliser « Open with Live Server » dans VS Code, ou, si Python est installé, lancer depuis ce dossier :

```powershell
python -m http.server 8000
```

Ouvrir ensuite `http://localhost:8000`. `cv.html` présente une version publique imprimable du CV ; le téléchargement utilise `assets/cv-mihanta-public.pdf`, recréé sans âge, situation matrimoniale, adresse précise ni téléphone.

## Organisation

- `index.html`, `style.css`, `script.js` : site et interactions.
- `cv.html`, `cv.js` : CV public et impression.
- `assets/` : WebP optimisés, polices locales et licences, favicon, PDF public.
- `ANALYSE.md` : sources, lecture des PDF, incohérences et choix éditoriaux.
- `source/` : originaux, rendus d'analyse et outils de travail, **ignorés par Git**.
- `.github/workflows/pages.yml` : publication avec une liste explicite de fichiers publics.

Les liens locaux commencent par `./` et fonctionnent dans un sous-dossier GitHub Pages. Aucun backend, aucune clé et aucun service de collecte de données. Les polices sont auto-hébergées : Open Sans et Architects Daughter sous SIL OFL ; Permanent Marker sous Apache 2.0, alternative à WC Mano Negra Bta Bold dont la licence n'est pas fournie.

## Publier sur GitHub Pages

Depuis ce dossier (le dépôt Git est `portfolio/`), vérifier les modifications, puis les envoyer :

```powershell
git status --short
git add .gitignore .github/workflows/pages.yml index.html style.css script.js cv.html cv.js assets ANALYSE.md README.md
git commit -m "Créer le portfolio de Mihanta Randrianaivo"
git push origin HEAD:main
```

Ces commandes supposent que le dépôt distant `origin` est déjà configuré. Vérifier avec `git remote -v`. S'il manque, ajouter l'URL réelle de votre dépôt avec `git remote add origin URL_DU_DEPOT` avant le push. Ne pas reprendre littéralement cette valeur de remplacement.

Dans GitHub : **Settings → Pages → Build and deployment → Source : GitHub Actions**. Lancer ensuite le workflow « Publier le portfolio sur GitHub Pages » depuis **Actions**, ou pousser sur `main`. L'URL de publication figurera dans le résultat du déploiement et dans Settings → Pages.

Le workflow n'envoie que les pages, CSS, JavaScript et `assets/`. Il exclut explicitement `source/`, les documents d'analyse et les PDF privés, même si un original était ajouté par erreur au dépôt. Le workflow est préparé ; aucun push ni déploiement n'a été effectué dans cette session.

## Avant publication

- Confirmer le début du poste de chef d'édition KOLO : 2016 ou 2019. Le site et les deux versions publiques du CV indiquent `[À VÉRIFIER]`.
- Fournir des exemples de newsletters : la page Canva correspondante est vide ; `[À COMPLÉTER]` est affiché.
- Confirmer l'autorat des publications repartagées. Elles sont décrites comme des exemples issus de repartages, sans attribuer de résultats personnels.
- Valider les citations anonymisées de messages privés avant diffusion publique.
- Préciser la relation entre Avana et Ergomada et fournir une URL Facebook personnelle, si souhaité. Aucun lien n'est deviné depuis le nom « Mih Rav ».

Les captures contenant des coordonnées de tiers ne sont pas publiées. Les exemples de marque utilisent uniquement la partie photographique des captures extraites du Canva. Les photos de concours utilisent les légendes du Canva pour leur contexte.
