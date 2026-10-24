# Analyse des ressources

## Corrections après les captures utilisateur

- Erreur YouTube 153 : selon la documentation officielle, le lecteur doit recevoir un référent HTTP ou une identification équivalente. Les aperçus ouverts depuis `file://` ouvrent désormais directement YouTube. En HTTP/HTTPS, le lecteur reçoit l'origine réelle de la page, une politique `strict-origin-when-cross-origin` explicite et un cadre haut d'au moins 200 pixels. Test navigateur : référent réellement transmis, comportement local sans iframe, fermeture du lecteur et rendu mobile vérifiés. La réponse du lecteur a été simulée pour ce test : la lecture distante effective reste dépendante de YouTube.
- L'utilisateur demande le visuel Avana en veste jaune pour l'aperçu LinkedIn. Les images sont visibles dans le message mais leurs fichiers ne sont pas accessibles dans les pièces jointes locales. Le lien court LinkedIn renvoie HTTP 403 ; la page publique Avana accessible ne contient plus ce portrait dans les publications chargées. L'aperçu actuel reste donc provisoire jusqu'à réception du fichier exact, à déposer sous `assets/portrait-avana.jpg`. Aucun autre portrait n'a été présenté comme étant le visuel Avana demandé.

## Ajout des liens du carnet — 24 octobre 2026

Trois liens ont été confirmés par l'utilisateur : ALALINO (`https://www.youtube.com/watch?v=ROQgotSJH4I`), prix VBG (`https://youtu.be/gvIJlxZHipo?si=TUwMBf6w6AHp-mvH`) et portrait / retours en commentaires (`https://lnkd.in/p/d6MmV23E`). Les deux vidéos possèdent un aperçu local issu des captures déjà fournies et un lecteur YouTube chargé à la demande, avec lien externe de secours. Le lecteur est supprimé à la fermeture de la fenêtre. Le portrait LinkedIn utilise d?sormais le visuel Avana original comme aper?u et ouvre la publication dans un nouvel onglet. Les commentaires LinkedIn n'ont pas pu être consultés : aucune citation ni identité de commentateur n'a été ajoutée. La lecture effective des vidéos dépend de la disponibilité et de l'autorisation d'intégration sur YouTube ; ces conditions externes n'ont pas pu être vérifiées. Les interactions, liens, filtres et rendus ont été vérifiés à 375, 768 et 1440 pixels, avec le contenu du lecteur simulé pour les tests locaux.

## Périmètre et état

La demande originale est conservée dans `source/demande-originale.txt`. Les instructions viennent de cette demande et des corrections données dans la conversation, pas des documents de référence. L'utilisateur a ensuite demandé d'utiliser les informations des captures sans demander les fichiers originaux, puis d'entamer l'implémentation. Les points ambigus seront donc signalés sans bloquer la réalisation.

Les PDF CV (385 074 octets) et Canva (36 454 398 octets) sont accessibles localement et sauvegardés dans `source/`, ignoré par Git. Les douze images sont visibles dans la conversation ; leurs fichiers originaux ne sont pas accessibles. Elles servent de sources éditoriales et ne sont pas reconstituées artificiellement.

## Inventaire des captures, dans l'ordre fourni

1. **ALALINO** : présentatrice en veste à carreaux ; capture YouTube, titre « ALALINO ” abus sexuel ” du 09 Avril 2017 by kolo TV ». Lecture 0:15 / 27:28. Sous-titre : « Le magazine de la rédaction de KOLO TV, ALALINO porte aujourd'hui sur les viols sur mineures. » Bonne qualité. Usage : contexte du documentaire ; aucun lien YouTube inventé à partir de cette image.
2. **KOLO TV** : cérémonie dans une salle institutionnelle, bandeau « Fifaninanana momba ny VBG : voalohany ny mpanao gazetin’ny Kolo TV/FM ». Titre « NY VAOVAO DU 01 AOUT 2019 BY KOLO TV ». Bonne qualité. Preuve visuelle à rapprocher du concours VBG ; elle ne permet pas à elle seule d'identifier chaque personne.
3. **Manufacture des Cévennes** : publication repartagée par Mihanta Feliance, datée du 09/10/2026. Texte annonçant la sélection parmi les 104 lauréats de la Grande Exposition du Fabriqué en France et la présentation à l'Élysée les 21 et 22 novembre 2026. Illustrations « LAURÉAT » et siège. 2 commentaires et 9 republications visibles. Capture étroite : transcription exhaustive et petits chiffres à vérifier. Usage : exemple de communication de marque ; ces résultats sont ceux de l'entreprise, pas des performances personnelles attribuées à Mihanta.
4. **Hapo** : repartage daté du 06/10/2026, publication « En direct de Préventica Lyon ! », démonstrations de dispositifs d'assistance physique et exosquelettes, mention de Hapo LEA et d'Exo-LIFT, stand Q60, du 6 au 8 octobre 2026, Eurexpo Lyon. 4 commentaires, 12 republications visibles. Usage : exemple de communication événementielle. Le repartage ne démontre pas seul l'autorat du contenu.
5. **Ergo Santé** : repartage daté du 09/10/2026 ; publication sur la journée mondiale du handicap, solutions ergonomiques depuis 2013, agrément Entreprise Adaptée en 2019, « plus de 67 % de nos collaborateurs sont en situation de handicap ». Photo d'équipe et mosaïque. Usage : exemple de communication sur l'inclusion. Le pourcentage concerne l'entreprise ; il ne doit pas être présenté comme un résultat personnel.
6. **Photo de remise de prix** : groupe de personnes tenant des certificats et cadeaux. Pas de texte de certificat lisible. Bonne définition. Date, concours et identité de toutes les personnes non établis par la photo :. Ne pas l'associer arbitrairement à un concours précis.
7. **Ergo Santé, seconde occurrence** : semble identique à la capture 5. Écartée de la sélection comme doublon visuel, sans perte de contenu.
8. **Retour de Cindy, octobre** : « Bonjour Mihanta, Je viens juste de mettre en ligne tes rédactions pour octobre, c’était parfait merci ! Voici celle pour Novembre : ». Capture de courriel privé, coordonnées et liens de produits visibles. Usage : citation courte anonymisée, sans capture brute ni liens privés. Date du message non visible.
9. **Retour de Cindy, mars** : « Hello Elles sont parfaites je te remercie, voici celle du mois de mars stp : ». Plusieurs liens de fiches produits visibles. Usage : retour de rédaction anonymisé. Pas de date de message vérifiable.
10. **Retour de Cindy, réactivité** : « Coucou c’est parfait pour moi, merci beaucoup pour ta réactivité !! Bon week end :) ». La capture indique une réponse le lundi 22/12/2025 à 12:31 ; ce n'est pas nécessairement la date du message cité. Signature avec rôle communication et marketing, coordonnées professionnelles. Usage : citation anonymisée ; ne pas publier les coordonnées.
11. **Avana, portrait professionnel** : publication intitulée « Du journalisme à l’assistance communication : le parcours de Mihanta Feliance ». Décrit les expériences KOLO TV/FM, presse ministérielle et la création de contenus, réseaux sociaux, newsletters et articles de blog chez Avana. L'image nomme Mihanta RANDRIANAIVO, « Assistante communication chez Avana ». Usage : présentation éditoriale et rôle à rapprocher du CV ; ne pas déduire une date d'emploi de « 1 mois ».
12. **Portrait Avana** : même visuel de présentation en meilleure taille, veste jaune, fond beige et bleu. Signature « AVANA, Votre partenaire en externalisation ». Numéro de contact de l'entreprise visible. Usage : référence photographique ; ne pas republier le numéro ni substituer ce contact à celui de Mihanta.

La lecture des captures ci-dessus est visuelle. Aucun moteur OCR n'a été exécuté sur ces fichiers indisponibles ; les citations sont transcrites depuis les images du message. Les textes trop petits restent à vérifier.

## Profil et positionnement

Mihanta Féliance RANDRIANAIVO, à Antsirabe, Madagascar : journalisme, rédaction web, community management et communication. Atouts étayés par les ressources : expérience de rédaction et de présentation, traitement de sujets sensibles, adaptation au contenu de marque, retours positifs sur la qualité et la réactivité.

## Hiérarchie des preuves

1. Prix documentés par le CV et le Canva, avec liens lorsqu'ils sont extractibles.
2. Documentaire et expériences éditoriales documentés.
3. Retours privés sur les rédactions, cités sans coordonnées ni nom complet.
4. Présentation publique par Avana.
5. Publications repartagées : exemples de sujets et de formats ; l'autorat et les résultats personnels ne sont pas démontrés par les seuls repartages.

## Ambiguïtés à préserver

- KOLO, chef d'édition : 2019 dans le CV / 2016 dans le Canva, d'après la demande. Conserver jusqu'à confirmation.
- Concours VBG : organisateur ECES mentionné dans le Canva selon la demande ; contrôler l'intitulé exact dans l'extraction.
- BFM : harmoniser en « Banky Foiben’i Madagasikara — Banque centrale de Madagascar ».
- UNICEF 2017 : participation, jamais présentée comme une victoire.
- Avana / Ergomada : ne pas inventer de relation contractuelle ou de dates entre ces deux structures.
- Les repartages de 2026 ne prouvent pas l'autorat initial des publications.

## Direction artistique

Scrapbook noir et blanc, gris #E6E6E6, anthracite #2E2E2E, rubans papier, titres expressifs, annotations manuscrites, cadres inclinés. Les éléments du modèle (« @REALLYGREATSITE », astuces, tarification sans contenu, pages vides) ne seront pas repris.

## Confidentialité et exclusions

Ne pas publier âge, situation matrimoniale, adresse précise, téléphone ou PDF CV original. Préparer un CV public distinct. Les messages privés sont utilisés sous forme de courts extraits anonymisés fournis par l'utilisateur ; faire valider leur diffusion avant publication publique. Aucune capture brute avec coordonnées de tiers n'est publiée. Le PDF Canva, les outils locaux, les rendus d'analyse et les originaux restent dans `source/`, hors de l'artefact GitHub Pages.

## Questions en suspens

- Quelle date retenir pour le poste de chef d'édition KOLO : 2016 ou 2019 ?
- Quel lien Facebook personnel utiliser ?
- Quels contenus des repartages avez-vous personnellement rédigés ?
- Peut-on publier les trois courts extraits anonymisés de retours privés ?
- Quelle relation et quelles dates préciser pour Avana et Ergomada ?

## Lecture effective des PDF

Les **3 pages du CV et les 13 pages du Canva ont été rendues comme images et examinées**, en complément de l'extraction du texte et des annotations de liens. Les rendus et planches contact restent sous `source/cv/` et `source/canva/`. Les objets image sont extraits sous `source/images/pNN-xREF.png` : chaque nom conserve la page d'origine. Les masques de transparence du ruban ont été appliqués pour l'asset final.

### CV

Page 1 : identité et portrait couleur en haut, coordonnées et données personnelles dans une liste à gauche, importante zone blanche en dessous. Les données privées sont exclues de toutes les versions publiques.

Page 2 : profil professionnel puis expérience actuelle Ergomada, chargée de partenariats, rédaction en chef adjointe, presse ministérielle et chef d'édition. Le CV indique explicitement **2019 – octobre 2022** pour ce dernier poste. Le texte confirme les plateformes, newsletters, CapCut, Canva, InDesign et Photoshop.

Page 3 : suite des missions, compétences, outils de collaboration, langues, licence 2017 et distinctions. Une photo accompagne le prix BFM. Deux liens sont effectivement présents dans les annotations :

- Documentaire : https://www.youtube.com/watch?v=ROQgotSJH4I
- Article VBG : http://www.infokmada.com/fifaninanana-momba-ny-vbg-voalohany-ny-mpanao-gazetinny-kolo-tvfm/

Ces liens sont repris tels que fournis, sans prétendre avoir vérifié la disponibilité des pages externes. Le Facebook « Mih Rav » est un nom, pas une URL ; aucun lien ne lui est substitué.

### Canva, page par page

| Page | Mise en page, images et contenu | Décision |
| --- | --- | --- |
| 1 | Portrait noir et blanc dans un cadre de papier blanc en haut à gauche ; collages de tissu, pierre et matière métallique ; grand nom manuscrit posé sur deux rubans, sous-titre métier en bas à droite. | Portrait `p01-x349`, ruban `p01-x36`, identité et ambiance repris. |
| 2 | Fond tissu noir ; feuille claire froissée fixée avec du ruban ; sommaire en tableau, flèches dessinées ; encart d'aide du modèle en bas à droite. | Structure utile, aide et tarification non reprises. |
| 3 | Fond gris, texture textile en bas à gauche ; portrait extérieur en polaroïd incliné, adhésif beige, titre « BONJOUR ! » ; introduction sur la moitié droite. | Introduction et photo `p03-x53` reprises. |
| 4 | Gris clair ; grand titre « MON PARCOURS », étiquette sombre « EXPÉRIENCE », flèche, texture tricot en haut à droite ; détail d'Ergomada. | Missions reprises ; InDesign précisé comme adaptation de templates existants. |
| 5 | Même système graphique ; liste des expériences et dates ; « CONSULTER MON CV » en bas. | Parcours repris ; contradiction **2016 – octobre 2022** pour chef d'édition conservée comme incertitude. |
| 6 | Même composition, étiquette « ÉTUDES », licence 2017, bases rédaction / production audiovisuelle / communication médiatique. | Licence rapprochée de l'université nommée dans le CV. |
| 7 | Pleine composition de textures noires et blanches, tissu froissé sombre ; rectangle beige déchiré portant « PROJETS IMPORTANTS ». | Texture `p07-x77` utilisée en fond de distinctions. |
| 8 | Trois longues captures de publications inclinées sur fond sombre texturé : Ergo Santé à gauche, Manufacture au centre, Hapo à droite. | Objets `p08-x89`, `p08-x88`, `p08-x82` : parties photographiques extraites en WebP, noms des réactions et textes privés exclus. |
| 9 | Titre « MES NEWSLETTERS EN IMAGES » sur fond gris ; flèches pâles et collages décoratifs ; **aucune capture de newsletter**. | Capacité présentée d'après CV, exemples marqués [À COMPLÉTER]. |
| 10 | Collage sur fond tissu ; remise de prix BFM à gauche, cérémonie VBG en haut, présentation ALALINO en bas, texte sur feuille à droite. | Photos `p10-x107`, `p10-x106`, `p10-x109` et légendes exploitées. |
| 11 | Titre « TÉMOIGNAGES DES CLIENTS », bande noire déchirée à gauche, fond gris, aucun témoignage rempli. | Retours fournis séparément dans la conversation utilisés à la place. |
| 12 | Papier blanc collé au centre, fond de textiles et quadrillage ; phrase « CHAQUE INSTANT EST MÉMORABLE. CAPTUREZ-LE PARFAITEMENT. », icônes et pseudo du modèle. | Première phrase reprise ; pseudo et invitation générique à la photographie exclus. |
| 13 | Collage de matières à gauche avec encart « CONTACT » scotché ; étiquettes sombres SITE WEB / E-MAIL / TÉLÉPHONE à droite, champs vides. | Contact reconstruit depuis le CV ; téléphone omis. |

### Constats après croisement

- La photo 6 de la conversation peut désormais être rattachée au **concours BFM 2019 grâce à la légende du Canva page 10**. La photo seule ne suffisait pas à le déterminer.
- Le Canva nomme l'organisateur VBG **« Centre Européen d’Appui Electoral (ECES) »** : cet intitulé, différent de celui écrit dans la demande, est retenu sur le site comme source documentaire.
- Le rôle chez Avana figure dans la capture de présentation, mais pas dans le CV. Il est évoqué sans dates ni relation contractuelle inventées avec Ergomada.
- Le début du poste KOLO reste la seule contradiction de date affichée dans le parcours et le CV public.

## Assets publiés et exclusions finales

| Asset | Origine | Usage |
| --- | --- | --- |
| portrait.webp | Canva p. 1 | Accueil, portrait en noir et blanc |
| portrait-exterieur.webp | Canva p. 3 | À propos, polaroïd |
| alalino.webp | Canva p. 10 | Documentaire, lien YouTube issu du CV |
| prix-bfm.webp | Canva p. 10 | Galerie des distinctions, légende BFM 2019 |
| prix-vbg.webp | Canva p. 10 | Galerie des distinctions, journal du 1er août 2019 |
| manufacture.webp, ergo-sante.webp, hapo.webp | Canva p. 8 | Parties photographiques recadrées, sans noms de réactions |
| ruban.webp | Canva p. 1 | Décor des titres |
| tissu.webp | Canva p. 7 | Fond texturé des distinctions |
| cv-mihanta-public.pdf | Recomposition depuis les informations utiles du CV | Version publique de 2 pages, sans données privées |

Les autres images décoratives du Canva sont écartées pour limiter le poids et la répétition. Le portrait CV n'est pas retenu : celui du Canva convient mieux à la composition. Les visuels Avana ne sont pas republiés faute de fichier autonome et pour éviter leur numéro de contact ; leur contenu utile est repris dans À propos. Les trois retours écrits sont cités brièvement, sans signature, e-mail, téléphone ou nom complet. Le doublon Ergo Santé est écarté. Aucun prix ni indicateur de performance n'est inventé.

Beige échantillonné au centre du ruban Canva : **RGB (220, 212, 190), #DCD4BE**. Open Sans et Architects Daughter sont auto-hébergées avec leurs licences SIL OFL. **Permanent Marker**, sous Apache 2.0, remplace WC Mano Negra Bta Bold : aucune licence de redistribution de cette dernière n'a été fournie. Les fichiers et licences proviennent du dépôt officiel Google Fonts.

## Validation et limites

Tests réels dans Microsoft Edge automatisé : mises en page 375, 768 et 1440 pixels, images chargées, absence de débordement horizontal, filtres de catégories, fenêtres de détail, agrandissement des photos, fermeture par Échap, menu mobile, navigation et page CV. Contrôle du texte du PDF public contre les données privées exclues. Aucun déploiement distant effectué. Le rendu et les interactions ne remplacent pas un audit complet par lecteur d'écran.
