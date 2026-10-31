import { pack, quizLesson, q, code, h } from "../lib.mjs";

export default {
  position: 4,
  title: "Dossiers de décision",
  description:
    "Choisir la bonne instance, construire un dossier d'aide à la décision, présenter en comité et arbitrer sans diluer la décision demandée. Cas fil rouge : Banque Horizon (fictive), offre jeunes actifs 25-35 ans.",
  lessons: [
    pack({
      title: "Les instances de décision",
      description:
        "Distinguer comité projet, COPIL, comité d'investissement, CODIR et sponsor, et n'y porter que la décision qui leur appartient.",
      minutes: 5,
      objectifs:
        "À la fin de cette leçon, vous savez nommer cinq lieux de décision, ce que chacun peut trancher, et ce que le chef de projet y prépare — sans se prendre pour le valideur réglementaire ni pour le sponsor.",
      theorie:
        "Une instance de décision n'est pas une réunion. C'est un organe avec un mandat, un rythme, et un type de décision qu'il a le pouvoir de prendre. Confondre les instances fait perdre des semaines et ramène un « on en a parlé » sans arbitrage.\n\nCinq lieux, à Banque Horizon (banque fictive) comme ailleurs.\n\nLe comité projet réunit l'équipe opérationnelle. Il tranche l'exécution dans le cadre validé : tickets, ressources, livrables. Il ne réouvre pas le business case. Cadence : hebdomadaire. Le chef de projet l'anime et formalise les décisions.\n\nLe COPIL (comité de pilotage) réunit responsables métier et sponsor. Il arbitre dans l'enveloppe validée : périmètre, risques majeurs, priorités, escalade. Cadence : mensuelle. Pas une liste de tâches.\n\nLe comité d'investissement alloue l'argent. Il lit le business case, le ROI, le payback. Ce n'est pas le lieu du slogan.\n\nLe CODIR aligne la stratégie et arbitre entre projets. On y va rarement, avec le sponsor, pour une décision hors mandat du COPIL : enveloppe nouvelle, arrêt, conflit de portefeuille.\n\nLe sponsor n'est pas une instance collective : c'est le décideur nommé, canal d'escalade. Le chef de projet prépare et recommande. Il ne se substitue pas au sponsor et ne valide jamais un avis conformité, juridique ou ACPR.",
      methode:
        "Avant chaque réunion, écrivez trois lignes : (1) quelle instance ; (2) quelle décision, formulée en GO / GO sous conditions / NO GO / report ; (3) ce que cette instance n'a pas à retravailler. Si la décision sort du mandat, changez d'instance, n'ajoutez pas un point à l'ordre du jour.\n\nCarte minimale à tenir à jour : nom du sponsor, rythme COPIL, seuil d'investissement (politique interne), qui porte la saisine conformité. Sans cette carte, vous improviserez le destinataire.\n\nLe chef de projet envoie le dossier 48 heures avant un COPIL ou un comité d'investissement. Un comité projet peut vivre avec un support du jour, à condition que les décisions y soient écrites le soir même.",
      noteText:
        "Politique interne : le seuil qui déclenche le comité d'investissement (montant, durée, risque) est propre à l'entreprise. Ce n'est pas une règle unique. Demandez-le par écrit. Le chef de projet n'est pas le valideur réglementaire : il saisit conformité, risques et juridique, il n'émet pas l'avis ACPR.",
      exemple:
        "Banque Horizon (fictive). Le digital veut dépenser 8 k€ d'A/B tests dans l'enveloppe déjà validée de 120 k€. Le chef de projet junior met le point au CODIR « pour information stratégique ». Le DG coupe : ce n'est pas un sujet de direction. Le bon lieu est le comité projet, avec une information au sponsor si le test touche le parcours de souscription. Inversement, une demande de 40 k€ hors enveloppe n'est pas un « petit COPIL » : c'est un comité d'investissement, préparé avec le sponsor.",
      extra: [
        h("Carte des instances — à remplir à l'ouverture du projet"),
        code(`INSTANCE              MANDAT TYPIQUE                         RYTHME        QUI ANIME
Comité projet        Exécution dans le cadre validé          Hebdo         Chef de projet
COPIL                Arbitrage périmètre / risques / prio    Mensuel       CP + sponsor
Comité invest.       Allocation d'argent, BC, ROI, payback   Selon seuil   Finance + sponsor
CODIR                Alignement stratégique, portefeuille    Selon agenda  Sponsor (CP en appui)
Sponsor              Décision nommée, escalade, crédit       Continu       Le sponsor décide
                       Le CP prépare, ne tranche pas à sa place

CE QUE LE CP N'Y VALIDE PAS
Avis conformité, juridique, risques, ACPR : saisine, jamais signature.`),
      ],
      erreurs:
        "Tout monter au CODIR « pour se couvrir ». Tout garder en comité projet pour aller plus vite. Confondre sponsor et chef de projet. Présenter un wording de campagne en comité d'investissement. Demander un avis « informel » à trois membres du COPIL dans le couloir, puis considérer que c'est décidé.",
      particuliers:
        "PME de 40 personnes : COPIL et CODIR sont souvent la même table. Le principe reste : séparer la décision d'argent, la décision de périmètre et le suivi d'exécution, même si les visages sont les mêmes. Startup : le fondateur est sponsor et comité d'investissement ; documentez quand même la décision, une phrase datée suffit. Distribution / réseau : un COPIL national n'arbitre pas le planning d'une agence ; un comité réseau le fait, dans le cadre. Assurance (fictive) : même cartographie, avec un poids plus fort de la conformité sur le chemin critique — le CP saisit, il ne valide pas.",
      exercice:
        "Banque Horizon (fictive), offre jeunes actifs 25-35 ans. Classez chaque sujet dans la bonne instance (comité projet, COPIL, comité d'investissement, CODIR, sponsor) et justifiez en une phrase : (1) choisir la couleur du bouton « Ouvrir un compte » ; (2) déplacer 15 k€ de média vers l'IT dans l'enveloppe 120 k€ déjà validée ; (3) demander 40 k€ de plus pour un partenaire data ; (4) arrêter le projet au profit d'une autre offre du portefeuille ; (5) un désaccord marketing / réseau sur la cible 25-35 ans que le COPIL n'a pas tranché.",
      correction:
        "1. Comité projet : exécution graphique dans le cadre. 2. COPIL : réallocation dans l'enveloppe validée, impact mix marketing/IT, le comité d'investissement n'a pas à revoter 15 k€ déjà autorisés. 3. Comité d'investissement : argent nouveau, hors enveloppe, avec mise à jour du BC (coûts, CA, ROI). 4. CODIR : arbitrage de portefeuille, le projet ne s'arrête pas tout seul en COPIL. 5. Sponsor : escalade d'un désaccord que le COPIL n'a pas clos ; le CP prépare la note, le sponsor tranche ou emmène au CODIR. Dans aucun cas le CP « valide la conformité ».",
    }),
    pack({
      title: "Le dossier d'aide à la décision",
      description:
        "Structurer une note en dix points, séparer la page exécutive des annexes, et recommander un scénario comparable.",
      minutes: 6,
      objectifs:
        "Vous savez construire un dossier d'aide à la décision en dix points, rédiger une page exécutive lisible en huit minutes, et renvoyer les preuves dans des annexes. Vous distinguez recommandation du chef de projet et décision de l'instance.",
      theorie:
        "Un dossier d'aide à la décision n'est pas un roman de projet. C'est l'outil pour faire prendre une décision datée, par une instance nommée, sur des scénarios comparables. S'il ne dit pas ce que l'on vote, c'est un compte rendu d'avancement déguisé.\n\nDix points, dans cet ordre : (1) objet de la décision, une phrase ; (2) contexte utile, pas l'historique ; (3) problème ou opportunité ; (4) scénarios, deux ou trois, y compris le statu quo s'il est un vrai choix ; (5) critères d'arbitrage avant le comparatif ; (6) comparatif coût, délai, impact, risque ; (7) recommandation et conditions ; (8) décision demandée : GO, GO sous conditions, NO GO, report ; (9) impacts si GO — budget, RH, SI, saisine conformité, pas validation du chef de projet ; (10) annexes.\n\nLa page exécutive porte les points 1 à 8, une page, chiffres essentiels. Les annexes portent le business case détaillé, les notes de saisine, les sensibilités. Un décideur lit l'exec. Un contrôleur ouvre les annexes. Mélanger les deux, c'est noyer quelqu'un qui a huit minutes — ou cacher un chiffre fragile.\n\nChiffres du fil rouge, sans arrondi hasardeux : investissement 120 k€, récurrents 30 k€/an × 3 ans = 90 k€, coûts totaux 210 k€, CA 270 k€, bénéfice 60 k€, ROI 28,6 % sur les coûts totaux (60 / 210), payback de 2 ans de l'investissement. Une VAN, si citée, porte un taux pédagogique étiqueté hypothèse, pas une vérité unique.",
      methode:
        "Rédigez d'abord la décision demandée, ensuite les scénarios, ensuite les chiffres. Jamais l'inverse : un dossier qui commence par le contexte ne se termine souvent par aucune question.\n\nRègle des scénarios : même horizon, mêmes unités, même maille de risque. Interdit : un scénario chiffré sur 3 ans et un autre « qualitatif ». Le statu quo a un coût (CAC qui reste élevé, souscriptions qui baissent) : écrivez-le, même approximatif, plutôt que de le laisser invisible.\n\nCritères avant comparatif : délai 6 mois, enveloppe, impact souscription / CAC, risque opérationnel, charge réseau, charge IT, dépendance à un avis conformité (saisine, pas validation CP).\n\nBoucle de relecture avec le sponsor, 48 heures avant l'instance. Si le sponsor ne porte pas la recommandation, vous n'allez pas « convaincre la salle contre lui ».",
      noteText:
        "Bonne pratique : une page exécutive, annexes numérotées, chaque chiffre de l'exec a une source en annexe. Le chef de projet recommande. L'instance décide. La conformité, le juridique et les risques émettent leurs avis ; le CP ne les signe pas.",
      exemple:
        "Banque Horizon (fictive). Trois scénarios pour l'offre 25-35 ans : A refonte lourde hors délai 6 mois ; B parcours simplifié + campagne ciblée, chiffres du fil rouge ; C campagnes seules sans toucher le parcours. La page exécutive recommande B, GO sous conditions (jalon de saisine conformité, gel du wording jusqu'à l'avis). Les 12 pages de tunnels, de media mix et de note de risques partent en annexes 1 à 4. Le comité d'investissement vote B, pas le tunnel.",
      extra: [
        h("Exemple professionnel — note exécutive d'une page"),
        code(`BANQUE HORIZON (fictive) — NOTE D'AIDE À LA DÉCISION — 1 PAGE
Instance : comité d'investissement    Date : 14/10/2026    Auteur : chef de projet
Objet : choisir le scénario de lancement de l'offre jeunes actifs 25-35 ans.
Décision demandée : GO sous conditions du scénario B, enveloppe 120 k€, lancement visé M6.

CONTEXTE (utile, pas l'historique)
Souscriptions en baisse, parcours complexe, CAC élevé, concurrence néobanques.
Cible 25-35 ans. Budget limité. Lancement visé 6 mois.

SCÉNARIOS (horizon 3 ans, mêmes unités)
A. Refonte complète du parcours        Délai 9 mois (hors cible). Invest. 120 k€.
B. Parcours simplifié + campagne       Délai 6 mois. Invest. 120 k€. RECOMMANDÉ.
C. Campagnes seules, parcours inchangé Délai 3 mois. Invest. 40 k€. Ne traite pas
   la complexité du parcours ni le CAC structurel.

CHIFFRES SCÉNARIO B (fil rouge, ne pas arrondir à la va-vite)
Investissement 120 k€
Coûts récurrents 30 k€ / an × 3 ans = 90 k€
Coûts totaux 210 k€
CA 270 k€
Bénéfice 60 k€
ROI sur coûts totaux = 60 / 210 = 28,6 %
Payback de l'investissement = 2 ans
VAN : non présentée ici. Si jointe en annexe, le taux est une HYPOTHÈSE
pédagogique, pas une vérité unique — l'étiqueter.

CRITÈRES (annoncés avant le comparatif)
Délai 6 mois | enveloppe | impact souscription/CAC | charge IT et réseau |
saisine conformité (avis hors CP).

RECOMMANDATION
Scénario B. Conditions : (1) saisine conformité/risques/juridique avant
construction du tunnel de souscription ; (2) pas de wording public avant avis ;
(3) COPIL M2 sur le gel de périmètre.
Le chef de projet ne valide pas l'avis réglementaire.

ANNEXES (hors page)
A1. Business case détaillé   A2. Comparatif A/B/C
A3. Note de saisine          A4. Charge IT / réseau`),
        h("Grille d'évaluation d'une note exécutive"),
        code(`GRILLE D'ÉVALUATION — NOTE EXÉCUTIVE (1 PAGE)
Critère              Attendu                                  Échec typique
Décision demandée    Phrase d'ouverture : GO / GO cond. /
                     NO GO / report                           « On présente le projet »
Scénarios            2 ou 3, comparables, même horizon        Un seul scénario déguisé
Critères             Annoncés avant le tableau                Critères inventés après coup
Chiffres             Formules visibles, unités stables        Mélanger CA et bénéfice
ROI / payback        ROI 28,6 % sur coûts totaux ;
                     payback 2 ans de l'investissement        « ROI environ 30 % »
VAN                  Taux étiqueté HYPOTHÈSE si citée         VAN présentée comme vérité
Recommandation       Un scénario + conditions                 « Les deux sont intéressants »
Risques              Nommés, propriétaire                     « On verra en cours »
Rôle du CP           Saisine conformité, pas validation       « Le CP a validé l'ACPR »
Longueur             1 page ; preuves en annexes              12 pages de contexte
Prochaines étapes    Datées, nommées                          « On avance »`),
      ],
      erreurs:
        "Ouvrir par trois pages de contexte. Recommander « les deux scénarios, selon l'appétit du comité ». Mettre le ROI dans l'exec et le détail des coûts nulle part. Citer une VAN sans dire que le taux est une hypothèse. Faire valider la conformité par le chef de projet dans la note. Envoyer le dossier le matin du comité.",
      particuliers:
        "B2B services : le comité d'investissement peut être le DG et le DAF, 20 minutes. La page unique devient encore plus critique. Distribution : un scénario « pilote 12 magasins » est un vrai scénario, pas une annexe. Assurance (fictive) : l'annexe de saisine conformité est souvent le chemin critique ; elle n'est pas l'exec. Startup : une note de 15 lignes dans un doc partagé, datée, avec GO/NO GO, vaut mieux qu'un slide deck décoratif.",
      exercice:
        "Rédigez la page exécutive (une page, structure à 10 points, décision demandée en ouverture) qui recommande un scénario pour Banque Horizon (fictive), offre 25-35 ans. Contraintes : lancement visé 6 mois ; enveloppe d'investissement 120 k€ ; vous disposez des trois scénarios A (refonte 9 mois), B (parcours simplifié, chiffres du fil rouge : coûts totaux 210 k€, CA 270 k€, bénéfice 60 k€, ROI 28,6 %, payback 2 ans), C (campagnes seules, 40 k€, 3 mois, parcours inchangé). La grille ci-dessus sert de barème. N'inventez pas de part de marché. N'écrivez pas que le chef de projet valide la conformité.",
      correction:
        "Ouverture : « Décision demandée : GO sous conditions du scénario B. » Contexte en 4 lignes (baisse des souscriptions, parcours, CAC, 6 mois, budget). Trois scénarios, même horizon 3 ans. Critères avant le tableau : délai, enveloppe, impact CAC/souscription, charge IT/réseau, saisine conformité. Comparatif : A hors délai ; C ne traite pas la cause (parcours) ; B tient le délai et l'enveloppe, ROI 28,6 % = 60/210, payback 2 ans. Recommandation B, conditions de saisine, pas de wording public avant avis. Impacts si GO : 120 k€, workstreams, jalon conformité saisi. Annexes listées, pas collées. VAN absente, ou présente en annexe avec taux pédagogique étiqueté hypothèse. Échec si vous recommandez A malgré le délai 9 mois, si vous « validez l'ACPR », si la décision demandée est absente, si les chiffres du fil rouge sont arrondis en « environ 30 % ».",
    }),
    pack({
      title: "Présenter en comité",
      description:
        "Ouvrir par la décision attendue, traiter les objections, et répondre aux questions finance sans improvisation.",
      minutes: 6,
      objectifs:
        "Vous savez ouvrir un comité par la décision demandée, tenir huit à douze minutes de propos, traiter les objections fréquentes, et répondre aux questions finance avec les chiffres du dossier — pas avec une conviction.",
      theorie:
        "Présenter en comité, ce n'est pas raconter le projet. C'est obtenir une décision. La première phrase dit ce que l'instance vote. La dernière répète la décision demandée et les conditions.\n\nTrois blocs, pas davantage.\n\nLa décision attendue : GO, GO sous conditions, NO GO, report. « On voulait votre avis » n'est pas une décision. « Nous demandons le GO du scénario B, enveloppe 120 k€, lancement M6, sous réserve de la saisine conformité » en est une.\n\nLes questions finance reviennent dans cet ordre : investissement, coûts totaux, CA, bénéfice, ROI, payback, sensibilité si le CA fait −20 %, qui porte un dépassement. Fil rouge : 120 k€ d'investissement, 30 k€/an, 90 k€ de récurrents sur 3 ans, 210 k€ de coûts totaux, 270 k€ de CA, 60 k€ de bénéfice, ROI 28,6 % sur les coûts totaux, payback 2 ans. Une VAN ne s'invente pas à l'oral : annexe avec taux pédagogique étiqueté hypothèse, ou vous dites que vous ne la présentez pas.\n\nLes objections sont des risques mal formulés. « Trop cher » = comparé à quel scénario, à quel coût du statu quo. « L'IT ne pourra pas » = charge, chemin critique, ce que l'on coupe. « La conformité va bloquer » = le CP a saisi, il ne valide pas, le jalon est au planning. « Le réseau n'est pas prêt » = formation, jalon, pilote. Répondre par un fait du dossier, pas par de l'enthousiasme.",
      methode:
        "Séquence d'une présentation de 10 minutes : (1) décision demandée, 30 secondes ; (2) problème en deux phrases ; (3) scénarios et recommandation, 3 minutes ; (4) chiffres du scénario recommandé, 2 minutes ; (5) risques et conditions, 2 minutes ; (6) reprise de la décision demandée. Le reste est questions.\n\nAvant la séance, écrivez les cinq questions finance et les quatre objections ci-dessus, avec la réponse en une phrase et le numéro d'annexe. Si vous ne savez pas, dites-le et proposez une date, ne comblez pas le silence par un ordre de grandeur inventé.\n\nRègles de tenue : le sponsor ouvre si le CODIR ou le comité d'investissement l'exige ; le CP présente le fond. Vous ne parlez pas pour la conformité. Vous rappelez la saisine. Vous ne promettez pas un avis.",
      noteText:
        "Bonne pratique : un allié dans la salle (sponsor ou DAF) a lu la page exécutive. Un comité découvert le jour J produit des questions de découverte, pas une décision. Le chef de projet n'est pas l'avocat de « son » idée : il est le gardien de la comparabilité des scénarios.",
      exemple:
        "Banque Horizon (fictive), comité d'investissement, 12 minutes. La cheffe de projet ouvre : « Nous demandons le GO sous conditions du scénario B, 120 k€, lancement à 6 mois. » Le DAF : « Quel ROI ? » Réponse : « 28,6 % sur les coûts totaux, 60 k€ / 210 k€, payback 2 ans de l'investissement. Détail en annexe 1. » Une responsable réseau : « Mes conseillers n'auront pas le temps. » Réponse : « C'est l'objection réseau. Condition du GO : jalon formation avant campagne, périmètre de 15 agences pilotes, pas le réseau entier au jour 1. » Un membre : « Et l'ACPR ? » Réponse : « Hors de notre validation. Saisine conformité dans le planning, pas de wording public avant avis. »",
      extra: [
        h("Fiche de séance — objections et questions finance"),
        code(`FICHE DE SÉANCE — COMITÉ D'INVESTISSEMENT — BANQUE HORIZON (fictive)
Décision demandée (à dire deux fois) :
GO sous conditions du scénario B | 120 k€ | lancement M6
Conditions : saisine conformité/juridique/risques ; pas de wording public avant avis ;
COPIL gel de périmètre à M2.

QUESTIONS FINANCE — RÉPONSES STABLES
Investissement ?     120 k€
Récurrents ?         30 k€ / an × 3 ans = 90 k€
Coûts totaux ?       210 k€
CA ?                 270 k€ sur 3 ans
Bénéfice ?           60 k€
ROI ?                60 / 210 = 28,6 % sur les coûts totaux
Payback ?            2 ans de l'investissement
VAN ?                Pas à l'oral. Si annexe : taux = HYPOTHÈSE pédagogique.
Sensibilité −20 % CA ? Recalculer en annexe, ne pas inventer à chaud.
Qui porte un dépassement ? Politique interne + sponsor, pas le CP seul.

OBJECTIONS — RÉPONSES EN UNE PHRASE
« Trop cher »         Cher vs quel scénario, vs le coût du statu quo (CAC, baisse).
« L'IT ne pourra pas » Charge et chemin critique dans le planning ; on coupe du
                       périmètre, on ne « tend » pas la date en silence.
« La conformité bloque » Le CP saisit, il ne valide pas. Jalon d'avis au planning.
« Le réseau n'est pas prêt » Jalon formation + pilote, pas un lancement fantôme.`),
      ],
      erreurs:
        "Commencer par l'historique du projet. Lire les slides. Promettre un avis conformité. Inventer une VAN à l'oral. Répondre à « trop cher » par « c'est stratégique ». Couper le DAF. Laisser le comité transformer la séance en atelier de wording.",
      particuliers:
        "COPIL mensuel : 20 minutes, décision de périmètre, pas un mini comité d'investissement. Comité projet : pas de « pitch » ; une liste de décisions d'exécution. CODIR : le sponsor parle, le CP a trois slides maximum. B2B : un comité client interne (sales + marketing) n'est pas un comité d'investissement ; ne lui faites pas voter l'enveloppe. PME : la « présentation » tient souvent debout, 6 minutes, autour d'une page imprimée.",
      exercice:
        "Banque Horizon (fictive). En comité d'investissement, trois interventions tombent : (1) le DAF : « Votre ROI est de 50 %, non ? 60 k€ sur 120 k€. » (2) le responsable conformité : « Vous ne lancez rien sans notre avis. » (3) le directeur réseau : « Si on GO aujourd'hui, je veux le réseau entier formé en 4 semaines. » Rédigez les trois réponses orales (4 à 6 lignes chacune), puis la phrase de clôture qui rappelle la décision attendue.",
      correction:
        "1. « Le ROI que nous présentons est de 28,6 % sur les coûts totaux : bénéfice 60 k€ / coûts 210 k€ (investissement 120 k€ + récurrents 90 k€). 60 / 120 = 50 % mesurerait le bénéfice sur l'investissement seul ; ce n'est pas le ROI du dossier. Payback de l'investissement : 2 ans. Annexe 1. » 2. « Nous sommes d'accord : le chef de projet ne valide pas votre avis. Le GO demandé est sous condition de saisine. Pas de wording public avant l'avis. Le jalon est au planning. » 3. « La formation du réseau entier en 4 semaines n'est pas dans le scénario B. Condition proposée : pilote de 15 agences, jalon formation avant campagne, extension ensuite. Si l'instance exige le réseau entier à J+28, ce n'est plus le scénario B : il faut revoir délai ou enveloppe. » Clôture : « Nous demandons le GO sous conditions du scénario B, 120 k€, lancement M6, saisine conformité, pilote réseau. »",
    }),
    pack({
      title: "Arbitrer sans diluer",
      description:
        "Rendre visibles les arbitrages de budget, de délai, d'indisponibilité, de risques et de priorités divergentes.",
      minutes: 4,
      objectifs:
        "Vous savez formuler un arbitrage (ce que l'on garde, ce que l'on coupe, ce que l'on décale, ce que l'on assume) et le porter à la bonne instance, au lieu de « tenir la date » en silence.",
      theorie:
        "Un projet marketing et développement vit sous contrainte. Cinq tensions : budget, délai, indisponibilité des métiers, risques, priorités divergentes. Le chef de projet ne les fait pas disparaître. Il les rend décidables.\n\nBudget : l'enveloppe 120 k€ de Banque Horizon (fictive) n'est pas un souhait. Si une ligne dérape : couper du périmètre, demander un complément (comité d'investissement), ou arrêter. « On absorbera » n'est pas un arbitrage.\n\nDélai : le lancement visé à 6 mois est un engagement. Si le chemin critique glisse, on coupe du contenu, on décale le jalon, ou l'on accepte un pilote. Tenir la date en vidant l'offre n'est tenable que si l'instance l'a choisi.\n\nIndisponibilité : l'IT, le réseau, la conformité ne sont pas infinis. Trois semaines d'indispo sur le parcours déplacent le chemin critique. On ne « lisse » pas en soirées. On reformule : date, périmètre, ou ressource.\n\nRisques : chaque risque majeur a un propriétaire métier, une action, un seuil d'escalade. Le CP n'est pas propriétaire de l'avis conformité.\n\nPriorités divergentes : marketing veut la campagne en M4, le réseau la formation en M5, l'IT un gel de périmètre. Ce n'est pas un problème de communication. C'est un arbitrage de COPIL, trois demandes sur la même page, impact sur le jalon de lancement.",
      methode:
        "Fiche d'arbitrage en cinq lignes, avant toute réunion : (1) fait — ce qui a changé ; (2) impact — délai, coût, périmètre, risque ; (3) options — au moins deux, plus le statu quo ; (4) recommandation du CP ; (5) instance qui tranche. Sans le point 5, la fiche est un message d'alerte, pas un arbitrage.\n\nInterdit de « tenir les quatre coins » : date, budget, périmètre, qualité perçue. Un coin bouge, un autre compense, l'instance choisit lequel.\n\nEscalade : comité projet si l'enveloppe et la date tiennent ; COPIL si le périmètre ou le mix de priorités bouge ; comité d'investissement si l'argent bouge ; sponsor puis CODIR si le projet lui-même est en cause.",
      noteText:
        "Le chef de projet n'arbitre pas à la place du sponsor. Il rend l'arbitrage possible. Il n'accepte pas non plus un « on verra » sur un risque de conformité : il saisit, il date le jalon, il n'émet pas l'avis.",
      exemple:
        "Banque Horizon (fictive). L'IT annonce 3 semaines d'indisponibilité sur le parcours. Le junior veut « compresser la recette ». Le bon arbitrage, porté en COPIL : option 1, décaler le lancement de 3 semaines ; option 2, couper le parcours « ouverture instantanée » et garder un parcours simplifié tenable ; option 3, acheter de la charge IT hors enveloppe (comité d'investissement). Recommandation : option 2, pour tenir les 6 mois. Le COPIL tranche. Ce n'est pas une décision de couloir avec l'IT.",
      extra: [
        code(`FICHE D'ARBITRAGE — BANQUE HORIZON (fictive)
Fait       IT indisponible 3 semaines sur le parcours de souscription
Impact     Chemin critique +3 sem. ; lancement M6 menacé ; budget 120 k€ intact
Options    1. Décaler le jalon de lancement
           2. Couper le parcours « ouverture instantanée » (recommandé)
           3. Charge IT supplémentaire → comité d'investissement
Instance   COPIL (périmètre / délai). Pas le comité projet seul.
Hors scope Le CP ne « valide » pas un allègement de contrôles conformité
           pour gagner les 3 semaines.`),
      ],
      erreurs:
        "Cacher un glissement pour « ne pas inquiéter ». Trancher un conflit marketing / réseau tout seul. Couper de la conformité pour tenir la date. Demander du budget sans dire ce que l'on abandonne. Traiter une indispo comme un problème de motivation.",
      particuliers:
        "Startup : l'arbitrage tient dans un message au fondateur, daté. PME : le DAF et le DG sont souvent la même instance pour budget et délai. ETI / réseau : un arbitrage « on lance sans former le réseau » devient un risque commercial, à faire voter, pas à subir. B2B : une indispo d'un prescripteur interne (sales ops) se traite comme une indispo IT : impact, options, instance.",
      exercice:
        "Banque Horizon (fictive). Quatre chocs la même semaine : (a) le média a déjà consommé 20 k€ de trop sur l'enveloppe 120 k€ ; (b) le délai de lancement glisse de 2 semaines ; (c) le responsable conformité est absent 3 semaines ; (d) le marketing veut avancer la campagne, le réseau veut la reculer. Pour chaque choc, donnez l'instance, deux options, et ce que vous refusez de faire seul.",
      correction:
        "(a) COPIL d'abord (réallocation dans l'enveloppe) ; si l'enveloppe est dépassée sans compensation, comité d'investissement. Options : couper une ligne média, ou demander un complément. Seul, vous ne « laissez courir ». (b) COPIL : décaler le jalon, ou couper du périmètre pour tenir M6. Seul, vous ne promettez pas la date. (c) Comité projet pour l'organisation de la saisine ; le jalon d'avis reste au COPIL. Options : décaler le wording public, désigner un suppléant côté conformité. Seul, vous n'émettez pas l'avis. (d) COPIL : priorités divergentes. Options : campagne après jalon formation, ou pilote limité. Seul, vous n'imposez pas la date au réseau ni au marketing.",
    }),
    quizLesson({
      title: "Quiz — Dossiers de décision",
      description:
        "Instances, page exécutive, présentation en comité et arbitrages. Cinq questions de raisonnement, seuil 70.",
      passing_score: 70,
      minutes: 4,
      questions: [
        q({
          question:
            "Banque Horizon (fictive). Vous devez réallouer 15 k€ de média vers l'IT, dans l'enveloppe de 120 k€ déjà validée. Quelle instance est la plus adaptée ?",
          options: [
            "A. Le CODIR, pour un alignement stratégique",
            "B. Le comité d'investissement, car il s'agit d'argent",
            "C. Le COPIL, qui arbitre dans l'enveloppe déjà validée",
            "D. Le comité projet, qui vote toujours les budgets",
          ],
          correct: 2,
          explanation:
            "Une réallocation dans une enveloppe déjà votée est un arbitrage de COPIL. Le comité d'investissement traite l'argent nouveau. Le CODIR n'a pas à voir 15 k€ de mix. Le comité projet exécute, il ne vote pas l'enveloppe.",
        }),
        q({
          question:
            "Que doit porter la page exécutive d'un dossier d'aide à la décision, par rapport aux annexes ?",
          options: [
            "A. L'historique complet du projet, pour que le comité « ait tout »",
            "B. La décision demandée, les scénarios comparables, les chiffres essentiels et la recommandation ; les preuves détaillées vont en annexes",
            "C. Uniquement les annexes techniques, l'exec étant réservé aux juristes",
            "D. La validation ACPR signée par le chef de projet",
          ],
          correct: 1,
          explanation:
            "L'exec tient en une page et rend le vote possible. Les annexes portent le détail. Le chef de projet ne valide pas l'ACPR. L'historique complet noie la décision.",
        }),
        q({
          question:
            "En comité d'investissement, quelle ouverture est professionnelle ?",
          options: [
            "A. « Nous allons vous raconter le projet depuis le cadrage. »",
            "B. « Nous demandons le GO sous conditions du scénario B, enveloppe 120 k€, lancement à 6 mois. »",
            "C. « Dites-nous ce que vous préférez, on s'adaptera. »",
            "D. « La conformité a déjà validé, nous pouvons lancer. »",
          ],
          correct: 1,
          explanation:
            "On ouvre par la décision attendue. On ne délègue pas le choix à la salle, on ne promet pas un avis conformité, on ne commence pas par l'historique.",
        }),
        q({
          question:
            "Sur le scénario recommandé du fil rouge, quel énoncé chiffré est exact ?",
          options: [
            "A. ROI de 50 %, car 60 k€ / 120 k€, et c'est le ROI du dossier",
            "B. Coûts totaux 210 k€, CA 270 k€, bénéfice 60 k€, ROI 28,6 % sur les coûts totaux, payback de 2 ans de l'investissement",
            "C. VAN officielle à 8 %, c'est la vérité unique du marché",
            "D. Coûts totaux 120 k€, le récurrent ne compte pas",
          ],
          correct: 1,
          explanation:
            "Investissement 120 k€ + récurrents 90 k€ = 210 k€ de coûts. ROI = 60 / 210 = 28,6 %. Le 50 % (60/120) n'est pas le ROI du dossier. Une VAN, si citée, porte un taux pédagogique étiqueté hypothèse.",
        }),
        q({
          question:
            "L'IT annonce 3 semaines d'indisponibilité sur le parcours. Que faites-vous ?",
          options: [
            "A. Vous tenez la date de lancement en silence et vous « compresserez la recette »",
            "B. Vous émettez vous-même l'avis de conformité pour gagner du temps",
            "C. Vous formulez un arbitrage (décaler, couper du périmètre, ou demander de la charge) et vous le portez à l'instance compétente",
            "D. Vous demandez au comité projet de voter 40 k€ de plus",
          ],
          correct: 2,
          explanation:
            "Une indispo sur le chemin critique exige un arbitrage visible, pas un silence. Le CP ne valide pas la conformité. Un complément d'argent, s'il est nécessaire, va au comité d'investissement, pas au comité projet.",
        }),
      ],
    }),
  ],
};
