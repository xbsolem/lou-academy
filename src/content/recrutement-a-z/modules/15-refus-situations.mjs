import { lesson, h, t, note, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 15,
  title: "Gérer les refus et les situations délicates",
  description:
    "Traiter chaque refus et chaque incident de process avec une décision claire, un message professionnel et une traçabilité conforme au droit français.",
  lessons: [
    lesson({
      title: "Dire non sans nuire : principes, cadre légal et posture",
      description:
        "Poser le cadre du refus : pas d'obligation générale de motiver, interdiction de discriminer, droits d'accès RGPD, moment, canal et niveau d'information.",
      minutes: 22,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À l'issue de cette leçon, vous savez distinguer une obligation légale, une recommandation d'autorité, une politique interne et une bonne pratique lorsque vous refusez un candidat.\n\nVous savez pourquoi le droit français n'impose pas, en règle générale, de motiver un refus de candidature, tout en interdisant d'écarter une personne d'un recrutement pour un motif discriminatoire.\n\nVous savez réorienter une demande d'accès aux données personnelles vers le circuit prévu (RH, DPO ou référent conformité) sans improviser une réponse juridique.\n\nVous savez choisir le moment, le canal et le niveau de détail d'un message de refus selon l'étape du process et le risque relationnel."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le recrutement produit davantage de refus que d'embauches. Un process sérieux écarte des candidatures à chaque étape : lecture de CV, préqualification, premier entretien, entretiens suivants, décision finale. Le candidat non retenu n'a pas « échoué » au sens scolaire du terme : il n'a pas été retenu pour ce poste, à cette date, au regard des critères professionnels retenus. Cette distinction oriente le ton. Vous ne jugez pas la personne ; vous clôturez une candidature.\n\nEn droit français, il n'existe pas d'obligation légale générale de motiver un refus de candidature. Le recruteur n'est donc pas tenu, par un texte général, d'expliquer par écrit pourquoi un CV n'a pas été retenu. Cette absence d'obligation ne signifie pas que le silence est toujours la meilleure pratique, ni que n'importe quel motif peut être donné. Deux cadres s'imposent toujours.\n\nPremier cadre : l'interdiction de discriminer à l'embauche. L'article L. 1132-1 du Code du travail interdit d'écarter une personne d'un recrutement en raison de critères protégés (origine, sexe, mœurs, orientation sexuelle, identité de genre, âge, situation de famille ou grossesse, caractéristiques génétiques, vulnérabilité économique, appartenance vraie ou supposée à une ethnie, une nation ou une prétendue race, opinions politiques, activités syndicales ou mutualistes, mandat électif, convictions religieuses, apparence physique, nom de famille, lieu de résidence, domiciliation bancaire, état de santé, perte d'autonomie, handicap, capacité à s'exprimer dans une langue autre que le français, qualité de lanceur d'alerte, facilitateur ou personne en lien avec un lanceur d'alerte). Un refus fondé sur l'un de ces critères, ou un message qui le laisse entendre, expose l'employeur. Source : Code du travail, L. 1132-1, vérifié le 13/10/2026.\n\nDeuxième cadre : les informations demandées au candidat et les méthodes d'évaluation. L'article L. 1221-6 limite les informations demandées à ce qui permet d'apprécier la capacité à occuper l'emploi ou les aptitudes professionnelles, avec un lien direct et nécessaire avec l'emploi. Les articles L. 1221-8 et L. 1221-9 imposent d'informer le candidat des méthodes utilisées et d'employer des méthodes pertinentes. Un refus qui s'appuie sur une question illicite, un stéréotype ou un critère non professionnel n'est pas défendable, même si le message reste poli.\n\nLe RGPD s'ajoute à ce cadre. Le candidat peut exercer un droit d'accès à ses données. Ce droit n'oblige pas à motiver le refus métier ; il oblige à traiter la demande d'accès selon la procédure interne, dans les délais prévus par l'organisation, en lien avec le DPO ou le référent désigné. La CNIL distingue notamment la conservation en vivier (recommandation : jusqu'à 2 ans à compter du dernier contact, candidat informé, possibilité d'opposition) et l'archivage intermédiaire à des fins probatoires (5 ans à compter de la date à laquelle le poste a été pourvu, en lien avec L. 1134-5). Distinguez : obligation de conservation probatoire / recommandation de durée de vivier / politique interne de réponse aux refus.\n\nSi vous donnez un motif, il doit être professionnel, factuel, rattaché aux critères du poste, et formulé de façon à ne pas humilier. Un motif mal écrit crée plus de risque qu'un refus courtois non motivé. La politique interne peut imposer un modèle unique : dans ce cas, vous l'appliquez. La bonne pratique professionnelle consiste à répondre, à le faire rapidement une fois la décision ferme, et à adapter le canal à l'investissement du candidat."
        ),
        note(
          "Obligation légale : ne pas discriminer (L. 1132-1) ; traiter une demande d'accès RGPD selon la procédure. Pas d'obligation légale générale de motiver un refus. Recommandation d'autorité : durées de conservation CNIL (vivier 2 ans = recommandation ; 5 ans probatoires = obligation liée à L. 1134-5). Politique interne : modèles d'e-mails, qui appelle, qui signe. Bonne pratique : répondre, tracer, adapter le canal à l'étape."
        ),
        h("Méthode opérationnelle"),
        t(
          "Avant tout message, vérifiez que la décision est ferme. Un « non » envoyé trop tôt, puis un rappel du manager, détruit la crédibilité. Confirmez avec le manager ou votre responsable selon la règle interne. Consultez l'ATS : statut, commentaires, historique d'échanges, existence d'une autre opportunité interne.\n\nChoisissez le canal. L'e-mail est le canal de référence : il laisse une trace, il peut être relu, il peut s'appuyer sur un modèle validé. Le téléphone se justifie lorsque le candidat a investi du temps (plusieurs entretiens, offre, déplacement) ou lorsqu'une relation doit être préservée (vivier, rareté du profil, partenaire école). Un SMS n'est pas un canal de refus professionnel, sauf consigne interne très encadrée pour un simple accusé de fin de process volume.\n\nRédigez selon trois niveaux d'information. Niveau 1 : remerciement, décision, clôture, possibilité de conserver le dossier selon la politique et l'information déjà donnée au candidat. Niveau 2 : motif professionnel court, non comparatif, non personnel (« le profil retenu correspond plus étroitement à l'expérience exigée sur tel outil / tel environnement »). Niveau 3 : échange oral de feedback, uniquement si vous y êtes formé, si le manager l'accepte, et si le feedback reste factuel. N'inventez pas de motif pour « adoucir ».\n\nTracez. Passez le statut dans l'ATS le jour du message. Archivez le modèle utilisé. Si le candidat demande ses données, n'envoyez pas le dossier brut : ouvrez le ticket prévu (RH, DPO). Si le candidat évoque une discrimination, ne argumentez pas seul : alertez immédiatement votre responsable et conservez les écrits."
        ),
        code(
          "CHECKLIST AVANT ENVOI D'UN REFUS\n\n[ ] Décision confirmée par le décideur prévu (manager / responsable recrutement)\n[ ] Statut ATS vérifié : pas d'autre process ouvert sur le même candidat\n[ ] Motif interne consigné (critères du poste, faits d'évaluation) — ne pas le coller tel quel dans l'e-mail\n[ ] Canal choisi selon l'étape (e-mail / téléphone + e-mail de confirmation)\n[ ] Niveau d'information autorisé par la politique interne\n[ ] Relecture : aucun critère L. 1132-1, aucun jugement de personne, aucune comparaison nominative\n[ ] Information conservation / opposition déjà donnée ou renvoyée vers la mention RGPD du process\n[ ] Envoi + mise à jour ATS le même jour"
        ),
        h("Exemple professionnel"),
        t(
          "PME de services B2B, 80 salariés, recrutement d'un chargé de clientèle. Quarante-deux candidatures. Le dirigeant dit au junior : « Envoie un mail type, et si on te demande pourquoi, tu dis qu'on a pris quelqu'un de plus jeune, ça passera mieux. »\n\nLe junior refuse cette consigne. L'âge est un critère protégé. Un motif « plus jeune » n'est pas un motif professionnel licite. Il reformule avec le dirigeant le vrai écart : autonomie commerciale sur un portefeuille grands comptes, déjà exigée dans la fiche de poste. Il envoie un refus non comparatif, sans mention d'âge, et consigne le motif interne réel dans l'ATS."
        ),
        code(
          "ÉCHANGE JUNIOR / DIRIGEANT\n\nDirigeant : Dis-leur qu'on a pris plus jeune, ça évite les débats.\nJunior : Je ne peux pas écrire cela. L'âge est un critère protégé. Si nous devons un motif, il doit rester professionnel : ici, l'autonomie sur un portefeuille grands comptes.\nDirigeant : D'accord. Mail simple alors.\nJunior : Oui. Remerciement, décision, conservation du dossier selon notre mention d'information. Pas de comparaison entre candidats."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Attendre « d'avoir le temps » : le candidat interprète le silence comme du mépris ou comme un process encore ouvert.\n\nInventer un motif gentil (« on a gelé le poste ») alors que le poste est pourvu : le mensonge revient lorsque l'annonce est republiée.\n\nMotiver par un critère protégé, même « positif » (« on voulait une femme », « quelqu'un de plus jeune », « quelqu'un du coin »).\n\nColler dans l'e-mail les commentaires bruts de l'ATS (« trop bavard », « look pas corporate », « accent »).\n\nRépondre seul à une contestation juridique ou à une demande RGPD sans circuit interne.\n\nRefuser par téléphone sans trace écrite ensuite, ou à l'inverse envoyer un e-mail glacial après trois heures d'entretien sans aucun appel."
        ),
        h("Situations particulières"),
        t(
          "Candidat interne : le refus est un acte RH autant qu'un acte recrutement. Le message se coordonne avec le manager actuel et les RH. Un e-mail standard externe est inadapté.\n\nCandidat recommandé par un salarié ou un client : remerciez, refusez sur des critères de poste, informez le prescripteur selon la règle interne, sans livrer d'évaluation détaillée.\n\nCandidat déjà salarié d'un client (cabinet) : le refus reste factuel ; vous ne commentez pas la situation chez le client.\n\nProcess mixte (interne + externe) : ne dites pas aux externes « on a préféré un interne » si la politique demande un motif neutre ; vous pouvez indiquer que le poste a été pourvu, sans comparer les personnes."
        ),
        h("Mise en pratique"),
        t(
          "Un candidat vous écrit : « Merci de me dire pourquoi je n'ai pas été retenu, et envoyez-moi tout ce que vous avez sur moi (notes d'entretien, commentaires du manager, scores). » Le manager vous a dit oralement : « Il est compétent mais trop vieux pour l'équipe. » Rédigez : 1) ce que vous consignez en interne ; 2) ce que vous répondez au candidat ; 3) ce que vous faites de la phrase du manager."
        ),
        h("Correction détaillée"),
        t(
          "En interne, vous consignez un motif professionnel s'il existe (écart sur un critère de poste documenté). Vous ne consignez pas « trop vieux » comme motif de décision. Vous alertez votre responsable : la phrase du manager est un critère protégé (âge). La décision doit être reprise sur des bases licites, ou le process doit être réexaminé.\n\nAu candidat, vous n'êtes pas tenu par une obligation légale générale de motiver le refus métier. Vous remerciez, vous confirmez la non-sélection, vous restez factuel. Vous ne répétez pas la phrase sur l'âge. Pour les données, vous n'envoyez pas le dossier brut : vous enregistrez la demande d'accès et vous la transmettez au circuit RGPD (RH / DPO). Les notes peuvent contenir des données de tiers ou des commentaires non aboutis : leur communication suit la procédure, pas l'improvisation du junior.\n\nPourquoi cette correction : le risque n'est pas « manquer de gentillesse ». Le risque est de transformer un refus mal cadré en preuve d'une décision discriminatoire, tout en manquant une demande d'accès qui est un droit."
        ),
      ],
    }),

    lesson({
      title: "Refuser un CV, une préqualification et un premier entretien",
      description:
        "Traiter les refus précoces : volume, délai, ton, motif interne et message externe, sans laisser le process ouvert par négligence.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez clôturer une candidature dès que l'écart avec les critères essentiels du poste est établi, sans attendre la fin du process « par politesse ».\n\nVous savez rédiger un refus de CV, un refus après préqualification et un refus après premier entretien, avec un niveau d'information croissant mais toujours professionnel.\n\nVous savez distinguer le motif interne (traçabilité, calibration manager) du message externe (clair, non discriminatoire, non humiliant)."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Les refus précoces représentent le volume. Un CV non retenu, un entretien téléphonique qui révèle un écart de localisation, de disponibilité ou de socle technique, un premier entretien qui confirme un manque d'autonomie : ce sont des décisions de process, pas des jugements de valeur. Plus le refus est tardif, plus le candidat a investi, plus le message doit être soigné. Inversement, un refus de CV peut rester court, à condition d'être envoyé.\n\nLe problème du refus de CV est le silence de masse. Beaucoup d'entreprises n'écrivent pas. Ce silence n'est pas une obligation légale ; c'est souvent une pratique de charge. Elle a un coût : image employeur, relances, candidatures qui restent « en cours » dans l'ATS, recruteur junior qui ne sait plus qui est encore actif. La bonne pratique est de répondre lorsque la décision est prise. La politique interne peut prévoir un e-mail automatique de fin de process à une date donnée : vous l'appliquez, vous ne le contournez pas au cas par cas sans raison.\n\nLe refus après préqualification est plus délicat. Le candidat a parlé à quelqu'un. Il a souvent réorganisé une pause, parfois posé une demi-journée. Un e-mail impersonnel le jour même reste correct si l'écart est net (mobilité impossible, rémunération hors cadrage déjà annoncé, indisponibilité incompatible). Si la préqualification était longue et qualitative, un appel court plus un e-mail de confirmation est plus professionnel.\n\nLe refus après premier entretien engage la réputation du recruteur. Le candidat a préparé, s'est déplacé ou s'est connecté, a répondu à des mises en situation. Le problème n'est plus seulement d'informer : c'est de clôturer sans laisser entendre que « ça avance encore ». Le risque est de garder le candidat « au chaud » par confort, au cas où le premier choix se désiste. Cette réserve se gère autrement : statut distinct, message d'attente, pas un silence.\n\nÀ chaque étape, le motif interne doit exister. « Ne me plaît pas » n'est pas un motif. « N'a pas l'expérience exigée sur le pilotage d'un portefeuille de X comptes, critère essentiel validé avec le manager » en est un. Ce motif reste interne tant que la politique n'autorise pas un feedback. Le message externe peut se limiter à la décision. Il ne doit jamais révéler un critère protégé, une rumeur, ou une comparaison nominative avec un autre candidat.\n\nLe moment : dès que la décision est ferme, dans un délai court. Un refus de CV sous 5 à 10 jours ouvrés après clôture de la vague est une organisation interne, pas un délai légal. Un refus post-entretien se vise sous 48 heures ouvrées après la décision, sauf process plus long annoncé au candidat. Annoncer un délai et le tenir vaut mieux qu'une promesse vague."
        ),
        note(
          "Il n'existe pas de délai légal général pour envoyer un refus de candidature. Le délai est une règle interne et une bonne pratique. En revanche, laisser un dossier « ouvert » sans décision réelle fausse les indicateurs et expose à des relances auxquelles vous ne savez pas répondre."
        ),
        h("Méthode opérationnelle"),
        t(
          "Pour le CV : triez par critères essentiels. Les écarts rédhibitoires documentés (habilitation obligatoire absente, mobilité géographique incompatible déjà indiquée, niveau d'expérience hors cadrage de la fiche) se refusent par lot, modèle court. Les CV « possibles » ne se refusent pas par confort de charge : ils restent en shortlist large ou en réserve de vague.\n\nPour la préqualification : en fin d'appel, si l'écart est déjà net et que vous avez le mandat de clôturer, vous pouvez l'annoncer oralement avec calme, puis confirmer par e-mail. Si vous devez recaler avec le manager, dites le délai réel, tenez-le, puis refusez.\n\nPour le premier entretien : débriefez le manager avec des faits. Si le non est clair, envoyez le refus sans attendre « d'avoir vu tout le monde » lorsque le candidat est hors critères. Si le candidat reste comparable, placez-le en réserve, avec un message d'attente, pas un refus."
        ),
        code(
          "MODÈLE — REFUS DE CV (e-mail)\nObjet : Votre candidature — [intitulé du poste] — [entreprise]\n\nBonjour [Prénom],\n\nNous vous remercions d'avoir candidaté au poste de [intitulé].\n\nAprès étude de votre parcours, nous ne donnerons pas de suite favorable à votre candidature pour ce poste.\n\nCette décision ne préjuge pas de l'intérêt que nous pourrions porter à votre profil sur une autre opportunité, conformément aux informations déjà communiquées sur la durée de conservation de votre dossier.\n\nNous vous souhaitons une pleine réussite dans vos recherches.\n\nCordialement,\n[Prénom Nom]\n[Fonction] — [Entreprise]\n[Téléphone]\n\n---\nMODÈLE — REFUS APRÈS PRÉQUALIFICATION (e-mail)\nObjet : Suite de notre échange — [intitulé]\n\nBonjour [Prénom],\n\nJe vous remercie pour notre échange du [date].\n\nAprès relecture de vos éléments au regard des critères du poste, nous ne poursuivrons pas le process.\n\nLe besoin porte notamment sur [critère professionnel objectif, si la politique autorise un motif court]. Votre profil reste intéressant ; nous clôturons toutefois cette candidature.\n\nJe vous remercie du temps consacré et vous souhaite le meilleur pour la suite.\n\nCordialement,\n[...]\n\n---\nSCRIPT TÉLÉPHONIQUE — REFUS APRÈS 1ER ENTRETIEN\n\n« Bonjour [Prénom], [Prénom], du recrutement chez [entreprise]. Avez-vous deux minutes ?\nJe vous appelle au sujet du poste de [intitulé]. Nous avons bien avancé de notre côté. La décision est de ne pas donner suite après l'entretien.\nLe besoin est très marqué sur [critère professionnel]. Ce n'est pas un jugement sur l'ensemble de votre parcours.\nJe vous envoie un e-mail de confirmation. Merci d'avoir accordé ce temps. Je vous souhaite une bonne continuation. »"
        ),
        h("Exemple professionnel"),
        t(
          "Startup produit, recrutement d'un développeur backend. Après préqualification, le candidat est solide techniquement mais ne peut pas travailler en France aux horaires de l'équipe (décalage de six heures, déjà écarté dans la fiche). Le junior hésite : le profil est rare, le CTO dit « on verra plus tard ».\n\nDécision recommandée : clôturer ce process-ci, proposer un vivier si le candidat est d'accord, ne pas le laisser croire qu'un entretien CTO va arriver. Message : écart sur l'organisation du travail, déjà posée comme critère. Erreur à éviter : « on te garde au chaud » sans date."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Empiler des « peut-être » dans l'ATS pour ne pas écrire de refus.\n\nRefuser un CV sur un critère non écrit dans la fiche (école, photo, prénom, adresse).\n\nAnnoncer en préqualification « je te fais passer » pour faire plaisir, puis laisser le manager refuser sans message.\n\nEnvoyer un refus de premier entretien en copie au manager avec les notes brutes visibles par erreur.\n\nUtiliser un modèle « votre profil ne correspond pas à nos valeurs » : formule floue, potentiellement blessante, difficile à défendre."
        ),
        h("Situations particulières"),
        t(
          "Candidature spontanée hors poste ouvert : ce n'est pas un refus de process, c'est une non-ouverture. Message : pas de poste correspondant à ce jour, conservation selon mention d'information.\n\nCandidat volume (campagne 200 CV) : l'automatisation d'un e-mail de clôture est une organisation interne acceptable si le texte est correct et si les personnes reçues en entretien ont un traitement distinct.\n\nCandidat en situation de handicap qui a mentionné un aménagement : le refus doit rester fondé sur les compétences et exigences du poste, pas sur le handicap. Si le manager refuse « à cause du handicap », vous n'exécutez pas ce motif ; vous alertez RH."
        ),
        h("Mise en pratique"),
        t(
          "Vous avez reçu 18 CV pour un poste d'assistant QHSE en industrie (ETI, 3 usines). 11 n'ont pas l'habilitation ou l'expérience terrain exigées. 4 sont possibles. 3 sont en shortlist. Rédigez le lot de refus des 11 et la phrase que vous dites au manager pour les 4 « possibles » que vous ne refusez pas encore."
        ),
        h("Correction détaillée"),
        t(
          "Les 11 reçoivent un e-mail court de non-suite, sans détail humiliant (pas « vous n'avez aucune habilitation, dossier incomplet »). Le motif interne, lui, est précis : absence d'un prérequis essentiel documenté. Les 4 possibles restent en statut distinct : « à revoir si shortlist insuffisante », avec une date de revue. Vous dites au manager : « Quatre profils sont en deçà du socle mais pas rédhibitoires ; je ne les refuse pas tant que la shortlist n'est pas sécurisée. » Pourquoi : refuser trop tôt par confort, puis republier l'annonce, est un échec d'organisation, pas une preuve de rigueur."
        ),
      ],
    }),

    lesson({
      title: "Refus final, mise en attente et mise en réserve",
      description:
        "Clôturer le dernier tour, distinguer attente et réserve, et parler vrai sans entretenir un faux espoir.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez conduire un refus final après un process avancé, par téléphone puis e-mail, avec un motif professionnel si la politique le permet.\n\nVous distinguez trois statuts : refusé, en attente d'une décision encore ouverte, en réserve d'un choix prioritaire.\n\nVous savez rédiger un message d'attente et un message de réserve qui ne promettent pas une embauche."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le refus final concerne une personne qui a souvent rencontré plusieurs interlocuteurs, parfois visité un site, parfois parlé rémunération. Le problème n'est plus l'information minimale : c'est la dignité du clôture et la préservation d'un vivier. Le risque est double. Trop sec, le message brise une relation utile. Trop chaud, il laisse croire que la décision n'est pas réelle (« on se revoit très vite ») alors que le poste est pourvu.\n\nLa décision recommandée est : appel dès que la décision est ferme, e-mail de confirmation le jour même, motif interne consigné, motif externe court et professionnel si autorisé. Le raisonnement : la personne a investi ; un canal oral reconnaît cet investissement ; l'écrit sécurise. Le moment : après validation du décideur, avant que le candidat apprenne la nouvelle par un réseau social ou par un autre candidat. Le message porte sur le poste, pas sur la valeur globale de la personne. Les erreurs : laisser le manager « s'en charger plus tard », envoyer un e-mail collectif, comparer au candidat retenu par son nom, inventer un gel de poste.\n\nL'attente n'est pas un refus. C'est une décision non encore prise, ou une étape administrative encore ouverte (validation budgétaire, dernier entretien reporté). Le problème : beaucoup de juniors disent « on vous tient au courant » sans date. Le risque : le candidat accepte ailleurs pendant que vous croyez le process vivant, ou à l'inverse reste bloqué sur un espoir flou. Décision recommandée : statut « en attente », date de prochaine information, contenu de ce qui est encore ouvert. Message : factuel, avec une date. Erreur : utiliser l'attente pour ne pas oser refuser.\n\nLa réserve est un refus conditionnel interne : un candidat n'est pas le choix n°1, mais il reste mobilisable si le n°1 se désiste ou si un second poste ouvre. Le problème est le décalage entre l'interne et l'externe. En interne, « plan B » est clair. En externe, « vous êtes notre second choix » est brutal et parfois inutile. Décision recommandée : si la réserve est courte (quelques jours) et réelle, message d'attente daté. Si la réserve est vague, refusez proprement et proposez un vivier. Le raisonnement : un candidat adulte peut entendre qu'une décision n'est pas close ; il ne doit pas servir de file d'attente invisible pendant des semaines. Erreur : garder six personnes « en réserve » sans jamais les informer.\n\nDans les trois cas, le cadre légal reste le même : pas d'obligation générale de motiver ; obligation de ne pas discriminer ; droit d'accès aux données si le candidat le demande. Un refus final n'autorise pas davantage un commentaire sur l'âge, le sexe, l'origine, l'état de santé ou tout autre critère protégé."
        ),
        h("Méthode opérationnelle"),
        t(
          "Créez trois statuts ATS distincts, même si les libellés internes varient : refusé, en attente (décision ouverte + date), réserve courte (n°1 en cours de décision / d'acceptation + date de caducité).\n\nPour le refus final : bloquez 15 minutes, appelez, tenez le script, laissez une brève place à la réaction, ne négociez pas la décision au téléphone si elle est close, confirmez par e-mail.\n\nPour l'attente : écrivez la date d'update et le motif d'attente (dernier entretien, arbitrage, validation). Si la date saute, prévenez avant l'échéance.\n\nPour la réserve : fixez une durée (par exemple 5 à 10 jours ouvrés, règle interne, pas un délai légal). Au terme, soit vous activez, soit vous refusez."
        ),
        code(
          "MODÈLE — REFUS FINAL (e-mail de confirmation après appel)\nObjet : Suite du process — [intitulé]\n\nBonjour [Prénom],\n\nComme échangé à l'instant, nous avons le regret de vous informer que nous ne retiendrons pas votre candidature pour le poste de [intitulé].\n\nLa décision s'appuie sur l'adéquation globale avec le besoin actuel, notamment [critère professionnel si autorisé]. Elle ne remet pas en cause la qualité des échanges.\n\nNous vous remercions sincèrement du temps consacré et de l'intérêt porté à [entreprise].\n\nCordialement,\n[...]\n\n---\nMODÈLE — MISE EN ATTENTE\nObjet : Point d'étape — [intitulé]\n\nBonjour [Prénom],\n\nLe process est toujours en cours. L'arbitrage n'est pas clos à ce jour (étape restante : [préciser]).\n\nJe vous donne une information ferme au plus tard le [date]. Sans nouvelle de notre part à cette date, relancez-moi.\n\nMerci de votre patience.\n\n---\nMODÈLE — RÉSERVE COURTE (sans dire « plan B »)\nObjet : Suite de votre candidature — [intitulé]\n\nBonjour [Prénom],\n\nNous n'avons pas encore clos la décision. Votre candidature reste active à ce stade.\n\nJe reviens vers vous au plus tard le [date] avec une issue claire : poursuite ou clôture.\n\nMerci de votre compréhension."
        ),
        h("Exemple professionnel"),
        t(
          "Cabinet de recrutement, mission cadre commercial pour une ETI industrielle. Deux finalistes. Le client choisit A. Le consultant junior veut garder B « au cas où » pendant un mois, sans rien dire, parce que A n'a pas encore signé.\n\nDécision : informer B d'une attente datée de 7 jours (règle cabinet), pas d'un mois de silence. Si A signe, refus final de B par téléphone. Si A se désiste, réactiver B immédiatement, sans laisser croire qu'il était le premier choix si ce n'était pas le cas."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Dire « vous étiez excellent, on ne comprend pas » : cela décrédibilise la décision et pousse le candidat à contester.\n\nPromettre un feedback détaillé que le manager refuse ensuite de donner.\n\nUtiliser « on vous met en vivier » comme substitut d'un refus, sans information RGPD ni réel suivi.\n\nAnnoncer le refus final en copie à toute la shortlist."
        ),
        h("Situations particulières"),
        t(
          "Offre déjà orale au n°1 : le n°2 est en réserve réelle. Le message d'attente est honnête. Le refus n'est envoyé qu'à l'acceptation écrite ou à la date butoir.\n\nÉgalité interne entre deux candidats : le refus final doit s'appuyer sur des critères de poste, pas sur « on s'entend mieux avec ». Si les faits d'entretien ne departagent pas, c'est un défaut de grille, à traiter en amont.\n\nCandidat qui demande « qui a été pris ? » : vous ne communiquez pas l'identité du retenu. Vous clôturez sur le poste et les critères."
        ),
        h("Mise en pratique"),
        t(
          "Rédigez deux e-mails différents pour le même candidat finaliste non retenu : a) refus définitif le jour où le n°1 a signé ; b) attente de 5 jours ouvrés pendant que le n°1 décide. Indiquez pourquoi vous ne pouvez pas envoyer le même texte."
        ),
        h("Correction détaillée"),
        t(
          "Le texte a) clôture : décision, remerciement, pas de date de « peut-être ». Le texte b) maintient une candidature active et une date. Envoyer a) trop tôt perd le plan B. Envoyer b) après signature du n°1 est un mensonge de process. Le bon texte dépend du statut réel, pas de l'envie d'être aimé."
        ),
      ],
    }),

    lesson({
      title: "Demandes d'explications, contestation et mécontentement",
      description:
        "Répondre à un candidat qui veut comprendre, qui conteste, ou qui manifeste sa colère, sans improvisation juridique.",
      minutes: 22,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez traiter une demande d'explications métier (feedback) sans la confondre avec une demande d'accès RGPD ni avec une contestation pour discrimination.\n\nVous savez recadrer un échange agressif, tracer, et escalader lorsque le sujet sort de votre mandat.\n\nVous savez ce que vous ne devez jamais écrire pour « calmer »."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Trois demandes se ressemblent dans la boîte mail et n'ont pas le même régime.\n\nLa demande d'explications métier : « Pourquoi n'ai-je pas été retenu ? Qu'aurais-je dû faire autrement ? » Ce n'est pas, en soi, une obligation légale de motiver. C'est une demande de feedback. La politique interne peut l'autoriser, le limiter aux personnes reçues en entretien, ou l'interdire au junior. Si vous répondez, le contenu reste professionnel, rattaché à des faits d'évaluation et aux critères du poste. Vous ne comparez pas à un autre candidat nommé. Vous ne diagnostiquez pas la personne (« vous n'êtes pas fait pour ce métier »).\n\nLa demande d'accès aux données : « Transmettez-moi mon dossier, vos notes, vos scores, les e-mails internes. » C'est un exercice de droits RGPD. Vous n'êtes pas le DPO. Vous accusez réception, vous transmettez au circuit prévu, vous ne filtrez pas « au feeling » les pièces, vous ne promettez pas un envoi le soir même si la procédure prévoit un délai interne. Le droit d'accès existe ; son instruction suit la procédure, y compris les éventuelles limites liées aux droits de tiers ou au secret des affaires, que le juriste ou le DPO tranche, pas le junior.\n\nLa contestation : le candidat estime que la décision est illégale, discriminatoire, ou fondée sur une question interdite. Le risque n'est plus relationnel seulement : il devient juridique et réputationnel. Décision recommandée : rester courtois, ne pas plaider le dossier par e-mail, ne pas détruire de traces, alerter le responsable et les RH, consigner les faits. Un recruteur junior qui « explique pour convaincre » aggrave souvent le dossier en ajoutant des phrases maladroites.\n\nLe mécontentement sans contestation juridique (ton agressif, menace de bad buzz, injures) se traite par un recadrage calme, une clôture de l'échange si besoin, et une alerte si la menace vise une personne. Vous n'êtes pas tenu d'accepter un échange irrespectueux. Vous restez professionnel jusqu'au bout.\n\nDans tous les cas, le moment compte. Une réponse rapide qui dit « nous avons bien reçu, voici le circuit » vaut mieux qu'un silence de dix jours suivi d'une dissertation. Le message doit coller au type de demande. L'erreur classique est de répondre à une demande RGPD par un feedback métier, ou à une accusation de discrimination par un argument d'âge ou de « fit culturel » encore plus risqué."
        ),
        note(
          "Une demande d'accès RGPD n'oblige pas à motiver le refus d'embauche. Un feedback métier n'épuise pas un droit d'accès. Une allégation de discrimination sort du mandat d'un junior : escalade immédiate, pas de débat d'opinion."
        ),
        h("Méthode opérationnelle"),
        t(
          "Classez le mail en une des trois cases (feedback / accès / contestation) avant d'écrire. Si le mail mélange les trois, traitez-les dans cet ordre : accusé de réception global, circuit RGPD, position métier courte, escalade si discrimination alléguée.\n\nPour le feedback : une à trois phrases factuelles maximum, validées si besoin par le manager. Proposez un appel de 10 minutes plutôt qu'un e-mail long si le candidat a atteint le dernier tour.\n\nPour le RGPD : modèle d'accusé + transfert interne le jour même.\n\nPour la contestation : pas de fond sans responsable. Accusé, information que le sujet est transmis, conservation des écrits."
        ),
        code(
          "MODÈLE — DEMANDE D'EXPLICATIONS MÉTIER (après entretien, politique = motif court)\nObjet : Re : Votre demande d'explications — [poste]\n\nBonjour [Prénom],\n\nNous confirmons que votre candidature n'a pas été retenue.\n\nAu regard des critères du poste, nous avons notamment privilégié une expérience plus directe sur [critère professionnel]. Ce retour est factuel et limité à ce process.\n\nNous vous remercions encore du temps consacré.\n\nCordialement,\n[...]\n\n---\nMODÈLE — DEMANDE D'ACCÈS RGPD (accusé junior)\nObjet : Re : Votre demande d'accès à vos données\n\nBonjour [Prénom],\n\nNous avons bien reçu votre demande d'accès à vos données personnelles relatives au recrutement.\n\nElle est transmise ce jour à [RH / DPO / référent], qui l'instruit selon notre procédure. Vous recevrez une réponse par ce circuit.\n\nCordialement,\n[...]\n\n---\nMODÈLE — CONTESTATION / DISCRIMINATION ALLÉGUÉE\nObjet : Re : Votre message du [date]\n\nBonjour [Prénom],\n\nNous avons bien pris connaissance de votre message. Votre demande est transmise à [responsable recrutement / RH].\n\nNous vous répondrons par ce canal. Nous ne commentons pas davantage à ce stade.\n\nCordialement,\n[...]\n\n---\nSCRIPT TÉLÉPHONIQUE — CANDIDAT MÉCONTENT\n\n« Je vous écoute. Je comprends que la décision soit décevante.\nJe peux rappeler le cadre : la candidature n'a pas été retenue pour ce poste, sur des critères professionnels.\nJe ne peux pas débattre d'un autre candidat, ni modifier la décision à l'oral.\nSi vous souhaitez exercer un droit d'accès à vos données, je vous indique le circuit : [adresse / formulaire].\nSi votre message concerne un autre sujet, je transmets à mon responsable.\nJe clôture cet échange ici. Un e-mail de confirmation part aujourd'hui. »"
        ),
        h("Exemple professionnel"),
        t(
          "Services informatiques, ETI. Un candidat non retenu après dernier entretien écrit : « Vous m'avez demandé si j'avais des enfants, c'est illégal, je vais au Défenseur des droits, et je veux toutes les notes. » Le junior a effectivement laissé le manager poser cette question sans recadrer.\n\nDécision : ne pas nier par mail, ne pas justifier la question, alerter RH et responsable, consigner l'incident, accuser réception de la demande d'accès, ouvrir le traitement de la contestation. En parallèle, le junior fait un REX : la question sur les enfants n'a pas de lien nécessaire avec l'emploi (L. 1221-6) et touche un critère protégé (situation de famille)."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Écrire « nous ne discriminons jamais » dans un mail de dix lignes : formule défensive, peu utile, parfois contredite par le process réel.\n\nDonner un feedback improvisé pour éviter l'escalade (« c'est surtout votre personnalité »).\n\nSupprimer des commentaires ATS après la contestation.\n\nArgumenter sur les réseaux sociaux ou répondre à un avis public sans consigne communication.\n\nPromettre « je vous envoie le dossier ce soir »."
        ),
        h("Situations particulières"),
        t(
          "Candidat interne qui conteste auprès de son manager actuel : coordination RH obligatoire. Le junior ne gère pas seul un conflit hiérarchique.\n\nMessage copié à un syndicat, à un avocat, ou à la direction générale : escalade immédiate, style encore plus sobre.\n\nMenace de publication de messages internes : ne pas polémiquer ; informer le responsable et, selon la politique, la communication interne."
        ),
        h("Mise en pratique"),
        t(
          "Classez et répondez (structure seulement, 5 lignes max par réponse) à ces trois extraits : 1) « Dites-moi franchement ce qui n'allait pas, j'ai besoin de progresser. » 2) « Envoyez-moi toutes les données que vous avez sur moi. » 3) « Vous m'avez écarté parce que je suis trop vieux, c'est scandaleux. »"
        ),
        h("Correction détaillée"),
        t(
          "1) Feedback métier : possible si politique ok ; faits de poste ; pas de psychologie. 2) Accusé RGPD + transfert DPO/RH ; pas de dossier en pièce jointe improvisée. 3) Escalade ; accusé neutre ; aucun débat sur l'âge. Pourquoi : trois régimes, trois circuits. Un seul e-mail « fourre-tout » mélange les risques."
        ),
      ],
    }),

    lesson({
      title: "Ghosting, refus d'offre et désistement",
      description:
        "Agir lorsque le candidat disparaît, refuse l'offre, ou se désiste après avoir dit oui, côté candidat comme côté process interne.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez relancer un candidat silencieux avec un nombre d'essais limité, puis clôturer sans dramatiser.\n\nVous savez traiter un refus d'offre comme une information de marché, pas comme un affront personnel.\n\nVous savez gérer un désistement tardif : sécuriser le plan B, informer le manager, tracer, sans pression déloyale."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le ghosting désigne ici le silence d'un candidat alors qu'une étape est ouverte : non-réponse aux relances, absence à un entretien sans message, disparition après une proposition. Ce n'est pas une infraction. C'est un fait de process. Le problème pour le junior est l'incertitude : le poste reste bloqué, le manager s'impatiente, le plan B n'est pas activé. Le risque est d'attendre trop longtemps par espoir, ou à l'inverse d'accuser le candidat dans un mail émotionnel. Décision recommandée : relances cadencées (par exemple J+1, J+3, J+5 ouvrés — rythme interne, pas un délai légal), canal mixte e-mail + téléphone, puis clôture ATS « sans réponse » et activation du suivant. Message final : court, factuel, porte ouverte professionnelle. Erreur : dix relances, ou un message culpabilisant.\n\nLe refus d'offre est une décision du candidat. Le problème n'est pas « il a dit non » : c'est de comprendre le motif utile (rémunération, contenu, délai, contre-offre, mobilité, sentiment de process) sans interroger au-delà du professionnel, puis d'en faire un REX avec le manager. Le risque est de négocier hors mandat, de dénigrer le candidat auprès du manager, ou de forcer. Décision : accuser réception, remercier, demander un motif court s'il est donné librement, clôturer, proposer le plan B. Le moment : le jour du refus. Erreur : laisser l'offre « ouverte » sans date alors que le candidat a dit non.\n\nLe désistement (après acceptation orale ou écrite, avant ou parfois après formalisation) est plus grave opérationnellement. Selon le stade, les effets juridiques ne sont pas les mêmes : une offre de contrat n'est pas une promesse unilatérale ; une promesse unilatérale d'embauche, si elle est constituée, vaut contrat et le retrait s'analyse autrement. Ces notions ne sont pas définies par la loi ; elles sont encadrées par la jurisprudence, expliquée notamment par Service-Public (F39588, vérifié le 12/03/2026). Le junior ne qualifie pas seul l'acte. Il alerte RH si un écrit d'engagement a été envoyé. Côté pratique : informer le manager, mesurer si le plan B est encore joignable, ne pas menacer le candidat, ne pas inventer de pénalité. Un désistement n'autorise pas non plus un commentaire discriminatoire (« encore une femme qui change d'avis »).\n\nLe ghosting employeur existe aussi : ne plus répondre à un candidat. Ce n'est pas une stratégie. C'est un défaut de process, traité dans les leçons de communication. Vous ne l'imitez pas parce qu'un candidat l'a fait."
        ),
        note(
          "Ne qualifiez pas seul un échange d'« offre » ou de « promesse d'embauche ». Si un écrit d'engagement a circulé et que le candidat se désiste ou que l'entreprise se rétracte, RH et, si besoin, un juriste tranchent. Source de cadrage : Service-Public F39588, vérifié le 12/03/2026."
        ),
        h("Méthode opérationnelle"),
        t(
          "Ghosting : trois tentatives maximum sur des canaux différents, délais écrits dans l'ATS, clôture. N'attendez pas le manager pour relancer ; attendez-le pour activer un n°2 s'il faut arbitrer.\n\nRefus d'offre : appel si le candidat a répondu par mail d'une ligne ; question ouverte sur le motif ; restitution factuelle au manager ; mise à jour des hypothèses (salaire, délai, contenu).\n\nDésistement : chronologie des écrits, information RH, décision de republier ou d'activer la réserve, message de clôture au candidat sans reproche."
        ),
        code(
          "MODÈLE — RELANCE PUIS CLÔTURE GHOSTING\nObjet : Dernière relance — [poste] — réponse souhaitée avant le [date]\n\nBonjour [Prénom],\n\nJe n'ai pas eu de retour à mes messages des [dates].\n\nSans réponse de votre part avant le [date, heure], je clôturerai cette candidature pour ce poste.\n\nVous pouvez bien sûr me relancer ultérieurement si votre situation change.\n\nCordialement,\n[...]\n\n---\nMODÈLE — PRISE D'ACTE D'UN REFUS D'OFFRE\nObjet : Prise d'acte — proposition [poste]\n\nBonjour [Prénom],\n\nNous prenons acte de votre décision de décliner la proposition pour le poste de [intitulé].\n\nNous vous remercions d'avoir considéré cette opportunité. Si vous souhaitez nous indiquer le motif principal, cela nous aide à améliorer nos process ; ce n'est pas une obligation.\n\nNous vous souhaitons une pleine réussite.\n\n---\nSCRIPT — DÉSISTEMENT APRÈS ACCORD ORAL\n\n« J'entends que vous retirez votre accord. Je prends acte.\nJe ne vais pas argumenter pour vous faire changer d'avis contre votre intérêt.\nPouvez-vous me dire le motif principal, si vous le souhaitez : contenu, rémunération, délai, autre projet ?\nJe transmets à l'équipe. Les éventuelles suites administratives seront gérées par [RH] si un écrit a été émis.\nJe vous remercie d'avoir prévenu. »"
        ),
        h("Exemple professionnel"),
        t(
          "Agence d'intérim. Un intérimaire confirme une mission le vendredi, ne se présente pas le lundi, n'est pas joignable. Le junior veut envoyer un SMS : « Grâce à vous on a un client furieux, ne comptez plus sur nous. »\n\nDécision : constater l'absence, informer le client selon la procédure agence, clôturer la mission dans l'outil, tracer. Un message factuel de clôture suffit. Le commentaire punitif n'aide pas le client, expose l'agence, et ne sécurise pas le remplacement."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Attendre deux semaines un candidat silencieux alors qu'un plan B disponible s'étiole.\n\nNégocier une contre-offre hors mandat pour « sauver » un oui.\n\nMenacer d'un signalement à Pôle emploi / France Travail ou d'une « liste noire ».\n\nCulpabiliser un refus d'offre (« on a tout fait pour vous »).\n\nOublier d'informer le manager le jour du désistement."
        ),
        h("Situations particulières"),
        t(
          "Absence à entretien : une relance le jour même, une seconde le lendemain, puis clôture. Proposez un report une fois si le motif est sérieux et le planning tenable.\n\nRefus d'offre pour contre-offre de l'employeur actuel : notez le motif, ne dénigrez pas l'employeur actuel, ne surenchérissez pas sans mandat.\n\nDésistement d'un candidat déjà annoncé à l'équipe : le manager annonce l'annulation en interne ; le junior ne laisse pas filtrer de détails personnels."
        ),
        h("Mise en pratique"),
        t(
          "Le n°1 n'a pas répondu depuis 4 jours ouvrés à une offre envoyée avec une date de validité à J+5. Le n°2 est en réserve et vous a demandé un point hier. Que faites-vous aujourd'hui, demain, et à J+5 ? Rédigez le mail au n°2 pour aujourd'hui."
        ),
        h("Correction détaillée"),
        t(
          "Aujourd'hui : relance n°1 (téléphone + e-mail), information manager, mail d'attente daté au n°2 (« décision non close, update au plus tard [date de validité de l'offre] »). Demain : seconde relance n°1 si silence. À J+5 sans réponse : clôture n°1 pour silence, activation n°2 si le manager confirme, sans dire que le n°1 a disparu. Pourquoi : vous ne sacrifiez pas le n°2 au silence, vous ne le mentiez pas non plus en lui promettant le poste aujourd'hui."
        ),
      ],
    }),

    lesson({
      title: "Quand l'entreprise change la donne : avis du manager, annulation, suspension, pourvoi interne",
      description:
        "Parler aux candidats lorsque le besoin bouge côté employeur, sans faire porter à autrui une décision interne.",
      minutes: 22,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez agir lorsque le manager change d'avis, lorsque le poste est annulé, suspendu, ou pourvu en interne.\n\nVous savez qui décide, qui informe les candidats, et quel niveau de vérité vous pouvez dire sans exposer l'entreprise ni humilier les personnes.\n\nVous savez distinguer un report d'un abandon, et un pourvoi interne d'un refus « classique »."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le process ne se casse pas seulement côté candidat. L'employeur peut modifier le besoin. Quatre situations types se distinguent.\n\nLe manager change d'avis : après avoir validé un profil, il veut « voir encore deux personnes », ou il écarte un finaliste qu'il avait soutenu, ou il durcit un critère. Problème : le junior a déjà engagé la parole du process (délais, étapes, parfois une intention d'offre). Risques : perte de confiance des candidats, conflit avec le manager, décisions incohérentes dans l'ATS. Décision recommandée : recadrer le besoin par écrit (nouvelle grille, nouveau délai), ne pas promettre au candidat ce que le manager vient d'annuler, faire arbitrer votre responsable si le changement est tardif et coûteux. Moment : le jour du changement, pas « on verra lundi ». Message interne : faits et impact (candidats en attente, délais, risque de désistement). Message externe : uniquement ce qui est sûr. Erreur : critiquer le manager auprès du candidat, ou exécuter sans reformuler le besoin.\n\nLe poste est annulé : le besoin disparaît (budget, réorganisation, fusion, abandon de projet). Problème : des personnes ont investi. Risques : image, parfois contestation si l'annulation masque un autre motif. Décision : arrêter immédiatement les entretiens, informer tous les candidats encore actifs, ne pas inventer un « profil non retenu » pour éviter d'avouer l'annulation. Un motif d'annulation de poste est souvent plus propre qu'un faux refus individuel. Moment : dès la confirmation écrite interne. Erreur : laisser l'annonce en ligne.\n\nLe recrutement est suspendu : le besoin n'est pas mort, il est reporté. Problème : confusion avec l'annulation. Risques : garder des candidats dans un limbe, ou les refuser trop tôt puis les rappeler. Décision : message de suspension avec une date de réinformation, proposition de clôturer si le candidat le souhaite, conservation selon la mention RGPD. Si aucune date n'est possible, traitez plutôt comme une annulation avec vivier. Erreur : « on vous rappelle » sans jamais rappeler.\n\nLe poste est pourvu en interne : un salarié est retenu. Les candidats externes (et parfois d'autres internes) doivent être informés. Problème : tentation de dire « on a trouvé mieux dehors » ou, à l'inverse, de cacher l'interne par gêne. Risques : rumeur interne, sentiment d'avoir servi de faire-valoir. Décision : indiquer que le poste a été pourvu, éventuellement qu'une candidature interne a été retenue si la politique le permet, sans évaluer les externes à la baisse. Les internes non retenus relèvent d'un traitement RH. Erreur : continuer à recevoir des externes « pour la forme » alors que la décision interne est déjà prise — pratique déloyale, et incompatible avec des méthodes pertinentes (L. 1221-9).\n\nLe cadre légal ne crée pas d'obligation générale de motiver le refus des personnes non retenues. Il impose de ne pas discriminer. Un pourvoi interne n'autorise pas d'écarter un externe pour un critère protégé. Un changement d'avis du manager n'autorise pas de nouvelles questions hors L. 1221-6."
        ),
        h("Méthode opérationnelle"),
        t(
          "Exigez un écrit interne (e-mail manager, ticket ATS, validation direction) avant d'informer les candidats d'une annulation, d'une suspension ou d'un pourvoi interne.\n\nListez les candidatures actives par statut. Priorisez : personnes en attente d'offre, personnes convoquées cette semaine, puis le reste.\n\nAppelez les personnes les plus avancées ; e-mail pour les autres. Retirez ou mettez hors ligne l'annonce. Stoppez les sourcings en cours. Informez les cabinets partenaires le jour même.\n\nProposez, si réel, un autre poste ou un vivier. Ne le promettez pas pour vous faire pardonner."
        ),
        code(
          "MODÈLE — POSTE ANNULÉ\nObjet : Information importante — poste [intitulé]\n\nBonjour [Prénom],\n\nNous vous informons que le recrutement pour le poste de [intitulé] est annulé. Cette décision est liée à [réorganisation / budget / abandon de projet — formulation validée en interne], et non à l'évaluation de votre candidature.\n\nLes entretiens éventuellement planifiés sont annulés. Nous vous remercions d'avoir accordé du temps à ce process.\n\nSi vous acceptez que nous conservions votre dossier pour d'autres opportunités, cela se fera selon les informations déjà communiquées sur la durée de conservation et vos droits.\n\nCordialement,\n[...]\n\n---\nMODÈLE — RECRUTEMENT SUSPENDU\nObjet : Suspension du recrutement — [intitulé]\n\nBonjour [Prénom],\n\nLe recrutement est suspendu à ce jour. Nous ne sommes pas en mesure de garantir une reprise à une date ferme.\n\nJe vous donne un point au plus tard le [date]. Si vous souhaitez que nous clôturions dès maintenant votre candidature, indiquez-le-moi.\n\n---\nMODÈLE — POURVU EN INTERNE\nObjet : Suite de votre candidature — [intitulé]\n\nBonjour [Prénom],\n\nLe poste de [intitulé] a été pourvu. Une candidature interne a été retenue.\n\nNous vous remercions d'avoir participé à ce process. Votre candidature n'a pas été écartée pour un motif autre que le choix effectué sur ce besoin.\n\n---\nSCRIPT — MANAGER QUI CHANGE D'AVIS (interne)\n\n« Je prends note du nouveau critère [X]. Aujourd'hui, trois candidats ont déjà passé [étape] sur la base de l'ancien cadrage.\nDeux options : on reprend un avenant de fiche et on informe les personnes concernées du changement d'étape, ou on clôture ce process et on en ouvre un autre.\nJe ne peux pas dire aux finalistes que rien n'a changé. Dites-moi l'option retenue par écrit. »"
        ),
        h("Exemple professionnel"),
        t(
          "Industrie, usine de 250 personnes. Un chef d'atelier dit le lundi : « Recrute un régleur. » Le vendredi, après trois préqualifications, RH apprend qu'un salarié d'un autre site va muter sur le poste. Le junior a un entretien lundi déjà confirmé.\n\nDécision : annuler l'entretien, appeler le candidat, expliquer un pourvoi interne, ne pas le recevoir « quand même ». Informer les deux autres préqualifiés par e-mail le vendredi. Tracer le motif réel : mobilité interne, pas « profil insuffisant »."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Laisser le rendez-vous lundi « pour ne pas faire désordre ». Faire passer des gens pour un poste déjà attribué n'est pas une politesse ; c'est une déloyauté de process.\n\nBlâmer le manager dans l'e-mail au candidat.\n\nAnnoncer une suspension sans date de réinformation, puis disparaître.\n\nTransformer tous les externes en « refusés pour compétences » afin de masquer un interne."
        ),
        h("Situations particulières"),
        t(
          "Annulation après une offre orale : alerte RH immédiate. Selon la qualification de l'écrit ou de l'oral (offre vs promesse unilatérale), les conséquences ne sont pas du ressort du junior.\n\nSuspension liée à un PSE ou à un gel des embauches : formulations validées par RH / communication interne uniquement.\n\nManager qui change d'avis pour un motif discriminatoire : vous n'exécutez pas ; vous alertez."
        ),
        h("Mise en pratique"),
        t(
          "Quatre candidats actifs : A a une offre orale en cours de rédaction, B a un entretien demain, C a envoyé un CV hier, D est en réserve. Le directeur annule le poste ce soir. Ordre des actions et canal pour chacun."
        ),
        h("Correction détaillée"),
        t(
          "Stop annonce et convocations. Alerte RH pour A (offre orale : pas d'improvisation juridique). Appel A puis B ce soir ou demain matin très tôt, avant l'heure de l'entretien. E-mail C et D : annulation de poste, pas un faux refus de profil. Pourquoi : plus le candidat est avancé, plus le canal est oral et rapide. Le contenu reste le même : le poste n'existe plus, ce n'est pas une évaluation de la personne."
        ),
      ],
    }),

    lesson({
      title: "Retards, erreurs de communication et rattrapage",
      description:
        "Corriger un oubli, un mauvais destinataire, un délai non tenu ou une information erronée, sans aggraver la situation.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez reconnaître une erreur de communication, en mesurer l'impact, et envoyer un rectificatif clair.\n\nVous savez gérer un retard de process annoncé, un e-mail parti au mauvais destinataire, ou une information contradictoire entre recruteur et manager.\n\nVous savez quand l'erreur reste opérable par vos soins et quand elle exige une escalade."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le retard n'est pas un refus. C'est un écart entre la date promise et la date réelle. Le problème : le candidat comble le vide par une hypothèse (on l'a oublié, on l'a écarté, le poste est pourvu). Le risque : désistement, mauvaise image, relance agressive, ou au contraire silence du candidat qui a déjà accepté ailleurs. Décision recommandée : prévenir avant l'échéance, donner une nouvelle date, s'y tenir. Si vous n'avez pas l'information, dites-le plutôt que d'inventer un motif. Moment : dès que vous savez que la date va sauter. Message : excuse factuelle, nouvelle date, pas de roman. Erreur : disparaître pour « attendre d'avoir une bonne nouvelle ».\n\nL'erreur de communication recouvre plusieurs faits : mauvais destinataire (CV ou notes envoyés à la mauvaise personne), mauvais contenu (salaire annoncé hors cadrage, étape inventée, refus envoyé au candidat retenu), contradiction public (annonce encore en ligne alors que le poste est pourvu), copie inutile qui expose des données. Le risque RGPD est réel : une donnée personnelle envoyée au mauvais destinataire est un incident. Décision : cesser l'erreur (rappel d'e-mail si possible, demande de suppression), informer le responsable et le circuit incident si des données de tiers ont fuité, prévenir les personnes concernées selon la procédure, corriger le message métier. Le junior ne décide pas seul si l'incident est « notifiable ». Il alerte.\n\nLe rattrapage a une règle : un seul rectificatif clair vaut mieux que trois messages d'excuse. Vous nommez l'erreur utile (« un e-mail de refus vous a été adressé par erreur ; votre candidature est toujours au stade X »), vous dites l'état réel, vous proposez un canal pour questions. Vous n'ajoutez pas de détails inutiles qui créent de nouvelles questions.\n\nLe cadre : pas d'obligation générale de motiver un refus ; obligation de ne pas discriminer ; obligation de traiter les données de façon loyale et de réagir à un incident selon la procédure interne, en lien avec le RGPD. Une erreur de com n'autorise pas à « rattraper » en révélant des informations sur un autre candidat."
        ),
        h("Méthode opérationnelle"),
        t(
          "1) Qualifier : retard simple, contradiction métier, ou incident de données. 2) Stopper la source (modèle d'e-mail, annonce, accès ATS). 3) Informer le responsable si incident ou si candidat finaliste. 4) Rectifier les destinataires concernés, un par un. 5) Tracer dans l'ATS. 6) REX : cause, pas coupable unique."
        ),
        code(
          "MODÈLE — RETARD ANNONCÉ AVANT L'ÉCHÉANCE\nObjet : Décalage d'information — [poste]\n\nBonjour [Prénom],\n\nJe m'étais engagé à vous donner une suite le [date]. L'arbitrage n'est pas clos.\n\nJe vous écris avant cette échéance pour vous proposer une nouvelle date : le [nouvelle date].\n\nVotre candidature reste en cours. Merci de votre compréhension.\n\n---\nMODÈLE — REFUS ENVOYÉ PAR ERREUR\nObjet : Rectificatif important — votre candidature est toujours en cours\n\nBonjour [Prénom],\n\nUn message de clôture vous a été adressé par erreur aujourd'hui. Il ne correspond pas à la décision réelle.\n\nVotre candidature au poste de [intitulé] est toujours au stade : [étape]. Prochaine action : [date / entretien / arbitrage].\n\nJe reste disponible par téléphone au [numéro] pour en reparler.\n\nVeuillez m'excuser pour cette erreur.\n\n---\nMODÈLE — MAUVAIS DESTINATAIRE (données)\nObjet : Message envoyé par erreur — merci de supprimer\n\nBonjour,\n\nLe message précédent, ainsi que ses pièces, ne vous était pas destiné. Merci de le supprimer et de ne pas en faire usage.\n\nConfirmez-moi cette suppression en répondant à cet e-mail.\n\n[Puis : alerte interne RH / DPO / responsable selon procédure incident]"
        ),
        h("Exemple professionnel"),
        t(
          "Cabinet. Le junior envoie un tableau de shortlist (noms, prénoms, prétentions, commentaires) au mauvais client, homonyme d'entreprise. Il s'en aperçoit dix minutes plus tard.\n\nDécision : e-mail de rappel immédiat, demande de suppression, alerte au consultant responsable et au circuit incident, pas d'attente du lendemain. Le rectificatif métier au bon client se fait ensuite, avec un tableau à jour. Pas de détail sur l'incident dans un mail aux candidats."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Ajouter une copie au manager « pour info » contenant encore la mauvaise pièce.\n\nMentir sur la cause (« problème informatique ») lorsque la cause est une mauvaise liste de diffusion : le mensonge empêche le REX.\n\nEnchaîner trois excuses personnelles longues, sans dire l'état du process.\n\nCorriger un salaire annoncé à la hausse sans mandat, pour compenser le retard."
        ),
        h("Situations particulières"),
        t(
          "Erreur découverte par le candidat (il a reçu le refus d'un autre) : excuses, pas de commentaire sur l'autre personne, incident données, escalade.\n\nRetard causé par le manager qui ne débriefe pas : vous relancez le manager par écrit, vous informez le candidat du décalage, vous n'inventez pas un avis.\n\nDouble information contradictoire (le manager a dit « c'est bon » au candidat, vous envoyez un mail d'attente) : alignement immédiat en interne, un seul message de clarification signé du process."
        ),
        h("Mise en pratique"),
        t(
          "Vous aviez promis une réponse vendredi 17 h. Il est vendredi 16 h 45, le manager n'a pas tranché. Rédigez l'e-mail de 16 h 50. Puis, lundi, le manager refuse. Rédigez le second e-mail. Pourquoi ne pas attendre lundi sans écrire vendredi ?"
        ),
        h("Correction détaillée"),
        t(
          "Vendredi : vous respectez votre parole de process en annonçant le décalage, nouvelle date lundi. Lundi : refus clair, canal adapté à l'étape. Sans le mail de vendredi, le candidat passe le week-end à interpréter le silence, parfois en se désistant. Le retard géré n'est pas un refus ; le silence, si."
        ),
      ],
    }),

    lesson({
      title: "Bibliothèque de modèles : e-mails et scripts pour les situations délicates",
      description:
        "Disposer de textes prêts à adapter, classés par situation, avec consignes d'usage et limites juridiques.",
      minutes: 24,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez choisir un modèle selon la situation, l'adapter (noms, poste, date, critère professionnel autorisé), et le relire contre les critères protégés.\n\nVous savez quand passer du mail au téléphone, et quand ne pas utiliser de modèle du tout (contestation, incident RGPD, offre/promesse)."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Un modèle n'est pas une obligation légale. C'est un outil de politique interne et de bonne pratique : il réduit les écarts de ton, les oublis, et les phrases risquées. Il ne remplace pas la décision. Si le statut ATS est faux, le plus beau mail est un mensonge.\n\nAdaptez toujours : intitulé exact, prénom, date de l'échange, prochaine étape réelle. N'ajoutez pas de motif « pour faire humain » si vous n'avez pas de fait professionnel. N'ornez pas d'un « vous étiez le meilleur » qui contredit la décision.\n\nLes scripts téléphoniques se lisent comme une structure, pas comme un texte dit mot à mot. Le silence après l'annonce du refus fait partie du respect. Vous ne remplissez pas ce silence par un roman.\n\nRappel de cadre, valable pour tous les modèles : pas d'obligation légale générale de motiver un refus ; obligation de ne pas discriminer (L. 1132-1) ; informations et méthodes d'évaluation circonscrites au professionnel (L. 1221-6, L. 1221-8, L. 1221-9) ; droit d'accès aux données si le candidat le demande, via le circuit RGPD, distinct du feedback métier ; conservation probatoire et vivier selon CNIL / L. 1134-5, sans transformer le mail de refus en cours de droit.\n\nLes modèles ci-dessous couvrent les situations déjà analysées : refus CV, préqual, premier entretien, refus final, attente, réserve, explications, mécontentement, ghosting, refus d'offre, désistement, changement d'avis, poste annulé, suspension, pourvoi interne, retard, erreur de com. Ils sont rédigés pour un recruteur junior en entreprise, en cabinet ou en agence ; le pied de signature change, pas le principe."
        ),
        note(
          "Avant envoi : relire le message à la recherche d'un critère L. 1132-1, d'une comparaison nominative, d'une promesse d'autre poste non réelle, et d'une pièce jointe trop large. Si le candidat demande ses données, n'utilisez pas un modèle de feedback : utilisez l'accusé d'accès."
        ),
        h("Méthode opérationnelle"),
        t(
          "1) Identifier la situation type. 2) Vérifier le statut réel. 3) Choisir le canal. 4) Copier le modèle. 5) Personnaliser. 6) Faire relire un refus final ou une erreur de com par un pair / responsable si vous débutez. 7) Envoyer et tracer. 8) Ne pas engager de fil de discussion infini : une réponse de clarification, puis clôture ou escalade."
        ),
        code(
          "A. REFUS CV — version courte\nObjet : Votre candidature — [poste]\nBonjour [Prénom],\nNous vous remercions d'avoir candidaté au poste de [poste] au sein de [entreprise].\nNous ne donnerons pas de suite favorable à votre candidature pour ce poste.\nNous vous souhaitons une pleine réussite dans vos recherches.\nCordialement,\n[signature]\n\nB. REFUS PRÉQUALIFICATION — avec motif court autorisé\nObjet : Suite de notre échange du [date]\nBonjour [Prénom],\nMerci pour notre échange. Nous ne poursuivrons pas : le poste exige [critère professionnel], que ce process ne permet pas de couvrir.\nJe vous remercie du temps accordé.\n\nC. REFUS 1ER ENTRETIEN — confirmation après appel\nObjet : Confirmation — suite du process [poste]\nBonjour [Prénom],\nComme évoqué par téléphone, nous ne donnons pas suite après l'entretien du [date].\nCette décision porte sur l'adéquation avec le besoin actuel, notamment [critère].\nMerci encore.\n\nD. REFUS FINAL — confirmation\n(voir leçon refus final ; appel obligatoire si process avancé)\n\nE. ATTENTE DATÉE\nObjet : Point d'étape au [date]\nBonjour [Prénom],\nLe process n'est pas clos (étape restante : [X]). Prochaine information ferme le [date].\n\nF. RÉSERVE COURTE\nObjet : Votre candidature reste active jusqu'au [date]\nBonjour [Prénom],\nNous n'avons pas encore d'issue définitive. Je vous écris au plus tard le [date] pour une poursuite ou une clôture.\n\nG. DEMANDE D'EXPLICATIONS — sans obligation de développer\nBonjour [Prénom],\nNous confirmons la non-sélection pour ce poste. Nous ne formulons pas de commentaire détaillé au-delà des critères professionnels déjà évoqués.\nSi votre message est une demande d'accès à vos données, indiquez-le clairement : nous transmettrons au circuit prévu.\n\nH. MÉCONTENTEMENT — recadrage\nBonjour [Prénom],\nNous avons pris connaissance de votre message. La décision de ne pas retenir la candidature est maintenue.\nNous poursuivrons l'échange si des faits nouveaux professionnels sont à corriger, ou si vous exercez un droit sur vos données via [contact].\nNous ne poursuivrons pas un échange irrespectueux.\n\nI. CLÔTURE GHOSTING\nBonjour [Prénom],\nSans retour à nos relances des [dates], nous clôturons cette candidature à la date du [date].\n\nJ. REFUS D'OFFRE — prise d'acte\nBonjour [Prénom],\nNous prenons acte de votre décision de décliner la proposition. Merci de nous avoir informés.\n\nK. DÉSISTEMENT — prise d'acte\nBonjour [Prénom],\nNous prenons acte de votre désistement. Les éventuelles suites liées à un écrit déjà émis seront traitées par [RH].\n\nL. POSTE ANNULÉ / SUSPENDU / POURVU INTERNE\n(voir leçon dédiée ; ne pas transformer en faux refus de compétences)\n\nM. RETARD / RECTIFICATIF\n(voir leçon dédiée)\n\n---\nSCRIPTS TÉLÉPHONIQUES EXPRESS\n\nRefus final :\n« Je vous appelle pour vous donner la décision. Nous ne retenons pas votre candidature pour [poste]. Le besoin s'oriente vers [critère]. Merci pour le temps consacré. Je confirme par e-mail. »\n\nAnnulation de poste :\n« Je vous appelle pour une information de process, pas un avis sur votre profil. Le poste est annulé [motif validé]. Les rendez-vous sont annulés. Un e-mail part aujourd'hui. »\n\nErreur de refus :\n« Je vous appelle tout de suite : un e-mail erroné est parti. Votre candidature est toujours au stade [X]. Veuillez m'excuser. Je confirme par écrit dans l'heure. »"
        ),
        h("Exemple professionnel"),
        t(
          "PME du bâtiment. La dirigeante demande au junior de copier-coller un ancien SMS : « Désolé c'est mort, on a pris un pote du chef de chantier. » Le junior propose le modèle L (pourvu, ici de fait une décision interne / réseau) en e-mail professionnel, sans mention du « pote », et un appel au candidat déjà reçu. La dirigeante accepte l'e-mail. Le motif interne réel (cooptation retenue) est tracé en ATS, pas dans le SMS."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Empiler trois modèles dans un seul mail. Utiliser le modèle contestation pour un simple feedback. Laisser [poste] non remplacé. Ajouter un emoji pour « adoucir ». Mettre le manager en copie du refus final avec les notes d'entretien visibles."
        ),
        h("Situations particulières"),
        t(
          "Cabinet : le client peut exiger de valider le texte. Vous n'envoyez pas un refus au nom du client sans sa règle. Intérim : le refus d'une mission n'est pas toujours un refus d'inscription ; distinguez les deux statuts. Volume campus : un mail groupé en CCI est possible pour les non-reçus ; les personnes interviewées restent en message individuel."
        ),
        h("Mise en pratique"),
        t(
          "Choisissez le modèle (lettre A à M) et le canal pour : 1) CV non retenu, 80 candidatures ; 2) finaliste ; 3) candidat qui n'a pas répondu à l'offre ; 4) manager qui annule après deux entretiens ; 5) candidat qui demande « toutes vos notes »."
        ),
        h("Correction détaillée"),
        t(
          "1) A, e-mail, éventuellement lot. 2) Appel + D. 3) Relance puis I, activation plan B. 4) Appel + L annulation, pas un A déguisé. 5) Accusé RGPD, pas G de feedback. Pourquoi : le modèle suit le fait réel et le régime juridique, pas l'humeur du jour."
        ),
      ],
    }),

    quizLesson({
      title: "Quiz — Refus et situations délicates",
      description: "Dix questions : cadre légal du refus, canaux, statuts, incidents et messages.",
      passing_score: 70,
      minutes: 12,
      questions: [
        q({
          question:
            "En droit français, concernant la motivation d'un refus de candidature, quelle affirmation est exacte ?",
          options: [
            "A. Il n'existe pas d'obligation légale générale de motiver un refus de candidature, mais l'employeur reste tenu de ne pas discriminer.",
            "B. Tout refus doit être motivé par écrit dans un délai légal de 48 heures.",
            "C. Le recruteur junior doit toujours expliquer le refus, car le RGPD impose de motiver les décisions d'embauche.",
            "D. Seuls les refus après entretien final doivent être motivés, en vertu de l'article L. 1221-6.",
          ],
          correct: 0,
          explanation:
            "Il n'existe pas d'obligation légale générale de motiver un refus. L. 1221-6 encadre les informations demandées au candidat, pas une obligation de motiver le non. Le RGPD organise notamment un droit d'accès aux données, distinct d'une obligation de motiver le choix métier. L'interdiction de discriminer (L. 1132-1) s'applique toujours. Pas de délai légal général de 48 heures pour un refus.",
        }),
        q({
          question:
            "Un manager vous dit de refuser un candidat « parce qu'il est trop vieux pour l'équipe ». Que faites-vous ?",
          options: [
            "A. Vous n'exécutez pas ce motif, vous alertez votre responsable : l'âge est un critère protégé (L. 1132-1).",
            "B. Vous envoyez un refus poli en copiant la phrase du manager, par loyauté interne.",
            "C. Vous refusez sans motif, donc le critère d'âge n'existe plus juridiquement.",
            "D. Vous proposez au candidat un questionnaire médical pour objectiver l'âge.",
          ],
          correct: 0,
          explanation:
            "L'âge est un critère protégé. Un refus fondé sur ce motif n'est pas licite. Ne pas l'écrire dans l'e-mail ne l'efface pas si c'est la vraie raison. Un questionnaire médical n'est pas l'outil du recruteur pour « objectiver l'âge » et sort du cadre L. 1221-6.",
        }),
        q({
          question:
            "Un candidat non retenu écrit : « Envoyez-moi toutes vos notes d'entretien et commentaires du manager. » Quelle est la bonne qualification ?",
          options: [
            "A. Demande d'accès à des données personnelles : accusé de réception et transfert au circuit RH / DPO, sans envoi improvisé du dossier brut.",
            "B. Demande de feedback métier : vous devez motiver le refus par retour le jour même.",
            "C. Demande abusive : vous pouvez ignorer le mail, le droit d'accès ne concerne pas le recrutement.",
            "D. Vous envoyez uniquement les notes positives, pour protéger l'entreprise.",
          ],
          correct: 0,
          explanation:
            "C'est un exercice de droits sur les données, pas une obligation de motiver le refus. Le junior n'instruit pas seul, ne filtre pas « au feeling » et n'ignore pas la demande. Le circuit interne (RH, DPO) instruit, y compris d'éventuelles limites.",
        }),
        q({
          question:
            "Quelle distinction est correcte entre attente et réserve ?",
          options: [
            "A. L'attente correspond à une décision encore ouverte, avec une date d'information ; la réserve est un plan B interne, avec une durée de caducité, qui ne doit pas se traduire par un silence prolongé.",
            "B. L'attente est un refus définitif ; la réserve est un accord d'embauche.",
            "C. La réserve interdit tout contact avec le candidat jusqu'à l'embauche du n°1.",
            "D. Attente et réserve sont des obligations légales identiques, d'une durée de 2 ans (CNIL).",
          ],
          correct: 0,
          explanation:
            "Ce sont des statuts de process, pas des durées CNIL. Le vivier 2 ans est une recommandation de conservation, distincte. La réserve n'interdit pas d'informer ; elle exige une date. L'attente n'est pas un refus.",
        }),
        q({
          question:
            "Un poste est pourvu en interne alors que deux candidats externes ont déjà passé un entretien. Que faites-vous ?",
          options: [
            "A. Vous informez les deux que le poste a été pourvu (pourvoi interne si la politique le permet), sans les recevoir « pour la forme » et sans faux motif de compétences.",
            "B. Vous les recevez quand même, pour ne pas perdre la face.",
            "C. Vous leur envoyez un refus de CV standard, comme s'ils n'avaient pas été vus.",
            "D. Vous attendez qu'ils relancent, car il n'y a pas d'obligation de répondre.",
          ],
          correct: 0,
          explanation:
            "Continuer un process pour un poste déjà attribué n'est pas une méthode pertinente. Un faux refus de compétences est déloyal. L'absence d'obligation générale de motiver n'autorise pas le silence après un entretien réel. L'information de pourvoi est la décision recommandée.",
        }),
        q({
          question: "Quelle conduite est recommandée face au ghosting d'un candidat à qui une offre a été envoyée ?",
          options: [
            "A. Relances cadencées sur une courte période, clôture à la date de validité, activation du plan B, message factuel, sans menace.",
            "B. Dix relances quotidiennes, puis un mail indiquant une « liste noire ».",
            "C. Attendre 30 jours, car le silence vaut acceptation de l'offre.",
            "D. Publier le prénom du candidat en interne comme « non fiable ».",
          ],
          correct: 0,
          explanation:
            "Le silence ne vaut pas acceptation. Les menaces, listes noires et commentaires infamants sont des erreurs professionnelles, et peuvent poser des questions de données et de réputation. Un process cadencé protège le besoin.",
        }),
        q({
          question:
            "Le manager annule le poste après deux préqualifications. Quel message est le plus adapté ?",
          options: [
            "A. Annoncer l'annulation du recrutement, ce n'est pas une évaluation du profil, stopper l'annonce et les rendez-vous.",
            "B. Dire à chacun qu'il n'a pas les compétences, pour éviter d'avouer l'annulation.",
            "C. Ne rien dire tant que le budget n'est pas « officiel », même si les rendez-vous ont lieu demain.",
            "D. Promettre un autre poste équivalent dès la semaine suivante, pour se faire pardonner.",
          ],
          correct: 0,
          explanation:
            "Le fait réel est l'annulation. Un faux refus de compétences est une erreur. Faire passer des entretiens après décision d'annuler est déloyal. Une promesse d'autre poste non réelle crée un nouvel engagement.",
        }),
        q({
          question:
            "Vous avez promis une réponse vendredi. À 16 h 45, le manager n'a pas tranché. Que faites-vous ?",
          options: [
            "A. Vous écrivez avant l'échéance pour annoncer le décalage et une nouvelle date, sans inventer une décision.",
            "B. Vous attendez lundi sans rien dire, pour n'écrire que lorsqu'il y aura une décision.",
            "C. Vous refusez par précaution, quitte à rappeler le candidat lundi s'il est choisi.",
            "D. Vous envoyez un SMS : « c'est bon, on te prend », pour tenir le délai.",
          ],
          correct: 0,
          explanation:
            "Un retard annoncé n'est pas un refus. Le silence jusqu'à lundi trahit la parole de process. Un refus ou une embauche fictifs pour « tenir le délai » sont des erreurs graves.",
        }),
        q({
          question:
            "Un e-mail contenant les commentaires d'entretien d'un candidat part au mauvais destinataire. Premier réflexe ?",
          options: [
            "A. Tenter un rappel, demander la suppression, alerter le circuit incident (responsable / RH / DPO) : il s'agit d'un incident de données.",
            "B. Ignorer si le destinataire est « de confiance ».",
            "C. Prévenir uniquement le candidat concerné, sans alerter en interne, pour éviter les ennuis.",
            "D. Modifier les notes dans l'ATS pour qu'elles soient plus positives, puis ne rien dire.",
          ],
          correct: 0,
          explanation:
            "C'est un incident potentiel sur des données personnelles. Le junior n'arbitre pas seul la notification. Il stoppe, demande la suppression, alerte. Modifier les notes après coup aggrave.",
        }),
        q({
          question:
            "Quelle phrase est à proscrire dans un refus, même « pour faire simple » ?",
          options: [
            "A. « On a pris quelqu'un de plus jeune, ça collera mieux avec l'équipe. »",
            "B. « Nous ne donnerons pas suite à votre candidature pour ce poste. »",
            "C. « Le poste a été pourvu. »",
            "D. « Nous vous remercions d'avoir accordé du temps à ce process. »",
          ],
          correct: 0,
          explanation:
            "La phrase A mobilise un critère protégé (âge) et un stéréotype d'équipe. B, C et D sont des formulations professionnelles courantes, sous réserve qu'elles correspondent au fait réel.",
        }),
      ],
    }),
  ],
};
