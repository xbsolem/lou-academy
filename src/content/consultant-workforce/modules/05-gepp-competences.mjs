import { pack, code, quizLesson, q, h } from "../lib.mjs";

export default {
  position: 5,
  title: "GEPP et cartographie des compétences",
  description:
    "Situer la GEPP dans le cadre français sans inventer un seuil, cartographier métiers et compétences, identifier métiers critiques et passerelles — cas Groupe Nova Services.",
  lessons: [
    pack({
      title: "GEPP : cadre français, dialogue, limites du junior",
      description:
        "Distinguer GEPP, GPEC et SWP ; savoir ce que le Code du travail encadre ; refuser d'inventer un délai ou un seuil.",
      minutes: 8,
      objectifs:
        "Vous situez la GEPP comme cadre de dialogue social et de gestion des parcours, distinct du SWP de direction. Vous savez ce qu'un consultant junior prépare, et ce qu'il n'écrit jamais comme une obligation chiffrée de mémoire.",
      theorie:
        "La GEPP (gestion des emplois et des parcours professionnels) est, en France, l'évolution de la GPEC. Elle vise à anticiper les évolutions des métiers et des compétences, et à en discuter, le cas échéant, dans le cadre du dialogue social. Ce n'est pas un tableur SWP. Le SWP (module précédent) est un outil de management : demande, offre, écart. La GEPP est un sujet d'emplois, de parcours, de formation, de mobilité — et, selon le contexte, de négociation.\n\nLe Code du travail prévoit des règles de négociation sur la gestion des emplois et des parcours professionnels. Le seuil d'effectif, la périodicité et le contenu exact dépendent du texte en vigueur et de la situation de l'entreprise (accords, UES, effectif calculé selon les règles du code). Un consultant junior ne récite pas « à 1 200 salariés, obligation X, délai Y ». Il écrit : thème identifié, texte à vérifier sur Légifrance, avis social de l'entreprise. Inventer un délai d'information du CSE ou un seuil « parce que Nova a 1 200 personnes » est une faute professionnelle.\n\nChez Groupe Nova Services (1 200 salariés fictifs), la tentation du COMEX est d'appeler « GEPP » un plan de recrutement. Votre rôle : séparer ce qui est diagnostic d'emplois (cartographie, écarts, passerelles) de ce qui est obligation et calendrier d'instances. Le second n'est pas votre visa.",
      methode:
        "Dès qu'un sponsor dit « il nous faut une GEPP » :\n1. Reformulez : diagnostic d'emplois / plan d'action RH / négociation ? Ce n'est pas le même lot.\n2. Posez le hors périmètre juridique : vous ne rédigez pas l'accord, vous ne calculez pas le calendrier d'instances.\n3. Listez ce que vous pouvez produire : emplois sensibles, compétences, écarts, leviers (formation, mobilité, recrutement), hypothèses étiquetées.\n4. Demandez qui, côté client, porte le social (RRH, DS, avocat).\n5. Notez : « seuils, périodicité, information-consultation : vérifier Code du travail / Légifrance et avis de l'entreprise. »\n6. Reliez au SWP : les gaps d'ETP nourrissent la GEPP ; ils ne la remplacent pas.\nLivrable junior : note de cadrage GEPP (faits, hors juridique) + annexes métiers. Pas un projet d'accord.",
      noteText:
        "Junior ≠ juriste. Aucun délai CSE, aucun seuil d'effectif, aucune « obligation à 1 200 » n'est énoncé ici comme vérité. Vérifiez le texte en vigueur. Les métiers Nova sont fictifs et pédagogiques.",
      exemple:
        "Le DRH Nova : « Vous êtes consultants, rédigez-nous l'accord GEPP pour le CSE de jeudi. » Sans cadre, un junior pond 20 pages d'obligations. Avec cadre : vous refusez la rédaction d'accord et le calendrier. Vous livrez une cartographie des emplois sensibles (exploitation, support client), les écarts issus du SWP pédagogique, et une liste de leviers à discuter. Le RRH social et le conseil de l'entreprise tiennent le texte. Jeudi n'autorise pas à inventer le droit.",
      extra: [
        h("Repères — à coller dans le carnet (pas un mémento juridique)"),
        code(`GEPP ≠ GPEC « vintage » ≠ SWP ≠ PLAN SOCIAL
GPEC          Ancien sigle (gestion prévisionnelle des emplois et des compétences)
GEPP          Emplois + parcours professionnels — dialogue, anticipation, leviers
SWP           Outil de direction (demande / offre / gap) — module précédent
Plan social   Décision d'emploi / PSE : hors visa junior, avis spécialisé

CE QUE VOUS PRODUISEZ
  Cartographie emplois, compétences, écarts, passerelles, plan d'action RH
  Hypothèses étiquetées, sources, limites

CE QUE VOUS NE PRODUISEZ PAS
  Accord, calendrier d'instances, seuil d'effectif « de mémoire »
  Qualification juridique d'une réorganisation

RÉFLEXE
  « Selon effectif, accords et texte en vigueur — vérifier Légifrance / avis social. »`),
      ],
      erreurs:
        "Appeler GEPP un histogramme d'effectifs. Rédiger un accord. Inventer « à 300 / 1 200 salariés, délai de X jours ». Confondre GEPP et licenciement. Promettre au CSE un chiffre SWP non validé. Traiter 1 200 comme un seuil magique pédagogique érigé en droit.",
      particuliers:
        "Entreprise déjà couverte par un accord : vous le lisez avant de proposer un « standard cabinet ». UES ou multi-sociétés : l'effectif et le niveau de négociation se vérifient, vous ne les supposez pas. Groupe international : la GEPP est un cadre français ; les sites hors France ont d'autres droits. PME sous seuils éventuels : le diagnostic d'emplois reste utile ; l'obligation, elle, se vérifie dans le texte.",
      exercice:
        "Nova, 1 200 salariés fictifs. Le COMEX veut « une GEPP pour vendredi, avec les délais CSE ». (1) Ce que vous refusez. (2) Le cadrage que vous posez. (3) Le premier livrable utile.",
      correction:
        "1. Vous refusez délais CSE, rédaction d'accord, qualification juridique, tout seuil récité de mémoire.\n2. Cadrage : diagnostic d'emplois sur deux métiers tendus (exploitation, support client), écarts SWP déjà étiquetés pédagogiques, leviers formation/mobilité/recrutement, hors rédaction sociale.\n3. Premier livrable : cartographie + écarts + questions pour le dialogue — daté, sourcé, avec la mention de vérifier le texte. Le vendredi ne produit pas un accord.",
    }),
    pack({
      title: "Cartographier métiers, compétences et écarts",
      description:
        "Construire un référentiel utile (familles, fiches, niveaux), une matrice, et des écarts actionnables — pas un catalogue encyclopédique.",
      minutes: 8,
      objectifs:
        "Vous savez limiter un référentiel à ce qui sert une décision, distinguer technique et comportemental, poser des niveaux de maîtrise, et calculer un écart sans fake précision.",
      theorie:
        "Un référentiel métiers est une langue commune : familles professionnelles, emplois-repères, fiches (finalité, activités, compétences). Il n'est pas l'organigramme nominatif. Chez Nova (fictif), « agent Facility », « responsable d'exploitation », « conseiller relation client » sont des emplois-repères. Si chaque région a un intitulé différent pour le même travail, la cartographie commence par l'alignement des noms — sinon le SWP compte des pommes et des poires.\n\nUne compétence est un savoir agir en situation. Technique (habilitation, outil, geste) et comportementale (prioriser, recadrer un client, coacher) se séparent, parce que les leviers ne sont pas les mêmes (formation courte vs accompagnement managérial). Les niveaux de maîtrise se limitent : 4 niveaux suffisent (non acquis, pratique, autonome, expert). Un barème à 10 points sur 1 200 personnes est du théâtre.\n\nL'écart = besoin cible − stock (volume × niveau). Un écart « 40 % des agents ne sont pas autonomes sur l'outil de planning » est actionnable. Un écart « la culture n'est pas agile » ne l'est pas. Les données de maîtrise, dans ce parcours, sont pédagogiques : en mission, elles viennent d'entretiens, de managers, parfois d'auto-positionnement calibré — jamais d'un benchmark de compétences inventé.",
      methode:
        "Vague 1, six semaines max sur un périmètre :\n1. 8 à 15 emplois-repères, pas 200 fiches.\n2. Pour chaque fiche : 5 à 8 activités, 6 à 10 compétences clés, 4 niveaux.\n3. Matrice personnes × compétences : une source (manager) + un échantillon de calibration.\n4. Écart par compétence critique : % sous le niveau cible, volume d'ETP concernés.\n5. Lien SWP : les gaps de volume et les gaps de niveau ne se compensent pas tout seuls.\n6. Livrable : 1 carte familles, 1 matrice, 1 page d'écarts, 1 page de limites (biais manager, auto-positionnement).\nVous n'attendez pas la perfection du SIRH compétences : il n'existe souvent pas.",
      noteText:
        "Les % de maîtrise Nova ci-dessous sont inventés pour l'exercice. Ce ne sont pas une enquête réelle ni un standard de branche.",
      exemple:
        "Nova veut « la cartographie des 1 200 ». Un junior ouvre 1 200 lignes et 80 compétences : six mois, zéro décision. Le même junior, tenu : 12 emplois-repères, focus responsables d'exploitation et support client, 8 compétences critiques, matrice sur un échantillon de 40 personnes calibré avec 3 managers. Écart pédagogique : 18 / 40 non autonomes sur le planning digital — levier formation + tutorat, pas un slogan digital.",
      extra: [
        code(`RÉFÉRENTIEL COURT — Nova (fictif, pédagogique)
Famille              Emploi-repère                 Compétence critique (ex.)
Facility             Agent de site                 Gestes métier, sécurité
Facility             Resp. exploitation            Planning, management de proximité
Relation client      Conseiller                    Outil tickets, recadrage client
Relation client      Superviseur                   Coaching, flux, qualité
RH                   RRH / HRBP                    Conseil manager, données
Siège                Support (finance, SI…)        Selon filière

NIVEAUX (4, pas 10)
0 non acquis | 1 pratique accompagnée | 2 autonome | 3 expert / transmet

MATRICE — extrait pédagogique 6 personnes × 3 compétences (support client)
personne   tickets   recadrage   outil_planning
A          2         1           0
B          3         2           1
C          1         1           1
D          2         2           2
E          0         1           0
F          2         3           1
Cible N+1 (hypothèse pédagogique) : 2 sur les 3 compétences
Sous cible : tickets 2/6 ; recadrage 3/6 ; planning 5/6
Lecture : l'outil de planning est l'écart massif — pas « le savoir-être ».

FICHE MÉTIER MINIMALE
Finalité / 5 activités / 6-10 compétences / passerelles in / out / données SIRH associées`),
      ],
      erreurs:
        "200 fiches avant toute décision. 10 niveaux. Mélanger intitulés locaux. Prendre l'auto-positionnement pour une mesure. Inventer un % de branche. Oublier que volume SWP et niveau GEPP sont deux écarts. Livrer la matrice nominative au COMEX.",
      particuliers:
        "Habilitations réglementées (sécurité, électricité) : le niveau 0 a un autre statut que « pas autonome sur l'outil » — vous le flaggez, le métier tranche. Prestataires : hors matrice salariés, à tracer. Acquisition récente : deux référentiels, phase d'alignement avant l'écart unique.",
      exercice:
        "(1) Trois raisons de refuser 80 compétences × 1 200 personnes en vague 1. (2) Sur la matrice pédagogique, quelle compétence prioriser et pourquoi. (3) Que sortez-vous au COMEX à la place des noms A–F ?",
      correction:
        "1. Pas de décision, pas de calibration, coût de collecte, SIRH incapable, délai vs COMEX J+15.\n2. Outil planning : 5/6 sous la cible 2 — écart le plus large, levier formation/tutorat identifiable. Recadrage ensuite. Tickets moins critique ici.\n3. % sous cible par compétence, volume d'ETP, levier, limites d'échantillon (n=6 pédagogique). Pas de nominatif COMEX.",
    }),
    pack({
      title: "Métiers critiques, passerelles, formation, reconversion",
      description:
        "Qualifier un métier sensible, dessiner des passerelles réalistes, et relier formation et mobilité à un plan d'action — sans promettre une reconversion.",
      minutes: 9,
      objectifs:
        "Vous qualifiez un métier critique avec des critères, vous proposez des passerelles testables, et vous construisez un plan d'action RH qui n'invente ni le droit ni un taux de réussite de reconversion.",
      theorie:
        "Un métier est critique (ou sensible) quand sa défaillance casse l'activité ou la conformité, et qu'il est difficile à remplacer à temps. Critères utiles : impact (sécurité, contrat client, chiffre), rareté interne, délai de pourvoi, pyramide, tension de recrutement, compétence longue à construire. Chez Nova, les responsables d'exploitation (pyramide, vacants) et les techniciens / conseillers support (turnover pédagogique, volume) sortent souvent de ce filtre — c'est une hypothèse de travail, pas une vérité de branche.\n\nUne passerelle est un trajet réel : emploi A → emploi B, avec un écart de compétences comblable dans un délai dit, un volume, un tutorat. « On fera de la mobilité » n'est pas une passerelle. Agent Facility → responsable d'exploitation peut exister si l'on a un vivier, un parcours, et des managers qui libèrent du temps. Conseiller → superviseur, de même. Agent Facility → data analyst siège : souvent une reconversion longue, pas une vanne SWP de l'année.\n\nFormation et reconversion sont des leviers, pas des miracles. Le plan d'action relie : écart (volume et niveau), levier, propriétaire, délai, indicateur, risque. Le dialogue social peut porter ces leviers : vous préparez la matière, vous ne tenez pas l'instance. Toute reconversion qui touche au contrat se vérifie juridiquement : ce n'est pas un slide.",
      methode:
        "1. Scorez 8 à 12 emplois-repères sur 5 critères (impact, rareté, délai de pourvoi, pyramide, tension) — 1 à 3, transparent.\n2. Gardez 3 à 5 métiers critiques pour la vague.\n3. Pour chacun : 1 à 2 passerelles in, avec écart de compétences et délai pédagogique étiqueté.\n4. Leviers : recruter, former au niveau cible, tutorer, bouger, automatiser la tâche (pas la personne), sous-traiter en le disant.\n5. Plan d'une page par métier critique : volumes SWP + volumes formation + propriétaires.\n6. Risques : passerelle fantôme, formation sans temps, reconversion vendue sans avis social.\nLe junior propose. Le client arbitre. Le juriste relit dès que le contrat bouge.",
      noteText:
        "Scores, volumes de passerelles et délais de formation ci-dessous sont pédagogiques. Ils n'ont pas valeur de branche ni de succès statistique de reconversion.",
      exemple:
        "Nova vote le scénario SWP B (recrutement lourd sur le support). Sans passerelles, 47 embauches pédagogiques en 3 ans restent un pari marché. Avec une passerelle réelle « agent Facility senior → adjoint exploitation » (12 personnes pédagogiques, parcours 18 mois, tuteur), vous réduisez une partie du risque pyramide sur l'exploitation — à condition que le volume 12 existe dans le vivier, pas dans le slogan. Vous ne déclarez pas 12 reconversions « faites ».",
      extra: [
        code(`SCORE MÉTIERS — Nova (fictif, 1-3, pédagogique, pas un benchmark)
Emploi                 impact rareté delai_pourvoi pyramide tension  somme
Resp. exploitation        3      3         3          3        2      14
Technicien / support      3      2         3          1        3      12
Agent Facility            2      1         2          2        2       9
Superviseur RC            3      2         2          2        2      11
RRH                       2      2         2          1        2       9

PASSERELLES TESTABLES (hypothèses pédagogiques)
De                      Vers                     Délai étiqueté     Volume max anecdotique
Agent Facility senior   Adjoint exploitation     12-18 mois         8 à 12 / 3 ans
Conseiller autonome     Superviseur RC           9-12 mois          selon vacance
Adjoint exploitation    Resp. exploitation       12 mois            selon pyramide
Hors vanne année N      Agent → data siège       reconversion longue, pas un flux SWP

PLAN D'ACTION — 1 métier / 1 page
Écart volume (SWP) | écart niveau (matrice) | leviers | qui | quand | KPI | risque | hors juridique`),
      ],
      erreurs:
        "Qualifier critique tout le catalogue. Promettre des passerelles sans vivier. Compter une reconversion comme un recrutement de l'année. Oublier le temps des tuteurs. Envoyer un score 14 au CSE comme une décision. Inventer un taux de réussite « 80 % des reconversions ».",
      particuliers:
        "Métier réglementé : la passerelle inclut l'habilitation, sinon elle est fausse. Activité saisonnière : le critique de juillet n'est pas celui de janvier. Marque employeur faible : le levier recrutement pèse plus, la passerelle interne aussi — dites les deux. Si un accord de mobilité existe déjà : le lire avant d'inventer un dispositif.",
      exercice:
        "À partir du score pédagogique : (1) deux métiers que vous gardez en vague 1 et pourquoi ; (2) une passerelle que vous refusez de compter dans le SWP N+1 ; (3) trois lignes du plan d'action « resp. exploitation ».",
      correction:
        "1. Resp. exploitation (somme 14 : pyramide + rareté + impact) et support (12 : tension + délai de pourvoi). Agent Facility 9 : volume, mais moins rare — vague 2 ou levier de vivier.\n2. Agent → data siège : reconversion longue, pas un flux de l'année N+1.\n3. Écart : vacants + retraites (SWP). Levier 1 : passerelle adjoint, volume max pédagogique 8-12 / 3 ans, tuteurs nommés. Levier 2 : recrutement ciblé, pas 47 génériques. Levier 3 : binômes avant retraite. KPI : vacants, % pourvois internes, retraites avec passation. Hors : calendrier CSE inventé. Le client décide ; vous documentez.",
    }),
    quizLesson({
      title: "Quiz — GEPP, cartographie, métiers critiques",
      description:
        "Vérifier la distinction GEPP/SWP, le réflexe Légifrance, et la discipline des écarts et passerelles.",
      passing_score: 70,
      minutes: 5,
      questions: [
        q({
          question: "Quelle distinction est la plus juste ?",
          options: [
            "A. GEPP et SWP sont le même tableur, vendu sous deux noms",
            "B. Le SWP est un outil de direction (demande, offre, écart) ; la GEPP est un cadre d'emplois, de parcours et, selon le contexte, de dialogue social",
            "C. La GEPP remplace le Code du travail",
            "D. Le SWP autorise le junior à rédiger l'accord",
          ],
          correct: 1,
          explanation:
            "Outil de management vs cadre d'emplois et de dialogue. Ni fusion, ni substitution au droit, ni visa junior sur un accord.",
        }),
        q({
          question:
            "Nova a 1 200 salariés. Le DRH veut les « délais CSE de la GEPP » pour jeudi. Que faites-vous ?",
          options: [
            "A. Réciter un délai de mémoire, 1 200 étant « au-dessus du seuil »",
            "B. Refuser d'inventer seuil et calendrier ; renvoyer au texte (Légifrance) et à l'avis social ; livrer le diagnostic d'emplois",
            "C. Rédiger l'accord pour gagner du temps",
            "D. Annoncer qu'aucune règle n'existe jamais en France",
          ],
          correct: 1,
          explanation:
            "Le junior ne récite pas un seuil ni un délai. Il vérifie, il oriente vers l'avis social, il livre le diagnostic. Nier tout cadre est aussi faux qu'inventer le calendrier.",
        }),
        q({
          question:
            "Pourquoi limiter un référentiel à 8–15 emplois-repères en vague 1 ?",
          options: [
            "A. Parce que le droit l'interdit au-delà",
            "B. Pour servir une décision dans le temps d'une mission, calibrer, et éviter 200 fiches mortes",
            "C. Parce que Power BI ne gère pas plus de 15 lignes",
            "D. Pour cacher les métiers sensibles au CSE",
          ],
          correct: 1,
          explanation:
            "C'est de la méthode, pas une interdiction légale ni une limite d'outil, ni une stratégie de dissimulation.",
        }),
        q({
          question:
            "Une passerelle « agent Facility → data analyst siège » dans le SWP de l'année :",
          options: [
            "A. Se compte comme 12 recrutements évités, slogan suffisant",
            "B. Est en général une reconversion longue : on ne la compte pas comme vanne de l'année sans vivier, délai et avis si le contrat bouge",
            "C. Est obligatoire en GEPP à 1 200 salariés",
            "D. Remplace la formation des responsables d'exploitation",
          ],
          correct: 1,
          explanation:
            "Une reconversion longue n'est pas un flux N+1. Rien n'est « obligatoire à 1 200 » ici. Ça ne remplace pas le métier critique exploitation.",
        }),
        q({
          question:
            "Que livrez-vous au COMEX à partir d'une matrice de compétences ?",
          options: [
            "A. La liste nominative des notes",
            "B. Les % sous cible par compétence critique, volumes, leviers, limites d'échantillon — pas de nominatif",
            "C. Un benchmark de branche inventé",
            "D. Le projet d'accord GEPP",
          ],
          correct: 1,
          explanation:
            "Agrégats actionnables, limites, pas de nominatif COMEX, pas de faux benchmark, pas d'accord.",
        }),
      ],
    }),
  ],
};
