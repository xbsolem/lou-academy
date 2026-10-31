import { pack, quizLesson, q, h, t, note, code, lesson } from "../lib.mjs";

export default {
  position: 20,
  title: "Logiciels de paie et SIRH : lire le marché sans confondre les outils",
  description:
    "Situer Sage Paie, Silae, Cegid, ADP, SAP SuccessFactors, Workday, PayFit et Nibelis : positionnement public, utilisateurs types, domaines fonctionnels, compétences transférables et limites. Distinguer moteur de paie, SIRH et outil intégré PME. Aucune certification éditeur.",
  lessons: [
    pack({
      title: "Moteur de paie, SIRH, outil intégré : trois objets différents",
      description:
        "Avant toute marque, classer ce que l'outil calcule, ce qu'il stocke, et ce qu'il ne fait pas.",
      minutes: 22,
      objectifs:
        "À la fin de cette leçon, vous distinguez un moteur de paie, un SIRH (HRIS) et une solution intégrée de TPE/PME. Vous savez nommer les domaines fonctionnels communs (données salariés, variables, calcul, contrôles, éditions, DSN, reporting, intégrations) sans décrire un écran propriétaire. Vous savez pourquoi le simulateur pédagogique de ce parcours n'est pas un logiciel du marché.",
      theorie:
        "Le marché français de la paie et des ressources humaines mélange trois objets que les offres d'emploi, les commerciaux et parfois les managers confondent. Si vous les mélangez, vous croirez « maîtriser un logiciel » alors que vous n'avez vu qu'un portail d'absences, ou l'inverse : vous penserez qu'un SIRH calcule les cotisations.\n\nUn moteur de paie calcule. Il transforme un dossier (contrat, temps, variables, paramètres sociaux, rubriques) en bulletin, en cotisations, en net à payer, en bases DSN, souvent en écritures. Sans moteur, il n'y a pas de paie au sens technique. Le moteur n'est pas magique : il applique un paramétrage. Un paramétrage faux produit un bulletin élégant et faux.\n\nUn SIRH (système d'information RH, HRIS en anglais) gère principalement le core RH : identité, contrat, organisation, temps et absences, parfois recrutement, formation, entretiens, workflows managers. Il alimente la paie. Il n'est pas, à lui seul, la garantie d'un net exact. Beaucoup de grands groupes ont un SIRH international et un moteur de paie France distinct, reliés par interfaces.\n\nUne solution intégrée TPE/PME réunit dans le même produit une administration du personnel simplifiée et un calcul de paie. L'avantage est la cohérence et la simplicité. La limite est souvent la profondeur : multi-établissements complexes, CCN atypiques, populations spécifiques, industrialisation CSP. Ce n'est ni « moins professionnel » ni « le même outil qu'un moteur de grand groupe ».\n\nLes domaines fonctionnels à regarder, quelle que soit la marque, sont toujours les mêmes. Données salariés : identité, contrat, SIRET, convention, organismes. Variables du mois : absences, heures, primes. Calcul : rubriques, assiettes, plafonds, PAS. Contrôles : listes d'écarts, plafonds, nets aberrants. Éditions : bulletins, journaux, virements. DSN : préparation, contrôles, dépôt, CRM. Reporting : masses, effectifs, écarts. Intégrations : comptabilité, banque, badgeage, notes de frais, SIRH amont.\n\nAucune obligation légale n'impose un éditeur. L'obligation est d'établir un bulletin conforme, de payer, de déclarer (DSN), de conserver. Le choix d'outil est une politique interne et un contrat de prestation. Une bonne pratique n'est pas une certification.\n\nCe parcours n'enseigne pas les boutons d'un logiciel nommé. Il enseigne le cycle et les contrôles. Le simulateur pédagogique LOU (moteur générique du cours, dossiers fictifs) n'est pas Sage, ni Silae, ni Cegid, ni ADP, ni SAP, ni Workday, ni PayFit, ni Nibelis. Il ne délivre aucune certification éditeur. Il sert à raisonner un brut, un net, une DSN pédagogique. En entreprise, vous apprendrez l'outil du dossier, sous revue, sans prétendre « maîtriser » une marque après cette leçon.",
      methode:
        "Lorsque l'on vous parle d'un outil, posez six questions, dans cet ordre, sans ouvrir un manuel marketing :\n1. Calcule-t-il réellement la paie France (bulletins, cotisations, DSN) ou stocke-t-il surtout les données RH ?\n2. Qui est l'utilisateur type annoncé par l'éditeur (TPE, cabinet, ETI, grand groupe, BPO) ?\n3. Où se saisissent les variables (managers, portail, Excel, badgeage) ?\n4. Qui paramètre (interne, éditeur, expert-comptable, CSP) ?\n5. Quelles interfaces existent vers la comptabilité et la banque ?\n6. Qui dépose la DSN, et dans quel outil ?\nSi la réponse n'est pas publique ou pas écrite dans votre dossier, vous écrivez « non vérifié » : vous n'inventez pas un workflow d'écran.",
      noteText:
        "Limite : un junior ne dit jamais en entretien « je suis certifié Sage / Silae / Cegid ». Cette formation ne l'est pas. Un stage ou une prise de poste sur un outil, documentée, vaut plus qu'un nom de marque recité. Ne décrivez jamais un bouton, un menu ou un assistant que vous n'avez pas vus dans un environnement réel.",
      exemple:
        "Chez Atelier Nord Paie (28 salariés, fictif), le dirigeant a entendu « il faut un SIRH ». Le besoin réel est : absences fiables, bulletins, DSN, virement, journal pour l'expert-comptable. Un SIRH international sans moteur France ne clôture pas janvier. Un moteur de paie avec un tableur d'absences bien tenu peut suffire à cette taille. Le mot SIRH a précédé le diagnostic. Le gestionnaire junior qui participe au choix pose les domaines fonctionnels, pas une préférence de logo.",
      extra: [
        code(`CARTE FONCTIONNELLE — à remplir pour n'importe quel outil du dossier
(ne pas inventer un écran ; cocher seulement ce qui est écrit / montré en formation interne)

Nom commercial : .........................  Éditeur : ....................
Type dominant :  [ ] moteur de paie  [ ] SIRH / HRIS  [ ] intégré TPE-PME  [ ] BPO / infogérance
  [ ] mixte (préciser) : .................................................

Données salariés     : [ ] oui [ ] partiel [ ] ailleurs (quel système ?)
Variables du mois    : [ ] oui [ ] portail manager [ ] import [ ] hors outil
Calcul paie France   : [ ] oui moteur [ ] non (paie dans un autre outil)
Contrôles / listes   : [ ] oui [ ] Excel à côté [ ] non vu
Éditions bulletins   : [ ] oui [ ] prestataire
DSN                  : [ ] préparation [ ] dépôt [ ] CRM [ ] prestataire
Reporting            : [ ] masses [ ] effectifs [ ] autre
Intégrations         : compta ....  banque ....  badgeage ....  notes de frais ....

Qui paramètre : ..........  Qui valide la clôture : ..........
Source de cette carte : formation interne / contrat / observation — pas un souvenir marketing.`),
      ],
      erreurs:
        "Appeler « SIRH » tout logiciel qui a un portail salarié. Dire « je maîtrise Workday » après avoir posé des congés dans un self-service. Croire que la DSN est une fonction exclusive d'un éditeur. Comparer les prix publics sans cahier des charges. Recopier un tutoriel YouTube qui nomme des boutons d'une version ancienne.",
      particuliers:
        "En cabinet, l'outil du collaborateur n'est pas toujours l'outil du client : vous produisez parfois dans un moteur multi-dossiers, le client voit un portail. En CSP, vous n'êtes pas administrateur : vous exécutez un process. En grand groupe, vous pouvez ne jamais ouvrir le moteur si vous êtes sur le SIRH amont. Multi-outils : la vérité de paie est le moteur qui calcule et déclare, pas le plus joli écran.",
      exercice:
        "Classez chaque phrase : moteur de paie / SIRH / intégré PME / indéterminable sans précision.\nA. « On y gère l'organigramme, les entretiens et les demandes de CP ; la paie est calculée ailleurs. »\nB. « On y calcule les bulletins, on prépare la DSN, les absences arrivent par import. »\nC. « Les managers saisissent les variables et les salariés téléchargent le bulletin dans le même produit, TPE 18 personnes. »\nD. « On a SuccessFactors. »",
      correction:
        "A. SIRH (core RH / absences), paie ailleurs : ce n'est pas un moteur.\nB. Moteur de paie, alimenté ; le SIRH peut être absent ou léger.\nC. Solution intégrée TPE/PME : même produit, cycle complet simplifié. On ne conclut pas que c'est « le même » qu'un moteur de 5 000 bulletins.\nD. Indéterminable : SAP SuccessFactors est positionné publiquement comme suite HCM / SIRH ; la paie France peut être une paie associée (offre SAP ou tiers). Sans précision, vous ne dites pas « on calcule la paie dans SuccessFactors ».",
    }),
    pack({
      title: "Sage Paie : positionnement public et ce qu'un junior en retient",
      description:
        "Situer l'écosystème Sage côté paie française, sans inventer un menu ni une version.",
      minutes: 20,
      objectifs:
        "Vous situez Sage comme un éditeur historique de gestion et de paie pour un public souvent PME et cabinets, vous nommez les domaines fonctionnels attendus d'une offre « paie », et vous savez ce que vous ne pouvez pas affirmer sans documentation de l'éditeur ou formation interne.",
      theorie:
        "Sage est un éditeur de logiciels de gestion, présent de longue date sur le marché français de la comptabilité, de la gestion commerciale et de la paie. Le nom « Sage Paie » désigne, dans le langage des offres d'emploi et des cabinets, une famille d'offres de paie de cet éditeur, historiquement très présentes en PME et chez les experts-comptables, souvent à proximité d'un dossier comptable Sage. Ce cours n'identifie pas une version commerciale précise (libellés, packs cloud ou on-premise évoluent). Il ne décrit aucun écran. Il retient le positionnement public stable : un outil de production de paie dans un écosystème de gestion d'entreprise, plutôt qu'un SIRH mondial de grand groupe.\n\nUtilisateurs types, tels que le marché les décrit : PME, ETI de taille moyenne, cabinets d'expertise comptable et prestataires qui tiennent plusieurs dossiers, services paie internes d'une ou quelques dizaines à quelques centaines de salariés. Ce n'est pas une statistique mesurée par ce cours ; c'est le positionnement courant. Un grand groupe peut aussi avoir Sage sur un périmètre : vous le vérifiez dans le dossier, vous ne le généralisez pas.\n\nDomaines fonctionnels attendus d'une offre de paie « complète » au sens métier, pas au sens d'un catalogue marketing inventé : données salariés et contrats ; saisie ou import des variables ; calcul des rubriques et des cotisations ; contrôles et listes ; éditions de bulletins et journaux ; DSN ; reporting de masses ; liaisons vers la comptabilité Sage ou vers un export, et vers le virement. Si un détail d'interface, de module RH, de self-service ou de marketplace n'est pas dans une source éditeur à jour ou dans votre formation interne, vous écrivez qu'il n'est pas établi ici.\n\nCompétences transférables : lire un dossier établissement (SIRET, convention, organismes) ; distinguer une rubrique d'une variable ; contrôler un brut et un net après calcul ; préparer une DSN sous revue ; exporter un journal. Ces gestes existent dans tout moteur. Ils ne font pas de vous un « certifié Sage ».\n\nLimites : Sage n'est pas « la paie française » à lui seul. La profondeur RH (recrutement, talents, workflows internationaux) n'est pas le cœur historique d'une offre paie PME. Les libellés commerciaux changent : une offre d'emploi « Sage » peut viser une version que vous n'avez jamais vue. Un junior ne promet pas une autonomie de paramétrage. Il ne transfere pas un réflexe d'écran d'une version à l'autre. Le droit (bulletin, DSN, cotisations) est le même ; le clic ne l'est pas.",
      methode:
        "En prise de poste « environnement Sage » :\n1. Faire nommer le produit exact et la version par le responsable, par écrit.\n2. Distinguer : qui saisit les variables, qui calcule, qui dépose la DSN, qui parle à l'expert-comptable.\n3. Demander le paramétrage documenté (organismes, profils, rubriques sensibles), pas un tour de menus.\n4. Reproduire un bulletin déjà validé du mois précédent avant d'en produire un nouveau.\n5. Noter ce qui se fait dans Sage et ce qui se fait dans Excel / GED / messagerie.",
      noteText:
        "Ce cours n'est pas un manuel Sage. Aucun bouton, aucun assistant, aucun raccourci clavier n'est enseigné. Toute capture d'écran propriétaire serait une invention ou une reproduction interdite ici.",
      exemple:
        "Un cabinet de 12 collaborateurs produit 80 dossiers PME dans un moteur Sage du cabinet. Léa, junior, reçoit le dossier « menuiserie 22 salariés ». Les absences arrivent par mail. Léa n'apprend pas « Sage » : elle apprend un cycle (collecte, saisie, calcul, contrôle, envoi client). Le jour où le cabinet change d'offre cloud, ses contrôles restent ; ses clics changent. C'est exactement la compétence visée.",
      erreurs:
        "Mettre « maîtrise Sage Paie » sur un CV après cette leçon. Confondre Sage comptabilité et Sage paie. Croire que la liaison comptable rend le journal infaillible. Paramétrer un taux « comme sur le dossier voisin ».",
      particuliers:
        "Multi-dossiers cabinet : chaque SIRET a ses organismes, son effectif, parfois sa CCN. L'outil multi-dossiers n'autorise pas le copier-coller de paramétrage. Cessation ou reprise d'un dossier : vous suivez la procédure interne, vous n'exportez pas des DSN « pour voir ». Si le client a aussi un petit SIRH, la vérité de calcul reste le moteur de paie.",
      exercice:
        "Une offre d'emploi : « Gestionnaire paie junior — Sage — 40 salariés — DSN ». Listez (1) ce que vous pouvez honnêtement dire en entretien ; (2) trois questions à poser sur l'outil ; (3) une phrase interdite.",
      correction:
        "1. Vous pouvez dire : vous connaissez le cycle de paie, les contrôles, la DSN comme obligation, la distinction moteur / SIRH ; vous n'avez pas d'expérience de production sur Sage, vous apprendrez l'outil du poste.\n2. Questions : version exacte ; qui paramètre ; les variables viennent-elles d'un portail, d'Excel, du badgeage ; qui dépose la DSN ; y a-t-il une liaison comptable Sage.\n3. Interdit : « Je suis certifié Sage » ou « Je connais tous les menus Sage Paie ». Pourquoi : faux, et vérifiable en cinq minutes sur un environnement réel.",
    }),
    pack({
      title: "Silae : moteur cloud, cabinets et production de masse",
      description:
        "Situer Silae par son positionnement public, sans workflow d'écran.",
      minutes: 20,
      objectifs:
        "Vous situez Silae comme un moteur de paie cloud très présent dans les cabinets et la production externalisée, vous en déduisez le mode de travail d'un junior, et vous séparez la marque Silae des autres offres du même groupe lorsque c'est pertinent.",
      theorie:
        "Silae est connu sur le marché français comme un logiciel de paie en mode cloud, largement utilisé par les cabinets d'expertise comptable, les externalisateurs et des services paie d'entreprises. Le positionnement public historique est celui d'un moteur de production : dossiers salariés, calcul, bulletins, DSN, travail collaboratif avec le client (portail, dépose de variables), plutôt que celui d'un SIRH mondial de talents. Ce cours ne décrit pas l'interface. Il ne date pas une roadmap. Il retient ce que le marché et l'éditeur communiquent de façon stable : paie française industrialisable, accès web, logique multi-dossiers.\n\nSilae a rejoint le groupe Cegid (opération publique d'acquisition). Pour un junior, cela a une conséquence de langage, pas de magie technique : « Cegid » et « Silae » peuvent coexister dans un même groupe, avec des produits distincts. En production, vous utilisez l'outil nommé dans le contrat du dossier, pas « le groupe ». Vous ne fusionnez pas les paramétrages. Vous ne prétendez pas connaître Cegid HR parce que vous avez vu Silae, ni l'inverse.\n\nUtilisateurs types (positionnement de marché, pas un recensement de ce cours) : collaborateurs paie en cabinet ; CSP et éditeurs de services ; entreprises qui ont choisi un moteur cloud plutôt qu'un intégré TPE. Le volume par gestionnaire peut être élevé : la compétence première n'est pas « cliquer vite », c'est tenir une checklist, un gel des variables, un contrôle d'écarts.\n\nDomaines fonctionnels attendus au sens métier : données salariés ; variables (souvent via un espace client / import, sans que nous n'en nommions les boutons) ; calcul ; contrôles ; éditions ; DSN ; reporting de production ; intégrations selon le dossier (compta, banque). Le détail d'un connecteur particulier n'est pas inventé ici : s'il n'est pas documenté dans votre environnement, il est « non établi ».\n\nCompétences transférables : portefeuille multi-dossiers, relance client, lecture d'un CRM DSN, discipline de gel, distinction entre anomalie de saisie et anomalie de paramétrage. Limites : Silae n'est pas un diplôme. Le cloud ne dispense pas de comprendre un bulletin. Un portail client mal renseigné produit une paie fausse plus vite, pas mieux. Un junior en cabinet n'est pas administrateur de l'offre : il n'active pas un organisme « pour dépanner » sans revue.",
      methode:
        "Premier mois sur un moteur cloud multi-dossiers :\n1. Cartographier les dossiers (SIRET, CCN, qui est l'interlocuteur client, calendrier de chaque dossier — ils ne sont pas identiques).\n2. Identifier le canal des variables (fichier, portail, mail) et l'heure de gel écrite.\n3. Distinguer les droits : saisie, calcul, dépôt DSN, paramétrage.\n4. Traiter les rejets et CRM avec le responsable, jamais « en bricolant un bloc ».\n5. Tenir un journal : dossier, fait, pièce, décision.",
      noteText:
        "Ne décrivez aucun menu Silae. Ne dites pas que cette formation « équivaut à une formation Silae ». Cegid et Silae : même groupe possible, produits à nommer séparément dans un CV et dans un dossier.",
      exemple:
        "Théo, collaborateur junior, a 8 dossiers Silae de 8 à 40 salariés. Le lundi, un client dépose les HS après gel. Théo ne « force » pas une clôture. Il applique la règle du cabinet : report ou exception validée par le responsable de dossier. L'outil cloud rend le dépôt visible ; il ne décide pas. C'est le même geste que dans n'importe quel moteur.",
      erreurs:
        "Traiter tous les dossiers clients avec le paramétrage mental du plus gros. Confondre l'espace client (variables) et le moteur (calcul). Dire « c'est Silae qui a mis ce taux ». Oublier qu'une acquisition de groupe ne change pas le bulletin du mois en cours.",
      particuliers:
        "Client qui a aussi PayFit ou un tableur pour « avancer » : une seule vérité de déclaration. Reprise d'un dossier récemment migré : contrôler les cumuls, les plafonds, les contrats, pas seulement le premier bulletin « qui a l'air bon ». Si l'offre d'emploi dit « Cegid/Silae », demandez lequel est l'outil de production.",
      exercice:
        "Un client écrit : « Sur Silae, enlevez la mutuelle de Paul, il a un papier. » Que faites-vous, en trois étapes, sans ouvrir un écran inventé ?",
      correction:
        "1. Qualifier le fait : résiliation, dispense, erreur de paramétrage, ou simple demande orale ? Exiger la pièce et le motif (dispense légale, autre couverture, sortie).\n2. Vérifier qui a le droit de modifier le contrat collectif / la population : ce n'est en général pas le junior seul.\n3. Si pièce et validation : appliquer selon procédure, contrôler le bulletin d'essai (part salariale, patronale, MNS selon cadre BOSS), tracer. L'outil est le support, pas la décision. Vous n'invoquez pas un bouton « supprimer mutuelle ».",
    }),
    pack({
      title: "Cegid : écosystème RH et paie, sans fusionner les produits",
      description:
        "Lire Cegid comme un éditeur à plusieurs offres, pas comme un seul logiciel.",
      minutes: 18,
      objectifs:
        "Vous situez Cegid comme un éditeur français d'ERP, de RH et de paie s'adressant notamment aux ETI et à des verticales, vous refusez de fusionner toutes les marques du groupe en une compétence unique, et vous savez quelles questions poser en prise de poste.",
      theorie:
        "Cegid est un éditeur français de logiciels de gestion, présent sur la comptabilité, l'ERP, des verticales sectorielles, et les ressources humaines. Le marché parle de « Cegid Paie », « Cegid HR », d'offres issues d'historiques différents (dont des rapprochements d'entreprises : Silae, et d'autres briques RH selon les périodes). Ce cours n'établit pas la liste exhaustive des noms commerciaux à une date donnée : les catalogues changent. Il établit une méthode : un groupe éditeur n'est pas un logiciel. Votre CV et votre dossier doivent nommer le produit de production.\n\nPositionnement public courant : ETI, parfois grands comptes sur certains modules, cabinets et partenaires, secteurs où Cegid est historiquement fort (commerce, expert-comptable, etc. selon offres). Ce n'est pas une preuve que « toutes les ETI sont sur Cegid ». C'est un positionnement, pas un recensement.\n\nUtilisateurs types d'une offre paie Cegid, au sens marché : service paie interne d'une ETI ; CSP ; parfois un mix SIRH + paie dans le même écosystème. Utilisateurs d'une offre SIRH Cegid : RH, managers, salariés en self-service, recrutement ou talents selon modules souscrits. Un junior « Cegid HR » peut ne jamais calculer un bulletin. Un junior « Cegid paie » peut ne jamais ouvrir un module d'entretien annuel. Les deux intitulés circulent dans les offres : lisez-les.\n\nDomaines fonctionnels : selon le produit souscrit, vous pouvez trouver core RH, temps, paie, DSN, reporting, intégrations ERP Cegid. Sans contrat ni formation interne, vous ne dressez pas la liste des modules « forcément inclus ». Vous demandez le périmètre.\n\nCompétences transférables : même cycle, mêmes contrôles, même DSN. En plus, en ETI : workflows, habilitations, parfois multi-établissements. Limites : appeler « Cegid » un stage Silae sans le dire. Inventer que Cegid « remplace l'URSSAF ». Croire qu'un ERP métier calcule tout seul une CCN non paramétrée. Aucune certification Cegid n'est délivrée par LOU Academy.",
      methode:
        "En entretien ou à J+1 : « Quel produit exact calcule la paie ? Quel produit porte les absences ? Y a-t-il un ERP Cegid à côté, et qui interface ? » Notez les trois réponses. Si une seule personne « fait Cegid », demandez si elle paramètre, produit, ou administre les habilitations : ce sont trois métiers.",
      exemple:
        "Une ETI retail de 400 personnes annonce « on est Cegid ». Le SIRH gère les contrats et les absences caisse ; la paie est un module distinct ; la DSN part du moteur de paie. Le junior posé uniquement sur les plannings ne « connaît pas Cegid paie ». Son manager RH croit le contraire. La carte fonctionnelle de la leçon 1 évite ce malentendu.",
      erreurs:
        "Fusionner Cegid, Silae et un ancien nom commercial sur le CV. Paramétrer une rubrique « comme le magasin d'à côté ». Laisser un manager RH corriger un net dans le SIRH en croyant que cela alimente la paie sans interface.",
      particuliers:
        "Migration intra-groupe (changement d'offre) : projet, pas une saisie junior. Vertical métier (caisse, planning boutique) : la donnée d'heures peut être plus riche et plus sale ; le contrôle d'import précède le calcul. International : Cegid France ne rend pas un bulletin étranger « automatique ».",
      exercice:
        "Reformulez ces trois phrases de CV pour les rendre honnêtes, ou dites « à supprimer ».\n1. « Maîtrise Cegid (toutes suites). »\n2. « Production de paie sur moteur Cegid du dossier, 90 bulletins, sous revue, DSN préparée. »\n3. « Certifié Cegid via LOU Academy. »",
      correction:
        "1. À supprimer ou à réduire au produit réellement utilisé, avec le volume et le rôle (saisie / contrôle / paramétrage).\n2. Acceptable : produit, volume, revue, geste DSN sans prétendre au dépôt si ce n'était pas le cas — ajustez le dépôt si vous ne faisiez que préparer.\n3. À supprimer : cette formation ne certifie pas Cegid.",
    }),
    pack({
      title: "ADP : paie, HCM et infogérance, un même nom, plusieurs métiers",
      description:
        "Situer ADP comme acteur mondial de la paie et des services, sans coller un écran unique.",
      minutes: 20,
      objectifs:
        "Vous distinguez, derrière le nom ADP, un logiciel de paie, une suite HCM et un service d'infogérance (BPO). Vous savez ce qu'un junior fait dans chaque montage, et ce qu'il ne promet pas.",
      theorie:
        "ADP (Automatic Data Processing) est un acteur mondial de la paie, des ressources humaines et des services associés. En France, le nom ADP apparaît dans des offres d'emploi très différentes : gestionnaire de paie « sur ADP », consultant, gestionnaire en centre de services ADP, correspondant paie interne dont le calcul est délégué. Le positionnement public de l'entreprise est celui d'un spécialiste de la paie et du HCM, y compris en infogérance. Ce cours n'établit pas le catalogue actuel des produits France (noms de plates-formes, packs, marques locales évoluent). Il établit les montages.\n\nPremier montage : l'entreprise calcule dans un logiciel ADP, avec un service paie interne. Le junior saisit, contrôle, prépare. Le moteur est chez l'employeur, l'éditeur fournit le logiciel et le support.\n\nDeuxième montage : infogérance / BPO. ADP (ou un prestataire de même type) produit tout ou partie de la paie. Le junior côté client prépare les variables, contrôle les retours, répond aux salariés, ne paramètre pas le moteur. Le junior côté prestataire produit un portefeuille industrialisé, avec SLA et checklists. Les deux postes s'appellent parfois « paie ADP ». Ils ne sont pas le même métier.\n\nTroisième montage : suite HCM (core RH, temps, parfois recrutement) plus paie. Comme chez d'autres grands, le SIRH n'est pas forcément le lieu du calcul France.\n\nUtilisateurs types (positionnement) : ETI et grands groupes, organisations multi-établissements, parfois international ; aussi des PME via des offres packagées — sans que ce cours n'en fixe les seuils. Domaines fonctionnels métier : données salariés, variables, calcul, contrôles, éditions, DSN, reporting, intégrations (compta, banque, temps). Le détail d'un module « facultatif » n'est pas inventé.\n\nCompétences transférables : discipline de fichier d'entrée, contrôles de masses, travail sous SLA, distinction client / prestataire, lecture d'un écart sans accès admin. Limites : « je connais ADP » est vide. Le BPO ne vous autorise pas à modifier un taux URSSAF « parce que le salarié râle ». ADP n'est pas l'administration fiscale ni l'URSSAF. LOU Academy ne certifie pas ADP.",
      methode:
        "Dès l'offre d'emploi, classer : interne ou prestataire ? Production ou core RH ? Qui dépose la DSN ? Qui parle à l'URSSAF ? En interne délégué : votre valeur est la qualité du fichier d'entrée et du contrôle de sortie, pas le paramétrage du moteur distant.",
      extra: [
        code(`MONTAGE ADP (ou prestataire équivalent) — questions à poser
1. Le bulletin est calculé : [ ] chez nous  [ ] chez le prestataire  [ ] mixte
2. Je saisis dans : [ ] le moteur  [ ] un SIRH  [ ] un fichier / portail d'entrée
3. Je vois le paramétrage rubriques : [ ] oui  [ ] non, ticket prestataire
4. DSN déposée par : [ ] nous  [ ] prestataire  [ ] à confirmer
5. SLA clôture (date fichier, date bulletins, date questions) : ...............
6. Canal anomalies : ticket / mail / réunion — responsable : ...............
Ne pas inventer un nom de plate-forme si l'offre ne le donne pas.`),
      ],
      exemple:
        "Dans un CSP interne d'un groupe industriel, les variables partent vers ADP le 18, les bulletins reviennent le 22, la DSN est déposée par le prestataire. Lina contrôle les écarts de masse et les entrées/sorties. Elle ne « rentre pas dans ADP » pour créer une rubrique. Son métier est le contrôle et la relation salariés, pas l'administration de l'offre.",
      erreurs:
        "Promettre de « paramétrer ADP » en junior interne délégué. Accuser le prestataire sans avoir vérifié le fichier d'entrée. Copier un net N-1 dans le fichier d'entrée « pour aller plus vite ».",
      particuliers:
        "International : une paie ADP d'un autre pays n'est pas le bulletin français. Multi-pays : le junior France ne « corrige » pas un process groupe qui ignore un plafond URSSAF — il alerte. Changement de prestataire : projet, reprise de cumuls, pas une saisie du 24 du mois.",
      exercice:
        "Offre : « Chargé de paie junior — environnement ADP — 1 200 bulletins — SLA ». Quelles 5 missions juniors sont probables, et 3 qui ne le sont pas sans précision ?",
      correction:
        "Probables : préparation / contrôle de fichiers d'entrée, checklist, écarts brut/net, file d'anomalies, respect du calendrier, premières réponses salariés selon script.\nPas probables sans précision : refonte du paramétrage, dépôt DSN si le SLA le réserve au prestataire, conseil juridique, choix d'un taux AT.\nLe volume 1 200 indique l'industrialisation, pas une certification ADP.",
    }),
    pack({
      title: "SAP SuccessFactors et la paie associée : un SIRH n'est pas le bulletin",
      description:
        "Positionner SuccessFactors comme HCM cloud, et la paie France comme un sujet distinct.",
      minutes: 20,
      objectifs:
        "Vous situez SAP SuccessFactors comme une suite SIRH / HCM, vous savez que la paie France est souvent une paie associée (moteur SAP ou tiers), et vous refusez de confondre Employee Central avec un bulletin URSSAF.",
      theorie:
        "SAP SuccessFactors est positionné publiquement par SAP comme une suite cloud de gestion des ressources humaines (HCM) : core RH (souvent désigné Employee Central dans le langage du marché), talents, recrutements, objectifs, parfois temps, selon modules. Ce n'est pas, dans le positionnement dominant, « un petit logiciel de paie PME ». Les utilisateurs types sont des ETI et surtout des grands groupes, souvent internationaux, qui veulent un socle RH unique. Ce cours n'invente pas la liste des modules souscrits par une entreprise donnée.\n\nLa paie associée est le point de vigilance. Dans beaucoup d'architectures de grands comptes, SuccessFactors porte l'identité, le contrat, l'organisation, les événements ; un moteur de paie calcule le bulletin France. Ce moteur peut être une offre de paie SAP (le marché parle notamment d'Employee Central Payroll, historically liée au moteur SAP HCM — les noms commerciaux évoluent, nous ne figeons pas un pack) ou un tiers (ADP, moteur local, CSP). Sans schéma d'architecture du dossier, vous ne dites pas « SuccessFactors calcule mes cotisations ».\n\nDomaines fonctionnels côté SIRH : données salariés, workflows d'entrée, absences selon module, reporting RH, intégrations. Côté paie associée : variables, calcul, contrôles, éditions, DSN, journal. Le junior « SuccessFactors » d'un siège peut passer six mois sur les données d'entrée et les habilitations sans ouvrir un bulletin. Le junior paie peut ne voir SuccessFactors que comme la source des contrats. Les deux doivent parler le même matricule, la même date d'entrée, le même taux d'activité.\n\nCompétences transférables : qualité de la donnée (contrat, temps, événement), lecture d'une interface, discipline d'habilitation, compréhension qu'une erreur amont (mauvais SIRET, mauvais horaire) casse le moteur aval. Limites : une formation SuccessFactors RH n'est pas une formation paie. Ce parcours n'est pas une certification SAP. Les captures d'écran Fiori / SuccessFactors sont hors sujet ici. Un groupe qui « est sur SAP » peut encore avoir Excel pour les primes : l'architecture réelle se documente, elle ne se déduit pas du logo.",
      methode:
        "Demandez le schéma : SuccessFactors (quels modules) → interface (lequel, quelle fréquence, quel responsable) → moteur de paie (lequel) → DSN. Contrôlez trois champs sur un nouvel entrant : date d'entrée, quotité, établissement. Si l'un des trois est faux dans le SIRH, le plus beau moteur aval calculera juste… faux.",
      noteText:
        "Détail non établi dans ce cours : le nom exact du moteur de paie France d'un client SAP, le contenu d'un module « time », le bouton d'un workflow. Vous les lirez dans le dossier. Employee Central n'est pas un taux URSSAF.",
      exemple:
        "Un groupe 3 000 personnes : SuccessFactors pour les contrats, badgeage tiers, paie France sur un moteur local. Un avenant temps partiel est validé dans SuccessFactors le 27, après gel de paie. Le moteur n'a pas l'avenant. Le bulletin sort à temps plein. Le junior paie qui « corrige le net à la main » sans alerter sur l'interface crée un écart DSN et un écart SIRH. La bonne voie : incident d'interface, correction tracée, régularisation le mois suivant si la clôture est passée, selon décision du responsable.",
      erreurs:
        "Mettre SuccessFactors dans la liste « logiciels de paie maîtrisés ». Modifier une donnée RH pour « arranger » un bulletin sans processus. Croire que SAP = Sage (homophonie approximative pour un non-initié : ce n'est pas le même éditeur).",
      particuliers:
        "Roll-out pays : le template groupe peut ignorer un paramètre France (plafond, DSN). Le junior France documente l'écart, il ne « désobéit » pas en silence et il ne bricole pas un export pirate. Acquisition : deux SIRH pendant 18 mois, une seule DSN par SIRET — cartographier.",
      exercice:
        "Un manager dit : « C'est dans SuccessFactors, donc c'est bon pour la paie. » Rédigez quatre questions de contrôle avant d'accepter cette phrase.",
      correction:
        "1. Quel module contient le fait (contrat, absence, prime) ?\n2. L'interface vers le moteur de paie a-t-elle déjà tourné pour cette période ?\n3. Le moteur de paie France est-il SAP, un tiers, un CSP ?\n4. Y a-t-il un gel, et le fait est-il antérieur au gel ?\nPourquoi : SuccessFactors peut être vrai et la paie fausse tant que l'événement n'est pas dans le moteur qui calcule et déclare.",
    }),
    pack({
      title: "Workday : HCM mondial et écosystème de paie",
      description:
        "Positionner Workday comme SIRH cloud, et la paie France comme un écosystème à documenter.",
      minutes: 18,
      objectifs:
        "Vous situez Workday comme une plate-forme HCM cloud de grands comptes, vous savez que la paie peut être Workday Payroll dans certains pays ou un partenaire local, et vous n'inventez pas le fonctionnement France écran par écran.",
      theorie:
        "Workday est positionné publiquement comme une plate-forme cloud de gestion financière et de ressources humaines (HCM), utilisée surtout par des organisations de taille significative, souvent internationales. Le cœur visible pour un RH ou un salarié est le core HR : organisation, contrat, processus d'entrée, absences selon configuration, reporting. Ce n'est pas le positionnement d'un outil de TPE française à 12 salariés. Ce cours n'invente pas les applications souscrites (HCM, Finance, Payroll, Time, etc.).\n\nL'écosystème de paie est le point à tenir. Workday propose une paie (Workday Payroll) dans un nombre de pays qui évolue ; la couverture France, le degré de localisation (DSN, bulletin, PAS, organismes) et le choix réel d'un groupe donné ne sont pas détaillés ici faute de figer une brochure commerciale. En pratique de marché, beaucoup de groupes combinents Workday HCM et un moteur de paie France (partenaire, ADP, CSP, moteur historique). Un junior qui a « fait Workday » a souvent saisi un événement RH ou validé un workflow, pas calculé une tranche 2 Agirc-Arrco.\n\nUtilisateurs types : grands groupes, filiales françaises de groupes étrangers, parfois ETI en croissance internationale. Domaines : données salariés, processus, intégrations ; la paie et la DSN selon l'architecture. Compétences transférables : donnée propre, processus, habilitations, anglais professionnel fréquent, travail avec une équipe payroll globale. Limites : Workday n'est pas une obligation légale française. Ce n'est pas une certification de ce parcours. Un self-service de congés n'est pas un moteur. Un rapport Workday n'est pas un journal de paie tant qu'il n'est pas rapproché du moteur qui déclare.\n\nSi un détail n'est pas dans le positionnement public stable (par exemple : le libellé exact d'un business process, un partner list à jour, une date de localisation France), dites-le : non établi dans ce cours. Vous le lirez dans le projet interne.",
      methode:
        "Même schéma que SuccessFactors : HCM → intégration → moteur France → DSN. Ajoutez : langue de saisie, calendrier groupe vs calendrier URSSAF, qui « cut-off » (gel) côté Workday et côté paie locale. Les deux gels peuvent différer : c'est une cause classique d'écart.",
      exemple:
        "Filiale française de 180 personnes, Workday groupe, paie locale chez un expert-comptable sur un moteur français. Les primes validées dans Workday après le 15 n'arrivent dans le fichier d'interface que le mois suivant. Le junior local qui saisit la prime une seconde fois « pour être sûr » crée un double paiement. La compétence : connaître le calendrier d'interface, pas « connaître Workday ».",
      erreurs:
        "Écrire « paie Workday » sur un CV alors que vous n'avez fait que les absences. Corriger un bulletin local sans remettre la donnée dans Workday (divergence pérenne). Inventer qu'il n'y a plus de DSN « parce que Workday est américain ».",
      particuliers:
        "Pays sans DSN : le process groupe ne comprend pas toujours l'échéance France. À vous de l'inscrire dans le calendrier, pas d'improviser un dépôt hors outil. Finance Workday vs paie : un compte 641 groupe n'explique pas un net. Multi-contrats France : le HCM mondial peut n'avoir qu'un job ; le moteur France doit avoir la réalité sociale.",
      exercice:
        "On vous demande en entretien : « Vous connaissez Workday ? » Répondez en six lignes honnêtes pour un junior issu de ce parcours, puis en six lignes si vous avez réellement produit la paie France dans un moteur connecté à Workday.",
      correction:
        "Parcours seul : « Je distingue Workday comme HCM. Je sais que la paie France est souvent un moteur associé. Je n'ai pas d'expérience de production Workday. Je sais contrôler une donnée d'entrée (contrat, quotité, dates) et un écart d'interface. Je ne suis pas certifié Workday. »\nSi expérience réelle : nommer HCM ou paie, le moteur France, le volume, votre rôle (saisie événements, contrôle fichier, pas paramétrage). Pourquoi : le recruteur teste l'honnêteté plus que le logo.",
    }),
    pack({
      title: "PayFit et Nibelis : intégré PME et paie mid-market",
      description:
        "Situer deux acteurs français de positionnements différents, sans tutoriel d'écran.",
      minutes: 20,
      objectifs:
        "Vous situez PayFit comme une solution intégrée plutôt TPE/PME, Nibelis comme un acteur français de paie / SIRH de mid-market, vous en déduisez ce qu'un junior y fait, et vous refusez de les coller au même rang qu'un HCM mondial.",
      theorie:
        "PayFit est positionné publiquement comme une solution française de paie et d'administration du personnel, principalement pour les TPE et PME, en mode cloud, avec une promesse de simplicité : saisie, bulletins, DSN, espace salarié, souvent un même produit pour la RH opérationnelle légère et la paie. Les utilisateurs types sont des dirigeants de PME, des office managers, des premiers RH, parfois un expert-comptable partenaire. Ce n'est pas le positionnement d'un moteur de CSP à 50 000 bulletins, ni d'un HCM international. Ce cours n'invente pas les tarifs, les boutons, ni le détail d'un module « RH » à une date donnée. Si une fonctionnalité précise n'est pas dans une page publique à jour ou dans votre dossier, elle est non établie ici.\n\nNibelis est un éditeur français connu du marché de la paie et du SIRH, plutôt mid-market : entreprises qui ont un vrai service paie, un besoin de paramétrage, des populations moins « standard » qu'une TPE 10 personnes. Le positionnement public est celui d'un spécialiste paie / RH, pas d'un réseau social d'entreprise. Là encore, pas d'écran, pas de version figée, pas de certification dans ce parcours.\n\nPourquoi les traiter ensemble : ce sont deux réponses françaises au besoin « produire la paie », à des tailles et des profondeurs différentes. PayFit illustre l'intégré simplifié. Nibelis illustre un logiciel de paie / SIRH d'entreprise plus classique, avec un paramétrage plus visible. Ni l'un ni l'autre n'est « plus légal » : la légalité est le bulletin, le paiement, la DSN, pas la marque.\n\nDomaines fonctionnels, au sens métier, pour les deux, sous réserve du contrat : données salariés, variables, calcul, contrôles plus ou moins outillés, éditions, DSN, reporting, intégrations (compta, banque, outils RH). Chez un intégré PME, une partie des contrôles est volontairement réduite pour la lisibilité : le junior doit alors renforcer Excel et la checklist, pas « faire confiance au cloud ». Chez un outil mid-market, le risque inverse existe : trop d'options, un paramétrage touché trop vite.\n\nCompétences transférables : cycle mensuel, lecture de bulletin, DSN comme obligation, relation salarié, limites d'un self-service. Limites : un office manager sur PayFit n'est pas un paramétreur Nibelis. Un stage Nibelis n'autorise pas à dire « je maîtrise tous les moteurs français ». Aucun des deux n'est le simulateur LOU.",
      methode:
        "Classer l'offre : qui est l'utilisateur quotidien (dirigeant, RH polyvalent, gestionnaire dédié) ? Qui peut modifier un organisme ou une rubrique ? Où va la comptabilité ? En PME intégrée, le risque est l'absence de revue. Posez une revue même à deux (dirigeant + vous) avant virement. En mid-market, le risque est l'autonomie de paramétrage trop tôt : même règle que partout, source écrite.",
      exemple:
        "PME 18 personnes sur un intégré type PayFit : la fondatrice valide les CP dans l'outil, le junior (premier CDI admin) prépare la clôture. Un stagiaire a été payé au SMIC horaire sans vérifier janvier 2026 (12,02 €). L'outil a calculé ce qu'on lui a donné. La marque « simple » n'a pas créé le contrôle SMIC. Chez une ETI 350 personnes sur un logiciel type Nibelis, le même oubli serait une anomalie de liste de contrôle — si la liste existe.",
      erreurs:
        "Mépriser l'intégré PME (« ce n'est pas de la vraie paie ») : le droit est le même. Surestimer l'intégré (« impossible de se tromper »). Confondre Nibelis et un HCM SAP. Promettre une migration PayFit → grand moteur en « un week-end ».",
      particuliers:
        "Expert-comptable partenaire d'un intégré : qui est responsable de la DSN ? C'est écrit dans le contrat, pas dans un slogan. Croissance 15 → 120 salariés : l'outil peut rester pertinent ou devenir juste ; ce n'est pas au junior de vendre un changement d'éditeur. Départ du seul « super-utilisateur » : documenter avant, pas le 24 du mois.",
      exercice:
        "Tableau à compléter mentalement, puis comparez à la correction : pour PayFit (intégré PME) et Nibelis (paie/SIRH mid-market), indiquez utilisateur type, force probable, limite probable, ce qu'un junior ne fait pas seul.",
      correction:
        "PayFit : utilisateur souvent RH polyvalent / dirigeant / premier admin ; force = cycle complet lisible ; limite = profondeur paramétrage et industrialisation ; junior ne décide pas seul une rupture complexe ni un taux « corrigé ».\nNibelis : utilisateur souvent gestionnaire / responsable paie ETI ; force = paie de métier et SIRH associé selon offre ; limite = tentation de tout paramétrer sans doc ; junior ne crée pas une rubrique de cotisation sans revue.\nLes deux : DSN, bulletins, données, contrôles — compétences transférables. Aucune certification dans ce cours.",
    }),
    lesson({
      title: "Tableau comparatif, compétences transférables et simulateur pédagogique",
      description:
        "Synthétiser le marché, lister ce qui se transfère, et séparer nettement le moteur LOU des logiciels commerciaux.",
      minutes: 24,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez comparer les acteurs au niveau du positionnement public, sans note marketing. Vous savez lister les compétences qui se transférent d'un outil à l'autre. Vous savez expliquer à un recruteur que le simulateur de ce parcours n'est pas un clone commercial et ne constitue pas une certification."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Comparer des logiciels sans critère, c'est comparer des logos. Les critères utiles pour un gestionnaire de paie sont ceux de la leçon 1 : nature de l'objet (moteur, SIRH, intégré), utilisateurs types, lieu du calcul France, lieu de la DSN, lieu des variables, qui paramètre, quelles intégrations. Tout le reste (couleur de l'écran, nom d'un bouton, classement d'un cabinet d'analyste) est hors de ce cours.\n\nLe tableau ci-dessous est pédagogique. Il résume un positionnement public dominant, pas un audit 2026 de chaque catalogue, pas une recommandation d'achat, pas une mesure de parts de marché. Dès qu'une case dépendrait d'un pack commercial précis, elle est formulée de façon prudente (« selon offre », « paie associée »). Si vous devez choisir un outil en entreprise, vous ouvrez un cahier des charges et les documents éditeur à jour : vous ne photocopiez pas ce tableau dans un appel d'offres.\n\nCe qui se transfère vraiment, d'un environnement à l'autre : lire un dossier établissement ; qualifier un fait social avant saisie ; respecter un gel ; contrôler brut, net, plafonds, entrées/sorties, absences ; expliquer un bulletin ; préparer une DSN ; parler à la comptabilité ; documenter une exception ; savoir ce qu'un junior ne touche pas (taux URSSAF sans source, rubrique de cotisation, organisme). Ces compétences sont le métier. L'outil est un support.\n\nCe qui ne se transfère pas : les menus ; les habilitations ; les astuces d'un consultant ; un paramétrage CCN copié ; une « certification » que vous n'avez pas. Un recruteur sérieux teste le métier sur un cas. Un recruteur pressé teste le nom de l'outil. Vous répondez aux deux sans mentir.\n\nLe simulateur pédagogique LOU (moteur générique du cours, cas Atelier Nord Paie et dossiers associés) calcule de façon déterministe des scénarios d'apprentissage, avec des taux issus de rates-2026.json lorsqu'ils sont nationaux, et des hypothèses étiquetées lorsqu'ils ne le sont pas. Il n'implémente pas l'interface de Sage, Silae, Cegid, ADP, SAP, Workday, PayFit ou Nibelis. Il n'émet pas de DSN réelle. Il ne remplace pas une formation éditeur. L'attestation de réussite du parcours n'est pas un titre RNCP, ni un diplôme d'État, ni une certification logicielle. Le dire en entretien est une preuve de professionnalisme, pas une faiblesse."
        ),
        note(
          "Aucune cellule du tableau n'est un engagement éditeur. Pas de parts de marché inventées. Pas de prix. Pas de « meilleur outil ». Le simulateur LOU ≠ logiciel commercial."
        ),
        h("Méthode opérationnelle"),
        t(
          "Avant un entretien : ouvrez le tableau, situez l'outil de l'offre, préparez une phrase de distinction (moteur / SIRH / intégré) et une phrase d'honnêteté sur votre expérience réelle. En poste : remplissez la carte fonctionnelle de la leçon 1 dans les quinze premiers jours, faites-la viser par le responsable. C'est plus utile qu'un manuel de 400 pages non lu."
        ),
        code(`TABLEAU COMPARATIF PÉDAGOGIQUE — positionnement public, pas un audit catalogue
Période de lecture : formation (ne pas coller dans un AO). France.

Éditeur / offre     | Objet dominant          | Utilisateurs types (marché)     | Calcul paie FR        | SIRH / core RH        | DSN                 | Limite majeure pour un junior
--------------------|-------------------------|----------------------------------|-----------------------|-----------------------|---------------------|--------------------------------
Sage Paie (famille) | Moteur de paie (+ éco-  | PME, cabinets, paie interne     | Oui, offre paie      | Variable selon offre  | Attendue sur offre  | Versions / noms commerciaux
                    | système gestion Sage)   |                                  |                       |                       | paie                 | changeants ; pas une certif
Silae               | Moteur de paie cloud    | Cabinets, externalisation,      | Oui                   | Portail / collab.     | Cœur de production  | Multi-dossiers ≠ même CCN ;
                    |                         | entreprises                      |                       | selon offre           |                     | groupe Cegid ≠ même produit
Cegid (paie / HR)   | Écosystème RH, paie,    | ETI, verticales, partenaires    | Selon produit paie    | Oui sur offres HR     | Selon produit paie  | Nommer LE produit ; ne pas
                    | ERP selon offres        |                                  |                       |                       |                     | fusionner les marques du groupe
ADP                 | Paie, HCM, souvent BPO  | ETI, groupes, parfois packagé   | Oui (logiciel ou      | Selon suite           | Selon montage       | Interne ≠ prestataire ;
                    |                         |                                  |  infogérance)         |                       |                     | « ADP » ne dit pas le geste
SAP SuccessFactors  | SIRH / HCM cloud        | Grands groupes, internationaux  | Paie ASSOCIÉE         | Oui (cœur)            | Côté moteur de paie | Employee Central ≠ bulletin
                    |                         |                                  | (SAP ou tiers)        |                       |                     | URSSAF
Workday             | SIRH / HCM cloud        | Grands groupes                  | Écosystème (Payroll   | Oui (cœur)            | Côté paie France    | Self-service ≠ moteur ;
                    |                         |                                  |  et/ou partenaire FR) |                       |                     | localisation FR non détaillée ici
PayFit              | Intégré TPE/PME         | TPE, PME, 1er RH, parfois EC    | Oui, dans le produit  | RH opérationnelle     | Dans le produit     | Simplicité ≠ absence d'erreur ;
                    |                         |                                  |                       | légère                |                     | pas un CSP de masse
Nibelis             | Paie / SIRH mid-market  | ETI, services paie dédiés       | Oui                   | Oui selon offre       | Attendue            | Paramétrage réel : pas un
                    |                         |                                  |                       |                       |                     | junior seul
Simulateur LOU      | Moteur PÉDAGOGIQUE      | Apprenants de ce parcours       | Scénarios de cours    | Non (pas un SIRH)     | Pédagogique, pas    | ≠ clone commercial ; ≠ DSN
                    |                         |                                  |                       |                       | réelle              | réelle ; ≠ certification

Compétences transférables (toutes lignes sauf simulateur = métier) :
données · variables · calcul compris · contrôles · éditions · DSN comprise · reporting · intégrations comprises
Compétence non transférable : menus, boutons, « je suis certifié X ».`),
        h("Exemple professionnel"),
        t(
          "Maya postule : « Silae exigé ». Elle a fait ce module et un stage Excel + un moteur générique de formation. En entretien elle dit : « Je n'ai pas produit sur Silae. Je sais tenir un portefeuille, un gel, une checklist, une DSN sous revue. Je distinguerai votre portail client de votre moteur. Je n'inventerai pas un taux. » Elle est retenue en junior cabinet. Un autre candidat a écrit « maîtrise Silae, Cegid, Sage, Workday ». Le test sur un bulletin l'élimine. Le marché paie les contrôles, pas les logos."
        ),
        h("Erreurs fréquentes du gestionnaire de paie junior"),
        t(
          "Apprendre par cœur le tableau comme une vérité d'achat. Dire que le simulateur LOU « c'est comme Silae ». Noter une part de marché. Conseiller un éditeur à un dirigeant sans cahier des charges. Oublier Excel : dans tous les environnements ci-dessus, un tableur de contrôle existe encore."
        ),
        h("Situations particulières"),
        t(
          "Deux outils en parallèle (migration) : une seule DSN par établissement, un seul virement. Appel d'offres : vous n'êtes pas acheteur junior. Éditeur qui « s'occupe de tout » : la responsabilité de l'employeur reste. Logiciel non listé ici (autres moteurs français ou internationaux) : appliquez la même grille, n'inventez rien."
        ),
        h("Mise en pratique"),
        t(
          "Cas Atelier Nord Paie, 28 salariés, un établissement, expert-comptable pour la compta, pas de SIRH international, besoin de bulletins, DSN, virement, absences. (1) Parmi les lignes du tableau, lesquelles sont a priori disproportionnées, lesquelles peuvent convenir, sans choisir un gagnant. (2) Rédigez le paragraphe « logiciels » de votre CV après ce module uniquement. (3) Un collègue affirme : « LOU certifie Sage. » Que répondez-vous ?"
        ),
        h("Correction détaillée"),
        t(
          "1. Disproportionnées a priori : SAP SuccessFactors et Workday comme cœur (HCM de grand groupe). ADP BPO possible mais souvent surdimensionné à 28. Convenir possibles selon budget et accompagnement : moteur PME/cabinet (famille Sage Paie, Silae, offres Cegid paie, Nibelis selon offre), intégré type PayFit. Pas de gagnant : politique interne, prestataire, prix, accompagnement — hors de ce cours.\n2. CV : « Formation paie : cycle, contrôles, DSN, distinction moteur/SIRH/intégré (Sage, Silae, Cegid, ADP, SAP SF, Workday, PayFit, Nibelis au niveau fonctionnel). Pas de certification éditeur. Simulateur pédagogique LOU (moteur générique). Excel de contrôle. »\n3. Réponse : « Non. L'attestation LOU Academy atteste le parcours. Elle n'est ni Sage, ni RNCP, ni diplôme d'État. » Pourquoi : le contraire serait un mensonge professionnel."
        ),
      ],
    }),
    quizLesson({
      title: "Quiz — Logiciels de paie et SIRH",
      description: "Vérifier la distinction des objets, le positionnement et les limites d'un junior.",
      passing_score: 70,
      questions: [
        q({
          question: "Quelle distinction est correcte ?",
          options: [
            "A. Un SIRH calcule toujours les cotisations URSSAF France",
            "B. Un moteur de paie calcule bulletins et cotisations ; un SIRH porte surtout le core RH et alimente souvent la paie",
            "C. Un outil intégré TPE est illégal au-dessus de 10 salariés",
            "D. Workday et Sage sont le même éditeur",
          ],
          correct: 1,
          explanation:
            "Le moteur calcule. Le SIRH gère principalement les données et processus RH. L'intégré TPE/PME n'est pas interdit par un seuil inventé. Sage et Workday sont distincts.",
        }),
        q({
          question: "SAP SuccessFactors, dans son positionnement public dominant, est surtout :",
          options: [
            "A. Un moteur de paie TPE française",
            "B. Une suite SIRH / HCM cloud ; la paie France est souvent une paie associée (SAP ou tiers)",
            "C. L'administration fiscale",
            "D. Un clone du simulateur LOU",
          ],
          correct: 1,
          explanation:
            "SuccessFactors est un HCM. Le bulletin France dépend de l'architecture (paie associée). Ce n'est ni la DGFiP ni le moteur pédagogique du cours.",
        }),
        q({
          question: "Que peut-on afficher honnêtement après ce module ?",
          options: [
            "A. Certification officielle Sage, Silae et Cegid",
            "B. Titre RNCP de paramétreur",
            "C. Connaissance fonctionnelle du marché (objets, positionnements, limites), sans certification éditeur",
            "D. Maîtrise de tous les menus Workday Payroll France",
          ],
          correct: 2,
          explanation:
            "Le module enseigne à lire le marché. Il ne certifie aucun éditeur, ni un RNCP, ni des écrans non montrés.",
        }),
        q({
          question: "Silae est surtout positionné comme :",
          options: [
            "A. Un réseau social interne",
            "B. Un moteur de paie cloud, fréquent en cabinet et en production de dossiers",
            "C. Un badgeuse",
            "D. Un logiciel de paie uniquement américain",
          ],
          correct: 1,
          explanation:
            "Positionnement public : paie cloud, cabinets et production. L'appartenance au groupe Cegid ne fusionne pas les produits dans la tête d'un junior.",
        }),
        q({
          question: "Dans un montage ADP infogéré, le junior côté entreprise :",
          options: [
            "A. Modifie les taux URSSAF dans le moteur distant dès qu'un net « paraît faux »",
            "B. Prépare des fichiers d'entrée de qualité, contrôle les sorties, respecte le SLA ; il ne s'improvise pas paramétreur du prestataire",
            "C. Dépose la DSN sans délégation, « pour aller plus vite »",
            "D. Peut ignorer le gel des variables",
          ],
          correct: 1,
          explanation:
            "En BPO, la valeur interne est l'entrée et le contrôle. Les taux nationaux ne se « corrigent » pas au feeling. DSN et gel suivent la délégation écrite.",
        }),
        q({
          question: "PayFit, au niveau de positionnement public retenu ici, illustre surtout :",
          options: [
            "A. Un HCM de grand groupe international comparable à Workday",
            "B. Une solution intégrée plutôt TPE/PME (paie + RH opérationnelle dans le même produit)",
            "C. Un obligation légale pour les entreprises de moins de 50 salariés",
            "D. Un module SAP",
          ],
          correct: 1,
          explanation:
            "PayFit est un intégré simplifié de TPE/PME. Pas une obligation légale, pas un HCM mondial, pas SAP.",
        }),
        q({
          question: "Le simulateur pédagogique LOU :",
          options: [
            "A. Est un clone certifié de Silae",
            "B. Permet d'émettre une DSN réelle opposable à l'URSSAF",
            "C. Est un moteur générique d'apprentissage, distinct des logiciels commerciaux, sans certification éditeur",
            "D. Remplace la formation officielle de chaque éditeur",
          ],
          correct: 2,
          explanation:
            "Le cours le dit explicitement : pédagogique, déterministe, pas un clone, pas une DSN réelle, pas une certif éditeur.",
        }),
        q({
          question: "Un détail d'écran (nom de bouton, assistant) d'un logiciel nommé :",
          options: [
            "A. Peut être inventé si « c'est probablement comme ça »",
            "B. N'est enseigné ici que s'il vient d'une observation réelle ou d'une doc interne ; sinon on ne l'invente pas",
            "C. Est fourni par le quiz comme preuve de certification",
            "D. Vaut plus que la compréhension du cycle de paie",
          ],
          correct: 1,
          explanation:
            "CONTENT_SPEC : pas de workflows d'UI inventés. Le métier se transfère ; le bouton non.",
        }),
        q({
          question: "Workday, pour un junior France, implique le plus souvent de documenter :",
          options: [
            "A. Que la DSN n'existe plus",
            "B. L'architecture HCM + écosystème de paie France (Payroll Workday et/ou partenaire), sans inventer la localisation écran par écran",
            "C. Que Workday est réservé aux TPE de moins de 10 salariés",
            "D. Une certification Workday automatique en fin de module",
          ],
          correct: 1,
          explanation:
            "Workday est un HCM de grands comptes. La paie France se documente. Pas de disparition de la DSN, pas de certif magique, pas un outil TPE typique.",
        }),
        q({
          question: "Quelle compétence se transfère d'un moteur à un autre ?",
          options: [
            "A. Le raccourci clavier du consultant",
            "B. Contrôler un brut, un net, des plafonds, des entrées/sorties, et savoir ce qu'un junior ne paramètre pas seul",
            "C. Le copier-coller d'une CCN entre deux dossiers clients",
            "D. Le droit de modifier un taux URSSAF sans source",
          ],
          correct: 1,
          explanation:
            "Le métier (faits, règles, contrôles, limites) se transfère. Les menus, le copier-coller de paramétrage et les taux sans source, non.",
        }),
      ],
    }),
  ],
};
