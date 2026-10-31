import { pack, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 0,
  title: "Comprendre le métier de consultant junior Workforce & Organization",
  description:
    "Situer le cabinet, les grades, l'équipe et le client ; tenir livrables, qualité, confidentialité et économie de mission ; simuler une journée et une première semaine — cas fil rouge Groupe Nova Services.",
  lessons: [
    pack({
      title: "Le cabinet, les grades et la posture junior",
      description:
        "Distinguer analyste, consultant, senior et manager, cartographier l'équipe et le client, et comprendre délais, facturation et limites du junior.",
      minutes: 6,
      objectifs:
        "À la fin de cette leçon, vous savez dire ce qu'un cabinet Workforce & Organization vend vraiment, distinguer analyste, consultant junior, senior et manager, nommer vos interlocuteurs côté cabinet et côté client, et énoncer ce que vous ne décidez jamais seul — y compris en matière de tarif, de GEPP ou d'avis social.",
      theorie:
        "Un cabinet Workforce & Organization vend du temps, une méthode et un jugement : diagnostiquer une organisation, chiffrer des options d'effectifs ou de structure, aider un comité à décider. Ce n'est ni le RH du client, ni un cabinet d'avocats, ni l'éditeur du SIRH. Le client décide. Vous proposez ; vous n'engagez pas l'entreprise sur une réorganisation, une GEPP ou un avis aux instances.\n\nLes grades : l'analyste collecte et produit sous contrôle. Le consultant junior tient un lot (entretiens, morceau de diagnostic, première version, alerte qualité). Le senior tient le fil, challenge et gère le quotidien client. Le manager cadre le périmètre, porte le risque commercial, anime le sponsor. Un junior qui tranche comme un manager sort de son rôle ; un junior qui laisse passer un faux chiffre aussi.\n\nAutour de vous : équipe cabinet (manager, senior, juniors, parfois un expert) et équipe client (sponsor DRH, DG ou DAF, copil, relais métier). Les délais sont le produit : un comité dans quinze jours n'attend pas que vous « compreniez tout ». Le cabinet vend des jours en régie ou un forfait. Votre temps a un coût ; retravail et dérive de périmètre se lisent sur la marge. Vous ne négociez pas le tarif ; vous tenez le temps et le livrable. Posture : factuel, discret, curieux, respectueux de la relecture.",
      methode:
        "Dès qu'une mission vous est confiée, écrivez une fiche d'une page avant la première réunion client :\n1. Quel résultat le sponsor attend à quelle date (pas « améliorer la RH ») ?\n2. Qui est le manager cabinet, le senior, votre lot, le sponsor client, le copil ?\n3. Régie ou forfait — et qui, chez vous, parle d'argent ?\n4. Qu'est-ce qui est déjà cadré (périmètre, sites, données, instances) et qu'est-ce qui ne l'est pas ?\n5. Quelle est votre limite : vous collectez, structurez, proposez ; vous ne signez pas, vous n'inventez pas un délai légal, vous n'annoncez pas un salaire.\n\nEnsuite, vous demandez le RACI interne du cabinet (qui relit avant envoi client) et vous le respectez. Un e-mail envoyé « pour aller vite » sans relecture n'est pas de l'autonomie, c'est un risque.",
      noteText:
        "Certaines offres juniors visent environ 36 000 € brut annuels, parfois davantage : c'est un objectif de marché, jamais une garantie d'embauche ni de rémunération. Cinq heures de parcours ne remplacent pas l'expérience d'une mission réelle, ni un titre professionnel.",
      exemple:
        "Le DRH du Groupe Nova Services (1 200 salariés, fictif) appelle : « Il nous faut un plan Workforce pour vendredi, le COMEX veut des chiffres, vous êtes consultants. » Sans rôle clair, un junior sort un tableau de turnover, un autre promet une GEPP « conforme », un troisième envoie des slides au COMEX sans relecture. Trois fautes : livrable sans question de décision, rôle de juriste usurpé, chaîne de qualité cassée.\n\nLe même brief, tenu : vous reformulez le résultat (« options d'effectifs et d'organisation pour le COMEX de J+15, sur le périmètre des 1 200, données pédagogiques du client »), vous situez grades et lots, vous demandez le manager pour le cadrage commercial, et vous refusez de qualifier une obligation légale sans vérification du texte.",
      extra: [
        code(`GRADES — repère pédagogique (les titres varient selon les cabinets)
Grade              Ce que l'on attend                         Ce que l'on ne vous demande pas
Analyste           Collecte, tableaux, slides sous contrôle   Tenir le client seul, vendre la suite
Consultant junior  Lot cadré, entretiens, 1re version         Trancher le périmètre, le tarif, l'avis social
Senior             Fil de mission, qualité, quotidien client  Porter seul le risque commercial du cabinet
Manager            Cadrage, sponsor, marge, suite de mission  Déléguer la relecture « parce que le junior gère »

Équipe type d'une mission W&O de 8 semaines (exemple, pas une norme)
Manager  1 j / semaine   Senior  3 j / semaine   Junior  4 à 5 j / semaine
Le mix varie. Ce qui ne varie pas : le junior n'invente pas le pricing.`),
      ],
      erreurs:
        "Se présenter comme « le RH du client ». Confondre urgence du sponsor et mandat écrit. Envoyer un livrable au client sans relecture senior. Promettre 36 000 € ou une embauche. Inventer un délai CSE ou un seuil GEPP « pour rassurer ». Croire que cinq heures de formation autorisent à piloter une mission autonome.",
      particuliers:
        "En interne (équipe organisation / people analytics d'un groupe), vous n'émettez pas de facture, mais la chaîne de relecture et la confidentialité restent. En staff augmentation, vous êtes logé chez le client : vous restez salarié du cabinet, pas du DRH. En petite mission solo junior « pour apprendre » : le manager reste joignable ; l'absence de senior dans la pièce n'élargit pas vos droits.",
      exercice:
        "Nova Services vous accueille lundi. Le DRH dit : « Vous êtes consultant, donc vous validez le plan d'effectifs, le message CSE et le tarif de la mission, on n'a pas le temps de passer par votre manager. » En cinq lignes : (1) ce que vous acceptez de faire cette semaine ; (2) ce que vous refusez de valider ; (3) à qui vous parlez dans les 24 heures.",
      correction:
        "1. Vous acceptez de clarifier le besoin, de poser la question de décision du COMEX, de lancer la collecte et les premiers entretiens, de produire une note de cadrage relue.\n2. Vous ne validez ni le plan d'effectifs (décision client), ni le message aux instances (avis social / communication employeur), ni le tarif (manager cabinet). L'urgence n'est pas un mandat.\n3. Dans les 24 heures : votre manager (périmètre et argent), votre senior (qualité et planning), le DRH pour reformuler le livrable attendu. Vous tracez le refus de « valider sans filière ».",
    }),
    pack({
      title: "Livrables, qualité, confidentialité et économie de mission",
      description:
        "Savoir ce que l'on livre, à quelle qualité, sous quelles règles de discrétion, et comment le temps consommé pèse sur la mission.",
      minutes: 5,
      objectifs:
        "Vous savez nommer les livrables d'une mission W&O, appliquer une exigence de qualité minimale (source, date, définition, relecture), tenir la confidentialité y compris sur les données personnelles, et relier votre emploi du temps à l'économie de la mission — sans prétendre fixer le prix.",
      theorie:
        "Une mission se juge aux livrables, pas aux heures en salle. En W&O, les objets reviennent : note de cadrage, demande de données, guide d'entretien, diagnostic (faits, hypothèses, implications), annexes, slides de comité, plan d'options, relevé de décisions. Un livrable a un destinataire, une date, une question. Un dump Excel n'en est pas un.\n\nLa qualité n'est pas du « joli ». Chaque chiffre a une source, une date, une définition (ETP, tête, CDI seulement ?). Constaté, estimé et inconnu sont marqués. Les données RH de ce parcours sont pédagogiques : elles n'inventent pas un benchmark réel. Avant envoi client : relecture senior. Une slide, un message. L'annexe porte le détail ; le comité porte la décision.\n\nLa confidentialité est le métier. Effectifs, salaires, départs, organigrammes, noms : rien n'en sort (train, cantine, LinkedIn, mail perso). Le junior n'est pas juriste RGPD, mais il ne bricole pas : pas de nominatif hors espace mission, pas de fichier « pour le week-end chez soi ». Un NDA client s'applique à vous.\n\nL'économie tient en trois lignes. Des jours sont vendus (régie ou forfait). Retravail et analyse « en plus » non cadrée mangent la marge ou le calendrier. Vous ne discutez pas le taux. Vous tenez un timesheet honnête et vous alertez tôt.",
      methode:
        "Avant de produire, écrivez : destinataire, décision visée, date, format (note / slides / annexe), qui relit.\nPuis :\n1. Qualité — source, date, définition sur chaque indicateur ; version et auteur sur le fichier.\n2. Chaîne — brouillon junior → senior → (si besoin) manager → client. Jamais l'inverse.\n3. Confidentialité — travail dans l'espace mission ; pas de capture d'écran dans un chat perso ; pas de nom dans un objet d'e-mail trop large.\n4. Économie — en fin de journée : jours consommés / jours prévus sur votre lot ; ce qui reste à livrer ; alerte si l'écart dépasse une journée.\n5. Demande hors périmètre — vous notez, vous ne dites pas oui. Le manager décide s'il faut un avenant ou un refus poli.",
      noteText:
        "Les chiffres RH utilisés dans ce parcours (turnover, pyramide, ETP) sont fictifs et pédagogiques. En mission réelle, vous datez, vous sourcez, et vous n'inventez pas un « taux de marché » pour faire sérieux.",
      exemple:
        "Chez Nova Services, un junior envoie au DRH, le dimanche soir, un Excel nominatif de salaires « pour avancer », avec en objet « plan social — confidentiel ». Le fichier part vers une mauvaise adresse. Deux fautes graves : donnée personnelle hors canal, intitulé qui préjuge une décision que personne n'a prise. Le même travail, tenu : agrégats non nominatifs dans l'espace mission, objet « annexe effectifs — version interne cabinet », envoi après relecture, aucun mot « plan social » tant que ce n'est pas le mandat.",
      extra: [
        code(`ÉCONOMIE DE MISSION — lecture junior (schéma pédagogique, pas un tarif réel)
Mission Nova (fictif) : 8 semaines, forfait, mix manager / senior / junior.
Votre lot : diagnostic effectifs + première structure d'options, 20 jours.

Consommé semaine 1 : 5 jours. Livrable : note de cadrage + demande de données.
Reste : 15 jours pour entretiens, diagnostic, slides COMEX.

Alerte : le DRH demande « au passage » une cartographie des compétences de 1 200 personnes.
Ce n'est pas « être serviable ». C'est un autre lot. Vous notez, vous remontez, vous n'emballez pas.`),
      ],
      erreurs:
        "Livrer un fichier sans définition d'ETP. Envoyer au client la version « draft interne ». Travailler un fichier nominatif sur une machine perso. Dire oui à chaque « petite analyse en plus ». Remplir le timesheet au feeling le vendredi. Qualifier une réorganisation de « plan social » dans un objet d'e-mail.",
      particuliers:
        "En régie, le client voit parfois vos jours : la transparence n'autorise pas à facturer du flou, elle l'interdit davantage. En forfait, le dérapage est d'abord le problème du cabinet : alerter tôt est une loyauté, pas une faiblesse. Si un CSE ou un avocat client entre dans la boucle, vous ne devenez pas juriste : vous suivez la consigne manager et vous vérifiez les textes avant toute phrase d'obligation.",
      exercice:
        "Le senior est en congé deux jours. Le RRH d'une région Nova vous demande « le fichier brut des salaires de son site, par mail perso, pour préparer le COMEX ». Que faites-vous, dans l'ordre, en quatre actes ?",
      correction:
        "1. Vous n'envoyez pas. Mail perso + fichier brut salarial = hors canal et hors agrégat.\n2. Vous proposez l'espace mission et un extrait agrégé (effectifs, masses, pas de nominatif) si le mandat le couvre.\n3. Vous en informez le manager (senior absent) : destinataire, demande, refus du canal.\n4. Vous tracez. Le COMEX n'est pas un motif pour casser confidentialité et chaîne. L'absence du senior n'élargit pas vos droits, elle augmente le devoir d'alerte.",
    }),
    pack({
      title: "Journée type et première semaine de mission",
      description:
        "Prioriser une journée de junior et simuler les cinq premiers jours chez Groupe Nova Services.",
      minutes: 5,
      objectifs:
        "Vous visualisez le rythme réel d'un junior en mission, vous savez prioriser sans tout abandonner quand le client « crie », et vous savez ce qu'une première semaine doit produire — et ce qu'elle ne doit pas promettre.",
      theorie:
        "Un consultant junior ne fait pas « de la stratégie » de 9 h à 18 h. Il fait un portefeuille de micro-actes : nettoyer une base, relancer une donnée, mener deux entretiens, rédiger trois slides, se faire recaler par le senior, tenir le timesheet. Si vous n'imposez pas des plages, la journée devient une suite d'interruptions client, et le livrable du jeudi n'existe pas.\n\nLa journée se structure. Tôt : données et production, quand personne n'interrompt. Milieu de journée : entretiens et ateliers — jamais enchaînés sans notes. Fin de journée : synthèse, relecture, log de temps, prochain acte daté. Un lot sans prochain acte daté est un lot qui meurt.\n\nLa première semaine n'est pas une semaine de diagnostic achevé. Elle sert à cadrer : comprendre la question de décision, obtenir les accès, poser la demande de données, rencontrer le sponsor et trois relais, écrire une note de cadrage (périmètre, hors-périmètre, hypothèses, planning, risques, RACI). Livrer un « plan Workforce définitif » le vendredi de la semaine 1 est une faute, pas un exploit. Cinq heures de formation ne font pas non plus une semaine de mission : ici, vous apprenez la séquence, pas l'improvisation autonome.\n\nLe fil rouge de tout le parcours : Groupe Nova Services, 1 200 salariés, fictif. Croissance, turnover, départs à la retraite, métiers en tension, RH fragmentée. Vous n'êtes pas le DRH. Vous aidez à décider.",
      methode:
        "Chaque matin, trois lignes dans le carnet de mission : livrable de la journée ; acte irréversible (entretien, envoi client, délai de donnée) ; alerte à remonter.\nChaque soir : timesheet ; fichiers nommés (date, version, contenu) ; mail de 5 lignes au senior si un risque a bougé.\nSemaine 1, dans l'ordre : kick-off interne cabinet → kick-off client → accès et demande de données → 4 à 6 entretiens de cadrage → note de cadrage relue → plan de la semaine 2. Vous ne partez pas en « analyse complète des 1 200 » avant que le cadrage soit accepté.",
      noteText:
        "La simulation ci-dessous est pédagogique. Les volumes, délais et tensions de Nova sont inventés pour s'entraîner, pas pour décrire un groupe réel ni un standard de staffing.",
      exemple:
        "Mardi 11 h, le DG de Nova débarque dans la salle : « Montrez-moi le turnover par site, là, maintenant. » Un junior improvise un chiffre lu la veille, faux de 4 points, cité ensuite en COMEX. Le même junior, tenu, dit : « Je vous sors la définition et la source en trente minutes, après un passage senior ; je ne vous donne pas un ordre de grandeur non sourcé. » Le DG grogne. Le cabinet garde sa crédibilité.",
      extra: [
        code(`SIMULATION — Semaine 1, mission Nova Services (fictif, 1 200 salariés)
Lundi
  09:00  Kick-off interne (manager, senior, vous) : question de décision, lot, tabous.
  11:00  Kick-off client (DRH sponsor, DAF, deux RRH). Vous prenez note, vous ne « vendez » pas.
  14:00  Accès SIRH / fichiers. Demande de données écrite (effectifs, ETP, départs, âges, métiers, sites).
  17:00  Carte d'interlocuteurs. Timesheet.

Mardi
  09:00  Nettoyage d'un premier extrait (définitions : tête vs ETP, CDI vs tous contrats).
  11:00  Entretien RRH région Ouest — turnover et vacance de responsables d'exploitation.
  14:30  Entretien directeur Facility.  16:30  Point senior : hypothèses, pas encore de slides COMEX.

Mercredi
  09:00  Deux entretiens plateaux Relation client. Le DRH veut « déjà un organigramme cible ».
  14:00  Vous refusez l'organigramme cible ; vous proposez la note de cadrage pour vendredi.
  16:00  Relance données pyramide des âges — fichier incomplet.

Jeudi
  09:00  Production note de cadrage (périmètre, hors-périmètre, données manquantes, planning).
  15:00  Relecture senior.  17:30  Le DG demande le turnover « tout de suite » : vous sourcez, vous ne devinez pas.

Vendredi
  10:00  Restitution cadrage, 45 min. Décision visée : options d'organisation et d'effectifs pour un COMEX à J+15.
  14:00  Plan semaine 2 (entretiens diagnostic, pas encore de GEPP ni de chiffrage social).
  16:30  Timesheet, risques, lot « cartographie 1 200 compétences » resté hors périmètre.

Portefeuille : 1 mission, 1 lot, 0 promesse légale, 0 chiffre non défini.`),
      ],
      erreurs:
        "Tout traiter dans l'ordre des e-mails du DRH. Inventer un turnover pour ne pas dire « je vérifie ». Produire l'organisation cible le mercredi de la semaine 1. Sauter le kick-off interne. Oublier le timesheet. Transformer la première semaine en audit clandestin des salaires nominatifs.",
      particuliers:
        "Kick-off décalé de trois jours : vous avancez sur le cadrage interne et le canevas de demande de données, vous n'inventez pas les faits. Sponsor absent : vous ne prenez pas le RRH pour sponsor. Mission 100 % à distance : les entretiens existent encore, plus courts, plus préparés ; la confidentialité du fond d'écran et du casque aussi.",
      exercice:
        "Dans la simulation, le mercredi le DRH veut « déjà un organigramme cible ». Que répondez-vous, et que livrez-vous vendredi à la place ?",
      correction:
        "Vous ne livrez pas d'organigramme cible en semaine 1 : vous n'avez ni diagnostic partagé, ni critères (span, métiers critiques, gouvernance RH), ni arbitrage sponsor. Vous dites : « L'organisation cible est un livrable de la phase d'options, après les faits. Vendredi, vous avez une note de cadrage : question de décision, périmètre, données, planning jusqu'au COMEX, hors-périmètre (GEPP juridique, cartographie exhaustive, message instances). » Vous proposez un schéma de l'organisation actuelle tel que compris — factuel, lacunaire, sourcé — pas une cible. C'est de la tenue de mission, pas de la lenteur.",
    }),
    quizLesson({
      title: "Quiz — Métier, cabinet et première semaine",
      description:
        "Vérifier que vous situez les grades, la posture, la qualité, la confidentialité et l'économie de mission.",
      passing_score: 70,
      minutes: 4,
      questions: [
        q({
          question:
            "Quelle phrase décrit le mieux le consultant junior, par rapport au manager, dans un cabinet W&O ?",
          options: [
            "A. Il cadre le périmètre, négocie le tarif et porte le risque commercial du cabinet",
            "B. Il tient un lot cadré (entretiens, première version, alerte qualité) sous relecture, sans signer à la place du client",
            "C. Il valide les avis sociaux, la GEPP et les messages CSE parce qu'il est « RH »",
            "D. Il remplace le senior dès que celui-ci est en congé, y compris pour envoyer un fichier salarial nominatif",
          ],
          correct: 1,
          explanation:
            "Le manager porte cadrage, tarif et risque. Le junior tient un lot sous relecture. Il n'est ni juriste, ni décideur client. L'absence du senior n'élargit pas ses droits.",
        }),
        q({
          question:
            "Une offre d'emploi « consultant junior W&O, 36 000 € » apparaît pendant le parcours. Que retenez-vous ?",
          options: [
            "A. Le parcours garantit ce salaire à la sortie",
            "B. C'est un ordre de grandeur de marché pour certaines offres, pas une garantie d'embauche ni de rémunération",
            "C. Cinq heures suffisent à justifier ce niveau en entretien comme une expérience de mission autonome",
            "D. L'attestation de la plateforme vaut titre professionnel et négocie le salaire à votre place",
          ],
          correct: 1,
          explanation:
            "36 000 € est un objectif de marché, jamais une garantie. Cinq heures ne remplacent pas une mission réelle. L'attestation de réussite sur la plateforme n'est pas un titre professionnel.",
        }),
        q({
          question:
            "Le DRH de Nova demande le fichier brut des salaires de son site sur sa boîte personnelle, « pour le COMEX ». Que faites-vous ?",
          options: [
            "A. Vous envoyez : le destinataire est le client, donc c'est autorisé",
            "B. Vous envoyez en copiant votre manager, pour vous couvrir",
            "C. Vous refusez le canal et le nominatif, proposez l'espace mission et un agrégat si le mandat le couvre, et vous alertez le manager",
            "D. Vous déposez le fichier sur un lien public le temps du week-end",
          ],
          correct: 2,
          explanation:
            "Un COMEX n'autorise ni le mail perso ni le fichier salarial brut. Canal prévu, agrégat, alerte manager. Un lien public aggrave la faute.",
        }),
        q({
          question:
            "En économie de mission, que doit faire le junior si le client demande « au passage » une cartographie des compétences des 1 200 personnes ?",
          options: [
            "A. Dire oui : c'est de la qualité de service, les jours forfaitaires sont déjà vendus",
            "B. Noter la demande, ne pas s'engager, remonter au manager (avenant ou refus) : c'est un autre lot",
            "C. Commencer le week-end pour « gagner du temps » sans le dire",
            "D. Augmenter seul le tarif de la mission dans le prochain e-mail",
          ],
          correct: 1,
          explanation:
            "Une cartographie de 1 200 personnes n'est pas un à-côté. Le junior ne dit ni oui ni le prix. Il remonte. Le forfait ne rend pas le hors-périmètre gratuit.",
        }),
        q({
          question:
            "Semaine 1 chez Nova : le DRH veut « déjà l'organigramme cible » le mercredi. Quelle tenue est la bonne ?",
          options: [
            "A. Livrer une cible le mercredi pour montrer de l'impact",
            "B. Inventer un turnover par site pour alimenter la cible",
            "C. Refuser la cible trop tôt et livrer vendredi une note de cadrage (question de décision, périmètre, données, planning)",
            "D. Annuler la mission jusqu'à ce que le DRH suive un autre cabinet",
          ],
          correct: 2,
          explanation:
            "La semaine 1 produit le cadrage, pas la cible. Inventer un chiffre détruit la crédibilité. Annuler n'est pas une méthode. La cible vient après les faits.",
        }),
      ],
    }),
  ],
};
