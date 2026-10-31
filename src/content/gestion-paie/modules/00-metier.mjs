import { pack, quizLesson, q, h, t, note, code, lesson } from "../lib.mjs";

export default {
  position: 0,
  title: "Découvrir le métier de gestionnaire de paie",
  description:
    "Comprendre le rôle, le cycle mensuel, les interlocuteurs, les responsabilités et les limites d'autonomie d'un gestionnaire de paie junior.",
  lessons: [
    pack({
      title: "À quoi sert un gestionnaire de paie ?",
      description: "Définir le métier par les résultats attendus, pas par les intitulés d'offre.",
      minutes: 18,
      objectifs:
        "À la fin de cette leçon, vous savez définir le métier, le distinguer de la comptabilité générale et des RH « recrutement », et expliquer pourquoi une erreur de paie n'est jamais « juste un chiffre ».",
      theorie:
        "Le gestionnaire de paie transforme des faits sociaux (contrat, temps de travail, absences, événements de vie, ruptures) en un bulletin exact, versé à la bonne date, déclaré aux organismes, comptabilisé, et justifiable.\n\nCe n'est pas « faire des fiches de paie ». C'est garantir que chaque euro brut, chaque cotisation, chaque net, chaque ligne DSN et chaque écriture reposent sur une règle identifiable : loi, décret, instruction BOSS, taux URSSAF de la période, convention collective, accord, contrat, paramètre d'entreprise.\n\nLe métier se situe à l'intersection de trois univers. Le droit social dit ce qui est dû. Le paramétrage du logiciel applique ce qui a été décidé. Le contrôle humain vérifie que le logiciel n'a pas appliqué une règle morte, un taux de l'année précédente, ou une variable mal saisie.\n\nUn junior n'est pas responsable du paramétrage national ni du conseil juridique complexe. Il est responsable de la qualité de ce qu'il saisit, de ce qu'il contrôle, de ce qu'il documente, et de ce qu'il escalade. La paie n'admet pas l'approximation « on verra au mois suivant » : un trop-perçu, une DSN fausse ou un net erroné se paient en réclamation, en régularisation, parfois en contrôle.\n\nOn distingue souvent : gestionnaire de paie (production), responsable paie (validation, paramétrage, relation organismes, encadrement), CSP paie (volume, process, SLA), collaborateur paie en cabinet (plusieurs dossiers clients, conventions différentes). Le fond technique est le même. L'organisation du travail change.",
      methode:
        "Lorsque l'on vous confie un dossier, posez toujours, dans cet ordre :\n1. Qui est l'employeur (SIRET, convention, effectif, organismes) ?\n2. Quelle est la période d'emploi (mois civil, entrée/sortie) ?\n3. Quel est le contrat (durée, temps de travail, classification, rémunération) ?\n4. Quels événements du mois (absences, HS, primes, arrêts) ?\n5. Quelles règles s'appliquent (loi, CCN, accord, usage, contrat) ?\n6. Qu'est-ce qui est déjà paramétré, qu'est-ce qui doit être saisi, qu'est-ce qui doit être contrôlé ?\n7. Qui valide avant paiement et DSN ?\nVous ne « lancez » pas un calcul pour voir. Vous préparez les faits, puis vous calculez, puis vous contrôlez.",
      noteText:
        "Limite d'autonomie : un junior n'invente pas une règle parce que « c'est comme ça chez le précédent employeur ». Si la CCN, le BOSS ou le contrat sont muets ou contradictoires, vous documentez la question et vous interrogez le responsable paie. Ce n'est pas de la faiblesse : c'est de la sécurisation.",
      exemple:
        "Dans une PME de 42 personnes (métallurgie), Lina, gestionnaire junior, reçoit un mail du directeur : « Ajoute 200 € à tout le monde, ils ont bien bossé. » Sans cadrage, elle saisit une prime exceptionnelle soumise. Le mois suivant, deux salariés réclament : l'un est au forfait jours, l'autre était en arrêt. Le responsable paie doit reprendre le dossier, qualifier la prime (contractuelle ? usage ? libéralité ?), vérifier l'assiette, l'éventuel maintien, et la communication. Le besoin n'était pas « une ligne de plus ». C'était une décision sociale à qualifier avant saisie.",
      erreurs:
        "Confondre vitesse de clôture et qualité. Croire que le logiciel « sait ». Traiter tous les salariés avec le même réflexe (temps plein, mensualisé, non-cadre). Répondre à un salarié sur un taux « parce que c'est comme ça » sans savoir l'expliquer. Attendre le 5 du mois pour ouvrir les variables.",
      particuliers:
        "En cabinet, le client n'est pas votre N+1 métier : il peut vous demander une pratique non conforme. Vous ne la suivez pas. Vous alertez votre responsable de dossier. En CSP, le SLA (« bulletins le 25 ») n'autorise pas à sauter les contrôles. En interne dans une startup de 12 personnes, vous pouvez être « la paie » à vous seul : la limite d'autonomie reste, même s'il n'y a pas de responsable paie à côté. Vous vous appuyez alors sur le prestataire, l'expert-comptable, ou le juriste, et vous tracez.",
      exercice:
        "Un manager vous écrit : « Peux-tu avancer le salaire de Karim de 3 jours, il a un loyer. Et enlève les tickets resto du mois, il n'a pas été là mais je veux lui laisser le salaire plein. » Listez : (1) ce que vous pouvez faire seul ; (2) ce que vous devez clarifier ; (3) ce que vous refusez ou escaladez, et pourquoi.",
      correction:
        "1. Seul : rien de définitif. Un acompte éventuel existe parfois en politique interne, jamais « parce que le manager le demande par mail ». Les titres-restaurant suivent des règles d'attribution (présence, jours travaillés) : on ne « laisse » pas un droit par sympathie sans base.\n2. Clarifier : existe-t-il une procédure d'acompte ? Karim a-t-il des jours travaillés ? Quelle absence (CP, maladie, injustifiée) ? Qui a le pouvoir d'accorder un acompte (direction, RH) ?\n3. Escalader : paiement anticipé hors process, maintien d'un avantage sans règle, risque d'inégalité de traitement. Un junior ne dit pas « non » brutalement au manager : il reformule la règle, propose le canal (acompte validé, ou paiement à l'échéance), et alerte le responsable paie si la pression continue.",
    }),
    pack({
      title: "Intitulés de poste, missions et niveau junior",
      description: "Situer gestionnaire de paie, chargé de paie, collaborateur cabinet, CSP, SIRH.",
      minutes: 16,
      objectifs:
        "Vous distinguez les intitulés, vous savez ce que l'on attend d'un junior, et vous savez nommer ce qui reste hors de votre autonomie.",
      theorie:
        "Les titres ne sont pas normalisés par la loi. Ils décrivent un niveau d'autonomie et un périmètre, pas un diplôme.\n\nGestionnaire de paie junior / chargé de paie junior : production d'un portefeuille, saisie des variables, contrôles de premier niveau, préparation des bulletins, premières réponses salariés, participation à la DSN sous revue. Vous ne paramétrez pas seul un organisme, une rubrique complexe, une CCN entière.\n\nCollaborateur paie en cabinet (expertise comptable, externalisation) : plusieurs dossiers, plusieurs conventions, un calendrier client. La communication passe souvent par le collaborateur social et le client. Le risque : appliquer le réflexe du dossier A au dossier B.\n\nGestionnaire paie et administration du personnel : vous touchez contrats, avenants, DPAE, visites médicales, absences, en plus de la paie. Le volume de production est souvent plus faible, la polyvalence plus forte.\n\nChargé de gestion sociale : intitulé large (paie + social + parfois IRP). Vérifiez l'offre : ce n'est pas toujours un poste junior.\n\nGestionnaire paie / SIRH junior : plus d'interface (core RH, variables, workflows d'absence) que de moteur de paie. Vous devez comprendre le cycle, pas « cliquer dans l'outil ». Un SIRH n'est pas un moteur de paie.\n\nCSP paie : industrialisation, files d'attente, contrôles standardisés, peu de face-à-face salarié. La rigueur de process est la compétence principale.\n\nResponsable paie, expert paie, paramétreur : ce n'est pas le premier poste. Vous y tendez en documentant, en comprenant les cotisations, en sachant expliquer un écart.",
      methode:
        "Le premier jour, faites écrire : taille du portefeuille ; types de contrats ; CCN ; qui collecte les variables ; qui valide ; qui dépose la DSN ; qui parle aux salariés ; quels outils (moteur de paie, SIRH, Excel, GED) ; calendrier de paie du mois. Sans cette carte, on vous jugera sur des attentes non dites.",
      exemple:
        "Maya est « gestionnaire paie junior » dans une ETI de 280 personnes, CCN Syntec, Silae en CSP interne. On lui confie 90 bulletins non-cadres, les cadres restent au senior. En parallèle, Théo est « collaborateur social junior » en cabinet : 8 dossiers de 8 à 40 salariés, 5 CCN. Maya apprend la profondeur d'un paramétrage unique. Théo apprend à ne jamais supposer que « le 13e mois se calcule comme chez le précédent client ».",
      erreurs:
        "Se présenter comme « responsable paie » après un stage. Accepter de « corriger un taux URSSAF » sans revue. En cabinet, promettre au client un bulletin le jour même alors que les variables n'ont pas été reçues. Croire que « junior » signifie « on ne vous demandera pas de calculer » : on vous le demandera, avec contrôle.",
      particuliers:
        "Le statut cadre du poste de gestionnaire n'est pas un droit lié à la formation. Il dépend de la classification de l'employeur, de la CCN, parfois du forfait. Ne le promettez pas dans un entretien. De même, 36 000 € brut annuels est un objectif de marché fréquent sur des offres confirmées ou tendues, pas une rémunération automatique d'entrée. Vous préparerez cet argumentaire au module emploi, avec votre niveau réel.",
      exercice:
        "Deux offres : A) « Gestionnaire paie et ADP — 35 salariés — TPE industrielle — tout le social ». B) « Chargé de paie junior — CSP 1 200 bulletins — portefeuille non-cadres — Silae ». Pour chacune, listez 5 missions probablement juniors et 3 missions à faire superviser.",
      correction:
        "A TPE : saisie variables, bulletins, absences, DPAE avec RH, premiers contrôles, collecte titres-restaurant. Supervisé : paramétrage CCN, rupture contentieuse, taux AT, choix d'un contrat mutuelle, DSN de régularisation complexe.\nB CSP : production de masse, checklist, écarts brut/net, file d'anomalies, respect du calendrier. Supervisé : correction d'un bloc DSN rejeté, paramétrage rubrique, réponse juridique à un CSE, changement de taux.\nLe volume n'augmente pas vos droits : il augmente l'exigence de process.",
    }),
    pack({
      title: "Le service paie et ses interlocuteurs",
      description: "Cartographier RH, comptabilité, organismes, prestataires et salariés.",
      minutes: 18,
      objectifs:
        "Vous situez la paie dans l'organisation et vous savez qui fait quoi, pour ne plus envoyer la mauvaise question à la mauvaise personne.",
      theorie:
        "Un service paie n'existe pas en vase clos. Il reçoit des faits, produit des droits, reverse des fonds, déclare, archive.\n\nRH / administration du personnel : contrats, avenants, classifications, temps de travail contractuel, mutuelle, prévoyance, ruptures. Si le contrat est faux, le bulletin sera faux. La paie ne « corrige » pas un CDI à 35 h qui devrait être un forfait jours : elle alerte.\n\nManagers : variables (HS, primes, absences). Ils ne sont pas responsables du bulletin, mais ils sont responsables de la qualité de ce qu'ils déclarent. Un junior relance, il ne suppose pas.\n\nComptabilité : journal de paie, charges, dettes 421/43x, PAS, provisions. La paie n'est pas un sous-service comptable, mais elle doit produire un fichier justifié. Un écart de 0,01 € sur 200 bulletins n'est pas « rien » si le rapprochement bancaire casse.\n\nOrganismes : URSSAF, caisses de retraite complémentaire, organismes de prévoyance/mutuelle, DGFIP (PAS), assurance maladie (IJ, subrogation), Pôle emploi / France Travail selon les signalements. La DSN est le canal, pas « un export ».\n\nPrestataires : expert-comptable, éditeur, CSP, courtier. Vous restez responsable de ce que vous validez, même si le calcul est outillé.\n\nSalariés : ils ont droit à un bulletin compréhensible et à une réponse factuelle. Ils n'ont pas droit à l'intégralité du paramétrage d'un collègue, ni à un taux PAS d'un tiers.",
      methode:
        "Dès J+2, dessinez la carte :\n- Qui ouvre le dossier salarié ?\n- Qui saisit les absences ?\n- Qui valide les HS ?\n- Qui lance le calcul ?\n- Qui contrôle ?\n- Qui vire ?\n- Qui dépose la DSN ?\n- Qui répond au salarié ?\n- Qui parle à l'URSSAF ?\nNotez les horaires de gel des variables. Un service paie a un calendrier, pas une file Slack permanente.",
      extra: [
        code(`CARTE D'INTERLOCUTEURS PAIE — à remplir à J+3
Employeur / SIRET : .................................
CCN : ..................... Effectif : ..............
Moteur de paie : .......... SIRH : ..................
Collecte variables (qui, quand) : ...................
Validation manager : ................................
Contrôle N+1 : ......................................
Paiement (banque / SEPA) : ..........................
DSN (qui dépose, quel jour) : .......................
Comptabilité (qui, quel journal) : ..................
Contact URSSAF / retraite / mutuelle : ..............
Canal salariés (ticket, mail, permanence) : .........`),
      ],
      exemple:
        "Dans un CSP de 8 gestionnaires, chaque junior a 180 bulletins. Les managers déposent les variables via un formulaire figé au 18 du mois. Un manager appelle le 24 : « j'ai oublié 12 HS ». Le process dit : trop tard pour ce mois, régularisation le mois suivant sauf erreur préjudiciable validée par le responsable. Le junior qui « passe l'ami » casse le calendrier de 180 autres personnes et la DSN.",
      erreurs:
        "Téléphoner à l'URSSAF « pour avoir un avis » sans dossier et sans responsable. Copier la comptabilité en oubliant qu'un compte 641 n'explique pas un net. Répondre à un salarié sur le taux PAS d'un collègue. Laisser un manager dicter une retenue sans base.",
      particuliers:
        "Multi-établissements : un même salarié peut changer de SIRET, de caisse AT, de convention. Vous ne fusionnez pas les dossiers par facilité. Portage salarial, groupement d'employeurs, mise à disposition : l'employeur au sens social n'est pas toujours « celui qui donne le travail ». Un junior identifie l'employeur déclarant avant de calculer.",
      exercice:
        "Classez : RH, paie, comptabilité, organisme, salarié.\nA. « Le taux AT 2026 n'est pas le bon. »\nB. « Je n'ai pas le même net que le mois dernier. »\nC. « Le compte 431 ne letre pas avec l'avis de versement. »\nD. « L'avenant temps partiel n'est pas dans le dossier. »",
      correction:
        "A. Organisme (Carsat / ATMP) + paie (paramétrage) : le junior n'invente pas le taux ; il vérifie la notification et alerte le responsable.\nB. Salarié → paie : on contrôle le bulletin, on explique, on ne se défausse pas sur « c'est le logiciel ».\nC. Comptabilité + paie : rapprochement.\nD. RH / administration du personnel, avec impact paie. Sans avenant, le temps de travail appliqué est un risque.",
    }),
    pack({
      title: "Portefeuille, calendrier et clôture",
      description: "Comprendre le rythme réel d'un mois de paie et les échéances non négociables.",
      minutes: 20,
      objectifs:
        "Vous savez décrire un cycle mensuel, identifier les dates critiques, et organiser un portefeuille sans attendre le dernier jour.",
      theorie:
        "La paie est un processus cyclique. Un mois type, en simplifiant :\n1. Ouverture : reprise des régularisations, lecture des arrivées/départs, vérification des paramètres (plafond, effectif, contrats).\n2. Collecte : absences, HS, variables, arrêts, primes, notes de frais selon process.\n3. Saisie / intégration SIRH.\n4. Calcul.\n5. Contrôles (brut, net, cotisations, plafonds, entrées/sorties, anomalies).\n6. Corrections.\n7. Validation.\n8. Édition, paiement, DSN, écritures, archivage.\n9. Post-clôture : CRM DSN, réclamations, régularisations à planifier.\n\nLes échéances ne sont pas des « souhaits ». Paiement du salaire (souvent fin de mois ou date prévue au contrat/usage), DSN (dates net-entreprises selon nature et taille — vous les relisez chaque année, vous ne les récitez pas de mémoire hors source), URSSAF, PAS. Un junior connaît le calendrier de SON dossier, affiché, partagé.\n\nUn portefeuille, ce n'est pas « 120 noms ». C'est 120 situations : temps partiels, forfaits, arrêts longs, saisie sur salaire, multiples contrats. Vous priorisez : sorties du mois, arrêts, anomalies de net, nouveaux entrants, puis le volume standard.",
      methode:
        "En début de mois, construisez trois listes : (1) événements déjà connus (préavis, arrêts, entrées) ; (2) variables à relancer ; (3) contrôles que vous ferez après calcul, toujours les mêmes. Tenez un journal d'incidents : date, salarié, fait, décision, qui a validé. Sans journal, vous recommencerez la même erreur en mars.",
      exemple:
        "Janvier est un mois dense : PMSS, SMIC, souvent 13e mois, régularisations de N-1, nouveaux taux. Un junior qui « fait comme en novembre » sans ouvrir le barème 2026 produit des bulletins élégants et faux. Le calendrier de janvier se prépare en décembre.",
      erreurs:
        "Tout faire le 24. Ne pas relire les CRM DSN. Traiter une réclamation le jour du paiement sans file d'attente. Oublier qu'un salarié entré le 31 existe. Clôturer sans contrôle des nets à zéro ou négatifs.",
      particuliers:
        "Paiement le 25, DSN le 5 du mois suivant, ou l'inverse selon organisations : le calendrier interne peut être plus serré que l'échéance légale. Respectez le plus contraignant des deux. Travail de nuit de clôture : la fatigue crée les inversions de rubriques. Un contrôle à deux sur les sorties vaut mieux qu'un héroïsme solitaire.",
      exercice:
        "On est le 12 janvier 2026. Votre clôture est le 25. Portefeuille de 80 salariés. Vous recevez : une DPAE pour une entrée le 20 ; un arrêt maladie reçu ce matin (début 8 janvier) ; un manager qui n'a pas envoyé les HS de décembre (trop tard) et de janvier ; une réclamation sur un trop-perçu de novembre. Ordonnez votre journée et justifiez.",
      correction:
        "1. Arrêt maladie : impact immédiat (IJ, maintien, subrogation, DSN événementielle selon process) — ouvrir le dossier, vérifier réception, alerter si pièces manquantes.\n2. Entrée du 20 : dossier, DPAE déjà faite ?, paramétrage, mutuelle, premier bulletin prorata — anticiper avant le 20, pas le 24.\n3. Trop-perçu novembre : dossier de régularisation, ne pas improviser une retenue le 12 sans règle ni information du salarié ; voir responsable.\n4. HS décembre : trop tard pour décembre déjà clôturé ; janvier : relancer le manager avec date de gel. Vous n'inventez pas les heures.\nUn junior dit les dates à voix haute. Il ne « rattrape » pas en silence.",
    }),
    pack({
      title: "Rigueur, confidentialité, stress et qualité professionnelle",
      description: "Les compétences comportementales qui font tenir un junior en clôture.",
      minutes: 16,
      objectifs:
        "Vous traduisez « rigueur » et « confidentialité » en gestes concrets, et vous savez quoi faire quand la pression de clôture monte.",
      theorie:
        "La paie traite des données parmi les plus sensibles de l'entreprise : rémunération, santé (arrêts), saisie sur salaire, situation familiale, taux d'impôt. Ce n'est pas « un fichier Excel ». C'est un traitement de données personnelles (RGPD) avec des habilitations. Un écran laissé ouvert, un bulletin envoyé au mauvais destinataire, un commentaire « il est toujours malade » dans un open space : ce sont des fautes professionnelles.\n\nLa rigueur, ce n'est pas la lenteur. C'est : une source pour chaque chiffre ; une date sur chaque règle ; un contrôle après chaque calcul ; une trace pour chaque exception. Le logiciel mémorise des paramétrages. Il ne mémorise pas votre jugement.\n\nLe stress de clôture est structurel : dates fixes, dépendances (managers, arrêts qui arrivent tard, rejets DSN). Un junior qui cache une erreur pour « ne pas retarder » transforme une correction de 10 minutes en régularisation de trois mois. Dire « je ne sais pas, je vérifie » est une compétence.\n\nQualités cherchées par les employeurs : exactitude, tenue des délais, discrétion, capacité à expliquer simplement, résistance à la pression sans devenir brusque, aisance Excel de contrôle, curiosité réglementaire. On n'attend pas que vous connaissiez toutes les CCN. On attend que vous sachiez chercher et que vous ne bluffiez pas.",
      methode:
        "Règles de tenue dès la première semaine :\n- Casque ou espace calme pour les appels salariés ; pas de haut-parleur.\n- Pas de bulletin sur imprimante partagée sans ramassage immédiat.\n- Messagerie professionnelle, pas WhatsApp perso pour un net.\n- Si erreur de destinataire : responsable + actions (rappel, incident RGPD selon procédure interne).\n- Checklist de clôture affichée, cochée, datée.\n- Pause de 5 minutes avant les 20 derniers bulletins : c'est là que se glissent les inversions.",
      noteText:
        "Obligation légale : protection des données, secret professionnel de fait sur les rémunérations, mentions du bulletin, exactitude déclarative. La « déontologie » au-delà est une exigence professionnelle et souvent contractuelle (clause de confidentialité). Un junior n'est pas tenu de tout savoir ; il est tenu de ne pas divulguer.",
      exemple:
        "En cabinet, un collaborateur raconte au déjeuner le salaire du dirigeant d'un client. L'information circule. Le client part. Le collaborateur « n'avait rien écrit ». La confidentialité se joue aussi à table. En interne, un net discuté à la machine à café crée des comparaisons, des rumeurs, parfois un climat social que la paie devra ensuite gérer en réclamations.",
      erreurs:
        "Stocker les bulletins sur une clé USB personnelle. Utiliser le taux PAS comme sujet de conversation. Minimiser une erreur de 80 € « on rattrapera ». Travailler la clôture en ayant 12 onglets de réseaux sociaux. Répondre à un salarié énervé par un mail de trois lignes sans avoir ouvert le bulletin.",
      particuliers:
        "Saisie sur salaire, enquête interne, alerte : seuls les habilités. Un collègue RH « curieux » n'est pas un habilité. Télétravail : écran visé, documents papier, imprimante familiale. Le RGPD ne s'arrête pas à la porte du domicile.",
      exercice:
        "Vous vous apercevez, le 26, qu'un bulletin a été envoyé par e-mail à un homonyme interne (mauvais Jean Dupont). Que faites-vous dans l'heure, dans la journée, et que ne faites-vous pas ?",
      correction:
        "Dans l'heure : cesser toute diffusion, informer le responsable paie et le référent RGPD / DPO selon procédure, demander la suppression au mauvais destinataire par un canal tracé, ne pas « faire semblant ». Dans la journée : documenter l'incident, évaluer s'il faut informer le bon salarié, préparer un bulletin réémis par le canal habituel, analyser la cause (liste de diffusion, homonymie, contrôle à deux). Ne pas : écrire « désolé de la boulette » en copiant tout le service ; menacer le destinataire ; cacher. Une erreur de destinataire est un incident de données, pas un gag.",
    }),
    pack({
      title: "Évolutions professionnelles et attentes des employeurs",
      description: "Voir la suite du métier sans vendre de mirage salarial.",
      minutes: 16,
      objectifs:
        "Vous connaissez les passerelles réelles du métier et vous savez lire une offre d'emploi de junior sans surestimer le poste.",
      theorie:
        "Après un premier poste, les évolutions fréquentes sont : gestionnaire confirmé (portefeuille plus complexe, moins de revue), référent d'un domaine (DSN, absences, CCN), paramétreur, responsable paie d'un établissement, chef d'équipe CSP, consultant paie, contrôleur social, parfois SIRH. Rien de cela n'est automatique. Ce qui accélère : fiabilité des clôtures, capacité à expliquer, documentation, veille, Excel de contrôle, compréhension comptable minimale.\n\nLes employeurs d'un junior cherchent surtout : savoir lire un bulletin, calculer un brut et un net simple, traiter une entrée, une sortie standard, des HS, des CP, un arrêt avec consignes, préparer des contrôles, ne pas paniquer devant une DSN déjà paramétrée, écrire un français clair, tenir un calendrier.\n\nCe qu'ils ne cherchent pas le premier jour : refondre un paramétrage Agirc-Arrco, plaider une requalification, décider seul d'une rupture, « optimiser » des exonérations. Un candidat qui promet cela en entretien perd en crédibilité.\n\nRémunération : les offres varient selon région, cabinet/industrie/CSP, tension du marché, classification. Certaines offres de chargé de paie visent 36 000 € brut annuels ou davantage, parfois un statut cadre. Ce sont des conditions de marché, pas un effet de cette formation. Vous apprendrez à analyser une offre, à ne pas confondre fixe et variable, et à défendre un niveau réel. Vous n'apprendrez pas à garantir un salaire.",
      methode:
        "Pour chaque offre, extraire : volume de bulletins, CCN, logiciel, part d'administration du personnel, autonomie réelle (qui valide), astreinte de clôture, formation interne. Si l'offre demande « 5 CCN, DSN, paramétrage, management » pour un junior : c'est un poste mal cadré ou un confirmé déguisé. Préparez des questions, ne fuyez pas.",
      exemple:
        "Une offre « Gestionnaire paie F/H — 32-38 k€ — 2 ans d'expérience » n'est pas un poste débutant. Une offre « Collaborateur paie junior — cabinet — formation interne — 26-30 k€ » peut être le vrai premier poste. Viser uniquement 36 k€ en sortant de formation, sans stage ni alternance, expose à des refus. Viser les compétences du 36 k€, puis négocier selon preuves (cas, stage, tests), est professionnel.",
      erreurs:
        "Mentir sur un logiciel (« je maîtrise Sage ») après avoir lu une fiche. Promettre d'être autonome sur la DSN. Mépriser les postes cabinet ou CSP. Croire que le statut cadre augmente le net de façon magique (il change cotisations, forfait, déconnexion — à analyser, pas à idolâtrer).",
      particuliers:
        "Reconversion : valorisez la rigueur d'un métier antérieur (compta, contrôle, accueil réglementé) plutôt qu'un récit de vocation. Alternance : le maître d'apprentissage n'est pas un tuteur de quiz ; demandez un calendrier de paie réel. Handicap, temps partiel : le métier est compatible si l'organisation l'est ; la clôture impose des pics, dites-le clairement en entretien pour éviter un échec à J+15.",
      exercice:
        "Rédigez en dix lignes votre périmètre junior idéal : ce que vous savez déjà faire en fin de formation (projetez), ce que vous ferez sous revue, ce que vous ne ferez pas encore. Pas de salaire dans cet exercice.",
      correction:
        "Exemple de périmètre honnête : « Je sais reconstituer un bulletin simple janvier 2026, contrôler un brut, des HS légales supplétives, un prorata d'entrée, une retenue d'absence, préparer une checklist de clôture et expliquer un net à un salarié. Sous revue : arrêt avec subrogation, solde de tout compte, anomalie DSN, régularisation de plafond. Pas encore : paramétrage d'organisme, conseil en rupture, choix d'exonération. » Un recruteur croit ce texte. Il ne croit pas « expert paie toutes CCN ».",
    }),
    lesson({
      title: "Simulation : un mois dans un service paie",
      description: "Vivre janvier 2026 chez Atelier Nord Paie, PME fictive de 28 salariés.",
      minutes: 28,
      blocks: [
        h("Objectifs pédagogiques"),
        t("Vous parcourez un mois réel, jour après jour, et vous identifiez les gestes, les documents, les risques et les moments où un junior doit escalader."),
        h("Ce qu'il faut comprendre"),
        t("Atelier Nord Paie est une société fictive de menuiserie industrielle, 28 salariés, un établissement, CCN Bois (on ne citera aucune clause inventée : les minima et usages seront traités comme « à lire dans la CCN applicable », jamais comme des chiffres sortis d'un modèle). Logiciel : moteur de paie générique pédagogique, pas un clone commercial. Clôture interne : 24 du mois. Paiement : 28. DSN : selon échéance du dossier, préparée le 24, revue le 25, déposée par le responsable.\n\nVous êtes Lina, gestionnaire junior, portefeuille unique de 28. Votre responsable, Marc, valide. Janvier 2026 : nouveau PMSS 4 005 €, SMIC 12,02 €/h. Vous ne « reconduisez » pas décembre."),
        h("Méthode opérationnelle"),
        t("Lisez le journal ci-dessous comme une check-list. Pour chaque jour : quel fait, quelle pièce, quel risque, qui décide. Puis faites l'exercice final."),
        code(`JOURNAL DE JANVIER 2026 — Atelier Nord Paie (fictif)

J+2 (2 janv.)  Ouvrir le mois. Vérifier PMSS 4005, SMIC 12,02.
               Liste : 1 entrée prévue le 13, 1 départ le 31, 2 arrêts en cours.
               Relire les CRM DSN de décembre.

5 janv.        Relance managers : HS, primes, absences. Date de gel : 18 janv. 12h.
               Vérifier DPAE de l'entrée du 13 (RH). Sans DPAE, pas de « on verra ».

8 janv.        Arrêt maladie reçu (salarié A, début 6 janv.). Ouvrir maintien / IJ / subrogation.
               Vérifier CCN pour le maintien : LIRE le texte, ne pas inventer un %.
               Signalement DSN selon consignes Marc.

13 janv.       Entrée salariée B, 35 h, 2 100 € brut. Dossier, mutuelle (hypothèse contrat
               collectif 20/40 € déjà posée dans le dossier pédagogique), premier bulletin
               prorata. Contrôler classification : RH, pas vous.

18 janv. 12h   GEL des variables. HS manquantes du chef d'atelier : relance copiée Marc.
               Vous n'inventez pas 8 heures « comme d'habitude ».

20 janv.       Saisie. Calcul d'essai. Contrôle : brut vs N-1, nets aberrants, plafonds,
               entrée, sortie, arrêt, SMIC (aucun salaire horaire < 12,02 hors cas légaux).

22 janv.       Anomalie : salarié C, net -40 € (saisie sur salaire + mutuelle). Ne pas
               « arrondir ». Voir Marc, barème de saisie, reste à vivre.

24 janv.       Clôture interne. Bulletins. Fichier SEPA préparé, non envoyé. DSN préparée.
               Journal paie pour comptabilité. Journal d'incidents à jour.

25 janv.       Revue Marc. Une HS refusée (pas de validation). Régularisation février.
               Dépôt DSN par Marc. Vous assistez.

28 janv.       Paiement. Permanence mails salariés. Réclamation « je n'ai pas mes tickets » :
               vérifier jours travaillés, ne pas recréer un droit hors règle.

31 janv.       Sortie salarié D. Solde : préavis travaillé, CP restants, documents de fin.
               DSN de fin selon process. Contrôle à deux avec Marc.

Post-clôture   CRM, lettrage URSSAF avec compta, ticket trop-perçu novembre toujours ouvert.`),
        note("Tout chiffre de mutuelle, d'AT/MP ou de maintien CCN dans cette simulation est une hypothèse de dossier fictif ou un renvoi au texte. Le PMSS et le SMIC de janvier 2026 sont des paramètres officiels (URSSAF / arrêté du 22 décembre 2025)."),
        h("Exemple professionnel"),
        t("Le chef d'atelier insiste le 23 : « mets les HS, je signe demain ». Lina refuse la saisie sans validation dans l'outil. Elle propose : soit la validation arrive avant gel exceptionnel validé par Marc, soit février. Le 24, le chef n'a pas signé. Les HS passent en février. Lina a tenu le calendrier. Elle n'a pas « bloqué l'opérationnel » : elle a empêché un contentieux de heures non validées."),
        h("Erreurs fréquentes du gestionnaire de paie junior"),
        t("Vivre le mois dans le désordre (tout le 24). Traiter la sortie du 31 le 31 au soir. Oublier que janvier change les plafonds. Répondre aux réclamations avant d'avoir le bulletin sous les yeux. Laisser un net négatif partir."),
        h("Situations particulières"),
        t("Si Marc est absent le 24 : la clôture n'est pas « Lina décide ». Délégation écrite, ou report de paiement selon pouvoir interne, ou binôme. Un junior n'improvise pas un responsable paie."),
        h("Mise en pratique"),
        t("À partir du journal : (1) citez 4 actes que Lina peut mener seule ; (2) 4 actes qui exigent Marc ; (3) rédigez le mail de relance HS du 18 janvier, factuel, sans accusation ; (4) dites quoi faire si le SMIC horaire d'un temps partiel apparaît à 11,80 € dans le calcul d'essai."),
        h("Correction détaillée"),
        t("1. Seule : relances, ouverture de dossier, checklist, saisie selon pièces, contrôles de premier niveau, préparation des fichiers, journal d'incidents.\n2. Marc : DSN dépôt, exception de gel, solde complexe, net négatif, paramétrage, interprétation CCN de maintien, incident RGPD.\n3. Mail : objet « Variables paie janvier — gel 18/01 12h — HS atelier » ; rappeler la date, lister les noms sans HS, indiquer la conséquence (pas de paiement des HS en janvier, report février), proposer un créneau de 30 min, copie Marc.\n4. 11,80 € < 12,02 € SMIC horaire métropole au 01/01/2026 (URSSAF). Bloquer, vérifier temps de travail et base, ne pas clôturer, alerter Marc. Ce n'est pas « un arrondi »."),
      ],
    }),
    quizLesson({
      title: "Quiz — Le métier de gestionnaire de paie",
      description: "Vérifier la compréhension du rôle, des limites et du cycle.",
      passing_score: 70,
      questions: [
        q({
          question: "Quelle est la meilleure définition opérationnelle du métier ?",
          options: [
            "A. Éditer des bulletins le plus vite possible grâce au logiciel",
            "B. Transformer des faits sociaux en bulletin, paiement, déclaration et écritures justifiables",
            "C. Conseiller les salariés sur leur déclaration d'impôt personnelle",
            "D. Remplacer le juriste sur les ruptures complexes",
          ],
          correct: 1,
          explanation:
            "La paie relie le fait, la règle, le calcul, le paiement, la DSN et la comptabilité. La vitesse sans justification n'est pas un objectif. Le PAS n'est pas un conseil fiscal personnalisé. Les ruptures complexes sortent de l'autonomie junior.",
        }),
        q({
          question: "Un manager demande d'avancer un salaire de 3 jours. Que fait le junior ?",
          options: [
            "A. Il vire immédiatement : le salarié est prioritaire",
            "B. Il refuse sèchement sans proposer de process",
            "C. Il vérifie s'il existe une procédure d'acompte et escalade ; il ne crée pas un paiement hors cadre",
            "D. Il diminue les cotisations pour augmenter le net",
          ],
          correct: 2,
          explanation:
            "Un acompte peut exister en politique interne. Il n'est jamais improvisé. Modifier les cotisations pour « arranger » un net est une faute.",
        }),
        q({
          question: "En janvier 2026, le PMSS mensuel à retenir pour les cotisations de la période d'activité est :",
          options: [
            "A. 3 925 € (ancien chiffre parfois encore cité)",
            "B. 4 005 € (arrêté du 22 décembre 2025, URSSAF)",
            "C. 3 666 €",
            "D. Le PMSS n'existe plus depuis la DSN",
          ],
          correct: 1,
          explanation:
            "URSSAF, plafonds au 01/01/2026 : 4 005 € par mois, 48 060 € par an. Recopier un plafond N-1 est une erreur classique de janvier.",
        }),
        q({
          question: "Quelle affirmation sur la rémunération cible de 36 000 € brut est correcte ?",
          options: [
            "A. Elle est garantie à la fin de cette formation",
            "B. Elle est un objectif de marché possible, jamais une garantie ni un effet automatique du parcours",
            "C. Elle correspond au SMIC annuel 2026",
            "D. Elle impose le statut cadre",
          ],
          correct: 1,
          explanation:
            "Le parcours prépare des compétences recherchées sur certaines offres, y compris autour de 36 k€. Aucun salaire ni statut n'est acquis. Le SMIC mensuel 1 823,03 € n'équivaut pas à 36 k€. Le cadre dépend de la classification employeur.",
        }),
        q({
          question: "Qui dépose en principe la DSN dans la simulation Atelier Nord Paie ?",
          options: [
            "A. Lina seule, dès que le calcul est vert",
            "B. Le manager d'atelier",
            "C. Marc, le responsable, après revue ; Lina prépare et assiste",
            "D. L'URSSAF, automatiquement",
          ],
          correct: 2,
          explanation:
            "Un junior prépare et contrôle. Le dépôt engage l'employeur. Dans la simulation, Marc dépose. En entreprise réelle, suivez la délégation écrite.",
        }),
        q({
          question: "Un bulletin envoyé au mauvais destinataire interne est surtout :",
          options: [
            "A. Un incident de données personnelles à signaler selon la procédure",
            "B. Sans importance s'il s'agit d'un collègue RH",
            "C. Une occasion d'en rire pour détendre la clôture",
            "D. Un problème uniquement si le net dépasse 3 000 €",
          ],
          correct: 0,
          explanation:
            "Rémunération = donnée personnelle. Homonymie ou RH « de confiance » ne lèvent pas l'incident. Le montant est indifférent.",
        }),
        q({
          question: "Quelle tâche reste hors autonomie d'un gestionnaire de paie junior ?",
          options: [
            "A. Relancer un manager pour des variables",
            "B. Contrôler un brut et un net après calcul",
            "C. Inventer le taux de maintien maladie d'une CCN non lue",
            "D. Préparer un journal d'incidents",
          ],
          correct: 2,
          explanation:
            "Les CCN ne s'inventent pas. Relances, contrôles, documentation sont le cœur du junior. Le maintien se lit dans le texte ou se fait sous revue.",
        }),
        q({
          question: "Le gel des variables sert à :",
          options: [
            "A. Empêcher les salariés de poser des congés",
            "B. Figurer une date après laquelle la production de paie du mois n'intègre plus de nouvelles variables, sauf exception validée",
            "C. Remplacer la DSN",
            "D. Permettre de modifier les taux URSSAF sans source",
          ],
          correct: 1,
          explanation:
            "Sans gel, la clôture n'existe pas. Les exceptions passent par le responsable. Ce n'est ni un droit disciplinaire, ni un canal déclaratif.",
        }),
        q({
          question: "Quel interlocuteur pour un écart de lettrage entre le compte de dettes sociales et l'avis de versement ?",
          options: [
            "A. Uniquement le salarié",
            "B. Paie et comptabilité, avec les bordereaux / DSN",
            "C. Uniquement le recruteur",
            "D. La médecine du travail",
          ],
          correct: 1,
          explanation:
            "Rapprochement charges / dettes / versements : binôme paie-comptabilité. Pas le salarié, pas le recrutement.",
        }),
        q({
          question: "Cette formation délivre :",
          options: [
            "A. Un titre RNCP de gestionnaire de paie",
            "B. Un diplôme d'État",
            "C. Une certification officielle Sage ou Silae",
            "D. Une attestation LOU Academy de réussite du parcours, distincte d'un titre réglementé",
          ],
          correct: 3,
          explanation:
            "L'attestation certifie le parcours dans la plateforme. Elle n'est ni RNCP, ni diplôme d'État, ni certification d'éditeur.",
        }),
      ],
    }),
  ],
};
