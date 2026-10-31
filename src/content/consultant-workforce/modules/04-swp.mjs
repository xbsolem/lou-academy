import { pack, quizLesson, q, h, code } from "../lib.mjs";

export default {
  position: 4,
  title: "Strategic Workforce Planning",
  description:
    "Module central : définir un SWP, poser un horizon, construire un modèle (stock, retraites, turnover, recrutements, mobilité, automatisation, gap) et comparer trois scénarios. Cas : Groupe Nova Services, 1 200 salariés (fictif), métier tendu de 80 techniciens support client. Chiffres pédagogiques.",
  lessons: [
    pack({
      title: "SWP : définition, horizon, ce que ce n'est pas",
      description:
        "Distinguer le Strategic Workforce Planning d'un tableau d'effectifs, d'un plan de recrutement et de la GEPP, et choisir un horizon lisible pour un comité.",
      minutes: 10,
      objectifs:
        "À la fin de cette leçon, vous définissez le SWP en trois questions (demande, offre interne, écart), vous choisissez un horizon, et vous savez ce qu'un consultant junior livre — un modèle étiqueté — et ce qu'il ne décide pas.",
      theorie:
        "Le Strategic Workforce Planning (SWP) est la méthode de direction qui aligne les personnes disponibles — volume, compétences, lieu, coût — sur la stratégie, à un horizon écrit. Ce n'est pas un export SIRH. Ce n'est pas un plan de recrutement déguisé. Ce n'est pas la GEPP : le SWP est un outil de management ; la GEPP est un cadre français de dialogue social. Les confondre, c'est apporter un gap d'ETP à une négociation, ou un accord à un CODIR.\n\nTrois questions, dans cet ordre. (1) De quoi l'activité aura-t-elle besoin — la demande. (2) Que restera-t-il de l'existant après retraites, turnover, mobilités — l'offre interne. (3) Quel écart, comblé par quels leviers : recruter, former, bouger, automatiser, sous-traiter, ou arrêter une activité. L'automatisation réduit la demande. Elle n'invente pas du stock.\n\nL'horizon n'est pas unique. Douze à dix-huit mois servent le budget et le recrutement. Trois ans est l'horizon pédagogique de ce module, lisible en comité. Cinq ans n'a de sens que si la stratégie tient ; au-delà, vous étiquetez des hypothèses, vous ne prévoyez pas. Chez Nova Services (1 200 salariés, fictif), le métier tendu — 80 techniciens support client — se lit à 3 ans. Tous les chiffres du module sont pédagogiques : ils illustrent des formules, ce ne sont ni un benchmark ni un diagnostic réel.",
      methode:
        "Avant d'ouvrir un tableur, écrivez une page de cadrage : (1) métier ou famille, pas « les RH » ; (2) horizon, ici 3 ans ; (3) unité — personnes en ETP pédagogique, 1 personne à 35 h = 1 ETP ; (4) décision que le modèle doit éclairer ; (5) hypothèses étiquetées, jamais présentées comme des taux de marché.\n\nAlimentez le modèle avec ce que l'analytique RH a déjà produit : pyramide (retraites), turnover du métier (départs / effectif moyen), ETP réels, vacances. Si une donnée manque, vous posez une hypothèse pédagogique visible, vous n'inventez pas un « standard cabinet ».\n\nContrôle d'entrée : si le document ne sépare pas demande et offre, ce n'est pas encore un SWP. Si l'horizon change d'une slide à l'autre, ce n'est pas comparable.",
      noteText:
        "Chiffres Nova Services de ce module : pédagogiques, fictifs, pour apprendre à faire additionner un modèle. Ce ne sont pas un benchmark de turnover, ni un taux légal, ni la réalité d'un groupe nommé. Le consultant junior construit le modèle et documente. Il ne vote pas l'effectif cible. La GEPP se traite au module suivant.",
      exemple:
        "CODIR de Nova Services (fictif). La DRH projette « 80 techniciens, on recrute 10, ça ira ». Le directeur des opérations parle d'une croissance d'activité et d'une vague de retraites. Le DSI évoque un outil qui « supprimera du volume ». Trois phrases, zéro modèle : pas d'horizon commun, pas de gap, pas de scénario. Le consultant junior pose 3 ans, le métier des 80, le besoin actuel déjà supérieur au stock, et refuse de livrer un slide unique « il faut recruter ». Il promet un modèle à trois scénarios, pas une promesse d'embauche.",
      extra: [
        h("Carte d'horizon — à figer avant le modèle"),
        code(`SWP ≠ PLAN DE RECRUTEMENT ≠ GEPP ≠ EXPORT SIRH
SWP                 Méthode de direction : demande, offre, écart, leviers
Plan de recrutement Un levier parmi d'autres, une fois le gap posé
GEPP                Cadre FR de négociation / parcours (module suivant)
Export SIRH         Photo du stock. Utile. Insuffisant.

HORIZONS (repères de travail, pas une norme légale)
12-18 mois     Budget, vacances, recrutement de l'année
3 ans          Horizon pédagogique Nova (ce module) : lisible en comité
5 ans          Uniquement si la stratégie est stable ; hypothèses étiquetées
Au-delà        Scénario, pas prévision

UNITÉ PÉDAGOGIQUE (fil rouge)
1 personne à 35 h = 1 ETP. Une personne à 28 h = 0,8 ETP.
Ici, pour le métier tendu, 1 personne = 1 ETP (hypothèse simplificatrice, étiquetée).

NOVA SERVICES (fictif, 1 200 salariés) — CIBLE DU MODÈLE
Métier tendu : techniciens support client
Stock actuel N = 80 (pédagogique)
Le SWP se fait métier par métier, pas « 1 200 en bloc ».`),
      ],
      erreurs:
        "Appeler SWP un histogramme d'âges. Confondre SWP et GEPP. Recruter avant d'avoir un gap. Utiliser un horizon de 5 ans sur une slide et 12 mois sur la suivante. Présenter un turnover « de marché » inventé. Traiter l'automatisation comme des embauches négatives dans le stock. Promettre au CODIR que « le modèle décide ».",
      particuliers:
        "PME de 80 personnes : un SWP tient dans un onglet, métier par métier sensible, pas une usine à scénarios. Groupe multi-pays : un horizon unique masque des droits du travail différents — vous segmentez, vous ne mélangez pas. Activité saisonnière : l'ETP annuel et le pic ne sont pas le même chiffre ; dites-le. Centre de services : le volume d'activité (tickets, dossiers) est le vrai moteur de la demande, pas l'effectif de l'an dernier.",
      exercice:
        "Nova Services (fictif). On vous demande « un SWP groupe, 1 200 personnes, à 5 ans, pour vendredi, avec le turnover du marché ». En dix lignes : (1) ce que vous refusez ; (2) le cadrage que vous posez à la place ; (3) le premier métier que vous traitez, et pourquoi.",
      correction:
        "(1) Vous refusez le 1 200 en bloc, le 5 ans non étayé, et tout « turnover de marché » inventé. (2) Cadrage : un métier, horizon 3 ans, unité ETP, décision attendue (combler un métier tendu), hypothèses étiquetées pédagogiques. (3) Techniciens support client, 80 personnes : métier déjà tendu, vague de retraites, volume d'activité en hausse — c'est là que le SWP change une décision. Le groupe entier viendra ensuite, famille par famille. Le junior n'invente pas un taux, il documente ce qu'il a (pyramide, départs) et ce qu'il pose en hypothèse.",
    }),

    pack({
      title: "Modèle SWP : stock, flux, gap, trois scénarios",
      description:
        "Faire additionner un modèle : stock, retraites, turnover, recrutements, mobilité, automatisation, besoin, gap. Comparer fil de l'eau, cible et accéléré sur 80 personnes.",
      minutes: 12,
      objectifs:
        "Vous écrivez les formules, vous faites coller chaque flux, vous lisez un gap, et vous comparez trois scénarios sur le métier tendu de 80 techniciens support client — chiffres pédagogiques qui s'additionnent.",
      theorie:
        "Un modèle SWP n'est pas une intuition. C'est une identité comptable d'effectifs, plus une demande, plus un écart. Formules, à garder visibles dans le tableur.\n\nstock_fin = stock_début − retraites − turnover − mobilité_sortante + recrutements + mobilité_entrante\nbesoin_net = besoin_brut − automatisation\ngap = besoin_net − stock_fin\n\nLe turnover, ici, est un flux annuel hors retraites : 8 départs par an, hypothèse pédagogique d'environ 10 % de 80, pas un taux légal, pas un benchmark. Les retraites se lisent dans la pyramide : 4, puis 5, puis 6, cumul 15 sur 3 ans. L'automatisation diminue le besoin, jamais le stock : on n'efface pas une personne d'un effectif parce qu'un outil est prévu.\n\nChez Nova Services (fictif), le métier est déjà en tension : stock N = 80, besoin N = 88, gap actuel = 8. Le besoin brut croît de +4 par an (pédagogique) : 88, 92, 96, 100. Trois scénarios, même horizon, mêmes unités. A, fil de l'eau : on remplace retraites et turnover, stock inchangé à 80, pas d'automatisation, le gap s'ouvre à 20. B, cible : mix recrutement, mobilité, automatisation modérée, gap à 0 en N+3. C, accéléré : plus de mobilité et d'automatisation, moins de recrutements externes (métier difficile à pourvoir), gap à 0 avec un besoin net plus bas. Tous les totaux du tableau ci-dessous s'additionnent. Si un chiffre ne se recoupe pas, le modèle est faux, pas « arrondi cabinet ».",
      methode:
        "Construisez dans cet ordre, une feuille par métier.\n\n1. Photo N : stock, besoin, gap. 2. Flux connus (retraites). 3. Flux hypothèse (turnover, mobilité), chacun étiqueté. 4. Demande : moteur d'activité + automatisation. 5. Leviers : recrutements et mobilité entrante, scénario par scénario. 6. Vérifications : stock_fin, cumul 3 ans, gap N+3. 7. Une ligne « ce que le modèle ne dit pas » (qualité, coût, délai de pourvoi).\n\nRègle des scénarios : mêmes années, mêmes unités, même métier. Interdit : un scénario chiffré et un autre « qualitatif ». Le fil de l'eau est un vrai scénario, souvent le plus éclairant.\n\nVous livrez le tableur avec les formules, pas une recopie de totaux. Un associé doit pouvoir changer le turnover de 8 à 6 et voir le gap bouger.",
      noteText:
        "Tous les effectifs, flux et gaps de cette leçon sont pédagogiques. Ils font apprendre l'arithmétique du SWP. Ils ne décrivent pas le marché du support client, ni un taux de turnover « de référence », ni une productivité réelle d'un outil. 1 personne à 35 h = 1 ETP pédagogique.",
      exemple:
        "Nova Services (fictif), métier tendu, 80 techniciens. Le manager dit : « On perd les seniors, on n'arrive pas à recruter, l'outil va nous sauver. » Sans modèle, chacun a raison tout seul. Avec le scénario A, le stock reste à 80 et le gap passe à 20 : remplacer les départs ne suffit pas si le besoin monte. Avec B, on assume 47 recrutements en 3 ans plus 12 mobilités et 6 ETP d'automatisation : le gap se ferme, mais le recrutement reste lourd. Avec C, on mise sur 24 mobilités et 12 ETP d'automatisation : 29 recrutements seulement, à condition que l'outil et les passerelles tiennent. Le comité vote un scénario, pas un slogan.",
      extra: [
        h("Modèle Excel — métier tendu 80 personnes (chiffres pédagogiques qui s'additionnent)"),
        code(`NOVA SERVICES (fictif, 1 200 salariés) — SWP 3 ANS
Métier tendu : techniciens support client
Unité : personnes (1 pers. 35 h = 1 ETP pédagogique)
TOUS LES CHIFFRES SONT PÉDAGOGIQUES — pas un benchmark, pas un diagnostic réel.

FORMULES (à garder dans le tableur, pas seulement les totaux)
  stock_fin   = stock_debut - retraites - turnover - mob_out + recrut + mob_in
  besoin_net  = besoin_brut - automatisation
  gap         = besoin_net - stock_fin
  turnover    = ici un FLUX fixé : 8 / an (hyp. ~10 % de 80, pédagogique)
                En mission réelle : départs hors retraite / effectif moyen, à calculer.
  automatisation = réduction de BESOIN (ETP évités), JAMAIS une ligne de stock négatif.

HYPOTHÈSES COMMUNES AUX 3 SCÉNARIOS
  Stock N                 80
  Besoin brut N           88     gap actuel = 88 - 80 = 8
  Croissance besoin brut  +4 / an  →  88 | 92 | 96 | 100
  Retraites (pyramide)    N+1: 4 | N+2: 5 | N+3: 6     cumul 15
  Turnover hors retraite  8 / an                        cumul 24
--------------------------------------------------------------------------------
SCÉNARIO B — CIBLE (recommandé) — TABLEAU ANNUEL COMPLET
annee  stock_deb  retr  turn  mob_out  recrut  mob_in  stock_fin  brut  auto  net  gap
N           80      0     0      0        0       0        80      88    0    88    8
N+1         80      4     8      2       16       4        86      92    2    90    4
N+2         86      5     8      2       15       4        90      96    4    92    2
N+3         90      6     8      2       16       4        94     100    6    94    0

Vérif B N+1 : 80 - 4 - 8 - 2 + 16 + 4 = 86 ; 92 - 2 = 90 ; 90 - 86 = 4
Vérif B N+2 : 86 - 5 - 8 - 2 + 15 + 4 = 90 ; 96 - 4 = 92 ; 92 - 90 = 2
Vérif B N+3 : 90 - 6 - 8 - 2 + 16 + 4 = 94 ; 100 - 6 = 94 ; 94 - 94 = 0
Cumul 3 ans B : retraites 15 + turn 24 + mob_out 6 = 45 sorties
                recrut 47 + mob_in 12 = 59 entrées ; 80 + (59-45) = 94  OK
--------------------------------------------------------------------------------
SCÉNARIO A — FIL DE L'EAU (on remplace retraites + turnover, rien d'autre)
Pas de mobilité, pas d'automatisation, stock maintenu à 80.
annee  stock_deb  retr  turn  mob_out  recrut  mob_in  stock_fin  brut  auto  net  gap
N           80      0     0      0        0       0        80      88    0    88    8
N+1         80      4     8      0       12       0        80      92    0    92   12
N+2         80      5     8      0       13       0        80      96    0    96   16
N+3         80      6     8      0       14       0        80     100    0   100   20

Vérif A N+1 : 80 - 4 - 8 + 12 = 80 ; gap 92 - 80 = 12
Vérif A N+3 : 80 - 6 - 8 + 14 = 80 ; gap 100 - 80 = 20
Cumul recrut A = 12+13+14 = 39
--------------------------------------------------------------------------------
SCÉNARIO C — ACCÉLÉRÉ (plus de mobilité et d'outil, moins de recrutements externes)
Métier tendu = difficile à pourvoir : on ne parie pas tout sur le marché.
annee  stock_deb  retr  turn  mob_out  recrut  mob_in  stock_fin  brut  auto  net  gap
N           80      0     0      0        0       0        80      88    0    88    8
N+1         80      4     8      2       10       8        84      92    4    88    4
N+2         84      5     8      2        9       8        86      96    8    88    2
N+3         86      6     8      2       10       8        88     100   12    88    0

Vérif C N+1 : 80 - 4 - 8 - 2 + 10 + 8 = 84 ; 92 - 4 = 88 ; 88 - 84 = 4
Vérif C N+2 : 84 - 5 - 8 - 2 +  9 + 8 = 86 ; 96 - 8 = 88 ; 88 - 86 = 2
Vérif C N+3 : 86 - 6 - 8 - 2 + 10 + 8 = 88 ; 100 - 12 = 88 ; 88 - 88 = 0
Cumul 3 ans C : sorties 15+24+6 = 45 ; recrut 29 + mob_in 24 = 53
                80 + (53-45) = 88  OK
--------------------------------------------------------------------------------
PHOTO N+3 — COMPARAISON (mêmes unités, même métier, même horizon)
indicateur                 A fil de l'eau     B cible      C accéléré
stock_fin                         80              94             88
besoin_net                       100              94             88
gap                               20               0              0
recrutements cumul 3 ans          39              47             29
mobilité entrante cumul            0              12             24
automatisation N+3 (ETP)           0               6             12

CSV B (séparateur virgule) — à coller dans un tableur
annee,stock_debut,retraites,turnover,mob_out,recrut,mob_in,stock_fin,besoin_brut,auto,besoin_net,gap
N,80,0,0,0,0,0,80,88,0,88,8
N+1,80,4,8,2,16,4,86,92,2,90,4
N+2,86,5,8,2,15,4,90,96,4,92,2
N+3,90,6,8,2,16,4,94,100,6,94,0

Lecture : A « remplace et subit la croissance ». B ferme le gap au prix d'un fort recrutement.
C ferme le gap si l'outil et les passerelles tiennent. Aucun scénario n'est « vrai ».
Le comité choisit. Le junior ne vend pas C parce qu'il aime l'automatisation.`),
      ],
      erreurs:
        "Arrondir un stock « à peu près 80 » puis un gap « autour de 10 ». Mettre l'automatisation en déduction du stock. Oublier que le turnover continue si l'on ne recrute que les retraites. Comparer un scénario à 3 ans et un autre à 5 ans. Présenter B comme une prévision plutôt que comme un choix. Recopier les totaux sans les formules. Inventer un taux de turnover « cabinet » pour 80 personnes.",
      particuliers:
        "Si une partie du métier est à 28 h : convertissez en ETP (0,8) avant d'additionner des têtes. Si des prestataires tiennent le gap actuel de 8 : dites-le en annexe, ne les comptez pas dans le stock salarié sans le nommer. International : un flux « mobilité » transfrontalier a un droit applicable, le junior n'invente pas le dispositif. Si la pyramide ne donne pas 4-5-6 retraites, vous remplacez par les vrais flux du client, vous ne gardez pas nos 15 par habitude.",
      exercice:
        "Tableur fermé. (1) Écrivez les trois formules. (2) Calculez le gap N+3 du scénario A. (3) Dans B, si le turnover passe de 8 à 6 chaque année (hypothèse pédagogique de rétention), sans changer recrutements ni mobilité ni automatisation, quel est le stock_fin N+3 et le gap N+3 ? (4) Pourquoi C recrute moins que B alors que les deux ferment le gap ?",
      correction:
        "(1) stock_fin = stock_début − retraites − turnover − mob_out + recrut + mob_in ; besoin_net = besoin_brut − auto ; gap = besoin_net − stock_fin. (2) A : stock 80, besoin_net 100, gap = 20. (3) B de base : 24 départs turnover en 3 ans. À 6 / an : 18 départs, soit 6 sorties de moins. Stock_fin N+3 = 94 + 6 = 100. Besoin_net B reste 94. Gap = 94 − 100 = −6 (surplus pédagogique de 6, à réinterpréter : on recrute trop si la rétention réussit — on recalera les 47 embauches, on ne « laisse courir »). (4) C ferme le gap en baissant le besoin (12 ETP d'automatisation) et en alimentant le stock par 24 mobilités : 29 recrutements suffisent pour un stock 88 et un besoin 88. B a moins d'outil (6) et moins de mobilité (12), donc plus de marché externe (47) pour un stock 94. Chiffres pédagogiques, pas une vérité d'outil.",
    }),

    pack({
      title: "Plan d'action et KPI de suivi du SWP",
      description:
        "Traduire un scénario choisi en leviers, propriétaires, rythme de revue et indicateurs — sans transformer le modèle en promesse.",
      minutes: 10,
      objectifs:
        "Vous transformez le scénario B (ou C) en plan d'action : recrutement, mobilité, retraites, automatisation, rétention. Vous posez des KPI de suivi, une cadence, et la limite du junior : le tableau de bord n'est pas la décision.",
      theorie:
        "Un SWP sans plan d'action est un exercice de comité. Un plan sans KPI est une liste de vœux. Une fois le scénario choisi — ici B, cible, chiffres pédagogiques — chaque levier devient une ligne : quoi, combien, qui, quand, comment on saura que ça dérive.\n\nCinq leviers, pas davantage au premier jet. Recruter : 16, puis 15, puis 16 sur le métier tendu, 47 en 3 ans — le volume est lourd, le délai de pourvoi est le risque. Bouger : 4 mobilités entrantes par an, 12 en 3 ans, donc des passerelles réelles, pas un slogan interne. Automatiser : 2, puis 4, puis 6 ETP de besoin évité, livrés par un projet, pas par une slide DSI. Transmettre : 4, 5 et 6 retraites, 15 passations. Retenir : le modèle B suppose 8 départs turnover par an ; si l'on vise 6, on recalcule le recrutement, on ne garde pas 47 par inertie.\n\nLes KPI suivent les leviers, en unités déjà utilisées : gap ETP du métier, stock vs besoin, recrutements réalisés vs plan, % de pourvois internes, turnover du métier (départs / effectif moyen), ETP d'automatisation réellement retirés de la demande, % de retraites avec binôme. Cadence : revue trimestrielle du gap, revue annuelle de l'horizon. Le consultant junior tient le tableau, signale l'écart, propose un recalage. Il ne « recouvre » pas un gap de 4 en silence. Il ne promet pas que le turnover baissera.",
      methode:
        "Après le vote du scénario, une page d'exécution.\n\n1. Recopiez les flux de l'année 1, pas les 3 ans d'un coup. 2. Nommez un propriétaire métier et un propriétaire RH par levier. 3. Reliez chaque levier à un KPI et à un seuil d'alerte (exemple pédagogique : gap du métier > 6 en cours d'année → revue hors cycle). 4. Datez la première revue à 90 jours. 5. Écrivez ce qui ferait changer de scénario (outil en retard, recrutement à 50 % du plan, turnover à 12 au lieu de 8).\n\nLe livrable junior : un onglet « suivi » avec N, le plan, le réel, l'écart, le commentaire. Pas un nouveau modèle à chaque mois. On ne change les hypothèses que de façon tracée.",
      noteText:
        "Les seuils d'alerte et les volumes (47 recrutements, gap 0 en N+3, 8 turnover) sont pédagogiques. En mission, les seuils se calent avec le client. Un KPI n'est pas un benchmark de marché. Le junior n'invente pas un « bon » turnover.",
      exemple:
        "Nova Services (fictif) vote B en CODIR. Trois mois plus tard : 6 recrutements au lieu de 16 prévus sur l'année, automatisation toujours à 0, turnover déjà à 5 sur le trimestre (rythme > 8 / an). Le junior qui « attend N+1 pour mettre à jour » laisse le gap se rouvrir. Le junior qui tient le suivi alerte : le plan B de l'année 1 est hors trajectoire ; options : basculer une partie vers C (passerelles, si elles existent), recaler le besoin, ou assumer un gap temporaire — décision métier/RH, pas décision du tableur.",
      extra: [
        h("Plan d'action année 1 — scénario B (pédagogique) et tableau de bord"),
        code(`PLAN D'ACTION — NOVA SERVICES (fictif) — SCÉNARIO B — ANNÉE 1
Levier              Volume pédagogique     Propriétaire     Livrable
Recrutement         16 (sur 47 / 3 ans)    RH + manager     jalons sourcing / pourvoi
Mobilité entrante    4 (sur 12 / 3 ans)    RH + métier      4 passerelles nommées, formées
Mobilité sortante    2                     métier           pas un « dégraissage » improvisé
Automatisation       2 ETP de besoin       DSI + métier     2 ETP réellement retirés de la demande
Passation retraite   4 binômes             métier           4 départs avec transfert écrit
Rétention            hypothèse 8 turn/an   manager + RH     si réel ≠ 8, on RECALCULE B

KPI DE SUIVI (unités du modèle, pas un benchmark)
KPI                         Plan B N+1 (pédago.)   Alerte pédagogique
Gap ETP du métier           4                      gap > 6 en cours d'année
Stock fin vs besoin net     86 vs 90               stock < 84
Recrutements réalisés       16                     < 10 à M9
Pourvois internes           4                      0 au S1
Turnover métier (flux)      8 / an                 rythme annualisé > 10
Auto (ETP besoin évités)    2                      0 à M12
Retraites avec binôme       4 / 4                  1 départ sans passation

CADENCE
Trimestriel : gap, recrut, turn, auto.  Annuel : horizon, scénario, pyramide.
Le junior met à jour, commente l'écart, propose un recalage. Il ne vote pas.

CE QUE LE SUIVI NE FAIT PAS
Remplacer la GEPP, le CSE, un plan de formation juridique, un budget.
Décider d'un licenciement, d'un gel, d'une réorg : hors junior.`),
      ],
      erreurs:
        "Livrer le modèle et disparaître. Suivre 25 KPI dont 20 hors métier. Garder 47 recrutements alors que le turnover est tombé à 6. Compter un outil « en cours » comme 2 ETP déjà évités. Laisser un départ retraite sans binôme parce que « le SWP est fait ». Transformer un gap en plan social sans juriste. Promettre au CODIR que les KPI « garantissent » le gap 0.",
      particuliers:
        "Si le CODIR vote C : les KPI d'automatisation et de mobilité deviennent le chemin critique, le recrutement 10/9/10 n'est plus le sujet principal. Si le SIRH ne sort pas les départs du métier : vous tenez un fichier de suivi étiqueté manuel, vous n'inventez pas le flux. En cabinet, le client peut demander un « green » mensuel : un gap qui se dégrade reste rouge, même si le slide est joli. Multi-sites : un KPI groupe à 4 peut cacher un site à 10 et un site à 0 — descendez d'un cran.",
      exercice:
        "Scénario B voté. À M6 : recrutements 5 (plan 8 à mi-année, rythme 16 / an), mobilité 0, automatisation 0, turnover déjà 6 sur 6 mois, 2 retraites bien passées sur 2. (1) Quel signal sur le gap de l'année ? (2) Trois options de recalage, sans inventer de benchmark. (3) Ce que vous ne dites pas au CODIR.",
      correction:
        "(1) Recrutement sous le rythme (5 vs ~8), mobilité et auto à 0, turnover déjà annualisable à 12 si le semestre se répète (6×2), au-dessus de l'hypothèse 8 : le gap N+1 visé à 4 se dégrade vers A. Vous ne calculez pas un faux précis sans rejouer le tableur, mais la direction du signal est claire. (2) Options : accélérer le pourvoi (sans promettre un délai magique) ; activer 2 passerelles du S2 (bascule partielle vers C) ; revoir le besoin (volume d'activité, heures, prestataires nommés) et faire voter un gap temporaire. (3) Vous ne dites pas « on est verts, ça va rattraper ». Vous ne dites pas « il faut un plan social ». Vous ne présentez pas 12 de turnover comme un taux de marché. Vous apportez le réel vs le plan, et une décision demandée.",
    }),

    quizLesson({
      title: "Quiz — Strategic Workforce Planning",
      description:
        "Définition, formules, arithmétique du métier tendu à 80, scénarios et suivi. Six questions, seuil 70.",
      passing_score: 70,
      minutes: 8,
      questions: [
        q({
          question:
            "Chez Nova Services (fictif), que distingue correctement le SWP de la GEPP ?",
          options: [
            "A. Rien : SWP et GEPP sont deux noms du même accord d'entreprise",
            "B. Le SWP est une méthode de management (demande, offre, écart, leviers) ; la GEPP est un cadre français de dialogue social — on ne les substitue pas",
            "C. La GEPP est un tableur, le SWP est une négociation avec le CSE",
            "D. Le SWP n'existe que si l'entreprise dépasse 1 200 salariés",
          ],
          correct: 1,
          explanation:
            "Le SWP éclaire une décision de direction. La GEPP relève du Code du travail et du dialogue social (module suivant). Nova à 1 200 est un cas pédagogique, pas un seuil de SWP. Le CSE ne « fait » pas le SWP.",
        }),
        q({
          question:
            "Photo N du métier tendu (chiffres pédagogiques) : stock 80, besoin 88. Quel est le gap actuel, et que mesure-t-il ?",
          options: [
            "A. Gap = 80, c'est l'effectif",
            "B. Gap = 8, soit besoin − stock (88 − 80) : il manque 8 personnes par rapport au besoin, dès aujourd'hui",
            "C. Gap = 88, c'est le besoin",
            "D. Gap = 10 % de 80, le turnover",
          ],
          correct: 1,
          explanation:
            "gap = besoin_net − stock. 88 − 80 = 8. Ce n'est pas le turnover (ici un flux de 8 départs/an, coïncidence pédagogique à ne pas confondre) ni l'effectif.",
        }),
        q({
          question:
            "Dans le modèle, où place-t-on l'automatisation ?",
          options: [
            "A. En déduction du stock, comme un licenciement comptable",
            "B. En réduction du besoin (ETP évités) : besoin_net = besoin_brut − automatisation",
            "C. Dans le turnover, car les gens partent grâce à l'outil",
            "D. Nulle part : l'outil se raconte en qualitative, jamais en ETP",
          ],
          correct: 1,
          explanation:
            "L'automatisation diminue la demande, pas le stock. Scénario B : 2, 4, puis 6 ETP de besoin évité (pédagogique). On n'efface pas des personnes d'un effectif parce qu'un outil est prévu.",
        }),
        q({
          question:
            "Scénario A, fil de l'eau, N+3 (chiffres pédagogiques). Stock maintenu à 80, besoin_net 100. Quel gap, et que nous apprend-il ?",
          options: [
            "A. Gap 0, car on a remplacé tous les départs",
            "B. Gap 20 (100 − 80) : remplacer retraites et turnover ne suffit pas si le besoin monte",
            "C. Gap 8, le même qu'aujourd'hui, le fil de l'eau fige tout",
            "D. Gap 39, égal au cumul des recrutements A",
          ],
          correct: 1,
          explanation:
            "A recrute 39 en 3 ans (12+13+14) pour tenir 80. Le besoin brut va à 100 sans automatisation. gap = 100 − 80 = 20. Remplacer les départs n'absorbe pas la croissance.",
        }),
        q({
          question:
            "Scénario B N+3 : stock_fin 94, besoin_net 94, recrutements cumulés 47, mobilité entrante 12. Quelle lecture est exacte ?",
          options: [
            "A. Gap 0, mais le modèle suppose un fort recrutement externe plus 12 passerelles et 6 ETP d'automatisation — c'est un choix, pas une prévision",
            "B. Gap 0 donc plus aucun levier à suivre",
            "C. 47 + 12 = 59 embauches externes",
            "D. Le gap 0 est garanti dès que le CODIR vote B",
          ],
          correct: 0,
          explanation:
            "59 entrées = 47 recrutements + 12 mobilités, pas 59 externes. Le gap 0 de B est la cible du scénario s'il est exécuté. Le vote n'exécute rien. Les KPI (recrut, mobilité, auto, turn) restent nécessaires.",
        }),
        q({
          question:
            "À M6 du scénario B, le réel s'écarte (recrutements trop bas, turnover plus fort). Que fait le consultant junior ?",
          options: [
            "A. Il attend N+3 : le modèle « se lissera »",
            "B. Il met le KPI au vert pour ne pas inquiéter le CODIR",
            "C. Il actualise réel vs plan, signale la dérive du gap, et porte des options de recalage à l'instance — sans inventer un plan social ni un benchmark",
            "D. Il décide seul de geler les 16 recrutements",
          ],
          correct: 2,
          explanation:
            "Le junior tient le suivi et demande une décision. Il ne maquille pas, il n'attend pas trois ans, il ne vote pas un gel. Un écart de flux se traite dans l'année 1, pas dans le discours de N+3.",
        }),
      ],
    }),
  ],
};
