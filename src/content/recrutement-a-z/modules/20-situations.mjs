import { lesson, h, t, note, code, quizLesson, q } from "../lib.mjs";

function sit(num, title, context, question, a, b, c, d, reco) {
  return [
    h(`S${num} — ${title}`),
    t(
      `CONTEXTE\n\n${context}\n\nQUESTION\n${question}\n\nA. ${a}\nB. ${b}\nC. ${c}\nD. ${d}`
    ),
    note(reco),
  ];
}

export default {
  position: 20,
  title: "Bibliothèque de 100 situations professionnelles",
  description:
    "Vous vous entraînez sur cent situations distinctes de recruteur junior : pression manager, salaire, ghosting, discrimination, RGPD, négociation, IA, cooptation et incidents de process.",
  lessons: [
    lesson({
      title: "Urgence, pression manager et cadrage du besoin",
      description:
        "Dix situations sur le recadrage du délai, le brief incomplet et la pression opérationnelle.",
      minutes: 32,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À l'issue de cette leçon, vous savez recadrer une urgence sans mentir sur le délai, distinguer intérim de transition et CDI, et refuser de lancer un process sans informations minimales. Vous identifiez ce qui relève d'une bonne pratique, d'une politique interne et d'une obligation légale."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le recruteur junior n'est pas un prestataire d'exécution du manager. Son premier geste est le cadrage : missions, critères, budget, calendrier, alternatives (interne, intérim, redéploiement). Promettre une date d'arrivée que le marché ne permet pas pousse à baisser la garde, à rédiger une annonce trompeuse et à créer un conflit de confiance.\n\nL'urgence opérationnelle est réelle dans l'industrie et les services. Elle se traite par un plan (remplacement temporaire, priorisation des must-have, calendrier de marché), pas par une promesse. Une allégation fausse ou susceptible d'induire en erreur sur l'existence, la nature ou le délai de l'emploi est interdite (Code du travail, L. 5331-3)."
        ),
        h("Méthode opérationnelle"),
        t(
          "Pour chaque situation : lisez le contexte, choisissez une option, puis comparez avec la conduite recommandée. Qualifiez toujours : obligation légale, recommandation d'autorité, politique interne, bonne pratique. Ne jamais inventer un délai légal. Ne jamais recommander de mentir au manager ou au candidat."
        ),
        h("Bibliothèque de situations S01 à S10"),
        ...sit(
          "01",
          "Le manager veut quelqu'un pour lundi",
          "Vous êtes chargé de recrutement junior dans une PME industrielle de 70 salariés, près de Roubaix. Mardi 9 h, le responsable d'atelier vous appelle : un coordinateur de production a annoncé son départ, le préavis n'est pas encore formalisé, et il vous demande « quelqu'un opérationnel lundi, même en intérim, peu importe le profil pourvu qu'il tienne le planning ». Le poste n'a pas de fiche à jour. Le salaire n'est pas cadré. Le directeur industriel n'est pas informé. Vous n'avez aucun vivier immédiat sur ce métier.",
          "Quelle conduite adoptez-vous en priorité ?",
          "Lancer une annonce générique dans l'heure et envoyer les trois premiers CV au manager.",
          "Recadrer le délai, recenser les informations manquantes et proposer un plan réaliste (intérim de transition vs CDI), sans promettre une embauche pour lundi.",
          "Promettre un CDI pour lundi afin de rassurer le manager, puis ajuster ensuite.",
          "Attendre que le démissionnaire parte pour commencer, afin de ne pas faire de vagues.",
          "CONDUITE RECOMMANDÉE : option B. Vous distinguez l'urgence opérationnelle (remplacement temporaire possible via l'intérim, en lien avec les RH) et le recrutement pérenne (brief, critères, délai de marché). Vous ne promettez pas une date d'arrivée que vous ne maîtrisez pas.\n\nJUSTIFICATION : un recrutement junior ne fabrique pas un candidat en cinq jours. Promettre lundi crée une attente intenable et pousse à baisser la garde sur les critères.\n\nRISQUES : promesse irréaliste, mauvaise embauche, annonce trompeuse sur le délai.\n\nERREURS FRÉQUENTES : dire oui pour plaire ; lancer un process sans budget ni missions ; confondre intérim d'attente et CDI.\n\nQUALIFICATION : bonne pratique (cadrage) ; obligation légale si l'annonce contient des allégations trompeuses (L. 5331-3).\n\nRÉFÉRENCE : legal-sources.json, L5331-3."
        ),
        ...sit(
          "02",
          "Brief gonflé : bac+5 et dix ans pour un poste de coordination",
          "Dans une ETI agroalimentaire de 400 salariés (Arras), le chef de service logistique vous demande un « coordinateur supply, bac+5, dix ans d'expérience WMS, anglais courant, management d'équipe, six sigma, mobilité internationale ». En recoupant avec les missions décrites, il s'agit d'animer un planning, relayer les retards transporteurs et fiabiliser un tableau de bord. Le salaire visé est celui d'un profil confirmé intermédiaire, pas d'un expert senior. Deux recrutements similaires ont échoué l'an dernier faute de candidats.",
          "Que faites-vous avant de publier ?",
          "Publier le brief tel quel : c'est le manager qui connaît le métier.",
          "Challenger les must-have, séparer le souhaitable du nécessaire, et proposer une version réaliste du profil.",
          "Baisser secrètement les critères dans l'annonce sans le dire au manager.",
          "Exiger un bac+5 uniquement, le reste étant négociable à l'entretien.",
          "CONDUITE RECOMMANDÉE : option B. Vous challengez le brief par les missions réelles. Vous proposez des must-have (pilotage planning, WMS de base, relation transporteurs) et des nice-to-have (six sigma, anglais courant si 90 % des flux sont France).\n\nJUSTIFICATION : un profil sur-spécifié vide le vivier et allonge le délai. Mentir au manager ou publier un profil décorrélé des missions crée un écart d'attente.\n\nRISQUES : zéro candidature, frustration manager, discrimination indirecte si le diplôme est exigé sans lien nécessaire avec l'emploi (L. 1221-6 : informations en lien direct avec l'emploi).\n\nERREURS FRÉQUENTES : copier-coller le brief ; « c'est le métier du manager » ; baisser les critères en cachette.\n\nQUALIFICATION : bonne pratique ; L. 1221-6 encadre ce que l'on peut exiger du candidat, pas le droit du manager à rêver un profil.\n\nRÉFÉRENCE : legal-sources.json, L1221-6."
        ),
        ...sit(
          "03",
          "Fourchette salariale nettement sous le marché",
          "Startup industrielle de 45 personnes (Lille). Le fondateur veut un responsable qualité « à 32 k€, c'est déjà bien, on a une baby-foot et du télétravail ». Vos recherches internes (offres comparables, retours de process récents, fourchettes RH) montrent que les profils tenant vraiment le poste se situent plutôt 8 à 12 k€ au-dessus. Le fondateur refuse d'ouvrir la fourchette. Il vous demande de « trouver quelqu'un de motivé par le projet ».",
          "Quelle est la conduite professionnelle ?",
          "Publier sans fourchette et laisser le candidat découvrir le salaire en fin de process.",
          "Documenter l'écart, alerter par écrit le manager et RH, et ne pas sur-vendre la rémunération dans l'annonce.",
          "Indiquer 38-42 k€ dans l'annonce pour attirer, puis « recadrer » à 32 k€ en entretien.",
          "Refuser tout process tant que le salaire n'est pas aligné marché.",
          "CONDUITE RECOMMANDÉE : option B. Vous objectivatez l'écart (données internes, pas de statistique inventée), vous alertez, vous proposez des leviers (variable, évolution à 12 mois, intitulé, périmètre). Vous ne mentez pas sur la rémunération.\n\nJUSTIFICATION : une allégation trompeuse sur la rémunération est interdite (L. 5331-3). Cacher le salaire jusqu'au bout fait perdre des candidats et dégrade la marque employeur. Bloquer tout process peut être disproportionné si RH et direction assument le risque de délai.\n\nRISQUES : désistements tardifs, allégation trompeuse, temps perdu.\n\nERREURS FRÉQUENTES : gonfler l'annonce ; culpabiliser le candidat « pas assez passionné ».\n\nQUALIFICATION : obligation légale (L. 5331-3 sur les allégations) ; indiquer le salaire dans l'offre n'est pas (encore) une obligation interne française consolidée à la date de vérification (directive UE 2023/970 en transposition) — bonne pratique / future obligation. Ne pas affirmer qu'il est déjà obligatoire de l'afficher.\n\nRÉFÉRENCE : L5331-3, UE-transparence-salariale."
        ),
        ...sit(
          "04",
          "Le manager refuse de donner le budget",
          "ETI de services informatiques (Lyon). Vous briefez un manager qui « n'a pas le droit de parler salaire » et vous demande de sourcer « les meilleurs ». Les RH vous confirment qu'une fourchette existe mais que ce manager la communique rarement. Deux candidats ont déjà quitté le process au stade offre, furieux de l'écart.",
          "Que faites-vous ?",
          "Sourcer sans fourchette : le salaire se discute toujours à la fin.",
          "Exiger de RH la fourchette avant de lancer, et convenir avec le manager du moment où elle est dite au candidat.",
          "Inventer une fourchette « un peu large » pour débloquer les approches.",
          "Demander au candidat sa prétention et caler l'offre dessus, sans budget.",
          "CONDUITE RECOMMANDÉE : option B. Pas de process sérieux sans fourchette connue du recruteur. Vous ne l'inventez pas. Vous alignez manager et RH sur le moment de la communication (bonne pratique : tôt, au plus tard en préqual).\n\nJUSTIFICATION : sans budget, vous perdez du temps, vous créez de la frustration et vous prenez le risque d'une offre hors cadre.\n\nRISQUES : process à vide, conflit d'autorité recruteur / manager / RH.\n\nERREURS FRÉQUENTES : inventer une fourchette ; tout reporter à l'offre.\n\nQUALIFICATION : bonne pratique et politique interne (le budget appartient à l'employeur). Obligation légale si vous affirmez un salaire faux (L. 5331-3)."
        ),
        ...sit(
          "05",
          "Recrutement lancé sans fiche de poste",
          "PME du BTP (50 salariés, Dunkerque). Le directeur d'agence vous dit : « On a besoin d'un conducteur de travaux, tu connais, tu as déjà recruté ça. Sors une annonce. » Les deux derniers conducteurs n'avaient pas le même périmètre (l'un encadrait 8 compagnons, l'autre gérait surtout les sous-traitants et la relation client). Aucun document écrit.",
          "Quelle est la priorité ?",
          "Réutiliser l'annonce de l'an dernier pour gagner 48 heures.",
          "Organiser un recueil écrit (missions, équipe, déplacements, rémunération, critères) avant toute diffusion.",
          "Publier une annonce large et préciser le poste en entretien.",
          "Demander au directeur de vous dicter l'annonce au téléphone et la mettre en ligne tel quel.",
          "CONDUITE RECOMMANDÉE : option B. Une fiche de poste n'est pas un luxe documentaire : elle aligne le manager, le recruteur, l'annonce et la grille d'évaluation.\n\nJUSTIFICATION : sans cadrage, chaque candidat est jugé sur des critères changeants. L'annonce risque d'être inexacte (L. 5331-3).\n\nRISQUES : discrimination par critères implicites (« je le vois bien sur les chantiers ») ; écart d'attente.\n\nERREURS FRÉQUENTES : recyclage d'annonce ; « on verra en entretien ».\n\nQUALIFICATION : bonne pratique. L'offre ne doit pas induire en erreur (L. 5331-3). L. 1221-8 : le candidat est informé des méthodes utilisées.\n\nRÉFÉRENCE : L5331-3, L1221-8."
        ),
        ...sit(
          "06",
          "Le manager change le besoin en cours de process",
          "Cabinet interne d'une ETI industrielle. Vous avez déjà préqualifié quatre personnes sur un poste de technicien méthodes. Le manager vous écrit : « En fait on veut plutôt un profil automatisme, et idéalement de l'anglais. » Les quatre candidats ont un rendez-vous planifié. L'annonce en ligne décrit encore le premier besoin.",
          "Que faites-vous ?",
          "Convoquer quand même et juger « à l'instinct » si les gens peuvent basculer.",
          "Geler les entretiens, requalifier le besoin par écrit, informer les candidats de l'évolution, et ne pas les évaluer sur des critères non communiqués.",
          "Annuler silencieusement les rendez-vous et republier une nouvelle annonce.",
          "Ajouter l'anglais et l'automatisme comme critères « bonus » sans rien dire.",
          "CONDUITE RECOMMANDÉE : option B. Un changement de besoin n'est pas un crime ; le cacher en est un, professionnellement. Vous documentez, vous informez, vous évitez d'évaluer sur des critères secrets.\n\nJUSTIFICATION : L. 1221-8 et L. 1221-9 : méthodes pertinentes et information préalable. L. 5331-3 : l'annonce ne doit pas induire en erreur.\n\nRISQUES : perte de temps candidat, grief de manque de transparence, biais.\n\nERREURS FRÉQUENTES : « on verra bien » ; ghosting des convoqués.\n\nQUALIFICATION : bonne pratique + obligations L. 1221-8, L. 1221-9, L. 5331-3."
        ),
        ...sit(
          "07",
          "Pression pour « closer » avant une revue de direction",
          "Vous êtes junior en Talent Acquisition dans une startup (Paris). Votre N+1 vous demande d'avoir « un signed offer avant le COMEX de jeudi ». Il reste un finaliste, des références non faites, et le manager n'a pas tranché entre deux personnes. On vous suggère d'envoyer une proposition « pour faire avancer ».",
          "Quelle conduite ?",
          "Envoyer l'offre au plus disponible des deux pour tenir le COMEX.",
          "Refuser de formuler une offre tant que la décision n'est pas cadrée, et proposer un point de décision accéléré mais complet.",
          "Envoyer les deux offres en parallèle, « le premier qui signe gagne ».",
          "Promettre oralement le poste au finaliste et rédiger l'écrit après le COMEX.",
          "CONDUITE RECOMMANDÉE : option B. Le calendrier politique n'autorise pas une offre bancale, encore moins deux offres concurrentes. Une promesse orale mal maîtrisée peut être requalifiée selon les termes employés (offre vs promesse unilatérale — voir Service-Public F39588).\n\nJUSTIFICATION : vous protégez l'entreprise et le candidat. Un COMEX n'est pas une cause réelle d'embauche précipitée.\n\nRISQUES : double embauche, promesse mal calée, discrimination si le choix se fait au « plus disponible ».\n\nERREURS FRÉQUENTES : closer pour faire plaisir ; oral « tu as le poste » sans écrit validé RH.\n\nQUALIFICATION : bonne pratique ; vigilance juridique sur l'écrit d'embauche (SP-F39588). Politique interne : qui signe les offres.\n\nRÉFÉRENCE : SP-F39588."
        ),
        ...sit(
          "08",
          "Le manager veut « le meilleur » sans critères",
          "PME de services (90 salariés, Nantes). Le directeur commercial vous dit : « Trouve-moi un business developer, le meilleur. Je saurai le reconnaître. » Il refuse une grille. Lors du dernier recrutement, il a écarté une candidate après 8 minutes « parce qu'elle n'avait pas le spark ».",
          "Que faites-vous ?",
          "Lui faire confiance : c'est lui qui va manager la personne.",
          "Imposer une grille minimale (missions, résultats attendus, critères observables) avant tout entretien, et documenter les écarts.",
          "Laisser le spark et vous concentrer sur le sourcing.",
          "Filtrer vous-même les profils « qui plairont » (âge, look, école).",
          "CONDUITE RECOMMANDÉE : option B. Sans critères observables, le recrutement devient un jugement d'affinité, terrain privilégié des discriminations (L. 1132-1 : apparence, âge, sexe, origine, etc.).\n\nJUSTIFICATION : votre rôle est d'objectiver. Vous n'êtes pas un obstacle ; vous êtes le garde-fou.\n\nRISQUES : discrimination, inégalité de traitement, impossibilité de motiver un refus.\n\nERREURS FRÉQUENTES : anticiper les goûts du manager ; copier son vocabulaire flou.\n\nQUALIFICATION : obligation légale de non-discrimination (L. 1132-1) ; bonne pratique d'évaluation structurée (L. 1221-9 : méthodes pertinentes).\n\nRÉFÉRENCE : L1132-1, L1221-9."
        ),
        ...sit(
          "09",
          "Urgence réelle après un arrêt brutal",
          "Industrie (ETI, 600 salariés, Saint-Nazaire). Un responsable maintenance est en arrêt, la durée est inconnue, le service est en 3×8. Le directeur vous demande un CDD de remplacement « tout de suite ». Les RH confirment le besoin. Le manager veut coller le CDD sur la fiche du titulaire, y compris des habilitations longues à obtenir.",
          "Quelle conduite ?",
          "Promettre un CDD opérationnel sous 10 jours, habilitations comprises.",
          "Cadrer ce qui est réellement tenable en CDD de remplacement, les habilitations critiques, et un calendrier honnête, en lien avec RH.",
          "Lancer un CDI : « au moins on règle le sujet ».",
          "Attendre la reprise du titulaire pour ne pas embaucher « pour rien ».",
          "CONDUITE RECOMMANDÉE : option B. L'urgence est réelle. Vous ne promettez pas l'impossible (habilitations). Le choix CDD de remplacement vs autres contrats est une décision RH/employeur, pas un bricolage du junior.\n\nJUSTIFICATION : honnêteté du délai + pertinence du contrat. Ne pas inventer un délai légal de recrutement.\n\nRISQUES : embauche non opérationnelle, mauvaise qualification de contrat, surcharge du service.\n\nERREURS FRÉQUENTES : transformer un remplacement en CDI « pour simplifier » sans RH ; promettre les habilitations.\n\nQUALIFICATION : bonne pratique ; politique interne / RH sur le type de contrat. Ne pas inventer de délai légal d'embauche."
        ),
        ...sit(
          "10",
          "Le manager veut voir « tous les CV » sans présélection",
          "PME retail (120 salariés). La responsable de magasin exige de recevoir tous les CV, y compris hors critères, « pour ne rater personne ». Elle n'a pas le temps de les lire. Elle vous a déjà reproché d'avoir « filtré trop dur » alors que vous aviez écarté des candidatures sans lien avec l'emploi.",
          "Que faites-vous ?",
          "Transférer l'intégralité de la CVthèque en pièce jointe.",
          "Convenir d'une grille de présélection écrite, envoyer un flot qualifié, et tracer les écarts pour les candidatures hors sujet.",
          "Ne plus filtrer du tout pour éviter le conflit.",
          "Écarter silencieusement les profils qui « ne lui plairont pas » (âge, photo, adresse).",
          "CONDUITE RECOMMANDÉE : option B. La présélection est votre métier, pas une censure. Une grille écrite protège le manager et vous. Filtrer sur des critères protégés est interdit (L. 1132-1).\n\nJUSTIFICATION : tout envoyer noie la décision. Ne plus filtrer vous fait perdre votre rôle. Filtrer sur la photo ou l'âge est discriminatoire.\n\nRISQUES : discrimination, surcharge, grief de tri illicite.\n\nERREURS FRÉQUENTES : « pour lui faire plaisir » ; tri esthétique.\n\nQUALIFICATION : obligation L. 1132-1 ; L. 1221-6 (informations en lien avec l'emploi) ; bonne pratique de scoring.\n\nRÉFÉRENCE : L1132-1, L1221-6."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Dire oui pour être aimé. Promettre une date. Lancer sans budget. Recyclage d'annonce. Filtrer sur des goûts. Mentir au manager « pour son bien ». Confondre urgence du terrain et qualité minimale d'un CDI."
        ),
        h("Mise en pratique"),
        t(
          "Reprenez S01 et S03. Rédigez en dix lignes le message que vous enverriez au manager : faits, écart, options, ce que vous ne ferez pas (mentir sur le salaire ou le délai). Comparez ensuite avec la conduite recommandée."
        ),
        h("Correction détaillée"),
        t(
          "Un bon message nomme le fait (« fourchette 32 k€ vs retours internes plutôt 8 à 12 k€ au-dessus »), propose des options (ouvrir, réduire le périmètre, intérim de transition), et refuse explicitement l'allégation trompeuse. Un mauvais message culpabilise, invente un « salaire marché officiel », ou promet un miracle."
        ),
      ],
    }),
    lesson({
      title: "Salaire, budget, prétentions et négociation",
      description:
        "Dix situations sur l'écart au marché, la prétention hors budget, la négo et les avantages non confirmés.",
      minutes: 30,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez traiter un écart salarial sans mentir, préparer une négociation dans le cadre RH, et distinguer une offre d'une promesse. Vous n'inventez ni fourchette ni avantage."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "La rémunération est un critère de décision autant qu'un risque juridique si elle est présentée de façon trompeuse. Le recruteur junior n'est pas décideur du budget : il alerte, documente, propose des leviers (variable, 12 mois, périmètre, titre) et prépare la décision. Une « promesse » mal rédigée peut valoir contrat ; une offre est rétractable dans les conditions rappelées par Service-Public (F39588), sous réserve des termes employés. Faites valider tout écrit par les RH."
        ),
        h("Méthode opérationnelle"),
        t(
          "Dès la préqual : prétention, fourchette autorisée, leviers. Jamais de chiffre inventé. Jamais d'avantage « on verra ». Tout écart est remonté avant l'entretien final."
        ),
        h("Bibliothèque de situations S11 à S20"),
        ...sit(
          "11",
          "Prétention au-dessus du budget",
          "PME industrielle (85 salariés). Un profil rare en WMS demande 42 k€. La fourchette validée est 34-37 k€. Le manager dit : « Fais-le venir, on verra, il baissera. » Le candidat a une autre piste au même niveau de prétention. Vous n'avez aucun levier variable validé.",
          "Quelle conduite ?",
          "Le convoquer en taisant la fourchette pour « créer l'envie ».",
          "Lui indiquer honnêtement la fourchette avant un entretien long, et ne poursuivre que s'il accepte d'explorer le cadre ou si RH ouvre le budget.",
          "Lui dire que le poste est à 42 k€ pour le faire venir.",
          "Le recaler immédiatement sans en parler au manager.",
          "CONDUITE RECOMMANDÉE : option B. Transparence précoce. Poursuivre en silence gaspille le temps des deux côtés et prépare un désistement à l'offre.\n\nJUSTIFICATION : L. 5331-3 interdit d'induire en erreur sur la rémunération. Mentir à 42 k€ est une faute professionnelle.\n\nRISQUES : désistement tardif, conflit, allégation trompeuse.\n\nERREURS FRÉQUENTES : « il baissera » ; gonfler le chiffre.\n\nQUALIFICATION : obligation L. 5331-3 ; bonne pratique de transparence. Affichage du salaire dans l'annonce : pas (encore) obligation interne française consolidée (directive UE en transposition).\n\nRÉFÉRENCE : L5331-3, UE-transparence-salariale."
        ),
        ...sit(
          "12",
          "Négociation salariale : le candidat demande +3 k€",
          "Après une proposition écrite à 36 k€ (haut de fourchette validée), le finaliste demande 39 k€ et un 13e mois. Le manager dit « ok pour 39 si tu closes demain ». Les RH n'ont pas validé. Le 13e mois n'existe pas dans la politique de l'entreprise.",
          "Que faites-vous ?",
          "Confirmer 39 k€ et le 13e mois par e-mail pour closer.",
          "Suspendre, faire valider budget et avantages par RH, et répondre sans promettre ce qui n'existe pas.",
          "Dire que c'est d'accord « en interne » et que l'écrit suivra.",
          "Menacer le candidat de perdre le poste s'il négocie.",
          "CONDUITE RECOMMANDÉE : option B. Vous n'êtes pas signataire. Un e-mail trop affirmatif peut s'analyser comme une offre, voire davantage selon les termes (SP-F39588).\n\nJUSTIFICATION : le 13e mois n'est pas un levier improvisé. La précipitation du manager ne crée pas une politique RH.\n\nRISQUES : promesse non tenue, inégalité de traitement, écrit trop engageant.\n\nERREURS FRÉQUENTES : closer à l'oral ; inventer un avantage.\n\nQUALIFICATION : politique interne (qui valide) ; vigilance SP-F39588 ; bonne pratique d'équité interne.\n\nRÉFÉRENCE : SP-F39588."
        ),
        ...sit(
          "13",
          "Le candidat demande le salaire des collègues",
          "En préqual, une candidate demande : « Combien gagne la personne qui fait le même métier dans l'équipe ? » Le manager vous a dit de ne jamais parler des salaires individuels. La fourchette du poste est communicable.",
          "Quelle réponse ?",
          "Donner le salaire du collègue : la transparence, c'est l'avenir.",
          "Refuser de communiquer un salaire individuel, et indiquer la fourchette du poste ainsi que les critères d'évolution, selon ce que RH autorise.",
          "Inventer une fourchette large pour ne pas se fermer.",
          "Répondre que tout le monde est au SMIC plus un variable.",
          "CONDUITE RECOMMANDÉE : option B. Un salaire individuel d'un salarié n'est pas une information de recrutement à divulguer. La fourchette du poste, elle, est un outil légitime si elle est exacte.\n\nJUSTIFICATION : confidentialité des données d'un tiers (RGPD / loyauté) + L. 5331-3 si vous inventez. La directive transparence salariale est en transposition : ne pas affirmer une obligation française d'afficher déjà le salaire, ni un droit du candidat à connaître le bulletin d'un collègue.\n\nRISQUES : violation de confidentialité, allégation fausse.\n\nERREURS FRÉQUENTES : « transparence » mal comprise ; mensonge.\n\nQUALIFICATION : politique interne + protection des données d'autrui ; L. 5331-3.\n\nRÉFÉRENCE : CNIL-guide, UE-transparence-salariale, L5331-3."
        ),
        ...sit(
          "14",
          "Avantages promis par le manager, non confirmés RH",
          "Le manager a dit en entretien : « Ici tout le monde a deux jours de télétravail et une voiture. » Les RH vous indiquent : télétravail un jour, pas de véhicule sur ce poste. Le candidat vous écrit pour « confirmer les deux jours et la voiture avant de démissionner ».",
          "Que faites-vous ?",
          "Confirmer pour ne pas le perdre, on régularisera.",
          "Rectifier par écrit ce qui est réellement ouvert, alerter RH et manager, et ne pas laisser une promesse fausse circuler.",
          "Ne pas répondre, le contrat tranchera.",
          "Dire que le manager a raison, les RH sont trop rigides.",
          "CONDUITE RECOMMANDÉE : option B. Vous corrigez. Vous ne laissez pas le candidat démissionner sur une base fausse. Vous recadrez le manager.\n\nJUSTIFICATION : allégation trompeuse (L. 5331-3) et risque d'écrit engageant. Ne pas répondre est une forme de laisser-faire.\n\nRISQUES : contentieux, rupture de confiance, départ immédiat après J1.\n\nERREURS FRÉQUENTES : « le contrat corrigera » ; allégeance au manager.\n\nQUALIFICATION : obligation de ne pas induire en erreur (L. 5331-3) ; politique interne avantages.\n\nRÉFÉRENCE : L5331-3, SP-F39588."
        ),
        ...sit(
          "15",
          "Variable commercial irréaliste dans l'annonce",
          "Le directeur des ventes veut écrire « jusqu'à 80 k€ à l'année » pour un poste dont le fixe est 32 k€ et dont aucun commercial n'a dépassé 48 k€ total les trois dernières années. L'objectif « 80 » suppose un chiffre d'affaires jamais atteint sur le secteur.",
          "Quelle conduite ?",
          "Publier 80 k€ : c'est un maximum théorique.",
          "Refuser l'allégation, proposer une formulation exacte (fixe + variable selon objectifs, exemples de réalisé si RH l'autorise), sans maximum fantaisiste.",
          "Mettre 80 k€ en petit dans l'annonce et expliquer à l'entretien.",
          "Ne pas parler de rémunération du tout.",
          "CONDUITE RECOMMANDÉE : option B. Un maximum jamais observé, présenté comme accessible, est susceptible d'induire en erreur (L. 5331-3).\n\nJUSTIFICATION : vous protégez l'entreprise. Le silence total n'est pas illégal en soi à ce jour sur l'affichage du salaire, mais ce n'est pas une solution au mensonge.\n\nRISQUES : contentieux, marque employeur, turnover J+90.\n\nERREURS FRÉQUENTES : « tout le monde fait ça » ; petit caractère.\n\nQUALIFICATION : obligation L. 5331-3.\n\nRÉFÉRENCE : L5331-3."
        ),
        ...sit(
          "16",
          "Candidat qui négocie le télétravail hors politique",
          "Le poste est annoncé « 1 jour de télétravail ». Le finaliste, qui habite à 2 h de train, demande 4 jours. Le manager est d'accord « s'il performe ». Aucune exception n'est écrite. D'autres salariés du service sont à 1 jour.",
          "Que faites-vous ?",
          "Accorder 4 jours par e-mail de recruteur.",
          "Remonter à RH : exception possible, équité interne, formalisation, et ne rien confirmer tant que ce n'est pas validé.",
          "Dire non de vous-même sans en parler : la politique est la politique.",
          "Promettre 4 jours les trois premiers mois « pour voir ».",
          "CONDUITE RECOMMANDÉE : option B. Une exception managériale orale crée de l'iniquité et un écrit à risque. Vous n'êtes pas le décideur de la politique de télétravail.\n\nJUSTIFICATION : équité interne + validation RH. Un « pour voir » est une promesse déguisée.\n\nRISQUES : précédent, conflictualité d'équipe, offre ambiguë.\n\nERREURS FRÉQUENTES : closer sur un avantage que vous ne tenez pas.\n\nQUALIFICATION : politique interne ; bonne pratique d'équité ; vigilance SP-F39588 sur l'écrit."
        ),
        ...sit(
          "17",
          "Counter-offer de l'employeur actuel",
          "Vous avez une acceptation orale à 38 k€. Le lendemain, le candidat rappelle : son employeur aligne à 41 k€. Il hésite. Le manager de votre côté dit « on ne s'aligne pas, c'est un mercenaire ». Les RH n'ont pas encore envoyé l'écrit.",
          "Quelle conduite ?",
          "Le traiter de mercenaire et clore le dossier.",
          "Rester factuel : rappeler l'offre réelle, les leviers non salariaux vrais, ne pas dénigrer l'employeur actuel, et laisser une décision dans un délai raisonnable cadré.",
          "Monter immédiatement à 41 k€ sans RH.",
          "Dire que l'écrit est déjà envoyé alors qu'il ne l'est pas, pour le bloquer.",
          "CONDUITE RECOMMANDÉE : option B. Une counter-offer est fréquente. Le mot « mercenaire » n'est pas une évaluation. Mentir sur un écrit est une faute.\n\nJUSTIFICATION : vous ne dénigrez pas. Vous ne surenchérissez pas seul. Vous ne mentez pas.\n\nRISQUES : offre non autorisée ; diffamation / déloyauté ; candidat qui reste par peur.\n\nERREURS FRÉQUENTES : chantage ; alignement sauvage ; mensonge sur l'écrit.\n\nQUALIFICATION : bonne pratique ; politique interne de négo ; ne jamais mentir."
        ),
        ...sit(
          "18",
          "Profil pénurique unique, hors budget",
          "Métier en tension (automaticien de nuit, usine 24/7). Un seul candidat tenable en trois semaines. Prétention 8 % au-dessus du max. Le manager dit « on ne peut pas s'arrêter ». La direction n'a pas encore arbitrée. Un intérimaire tient le poste depuis deux mois à un coût élevé.",
          "Que faites-vous ?",
          "Promettre le salaire demandé « on fera passer ça ».",
          "Chiffrer l'écart, le comparer au coût de l'intérim et du poste vacant, et demander un arbitrage écrit avant toute promesse.",
          "Laisser partir le candidat pour « tenir la grille » sans alerter.",
          "Lui proposer un CDI au max puis un avenant « dès que possible ».",
          "CONDUITE RECOMMANDÉE : option B. Vous objectivatez. L'avenant vague est une promesse. Laisser partir sans alerte est une non-assistance managériale.\n\nJUSTIFICATION : décision d'employeur, pas de junior. L'intérim a un coût : c'est un argument interne, pas une menace au candidat.\n\nRISQUES : promesse hors cadre ; perte du seul profil ; avenant illusoire.\n\nERREURS FRÉQUENTES : « on fera passer » ; rigidité muette.\n\nQUALIFICATION : bonne pratique de business case interne ; politique salariale."
        ),
        ...sit(
          "19",
          "Le candidat refuse d'indiquer sa prétention",
          "En préqual, le candidat dit : « Donnez-moi d'abord votre fourchette, je ne me brade pas. » Vous avez une fourchette validée 33-37 k€. Le manager veut « tester le prix du marché » via les prétentions.",
          "Quelle conduite ?",
          "Insister jusqu'à obtenir un chiffre, sinon écarter le candidat.",
          "Communiquer la fourchette autorisée, noter qu'il n'a pas d'autre prétention à ce stade, et poursuivre si le cadre lui convient.",
          "Inventer une fourchette plus basse pour le faire descendre.",
          "Écarter : un candidat qui ne donne pas de chiffre n'est pas sérieux.",
          "CONDUITE RECOMMANDÉE : option B. L. 1221-6 : on ne demande que ce qui a un lien avec l'emploi. La prétention est utile, pas un test de soumission. Mentir sur la fourchette est interdit (L. 5331-3).\n\nJUSTIFICATION : la transparence débloque. Écarter pour « non-soumission » n'est pas un critère professionnel.\n\nRISQUES : allégation trompeuse ; biais de docilité.\n\nERREURS FRÉQUENTES : marchandage ; écran de fumée.\n\nQUALIFICATION : L. 5331-3 ; bonne pratique. L. 1221-6.\n\nRÉFÉRENCE : L1221-6, L5331-3."
        ),
        ...sit(
          "20",
          "Égalité de traitement : deux finalistes, deux salaires",
          "Deux finalistes de même niveau, mêmes missions. L'homme a demandé 38 k€, la femme 34 k€. Le manager dit : « On prend la femme à 34, on économise. » Les compétences évaluées sont équivalentes. La fourchette va jusqu'à 38.",
          "Quelle conduite ?",
          "Suivre le manager : chacun a demandé ce qu'il voulait.",
          "Alerter RH : un écart fondé sur le sexe (ou sur une prétention elle-même biaisée par le sexe) expose à une discrimination. Proposer une rémunération alignée sur le poste, pas sur le genre.",
          "Monter la femme à 38 sans rien dire, pour « rétablir » seul.",
          "Recaler la femme et prendre l'homme « pour éviter le sujet ».",
          "CONDUITE RECOMMANDÉE : option B. L. 1132-1 interdit d'écarter ou de traiter défavorablement notamment en raison du sexe. Vous n'arbitragez pas seul une politique salariale, vous alertez.\n\nJUSTIFICATION : « elle a demandé moins » n'efface pas le risque. Recaler pour éviter le sujet est aussi discriminatoire.\n\nRISQUES : discrimination à l'embauche, écart injustifié.\n\nERREURS FRÉQUENTES : optimisation budgétaire genrée ; rétablissement sauvage sans RH.\n\nQUALIFICATION : obligation légale L. 1132-1.\n\nRÉFÉRENCE : L1132-1."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Closer sans RH. Inventer un avantage. Utiliser la prétention comme test de caractère. Aligner deux salaires sur le genre. Promettre un avenant."
        ),
        h("Mise en pratique"),
        t(
          "Rédigez la réponse écrite à S14 (rectification télétravail / voiture) en quinze lignes maximum, factuelle, sans accuser le candidat, avec copie du process interne à suivre."
        ),
        h("Correction détaillée"),
        t(
          "Le message remercie, rappelle les éléments réellement ouverts, indique que les propos du manager ont été recadrés, propose un point, et ne confirme aucun avantage non validé. Il ne dit pas « ce n'était qu'une piste » si c'était une affirmation. Il ne demande pas au candidat de « faire confiance »."
        ),
      ],
    }),
    lesson({
      title: "Relation candidat : ghosting, délais, offres concurrentes",
      description:
        "Dix situations sur le respect des délais, le ghosting, l'autre offre, le désistement et la mise en attente.",
      minutes: 30,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous apprenez à tenir une relation candidat honnête : pas de silence, pas de file d'attente infinie, pas de mensonge sur le calendrier. Vous traitez une autre offre, un délai de réflexion et un désistement sans improvisation agressive."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le ghosting (absence de réponse après un engagement de process) n'est pas un outil de pouvoir. Il dégrade la marque employeur et, dans certains cas, laisse des données sans information claire. Garder plusieurs finalistes « au chaud » sans transparence n'est pas une stratégie : c'est un risque de désistement en chaîne et un traitement déloyal. Un candidat n'a pas d'obligation légale de motiver son désistement. L'employeur, s'il refuse, n'a pas toujours à motiver comme un licenciement ; pour autant, une demande de motif se traite avec prudence (faits professionnels, pas de critères protégés)."
        ),
        h("Méthode opérationnelle"),
        t(
          "Calendrier annoncé = calendrier tenu ou mis à jour. File d'attente : information, durée, alternative. Autre offre : accélération réelle ou retrait propre. Jamais de chantage. Jamais de « vous êtes le seul » si c'est faux."
        ),
        h("Bibliothèque de situations S21 à S30"),
        ...sit(
          "21",
          "Ghosting après un entretien",
          "PME de services (60 salariés). Un candidat a passé 1 h 30 d'entretien. Vous lui aviez dit « retour sous cinq jours ». Le manager n'a pas donné son avis. Dix jours ont passé. Le candidat relance. Le manager vous dit « ignore, s'il est trop pressé ce n'est pas un bon profil ».",
          "Quelle conduite ?",
          "Ne pas répondre : le silence teste la motivation.",
          "Répondre dans la journée, donner un état réel (décision non rendue) et un nouveau délai, tout en relançant le manager par écrit.",
          "Lui dire qu'il n'est pas retenu pour clore, alors que ce n'est pas tranché.",
          "Lui dire qu'il est le favori pour le faire patienter.",
          "CONDUITE RECOMMANDÉE : option B. Vous devez une réponse, même imparfaite. Mentir (favori ou refus fictif) n'est pas une option.\n\nJUSTIFICATION : le silence n'est pas un critère d'évaluation. Un refus inventé peut vous priver d'un bon profil et est déloyal.\n\nRISQUES : marque employeur, perte du candidat, données laissées sans clôture claire.\n\nERREURS FRÉQUENTES : tester la motivation par le vide ; mensonge de confort.\n\nQUALIFICATION : bonne pratique professionnelle ; CNIL : information et loyauté du traitement (recommandation d'autorité).\n\nRÉFÉRENCE : CNIL-guide."
        ),
        ...sit(
          "22",
          "Le candidat ne répond plus après la proposition",
          "Vous avez envoyé une proposition écrite valable jusqu'à vendredi. Mardi, aucune réponse. Le manager panique et veut appeler toutes les heures. Un second finaliste attend une réponse promise « en fin de semaine ».",
          "Que faites-vous ?",
          "Harceler d'appels jusqu'à obtenir un oui.",
          "Une relance courte et datée, un seul canal de trop, et préparer le plan B avec le second sans lui mentir sur sa position.",
          "Dire au second qu'il a le poste au cas où.",
          "Retirer l'offre immédiatement pour « se venger » du silence.",
          "CONDUITE RECOMMANDÉE : option B. Une relance est légitime. Le harcèlement et la double attribution ne le sont pas. Retirer par piqué n'est pas une politique.\n\nJUSTIFICATION : l'offre a un délai. Service-Public rappelle que l'offre (au sens jurisprudentiel expliqué) peut être retirée avant acceptation dans le délai laissé ou un délai raisonnable ; la promesse unilatérale est un autre régime. Faites qualifier l'écrit par RH avant tout retrait (SP-F39588). Ne jouez pas au juriste isolé.\n\nRISQUES : double embauche, retrait mal calé, pressions.\n\nERREURS FRÉQUENTES : harcèlement ; offre parallèle mensongère.\n\nQUALIFICATION : bonne pratique + vigilance SP-F39588 (validation RH).\n\nRÉFÉRENCE : SP-F39588."
        ),
        ...sit(
          "23",
          "Le candidat a une autre offre",
          "En préqual, une candidate indique une offre concurrente à 48 h. Votre process prévoit encore un entretien manager la semaine suivante. Le manager est en salon professionnel.",
          "Quelle conduite ?",
          "Lui dire de refuser l'autre offre, « on est presque sûrs ».",
          "Accélérer réellement ce qui est possible, ou la laisser partir proprement si le process ne peut pas bouger, sans lui demander de brûler l'autre pont sur une promesse molle.",
          "Inventer un entretien « déjà validé » pour la retenir.",
          "L'écarter : trop de contraintes.",
          "CONDUITE RECOMMANDÉE : option B. Vous n'obtenez pas une démission ou un refus d'offre concurrente sur du vent.\n\nJUSTIFICATION : accélérer est professionnel ; mentir est une faute. Écarter parce qu'elle a une option est un biais de docilité.\n\nRISQUES : candidat sans rien ; réputation ; promesse orale.\n\nERREURS FRÉQUENTES : « on est presque sûrs » ; punir la transparence.\n\nQUALIFICATION : bonne pratique. Ne jamais recommander de mentir."
        ),
        ...sit(
          "24",
          "Finaliste qui demande deux semaines de réflexion",
          "Après l'offre, le finaliste demande deux semaines : il veut en parler à son conjoint et terminer un projet. Le manager dit « 48 h max, sinon on passe au suivant ». L'écrit RH laisse « un délai de réponse » non chiffré. Le second est solide mais pas équivalent.",
          "Que faites-vous ?",
          "Accorder deux semaines sans condition ni point d'étape.",
          "Négocier un délai intermédiaire (par exemple quelques jours) avec un point d'étape, informer le second de façon honnête (process encore ouvert), et ne pas menacer.",
          "Retirer l'offre le soir même pour reprendre la main.",
          "Dire au second qu'il est choisi, tout en laissant le premier réfléchir.",
          "CONDUITE RECOMMANDÉE : option B. Deux semaines peuvent être trop longues selon le marché ; 48 h peut être brutal. Vous cadrez. Vous ne doublez pas les promesses.\n\nJUSTIFICATION : pas de délai légal magique de réflexion à inventer. C'est un arbitrage process + écrit (SP-F39588 : délai laissé ou raisonnable pour une offre).\n\nRISQUES : perte des deux ; écrit ambigu.\n\nERREURS FRÉQUENTES : ultimatum humiliant ; double attribution.\n\nQUALIFICATION : bonne pratique ; politique interne ; SP-F39588.\n\nRÉFÉRENCE : SP-F39588."
        ),
        ...sit(
          "25",
          "Garder plusieurs personnes en attente",
          "Le manager veut « trois yes en poche » avant de choisir, et vous demande de dire à chacun « vous êtes très bien positionné, on revient vite ». Aucune date. L'un des trois a déjà décliné une autre piste sur la foi de vos propos trop chauds.",
          "Quelle conduite ?",
          "Obéir : c'est de la stratégie.",
          "Refuser les formulations mensongères, informer chacun de sa situation réelle (shortlist ouverte, pas de décision), et limiter la durée d'attente.",
          "Promettre le poste aux trois, le manager tranchera.",
          "Ne plus donner aucune information « pour rester neutre ».",
          "CONDUITE RECOMMANDÉE : option B. Une shortlist n'est pas une réserve de candidats trompés. Le silence n'est pas la neutralité.\n\nJUSTIFICATION : loyauté. Un « très bien positionné » répété à trois personnes est un piège.\n\nRISQUES : désistements, réputation, grief de mauvaise foi.\n\nERREURS FRÉQUENTES : infliger l'attente ; sur-vendre.\n\nQUALIFICATION : bonne pratique ; loyauté du traitement des données (CNIL).\n\nRÉFÉRENCE : CNIL-guide."
        ),
        ...sit(
          "26",
          "Désistement la veille de la prise de poste",
          "Le candidat devait arriver lundi. Dimanche soir, il écrit : il reste chez lui, counter-offer + peur du changement. Le manager veut que vous « le fassiez honte » et que vous exigiez le remboursement des frais d'entretien. Aucune clause de ce type n'existe.",
          "Que faites-vous ?",
          "Envoyer un message culpabilisant et exiger un remboursement.",
          "Accuser réception sobre, informer RH et manager, relancer le plan B, et ne pas inventer une pénalité.",
          "Menacer d'un procès pour promesse non tenue du candidat.",
          "Publier un commentaire négatif sur son profil LinkedIn.",
          "CONDUITE RECOMMANDÉE : option B. Un désistement est un coup dur, pas un droit de punir. Vous n'inventez pas de créance. Vous ne diffamez pas.\n\nJUSTIFICATION : pas de délai légal ni de pénalité à inventer. La priorité est opérationnelle (plan B, intérim, second).\n\nRISQUES : diffamation, harcèlement, temps perdu en vengeance.\n\nERREURS FRÉQUENTES : message humiliant ; « on le poursuivra ».\n\nQUALIFICATION : bonne pratique ; ne pas inventer de sanction légale."
        ),
        ...sit(
          "27",
          "Demande de motif de refus par le candidat",
          "Après un entretien, vous notifiez un refus poli. Le candidat exige « le motif exact, les notes du manager et le classement ». Le manager a écrit dans le CRM : « Pas le feeling, un peu vieux pour l'équipe. »",
          "Quelle conduite ?",
          "Transférer le commentaire brut du manager.",
          "Ne pas transmettre le commentaire discriminatoire, recadrer le manager, répondre au candidat sur des critères professionnels objectifs, et alerter RH.",
          "Ignorer : on ne doit jamais motiver.",
          "Inventer un motif (« poste gelé ») pour éviter le conflit.",
          "CONDUITE RECOMMANDÉE : option B. Un motif lié à l'âge est une discrimination (L. 1132-1). Vous ne le « lavez » pas en le transmettant, vous ne le remplacez pas par un mensonge.\n\nJUSTIFICATION : droit d'accès RGPD ≠ droit à lire un commentaire illicite que vous laisseriez tel quel. Le droit d'accès s'exerce selon les règles CNIL / RGPD ; vous orientez vers le process RH prévu. Vous pouvez (et devez) corriger des données inexactes ou illicites dans vos outils.\n\nRISQUES : preuve de discrimination, mensonge, refus d'accès mal géré.\n\nERREURS FRÉQUENTES : copier-coller le CRM ; ghosting ; mensonge.\n\nQUALIFICATION : obligation L. 1132-1 ; RGPD / CNIL (droit d'accès, exactitude) ; bonne pratique de feedback factuel.\n\nRÉFÉRENCE : L1132-1, CNIL-guide."
        ),
        ...sit(
          "28",
          "Candidat qui demande un feedback trop détaillé",
          "Une candidate non retenue après trois tours veut « le détail de chaque réponse STAR, la note de chacun des six intervieweurs et le CV du retenu ». Votre politique interne prévoit un feedback oral court, factuel, sans comparaison nominative.",
          "Que faites-vous ?",
          "Envoyer le dossier complet des six intervieweurs.",
          "Proposer un feedback professionnel limité aux écarts observés sur le poste, sans données d'autrui et sans notes brutes si la politique l'interdit.",
          "Ne rien dire pour « se protéger juridiquement ».",
          "Lui lire le CV du retenu en masquant le nom.",
          "CONDUITE RECOMMANDÉE : option B. Le feedback est utile. Les données d'un tiers ne se partagent pas. Le silence total n'est pas une protection magique.\n\nJUSTIFICATION : RGPD (données d'autrui) + politique interne. Un feedback factuel réduit les malentendus.\n\nRISQUES : violation de données ; discrimination si le feedback glisse sur un critère protégé.\n\nERREURS FRÉQUENTES : trop ou trop peu ; comparaison nominative.\n\nQUALIFICATION : obligation RGPD vis-à-vis des tiers ; politique interne ; bonne pratique.\n\nRÉFÉRENCE : CNIL-guide."
        ),
        ...sit(
          "29",
          "Relance sourcing trop insistante",
          "Votre N+1 vous demande d'appeler trois fois par jour un profil LinkedIn qui n'a pas répondu, puis de lui écrire via un compte personnel. Le profil a déjà indiqué « pas intéressé » en commentaire privé.",
          "Quelle conduite ?",
          "Obéir : en sourcing, qui ne tente rien n'a rien.",
          "Arrêter les relances, tracer le refus, et ne pas contourner via un compte personnel.",
          "Lui envoyer un cadeau en message pour « humaniser ».",
          "Le faire relancer par un autre recruteur en se faisant passer pour une autre entreprise.",
          "CONDUITE RECOMMANDÉE : option B. Un refus est un refus. Le compte personnel et l'identité d'emprunt sont déloyaux.\n\nJUSTIFICATION : CNIL / loyauté du traitement ; L. 1221-6 n'autorise pas de harceler. L'approche commerciale a une limite : le respect de la personne.\n\nRISQUES : harcèlement, atteinte à la vie privée, réputation.\n\nERREURS FRÉQUENTES : volume = qualité ; usurpation de canal.\n\nQUALIFICATION : bonne pratique ; recommandation CNIL (loyauté) ; politique interne éthique.\n\nRÉFÉRENCE : CNIL-guide."
        ),
        ...sit(
          "30",
          "Candidature spontanée hors process",
          "Un profil très pertinent envoie une spontanée. Aucun poste ouvert. Le manager dit « garde-le au chaud six mois sans rien lui dire, on va peut-être créer un poste ». Le candidat demande ce que vous allez faire de son CV.",
          "Quelle conduite ?",
          "Promettre un poste qui n'existe pas.",
          "Informer : pas de poste ouvert, durée et finalité de conservation, droit d'opposition, et ne le « chauffer » pas sur un poste fictif.",
          "Ne jamais répondre aux spontanéess.",
          "Le mettre en process d'un autre poste sans lien pour « occuper » le dossier.",
          "CONDUITE RECOMMANDÉE : option B. Vivier possible si information et possibilité d'opposition (recommandation CNIL : jusqu'à 2 ans à compter du dernier contact — recommandation, pas une durée unique imposée par le RGPD lui-même).\n\nJUSTIFICATION : L. 5331-3 si vous laissez croire à un emploi inexistant. CNIL : information, durée, opposition.\n\nRISQUES : allégation trompeuse ; conservation opaque.\n\nERREURS FRÉQUENTES : « au chaud » silencieux ; poste fantôme.\n\nQUALIFICATION : L. 5331-3 ; recommandation CNIL vivier 2 ans ; obligation d'information RGPD.\n\nRÉFÉRENCE : CNIL-guide, CNIL-referentiel-2026, L5331-3."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Tester la motivation par le silence. Double promesse. Feedback copié du CRM illicite. Harcèlement de sourcing. Vivier fantôme."
        ),
        h("Mise en pratique"),
        t(
          "Rédigez le message de S25 à chacun des trois candidats (trois variantes honnêtes, pas trois copies « vous êtes le meilleur »)."
        ),
        h("Correction détaillée"),
        t(
          "Chaque message dit : shortlist de X personnes, pas de décision, prochaine date, possibilité de se retirer. Aucun « vous êtes notre priorité unique ». Le ton est respectueux, pas froidement juridique."
        ),
      ],
    }),
    lesson({
      title: "Décision, notes égales, subjectivité et shortlist",
      description:
        "Dix situations sur la comparaison des candidats, le manager subjectif et l'absence de profil parfait.",
      minutes: 30,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez départager deux notes égales sans critère illicite, recadrer un « je ne le sens pas », et recommander un profil imparfait plutôt que d'attendre l'introuvable."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "L'évaluation doit reposer sur des méthodes pertinentes au regard de l'emploi (L. 1221-9). Le feeling n'est pas interdit comme intuition à explorer ; il est interdit comme substitut à un critère protégé (âge, origine, apparence, sexe, etc.). Deux notes égales se départagent par des critères professionnels prévus, un entretien complémentaire, ou une mise en situation, pas par la photo ou le « fit culturel » flou."
        ),
        h("Méthode opérationnelle"),
        t(
          "Grille avant l'entretien. Notes après preuves. Écarts documentés. Recommandation écrite. Le manager décide, vous tracez."
        ),
        h("Bibliothèque de situations S31 à S40"),
        ...sit(
          "31",
          "Deux notes égales",
          "Deux finalistes : 16/20 tous les deux sur la grille. L'un a un meilleur WMS, l'autre une meilleure communication client. Le manager dit : « Prends celui qui habite le plus près, ça coûtera moins d'absences. » Le lieu de résidence est un critère protégé (L. 1132-1).",
          "Quelle conduite ?",
          "Choisir le plus proche : c'est du bon sens logistique.",
          "Refuser le critère de résidence, proposer un départage professionnel (mise en situation, références sur les must-have) et documenter.",
          "Choisir à pile ou face pour être « neutre ».",
          "Écarter les deux et relancer le sourcing.",
          "CONDUITE RECOMMANDÉE : option B. Le lieu de résidence figure parmi les critères de discrimination (L. 1132-1). Un pile ou face n'est pas une méthode pertinente (L. 1221-9).\n\nJUSTIFICATION : on départage sur le poste. L'organisation des déplacements se discute en conditions de travail, pas comme filtre d'embauche illicite.\n\nRISQUES : discrimination ; décision inexpliquable.\n\nERREURS FRÉQUENTES : proximité = motivation ; relance de confort.\n\nQUALIFICATION : obligation L. 1132-1 ; L. 1221-9.\n\nRÉFÉRENCE : L1132-1, L1221-9."
        ),
        ...sit(
          "32",
          "Manager subjectif : « je ne le sens pas »",
          "Après 20 minutes, le manager coupe l'entretien : « Je ne le sens pas. » Le candidat a répondu de façon structurée aux questions métier. Aucune note n'est saisie. Le manager ajoute : « Il a un côté trop scolaire. »",
          "Que faites-vous ?",
          "Clôturer le dossier immédiatement pour respecter le manager.",
          "Demander des faits observables, terminer ou replanifier un entretien structuré, et refuser de coder un refus sans critère.",
          "Mettre 8/20 d'autorité pour coller au feeling.",
          "Dire au candidat que le poste est gelé.",
          "CONDUITE RECOMMANDÉE : option B. Vous traduisez le flou en faits (exemples, lacunes) ou vous ne validez pas le refus. Mentir sur un gel de poste est déloyal.\n\nJUSTIFICATION : L. 1221-9 (méthodes pertinentes) ; risque que « scolaire » masque l'âge, l'origine ou l'apparence (L. 1132-1).\n\nRISQUES : discrimination, process inéquitable.\n\nERREURS FRÉQUENTES : obéir au feeling ; falsifier la note ; mensonge de clôture.\n\nQUALIFICATION : L. 1221-9, L. 1132-1 ; bonne pratique.\n\nRÉFÉRENCE : L1132-1, L1221-9."
        ),
        ...sit(
          "33",
          "Aucun candidat parfait",
          "Après six semaines, trois profils tiennent 70 % des must-have, aucun 100 %. Le manager veut « continuer jusqu'au mouton à cinq pattes ». L'intérim de transition coûte cher. Les must-have n'ont pas été revus.",
          "Quelle conduite ?",
          "Continuer indéfiniment : la qualité d'abord.",
          "Revoir les must-have, présenter les trois écarts, recommander le meilleur appariement formation/risque, et faire décider.",
          "Forcer le manager à prendre le premier CV du lot.",
          "Baisser secrètement les critères dans la grille pour faire un vainqueur.",
          "CONDUITE RECOMMANDÉE : option B. Le parfait n'est pas un critère. Vous objectivatez le coût du vide. Vous ne truquez pas la grille.\n\nJUSTIFICATION : décision éclairée. Truquer les notes est une faute documentaire.\n\nRISQUES : poste vacant chronique ; biais ; perte des 70 %.\n\nERREURS FRÉQUENTES : quête infinie ; forçage ; fraude de scoring.\n\nQUALIFICATION : bonne pratique ; L. 1221-9 (pertinence)."
        ),
        ...sit(
          "34",
          "Candidat interne contre externe",
          "Un magasinier interne pose sa candidature. Un externe est plus « propre » sur le papier. Le manager dit : « L'interne, s'il n'a pas le poste, il va se démotiver, prends-le. » Aucune politique de priorité interne écrite. L'interne a des écarts nets sur le WMS.",
          "Que faites-vous ?",
          "Prendre l'interne pour la paix sociale.",
          "Évaluer les deux sur la même grille, expliciter la politique interne s'il y en a une, et ne pas offrir le poste comme une faveur.",
          "Écarter l'interne d'emblée « pour ne pas créer d'espoir ».",
          "Dire à l'externe que le poste est réservé, tout en le faisant passer des entretiens.",
          "CONDUITE RECOMMANDÉE : option B. Mobilité interne : politique à clarifier, pas favoritisme. Faire passer un process faux à l'externe est déloyal (et L. 5331-3 si l'emploi n'est pas réellement ouvert).\n\nJUSTIFICATION : équité de traitement. L'interne a droit à un feedback vrai.\n\nRISQUES : favoritisme, discrimination inverse mal assumée, process potiche.\n\nERREURS FRÉQUENTES : paix sociale ; process alibi.\n\nQUALIFICATION : politique interne ; bonne pratique ; L. 5331-3 si emploi non réel.\n\nRÉFÉRENCE : L5331-3."
        ),
        ...sit(
          "35",
          "Shortlist : le manager ne veut voir qu'un CV",
          "Vous avez trois profils tenables. Le manager : « Envoie le meilleur, je n'ai pas le temps. » Votre politique interne demande une shortlist de trois avec écarts.",
          "Quelle conduite ?",
          "N'envoyer qu'un CV pour être service-oriented.",
          "Envoyer une shortlist courte (2 ou 3) avec recommandation argumentée, et un créneau de 20 minutes plutôt qu'un dossier de 40 pages.",
          "Envoyer les 40 CV pour qu'il « sente ».",
          "Choisir seul et lancer l'offre.",
          "CONDUITE RECOMMANDÉE : option B. Vous facilitez la décision, vous ne la confisquez pas, vous ne noyez pas.\n\nJUSTIFICATION : votre valeur est la comparaison. Décider seul n'est pas votre mandat (sauf délégation écrite).\n\nRISQUES : embauche non portée par le manager ; favoritisme.\n\nERREURS FRÉQUENTES : un seul CV « pour aller vite » ; 40 CV.\n\nQUALIFICATION : politique interne ; bonne pratique."
        ),
        ...sit(
          "36",
          "Références professionnelles négatives",
          "Un ancien manager du candidat, contacté avec l'accord du candidat, dit : « Incapable, toujours malade, et puis son nom ne passe pas auprès des clients. » Le reste des références est bon. Le candidat n'a pas d'arrêt visible dans le CV.",
          "Que faites-vous ?",
          "Écarter sur la santé et le nom.",
          "Écarter les propos sur la santé, le nom et les clients (critères protégés ou stéréotypes), recouper les faits professionnels vérifiables, et ne pas traiter une rumeur comme une preuve.",
          "Transmettre la citation brute au manager.",
          "Ignorer toutes les références désormais.",
          "CONDUITE RECOMMANDÉE : option B. État de santé, nom de famille : L. 1132-1. Une référence n'autorise pas un propos discriminatoire.\n\nJUSTIFICATION : vous recoupez les faits (délais, qualité de livrable) pas les stigmates.\n\nRISQUES : discrimination, diffamation, décision biaisée.\n\nERREURS FRÉQUENTES : copier la rumeur ; tout jeter.\n\nQUALIFICATION : obligation L. 1132-1 ; L. 1221-6 ; bonne pratique de recoupement.\n\nRÉFÉRENCE : L1132-1, L1221-6."
        ),
        ...sit(
          "37",
          "Scorecard incomplète après panel",
          "Six personnes ont vu le candidat. Deux n'ont pas rempli la grille. L'une a mis « OK » dans le chat. Le manager veut décider ce soir.",
          "Quelle conduite ?",
          "Décider avec ce qui est là.",
          "Exiger les grilles manquantes ou sortir du panel les avis non argumentés, puis décider.",
          "Faire la moyenne en mettant 10 par défaut aux absents.",
          "Donner plus de poids à celui qui a le plus haut coefficient hiérarchique, sans notes.",
          "CONDUITE RECOMMANDÉE : option B. Un chat « OK » n'est pas une évaluation pertinente (L. 1221-9). La hiérarchie ne remplace pas la preuve.\n\nJUSTIFICATION : traçabilité et équité. Les absents ne votent pas par silence.\n\nRISQUES : décision inattaquable en apparence, indéfendable en faits.\n\nERREURS FRÉQUENTES : moyenne magique ; pouvoir du grade.\n\nQUALIFICATION : L. 1221-9 ; bonne pratique.\n\nRÉFÉRENCE : L1221-9."
        ),
        ...sit(
          "38",
          "Candidat surqualifié",
          "Une ex-directrice supply postule à un poste de coordinateur. Le manager a peur qu'elle s'ennuie et parte. Il dit « trop chère, trop âgée, trop cadre ». L'âge est un critère protégé. Le salaire demandé est dans la fourchette.",
          "Que faites-vous ?",
          "Écarter pour surqualification et âge.",
          "Évaluer le risque réel (motivation, rémunération, autonomie du poste) sans utiliser l'âge, et documenter un écart professionnel s'il existe.",
          "La convoquer pour « faire plaisir à RH diversité ».",
          "Lui proposer un stage pour « redescendre ».",
          "CONDUITE RECOMMANDÉE : option B. La surqualification peut être un vrai sujet (ennui, coût, management d'un N+1 moins expérimenté). L'âge ne l'est pas comme critère (L. 1132-1).\n\nJUSTIFICATION : posez des questions de motivation et de périmètre. N'anticipez pas un départ sur un stéréotype d'âge.\n\nRISQUES : discrimination ; process alibi diversité.\n\nERREURS FRÉQUENTES : « trop âgée » ; entretien de façade.\n\nQUALIFICATION : obligation L. 1132-1 ; bonne pratique.\n\nRÉFÉRENCE : L1132-1."
        ),
        ...sit(
          "39",
          "Candidat hors sujet que le manager aime",
          "Un commercial terrain a un CV hors cible pour un poste supply. Le manager l'a rencontré au golf et le veut en entretien prioritaire. Les autres attendent depuis 10 jours.",
          "Quelle conduite ?",
          "Le mettre en tête de liste : réseau du manager.",
          "L'évaluer avec la même grille ; s'il est hors critères, le dire ; ne pas faire passer les autres après lui par faveur.",
          "Écarter sans regarder, par principe d'équité.",
          "Inventer un second poste pour lui.",
          "CONDUITE RECOMMANDÉE : option B. Le réseau n'interdit pas une candidature ; il n'autorise pas un traitement de faveur opaque ni un poste fantôme (L. 5331-3).\n\nJUSTIFICATION : même grille. Transparence du calendrier pour les autres.\n\nRISQUES : cooptation déguisée, inéquité.\n\nERREURS FRÉQUENTES : file VIP ; refus de principe.\n\nQUALIFICATION : bonne pratique ; L. 5331-3 si poste créé pour la façade.\n\nRÉFÉRENCE : L5331-3."
        ),
        ...sit(
          "40",
          "Présentation shortlist au COMEX express",
          "On vous donne 6 minutes en COMEX pour trois finalistes. Votre N+1 vous demande d'enlever la femme de 54 ans « ça va faire trop de questions » et de ne montrer que deux hommes.",
          "Que faites-vous ?",
          "Obéir pour protéger le COMEX.",
          "Refuser d'écarter sur l'âge, présenter les trois sur des critères professionnels, et alerter RH.",
          "Présenter les trois mais en dévalorisant oralement la candidate.",
          "Dire qu'il n'y a que deux candidats.",
          "CONDUITE RECOMMANDÉE : option B. Écarter une personne en raison de l'âge est une discrimination (L. 1132-1). Mentir sur le nombre de finalistes est une faute.\n\nJUSTIFICATION : votre rôle n'est pas de pré-laver le COMEX des femmes de 54 ans.\n\nRISQUES : discrimination caractérisée, faux process.\n\nERREURS FRÉQUENTES : anticipation du biais du COMEX = reproduction du biais.\n\nQUALIFICATION : obligation L. 1132-1.\n\nRÉFÉRENCE : L1132-1."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Départager sur le domicile. Coder le feeling. Truquer la grille. Process alibi. Anticiper les biais du COMEX."
        ),
        h("Mise en pratique"),
        t(
          "Pour S31, rédigez cinq lignes de recommandation au manager : deux écarts professionnels, une proposition de départage, un critère que vous refusez."
        ),
        h("Correction détaillée"),
        t(
          "La recommandation nomme WMS vs communication client, propose une mise en situation planning/relance transporteur, et refuse explicitement le lieu de résidence comme critère, en citant L. 1132-1 sans faire un cours de droit de vingt minutes."
        ),
      ],
    }),
    lesson({
      title: "Non-discrimination et questions interdites",
      description:
        "Dix situations sur les critères protégés, la grossesse, la photo, le handicap et les questions du manager.",
      minutes: 34,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez interrompre une question illicite, traiter une photo de CV, un handicap, une grossesse, un prénom, un signe religieux, sans « bon sens » qui viole L. 1132-1 et L. 1221-6."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "L. 1132-1 interdit d'écarter une personne d'un recrutement à raison de critères protégés (origine, sexe, grossesse, âge, handicap, apparence, nom, lieu de résidence, opinions, etc.). L. 1221-6 limite les informations demandées à celles qui ont un lien direct et nécessaire avec l'emploi. Une exception « le poste est physique donc on peut refuser une femme enceinte » est fausse. Un aménagement de poste se discute avec les acteurs compétents (RH, médecine du travail le moment venu), pas par un tri à l'embauche sur la santé ou la grossesse."
        ),
        h("Méthode opérationnelle"),
        t(
          "Question illicite : vous interrompez, vous recadrez, vous tracez. Vous ne riez pas. Vous ne « traduisez » pas la question en version soft pour obtenir l'info quand même."
        ),
        h("Bibliothèque de situations S41 à S50"),
        ...sit(
          "41",
          "Question sur une grossesse",
          "En entretien, le manager demande à une candidate : « Vous prévoyez des enfants bientôt ? Le poste est physique, on ne peut pas se permettre un arrêt. » La candidate vous regarder.",
          "Quelle conduite ?",
          "Laisser le manager : le poste est physique, c'est du bon sens.",
          "Interrompre, indiquer que la question n'est pas autorisée, recentrer sur les aptitudes professionnelles, et reprendre avec RH.",
          "Reformuler : « Êtes-vous disponible les 24 prochains mois sans interruption ? »",
          "Noter la réponse pour « anticiper l'organisation ».",
          "CONDUITE RECOMMANDÉE : option B. Refuser une femme enceinte, y compris si le poste est physique, n'est pas une option légale. La grossesse et la situation de famille sont des critères protégés (L. 1132-1). La reformulation « disponible 24 mois » vise le même objet illicite.\n\nJUSTIFICATION : L. 1221-6 : seules les informations en lien avec l'emploi. L'organisation d'un arrêt se gère le moment venu, comme pour tout salarié.\n\nRISQUES : discrimination caractérisée, preuve dans la salle.\n\nERREURS FRÉQUENTES : exception « poste physique » ; question soft.\n\nQUALIFICATION : obligation légale L. 1132-1, L. 1221-6.\n\nRÉFÉRENCE : L1132-1, L1221-6."
        ),
        ...sit(
          "42",
          "Photo sur le CV",
          "Un manager vous dit : « Enlève tous les CV sans photo, et ceux où la personne ne fait pas sérieuse. » Plusieurs CV ont une photo. L'un d'eux montre une personne noire ; le manager a déjà commenté « ça va pas passer avec les clients du Nord ».",
          "Que faites-vous ?",
          "Trier sur la photo : l'image fait partie du métier.",
          "Refuser tout tri sur la photo ou l'apparence, évaluer les compétences, et alerter RH sur le propos relatif aux clients.",
          "Garder les photos mais « ne pas s'en servir » tout en les laissant au manager.",
          "Exiger une photo de tous pour égaliser.",
          "CONDUITE RECOMMANDÉE : option B. Apparence physique et origine (vraie ou supposée) sont protégées (L. 1132-1). Exiger une photo n'égalise rien : cela augmente le risque. Vous ne pouvez pas « ne pas vous en servir » si vous la laissez comme filtre.\n\nJUSTIFICATION : L. 1221-6 : la photo n'est en général pas une information nécessaire à l'appréciation des aptitudes (hors métiers d'apparence très spécifiques, non concernés ici).\n\nRISQUES : discrimination raciale et d'apparence.\n\nERREURS FRÉQUENTES : « les clients ne sont pas prêts » ; photo obligatoire.\n\nQUALIFICATION : obligation L. 1132-1, L. 1221-6.\n\nRÉFÉRENCE : L1132-1, L1221-6."
        ),
        ...sit(
          "43",
          "Candidat en situation de handicap",
          "Un candidat mentionne une RQTH et demande si un aménagement d'horaire est envisageable. Le manager dit : « On n'est pas équipés, recale. » Aucune analyse du poste n'a été faite. Le candidat a les compétences.",
          "Quelle conduite ?",
          "Recaler : l'entreprise n'est pas « équipée ».",
          "Ne pas écarter du seul fait du handicap ; analyser le poste, saisir RH / référent handicap, et évaluer les aptitudes professionnelles.",
          "Le convoquer en entretien « diversité » plus long que les autres, avec des questions médicales.",
          "Exiger le détail médical pour « savoir à quoi s'en tenir ».",
          "CONDUITE RECOMMANDÉE : option B. Le handicap est un critère protégé (L. 1132-1). L'employeur a des obligations d'emploi des travailleurs handicapés et d'aménagement raisonnable dans le cadre légal applicable : vous ne tranchez pas « on n'est pas équipés » tout seul. Vous ne collectez pas le dossier médical.\n\nJUSTIFICATION : L. 1221-6 : pas d'informations santé hors lien nécessaire ; la santé est un critère protégé.\n\nRISQUES : discrimination ; collecte excessive (RGPD / CNIL).\n\nERREURS FRÉQUENTES : recalé automatique ; questions médicales.\n\nQUALIFICATION : obligation L. 1132-1, L. 1221-6 ; politique interne handicap ; CNIL (minimisation).\n\nRÉFÉRENCE : L1132-1, L1221-6, CNIL-guide."
        ),
        ...sit(
          "44",
          "Annonce « jeune dynamique »",
          "Le manager a rédigé : « Cherche jeune dynamique, 25-30 ans, native French, bonne présentation. » Il veut publier aujourd'hui.",
          "Que faites-vous ?",
          "Publier : c'est le vocabulaire du métier.",
          "Refuser la publication, réécrire sans âge, sexe, apparence ni exigence de langue maternelle, et expliquer les interdits.",
          "Publier en anglais pour contourner.",
          "Garder « jeune » mais enlever les âges chiffrés.",
          "CONDUITE RECOMMANDÉE : option B. L'offre ne doit pas mentionner le sexe / situation de famille (L. 5331-2 et textes liés). Âge, apparence, origine, langue autre que le français comme critère d'écartement : L. 1132-1. « Native French » vise souvent l'origine. « Jeune » reste un filtre d'âge.\n\nJUSTIFICATION : L. 5331-4 : offre en français si le travail s'effectue en France ; publier en anglais pour contourner n'efface pas l'interdit.\n\nRISQUES : offre illicite, discrimination.\n\nERREURS FRÉQUENTES : cosmétique (« jeune » sans chiffres) ; langue maternelle.\n\nQUALIFICATION : obligations L. 1132-1, L. 5331-2, L. 5331-4.\n\nRÉFÉRENCE : L1132-1, L5331-2, L5331-4."
        ),
        ...sit(
          "45",
          "Prénom, nom et « clients du coin »",
          "Un manager écarte un CV : « Le nom ne va pas passer auprès des agriculteurs. » Le parcours est solide.",
          "Quelle conduite ?",
          "Suivre le manager : il connaît le terrain.",
          "Refuser l'écartement fondé sur le nom, recadrer, et poursuivre l'évaluation professionnelle.",
          "Proposer au candidat d'utiliser un prénom d'usage « plus local ».",
          "Le recaler en invoquant un « manque de réseau local » inventé.",
          "CONDUITE RECOMMANDÉE : option B. Le nom de famille et l'origine vraie ou supposée sont protégés (L. 1132-1). Demander un prénom d'usage est une discrimination déguisée. Inventer un motif est un mensonge.\n\nJUSTIFICATION : les clients n'effacent pas la loi.\n\nRISQUES : discrimination, preuve écrite si le motif est dans le CRM.\n\nERREURS FRÉQUENTES : « réalisme commercial » ; motif de substitution.\n\nQUALIFICATION : obligation L. 1132-1.\n\nRÉFÉRENCE : L1132-1."
        ),
        ...sit(
          "46",
          "Signe religieux visible en entretien",
          "Une candidate porte un foulard. Après l'entretien, le manager dit : « Très bien, mais le foulard, en entreprise on est laïcs, recale. » Il n'existe pas de règle interne écrite applicable aux salariés, et encore moins un motif d'écarter une candidate sur ses convictions religieuses.",
          "Que faites-vous ?",
          "Recaler : la laïcité s'applique à toutes les entreprises.",
          "Rappeler que les convictions religieuses sont un critère protégé, qu'une entreprise privée n'est pas l'administration, et saisir RH avant toute décision de tenue.",
          "Lui demander si elle peut « l'enlever le jour J ».",
          "Noter « problème d'image » dans la grille.",
          "CONDUITE RECOMMANDÉE : option B. Convictions religieuses : L. 1132-1. Vous n'inventez pas un régime de laïcité du secteur privé. Toute règle de neutralité, si elle existe, est un sujet RH / juridique, pas un tri junior. Demander d'enlever le foulard pour être embauchée est discriminatoire.\n\nJUSTIFICATION : ne jouez pas au juriste de la neutralité. Alertez.\n\nRISQUES : discrimination religieuse.\n\nERREURS FRÉQUENTES : « on est laïcs » ; case image.\n\nQUALIFICATION : obligation L. 1132-1 ; politique interne à faire qualifier par RH, pas à inventer.\n\nRÉFÉRENCE : L1132-1."
        ),
        ...sit(
          "47",
          "Âge : « trop senior » / « trop junior »",
          "Deux CV : 24 ans et 58 ans. Le manager : « Le jeune, il va partir ; le vieux, il va être malade. Prends 35-40. » Les compétences ne sont pas lues.",
          "Quelle conduite ?",
          "Cibler 35-40 ans : c'est le bon ratio risque/prix.",
          "Évaluer les compétences sans filtre d'âge, et refuser les stéréotypes santé / fidélité liés à l'âge.",
          "Garder les deux pour « l'équilibre intergénérationnel » affiché, sans les évaluer.",
          "Écarter les deux et chercher 35-40 via LinkedIn filtres âge.",
          "CONDUITE RECOMMANDÉE : option B. L'âge est un critère protégé. L'état de santé aussi. Les filtres LinkedIn d'âge, si vous les utilisez pour écarter, reproduisent la discrimination.\n\nJUSTIFICATION : L. 1132-1. Le « équilibre » de façade n'est pas une évaluation.\n\nRISQUES : discrimination directe.\n\nERREURS FRÉQUENTES : pyramide des âges comme brief ; filtres plateforme.\n\nQUALIFICATION : obligation L. 1132-1.\n\nRÉFÉRENCE : L1132-1."
        ),
        ...sit(
          "48",
          "Entretien qui dérape : questions illicites en rafale",
          "Le manager enchaîne : situation familiale, crédit immobilier, syndicat dans le précédent poste, opinions politiques « pour voir si ça va matcher l'équipe ». Vous êtes assis à côté.",
          "Que faites-vous ?",
          "Laisser finir pour ne pas le humilier en public.",
          "Interrompre clairement, recentrer, protéger le candidat, et signaler à RH après coup avec des faits.",
          "Répondre à la place du candidat pour « déminer ».",
          "Noter toutes les réponses, on ne sait jamais.",
          "CONDUITE RECOMMANDÉE : option B. Activités syndicales, opinions politiques, situation de famille : L. 1132-1. L. 1221-6 : pas de lien nécessaire. Rester silencieux vous rend complice opérationnel. Noter ces réponses est une collecte illicite (RGPD).\n\nJUSTIFICATION : interruption calme mais nette. Debrief RH factuel.\n\nRISQUES : discrimination, données excessives.\n\nERREURS FRÉQUENTES : politesse = silence ; notes « pour le dossier ».\n\nQUALIFICATION : obligations L. 1132-1, L. 1221-6, CNIL minimisation.\n\nRÉFÉRENCE : L1132-1, L1221-6, CNIL-guide."
        ),
        ...sit(
          "49",
          "Apparence, tatouage, piercing",
          "Poste de coordinateur interne, sans contact prestige particulier. Le manager recale : « Les tatouages, ce n'est pas notre image. »",
          "Quelle conduite ?",
          "Suivre l'image de l'entreprise.",
          "Refuser un écartement fondé sur l'apparence physique, sauf exigence professionnelle réelle, proportionnée et non discriminatoire validée par RH — ce qui n'est pas le cas ici.",
          "Demander au candidat de les cacher en entretien et « on verra ».",
          "Le recaler pour « non-conformité culturelle ».",
          "CONDUITE RECOMMANDÉE : option B. Apparence physique : L. 1132-1. Un coordinateur interne n'a pas une exigence d'apparence de type mannequin (exceptions d'offres très limitées, artistes / mannequins — L. 5331-2).\n\nJUSTIFICATION : « image » est souvent un biais. Demander de cacher, c'est encore juger l'apparence.\n\nRISQUES : discrimination.\n\nERREURS FRÉQUENTES : culture d'entreprise = clone esthétique.\n\nQUALIFICATION : obligation L. 1132-1.\n\nRÉFÉRENCE : L1132-1, L5331-2."
        ),
        ...sit(
          "50",
          "Candidat syndiqué ou lanceur d'alerte",
          "Un CV mentionne un mandat de représentant du personnel. Un autre, en entretien, indique avoir été facilitateur auprès d'un lanceur d'alerte. Le manager : « On ne va pas s'attirer ça. »",
          "Que faites-vous ?",
          "Écarter les deux : trop de risque social.",
          "Interdire ce motif d'écartement, recentrer sur les aptitudes, et alerter RH si le manager insiste.",
          "Noter « profil conflictuel » comme critère métier.",
          "Poser des questions sur les dossiers d'alerte pour « vérifier la loyauté ».",
          "CONDUITE RECOMMANDÉE : option B. Activités syndicales, mandat, qualité de lanceur d'alerte, facilitateur ou personne en lien : L. 1132-1. Interroger le contenu d'une alerte n'a pas de lien nécessaire avec l'emploi (L. 1221-6) et est déloyal.\n\nJUSTIFICATION : le « risque social » n'est pas un critère d'aptitude.\n\nRISQUES : discrimination, collecte excessive.\n\nERREURS FRÉQUENTES : code « conflictuel » ; investigation de l'alerte.\n\nQUALIFICATION : obligation L. 1132-1, L. 1221-6.\n\nRÉFÉRENCE : L1132-1, L1221-6."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Exception « poste physique » pour la grossesse. Trier sur la photo. « Les clients ne sont pas prêts ». Laïcité improvisée. Silence pendant un dérapage."
        ),
        h("Mise en pratique"),
        t(
          "Rédigez la phrase d'interruption pour S41 et S48 (deux phrases orales, calmes, fermes) et le mail d'alerte RH (faits, citations, sans commentaire moralisateur)."
        ),
        h("Correction détaillée"),
        t(
          "Interruption : « Cette question n'est pas autorisée, elle n'a pas de lien avec les aptitudes pour le poste. Revenons aux missions de coordination. » Mail RH : date, personnes présentes, questions posées, votre interruption, réaction du manager, CV non tranché. Pas de « il est nul », pas de diagnostic psychologique."
        ),
      ],
    }),
    lesson({
      title: "RGPD, données, LinkedIn et outils",
      description:
        "Dix situations sur le droit d'accès, la CVthèque, le stalking LinkedIn, l'IA et les transferts de CV.",
      minutes: 32,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous traitez une demande d'accès, vous ne survolez pas la vie privée en ligne, vous n'utilisez pas une IA comme décisionnaire opaque, et vous ne transférez pas un CV « entre copains »."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le candidat est informé des méthodes (L. 1221-8). Les méthodes sont pertinentes (L. 1221-9). La CNIL recommande un vivier jusqu'à 2 ans à compter du dernier contact, avec information et opposition — ce n'est pas une durée unique obligatoire pour tous les traitements. L'archivage intermédiaire de 5 ans à compter de la date à laquelle le poste a été pourvu, pour les non-retenus, à des fins probatoires, est présenté par le référentiel CNIL 2026 comme une obligation liée à L. 1134-5. Distinguez base active, archivage et vivier. Ne laissez pas les CV « dans la boîte mail perso »."
        ),
        h("Méthode opérationnelle"),
        t(
          "Demande d'accès : process RH, identité, réponse dans le cadre RGPD, pas de bricolage. LinkedIn : informations professionnelles pertinentes, pas le compte personnel, pas les photos de vacances. IA : outil d'aide, information du candidat, contrôle humain, pas de critère protégé."
        ),
        h("Bibliothèque de situations S51 à S60"),
        ...sit(
          "51",
          "Droit d'accès RGPD",
          "Un candidat non retenu demande « toutes les données, notes, e-mails, enregistrements, scoring IA et commentaires du manager ». Votre CRM contient le commentaire « trop vieux, pas le feeling ». Vous n'avez pas de procédure personnelle, les RH si.",
          "Quelle conduite ?",
          "Envoyer tout le CRM en PDF, commentaire compris, sans RH.",
          "Orienter vers le process RH / DPO, ne pas détruire les traces, faire corriger le commentaire illicite, et ne pas répondre en amateur.",
          "Supprimer le dossier pour « n'avoir plus rien à donner ».",
          "Ignorer : un non-retenu n'a pas de droit d'accès.",
          "CONDUITE RECOMMANDÉE : option B. Le droit d'accès existe. La destruction pour échapper à la demande est une faute. Le commentaire d'âge est illicite : il se recadre, il ne se « lave » pas par la suppression opportuniste de tout le dossier (des obligations de conservation probatoire peuvent s'appliquer — L. 1134-5 / référentiel CNIL).\n\nJUSTIFICATION : vous n'êtes pas le DPO. Vous alertez. Vous ne mentez pas « nous n'avons rien ».\n\nRISQUES : manquement RGPD, preuve de discrimination, destruction de preuve.\n\nERREURS FRÉQUENTES : ZIP sauvage ; oubli volontaire.\n\nQUALIFICATION : RGPD (obligation) ; CNIL ; L. 1132-1 ; conservation L. 1134-5 / CNIL-referentiel-2026.\n\nRÉFÉRENCE : CNIL-guide, CNIL-referentiel-2026, L1134-5, L1132-1."
        ),
        ...sit(
          "52",
          "Manager qui demande des informations personnelles",
          "Le manager vous écrit : « Avant l'entretien, file-moi son âge, s'il a des enfants, et son adresse exacte, je veux savoir s'il tiendra les 5 h du matin. »",
          "Que faites-vous ?",
          "Extraire l'état civil du CV et répondre.",
          "Refuser ces informations, proposer des questions professionnelles sur les contraintes du poste (horaires, astreintes) posées au candidat, sans enquête familiale.",
          "Regarder Facebook et résumer.",
          "Donner l'adresse mais pas l'âge, « compromis ».",
          "CONDUITE RECOMMANDÉE : option B. Âge, situation de famille, lieu de résidence : critères protégés (L. 1132-1). L. 1221-6 : pas d'informations sans lien nécessaire. Les horaires du poste se posent comme exigence du job, pas comme enquête sur les enfants.\n\nJUSTIFICATION : Facebook n'est pas un outil RH. Le compromis sur l'adresse reste un critère protégé.\n\nRISQUES : discrimination, collecte excessive.\n\nERREURS FRÉQUENTES : service rendu au manager = infraction.\n\nQUALIFICATION : L. 1132-1, L. 1221-6, CNIL.\n\nRÉFÉRENCE : L1132-1, L1221-6, CNIL-guide."
        ),
        ...sit(
          "53",
          "LinkedIn stalking excessif",
          "Votre collègue vous montre qu'il a ouvert le compte Instagram du candidat, les photos de mariage, et un like sur un post politique. Il veut mettre ça dans le CR : « profil engagé, vie désordonnée ».",
          "Quelle conduite ?",
          "Intégrer : tout ce qui est public est utilisable.",
          "Refuser d'utiliser ces éléments, les sortir du dossier, et rappeler que seules les informations pertinentes au poste s'apprécient.",
          "Les garder sans les écrire.",
          "Demander au candidat de justifier ses posts.",
          "CONDUITE RECOMMANDÉE : option B. Public ≠ pertinent ≠ licite. Opinions politiques : L. 1132-1. L. 1221-6 et L. 1221-9 : lien avec l'emploi, méthodes pertinentes. CNIL : minimisation, pas de fouille de la vie privée.\n\nJUSTIFICATION : un CR qui parle de mariage et de politique est une pièce à risque.\n\nRISQUES : discrimination, collecte excessive, atteinte à la vie privée.\n\nERREURS FRÉQUENTES : OSINT récréatif ; « c'est public ».\n\nQUALIFICATION : obligations L. 1132-1, L. 1221-6, L. 1221-9 ; recommandation CNIL.\n\nRÉFÉRENCE : L1132-1, L1221-6, L1221-9, CNIL-guide."
        ),
        ...sit(
          "54",
          "IA qui classe les CV",
          "Un outil classe les CV. Le top 10 ne contient aucune femme. Le paramétrage n'est pas documenté. Le manager veut n'ouvrir que le top 10. Aucun candidat n'a été informé d'un scoring automatisé.",
          "Que faites-vous ?",
          "Suivre le top 10 : l'outil est objectif.",
          "Ne pas limiter l'examen au ranking opaque, informer selon L. 1221-8, contrôler les biais, et alerter RH / DPO avant tout usage décisionnel.",
          "Renommer l'IA « aide à la lecture » et continuer.",
          "Alimenter l'IA avec le genre pour « rééquilibrer » sans règle.",
          "CONDUITE RECOMMANDÉE : option B. L. 1221-8 : information préalable sur les méthodes. L. 1221-9 : pertinence. Un classement qui élimine les femmes est un signal d'alerte de discrimination (L. 1132-1). L'IA n'est pas « objective » par nature.\n\nJUSTIFICATION : contrôle humain réel. Informer. Documenter. Ne pas bricoler le genre dans le modèle.\n\nRISQUES : discrimination algorithmique, défaut d'information, RGPD (décision automatisée / profilage : à faire qualifier par DPO, vous n'inventez pas l'article).\n\nERREURS FRÉQUENTES : foi dans le score ; cosmétique sémantique.\n\nQUALIFICATION : L. 1221-8, L. 1221-9, L. 1132-1 ; CNIL ; politique interne outils.\n\nRÉFÉRENCE : L1221-8, L1221-9, L1132-1, CNIL-guide."
        ),
        ...sit(
          "55",
          "Transfert de CV à une autre filiale",
          "Votre collègue d'une filiale belge vous demande « tous les CV d'automaticiens des 18 mois, on recrute aussi ». Aucun candidat n'a été informé d'un transfert hors du process initial.",
          "Quelle conduite ?",
          "Envoyer le fichier Excel, c'est le même groupe.",
          "Refuser le transfert brut, passer par RH / DPO : finalité, information, base, éventuellement nouvel accord ou information selon le cadre.",
          "Envoyer seulement les noms et LinkedIn.",
          "Dire aux candidats que leur CV « circule dans le groupe » alors que ce n'est pas le process.",
          "CONDUITE RECOMMANDÉE : option B. Changement de finalité / destinataire = sujet RGPD. « Même groupe » n'est pas une autorisation magique. Mentir sur la circulation n'arrange rien.\n\nJUSTIFICATION : CNIL recrutement : information, finalité, destinataires. Vous ne bricolez pas un fichier de 18 mois.\n\nRISQUES : transfert illicite, perte de confiance.\n\nERREURS FRÉQUENTES : groupe = un seul responsable ; extract LinkedIn comme astuce.\n\nQUALIFICATION : RGPD / CNIL ; politique interne groupe.\n\nRÉFÉRENCE : CNIL-guide."
        ),
        ...sit(
          "56",
          "Candidat s'oppose à la conservation",
          "Un non-retenu écrit : « Supprimez tout. » Le poste vient d'être pourvu. Le référentiel CNIL 2026 indique un archivage intermédiaire de 5 ans à des fins probatoires (L. 1134-5). Le candidat n'est pas en vivier actif.",
          "Que faites-vous ?",
          "Tout supprimer dans l'heure pour faire plaisir.",
          "Accuser réception, transmettre au DPO / RH, distinguer vivier (opposition) et archivage probatoire, et ne pas inventer que « le RGPD oblige à tout garder 5 ans en base active ».",
          "Le laisser en base active six ans « au cas où ».",
          "Répondre que c'est impossible, point.",
          "CONDUITE RECOMMANDÉE : option B. L'opposition au vivier n'est pas la même chose que l'archivage légal/probatoire. Vous ne décidez pas seul. Vous n'affirmez pas une conservation active infinie. Les 2 ans vivier sont une recommandation CNIL, pas une durée unique RGPD.\n\nJUSTIFICATION : CNIL-referentiel-2026 + L. 1134-5. Distinguer.\n\nRISQUES : suppression de pièces utiles ; conservation excessive en actif ; réponse fausse.\n\nERREURS FRÉQUENTES : tout effacer ; tout garder en CVthèque.\n\nQUALIFICATION : obligation (archivage probatoire selon référentiel / L. 1134-5) ; recommandation (vivier 2 ans) ; RGPD (droits).\n\nRÉFÉRENCE : CNIL-referentiel-2026, CNIL-guide, L1134-5."
        ),
        ...sit(
          "57",
          "Vivier : recontacter un CV de 18 mois",
          "Vous trouvez un CV de 18 mois, dernier contact positif. Le candidat n'a pas été réinformé depuis. Un poste proche ouvre. Votre fichier n'a pas de case opposition.",
          "Quelle conduite ?",
          "L'appeler en disant « vous avez postulé hier ».",
          "Le recontacter en rappelant l'origine du CV, le nouveau poste, et la possibilité de s'opposer à rester en vivier.",
          "Ne jamais recontacter après 12 mois, « c'est illégal ».",
          "Le mettre en process sans le prévenir, « on lui dira s'il est pris ».",
          "CONDUITE RECOMMANDÉE : option B. 18 mois < 2 ans de la recommandation CNIL vivier, mais ce n'est pas un droit de mentir sur la date. Inventer un délai légal de 12 mois est faux. Un process sans information viole L. 1221-8 et le RGPD.\n\nJUSTIFICATION : loyauté. Information. Opposition.\n\nRISQUES : mensonge, conservation sans info.\n\nERREURS FRÉQUENTES : délai inventé ; « postulé hier ».\n\nQUALIFICATION : recommandation CNIL 2 ans ; obligation d'information ; L. 1221-8.\n\nRÉFÉRENCE : CNIL-guide, L1221-8."
        ),
        ...sit(
          "58",
          "CV envoyé au mauvais destinataire",
          "Vous avez envoyé par erreur un CV complet (téléphone, adresse) à un manager d'un autre service, hors process. L'e-mail est parti.",
          "Que faites-vous ?",
          "Espérer qu'il ne lise pas.",
          "Faire rappeler l'e-mail si possible, demander la suppression à l'erroné, signaler selon la procédure interne d'incident, et ne pas cacher le fait à RH / DPO.",
          "Prévenir le candidat que « son CV circule, c'est positif ».",
          "Renvoyer le même CV à toute l'usine pour « égaliser ».",
          "CONDUITE RECOMMANDÉE : option B. C'est un incident de données. La procédure interne (et éventuellement la notification, qui n'est pas de votre ressort isolé) s'applique. Mentir au candidat en positif est déloyal.\n\nJUSTIFICATION : minimiser l'impact, tracer, apprendre (double validation des destinataires).\n\nRISQUES : diffusion de données, perte de confiance, manquement RGPD.\n\nERREURS FRÉQUENTES : silence ; spin marketing.\n\nQUALIFICATION : RGPD (incident) ; politique interne ; bonne pratique.\n\nRÉFÉRENCE : CNIL-guide."
        ),
        ...sit(
          "59",
          "Enregistrement de l'entretien",
          "Un candidat prévient qu'il enregistre l'entretien. Le manager, lui, enregistre en secret « pour se souvenir ». Aucune information préalable n'a été donnée sur un enregistrement employeur.",
          "Quelle conduite ?",
          "Laisser les deux enregistrer, c'est équitable.",
          "Stopper l'enregistrement secret, appliquer la politique interne (en général : pas d'enregistrement ou information + base + sécurité), et ne pas improviser un fichier audio de recrutement.",
          "Enregistrer aussi de votre côté « pour la preuve ».",
          "Exiger que le candidat efface, sans recadrer le manager.",
          "CONDUITE RECOMMANDÉE : option B. L. 1221-8 : le candidat est informé des méthodes. Un enregistrement secret n'est pas une méthode pertinente assumée. La politique interne et le DPO tranchent. Vous n'ouvrez pas un troisième enregistrement amateur.\n\nJUSTIFICATION : preuve illicite / données excessives / défaut d'information.\n\nRISQUES : RGPD, déloyauté, fichier hors outil.\n\nERREURS FRÉQUENTES : course à l'enregistrement ; deux poids deux mesures.\n\nQUALIFICATION : L. 1221-8, L. 1221-9, CNIL ; politique interne.\n\nRÉFÉRENCE : L1221-8, L1221-9, CNIL-guide."
        ),
        ...sit(
          "60",
          "Test ou mise en situation non annoncée",
          "Le manager sort un cas Excel de 45 minutes non annoncé, « pour voir sous stress ». L'annonce et la convocation ne mentionnaient aucun test. L. 1221-8 exige une information préalable sur les méthodes.",
          "Que faites-vous ?",
          "Laisser faire : le stress est le métier.",
          "Reporter le test, informer le candidat, et ne l'utiliser que s'il est pertinent, identique pour les autres, et annoncé.",
          "Compter le refus du candidat comme un moins.",
          "Donner le cas seulement aux candidats « douteux ».",
          "CONDUITE RECOMMANDÉE : option B. Information préalable (L. 1221-8), pertinence (L. 1221-9), égalité de traitement. Un test surprise réservé aux « douteux » est inéquitable et potentiellement discriminatoire si le doute est un biais.\n\nJUSTIFICATION : vous pouvez tester, vous devez informer.\n\nRISQUES : méthode illicite, inéquité.\n\nERREURS FRÉQUENTES : surprise = authenticité ; test ciblé.\n\nQUALIFICATION : obligations L. 1221-8, L. 1221-9.\n\nRÉFÉRENCE : L1221-8, L1221-9."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "ZIP d'accès sans DPO. Stalking « public ». Foi dans l'IA. Groupe = droit de tout transférer. Inventer un délai de 12 mois. Effacer pour se protéger."
        ),
        h("Mise en pratique"),
        t(
          "Pour S54, listez cinq questions à poser au fournisseur de l'IA et trois mentions d'information candidat, sans jargon vide."
        ),
        h("Correction détaillée"),
        t(
          "Questions : données d'entraînement, critères, taux d'erreur par genre/âge si connu, reprise humaine, conservation. Mentions : existence d'un outil d'aide, pas de décision exclusive, contact DPO, droit d'accès. Vous ne promettez pas une « IA éthique certifiée » sans preuve."
        ),
      ],
    }),
    lesson({
      title: "Incidents de process : annulation, promesse, allégations",
      description:
        "Dix situations sur le poste annulé, l'écrit d'embauche, l'allégation de discrimination et les mensonges de parcours.",
      minutes: 32,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez clôturer un poste annulé sans mensonge, faire qualifier une offre par RH, et traiter une allégation de discrimination sans improvisation ni destruction de preuves."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Service-Public F39588 : l'offre de contrat et la promesse unilatérale de contrat ne sont pas définies par la loi mais encadrées par la jurisprudence. L'offre peut être retirée avant acceptation dans le délai laissé ou un délai raisonnable ; la promesse unilatérale vaut contrat, le retrait s'analyse en licenciement sans cause réelle et sérieuse. Une promesse d'embauche n'est pas obligatoire. Faites valider les écrits. Un poste annulé : L. 5331-3 si vous laissez croire qu'il existe encore."
        ),
        h("Méthode opérationnelle"),
        t(
          "Tout écrit d'embauche passe par RH. Poste annulé : information simultanée des candidats en process. Allégation : faits, conservation, RH, pas de commentaire public."
        ),
        h("Bibliothèque de situations S61 à S70"),
        ...sit(
          "61",
          "Poste annulé en cours de process",
          "Quatre personnes sont en shortlist. La direction gèle le poste. Le manager veut que vous disiez « on n'a pas trouvé le profil » pour ne pas affaiblir sa demande budgétaire l'an prochain.",
          "Quelle conduite ?",
          "Mentir sur le motif : protection interne.",
          "Informer que le poste n'est pas pourvu / est gelé, sans inventer un défaut de profil, et clôturer les données selon les règles.",
          "Ne prévenir personne et laisser l'annonce en ligne.",
          "Promettre une ouverture dans trois mois pour les retenir.",
          "CONDUITE RECOMMANDÉE : option B. Mentir sur le motif blesse inutilement et peut être trompeur (L. 5331-3 : existence de l'emploi). Laisser l'annonce est une allégation d'emploi existant. Promettre trois mois sans décision est un poste fantôme.\n\nJUSTIFICATION : loyauté. Vivier possible si information vraie.\n\nRISQUES : allégation trompeuse, réputation, données actives sans finalité.\n\nERREURS FRÉQUENTES : gel silencieux ; mensonge « profil ».\n\nQUALIFICATION : L. 5331-3 ; CNIL (finalité) ; bonne pratique.\n\nRÉFÉRENCE : L5331-3, CNIL-guide."
        ),
        ...sit(
          "62",
          "Promesse déjà envoyée, besoin de reculer",
          "Un e-mail du manager, copié au candidat, dit : « Nous vous promettons le poste de coordinateur, prise de fonction le 3 novembre, salaire 37 k€. » Le COMEX refuse le budget. Le manager vous demande de « retirer en douce ».",
          "Que faites-vous ?",
          "Retirer en douce et espérer que le candidat n'insiste pas.",
          "Alerter RH / juridique immédiatement : les termes (« nous vous promettons », éléments essentiels) peuvent s'analyser en promesse unilatérale ; vous ne bricolez pas un retrait.",
          "Envoyer un nouvel e-mail : « ce n'était qu'une piste ».",
          "Proposer au candidat de mentir à son employeur actuel en restant.",
          "CONDUITE RECOMMANDÉE : option B. SP-F39588 : une promesse unilatérale peut valoir contrat ; le retrait s'analyse alors en licenciement sans cause réelle et sérieuse. Ce n'est pas un terrain junior. Mentir « piste » aggrave.\n\nJUSTIFICATION : escalation. Conservation des e-mails. Pas de conseil de mentir au candidat.\n\nRISQUES : contentieux prud'homal, mauvaise foi.\n\nERREURS FRÉQUENTES : retrait amateur ; réécriture de l'histoire.\n\nQUALIFICATION : vigilance juridique SP-F39588 (jurisprudence expliquée par Service-Public) ; politique interne qui signe.\n\nRÉFÉRENCE : SP-F39588."
        ),
        ...sit(
          "63",
          "Modèle « offre » vs formulation trop engageante",
          "On vous demande d'envoyer « une promesse d'embauche pour le rassurer avant Noël » alors que le casier administratif n'est pas fini et que RH n'a pas validé. Un modèle d'offre conditionnelle existe.",
          "Quelle conduite ?",
          "Envoyer « je vous promets le poste » pour rassurer.",
          "N'envoyer qu'un écrit validé RH, plutôt une offre clairement identifiée, conditions suspensives visibles, sans vocabulaire de promesse.",
          "Un SMS « c'est bon tu as le job » en attendant.",
          "Rien écrire, tout à l'oral « ça n'engage pas ».",
          "CONDUITE RECOMMANDÉE : option B. Une promesse n'est pas obligatoire (SP-F39588). L'oral n'est pas magiquement inoffensif. Le SMS est un écrit.\n\nJUSTIFICATION : rassurer par un calendrier vrai, pas par un contrat involontaire.\n\nRISQUES : requalification, conditions oubliées.\n\nERREURS FRÉQUENTES : mot « promesse » par générosité ; oral protecteur.\n\nQUALIFICATION : SP-F39588 ; politique interne.\n\nRÉFÉRENCE : SP-F39588."
        ),
        ...sit(
          "64",
          "Allégation de discrimination",
          "Une candidate écrit que son refus est « sexiste et raciste ». Le manager veut répondre : « On a pris un homme, point, arrêtez d'accuser. » Il veut aussi supprimer les notes d'entretien.",
          "Que faites-vous ?",
          "Laisser le manager répondre et nettoyer le CRM.",
          "Ne pas détruire, ne pas répondre sur le fond seul, saisir RH, conserver les pièces, et s'assurer que le refus documenté est professionnel.",
          "Présenter des excuses publiques sur LinkedIn.",
          "Promettre un second poste pour éteindre l'accusation.",
          "CONDUITE RECOMMANDÉE : option B. Destruction de preuves : faute. Réponse agressive : aggravation. Un second poste fantôme : L. 5331-3 et mauvaise foi. Vous n'êtes pas le porte-parole contentieux.\n\nJUSTIFICATION : L. 1132-1 ; conservation L. 1134-5 / CNIL. Polarisation publique inutile.\n\nRISQUES : preuve, diffamation inverse, absence de dossier.\n\nERREURS FRÉQUENTES : purge CRM ; clash e-mail.\n\nQUALIFICATION : L. 1132-1 ; L. 1134-5 ; politique interne.\n\nRÉFÉRENCE : L1132-1, L1134-5, CNIL-referentiel-2026."
        ),
        ...sit(
          "65",
          "Incohérence de dates sur le CV",
          "Un trou de 11 mois apparaît entre deux postes. En préqual, le candidat dit « année sabbatique ». LinkedIn montre un poste sur cette période. Le manager dit « c'est un menteur, recale » sans l'entendre.",
          "Quelle conduite ?",
          "Recaler pour mensonge, sans question.",
          "Confronter calmement l'écart, laisser expliquer, et ne trancher que sur des faits, sans harcèlement ni enquête privée hors sujet.",
          "Appeler l'ancien employeur en secret malgré le refus du candidat d'activer les références maintenant.",
          "Poster l'écart sur un groupe Facebook RH.",
          "CONDUITE RECOMMANDÉE : option B. L'incohérence se travaille. Le mensonge, s'il est établi sur un élément essentiel, est un motif professionnel. L'enquête parallèle et la mise au pilori ne le sont pas.\n\nJUSTIFICATION : L. 1221-6 (bonne foi du candidat, questions liées à l'emploi) ; loyauté des méthodes (L. 1221-8 / L. 1221-9).\n\nRISQUES : diffamation, référence hors accord, biais.\n\nERREURS FRÉQUENTES : tribunal LinkedIn ; recalé immédiat.\n\nQUALIFICATION : bonne pratique ; L. 1221-6, L. 1221-8, L. 1221-9.\n\nRÉFÉRENCE : L1221-6, L1221-8, L1221-9."
        ),
        ...sit(
          "66",
          "Mensonge sur un diplôme",
          "Le candidat a écrit « Master logistique ». Le diplôme produit est une attestation de 40 heures. Il minimise : « Tout le monde gonfle un peu. » Le diplôme n'était pas un must-have, mais l'annonce exigeait honnêteté du parcours. RH n'a pas de politique écrite sur ce cas.",
          "Que faites-vous ?",
          "Passer : ce n'était pas un must-have.",
          "Documenter l'écart, en parler à RH et au manager comme un sujet de loyauté, et ne pas banaliser un faux, sans humiliation publique.",
          "Le menacer de dépôt de plainte dans l'heure.",
          "Le garder et « corriger le CV pour lui ».",
          "CONDUITE RECOMMANDÉE : option B. Un faux n'est pas un détail de wording. Corriger le CV à sa place est une complicité documentaire. La plainte n'est pas votre premier réflexe junior isolé : RH / juridique.\n\nJUSTIFICATION : loyauté, L. 1221-6 (bonne foi). Décision d'employeur.\n\nRISQUES : embauche sur un faux ; accusation hasardeuse.\n\nERREURS FRÉQUENTES : « tout le monde gonfle » ; réécriture complice.\n\nQUALIFICATION : bonne pratique ; politique interne ; L. 1221-6.\n\nRÉFÉRENCE : L1221-6."
        ),
        ...sit(
          "67",
          "Annonce toujours en ligne alors que le poste est pourvu",
          "Le CDI est signé. L'annonce tourne encore. Des candidats postulent. Le manager dit « laisse, ça fait de la réserve ».",
          "Quelle conduite ?",
          "Laisser tourner pour le vivier.",
          "Retirer ou indiquer clairement que le poste est pourvu, et ne collecter un vivier que de façon informée, sans laisser croire à un emploi ouvert.",
          "Répondre à chacun qu'il est en finale.",
          "Transférer les nouveaux CV au manager du site voisin sans information.",
          "CONDUITE RECOMMANDÉE : option B. L. 5331-3 : existence de l'emploi. Vivier : information CNIL, pas un piège à CV.\n\nJUSTIFICATION : une réserve se construit honnêtement.\n\nRISQUES : allégation trompeuse, collecte sans finalité claire.\n\nERREURS FRÉQUENTES : always-on job posting mensonger.\n\nQUALIFICATION : L. 5331-3 ; CNIL.\n\nRÉFÉRENCE : L5331-3, CNIL-guide."
        ),
        ...sit(
          "68",
          "Candidat qui critique violemment son employeur",
          "En entretien, le candidat passe 20 minutes à dénigrer nommément son N+1 actuel (incompétence, alcool, « je peux vous donner des preuves »). Les réponses métier sont moyennes.",
          "Que faites-vous ?",
          "Noter les preuves et les classer.",
          "Recadrer, refuser les pièces sur un tiers, évaluer le professionnalisme et le fond métier, sans colporter.",
          "Recaler automatiquement : un critique n'est jamais embauchable.",
          "Appeler le N+1 pour « vérifier ».",
          "CONDUITE RECOMMANDÉE : option B. Vous n'êtes pas un recueil de dénonciations. Un recalé automatique peut faire rater un signal, mais le dénigrement nommé est un indice de professionnalisme. Appeler le N+1 actuel sans cadre est déloyal et dangereux.\n\nJUSTIFICATION : pertinence (L. 1221-9), minimisation des données d'un tiers.\n\nRISQUES : diffamation, rupture de confidentialité.\n\nERREURS FRÉQUENTES : gossip RH ; recalé moralisateur sans fond.\n\nQUALIFICATION : bonne pratique ; CNIL (données de tiers).\n\nRÉFÉRENCE : CNIL-guide, L1221-9."
        ),
        ...sit(
          "69",
          "Publication LinkedIn trop précise",
          "Votre N+1 veut poster : « On recrute un coordinateur supply pour remplacer Paul D. qui part, process confidentiel, voici les 3 finalistes (photo). » Le remplacement n'est pas connu de l'équipe. Les finalistes n'ont pas consenti à une publication.",
          "Quelle conduite ?",
          "Poster : ça modernise la marque employeur.",
          "Refuser : confidentialité du salarié sortant, données des candidats, recrutement éventuellement confidentiel.",
          "Poster sans les photos mais avec les noms.",
          "Demander aux finalistes en 10 minutes un « ok » oral flou.",
          "CONDUITE RECOMMANDÉE : option B. Données des candidats (CNIL), vie professionnelle du sortant, possible recrutement confidentiel. Un ok oral précipité n'est pas un consentement éclairé pour une publication nominative.\n\nJUSTIFICATION : marque employeur ≠ exposition des personnes.\n\nRISQUES : RGPD, conflit interne, perte de finalistes.\n\nERREURS FRÉQUENTES : content d'abord.\n\nQUALIFICATION : RGPD / CNIL ; bonne pratique confidentialité ; politique interne communication.\n\nRÉFÉRENCE : CNIL-guide."
        ),
        ...sit(
          "70",
          "Rumeur interne sur le recrutement",
          "L'open space dit que « le poste est déjà promis au neveu d'un chef ». Deux candidats externes sont en process réel. Un salarié vous demande confirmation. Vous n'avez pas d'information de favoritisme avéré.",
          "Que faites-vous ?",
          "Démentir avec force alors que vous ne savez pas.",
          "Ne pas alimenter la rumeur, garantir un process équitable tracé, et alerter RH si un conflit d'intérêts apparaît.",
          "Confirmer « c'est possible, ici c'est comme ça ».",
          "Arrêter le process externe pour « éviter le scandale ».",
          "CONDUITE RECOMMANDÉE : option B. Vous ne démentez pas ce que vous ignorez, vous ne confirmez pas une rumeur, vous ne sacrifiez pas des candidats pour une rumeur. Vous tracez.\n\nJUSTIFICATION : équité réelle > communication de couloir.\n\nRISQUES : process alibi ; diffamation ; panique.\n\nERREURS FRÉQUENTES : participation au gossip ; gel injustifié.\n\nQUALIFICATION : bonne pratique ; politique interne déontologie."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Mentir sur un gel. Retirer une promesse « en douce ». Purger le CRM. Tribunal LinkedIn. Post LinkedIn nominatif."
        ),
        h("Mise en pratique"),
        t(
          "Rédigez le mail candidats de S61 (poste gelé) et la première phrase d'escalade RH de S62."
        ),
        h("Correction détaillée"),
        t(
          "S61 : le poste est gelé par décision de l'entreprise, leur candidature a été étudiée, conservation / vivier selon règles, remerciements. Pas de « votre profil n'était pas le bon ». S62 : « Un écrit employant le mot promettre et les éléments essentiels a été envoyé au candidat ; je n'effectue aucun retrait sans consigne RH / juridique. Pièces jointes. »"
        ),
      ],
    }),
    lesson({
      title: "Recrutements spécifiques : interne, intérim, confidentiel, volume",
      description:
        "Dix situations sur le handicap déjà couvert, l'intérim, le confidentiel, la cooptation, l'alternance et le volume.",
      minutes: 30,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous distinguez intérim et CDI, gérez un recrutement confidentiel sans mensonge, traitez une cooptation du neveu du DG, et ne transformez pas un volume en usine à biais."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "L'intérim est un canal et un contrat spécifiques, pas un CDI « plus rapide ». Un recrutement confidentiel (remplacement non annoncé) n'autorise pas une fausse annonce. La cooptation est un canal : elle n'efface ni la grille ni L. 1132-1. Un mineur / un alternant : cadre RH, pas d'improvisation sur le temps de travail. Vous n'inventez pas de délai légal d'embauche."
        ),
        h("Méthode opérationnelle"),
        t(
          "Canal ≠ critère. Confidentiel : formulation vraie (nouveau poste / renforcement) ou pas d'annonce publique. Cooptation : même process. Volume : mêmes questions, mêmes grilles."
        ),
        h("Bibliothèque de situations S71 à S80"),
        ...sit(
          "71",
          "Intérim versus CDI",
          "Le manager veut un CDI « parce que l'intérim c'est trop cher » alors que le besoin est un pic de 4 mois et que le budget d'un CDI n'est pas ouvert à 12 mois. Une agence partenaire existe. Les RH n'ont pas tranché.",
          "Quelle conduite ?",
          "Lancer le CDI : le manager a raison sur le coût.",
          "Objectiver pic vs besoin structurel, faire qualifier le contrat par RH, et ne pas vendre un CDI à un candidat si le besoin est un pic assumé.",
          "Promettre un CDI au candidat d'agence pour le faire basculer.",
          "Dire aux candidats CDI que c'est un CDD, on verra.",
          "CONDUITE RECOMMANDÉE : option B. Le type de contrat est une décision d'employeur. Vendre un CDI pour appâter un intérimaire, ou l'inverse, est trompeur (L. 5331-3 : nature de l'emploi).\n\nJUSTIFICATION : coût de l'intérim vs risque d'un CDI sans charge. Pas de mensonge de nature de contrat.\n\nRISQUES : allégation trompeuse, contentieux de requalification (sujet RH, vous n'inventez pas les règles).\n\nERREURS FRÉQUENTES : CDI par facilité ; appât.\n\nQUALIFICATION : L. 5331-3 ; politique interne ; bonne pratique.\n\nRÉFÉRENCE : L5331-3."
        ),
        ...sit(
          "72",
          "Recrutement confidentiel",
          "Vous devez remplacer un responsable magasin qui n'est pas au courant. Le manager veut une annonce « recherche responsable magasin pour ouverture d'un second site » alors qu'il n'y a pas de second site.",
          "Que faites-vous ?",
          "Publier la fausse ouverture : la confidentialité d'abord.",
          "Refuser l'allégation fausse, proposer un canal discret (cabinet, approches ciblées, intitulé vrai non mensonger) et un cadrage de qui est informé.",
          "Prévenir le titulaire « entre nous ».",
          "Publier sans intitulé, seulement « poste à pourvoir ».",
          "CONDUITE RECOMMANDÉE : option B. L. 5331-3 : existence et nature de l'emploi. La confidentialité se traite par le canal, pas par un mensonge. Prévenir le titulaire contre la consigne n'est pas votre initiative isolée.\n\nJUSTIFICATION : approches nominatives, cabinet, NDA interne. Pas de second site fictif.\n\nRISQUES : offre trompeuse, rumeur, rupture de confiance si le titulaire l'apprend par L'annonce.\n\nERREURS FRÉQUENTES : cover story ; indiscrétion.\n\nQUALIFICATION : obligation L. 5331-3 ; bonne pratique de confidentialité.\n\nRÉFÉRENCE : L5331-3."
        ),
        ...sit(
          "73",
          "Cooptation du neveu du DG",
          "Le DG envoie le CV de son neveu pour le poste de coordinateur. « Fais-lui passer les entretiens, c'est un bon gamin. » Le neveu a un DUT hors cible. Deux autres candidats sont meilleurs sur la grille.",
          "Quelle conduite ?",
          "Le retenir : c'est le neveu du DG.",
          "Même grille, même process, tracer le conflit d'intérêts, et ne pas maquiller les notes. La décision d'employeur, si elle déroge, n'est pas la vôtre à falsifier.",
          "Écarter sans entretien pour « éviter le soupçon ».",
          "Faire un entretien plus dur pour « montrer l'équité ».",
          "CONDUITE RECOMMANDÉE : option B. La cooptation n'est pas nulle ; le favoritisme maquillé l'est. Un entretien punitif n'est pas l'équité. Écarter sans regarder peut être une lâcheté politique, pas une méthode (L. 1221-9).\n\nJUSTIFICATION : vous tracez. Vous n'inventez pas 18/20. Si le DG impose, RH le documente : ce n'est plus une évaluation, c'est une décision d'autorité.\n\nRISQUES : discrimination des autres, notes falsifiées, rumeur vraie.\n\nERREURS FRÉQUENTES : 20/20 automatique ; entretien piège.\n\nQUALIFICATION : bonne pratique déontologique ; L. 1221-9 ; L. 1132-1 si l'écartement des autres est un prétexte illicite.\n\nRÉFÉRENCE : L1221-9, L1132-1."
        ),
        ...sit(
          "74",
          "Candidat interne déjà évoqué, six CV externes",
          "Politique interne : les postes sont publiés 7 jours en interne. Le manager a déjà « son » interne et veut limiter l'externe à un alibi. La politique n'interdit pas l'externe.",
          "Que faites-vous ?",
          "Faire un process potiche externe.",
          "Appliquer la publication interne, évaluer tous les recevables, et refuser le process alibi (L. 5331-3 si l'emploi n'est pas réellement ouvert aux externes que vous attirez).",
          "Bloquer l'interne pour « ouvrir le jeu ».",
          "Dire aux externes que c'est déjà pourvu tout en collectant les CV.",
          "CONDUITE RECOMMANDÉE : option B. Si vous publiez à l'externe, le poste est réel. Un alibi est trompeur.\n\nJUSTIFICATION : politique interne 7 jours ≠ attribution automatique. Pas de délai légal inventé au-delà de la politique.\n\nRISQUES : allégation, démotivation, grief interne.\n\nERREURS FRÉQUENTES : alibi ; punir l'interne.\n\nQUALIFICATION : politique interne ; L. 5331-3.\n\nRÉFÉRENCE : L5331-3."
        ),
        ...sit(
          "75",
          "Alternance versus CDI junior",
          "Le manager veut un CDI « pas cher » avec les missions d'un alternant formé 2 jours par semaine. Il refuse le tutorat. L'annonce parlait d'un CDI autonome.",
          "Quelle conduite ?",
          "Embaucher un junior CDI et le former « sur le tas » sans le dire.",
          "Réaligner besoin, budget, tutorat et type de contrat avec RH ; ne pas vendre l'autonomie si le poste est un apprentissage déguisé.",
          "Publier les deux contrats sur la même annonce sans le préciser.",
          "Prendre un stagiaire de 4 mois pour tester, sans convention claire.",
          "CONDUITE RECOMMANDÉE : option B. Nature de l'emploi (L. 5331-3). Un stage sans cadre est un sujet RH (vous n'inventez pas les règles de stage). L'alternance suppose un tutorat réel.\n\nJUSTIFICATION : honnêteté du contrat et des missions.\n\nRISQUES : allégation, échec d'intégration, requalification (RH).\n\nERREURS FRÉQUENTES : CDI low cost = alternant sans droits.\n\nQUALIFICATION : L. 5331-3 ; politique interne formation.\n\nRÉFÉRENCE : L5331-3."
        ),
        ...sit(
          "76",
          "Recrutement volume : dix magasiniers",
          "Dix postes identiques. Le manager veut des entretiens de 8 minutes « au feeling, on a pas le temps ». Il propose de ne voir que les hommes « pour le port de charge ».",
          "Que faites-vous ?",
          "Suivre : le volume justifie le feeling.",
          "Maintenir une grille courte mais identique, des questions liées au poste (dont les charges, posées à tous), et refuser le filtre de sexe.",
          "Filtrer les femmes « pour les protéger ».",
          "Outsourcer à une IA sans information.",
          "CONDUITE RECOMMANDÉE : option B. Le sexe est un critère protégé (L. 1132-1). Le port de charge se traduit en exigence de poste évaluée pour tous, pas en exclusion des femmes. L'IA sans L. 1221-8 : déjà vu (S54).\n\nJUSTIFICATION : volume ≠ exception à la loi. Une grille de 15 minutes tient.\n\nRISQUES : discrimination de sexe.\n\nERREURS FRÉQUENTES : protectionnisme sexiste ; speed feeling.\n\nQUALIFICATION : obligation L. 1132-1 ; L. 1221-9.\n\nRÉFÉRENCE : L1132-1, L1221-9."
        ),
        ...sit(
          "77",
          "Cabinet et process interne en parallèle",
          "Un cabinet vous envoie des CV déjà vus en interne, avec un markup. Le manager veut payer pour « aller plus vite ». Les candidats ne savent pas qu'ils sont présentés deux fois.",
          "Quelle conduite ?",
          "Payer et avancer, le temps compte.",
          "Dédupliquer, clarifier la propriété du dossier selon le contrat cabinet, informer pour éviter la double présentation opaque.",
          "Laisser le cabinet dire qu'il a « trouvé » des profils internes.",
          "Écarter les candidats communs par simplicité.",
          "CONDUITE RECOMMANDÉE : option B. Double présentation : mauvaise expérience candidat, coût, confusion d'employeur. Le contrat cabinet tranche les honoraires, pas vous tout seul.\n\nJUSTIFICATION : loyauté. Pas d'écartement automatique d'un bon profil.\n\nRISQUES : double frais, ghosting croisé, L. 1221-8 (qui évalue, par quelle méthode).\n\nERREURS FRÉQUENTES : payer pour la paix ; punir le candidat.\n\nQUALIFICATION : politique interne / contrat ; bonne pratique ; L. 1221-8.\n\nRÉFÉRENCE : L1221-8."
        ),
        ...sit(
          "78",
          "Freelance ou salariat",
          "Un profil rare ne veut que du freelance. Le manager dit « on le prend en facture, comme un salarié, mêmes horaires, même PC, même manager, 5 jours ». Les RH n'ont pas validé.",
          "Que faites-vous ?",
          "Le contracter en freelance pour aller vite.",
          "Alerter RH : un schéma de salariat déguisé n'est pas un levier de recrutement junior ; vous ne promettez ni le schéma ni un CDI fictif.",
          "Promettre un CDI dans six mois oralement pour qu'il accepte la facture.",
          "Indiquer « CDI » dans l'annonce et payer en freelance.",
          "CONDUITE RECOMMANDÉE : option B. La requalification est un sujet employeur / URSSAF / juge, pas un bricolage. L. 5331-3 si la nature de l'emploi est fausse. Promesse orale de CDI : SP-F39588.\n\nJUSTIFICATION : vous ne conseillez pas un montage. Vous alertez.\n\nRISQUES : requalification, fausse nature d'emploi, promesse.\n\nERREURS FRÉQUENTES : « tout le monde fait du freelance ».\n\nQUALIFICATION : politique interne ; L. 5331-3 ; SP-F39588. Vous n'inventez pas les critères de requalification.\n\nRÉFÉRENCE : L5331-3, SP-F39588."
        ),
        ...sit(
          "79",
          "Multi-postes : un candidat pour deux jobs",
          "La même personne matche un poste qualité et un poste supply. Deux managers la veulent en exclusivité. Chacun vous demande de cacher l'autre process.",
          "Quelle conduite ?",
          "Cacher : ça simplifie.",
          "Informer la candidate des deux pistes internes, coordonner les agendas, et ne pas faire deux offres surprises le même jour sans RH.",
          "La pousser vers le manager le plus senior.",
          "La faire échouer sur l'un pour libérer l'autre.",
          "CONDUITE RECOMMANDÉE : option B. Transparence interne et candidat. Deux offres simultanées mal calées : chaos et écrits à risque (SP-F39588).\n\nJUSTIFICATION : la personne décide, l'entreprise arbitre ses priorités, vous ne trichez pas sur un entretien.\n\nRISQUES : double promesse ; perte de la candidate.\n\nERREURS FRÉQUENTES : secret inter-managers ; sabordage.\n\nQUALIFICATION : bonne pratique ; politique interne ; SP-F39588.\n\nRÉFÉRENCE : SP-F39588."
        ),
        ...sit(
          "80",
          "Offre uniquement en anglais pour un poste à Lille",
          "Le manager IT veut une offre 100 % anglais, titre « Supply Ninja », aucun équivalent français, travail à Lille. Il dit que « les talents sont internationaux ».",
          "Que faites-vous ?",
          "Publier en anglais : modernité.",
          "Rédiger en français, expliquer les termes sans équivalent, et éventuellement joindre une version anglaise, sans intitulé fantaisiste trompeur.",
          "Garder « Ninja » en français autour.",
          "Ne pas publier en France, seulement à l'étranger, pour éviter L. 5331-4.",
          "CONDUITE RECOMMANDÉE : option B. L. 5331-4 : offre en français si le travail s'effectue en France ; terme étranger sans équivalent : description française suffisamment détaillée. « Ninja » peut aussi induire en erreur sur la nature (L. 5331-3).\n\nJUSTIFICATION : conformité + lisibilité. Une version EN en plus est possible.\n\nRISQUES : offre irrégulière.\n\nERREURS FRÉQUENTES : anglais only ; contournement géographique.\n\nQUALIFICATION : obligation L. 5331-4, L. 5331-3.\n\nRÉFÉRENCE : L5331-4, L5331-3."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Cover story. Neveu à 20/20. Process alibi. Volume sexiste. Freelance bricolé. Anglais only à Lille."
        ),
        h("Mise en pratique"),
        t(
          "Pour S73, rédigez la note au dossier (conflit d'intérêts, notes réelles, phrase à RH)."
        ),
        h("Correction détaillée"),
        t(
          "La note dit : lien de parenté signalé par le DG, entretien identique, scores X/Y, écarts WMS, pas de majoration. Demande à RH de confirmer si une décision d'autorité se substitue à l'évaluation — auquel cas ce n'est plus présenté comme un choix « meilleur candidat »."
        ),
      ],
    }),
    lesson({
      title: "Sourcing, annonces, volume digital et éthique de recherche",
      description:
        "Dix situations sur l'annonce, les booléens, le vivier, le diplôme et la langue.",
      minutes: 28,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous évitez les allégations d'annonce, les booléens discriminants, et le sourcing qui confond diplôme, langue et origine."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "L'annonce est un acte juridique (L. 5331-2, L. 5331-3, L. 5331-4) autant qu'un marketing. Le sourcing booléen peut reproduire des discriminations (écoles, prénoms, « native », âge). L. 1132-1 cite la capacité à s'exprimer dans une langue autre que le français comme critère protégé : exiger le français se justifie par le poste, pas par « native »."
        ),
        h("Méthode opérationnelle"),
        t(
          "Relire l'annonce avec la grille d'interdits. Relire les requêtes : pas de filtres d'âge, de sexe, de photo. Documenter les canaux."
        ),
        h("Bibliothèque de situations S81 à S90"),
        ...sit(
          "81",
          "Salaire dans l'annonce : le manager exige de le cacher",
          "Le manager refuse toute fourchette. Un collègue affirme que « depuis la directive européenne, c'est obligatoire de mettre le salaire, donc on n'a plus le choix ». Date de vérification des sources : 13/10/2026.",
          "Quelle conduite ?",
          "Affirmer au manager que c'est déjà obligatoire en droit français, point.",
          "Distinguer : pas (encore) une obligation interne française consolidée à la date des sources, directive UE 2023/970 en transposition, bonne pratique d'indiquer une fourchette vraie, interdit de mentir sur le salaire.",
          "Mettre un salaire gonflé « pour coller à l'Europe ».",
          "Ne jamais indiquer le salaire, même après transposition, par principe.",
          "CONDUITE RECOMMANDÉE : option B. Ne pas affirmer que l'affichage est déjà obligatoire en France sans vérifier le texte de transposition en vigueur le jour J. Ne pas mentir sur le chiffre (L. 5331-3). La fourchette vraie est une bonne pratique / future obligation.\n\nJUSTIFICATION : legal-sources.json UE-transparence-salariale, fiche Service-Public 02/10/2025.\n\nRISQUES : conseil juridique faux ; allégation trompeuse.\n\nERREURS FRÉQUENTES : « c'est déjà la loi » ; silence = mensonge.\n\nQUALIFICATION : droit européen en transposition ; L. 5331-3 ; bonne pratique.\n\nRÉFÉRENCE : UE-transparence-salariale, L5331-3."
        ),
        ...sit(
          "82",
          "Fausse urgence dans l'annonce",
          "Le texte dit « embauche immédiate, poste à pourvoir hier, 15 postes ». Il y a un poste, prise de fonction dans trois mois, process de cinq semaines.",
          "Que faites-vous ?",
          "Garder l'urgence : ça booste les clics.",
          "Corriger : un poste, date réaliste, pas d'allégation de volume.",
          "Mettre 15 postes et recaler 14 personnes.",
          "Écrire « immédiat » et expliquer à l'entretien le vrai calendrier.",
          "CONDUITE RECOMMANDÉE : option B. L. 5331-3 : existence, nature, description. Le clickbait n'est pas un canal RH.\n\nJUSTIFICATION : 15 postes fictifs = tromperie. Calendrier faux = tromperie.\n\nRISQUES : offre irrégulière, afflux ingérable, réputation.\n\nERREURS FRÉQUENTES : marketing d'annonce copié des jobboards agressifs.\n\nQUALIFICATION : obligation L. 5331-3.\n\nRÉFÉRENCE : L5331-3."
        ),
        ...sit(
          "83",
          "Requêtes booléennes qui filtrent les écoles et les prénoms",
          "Un consultant vous donne sa requête : (HEC OR ESSEC) NOT (Mohamed OR Fatima) AND « native French ». Il dit que c'est « pour coller au comité de direction ».",
          "Quelle conduite ?",
          "L'utiliser : ça marche chez lui.",
          "Refuser : filtre d'origine / nom / religion supposée / langue maternelle, sans lien nécessaire ; construire une requête sur les compétences.",
          "Enlever les prénoms mais garder native French et HEC only.",
          "Lancer la requête et « ne pas noter » le motif.",
          "CONDUITE RECOMMANDÉE : option B. L. 1132-1 (origine, nom, convictions, langue autre que le français). Un diplomaire exclusif peut être une discrimination indirecte s'il n'a pas de lien nécessaire (L. 1221-6 / pertinence L. 1221-9).\n\nJUSTIFICATION : le COMEX n'autorise pas un filtre illicite. « Ne pas noter » n'efface pas l'acte.\n\nRISQUES : discrimination systémique.\n\nERREURS FRÉQUENTES : booléen magique ; école = talent.\n\nQUALIFICATION : obligation L. 1132-1 ; L. 1221-6 ; L. 1221-9.\n\nRÉFÉRENCE : L1132-1, L1221-6, L1221-9."
        ),
        ...sit(
          "84",
          "Exigence d'un français « sans accent »",
          "Le poste est un coordinateur interne, 95 % écrit et oral avec des équipes françaises. Le manager : « Pas d'accent, les opérateurs ne comprennent pas. »",
          "Que faites-vous ?",
          "Filtrer les accents en entretien.",
          "Évaluer la capacité à communiquer sur le poste (clarté, vocabulaire métier), sans critère d'origine ou d'accent comme proxy, et recadrer le manager.",
          "Exiger un test de français littéraire niveau agrégation.",
          "Écarter tout candidat né hors de France.",
          "CONDUITE RECOMMANDÉE : option B. La langue nécessaire au poste s'évalue. L'accent et le lieu de naissance sont des proxies d'origine (L. 1132-1). La capacité à s'exprimer dans une langue autre que le français est un critère protégé : ici, c'est le français du job qui compte, pas la chasse à l'accent.\n\nJUSTIFICATION : mise en situation orale métier, identique pour tous.\n\nRISQUES : discrimination. Test disproportionné (L. 1221-9).\n\nERREURS FRÉQUENTES : accent = incompétence ; nationalité.\n\nQUALIFICATION : L. 1132-1, L. 1221-9.\n\nRÉFÉRENCE : L1132-1, L1221-9."
        ),
        ...sit(
          "85",
          "Candidat qui refuse une information professionnelle",
          "En préqual, vous demandez les dates de disponibilité et l'habilitation chariot si le poste la requiert. Le candidat refuse « par principe, trop d'infos ». Il répond sur le reste.",
          "Quelle conduite ?",
          "Écarter : un refus = mensonge.",
          "Expliquer le lien avec l'emploi (L. 1221-6), proposer de répondre plus tard par écrit, et ne pas exiger d'autres infos (enfants, santé).",
          "Insister sur la santé « pour les habilitations ».",
          "Poursuivre sans jamais obtenir la disponibilité.",
          "CONDUITE RECOMMANDÉE : option B. Les infos liées à l'emploi sont légitimes. Le candidat répond de bonne foi (L. 1221-6) mais vous expliquez le pourquoi. La santé n'est pas à collecter par le recruteur junior (médecine du travail le moment venu).\n\nJUSTIFICATION : pédagogie puis, si refus persistant sur un must-have (disponibilité, habilitation), écart professionnel documenté.\n\nRISQUES : collecte santé ; recalé punitif.\n\nERREURS FRÉQUENTES : tout refus = insolence ; glissement médical.\n\nQUALIFICATION : L. 1221-6 ; CNIL minimisation.\n\nRÉFÉRENCE : L1221-6, CNIL-guide."
        ),
        ...sit(
          "86",
          "Demande de casier judiciaire",
          "Pour un poste de coordinateur supply sans contact argent ni mineurs, le manager veut un extrait de casier « on ne sait jamais ». Aucune politique interne ne le prévoit.",
          "Que faites-vous ?",
          "Le demander à tous « pour égalité ».",
          "Refuser de collecter cette donnée sans cadre RH / légal identifié ; ce n'est pas un réflexe junior.",
          "Le demander seulement aux candidats « qui ont une tête ».",
          "Fouiller les bases publiques d'affaires judiciaires.",
          "CONDUITE RECOMMANDÉE : option B. Donnée très sensible, finalité et base à faire qualifier par RH. L. 1221-6 : lien direct et nécessaire — ici non démontré. Fouille et ciblage à la tête : discrimination (apparence, origine).\n\nJUSTIFICATION : vous n'inventez pas l'autorisation. Égalité n'autorise pas une collecte excessive.\n\nRISQUES : RGPD, discrimination, collecte illicite.\n\nERREURS FRÉQUENTES : « on ne sait jamais » ; OSINT judiciaire.\n\nQUALIFICATION : L. 1221-6 ; CNIL ; politique interne.\n\nRÉFÉRENCE : L1221-6, CNIL-guide."
        ),
        ...sit(
          "87",
          "Vérification du titre de séjour",
          "Un candidat n'a pas encore les pièces. Le manager dit « on ne prend pas d'étrangers, trop compliqué ». Les RH gèrent l'autorisation de travail le cas échéant.",
          "Quelle conduite ?",
          "Écarter tous les noms « étrangers ».",
          "Ne pas faire de la nationalité un filtre de sourcing ; coordonner avec RH l'autorisation de travailler, sans harceler ni collecter des pièces trop tôt hors process.",
          "Demander le passeport à tous dès la CVthèque.",
          "Promettre que l'entreprise « s'occupe toujours des papiers » sans le savoir.",
          "CONDUITE RECOMMANDÉE : option B. L'origine / la nationalité comme motif d'écartement : L. 1132-1. L'autorisation de travailler est un sujet réel, RH, pas un prétexte. Promettre un accompagnement inexistant est trompeur. Collecte trop précoce de pièces d'identité : CNIL minimisation.\n\nJUSTIFICATION : process RH. Pas de tri patronymique.\n\nRISQUES : discrimination ; promesse ; données excessives.\n\nERREURS FRÉQUENTES : patronyme = papiers ; « trop compliqué ».\n\nQUALIFICATION : L. 1132-1 ; CNIL ; politique interne.\n\nRÉFÉRENCE : L1132-1, CNIL-guide."
        ),
        ...sit(
          "88",
          "Message d'approche copié-collé mensonger",
          "Le template d'approche dit : « Votre profil a particulièrement retenu l'attention de la direction, entretien assuré. » Ce n'est pas vrai : c'est un InMail de volume.",
          "Que faites-vous ?",
          "Garder : le taux de réponse est bon.",
          "Réécrire un message honnête (poste, pourquoi ce profil, pas de fausse shortlist direction).",
          "Ajouter « urgent, 15 postes ».",
          "Utiliser le compte LinkedIn d'un directeur sans son accord.",
          "CONDUITE RECOMMANDÉE : option B. Loyauté. L. 5331-3 si l'emploi ou le process est déformé. Usurper le compte d'un directeur : déontologie et identité.\n\nJUSTIFICATION : le taux de réponse ne blanchit pas le mensonge.\n\nRISQUES : réputation, allégation, incident de compte.\n\nERREURS FRÉQUENTES : templates menteurs ; urgence fictive.\n\nQUALIFICATION : bonne pratique ; L. 5331-3.\n\nRÉFÉRENCE : L5331-3."
        ),
        ...sit(
          "89",
          "Candidat handicap non déclaré, aménagement visible demandé",
          "Sans mention RQTH, un candidat demande une salle accessible et 15 minutes de plus sur un cas écrit. Le manager : « S'il demande déjà ça, il ne tiendra pas. Recale. »",
          "Quelle conduite ?",
          "Recaler : trop de demandes.",
          "Accorder l'accessibilité et un aménagement raisonnable de l'évaluation, sans exiger un dossier médical, et évaluer les aptitudes.",
          "Exiger la RQTH pour « justifier ».",
          "Lui faire un oral plus dur « pour compenser l'aménagement ».",
          "CONDUITE RECOMMANDÉE : option B. Handicap / état de santé : L. 1132-1. Aménager l'évaluation, ce n'est pas baisser le niveau du poste. Exiger la RQTH ou durcir le reste : discrimination. Pas de dossier médical (L. 1221-6, CNIL).\n\nJUSTIFICATION : aptitudes professionnelles. Logistique d'entretien accessible.\n\nRISQUES : discrimination, données santé.\n\nERREURS FRÉQUENTES : demande d'accès = inaptitude ; compensation punitive.\n\nQUALIFICATION : L. 1132-1, L. 1221-6 ; bonne pratique accessibilité.\n\nRÉFÉRENCE : L1132-1, L1221-6, CNIL-guide."
        ),
        ...sit(
          "90",
          "Candidat qui arrive en retard",
          "Le candidat prévient d'un retard train de 25 minutes. Le manager veut annuler et noter 0 « non-respect ». Un autre candidat, hier, a eu 20 minutes de retard sans préavis et a été vu « parce que c'est un pote du chef ».",
          "Que faites-vous ?",
          "Annuler celui qui prévient, garder le pote.",
          "Appliquer la même règle aux deux, reporter si besoin, et ne pas transformer un incident de transport en critère moral, surtout avec un traitement de faveur.",
          "Noter « non-respect » seulement pour celui qui prévient.",
          "Faire l'entretien dans le hall en 5 minutes pour « lui apprendre ».",
          "CONDUITE RECOMMANDÉE : option B. Égalité de traitement. Un retard annoncé n'est pas plus grave qu'un retard non annoncé. L'humiliation dans le hall n'est pas une méthode (L. 1221-9).\n\nJUSTIFICATION : faits, identiques. Le réseau du chef n'est pas un critère (voir S73).\n\nRISQUES : inéquité, favoritisme.\n\nERREURS FRÉQUENTES : punir le professionnel qui prévient.\n\nQUALIFICATION : bonne pratique ; L. 1221-9.\n\nRÉFÉRENCE : L1221-9."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Dire que le salaire est déjà obligatoire. Clickbait 15 postes. Booléen de prénoms. Accent. Casier « on ne sait jamais »."
        ),
        h("Mise en pratique"),
        t(
          "Réécrivez la requête de S83 en compétences (WMS, planning, Excel, 3×8) sans école exclusive ni prénom ni native."
        ),
        h("Correction détaillée"),
        t(
          "Exemple : (\"WMS\" OR \"warehouse management\") AND (planning OR ordonnancement) AND (Excel OR PowerQuery) AND (\"3x8\" OR nuit OR équipes) — puis revue humaine. Pas de NOT prénoms. Pas de native. Les écoles en OR peuvent être un signal faible, jamais un AND exclusif sans lien."
        ),
      ],
    }),
    lesson({
      title: "Intégration, DPAE, éthique personnelle et cas limites",
      description:
        "Dix situations sur la finalisation, le préboarding, le conflit d'intérêts et le relais à l'intégration.",
      minutes: 30,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous clôturez proprement : DPAE avec les RH, pas de promesses d'intégration inventées, conflit d'intérêts déclaré, relais au manager d'accueil."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "La DPAE est obligatoire avant la prise de fonction ou le début de la période d'essai, au plus tôt dans les 8 jours précédant l'embauche (Service-Public F23107 / Urssaf). C'est une obligation de l'employeur, pas du junior isolé ; vous coordonnez. Vous n'inventez pas d'autres délais. Le recruteur n'est pas l'intégrateur, mais un relais (outils, contacts, première semaine)."
        ),
        h("Méthode opérationnelle"),
        t(
          "Checklist RH avant J1. Pas d'ami non déclaré dans le process. Messages de refus aux non-retenus avant l'arrivée du retenu. Passage de relais écrit."
        ),
        h("Bibliothèque de situations S91 à S100"),
        ...sit(
          "91",
          "DPAE oubliée",
          "Le candidat arrive lundi 8 h. Vendredi, personne n'a parlé de DPAE. Le manager dit « ce n'est qu'un papier, on fera ça la semaine prochaine ». Vous êtes junior, pas le déclarant Urssaf.",
          "Quelle conduite ?",
          "Laisser venir : ce n'est pas votre signature.",
          "Alerter RH / employeur immédiatement : la DPAE se fait avant la prise de fonction ou le début de la période d'essai, au plus tôt dans les 8 jours précédant l'embauche ; vous ne reportez pas à la semaine suivante.",
          "Remplir une DPAE vous-même avec un faux identifiant.",
          "Demander au candidat de dire qu'il a commencé mercredi.",
          "CONDUITE RECOMMANDÉE : option B. SP-F23107. Vous n'inventez pas un identifiant. Vous ne faites pas antedater le début. Reporter après J1 n'est pas conforme à la règle rappelée.\n\nJUSTIFICATION : coordination. Urgence vraie.\n\nRISQUES : manquement employeur ; mensonge de date.\n\nERREURS FRÉQUENTES : « ce n'est qu'un papier » ; faire commencer sous un faux jour.\n\nQUALIFICATION : obligation légale de l'employeur (DPAE) ; votre rôle : alerte et coordination.\n\nRÉFÉRENCE : SP-F23107."
        ),
        ...sit(
          "92",
          "Candidat qui veut le contrat avant de démissionner",
          "Le finaliste demande le projet de contrat et les documents d'information avant de démissionner. Le manager : « S'il fait ça, c'est qu'il n'a pas confiance, on passe au second. » RH a un projet validable.",
          "Que faites-vous ?",
          "Écarter : manque de confiance.",
          "Transmettre les documents validés RH, c'est un geste professionnel, pas un affront.",
          "Promettre oralement que « le contrat sera le même que tout le monde » sans pièce.",
          "Envoyer un contrat non validé pour aller vite.",
          "CONDUITE RECOMMANDÉE : option B. Demander à lire avant de démissionner est prudent, pas un critère d'écartement. Un oral vague ou un contrat non validé : risque SP-F39588 / écart d'avantages (S14).\n\nJUSTIFICATION : loyauté. Qualité de l'écrit.\n\nRISQUES : démission sur du vent ; écrit sauvage.\n\nERREURS FRÉQUENTES : test de confiance inversé.\n\nQUALIFICATION : bonne pratique ; politique interne ; SP-F39588.\n\nRÉFÉRENCE : SP-F39588."
        ),
        ...sit(
          "93",
          "Période d'essai utilisée comme filet abusif",
          "Le manager : « On l'embauche, si c'est pas le bon on cassera l'essai, donc on peut se permettre un doute fort sur les compétences. » Le doute porte sur un must-have WMS.",
          "Quelle conduite ?",
          "Embaucher : l'essai est fait pour ça.",
          "Refuser de remplacer l'évaluation par l'essai : embaucher malgré un doute fort sur un must-have est une mauvaise pratique, et l'essai n'est pas un CDD de test bricolé.",
          "Promettre au candidat qu'on ne rompra jamais l'essai.",
          "Allonger oralement l'essai « le temps qu'on soit sûrs ».",
          "CONDUITE RECOMMANDÉE : option B. L'essai a un cadre légal (vous ne le détaillez pas au-delà de ce que RH valide, vous n'inventez pas de durées). Ce n'est pas une excuse pour un recrutement bâclé. Promettre de ne jamais rompre, ou allonger à l'oral, est imprudent (écrits, SP-F39588 analogie sur les engagements).\n\nJUSTIFICATION : qualité de la décision d'embauche.\n\nRISQUES : échec J+20, engagement oral, durée d'essai non maîtrisée.\n\nERREURS FRÉQUENTES : essai = filet ; promesse inverse.\n\nQUALIFICATION : bonne pratique ; politique interne / RH sur l'essai. Ne pas inventer la durée légale dans la leçon."
        ),
        ...sit(
          "94",
          "Onboarding : le recruteur disparaît",
          "Le CDI est signé. Le manager dit « merci, on n'a plus besoin de toi ». Aucun computer, aucun tuteur, le badge n'est pas commandé. La personne arrive lundi.",
          "Que faites-vous ?",
          "Clôturer le dossier recrutement, ce n'est plus vous.",
          "Faire un passage de relais écrit (checklist J-7 / J1), alerter sur les manques, et prévenir la personne des infos vraies, sans promettre un tuteur qui n'existe pas.",
          "Promettre un parrain, un laptop et une formation 3 jours pour rassurer.",
          "Arriver lundi à sa place pour faire l'intégration.",
          "CONDUITE RECOMMANDÉE : option B. Le junior n'est pas le manager d'accueil, mais il ne laisse pas un trou. Il ne promet pas des moyens fictifs (L. 5331-3 analogie sur les avantages ; loyauté).\n\nJUSTIFICATION : préboarding. Faits. Escalade.\n\nRISQUES : départ immédiat, promesse d'intégration fausse.\n\nERREURS FRÉQUENTES : disparition ; overpromise J1.\n\nQUALIFICATION : bonne pratique ; politique interne onboarding."
        ),
        ...sit(
          "95",
          "Conflit d'intérêts : ami du recruteur",
          "Un ami proche postule. Vous le savez. Le manager vous demande de préqualifier « comme les autres ». Vous pensez pouvoir rester neutre.",
          "Quelle conduite ?",
          "Préqualifier en silence : vous êtes professionnel.",
          "Déclarer le conflit, vous retirer de l'évaluation, et faire reprendre le dossier par un autre.",
          "Le recaler d'office pour éviter le soupçon.",
          "Le sur-noter pour « compenser » le soupçon inverse.",
          "CONDUITE RECOMMANDÉE : option B. La neutralité proclamée ne suffit pas. Recaler ou sur-noter : biais inverse. La déclaration est la seule voie propre.\n\nJUSTIFICATION : déontologie. Traçabilité. Égalité de traitement vis-à-vis des autres candidats.\n\nRISQUES : favoritisme, accusation, notes infondées.\n\nERREURS FRÉQUENTES : « je gère » ; sacrifice de l'ami.\n\nQUALIFICATION : politique interne déontologie ; bonne pratique."
        ),
        ...sit(
          "96",
          "Candidat en arrêt : le manager veut « savoir »",
          "Entre l'acceptation et J1, vous apprenez qu'une personne est en arrêt. Le manager veut le motif médical et envisager de retirer l'offre. L'écrit d'embauche est déjà envoyé (modèle offre validé RH).",
          "Que faites-vous ?",
          "Demander le motif et retirer si c'est « long ».",
          "Ne pas collecter de donnée de santé, alerter RH : état de santé = critère protégé, et tout retrait d'écrit se qualifie avec RH (offre vs promesse, SP-F39588).",
          "Féliciter le manager de son anticipation.",
          "Poser la question via un message « comment vas-tu vraiment ? ».",
          "CONDUITE RECOMMANDÉE : option B. L. 1132-1 (santé). L. 1221-6. Retrait : SP-F39588, pas un acte junior. Le message « vraiment » est une collecte déguisée.\n\nJUSTIFICATION : médecine du travail n'est pas le recruteur. Pas de délai d'arrêt à inventer comme motif d'embauche.\n\nRISQUES : discrimination santé ; retrait mal calé.\n\nERREURS FRÉQUENTES : enquête médicale ; compassion inquisitrice.\n\nQUALIFICATION : L. 1132-1, L. 1221-6 ; SP-F39588.\n\nRÉFÉRENCE : L1132-1, L1221-6, SP-F39588."
        ),
        ...sit(
          "97",
          "Refus des non-retenus après signature",
          "Le retenu a signé. Trois finalistes n'ont pas de mail de refus. Le manager veut attendre J15 « au cas où l'essai se passe mal », tout en leur disant que le process « avance bien ».",
          "Quelle conduite ?",
          "Les garder au chaud avec un mensonge d'avancée.",
          "Notifier un refus vrai ou une mise en attente honnête (vivier, durée, opposition), sans les retenir sur un essai d'autrui non dit.",
          "Ne jamais refuser par écrit, seulement à l'oral flou.",
          "Les convoquer à un « dernier tour » fictif.",
          "CONDUITE RECOMMANDÉE : option B. File d'attente sur l'essai d'un tiers sans le dire : déloyal. Un dernier tour fictif : L. 5331-3 / L. 1221-8. L'oral flou ne protège pas.\n\nJUSTIFICATION : clôture ou transparence. Plan B interne n'oblige pas à tromper.\n\nRISQUES : trois désistements de personne, réputation, données actives.\n\nERREURS FRÉQUENTES : réservoir d'essai ; fiction de tour.\n\nQUALIFICATION : bonne pratique ; L. 1221-8 ; L. 5331-3 ; CNIL.\n\nRÉFÉRENCE : L1221-8, L5331-3, CNIL-guide."
        ),
        ...sit(
          "98",
          "Candidat mineur / apprentissage mal cadré",
          "Un manager veut « un jeune de 17 ans, 35 h de nuit, comme les autres, CDI ». Vous n'êtes pas juriste du travail des mineurs. Les RH n'ont pas été saisies.",
          "Que faites-vous ?",
          "Lancer le CDI de nuit : égalité avec les majeurs.",
          "Saisir RH avant tout process : le travail des mineurs et la nuit sont encadrés ; vous n'improvisez pas et vous n'inventez pas les durées.",
          "Mettre 18 ans dans l'annonce tout en visant 17 ans.",
          "Le payer de la main à la main le premier mois « pour tester ».",
          "CONDUITE RECOMMANDÉE : option B. Vous ne devenez pas code du travail des mineurs. Vous n'inventez pas de délai ni de dérogation. Mensonge d'âge dans l'annonce : L. 5331-3 + discrimination / protection des mineurs. Travail dissimulé : hors de question.\n\nJUSTIFICATION : escalation RH. Égalité n'efface pas les règles protectrices.\n\nRISQUES : infraction, allégation, travail dissimulé.\n\nERREURS FRÉQUENTES : « comme les autres » ; test cash.\n\nQUALIFICATION : obligation de saisir RH ; L. 5331-3 ; ne pas inventer le détail légal mineurs.\n\nRÉFÉRENCE : L5331-3."
        ),
        ...sit(
          "99",
          "Pression pour mentir au candidat sur le climat social",
          "Le site est en conflit ouvert. Le manager : « Ne dis rien, sinon personne ne vient. Dis que l'ambiance est familiale. »",
          "Quelle conduite ?",
          "Dire familiale : on recrute d'abord.",
          "Ne pas mentir sur le climat ; décrire les faits que vous avez le droit de dire (missions, équipe, contexte général validé RH), sans dénigrer ni cacher un élément décisif que RH autorise à formuler.",
          "Envoyer des extraits de tracts syndicaux au candidat.",
          "Promettre que le conflit sera fini avant J1.",
          "CONDUITE RECOMMANDÉE : option B. Mentir sur l'ambiance est déloyal et peut s'apparenter à induire en erreur sur la description de l'emploi (L. 5331-3). Vous n'êtes pas un relais de tracts. Vous ne promettez pas la fin d'un conflit.\n\nJUSTIFICATION : vérité utile, validée, sans panique ni spin.\n\nRISQUES : départ J1, allégation, polarisation.\n\nERREURS FRÉQUENTES : storytelling familial ; dossier militant.\n\nQUALIFICATION : L. 5331-3 ; bonne pratique ; politique interne com.\n\nRÉFÉRENCE : L5331-3."
        ),
        ...sit(
          "100",
          "Le recruteur junior « closer » pour son objectif personnel",
          "Il vous reste un recrutement à « closer » pour votre objectif trimestriel. Le finaliste hésite. Vous pourriez dire que le second a déjà signé ailleurs (faux) et que le laptop custom est commandé (faux). Votre N+1 ferme les yeux « si ça signe ».",
          "Quelle conduite ?",
          "Mentir : l'objectif d'abord, tout le monde le fait.",
          "Refuser le mensonge, garder les faits, accepter de ne pas signer, et ne pas truquer le report d'activité.",
          "Truquer le CRM « offer accepted » en attendant.",
          "Baisser le salaire dans l'outil pour que ça « rentre » puis promettre un rattrapage.",
          "CONDUITE RECOMMANDÉE : option B. Jamais recommander de mentir. Un objectif interne n'autorise ni fausse rareté, ni faux avantage (L. 5331-3), ni faux CRM, ni rattrapage salarial fantôme (SP-F39588 / équité).\n\nJUSTIFICATION : c'est la situation qui résume le métier : la pression ne change pas la règle.\n\nRISQUES : tout ce que le module a décrit, concentré en un geste.\n\nERREURS FRÉQUENTES : KPI > éthique ; N+1 complice comme permission.\n\nQUALIFICATION : obligation de ne pas induire en erreur (L. 5331-3) ; bonne pratique déontologique ; politique interne reporting.\n\nRÉFÉRENCE : L5331-3, SP-F39588."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Reporter la DPAE après J1. Punir celui qui veut lire le contrat. Essai-filet. Disparition à J-1. Ami non déclaré. Mentir pour un KPI."
        ),
        h("Mise en pratique"),
        t(
          "Rédigez le mail de passage de relais de S94 (destinataires, 8 cases J-7, 5 cases J1, 3 risques) et la déclaration de conflit de S95 (deux phrases)."
        ),
        h("Correction détaillée"),
        t(
          "Relais : RH, manager, IT, badge, tuteur nommé ou « non nommé — alerte », planning J1, documents. Risques : pas de PC, pas de tuteur, arrivée dans un service en 3×8 sans accueil. Conflit : « Monsieur X est un ami personnel. Je me déporte de l'évaluation et de la recommandation. Merci de réattribuer le dossier. »"
        ),
      ],
    }),
    quizLesson({
      title: "Quiz — 15 décisions tirées des situations",
      description:
        "Quinze questions issues des cas S01 à S100. Seuil de réussite : 75 %.",
      passing_score: 75,
      minutes: 22,
      questions: [
        q({
          question:
            "S01 / S07. Un manager veut une embauche pour lundi et vous pousse à « closer » avant un COMEX. Quelle conduite ?",
          options: [
            "A. Promettre la date ou envoyer une offre non tranchée pour calmer la pression.",
            "B. Recadrer le délai, refuser une offre sans décision, proposer un plan réel (intérim de transition, point de décision).",
            "C. Envoyer deux offres en parallèle, le premier qui signe gagne.",
            "D. Promettre oralement le poste, l'écrit suivra après le COMEX.",
          ],
          correct: 1,
          explanation:
            "La pression n'autorise ni date miracle ni offre bancale. Distinguez urgence opérationnelle et CDI. Un oral « tu as le poste » est imprudent (SP-F39588). Option B seule tient.",
        }),
        q({
          question:
            "S03 / S81. Indiquer le salaire dans l'annonce, en France, à la date de vérification des sources du cours (13/10/2026) :",
          options: [
            "A. C'est déjà une obligation interne française consolidée, on peut l'affirmer au manager sans réserve.",
            "B. Ce n'est pas (encore) une obligation interne française consolidée ; une directive UE est en transposition ; mentir sur le salaire reste interdit (L. 5331-3) ; indiquer une fourchette vraie est une bonne pratique.",
            "C. Il est interdit d'indiquer le salaire dans une offre.",
            "D. On peut indiquer un salaire gonflé le temps d'attirer, puis recadrer.",
          ],
          correct: 1,
          explanation:
            "legal-sources.json, UE-transparence-salariale et L. 5331-3. Ne pas affirmer l'obligation française déjà en vigueur. Ne pas gonfler le chiffre.",
        }),
        q({
          question:
            "S41. Le manager demande si une candidate prévoit des enfants, « le poste est physique ». Que faites-vous ?",
          options: [
            "A. Laisser la question : l'exception du poste physique existe.",
            "B. Interrompre : grossesse / situation de famille sont protégées (L. 1132-1) ; pas de reformulation « disponible 24 mois ».",
            "C. Reformuler sur les 24 mois de disponibilité ininterrompue.",
            "D. Noter la réponse pour l'organisation, sans l'utiliser.",
          ],
          correct: 1,
          explanation:
            "Il n'existe pas d'exception « poste physique » permettant d'écarter une femme enceinte ou de poser cette question. L. 1132-1 et L. 1221-6. La reformulation vise le même objet illicite.",
        }),
        q({
          question:
            "S42. Un manager veut trier les CV sur la photo et écarter une personne « qui ne passera pas auprès des clients ». Conduite ?",
          options: [
            "A. Trier sur la photo, l'image fait partie de tout métier.",
            "B. Refuser le tri sur l'apparence et l'origine ; évaluer les compétences (L. 1132-1, L. 1221-6).",
            "C. Exiger une photo de tous pour égaliser les chances.",
            "D. Laisser les photos au manager en se disant que vous, vous ne vous en servez pas.",
          ],
          correct: 1,
          explanation:
            "Apparence et origine sont protégées. Exiger la photo augmente le risque. Laisser le filtre au manager, c'est le laisser opérer.",
        }),
        q({
          question:
            "S51. Un candidat demande l'accès à toutes ses données. Le CRM contient « trop vieux, pas le feeling ». Que faire ?",
          options: [
            "A. Supprimer le dossier pour n'avoir plus rien à donner.",
            "B. Orienter vers RH / DPO, ne pas détruire, faire recadrer le commentaire illicite.",
            "C. Ignorer : un non-retenu n'a pas de droit d'accès.",
            "D. Envoyer le CRM brut sans RH, commentaire d'âge compris, « transparence totale ».",
          ],
          correct: 1,
          explanation:
            "Le droit d'accès existe. Détruire pour y échapper est une faute (et peut contrarier une conservation probatoire, L. 1134-5 / référentiel CNIL). Le commentaire d'âge est discriminatoire.",
        }),
        q({
          question:
            "S62 / S63. Un e-mail manager dit « nous vous promettons le poste » avec salaire et date. Le budget saute. Conduite junior ?",
          options: [
            "A. Retirer en douce et écrire que ce n'était qu'une piste.",
            "B. Alerter RH / juridique : formulation potentiellement de promesse unilatérale (SP-F39588) ; ne pas bricoler le retrait.",
            "C. Un SMS « finalement non » suffit, ce n'est pas un contrat.",
            "D. Conseiller au candidat de mentir à son employeur actuel pour gagner du temps.",
          ],
          correct: 1,
          explanation:
            "SP-F39588 : la promesse unilatérale peut valoir contrat ; le retrait s'analyse alors en licenciement sans cause réelle et sérieuse. Terrain RH / juridique. Jamais conseiller de mentir.",
        }),
        q({
          question:
            "S54. Une IA classe les CV, le top 10 sans aucune femme, candidats non informés. Que faire ?",
          options: [
            "A. Suivre le top 10 : l'outil est objectif.",
            "B. Ne pas limiter l'examen au ranking, informer (L. 1221-8), contrôler les biais, alerter RH / DPO.",
            "C. Renommer l'IA « aide à la lecture » et continuer à n'ouvrir que le top 10.",
            "D. Injecter le genre dans le modèle sans règle pour rééquilibrer.",
          ],
          correct: 1,
          explanation:
            "L. 1221-8, L. 1221-9, L. 1132-1. L'IA n'est pas objective par nature. Un top 10 sans femme est un signal. Le contrôle humain doit être réel.",
        }),
        q({
          question:
            "S73. Le DG envoie le CV de son neveu et veut le « bon gamin » en poste. Votre rôle ?",
          options: [
            "A. Le retenir : autorité du DG.",
            "B. Même grille, tracer le conflit d'intérêts, ne pas maquiller les notes.",
            "C. Entretien plus dur pour montrer l'équité.",
            "D. Écarter sans entretien pour éviter le soupçon.",
          ],
          correct: 1,
          explanation:
            "Cooptation = canal, pas passe-droit. Falsifier les notes est une faute. Entretien punitif ou refus aveugle ne sont pas des méthodes pertinentes (L. 1221-9).",
        }),
        q({
          question:
            "S31. Deux notes égales. Le manager veut le candidat qui habite le plus près. Conduite ?",
          options: [
            "A. Accepter : moins d'absences, bon sens.",
            "B. Refuser le critère de résidence (L. 1132-1) et départager sur des preuves professionnelles.",
            "C. Pile ou face, pour la neutralité.",
            "D. Écarter les deux.",
          ],
          correct: 1,
          explanation:
            "Le lieu de résidence est un critère protégé. Le pile ou face n'est pas une méthode pertinente (L. 1221-9).",
        }),
        q({
          question:
            "S27. Le CRM du manager dit « un peu vieux, pas le feeling ». Le candidat demande le motif de refus. Que faire ?",
          options: [
            "A. Transférer le commentaire brut.",
            "B. Ne pas transmettre ce motif discriminatoire, recadrer le manager, répondre sur des critères professionnels, alerter RH.",
            "C. Inventer « poste gelé » pour éviter le conflit.",
            "D. Ignorer toute demande de motif, toujours.",
          ],
          correct: 1,
          explanation:
            "L. 1132-1 (âge). Mentir sur un gel n'est pas une solution. Le droit d'accès se traite avec RH ; on ne « lave » pas un commentaire illicite en le transmettant tel quel au candidat comme motif officiel.",
        }),
        q({
          question:
            "S53. Un collègue a fouillé Instagram (mariage, post politique) et veut le mettre au CR. Conduite ?",
          options: [
            "A. Tout ce qui est public est utilisable en recrutement.",
            "B. Refuser : opinions politiques protégées, informations non pertinentes (L. 1132-1, L. 1221-6, CNIL).",
            "C. Garder l'info sans l'écrire.",
            "D. Demander au candidat de justifier ses posts.",
          ],
          correct: 1,
          explanation:
            "Public ≠ pertinent ≠ licite. Les opinions politiques sont un critère protégé. Minimisation CNIL.",
        }),
        q({
          question:
            "S44. Annonce « jeune dynamique, 25-30 ans, native French, bonne présentation ». Action ?",
          options: [
            "A. Publier : vocabulaire classique.",
            "B. Refuser et réécrire sans âge, apparence, ni exigence de langue maternelle (L. 1132-1, L. 5331-2).",
            "C. Publier en anglais pour contourner.",
            "D. Enlever les chiffres d'âge mais garder « jeune » et « native ».",
          ],
          correct: 1,
          explanation:
            "Âge, apparence, origine / langue maternelle : L. 1132-1. L. 5331-4 : si le travail est en France, l'offre est en français ; l'anglais ne contourne pas l'interdit.",
        }),
        q({
          question:
            "S61 / S67. Le poste est gelé ou déjà pourvu. Le manager veut laisser l'annonce ou dire « on n'a pas trouvé ». Conduite ?",
          options: [
            "A. Mentir sur le profil et laisser l'annonce, ça fait du vivier.",
            "B. Informer du gel / retirer ou indiquer clairement que c'est pourvu ; vivier seulement de façon informée (L. 5331-3, CNIL).",
            "C. Dire à chacun qu'il est en finale.",
            "D. Promettre une ouverture dans trois mois sans décision.",
          ],
          correct: 1,
          explanation:
            "L. 5331-3 vise l'existence de l'emploi. Un vivier se dit comme vivier, pas comme poste ouvert. Pas de finale fictive.",
        }),
        q({
          question:
            "S43 / S89. Un candidat en situation de handicap demande un aménagement d'horaire ou d'accessibilité. Le manager veut recaler. Conduite ?",
          options: [
            "A. Recaler : l'entreprise « n'est pas équipée ».",
            "B. Ne pas écarter du seul fait du handicap ; analyser le poste avec RH / référent ; aménager l'évaluation sans dossier médical.",
            "C. Exiger le détail médical et la RQTH avant tout entretien.",
            "D. Convoquer à un entretien plus dur pour compenser l'aménagement.",
          ],
          correct: 1,
          explanation:
            "L. 1132-1 (handicap, santé). L. 1221-6 et CNIL : pas de collecte médicale par le junior. L'aménagement d'évaluation n'est pas un abaissement du poste ni un prétexte à durcir le reste.",
        }),
        q({
          question:
            "S91 / S100. DPAE non faite la veille de J1, et tentation de mentir pour un KPI de signature. Quelle combinaison est correcte ?",
          options: [
            "A. Laisser commencer et truquer le CRM si besoin, on régularisera.",
            "B. Alerter RH : DPAE avant la prise de fonction ou le début de l'essai, au plus tôt dans les 8 jours précédents (SP-F23107) ; et refuser tout mensonge pour closer (L. 5331-3).",
            "C. Antidater le début au mercredi et promettre un laptop fictif pour signer.",
            "D. Remplir la DPAE avec un identifiant emprunté, l'objectif d'abord.",
          ],
          correct: 1,
          explanation:
            "SP-F23107 : calendrier DPAE, obligation employeur, coordination junior. S100 : jamais mentir pour un KPI. Antidater, emprunter un identifiant, faux laptop : fautes.",
        }),
      ],
    }),
  ],
};
