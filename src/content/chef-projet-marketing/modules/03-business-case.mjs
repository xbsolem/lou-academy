import { pack, quizLesson, q, h, t, code } from "../lib.mjs";

export default {
  position: 3,
  title: "Construire le business case",
  description:
    "Chiffrer un projet d'offre : distinguer business case, business plan et budget, recenser coûts et bénéfices sans double compte, calculer rentabilité, comparer des scénarios et formuler une recommandation.",
  lessons: [
    pack({
      title: "Comprendre le business case",
      description:
        "Savoir à quoi sert un BC, ce qu'il n'est pas, et quand il éclaire un go / no-go.",
      minutes: 5,
      objectifs:
        "Vous définissez un business case. Vous le distinguez d'un business plan et d'un budget. Vous savez ce qu'il doit permettre à un comité de décider, et ce qu'il ne remplace pas (cadrage, conformité, planification détaillée).",
      theorie:
        "Le business case est le dossier qui éclaire une décision d'investissement sur un projet précis : engager ou non de l'argent, du temps et du risque, pour un résultat attendu, sur un horizon donné. Il répond à une question de comité : « ce projet vaut-il d'être lancé, tel que cadré, plutôt que de ne rien faire ou de faire autre chose ? » Il s'appuie sur le cadrage (besoin, périmètre, hypothèses). Il ne le remplace pas.\n\nLe business plan décrit l'entreprise ou une activité dans son ensemble : modèle, marché, organisation, financement, souvent sur plusieurs années, pour des investisseurs ou un dirigeant. Ce n'est pas le bon outil pour juger une offre jeunes actifs à six mois. Le budget est l'enveloppe autorisée et le suivi des dépenses. Un projet peut être au budget et mal investi ; il peut être rentable et hors enveloppe de l'année. Le BC relie coûts, bénéfices, temps et risque. Le budget encadre ce que l'on a le droit de dépenser une fois le go donné.\n\nUn BC utile est incrémental : il compare « avec projet » et « sans projet ». Il est transparent sur les hypothèses. Il ne se confond pas avec une plaquette marketing. Il ne « valide » pas non plus le réglementaire : un projet rentable peut être non lançable tant que conformité et juridique n'ont pas statué.",
      methode:
        "Avant de chiffrer, écrivez en une page : la décision demandée (go, no-go, go sous conditions) ; l'horizon (ici, trois ans de lecture pédagogique) ; le scénario de référence « sans projet » ; les hypothèses que finance devra recaler ; les validations hors chiffre (IT, conformité, juridique, risques).\n\nPuis structurez le dossier : coûts, bénéfices, rentabilité, scénarios, risques économiques, recommandation. Interlocuteur pivot : finance. Le CP assemble, il n'invente pas les taux ni les volumes.\n\nContrôle : si le document ne dit pas ce qui se passe sans projet, ce n'est pas encore un business case.",
      noteText:
        "Banque Horizon et les montants de ce module (120 000 €, 30 000 €, 90 000 €, 3 ans) sont un cas pédagogique fictif. Ils illustrent des formules. Ils ne sont pas un benchmark de marché ni le coût du capital d'un établissement réel.",
      exemple:
        "Comité de Banque Horizon. Le marketing présente cinq slides d'ambition jeune. La finance demande : « Combien ça coûte, que gagne-t-on de plus qu'aujourd'hui, en combien de temps on récupère, et si les volumes sont deux fois plus faibles ? » Sans BC, le CP répond par le cadrage : besoin, délai six mois, hors périmètre SI. C'est insuffisant pour un go d'investissement. Avec un BC, il pose l'investissement, les charges, le chiffre d'affaires incrémental, le net, le ROI, le délai de récupération, et des scénarios. Le comité peut alors arbitrer. Il pourra encore dire non pour une raison non financière (calendrier IT, avis conformité).",
      extra: [
        code(`BC ≠ BUSINESS PLAN ≠ BUDGET
Business case     : décision sur UN projet (lancer / non / sous conditions)
Business plan     : récit économique d'une activité ou de l'entreprise
Budget            : enveloppe autorisée et suivi de dépenses
Sans projet       : référence obligatoire (ce que l'on perd ou subit sinon)
Le CP assemble    : finance chiffre, métiers fournissent volumes,
                    conformité / juridique / risques ne sont pas « dans la VAN ».`),
      ],
      erreurs:
        "Appeler « business case » un budget prévisionnel de campagnes. Copier un business plan de création d'entreprise. Oublier le scénario sans projet. Faire du BC une plaquette d'image. Promettre la rentabilité avant d'avoir un périmètre. Traiter l'avis conformité comme une ligne de coût optionnelle que l'on pourra « voir plus tard ».",
      particuliers:
        "En TPE, le BC tient dans un tableur d'une page : il existe quand même, parce que le dirigeant mélange trésorerie et espoir. En grand groupe, un modèle finance est imposé (taux, horizon, catégories de coûts) : vous le suivez, vous ne créez pas une VAN parallèle. En partenariat, deux BC peuvent coexister : dites qui investit quoi. En offre réglementée, un BC positif n'autorise pas le lancement : il alimente le comité, il ne court-circuite pas les habilités.",
      exercice:
        "Classez ces trois documents pour le projet jeunes actifs de Banque Horizon : (1) enveloppe marketing 2027 déjà votée ; (2) dossier « lancer l'offre 25-35, coûts / gains / scénarios / reco » ; (3) plan à 5 ans de la banque pour lever de la dette. Dites lequel le comité projet doit exiger cette semaine, et pourquoi les deux autres ne suffisent pas.",
      correction:
        "(1) est un budget : il dit ce que l'on a le droit de dépenser, pas si ce projet-là est le bon usage de l'argent. (2) est le business case : c'est le document de la décision de lancement. (3) est un business plan (ou un plan stratégique / financier d'entreprise) : trop large, trop long, il noie l'offre 25-35 ans. Le comité projet exige (2) cette semaine, branché sur le cadrage déjà écrit. (1) servira après le go pour consommer. (3) n'arbitrera pas le backlog digital du trimestre.",
    }),

    pack({
      title: "Identifier et chiffrer les coûts",
      description:
        "Recenser investissement, charges d'exploitation et oubliés, sans mélanger les natures.",
      minutes: 6,
      objectifs:
        "Vous séparez l'investissement initial des charges récurrentes. Vous savez quoi inclure (projet, acquisition, run, formation, prestataires) et quoi exclure (coûts déjà irrécupérables). Vous préparez le cas 120 000 € + 30 000 € par an.",
      theorie:
        "Deux natures de coûts doivent rester distinctes. L'investissement initial (parfois appelé CAPEX ou coût de lancement) est dépensé pour rendre le projet possible : conception d'offre, parcours digital, campagnes de lancement, formation, frais de projet, prestataires de mise en œuvre. Dans le cas pédagogique, il vaut 120 000 €, une fois, en année 0. Les charges d'exploitation (OPEX) reviennent chaque année tant que l'offre vit : media, licences, maintenance du parcours, animation commerciale, support. Dans le cas, 30 000 € par an, pendant l'horizon de trois ans, soit 90 000 € de charges. Le coût total sur l'horizon est 120 000 + 90 000 = 210 000 €. Ce n'est pas « 120 000 € le projet ».\n\nOn ajoute souvent, trop tard : le temps interne (si finance le valorise), les coûts de conformité externalisés, les imprévus, le run IT. On n'ajoute pas les coûts irrécupérables déjà engagés (une étude payée l'an dernier) : ils ne changent pas la décision d'aujourd'hui. On n'ajoute pas non plus « toute la masse salariale du marketing » : seulement l'incrémental, ce que le projet fait dépenser en plus. TVA, immobilisation, règles comptables : le CP s'aligne sur finance, il n'invente pas un plan comptable.",
      methode:
        "Listez les coûts en trois colonnes : lancement (une fois) ; annuel (chaque année) ; éventuel (si tel événement).\n\n1. Conception et production (offre, parcours, contenus). 2. Acquisition et lancement (media, agence). 3. IT et licences. 4. Réseau (formation, outils, temps). 5. Prestataires. 6. Contrôle, recette, support. 7. Réserve d'imprévus, si la politique interne le prévoit.\n\nFaites valider la liste par finance et par les métiers qui dépenseront. Contrôle : chaque ligne a une source (devis, analogue interne, hypothèse étiquetée). Une ligne « divers 20 % » sans commentaire n'est pas un chiffrage.",
      noteText:
        "Les 120 000 € et 30 000 € par an sont le cas unique de rentabilité de ce parcours. Ne les présentez pas comme le coût réel d'une offre bancaire. En situation réelle, finance recale chaque ligne.",
      exemple:
        "Banque Horizon. Première version du CP : « le projet coûte 120 k€ » — en réalité le devis d'agence et le parcours. L'IT ajoute une licence annuelle, le media un budget de maintien, le réseau des journées de formation. On retrouve 30 k€ par an. Sur trois ans, ignorer l'annuel sous-estime le coût de 90 k€ et gonfle artificiellement la rentabilité. Le CP corrige avant le comité : investissement 120 k€, OPEX 30 k€ × 3, total 210 k€.",
      extra: [
        code(`COÛTS — cas pédagogique Banque Horizon (fictif)
Investissement initial (année 0)     120 000 €
  conception offre + parcours, lancement, formation, projet
Charges d'exploitation               30 000 € / an
  media de maintien, licences, animation, run léger
Horizon de lecture                   3 ans
Charges sur l'horizon                30 000 × 3 = 90 000 €
COÛT TOTAL                           120 000 + 90 000 = 210 000 €

À ne pas mettre dans le BC de décision :
- étude déjà payée l'an dernier (coût irrécupérable)
- salaire entier du service marketing (non incrémental)

À faire valider par finance : détail, TVA, immos, temps interne.`),
      ],
      erreurs:
        "N'annoncer que l'investissement. Oublier le run. Compter deux fois la même agence (lancement et OPEX). Valoriser tout le temps de l'entreprise. Oublier la formation réseau. Mettre une réserve « au feeling ». Présenter un devis prestataire comme le coût total. Promettre que « l'IT sera absorbé par le RUN existant » sans accord IT.",
      particuliers:
        "En startup, presque tout est OPEX : dites-le, gardez quand même lancement vs récurrent. En groupe, CAPEX / OPEX a un sens comptable : ne recatégorisez pas pour embellir le ROI. En campagne pure, l'investissement peut être presque nul et l'annuel énorme : le BC reste pertinent. Si l'IT refuse de chiffrer, vous n'inventez pas 0 € : vous portez une hypothèse étiquetée ou vous reportez le comité.",
      exercice:
        "On vous donne : parcours 70 k€, campagne de lancement 40 k€, formation 10 k€, media annuel 18 k€, licence 8 k€, support 4 k€ par an. Horizon 3 ans. Calculez investissement, OPEX annuel, coût total. Une étude de 15 k€ a déjà été payée en N-1 : l'incluez-vous ?",
      correction:
        "Investissement = 70 + 40 + 10 = 120 k€. OPEX annuel = 18 + 8 + 4 = 30 k€. Coût total sur 3 ans = 120 + 90 = 210 k€. L'étude de 15 k€ est irrécupérable : hors BC de décision (elle peut figurer en mention « déjà dépensé », pas dans le total qui justifie le go). Si vous l'ajoutez, vous passez à 225 k€ et vous faussez ROI et comparaison avec « ne pas lancer ».",
    }),

    pack({
      title: "Identifier les bénéfices sans double compte",
      description:
        "Chiffrer l'incrémental, éviter de compter deux fois le même euro, traiter la cannibalisation.",
      minutes: 6,
      objectifs:
        "Vous distinguez chiffre d'affaires incrémental, économie, et bénéfice non monétaire. Vous détectez un double compte. Vous savez traiter une cannibalisation et une attribution trop généreuse.",
      theorie:
        "Un bénéfice de business case est un écart par rapport au sans projet, sur l'horizon, dans le périmètre cadré. Trois familles. Le chiffre d'affaires incrémental (ou la marge incrémentale) : clients ou volumes que l'on n'aurait pas eus sinon. Dans le cas pédagogique, 90 000 € par an pendant trois ans, soit 270 000 € de CA. L'économie : coûts évités (un parcours plus court qui réduit un coût unitaire, un canal moins cher). Le bénéfice non monétaire : image, NPS, apprentissage — utile au comité, dangereux s'il est converti en euros sans méthode.\n\nLe double compte est l'erreur qui rend un BC « beau ». Exemples : compter le CA des nouveaux clients et, en plus, « l'économie de CAC » calculée sur ces mêmes euros déjà pris en CA ; compter la marge et le CA comme s'ils s'additionnaient ; compter une baisse de coût d'acquisition et le budget media évité alors que c'est la même ligne ; attribuer au projet toute la production 25-35 ans y compris celle qui serait venue par le réseau de toute façon. La cannibalisation n'est pas un détail : un jeune qui quitte une offre existante pour la nouvelle n'est pas un gain net égal au CA de la nouvelle offre. On déduit ce que l'on perd ailleurs, ou on travaille en marge incrémentale nette.",
      methode:
        "Pour chaque ligne de bénéfice : nom, unité, source, hypothèse, « que se passe-t-il sans projet ? », « est-ce déjà dans une autre ligne ? ».\n\nOrdre : 1) volumes incrémentaux ; 2) prix / tarif ; 3) marge si finance la demande (le cas pédagogique raisonne en CA et charges, sans prétendre que le CA est du résultat) ; 4) économies distinctes, non déjà dans les charges ; 5) cannibalisation ; 6) hors euros, en annexe.\n\nContrôle anti-double compte : la somme des bénéfices peut-elle se raconter en une phrase sans répéter le même client ? Si non, retirez une ligne. Le CP ne « gonfle » pas pour passer le comité.",
      noteText:
        "Dans le cas 90 000 € / an, le bénéfice monétaire retenu est le CA incrémental. Ne l'additionnez pas à une « valeur de marque » improvisée. 90 000 € n'est pas un bénéfice net : les charges et l'investissement sont de l'autre côté du compte.",
      exemple:
        "Banque Horizon. Première version : CA 90 k€ / an + « économie de 20 % de CAC » + « 50 k€ d'image » + « toute la production jeune du réseau ». Finance recale. L'économie de CAC est déjà dans la comparaison avec le CAC actuel si le 90 k€ est du volume nouveau à un coût d'acquisition plus bas : la mettre en plus double compte. L'image n'a pas de protocole : annexe, pas de ligne. La production réseau qui serait venue sans l'offre sort du 90 k€. Il reste 90 k€ incrémentaux par an — hypothèse pédagogique, pas une prévision de marché.",
      extra: [
        code(`BÉNÉFICES — contrôle anti-double compte
Ligne                         Incremental ?  Déjà ailleurs ?  Garder ?
CA offre 25-35  90 k€/an      oui            non              OUI (cas)
Économie de CAC 20 %          ?              souvent dans     NON si le
                                             le même volume   90 k€ l'inclut
Image / NPS                   non €          —                ANNEXE
Production jeune « comme      non : mix      oui, baseline    NON
aujourd'hui »
Clients cannibalisés          perte ailleurs à déduire        AJUSTER

CAS PÉDAGOGIQUE retenu :
CA incrémental  90 000 € / an × 3 = 270 000 €
Sans addition d'une ligne image ni d'une économie déjà contenue.`),
      ],
      erreurs:
        "Additionner CA et marge. Convertir le NPS en euros au feeling. Oublier la cannibalisation. Attribuer au projet un mouvement de taux ou une campagne nationale. Compter les années 4 et 5 alors que l'horizon annoncé est 3 ans. Présenter 90 k€ comme du résultat net. Promettre des volumes que le commercial n'a pas relus.",
      particuliers:
        "En B2B, le « CA » peut être un pipeline : ne le mettez pas au même rang qu'un CA signé. En e-commerce, l'attribution pub / offre est un champ de bataille : datez la règle avec le digital. En réseau physique, une partie du volume est de la reportabilité d'offres anciennes : finance aide à l'estimer, le CP ne la nie pas. Un bénéfice réglementaire (« on évite une sanction ») n'est pas un CA : on ne l'invente pas en euros.",
      exercice:
        "Un collègue propose d'ajouter au cas Banque Horizon : 90 k€ de CA, plus 18 k€ d'« économie media » (le CAC baisse), plus 30 k€ de « valeur de marque », plus 40 k€ de CA déjà réalisé aujourd'hui sur les 25-35 ans. Horizon 3 ans. Que gardez-vous pour le chiffrage pédagogique du module, et pourquoi ?",
      correction:
        "Vous gardez 90 k€ / an de CA incrémental, soit 270 k€ sur 3 ans. L'économie media de 18 k€ est un double compte probable si le 90 k€ est déjà le fruit d'un CAC plus bas, ou un mélange OPEX / bénéfice : elle ne s'ajoute pas sans démonstration finance. La valeur de marque 30 k€ sort du chiffrage (annexe qualitative). Les 40 k€ déjà réalisés sont le sans projet : les mettre dans le « avec projet » gonfle le BC. Si une part des 90 k€ n'est que du report d'offres existantes, on la retire (cannibalisation). Le cas du parcours reste : 90 / an, pas 90+18+30+40.",
    }),

    pack({
      title: "Mesurer la rentabilité",
      description:
        "Calculer coûts totaux, CA, net, ROI, payback et introduire la VAN sans en faire une vérité unique.",
      minutes: 8,
      objectifs:
        "Vous calculez sans erreur le cas 120 000 / 30 000 / 90 000 / 3 ans. Vous obtenez 210 000 € de coûts, 270 000 € de CA, 60 000 € de net, un ROI d'environ 28,6 % sur les coûts totaux, un payback de 2 ans sur l'investissement initial. Vous écrivez une VAN avec un taux étiqueté hypothèse, sans la présenter comme l'unique vérité.",
      theorie:
        "La rentabilité relie ce que l'on dépense et ce que l'on gagne sur l'horizon, en écart par rapport au sans projet. Coût total = investissement + charges d'exploitation de l'horizon. Ici : 120 000 + 30 000 × 3 = 210 000 €. CA total = 90 000 × 3 = 270 000 €. Net = 270 000 − 210 000 = 60 000 €. Ce net n'est pas une trésorerie réelle d'établissement : c'est le solde pédagogique du cas.\n\nLe ROI retenu dans ce parcours est le net divisé par les coûts totaux : 60 000 / 210 000 ≈ 28,6 %. D'autres définitions existent (net / investissement seul = 50 %) : elles ne sont pas celles du cas. Le délai de récupération (payback) de l'investissement initial est l'investissement divisé par le flux annuel net d'exploitation : 120 000 / (90 000 − 30 000) = 120 000 / 60 000 = 2 ans. On récupère les 120 000 € en deux ans de flux +60 000 €, pas les 210 000 €.\n\nLa VAN actualise les flux. Formule : VAN = somme des CF_t / (1+i)^t. Les flux du cas : année 0 = −120 000 € ; années 1 à 3 = +60 000 € chacun. Le taux i n'est pas « le » taux de la banque : c'est une hypothèse pédagogique. Un seul chiffre de VAN ne tranche pas à lui seul.",
      methode:
        "Calculez dans cet ordre, à la main, avant tout tableur brillant.\n\n1. Coût total. 2. CA total. 3. Net. 4. ROI = net / coût total. 5. Flux annuel d'exploitation = CA annuel − OPEX annuel. 6. Payback de l'investissement = investissement / flux annuel (si le flux est stable). 7. Série de flux. 8. VAN à un taux étiqueté HYPOTHÈSE, puis au moins une autre valeur de taux pour montrer la sensibilité.\n\nPrésentation au comité : les formules d'abord, le taux ensuite, jamais l'inverse. Si finance a un taux interne, vous l'utilisez en le nommant politique interne, pas vérité scientifique.",
      noteText:
        "HYPOTHÈSE PÉDAGOGIQUE DE TAUX : 8 % dans le calcul ci-dessous. Ce n'est pas le coût du capital de Banque Horizon, ni une consigne de place, ni une obligation. À 0 %, 5 %, 12 % ou 15 %, la VAN change. Ne présentez jamais « la VAN = 34 626 € » comme si le projet valait objectivement cette somme.",
      exemple:
        "En comité, un directeur retient 50 % de ROI (60 000 / 120 000) et « un an de payback » (120 000 / 90 000). Le CP recadre. Le ROI du parcours est sur les coûts totaux : 28,6 %. Le payback de l'investissement, flux nets d'OPEX, est 2 ans. Un autre membre exige « la VAN ». Le CP montre la formule, pose 8 % comme hypothèse, obtient environ 34 626 €, puis montre qu'à 15 % l'ordre de grandeur tombe vers 17 000 €. Personne n'a « la » VAN. Le comité discute des hypothèses de volume et de taux, pas d'un totem.",
      extra: [
        h("Cas d'école — calculs exacts"),
        t(
          "Vérifiez chaque ligne. Horizon de trois ans. Montants hors inflation, hors impôts, pédagogiques. Banque Horizon est fictive."
        ),
        code(`CAS BANQUE HORIZON (fictif) — rentabilité
Données
  Investissement initial (année 0)     I  = 120 000 €
  Charges d'exploitation               E  =  30 000 € / an
  Chiffre d'affaires incrémental       R  =  90 000 € / an
  Horizon                              n  =  3 ans

1) Coûts totaux
  I + n × E = 120 000 + 3 × 30 000 = 120 000 + 90 000 = 210 000 €

2) CA total
  n × R = 3 × 90 000 = 270 000 €

3) Net pédagogique
  CA − coûts = 270 000 − 210 000 = 60 000 €

4) ROI sur coûts totaux (définition de CE parcours)
  net / coûts totaux = 60 000 / 210 000 = 6/21 = 2/7 ≈ 28,571 % → 28,6 %
  À ne pas confondre avec 60 000 / 120 000 = 50 % (autre définition, hors cas)

5) Flux annuel d'exploitation
  R − E = 90 000 − 30 000 = 60 000 € / an

6) Payback de l'investissement INITIAL
  I / (R − E) = 120 000 / 60 000 = 2 ans
  (ce n'est pas 210 000 / 60 000 = 3,5 ans, ni 120 000 / 90 000 = 1,33 an)

7) Série de flux de trésorerie pédagogique
  Année 0 :  −120 000 €
  Année 1 :  + 60 000 €
  Année 2 :  + 60 000 €
  Année 3 :  + 60 000 €
  Somme non actualisée des flux = −120 000 + 180 000 = +60 000 €
  (égal au net : cohérence)

8) VAN — HYPOTHÈSE de taux i = 8 % (pédagogique, pas une vérité)
  VAN = Σ CF_t / (1+i)^t
      = −120 000
        + 60 000 / 1,08
        + 60 000 / 1,08²
        + 60 000 / 1,08³
  1,08¹ = 1,08          → 60 000 / 1,08       = 55 555,56 €
  1,08² = 1,1664        → 60 000 / 1,1664     = 51 440,33 €
  1,08³ = 1,259712      → 60 000 / 1,259712   = 47 629,93 €
  Somme actualisée des rentrées                 = 154 625,82 €
  VAN (i = 8 %, HYPOTHÈSE)                      = 34 625,82 €
                                                ≈ 34 626 €

  Sensibilité (même flux, autre i — toujours une hypothèse) :
  i =  0 %  → VAN = 60 000 €   (égal au net)
  i =  5 %  → VAN ≈ 43 395 €
  i =  8 %  → VAN ≈ 34 626 €
  i = 12 %  → VAN ≈ 24 110 €
  i = 15 %  → VAN ≈ 16 994 €
  i = 20 %  → VAN ≈  6 389 €

Une VAN positive à 8 % ne « prouve » pas le go. Une VAN plus faible
à 15 % ne « tue » pas le projet à elle seule. Le taux et les volumes
sont des hypothèses. Le comité les discute. Le CP les rend visibles.`),
      ],
      erreurs:
        "Diviser 60 000 par 120 000 et appeler cela « le » ROI du cas. Oublier les 90 000 € de charges dans le dénominateur. Calculer un payback 120 000 / 90 000 en oubliant l'OPEX. Actualiser aussi l'investissement en année 1 par confusion. Présenter une VAN unique sans dire le taux. Inventer un WACC « de place » à 8 %. Dire au comité que la VAN est plus vraie que le payback : ce sont des lectures différentes, pas une hiérarchie magique.",
      particuliers:
        "Si les flux ne sont pas stables (montée en charge), le payback se calcule en cumul, pas par division. Si l'investissement est étalé sur l'année 1, la série de flux change : on ne force pas le cas d'école. Impôts, fonds de roulement, valeur terminale : hors de ce parcours de 5 heures, à traiter avec finance. Un projet à payback 2 ans et VAN fragile à taux élevé reste un projet risqué si les volumes sont incertains : d'où les scénarios.",
      exercice:
        "Sans relire la correction trop tôt, calculez pour le cas 120 / 30 / 90 / 3 ans : coûts totaux, CA, net, ROI sur coûts totaux (une décimale), payback de l'investissement, flux des années 0 à 3. Puis dites pourquoi une VAN à 8 % ≈ 34 626 € n'est pas « la valeur du projet ».",
      correction:
        "Coûts totaux 210 000 €. CA 270 000 €. Net 60 000 €. ROI 60 000 / 210 000 ≈ 28,6 %. Payback 120 000 / 60 000 = 2 ans. Flux : −120 k€ ; +60 k€ ; +60 k€ ; +60 k€. La VAN à 8 % ≈ 34 626 € est la valeur actualisée de CETTE série de flux à CE taux. Le 8 % est une hypothèse pédagogique. À 0 % la VAN vaut 60 000 € ; à 15 % environ 16 994 €. Donc 34 626 € n'est pas une vérité unique, ni un prix de marché, ni un argument pour contourner conformité ou IT.",
    }),

    pack({
      title: "Construire les scénarios",
      description:
        "Comparer prudent, central, ambitieux et sans projet, plutôt qu'un seul chiffre.",
      minutes: 6,
      objectifs:
        "Vous construisez quatre lectures : sans projet, prudent, central, ambitieux. Vous savez quoi faire varier (volumes, coûts, délai) et comment un comité s'en sert. Vous refusez un BC à scénario unique.",
      theorie:
        "Un business case à une seule colonne est un plaidoyer, pas une aide à la décision. Le comité a besoin de voir ce qui se passe si les volumes déçoivent, s'ils dépassent l'espoir, et si l'on ne fait rien. Quatre scénarios suffisent à ce niveau.\n\nSans projet : on conserve la trajectoire actuelle (baisse des souscriptions, CAC élevé). Ce n'est pas un coût zéro : c'est souvent une érosion. Prudent : volumes inférieurs, ou délai plus long, ou CAC moins bon ; on teste si le projet reste acceptable. Central : le cas de référence — ici 120 / 30 / 90 / 3 ans, net 60 000 €, ROI ≈ 28,6 %, payback 2 ans. Ambitieux : volumes ou tarifs plus favorables, sans science-fiction. On ne « moyenne » pas les trois pour inventer un cinquième chiffre plus confortable. On dit dans quels mondes le go reste défendable. Un projet dont seul l'ambitieux est positif est un pari. Un projet dont le prudent reste cohérent avec le besoin cadré est plus robuste. Les scénarios ne remplacent pas l'avis conformité : un ambitieux non lançable réglementairement n'est pas un scénario, c'est une fiction.",
      methode:
        "Fixez d'abord le central, aligné sur le cadrage et sur finance. Puis variez UNE à DEUX hypothèses à la fois (volume, CAC, date de lancement), pas tout en même temps — sinon on ne sait plus ce qui pèse.\n\nSans projet : quantifiez l'érosion ou écrivez clairement « non chiffré, tendance qualitative », plutôt que 0 € silencieux. Prudent : par exemple CA annuel 60 000 € au lieu de 90 000 €, mêmes coûts. Ambitieux : par exemple 120 000 € de CA annuel, mêmes coûts. Recalculez net, ROI, payback. Présentez un tableau, pas un roman.\n\nContrôle : l'ambitieux ne doit pas reposer sur un hors périmètre (nouveau SI, budget doublé). Si on change le périmètre, ce n'est plus le même projet.",
      noteText:
        "Les variantes 60 / 90 / 120 k€ de CA annuel ci-dessous sont pédagogiques. En réel, marketing et finance proposent les bornes, le CP ne les invente pas pour « faire joli ».",
      exemple:
        "Banque Horizon. Central : net 60 k€, ROI ≈ 28,6 %, payback 2 ans. Prudent : CA 60 k€ / an, OPEX 30 k€, investissement 120 k€ → CA 180 k€, coûts 210 k€, net −30 k€, ROI négatif, payback de l'investissement impossible sur 3 ans (flux d'exploitation 30 k€ / an, 120 / 30 = 4 ans, au-delà de l'horizon). Ambitieux : CA 120 k€ / an → CA 360 k€, coûts 210 k€, net 150 k€, ROI ≈ 71,4 %, payback 120 / 90 = 1,3 an. Sans projet : poursuite de la baisse, CAC élevé, pas d'investissement 120 k€ mais pas de CA incrémental. Le comité voit que le go n'est défendable que si l'on croit au moins au central ; le prudent est un signal d'alerte, pas une surprise à M+8.",
      extra: [
        code(`SCÉNARIOS — même investissement 120 k€, même OPEX 30 k€/an, 3 ans
                  Sans projet   Prudent      Central       Ambitieux
CA annuel         érosion       60 000       90 000        120 000
CA 3 ans          n.d.          180 000      270 000       360 000
Coûts 3 ans       0 projet      210 000      210 000       210 000
Net 3 ans         érosion       −30 000      +60 000       +150 000
ROI coûts totaux  —             négatif      ≈ 28,6 %      ≈ 71,4 %
Flux expl. / an   —             30 000       60 000        90 000
Payback de I      —             4 ans        2 ans         1,33 an

Lecture : le central est le cas d'école. Le prudent casse la
rentabilité sur 3 ans. L'ambitieux n'autorise pas à promettre 71 %.
Le sans projet n'est pas « 0 € = mieux » : c'est l'érosion actuelle.
Montants fictifs, formules exactes.`),
      ],
      erreurs:
        "N'offrir que le central. Faire de l'ambitieux le nouveau central après un « on vise haut ». Varier dix paramètres à la fois. Oublier le sans projet. Mettre dans l'ambitieux un budget ou un SI hors cadrage. Dire que la moyenne des trois scénarios est la prévision. Masquer le prudent parce qu'il fâche le sponsor.",
      particuliers:
        "Si le sans projet est une perte de licence ou un risque majeur, le go n'est plus seulement un ROI : dites-le, sans inventer une amende. En test et learn, le prudent peut être un pilote régional : recadrez alors le périmètre. En B2B à cycle long, trois ans peuvent être courts : l'horizon se discute, il ne s'invente pas le jour du comité pour sauver le payback.",
      exercice:
        "Calculez le net sur 3 ans et le payback de l'investissement si le CA annuel tombe à 60 000 € (prudent), coûts inchangés (120 k€ + 30 k€ / an). Le comité doit-il encore parler uniquement du ROI 28,6 % ?",
      correction:
        "CA 180 000, coûts 210 000, net −30 000 €. Flux d'exploitation 30 000 € / an. Payback de I = 120 000 / 30 000 = 4 ans, au-delà de l'horizon. Non : le 28,6 % n'est que le central. Présenter uniquement ce ROI au comité serait trompeur. Le CP montre le tableau. Le sponsor décide s'il croit au volume 90 k€, s'il réduit les coûts, ou s'il no-go. On ne « sauve » pas le prudent en ajoutant une ligne image.",
    }),

    pack({
      title: "Formuler la recommandation",
      description:
        "Conclure par un go, un no-go ou un go sous conditions, argumenté et honnête.",
      minutes: 5,
      objectifs:
        "Vous rédigez une recommandation de chef de projet : décision proposée, conditions, risques économiques, points hors chiffre. Vous savez ce que vous recommandez et ce que vous ne décidez pas.",
      theorie:
        "La recommandation est la dernière page du BC, pas un slogan de motivation. Trois issues honnêtes. Go : le central est défendable, le prudent n'est pas une catastrophe inacceptable pour le sponsor, les réserves IT / conformité / juridique sont tenables dans le calendrier. No-go : le besoin peut rester vrai, mais ce projet-là, à ces coûts et ces volumes, ne tient pas — ou un préalable bloque (SI, avis habilité). Go sous conditions : on lance si l'on réduit le périmètre, si l'on recale le volume, si l'on obtient tel avis, si l'on pilote tel indicateur d'arrêt.\n\nLe CP recommande. Le sponsor décide. Finance peut émettre un avis. Conformité peut bloquer une communication même si le ROI est de 28,6 %. Une recommandation qui cache le scénario prudent, ou qui promet l'ambitieux, n'est pas professionnelle. Une recommandation qui dit « go » sans rappeler le hors périmètre ramène le projet au malentendu du cadrage. La clarté vaut mieux qu'un faux consensus.",
      methode:
        "Rédigez cinq blocs, une demi-page.\n\n1. Décision proposée (go / no-go / go sous conditions). 2. Pourquoi, en trois chiffres du central plus une lecture prudent. 3. Conditions (périmètre, avis, jalon d'arrêt, responsable du volume). 4. Ce qui reste hors chiffre (IT, conformité, juridique, réseau). 5. Prochaine étape si le sponsor suit.\n\nTon : vouvoiement, faits, hypothèses étiquetées. Pas de « on n'a pas le choix ». Il y a toujours le sans projet, même s'il est douloureux.",
      noteText:
        "Recommander un go sur le cas pédagogique n'est pas une consigne pour un vrai établissement. En réel, un ROI de 28,6 % à taux 8 % hypothétique, avec un prudent négatif, peut être accepté ou refusé selon la stratégie. Votre métier est de rendre l'arbitrage possible.",
      exemple:
        "Recommandation type, Banque Horizon (fictif) : « Go sous conditions. Central : net 60 k€ sur 3 ans, ROI ≈ 28,6 % sur coûts totaux, payback 2 ans de l'investissement. Prudent (CA 60 k€ / an) : net −30 k€ — le volume 90 k€ doit être porté par marketing et réseau, avec revue à M+6. Conditions : hors périmètre SI maintenu ; avis conformité et juridique avant toute publicité ; IT confirme le délai six mois. VAN à 8 % (hypothèse pédagogique) positive, non présentée comme une vérité unique. Décision : sponsor. » Ce texte est discutable. C'est le but.",
      extra: [
        code(`RECOMMANDATION — canevas
Décision proposée : go / no-go / go sous conditions
Central (cas)     : coûts 210 k€ · CA 270 k€ · net 60 k€ · ROI ≈ 28,6 % · payback 2 ans
Prudent           : (chiffre) — conséquence
Conditions        : 1) ...  2) ...  3) jalon d'arrêt ...
Hors chiffre      : IT · conformité · juridique · réseau
VAN               : si citée, taux = HYPOTHÈSE, + une sensibilité
Je ne décide pas  : le go final, la règle ACPR, le budget d'entreprise
Prochaine étape   : ...`),
      ],
      erreurs:
        "Écrire « go » parce que le sponsor est impatient. Cacher le prudent. Promettre l'ambitieux. Oublier les conditions réglementaires. Transformer la reco en plaidoyer personnel. Décider à la place du sponsor. Écrire que la VAN « valide » le projet. Laisser finance découvrir les chiffres en séance.",
      particuliers:
        "Si les avis habilités ne sont pas rentrés, la reco honnête est « pas de go public » même avec un ROI central correct. Si l'IT dit six mois impossibles, la reco devient no-go ou recadrage, pas « on verra en projet ». En TPE, la reco et la décision peuvent être la même personne : l'écrit reste, pour que l'on se souvienne des conditions.",
      exercice:
        "Rédigez en six à huit lignes une recommandation go sous conditions pour Banque Horizon, en citant 210 k€, 28,6 %, 2 ans, le prudent négatif, une condition conformité et le fait que le 8 % de VAN est une hypothèse. Ne validez pas l'ACPR.",
      correction:
        "Proposition : go sous conditions. Sur le central pédagogique, coûts totaux 210 k€, CA 270 k€, net 60 k€, ROI ≈ 28,6 %, payback de l'investissement 2 ans. Le prudent (CA 60 k€ / an) donne un net de −30 k€ : le volume 90 k€ n'est pas acquis, revue à M+6. Conditions : maintenir le hors périmètre SI ; ne diffuser aucune offre avant avis conformité et juridique ; confirmation IT du délai. Une VAN à 8 % (hypothèse pédagogique, pas le coût du capital de la banque) est positive ; elle n'est pas une vérité unique. Le sponsor tranche. Le CP n'écrit pas que l'offre est « conforme ACPR ».",
    }),

    quizLesson({
      title: "Quiz — Business case",
      description:
        "Vérifier définitions, anti-double compte, ROI 28,6 %, payback 2 ans, scénarios et VAN hypothèse.",
      passing_score: 70,
      minutes: 4,
      questions: [
        q({
          question:
            "Quelle distinction est correcte ?",
          options: [
            "A. Le business case est le budget de l'année ; le business plan est la VAN du projet.",
            "B. Le business case éclaire la décision d'investir dans un projet ; le business plan décrit une activité ou l'entreprise ; le budget encadre les dépenses autorisées.",
            "C. En banque, le business plan remplace toujours le business case d'une offre.",
            "D. Le budget contient déjà la rentabilité incrémentale, donc le BC est facultatif.",
          ],
          correct: 1,
          explanation:
            "Le BC juge un projet par rapport au sans projet. Le business plan est plus large. Le budget autorise des dépenses, il ne prouve pas que ce projet est le bon usage de l'argent.",
        }),
        q({
          question:
            "Dans le cas pédagogique (investissement 120 000 €, OPEX 30 000 € / an, CA 90 000 € / an, horizon 3 ans), les coûts totaux, le CA et le net valent :",
          options: [
            "A. 120 000 €, 90 000 €, 30 000 €.",
            "B. 210 000 €, 270 000 €, 60 000 €.",
            "C. 210 000 €, 270 000 €, 150 000 €.",
            "D. 150 000 €, 270 000 €, 120 000 €.",
          ],
          correct: 1,
          explanation:
            "120 000 + 3 × 30 000 = 210 000. 3 × 90 000 = 270 000. Net = 270 000 − 210 000 = 60 000. L'option C oublie de retrancher les coûts. L'option A s'arrête à une année.",
        }),
        q({
          question:
            "Toujours sur ce cas, le ROI retenu (net / coûts totaux) est d'environ :",
          options: [
            "A. 50 %, car 60 000 / 120 000.",
            "B. 75 %, car 90 000 / 120 000.",
            "C. 28,6 %, car 60 000 / 210 000.",
            "D. 33,3 %, car 90 000 / 270 000.",
          ],
          correct: 2,
          explanation:
            "Ce parcours définit le ROI comme 60 000 / 210 000 = 2/7 ≈ 28,6 %. Le 50 % (net / investissement seul) est une autre définition, hors cas. 90 000 n'est pas le net.",
        }),
        q({
          question:
            "Le délai de récupération de l'investissement initial (payback) de ce cas est :",
          options: [
            "A. 1 an, car 120 000 / 120 000.",
            "B. 2 ans, car 120 000 / (90 000 − 30 000) = 120 000 / 60 000.",
            "C. 3 ans, égal à l'horizon.",
            "D. 3,5 ans, car 210 000 / 60 000.",
          ],
          correct: 1,
          explanation:
            "Le payback porte sur l'investissement initial, financé par le flux d'exploitation 60 000 € / an, soit 2 ans. 3,5 ans utiliserait les coûts totaux ; 3 ans confond horizon et récupération.",
        }),
        q({
          question:
            "Compter 90 000 € / an de CA incrémental et, en plus, une « économie de CAC » calculée sur les mêmes clients, sans démonstration, c'est :",
          options: [
            "A. Une bonne pratique de VAN.",
            "B. Un double compte, à retirer tant que finance n'a pas montré que l'économie est distincte.",
            "C. Obligatoire pour obtenir un ROI de 28,6 %.",
            "D. La façon de chiffrer le scénario sans projet.",
          ],
          correct: 1,
          explanation:
            "Le 28,6 % s'obtient sans cette ligne. Additionner CA et économie sur les mêmes euros gonfle le BC. Le sans projet est la trajectoire actuelle, pas une économie de CAC empilée.",
        }),
        q({
          question:
            "Vous calculez une VAN d'environ 34 626 € avec un taux de 8 %. Quelle lecture est correcte ?",
          options: [
            "A. 34 626 € est la valeur objective du projet, le comité n'a plus à discuter.",
            "B. Le 8 % est une hypothèse pédagogique (ou, en réel, un taux interne nommé) ; à un autre taux la VAN change ; ce n'est pas une vérité unique.",
            "C. Si la VAN à 8 % est positive, l'offre est conforme aux attentes ACPR.",
            "D. Il faut afficher uniquement cette VAN et masquer le payback de 2 ans.",
          ],
          correct: 1,
          explanation:
            "La formule de VAN suppose un taux. Ici 8 % est étiqueté hypothèse : à 0 % on retrouve 60 000 €, à 15 % environ 17 000 €. La VAN ne valide ni le réglementaire ni l'unique lecture de rentabilité.",
        }),
      ],
    }),
  ],
};
