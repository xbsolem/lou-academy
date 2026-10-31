import { pack, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 1,
  title: "Lire la stratégie et l'organisation du client",
  description:
    "Relier stratégie, chaîne de valeur, PESTEL et SWOT à la question Workforce ; reconnaître les structures ; lire gouvernance, centralisation et organigramme — cas Groupe Nova Services.",
  lessons: [
    pack({
      title: "Stratégie, chaîne de valeur, PESTEL et SWOT",
      description:
        "Passer d'un slogan de direction à une lecture utile pour une mission Workforce : où le groupe gagne, sous quelles contraintes, avec quelles forces et faiblesses.",
      minutes: 7,
      objectifs:
        "Vous savez relier une stratégie d'entreprise à une question d'effectifs et d'organisation, décrire une chaîne de valeur sans jargon inutile, distinguer PESTEL (externe) et SWOT (synthèse), et produire une lecture de décision — pas un collage d'acronymes.",
      theorie:
        "Une stratégie, pour un consultant W&O, n'est pas un livre de vision. C'est : où le groupe veut gagner, avec quelle offre, grâce à quelles capacités humaines et organisationnelles. Si Nova veut croître en facility et industrialiser la relation client, la question devient : quels métiers, quels sites, quelle RH pour tenir 1 200 personnes — pas « un SWOT parce que c'est le slide 2 ».\n\nLa chaîne de valeur montre où se crée ou se perd la valeur. Primaire : commercial, planning des contrats, exécution sites / plateaux, qualité, relation client. Soutien : RH, finance, SI, achats, QHSE. La RH n'est pas hors sujet : un turnover sur les responsables d'exploitation casse la primaire, pas seulement le climat.\n\nPESTEL lit l'externe : politique, économique, social, technologique, écologique, légal. Pour Nova (fictif) : métiers en tension, pyramide, digitalisation, énergie, cadre du travail. Sur le légal, vous notez le thème et vous renvoyez au texte : pas de délai d'instance inventé.\n\nSWOT synthétise : forces et faiblesses (internes), opportunités et menaces (externes), après des faits. Un SWOT de slogans ne décide rien. Un SWOT utile relie chaque ligne à une implication Workforce.",
      methode:
        "Avant tout atelier « stratégie », écrivez la question de décision : « Nova doit-elle renforcer le facility, industrialiser les plateaux, ou d'abord unifier la RH ? »\n1. Relire la stratégie telle que dite par le sponsor (et telle que vécue par les sites — souvent divergente).\n2. Tracer la chaîne de valeur en une page : primaire / soutien, goulots, métiers critiques.\n3. PESTEL en 6 cases, 1 à 2 faits sourcés par case, pas 40 puces. Légal = thème + « vérifier le texte », pas un délai inventé.\n4. SWOT en 8 à 12 lignes maximum, chaque ligne datée et sourcée (interne Nova vs externe).\n5. En extraire 3 implications Workforce (effectifs, compétences, organisation, RH) et 3 inconnues.\nLe livrable tient en cinq slides. Le reste est annexe.",
      noteText:
        "Les tensions de marché, pyramides et croissances citées pour Nova sont pédagogiques et fictives. Elles servent à s'entraîner. Elles ne sont pas un benchmark sectoriel réel.",
      exemple:
        "Nova présente « une stratégie de croissance rentable ». Sans lecture, un junior produit 12 slides PESTEL. Avec lecture : la primaire Facility dépend de responsables d'exploitation dont une vague part à la retraite (fait interne fictif) ; la primaire Relation client souffre d'un turnover élevé sur deux plateaux ; le soutien RH est fragmenté (process et SIRH non unifiés). PESTEL social et légal signale tension de métiers et cadre du travail à vérifier, pas à inventer. Le SWOT ne dit pas « opportunité digitale » : il dit « opportunités de contrats si l'on tient les métiers critiques ; faiblesse = RH non outillée pour les anticiper ». L'implication mission : diagnostic effectifs + organisation RH, pas une plaquette stratégique.",
      extra: [
        code(`LECTURE PÉDAGOGIQUE — Groupe Nova Services (1 200 p., fictif)
Chaîne (simplifiée)
Primaire : commercial contrats → planning sites/plateaux → exécution → qualité → relation client
Soutien  : RH, finance, SI, achats, QHSE

PESTEL (thèmes, pas des « lois inventées »)
P  commande publique / privatisations locales selon contrats
E  pression prix des donneurs d'ordre, coût du travail
S  métiers en tension, pyramide, attractivité des horaires
T  outils de planning, SIRH partiel, automatisation partielle des plateaux
E  énergie et engagements clients sur les sites Facility
L  droit du travail, instances, GEPP selon obligations — vérifier Légifrance / avis social

SWOT utile = 3 implications Workforce, pas 40 adjectifs.`),
      ],
      erreurs:
        "Coller un PESTEL générique « inflation, digital, RSE » sans lien avec Nova. Faire un SWOT avant d'avoir un fait. Traiter la RH comme hors chaîne de valeur. Inventer un seuil légal « à 1 200 salariés, obligation X ». Confondre la stratégie du COMEX et la stratégie réellement exécutée sur les sites.",
      particuliers:
        "Si le sponsor n'a pas de stratégie écrite, vous documentez les arbitrages de fait (où l'on embauche, où l'on investit) : c'est déjà une stratégie révélée. En groupe multi-métiers, une seule matrice SWOT dilue tout : une par métier (Facility / Relation client / siège) puis une synthèse. Sur le légal, junior ≠ juriste : thème, pas délai inventé.",
      exercice:
        "À partir du fil rouge Nova (croissance, turnover, retraites, métiers en tension, RH fragmentée) : (1) une implication Workforce par activité primaire ; (2) deux cases PESTEL qui changent vraiment la mission ; (3) une ligne de faiblesse SWOT que vous refusez d'écrire sans donnée.",
      correction:
        "1. Commercial : capacité à staffer les nouveaux contrats. Exécution Facility : relève des responsables d'exploitation. Plateaux : tenue du turnover. Qualité / relation client : compétences de supervision, pas seulement des ETP.\n2. S (pyramide, tension des métiers, horaires) et L (cadre du travail / instances / GEPP à vérifier) — plus T si le SIRH empêche de voir les ETP. P et E colorent le contexte, ils ne remplacent pas le diagnostic interne.\n3. Vous refusez « équipes peu engagées » ou « culture défaillante » sans enquête. Vous pouvez écrire « RH fragmentée (process et SIRH non unifiés) » dès que le sponsor et deux RRH le décrivent de la même façon, en le datant.",
    }),
    pack({
      title: "Structures : fonctionnelle, divisionnelle, matricielle, processus, agile",
      description:
        "Reconnaître cinq logiques d'organisation, leurs forces, leurs dysfonctionnements typiques, et ce qu'elles impliquent pour une mission W&O.",
      minutes: 7,
      objectifs:
        "Vous savez nommer cinq structures, les reconnaître sur un organigramme réel (souvent hybride), et dire quel problème chacune résout — et lequel elle crée — avant de proposer une cible.",
      theorie:
        "Une structure n'est pas un dessin pour le rapport annuel. C'est le choix de ce qui est groupé, donc de ce qui sera facile — ou difficile — à coordonner. Cinq logiques reviennent.\n\nFonctionnelle : on groupe par expertise (RH, finance, opérations, commercial). Force : profondeur. Faiblesse : silos. Divisionnelle : on groupe par offre, client ou géographie. Force : proximité du P&L. Faiblesse : duplication RH / SI, siège aveugle.\n\nMatricielle : double rattachement (métier × géographie). Force : experts rares partagés. Faiblesse : deux chefs, arbitrages flous. Processus : on groupe autour d'un flux bout-en-bout (recruter-à-intégrer, incident-à-clôture). Force : délai client. Faiblesse : filières d'expertise diluées.\n\n« Agile » n'est pas l'absence de chef. C'est souvent des équipes stables autour d'un produit ou d'un flux. Plaquer des squads sur 1 200 personnes de sites Facility sans changer commande, planning et RH, c'est un vocabulaire, pas une structure.\n\nNova est hybride, comme beaucoup d'ETI de services : siège plutôt fonctionnel, opérations plutôt divisionnelles (métier × région), RH locale hors process unique. Le junior décrit l'hybride ; il ne force pas un modèle du manuel.",
      methode:
        "Face à un organigramme :\n1. Qu'est-ce qui est groupé : fonction, division (métier / géo / client), matrice, processus ?\n2. Où se prend la décision d'embaucher, de réorganiser une équipe, de lancer un outil RH ?\n3. Combien de chefs pour un responsable de site ? Un, deux, « ça dépend » ?\n4. Quelles duplications (5 façons de recruter, 3 SIRH) ?\n5. Quel problème la direction cherche à résoudre (proximité client, maîtrise des coûts, expertise, vitesse) — et donc quelle structure a une chance, pas « la plus moderne ».\nVous dessinez l'existant en une page, avec les rattachements pleins et pointillés. La cible viendra plus tard, avec des critères. Ici, vous apprenez à lire.",
      noteText:
        "Aucun des cinq modèles n'est « le bon ». Le bon est celui qui sert la stratégie et que l'on peut réellement animer (gouvernance, compétences de management, SI). Copier une matrice de grand groupe sur Nova est un risque, pas une preuve de maturité.",
      exemple:
        "Nova veut « passer en agile » parce qu'un directeur a vu une conférence. Les sites Facility tournent par contrats et plannings 21 jours. Les plateaux ont déjà des équipes de supervision. Un junior qui redessine 1 200 personnes en squads produit un organigramme illisible et un CSE inquiet. La lecture juste : les plateaux peuvent gagner à un pilotage par flux (processus + rituels) ; le Facility a d'abord besoin d'une ligne hiérarchique claire et d'une relève de responsables ; la RH a besoin d'un process unique, pas d'un nouveau nom. L'hybride se décrit, il ne se nie pas.",
      extra: [
        code(`STRUCTURES — repère (à coller dans le carnet de mission)
Type          On groupe selon        Ça aide à              Ça casse souvent
Fonctionnelle fonction / expertise   normes, profondeur     le transversal
Divisionnelle métier / géo / client  P&L, proximité         la duplication
Matricielle   deux axes              experts rares          le « qui décide »
Processus     flux bout-en-bout      délai, client          les filières
Agile / squad produit ou flux stable apprentissage          si la commande ne change pas

Nova (fictif, lecture de départ)
Siège = plutôt fonctionnel (DAF, DRH, DSI, QHSE)
Ops = plutôt divisionnelles (Facility / Relation client × régions)
RH = hybride mal tenu (DRH groupe + RRH, process non unifiés)
À confirmer par entretiens, pas à graver le lundi.`),
      ],
      erreurs:
        "Coller « matrice » parce que deux flèches se croisent. Appeler agile l'absence de chef. Redessiner la cible avant d'avoir nommé l'existant. Oublier que le SIRH et les plannings incarnent la structure mieux que le PowerPoint. Proposer une structure unique pour Facility et plateaux alors que le travail n'est pas le même.",
      particuliers:
        "Une matrice n'existe que s'il y a une règle d'arbitrage (qui tranche quand métier et région s'opposent). Sans règle, c'est du chaos nommé. Un réseau de sites n'est pas « divisionnel » si le siège décide chaque embauche : c'est du fonctionnel déguisé. En croissance rapide, la structure d'hier (petit siège, héros locaux) casse : c'est souvent le vrai sujet Nova.",
      exercice:
        "Classez ces trois situations Nova : (1) chaque région recrute et forme à sa guise, le siège découvre les ETP en fin de trimestre ; (2) un expert QHSE « dotted line » vers 8 régions, sans règle d'arbitrage ; (3) un plateau organise l'équipe autour du flux incident → clôture, avec un superviseur de flux. Pour chacune : structure dominante ; un risque ; ce que vous allez vérifier en entretien.",
      correction:
        "1. Divisionnelle géographique faiblement gouvernée (presque fédérale). Risque : duplication, masse salariale opaque, inéquité. Vérifier : qui autorise une embauche, quel SIRH, quel process RH.\n2. Matrice informelle. Risque : l'expert n'a pas de temps, les régions ne l'écoutent pas, ou l'inverse — deux chefs. Vérifier : % de temps, qui note, qui tranche un conflit.\n3. Logique processus (flux). Risque : la filière métier (formation, compétences) disparaît si l'on ne la loge nulle part. Vérifier : qui porte la compétence, qui gère les absences, qui parle au client.\nAucune de ces trois lectures n'autorise encore une cible : elles autorisent des questions.",
    }),
    pack({
      title: "Gouvernance, centralisation et organigramme Nova",
      description:
        "Lire qui décide, ce qui est centralisé ou non, reconnaître les dysfonctionnements classiques, et décoder l'organigramme du Groupe Nova Services.",
      minutes: 6,
      objectifs:
        "Vous savez distinguer organigramme et gouvernance, qualifier le degré de centralisation RH, repérer les dysfonctionnements visibles sur un schéma, et poser les bonnes questions de cadrage à partir de l'organigramme Nova.",
      theorie:
        "L'organigramme montre des boîtes et des traits. La gouvernance dit qui décide quoi, dans quelle instance, avec quelle donnée. On peut avoir un bel schéma et une gouvernance vide : embauches dans le couloir, réorganisation par e-mail du DG. En W&O, vous cartographiez les deux.\n\nLa centralisation n'est pas un bien. Centraliser recrutement, grilles, SIRH, peut donner de la visibilité à 1 200 personnes. Décentraliser peut donner de la vitesse sur un contrat qui démarre lundi. Le sujet est le couple : quoi est central (règles, outils, contrôles), quoi est local (planning, proximité, relais social). Nova souffre d'un entre-deux : DRH groupe sans process unique, RRH locaux sans mandat clair — RH fragmentée.\n\nDysfonctionnements lisibles tôt : boîtes vacantes ; double trait sans règle ; un manager à 18 collaborateurs en direct ; prestataires invisibles qui tiennent le planning ; instances découvertes à J-10 d'une cible. Le junior signale ; il n'invente pas la procédure d'information.\n\nLire un organigramme : traits pleins (autorité), pointillés (coordination), intitulés vs effectifs, siège vs sites, ce qui n'y figure pas (intérim, sous-traitance). Les 1 200 de Nova ne sont pas 1 200 boîtes au siège.",
      methode:
        "En semaine de cadrage :\n1. Obtenir l'organigramme officiel, puis le « vrai » (intérim, vacants, rattachements de fait).\n2. Pour 6 décisions (embaucher, licencier, réorganiser une équipe, changer un outil RH, lancer une formation critique, parler aux instances) : qui propose, qui tranche, qui est informé.\n3. Noter le degré de centralisation par processus RH, pas un score unique.\n4. Marquer les dysfonctionnements observables (pas les rumeurs de cantine).\n5. Relier chaque trou à la question de décision du COMEX : visibilité des ETP, relève des responsables, unification RH.\nVous sortez une page : schéma + cinq questions. Pas une cible.",
      noteText:
        "Organigramme et effectifs ci-dessous sont fictifs et pédagogiques. Un vrai schéma se date, se source, et se confronte aux ETP du SIRH — ici partiel, donc lacunaire à dire.",
      exemple:
        "Le DRH de Nova envoie un organigramme « à jour ». En entretien, un RRH indique trois responsables d'exploitation vacants, un plateau rattaché « en pratique » à un directeur commercial, et des agents d'accueil sous-traités hors schéma. Sans cette lecture, le junior dimensionne une organisation cible sur un dessin mort. Avec lecture : le COMEX décide à partir d'un existant faux. Premier livrable : un organigramme de travail, lacunaire, annoté, pas une cible.",
      extra: [
        code(`ORGANIGRAMME DE TRAVAIL — Groupe Nova Services (fictif, pédagogique, ~1 200 p.)
Conseil d'administration
        |
       DG
   _____|________________________________
  |         |         |         |        |
 DAF       DRH       DSI     Dir.      Dir.
 (finance) (groupe)  (SI)    Facility  Relation client
                      |         |        |
                     SIRH    8 régions  4 plateaux
                     partiel    |        |
                              sites    supervision
                              ~550 p.   ~400 p.

Siège & supports (finance, RH siège, QHSE, commercial, DSI) ~250 p.

RH telle que vécue (à confirmer)
— DRH groupe : règles, reporting, quelques recrutements cadres
— 5 RRH : paie relais, recrutement local, social de proximité
— Process recrutement / entretien / GEPP : non unifiés
— Instances : à cartographier avec le client — ne pas inventer le calendrier

Dysfonctionnements visibles sur le schéma (hypothèses de travail)
1. Trois boîtes « resp. exploitation » vacantes (Facility)
2. Pas de ligne unique sur qui autorise une embauche locale
3. Prestataires d'accueil / d'intérim hors dessin
4. Dotted line QHSE vers les régions, sans règle d'arbitrage
5. Pyramide : départs à la retraite sur la supervision — hors schéma

Ce schéma n'est pas un benchmark. C'est un objet de cadrage.`),
      ],
      erreurs:
        "Prendre l'organigramme officiel pour l'organisation réelle. Proposer de « tout centraliser » ou « tout décentraliser » en une phrase. Oublier l'intérim et la sous-traitance dans un effectif de services. Diagnostiquer le CSE à la place du juriste. Dessiner une cible le jour du kick-off.",
      particuliers:
        "Si le DG est aussi « directeur Facility par intérim », la gouvernance est personnelle, pas institutionnelle : le risque, c'est le jour où il n'est plus là. Si une région est une ancienne société acquise, elle a souvent son SIRH et son climat : le traiter comme les autres sans le dire fausse le diagnostic. En cas de projet touchant l'emploi, vous ne calculez pas un délai d'instance : vous signalez, le client vérifie avec son conseil.",
      exercice:
        "À partir du schéma Nova : (1) trois questions de gouvernance à poser au DRH dès le cadrage ; (2) un signe de RH fragmentée ; (3) ce que vous refusez de conclure sur les instances.",
      correction:
        "1. Qui autorise une embauche locale (RRH, directeur de région, DRH, DAF) ? Qui tranche un conflit QHSE × région ? Qui porte les vacants d'exploitation, et depuis quand ?\n2. Cinq RRH + process non unifiés + SIRH partiel + recrutement local parallèle au groupe = RH fragmentée, à documenter par faits (trois process d'embauche différents, reporting ETP tardif).\n3. Vous refusez de conclure « le CSE doit être informé avant telle date » : vous n'êtes pas juriste, vous n'inventez pas le calendrier. Vous notez que tout scénario d'organisation cible devra être relu sous l'angle social par le client, textes à l'appui.",
    }),
    quizLesson({
      title: "Quiz — Stratégie, structures et organigramme",
      description:
        "Vérifier que vous reliez stratégie et Workforce, que vous distinguez PESTEL et SWOT, et que vous lisez une structure et une gouvernance.",
      passing_score: 70,
      minutes: 5,
      questions: [
        q({
          question:
            "Dans une mission W&O chez Nova, à quoi sert d'abord une lecture de stratégie ?",
          options: [
            "A. À produire douze slides de vision pour ouvrir le rapport",
            "B. À relier « où le groupe veut gagner » aux capacités humaines et organisationnelles nécessaires",
            "C. À remplacer le COMEX dans le choix des offres et des clients",
            "D. À justifier un benchmark salarial inventé",
          ],
          correct: 1,
          explanation:
            "La stratégie, pour le W&O, est une question de capacités : métiers, sites, RH. Ce n'est ni un décor, ni un mandat pour décider à la place du COMEX, ni un prétexte à faux benchmark.",
        }),
        q({
          question: "Quelle distinction est la plus juste entre PESTEL et SWOT ?",
          options: [
            "A. PESTEL = forces internes ; SWOT = uniquement le légal",
            "B. PESTEL lit l'environnement externe en six familles ; SWOT synthétise interne (S/W) et externe (O/T) après des faits",
            "C. SWOT se fait avant tout fait, PESTEL après la cible d'organisation",
            "D. Les deux autorisent à inventer un délai d'instance à 1 200 salariés",
          ],
          correct: 1,
          explanation:
            "PESTEL est externe. SWOT synthétise interne et externe, après des faits. Ni l'un ni l'autre n'autorise un délai légal inventé.",
        }),
        q({
          question:
            "Nova a un siège fonctionnel, des opérations par métier et par région, une RH locale non unifiée. Quelle lecture est la plus honnête ?",
          options: [
            "A. C'est une organisation agile, donc sans chef",
            "B. C'est une matrice pure, donc deux chefs partout",
            "C. C'est un hybride (fonctionnel au siège, divisionnel en ops, RH fragmentée) à décrire avant toute cible",
            "D. Il faut coller des squads sur les 1 200 personnes dès la semaine 1",
          ],
          correct: 2,
          explanation:
            "Beaucoup d'ETI de services sont hybrides. Le junior décrit l'existant. Agile n'est pas l'absence de chef. Squads sur 1 200 sites n'est pas un cadrage.",
        }),
        q({
          question:
            "Un expert QHSE est en dotted line vers huit régions, sans règle d'arbitrage. Quel est le risque principal ?",
          options: [
            "A. Aucun : le pointillé suffit toujours",
            "B. Matrice informelle : temps, autorité et conflits non tranchés",
            "C. C'est une structure par processus, donc le délai client s'améliore tout seul",
            "D. Cela centralise automatiquement la GEPP",
          ],
          correct: 1,
          explanation:
            "Sans règle d'arbitrage, le dotted line est une matrice informelle, pas une gouvernance. Ce n'est ni un flux processus, ni une GEPP.",
        }),
        q({
          question:
            "L'organigramme officiel de Nova ignore trois vacants, un rattachement de fait et de l'intérim. Que livrez-vous en cadrage ?",
          options: [
            "A. Une organisation cible dès le mercredi",
            "B. Le schéma officiel, sans annotation, pour ne pas froisser le DRH",
            "C. Un organigramme de travail lacunaire, annoté (vacants, hors schéma, questions de gouvernance), pas une cible",
            "D. Un calendrier d'information du CSE inventé à partir du seuil de 1 200 salariés",
          ],
          correct: 2,
          explanation:
            "On annote l'existant, on ne le prend pas pour argent comptant, on ne dessine pas la cible au cadrage, on n'invente pas la procédure d'instances.",
        }),
      ],
    }),
  ],
};
