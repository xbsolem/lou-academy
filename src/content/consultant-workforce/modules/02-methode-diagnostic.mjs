import { pack, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 2,
  title: "Méthode de diagnostic organisationnel",
  description:
    "Cadrer un diagnostic MECE, collecter sans biaiser (entretiens, ateliers, documents), puis synthétiser process, RACI et irritants — cas Groupe Nova Services.",
  lessons: [
    pack({
      title: "MECE, arbre de problème et cadrage du diagnostic",
      description:
        "Transformer un symptôme (« on a du turnover ») en question, en arbre MECE et en note de cadrage d'une page.",
      minutes: 8,
      objectifs:
        "À la fin de cette leçon, vous distinguez un symptôme, une question de diagnostic et une solution. Vous savez poser un découpage MECE, dessiner un arbre de problème à deux niveaux, et rédiger une note de cadrage d'une page (périmètre, hors périmètre, hypothèses, livrable, délai) sans vous prendre pour le décideur.",
      theorie:
        "MECE (Mutually Exclusive, Collectively Exhaustive) désigne un découpage dont les branches ne se chevauchent pas et qui, ensemble, couvrent la question posée. Ce n'est pas un slogan de cabinet : c'est un outil contre le double compte et le trou. Si vos axes sur le turnover sont « management, salaires, management et climat », vous chevauchez. Si vous oubliez retraites, fins de CDD, mobilité interne et erreur de mesure, vous n'êtes pas exhaustif sur les sorties.\n\nL'arbre de problème (issue tree) part d'une question, jamais d'un moyen. Question utile : « Pourquoi l'agence Ouest de Nova Services peine-t-elle à tenir les effectifs des métiers en tension ? » Question pauvre : « Comment déployer un SIRH ? » La seconde suppose la solution. L'arbre décompose la première en branches exclusives — volume des sorties, difficultés d'entrée, allocation interne, qualité de la donnée — puis en hypothèses testables.\n\nLe cadrage d'un diagnostic junior tient en une page : question, périmètre, hors périmètre, hypothèses, sources, personnes à voir, livrable, délai. Sans cadrage vous collectez tout. Trop étroit, vous ratez la pyramide des âges. À Nova Services (1 200 salariés, fictif), « on a un problème de turnover » n'est pas une question MECE. Votre métier est de transformer le symptôme en arbre, puis de dire ce que vous n'investiguez pas dans le temps imparti.",
      methode:
        "Dès le premier échange avec le sponsor, écrivez dans cet ordre, avant tout recueil massif.\n\n1. Recueillez le symptôme en une phrase, avec un fait si possible (volume, délai, plainte), pas un jugement (« les managers sont nuls »).\n2. Reformulez une question qui commence par pourquoi / dans quelle mesure / où, et qui ne contient pas le moyen.\n3. Posez 3 à 5 branches MECE de premier niveau. Testez : une preuve peut-elle tomber dans deux branches ? Une cause évidente est-elle orpheline ?\n4. Sous chaque branche, 2 à 4 hypothèses testables, chacune liée à une source (fichier, entretien, atelier, document).\n5. Tranchez le hors périmètre par écrit : ce que cette vague ne fera pas (juridique, SIRH, plan social, autre site).\n6. Faites viser la page par le sponsor. Vous ne démarrez pas dix entretiens sur un arbre non partagé.\n\nContrôle : si la question tient dans un verbe d'action (« mettre en place », « digitaliser »), ce n'est pas un cadrage de diagnostic, c'est un avant-projet de solution.",
      noteText:
        "Le consultant junior n'est ni juriste ni DRH. Un cadrage qui touche GEPP, CSE, restructuration ou licenciements s'arrête aux principes et renvoie à Légifrance et à l'avis social de l'entreprise. Vous n'inventez pas un délai légal. Les chiffres de Nova Services dans ce parcours sont pédagogiques et fictifs.",
      exemple:
        "Comité RH de Nova Services. La DRH : « Il nous faut un plan de rétention et un SIRH d'ici six mois, le turnover explose. » Sans cadrage, un junior commande un benchmark, un autre ouvre un questionnaire à 1 200 personnes, un troisième promet un module SIRH. Trois semaines plus tard : 40 slides, zéro message.\n\nLe même brief, tenu. Symptôme : les sorties sur trois métiers en tension de l'agence Ouest préoccupent le COMEX ; le chiffre groupe n'est pas encore fiabilisé. Question : dans quelle mesure les sorties 2025 de ces métiers s'expliquent-elles par des départs évitables, par la pyramide (retraites), par l'entrée trop lente, ou par une donnée mal définie ? Hors périmètre de la vague : choix d'un SIRH, négociation GEPP, plan de réorganisation. Hypothèses à tester : définition du turnover instable ; pyramide âgée sur deux métiers ; délais d'embauche ; irritants de process entre agence et RH siège. Livrable : note de 8 pages + 12 slides, trois semaines, pas un plan de transformation.",
      extra: [
        code(`CADRAGE DIAGNOSTIC — 1 page (Nova Services, fictif)
Sponsor / date : .....................
Symptôme (fait, pas de jugement) :
  ................................................
Question de diagnostic (sans le moyen) :
  ................................................
Branches MECE (3 à 5) :
  1. .............................................
  2. .............................................
  3. .............................................
Hypothèses testables (branche → source) :
  ................................................
Périmètre : population / sites / process / horizon
Hors périmètre de CETTE vague :
  ................................................
Livrable + délai :
  ................................................
Ce que le junior ne tranche pas : avis social, GEPP, licenciements, choix d'éditeur.`),
      ],
      erreurs:
        "Partir de la solution du plus haut hiérarchique (« il nous faut un SIRH ») et appeler cela un diagnostic. Empiler des axes qui se recoupent pour « faire complet ». Oublier l'erreur de mesure comme branche. Cadrer « tout le groupe, tous les process, toutes les années » en trois semaines. Promettre un plan d'action avant d'avoir une question. Inventer un « turnover de marché » pour justifier le cadrage. Traiter un sujet CSE / restructuration comme un exercice Excel.",
      particuliers:
        "En PME, le sponsor est souvent le dirigeant : la question se mélange à la solution ; votre valeur est l'arbre d'une page, pas un dispositif de 40 entretiens. En ETI multi-sites, le hors périmètre (quels établissements) est le vrai combat. En filiale d'un groupe, le siège a parfois déjà un arbre : vous le testez, vous ne le recopiez pas. Si un cabinet a déjà produit un diagnostic il y a 18 mois, vous partez des écarts, pas d'une page blanche.",
      exercice:
        "La directrice d'une BU fictive de Nova Services (220 personnes) vous dit : « On veut une réorganisation et un coaching des managers, le climat est mauvais et les gens partent. » En huit à dix lignes : (1) le symptôme possible, (2) une question de diagnostic sans moyen, (3) trois branches MECE, (4) deux éléments de hors périmètre à faire viser.",
      correction:
        "Symptôme possible : des sorties constatées et/ou un climat dégradé remonté — à vérifier par des faits (volume, métiers, motifs), pas à inventer. Ce n'est pas encore « le management est mauvais ». Question sans moyen : pourquoi les sorties et les irritants se concentrent-ils sur cette BU, et dans quelle mesure tiennent-ils à l'organisation du travail, aux trajectoires, à l'encadrement ou à la mesure ? Pas « comment réorganiser » ni « quel coaching ». Branches MECE possibles : (a) volume et nature des sorties (évitables / structurelles / data) ; (b) organisation du travail et process ; (c) management et conditions d'exercice — à condition de ne pas recouper (a) et (c) sur les mêmes preuves. Autre découpage acceptable : entrée / sortie / allocation interne / qualité de donnée. Hors périmètre à faire viser : coaching individuel nommé, organigramme cible déjà dessiné, plan social, choix d'outil. Vous n'affirmez pas que la réorganisation est la bonne réponse : vous empêchez qu'on la confonde avec le diagnostic.",
    }),

    pack({
      title: "Collecter : entretiens, ateliers, documents",
      description:
        "Recueillir des preuves triangulées sans biaiser l'échantillon ni transformer un verbatim en constat.",
      minutes: 8,
      objectifs:
        "Vous constituez un plan de collecte (entretiens, ateliers, documents, données) aligné sur l'arbre. Vous savez rédiger un guide d'entretien, choisir un échantillon, animer un atelier d'irritants, et trianguler. Vous refusez de conclure sur trois mécontents ou sur un seul fichier.",
      theorie:
        "Un diagnostic Workforce & Organization croise quatre sources : entretiens, ateliers courts, documents (dans le mandat) et données RH. Une seule source crée un angle mort. Les entretiens donnent des mécanismes, pas un taux. Les données donnent un volume, pas un pourquoi. Les documents disent la règle écrite, pas la règle vécue. L'atelier fait émerger des irritants partagés, à condition de ne pas en faire un tribunal.\n\nL'échantillon est déjà une hypothèse. Si vous ne voyez que les personnes que le sponsor vous « offre », vous confirmez son récit. Vague courte chez Nova : DRH, deux managers de proximité, deux opérationnels, une RH de terrain, un contrôleur ou data — et un représentant du personnel seulement si le mandat et l'entreprise le prévoient. Vous ne contournez pas le dialogue social.\n\nLe guide d'entretien suit les hypothèses. On part d'un fait (« racontez un départ récent »), jamais d'une question inductive. Un verbatim n'est pas un constat : il faut deux types de sources, ou une donnée plus un récit convergent. Vous promettez une restitution non nominative, pas un anonymat irréaliste. Le junior n'est pas enquêteur disciplinaire.",
      methode:
        "Avant le premier rendez-vous, produisez une page « plan de collecte ».\n\n1. Pour chaque hypothèse de l'arbre : quelle source, qui, quel document, quel champ de fichier.\n2. Liste d'entretiens (nom, rôle, 45 minutes, hypothèses visées). 8 à 12 entretiens tiennent une vague junior de trois semaines ; 40 entretiens ne tiennent pas.\n3. Un atelier irritants de 90 minutes, 6 à 10 personnes du même niveau hiérarchique (ne mélangez pas N+2 et opérationnels si la parole se taira).\n4. Une demande documentaire bornée : organigramme, procédures des 3 process du périmètre, derniers reportings effectifs, pas « tout le disque RH ».\n5. Règles d'écriture : notes datées, distinction fait / hypothèse / citation. Pas de nom dans les slides.\n6. Triangulation en fin de chaque jour : qu'est-ce qui est confirmé par deux sources ? Qu'est-ce qui reste une piste ?\n\nContrôle : vous n'envoyez pas un questionnaire à 1 200 salariés « pour avoir de la data » sans cadrage, sans finalité, sans regard protection des données. Le junior signale le sujet, il ne rédige pas une analyse d'impact à la place du DPO.",
      noteText:
        "Protection des données et dialogue social : principes et prudence, pas d'invention de délai ou d'obligation. Un fichier nominatif d'entretiens sur une clé personnelle n'est pas un livrable. En cas de doute (enquête, CSE, données de santé), vous escaladez vers le manager de mission et les fonctions habilitées de l'entreprise. Vérifier Légifrance / avis social. Vous n'êtes pas juriste.",
      exemple:
        "Nova Services, agence Ouest. Le sponsor vous donne trois noms : ses deux adjoints et la responsable RH siège, « ils connaissent le sujet ». Le junior accepte, recueille un récit unique : « les jeunes partent pour le salaire ». L'arbre n'est plus testé, il est illustré.\n\nLe même plan, tenu : vous ajoutez un manager d'équipe terrain, deux conseillers, le gestionnaire RH qui saisit les sorties, le contrôleur qui produit le reporting. En entretien, le gestionnaire montre que « turnover » mélange retraites, fins de CDD et démissions. L'atelier irritants fait sortir le délai d'embauche et le double saisie siège / agence, pas seulement la rémunération. Le document « procédure recrutement » date de 2019 et ne décrit pas le réel. La donnée et les récits se recoupent : vous avez un constat, pas une collection de doléances.",
      extra: [
        code(`PLAN DE COLLECTE — vague 3 semaines (Nova, fictif)
Hypothèse              Entretien          Atelier     Document / data
Définition turnover    Gest. RH + CG      —           Fichier sorties, règles de calcul
Pyramide / retraites   Manager métier     —           Âges, métiers, départs 24 mois
Délai d'embauche       Recrutement + mgr  Irritants   Dates besoin → arrivée (si dispo)
Process double saisie  RH terrain         Irritants   Procédure vs réel
Climat / management    2 opérationnels    Irritants   Pas un score inventé

GUIDE 45 MIN (structure)
0. Cadre : mandat, restitution non nominative, hors enquête disciplinaire
1. Rôle et parcours dans l'équipe
2. Fait récent lié à l'hypothèse (un départ, une embauche, un incident de process)
3. Qui fait quoi aujourd'hui (sans demander « le RACI officiel »)
4. Ce qui bloquerait si on ne changeait rien 6 mois
5. Ce que vous ne savez pas / ce qu'il faudrait mesurer
Interdit : question inductive, diagnostic déjà écrit, promesse d'anonymat irréaliste.`),
      ],
      erreurs:
        "N'interviewer que le comité de direction. Transformer l'atelier en vote sur la solution. Copier des verbatim nominatifs dans une slide COMEX. Conclure sur un unique fichier Excel non défini. Envoyer un Google Form à tout le groupe sans finalité. Promettre que « rien ne remontera ». Interroger sur la santé, le syndicat ou la vie privée. Prendre le silence d'un opérationnel en présence de son N+2 pour un accord.",
      particuliers:
        "Site distant : 4 visios bien préparées valent mieux que 12 appels improvisés ; une journée terrain reste utile pour voir le process réel. Population de nuit ou terrain : ateliers courts en début ou fin de poste, pas un créneau siège. Cabinet : le client choisit souvent l'échantillon — vous documentez le biais. S'il existe des instances représentatives, vous ne les « oubliez » pas par commodité : vous demandez au sponsor le cadre, vous n'inventez pas la règle.",
      exercice:
        "On vous demande de « faire 5 entretiens rapides avec les N+1 de l'agence Ouest, ça suffira ». En six lignes : (1) le biais, (2) deux profils à ajouter, (3) une question d'ouverture non inductive, (4) ce que vous écrivez au sponsor si un verbatim accable nommément un manager.",
      correction:
        "Biais : échantillon de seuls encadrants, du même niveau, choisis pour confirmer le récit hiérarchique ; les opérationnels, la RH de saisie et la data absents. Profils à ajouter : au moins un opérationnel du métier en tension, plus la personne qui produit le chiffre de turnover (gestionnaire ou contrôleur). Question d'ouverture : « Pouvez-vous me raconter le dernier départ dans votre équipe, de la première alerte jusqu'au dernier jour ? » — pas « Vous confirmez que c'est un problème de salaire ? ». Verbatim accusateur : vous ne le mettez pas nominativement dans une slide ; vous le reformulez en piste (« plusieurs récits font état d'un goulet d'arbitrage sur les embauches ») et vous le triangulez. Vous le signalez à votre manager de mission si cela sort du diagnostic (harcèlement, alerte). Pourquoi : collecter n'est pas instruire.",
    }),

    pack({
      title: "Diagnostic orga : process, RACI, irritants, synthèse",
      description:
        "Décrire le réel (process, rôles), qualifier les irritants, puis écrire une synthèse actionnable — pas une liste de 40 constats.",
      minutes: 9,
      objectifs:
        "Vous cartographiez un process as-is en étapes et acteurs, vous posez un RACI de diagnostic (pas un organigramme cible), vous distinguez irritant, cause et symptôme, et vous rédigez une synthèse de 5 messages maximum, chacun avec preuve et « so what ».",
      theorie:
        "Le diagnostic d'organisation junior n'est pas un Target Operating Model. Il répond : qui fait quoi aujourd'hui, où le travail se perd, où les rôles se chevauchent ou se vident. Trois objets suffisent.\n\nLe process as-is est la suite d'étapes et d'acteurs telle qu'elle est vécue, pas telle qu'elle est écrite. Chez Nova, « remplacer un départ » traverse manager, agence, RH siège, recrutement, parfois finance. Vous nommez l'activité (valider le remplacement, geler le brief, saisir l'entrée). Ce n'est pas encore un SIPOC — ce niveau vient plus loin dans le parcours.\n\nLe RACI de diagnostic photographie le réel : Responsible (fait), Accountable (un seul, rend des comptes), Consulted, Informed. Deux A ou zéro A sur une décision, c'est un constat. Une case N-1 peut être A de fait. Vous ne redessinez pas encore la cible.\n\nL'irritant (double saisie, délai, rework) n'est pas une cause racine par magie : vous le collez à une étape et à une case RACI. La synthèse n'est pas l'inventaire : cinq messages max, chacun constat + preuve + conséquence + piste. « Fusionner les équipes » trop tôt saute l'étape. « Il y a des irritants » n'aide pas le sponsor.",
      methode:
        "Pour le process prioritaire du cadrage (un seul, pas dix) :\n1. Faites raconter un cas réel de bout en bout (un départ, une embauche) à deux acteurs différents. Notez les divergences : elles sont le diagnostic.\n2. Écrivez 5 à 8 étapes, une ligne chacune : entrée, activité, sortie, acteur. Pas un roman.\n3. Posez le RACI sur 4 à 6 décisions clés (valider le remplacement, choisir le profil, saisir le dossier, communiquer au site). Une seule lettre A par décision.\n4. Recueillez les irritants (atelier + entretiens), max 10, chacun collé à une étape. Classez : délai, qualité, charge, clarté de rôle. Pas un fourre-tout « digital ».\n5. Pyramide de synthèse : 1 message central, 3 à 5 constats, preuves en annexe. Chaque constat répond à une branche de l'arbre. Si un constat ne répond à aucune branche, ou bien l'arbre était faux, ou bien le constat est hors cadrage — dites-le.\n6. Relisez avec la question : que devrait décider le sponsor après ces 12 slides ? Si la réponse est « rien, on a décrit », la synthèse est inachevée.\n\nContrôle : vous n'écrivez pas « conforme au Code du travail » sur un process. Vous notez un point d'attention et vous renvoyez aux habilités.",
      noteText:
        "RACI, process et irritants sont des outils de management, pas des normes légales. Un RACI ne remplace pas une délégation de pouvoir ni un avis social. Données Nova : pédagogiques, fictives. Pas de benchmark « d'irritants moyens du marché ».",
      exemple:
        "Nova Services, process « remplacement d'un conseiller client, agence Ouest ». Cas réel raconté par le manager : 11 semaines entre le départ et l'arrivée, trois allers-retours de fiche de poste avec le siège, une saisie dans un tableur d'agence puis une resaisie RH. Le RACI de diagnostic : le manager se croit Accountable du profil ; la RH siège se croit Accountable du même objet ; le recrutement est Responsible sans pouvoir figer le brief. Irritants : double saisie, validation fantôme, absence de délai cible écrit. Message central de synthèse : le goulet n'est pas « un manque de candidats en général », c'est un process de remplacement sans Accountable unique et sans définition stable du besoin — à relier, plus tard, aux chiffres d'entrée et de turnover (module analytique), pas à un plan SIRH improvisé. Piste : clarifier A et R sur la validation du remplacement, mesurer le délai sur 10 cas. Ce n'est pas encore une réorganisation.",
      extra: [
        code(`PROCESS AS-IS — remplacement conseiller (Nova Ouest, fictif)
Etape              Acteur vécu        Sortie              Irritant typique
1. Alerte départ   Manager            Mail / oral         Pas de déclencheur unique
2. "Fiche"         Manager + RH siège Document instable   3 versions, pas de gel
3. Feu vert        ? (A flou)         Oui / attente       Deux A de fait
4. Sourcing        Recrutement        Shortlist           Brief qui bouge
5. Choix           Manager            Oral                Pas de critère écrit
6. Saisie entrée   Agence puis siège  2 fichiers          Double saisie
7. Arrivée         Agence             J1                  Parcours J1 variable

RACI DIAGNOSTIC (réel, pas cible)     R   A   C   I
Valider le remplacement                   ?       (trou ou double A)
Geler le brief métier                 x           x
Choisir le candidat                   x   ?       x
Saisir le dossier                         x   x
Informer l'équipe                     x           x

SYNTHESE — 5 LIGNES MAX
1. Message central (une phrase) :
2. Constat + preuve 1 :
3. Constat + preuve 2 :
4. Conséquence opérationnelle :
5. Piste (pas une décision) :
Hors synthèse : liste brute des 10 irritants → annexe.`),
      ],
      erreurs:
        "Photographier le process officiel et l'appeler as-is. Mettre deux A sur une ligne « pour ne fâcher personne ». Empiler 40 irritants sans les coller à une étape. Transformer la synthèse en organigramme cible. Inventer un « span of control idéal » ou un benchmark de délai. Écrire que le process est « illégal » sans habilitation. Livrer un diagnostic qui est déjà la solution du sponsor.",
      particuliers:
        "Process très informel (petite équipe) : dessinez quand même les 5 étapes d'un cas réel, le RACI révélera que tout passe par une personne. Process outillé (SIRH) : l'outil n'est pas le process ; notez les contournements (tableur parallèle). Multi-sites : un as-is par site pilote, pas une moyenne imaginaire. Si le sujet glisse vers un projet de réorganisation ou d'instance, vous recadrez : diagnostic de fonctionnement, pas conception sociale — avis à faire instruire ailleurs.",
      exercice:
        "Sur le process « validation d'un remplacement » ci-dessus, le manager et la RH siège se disent tous les deux Accountable. En sept lignes : (1) le constat RACI, (2) l'irritant probable, (3) une preuve à aller chercher, (4) un message de synthèse d'une phrase, (5) une piste qui n'est pas « déployer un SIRH ».",
      correction:
        "Constat : deux Accountable de fait sur la même décision — le RACI réel est cassé (ou plutôt : il n'existe pas). Irritant probable : délais et rework de fiche, chacun attendant l'autre ou défaisant la décision de l'autre. Preuve : 8 à 10 cas de remplacement avec dates (alerte → feu vert → brief gelé → arrivée) et, en entretien, qui a dit « oui » en dernier. Message : « Le délai de remplacement sur le métier X n'est pas d'abord un problème d'outil : la décision de remplacer n'a pas d'Accountable unique. » Piste : désigner un A, écrire un délai cible interne, mesurer 10 cas — pas un déploiement SIRH. Pourquoi : l'outil analogique d'un process sans A produit les mêmes allers-retours. Si votre copie a prescrit une réorganisation ou un coaching, elle a sauté la synthèse.",
    }),

    quizLesson({
      title: "Quiz — Méthode de diagnostic",
      description:
        "Vérifier cadrage MECE, collecte non biaisée, RACI de diagnostic et synthèse actionnable.",
      passing_score: 70,
      minutes: 5,
      questions: [
        q({
          question:
            "Un sponsor déclare : « Il nous faut un SIRH pour faire baisser le turnover. » En cadrage de diagnostic, cette phrase est d'abord :",
          options: [
            "A. Une question MECE, parce qu'elle nomme un indicateur et un moyen.",
            "B. Un hors périmètre, car le SIRH est un outil.",
            "C. Une solution proposée (un moyen), pas encore une question de diagnostic.",
            "D. Un arbre de problème complet, à condition d'ajouter le climat.",
          ],
          correct: 2,
          explanation:
            "Le SIRH est un moyen. La question serait du type : pourquoi les sorties / où se situe l'écart. Ajouter « le climat » ne crée pas un arbre. Le hors périmètre se décide à l'écrit, il ne se déduit pas du mot outil.",
        }),
        q({
          question:
            "Parmi ces découpages sur « pourquoi les sorties augmentent », lequel est le plus MECE pour une vague courte ?",
          options: [
            "A. Management, salaires, management et climat social.",
            "B. Volume et nature des sorties (y compris qualité de la donnée), difficultés d'entrée, allocation interne.",
            "C. SIRH, coaching, réorganisation.",
            "D. Ce que le COMEX pense, ce que les syndicats pensent, ce que LinkedIn dit du marché.",
          ],
          correct: 1,
          explanation:
            "B sépare des mécanismes testables sans trop se recouvrir. A chevauche. C est une liste de solutions. D est une liste d'opinions, pas un arbre. On n'invoque pas un benchmark marché inventé.",
        }),
        q({
          question:
            "Le sponsor vous « offre » trois adjoints pour tous les entretiens. Quel est le risque principal ?",
          options: [
            "A. Aucun : le commanditaire connaît les bons interlocuteurs.",
            "B. Un échantillon biaisé qui illustre le récit du siège au lieu de tester l'arbre.",
            "C. Un manquement automatique au Code du travail, car 3 entretiens sont insuffisants.",
            "D. Un atelier devient obligatoire à la place des entretiens.",
          ],
          correct: 1,
          explanation:
            "Le biais d'échantillon est le risque. Aucun article n'impose un nombre magique d'entretiens. L'atelier ne remplace pas les entretiens ; il complète. Le junior documente le biais et propose d'autres profils.",
        }),
        q({
          question:
            "Sur une décision « valider le remplacement », le manager et la RH siège se disent tous deux Accountable. En RACI de diagnostic, vous :",
          options: [
            "A. Laissez deux A « pour ne fâcher personne », c'est du réel.",
            "B. Constatez un RACI cassé (deux A ou A flou) et cherchez les preuves de délai / rework.",
            "C. Fusionnez immédiatement les équipes pour n'avoir qu'un A.",
            "D. Écrivez que le process est illégal tant qu'il n'y a pas un unique A.",
          ],
          correct: 1,
          explanation:
            "Le diagnostic photographie le double A comme un constat, puis le relie à des preuves. Il ne redessine pas l'organisation (C) et n'invente pas une illégalité (D). Deux A « assumés pour la paix » ne sont pas un RACI lisible.",
        }),
        q({
          question:
            "Quelle synthèse est recevable en fin de vague junior ?",
          options: [
            "A. La liste brute des 40 irritants, pour être exhaustif.",
            "B. « Il faut déployer le SIRH au T2 », puisque le sponsor le demandait.",
            "C. Un message central + quelques constats prouvés, une conséquence opérationnelle et une piste — pas une décision déguisée.",
            "D. Un Target Operating Model complet, sinon ce n'est pas du conseil.",
          ],
          correct: 2,
          explanation:
            "La synthèse est une pyramide courte, sourcée, qui permet au sponsor de décider plus tard. L'inventaire n'est pas un message. Recopier la solution du sponsor n'est pas un diagnostic. Le TOM n'est pas le livrable de cette méthode courte.",
        }),
      ],
    }),
  ],
};
