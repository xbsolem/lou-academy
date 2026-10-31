import { lesson, h, t, note, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 1,
  title: "Comprendre le besoin en recrutement",
  description:
    "Apprendre à identifier l'origine d'un besoin, le cadrer avec le manager, distinguer ce que le recruteur junior vérifie de ce que RH et direction décident, puis restituer un brief utilisable.",
  lessons: [
    lesson({
      title: "Origine d'un besoin de recrutement",
      description:
        "Distinguer création de poste, remplacement, accroissement d'activité et mobilité interne, et en déduire les conséquences opérationnelles.",
      minutes: 22,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez nommer l'origine d'un besoin de recrutement, expliquer pourquoi cette origine change le cadrage, et identifier les risques propres à chaque cas.\n\nVous savez aussi formuler, en une phrase professionnelle, ce que le manager « demande » et ce que l'organisation « a réellement besoin de résoudre »."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Un besoin de recrutement n'est pas une commande de « quelqu'un ». C'est une réponse à un problème d'organisation : une charge qui n'est plus tenue, une compétence absente, un départ, une activité nouvelle, ou un mouvement interne. Tant que l'origine n'est pas posée, le recruteur travaille à l'aveugle. Il sourcera le mauvais profil, vendra le mauvais message aux candidats, et comparera les dossiers à une référence qui n'existe peut-être plus.\n\nQuatre origines reviennent dans la pratique française des entreprises, des cabinets et des agences d'intérim.\n\nLa création de poste apparaît lorsqu'une activité, un client, un outil ou un volume nouveau ne rentre plus dans les emplois existants. Il n'y a pas d'occupant précédent. Le risque principal est le poste « fourre-tout » : plusieurs managers profitent de l'ouverture pour ajouter des missions, et le profil devient incohérent.\n\nLe remplacement suit un départ : démission, retraite, licenciement, fin de CDD ou de mission, absence longue. Il existe un historique. Le risque est de cloner la personne plutôt que le besoin, ou à l'inverse de « profiter du départ » pour tout changer sans le dire. Dans les deux cas, le brief est faux.\n\nL'accroissement d'activité concerne le même métier, avec plus de volume. Le risque est de recruter un clone sans avoir examiné l'organisation : heures supplémentaires, sous-traitance, intérim, amélioration de process, répartition entre collègues. Recruter n'est pas toujours la première réponse ; c'est parfois la plus coûteuse.\n\nLa mobilité interne consiste à pourvoir le besoin par une personne déjà présente, ce qui crée souvent un autre besoin en cascade. Le recruteur junior ne décide pas si la mobilité a lieu. Il vérifie si elle a été envisagée, car c'est souvent une politique interne, et dans certains cas une alerte juridique à transmettre aux RH (priorité de réembauche après licenciement économique, salarié à temps partiel souhaitant un temps plein). Ces alertes ne se tranchent pas seul : elles se signalent.\n\nComprendre l'origine permet ensuite de choisir le bon rythme, le bon canal, le bon argumentaire candidat et le bon niveau d'exigence. Un remplacement urgent d'un technicien de ligne n'est pas cadré comme la création d'un poste de responsable digital dans une ETI de services."
        ),
        h("Méthode opérationnelle"),
        t(
          "Dès la première demande, posez quatre questions dans cet ordre, avant toute rédaction d'annonce.\n\nPremièrement : quel événement a rendu ce besoin visible ? Faites nommer le fait (départ, pic de charge, nouveau contrat, réorganisation). Deuxièmement : le besoin est-il déjà validé (budget, effectif, intitulé) ou s'agit-il d'une intention du manager ? Troisièmement : une solution interne a-t-elle été regardée (répartition, intérim, mobilité) ? Quatrièmement : que se passe-t-il concrètement si le poste n'est pas pourvu dans 30, 60 ou 90 jours ?\n\nInterlocuteurs : le manager demandeur, le N+2 si le besoin traverse plusieurs équipes, les RH pour le cadre (budget, statut, mobilité, alertes légales), éventuellement le contrôle de gestion ou la direction dans une PME. Documents à demander : organigramme à jour, fiche de poste existante s'il y en a une, planning de charge, motif de départ si remplacement. Contrôle : vous ne lancez pas un sourcing tant que l'origine n'est pas écrite en une phrase validée par le manager."
        ),
        note(
          "Distinguez dès maintenant quatre niveaux. Obligation légale : vous n'écartez personne d'un recrutement pour un critère interdit ; vous alertez les RH sur les priorités légales que vous identifiez. Recommandation d'autorité : hors sujet à ce stade du brief. Politique interne : mobilité prioritaire, gel des embauches, validation d'un comité. Bonne pratique : écrire l'origine du besoin avant de parler compétences."
        ),
        h("Exemple professionnel"),
        t(
          "PME industrielle de 85 personnes, Loire-Atlantique. Le responsable d'atelier vous écrit : « Il me faut un technicien de maintenance comme Patrick, il s'en va à la retraite dans huit semaines. »\n\nVous ne répondez pas « j'ouvre l'annonce ». Vous posez l'origine : remplacement pour départ à la retraite. Vous demandez ce que Patrick faisait réellement (dépannage, préventif, pièces, astreintes, relation production), ce qui doit rester, ce qui peut être réparti, et si un opérateur interne a déjà été identifié. Vous découvrez que 30 % du temps de Patrick était de l'administratif stock, que le manager veut « quelqu'un plus à l'aise avec la GMAO », et qu'aucune mobilité n'a été formalisée. L'origine « remplacement » est donc vraie, mais le besoin n'est plus le clone de Patrick. Sans ce cadrage, vous auriez sourcé un profil identique, trop cher, et trop rare."
        ),
        code(
          `MANAGER : Il me faut un technicien comme Patrick. Retraite dans 8 semaines.
RECRUTEUR : D'accord. On est sur un remplacement. Avant de parler profil, je recale le besoin.
           Qu'est-ce que Patrick fait réellement cette année, semaine type ?
MANAGER : Dépannage, un peu de préventif, et il gère le stock pièces.
RECRUTEUR : Sur ces trois blocs, qu'est-ce qui doit rester dans le poste ?
            Qu'est-ce qui peut aller ailleurs ? Y a-t-il un interne possible ?
MANAGER : Le stock, on peut le donner à l'appro. En interne, non, personne n'a le niveau électrique.
RECRUTEUR : Donc le besoin, c'est un remplacement recentré sur la maintenance, avec GMAO,
            sans le stock. Je vous restitue ça par écrit demain pour validation.`
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "La première erreur est d'accepter le besoin comme une commande de personne : « un profil comme X ». La deuxième est de traiter toute demande comme un remplacement, y compris quand le manager veut en réalité créer un poste. La troisième est d'ignorer la mobilité interne par peur de « perdre » une mission. La quatrième est de lancer une annonce pour « avancer » alors que le budget n'est pas confirmé. La cinquième est de ne pas écrire l'origine : trois semaines plus tard, personne ne se souvient pourquoi le poste existe."
        ),
        h("Situations particulières"),
        t(
          "En cabinet, le client verbalise souvent un profil, pas un besoin. Votre valeur est de reformuler l'origine avant d'accepter le mandat. En intérim, l'origine est souvent un accroissement ou un remplacement court : le brief doit malgré tout distinguer urgence de production et vrai besoin de compétence. En startup, on crée des postes autour de personnes. Le risque est un intitulé prestigieux sans missions stables. En ETI, un besoin peut naître d'une réorganisation non encore annoncée : vous ne communiquez rien à l'extérieur tant que RH et direction n'ont pas cadré le message interne."
        ),
        h("Mise en pratique"),
        t(
          "Un directeur commercial d'une société de services (120 personnes) vous dit : « Recrutez-moi deux business developers, on a gagné un compte national, l'équipe actuelle n'y arrivera pas. » Rédigez en dix lignes : (1) l'origine du besoin que vous identifiez, (2) les trois questions de vérification à poser avant tout sourcing, (3) l'alerte que vous transmettez aux RH si un commercial interne a postulé de façon informelle."
        ),
        h("Correction détaillée"),
        t(
          "L'origine la plus probable est un accroissement d'activité (nouveau compte), éventuellement mixte avec une création si le type de mission n'existait pas. Ce n'est pas un remplacement, sauf si des départs sont cachés dans la demande.\n\nLes trois questions : le compte national change-t-il vraiment le volume et le type de travail, ou l'équipe actuelle est-elle mal organisée ? Le budget de deux CDI est-il validé, ou s'agit-il d'une intention ? Une répartition, un CDD, de l'intérim commercial ou une mobilité interne ont-ils été examinés ?\n\nL'alerte RH : un interne qui manifeste un intérêt n'est pas « un candidat comme un autre » au regard de la politique interne. Vous ne promettez rien, vous ne l'écartez pas seuls, vous formalisez l'information aux RH pour qu'elles tranchent le process interne avant l'ouverture externe. Vous n'inventez pas un droit à la mobilité : vous évitez de démarrer un sourcing externe en contradiction avec une règle interne déjà posée."
        ),
      ],
    }),

    lesson({
      title: "Validation budgétaire et lecture de l'organisation",
      description:
        "Savoir ce que le recruteur junior vérifie, ce qu'il documente, et ce que seules les RH ou la direction décident.",
      minutes: 22,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez distinguer vérification, recommandation et décision. Vous savez lire un organigramme, un effectif et un budget de poste au niveau attendu d'un junior. Vous savez stopper ou suspendre un process quand la validation n'est pas là, sans bloquer inutilement le manager."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le recrutement engage de l'argent, du droit et de l'organisation. Un recruteur junior qui « lance » sans validation expose l'entreprise à une promesse intenable vis-à-vis des candidats, à un conflit interne, et parfois à un contentieux si une offre est formulée trop tôt. La confusion la plus fréquente est de croire que cadrer le besoin, c'est déjà autoriser l'embauche.\n\nTrois objets doivent être séparés. L'intention du manager : « j'ai besoin de quelqu'un ». La validation organisationnelle : le poste a un rattachement, des missions qui n'existent pas déjà en double, un intitulé cohérent. La validation budgétaire et statutaire : enveloppe de rémunération, type de contrat, date d'ouverture, éventuellement remplacement d'un budget existant.\n\nCe que le junior vérifie, documente et alerte : le poste est-il nommé dans un budget, un avenant d'effectif, un mail de direction, un outil RH ? Quel est le rattachement hiérarchique réel, pas celui du souhait ? Y a-t-il un gel des embauches, un comité de validation, une règle de remplacement « un pour un » ? Le manager parle-t-il d'un CDI alors que seule une mission ou un CDD est financé ? Y a-t-il un interne identifié, un intérimaire déjà en poste, un prestataire dont le contrat se termine ?\n\nCe que le junior ne décide pas : ouvrir ou geler le poste, arbitrer entre CDI et CDD, fixer le salaire max hors politique, choisir entre embauche et sous-traitance, trancher une mobilité, appliquer ou écarter une priorité légale (réembauche, temps partiel). Ces points vont aux RH et, selon la taille de l'entreprise, à la direction.\n\nDans une TPE, le dirigeant est souvent à la fois manager, RH et finance. Le junior (ou l'assistant) formalise quand même le brief : l'oral du dirigeant change d'une semaine à l'autre. Dans une ETI, un comité peut exister : vous ne contournez pas le circuit pour « aller plus vite ». Dans un cabinet, vous vérifiez que le client a un budget réel ; un mandat sans budget est un risque commercial, pas seulement un sujet RH."
        ),
        h("Méthode opérationnelle"),
        t(
          "Utilisez une check-list courte, à remplir avant la réunion de cadrage approfondie.\n\n1. Qui a demandé le recrutement, par quel canal, à quelle date ? 2. Qui doit valider (N+1, N+2, RH, direction, finance) ? 3. Le budget est-il écrit, et de quoi est-il composé (salaire brut annuel, variable, avantages, frais de recrutement) ? 4. Le type de contrat envisagé est-il cohérent avec la durée du besoin ? 5. L'organigramme montre-t-il un trou, un double emploi, ou une couche hiérarchique nouvelle ? 6. Existe-t-il une politique interne (mobilité, priorité interne, gel) ? 7. Une alerte légale est-elle visible (départ économique récent, temps partiel, reclassement) ? Si oui, transmission RH, pas de décision solo.\n\nOutils : mail de demande, SIRH ou tableur d'effectifs, organigramme, grille de salaires interne si elle existe, compte-rendu de CODIR le cas échéant. Contrôle : vous datez la validation. Un « oui » oral du manager n'est pas une validation budgétaire."
        ),
        note(
          "Bonne pratique, pas obligation légale : n'annoncez jamais un poste à l'externe tant que la validation budgétaire et le circuit interne ne sont pas écrits. Obligation de votre côté : ne pas formuler d'engagement d'embauche. La qualification offre / promesse est traitée dans le module cadre légal ; à ce stade, retenir qu'un junior ne « promet » pas un poste."
        ),
        h("Exemple professionnel"),
        t(
          "ETI de services informatiques, 420 personnes. Une directrice de business unit vous demande un « Delivery Manager » en CDI, 55-60 k€, démarrage sous trois semaines. L'organigramme de l'équipe montre déjà un chef de projet senior et un manager d'équipe. Le budget annuel présenté en janvier prévoyait un remplacement de développeur, pas une création de management.\n\nVous vérifiez : il n'y a pas de ligne « Delivery Manager ». La DRH confirme qu'un comité mensuel statue sur les créations. Vous ne refusez pas le manager : vous documentez l'écart (intitulé, budget, circuit) et vous posez l'alternative : attendre le comité, transformer en remplacement du développeur si le besoin réel est de la production, ou faire valider une création. Vous ne publiez rien."
        ),
        code(
          `CHECK-LIST JUNIOR — avant cadrage
Demandeur : .................. Date : ........
Validation requise : manager / N+2 / RH / direction / finance
Budget écrit : oui / non / partiel     Source : ................
Contrat envisagé : CDI / CDD / intérim / stage / alternance
Rattachement : .................. Effectif actuel équipe : ....
Poste déjà existant : oui / non / flou
Politique interne à respecter : ................................
Alerte à transmettre RH (sans décider) : oui / non
Décision de lancer le sourcing : OUI seulement si validation datée
Ce que je ne décide pas : ouverture du poste, salaire hors grille,
type de contrat, mobilité, priorités légales.`
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Publier « pour avancer » sans budget. Croire que le salaire annoncé par le manager est la politique de l'entreprise. Confondre un intérimaire déjà présent avec une validation de CDI. Prendre l'organigramme PowerPoint comme la réalité des rattachements. Trancher seul un conflit manager / RH. Promettre au manager une date d'arrivée avant d'avoir un process autorisé."
        ),
        h("Situations particulières"),
        t(
          "Groupe avec filiales : le budget peut être au siège et le manager en région. Vous identifiez le circuit, vous ne le recréer pas. Reprise d'entreprise ou PSE récent : toute ouverture externe est sensible ; alerte RH systématique. Cabinet : un client qui « verra le budget plus tard » n'est pas un brief opérationnel. Intérim : la commande du client (motif, durée, qualification) doit être recevable ; vous n'inventez pas un motif. Startup : l'absence de grille n'autorise pas l'approximation ; vous faites écrire une fourchette par le fondateur."
        ),
        h("Mise en pratique"),
        t(
          "Le responsable logistique d'une PME (60 personnes) vous dit : « On recrute un cariste en CDI, j'ai le droit, le directeur l'a dit à la machine à café. Salaire 2 000 €, je ne sais pas si c'est brut. » Listez ce que vous vérifiez vous-même, ce que vous demandez par écrit, et ce que vous renvoyez au dirigeant / RH. Indiquez si vous ouvrez l'annonce le jour même."
        ),
        h("Correction détaillée"),
        t(
          "Vous vérifiez : existence d'un accord du dirigeant au-delà de l'oral informel, type de contrat réellement envisagé, distinction brut / net / avantages, rattachement, horaires et permis éventuel (lien avec le poste, pas une question de convenance). Vous demandez un écrit court : validation du poste, enveloppe, date, contrat. Vous renvoyez au dirigeant le statut CDI vs CDD ou intérim, et le salaire si aucune politique n'existe. Vous n'ouvrez pas l'annonce le jour même. Un propos à la machine à café n'est pas une validation. Recruter un cariste en CDI sans cadre expose à un engagement difficile à retirer une fois les candidats en process."
        ),
      ],
    }),

    lesson({
      title: "Recueil du besoin auprès du manager : la réunion de cadrage",
      description:
        "Préparer, conduire et clôturer une réunion de brief avec le manager demandeur.",
      minutes: 24,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez préparer une réunion de cadrage de 45 à 60 minutes, en conduire le fil, reformuler sans juger, et obtenir les arbitrages manquants. Vous savez aussi gérer un manager pressé, vague ou contradictoire sans perdre la relation."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "La réunion de cadrage n'est pas une conversation de couloir ni une prise de note passive. C'est l'acte professionnel par lequel le besoin devient un objet partagé : missions, résultats attendus, compétences, conditions d'emploi, délais, critères de choix, et limites. Sans cet acte, le recruteur traduit mal, le manager corrige trop tard, les candidats reçoivent un message faux, et la shortlist est rejetée pour des raisons jamais dites.\n\nLe manager est expert du métier, rarement du recrutement. Il parle souvent en personnes (« quelqu'un de dynamique, comme Léa ») et en irritants (« je ne veux plus de profil trop junior »). Votre métier est de traduire cela en missions, en compétences observables et en critères. Vous ne le contredisez pas sur son activité ; vous le questionnez jusqu'à ce que l'implicite soit explicite.\n\nUne réunion utile a un ordre. On ne commence pas par le salaire ni par le site d'annonce. On commence par le problème à résoudre, l'origine du besoin, le succès à 6 et 12 mois, puis les missions, l'équipe, l'environnement, les compétences, les conditions, les délais, les critères de sélection, et seulement ensuite les canaux. Si vous inversez, le manager se crispe sur le « profil rare » avant d'avoir dit ce que la personne devra produire.\n\nLe cadrage est aussi un moment d'éducation légère du manager : ce qui est un critère professionnel, ce qui est un souhait, ce qui est irréaliste, ce qui est interdit. Vous n'êtes pas juriste de l'entreprise, mais vous refusez déjà les demandes qui sortent du cadre (photo, âge, situation familiale). Le détail juridique est le module suivant ; ici, le réflexe est : ce qui n'a pas de lien direct avec l'emploi ne rentre pas dans le brief.\n\nEnfin, une réunion sans clôture est un rendez-vous manqué. Vous reformulez, vous listez les points ouverts, vous datez la restitution écrite, vous dites clairement ce que vous ferez et ce que vous ne ferez pas tant que les points bloquants ne sont pas tranchés."
        ),
        h("Méthode opérationnelle"),
        t(
          "Avant : relire la demande, l'organigramme, la fiche existante, le motif de départ. Envoyer un ordre du jour de 8 à 10 points. Prévoir 45 minutes, 60 si création de poste. Inviter RH si le circuit l'exige, pas « pour se protéger ». En cabinet, confirmer que le client décideur est dans la salle, pas seulement l'opérationnel.\n\nPendant : poser le cadre (objectif de la réunion, ce que vous livrerez ensuite). Questionner. Recueillir des faits (volume, outils, interlocuteurs, astreintes) avant des qualités. Reformuler toutes les 10 minutes. Signaler les exigences qui se contredisent. Noter mot pour mot les phrases à risque (« je veux quelqu'un de jeune », « pas de femmes, c'est un atelier ») : vous les recadrerez professionnellement, puis vous alerterez RH si besoin.\n\nAprès : envoyer la restitution sous 24 à 48 heures ouvrées (bonne pratique). Demander une validation écrite. Ne pas sourcer sur un brief non validé, sauf consigne contraire explicite de votre responsable, documentée."
        ),
        h("Exemple professionnel"),
        t(
          "Cabinet de recrutement, mandat pour une direction financière d'ETI agroalimentaire. Le DAF opérationnel est présent, le DG a « dit d'accord » mais n'est pas dans la réunion. En 20 minutes, le DAF décrit un profil introuvable : expert IFRS, anglais courant, 8 ans minimum, mobilité 3 sites, salaire sous la médiane interne des managers, démarrage dans 4 semaines, et « quelqu'un qui a déjà fait de l'agro, sinon ça ne marchera pas ».\n\nVous ne promettez pas de « trouver ». Vous faites une réunion en deux temps : d'abord le succès du poste à 12 mois (clôture, contrôle interne, relation commissaires aux comptes, management de 4 personnes), ensuite les critères. Vous obtenez que l'agro est un souhait, pas une condition, que l'anglais est nécessaire pour 20 % du temps, et que le DG doit valider le salaire. Vous clôturez en disant que le sourcing attend cette validation. C'est un service, pas un refus."
        ),
        code(
          `ORDRE DU JOUR — réunion de cadrage (45-60 min)
1. Origine du besoin et urgence réelle
2. Succès du poste à 6 mois et à 12 mois
3. Missions, volume, outils, interlocuteurs
4. Équipe, rattachement, interfaces
5. Compétences indispensables / souhaitables
6. Conditions : contrat, lieu, horaires, télétravail, rémunération
7. Critères de choix et personnes qui rencontrent les candidats
8. Process, délais, disponibilité du manager
9. Points ouverts et validations manquantes
10. Suite : restitution écrite, date de validation, lancement`

        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Arriver sans ordre du jour. Laisser le manager dicter uniquement un portrait de personne. Ne pas oser reformuler. Remplir les silences par des suggestions de profil trop tôt. Oublier de demander qui décide vraiment. Terminer par « je vous fais une annonce » alors que le salaire, le lieu ou le contrat sont flous. Rire ou passer l'éponge sur une phrase discriminatoire au lieu de recadrer."
        ),
        h("Situations particulières"),
        t(
          "Manager absent ou qui délègue à un collègue : le brief n'est pas opposable ; reprogrammez. Double manager (matriciel) : réunion à trois, sinon les critères s'opposeront en shortlist. Recrutement confidentiel (remplacement d'une personne encore en poste) : cadrage plus strict sur le message interne et externe ; RH dans la boucle. Urgence de production : réunion courte mais écrite ; l'urgence n'autorise pas l'absence de brief. Distancier ou visio : envoyez la grille de questions à l'avance, ne faites pas du « on se dit tout en 15 minutes »."
        ),
        h("Mise en pratique"),
        t(
          "Vous avez 45 minutes avec la responsable qualité d'une PMI. Elle est tendue, le certificat client arrive dans trois mois, elle veut « un ingénieur qualité expérimenté, autonome, qui ne pose pas trop de questions ». Préparez : les 5 premières questions que vous posez, et la phrase de recadrage si elle dit « je préfère un homme, l'atelier n'est pas simple »."
        ),
        h("Correction détaillée"),
        t(
          "Cinq premières questions, centrées sur le travail et non sur le portrait : Quel événement rend le besoin visible maintenant ? Qu'est-ce qui sera considéré comme un succès à l'issue de la certification ? Quelles missions concrètes la personne fera-t-elle la première semaine, le premier mois ? Avec qui travaillera-t-elle (production, clients, labo) ? Qu'est-ce qui a manqué dans l'équipe actuelle, en faits, pas en qualités ?\n\nPhrase de recadrage, ferme et professionnelle : « Je ne peux pas retenir le sexe comme critère. La loi interdit d'écarter une personne d'un recrutement pour ce motif. On va parler des contraintes réelles de l'atelier — horaires, port de charges, relation production — et des compétences nécessaires. C'est cela qui ira dans le brief. » Vous ne débattez pas. Vous notez, vous recentrez, vous informez RH si la demande persiste. Vous ne « comprenez pour cette fois »."
        ),
      ],
    }),

    lesson({
      title: "Grille complète de questions de brief",
      description:
        "Disposer d'un document de brief utilisable en entreprise, en cabinet ou en agence.",
      minutes: 25,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous disposez d'une grille de questions complète, que vous savez adapter sans la vider. Vous savez pourquoi chaque bloc existe, et ce que vous faites d'une réponse vague, absente ou contradictoire."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Une grille de brief n'est pas un formulaire administratif à faire signer pour se couvrir. C'est un instrument de traduction. Elle force le passage d'un souhait flou à des informations actionnables : ce que la personne fera, dans quelles conditions, avec quel niveau d'exigence, pour quel résultat, à quelle rémunération, dans quel délai. Sans grille, deux recruteurs d'une même équipe produisent deux recrutements différents à partir du même manager.\n\nLa grille couvre plus que les compétences. Les compétences sans missions sont des étiquettes. Les missions sans volume sont des vœux. Le salaire sans politique est une négociation improvisée. Le délai sans disponibilité du manager est un process fantôme. Le critère de choix sans pondération est un avis subjectif qui s'exprimera trop tard, souvent contre le candidat que vous aurez le plus investi.\n\nChaque question a une fonction. « Pourquoi maintenant ? » saisit l'origine. « À quoi verra-t-on que la personne réussit ? » saisit le résultat, plus fiable que les qualités. « Que se passe-t-il si on ne recrute pas ? » saisit l'urgence réelle. « Qu'est-ce qui est non négociable ? » saisit les critères éliminatoires, que vous distinguerez plus tard des critères souhaitables et des critères interdits. « Qui rencontre les candidats et qui dit oui ? » saisit le circuit de décision, souvent différent du circuit de demande.\n\nVous n'avez pas à poser les 80 questions à chaque fois. Un remplacement d'opérateur sur ligne, déjà décrit, justifie une version courte. Une création de poste de manager dans une ETI justifie la version longue. L'erreur est d'avoir une grille décorative que personne n'utilise, ou une grille si longue que le manager décroche. L'outil ci-dessous est le référentiel : vous cochez les blocs pertinents, vous ne sautez jamais les blocs origine, missions, conditions d'emploi, critères et circuit de décision.\n\nLes réponses doivent pouvoir être lues par quelqu'un qui n'était pas dans la salle. Si votre note n'est compréhensible que par vous, ce n'est pas un brief, c'est un pense-bête."
        ),
        h("Méthode opérationnelle"),
        t(
          "Imprimez ou ouvrez la grille avant la réunion. Remplissez en direct, pas le lendemain de mémoire. Marquez « non tranché » plutôt que d'inventer. Après la réunion, transformez la grille en restitution rédigée (leçon 8). Contrôle qualité : un collègue doit pouvoir sourcer à partir du document, sans vous appeler. En cabinet, faites valider la grille par le client signataire du mandat. En intérim, alignez la grille avec les informations nécessaires à la qualification de la mission, sans la réduire au seul intitulé."
        ),
        h("Exemple professionnel"),
        t(
          "Agence d'intérim, commande d'une PMI pour « 2 opérateurs, vite ». La grille courte évite la sous-qualification : origine (accroissement pour une commande export), horaires (2×8, pas 3×8), compétences (lecture de plan simple, pas de CACES), durée (8 semaines, éventuellement prolongation), lieu (site B, 18 km du site A habituel), équipement, manager de proximité, et qui valide l'arrivée le lundi 6 h. Sans ces questions, vous enverrez des profils au mauvais site, au mauvais horaire, et le client « n'en voudra plus de l'agence »."
        ),
        code(
          `GRILLE DE BRIEF RECRUTEMENT — document de travail
Date : .......... Recruteur : .......... Manager : ..........

A. ORIGINE ET ENJEU
- Événement déclencheur (création / remplacement / accroissement / mobilité) :
- Ce qui se passe si le poste n'est pas pourvu à 30 / 60 / 90 jours :
- Solutions déjà regardées (interne, intérim, sous-traitance, réorganisation) :
- Confidentiel : oui / non. Pourquoi :

B. POSTE ET ORGANISATION
- Intitulé provisoire :
- Rattachement hiérarchique / fonctionnel :
- Équipe (effectif, métiers, personnes clés) :
- Interfaces (clients, fournisseurs, autres services) :
- Lieu(x) de travail, déplacements, permis si le poste l'exige :
- Horaires, astreintes, saisonnalité :

C. MISSIONS ET RÉSULTATS
- Mission principale (une phrase) :
- 5 à 8 missions concrètes, avec volume si possible :
- Outils / logiciels / machines / normes :
- Succès à 6 mois :
- Succès à 12 mois :

D. PROFIL
- Compétences indispensables (observables) :
- Compétences souhaitables :
- Expérience : ce qu'elle doit avoir permis de faire, pas seulement un nombre d'années :
- Diplômes / habilitations / certifications : indispensables ou souhaités :
- Langues : niveau requis et contexte d'usage réel :

E. CONDITIONS D'EMPLOI
- Contrat : CDI / CDD (motif, durée) / intérim / alternance / stage
- Rémunération : fourchette, fixe / variable, avantages, politique interne
- Télétravail / travail hybride : règle réelle, pas slogan
- Date de prise de poste souhaitée / date réaliste
- Période d'essai envisagée (selon contrat et politique) : à confirmer RH

F. SÉLECTION ET PROCESS
- Critères éliminatoires professionnels :
- Critères de rang 2 :
- Personnes qui rencontrent le candidat, dans quel ordre :
- Qui décide, qui peut dire non :
- Délai de retour après chaque étape :
- Disponibilité réelle du manager pour les entretiens :

G. POINTS OUVERTS / ALERTES
- Validations manquantes :
- Exigences potentiellement irréalistes :
- Demandes à recadrer (hors lien avec l'emploi) :
- Alertes à transmettre aux RH (sans décider) :

Validation manager (date) : ..........
Validation RH si requise (date) : ..........`
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Transformer la grille en interrogatoire de 90 minutes. Laisser des cases vides « on verra ». Noter des qualités (« autonome, esprit d'équipe ») sans exemple de situation. Oublier le circuit de décision. Recopier une ancienne fiche sans reposer les questions. Utiliser la grille comme preuve contre le manager au lieu d'un support de travail partagé."
        ),
        h("Situations particulières"),
        t(
          "Manager qui refuse de « remplir des papiers » : vous remplissez en réunion, vous lui renvoyez un texte court à valider, pas un tableau. Recrutement international ou bilingue : la grille doit dire où la langue est utilisée, pas seulement « anglais courant ». Poste en 3×8 ou week-end : les contraintes horaires sont des faits du poste, à poser tôt. Création de poste autour d'une personne déjà identifiée : la grille sert quand même, pour ne pas truquer un process vis-à-vis des autres candidats."
        ),
        h("Mise en pratique"),
        t(
          "À partir de cette phrase de manager : « Il me faut une assistante dynamique, bilingue, qui connaisse le BTP, 5 ans d'expérience, plutôt à temps plein, on verra le salaire, c'est pour remplacer Julie qui s'en va. » Listez les 8 questions de la grille que vous poserez en priorité, et identifiez 3 informations trop floues pour sourcer."
        ),
        h("Correction détaillée"),
        t(
          "Questions prioritaires : origine et date du départ de Julie ; missions réelles de Julie vs missions souhaitées maintenant ; ce que « bilingue » veut dire (écrit, oral, avec qui, quelle part du temps) ; ce que « connaître le BTP » recouvre (vocabulaire, logiciels, chantiers, clients) ; temps de travail réel ; lieu et télétravail ; fourchette de rémunération et validation ; qui décide et quand Julie part.\n\nTrois flous bloquants : « assistante » sans missions ; « dynamique » n'est pas un critère professionnel ; « on verra le salaire » empêche de qualifier les candidats et de tenir un discours honnête. Vous ne sourcer pas sur ces trois vides. Notez aussi que le mot « assistante » au féminin n'est pas un critère de sexe : l'intitulé et l'annonce devront rester ouverts (détail au module fiche de poste et cadre légal)."
        ),
      ],
    }),

    lesson({
      title: "Exigences du poste : indispensable, souhaitable et conditions d'emploi",
      description:
        "Classer compétences, expérience, diplômes, rémunération, lieu, télétravail, contrat et délais sans tout mettre au même niveau.",
      minutes: 24,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez classer chaque exigence en indispensable, souhaitable ou hors sujet. Vous savez interroger l'expérience et les diplômes par ce qu'ils permettent de faire. Vous savez poser les conditions d'emploi (rémunération, lieu, télétravail, contrat, délais) comme des faits, pas comme des à-côtés."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le brief échoue souvent parce que tout est présenté comme obligatoire. Un manager anxieux empile : diplôme, années d'expérience, outil rare, langue, savoir-être, disponibilité immédiate, salaire contenu. Le marché ne fournit pas cette intersection. Votre travail n'est pas d'obéir à la liste : c'est de la hiérarchiser.\n\nUne compétence indispensable est une capacité sans laquelle le poste ne peut pas être tenu dans un délai raisonnable, compte tenu de l'organisation réelle (tutorat, documentation, binôme). Une compétence souhaitable accélère la prise de poste ou améliore le confort de l'équipe ; son absence n'interdit pas l'embauche. Une préférence personnelle du manager (« quelqu'un qui a fait la même école que nous ») n'est ni l'un ni l'autre, et peut devenir discriminatoire si elle sert à écarter.\n\nL'expérience ne se mesure pas d'abord en années. Cinq ans dans un contexte pauvre valent parfois moins que deux ans dans un contexte exigeant. Vous faites dire au manager : « qu'est-ce que la personne doit déjà avoir fait, de façon autonome, dès l'arrivée ? » Le chiffre d'années, s'il reste, est un indicateur, pas un mur. Un mur d'années mal justifié peut aussi masquer un critère d'âge : vous restez vigilant, sans inventer d'intention.\n\nLe diplôme et les habilitations suivent la même logique. Certaines sont de vraies conditions d'exercice (habilitation électrique, diplôme réglementé, CACES si l'emploi le requiert). D'autres sont des habitudes (« on a toujours pris des bac+5 »). Vous distinguez. Vous ne promettez pas qu'un diplôme « fait bien » sur une annonce s'il n'est pas nécessaire : vous alourdissez le filtre et vous perdez des profils transférables.\n\nLes conditions d'emploi font partie du besoin, pas de la négociation de fin de process. Rémunération : fourchette compatible avec la politique interne, à faire valider, pas à inventer. Lieu : site, mobilité, déplacements. Télétravail : règle réelle de l'équipe, pas la promesse d'attractivité. Contrat : CDI, CDD (motif et durée), intérim, alternance. Délais : date de prise de poste, disponibilité du manager, temps de préavis des candidats visés. Un CDI « pour hier » avec un salaire sous le marché et trois mois de process interne est un brief incohérent : il faut l'écrire comme tel, puis arbitrer."
        ),
        h("Méthode opérationnelle"),
        t(
          "Pour chaque item du brief, posez trois questions : est-ce indispensable à la tenue du poste ? peut-on le former en 3 mois avec l'organisation prévue ? est-ce un souhait de confort, d'image ou d'habitude ? Classez ensuite dans un tableau à trois colonnes. Pour l'expérience, remplacez « X ans » par 2 à 4 situations de travail. Pour le diplôme, demandez la conséquence si le candidat ne l'a pas mais a l'habilitation ou l'expérience équivalente. Pour le salaire, le lieu, le télétravail et le contrat, obtenez des fourchettes écrites. Contrôle : si tout est en colonne « indispensable », le classement n'a pas été fait."
        ),
        note(
          "Bonne pratique : limiter les indispensables à ce que le poste exige vraiment. Obligation : un critère qui n'a pas de lien direct et nécessaire avec l'emploi ne peut pas être demandé au candidat (article L. 1221-6 du Code du travail). Le détail et les exemples d'entretiens sont au module cadre légal. Dès le brief, vous refusez de noter « jeune », « sans enfants », « de préférence une femme »."
        ),
        h("Exemple professionnel"),
        t(
          "Startup produit, 22 personnes, recrutement d'un développeur backend. Le CTO dit : « Bac+5, 7 ans, Java et Go, anglais bilingue, présentiel 5 jours, salaire 38 k€, dispo dans 15 jours, esprit startup. » Après classement : indispensables = concevoir et maintenir des API, déboguer en production, écrire des tests, communiquer avec le produit. Souhaitables = Go, anglais écrit professionnel (la doc est en anglais, les réunions sont en français), expérience scale-up. Non retenus comme murs = bac+5, 7 ans, présentiel 5 jours si l'équipe est déjà hybride, 15 jours de délai si le salaire est sous le marché. Le 38 k€ est un point d'arbitrage, pas une ligne que le recruteur « fera passer »."
        ),
        code(
          `TABLEAU D'EXIGENCES — à remplir avec le manager

Indispensable (le poste ne tient pas sans) | Souhaitable | Hors brief / à recadrer
-------------------------------------------|-------------|------------------------
Exemple : habilitation électrique B2V      | GMAO déjà   | « Quelqu'un de jeune »
si le poste l'exige dès J1                 | pratiquée   |
API REST + tests                           | Go en plus  | « Photo sur le CV »
Fourchette salaire validée RH              | de Java     |
Lieu : site Lyon 3j/semaine                | Secteur     |
                                           | déjà connu  |

Règle : 5 indispensables maximum pour un poste non réglementé.
Tout le reste se discute ou se forme.`
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Tout copier en indispensable pour ne pas « frustrer » le manager. Confondre outil et compétence (savoir un logiciel vs savoir structurer une information). Oublier les conditions d'emploi jusqu'à l'offre. Annoncer du télétravail non validé. Utiliser le diplôme comme paresse de tri. Laisser un délai de prise de poste magique (« dès que possible ») sans date."
        ),
        h("Situations particulières"),
        t(
          "Métier réglementé : le diplôme ou l'habilitation peut être réellement indispensable ; vous le vérifiez, vous ne le supposez pas. Alternance : les « 5 ans d'expérience » sont souvent contradictoires avec le dispositif ; recadrage immédiat. Temps partiel demandé par le manager « pour tester » : ce n'est pas un critère de sélection des personnes, c'est un choix d'organisation à valider RH. Poste hybride mal défini : faites écrire les jours sur site, faute de quoi chaque candidat comprendra autre chose."
        ),
        h("Mise en pratique"),
        t(
          "Brief brut : « Chargé de recrutement, 5 ans minimum, issu d'un cabinet, master RH, anglais, LinkedIn, permis, disponible immédiatement, 32 k€, 2 jours de télétravail, CDI. » Classez chaque item. Indiquez deux arbitrages à proposer au manager."
        ),
        h("Correction détaillée"),
        t(
          "Indispensables possibles, selon le contexte réel de l'équipe : conduire un brief, sourcer, mener des entretiens structurés, suivre un process. « 5 ans » et « issu d'un cabinet » sont au mieux souhaitables, souvent des habitudes. Master RH : souhaitable, rarement indispensable. Anglais : seulement si des recrutements ou des outils l'exigent, avec le niveau d'usage. LinkedIn : un outil, pas une compétence. Permis : uniquement si des déplacements réguliers sans alternative sont un fait du poste. Disponibilité immédiate : rarement compatible avec un CDI expérimenté ; c'est un délai à arbitrer. 32 k€ : à confronter à la politique interne et au marché, pas à « faire passer ». Télétravail 2 jours : condition d'emploi à confirmer comme règle d'équipe.\n\nDeux arbitrages : (1) assouplir l'expérience cabinet vs interne et former aux méthodes ; (2) soit le salaire et le délai restent tendus et l'on vise un profil moins expérimenté, soit l'on ouvre la fourchette. Vous ne tranchez pas seul le salaire : vous documentez l'incohérence."
        ),
      ],
    }),

    lesson({
      title: "Exigences irréalistes et arbitrages avec le manager",
      description:
        "Repérer un brief intenable, le faire voir sans affrontement, et obtenir un arbitrage écrit.",
      minutes: 22,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez reconnaître un brief irréaliste, en expliquer les conséquences au manager, proposer deux ou trois scénarios, et consigner l'arbitrage. Vous savez aussi jusqu'où vous négociez, et à quel moment vous remontez à votre responsable ou aux RH."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Un brief irréaliste n'est pas un manager « difficile ». C'est un ensemble de contraintes qui ne peuvent pas être vraies en même temps : niveau de compétence, rareté, rémunération, délai, lieu, type de contrat, et exigence de « risque zéro ». Si vous sourcez malgré tout, vous produisez du silence (aucun candidat), de la frustration (candidats hors fourchette), ou de la fuite (le manager refuse tous les dossiers). Dans les trois cas, c'est le recruteur qui « n'a pas trouvé ».\n\nL'arbitrage n'est pas un rapport de force. C'est un choix d'entreprise entre des variables. On peut souvent tenir le niveau de compétence si l'on lâche le délai ou si l'on ouvre le salaire. On peut tenir le salaire si l'on accepte de former, donc un profil moins prêt. On peut tenir le délai si l'on accepte un CDD, de l'intérim ou un interne. Ce que l'on ne peut pas faire, c'est garantir les quatre : rare, peu cher, immédiat, sans acculturation.\n\nVotre posture : faits, options, recommandation, décision du manager / RH. Les faits sont ceux du brief et ceux que vous observez dans le process (volume de candidatures, motifs de refus). Vous n'inventez pas de statistiques de marché. Si vous n'avez pas de données internes, dites-le : « Sur les trois derniers postes comparables ici, le délai a été de… » ou « Je n'ai pas encore de donnée interne ; en l'état, ces contraintes se contredisent. »\n\nCertaines « exigences irréalistes » sont en réalité des critères interdits ou hors lien avec l'emploi. Là, il n'y a pas d'arbitrage : il y a un recadrage. « Pas trop vieux », « une femme pour l'accueil », « quelqu'un du quartier » ne se négocient pas. Vous recentrez sur le poste, vous alertez RH si la demande est répétée.\n\nEnfin, un arbitrage oral s'oublie. Le manager dira « je n'ai jamais dit qu'on pouvait prendre sans le diplôme ». La restitution écrite de la leçon 8 sert aussi à cela : figer ce qui a été lâché, et ce qui reste non négociable."
        ),
        h("Méthode opérationnelle"),
        t(
          "1. Écrire le brief tel que demandé, sans le lisser. 2. Lister les tensions (salaire vs niveau, délai vs préavis, lieu vs bassin, indispensables trop nombreux). 3. Préparer 2 ou 3 scénarios, chacun avec un gain et un coût. 4. Réunion courte d'arbitrage, 20 minutes, un seul objectif : choisir un scénario. 5. Confirmer par écrit. 6. Si le manager refuse tout arbitrage et que le process est voué à l'échec, remonter à votre responsable avec le dossier, pas avec un jugement sur la personne.\n\nVous ne menacez pas de « ne pas s'en occuper ». Vous dites : « Je peux lancer le scénario A dès validation ; le scénario actuel produit tel effet. »"
        ),
        h("Exemple professionnel"),
        t(
          "PME du bâtiment, 40 personnes, recrutement d'un métreur. Le gérant veut 8 ans d'expérience tous corps d'état, maîtrise d'un logiciel spécifique, permis et véhicule, salaire d'un profil débutant, arrivée avant le prochain chantier (5 semaines), et « quelqu'un de local, qui ne partira pas ». Après cadrage, le logiciel s'apprend en deux semaines avec le métreur sortant. L'expérience utile est « avoir déjà chiffré des chantiers de ce type », pas 8 ans. Le véhicule est un vrai besoin de déplacements. Le « local » est un souhait de stabilité : vous le traduisez en conditions d'emploi (lieu, déplacements) et en entretien structuré sur le projet professionnel, pas en critère de résidence. L'arbitrage proposé : ouvrir le salaire d'un cran ou accepter 4-6 ans avec tutorat ; garder le permis si les visites de chantier sont hebdomadaires."
        ),
        code(
          `SCÉNARIOS D'ARBITRAGE — modèle

Scénario A — Niveau tenu
On garde les indispensables métier.
On ouvre la fourchette de rémunération et on accepte un préavis à 3 mois.
Coût : budget. Gain : autonome plus tôt.

Scénario B — Budget tenu
On recrute un profil à former (tutorat 8 semaines nommé).
On lâche 2 souhaitables. Délai de croisière plus long.
Coût : temps manager. Gain : enveloppe salariale.

Scénario C — Délai tenu
CDD / intérim / interne relais pendant le recrutement du CDI.
Coût : double process. Gain : production tenue.

Scénario actuel (non recommandé) : tout garder.
Effet probable : pas de shortlist, ou shortlist hors cadre, puis rejet.

Décision : ....... Date : ....... Par : .......`
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Lancer le process pour « montrer qu'on bosse » malgré un brief intenable. Inventer des chiffres de marché pour convaincre. Humilier le manager (« vous ne connaissez pas les salaires »). Arbitrer en secret avec RH puis surprendre le manager. Céder sur un critère interdit pour « débloquer ». Oublier d'écrire l'arbitrage."
        ),
        h("Situations particulières"),
        t(
          "Direction qui impose le salaire et manager qui impose le niveau : réunion à trois, vous ne servez pas de tampon silencieux. Cabinet : si le client refuse tout arbitrage, le risque est un mandat ingagnable ; vous le dites à votre responsable avant d'engager trop de sourcing. Urgence sécurité / production : un relais court (intérim, heures supp cadrées) est parfois l'arbitrage responsable, pas un CDI bâclé. Startup : le titre trop senior + salaire junior est un classique ; on recadre le titre ou le salaire, pas le discours « on paie en stock-options » si ce n'est pas un élément écrit et compréhensible."
        ),
        h("Mise en pratique"),
        t(
          "Un manager veut un responsable administratif « opérationnel tout de suite », bilingue, 40 k€, 4 jours de télétravail, management de 6 personnes, dans une ville où l'entreprise n'a pas encore de politique télétravail écrite. Proposez deux scénarios et la phrase d'ouverture de la réunion d'arbitrage."
        ),
        h("Correction détaillée"),
        t(
          "Scénario A : poste de responsable, management réel, fourchette revue, télétravail aligné sur une règle d'équipe validée (pas 4 jours improvisés). Scénario B : poste d'adjoint / responsable de proximité, moins de management ou management progressif, 40 k€ tenable, télétravail plus limité le temps de poser la règle. Phrase d'ouverture : « Je peux lancer le recrutement dès que l'on choisit un scénario cohérent. Aujourd'hui le niveau de responsabilité, la rémunération et le télétravail ne sont pas alignés, et le télétravail n'est pas encore une règle d'entreprise. Voici deux options, avec leur coût. Laquelle tenez-vous ? » Vous ne commencez pas par « c'est impossible »."
        ),
      ],
    }),

    lesson({
      title: "Simulation : dialogue recruteur / manager",
      description:
        "Observer et pratiquer un cadrage en PME industrielle, puis la variante en startup.",
      minutes: 26,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez reconnaître, dans un dialogue, les questions qui font avancer le brief et celles qui le faussent. Vous savez adapter le même canevas à une PME industrielle et à une startup, sans changer les principes."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le cadrage se joue dans la conversation, pas dans le modèle Word. Un recruteur peut avoir la bonne grille et poser les questions comme un audit, ou trop tard, ou trop tôt. L'objectif de cette leçon est d'entendre le rythme : d'abord le travail, ensuite le profil, ensuite les conditions, ensuite les arbitrages. Les deux dialogues ci-dessous sont des supports d'étude. Ils ne prétendent pas décrire « toutes les PME » ni « toutes les startups » ; ils montrent des mécanismes fréquents.\n\nEn PME industrielle, le manager parle souvent machine, sécurité, horaires, ancienneté de l'équipe, urgence de ligne. Il peut vouloir « le même que celui qui part ». Votre apport est de séparer la personne, le poste, et ce que l'organisation peut absorber. Le respect du terrain n'interdit pas la rigueur : on ne recadre pas un chef d'atelier comme on recadre un CTO, mais on recadre.\n\nEn startup, le manager (souvent fondateur ou head of) parle impact, polyvalence, « culture », vitesse. Le risque est un poste indéfini, un titre gonflé, des conditions floues (salaire, remote, rôle réel). Votre apport est de figer des missions pour les 6 premiers mois, une fourchette, un rattachement, et de refuser le brief mythologique (« un crack qui code, vend et recrute »).\n\nDans les deux cas, vous restez poli, vous reformulez, vous ne mentez pas sur ce que vous pourrez livrer, vous isolez ce qui est interdit. Un dialogue réussi se termine par une liste de points validés et de points ouverts, pas par une ambiance chaleureuse et un brief vide."
        ),
        h("Méthode opérationnelle"),
        t(
          "Lisez le premier dialogue en notant dans la marge : origine, missions, indispensables, conditions, recadrage, arbitrage. Puis faites de même sur la variante. Ensuite, jouez le rôle recruteur à voix haute (15 minutes) avec un collègue ou seul, à partir du brief brut fourni en mise en pratique. Contrôle : vous devez pouvoir remplir 80 % de la grille de la leçon 4 après le dialogue, sans inventer."
        ),
        h("Exemple professionnel"),
        t(
          "Deux contextes. A : PMI de chaudronnerie, 55 personnes, remplacement d'un responsable d'équipe fabrication. B : startup SaaS, 18 personnes, création d'un « Customer Success »."
        ),
        code(
          `DIALOGUE A — PMI industrielle (extrait cadré)

MANAGER : Il me faut un chef d'équipe comme Gérard. Il part en retraite en janvier.
          Les jeunes, maintenant, ils ne restent pas, et ils ne savent pas tenir une équipe.
RECRUTEUR : On est sur un remplacement retraite. Je vais d'abord caler ce que Gérard
            fait vraiment, ensuite on verra le profil. Semaine type de Gérard ?
MANAGER : Il lance les OF, il gère les 8 de l'atelier, il fait un peu d'impro
          quand une machine lâche, et il parle aux clients quand le commercial n'est pas là.
RECRUTEUR : Sur ces blocs, qu'est-ce qui reste dans le poste ? Le contact client,
            c'est indispensable ou c'est historique ?
MANAGER : Historique. Le commercial peut reprendre. Par contre l'atelier, oui.
RECRUTEUR : D'accord. « Tenir une équipe », concrètement : planning, sécurité,
            qualité, recadrage, formation des nouveaux ?
MANAGER : Surtout sécurité et planning. On a eu un accident l'an dernier.
RECRUTEUR : Donc indispensables : organisation d'atelier, sécurité, planning de 8 personnes.
            Le contact client sort du poste. Sur « les jeunes ne restent pas » :
            on va parler de conditions (horaires, salaire, tutorat), pas d'âge.
            L'âge n'est pas un critère de recrutement.
MANAGER : Je veux quelqu'un qui a 15 ans de chaudronnerie.
RECRUTEUR : Qu'est-ce qui doit déjà avoir été fait en autonomie dès le premier mois ?
            Si c'est « avoir déjà encadré un atelier et lu un planning de charge »,
            on peut ouvrir au-delà de 15 ans d'un seul métier. Sinon on va se fermer.
MANAGER : Ouais… encadrer, oui. Le métier, on peut accompagner un peu.
RECRUTEUR : Je note : encadrement d'équipe de production = indispensable.
            Technicité chaudronnerie = souhaitable, tutorat 2 mois par Gérard à poser.
            Je vous envoie le brief demain. On ne publie pas tant que salaire
            et 2×8 sont confirmés par la direction.`
        ),
        code(
          `DIALOGUE B — variante startup (même canevas, autre langage)

FONDATEUR : On recrute un Customer Success ninja, bilingue, qui a déjà fait du SaaS
            B2B, un peu sales, un peu produit, dispo yesterday, 35 k€, full remote,
            et qui a la culture.
RECRUTEUR : Je reformule le besoin, pas le titre. Quel problème ce poste résout
            dans les 6 mois ?
FONDATEUR : Les clients onboardent mal, on a trop de tickets, le churn nous inquiète.
RECRUTEUR : Succès à 6 mois : onboarding tenu, tickets de niveau 1 traités,
            signaux de désabonnement remontés au produit. C'est ça ?
FONDATEUR : Oui. Et un peu de closing sur les renewals.
RECRUTEUR : Le closing, c'est le même poste ou un second chapeau ? Si les deux
            sont indispensables, on a un profil commercial + CS, donc autre fourchette.
FONDATEUR : OK, CS d'abord. Renewals plus tard.
RECRUTEUR : Indispensables : expliquer le produit, suivre un portefeuille,
            écrire un suivi propre, parler aux utilisateurs. SaaS B2B déjà fait =
            souhaitable. « Ninja » et « culture » : on les traduit en situations
            (priorisation, feedback produit), on ne les met pas dans l'annonce.
            Full remote : règle réelle de l'équipe produit, ou exception ?
            35 k€ et bilingue : je mets en points ouverts, on arbitre avant sourcing.
            Je n'ouvre pas tant que missions des 6 mois et fourchette sont écrites.`
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Dans le dialogue A : rire de la phrase sur « les jeunes » au lieu de recadrer. Dans le B : accepter le titre et le « ninja » pour faire plaisir. Dans les deux : parler canaux (Indeed, LinkedIn) trop tôt. Couper le manager. Ou, à l'inverse, ne jamais reprendre la main. Promettre une shortlist en huit jours alors que les validations manquent."
        ),
        h("Situations particulières"),
        t(
          "Manager qui monopolise : reformulation contrainte toutes les cinq minutes. Manager monosyllabique : appuyez-vous sur une journée type, un incident récent, un planning. Présence d'un RH : ne vous taisez pas, vous restez pilote du brief métier. Cabinet en visio : enregistrez seulement si c'est autorisé par la politique et annoncé ; à défaut, prenez des notes visibles et restituez vite."
        ),
        h("Mise en pratique"),
        t(
          "Brief brut à jouer (15 minutes, vous êtes le recruteur) : « On veut une personne à l'accueil + un peu de facturation, souriante, pas trop vieille, permis, 1 900 €, temps plein, remplacement d'un congé maternité, peut-être un CDI après. » Rédigez votre fil de 8 répliques (questions + recadrages + clôture)."
        ),
        h("Correction détaillée"),
        t(
          "Fil attendu : (1) Origine = remplacement pour absence, durée à clarifier, pas un CDI déguisé sans validation. (2) Missions accueil vs facturation : pourcentage du temps, outils, volume. (3) Recadrage net de « pas trop vieille » : critère interdit, on parle des contraintes du poste (horaires d'ouverture, station debout, pic d'appels). (4) « Souriante » devient qualité de service observable : accueil public, gestion d'impatients. (5) Permis : seulement si déplacements réels. (6) 1 900 € : brut ? grille interne ? (7) Congé maternité : vous ne collectez aucune information sur la situation familiale de quiconque ; vous cadrez la durée du besoin et le contrat possible avec RH. (8) Clôture : restitution écrite, pas de publication tant que contrat (CDD de remplacement vs CDI) et rémunération sont validés. Vous ne dites pas « CDD maternité, donc une femme » : le remplacement d'une absence n'est pas un critère de sexe du candidat."
        ),
      ],
    }),

    lesson({
      title: "Restitution écrite du brief",
      description:
        "Rédiger un brief validable, lisible par le manager, les RH et un collègue recruteur.",
      minutes: 22,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez rédiger une restitution de brief d'une à deux pages, faire valider les points ouverts, et transformer ce document en base de travail pour la fiche de poste. Vous savez ce qui doit rester factuel, et ce qui ne doit pas y figurer."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "La restitution écrite est le livrable du cadrage. Elle n'est pas le compte-rendu exhaustif de la réunion, ni la fiche de poste, ni l'annonce. Elle dit : voici le besoin tel que nous l'avons compris, voici les indispensables, voici les conditions, voici ce qui n'est pas tranché, voici ce que nous faisons ensuite. Sa qualité se mesure à une chose : une personne absente de la réunion peut-elle agir sans vous rappeler ?\n\nÉcrire sert à trois acteurs. Le manager voit s'il a été compris et s'il assume encore ses exigences une fois lues. Les RH voient le contrat, le salaire, les alertes, le circuit. Le recruteur (vous, ou un collègue) sourcera sans dépendre de la mémoire. En cabinet, le document devient aussi une pièce du mandat : ce que le client a validé.\n\nLe style est professionnel, court, sans adjectifs vagues. On écrit « gérer le planning de 8 opérateurs en 2×8 et animer le quart d'heure sécurité » plutôt que « leadership terrain ». On écrit « fourchette 28-32 k€ brut annuel, à confirmer RH » plutôt que « salaire selon profil ». On écrit « point ouvert : Go vs Java » plutôt que de choisir en silence.\n\nCe qui ne doit pas figurer : les critères interdits, les commentaires sur des personnes en poste (« remplacer un amateur »), les diagnostics médicaux, les propos du manager que vous avez recadrés et qui n'ont plus lieu d'être. Si un propos problématique a été tenu, il va dans une alerte RH, pas dans le brief de sourcing.\n\nLa restitution demande une validation. Sans date de validation, elle reste un brouillon. La relance est un acte professionnel, pas une relance commerciale insistante : « Merci de confirmer ou corriger les points 4 et 7 avant mercredi, sans retour le sourcing reste en attente. »"
        ),
        h("Méthode opérationnelle"),
        t(
          "Rédigez sous 24 à 48 heures ouvrées. Structure fixe : contexte et origine ; missions et succès ; profil classé ; conditions d'emploi ; process et décideurs ; points ouverts ; suite. Envoyez au manager, copie RH selon la politique. Relance à J+3 si silence. Archivage dans le dossier du poste (outil interne). Contrôle : relisez en cherchant ce qu'un candidat pourrait croire si ce texte fuitait. Rien d'humiliant, rien d'illicite, rien de faux."
        ),
        note(
          "Bonne pratique : une page et demie suffit pour la plupart des postes. Politique interne : circuit de copie (RH, N+2) selon l'entreprise. Obligation : ne pas écrire d'engagement d'embauche dans un brief, et n'y faire figurer aucune exigence sans lien avec l'emploi."
        ),
        h("Exemple professionnel"),
        t(
          "Le texte ci-dessous est une restitution pour le poste de technicien de maintenance de la PME industrielle vue en leçon 1. Il est volontairement utilisable tel quel comme modèle, à adapter."
        ),
        code(
          `RESTITUTION DE BRIEF — Technicien de maintenance
Ref. poste : MAINT-2026-04    Date : 16/03/2026    Recruteur : [Nom]
Manager : Responsable d'atelier    Copie : RH

1. Origine et enjeu
Remplacement de Patrick D., départ retraite prévu semaine 18.
Le stock pièces sort du poste (reprise par l'appro). Besoin recentré
sur dépannage + préventif + GMAO. Pas de mobilité interne identifiée
à ce stade (alerte transmise RH pour confirmation).

2. Missions et succès
- Dépanner les équipements de production (mécanique, base électrique).
- Réaliser le préventif selon le planning GMAO.
- Renseigner la GMAO à chaque intervention.
- Interfacer production et, si besoin, prestataires.
Succès à 6 mois : préventif tenu, GMAO à jour, astreintes assurées
selon le calendrier de l'équipe (à confirmer : 1 week-end / 4).

3. Profil
Indispensables : lecture de plans simples, dépannage mécanique,
habilitation électrique à obtenir ou déjà détenue (à confirmer RH
selon équipements), travail en 2×8.
Souhaitables : GMAO déjà pratiquée, expérience agro ou pharma.
Hors brief : aucun critère d'âge, de sexe ou de résidence.

4. Conditions
CDI, site [Ville], pas de télétravail (poste atelier).
Fourchette : à valider direction (point ouvert).
Prise de poste souhaitée : S18, réaliste selon préavis.

5. Process
Entretiens : responsable d'atelier puis RH.
Décision : responsable d'atelier + validation RH.
Disponibilité manager : jeudi matin.

6. Points ouverts (bloquants pour le lancement)
- Fourchette de rémunération écrite
- Astreinte : oui/non, fréquence, compensation
- Habilitation : exigée à l'embauche ou formable en 90 jours

7. Suite
Pas de publication tant que le point 6 n'est pas tranché.
Merci de répondre « validé » ou de corriger avant le 18/03.

Ce document n'est pas une offre d'emploi ni une promesse d'embauche.`
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Envoyer des notes brutes de réunion. Oublier les points ouverts pour « rester positif ». Mettre trop de contexte politique interne. Copier-coller l'ancienne fiche. Demander une validation sans date. Rédiger comme une annonce marketing. Inclure « profil jeune et dynamique » parce que le manager l'a dit."
        ),
        h("Situations particulières"),
        t(
          "Manager qui corrige tout au stylo rouge : une version 2, puis un appel, pas dix versions. Double validation manager / RH : un seul document, deux lignes de signature. Cabinet : ajoutez le périmètre du mandat (ce que vous faites, ce que le client fait). Confidentiel : mention claire, liste de diffusion limitée, pas de publication interne large."
        ),
        h("Mise en pratique"),
        t(
          "À partir du dialogue startup de la leçon 7 (Customer Success), rédigez les parties 1, 2, 3 et 6 d'une restitution (origine, missions, profil, points ouverts). Maximum 250 mots."
        ),
        h("Correction détaillée"),
        t(
          "Origine : création liée à un onboarding faible, tickets trop nombreux, risque de départ clients — pas un remplacement. Missions 6 mois : onboarding, portefeuille, tickets de niveau 1, remontées produit ; renewals explicitement hors périmètre dans un premier temps. Profil : indispensables = expliquer le produit, suivre un portefeuille, écrire un suivi, relation utilisateurs ; SaaS B2B et anglais = souhaitables selon arbitrage ; « ninja / culture » absents du document. Points ouverts : fourchette 35 k€, niveau d'anglais réel, règle de remote vs exception, titre exact. La restitution ne promet aucun candidat et ne lance pas le sourcing tant que fourchette et remote ne sont pas écrits. Si vous avez laissé « bilingue, 35 k€, full remote, dispo immédiate » dans les indispensables, le brief reste irréaliste : ce n'est pas une restitution, c'est une copie de la demande initiale."
        ),
      ],
    }),

    quizLesson({
      title: "Quiz — Comprendre le besoin en recrutement",
      description:
        "Vérifier que vous savez cadrer un besoin, classer les exigences et distinguer votre rôle de celui des RH.",
      passing_score: 70,
      minutes: 15,
      questions: [
        q({
          question:
            "Un chef d'atelier vous dit : « Recrutez-moi le même profil que Nadia, elle démissionne. » Quelle est votre première action professionnelle ?",
          options: [
            "A. Publier immédiatement l'ancienne annonce pour ne pas perdre de temps.",
            "B. Recaler l'origine (remplacement) puis faire décrire le travail réel et ce qui doit changer, avant tout sourcing.",
            "C. Refuser le remplacement et imposer une mobilité interne.",
            "D. Demander uniquement le salaire de Nadia, le reste suivra en entretien.",
          ],
          correct: 1,
          explanation:
            "Un remplacement n'est pas un clone automatique. L'origine oriente le cadrage, mais les missions actuelles et souhaitées doivent être revalidées. Vous ne publiez pas l'ancienne annonce en l'état, vous ne décidez pas d'une mobilité, et le salaire seul ne constitue pas un brief.",
        }),
        q({
          question:
            "Parmi ces quatre actes, lequel appartient à la décision RH / direction, et non à la simple vérification du recruteur junior ?",
          options: [
            "A. Noter qu'aucun écrit ne confirme le budget annoncé à l'oral.",
            "B. Demander l'organigramme à jour et le rattachement réel.",
            "C. Trancher l'ouverture du poste en CDI malgré un gel des embauches.",
            "D. Signaler qu'un salarié à temps partiel a demandé à être informé des temps plein.",
          ],
          correct: 2,
          explanation:
            "Vérifier, documenter, alerter : rôle du junior. Ouvrir un poste contre une politique interne ou un gel : décision RH / direction. La priorité éventuelle d'un temps partiel se signale, elle ne se tranche pas seul (le cadre légal est précisé au module 3).",
        }),
        q({
          question:
            "Dans une réunion de cadrage, à quel moment traitez-vous en priorité le salaire et le site d'annonce ?",
          options: [
            "A. En ouverture, pour « être concret » tout de suite.",
            "B. Après le problème à résoudre, les missions et le succès attendu, avec les autres conditions d'emploi.",
            "C. Jamais : le salaire se discute seulement avec le candidat retenu.",
            "D. Uniquement si le manager est de mauvaise humeur, pour le rassurer.",
          ],
          correct: 1,
          explanation:
            "Le salaire et les canaux viennent après le travail à faire. Les omettre jusqu'à l'offre empêche un brief honnête ; les placer en ouverture fausse la conversation et produit des profils décorrélés des missions.",
        }),
        q({
          question:
            "Un manager exige « bac+5, 8 ans, outil rare, langue C1, dispo 15 jours, salaire junior ». Quelle lecture est la plus juste ?",
          options: [
            "A. Brief irréaliste : plusieurs contraintes se contredisent et doivent être arbitrées par scénarios.",
            "B. Brief exigeant mais normal : il suffit de sourcer plus fort.",
            "C. Brief juridique : toutes ces exigences sont des critères interdits.",
            "D. Brief déjà validé : plus il y a d'indispensables, plus le poste est clair.",
          ],
          correct: 0,
          explanation:
            "Ce n'est pas parce qu'une exigence est professionnelle qu'elle peut coexister avec toutes les autres. Diplôme, années, outil, langue ne sont pas des critères interdits en soi ; le problème est l'intersection intenable. Empiler les indispensables n'est pas un signe de clarté.",
        }),
        q({
          question:
            "Quelle formulation a sa place dans une restitution écrite de brief ?",
          options: [
            "A. « Remplacer un amateur : on veut quelqu'un de sérieux, plutôt jeune. »",
            "B. « Gérer le planning de 8 opérateurs en 2×8 et animer le quart d'heure sécurité. »",
            "C. « Profil dynamique, esprit d'équipe, bon relationnel indispensable. »",
            "D. « Promesse d'embauche dès qu'un CV correct arrive. »",
          ],
          correct: 1,
          explanation:
            "La restitution décrit des missions et des faits. Les jugements sur la personne en poste, l'âge, les qualités vagues et tout engagement d'embauche n'y ont pas leur place.",
        }),
        q({
          question:
            "Un manager dit : « Je préfère un homme, l'atelier n'est pas simple. » Que faites-vous dans la réunion ?",
          options: [
            "A. Vous notez le critère pour « coller au terrain » et vous filtrerez discrètement.",
            "B. Vous riez pour détendre, puis vous changez de sujet.",
            "C. Vous recadrez : le sexe n'est pas un critère ; vous parlez des contraintes réelles du poste, et vous alertez RH si la demande persiste.",
            "D. Vous arrêtez immédiatement toute collaboration avec ce manager, sans rien dire aux RH.",
          ],
          correct: 2,
          explanation:
            "Il n'y a pas d'arbitrage possible sur un critère de sexe. Recadrage net, recentrage sur le poste, alerte RH si besoin. Filtrer en secret est une discrimination. L'humour n'efface pas la demande. Couper tout lien sans informer RH laisse le risque intact.",
        }),
        q({
          question:
            "Quand l'origine du besoin est un accroissement d'activité, quelle question est la plus utile avant d'ouvrir un CDI ?",
          options: [
            "A. « Quel est le signe astrologique du manager ? »",
            "B. « L'organisation actuelle (heures, intérim, process, répartition) a-t-elle été examinée, et le volume est-il durable ? »",
            "C. « Peut-on cloner le meilleur élément de l'équipe, à l'identique ? »",
            "D. « Peut-on publier dès ce soir pour créer de l'activité visible ? »",
          ],
          correct: 1,
          explanation:
            "Un accroissement peut se traiter par l'organisation, un relais court ou un recrutement. Recruter un clone ou publier pour « montrer du mouvement » ne vérifie pas si le besoin est durable.",
        }),
        q({
          question:
            "Dans la grille de brief, pourquoi demander « qui peut dire non ? » en plus de « qui rencontre les candidats ? »",
          options: [
            "A. Pour identifier le circuit de décision réel, souvent différent du circuit de demande.",
            "B. Pour éviter d'inviter les RH aux entretiens.",
            "C. Pour permettre au recruteur junior de décider seul en cas de désaccord.",
            "D. Parce que la loi impose de n'avoir qu'un seul décideur nommé.",
          ],
          correct: 0,
          explanation:
            "Les personnes qui voient les candidats ne sont pas toujours celles qui tranchent. Sans ce point, les shortlists sont retoquées tard. Ce n'est ni une obligation légale de décideur unique, ni un permis de contourner RH.",
        }),
        q({
          question:
            "Un fondateur de startup veut un « ninja full remote, 35 k€, qui code, vend et recrute ». Quelle est la meilleure prochaine étape ?",
          options: [
            "A. Rédiger une annonce sur ce ton pour attirer la « culture ». ",
            "B. Figer les missions des 6 premiers mois, séparer les chapeaux, et arbitrer fourchette et règle de remote avant sourcing.",
            "C. Promettre un profil senior en expliquant que le titre fera passer le salaire.",
            "D. Refuser tout recrutement en startup tant qu'il n'y a pas de DRH.",
          ],
          correct: 1,
          explanation:
            "Le canevas est le même qu'en industrie : travail, puis profil, puis conditions. Le vocabulaire « ninja » n'est pas un brief. L'absence de DRH n'interdit pas de cadrer ; elle rend l'écrit encore plus nécessaire.",
        }),
        q({
          question:
            "Vous n'avez qu'un accord oral du dirigeant, à la machine à café, pour un CDI cariste. Que faites-vous ?",
          options: [
            "A. Vous ouvrez l'annonce le jour même, l'oral du dirigeant suffit en TPE/PME.",
            "B. Vous documentez l'absence d'écrit, faites confirmer budget et contrat, et vous ne publiez pas tant que ce n'est pas daté.",
            "C. Vous transformez d'office le besoin en intérim, sans en parler.",
            "D. Vous demandez au cariste intérimaire déjà présent de signer une promesse.",
          ],
          correct: 1,
          explanation:
            "En TPE comme en ETI, un oral informel n'est pas une validation budgétaire. Vous ne changez pas seul le type de contrat et vous ne formulez aucune promesse. Vous faites écrire, puis vous lancez.",
        }),
      ],
    }),
  ],
};
