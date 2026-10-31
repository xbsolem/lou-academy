import { lesson, h, t, note, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 10,
  title: "Conduire un entretien professionnel",
  description:
    "Accueillir, écouter, relancer, gérer le temps et les situations difficiles, prendre des notes exploitables, et s'entraîner sur cinq simulations complètes.",
  lessons: [
    lesson({
      title: "Accueillir, poser le cadre et dérouler l'entretien",
      description:
        "Ouvrir l'entretien, créer un climat professionnel, annoncer le déroulé et le tenir jusqu'à la clôture.",
      minutes: 22,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À l'issue de cette leçon, vous saurez ouvrir un entretien en présentiel ou à distance, poser un cadre clair (durée, participants, notes, suite), installer un climat professionnel sans familiarité, et enchaîner les blocs prévus sans verdict en fin de séance."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Les premières minutes ne servent pas à « briser la glace » par des questions de vie privée. Elles servent à réduire l'incertitude : qui vous êtes, combien de temps dure l'échange, ce qui va se passer, ce qui se passera après. Un candidat qui ne sait pas s'il a 20 ou 60 minutes, s'il peut prendre des notes, ou si le silence du manager signifie un jugement, consacre une partie de son attention à se protéger. Cette attention-là n'évalue pas la compétence. Le climat professionnel est donc un climat prévisible, courtois, égal pour tous.\n\nL'accueil n'est pas un moment hors évaluation juridique. Dès que vous posez une question, L. 1221-6 s'applique : lien direct et nécessaire avec l'emploi. « Vous avez fait bon voyage ? » peut rester une politesse courte. « Vous habitez dans le quartier ? Ça va être pratique avec les enfants ? » devient une collecte d'informations illicites ou sans lien nécessaire (lieu de résidence et situation de famille sont des critères protégés, L. 1132-1). La familiarité n'est pas une qualité d'accueil. La clarté l'est.\n\nLe déroulé annoncé est un contrat d'attention. Si vous annoncez un cas pratique et que vous ne le faites jamais, le candidat part avec une information fausse sur le process. Si vous promettez « on vous rappelle lundi » et que personne n'appelle, vous dégradez l'expérience et, selon les propos tenus, vous pouvez créer une attente excessive. Vous n'êtes pas tenu par la loi de motiver un refus, nous y reviendrons. Vous êtes tenu de ne pas induire en erreur sur l'emploi (esprit de L. 5331-3, allégations trompeuses dans les offres : le même exigence d'honnêteté s'applique à l'oral).\n\nTenir le déroulé, c'est aussi protéger l'équité. Le candidat de 9 h n'a pas à vivre un entretien de découverte ; celui de 16 h, fatigué, un interrogatoire. Vous suivez le guide. Vous pouvez relancer. Vous ne changez pas de métier à la troisième réponse qui vous plaît. La clôture est un acte professionnel : remerciement, étapes, date de prochaine communication, invitation à ajouter un élément professionnel. Pas de classement à chaud. Pas de « c'était le meilleur entretien de la semaine ».\n\nLe climat se construit aussi par le corps et l'environnement : regard, silence laissé après une question, absence de soupirs, porte fermée, pas de notification d'écran. Ces éléments ne sont pas du théâtre. Ils signalent que le temps du candidat est traité comme un travail, pas comme une interruption."
        ),
        h("Méthode opérationnelle"),
        t(
          "Avant l'heure : salle prête, dossiers du seul candidat visible, eau, horloge face à vous. En visio : lien ouvert, micro testé, fond neutre, notifications coupées, numéro de téléphone de secours sous les yeux.\n\nMinute 0 à 5 : poignée de main ou salut visio, présentation des fonctions, durée, déroulé, notes, aménagement si déjà signalé, question « êtes-vous en mesure de tenir l'horaire prévu ? ». Puis première question de parcours, déjà rédigée.\n\nPendant : à chaque changement de bloc, une phrase de transition (« Nous allons maintenant prendre deux situations concrètes »). Si vous prenez du retard, vous le dites et vous arbitrerez (voir leçon sur le temps).\n\nMinute finale : clôture scriptée, accompagnement, notes rangées, pas de commentaire dans le couloir. Le débrief avec le manager commence après la sortie du candidat, pas avant."
        ),
        h("Exemple professionnel"),
        t(
          "PME de 80 personnes, recrutement d'un assistant ADV. La DRH junior accueille au rez-de-chaussée, annonce l'étage, présente le responsable commercial déjà installé. Elle dit : « Nous avons 45 minutes. D'abord votre parcours ADV, puis des situations de commandes, puis vos questions. Je note des faits. La prochaine étape, si nous poursuivons, est un essai sur notre outil interne la semaine prochaine ; vous en serez informé au préalable. » Le responsable commercial n'enchaîne pas sur le week-end du candidat. L'ouverture a duré quatre minutes. Le candidat pose son sac, respire, et peut travailler."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Commencer par « parlez-moi de vous » sans cadre. Le candidat raconte sa vie ; vous perdez le temps métier.\n\nS'excuser dix minutes d'un retard du manager en dénigrant l'entreprise. Un fait suffit : « [Prénom] a un imprévu de dix minutes ; nous commençons le cadre, il nous rejoint pour le bloc métier. »\n\nRire d'un incident (badge, visio) en commentant le stress du candidat. Vous évaluez alors la capacité à rire avec vous, pas le poste.\n\nClôturer par un verdict positif pour être aimable. Vous créez une attente que vous ne maîtrisez pas."
        ),
        h("Situations particulières"),
        t(
          "Candidat qui arrive très en avance : proposez un espace d'attente calme, pas un début anticipé qui raccourcit le candidat suivant.\n\nCandidat interne : l'accueil reste formel. La connivence de couloir (« tu connais déjà la maison ») réduit l'équité vis-à-vis des externes et encourage les sous-entendus.\n\nPanel de trois personnes : une seule ouverture, une seule clôture, les autres se présentent en une phrase. Sinon le cadre dure quinze minutes."
        ),
        h("Mise en pratique"),
        t(
          "Rédigez votre script d'ouverture (120 à 180 mots) pour un entretien visio de 50 minutes, vous + un manager, poste de chargé de clientèle. Incluez notes, déroulé, suite du process, et une phrase sur les questions hors sujet. Puis indiquez deux phrases d'accueil que vous n'utiliserez pas."
        ),
        h("Correction détaillée"),
        t(
          "Script acceptable : présentation, durée 50 minutes, blocs (parcours, situations, cas, questions du candidat), notes factuelles, information sur l'étape suivante sans promesse, invitation à signaler une question sans lien avec le poste, vérification de l'horaire et de la qualité audio. Phrases à écarter : « Alors, vous êtes marié, vous avez fait du chemin ? » et « Ne soyez pas stressé, on est cool ici, on va parler de tout. » La première est illicite ou hors lien d'emploi. La seconde annonce un entretien non professionnel et ouvre la vie privée."
        ),
      ],
    }),
    lesson({
      title: "Écouter, reformuler, poser des questions ouvertes et relancer",
      description:
        "Obtenir des faits professionnels par l'écoute active, la reformulation neutre et des relances STAR, sans induire la réponse.",
      minutes: 22,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez distinguer question ouverte, fermée, inductive et multiple, reformuler sans mettre vos mots dans la bouche du candidat, et relancer jusqu'à l'action et au résultat, tout en restant dans le champ de L. 1221-6."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "L'entretien n'est pas un débat. Votre parole sert à ouvrir un espace de faits, pas à démontrer que vous connaissez le métier mieux que le candidat. L'écoute professionnelle est une écoute orientée : vous cherchez des preuves liées aux critères, vous laissez du silence, vous notez, vous relancez. Elle n'est pas une écoute thérapeutique. Vous ne recueillez pas la vie intérieure de la personne. Vous recueillez des situations de travail, des décisions, des résultats.\n\nLa reformulation a une fonction de contrôle, pas de séduction. « Si je comprends bien, vous étiez responsable du planning de quatre personnes, pas du recrutement » permet au candidat de corriger. « Donc vous étiez un vrai manager, bravo » n'est pas une reformulation : c'est un jugement qui oriente la suite. Une reformulation neutre reprend les faits, le périmètre, le temps, les acteurs. Elle ne reprend pas les émotions au-delà de ce qui éclaire le comportement professionnel (« le client était en colère ; qu'avez-vous fait alors ? »).\n\nLes questions ouvertes commencent souvent par comment, qu'avez-vous, décrivez, racontez une situation. Elles produisent de la matière. Les questions fermées (oui/non, déjà fait/jamais) sont utiles pour un point précis (« Avez-vous déjà saisi des opérations dans un outil de caisse ? ») puis doivent être suivies d'une ouverture (« Dans quel contexte, avec quel contrôle ? »). Les questions inductives suggèrent la norme (« Vous êtes quelqu'un de ponctuel, n'est-ce pas ? »). Elles sont inutiles et, si elles touchent un critère protégé, dangereuses. Les questions multiples demandent trois réponses à la fois ; le candidat choisit la plus confortable et vous croyez avoir tout couvert.\n\nLa relance STAR est une discipline. Après la situation, beaucoup de candidats parlent de « nous ». Relance : « Quelle était votre part, distincte de celle de l'équipe ? » Après une intention (« j'aurais dû »), relance : « Qu'avez-vous fait à ce moment-là ? » Après une action sans résultat : « Qu'est-il advenu ? Comment le savez-vous ? » Deux ou trois relances suffisent. Au-delà, vous harcelez un point et vous perdez le temps des autres critères.\n\nL'écoute inclut ce que vous ne poursuivez pas. Si le candidat glisse vers la santé, la famille, les origines, vous ne relancez pas. Vous ramenez au poste : « Pour en revenir à l'organisation de l'accueil… » Continuer par politesse, c'est collecter une donnée que vous n'avez pas le droit d'utiliser, et que vous risquez d'utiliser malgré vous."
        ),
        h("Méthode opérationnelle"),
        t(
          "Une question à la fois. Silence de trois à cinq secondes après la réponse apparente : souvent la précision vient ensuite. Notez un fait, pas un adjectif. Relancez avec les mots du candidat (« vous dites “on a cadré le client” : que dit “on” ? »).\n\nInterdiction opérationnelle : ne pas enchaîner votre propre anecdote. « Moi aussi, en agence… » vole le temps et recentre l'entretien sur vous.\n\nSi vous ne comprenez pas un jargon : « Pouvez-vous me le dire comme à un client ? » C'est une relance métier, pas un aveu d'incompétence.\n\nContrôle en cours de séance : ai-je au moins un fait d'action et un résultat pour chaque critère essentiel ? Sinon, une relance ciblée avant de changer de bloc."
        ),
        h("Exemple professionnel"),
        t(
          "Industrie, poste de technicien SAV sédentaire. Le candidat dit : « Je suis très autonome, on me laisse gérer. » Recruteur : « Prenez une intervention récente que vous avez conduite du début à la fin. Quel était le problème, quelle était votre responsabilité, quelles actions, quel résultat pour le client interne ? » Le candidat décrit alors une panne, un appel au fournisseur, une consigne de sécurité, un délai de 48 h. La reformulation : « Vous avez bloqué la machine, appelé le fournisseur, et livré un délai au chef d'atelier. C'est bien cela ? » Le candidat corrige : le blocage a été décidé avec le chef. Le périmètre devient exact. Sans cette reformulation, la grille aurait noté une autonomie surévaluée."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Hocher la tête en souriant dès qu'une réponse « ressemble » à la culture d'entreprise. Vous entraînez le candidat vers vos attentes.\n\nReformuler en plus positif que le récit (« donc c'était un succès ») alors que le candidat parlait d'un échec utile.\n\nPoser « pourquoi » de façon accusatoire sur un trou de CV. Préférez « comment cette période s'inscrit-elle dans votre parcours professionnel ? » et arrêtez-vous au lien avec l'emploi.\n\nPrendre des notes seulement quand la réponse déplaît. Le candidat le voit et se ferme."
        ),
        h("Situations particulières"),
        t(
          "Candidat qui répond par monosyllabes : une question plus étroite, puis élargissement. « Sur telle mission du CV, quelle était la première tâche de votre journée type ? » Ensuite seulement le STAR large.\n\nCandidat très à l'aise à l'oral : le risque est l'inverse, l'absence de faits. Relances plus fréquentes sur l'action et le résultat.\n\nInterprète ou aménagement : parlez au candidat, pas à l'accompagnant. Phrases courtes. Même critères."
        ),
        h("Mise en pratique"),
        t(
          "Réponse du candidat : « On a sauvé un gros client avec l'équipe, c'était chaud, je suis quelqu'un de combat. » Écrivez : (1) une reformulation neutre ; (2) trois relances STAR ; (3) une relance que vous n'utilisez pas, parce qu'inductive ou hors sujet."
        ),
        h("Correction détaillée"),
        t(
          "Reformulation : « Vous avez participé à une situation où un client important était en risque, avec votre équipe. Je souhaite préciser votre rôle. » Relances : « Quel était le risque, pour qui, à quelle échéance ? » « Quelle décision avez-vous prise, vous, distincte de l'équipe ? » « Quel a été le résultat mesurable, et comment l'avez-vous su ? » Relance à écarter : « Vous êtes battant, c'est pour ça que ça a marché, non ? » ou « Ce client, c'était un copain ? »"
        ),
      ],
    }),
    lesson({
      title: "Gérer le temps sans sacrifier l'équité",
      description:
        "Tenir une durée cible, arbitrer ce que l'on coupe, et éviter qu'un candidat parle 70 minutes tandis que le suivant en a 25.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez construire un minuteur mental par bloc, interrompre avec courtoisie, décider ce qui est non négociable (critères essentiels, questions du candidat, clôture) et reporter plutôt que bricoler un entretien inégal."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le temps n'est pas un détail de planning. C'est un facteur d'équité. Deux candidats comparés sur une grille unique n'ont pas été évalués de la même façon si l'un a disposé du double de minutes sur les compétences essentielles. L'entreprise n'a pas d'obligation légale de fixer une durée identique à la minute près. Elle a une obligation de ne pas discriminer (L. 1132-1) et une exigence professionnelle de comparabilité. Une durée cible, tenue, est une bonne pratique. Une durée qui s'allonge « parce que le feeling est bon » est un biais.\n\nGérer le temps, c'est aussi respecter le candidat et les personnes qui attendent. Un débordement chronique signale que le guide est trop chargé, que vous n'interrompez pas, ou que le manager a pris le contrôle. L'interruption professionnelle n'est pas un affront. C'est une phrase de cadrage : « Je vous arrête pour que nous ayons le temps du cas pratique, qui est important pour le poste. » Les candidats sérieux le comprennent. Ceux qui ne supportent aucun cadre vous donnent une information sur le travail en agence, à condition de ne pas en faire un jugement de personnalité hors critère.\n\nCe que vous ne coupez pas : l'ouverture (courte), au moins un STAR par critère essentiel, au moins un situationnel critique, les questions du candidat (réduites, pas supprimées), la clôture. Ce que vous pouvez compresser : le récit de parcours trop long, les anecdotes hors critère, le second situationnel, les questions de curiosité. Ce que vous ne faites pas : supprimer les questions du candidat pour « finir les vôtres », ou improviser quinze minutes de conversation parce que vous avez de l'avance.\n\nLe retard du candidat n'autorise pas un entretien humiliant de quinze minutes « pour lui apprendre ». Soit le créneau restant permet les blocs essentiels, soit vous replanifiez. Le retard du manager ne se rattrape pas en parlant plus vite sur un ton d'interrogatoire. Vous partez sur le cadre, vous réduisez le bloc qu'il devait animer, ou vous replanifiez le bloc métier.\n\nEnfin, le temps de prise de notes fait partie du temps d'entretien. Si vous écrivez sans écouter, vous perdez des faits. Si vous n'écrivez pas pour « gagner du temps », vous perdrez la comparaison le soir. Notez des mots-clés en séance, complétez cinq minutes à chaud pendant que le candidat sort, avant le débrief."
        ),
        h("Méthode opérationnelle"),
        t(
          "Écrivez les minutes sur le guide : 0-5 cadre, 5-13 parcours, etc. Une montre visible. À mi-séance, un point silencieux : suis-je dans le bon bloc ?\n\nPhrases d'arbitrage, préparées : « Nous avons cinq minutes sur ce thème, puis nous passons au cas. » « Je synthétise ce que j'ai noté, dites-moi si je me trompe, puis nous avançons. »\n\nSi le manager déborde : « [Prénom], je propose que l'on garde dix minutes pour les questions de [candidat], comme convenu. » C'est votre rôle de cadre, annoncé en amont.\n\nSi visio + incident technique de plus de cinq minutes : proposer de poursuivre au téléphone sur le même guide, ou reporter. Ne pas compter l'incident comme une « mauvaise gestion du stress » sauf si le poste est précisément de gérer une crise technique et que vous l'évaluez à critères constants, ce qui est rare et doit être prévu."
        ),
        h("Exemple professionnel"),
        t(
          "Cabinet, entretien de 40 minutes pour un consultant junior. À la minute 25, le candidat est encore sur son stage de M1. Le consultant dit : « Je retiens votre mission de cartographie. Pour le poste, j'ai besoin d'une situation de priorisation, puis d'un cas, puis de vos questions. » L'entretien se termine à 41 minutes. Le candidat suivant n'est pas reculé. La grille du premier n'est pas plus riche en adjectifs ; elle l'est en un STAR utile."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Laisser parler par peur d'être impoli, puis ruminer que « c'était trop long » dans la grille, ce qui n'est pas un critère.\n\nCouper le candidat réservé et jamais le candidat senior. Biais de statut.\n\nEnchaîner deux entretiens sans vide. Vous recyclez des questions et des humeurs.\n\nAnnoncer 60 minutes dans la convocation et faire 25. Le candidat a organisé sa journée sur votre parole."
        ),
        h("Situations particulières"),
        t(
          "Candidat qui doit partir à l'heure pile (garde d'enfant, autre entretien, transport). Vous ne demandez pas le motif intime. Vous tenez l'horaire. Si le motif surgit, vous n'en faites pas un critère (situation de famille, L. 1132-1).\n\nJournée de fournée (six entretiens) : pauses réelles, même script, eau, interdiction de dire au dernier « on a déjà quelqu'un d'excellent ce matin ».\n\nTraduction ou aménagement de temps : le temps supplémentaire porte sur l'expression, pas sur un critère plus clément. Documentez l'aménagement, pas le diagnostic."
        ),
        h("Mise en pratique"),
        t(
          "Il vous reste 12 minutes. Il vous manque le situationnel éthique (critère pondéré 3), les questions du candidat, et la clôture. Le manager veut « encore un peu de parcours ». Que dites-vous, et dans quel ordre finissez-vous ?"
        ),
        h("Correction détaillée"),
        t(
          "Vous dites : « Nous avons 12 minutes. Je propose le cas éthique (5 à 6 minutes), puis vos questions (4 minutes), puis la suite du process. Le parcours, nous l'avons suffisamment pour aujourd'hui. » Le critère pondéré 3 passe avant le confort du récit. Les questions du candidat ne sautent pas. La clôture tient en 90 secondes. Vous ne promettez pas un second entretien pour rattraper le parcours sauf si c'est le process réel, offert selon des règles claires, pas selon le feeling."
        ),
      ],
    }),
    lesson({
      title: "Situations difficiles : stress, silences, monopolisation, réponses préparées, contradictions",
      description:
        "Conduire l'entretien lorsque le candidat se fige, parle trop, récite, ou se contredit, sans basculer dans le piège ou la compassion hors cadre.",
      minutes: 24,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez reconnaître cinq situations fréquentes et appliquer une conduite : stress invalidant, candidat peu bavard, candidat trop bavard, réponses trop préparées, contradictions entre CV et oral. Vous resterez dans l'évaluation professionnelle, sans question de santé et sans humiliation."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Un entretien provoque un stress normal. Votre rôle n'est pas de le faire disparaître, ni de le transformer en épreuve de résistance. Le stress devient un problème d'évaluation lorsqu'il empêche d'obtenir des faits : voix bloquée, réponses vides, rire nerveux qui n'avance pas. Vous pouvez alors nommer le cadre, proposer une question plus étroite, offrir une minute, rappeler que des notes sont normales. Vous ne demandez pas « vous êtes suivi ? », « vous êtes anxieux dans la vie ? ». L'état de santé est un critère protégé (L. 1132-1). Le poste peut exiger de parler à des clients sous tension : testez-le par un situationnel professionnel, pas par un diagnostic.\n\nLe candidat peu bavard n'est pas un candidat sans compétence. Il peut être précis, prudent, ou simplement peu entraîné à l'exercice. Votre levier est la question étroite, l'exemple du CV, le situationnel. Si après deux relances concrètes il n'y a toujours aucun fait, vous notez « preuves insuffisantes sur ce critère », pas « personnalité introvertie ». L'introversion n'est pas un critère d'embauche.\n\nLe candidat trop bavard n'est pas « bon en relation client » par le seul volume de parole. En agence, monopoliser empêche d'écouter. Vous interrompez avec un résumé factuel et une question fermée de cadrage, puis une ouverte ciblée. Si la monopolisation continue, c'est une information pour le critère écoute, documentée par des faits de séance, pas par de l'agacement.\n\nLes réponses préparées (« mon défaut, c'est que je suis trop perfectionniste ») sont normales. Elles ne sont pas une fraude. Votre relance casse le slogan : « Prenez la dernière fois où ce perfectionnisme a eu un effet sur un délai. » Si le candidat ne quitte jamais l'abstraction, vous manquez de preuves. Ce n'est pas à vous de lui inventer un exemple.\n\nLes contradictions (dates, titres, résultats) se traitent comme des clarifications, pas comme un cross-examination. « Sur le CV, l'équipe est de cinq personnes ; à l'instant vous dites deux. Pouvez-vous préciser le périmètre ? » Le candidat peut avoir simplifié, arrondi, ou enjolivé. Vous notez l'écart et la qualité de l'explication. Un mensonge caractérisé sur une habilitation, un diplôme requis ou un emploi est un fait grave, à traiter avec les RH, pas à « coincer » en public pour marquer un point. Vous n'inventez pas de piège. Vous demandez une précision, une fois, calmement."
        ),
        h("Méthode opérationnelle"),
        t(
          "Stress : phrase courte (« Nous n'attendons pas une performance oratoire. Prenons un exemple précis de votre CV, ligne 3. »). Eau, silence. Si cela persiste, situationnel écrit éventuellement, selon aménagement et politique interne.\n\nPeu bavard : question de journée type, puis STAR sur un incident. Éviter « vous ne parlez pas beaucoup ».\n\nTrop bavard : « Je synthétise en une phrase… Est-ce exact ? Nous passons à… » Horloge visible.\n\nPréparé : « Concrètement, mardi dernier… » Exiger un lieu, un interlocuteur (fonction, pas nom si confidentiel), une action, un chiffre ou un livrable.\n\nContradiction : pointer les deux versions, demander la précision, noter, ne pas sourire d'un air de victoire, passer à la suite. Alerter RH si l'élément est constitutif du poste (diplôme exigé, habilitation)."
        ),
        h("Exemple professionnel"),
        t(
          "Services, poste de gestionnaire paie junior. La candidate récite une définition du bulletin. Le recruteur : « Prenez un bulletin que vous avez contrôlé en stage. Quelle anomalie, qu'avez-vous fait, qui a validé, quel était l'écart ? » Elle décrit alors une prime mal paramétrée, un signalement au tuteur, une correction. La réponse préparée a cédé. Sans cette relance, la grille aurait noté « bonne théorique » sans preuve d'action."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Ironiser (« vous avez appris la leçon par cœur ? »). Vous fermez l'entretien et vous vous affichez comme juge.\n\nCompléter les silences par vos propres exemples, que le candidat n'a plus qu'à approuver.\n\nTransformer une contradiction de date en soupçon moral général (« on ne peut pas lui faire confiance »).\n\nOffrir un café et une conversation personnelle pour « détendre » un candidat stressé, puis noter des éléments familiaux entendus."
        ),
        h("Situations particulières"),
        t(
          "Candidat qui pleure : pause, mouchoir, proposition de reporter. Pas d'enquête sur la cause. Reprise sur un thème factuel ou clôture bienveillante si la personne ne peut continuer. Le report n'est pas un KO.\n\nCandidat agressif ou méprisant : cadre une fois (« nous restons sur un échange professionnel »). Si cela continue, clôture anticipée, notes factuelles, information au responsable. La sécurité prime.\n\nCandidat qui filme sans accord : rappel de la confidentialité et de la politique interne. Vous pouvez refuser de poursuivre si l'enregistrement n'est pas autorisé. Vous ne saisissez pas le téléphone."
        ),
        h("Mise en pratique"),
        t(
          "Le CV indique « responsable d'équipe, 8 personnes, 2023-2025 ». À l'oral : « J'aidais le manager, on était deux sur le planning. » Rédigez le dialogue de clarification (4 répliques) et la mention à porter dans la grille."
        ),
        h("Correction détaillée"),
        t(
          "Recruteur : « Je souhaite aligner deux éléments. Le CV mentionne une responsabilité d'équipe de huit personnes. Vous indiquez une aide au planning à deux. Quel était votre rôle officiel, vos actes (recrutement, entretiens, sanctions, planning, reporting) ? » Candidat : précise. Recruteur : « Donc le recrutement et l'évaluation restaient au manager, et vous réalisiez le planning hebdomadaire. C'est exact ? » Mention grille : « Périmètre encadrement à confirmer : planning oui, évaluation non, titre CV surdimensionné ; explication cohérente / incohérente » selon la réponse. Pas de mention « menteur »."
        ),
      ],
    }),
    lesson({
      title: "Questions du candidat, prise de notes et compte rendu",
      description:
        "Répondre sans vendre un poste fictif, noter des faits exploitables, rédiger un compte rendu confidentiel et comparable.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez gérer le temps des questions du candidat, prendre des notes factuelles pendant et après la séance, et rédiger un compte rendu utile au manager, compatible avec le RGPD et avec la confidentialité des résultats (L. 1221-8)."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Les questions du candidat ne sont pas un bonus de fin de séance. Elles font partie de l'évaluation professionnelle : compréhension du poste, priorités, réalisme, préparation. Elles font aussi partie de l'information due : un candidat qui découvre après coup des horaires, un lieu ou une rémunération sans rapport avec ce qui a été dit a été mal informé. L'article L. 5331-3 interdit les allégations fausses ou trompeuses dans les offres d'emploi. À l'oral, la même exigence d'honnêteté s'impose. Si vous ne savez pas, vous le dites et vous écrivez après. Vous n'inventez pas une « belle culture » pour conclure en beauté.\n\nLa prise de notes est un traitement de données personnelles. Vous notez le nécessaire à l'évaluation : faits, exemples, écarts, questions du candidat, suite proposée. Vous ne notez pas « look », « accent », « trop vieux », « elle a parlé de son fils ». Ces mentions, même privées, peuvent révéler un critère illicite et se retourner contre l'entreprise. Les résultats des méthodes d'aide au recrutement sont confidentiels (L. 1221-8). Un compte rendu n'est pas un fil de discussion d'équipe, ni une pièce jointe envoyée à tout le service.\n\nUn bon compte rendu est lisible par quelqu'un qui n'était pas dans la salle : contexte (poste, date, durées, participants), faits par critère, notes de grille, points de vigilance professionnels, recommandation d'étape (poursuivre / réserve / arrêter) avec motif lié au poste. Il n'est pas un roman. Il n'est pas un SMS. La recommandation d'étape n'est pas une promesse d'embauche.\n\nLe candidat n'a pas d'obligation légale générale d'obtenir la motivation détaillée d'un refus. Il a des droits sur ses données (accès, notamment, dans le cadre du RGPD). Vos notes doivent pouvoir être assumées si un droit d'accès s'exerce, selon les modalités internes et les exceptions éventuelles. Écrivez dès le départ comme si le texte pouvait être relu. Ce n'est pas une consigne de langue de bois : c'est une consigne de faits professionnels.\n\nLa conservation des notes suit la politique interne et le référentiel CNIL sur les durées RH (vérifié dans legal-sources.json, 13/10/2026) : le candidat non retenu n'a pas vocation à rester en base active indéfiniment ; un archivage intermédiaire à des fins probatoires n'est pas une CVthèque de travail. Vous rangez le CR dans l'outil prévu, pas dans votre messagerie personnelle."
        ),
        h("Méthode opérationnelle"),
        t(
          "Pendant : mots-clés, citations courtes, chiffres, périmètres. Une marge « à clarifier ». Pas de smiley, pas de diagnostic.\n\nJuste après : 5 à 8 lignes à chaud, grille terminée, avant de parler au manager. Puis débrief. Puis CR dans le modèle interne le jour même.\n\nQuestions du candidat : répondre dans le cadre validé (fiche de poste, fourchette si la politique le permet — indiquer le salaire dans l'offre n'est pas, au 13/10/2026, une obligation interne française consolidée, directive européenne en transposition). Ne pas improviser d'avantages. Noter les questions : elles éclairent parfois un malentendu sur le poste.\n\nDiffusion du CR : manager du poste, RH selon process, pas le futur collègue « pour avis look and feel ». Mention confidentielle."
        ),
        h("Exemple professionnel"),
        t(
          "ETI industrielle, entretien d'un coordinateur qualité. CR du recruteur : « 3 octobre, 55 min, présentiel, avec la responsable qualité. Faits : a décrit un non-conformité client, a bloqué un lot, a rédigé une 8D avec le fournisseur, résultat : réclamation close en 12 jours. Situationnel pic d'audits : a priorisé par risque, pas par ordre d'arrivée. Question du candidat : rythme des audits internes et formation ISO — en lien avec le poste. Note éthique 3/4, priorisation 3/4, pédagogie 2/4 (exemple encore scolaire). Recommandation : second entretien technique. » Pas de phrase sur l'apparence ou l'âge."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Noter uniquement ce qui cloche. Le CR devient un réquisitoire inutilisable pour convaincre un manager, et biaisé.\n\nCopier-coller le CR du candidat précédent en changeant le nom. Erreur grave, mélange de données.\n\nPromettre une réponse « dans la semaine » sans l'écrire dans l'outil de suivi. La promesse orale se perd ; le candidat vit un ghosting.\n\nLaisser les feuilles de notes sur l'imprimante du plateau."
        ),
        h("Situations particulières"),
        t(
          "Manager qui veut un avis oral « juste deux minutes » et refuse le CR. Vous rédigez quand même les faits dans l'outil : la mémoire orale n'est pas un dossier.\n\nCandidat qui demande « alors, c'est oui ? » : rappel du process et de la date de communication. Pas de verdict.\n\nDemande d'accès aux notes : vous ne répondez pas seul. Vous transmettez à la personne ou au process RGPD interne."
        ),
        h("Mise en pratique"),
        t(
          "À partir de ces notes brutes : « motivé +++ / un peu bof sur Excel / a parlé de sa mère malade / look ok / STAR client 3/4 / cas crédit : a dit qu'il vendrait quand même si objectif ». Rédigez le CR professionnel (10 lignes) : ce que vous gardez, ce que vous supprimez, ce que vous reformulez, et l'alerte éthique."
        ),
        h("Correction détaillée"),
        t(
          "À supprimer : look, mère malade (santé / famille, critères protégés, hors L. 1221-6). À reformuler : « motivé +++ » devient des faits (questions sur la formation produits, mobilité vers ce réseau). « Un peu bof sur Excel » devient : « n'a pas illustré de suivi de portefeuille sur tableur ; à tester si le poste l'exige, avec information préalable si test. » Alerte : la réponse sur le crédit (« vendrait quand même ») est un fait grave pour l'éthique commerciale, à reporter tel quel, avec la question posée. Recommandation d'étape : réserve forte ou arrêt selon la pondération du critère éthique, pas selon le look."
        ),
      ],
    }),
    lesson({
      title: "Simulations 1 à 3 — junior peu d'exemples, profil qui monopolise, recentrage sur le personnel",
      description:
        "Trois dialogues complets à analyser : obtenir des preuves malgré le manque d'exemples, recadrer un expert bavard, ramener un candidat qui parle de sa vie privée.",
      minutes: 35,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez identifier, dans un dialogue réel, les relances qui produisent des faits et celles qui aggravent la situation. Vous attacherez une conduite à trois profils fréquents : junior motivé, expérimenté monopolisant, candidat centré sur le personnel."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "La conduite d'entretien s'apprend moins par des listes de conseils que par l'observation de tours de parole. Les trois simulations ci-dessous se déroulent sur le même poste fictif : chargé de clientèle, Banque des Vallées, agence de détail. Le guide est celui du module précédent. Seule la conduite du recruteur change la qualité des preuves. Lisez-les comme un entraînement, pas comme du théâtre : chaque réplique du recruteur est un choix que vous pourrez copier ou écarter.\n\nLe junior motivé manque souvent d'exemples « identiques ». Ce n'est pas un KO si le poste est ouvert aux débutants. Le piège est double : se contenter de l'enthousiasme, ou humilier par un STAR impossible (« une négociation de crédit de 200 k€ »). Le bon levier est le transférable : magasin, centre d'appels, association, stage, plus un situationnel bancaire simple.\n\nLe profil expérimenté qui monopolise produit une illusion de richesse. Vous sortez impressionné et votre grille est vide. L'interruption n'est pas un manque de respect dû au senior. C'est la condition pour tester l'écoute, l'éthique et la pédagogie, qui ne se déduisent pas d'un titre.\n\nLe candidat qui ramène tout au personnel n'est pas nécessairement de mauvaise foi. Il a appris que « l'authenticité » se raconte. Votre devoir est de ne pas collecter la vie privée, de ne pas relancer sur la famille ou la santé, et de revenir au travail. Si vous suivez le récit intime « pour créer du lien », vous sortez de L. 1221-6 et vous exposez un critère L. 1132-1."
        ),
        h("Méthode opérationnelle"),
        t(
          "Pour chaque simulation : lisez une première fois sans juger. Relisez en marquant R+ (relance utile), R- (relance nocive), L (risque légal). Puis comparez avec le commentaire de la correction de cette leçon. En situation réelle, une seule relance corrective à la fois."
        ),
        h("Exemple professionnel"),
        t(
          "Les trois dialogues se passent en présentiel, 15 à 20 minutes d'extrait, recruteur junior seul ou avec directeur. Ils sont fictifs et pédagogiques."
        ),
        code(`SIMULATION 1 — Junior motivé, peu d'exemples
Poste : chargé de clientèle, banque de détail (fictif)
Candidat : Lina M., 24 ans, 18 mois en centre d'appels énergie, stage en magasin
Durée de l'extrait : minutes 12 à 28

RECRUTEUR. — Lina, je vous ai présentée le déroulé. Je voudrais une situation
où un client était mécontent. Contexte, votre rôle, vos actions, le résultat.
LINA. — Je suis vraiment super motivée par la banque, j'ai toujours voulu
aider les gens à gérer leur argent, je suis quelqu'un de très à l'écoute.
RECRUTEUR. — Je note la motivation. Là, j'ai besoin d'une situation réelle,
même hors banque. Par exemple au centre d'appels. Un client mécontent.
LINA. — Euh… on en avait tout le temps. Je ne sais pas lequel prendre.
RECRUTEUR. — Prenons la semaine dernière, ou la plus récente dont vous
vous souvenez. Qui appelait, pour quoi, que deviez-vous faire ?
LINA. — Une dame, sa facture avait doublé. Elle criait. Moi je dois suivre
le script, proposer un échéancier, et si ça dépasse je passe au plus senior.
RECRUTEUR. — Très bien. Dans cet appel : qu'avez-vous dit, concrètement,
après « elle criait » ? Pas le script en général, vos phrases à vous.
LINA. — J'ai répété que je comprenais, j'ai regardé la conso, il y avait un
rattrapage. Je lui ai proposé de lisser sur trois mois. Elle a accepté.
RECRUTEUR. — Quel était votre rôle distinct du senior ? Avez-vous transféré ?
LINA. — Non, j'ai géré. Le senior n'est intervenu que pour valider l'échéancier
au-dessus d'un seuil. J'ai envoyé le mail de confirmation.
RECRUTEUR. — Résultat : la cliente a-t-elle rappelé ? Un indicateur ?
LINA. — Pas de rappel. On a une enquête SMS. Elle a mis 4 sur 5. J'étais
contente. Après, en banque, je n'ai jamais vendu de livret, j'ai peur de
ne pas savoir.
RECRUTEUR. — Nous testerons cela tout à l'heure avec un cas. Ce n'est pas
un reproche. Je retiens : reformulation, diagnostic simple, offre d'échelonnement,
validation du seuil, trace écrite, résultat 4/5. Passons à une situation
où vous avez dû dire non, ou indiquer une limite.

COMMENTAIRE PÉDAGOGIQUE (ne pas lire au candidat)
R+ : refus du slogan ; ancrage temporel ; distinction rôle / senior ; résultat.
R- évitées : « Vous n'avez pas d'exemple bancaire, c'est embêtant. »
Preuve transférable obtenue. Le situationnel éthique reste nécessaire.`),
        code(`SIMULATION 2 — Profil expérimenté qui monopolise
Candidat : Karim B., 41 ans, 12 ans en assurance, vise la banque de détail
Extrait : minutes 8 à 26 — directeur d'agence présent, silencieux au début

RECRUTEUR. — Karim, pouvez-vous présenter votre parcours en lien avec
le conseil client, en cinq minutes, puis nous prendrons des situations.
KARIM. — Bien sûr, alors je commence en 2006, non, 2008, au Sénégal non
pardon en région parisienne, j'ai fait la fac, ensuite un premier CDD…
[quatre minutes plus tard, toujours sur 2012]
RECRUTEUR. — Je vous arrête. Je retiens le fil. Pour ce poste, j'ai besoin
des cinq dernières années et d'une situation de conseil sous contrainte.
KARIM. — Oui mais pour comprendre ma valeur il faut le début, j'ai un
réseau énorme, j'ai même conseillé des chefs d'entreprise, je parle bien,
en agence ça va cartonner, d'ailleurs votre vitrine…
RECRUTEUR. — Le réseau et la vitrine, nous y viendrons si utile. Là,
une situation : un assuré mécontent, vous, actions, résultat. Deux minutes.
KARIM. — Tous mes clients sont contents, c'est pour ça que je veux changer,
je m'ennuie, la banque c'est plus noble. Vous, vous faites ce métier depuis
combien de temps, vous êtes un peu jeune non ?
RECRUTEUR. — Je conduis l'entretien sur le poste. Je ne commente pas
mon âge. Situation, s'il vous plaît : un client mécontent.
KARIM. — Bon. Un sinistre auto, refus de garantie, le client a hurlé
au téléphone vingt minutes. J'ai laissé parler, j'ai relu le contrat, la
garantie s'appliquait partiellement, j'ai proposé un geste, le manager
a validé, le client est resté. Voilà, c'est du classique, je peux parler
vingt minutes de ça.
RECRUTEUR. — Qu'avez-vous dit, mot pour mot à peu près, sur le refus
partiel ? Et qu'avez-vous écrit ensuite ?
KARIM. — Je lui ai dit la vérité, c'est tout. Les écrits c'est le back-office.
RECRUTEUR. — Donc l'explication contractuelle et la trace n'étaient pas
de votre fait. Je note. Directeur, je vous propose le cas crédit, cinq minutes,
puis les questions de Karim. Karim, je vais devoir vous interrompre si
nous sortons du cas : nous avons un horaire, comme en agence.

DIRECTEUR (après le cas, à part, plus tard) : « Il en jette. »
RECRUTEUR (débrief) : « Volume de parole élevé. Preuves d'écrits faibles.
Mise en cause de l'âge du recruteur. Écoute à tester : il n'a pas reformulé
le client dans l'exemple. Pas de verdict sur le “réseau”. »

COMMENTAIRE
R+ : interruption datée ; refus de commenter l'âge (L. 1132-1, aussi pour
le recruteur comme climat) ; exigence d'action et de trace ; protection du temps.
Le titre de 12 ans n'a pas remplacé la grille.`),
        code(`SIMULATION 3 — Le candidat ramène tout au personnel
Candidate : Sophie T., 29 ans, vendeuse, reconversion banque
Extrait : minutes 10 à 24

RECRUTEUR. — Racontez une situation où vous avez dû prioriser plusieurs
demandes de clients.
SOPHIE. — Alors déjà, moi, dans la vie, je suis une maman, donc je sais
ce que c'est d'être débordée, mon fils a des rendez-vous, et là en plus
mon père est malade, donc l'organisation je connais, hein.
RECRUTEUR. — Je vous remercie. Nous restons sur le cadre professionnel.
Au magasin : deux clientes, un téléphone, une caisse. Que faites-vous ?
SOPHIE. — Oui mais c'est pareil, c'est ma vie qui m'a appris. D'ailleurs
est-ce que le poste est compatible avec une famille ? Parce que je ne
voudrais pas cacher, je veux un employeur humain.
RECRUTEUR. — Je peux vous confirmer les horaires d'agence tels qu'ils
sont dans la fiche de poste, identiques pour toutes les personnes du
réseau. Je ne vous questionne pas sur votre situation de famille, et
elle n'entre pas dans l'évaluation. Revenons à la priorisation en magasin.
SOPHIE. — D'accord… Il y avait les soldes. Une cliente essayait, une
autre s'impatientait à la caisse, le téléphone. J'ai dit à la cabine
« j'arrive dans cinq minutes », j'ai encaissé, j'ai rappelé. La cliente
cabine est restée.
RECRUTEUR. — Quel critère avez-vous utilisé pour l'ordre : attente,
encaissement, promesse ?
SOPHIE. — La caisse, parce que la file se voyait. Après j'ai tenu la
promesse des cinq minutes. C'est comme avec un enfant, en fait…
RECRUTEUR. — Je retiens le critère « file visible » et la promesse tenue.
Pas d'analogie personnelle nécessaire. Passons à un cas d'agence.

PLUS TARD, QUESTIONS DE SOPHIE
SOPHIE. — Vous, vous avez des enfants ? Ça aide de parler à quelqu'un
qui comprend.
RECRUTEUR. — Je ne parle pas de ma vie personnelle en entretien. Vos
questions sur le poste, la formation, l'équipe sont les bienvenues.

COMMENTAIRE
L évité : relance sur l'enfant, le père malade, la « compatibilité famille ».
Information honnête : horaires du poste, pas un jugement de parentalité.
La situation de famille n'est pas un critère (L. 1132-1).`),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Dans le cas Lina : conclure « trop junior » sans situationnel. Dans le cas Karim : se laisser impressionner et oublier l'éthique d'écrits. Dans le cas Sophie : « moi aussi j'ai un père malade » pour créer du lien."
        ),
        h("Situations particulières"),
        t(
          "Le manager rit des anecdotes personnelles de Sophie et relance. Vous reprenez la parole sur le cadre, même inconfortable. Le candidat Karim s'adresse au directeur pour court-circuiter le junior : le directeur, briefé, renvoie au recruteur sur le timing."
        ),
        h("Mise en pratique"),
        t(
          "Reprenez la première réponse de Lina (« je suis quelqu'un de très à l'écoute »). Rédigez une relance trop dure, une relance trop molle, et la relance que vous retenez. Justifiez."
        ),
        h("Correction détaillée"),
        t(
          "Trop dure : « Ça ne veut rien dire, vous n'avez rien vécu. » Humiliation, aucun fait. Trop molle : « C'est super, on sent que vous aimez les gens. » Vous notez de la sympathie. Relance retenue : celle de la simulation — ancrage sur un appel réel, rôle, actions, résultat. Elle respecte la personne et produit une preuve transférable."
        ),
      ],
    }),
    lesson({
      title: "Simulations 4 et 5 — visio avec imprévu, question illicite du manager",
      description:
        "Deux dialogues complets : maintenir un entretien à distance malgré un incident, et recadrer un manager qui pose une question illicite.",
      minutes: 32,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez poursuivre ou reporter un entretien à distance en cas d'imprévu technique ou environnemental, sans en faire un critère sauvage, et recadrer publiquement une question illicite posée par un manager, puis documenter le débrief."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "L'entretien à distance n'est pas un entretien au rabais. C'est le même guide, la même grille, le même droit. L'imprévu (coupure, enfant qui entre, voisinage bruyant, outil qui plante) est plus fréquent. Il n'autorise pas une enquête sur le logement, la famille ou les moyens. Le lieu de résidence est un critère protégé (L. 1132-1). La situation de famille également. Vous traitez l'imprévu comme un incident de canal : tester le plan B (téléphone), proposer une pause, reporter si l'évaluation n'est plus possible. Vous n'en déduisez pas une « incapacité à travailler en remote » sauf si le poste est réellement à distance et que vous aviez prévu d'évaluer les conditions de travail à distance de façon professionnelle, identique pour tous, sans visiter la vie privée.\n\nLa cinquième simulation est non négociable dans ce métier. Un manager peut, par habitude, poser une question illicite : grossesse, projets d'enfants, origine, santé, syndicat, âge. Votre juniorité hiérarchique ne vous retire pas le devoir de recadrer. L'article L. 1132-1 protège le candidat. L. 1221-6 limite les informations. Si vous laissez la question, le candidat se sent tenu de répondre, et la réponse, même « pour rire », peut influencer. Le recadrage se fait immédiatement, de façon courte, factuelle, sans humilier le manager en public plus que nécessaire, mais sans ambiguïté. Après la séance, vous documentez et vous alertez votre responsable si le manager conteste.\n\nRecadrer n'est pas un débat juridique de dix minutes devant le candidat. C'est : « Cette question n'entre pas dans l'entretien d'embauche. Revenons au poste. » Puis vous posez une question professionnelle de substitution si le manager visait, maladroitement, une exigence réelle (horaires, habilitation). Le candidat ne doit pas avoir à « se justifier de ne pas être enceinte ».\n\nCes deux simulations montrent aussi la prise de notes : l'incident visio se note comme incident de canal, pas comme défaut du candidat. La question illicite se note dans le débrief interne, pas dans le CR diffusé comme un avis sur la candidate."
        ),
        h("Méthode opérationnelle"),
        t(
          "Visio : lien + téléphone de secours dans la convocation. Si coupure > 2 minutes, bascule téléphone, même guide. Si l'environnement empêche d'entendre : pause ou report, proposition d'un créneau, sans demander qui est à la maison.\n\nQuestion illicite : interruption immédiate, phrase préparée, question métier de remplacement, poursuite. Débrief manager le jour même. Pas de rire complice."
        ),
        h("Exemple professionnel"),
        t(
          "Les dialogues suivants sont fictifs. Le poste reste chargé de clientèle, Banque des Vallées."
        ),
        code(`SIMULATION 4 — Entretien à distance avec imprévu
Candidat : Julien R., 31 ans, conseiller en boutique télécom
Visio — recruteur seul — minute 18

RECRUTEUR. — Julien, nous prenons le cas de la file d'attente. Samedi…
[l'image se fige, le son coupe 20 secondes]
RECRUTEUR. — Julien, vous me réentendez ? Je n'ai plus l'image.
JULIEN. — Oui, désolé, la connexion… attendez, il y a des travaux, et
ma colocataire vient d'entrer, je change de pièce… [bruit de porte,
une voix au loin]
RECRUTEUR. — Pas de problème. Nous pouvons basculer sur le téléphone,
numéro que vous avez dans la convocation. Je vous appelle dans une minute.
Même entretien, je coupe la visio.
JULIEN. — OK. [bascule téléphone, 90 secondes plus tard]
RECRUTEUR. — Nous reprenons au cas file d'attente. Je n'ai pas besoin
de détails sur votre logement. Êtes-vous en mesure de parler dix minutes
sans coupure, ou préférez-vous reporter ?
JULIEN. — On peut faire dix minutes, après c'est plus calme si besoin.
RECRUTEUR. — Très bien. Cas : file de cinq personnes, rendez-vous dans
dix minutes, téléphone. Vos actions.
JULIEN. — J'informe la file du temps d'attente, je tiens le rendez-vous,
je rappelle. En boutique on faisait ça.
RECRUTEUR. — Relance : que dites-vous, concrètement, à la personne
qui proteste dans la file ?
[…]
CLÔTURE. — Nous avons perdu environ quatre minutes de technique. Ce
n'est pas un critère. La suite du process inchangée, je vous écris
d'ici jeudi. Si vous préférez un créneau visio de rattrapage pour le
dernier cas, dites-le-moi aujourd'hui.

NOTE D'ENTRETIEN (extrait)
Incident canal : coupure visio, bascule téléphone, 4 min perdues.
Pas de commentaire sur le logement ni la colocataire.
Cas priorisation : informer la file, tenir le RDV, rappel — conforme.
Offre de rattrapage du dernier cas si le candidat le demande.

COMMENTAIRE
R+ : plan B annoncé ; refus d'enquêter sur le logement ; choix laissé
entre poursuivre et reporter ; incident non transformé en KO « remote ».
R- évitées : « Vous n'avez pas un endroit calme ? Vous vivez avec qui ? »`),
        code(`SIMULATION 5 — Le manager pose une question illicite, le junior recadre
Candidate : Nadia H., 27 ans, 3 ans en boutique bancaire concurrente
Présentiel — recruteur junior + directeur d'agence — minute 35
Le directeur n'a pas respecté le brief.

DIRECTEUR. — Bon, Nadia, on va parler vrai. Le poste est prenant, les
samedis, les objectifs. Vous avez quel âge déjà ? Et puis, vous comptez
avoir des enfants bientôt ? Parce que la dernière, elle est partie en
congé et on a galéré.
NADIA. — Euh… j'ai 27 ans, et pour les enfants, je… je ne sais pas,
je veux ce poste, je…
RECRUTEUR. — Je vous interromps. Nadia, vous n'avez pas à répondre
à ces questions. L'âge et les projets familiaux ne font pas partie
de l'entretien et n'entrent pas dans notre évaluation.
(au directeur, calme, sans sourire de connivence)
Nous restons sur les exigences du poste, comme convenu : horaires
d'agence, samedis travaillés selon le planning publié, objectifs
et cadre. Nadia, je reformule de façon professionnelle : la fiche
de poste prévoit [horaires]. Êtes-vous en mesure de travailler selon
ces horaires, tels qu'ils sont décrits ?
NADIA. — Oui. Les samedis du planning, j'ai déjà ce rythme.
RECRUTEUR. — Merci. Directeur, votre cas sur le crédit et le reste
à vivre, s'il vous plaît. Ensuite les questions de Nadia.
DIRECTEUR. — Bon, d'accord… Alors le cas crédit…

CLÔTURE (recruteur)
« Merci Nadia. La suite : nous vous écrivons d'ici vendredi. Les
éléments personnels évoqués par erreur ne sont pas conservés comme
critères. »

DÉBRIEF IMMÉDIAT SANS LA CANDIDATE
RECRUTEUR. — La question sur l'âge et les enfants est illicite
(L. 1132-1 : âge, situation de famille, grossesse). Elle n'a pas
de lien nécessaire avec l'emploi (L. 1221-6). Je ne la reporterai
pas dans l'évaluation. Si le besoin était les horaires, la question
de substitution suffit, posée à tous.
DIRECTEUR. — Tu m'as recadré devant elle, c'est gênant.
RECRUTEUR. — Ne pas recadrer était plus gênant pour elle et pour
l'entreprise. Je documente le brief non respecté à [responsable RH].
La candidate a été ramenée au poste. Sa réponse sur les enfants
n'est pas dans la grille.

NOTE INTERNE RH (pas dans le CR manager large)
Question illicite posée par le directeur à 10 h 42, recadrage immédiat,
candidate informée qu'elle n'avait pas à répondre. Grille : critères
professionnels uniquement. Alerte process : nouveau brief obligatoire
avant tout autre entretien commun.

COMMENTAIRE
Le recadrage est public, court, légal, puis substitution professionnelle.
Pas de débat de dix minutes. Pas de rire. Pas de « c'était pour rire ».
Le junior documente. Il ne laisse pas le manager « finir sa question ».`),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "En visio : commenter l'intérieur du logement ou demander de se déplacer « pour voir si vous êtes sérieux ». Après une question illicite : rester silencieux, ou dire « vous n'êtes pas obligée de répondre » tout en laissant le manager insister. Cette fausse liberté n'annule pas le caractère illicite."
        ),
        h("Situations particulières"),
        t(
          "Le manager récidive dans la même séance : seconde interruption, clôture anticipée si besoin, appel au responsable avant tout autre candidat du jour.\n\nLe candidat répond spontanément « je suis enceinte » : vous remerciez, vous indiquez que cela n'entre pas dans l'évaluation, vous ne notez pas, vous poursuivez les critères du poste. La grossesse est un critère protégé.\n\nImprévu visio qui révèle un aidant familial : même conduite que Sophie, simulation 3 : horaires du poste, pas d'enquête."
        ),
        h("Mise en pratique"),
        t(
          "Le directeur, après la simulation 5, vous demande d'« arrondir » dans le CR : « Candidate réservée sur son avenir familial, à revoir. » Rédigez (1) la phrase que vous écrivez vraiment dans le CR métier ; (2) la phrase que vous écrivez à votre responsable RH."
        ),
        h("Correction détaillée"),
        t(
          "CR métier : uniquement les faits professionnels (cas crédit, pédagogie, horaires acceptés tels que décrits). Aucune mention de l'avenir familial. Phrase RH : « Lors de l'entretien du [date], une question sur l'âge et les projets d'enfants a été posée malgré le brief. Recadrage immédiat. Demande de ne pas conserver cet élément. Merci de reprendre le cadre L. 1132-1 / L. 1221-6 avec le directeur avant le prochain entretien commun. » Vous ne « protègez » pas le manager en falsifiant un critère. Falsifier serait une faute professionnelle."
        ),
        note(
          "Les cinq simulations sont fictives et pédagogiques. En situation réelle, un recadrage de question illicite se signale selon la voie interne. Textes cités vérifiés le 13/10/2026."
        ),
      ],
    }),
    quizLesson({
      title: "Quiz — Conduire un entretien",
      description: "Vérifiez la conduite : cadre, écoute, temps, situations difficiles, notes, visio, questions illicites.",
      passing_score: 70,
      minutes: 14,
      questions: [
        q({
          question: "Quelle ouverture d'entretien est la plus professionnelle ?",
          options: [
            "A. « Parlez-moi de vous, on a le temps, on verra bien. »",
            "B. Présentation des fonctions, durée, déroulé, notes factuelles, suite du process, vérification de l'horaire.",
            "C. « Vous avez des enfants ? Ça permet de décompresser. »",
            "D. « On sent déjà si ça va matcher, ensuite on fera les questions. »",
          ],
          correct: 1,
          explanation:
            "Le cadre réduit l'incertitude et reste dans le champ professionnel. Les options A et D improvisent. C est illicite ou hors lien d'emploi (situation de famille, L. 1132-1 / L. 1221-6).",
        }),
        q({
          question: "Une reformulation utile consiste à :",
          options: [
            "A. Répéter la réponse en plus élogieux pour motiver le candidat.",
            "B. Reprendre les faits, le périmètre et le temps, afin que le candidat puisse corriger.",
            "C. Traduire la réponse en trait de personnalité (« donc vous êtes un leader »).",
            "D. Enchaîner sur votre propre anecdote pour créer du lien.",
          ],
          correct: 1,
          explanation:
            "La reformulation est un contrôle d'exactitude, pas une récompense ni un diagnostic de personnalité.",
        }),
        q({
          question: "Il vous reste 12 minutes, il manque le situationnel essentiel et les questions du candidat. Que faites-vous ?",
          options: [
            "A. Vous finissez le récit de parcours, plus confortable pour le manager.",
            "B. Vous tenez le situationnel essentiel, puis un temps réduit de questions du candidat, puis la clôture.",
            "C. Vous supprimez les questions du candidat : ce n'est pas évaluatif.",
            "D. Vous dépassez de 25 minutes : l'équité c'est de tout couvrir.",
          ],
          correct: 1,
          explanation:
            "Les critères essentiels et les questions du candidat (information + indice de compréhension du poste) priment sur le confort du récit. Déborder de 25 minutes casse l'équité avec les autres candidats.",
        }),
        q({
          question: "Un candidat peu bavard. Quelle conduite est conforme ?",
          options: [
            "A. Noter « introverti, pas le profil relation client » et abréger.",
            "B. Poser une question de journée type, puis un STAR ancré sur le CV, éventuellement un situationnel.",
            "C. Parler à sa place pour l'aider, puis noter ces propos comme ses preuves.",
            "D. Lui demander s'il est suivi pour l'anxiété sociale.",
          ],
          correct: 1,
          explanation:
            "L'introversion n'est pas un critère. La santé non plus (L. 1132-1). Parler à sa place fabrique de fausses preuves. Les questions étroites et le situationnel sont les leviers.",
        }),
        q({
          question: "Face à une contradiction entre le CV et l'oral sur le périmètre d'équipe, vous :",
          options: [
            "A. Souriez et passez à autre chose pour ne pas le mettre mal à l'aise.",
            "B. Dites qu'il ment et que l'entretien s'arrête.",
            "C. Pointez les deux versions, demandez une précision de périmètre, notez l'écart et la qualité de l'explication.",
            "D. Appelez l'ancien employeur pendant la séance, haut-parleur.",
          ],
          correct: 2,
          explanation:
            "La clarification factuelle est la conduite. L'humiliation et l'appel surprise sont des fautes. Un écart peut être un titre surdimensionné, pas nécessairement un mensonge. Un mensonge sur un élément constitutif se traite avec les RH, pas en spectacle.",
        }),
        q({
          question: "Les notes d'entretien :",
          options: [
            "A. Peuvent mentionner le look et l'accent, c'est « pour soi ».",
            "B. Sont des données personnelles, doivent rester factuelles et confidentielles (L. 1221-8 sur les résultats des méthodes).",
            "C. Doivent être détruites immédiatement après le débrief oral, dans tous les cas.",
            "D. Peuvent être envoyées à tout le plateau pour « crowdsourcer » l'avis.",
          ],
          correct: 1,
          explanation:
            "Look et accent exposent des critères illicites. La destruction immédiate systématique n'est pas la règle unique (politique interne, conservation probatoire possible — voir CNIL / L. 1134-5). La diffusion large casse la confidentialité.",
        }),
        q({
          question: "Pendant une visio, un enfant entre dans la pièce. Vous :",
          options: [
            "A. Demandez qui garde les enfants d'habitude, pour tester la disponibilité.",
            "B. Proposez pause, téléphone ou report, sans enquêter sur la famille, et vous ne transformez pas l'incident en critère.",
            "C. Notez « organisation familiale douteuse ».",
            "D. Exigez que le candidat montre son logement pour vérifier le calme.",
          ],
          correct: 1,
          explanation:
            "Situation de famille et lieu de résidence sont des critères protégés. L'incident est un problème de canal. Le poste peut avoir des horaires à confirmer de façon identique pour tous, via la fiche de poste, pas via une enquête privée.",
        }),
        q({
          question: "Un manager demande à une candidate si elle compte avoir des enfants. Vous :",
          options: [
            "A. Laissez faire : il est le décideur métier.",
            "B. Dites à la candidate qu'elle peut ne pas répondre, tout en laissant le manager insister.",
            "C. Interrompez, indiquez que la question n'entre pas dans l'entretien, substituez une question professionnelle d'horaires si besoin, documentez.",
            "D. Riez pour détendre, puis changez de sujet sans rien dire.",
          ],
          correct: 2,
          explanation:
            "L. 1132-1 (situation de famille, grossesse) et L. 1221-6. Le silence complice ou le « vous n'êtes pas obligée » pendant que la question reste posée ne protègent pas. Le recadrage est le rôle du recruteur, y compris junior.",
        }),
        q({
          question: "Une réponse trop préparée (« je suis perfectionniste ») se traite en :",
          options: [
            "A. Notant le défaut comme une qualité culturelle.",
            "B. Demandant la dernière situation concrète où cela a eu un effet sur un délai ou un client, avec actions et résultat.",
            "C. Posant la même question de personnalité sous une autre forme.",
            "D. Abandonnant le critère : les slogans suffisent s'ils sont bien dits.",
          ],
          correct: 1,
          explanation:
            "Le slogan n'est pas une preuve. La relance STAR sur un effet réel distingue le discours de la pratique.",
        }),
        q({
          question: "En fin d'entretien, le candidat demande « je suis pris ? ». Vous :",
          options: [
            "A. Dites oui pour le garder chaud, même si la décision n'est pas prise.",
            "B. Rappelez les étapes et une date de communication, sans verdict et sans mensonge.",
            "C. Dites non pour éviter les relances.",
            "D. Répondez « ça dépend du feeling du manager, il vous dira ».",
          ],
          correct: 1,
          explanation:
            "Ni fausse promesse, ni refus improvisé. Le feeling n'est pas un critère communicable. La clôture honnête est une bonne pratique, distincte de l'absence d'obligation générale de motiver un refus.",
        }),
      ],
    }),
  ],
};
