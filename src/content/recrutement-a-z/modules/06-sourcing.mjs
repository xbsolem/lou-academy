import { lesson, h, t, note, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 6,
  title: "Sourcing et recherche de candidats",
  description:
    "Aller chercher des profils, construire des requêtes booléennes, respecter RGPD et conditions d'utilisation, et écrire des messages d'approche utiles.",
  lessons: [
    lesson({
      title: "Sourcing actif et sourcing passif",
      description:
        "Distinguer les candidatures qui viennent à vous et les personnes que vous allez chercher, et savoir quand activer l'un, l'autre, ou les deux.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez définir sourcing passif et sourcing actif, les relier au plan de recrutement, et expliquer ce que le sourcing n'est pas : ni un contournement du droit, ni une obligation légale de canal, ni une licence pour contacter n'importe qui n'importe comment."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le sourcing, au sens professionnel, est l'ensemble des actions par lesquelles vous identifiez des personnes susceptibles d'occuper un emploi, au-delà de la seule attente des réponses à l'annonce. On parle de sourcing passif lorsque vous organisez l'arrivée des candidatures : offre en ligne, page carrière, CVthèque où les personnes se sont inscrites, candidatures spontanées, internat, cooptation qui vient à vous. On parle de sourcing actif lorsque vous partez à la recherche de personnes qui n'ont pas postulé : interrogation de bases, réseaux professionnels, vivier que vous relancez, approche directe, relation écoles. Les deux sont complémentaires. Un poste abondant peut vivre principalement en passif. Un poste tendu vit rarement sans actif.\n\nCette distinction n'est pas juridique. Aucun article du Code du travail n'impose de « chasser » ou d'attendre. Le choix est une politique interne et une bonne pratique, calée sur la note de marché. En revanche, dès que vous traitez des données personnelles (nom, e-mail, parcours, identifiant de réseau), le RGPD s'applique, que la personne ait postulé ou non. La CNIL, dans son guide du recrutement (30/01/2023) et son référentiel 2026, encadre notamment l'information des personnes, les durées, l'opposition. Sourcer n'est pas « plus libre » que de recevoir un CV : c'est souvent plus exigeant, parce que la personne ne s'est pas présentée d'elle-même.\n\nLe sourcing actif a un coût de temps. Une heure de messages génériques produit du bruit et un taux de réponse médiocre — que vous mesurerez en interne, sans inventer un « taux de marché ». Une heure de requêtes précises + messages personnalisés produit moins de noms et plus de conversations. Le junior qui « balance 80 InMail le lundi » n'est pas plus performant que celui qui en envoie 12 ciblés. Le manager doit comprendre que l'actif n'est pas magique : il dépend du brief (fiche, critères, fourchette, délai) et de la qualité du message.\n\nLe sourcing n'autorise pas à écarter des personnes sur un critère protégé (L. 1132-1), ni à collecter des informations sans lien avec l'emploi (L. 1221-6), ni à mentir sur le poste (même logique que L. 5331-3 si vous décrivez l'emploi). Il n'autorise pas non plus à contourner les conditions d'utilisation d'une plateforme. L'actif se fait dans le cadre : outils de l'entreprise, comptes professionnels, finalité recrutement, information de la personne au plus tard au premier contact utile."
        ),
        note(
          "Sourcing actif = vous allez vers la personne. Sourcing passif = la personne vient vers vous. Ni l'un ni l'autre n'est une obligation légale de canal. Les deux sont des traitements de données. L'actif n'excuse pas un message mensonger, un critère discriminatoire, ou un contournement de CGU."
        ),
        h("Méthode opérationnelle"),
        t(
          "1. Relire la fiche, la note de marché et le plan : le poste a-t-il besoin d'actif, et à partir de quand (critère d'arrêt du passif) ?\n2. Lister les sources autorisées par l'entreprise (ATS, CVthèque prestataire, réseau professionnel d'entreprise, vivier informé).\n3. Fixer un volume de temps (ex. 2 créneaux de 90 minutes) plutôt qu'un volume de messages.\n4. Préparer les synonymes et la requête avant d'ouvrir le réseau.\n5. Tracer dans l'ATS : source = sourcing, date, message envoyé, réponse, opposition éventuelle.\n6. Informer les RH si vous sortez des outils cadrés (fichier Excel personnel, groupe WhatsApp : à éviter)."
        ),
        h("Exemple professionnel"),
        t(
          "Chez Pixeline, l'annonce de product designer a produit 40 candidatures, 2 au niveau. Au 15e jour, le critère d'arrêt du plan déclenche l'actif. Le recruteur junior ne « contacte tous les designers de France ». Il cible 5 ans d'expérience produit SaaS, France, et un portefeuille visible. 15 approches en 3 jours, 4 réponses, 2 préqualifications. Le passif continue (l'annonce reste vraie). L'actif n'a pas remplacé le droit : chaque personne est informée de la finalité dès le message."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Attendre trois mois un métier tendu « pour voir ». Contacter 200 personnes avec le même texte. Sourcer sur un critère d'âge ou de photo. Utiliser le compte LinkedIn personnel, puis partir en congés avec les conversations. Promettre un CDI dans un message d'approche intérim. Confondre CVthèque (personnes inscrites) et scraping de données non informées."
        ),
        h("Situations particulières"),
        t(
          "Confidentialité : l'actif permet de ne pas publier ; le message ne divulgue pas la roadmap. Volume : l'actif individuel est inadapté à 10 préparateurs ; sessions + intérim. Interne : le sourcing interne (mobilité) est un actif particulier, soumis à la politique RH. Cabinet : vous sourcer « en double » du cabinet crée des conflits de présentation ; cadrez l'exclusivité."
        ),
        h("Mise en pratique"),
        t(
          "Pour le poste de technicien de maintenance 3×8 (plan industrie), le manager dit : « Inutile de sourcer, l'annonce suffit, on n'a jamais fait ça. » En 8 lignes, articulez passif / actif, le moment de bascule, et ce que vous ne ferez pas."
        ),
        h("Correction détaillée"),
        t(
          "Vous rappelez l'historique : annonces seules déjà insuffisantes, marché local tendu. Le passif (FT, jobboard industrie, cooptation qui vient) reste ouvert. L'actif (approche rayon 40 km, vivier, CFA) est prévu par le plan, pas un caprice. Basculement : dès J0 en parallèle, ou au plus tard si < N préqualifiés à J15. Vous ne ferez pas : spam, critère d'âge, contournement de CGU, fichier personnel non RGPD. Vous ne présentez pas l'actif comme une obligation légale, mais comme le moyen adapté."
        ),
      ],
    }),

    lesson({
      title: "Requêtes booléennes : AND, OR, NOT, guillemets, parenthèses",
      description:
        "Construire une requête lisible qui élargit, restreint ou exclut, avant de l'utiliser dans un outil de l'entreprise.",
      minutes: 22,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez expliquer le rôle de AND, OR, NOT, des guillemets et des parenthèses, écrire une requête simple sans erreur de logique, et vérifier ce qu'elle inclut et exclut. Vous savez que la syntaxe exacte peut varier selon l'outil : vous testez dans l'outil autorisé, vous ne copiez pas une recette de contournement."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Une requête booléenne est une phrase logique qui combine des mots pour trouver des profils. Elle ne juge personne. Elle ne remplace pas la lecture du CV. Elle évite de rater un synonyme et d'englober un métier voisin. Cinq briques suffisent au junior.\n\nAND (ET) : les deux termes doivent être présents. « maintenance AND mécanique » exige les deux. Trop de AND appauvrit le résultat (sur-contrainte). OR (OU) : au moins un des termes. « électromécanicien OR « technicien de maintenance » » élargit aux synonymes. Pas assez de OR et vous ratez les intitulés du marché. NOT (SAUF) : exclut un terme. « commercial NOT immobilier » écarte un voisin. Un NOT mal placé supprime des profils utiles (un commercial BtoB qui a fait un stage immobilier). Les guillemets imposent une expression exacte : « chargé de clientèle » n'est pas chargé + clientèle séparés. Les parenthèses groupent : (« product designer » OR « UX designer ») AND SaaS. Sans parenthèses, l'outil peut lier les mots dans un ordre que vous n'avez pas voulu.\n\nCes opérateurs sont une bonne pratique de recherche, pas une obligation légale. Ils n'autorisent pas à cibler « femme AND jeune AND Paris 16e » : ce serait un usage discriminatoire de la technique (L. 1132-1), et souvent sans lien avec l'emploi (L. 1221-6). La requête s'écrit avec des mots de métier, d'outils, de compétences, de lieu professionnel, pas avec des critères protégés.\n\nLa syntaxe n'est pas universelle. Un ATS, un jobboard, un moteur, un réseau professionnel peuvent exiger ET/OU, le signe moins, ou des filtres à cocher à la place de NOT. Avant de « croire » une requête, vous lisez l'aide de l'outil fourni par l'entreprise. Vous n'utilisez pas un script, une extension ou une astuce destinée à contourner une limite de compte ou des conditions d'utilisation. Si l'outil officiel ne permet pas une recherche, vous changez de canal ou vous demandez un outil conforme, vous ne forcez pas l'accès."
        ),
        note(
          "La booléenne est un outil de précision métier. Elle n'est pas un outil de tri par âge, sexe, origine, apparence ou « photo ». Toute requête construite sur un critère protégé est à jeter, même si elle « marche » techniquement."
        ),
        h("Méthode opérationnelle"),
        t(
          "1. Lister 5 à 10 mots du métier (intitulé, synonymes, outils, habilitation).\n2. Séparer : indispensables (AND), alternatives (OR), voisins à écarter (NOT) avec prudence.\n3. Mettre les expressions en guillemets.\n4. Grouper les OR entre parenthèses.\n5. Tester sur un petit jeu : la requête ramène-t-elle des faux amis ? Rate-t-elle un profil type connu ?\n6. Enregistrer la requête dans le dossier de poste (reproductibilité).\n7. Adapter la syntaxe à l'outil, sans recette de contournement."
        ),
        code(`BRIQUES — mémo

AND     Les deux (ou plus) sont exigés
OR      Au moins un
NOT     Exclusion (à manier avec prudence)
"..."   Expression exacte
( )     Priorité / regroupement

Schéma type :
("intitulé A" OR "intitulé B" OR synonyme)
AND (compétence OR outil)
AND bassin_ou_remote
NOT ("métier voisin" OR stage_seulement)`),
        h("Exemple professionnel"),
        t(
          "Poste Alizé : commercial BtoB TPE. Requête de départ : (\"chargé d'affaires\" OR \"attaché commercial\" OR \"commercial BtoB\" OR « business developer ») AND (TPE OR PME OR « portefeuille ») NOT immobilier NOT assurance. Test : un profil « chasse immobilière BtoB » sort encore → ajouter NOT « immobilier ». Un bon profil « itinénaire TPE » sans les mots TPE disparaît → élargir OR « terrain » avec prudence, ou accepter de le rater et de le prendre en cooptation."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Tout mettre en AND (« commercial AND BtoB AND TPE AND Lyon AND Salesforce AND anglais AND CDI ») et conclure que « personne n'existe ». Oublier les guillemets sur chargé de clientèle. Écrire OR sans parenthèses. NOT « junior » et perdre les bons profils 2 ans. Cibler « femme » ou une tranche d'âge. Copier une requête trouvée sur un forum de contournement de CGU."
        ),
        h("Situations particulières"),
        t(
          "Outil sans booléen : utiliser les filtres métiers/lieu, et les synonymes en plusieurs recherches. Langue des profils : ajouter les équivalents (maintenance / maintenance technician) si le bassin est bilingue, sans exiger une « native ». Habilitations : « habilitation électrique » OR B2V OR BR, selon le vrai besoin. Données incomplètes : beaucoup de profils n'écrivent pas « BtoB » ; trop de précision devient aveugle."
        ),
        h("Mise en pratique"),
        t(
          "Écrivez une requête pour : technicien de maintenance mécanique, pas de l'immobilier, pas « agent de sécurité », synonymes électromécanicien / maintenance industrielle, expression « habilitation électrique » souhaitée mais non bloquante. Justifiez chaque opérateur."
        ),
        h("Correction détaillée"),
        t(
          "Proposition : (\"technicien de maintenance\" OR électromécanicien OR \"maintenance industrielle\" OR \"maintenance mécanique\") AND (mécanique OR électromécanique) NOT (immobilier OR \"agent de sécurité\" OR gardiennage). « Habilitation électrique » OR B2V en OR (pas en AND) si elle est souhaitée, pas exigée : un AND la rendrait bloquante. Guillemets sur les expressions. Parenthèses autour des synonymes. Le NOT immobilier évite un voisin ; s'il élimine un industriel qui a travaillé un an chez un bailleur, vous l'assouplirez après test. Syntaxe à adapter à l'outil interne."
        ),
      ],
    }),

    lesson({
      title: "Synonymes métiers et exercices progressifs de requêtes",
      description:
        "Élargir sans se noyer : construire trois niveaux de requête et corriger les erreurs de logique.",
      minutes: 24,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez extraire les synonymes d'un métier (annonce, marché, équipe), écrire une requête large, une requête médiane et une requête étroite, et corriger une requête qui exclut trop ou inclut trop."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Les métiers ne portent pas un seul nom. Un assistant RH est aussi « assistant de gestion du personnel », « gestionnaire administration du personnel », parfois « chargé de missions RH » junior. Un préparateur est « agent logistique », « agent de quai », « order picker ». Un product designer est « UX/UI », « designer produit », parfois « UX designer » sans le mot produit. Si votre requête n'a qu'un intitulé, vous ne sourcer pas le marché, vous sourcer votre jargon interne.\n\nLes synonymes se collectent : fiche de poste, offres comparables (lecture, pas copie), langage de l'équipe, diplômes et titres de formation, outils. On ne les invente pas pour faire joli : « people partner » pour un assistant paie de site industriel n'est pas un synonyme, c'est un autre métier. Distinguez synonymes (même emploi, autre étiquette) et métiers voisins (emploi différent). Le OR est pour les premiers. Le NOT, prudent, pour les seconds.\n\nTravailler en trois largeurs évite l'illusion du « il n'y a personne ». Niveau 1, large : intitulés + un seul ancrage (bassin ou grande compétence). Niveau 2, médian : synonymes + compétence clé + exclusion d'un voisin. Niveau 3, étroit : tout cela + outil ou habilitation. Vous commencez souvent au médian. Si zéro résultat, vous élargissez en enlevant un AND, pas en ajoutant un critère d'âge. Si trop de bruit, vous ajoutez une parenthèse d'exclusion ou un ancrage vrai, pas « photo professionnelle ».\n\nCes exercices sont des drills. La correction n'est pas la seule requête possible : c'est une requête cohérente, justifiée, sans critère protégé, sans syntaxe de contournement. En situation réelle, vous la testez dans l'outil autorisé et vous notez ce qu'elle ramène."
        ),
        note(
          "Trois largeurs, un même droit : pas de critère protégé dans la requête. Si le manager dit « cherche des profils de moins de 30 ans », vous refusez de le traduire en booléen. Vous traduisez un niveau d'expérience lié à l'emploi, si le brief le justifie."
        ),
        h("Méthode opérationnelle"),
        t(
          "Pour chaque exercice : (1) lister synonymes vs voisins ; (2) écrire large / médian / étroit ; (3) dire ce que chaque niveau devrait trouver et rater ; (4) comparer à la correction ; (5) noter une variante acceptable."
        ),
        h("Exemple professionnel"),
        t(
          "À Nimvia, le fondateur dit « Customer Success ». Synonymes utiles : customer success, CSM, « succès client », « chargé de compte » BtoB SaaS. Voisins : support N1 pur, téléconseiller BtoC, commercial hunter. Requête médiane : (\"customer success\" OR CSM OR \"succès client\" OR \"customer success manager\") AND (SaaS OR BtoB OR logiciel) NOT (\"téléconseiller\" OR « call center »). Le junior évite NOT support, trop large (beaucoup de CSM sont passés par le support)."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Prendre tous les intitulés LinkedIn pour des synonymes. Étroit d'abord, puis conclure à la pénurie. Large sans jamais relire les 200 résultats. Mélanger français et anglais n'importe comment (utile) avec une exigence « native » (illicite / excessif). Corriger une requête en y ajoutant le prénom d'école élitiste comme filtre social déguisé."
        ),
        h("Situations particulières"),
        t(
          "Reconversion : les synonymes d'intitulé ne suffisent pas ; il faut des compétences transférables (OR « pédagogie » OR « animation de formation » pour un futur recruteur issu du formateur). Intérim : les profils s'intitulent parfois par la mission (« cariste chez X ») : ancrer CACES, entrepôt, préparation. Métiers réglementés : le titre protégé peut être en AND si l'exercice l'impose (RH + diplôme d'État infirmier, pas pour un assistant RH)."
        ),
        h("Mise en pratique"),
        t(
          "Faites les trois exercices, sans outil de contournement, sur papier."
        ),
        code(`EXERCICE 1 — élargir
Poste : assistant RH (administration du personnel + paie de site)
Écrivez 6 synonymes ou équivalents, 2 voisins à ne pas fondre, puis une requête médiane.

EXERCICE 2 — parenthèses
On veut : (préparateur OU « agent logistique ») ET (entrepôt OU quai) SAUF cariste-seul si le poste ne conduit pas
Écrivez la requête. Dites ce qui se passe si vous oubliez les parenthèses autour des OR.

EXERCICE 3 — trop étroit
Requête donnée :
"product designer" AND Figma AND SaaS AND "5 ans" AND English AND Paris AND Series AND B AND "native"
Listez 4 raisons pour lesquelles elle est mauvaise (logique et/ou droit). Proposez une version médiane licite.`),
        h("Correction détaillée"),
        t(
          "Les corrections ci-dessous sont des versions justifiées, pas les uniques bonnes réponses. Adaptez la syntaxe à l'outil interne."
        ),
        code(`CORRECTION 1
Synonymes / équivalents : assistant RH, assistant de gestion du personnel, gestionnaire administration du personnel, assistant paie (si le poste paie vraiment), chargé de missions RH junior, assistant ressources humaines.
Voisins : responsable RH, psychologue du travail, chargé de recrutement 100 % chasse.
Médiane : ("assistant RH" OR "assistant ressources humaines" OR "gestionnaire administration du personnel" OR "assistant de gestion du personnel") AND (paie OR « administration du personnel » OR SIRH)

CORRECTION 2
("préparateur de commandes" OR préparateur OR "agent logistique") AND (entrepôt OR quai OR plateforme) NOT (cariste AND NOT préparateur)
Version plus simple si le poste ne conduit pas : (... ) AND (entrepôt OR quai) NOT "cariste"
Sans parenthèses, un OR peut se lier au AND suivant et ramener n'importe quel « quai » sans le métier, ou exclure trop. Les parenthèses figent le groupe d'intitulés.

CORRECTION 3
Mauvais : trop de AND (personne n'écrit « 5 ans » + Series B) ; "native" (critère d'origine / langue illicite ou sans lien) ; Paris en AND alors que le poste Pixeline est remote France ; English en AND si les specs sont en français. « Series B » n'est pas une compétence, c'est un stade de startup, souvent absent des profils.
Médiane licite : ("product designer" OR "designer produit" OR "UX designer") AND (Figma OR « design system ») AND (SaaS OR BtoB OR logiciel)
Anglais : seulement si réunions clients US réelles, alors "English" OR anglais en OR, pas « native ». Lieu : France OR remote, selon le vrai cadre.`),
      ],
    }),

    lesson({
      title: "Réseaux professionnels, jobboards et recherche sur le web public",
      description:
        "Utiliser les canaux autorisés, comprendre le principe d'une recherche sur pages publiques, sans tutoriel de contournement des CGU.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez choisir entre CVthèque de jobboard, réseau professionnel de l'entreprise et simple lecture de pages publiques. Vous comprenez le principe dit parfois « X-Ray » (interroger l'index public d'un moteur) et vous savez pourquoi ce cours ne fournit aucun tutoriel pour contourner des conditions d'utilisation, des paywalls ou des limites de compte."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Trois familles d'outils reviennent dans le sourcing junior. Première : les jobboards et leurs CVthèques. Des personnes y ont déposé un CV, souvent pour être trouvées. Vous respectez le contrat de l'entreprise avec le board, les mentions d'information du board, et vous n'exportez pas la base sur une clé USB personnelle. Deuxième : les réseaux professionnels (le plus souvent, le compte Recruiter ou l'équivalent payé par l'employeur). Vous cherchez, vous envoyez un message dans l'outil, vous tracez. Le compte est un outil de travail, pas un vivier privé que vous emportez. Troisième : le web public. Des pages personnelles, des portfolios, des articles, des pages d'entreprise listent des personnes et des compétences. Les moteurs de recherche indexent une partie de ces pages.\n\nLe principe parfois appelé X-Ray consiste à interroger un moteur sur des pages déjà publiques, avec des mots-clés de métier, pour identifier des personnes qui parlent de leur travail. Ce n'est ni magique ni illicite par nature : lire une page publique n'est pas un piratage. Cela devient un problème lorsque l'on cherche à contourner les conditions d'utilisation d'une plateforme (accès aux profils hors connexion, extraction massive, automatisation pour éviter une limite, usurpation d'identité de compte, outils dont l'objet est de « bypass » un paywall). Ce cours n'enseigne pas ces procédures, n'en donne pas les opérateurs de contournement, et ne les présente pas comme une habileté de recruteur.\n\nBonne pratique : utiliser les fonctionnalités prévues par l'outil que l'entreprise a licencié ; limiter la collecte au nécessaire (L. 1221-6, minimisation RGPD) ; informer la personne au premier contact ; ne pas extraire en masse ; ne pas créer de faux comptes. Politique interne : certains employeurs interdisent toute recherche hors ATS. Vous appliquez la plus stricte des règles qui s'imposent (loi, CGU acceptées par l'entreprise, politique RH). Obligation : traiter licitement les données, ne pas discriminer, ne pas tromper sur l'emploi.\n\nUn portfolio public (designer, développeur) est souvent plus riche qu'un CV. Le contacter via le moyen indiqué par la personne (formulaire, e-mail professionnel affiché) est préférable à un message hors canal. Si aucun moyen n'est affiché, le réseau professionnel licencié reste le canal par défaut, pas une adresse personnelle trouvée par recoupement agressif (données excessives)."
        ),
        note(
          "Pas de tutoriel de contournement. Pas d'opérateurs dont l'objet est d'accéder à des espaces non autorisés, de mass-scraper ou de contourner une CGU. Si l'outil interne est limité, vous le dites aux RH (budget, licence), vous n'inventez pas une astuce. Le principe X-Ray = recherche sur du public déjà indexé, dans le respect des CGU et du RGPD."
        ),
        h("Méthode opérationnelle"),
        t(
          "1. Demander la liste des outils licenciés (jobboard, réseau, ATS).\n2. Préférer la CVthèque où la personne s'est inscrite, puis le réseau professionnel d'entreprise, puis les pages publiques volontairement exposées (portfolio).\n3. Collecter le minimum : nom professionnel, moyen de contact licite, éléments de parcours liés à l'emploi.\n4. Premier message = information (qui vous êtes, pourquoi, d'où vient le contact si utile).\n5. Tracer la source dans l'ATS.\n6. En cas de doute CGU / DPO : ne pas extraire, poser la question."
        ),
        h("Exemple professionnel"),
        t(
          "Pour le product designer Pixeline, le junior utilise d'abord le compte Recruiter de l'entreprise, puis des portfolios publics dont le footer affiche un e-mail professionnel. Il n'utilise pas d'extension d'extraction, ni de fausse identité, ni de requête conçue pour afficher des profils hors des règles du réseau. Deux designers répondent via le canal prévu. Un troisième a un formulaire « contact » sur son site : c'est ce canal qui est utilisé."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Créer un faux profil pour voir plus loin. Copier 300 profils dans un Excel perso. Acheter une base d'e-mails. Utiliser un « hack X-Ray » trouvé sur un forum. Contacter une personne sur son e-mail personnel recoupé avec un réseau scolaire, sans nécessité. Croire que « c'est public donc je fais ce que je veux » (le public n'efface ni CGU, ni RGPD, ni L. 1132-1)."
        ),
        h("Situations particulières"),
        t(
          "CVthèque payante : la personne a souvent consenti à être visible pour le recrutement ; lisez malgré tout les mentions et la date du CV. Page entreprise « notre équipe » : données souvent à des fins de présentation, pas de chasse ; contactez via le canal professionnel, avec sobriété. Mineurs / apprentis très jeunes : vigilance renforcée, canaux écoles, pas d'approche agressive. International : le droit applicable et les CGU du pays / de l'outil, avec les RH."
        ),
        h("Mise en pratique"),
        t(
          "Un collègue vous envoie « la requête X-Ray qui bypasse LinkedIn » et un fichier de 2 000 e-mails. Que faites-vous, dans l'ordre ? Distinguez principe de recherche publique, CGU, RGPD, hiérarchie."
        ),
        h("Correction détaillée"),
        t(
          "Vous n'utilisez ni la requête de bypass, ni le fichier. Vous informez les RH / DPO : base d'e-mails et outil de contournement ne sont pas un canal autorisé. Vous continuez sur les outils licenciés et les pages publiques sans extraction massive. Le principe « chercher ce qui est public » ne justifie pas le contournement. Vous ne relayer pas le fichier. Vous documentez le refus. Ce n'est pas du purisme : c'est le cadre du cours et de l'employeur."
        ),
      ],
    }),

    lesson({
      title: "Viviers, RGPD et sourcing : informer, durée, opposition",
      description:
        "Traiter les personnes sourcées comme des personnes concernées : information, finalité, 2 ans recommandés, droit d'opposition.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez ce que vous devez à une personne sourcée au regard du guide CNIL recrutement et du référentiel 2026 : informer, limiter la durée du vivier (recommandation 2 ans à compter du dernier contact), honorer l'opposition, distinguer vivier et archive probatoire."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Sourcer, c'est collecter. Un nom, un intitulé, un e-mail, une note « à recontacter pour le poste X » sont des données personnelles. Le traitement a une finalité : recrutement pour un poste ou un vivier. La personne n'a pas toujours postulé : l'information n'est donc pas « implicite ». Le guide CNIL du recrutement (30/01/2023) et la fiche TPE/PME demandent de se poser les questions d'information, de durée, de droits. Le référentiel CNIL durées de conservation RH (2 avril 2026, mis à jour 20 mai 2026) rappelle : candidat retenu, base active le temps de la procédure puis réemploi RH ; candidat non retenu, archivage intermédiaire 5 ans à compter de la date à laquelle le poste a été pourvu, à des fins probatoires (L. 1134-5) — obligation de conservation de preuve, pas une base d'appels ; vivier / CVthèque, jusqu'à 2 ans à compter du dernier contact, sauf opposition — recommandation CNIL, pas une durée unique imposée par le RGPD lui-même.\n\nPour le sourcing, trois gestes sont non négociables dans une pratique conforme à ces recommandations. Informer : qui vous êtes, pourquoi vous contactez, où vous avez vu le profil si c'est utile et non anxiogène, comment s'opposer, durée envisagée si vous gardez la fiche. Tracer le dernier contact : c'est lui qui fait courir la durée recommandée de 2 ans. Honorer l'opposition : plus de relance vivier, retrait de la base active ; l'archive de preuve d'un process déjà ouvert est un autre traitement, que les RH / DPO calent.\n\nVous ne conservez pas « au cas où » un profil sourcé en 2019. Vous ne notez pas « accent » ou « trop âgée ». Vous ne transférez pas la liste à un manager sur un WhatsApp personnel. La minimisation s'applique : pas de copie du CV complet de 12 pages dans six outils. Un ATS paramétré vaut mieux qu'un tableur sauvage.\n\nL'information n'a pas à être un roman juridique dans le premier InMail, mais le premier contact doit être transparent et un lien ou une phrase doit indiquer comment exercer les droits. La politique de confidentialité carrière de l'entreprise, si elle existe, est le bon renvoi — encore faut-il qu'elle couvre le sourcing, pas seulement les candidatures via le formulaire."
        ),
        note(
          "2 ans = recommandation d'autorité pour le vivier, à compter du dernier contact, avec information et opposition possible. 5 ans = archive probatoire des non-retenus, autre finalité. Ne confondez pas les deux, ne présentez pas 2 ans comme « la » durée RGPD unique."
        ),
        h("Méthode opérationnelle"),
        t(
          "1. N'entrer un profil sourcé dans l'ATS qu'avec la finalité, la source, la date.\n2. Au premier message : identité, poste, phrase d'information / lien politique + possibilité de dire non.\n3. Si la personne refuse : statut opposition, plus de relance.\n4. Si elle dit « pas maintenant » : vivier, date de relance, dernier contact.\n5. Purge selon la politique (reco 2 ans).\n6. Escalade DPO / RH si une liste arrive de l'extérieur."
        ),
        code(`PHRASE D'INFORMATION — à adapter (pas un contrat)

« Je vous contacte au sujet d'un poste de [intitulé] chez [employeur]. Vos coordonnées professionnelles seront utilisées uniquement pour ce recrutement et, si vous l'acceptez, pour d'éventuels postes comparables. Vous pouvez refuser ce contact et demander l'effacement de cette fiche. Notre politique : [lien]. »`),
        h("Exemple professionnel"),
        t(
          "Un technicien sourcé répond : « Ne me recontactez plus. » Le junior passe la fiche en opposition, arrête les relances, n'en parle pas sur le groupe WhatsApp de l'atelier. Si aucun process formel n'avait démarré, il n'y a pas de dossier « non retenu » à archiver 5 ans comme un candidat écarté d'un poste pourvu : ce n'était qu'une approche. En cas de doute, RH/DPO."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Entrer 400 profils « au cas où » sans message. Relancer 3 ans plus tard. Noter un critère protégé. Copier la CVthèque du jobboard dans un Drive personnel. Dire « on a le droit de tout garder 5 ans donc je t'appelle ». Oublier d'informer parce que « c'est LinkedIn, tout le monde sait »."
        ),
        h("Situations particulières"),
        t(
          "Personne déjà candidate l'an dernier : vérifier le traitement (vivier informé vs archive). Cooptation : le salarié n'est pas une base RGPD pirate ; informez la personne cooptée. Cabinet : le cabinet et vous êtes souvent deux responsables / sous-traitants à clarifier par contrat, pas par à-peu-près. Opposition pendant un process ouvert : stop relances commerciales ; le process en cours a ses règles, à faire dire par les RH."
        ),
        h("Mise en pratique"),
        t(
          "Vous avez sourcé 25 personnes le 13/10/2024, 3 ont répondu, 22 n'ont jamais été informées. Nous sommes le 13/10/2026. Que faites-vous des 22, des 3, et que dites-vous au manager qui veut « tout relancer » ?"
        ),
        h("Correction détaillée"),
        t(
          "Les 22 non informées : vous ne les relancez pas comme un vivier sain. Avec RH/DPO : information tardive ou suppression, selon la politique ; 2 ans sans contact et sans information, ce n'est pas un vivier recommandé. Les 3 en contact : regarder la date du dernier contact ; si < 2 ans et pas d'opposition, relance possible sur un poste réel, en réinformant. Le manager : non, on ne « tout relance » pas ; on extrait le vivier conforme. Vous ne justifiez pas la relance par les 5 ans probatoires."
        ),
      ],
    }),

    lesson({
      title: "Messages d'approche : structure, personnalisation, limites",
      description:
        "Écrire un premier message court, vrai, personnalisé, sans promesse d'embauche et sans question interdite.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez assembler un message d'approche en cinq blocs (qui, pourquoi vous, le poste en vrai, l'appel à action, l'information RGPD), personnaliser sans flatterie, et éviter les questions et promesses hors cadre."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le message d'approche est le produit visible du sourcing. S'il est générique, la personne le range avec le spam. S'il est mensonger, vous partez sur une allégation (même logique de loyauté que L. 5331-3 : nature, lieu, rémunération). S'il pose d'emblée l'âge, les enfants, la photo, vous sortez de L. 1221-6 et de L. 1132-1. Un bon message tient en une quinzaine de lignes : qui vous êtes, pourquoi ce profil (un fait professionnel : une mission, un outil, un secteur), ce qu'est le poste sans brochure, ce que vous proposez comme prochaine étape, comment dire non.\n\nLa personnalisation n'est pas « j'adore votre parcours ». C'est un élément vérifiable, lié à l'emploi : une mission de maintenance 3×8, un portefeuille TPE, un portfolio produit. Copier la première ligne du profil et la recoller n'est pas une personnalisation, c'est un aveu d'automatisation. Le vouvoiement est la norme de ce cours et du métier, y compris avec un junior.\n\nVous n'écrivez pas « vous êtes le candidat idéal, le poste est à vous ». Vous n'êtes pas en promesse d'embauche (F39588). Vous n'inventez pas le salaire. Si la fourchette est affichable et vraie, vous pouvez la donner ; au 13/10/2026 ce n'est pas une obligation française consolidée, c'est une bonne pratique de transparence, et si vous la donnez elle est exacte. Vous ne demandez pas de CV « + photo + situation ». Vous proposez un échange de 15 minutes.\n\nLe canal compte : InMail, e-mail professionnel affiché, pas le SMS personnel de 22 h, pas le compte personnel du conjoint. Une seule intention : obtenir un accord de conversation, pas un entretien panel le lendemain. La suite (préqualification) a son module."
        ),
        note(
          "Le premier message n'est pas un entretien. Pas de questions sur la santé, la famille, l'origine, le logement, le compte bancaire. Pas de promesse de contrat. Pas de flou sur l'intérim vs CDI. Information : possibilité de refuser le contact."
        ),
        h("Méthode opérationnelle"),
        t(
          "1. Une phrase de personnalisation factuelle.\n2. Intitulé, contrat, lieu, horaires — les 4 vrais.\n3. Une mission concrète, pas cinq valeurs.\n4. Appel à action unique (créneau ou « oui/non/plus tard »).\n5. Phrase d'information / opposition.\n6. Relire : un critère protégé ? une allégation ? un anglais non expliqué pour un poste français ?\n7. Enregistrer le modèle adapté (pas le spam de masse)."
        ),
        code(`STRUCTURE TYPE

Objet : [Métier] — [employeur fictif ou réel] — échange de 15 min ?

Bonjour [prénom],
[1 phrase : qui je suis]
[1 phrase : un fait de votre parcours lié au poste]
Nous recrutons [intitulé], [contrat], [lieu / horaires]. Missions : [2 verbes].
Si un échange vous intéresse, je vous propose [modalité]. Si ce n'est pas le moment, dites-le-moi, je n'insisterai pas.
[Phrase information données]
Cordialement,
[Nom, fonction, téléphone]`),
        h("Exemple professionnel"),
        t(
          "Mauvaise ouverture : « Hey, ton profil déchire, on recrute des rockstars, package ouf, dispo pour un call yesterday ? » Ouverture utile vers un commercial Alizé : mention d'un portefeuille TPE, CDI, Lyon, terrain, fourchette si vraie, 15 minutes, possibilité de dire non. Le ton reste professionnel. Le mot « ninja » a disparu."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Message identique à 80 personnes. Tutoiement non sollicité. « Jeune équipe ». Salaire fantaisiste. « CDI » pour une mission d'intérim. Demander d'emblée les prétentions et le préavis comme un interrogatoire. Oublier qui on est. Pièce jointe trop lourde. Lien de tracking douteux."
        ),
        h("Situations particulières"),
        t(
          "Personne en poste, confidentialité : proposez un canal, ne contactez pas le standard de son employeur actuel. Pas de réponse : voir leçon relances, pas un second message le soir même. Refus poli : remerciez, opposition si demandée, porte ouverte sans harcèlement. Profil international : français si L. 5331-4 oriente déjà vos écrits d'offre ; un message en anglais peut s'ajouter si le poste l'exige vraiment."
        ),
        h("Mise en pratique"),
        t(
          "Réécrivez en structure type ce message : « Salut Inès, on cherche une fille pour faire du RH, photo svp, 23-26 ans, 50k tesla, dispo dimanche 8h. »"
        ),
        h("Correction détaillée"),
        t(
          "Vous vouvoyez. Vous retirez fille, photo, âge, Tesla fictive, créneau abusif. Vous nommez le poste (assistant RH), le contrat, le lieu, deux missions, un échange en semaine, l'information RGPD. Inès Morel est un nom d'emprunt : en réel, vous n'inventez pas un prénom trouvé sur une photo. Le salaire, s'il apparaît, est la fourchette vraie."
        ),
      ],
    }),

    lesson({
      title: "Relances, campagne et suivi des approches",
      description:
        "Relancer sans harceler, suivre une campagne simple, lire un taux de réponse interne sans statistique inventée.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez poser une règle de relance (nombre, délai, stop), piloter une petite campagne (cible, message, dates, ATS), et calculer un taux de réponse sur votre volume réel, sans le comparer à un « benchmark » fantaisiste."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Une approche n'est pas un unique tir. Les personnes en poste lisent plus tard, doutent, ou n'ont pas vu le message. Une relance courte, à quelques jours, qui ajoute une information utile (date d'un échange, précision d'horaire, fourchette vraie) est une bonne pratique. Une relance quotidienne, un SMS le dimanche, un message au responsable hiérarchique actuel, sont du harcèlement, pas du sourcing. Deux relances maximum, puis stop, est une règle interne raisonnable — politique / bonne pratique, pas un article du Code. L'opposition, elle, arrête tout, immédiatement.\n\nUne campagne de sourcing est un lot : même poste, même semaine, même message-cadre, liste ciblée, suivi. Elle a un début et une fin. Elle n'est pas « j'envoie dès que je m'ennuie ». Le suivi tient dans l'ATS : envoyé, relancé, répondu oui / non / plus tard, opposition, préqualifié, abandon. Sans ces statuts, vous ne savez pas si le message est mauvais, si la cible est fausse, ou si le manager ne donne pas de créneaux.\n\nLe taux de réponse se calcule : réponses / messages délivrés, sur cette campagne. Vous le comparez à vos campagnes précédentes, pas à un chiffre « 40 % sur LinkedIn » trouvé dans un post. Ce cours n'avance aucune statistique de marché. Un taux faible oriente une hypothèse : cible trop large, message creux, contrat peu lisible, horaires cachés, marque inconnue, mauvaise heure d'envoi. Vous testez une variable à la fois (objet, première phrase, mention du 3×8). Vous n'ajoutez pas un critère d'âge pour « améliorer le taux ».\n\nLa campagne se coordonne avec l'annonce (passif) : même vérité sur le poste. Relancer un sourcé en lui disant « CDI jour » alors que l'annonce dit 3×8 est une allégation. Clôturer la campagne lorsque le poste est pourvu : plus de premiers messages, relances d'usage pour les conversations déjà ouvertes, information des personnes en cours."
        ),
        note(
          "Pas de statistique inventée. Votre taux n'existe que sur votre dénominateur. Deux relances puis stop = bonne pratique proposée ici, à caler sur la politique interne. Opposition = zéro relance."
        ),
        h("Méthode opérationnelle"),
        t(
          "1. Figer la liste (qualité > quantité) et le message-cadre.\n2. Envoi sur un créneau professionnel.\n3. Relance 1 à J+4 / J+5, une phrase nouvelle.\n4. Relance 2 optionnelle à J+10, puis clôture de la fiche « sans réponse ».\n5. Point de campagne : volume, réponses, causes, décision (élargir la requête, revoir le brief, arrêter).\n6. Dès opposition ou poste pourvu : stop nouveaux envois."
        ),
        code(`SUIVI DE CAMPAGNE — colonnes minimales

id ATS | intitulé cible | date envoi | relance 1 | relance 2
réponse (oui/non/plus tard/opposition/silence)
suite (préqualif / vivier / stop)
commentaire professionnel (faits)`),
        h("Exemple professionnel"),
        t(
          "Campagne Forges : 18 techniciens sourcés, message honnête sur le 3×8, relance unique à J+5 mentionnant l'intérim passerelle si RH l'a validé. 5 réponses, 2 « non merci », 1 opposition, 10 silences. Taux de réponse = 5/18. Le junior ne dit pas « le marché est à 25 % ». Il dit : le 3×8 dit vrai a réduit le volume et augmenté la qualité des 5. Il ne relance pas les 10 une troisième fois."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Relancer ceux qui ont dit non. Inventer un taux pour le COMEX. Envoyer la relance plus longue que le premier message. Changer le contrat entre deux messages. Mesurer les « vues » et les prendre pour des accords. Continuer la campagne une semaine après l'embauche."
        ),
        h("Situations particulières"),
        t(
          "Réponse « rappelez en janvier » : vivier, date, information, pas une relance hebdomadaire. Réponse du manager actuel de la personne : vous n'engagez pas une négociation parallèle, vous protégez la confidentialité. Canal saturé (limites de l'outil) : vous n'installez pas un robot de contournement ; vous étalez ou vous changez de canal autorisé."
        ),
        h("Mise en pratique"),
        t(
          "12 messages, 2 réponses oui, 1 non, 1 opposition, 8 silences. Relances déjà faites (2). Le manager veut « harceler les 8, et recontacter le non ». Calculez le taux et rédigez votre décision."
        ),
        h("Correction détaillée"),
        t(
          "Taux de réponse = 4/12 si l'on compte toute réponse, ou 2/12 d'accords d'échange : dites lequel vous utilisez. Les 8 silences après 2 relances : stop. Le « non » : stop, éventuellement vivier seulement s'il a dit « plus tard », ce qui n'est pas le cas. L'opposition : stop et retrait actif. Vous proposez d'améliorer la cible ou le brief, pas d'intensifier la pression. Aucun benchmark inventé."
        ),
      ],
    }),

    lesson({
      title: "Quatre messages d'approche modèles",
      description:
        "Disposer de quatre textes complets : junior, profil pénurique, reconversion, intérim — à adapter, jamais à spammer.",
      minutes: 24,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous disposez de quatre messages d'approche rédigés, vos tutoyés, factuels, informatifs au sens RGPD, sans promesse d'embauche, et vous savez lequel ouvrir selon le public. Vous savez les adapter sans y réintroduire d'illicite."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le junior n'a pas le même rapport au recrutement qu'un profil pénurique en poste, qu'une personne en reconversion, ou qu'une personne disponible en intérim. Le premier a besoin de clarté sur le métier et de respect (pas de condescendance, pas de « petit job »). Le deuxième a besoin que l'on respecte son temps, que l'on dise le vrai du poste (horaires, lieu, package) et que l'on ne le flatte pas. La reconversion a besoin que l'on parle de compétences transférables, pas de « défi personnel », et que l'on ne cache pas ce qui manque (habilitation, outil) — L. 1221-6 : on évalue l'aptitude professionnelle, on n'humilie pas un parcours. L'intérim a besoin que le contrat soit nommé : mission, durée, entreprise utilisatrice, pas un CDI fantôme (L. 5331-3 par analogie de loyauté : nature de l'emploi).\n\nLes quatre textes ci-dessous sont fictifs, vouvoyés, datables, avec une phrase d'information. Ils ne sont pas des promesses (F39588). Ils n'affichent un salaire que lorsqu'il est présenté comme une fourchette exacte et comme un choix de transparence, pas comme une obligation française consolidée au 13/10/2026. Vous changerez les noms d'emprunt, les lieux, les fourchettes. Vous n'enverrez pas les quatre d'un coup à la même personne. Vous tracerez l'envoi dans l'ATS.\n\nCes modèles n'enseignent aucun contournement d'outil : ils s'envoient dans le canal autorisé. Ils ne demandent ni photo, ni âge, ni famille. Ils tiennent en un écran."
        ),
        note(
          "Noms : emprunts évidents. Entreprises : fictives. Adaptez. N'ajoutez pas de photo, d'âge, de « native », de Tesla. Deux relances max ensuite, stop si opposition."
        ),
        h("Méthode opérationnelle"),
        t(
          "Choisir le modèle selon le public, coller un fait vrai du profil, vérifier contrat/lieu/horaires, envoyer, tracer, relancer selon la leçon précédente."
        ),
        h("Exemple professionnel"),
        t(
          "Les quatre messages tiennent lieu d'exemples de PME, ETI, startup et agence d'intérim."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Envoyer le modèle pénurique à un junior (sur-promesse). Envoyer le modèle intérim en oubliant le mot intérim. tutoyer la reconversion. Copier le modèle sans aucun fait du profil. Ajouter « jeune diplômé » dans l'objet."
        ),
        h("Situations particulières"),
        t(
          "Profil à la fois junior et reconversion : un seul message, compétences transférables + niveau. Profil pénurique en 3×8 : le modèle 2 + horaires vrais dès la première ligne. Mission d'intérim susceptible de CDI : le dire seulement si l'entreprise utilisatrice l'a autorisé, jamais comme une garantie."
        ),
        h("Mise en pratique"),
        t(
          "Pour Samira Benali (nom d'emprunt), 18 mois d'administration du personnel en PME, vous ouvrez un CDI assistant RH ETI. Choisissez le modèle, ajoutez une phrase de personnalisation fictive mais professionnelle, et indiquez la relance prévue."
        ),
        code(`MODÈLE 1 — Junior
Objet : Assistant RH — Forges & Maintenance du Centre — 15 min d'échange ?

Bonjour Samira,
Je suis [prénom nom], chargé de recrutement chez Forges & Maintenance du Centre (ETI industrielle, site de Ville-sur-Cher — noms d'emprunt).
Votre expérience d'administration du personnel en PME (éléments de paie, dossiers d'entrée) correspond aux missions d'un CDI d'assistant RH de site : paie transmise au prestataire, dossiers, organisation des entretiens, accueil des embauches.
Contrat : CDI, 35 h de jour, poste sédentaire, pas d'anglais requis. Fourchette brute annuelle 24-27 k€ selon expérience (montant tenable — transparence, pas une obligation légale d'affichage au 13/10/2026).
Je vous propose un échange de 15 minutes cette semaine ou la suivante. Si le poste ne vous convient pas, répondez simplement non, je n'insisterai pas.
Ce message est envoyé pour ce recrutement ; vous pouvez demander à ne plus être contacté(e).
Cordialement,
[signature]`),
        code(`MODÈLE 2 — Profil pénurique (technicien en poste)
Objet : Technicien de maintenance mécanique — CDI 3×8 — échange confidentiel

Bonjour Éric,
Je suis [prénom nom], recruteur au site de Forges & Maintenance du Centre (fictif). Je vous contacte à propos de votre parcours de maintenance mécanique en industrie.
Nous ouvrons un CDI de technicien de maintenance mécanique, en 3×8, habilitation électrique souhaitée, site à 18 km de [ville]. Je vous le dis d'emblée : ce n'est pas un poste de jour. Si une passerelle intérim est validée par les RH pour tenir le planning, je vous l'indiquerai clairement, ce n'est pas un CDI déguisé.
Je ne vous demande pas de CV par retour. Un échange de 15 minutes, hors de vos heures d'atelier, suffit pour voir si un déplacement de dossier a du sens. Confidentialité : je ne contacte pas votre employeur.
Si vous n'êtes pas intéressé, dites-le ; si vous l'êtes plus tard, dites-le aussi. Opposition et information : [lien politique RH].
Cordialement,
[signature]`),
        code(`MODÈLE 3 — Reconversion
Objet : Recrutement — compétences de formateur vers un poste de chargé de recrutement junior

Bonjour Inès,
Je suis [prénom nom], recruteur chez Alizé Services (PME fictive). J'ai lu votre expérience d'animation de formation et d'évaluation de stagiaires : ce sont des compétences transférables vers un poste de chargé de recrutement junior (cadrage d'entretiens, écoute, restitution), pas une « seconde chance » à mériter.
Le poste : CDI, bassin lyonnais, recrutement de profils services, process à apprendre (sourcing, grilles, cadre légal). Ce que le poste n'est pas : un statut de responsable RH le premier mois. Ce qui sera évalué : aptitudes professionnelles en lien avec l'emploi (L. 1221-6), pas votre biographie personnelle.
Si vous souhaitez un échange de 20 minutes pour confronter votre projet et nos critères, je suis disponible [créneaux]. Vous pouvez refuser ce contact.
Cordialement,
[signature]`),
        code(`MODÈLE 4 — Intérim
Objet : Mission d'intérim — préparateur de commandes — 4 mois — Logi-Flèche (fictif)

Bonjour Karim,
Je suis [prénom nom], chargé de recrutement à l'agence [nom fictif d'agence]. Je vous contacte pour une mission d'intérim — je précise le mot : ce n'est pas une offre de CDI.
Poste : préparateur de commandes, CDD d'usage / mission de 4 mois environ, horaires 5 h-13 h, plateforme de Saint-Orain, station debout et port de charges. Dates visées : 2 novembre 2026 au 29 février 2027. Rémunération de mission : alignée sur le poste de l'entreprise utilisatrice (détail à l'entretien, sans montant fantaisiste ici).
Si vous êtes disponible et intéressé, je vous propose un appel de préqualification de 10 minutes. Pas de photo, pas de questions de santé ni de situation de famille. Si cette mission ne vous convient pas, répondez non ; vous pouvez aussi demander à ne plus être contacté pour ce type de besoin.
Cordialement,
[signature]`),
        h("Correction détaillée"),
        t(
          "Pour Samira Benali, le modèle 1 est le bon (junior / premier niveau RH), pas le 4 (intérim) ni le 2 (pénurique atelier). Personnalisation : citer l'administration du personnel et la paie de PME, pas « votre énergie ». Relance : une fois à J+5, puis stop. Si elle dit non : vivier seulement avec accord, sinon opposition. Vous ne basculez pas sur le modèle reconversion sans élément de reconversion. Vous ne promettez pas le poste dans la relance."
        ),
      ],
    }),

    quizLesson({
      title: "Quiz — Sourcing et recherche de candidats",
      description: "Dix questions : actif/passif, booléen, CGU, RGPD, messages.",
      passing_score: 70,
      minutes: 12,
      questions: [
        q({
          question: "Le sourcing actif, c'est principalement :",
          options: [
            "A. Aller identifier et contacter des personnes qui n'ont pas postulé, dans un cadre RGPD, CGU et non-discrimination — ce n'est pas une obligation légale de canal.",
            "B. Attendre les réponses à l'annonce, uniquement.",
            "C. Extraire en masse des e-mails en contournant les CGU.",
            "D. Un droit de poser n'importe quelle question, L. 1221-6 ne s'appliquant pas.",
          ],
          correct: 0,
          explanation:
            "Actif = vous allez vers la personne. Passif = elle vient à vous. L. 1221-6 s'applique aux informations demandées, sous quelque forme. Le contournement de CGU n'est pas enseigné ni autorisé ici. Aucun article n'impose de chasser.",
        }),
        q({
          question: "Dans une requête, OR sert surtout à :",
          options: [
            "A. Relier des synonymes ou alternatives (au moins un terme), souvent groupés entre parenthèses.",
            "B. Exiger que tous les termes soient présents.",
            "C. Cibler un sexe.",
            "D. Contourner le paywall d'un réseau.",
          ],
          correct: 0,
          explanation:
            "AND exige, OR élargit, NOT exclut. Les parenthèses évitent les liaisons ambiguës. OR n'est pas un outil de discrimination ni de bypass.",
        }),
        q({
          question: "Que font les guillemets dans « chargé de clientèle » ?",
          options: [
            "A. Ils imposent l'expression exacte, plutôt que les mots séparés.",
            "B. Ils excluent le terme (équivalent de NOT).",
            "C. Ils marquent un critère d'âge.",
            "D. Ils rendent la requête conforme au RGPD à eux seuls.",
          ],
          correct: 0,
          explanation:
            "Les guillemets sont une brique de précision linguistique. Ils n'ont aucun effet juridique magique. NOT est l'exclusion. L'âge n'a rien à faire dans la requête.",
        }),
        q({
          question:
            "Une requête « commercial AND femme AND 25-30 » est :",
          options: [
            "A. À jeter : usage discriminatoire de la technique (L. 1132-1), sans lien nécessaire avec l'emploi (L. 1221-6).",
            "B. Une bonne pratique de ciblage recommandée par la CNIL.",
            "C. Obligatoire pour les métiers dits « en tension ».",
            "D. Acceptable si l'on ajoute H/F dans l'annonce.",
          ],
          correct: 0,
          explanation:
            "La booléenne n'autorise pas un tri par sexe ou âge. La CNIL n'encourage pas ce ciblage. H/F dans l'annonce ne blanchit pas une requête discriminatoire. La tension du métier n'ouvre aucune exception.",
        }),
        q({
          question: "Le principe dit « X-Ray », dans ce cours, désigne :",
          options: [
            "A. Le principe d'une recherche sur des pages déjà publiques indexées par un moteur — sans tutoriel pour contourner CGU, limites de compte ou paywall.",
            "B. Un script fourni dans le module pour by-passer LinkedIn.",
            "C. L'obligation légale de scraper toutes les bases.",
            "D. Un test psychologique.",
          ],
          correct: 0,
          explanation:
            "Le cours pose le principe et s'arrête là. Pas de procédure de contournement. Pas d'obligation de scraper. Ce n'est pas un outil d'évaluation au sens L. 1221-8.",
        }),
        q({
          question: "La durée « 2 ans » pour un vivier de personnes sourcées, selon la CNIL, est :",
          options: [
            "A. Une recommandation (jusqu'à 2 ans à compter du dernier contact, information, opposition), distincte de l'archive 5 ans des non-retenus (L. 1134-5 / référentiel 2026).",
            "B. Un minimum : il est interdit de supprimer avant 2 ans, même en cas d'opposition.",
            "C. La durée pendant laquelle on peut contourner les CGU.",
            "D. Identique, pour tous les traitements, à une obligation RGPD unique chiffrée dans le règlement.",
          ],
          correct: 0,
          explanation:
            "Même doctrine qu'au module stratégie. Opposition = arrêt du vivier actif. Le RGPD n'écrit pas « 2 ans » comme unique chiffre. Les 5 ans sont la preuve, pas la chasse.",
        }),
        q({
          question: "Au premier message d'approche, vous devez notamment :",
          options: [
            "A. Dire qui vous êtes, décrire le poste sans mensonge, proposer une étape, permettre de refuser le contact — sans question interdite ni promesse d'embauche.",
            "B. Exiger photo, âge et situation de famille.",
            "C. Écrire « vous êtes embauché, signature lundi ».",
            "D. Cacher qu'il s'agit d'intérim pour « avoir un call ».",
          ],
          correct: 0,
          explanation:
            "Structure du cours + L. 1132-1 / L. 1221-6 + F39588 (pas de promesse involontaire) + loyauté sur la nature du contrat (intérim nommé). Photo/âge/famille : non.",
        }),
        q({
          question: "Un taux de réponse de campagne se lit ainsi :",
          options: [
            "A. Réponses constatées / messages délivrés sur CETTE campagne, comparées à votre historique interne — sans statistique de marché inventée.",
            "B. Toujours 40 %, chiffre national du cours.",
            "C. Nombre de vues LinkedIn divisé par l'âge moyen.",
            "D. Uniquement le nombre d'InMail achetés.",
          ],
          correct: 0,
          explanation:
            "Le cours interdit d'inventer des stats. Le dénominateur doit être clair. Les vues et l'âge ne sont pas un taux de réponse, et l'âge n'est pas un indicateur licite de pilotage.",
        }),
        q({
          question: "Après deux relances sans réponse, la bonne pratique enseignée est :",
          options: [
            "A. Stopper, classer « sans réponse », ne pas harceler — l'opposition, si elle arrive, arrête tout immédiatement.",
            "B. Appeler le manager actuel de la personne au standard.",
            "C. Envoyer un message par jour pendant un mois.",
            "D. Acheter une base d'e-mails pour multiplier les canaux.",
          ],
          correct: 0,
          explanation:
            "Deux relances puis stop = politique / bonne pratique du cours. Harcèlement, contact de l'employeur actuel et bases achetées sont hors cadre (confidentialité, RGPD, déontologie).",
        }),
        q({
          question: "Dans le message d'approche intérim, le mot « intérim » doit :",
          options: [
            "A. Figurer clairement : la nature de l'emploi ne se maquille pas en CDI (loyauté / même esprit que L. 5331-3 sur la nature de l'emploi).",
            "B. Être caché jusqu'à la signature.",
            "C. Être remplacé par « CDI évolutif garanti ».",
            "D. Être réservé à l'oral, jamais à l'écrit (RGPD).",
          ],
          correct: 0,
          explanation:
            "Le modèle 4 nomme la mission. Un CDI « garanti » serait une allégation. Le RGPD n'interdit pas d'écrire « intérim » ; il encadre les données. L'oral ne répare pas un écrit trompeur.",
        }),
      ],
    }),
  ],
};
