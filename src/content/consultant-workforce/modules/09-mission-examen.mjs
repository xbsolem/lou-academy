import { lesson, pack, h, t, note, code, quizLesson, q } from "../lib.mjs";

function cas(n, titre, enonce, travail, methode, correction) {
  return [
    h(`Cas ${n} — ${titre}`),
    t(
      `ÉNONCÉ\n\n${enonce}\n\nTRAVAIL DEMANDÉ\n\n${travail}\n\nMÉTHODE\n\n${methode}\n\nCORRECTION ARGUMENTÉE\n\n${correction}`
    ),
  ];
}

export default {
  position: 9,
  title: "Mission finale Nova Services et évaluation",
  description:
    "Traiter une mission complète sur Groupe Nova Services (1 200 salariés fictifs), comparer une correction et une grille, puis passer l'examen (seuil 80 %). Bibliothèques facultatives : 50 cas et 100 questions d'entretien.",
  lessons: [
    lesson({
      title: "Mission finale — Groupe Nova Services (1 200 salariés)",
      description:
        "Quinze travaux sur un jeu RH fictif cohérent : indicateurs, diagnostic, SWP, organisation cible, changement, finance, dashboard, CODIR.",
      minutes: 12,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous enchaînez les réflexes du parcours sur un seul cas : analyser les effectifs, calculer les indicateurs, diagnostiquer, cartographier, projeter, proposer une organisation cible, un plan de transformation et de changement, un ordre de grandeur financier, une feuille de route, un tableau de bord et une recommandation de comité. Vous étiquetez tout chiffre pédagogique. Vous n'inventez ni benchmark réel ni délai d'instance."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Groupe Nova Services est une ETI fictive de services (Facility + relation client) de 1 200 salariés. Difficultés déclarées : croissance des contrats, turnover élevé sur les plateaux, départs à la retraite sur l'encadrement de site, métiers en tension, RH fragmentée (cinq RRH, SIRH partiel), processus d'embauche non unifiés, besoin de digitaliser le planning et le SIRH. Votre mandat pédagogique : éclairer un COMEX à J+15 sur les options d'effectifs et d'organisation RH — pas signer une GEPP, pas choisir l'éditeur, pas valider un plan social.\n\nLes 1 200 se décomposent en huit familles ci-dessous. Les totaux HC additionnent 1 200. Les ETP et turnover sont pédagogiques. 35 h = 1 ETP ; 28 h apparaît surtout en relation client (ETP < HC). Turnover = départs N / effectif moyen N, hors détail retraites sauf mention. Aucune ligne n'est un benchmark de branche."
        ),
        h("Méthode opérationnelle"),
        t(
          "Traitez les 15 travaux dans l'ordre. Ne comblez pas un trou par un taux « de marché ». Toute hypothèse est écrite. Pour le SWP, un métier tendu suffit en vague 1 (support / relation client ou responsables d'exploitation), horizon 3 ans, trois scénarios dont le fil de l'eau. Pour la cible org / TOM : critères avant dessin. Pour le social : alerte + vérifier Légifrance / avis, pas de calendrier inventé. Livrables attendus (vous les produisez dans votre tableur et vos slides, le LMS n'exécute pas Excel ni PowerPoint) : fichier d'analyse, modèle SWP, diagnostic, cartographie, organigramme cible, plan de changement, business case, présentation CODIR."
        ),
        note(
          "Tout le dossier (Nova, 1 200, turnover, masses, ROI) est fictif et pédagogique. 36 000 € n'est pas une garantie d'embauche. L'attestation LOU Academy n'est ni RNCP, ni diplôme d'État, ni certification Excel / Power BI."
        ),
        h("Jeu de données — photo N (pédagogique, cohérente)"),
        code(`GROUPE NOVA SERVICES — FICTIF — 1 200 SALARIÉS
Photo au 31/12/N. Unité HC = têtes. ETP : 35 h = 1 ; partiels 28 h surtout en RC.

famille                    HC    ETP    pct_55plus  departs_N  hc_moy_N  turnover
Agents Facility            480   456       18 %        96         470      20,4 %
Resp. exploitation          55    55       35 %         4          56       7,1 %
Conseillers rel. client    320   288        8 %        84         310      27,1 %
Superviseurs RC             40    40       22 %         5          41      12,2 %
Fonction RH                 28    27,2     15 %         5          29      17,2 %
Siège & supports           180   174       20 %        16         178       9,0 %
Commercial                  72    72       12 %        10          70      14,3 %
QHSE / autres               25    25       28 %         1          25       4,0 %
TOTAL                    1 200 1 137,2     —          221       1 179      18,7 %

Contrôles (à retrouver)
  Σ HC = 480+55+320+40+28+180+72+25 = 1 200
  Σ ETP = 456+55+288+40+27,2+174+72+25 = 1 137,2
  Turnover groupe = 221 / 1 179 = 18,74 % ≈ 18,7 %
  Écart HC−ETP = 62,8  → essentiellement Facility (24) et RC (32) = temps partiels pédagogiques

Pyramide pédagogique (HC)
  <30 : 310   |  30-44 : 430   |  45-54 : 280   |  ≥55 : 180   |  Σ 1 200
  Dont ≥55 chez resp. exploitation : 19 personnes (≈ 35 % de 55)

Sites (HC) : Ouest 420 | Nord 310 | Est 250 | Île-de-France plateaux 220
  Turnover le plus élevé déclaré (pédagogique) : plateaux IDF et Ouest Facility

Masse brute annuelle pédagogique (agrégat)
  42,0 M€  (pas un coût employeur ; pas un salaire de marché)
  Coefficient employeur : HYPOTHÈSE à recaler finance — NE PAS inventer 45 % légal
  Vacants déclarés : 3 resp. exploitation + 18 conseillers + 12 agents Facility

RH as-is (rappel)
  DRH groupe, 5 RRH, process recrutement non unifiés, SIRH partiel
  Pas de référentiel unique, pas de SWP formel, instances à cartographier (pas de calendrier ici)

Ce qui MANQUE (à ne pas inventer)
  Motifs de départ fiables, compétences individuelles, coût employeur réel,
  délai de pourvoi réel, avis social, élasticité de l'activité.`),
        h("Les 15 travaux"),
        t(
          "1. Effectifs : commenter HC vs ETP, sites, vacants.\n2. Indicateurs : turnover groupe et deux familles extrêmes ; pyramide ; une limite d'échantillon / de définition.\n3. Diagnostic organisationnel : 5 constats sourcés (process, RACI, irritants, RH fragmentée).\n4. Risques : 5 risques (activité, données, social, livraison, modèle) avec propriétaire.\n5. Cartographie : 8 familles = emplois-repères ; 3 métiers critiques et critères.\n6. Compétences : une matrice courte sur un métier critique ; écart de niveau ≠ écart de volume.\n7. Projections : SWP 3 ans sur UN métier tendu (conseillers OU resp. exploitation), trois scénarios, identités qui s'additionnent.\n8. Écarts : gap N+3 fil de l'eau vs cible ; leviers (recruter, bouger, former, automatiser la tâche).\n9. Organisation cible : critères (span, couches, central/local RH) ; schéma to-be ; pas de nominatif.\n10. Plan de transformation : 4 chantiers (données, process recrutement, modèle RH, planning digital) séquencés.\n11. Impacts financiers : masse 42 M€ pédagogique ; un mini BC (coût projet vs départs évités hypothèse étiquetée) ; pas de taux légal inventé.\n12. Feuille de route 18 mois, jalons, RACI junior vs manager vs client.\n13. Tableau de bord : 8 KPI déjà définis dans le parcours (HC, ETP, turnover, gap, vacants, % pourvois internes, retraites avec binôme, contrôle identité).\n14. Présentation CODIR : pyramide (situation, implication, prochaine question), titres conclusifs, une slide « ce que ce n'est pas ».\n15. Défense : 3 objections (délai, « on a déjà une GEPP », « donnez-nous le benchmark ») et vos réponses."
        ),
        h("Contraintes de qualité"),
        code(`OUI                              NON
Identités HC / ETP / turnover    Benchmark « services = 12 % »
Hypothèses étiquetées            45 % de charges « légal »
Un métier tendu d'abord          SWP 1 200 en bloc pour vendredi
Cible après critères             Organigramme nominatif semaine 1
Alerte sociale                   Délai CSE inventé
Agrégats CODIR                   Fichier salarial nominatif
Attestation = réussite LMS       Titre RNCP / certif Excel`),
      ],
    }),
    lesson({
      title: "Correction commentée et grille d'évaluation",
      description:
        "Comparer une copie soutenable, une grille, et les fautes qui font échouer une soutenance junior.",
      minutes: 6,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez ce qu'une copie junior acceptable contient, comment une grille sépare méthode et poudre aux yeux, et quelles fautes sont éliminatoires (faux benchmark, droit inventé, nominatif, garantie 36 k€)."
        ),
        h("Correction — copie soutenable (pas « la » vérité)"),
        t(
          "Indicateurs. HC 1 200, ETP 1 137,2 : l'écart est du temps partiel pédagogique (Facility, RC), pas une « erreur SIRH » a priori. Turnover groupe 221/1 179 ≈ 18,7 %. Extrêmes : RC 27,1 %, QHSE 4 %. Pyramide : 180 personnes ≥55 dont une concentration sur l'exploitation (19 / 55). Limite : motifs de départ absents ; l'Ouest et les plateaux IDF sont des focales, pas un marché.\n\nDiagnostic. RH fragmentée (5 RRH, process non unifiés, SIRH partiel). Vacants d'exploitation. Turnover RC. Croissance commerciale non staffée. Gouvernance d'embauche floue. Ce sont des constats, pas encore une cible.\n\nSWP. Vague 1 : conseillers RC (stock 320 HC / 288 ETP, TO 27 %) OU resp. exploitation (pyramide). Trois scénarios, formules du module 04, chiffres étiquetés. Le fil de l'eau laisse le gap s'ouvrir. La cible mixte recrutement, rétention, mobilité, éventuellement réduction de besoin par outil — l'outil diminue le besoin, pas le stock.\n\nCible org. Siège : règles, SIRH, contrôle. Local : proximité, planning. RH : pool admin + HRBP légers + CoE réduits — pas un Ulrich de 40 000 personnes. Span des resp. exploitation à recaler (vacants). Pas de nominatif.\n\nChangement. Parties prenantes : DG, DRH, DAF, directeurs de métier, RRH, managers de proximité. ADKAR est un cadre parmi d'autres. Adoption = indicateurs (process unique utilisé, extract fiable), pas un logo.\n\nFinance. Masse 42 M€ pédagogique. Coefficient employeur : demande finance, hypothèse écrite si besoin. BC : coût d'un chantier rétention/SIRH vs départs évités — sensibilité, pas un ROI magique.\n\nCODIR. Une recommandation conditionnelle (scénario, conditions, hors juridique). Objections : pas de benchmark inventé ; GEPP ≠ SWP ; le junior ne garantit ni 36 k€ ni l'embauche du client."
        ),
        h("Grille (100 points, seuil pédagogique de soutenance 80)"),
        code(`Critère                              Points  80 % = exigence
Définitions HC / ETP / turnover          10     formules + identité 1 200
Lecture pyramide et vacants              8      exploitation + RC
Diagnostic sourcé (5 constats)           10     pas de slogans
Risques et limites de donnée             8      « on ne sait pas » assumé
SWP 3 scénarios qui s'additionnent       14     un métier, horizon, gap
Cartographie + 3 métiers critiques       8
Organisation cible + critères            10     pas de nominatif
Changement + feuille de route            8      ADKAR = un cadre, pas le dogme
Finance / BC hypothèses étiquetées       8      pas de 45 % légal
Livrable CODIR (pyramide, titres)        8
Éthique (benchmark, social, 36 k€)       8      faute = 0 sur la ligne

ÉLIMINATOIRE (ligne éthique à 0, soutenance non recevable)
— Inventer un benchmark réel ou un délai CSE
— Envoyer un nominatif salarial
— Présenter l'attestation comme RNCP ou garantir 36 000 €`),
        note(
          "Cette grille évalue la copie pédagogique Nova. Elle n'est pas une certification professionnelle officielle."
        ),
        h("Erreurs fréquentes de soutenance"),
        t(
          "SWP 1 200 en une ligne. Cible dès la slide 2. « Le marché est à 12 % ». « À 1 200 personnes le CSE a X jours ». Camembert sans contrôle. Organigramme avec les noms des RRH. Promettre Power BI comme déjà déployé. Oublier que 288 ETP ≠ 320 conseillers."
        ),
      ],
    }),
    quizLesson({
      title: "Examen final — Consultant junior W&O",
      description:
        "Évaluation de fin de parcours. Seuil 80 %. L'attestation mesure ces compétences dans la plateforme, pas un titre RNCP.",
      passing_score: 80,
      minutes: 12,
      questions: [
        q({
          question: "HC 1 200 et ETP 1 137,2 chez Nova. Que lisez-vous d'abord ?",
          options: [
            "A. Le SIRH est faux : HC et ETP doivent être égaux",
            "B. L'écart reflète surtout des temps partiels pédagogiques (Facility, RC) : on ne mélange pas les unités",
            "C. Il manque 62,8 personnes à licencier",
            "D. C'est un benchmark de branche",
          ],
          correct: 1,
          explanation:
            "35 h = 1 ETP ; 28 h = 0,8. HC ≠ ETP n'est pas un plan social. Pas un benchmark.",
        }),
        q({
          question: "Turnover groupe Nova pédagogique : 221 départs, effectif moyen 1 179. Taux ?",
          options: [
            "A. 221 / 1 200 = 18,4 %",
            "B. 221 / 1 179 ≈ 18,7 %",
            "C. 15 %, taux légal",
            "D. 12 %, « marché des services »",
          ],
          correct: 1,
          explanation:
            "Départs / effectif moyen. Ni le HC de fin seul, ni un taux légal, ni un marché inventé.",
        }),
        q({
          question: "Quelle phrase décrit le SWP, distinct de la GEPP ?",
          options: [
            "A. Un export SIRH",
            "B. Une méthode de direction : demande, offre interne, écart, leviers — la GEPP est un cadre d'emplois / parcours / dialogue selon le contexte",
            "C. Un accord que le junior rédige",
            "D. Un organigramme cible",
          ],
          correct: 1,
          explanation:
            "SWP = outil de management. GEPP = cadre d'emplois et de dialogue. Le junior ne rédige pas l'accord.",
        }),
        q({
          question: "Dans un modèle SWP, l'automatisation doit :",
          options: [
            "A. Se soustraire du stock de personnes",
            "B. Réduire le besoin (ETP évités), jamais inventer un stock négatif",
            "C. Remplacer la GEPP",
            "D. Autoriser à inventer un délai CSE",
          ],
          correct: 1,
          explanation:
            "L'outil diminue la demande, pas une ligne de stock négatif.",
        }),
        q({
          question: "MECE, sur un diagnostic turnover, sert surtout à :",
          options: [
            "A. Produire plus de slides",
            "B. Découper sans chevauchement ni trou, à partir d'une question et non d'une solution",
            "C. Valider un plan social",
            "D. Fixer le tarif de la mission",
          ],
          correct: 1,
          explanation:
            "Mutually exclusive, collectively exhaustive. Pas du juridique, pas du pricing.",
        }),
        q({
          question: "Un expert QHSE en dotted line vers 8 régions sans règle d'arbitrage, c'est surtout :",
          options: [
            "A. Une organisation agile sans chef",
            "B. Une matrice informelle : temps, autorité et conflits non tranchés",
            "C. Un CSP RH",
            "D. Une GEPP conforme",
          ],
          correct: 1,
          explanation:
            "Sans règle, le pointillé n'est pas une gouvernance.",
        }),
        q({
          question: "Le DRH demande les délais d'information du CSE « vu les 1 200 ». Le junior :",
          options: [
            "A. Récite un délai de mémoire",
            "B. Refuse d'inventer ; renvoie à Légifrance et à l'avis social ; livre le diagnostic d'emplois",
            "C. Garantit qu'il n'y a jamais d'instances en France",
            "D. Envoie le fichier salarial nominatif au CSE lui-même",
          ],
          correct: 1,
          explanation:
            "Junior ≠ juriste. Ni invention, ni déni, ni nominatif.",
        }),
        q({
          question: "Copier un modèle CSP / CoE / HRBP de 40 000 personnes sur Nova (1 200) :",
          options: [
            "A. Est la preuve de maturité",
            "B. Risque des cases vides : à 1 200, on dimensionne des rôles, pas des armées",
            "C. Est obligatoire en GEPP",
            "D. Remplace le TOM",
          ],
          correct: 1,
          explanation:
            "Le trio est une logique, pas un copier-coller. Le TOM reste le cadre.",
        }),
        q({
          question: "ADKAR, dans ce parcours :",
          options: [
            "A. Est le seul cadre de changement autorisé par le Code du travail",
            "B. Est un cadre parmi d'autres (conscience, désir, connaissance, capacité, ancrage) pour l'adoption, pas un dogme",
            "C. Remplace le sponsor",
            "D. Mesure le ROI légal",
          ],
          correct: 1,
          explanation:
            "Un cadre utile, pas une obligation légale ni un substitut au sponsor.",
        }),
        q({
          question: "Un business case RH utilise un coefficient 1,42 sur la masse. Que doit dire la slide ?",
          options: [
            "A. « Taux légal France des charges patronales »",
            "B. « Hypothèse à recaler avec la finance / paie — pas un taux légal unique »",
            "C. « Benchmark cabinet 45 % »",
            "D. « ROI donc le CSE est optionnel »",
          ],
          correct: 1,
          explanation:
            "Pas de taux unique inventé. Le ROI ne contourne pas le social.",
        }),
        q({
          question: "Le COMEX veut un « turnover vs marché ». Quelle réponse est professionnelle ?",
          options: [
            "A. Inventer 12 % pour clore le débat",
            "B. Donner le 18,7 % interne, définitions, limites, et refuser un marché non sourcé",
            "C. Dire que les benchmarks n'existent jamais nulle part",
            "D. Publier les 1 200 noms",
          ],
          correct: 1,
          explanation:
            "Méthode et limites. On n'invente pas un réel. On n'interdit pas les sources vraies : on n'en fabrique pas.",
        }),
        q({
          question: "Semaine 1, le DRH veut l'organigramme cible. Tenue correcte ?",
          options: [
            "A. Livrer une cible le mercredi",
            "B. Refuser la cible trop tôt ; livrer le cadrage et un existant annoté",
            "C. Inventer un span of control de marché",
            "D. Annuler la mission",
          ],
          correct: 1,
          explanation:
            "La cible vient après les faits et les critères.",
        }),
        q({
          question: "Une offre « consultant junior W&O, 36 000 € » pendant le parcours signifie :",
          options: [
            "A. Une garantie de salaire à la sortie du LMS",
            "B. Un ordre de grandeur de marché pour certaines offres, pas une garantie d'embauche ni de rémunération",
            "C. Que l'attestation est un titre RNCP",
            "D. Que cinq heures valent une mission autonome",
          ],
          correct: 1,
          explanation:
            "Objectif de marché, jamais une garantie. Pas de RNCP. Cinq heures ≠ mission réelle.",
        }),
        q({
          question: "Fichier brut des salaires sur la boîte perso du RRH « pour le COMEX » :",
          options: [
            "A. Autorisé car le destinataire est client",
            "B. Refus du canal et du nominatif ; espace mission ; agrégat ; alerte manager",
            "C. Lien public le week-end",
            "D. OK si le senior est en congé",
          ],
          correct: 1,
          explanation:
            "Le COMEX n'autorise ni le mail perso ni le brut nominatif. L'absence du senior n'élargit pas les droits.",
        }),
        q({
          question: "L'attestation de réussite de ce parcours :",
          options: [
            "A. Est un diplôme d'État",
            "B. Est une certification RNCP",
            "C. Atteste la réussite aux évaluations de la plateforme LOU Academy, pas un titre officiel ni une certif Excel / Power BI",
            "D. Remplace un avis d'avocat en droit social",
          ],
          correct: 2,
          explanation:
            "Attestation plateforme. Ni RNCP, ni État, ni Microsoft, ni visa juridique.",
        }),
      ],
    }),

    lesson({
      required: false,
      minutes: 0,
      title: "Bibliothèque facultative — 50 cas de conseil",
      description:
        "Cinquante cas condensés (énoncé, travail, méthode, correction). Hors quota des 5 heures.",
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Hors parcours obligatoire, vous vous entraînez sur cinquante situations W&O. Chaque fiche est courte. Les données sont fictives. Aucune n'est un benchmark réel ni un avis juridique."
        ),
        note(
          "Ressource facultative (0 minute). Elle ne compte pas dans les 300 minutes. L'examen s'appuie sur les mêmes réflexes."
        ),
        ...cas(
          1,
          "Entreprise en croissance",
          "Nova gagne deux contrats Facility. Commercial promet 80 agents en 8 semaines. RH a 12 vacants déjà.",
          "Question de diagnostic MECE et hors-périmètre.",
          "Symptôme ≠ solution. Branches : volume, délai de pourvoi, process, données.",
          "Question : dans quelle mesure peut-on staffer 80 sans casser la qualité ? Hors : signer les embauches, délai CSE inventé. Premier livrable : capacité recrutement + vivier + intérim nommé en annexe."
        ),
        ...cas(
          2,
          "Réduction du turnover",
          "Le DG veut « −10 points de turnover d'ici juin », sans motif de départ.",
          "Ce que vous mesurez d'abord ; ce que vous refusez.",
          "Définition, périmètre, motifs, extrêmes (RC 27 %).",
          "Vous mesurez 18,7 % groupe et 27 % RC, motifs « inconnus ». Vous refusez l'objectif −10 points comme engagement junior. Leviers après faits, pas un slogan."
        ),
        ...cas(
          3,
          "Réorganisation d'une direction RH",
          "Cinq RRH, un DRH, process différents. Le DRH veut « un Ulrich » lundi.",
          "Cible vs TOM ; ce que vous dessinez cette semaine.",
          "Activités volume vs jugement ; taille 1 200.",
          "Vous cartographiez as-is. Cible : pool admin, HRBP légers, CoE réduits. Pas de nominatif lundi. Transferts de personnes = alerte sociale, pas visa junior."
        ),
        ...cas(
          4,
          "Centralisation des services",
          "Le DAF veut toute la RH au siège « pour contrôler la masse ». Les sites crient à la lenteur.",
          "Quoi centraliser / quoi laisser local.",
          "Couple règles+outil vs proximité.",
          "Central : SIRH, grilles, extract, contrôle embauche. Local : planning, relais social de proximité, urgence contrat. Tout centraliser casse le démarrage lundi."
        ),
        ...cas(
          5,
          "Transformation digitale",
          "Un directeur a vu un SIRH en conférence. « On digitalise la GEPP. »",
          "Ordre des chantiers.",
          "Données et process avant l'outil.",
          "D'abord définitions ETP, process recrutement unique, extract fiable. Ensuite outil. Digitaliser une GEPP inexistante produit un paramétrage vide. Junior ≠ intégrateur."
        ),
        ...cas(
          6,
          "Départs massifs à la retraite",
          "19 resp. exploitation ≥55. Le DG : « on recrutera. »",
          "SWP 3 ans, levier prioritaire.",
          "Pyramide = flux retraites, pas un sentiment.",
          "Retraites dans le modèle, binômes, passerelle adjoint, recrutement ciblé. « On recrutera » sans délai de pourvoi est le fil de l'eau. Pas un plan social par défaut."
        ),
        ...cas(
          7,
          "Pénurie de compétences",
          "Outil planning : 5/6 de l'échantillon pédagogique sous la cible.",
          "Écart de niveau vs écart de volume.",
          "Matrice courte, levier formation/tutorat.",
          "Ce n'est pas 47 embauches. C'est un plan de montée en compétence + temps tuteur. Volume SWP et niveau GEPP se cumulent s'ils sont tous les deux vrais — ici l'échantillon n=6, limites à dire."
        ),
        ...cas(
          8,
          "Dimensionnement d'une équipe",
          "Plateau : 12 000 tickets/mois pédagogiques, 8 tickets/heure hypothèse, 140 h productives/mois.",
          "ETP besoin (ordre de grandeur).",
          "Charge / productivité / capacité, hypothèses étiquetées.",
          "12 000 / 8 = 1 500 h. 1 500 / 140 ≈ 10,7 ETP productifs, hors management, congés, formation. Ajouter supervision et absentéisme en hypothèses. Limite du modèle à écrire."
        ),
        ...cas(
          9,
          "Mise en place d'une GEPP",
          "« Rédigez l'accord pour jeudi, on a 1 200 personnes. »",
          "Lot junior vs lot juriste.",
          "Diagnostic emplois ≠ calendrier d'instances.",
          "Vous livrez cartographie et leviers. Vous refusez accord, seuil et délai de mémoire. Vérifier Légifrance / avis social."
        ),
        ...cas(
          10,
          "Déploiement d'un SIRH",
          "Le DSI veut un go/no-go outillage. La donnée ETP n'est pas fiable.",
          "Critère de go.",
          "TOM : process, data, puis tech.",
          "No-go fonctionnel tant que les définitions et le process d'embauche ne sont pas uniques. L'outil n'invente pas l'ETP. Junior ne choisit pas l'éditeur seul."
        ),
        ...cas(
          11,
          "Analyse d'une pyramide des âges",
          "180 ≥55 / 1 200. Le COMEX : « on est vieux. »",
          "Lecture utile.",
          "Croiser métier et site, pas le groupe seul.",
          "Le signal est les 19 / 55 exploitation, pas le 15 % groupe. Une pyramide jeune en RC n'annule pas le risque sites."
        ),
        ...cas(
          12,
          "Construction d'un Workforce Plan",
          "On vous demande le SWP 1 200 à 5 ans pour vendredi, turnover de marché.",
          "Cadrage de remplacement.",
          "Un métier, 3 ans, hypothèses étiquetées.",
          "Refus 1 200 en bloc, 5 ans non étayé, marché inventé. Vague 1 : conseillers ou exploitation, 3 scénarios, formules visibles."
        ),
        ...cas(
          13,
          "Conception d'une organisation cible",
          "Le DG dessine 12 boxes sur un napkin.",
          "Critères avant dessin.",
          "Span, couches, central/local, RACI.",
          "Vous posez 4 critères, un as-is annoté, 2 options. Le napkin n'est pas un TOM. Impacts humains : alerte, pas visa."
        ),
        ...cas(
          14,
          "Gestion des résistances",
          "Deux RRH refusent le process unique : « ça ne marchera pas ici. »",
          "Diagnostic de résistance vs irréalisme.",
          "Parties prenantes, irritants, ADKAR parmi d'autres.",
          "Écouter l'irritant (charge, outil). Distinguer peur et contrainte réelle. Sponsor + managers. Pas un mail « il faut s'aligner »."
        ),
        ...cas(
          15,
          "Présentation d'un business case",
          "Projet rétention 80 k€. Le DAF veut un ROI « comme l'industrie ».",
          "Structure du BC.",
          "Sans projet / avec / sensibilité ; hypothèses.",
          "Coût 80 k€ vs départs évités × coût de remplacement Hypothesis. Sensibilité. Le ROI n'autorise pas à sauter le social. Pas de 45 % légal."
        ),
        ...cas(
          16,
          "Identité HC cassée",
          "Slide : HC fin 1 210, début 1 200, 221 départs, 40 arrivées.",
          "Contrôle.",
          "HC_fin = début − départs + arrivées.",
          "1 200 − 221 + 40 = 1 019 ≠ 1 210. Base fausse. Pas de slide. Retour extract."
        ),
        ...cas(
          17,
          "ETP 28 h",
          "Un manager compte 10 personnes à 28 h comme 10 ETP de besoin.",
          "Conversion.",
          "28/35 = 0,8.",
          "10 HC = 8 ETP. Dimensionner 10 ETP surestime. Dire les deux unités."
        ),
        ...cas(
          18,
          "Turnover hors retraites",
          "Exploitation : 4 départs dont 3 retraites.",
          "Deux taux.",
          "Isoler si la décision le demande.",
          "Turnover total 4/56 ≈ 7 %. Hors retraites 1/56 ≈ 1,8 %. Les 3 retraites vont dans le SWP retraites, pas dans « climat »."
        ),
        ...cas(
          19,
          "RACI d'embauche",
          "Personne ne sait qui autorise un CDI agent.",
          "Matrice minimale.",
          "R/A/C/I sur une décision.",
          "A : à trancher (DAF vs DRH vs directeur région). R : RRH. C : manager. I : paie. Tant que A est vide, le SWP recrutement est un vœu."
        ),
        ...cas(
          20,
          "SIPOC recrutement",
          "Délai de pourvoi « trop long », personne n'a le process.",
          "SIPOC en une page.",
          "Fournisseurs, entrées, process, sorties, clients.",
          "S : manager, RRH, prestataire. P : besoin → offre → sélection → contrat. Mesurer le délai par étape. Standardiser avant d'automatiser."
        ),
        ...cas(
          21,
          "Span of control",
          "Un resp. exploitation a 22 directs + intérim invisible.",
          "Lecture.",
          "Span, vacants, hors schéma.",
          "22 directs est un signal, pas un « standard 8 » inventé. Intérim à tracer. Cible après charge réelle."
        ),
        ...cas(
          22,
          "TOM as-is vs to-be",
          "On vous demande « le TOM » : un organigramme coloré.",
          "7 couches.",
          "Process, org, gouv, tech, data, compétences, KPI.",
          "Un organigramme n'est qu'une couche. Sans data ETP et process unique, le to-be est un dessin."
        ),
        ...cas(
          23,
          "CSP trop gros",
          "Copie d'un CSP de 40 personnes pour Nova.",
          "Dimensionnement.",
          "Volume vs taille 1 200.",
          "Un pool de quelques personnes peut suffire. 40 crée de la file vide. Fusionner des CoE."
        ),
        ...cas(
          24,
          "HRBP encore admin",
          "On nomme 4 HRBP mais ils font encore la paie-liaison.",
          "Séquence.",
          "Retirer le volume avant le titre.",
          "Sans pool admin, le HRBP n'existe pas. Séquence : process, pool, puis rôle partenaire."
        ),
        ...cas(
          25,
          "Comité sans décision",
          "Comité de 2 h, 40 slides, pas de question posée.",
          "Reformulation.",
          "Pyramide : situation, implication, question.",
          "Slide 1 : « Faut-il voter le scénario B sur les conseillers, sous conditions données et social ? » Le reste est annexe."
        ),
        ...cas(
          26,
          "Benchmark inventé",
          "Le senior dit « mets 15 %, tout le monde sait ». ",
          "Conduite.",
          "Sources vs invention.",
          "Vous n'écrivez pas 15 % comme réel. Interne 18,7 %, définitions, « pas de source marché dans ce dossier »."
        ),
        ...cas(
          27,
          "Power BI trop tôt",
          "Le DSI promet un dashboard groupe en 10 jours. L'extract est sale.",
          "Préalable.",
          "Modèle, relations, mesures — après types et identités.",
          "Sans identité HC, le dashboard industrialise l'erreur. Excel contrôlé d'abord. Pas une certif DAX."
        ),
        ...cas(
          28,
          "IA générative et emplois",
          "Un directeur : « ChatGPT va supprimer 40 conseillers. »",
          "Analyse de tâches.",
          "Tâches, pas postes ; gouvernance ; humain.",
          "Vous analysez quelles tâches (FAQ, scripts). Vous n'écrivez pas −40 postes. RGPD, supervision, avis social si impact emplois. Junior n'annonce pas la suppression."
        ),
        ...cas(
          29,
          "RGPD extract",
          "Un stagiaire met l'extract nominatif sur un Drive perso.",
          "Actes.",
          "Canal mission, minimisation, alerte.",
          "Retirer, alerter manager / DPO client selon consigne, agrégats ensuite. Pas de moraline LinkedIn."
        ),
        ...cas(
          30,
          "Entretien sponsor",
          "Le DG parle 40 minutes, vous n'avez pas la question de décision.",
          "Guide.",
          "Question, succès à J+15, tabous, données, instances sans calendrier inventé.",
          "Vous reformulez en 5 lignes et faites viser. Sans visa, pas dix entretiens."
        ),
        ...cas(
          31,
          "Atelier conflictuel",
          "Facility et RC se rejettent le turnover.",
          "Animation.",
          "Faits d'abord, branches MECE, parking des accusations.",
          "Vous affichez les deux taux (20 % vs 27 %), vous interdisez le procès d'intention, vous sortez des hypothèses testables."
        ),
        ...cas(
          32,
          "Compte rendu",
          "Après atelier, chacun a « compris autre chose ».",
          "CR de 1 page.",
          "Décisions, ouverts, propriétaires, date.",
          "CR le jour même, 12 lignes, « à corriger sous 24 h sinon réputé exact ». Pas un roman."
        ),
        ...cas(
          33,
          "Hors périmètre cartographie 1 200",
          "Le DRH ajoute « au passage » la cartographie exhaustive.",
          "Économie de mission.",
          "Noter, remonter, ne pas dire oui.",
          "Autre lot. Manager : avenant ou refus. Le forfait ne rend pas le hors-périmètre gratuit."
        ),
        ...cas(
          34,
          "Fil de l'eau SWP",
          "Le comité ne veut voir que la cible « positive ».",
          "Scénario A.",
          "Même horizon, mêmes unités.",
          "Sans fil de l'eau, on ne voit pas le coût de ne rien changer (gap qui s'ouvre). A est un vrai scénario."
        ),
        ...cas(
          35,
          "Mobilité fantôme",
          "Le SWP C compte 24 mobilités / 3 ans. Aucun parcours n'existe.",
          "Recalage.",
          "Passerelle = vivier + délai + tuteur.",
          "Vous retirez 24 ou vous les étiquetez « conditionnels ». Sinon C est un dessin."
        ),
        ...cas(
          36,
          "Masse 42 M€",
          "Le DG divise 42 M€ par 1 200 = 35 k€ et parle de salaire médian.",
          "Correction.",
          "Masse / HC ≠ médiane ; ≠ coût employeur.",
          "42 M / 1 200 = 35 k€ de brut moyen pédagogique, pas une médiane, pas un net, pas un coût employeur. Refuser la comparaison marché inventée."
        ),
        ...cas(
          37,
          "Sensibilité BC",
          "ROI 40 % si l'on évite 12 départs ; 0 si 3.",
          "Slide.",
          "Fourchette, pas un point.",
          "Vous montrez 3 / 8 / 12 départs évités. Recommandation conditionnelle. Pas un seul ROI hero."
        ),
        ...cas(
          38,
          "Feuille de route 18 mois",
          "Le sponsor veut tout en 6 semaines (SIRH, GEPP, org, SWP).",
          "Séquence.",
          "Données → process → modèle → outil ; social en parallèle côté client.",
          "6 semaines : cadrage + extract + 1 métier SWP + as-is RH. Pas le SIRH complet. Dire le non-contenu."
        ),
        ...cas(
          39,
          "Dashboard 8 KPI",
          "On vous demande 40 indicateurs « pour briller ».",
          "Choix.",
          "KPI = levier déjà dans le plan.",
          "HC, ETP, TO, gap, vacants, pourvois internes, retraites binômées, contrôle identité. Le 41e attend un usage."
        ),
        ...cas(
          40,
          "Titres conclusifs",
          "Slide : « Turnover ». Un graphe.",
          "Réécriture.",
          "Titre = message.",
          "« Le turnover RC (27 %) pèse 84 des 221 départs : prioriser ce métier avant le 18,7 % groupe. »"
        ),
        ...cas(
          41,
          "Anglais en comité",
          "Un actionnaire pose « what's the attrition? ». Vous avez dit turnover.",
          "Définition.",
          "Même formule, mot dit.",
          "« Attrition / turnover here = exits / average HC = 18.7 %, pedagogical. Not a market benchmark. »"
        ),
        ...cas(
          42,
          "Test Excel cabinet",
          "On vous donne 12 lignes, 20 minutes, pas RECHERCHEX.",
          "Filet.",
          "INDEX/EQUIV, SOMME.SI.ENS, identité.",
          "Même calcul Ouest : 9 ; 8,6 ETP ; 2/9,5. Contrôle avant graphique. Ce parcours n'est pas une certif, l'exercice l'est."
        ),
        ...cas(
          43,
          "Étude de cas recrutement cabinet",
          "« Turnover élevé, que faites-vous en 20 minutes ? »",
          "Structure orale.",
          "Question, MECE, données, 3 options, reco conditionnelle.",
          "Clarifier population. Demander extract. Branches sorties / entrées / donnée. Pas de 15 % marché. Reco : fiabiliser + focale RC + SWP métier."
        ),
        ...cas(
          44,
          "Fit interview",
          "« Racontez un désaccord avec un manager. »",
          "STAR factuel.",
          "Situation, acte, limite de rôle.",
          "Vous décrivez un refus de chiffre non sourcé, l'escalade, le livrable recalé. Pas de héros, pas de trahison client."
        ),
        ...cas(
          45,
          "Négociation salariale",
          "On vous sort 36 k€ « comme dans la formation ». ",
          "Réponse.",
          "Objectif de marché ≠ garantie.",
          "Vous discutez un fourchette sourcée par vos recherches d'offres, pas « le LMS a promis ». Aucune embauche n'est due."
        ),
        ...cas(
          46,
          "Premiers mois en cabinet",
          "On vous laisse seul chez le client le jeudi de la semaine 2.",
          "Règles.",
          "Chaîne de relecture, timesheet, alerte.",
          "Vous ne devenez pas manager. Envoi client = relecture. Absence senior = plus d'alerte, pas plus de droits."
        ),
        ...cas(
          47,
          "Modification des conditions de travail",
          "Cible org : changement d'horaires sur un plateau.",
          "Limite junior.",
          "Impact humain vs contrat vs instances.",
          "Vous documentez l'impact. Vous ne qualifiez pas la modification. Avis social / texte. Pas de slide « c'est légal »."
        ),
        ...cas(
          48,
          "Restructuration murmurée",
          "Un directeur parle de « dégraisser le siège » dans un atelier.",
          "Conduite.",
          "Mandat écrit, mots, escalade.",
          "Vous ne notez pas « plan social » dans un objet d'e-mail. Vous demandez le mandat. Manager + social client. Hors improvisation junior."
        ),
        ...cas(
          49,
          "Saisonnalité Facility",
          "Pic juillet, creux février. On dimensionne sur le pic en CDI.",
          "Modèle.",
          "ETP annuel vs pic ; mix contrat nommé.",
          "Deux colonnes : besoin pic et besoin annuel. Intérim / CDD en levier explicite, pas caché dans le stock CDI."
        ),
        ...cas(
          50,
          "Soutenance CODIR hostile",
          "« Vos chiffres sont faux, on a 1 150 personnes. »",
          "Défense.",
          "Source, date, définition, écart.",
          "« Notre extract pédagogique 31/12 : 1 200, source client fichier X. Si 1 150, montrons l'écart (périmètre, date, prestataires). On ne se bat pas sur un orgueil, on recale. »"
        ),
      ],
    }),

    lesson({
      required: false,
      minutes: 0,
      title: "Bibliothèque facultative — 100 questions d'entretien cabinet",
      description:
        "Cent questions (fit, MECE, ETP, SWP, GEPP, Excel, cas, 36 k€) avec réponses modèles courtes. Hors quota 5 h.",
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous vous entraînez aux entretiens juniors W&O / People / Human Capital / change / GEPP / operating model. Les réponses sont des modèles, pas des scripts à réciter. 36 000 € = objectif de marché, pas une garantie. Cinq heures ≠ mission autonome."
        ),
        note(
          "Facultatif, 0 minute. Certaines questions recoupent l'examen. Ce n'est pas un QCM officiel de cabinet nommé."
        ),
        h("Comment utiliser"),
        t(
          "Couvrez la question, structurez à voix haute (10 à 90 secondes), comparez. Qualifiez : fait, méthode, limite, escalade. Interdit : benchmark inventé, délai CSE inventé, RNCP, certif Excel."
        ),
        code(`FIT / POSTURE (1-20)
01 Pourquoi le conseil W&O ? — Intérêt pour organisations+données+décision ; lot cadré, pas « sauver les RH ».
02 Analyste vs consultant vs senior vs manager ? — Collecte / lot / fil mission / cadrage-risque commercial.
03 Une fois où vous avez dit non. — Chiffre non sourcé, escalade, livrable recalé.
04 Confidentialité ? — Canal mission, agrégats, pas de nominatif train/LinkedIn.
05 Client difficile ? — Reformuler la question de décision, ne pas inventer pour plaire.
06 Pourquoi Nova / un cas fictif dans votre bouche ? — Dire que c'est pédagogique, transposer la méthode.
07 Échec ? — Identité HC fausse, slide stoppée, base recaléée.
08 Travail en équipe cabinet ? — RACI interne, relecture avant client.
09 Déplacement / charge ? — Rythme réel, timesheet honnête, alerte tôt.
10 Pourquoi vous et pas un profil RH pur ? — Méthode diagnostic + chiffres + limite de rôle.
11 Conflit d'intérêts / ami chez le client ? — Déclarer, sortir du lot.
12 Qualité d'un livrable ? — Source, date, définition, un message, relecture.
13 Régie vs forfait ? — Vous ne priciez pas ; vous tenez le temps et le hors-périmètre.
14 36 k€ ? — Ordre de grandeur d'offres, pas une promesse LMS ni une garantie.
15 Attestation LOU ? — Réussite plateforme, pas RNCP, pas diplôme d'État.
16 Excel certifié ? — Non. Formules et contrôles, pas un badge Microsoft.
17 Première semaine ? — Cadrage, données, 4-6 entretiens, pas la cible.
18 Sponsor absent ? — Ne pas prendre le RRH pour sponsor.
19 Hors périmètre ? — Noter, remonter, ne pas dire oui.
20 Erreur envoyée au client ? — Dire vrai, corriger, manager, pas de rustine silencieuse.

MECE / STRUCTURATION (21-35)
21 MECE ? — Sans chevauchement, sans trou.
22 Arbre turnover. — Sorties (retraites/évitables/fins de contrat) / entrées / donnée.
23 Symptôme vs question. — « SIRH » est un moyen ; « pourquoi les ETP ne sont pas fiables » est une question.
24 20 min cas oral. — Clarifier, structurer, hypothèses, reco conditionnelle, limites.
25 Calcul mental 221/1179. — ≈18,7 % (220/1180≈18,6 %).
26 28 h en ETP. — 0,8.
27 10 personnes 28 h. — 8 ETP.
28 Identité. — Fin = début − départs + arrivées.
29 Prioriser 3 sujets Nova. — Donnée ETP, RC turnover, pyramide exploitation.
30 Hypothesis driven ? — Hypothèses testables, pas opinions.
31 Issue vs solution tree. — Pourquoi vs comment.
32 40 slides. — Pyramide, 1 question de décision.
33 Donnée manquante. — Le dire, fourchette, ne pas inventer le marché.
34 Deux causes possibles. — Test (fichier vs entretien), pas un vote.
35 Synthèse 30 secondes. — Situation, implication, demande au comité.

INDICATEURS / EXCEL (36-55)
36 HC vs ETP. — Têtes vs 35 h=1.
37 Turnover. — Départs / effectif moyen.
38 Pourquoi pas /HC fin seul. — Biais si l'on a beaucoup embauché ou réduit.
39 Absentéisme. — Jours absence / jours théoriques ; pas un taux légal unique.
40 Pyramide utile. — Croiser métier.
41 Masse vs coût employeur. — Brut vs + charges employeur ; pas de 45 % légal.
42 SOMME.SI.ENS. — Somme sous plusieurs critères (site ET statut).
43 RECHERCHEX. — Ramener un attribut ; filet INDEX/EQUIV.
44 TCD. — Croiser ; ne remplace pas l'identité.
45 Contrôle C1. — Identité HC VRAI avant graphique.
46 Power Query. — Nettoyer types/filtres ; pas une certif.
47 Doublons id. — NBVAL vs UNIQUE.
48 Filtre site. — Inès Est hors turnover Ouest.
49 Petite base 12 lignes. — Limites d'échantillon à dire au COMEX.
50 Nominatif COMEX. — Non ; agrégats.
51 8,6 ETP Ouest. — 7×1 + 2×0,8.
52 2/9,5. — ≈21 %.
53 Graphique d'abord. — Non, contrôles d'abord.
54 Heures mensuelles. — Reconvertir en hebdo avant /35, documenter.
55 Intérim. — Hors HC salarié, annexe.

SWP / GEPP (56-75)
56 SWP en 3 questions. — Demande, offre, écart.
57 Horizon. — 3 ans pédagogique lisible ; 5 ans si stratégie tient.
58 Automatisation. — Moins de besoin, pas stock négatif.
59 Fil de l'eau. — Vrai scénario.
60 GEPP vs SWP. — Dialogue/parcours vs outil de direction.
61 Seuil 1 200. — Vérifier le texte, ne pas réciter.
62 Accord jeudi. — Refus rédaction ; livrer diagnostic.
63 Métier critique. — Impact, rareté, délai, pyramide, tension.
64 Passerelle. — Vivier, délai, tuteur ; sinon fantôme.
65 Reconversion longue. — Pas une vanne N+1.
66 4 niveaux de maîtrise. — Assez ; 10 niveaux = théâtre.
67 Matrice nominative CODIR. — Non.
68 200 fiches vague 1. — Non ; 8-15 emplois-repères.
69 Retraites dans TO. — Les isoler si la décision le demande ; les mettre au SWP retraites.
70 Gap. — besoin_net − stock_fin.
71 Scénarios comparables. — Même métier, horizon, unités.
72 KPI SWP. — Gap, pourvois, TO métier, auto réelle, binômes.
73 Recaler si TO baisse. — Moins recruter, ne pas garder 47 par inertie.
74 1 200 en bloc. — Refus ; métier par métier.
75 Marché turnover. — Interdit sans source ; interne d'abord.

ORG / CHANGE / PROJET (76-90)
76 Structure hybride Nova. — Siège fonctionnel, ops divisionnelles, RH fragmentée.
77 Matrice sans règle. — Chaos nommé.
78 Span 22. — Signal, pas un standard inventé.
79 TOM. — 7 couches, pas un org chart.
80 Ulrich 40k sur 1 200. — Cases vides.
81 HRBP + admin. — Séquence pool d'abord.
82 ADKAR. — Un cadre parmi d'autres.
83 Résistance vs contrainte. — Écouter l'irritant réel.
84 RACI projet. — A unique par décision.
85 Agile vs classique. — Selon prévisibilité ; pas un slogan Facility.
86 Comité. — Décision demandée, risques, prochain jalon.
87 Feuille de route 6 semaines. — Cadrage+données+1 métier, pas tout.
88 Impacts horaires. — Documenter ; pas « c'est légal ».
89 Dégraisser. — Mandat, mots, escalade, pas d'objet « plan social ».
90 Adoption. — Process utilisé + extract fiable, pas un logo.

CAS / CODIR / OFFRE (91-100)
91 20 min Nova. — Fiabiliser ETP, focale RC, pyramide exploitation, SWP 1 métier, hors juridique.
92 Objection 1 150 vs 1 200. — Source, date, périmètre, recaler.
93 Vs marché. — 18,7 % interne, pas de 12 % inventé.
94 Défense B vs C. — Conditions (outil, passerelles) ; le comité vote.
95 Question piège salaire. — Fourchette recherchée, LMS n'a rien promis.
96 Étude Excel 20 min. — Identité, ETP, TO, 1 TCD, phrase de limite.
97 Pression « cible mercredi ». — Cadrage d'abord.
98 Anglais attrition. — Exits/average HC, definition stated.
99 Premiers 90 jours cabinet. — Lots, relecture, timesheet, une expertise (indicateurs).
100 Pourquoi vous après 5 h ? — Méthode, réflexes, limites assumées ; pas une mission autonome déjà faite.`),
      ],
    }),

    lesson({
      required: false,
      minutes: 0,
      title: "Complément facultatif — digital, IA, droit social appliqué",
      description:
        "Automatisation, SIRH, IA, RGPD ; CSE, GEPP, mobilité, réorganisation — réflexes junior, pas un cours de droit.",
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous situez les impacts digitaux sur les tâches, et les thèmes de droit social utiles en transformation, sans usurper l'avocat ni le DPO."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Digital / IA. L'automatisation et l'IA générative touchent des tâches (rédiger une FAQ, classer un ticket), rarement un métier entier du jour au lendemain. Analysez les tâches, les compétences, les risques (biais, fuite de données, hallucination), la supervision humaine. Un SIRH n'est pas une GEPP. Un copilote n'autorise pas un extract nominatif dans un outil grand public. RGPD : minimisation, canal, alerte. Le junior ne « valide » pas un traitement.\n\nDroit social appliqué. Information et consultation, CSE, GEPP, mobilité, réorganisation, modification des conditions de travail, restructuration : ce sont des thèmes. Les règles précises (seuils, délais, contenus) se lisent dans le Code du travail et la jurisprudence, et se recalent avec l'avis social de l'entreprise. Un consultant junior prépare des faits d'emploi et des options. Il n'invente pas un calendrier, ne rédige pas la note d'information, ne qualifie pas un PSE. Dès que le contrat, l'emploi ou les instances sont en jeu : escalade, texte, conseil spécialisé."
        ),
        note(
          "Facultatif. Vérifiez Légifrance. Ce complément n'est pas un avis juridique. L'examen obligatoire teste déjà le réflexe « ne pas inventer »."
        ),
        code(`RÉFLEXE UNIQUE
Impact tâches / données / emplois  →  documenter
Obligation, délai, seuil, qualification  →  vérifier le texte + avis social
Junior  →  faits, options, alertes
Pas junior  →  accord, CSE, licenciement, RGPD de traitement, choix d'éditeur`),
      ],
    }),
  ],
};
