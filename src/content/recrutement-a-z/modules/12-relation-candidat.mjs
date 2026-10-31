import { lesson, h, t, note, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 12,
  title: "Gérer le processus et la relation candidat",
  description:
    "Cartographier les étapes, convoquer, relancer, reporter, informer sans mentir, et distinguer obligation légale, droits RGPD et bonne pratique — y compris l'absence d'obligation générale de motiver un refus.",
  lessons: [
    lesson({
      title: "Cartographier le processus, la transparence et les délais",
      description:
        "Rendre le parcours lisible pour le candidat et pour l'interne : étapes, responsables, délais cibles, points de communication.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez dessiner un process de recrutement en étapes nommées, attribuer un responsable à chaque communication, et fixer des délais cibles internes sans les présenter comme des délais légaux inventés."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Un candidat ne vit pas « votre ATS ». Il vit une suite de messages, de silences et de rendez-vous. La relation candidat commence à la confirmation de réception, pas à l'entretien. Un process non cartographié produit des trous : personne ne sait qui rappelle, les managers gardent des CV, les délais s'allongent, le ghosting s'installe. Cartographier n'est pas une obligation légale unique. C'est une bonne pratique de maîtrise, et un outil de conformité : moins de données éparpillées, moins de questions hors cadre, moins de promesses orales contradictoires.\n\nLa transparence professionnelle consiste à dire les étapes réellement prévues, pas un roman d'entreprise. « Entretien recruteur, entretien manager, décision, réponse sous dix jours ouvrés » est une information utile si elle est tenue ou actualisée. « Process rapide, on avance vite, belle aventure » n'informe pas. Mentir sur l'existence d'un poste ou sur les conditions heurte l'esprit de L. 5331-3 (allégations fausses ou trompeuses dans les offres). À l'oral et par e-mail, la même honnêteté s'impose.\n\nLes délais de réponse aux candidats ne sont pas, en droit français, un barème unique du type « 48 h légales » ou « 15 jours maximum » que ce cours pourrait afficher comme obligation générale. N'inventez pas un délai légal. Une politique interne peut imposer un délai maximal de silence (bonne pratique fortement recommandée, parfois une règle d'employeur). Un silence trop long, même sans infraction isolée nommée, dégrade l'expérience, fait perdre des profils, et peut, combiné à d'autres éléments, nourrir un sentiment de traitement inégal. La non-discrimination (L. 1132-1) reste due à chaque étape : on ne « laisse pourrir » un dossier pour un motif protégé.\n\nLe process type d'un recruteur junior en entreprise : réception / tri, accusé, préqualification, entretien 1, entretien 2 éventuel, épreuve informée éventuelle, shortlist, décision, offre ou clôture, conservation selon règles. En cabinet, s'ajoute le client. En intérim, s'ajoutent des vacations courtes. À chaque porte, un message : convocation, confirmation, suivi, report, remerciement, clôture. Si une porte n'a pas de message prévu, c'est là que naît le ghosting.\n\nLa cartographie sert aussi au RGPD : on sait quelles données circulent, vers qui, jusqu'à quand. Le guide CNIL du recrutement (30 janvier 2023) et le référentiel durées RH (2026, voir legal-sources.json) distinguent base active, vivier recommandé, archivage probatoire. Sans carte du process, les CV restent dans des boîtes mail personnelles."
        ),
        h("Méthode opérationnelle"),
        t(
          "Sur une page : colonnes Étape / Acteur / Délai cible interne / Message au candidat / Données utilisées / Sortie possible. Faites valider par le manager et les RH. Ne promettez au candidat que ce qui est sur cette page.\n\nDélais cibles exemplaires de politique interne (pas des délais légaux) : accusé sous 72 h, suite d'entretien sous 5 à 10 jours ouvrés, actualisation si le délai glisse. Écrire le délai dans l'outil, avec une alerte, pas seulement dans votre tête.\n\nPoint hebdomadaire : dossiers sans contact depuis X jours. Un dossier sans propriétaire nommé est un risque."
        ),
        h("Exemple professionnel"),
        t(
          "PME de 60 personnes, un assistant RH. Process écrit : accusé automatique, tri sous 5 jours, entretien unique recruteur+manager, réponse sous 8 jours ouvrés après le dernier entretien. Le gérant voulait « on verra ». L'assistant a imposé le tableau parce que trois candidats de la campagne précédente relançaient encore un mois plus tard. Le gérant a accepté le délai interne. Ce n'est pas devenu une obligation légale ; c'est devenu une règle d'employeur, opposable au manager qui « oublie »."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Annoncer « on revient vers vous très vite » sans date. Personne n'a la même définition de « vite ».\n\nAvoir un process différent pour le candidat interne « on lui dira au café » et l'externe. L'équité de communication fait partie de l'équité de traitement.\n\nInventer un « délai légal de deux mois » pour justifier un silence. Ce cours l'interdit."
        ),
        h("Situations particulières"),
        t(
          "Cabinet : le process client s'ajoute. Vous ne promettez pas une date que le client n'a pas validée. Vous dites : « Nous avons demandé un retour pour jeudi ; si nous n'avons pas de décision, nous vous actualisons vendredi. »\n\nVolume intérim : messages plus courts, mais un statut (reçu, présenté, non retenu pour cette vacation). Le volume n'autorise pas le zéro réponse comme doctrine.\n\nPoste gelé en cours de route : information factuelle (« le recrutement est suspendu »), pas disparition."
        ),
        h("Mise en pratique"),
        t(
          "Dessinez le process d'un CDI chargé de clientèle (6 à 8 étapes). Pour chaque étape : acteur, délai cible interne, message oui/non. Indiquez explicitement un élément que vous n'inscrirez pas comme « obligation légale de délai »."
        ),
        h("Correction détaillée"),
        t(
          "Étapes possibles : réception et accusé (recruteur, 72 h) ; tri (recruteur, 5 j) ; préqualification (recruteur) ; entretien 1 (recruteur+directeur) ; débrief (J0) ; second regard éventuel ; décision d'étape ; offre ou clôture. Messages à toutes les portes de rendez-vous et de décision. Ce que vous n'écrivez pas comme obligation légale : « réponse sous 8 jours, c'est la loi ». Vous écrivez : « réponse sous 8 jours ouvrés, politique interne / bonne pratique, à actualiser si glissement »."
        ),
      ],
    }),
    lesson({
      title: "Convocations et confirmations",
      description:
        "Rédiger des convocations complètes, confirmer sans ambiguïté, et intégrer l'information utile (aménagement, méthodes, interlocuteurs).",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez rédiger une convocation professionnelle (présentiel ou visio) et un accusé de confirmation, en y plaçant les informations de cadre, d'aménagement, et le cas échéant l'information préalable sur une méthode (L. 1221-8)."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "La convocation n'est pas un SMS minimaliste « 10 h, vous venez ? ». C'est le document qui fixe le contrat de rendez-vous : objet du poste, date, heure, durée, lieu ou lien, interlocuteurs et fonctions, documents éventuels, contact d'empêchement, phrase d'aménagement, suite éventuelle. Un candidat mal convoqué arrive au mauvais endroit, croit passer un entretien de 20 minutes, ou découvre un cas pratique par surprise. La surprise sur une méthode d'évaluation heurte L. 1221-8 si une technique d'aide au recrutement est mise en œuvre sans information préalable.\n\nLa confirmation (du candidat ou de vous-même) ferme l'incertitude. Un « ok » dans un fil de 15 messages n'est pas une confirmation robuste. Un e-mail unique qui reprend les éléments, avec un objet clair, l'est. La politique interne peut exiger un créneau bloqué dans un agenda. Ce n'est pas dans le Code du travail ; c'est de l'organisation.\n\nLe ton est courtois et vouvoyé. Ni fausse intimité, ni ordre militaire. Vous ne demandez pas, dans la convocation, d'informations de santé, de famille, de photo, de pièce d'identité hors cadre prévu par l'employeur pour l'accès au site (et alors, finalité accès, pas recrutement émotionnel). Une pièce d'identité à l'accueil pour un badge n'est pas une enquête d'identité au sens du tri des CV ; elle ne s'utilise pas pour commenter un nom (le nom est un critère protégé, L. 1132-1).\n\nConvocation interne (mobilité) : même clarté. Le candidat interne a droit à un horaire, une salle, une confidentialité vis-à-vis des collègues. Le convoquer en copiant toute l'équipe est une faute de relation et de données."
        ),
        h("Méthode opérationnelle"),
        t(
          "Objet : « Entretien — [poste] — [date] [heure] ». Corps : remerciement, poste, modalités, durée, participants, documents, aménagement, empêchement, mention si épreuve. Envoi J-3 au moins, sauf urgence assumée. Relance silencieux J-1 si pas de confirmation.\n\nVisio : lien, outil, plan B téléphone, consigne de calme et de confidentialité de votre côté aussi.\n\nPrésentiel : adresse, bâtiment, accueil, badge, accessibilité du lieu (information factuelle, pas une enquête).\n\nCopie : manager s'il participe, pas toute l'agence."
        ),
        h("Exemple professionnel"),
        t(
          "Cabinet, convocation d'un candidat chez le client industriel. Le consultant envoie deux e-mails : l'un au candidat (lieu client, accueil sécurité, durée, noms), l'un au client (rappel questions interdites, timing). Sans le second, le candidat subit un interrogatoire improvisé à l'entrée du site."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Envoyer un lien visio cinq minutes avant.\n\nConvoquer « pour un échange informel » alors qu'il s'agit d'un entretien d'embauche avec grille. Le mot informel n'ôte ni L. 1221-6 ni L. 1132-1.\n\nDemander une photo « pour l'accueil ».\n\nMettre le manager en copie cachée d'un e-mail où le candidat parle d'un aménagement : diffusion excessive."
        ),
        h("Situations particulières"),
        t(
          "Candidat qui confirme puis pose dix questions de fond par e-mail : répondez sur la logistique immédiatement ; renvoyez le fond à l'entretien ou à un point factuel déjà public (fiche de poste), pour ne pas créer deux process inégaux.\n\nDouble convocation par erreur (deux candidats, même créneau) : vous assumez, vous replanifiez, vous ne faites pas attendre 40 minutes en silence."
        ),
        h("Mise en pratique"),
        t(
          "Listez les 10 mentions minimales d'une convocation visio de 50 minutes avec cas pratique de 10 minutes. Indiquez une mention illicite à ne pas ajouter."
        ),
        h("Correction détaillée"),
        t(
          "Mentions : poste ; date/heure/fuseau ; durée ; outil et lien ; plan B téléphone ; noms et fonctions ; déroulé (dont cas pratique = méthode, donc information L. 1221-8) ; documents ; aménagement ; contact empêchement. Mention illicite : « Précisez votre situation familiale pour l'organisation des samedis » ou « envoyez une photo ». Les samedis se décrivent comme horaires du poste, pour tous."
        ),
      ],
    }),
    lesson({
      title: "Relances, reports et gestion des délais qui glissent",
      description:
        "Relancer sans harceler, reporter sans diluer, et informer quand le délai annoncé ne sera pas tenu.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez relancer un candidat ou un manager avec un objet clair, proposer un report daté, et envoyer un message d'actualisation lorsque la décision glisse — sans fausse promesse."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "La relance est un acte de process, pas un acte de pression commerciale. Relancer un candidat qui n'a pas confirmé un créneau est légitime. Relancer trois fois par jour un profil « chaud » ressemble à du harcèlement de sourcing et dégrade la relation. Relancer un manager qui bloque une décision est votre travail interne : le candidat ne doit pas payer le silence managérial par un vide.\n\nLe report (du candidat ou de l'entreprise) doit rester exceptionnel, daté, expliqué sans détail intime. « Un imprévu interne nous conduit à proposer mardi 10 h » suffit. Vous ne demandez pas au candidat pourquoi il reporte au-delà de ce qui est utile à replanifier. S'il évoque un enfant ou une santé, vous n'en faites pas un critère (L. 1132-1). Un report n'est pas un KO. Une série de reports non expliqués côté candidat peut conduire à clôturer le créneau, de façon factuelle, pas morale.\n\nQuand le délai que vous aviez annoncé glisse, le message d'actualisation est une bonne pratique puissante. Il n'est pas une obligation légale générale. Il évite le ghosting perçu. Le contenu : nous n'avons pas encore de décision, nouvelle date de communication, éventuellement raison de process (« un entretien complémentaire est en cours ») sans mentir sur le statut de la personne. Vous ne dites pas « vous êtes en finale et c'est presque gagné » si ce n'est pas vrai. Le module 13 traite précisément le cas des réserves.\n\nLes délais glissent surtout pour trois raisons : manager absent, trop de profils, poste incertain. Les deux premières se gèrent par l'agenda et le cadrage. La troisième exige de l'honnêteté : si le poste n'est plus sûr, vous le dites, plutôt que de faire patienter « au cas où »."
        ),
        h("Méthode opérationnelle"),
        t(
          "Relance candidat, J-1 puis J0 matin si besoin, un canal (e-mail, ou téléphone si créneau proche). Relance manager : J+2 après débrief, puis votre responsable si silence. Le candidat reçoit une actualisation au plus tard à la date promise, même pour dire « pas encore de décision, nouveau point le… ».\n\nReport : proposer deux créneaux, garder le guide identique, noter l'incident de planning, pas un jugement.\n\nRègle : toute date dite au candidat est écrite dans l'outil avec rappel."
        ),
        h("Exemple professionnel"),
        t(
          "ETI, le directeur d'usine part deux semaines. Le recruteur écrit aux trois personnes déjà vues : « La décision prévue le 15 est reportée au 26, en raison d'une absence interne. Votre dossier est toujours en cours. Nous vous écrivons le 26, y compris si nous n'avons qu'une actualisation. » Deux candidats restent. Un se retire. Le recruteur n'avait pas menti. Le directeur, au retour, n'a plus à gérer la colère d'un silence."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Ne pas écrire à la date promise, « parce qu'on n'a rien à dire ». Vous aviez quelque chose à dire : que vous n'aviez pas de décision.\n\nFaire reporter le candidat trois fois et s'étonner qu'il accepte ailleurs.\n\nRelancer le candidat en le culpabilisant (« on se dérange pour vous »)."
        ),
        h("Situations particulières"),
        t(
          "Candidat qui ne vient pas sans nouvelles (no-show) : un message factuel le jour même, offre d'un report unique selon politique, puis clôture si silence. Pas d'ironie.\n\nManager qui demande de « geler » les candidats sans mot : vous expliquez le coût (perte de profils, image). Si le gel est décidé, message de suspension.\n\nCabinet : relance client documentée ; le candidat n'est pas otage d'un client muet au-delà d'un délai que votre cabinet a fixé en politique interne."
        ),
        h("Mise en pratique"),
        t(
          "Vous aviez promis une réponse vendredi. Il est vendredi 16 h, le manager n'a pas tranché. Rédigez l'e-mail d'actualisation (8 à 12 lignes) et l'e-mail interne au manager (5 lignes)."
        ),
        h("Correction détaillée"),
        t(
          "Candidat : remerciement, rappel du poste et de la date promise, information honnête (décision non encore arrêtée), nouvelle date (ex. mercredi), contact. Pas de « vous êtes notre priorité absolue » si trois personnes sont en lice. Manager : « Date promise aux candidats : aujourd'hui. Sans arbitrage, j'envoie une actualisation au [date]. Merci de votre décision d'étape (poursuite / réserve / arrêt) avant mardi 12 h, ou d'un point de 15 minutes. » Vous ne ghostez pas pour protéger le manager."
        ),
      ],
    }),
    lesson({
      title: "Expérience candidat, ghosting et traitements trop lents",
      description:
        "Comprendre ce que le silence produit, répondre à tous comme bonne pratique, et ne pas confondre cette pratique avec une obligation légale de motiver les refus.",
      minutes: 22,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous distinguerez clairement obligation légale, droits RGPD, politique interne et bonne pratique sur la réponse aux candidats. Vous saurez pourquoi le ghosting est une faute professionnelle même lorsqu'aucune loi n'impose un modèle de lettre de refus motivé."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le ghosting, en recrutement, est le fait de laisser un candidat sans réponse alors qu'un contact a été établi (candidature, entretien, promesse de retour). Ce n'est pas un terme du Code du travail. C'est une pratique qui casse la confiance, vide les viviers, et met le recruteur junior en contradiction avec le discours d'employeur responsable. Beaucoup de juniors ghostent par gêne : ils n'ont pas de décision, ils n'aiment pas dire non, le manager ne revient pas. La gêne n'est pas une méthode. Un message d'actualisation ou de clôture courte est toujours possible.\n\nIl n'existe pas, en droit français, d'obligation générale de motiver un refus d'embauche, ni d'obligation générale de répondre à toutes les candidatures spontanées dans un délai légal unique que ce cours pourrait citer. Cette absence d'obligation générale ne signifie pas que tout est permis. L'interdiction de discriminer (L. 1132-1) s'applique : un refus, silencieux ou non, ne peut pas reposer sur un critère protégé. Les allégations trompeuses sur l'emploi sont interdites (L. 5331-3). Les données personnelles restent soumises au RGPD : finalité, minimisation, durées, droits de la personne (accès, notamment). Un candidat peut poser des questions sur le traitement de ses données. Cela n'équivaut pas à un droit général d'obtenir une dissertation sur les motifs métier du refus.\n\nLa bonne pratique professionnelle, distincte de la loi, est de répondre à toute personne reçue en entretien, et autant que possible à toute personne préqualifiée ou dont la candidature a été examinée, au moins par un message de clôture. Motiver brièvement (« profil ne correspondant pas aux exigences du poste au regard de [critère professionnel] ») est une bonne pratique lorsque c'est vrai, utile et non risqué ; ce n'est pas une obligation. Mentir sur le motif (« overqualified » alors que le manager a commenté l'âge) est plus grave qu'un refus court. En cas de doute juridique, un refus non détaillé, poli, sans critère illicite, vaut mieux qu'une fausse raison.\n\nL'expérience candidat, ce n'est pas un « wow parcours ». C'est : savoir où l'on en est, être traité avec courtoisie, ne pas subir de questions illicites, recevoir ce qui a été promis, pouvoir prévenir d'un empêchement, exercer ses droits sur les données. Un process sobre et tenu bat un process « marque employeur » qui ghoste après l'entretien.\n\nRépondre à tous a un coût de temps. Ce coût se réduit par des modèles (leçon suivante), des statuts d'ATS, des envois groupés personnalisés (prénom, poste, pas un copier-coller visible). Le coût du silence est plus élevé : relances, e-réputation, perte de cooptation, et, si un contentieux discrimination naît, un dossier vide de motifs professionnels."
        ),
        h("Méthode opérationnelle"),
        t(
          "Règle interne à proposer : tout entretien = un message de suite à la date promise. Tout process clos = un statut clos dans l'outil le jour J. Les candidatures non retenues au tri : message de clôture groupé selon politique (bonne pratique, à caler avec le volume).\n\nVous ne laissez pas au manager le « je lui dirai ». Vous écrivez, sauf si le process prévoit un appel du manager pour les finalistes, et encore : vous tracez.\n\nSi vous ne pouvez pas motiver : « Nous ne donnons pas de suite à votre candidature pour ce poste. Nous vous remercions du temps consacré. » C'est suffisant légalement dans le cas général. Ajouter un motif seulement s'il est professionnel, sincère, et aligné sur la grille."
        ),
        h("Exemple professionnel"),
        t(
          "Agence d'intérim, 40 candidatures pour une vacation. L'agence ne peut pas appeler tout le monde cinq minutes. Elle envoie un SMS/e-mail de réception, présente trois profils, écrit aux 37 autres « non retenu pour cette vacation, conservation en vivier X mois sauf opposition, conformément à notre information ». Ce n'est pas du luxe. C'est tenable. Un commercial qui ne prévient pas un intérimaire après un entretien client produit un ghosting immédiat et une perte de disponibilité."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Attendre d'avoir « le bon mot » pendant trois semaines. Un message court le vendredi promis vaut mieux.\n\nMotiver par un critère illicite ou un faux motif.\n\nRépondre seulement aux gens « intéressants pour un autre poste » et ignorer les autres : vous créez deux classes.\n\nCroire que le RGPD oblige à motiver le refus métier. Le RGPD porte sur les données, pas sur une obligation générale de justification d'un choix d'embauche."
        ),
        h("Situations particulières"),
        t(
          "Candidat qui exige par écrit « les motifs détaillés et les notes d'entretien ». Vous ne répondez pas seul : process RH / DPO. Vous n'inventez pas un refus d'accès global, vous n'envoyez pas non plus un dossier plein d'adjectifs illicites.\n\nCandidat interne : un refus silencieux est particulièrement destructeur. Un entretien de restitution interne, cadré, est une bonne pratique, avec l'accord du process.\n\nRéseaux sociaux : ne pas commenter un process sous un post public. Réponse courte en privé, même contenu que l'e-mail."
        ),
        h("Mise en pratique"),
        t(
          "Un collègue dit : « On n'est pas obligés de répondre, c'est pas la loi, on ghoste, ça va plus vite. » Rédigez votre réponse en quatre points : obligation légale, interdits, RGPD, bonne pratique."
        ),
        h("Correction détaillée"),
        t(
          "1) Il n'y a pas d'obligation générale de motiver un refus ni un délai légal unique de réponse à toute candidature que nous puissions citer. 2) Il est interdit d'écarter pour un motif discriminatoire (L. 1132-1) et d'induire en erreur sur l'emploi (L. 5331-3). 3) Les données restent encadrées (RGPD, CNIL) : pas de conservation infinie en base active, droits de la personne. 4) Bonne pratique et souvent politique interne : répondre au moins à toute personne reçue, actualiser les délais, ne jamais promettre un retour que l'on n'envoie pas. Le ghosting n'est donc pas « autorisé par la loi » au sens d'une pratique recommandable ; il est seulement, dans le cas général, non sanctionné par un article qui imposerait une lettre motivée. Nous ne le pratiquons pas."
        ),
      ],
    }),
    lesson({
      title: "Confidentialité, RGPD et destinataires des messages",
      description:
        "Savoir qui a le droit de lire quoi, combien de temps, et comment un e-mail de process peut devenir un incident de données.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez limiter les destinataires, éviter les copier-coller dangereux, informer sur les durées selon les sources CNIL, et orienter un exercice de droits vers le process interne."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Chaque e-mail de convocation, de suivi ou de refus véhicule des données personnelles : identifiant, poste visé, parfois des éléments de parcours. Le destinataire doit être justifié par la finalité recrutement. Mettre en copie l'équipe entière, transférer un CV à un ami « qui recrute », laisser un compte rendu dans un groupe de discussion : ce sont des incidents. L. 1221-8 rappelle que les résultats des méthodes sont confidentiels. Le RGPD impose un traitement licite, limité, sécurisé. La CNIL, dans son guide du recrutement (30/01/2023), recommande notamment, pour un vivier, une durée jusqu'à deux ans à compter du dernier contact, candidat informé, avec possibilité d'opposition. Ce n'est pas une durée unique obligatoire pour tous les traitements. Le référentiel CNIL durées RH (publié 2 avril 2026, mis à jour 20 mai 2026) distingue notamment : candidat retenu (base active le temps de la procédure jusqu'à la signature, puis réemploi RH) ; candidat non retenu (archivage intermédiaire 5 ans à compter de la date à laquelle le poste a été pourvu, à des fins probatoires, en lien avec L. 1134-5) — obligation de conservation probatoire, pas une autorisation de laisser les CV en base de travail indéfiniment.\n\nVous n'avez pas à réciter ces durées au candidat dans chaque e-mail. L'information sur le traitement se fait selon le dispositif de l'employeur (mentions, politique, clause de candidature). Vous devez en revanche aligner vos actes : ne pas promettre « on garde votre CV pour toujours », ne pas ignorer une opposition au vivier, ne pas mélanger archivage probatoire et CVthèque active.\n\nLa confidentialité, c'est aussi le contenu. Un e-mail de refus ne reprend pas les notes « look » ou « enfants ». Un e-mail de convocation ne révèle pas aux autres candidats l'identité des personnes en lice (copie multiple visible). Un e-mail interne au manager ne s'intitule pas « la blonde de 10 h ». Le nom de famille comme objet de moquerie est un critère protégé (L. 1132-1).\n\nLorsqu'un candidat exerce un droit (accès, rectification, opposition), vous ne composez pas une réponse juridique isolée. Vous saisissez le circuit interne (RH, DPO). Vous ne détruisez pas un dossier dans la panique pour « qu'il n'y ait plus rien » : l'archivage probatoire peut être légitime. Vous ne versez pas non plus un dossier insultant."
        ),
        h("Méthode opérationnelle"),
        t(
          "Destinataires nommés, pas de listes larges. Cci pour un envoi groupé de clôture. Pièces jointes chiffrées ou lien d'ATS selon outil, pas un CV dans un fil transférable à l'infini.\n\nObjets d'e-mails internes : poste + initiales ou identifiant outil, pas un surnom.\n\nOpposition vivier : statut bloqué, confirmation courte, conservation probatoire selon politique si le poste a été pourvu, distincte du vivier.\n\nFin de journée : pas de CV sur imprimante, pas de notes sur table."
        ),
        h("Exemple professionnel"),
        t(
          "Startup, le fondateur transfère cinq CV à un groupe Slack « team ». Un salarié répond par émoji sur la photo d'une candidate. Le recruteur junior fait retirer les fichiers, rappelle le canal RH, documente. Le process est repris : les CV ne sortent plus de l'ATS. L'incident n'est pas « de l'humour start-up » ; c'est un traitement et un risque d'apparence physique (critère protégé)."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Répondre à un candidat en mettant le manager et trois collègues en copie, y compris un échange sur un aménagement.\n\nPromettre « vos données sont détruites dès le refus » alors que l'archivage 5 ans peut s'appliquer. Vous n'inventez pas, vous renvoyez aux mentions internes.\n\nUtiliser votre messagerie personnelle pour « aller plus vite »."
        ),
        h("Situations particulières"),
        t(
          "Cabinet : le CV transmis au client = destinataire justifié, client briefé, pas de transfert à un autre client sans base et sans information adaptée.\n\nDemande d'un client de « tout le dossier, y compris nos notes look ». Refus. Vous transmettez des éléments professionnels.\n\nCandidat mineur : hors champ habituel de ce module ; circuit RH, pas d'initiative junior isolée."
        ),
        h("Mise en pratique"),
        t(
          "Vous devez clôturer 12 candidats non reçus en entretien. Décrivez : canal, destinataires, contenu minimal, mention vivier, ce que vous ne joignez pas."
        ),
        h("Correction détaillée"),
        t(
          "E-mail groupé en copie cachée ou envoi ATS unitaire. Destinataires : chaque candidat, pas les autres. Contenu : poste, non-poursuite, remerciement, information vivier si réelle (durée recommandée, opposition possible), pas de notes, pas de comparatif. Pièce jointe : aucune grille. Si mentions RGPD déjà fournies à la candidature, un rappel court ou un lien interne suffit, selon le dispositif employeur. Vous n'écrivez pas « c'est la loi de tout supprimer sous 48 h »."
        ),
      ],
    }),
    lesson({
      title: "Modèles d'e-mails : convocation, confirmation, suivi, report, remerciement",
      description:
        "Disposer de cinq modèles complets, adaptables, distinguant ce qui est obligatoire, interne, ou de bonne pratique.",
      minutes: 28,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez adapter cinq modèles sans les rendre faux, trop juridiques, ou trop familiers. Vous identifierez, dans chaque texte, ce qui relève du cadre légal (information méthode, non-discrimination, données) et ce qui est une courtoisie professionnelle."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Un modèle n'est pas une magie : s'il promet une date, vous la tenez ou vous actualisez. S'il mentionne un vivier, le vivier doit exister. S'il annonce un cas pratique, L. 1221-8 est respecté. Les textes ci-dessous sont pédagogiques, fictifs, vouvoyés, pour un poste de chargé de clientèle à la Banque des Vallées. Ils ne dispensent pas de relire les mentions RGPD de votre employeur.\n\nLe remerciement post-entretien n'est pas une obligation légale. C'est une bonne pratique : il confirme que la séance a eu lieu, rappelle la date de prochaine communication, et réduit l'angoisse du silence. Il ne dit pas « vous avez été brillant, vous êtes retenu ». Le suivi n'est pas une relance commerciale. Le report assume la responsabilité du côté qui reporte.\n\nVous personnalisez le prénom, le poste, la date, les interlocuteurs. Vous ne personnalisez pas par des commentaires sur le parcours qui trahiraient un critère illicite. Un modèle de refus figurerait surtout au module 15 ; ici, le suivi peut déjà clôturer sans motif détaillé, ce qui reste licite dans le cas général, tout en restant courtois.\n\nUn modèle mal utilisé devient un mensonge industrialisé : date non tenue, vivier inexistant, « vous êtes retenu » copié-collé. La bonne pratique de répondre à tous n'est pas une obligation légale générale de motiver un refus ; l'interdiction de discriminer (L. 1132-1) et les droits RGPD, eux, ne se désactivent pas parce que le texte est un modèle. Relisez chaque envoi comme s'il pouvait être versé à un dossier."
        ),
        h("Méthode opérationnelle"),
        t(
          "Copier le modèle dans l'outil, remplir les crochets, relire à voix haute, vérifier les destinataires, programmer le rappel de la date promise. Faire relire une fois par votre responsable les cinq modèles de votre entreprise, puis cesser d'improviser chaque matin."
        ),
        h("Exemple professionnel"),
        t(
          "Les cinq modèles suivants constituent le livrable opérationnel de la leçon. Cas fictif, agence Lyon Part-Dieu."
        ),
        code(`MODÈLE 1 — CONVOCATION (visio, avec cas pratique)
Objet : Entretien — Chargé de clientèle — 21 octobre 2026, 10 h 00

Madame, Monsieur [Nom],

Nous vous remercions de votre candidature au poste de chargé / chargée de
clientèle, agence de Lyon Part-Dieu.

Nous vous proposons un entretien en visioconférence :
- Date et heure : mardi 21 octobre 2026, 10 h 00 (heure de Paris)
- Durée prévue : 50 minutes
- Interlocuteurs : [Prénom Nom], chargé de recrutement ; [Prénom Nom],
  directeur d'agence
- Outil : [lien]
- En cas de difficulté technique : [téléphone], nous poursuivrons au besoin
  par appel.

Déroulé : parcours professionnel, situations de relation client, un cas
pratique court (priorisation d'accueil et éthique de conseil), vos questions.
Le cas pratique vise à apprécier des aptitudes liées au poste. Les résultats
sont confidentiels.

Documents : aucun, hors votre CV déjà reçu.
Si vous avez besoin d'un aménagement pour passer cet entretien dans de
bonnes conditions, écrivez-nous avant le 20 octobre à [e-mail].

Merci de confirmer votre présence en répondant à cet e-mail. En cas
d'empêchement, prévenez-nous dès que possible afin de replanifier.

Cordialement,
[Nom] — Recrutement, Banque des Vallées
[téléphone]

---
Information : traitement de données pour la finalité de recrutement, selon
les mentions portées à [lien interne / politique]. Droits : [contact DPO/RH].`),
        code(`MODÈLE 2 — CONFIRMATION (après accord du candidat)
Objet : Confirmation — Entretien chargé de clientèle — 21 octobre 2026, 10 h

Bonjour [Prénom],

Nous confirmons notre entretien du mardi 21 octobre 2026 à 10 h 00,
en visioconférence, durée 50 minutes, avec [noms].

Lien : [lien]
Plan B téléphone : [numéro]

Nous vous souhaitons une bonne préparation. Pour toute question de
logistique, cet e-mail reste le bon contact.

Cordialement,
[Nom]`),
        code(`MODÈLE 3 — SUIVI (actualisation de délai, sans mensonge)
Objet : Suites de votre entretien du 21 octobre — Chargé de clientèle

Bonjour [Prénom],

Nous vous remercions encore du temps consacré à l'entretien du 21 octobre
pour le poste de chargé de clientèle, agence de Lyon Part-Dieu.

Nous vous avions indiqué un retour pour le 25 octobre. La décision n'est
pas encore arrêtée. Votre candidature est toujours en cours d'examen.

Nous vous écrivons à nouveau au plus tard le mercredi 29 octobre, y compris
s'il s'agit d'une nouvelle actualisation.

Nous restons à votre disposition pour toute information de process.

Cordialement,
[Nom]

[Variante de CLÔTURE, si décision d'arrêt — bonne pratique de répondre,
 pas d'obligation générale de motiver]
« Après examen, nous ne donnons pas de suite à votre candidature pour ce
poste. Nous vous remercions sincèrement du temps consacré. Si vous ne
souhaitez pas que votre dossier soit conservé en vivier (jusqu'à [durée
selon politique], sauf opposition), indiquez-le-nous. Ce message ne
préjuge pas d'une autre opportunité future, distincte. »`),
        code(`MODÈLE 4 — REPORT (initiative entreprise)
Objet : Report de votre entretien du 21 octobre — nouveau créneau proposé

Bonjour [Prénom],

Un imprévu interne nous conduit à reporter l'entretien prévu le 21 octobre
à 10 h 00 pour le poste de chargé de clientèle.

Nous vous proposons, selon votre disponibilité :
- jeudi 23 octobre, 9 h 30
- vendredi 24 octobre, 14 h 00

Même modalité visio, même durée, mêmes interlocuteurs, même déroulé
(y compris le cas pratique déjà annoncé).

Nous regrettons la gêne occasionnée. Merci de nous indiquer le créneau
qui vous convient, ou une contrainte d'horaire, sans avoir à en préciser
le motif personnel.

Cordialement,
[Nom]`),
        code(`MODÈLE 5 — REMERCIEMENT POST-ENTRETIEN (bonne pratique)
Objet : Merci — Entretien du 21 octobre — Chargé de clientèle

Bonjour [Prénom],

Nous vous remercions d'avoir participé à l'entretien de ce jour concernant
le poste de chargé de clientèle, agence de Lyon Part-Dieu.

Comme indiqué en séance, nous visons une communication de suite au plus
tard le 25 octobre 2026. Cette communication pourra être une poursuite
de process, une actualisation, ou une clôture.

Nous n'avons pas de décision à vous annoncer aujourd'hui.

Cordialement,
[Nom]

[À NE PAS ÉCRIRE]
« Vous êtes notre candidat numéro 1. » / « C'était parfait, on vous garde. »
« On a écarté les autres. » / « Dites-nous si vous êtes enceinte, pour le planning. »`),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Envoyer le modèle de remerciement en y ajoutant un verdict. Utiliser la variante de clôture tout en promettant un vivier qui n'existe pas. Laisser les crochets [Nom] non remplis. Envoyer le modèle 3 (« toujours en cours ») alors que le manager a déjà dit non."
        ),
        h("Situations particulières"),
        t(
          "Présentiel : remplacez le lien par l'adresse, l'accueil, l'accessibilité du bâtiment. Cabinet : précisez le lieu client et les consignes de sécurité. Candidat interne : même modèle, confidentialité des destinataires, pas de copie à l'équipe actuelle."
        ),
        h("Mise en pratique"),
        t(
          "Le manager veut que le modèle 5 dise : « Vous êtes très bien, on vous fait une offre lundi » alors que la shortlist n'est pas arbitrée. Rédigez votre refus interne et la phrase que vous conservez dans l'e-mail candidat."
        ),
        h("Correction détaillée"),
        t(
          "Refus interne : « Nous n'annonçons pas une offre non décidée. Une telle phrase serait une information trompeuse et créerait une attente incontrôlable, voire un contentieux si l'on y voyait une promesse (module 14). » Phrase conservée : celle du modèle 5, date de suite, « pas de décision aujourd'hui ». Bonne pratique de remercier, pas d'obligation de motiver, interdiction de mentir."
        ),
        note(
          "Répondre à tous les candidats reçus est une bonne pratique (souvent une politique interne). Ce n'est pas une obligation légale générale de motiver un refus. Discrimination interdite (L. 1132-1). Droits sur les données : RGPD / CNIL. Textes vérifiés le 13/10/2026."
        ),
      ],
    }),
    quizLesson({
      title: "Quiz — Processus et relation candidat",
      description: "Transparence, convocations, ghosting, obligation vs bonne pratique, RGPD, modèles.",
      passing_score: 70,
      minutes: 12,
      questions: [
        q({
          question: "Un délai unique « réponse sous 15 jours, c'est la loi » :",
          options: [
            "A. Est une obligation légale générale en droit français, à citer telle quelle.",
            "B. N'est pas une obligation légale générale identifiable ici ; un délai cible relève de la politique interne et de la bonne pratique, à tenir ou à actualiser.",
            "C. Autorise le ghosting au-delà de 15 jours.",
            "D. S'applique seulement aux candidats internes.",
          ],
          correct: 1,
          explanation:
            "Ce cours interdit d'inventer un délai légal unique. Tenir une date promise est une bonne pratique. Le ghosting n'est pas « autorisé » comme méthode, même sans article imposant une lettre motivée.",
        }),
        q({
          question: "Une convocation qui inclut un cas pratique doit :",
          options: [
            "A. Cacher le cas pour que ce soit plus naturel.",
            "B. Informer préalablement, car il s'agit d'une méthode d'aide à l'évaluation (L. 1221-8), avec résultats confidentiels.",
            "C. Demander une photo et la situation familiale.",
            "D. Être envoyée uniquement par SMS sans déroulé.",
          ],
          correct: 1,
          explanation:
            "L. 1221-8 : information préalable, pertinence, confidentialité des résultats. Photo et famille : hors cadre / critères protégés.",
        }),
        q({
          question: "Vous aviez promis une réponse vendredi, le manager n'a pas tranché. Vous :",
          options: [
            "A. N'écrivez pas, faute de décision.",
            "B. Envoyez une actualisation honnête avec une nouvelle date, et relancez le manager par écrit.",
            "C. Annoncez au candidat qu'il est retenu pour le garder.",
            "D. Ghostez jusqu'à nouvel ordre du manager.",
          ],
          correct: 1,
          explanation:
            "La date promise crée une attente professionnelle. L'actualisation est une bonne pratique. Le mensonge « retenu » est interdit comme pratique (et dangereux juridiquement, module 14).",
        }),
        q({
          question:
            "Existe-t-il une obligation légale générale de motiver un refus d'embauche ?",
          options: [
            "A. Oui, toujours, par lettre recommandée avec les notes d'entretien.",
            "B. Non, pas d'obligation générale de motiver ; en revanche, discrimination interdite et droits RGPD sur les données. Répondre à tous est une bonne pratique.",
            "C. Oui, uniquement si le candidat a plus de 50 ans.",
            "D. Non, et cela autorise un refus pour grossesse si l'on ne l'écrit pas.",
          ],
          correct: 1,
          explanation:
            "C'est la distinction centrale du module. L'âge ou la grossesse comme motif, même non écrit, restent illicites (L. 1132-1). L'absence de devoir général de motiver n'est pas un permis de discriminer.",
        }),
        q({
          question: "Le ghosting après entretien est :",
          options: [
            "A. Une bonne pratique de productivité.",
            "B. Une faute professionnelle de relation, même si aucune loi n'impose un modèle unique de lettre motivée.",
            "C. Obligatoire pour les profils non retenus, pour des raisons RGPD.",
            "D. Réservé aux candidatures spontanées, jamais aux personnes reçues.",
          ],
          correct: 1,
          explanation:
            "Le RGPD n'impose pas le silence. Le silence après un entretien est une mauvaise pratique. La bonne pratique est au minimum un message de clôture ou d'actualisation.",
        }),
        q({
          question: "Selon les sources CNIL rappelées dans ce cours, pour un candidat non retenu :",
          options: [
            "A. On peut laisser le CV en base active indéfiniment, c'est plus simple.",
            "B. On distingue notamment vivier (recommandation, souvent jusqu'à 2 ans après dernier contact, opposition possible) et archivage intermédiaire probatoire (5 ans à compter de la pourvue du poste, L. 1134-5) — sans tout mélanger.",
            "C. On détruit tout le jour du refus, c'est toujours obligatoire, sans exception.",
            "D. On publie les scores.",
          ],
          correct: 1,
          explanation:
            "Référentiel CNIL 2026 + guide recrutement 2023 + L. 1134-5. Ni conservation active infinie, ni destruction universelle immédiate présentée comme unique règle.",
        }),
        q({
          question: "Un e-mail de remerciement post-entretien peut :",
          options: [
            "A. Annoncer « vous êtes le numéro 1, offre lundi » alors que la décision n'est pas prise.",
            "B. Remercier, rappeler la date de prochaine communication, et indiquer qu'il n'y a pas de décision ce jour.",
            "C. Demander un projet de grossesse pour le planning.",
            "D. Mettre tous les candidats en copie visible pour la transparence.",
          ],
          correct: 1,
          explanation:
            "Bonne pratique de courtoisie, honnêteté du statut, confidentialité des destinataires. Pas de fausse offre. Pas de question illicite.",
        }),
        q({
          question: "Un candidat demande « toutes vos notes et les motifs détaillés du refus ». Vous :",
          options: [
            "A. Envoyez le dossier brut, y compris les commentaires d'apparence.",
            "B. Répondez seul que « le RGPD interdit tout accès ».",
            "C. Orientez vers le process interne RH/DPO, sans inventer un motif illicite et sans vider le dossier dans la panique.",
            "D. Ignorez, le ghosting règle le sujet.",
          ],
          correct: 2,
          explanation:
            "Droit d'accès = circuit interne, pas un junior isolé. Ni rejet global inventé, ni communication de mentions illicites. Le ghosting n'éteint pas un exercice de droits.",
        }),
      ],
    }),
  ],
};
