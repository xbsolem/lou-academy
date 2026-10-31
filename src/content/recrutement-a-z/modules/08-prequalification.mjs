import { lesson, h, t, note, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 8,
  title: "Conduire une préqualification téléphonique",
  description:
    "Préparer et conduire un appel de préqualification, poser les questions licites (motivation, préavis, prétentions), interdire les autres, tracer la décision.",
  lessons: [
    lesson({
      title: "Objectifs d'une préqualification téléphonique",
      description:
        "Savoir à quoi sert l'appel, ce qu'il n'est pas, et quand il est justifié dans le process.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez définir la préqualification, la distinguer de l'entretien manager et de la simple prise de rendez-vous, et formuler trois objectifs mesurables : vérifier l'adéquation minimale, informer, décider de la suite."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "La préqualification téléphonique (ou par visioconférence courte) est un échange structuré, généralement de quinze à vingt-cinq minutes, entre le recruteur et une personne shortlistée. Elle n'est pas un entretien d'évaluation approfondie des compétences techniques : c'est le manager, un expert, ou un second tour qui s'en chargera. Elle n'est pas non plus un appel « pour faire connaissance » sans grille. Elle a trois objectifs professionnels. Premier : vérifier les points d'adéquation minimale que le CV ne tranche pas (disponibilité, préavis, prétentions au regard d'une fourchette vraie, compréhension du contrat et des horaires, mobilité vers le site, appétence pour les missions réellement décrites). Deuxième : informer la personne sur le poste, le process, les méthodes (article L. 1221-8 : information préalable sur les méthodes d'aide au recrutement) et lui permettre de se retirer. Troisième : décider d'une suite tracée : entretien manager, complément de dossier, vivier informé, ou arrêt avec motif.\n\nCette étape n'est pas une obligation légale universelle. Beaucoup d'entreprises s'en passent sur un volume faible, ou la remplacent par un questionnaire. Lorsqu'elle existe, c'est une méthode d'aide au recrutement : elle doit être pertinente (L. 1221-9) et les informations demandées doivent avoir un lien direct et nécessaire avec l'emploi (L. 1221-6). Elle ne sert pas à « sentir l'accent », à tester la situation de famille, ni à négocier un contrat que la personne ne connaît pas encore.\n\nMal conduite, la préqualification crée trois dégâts. Elle écarte illicitement. Elle promet trop (langage de promesse d'embauche, F39588). Elle noie le manager sous des profils non filtrés, ou au contraire elle filtre sur un critère qui n'est pas le sien (le junior qui recale un bon profil parce que « pas assez extraverti au téléphone » alors que le poste est une admin paie sédentaire). Bien conduite, elle respecte le temps de tout le monde, y compris la personne en poste qui a clos une porte de bureau pour vous parler.\n\nLe canal compte. Un appel non annoncé de vingt minutes à 18 h 40 le vendredi n'est pas professionnel. Un créneau posé, un ordre du jour, une durée dite dès le début, un compte rendu le jour même : c'est le standard attendu d'un junior. La visio n'est pas obligatoire ; si vous la imposez, le motif doit être lié à l'emploi (présentation d'un outil, pas un contrôle du logement — le lieu de résidence et l'apparence restent protégés, L. 1132-1)."
        ),
        note(
          "Préqualification = filtre licite + information + décision de suite. Ce n'est ni un interrogatoire de vie privée, ni une embauche, ni un entretien technique complet. L. 1221-6, L. 1221-8, L. 1221-9, L. 1132-1 s'appliquent dès cet appel."
        ),
        h("Méthode opérationnelle"),
        t(
          "1. Confirmer que la personne est shortlistée (grille CV).\n2. Poser un créneau, envoyer un message : durée, thèmes, pas de préparation excessive.\n3. Annoncer en ouverture : qui vous êtes, durée, suite possible, enregistrement s'il y en a (et seulement si politique + information — par défaut, n'enregistrez pas).\n4. Couvrir adéquation, information, questions de la personne.\n5. Clore avec une suite et un délai de retour.\n6. Rédiger le CR le jour même."
        ),
        h("Exemple professionnel"),
        t(
          "Samira Benali (nom d'emprunt) est shortlistée pour l'assistant RH Forges. Objectifs de l'appel : confirmer les 22 mois de paie, le préavis, la mobilité Lyon / Ville-sur-Cher, la fourchette 24-27 k€, expliquer les 35 h sur site sans télétravail, informer du process (entretien responsable RH puis site). Non-objectifs : juger la voix, demander si elle a des enfants, tester Excel en live pendant 40 minutes."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Appeler sans rendez-vous et durer 50 minutes. Transformer l'appel en entretien d'embauche décisif. Oublier d'informer sur la suite. Recaler pour « feeling ». Promettre « c'est cuit, le manager va adorer ». Ne pas appeler du tout et envoyer 8 personnes au manager."
        ),
        h("Situations particulières"),
        t(
          "Intérim : préqual plus courte, nature de mission dite d'emblée. Volume : préqual en session, même grille. Candidat interne : mêmes objectifs, confidentialité vis-à-vis de l'équipe. Personne sourcée qui n'a pas encore de CV : l'appel peut recouvrir une partie de l'extraction CV, sans s'allonger indéfiniment. Handicap révélé : aménagement de l'échange, pas un recul du poste ; aptitude = médecine du travail plus tard."
        ),
        h("Mise en pratique"),
        t(
          "Le manager dit : « Passe un coup de fil pour voir si elle a une voix commerciale, on recrute un assistant RH. » Reformulez les objectifs de l'appel en 6 lignes, et ce que vous refusez."
        ),
        h("Correction détaillée"),
        t(
          "Objectifs : vérifier admin/paie, préavis, prétentions, présence site, informer du process. Refus : la « voix commerciale » n'a pas de lien nécessaire avec l'assistant RH sédentaire (L. 1221-6) et oriente l'apparence / le sexe des stéréotypes. Vous proposez au manager des critères du poste. Vous ne promettez pas de tester la voix."
        ),
      ],
    }),

    lesson({
      title: "Préparer l'appel : grille, documents, interlocuteurs",
      description:
        "Entrer en ligne avec un dossier, des questions licites, et une fourchette vraie, pas avec un CV ouvert à l'instant.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez constituer le dossier d'appel (fiche, CV extrait, questions, fourchette, process), prévenir la personne, et coordonner le manager sur ce que l'appel tranche ou non."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Un appel improvisé produit des questions interdites et des oublis. La préparation tient en une page. Vous relisez la fiche de poste et l'annonce publiée : ce que vous direz du contrat, des horaires, du lieu, de la rémunération doit être exact (même exigence de loyauté que L. 5331-3). Vous relisez l'extraction CV : preuves, manques, trois questions maximum liées à l'emploi. Vous savez ce que les RH autorisent à dire sur la fourchette (affichage = bonne pratique / politique, pas obligation française consolidée au 13/10/2026 ; si vous citez un montant, il est tenable). Vous savez le process : qui reçoit ensuite, délais, tests éventuels — à annoncer (L. 1221-8).\n\nLes interlocuteurs : vous (conduite), le manager (ce qu'il veut que l'appel tranche : souvent préavis, salaire, 3×8, pas « la personnalité »), les RH (budget, politique d'affichage, points d'obligation). Vous ne préparez pas une liste de questions sur les enfants « au cas où le manager demanderait ». Vous préparez une phrase de refus si le manager vous a glissé un critère illicite.\n\nLe matériel : casque, ligne correcte, ATS ouvert, grille d'appel (version téléphone de la grille CV, plus préavis / prétentions / compréhension du poste / questions de la personne). Un lieu calme. Vous ne menez pas l'appel depuis un open space qui fait rire au mot « salaire ». Vous ne l'enregistrez pas par défaut : un enregistrement est un traitement de données supplémentaire, à n'envisager que si la politique et l'information sont claires ; la bonne pratique junior est un compte rendu écrit, pas un fichier audio personnel.\n\nPrévenir la personne est une politesse et une qualité de donnée. Un SMS ou e-mail : qui, durée, thèmes. Ce n'est pas une obligation légale chiffrée, c'est une bonne pratique. Cela permet aussi à la personne de se placer (confidentialité vis-à-vis de l'employeur actuel). Appeler le standard actuel pour « joindre Éric Vasseur pour un recrutement » est une faute professionnelle."
        ),
        note(
          "Dossier d'appel = fiche + extraction + 3 questions L. 1221-6 + fourchette vraie + process. Pas d'enregistrement sauvage. Pas d'appel au standard de l'employeur actuel. Pas de question « enfants » préparée pour faire plaisir au manager."
        ),
        h("Méthode opérationnelle"),
        t(
          "1. Bloc 24 h avant : message de confirmation du créneau.\n2. 15 min avant : relire extraction, ouvrir la grille d'appel, vérifier la fourchette avec les RH si doute.\n3. Sur la feuille : ouverture (L. 1221-8), questions, présentation du poste, prétentions/préavis, questions inverses, clôture.\n4. Après : CR dans l'heure, statut, mail de suite."
        ),
        code(`DOSSIER D'APPEL — checklist

[ ] Fiche de poste + annonce datée
[ ] Extraction CV (preuves / manques)
[ ] 3 questions max, lien avec l'emploi
[ ] Fourchette / avantages : version RH
[ ] Horaires, lieu, télétravail : version vraie
[ ] Process et délais
[ ] Grille d'appel vierge
[ ] Interdiction explicite : famille, santé, origine, religion, logement, photo
[ ] Créneau confirmé, confidentialité`),
        h("Exemple professionnel"),
        t(
          "Préqual Karim El Amrani (nom d'emprunt) : dossier = missions d'intérim admin, variables de paie, accueil ; questions = souhait CDI, connaissance du site (mission précédente), outils ; fourchette 24-27 ; dire le 0 jour de télétravail. Le manager voulait « demander s'il est motorisé pour les 3×8 » : le poste est de jour, 35 h, sédentaire, bus. La question permis / voiture n'a pas de lien. Elle sort du dossier."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Ouvrir le CV pendant la sonnerie. Ignorer l'annonce (dire « remote » alors qu'elle dit sur site). Oublier le nom de la personne. Préparer 20 questions. Noter « vérifier l'âge ». Appeler sans créneau une personne en 3×8 pendant son poste de nuit."
        ),
        h("Situations particulières"),
        t(
          "Personne qui ne peut parler que le soir : créneau 18 h 30, pas 12 h 15. Interprète / aménagement : organisez, ne reculez pas. Double préqual (cabinet + vous) : cadrez pour ne pas poser deux fois les mêmes illicites. Candidat à l'étranger : fuseau, français du poste (L. 5331-4 concerne l'offre, mais la clarté du contrat reste due)."
        ),
        h("Mise en pratique"),
        t(
          "Préparez le dossier d'appel d'Inès Morel (reconversion formatrice) : 3 questions licites, 3 questions que vous refusez, 4 faits à lui dire sur le poste."
        ),
        h("Correction détaillée"),
        t(
          "Questions licites : exemples de dossiers stagiaires vs ce qu'elle comprend des dossiers salariés ; comment elle envisage d'apprendre la paie ; préavis / disponibilité. Refusées : âge, enfants, « vous vivez seule », religion, santé, « pourquoi une reconversion si tard ». Faits à dire : CDI 35 h jour, sur site, pas de télétravail, fourchette vraie, process, paie à apprendre, pas une promesse de poste."
        ),
      ],
    }),

    lesson({
      title: "Structure d'un appel professionnel",
      description:
        "Enchaîner ouverture, écoute du parcours, présentation du poste, vérifications, questions inverses et clôture, sans se perdre.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez conduire 20 minutes en six séquences, garder la main sans couper, et éviter que l'appel parte en conversation de couloir ou en interrogatoire."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Une structure stable protège le droit et la qualité. Sans structure, les questions interdites arrivent « naturellement » (« vous avez des enfants, ça va être dur les 5 h »). Avec une structure, chaque minute a une fonction. Séquence 1, ouverture (2 min) : qui vous êtes, durée, objet, methods (entretien de préqualification, pas de test aujourd'hui, suite possible), confidentialité, accord pour continuer. C'est le bon moment pour L. 1221-8, en langage clair, pas en article de code. Séquence 2, parcours (5-6 min) : « racontez-moi, au regard de ce poste, vos missions de paie / d'entretiens / d'accueil ». Vous écoutez, vous recoupez le CV, vous ne faites pas raconter la vie depuis le bac (âge). Séquence 3, poste (4 min) : vous dites le vrai — contrat, horaires, lieu, rattachement, missions, ce que le poste n'est pas. Séquence 4, vérifications (4 min) : préavis, prétentions, mobilité site, points knock-out réels (3×8, habilitation, CDD vs CDI). Séquence 5, questions inverses (3 min) : la personne pose les siennes ; vous répondez sans allégation. Séquence 6, clôture (2 min) : suite, délai, remerciement, pas de promesse.\n\nCette structure est une bonne pratique. Elle n'est pas imposée par un article. Elle rend L. 1221-6 applicable : chaque question se rattache à une séquence professionnelle. Elle rend F39588 plus sûr : la clôture ne dit pas « vous avez le poste ». Elle permet de gérer le temps : si la séquence 2 déborde, vous le dites et vous recentrez.\n\nLe vouvoiement reste la règle, y compris si la personne tutoie. Le sourire s'entend, la familiarité (« on va être copines ») n'a pas sa place. Les silences de quelques secondes après une question utile sont un outil, pas un malaise à combler par une question sur le week-end."
        ),
        note(
          "Ouvrir = informer la méthode (L. 1221-8). Clore = suite et délai, pas une promesse (F39588). Au milieu = faits du poste et du parcours, pas la vie privée."
        ),
        h("Méthode opérationnelle"),
        t(
          "Imprimez les six séquences avec un horodatage. Cochez. Si la personne dévie vers le personnel : « je recentre sur les missions du poste ». Si vous déviez : même discipline. À 18 minutes, amorcez la clôture."
        ),
        code(`DÉROULÉ 20 MIN

00-02  Ouverture, durée, méthode, accord
02-08  Parcours lié au poste (preuves CV)
08-12  Présentation vraie du poste
12-16  Préavis, prétentions, mobilité, knock-out réels
16-18  Questions de la personne
18-20  Suite, délai, remerciement

Filet : « Pour respecter votre temps, je passe à… »`),
        h("Exemple professionnel"),
        t(
          "Appel Éric Vasseur (s'il avait été shortlisté, ce que la correction CV déconseille) : la structure aurait forcé à coller dates et titre dès la séquence 2, puis à dire que le poste est un assistant, pas un DRH adjoint. Sans structure, l'appel serait devenu un débat d'ego. Avec structure, on clôt en 20 min avec un motif clair."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Commencer par « alors, vous gagnez combien ? ». Parler 15 minutes du projet d'entreprise. Oublier de présenter les 3×8. Laisser 40 minutes. Clore par « on se tient au courant » sans délai. Tutoyer. Rire d'un trou de CV."
        ),
        h("Situations particulières"),
        t(
          "Personne très bavarde : filet de temps, reprise de la séquence. Personne monosyllabique : questions ouvertes sur les missions (« donnez un exemple de variable de paie que vous collectiez »), pas des questions personnelles pour « détendre ». Interruption (atelier, enfant qui passe — vous n'en faites pas un critère). Visio qui tombe : reprendre par téléphone, ne pas juger le logement aperçu."
        ),
        h("Mise en pratique"),
        t(
          "Réordonnez ces répliques et dites celles que vous supprimez : (a) « Vous avez des enfants ? » (b) « Je suis X, 20 min, préqualification, puis éventuellement un entretien avec la responsable RH. » (c) « Quel est votre préavis ? » (d) « Le poste est à vous s'il me dit oui. » (e) « Vos missions de collecte de variables ? » (f) « Le poste est un CDI 35 h sur site, pas de télétravail. »"
        ),
        h("Correction détaillée"),
        t(
          "Ordre : b (ouverture / L. 1221-8), e (parcours), f (poste), c (vérification). Suppression : a (illicite), d (promesse). Les questions inverses et la clôture avec délai manquent : à ajouter. Temps : 20 min tenables."
        ),
      ],
    }),

    lesson({
      title: "Motivation, préavis, prétentions : questions licites",
      description:
        "Poser les trois questions classiques du junior avec un lien à l'emploi, sans pression et sans mensonge sur le budget.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez formuler une question de motivation professionnelle, une question de préavis / disponibilité, une question de prétentions, et les relier à L. 1221-6. Vous savez aussi quoi faire d'une réponse vague, d'un préavis long, d'une prétention hors fourchette."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Trois thèmes reviennent dans presque toutes les préqualifications, parce qu'ils ont un lien direct avec l'emploi : la motivation pour CE poste (pas pour « un job, n'importe lequel »), la date de disponibilité (préavis, autre process, contrainte professionnelle), les prétentions salariales au regard du budget. Lien avec l'emploi : L. 1221-6. Ce ne sont pas des questions sur la vie privée. « Pourquoi ce poste, dans ce site, avec ces horaires ? » est licite. « Pourquoi vous, une femme, en industrie ? » ne l'est pas. « Quel est votre préavis contractuel ? » est licite. « Vous ne pouvez pas partir plus tôt, vous êtes enceinte ? » ne l'est pas. « Quelles sont vos prétentions pour ce type de poste ? » est licite. « Combien gagne votre conjoint ? » ne l'est pas.\n\nLa motivation s'évalue sur des faits : compréhension des missions, questions posées, écart entre le projet de la personne et le poste réel (Éric Vasseur visait un DRH, pas un assistant : c'est un écart professionnel). Elle ne s'évalue pas sur l'enthousiasme théâtral, ni sur la loyauté supposée à l'employeur actuel (« si vous cherchez, c'est que vous n'êtes pas fiable »).\n\nLe préavis sert le calendrier du plan de recrutement, pas à juger une personne. Un préavis de trois mois n'est pas un KO si le manager peut attendre ou si l'intérim relais existe. Il devient un point de décision, tracé. Inciter à partir sans préavis, ou à « poser un arrêt maladie », est hors déontologie et peut être illicite.\n\nLes prétentions éclairent un possible accord, elles ne sont pas un piège. Au 13/10/2026, afficher le salaire dans l'offre n'est pas une obligation française consolidée ; en préqual, la transparence (donner la fourchette vraie) reste une bonne pratique, et toute fourchette dite doit être exacte (esprit L. 5331-3). Si la personne est vague, vous l'aidez : « nous avons une fourchette de 24-27 k€ pour ce niveau, est-ce un cadre possible ? » pas « donnez un chiffre ou j'arrête ». Si elle est au-dessus, vous ne mentez pas sur le max, vous notez l'écart, vous ne promettez pas un exception. La directive (UE) 2023/970 en transposition va dans le sens d'une information sur la rémunération : vous anticipez par loyauté, vous ne déclarez pas la loi déjà transposée sans vérifier le jour J."
        ),
        note(
          "Motivation, préavis, prétentions = lien avec l'emploi, donc posables. Famille, santé, conjoint, logement = non. Fourchette dite = fourchette vraie. Préavis long = donnée de calendrier, pas un défaut moral."
        ),
        h("Méthode opérationnelle"),
        t(
          "Ordre recommandé : motivation et compréhension du poste d'abord (la personne sait pour quoi elle parle), puis préavis, puis prétentions, éventuellement après avoir dit la fourchette. Notez les trois réponses en faits. Décision après, pas pendant la réponse salaire."
        ),
        code(`FORMULATIONS

Motivation
« Qu'est-ce qui, dans les missions d'assistant RH de site (paie, dossiers, accueil), correspond à ce que vous voulez faire dans les 18 prochains mois ? »

Préavis
« Quel est votre préavis actuel, et à quelle date pourriez-vous prendre un poste, en respectant vos obligations contractuelles ? »

Prétentions
« Pour ce CDI, la fourchette brute annuelle tenable est de 24 à 27 k€ selon expérience. Est-ce un cadre compatible avec vos prétentions ? »
(Si la politique interne n'affiche rien : « Quelles sont vos prétentions pour un CDI d'assistant RH de site, 35 h, sur site ? » puis vous donnez le vrai cadre dès que vous le pouvez.)`),
        h("Exemple professionnel"),
        t(
          "Samira vise 26 k€, fourchette 24-27, préavis 1 mois, motivation paie et dossiers. Adéquation. Inès ne sait pas encore chiffrer : vous donnez 24-27, elle dit « oui pour apprendre la paie si le cadre est celui-là ». Karim, en intérim, compare un taux horaire : vous convertissez avec lui sans inventer un brut annuel fictif, vous rappelez que le poste visé ici est un CDI 24-27, distinct d'une mission. "
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Commencer par le salaire. Dire 30 k€ pour « faire venir » alors que le max est 27. Juger un préavis. Demander le salaire actuel comme un droit (vous pouvez le demander s'il a un lien, beaucoup d'entreprises s'en passent ; ne le transformez pas en humiliation ; la transparence future de la directive va plutôt vers ce que l'employeur offre). Dire « de toute façon on ne paie jamais au max »."
        ),
        h("Situations particulières"),
        t(
          "Variable / 13e mois : les inclure dans le cadre vrai. Package startup (BSPCE) : ne pas le valoriser comme un salaire garanti. Intérim : rémunération de mission vs CDI, deux conversations. Personne au-dessus de la fourchette : stop mensonge, motif éventuel « écart de prétentions non tenable », pas « trop gourmand » dans l'ATS."
        ),
        h("Mise en pratique"),
        t(
          "La personne répond : « Mes prétentions dépendent, je ne sais pas, on verra. » En 6 répliques max, menez l'échange jusqu'à un cadre clair, sans pression, avec une fourchette vraie 24-27."
        ),
        h("Correction détaillée"),
        t(
          "Voir aussi la simulation 1 de la leçon 7. Attendu : reformuler le poste, donner 24-27, demander si ce cadre est possible oui/non/à discuter, noter. Pas « il faut un chiffre sinon j'arrête ». Pas « on s'alignera, ne vous inquiétez pas » (allégation). Pas de question sur le loyer ou les enfants pour « comprendre ses besoins d'argent »."
        ),
      ],
    }),

    lesson({
      title: "Questions interdites et cadre L. 1221-6 / L. 1132-1",
      description:
        "Reconnaître une question illicite, la recadrer, et réagir si c'est le candidat qui pose une question personnelle.",
      minutes: 22,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez citer le principe de L. 1221-6 (lien direct et nécessaire avec l'emploi) et de L. 1132-1 (critères protégés), lister les questions à ne jamais poser en préqual, et gérer une question personnelle que l'on vous pose."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "L'article L. 1221-6 du Code du travail dispose que les informations demandées au candidat, sous quelque forme que ce soit, ne peuvent avoir comme finalité que d'apprécier la capacité à occuper l'emploi ou les aptitudes professionnelles, et qu'elles doivent présenter un lien direct et nécessaire avec l'emploi. Le candidat répond de bonne foi. L'appel téléphonique est « une forme » : le texte s'applique. L'article L. 1132-1 interdit d'écarter une personne en raison de critères protégés (origine, sexe, mœurs, orientation sexuelle, identité de genre, âge, situation de famille ou grossesse, etc., apparence, nom, lieu de résidence, santé, handicap, langue autre que le français, et les autres critères de la liste légale). Une question n'est pas qu'une curiosité : elle oriente souvent la décision. « Vous prévoyez des enfants ? » n'est pas anodine ; c'est une porte vers un écartement illicite.\n\nSont notamment à bannir en préqualification d'un assistant RH (et dans la très grande majorité des postes de ce cours) : l'âge, la date de naissance « pour le dossier », la situation de famille, le projet d'enfants, le nom du conjoint, la santé, le handicap comme enquête, la religion, les opinions, le syndicat, l'orientation sexuelle, le logement, la banque, le quartier comme stigmate, l'origine, la nationalité hors cas très particuliers que les RH cadrent (emplois fermés), la photo, le poids, le sourire. Une question de trajet (« le site est à Ville-sur-Cher, 35 h sur site, ce trajet est-il tenable pour vous ? ») a un lien avec l'emploi. « Vous habitez en cité ? » n'en a pas.\n\nSi le manager vous dicte une question interdite, vous ne la posez pas. Vous proposez la formulation licite (trajet, non quartier ; disponibilité aux horaires, non enfants). Si la personne révèle spontanément un élément protégé (« je suis enceinte », « je suis en ALD »), vous ne notez pas l'élément comme critère, vous remerciez et vous revenez aux missions. L'aptitude médicale n'est pas votre sujet.\n\nSi la personne vous pose une question personnelle (« vous avez des enfants ? vous êtes marié ? vous vivez où ? »), vous n'êtes pas tenu de livrer votre vie, et vous ne transformez pas l'appel en échange symétrique de données protégées. Vous recadrez poliment : le cadre de l'échange est professionnel ; vous pouvez, si vous le souhaitez, donner une information neutre de fonction (« je suis chargé de recrutement sur ce site ») ; vous revenez au poste. C'est l'objet de la simulation 2. Ni familiarité, ni humiliation de la personne."
        ),
        note(
          "L. 1221-6 = lien direct et nécessaire. L. 1132-1 = on n'écarte pas pour un critère protégé. Une révélation spontanée n'autorise pas à s'en servir. Une question personnelle du candidat se recadre, elle ne s'échange pas."
        ),
        h("Méthode opérationnelle"),
        t(
          "Avant l'appel : rayer toute question douteuse. Pendant : si une question interdite vous vient, la remplacer ou la taire. Après : relire le CR, supprimer tout critère protégé. Escalade RH si le manager insiste pour l'illicite."
        ),
        code(`BANNI — exemples (préqual assistant RH)

Âge, date de naissance, « jeune équipe »
Enfants, mariage, pacs, grossesse, conjoint
Santé, arrêt maladie, handicap « vous tenez debout ? »
Religion, fêtes, nourriture
Origine, nom, « vous venez d'où ? », nationalité (hors cas RH cadrés)
Quartier, propriétaire/locataire, banque
Photo, look, poids
Opinions, syndicat
« Langue maternelle »`),
        h("Exemple professionnel"),
        t(
          "Le manager glisse : « Demande-lui si elle va encore poser des congés enfants comme la précédente. » Le junior n'en fait pas une question. Il vérifie la présence aux horaires de jour, 35 h, et le préavis. Il signale aux RH la consigne. L'appel d'Inès Morel ne contient aucune question de famille."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "« Pour briser la glace » + question enfants. Noter « enceinte » dans l'ATS. Répondre à une question personnelle par sa propre situation familiale. Demander la nationalité « pour la DPAE » trop tôt : la DPAE est une obligation employeur en fin de course (F23107), avec les pièces alors requises, pas un interrogatoire de préqual. Tester le français par moquerie d'accent."
        ),
        h("Situations particulières"),
        t(
          "Emplois réglementés / habilitations : les RH vous disent les pièces ; vous ne transformez pas en enquête d'origine. Travail de nuit / 3×8 : décrire les horaires, demander si la personne les accepte, pas si elle a un bébé. Visio et handicap visible : aménagement, pas KO. Candidat qui plaisante sur un critère protégé : vous ne suivez pas la plaisanterie comme critère."
        ),
        h("Mise en pratique"),
        t(
          "Classez : licite / illicite / à reformuler. (1) Préavis. (2) Projet d'enfants. (3) Trajet vers le site. (4) « Vous êtes musulman, le ramadan ? » (5) Outil de paie utilisé. (6) « Vous vivez chez vos parents ? »"
        ),
        h("Correction détaillée"),
        t(
          "(1) Licite. (2) Illicite, situation de famille / grossesse. (3) Licite si présence sur site réelle. (4) Illicite, religion. (5) Licite, aptitude. (6) Illicite, vie privée / résidence / âge déguisé. Reformulation de (3) déjà correcte ; (6) ne se reformule pas : on ne demande pas le foyer."
        ),
      ],
    }),

    lesson({
      title: "Compte rendu et décision de suite",
      description:
        "Écrire un CR utile le jour même, décider oui/non/vivier, informer la personne, sans promesse d'embauche.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez rédiger un compte rendu de préqualification (faits, critères, suite), le saisir dans l'ATS, informer le candidat dans un délai annoncé, et distinguer cette décision d'une offre de contrat."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Un appel sans compte rendu n'a pas eu lieu pour l'organisation. Le manager n'a pas les faits, le dossier n'a pas de trace, la preuve (L. 1134-5 / référentiel CNIL) n'a pas de motif, le candidat n'a pas de suite. Le CR se rédige le jour même, à partir de la grille d'appel, en faits : missions confirmées, préavis, prétentions, compréhension du poste, questions restantes, décision. Il ne contient pas de critère protégé, pas de jugement de voix, pas de « look », pas de roman.\n\nLa décision a trois issues principales. Oui : entretien manager, avec les points à approfondir. Non : motif professionnel, information de la personne selon la politique (un e-mail sobre, sans détail humiliant), pas de vivier sauf si la personne le souhaite et est informée. Vivier / plus tard : information, dernier contact daté, reco 2 ans. Un « on verra » sans statut n'est pas une décision.\n\nInformer la personne du délai (« je vous reviens vendredi ») et le tenir est une bonne pratique de relation candidat. Mentir sur le délai, ou laisser le silence trois semaines, n'est pas illicite au même titre qu'une question interdite, mais c'est une faute professionnelle. En revanche, écrire « le poste vous est promis, salaire X, début Y, le manager n'a plus qu'à signer » sort de la préqual et entre dans le champ F39588 : faites relire les RH, ce n'est plus un CR, c'est un acte d'engagement potentiel.\n\nLe CR est une donnée personnelle. Accès limité, pas un transfert sur un groupe WhatsApp de l'atelier. Durées : process en cours = base active ; non retenu après pourvoi = archive 5 ans preuve ; vivier = reco 2 ans. Opposition : respectée."
        ),
        note(
          "CR = faits + critère + suite, jour même. Pas de critère protégé. Pas de promesse (F39588). Délai de retour annoncé et tenu = bonne pratique. Archive 5 ans ≠ vivier 2 ans."
        ),
        h("Méthode opérationnelle"),
        t(
          "1. Immédiatement après l'appel : 10 minutes de rédaction.\n2. Statut dans l'ATS.\n3. Message au manager si oui (3 puces, pas le roman).\n4. Message au candidat à la date dite.\n5. Relire : L. 1132-1, L. 1221-6."
        ),
        code(`CR PRÉQUAL — modèle

Poste / date / auteur / candidat (identité pro)
Durée réelle de l'appel
Missions confirmées (preuves)
Points d'écart (faits)
Préavis / date possible
Prétentions / fourchette dite
Compréhension du poste (3×8, site, contrat)
Questions du candidat et réponses données
Décision : entretien manager / non / vivier
Motif (3 phrases)
Information candidat : date prévue
Critères protégés : aucun utilisé`),
        h("Exemple professionnel"),
        t(
          "CR Samira : missions paie confirmées, préavis 1 mois, 26 k€ dans 24-27, trajet à tester (1 jour de visite proposé, pas un KO résidence), oui manager. Message manager : 6 lignes. Message Samira : « suite proposée, entretien mardi 10 h, ce n'est pas une embauche ». CR Éric (s'il avait été appelé) : titres non étayés, écart d'attente, non, e-mail de clôture sobre."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "CR trois jours plus tard, faux souvenirs. Copier-coller le même CR. WhatsApp au manager : « la fille était mignonne ». Promettre le poste. Oublier d'écrire les prétentions. Dire non par SMS sans motif interne. Laisser le candidat relancer trois fois."
        ),
        h("Situations particulières"),
        t(
          "Manager qui n'a pas de créneau : vous ne laissez pas la personne en l'air ; vous donnez un nouveau délai. Plusieurs préqual le même jour : CR immédiatement, sinon mélange des dossiers. Candidat interne : CR dans l'espace RH prévu, feedback plus soigné, pas de commentaire d'équipe. Opposition en fin d'appel : statut opposition, pas de vivier."
        ),
        h("Mise en pratique"),
        t(
          "Rédigez le CR d'un appel (fictif) où Inès Morel confirme les sessions et le droit social enseigné, découvre l'absence de télétravail, accepte 24-27, préavis 2 mois, et demande si la paie sera formée. Décision : oui manager, sous réserve que la responsable confirme la formation paie."
        ),
        h("Correction détaillée"),
        t(
          "Le CR doit citer les preuves (sessions, évaluations, droit social), l'écart (paie à former — décision conditionnée, pas une promesse), le préavis comme donnée de calendrier, la fourchette compatible, le 0 télétravail compris, la question formation. Statut : oui entretien si RH/manager confirment la formation ; sinon ré-appel ou non justifié « paie exigée dès J1 sans formation, écart sur aptitude immédiate ». Aucune note d'âge, de famille, de « reconversion chelou ». Message à Inès : délai, pas « c'est gagné »."
        ),
      ],
    }),

    lesson({
      title: "Script complet et trois simulations dialoguées",
      description:
        "Disposer d'un script d'appel et travailler trois situations : salaire vague, question personnelle au recruteur, négociation trop tôt.",
      minutes: 30,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez suivre un script de préqualification et produire, face à trois déviations fréquentes, des répliques licites, claires, sans promesse et sans question interdite."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le script ci-dessous est un support, pas un texte à lire comme un télémarketing. Il couvre les six séquences, le poste d'assistant RH Forges (fictif), et les trois questions classiques. Vous l'adaptez au commercial, au technicien, à l'intérim, en changeant les faits, pas le cadre juridique.\n\nLes trois simulations entraînent des réflexes. Simulation 1 : la personne reste vague sur le salaire. Risque junior : presser, inventer un max, demander le loyer ou le conjoint. Bon réflexe : donner la fourchette vraie, demander si le cadre est possible, noter. Simulation 2 : la personne pose une question personnelle au recruteur. Risque : tout raconter, ou humilier. Bon réflexe : recadrer poliment sur le cadre professionnel, revenir au poste. Simulation 3 : la personne veut négocier le package avant même d'avoir entendu les missions. Risque : brader, promettre, se fâcher. Bon réflexe : présenter le poste d'abord, puis le cadre de rémunération, puis noter un écart s'il existe — pas de contrat improvisé (F39588).\n\nLes dialogues sont fictifs, vouvoyés, noms d'emprunt. Ils ne sont pas des enregistrements à copier tels quels dans un ATS. Après chaque dialogue, la correction dit pourquoi les répliques tiennent (L. 1221-6, L. 1132-1, L. 1221-8, loyauté de la fourchette, absence de promesse)."
        ),
        note(
          "Script = béquille. Simulations = réflexes. Jamais de question enfants/santé/origine. Jamais « le poste est à vous ». Fourchette = vraie. Noms d'emprunt."
        ),
        h("Méthode opérationnelle"),
        t(
          "Lisez le script à voix haute une fois. Jouez chaque simulation (vous = recruteur). Comparez à la version corrigée. Notez vos écarts (question interdite, promesse, fourchette floue)."
        ),
        h("Exemple professionnel"),
        t(
          "Le script et les trois dialogues tiennent lieu d'exemple PME/ETI. Transposition intérim : remplacer CDI et fourchette annuelle par mission, dates, taux aligné, mot « intérim » dès l'ouverture."
        ),
        code(`SCRIPT COMPLET — préqual 20 min
Poste : Assistant RH, CDI, Forges & Maintenance du Centre (fictif)
Candidat : [Samira / Inès / Karim — noms d'emprunt]

1. OUVERTURE
« Bonjour [prénom], je suis [nom], chargé(e) de recrutement. Merci pour ce créneau. L'échange dure 20 minutes : c'est une préqualification, pas un entretien d'embauche. Je vais revenir sur votre parcours au regard du poste, vous présenter le poste tel qu'il est, aborder la disponibilité et le cadre de rémunération, puis répondre à vos questions. La suite éventuelle est un entretien avec la responsable RH du site. Êtes-vous d'accord pour continuer ? Nous n'enregistrons pas cet appel ; je prendrai des notes professionnelles dans notre dossier de recrutement. Vous pouvez vous opposer à ce contact. »

2. PARCOURS
« Au regard d'un poste d'assistant RH (éléments de paie, dossiers, organisation d'entretiens, accueil), quelles missions de ces deux dernières années sont les plus proches ? Pouvez-vous donner un exemple concret ? »

3. POSTE (faits)
« Le poste est un CDI, 35 h, horaires de jour, sur le site de Ville-sur-Cher, pas de télétravail. Rattachement : responsable RH. Missions : variables de paie, dossiers, convocations, accueil J1. Ce n'est pas un poste de responsable RH, ni un CDI promis à l'issue de cet appel. »

4. VÉRIFICATIONS
« Quel est votre préavis, et à quelle date pourriez-vous prendre un poste en le respectant ?
Pour ce niveau, la fourchette brute annuelle tenable est de 24 à 27 k€ selon expérience. Est-ce un cadre compatible avec vos prétentions ?
Le site est à Ville-sur-Cher, présence quotidienne. Ce trajet est-il tenable pour vous ? »  [pas : « vous habitez où, c'est quel quartier ? »]

5. QUESTIONS INVERSES
« Quelles questions voulez-vous poser sur le poste ou le process ? »

6. CLÔTURE
« Je vous remercie. Je fais un retour à la responsable et je vous écris au plus tard [jour]. Cet échange ne constitue pas une promesse d'embauche. Bonne fin de journée. »`),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Lire le script sans écouter. Dans la sim. 1, exiger un chiffre « sinon non ». Dans la sim. 2, raconter sa garde alternée. Dans la sim. 3, dire « on s'alignera, venez ». Oublier L. 1221-8 en ouverture."
        ),
        h("Situations particulières"),
        t(
          "Si la personne refuse l'ouverture : vous n'insistez pas, opposition possible. Si elle enregistre de son côté : vous n'avez pas à accepter un usage hors cadre ; restez factuel, signalez aux RH. Si elle négocie un titre (« mettez responsable ») : le titre vrai, pas un mensonge d'annonce."
        ),
        h("Mise en pratique"),
        t(
          "Couvrez vos répliques et jouez d'abord les trois mises en situation (consignes ci-dessous), puis lisez les dialogues corrigés."
        ),
        code(`SIMULATION 1 — consigne
Candidat (Inès Morel, nom d'emprunt) vague sur le salaire.
INÈS : « Mes prétentions… ça dépend, je ne sais pas, on verra plus tard, je ne voudrais pas me fermer de porte. »
Vous : 6 répliques max. Interdits : conjoint, loyer, enfants, « donnez un chiffre ou j'arrête », max fictif.`),
        code(`SIMULATION 1 — dialogue corrigé

RECRUTEUR : « C'est entendu, on ne vous demande pas un chiffre au hasard. Je vous donne d'abord le cadre vrai du poste : CDI assistant RH de site, 35 h, fourchette brute annuelle 24 à 27 k€ selon expérience, maximum tenable à ce niveau. »
INÈS : « Ah, d'accord… je ne connais pas encore trop les salaires RH. »
RECRUTEUR : « Ce cadre vous convient-il pour continuer, oui, non, ou avec une réserve précise ? »
INÈS : « Oui, s'il y a une formation paie. Je n'ai pas de chiffre à moi. »
RECRUTEUR : « Je note : cadre 24-27 acceptable, réserve sur la formation paie, que je vérifie avec la responsable. Je ne vous invente pas un 32 k€ pour « garder le contact ». »
INÈS : « Merci. »
RECRUTEUR : « Nous poursuivons sur le préavis, puis je répondrai à vos autres questions. »

Pourquoi c'est juste : fourchette vraie (loyauté / L. 5331-3 par analogie), lien avec l'emploi (L. 1221-6), pas de vie privée, pas de promesse, la réserve paie est un fait de process.`),
        code(`SIMULATION 2 — consigne
Candidat (Karim El Amrani, nom d'emprunt) pose une question personnelle.
KARIM : « Et vous, vous avez des enfants ? Parce que le responsable RH, je voudrais savoir si c'est une équipe de parents, pour voir l'ambiance. »
Vous : recadrer sans humilier, sans livrer votre famille, sans transformer l'ambiance en critère familial.`),
        code(`SIMULATION 2 — dialogue corrigé

RECRUTEUR : « Je ne parle pas de ma situation familiale dans un recrutement, et je ne vous demanderai pas la vôtre : ce n'est pas un critère, la loi encadre les informations demandées (lien avec l'emploi) et interdit d'écarter quelqu'un pour la situation de famille. »
KARIM : « C'était juste pour l'ambiance, pardon. »
RECRUTEUR : « L'ambiance, je peux la décrire professionnellement : équipe RH de site, 35 h jour, travail avec la paie prestataire et les managers d'atelier. Si vous voulez savoir comment se passent les horaires et les congés, je peux dire les règles internes de pose de congés, pas la vie privée des collègues. »
KARIM : « Les congés, oui, ça m'intéresse. »
RECRUTEUR : « Congés selon les règles de l'entreprise, que la responsable détaillera ; pas de clause illicite. On revient à vos missions d'accueil des intérimaires : un exemple récent ? »

Pourquoi c'est juste : L. 1132-1 (situation de famille), L. 1221-6, recadrage poli, offre un substitut professionnel (congés, horaires), pas de chantage, pas de révélation de votre vie, pas de note ATS « curieux sur les enfants ».`),
        code(`SIMULATION 3 — consigne
Candidat (Samira Benali, nom d'emprunt) veut négocier avant le poste.
SAMIRA : « Avant qu'on parle du job, il me faut 30 k€, un jour de télétravail et le titre de responsable adjoint, sinon je raccroche. »
Vous : ne pas brader, ne pas vous fâcher, présenter le vrai poste, clore si l'écart est réel.`),
        code(`SIMULATION 3 — dialogue corrigé

RECRUTEUR : « Je ne peux pas négocier un contrat sur un poste que je ne vous ai pas décrit : ce ne serait ni sérieux ni exact. Laissez-moi 3 minutes de faits, puis on regarde le cadre. »
SAMIRA : « D'accord, mais 30 k€ c'est ma ligne. »
RECRUTEUR : « Le poste est un CDI d'assistant RH, pas de responsable adjoint ; 35 h sur site, pas de télétravail ; missions paie, dossiers, entretiens, accueil ; fourchette tenable 24-27 k€. Ce n'est pas une ouverture à 30 k€ ni à un autre titre. »
SAMIRA : « Donc vous ne pouvez rien faire. »
RECRUTEUR : « Je ne peux pas vous promettre 30 k€, le télétravail ou un titre qui n'existe pas. Si 24-27, le titre d'assistant et le sur-site ne vous conviennent pas, nous arrêtons ici, sans mauvaise surprise plus tard. Si une partie du poste vous intéresse malgré tout, on peut finir l'échange et je tracerai l'écart. »
SAMIRA : « Je préfère arrêter. »
RECRUTEUR : « Merci de l'avoir dit maintenant. Je clôture le dossier pour ce poste, sans promesse et sans relance. Vous pouvez demander à ne plus être contactée. Bonne continuation. »

Pourquoi c'est juste : pas d'allégation sur le titre, le lieu, la rémunération (L. 5331-3), pas de promesse (F39588), respect de L. 1221-6 (on parle du poste), décision tracée, opposition possible, pas d'insulte (« trop gourmande ») dans le CR : motif = écart de cadre (titre, télétravail, prétentions 30 vs 24-27).`),
        h("Correction détaillée"),
        t(
          "Vos versions sont réussies si : (1) une fourchette vraie et un oui/non/réserve, sans vie privée ; (2) un refus de parler enfants, un substitut professionnel, un retour aux missions ; (3) le poste décrit avant tout deal, un non possible, zéro promesse, motif d'écart factuel. Si vous avez cédé sur 30 k€ « pour la shortlist », vous avez créé une allégation et un conflit avec les RH. Si vous avez répondu « oui j'ai deux enfants », vous avez ouvert un échange hors L. 1221-6. Rejouez uniquement la simulation manquée."
        ),
      ],
    }),

    quizLesson({
      title: "Quiz — Préqualification téléphonique",
      description: "Dix questions : objectifs, structure, prétentions, questions interdites, CR.",
      passing_score: 70,
      minutes: 12,
      questions: [
        q({
          question: "La préqualification téléphonique a surtout pour but de :",
          options: [
            "A. Vérifier l'adéquation minimale, informer (y compris sur les méthodes, L. 1221-8) et décider d'une suite tracée — ce n'est pas une embauche.",
            "B. Remplacer la médecine du travail.",
            "C. Obtenir une promesse unilatérale signée au téléphone.",
            "D. Contrôler l'apparence et l'accent.",
          ],
          correct: 0,
          explanation:
            "Les trois objectifs du cours. L'apparence et l'accent comme filtres heurtent L. 1132-1. F39588 : une promesse n'est pas l'objet de l'appel. La médecine du travail est un autre moment, employeur / santé au travail.",
        }),
        q({
          question: "Dès l'ouverture de l'appel, vous informez notamment :",
          options: [
            "A. Qui vous êtes, la durée, que c'est une préqualification, la suite possible — information sur la méthode (L. 1221-8).",
            "B. Votre situation de famille, pour « mettre en confiance ».",
            "C. Que l'appel est enregistré sur votre téléphone personnel, sans le dire.",
            "D. Que le poste est déjà promis.",
          ],
          correct: 0,
          explanation:
            "L. 1221-8 : information préalable des méthodes. L'enregistrement sauvage est un traitement de données non cadré. La situation de famille du recruteur n'a pas sa place. La promesse n'est pas l'ouverture (F39588).",
        }),
        q({
          question: "« Vous prévoyez des enfants dans l'année ? » en préqual d'assistant RH est :",
          options: [
            "A. Illicite : situation de famille / grossesse, sans lien nécessaire avec l'emploi (L. 1132-1, L. 1221-6).",
            "B. Licite, car les congés impactent l'équipe.",
            "C. Licite en CDI, illicite en CDD.",
            "D. Recommandée par Service-Public F23107 (DPAE).",
          ],
          correct: 0,
          explanation:
            "Le type de contrat ne lève pas L. 1132-1. Les congés se décrivent par les règles internes, pas par une enquête de fécondité. La DPAE (F23107) est une formalité d'embauche de l'employeur, pas une question de préqual sur les enfants.",
        }),
        q({
          question: "Demander le préavis contractuel est :",
          options: [
            "A. Licite : lien direct avec la date de prise de poste ; un préavis long est une donnée de calendrier, pas un défaut moral.",
            "B. Illicite, comme toutes les questions de dates.",
            "C. Un motif automatique de knock-out.",
            "D. L'occasion d'inciter à un arrêt maladie pour partir plus tôt.",
          ],
          correct: 0,
          explanation:
            "L. 1221-6 : capacité à occuper l'emploi dans le temps. Inciter à un arrêt maladie est hors cadre. Les dates de naissance, elles, visent l'âge (protégé) : ne pas confondre préavis et âge.",
        }),
        q({
          question: "Au 13/10/2026, donner une fourchette salariale en préqualification est :",
          options: [
            "A. Une bonne pratique de loyauté (et un montant qui, s'il est dit, doit être vrai) ; l'affichage dans l'offre n'est pas encore une obligation française consolidée, directive 2023/970 en transposition.",
            "B. Interdit, le salaire ne se parle jamais au téléphone.",
            "C. Déjà obligatoire dans l'offre, donc inutile à l'appel.",
            "D. L'occasion d'annoncer 40 k€ pour faire venir, puis de payer 24.",
          ],
          correct: 0,
          explanation:
            "Cohérence avec le module offres et F39133. L. 5331-3 si le montant est faux. Ce n'est pas interdit de parler rémunération en préqual : c'est même le lieu classique, avec lien à l'emploi.",
        }),
        q({
          question: "Un candidat vous demande si vous avez des enfants. La bonne conduite est :",
          options: [
            "A. Recadrer poliment sur le cadre professionnel, ne pas livrer votre vie privée, ne pas retourner la question, revenir au poste (simulation 2).",
            "B. Répondre en détail et demander la même chose.",
            "C. Raccrocher sans un mot.",
            "D. Noter « candidat trop personnel, origine ? » dans l'ATS.",
          ],
          correct: 0,
          explanation:
            "Le cours entraîne ce recadrage. L'échange de données familiales n'est pas une méthode pertinente. Le commentaire ATS orienté origine est illicite. Raccrocher net n'est pas professionnel ; un recadrage suffit en général.",
        }),
        q({
          question: "Un candidat exige 30 k€, du télétravail et un titre de responsable avant d'entendre le poste. Vous :",
          options: [
            "A. Décrivez d'abord le poste vrai (assistant, sur site, 24-27), refusez l'allégation, et acceptez d'arrêter si l'écart demeure — sans promesse.",
            "B. Dites oui à tout pour « le garder en shortlist ».",
            "C. L'insultez dans le CR (« gourmand »).",
            "D. Inventez un titre le temps de l'entretien manager.",
          ],
          correct: 0,
          explanation:
            "Simulation 3. L. 5331-3 (nature, rémunération, lieu), F39588 (pas de promesse bricolée). Le CR reste factuel : écart de cadre. La shortlist n'est pas un théâtre.",
        }),
        q({
          question: "Le compte rendu de préqualification doit :",
          options: [
            "A. Être rédigé le jour même, en faits liés aux critères, avec une suite, sans critère protégé, distinct d'une offre de contrat.",
            "B. Être envoyé sur le WhatsApp de l'atelier avec la photo du CV.",
            "C. Être oral et jamais écrit, « pour le RGPD ».",
            "D. Promettre l'embauche pour rassurer.",
          ],
          correct: 0,
          explanation:
            "Le RGPD n'interdit pas un CR professionnel dans l'ATS ; il encadre finalité, accès, durées. WhatsApp + photo : apparence, sécurité, destinataires excessifs. La promesse n'a pas sa place (F39588).",
        }),
        q({
          question: "Les méthodes d'aide au recrutement, dont la préqualification, doivent être :",
          options: [
            "A. Pertinentes au regard de la finalité (L. 1221-9) et portées à la connaissance du candidat préalablement (L. 1221-8).",
            "B. Secrètes, pour « tester le naturel ».",
            "C. Fondées sur l'apparence physique, critère neutre.",
            "D. Identiques à un test médical.",
          ],
          correct: 0,
          explanation:
            "Les deux articles sont dans legal-sources.json. L'apparence est un critère protégé, pas un outil. Le secret n'est pas un principe de L. 1221-8 (c'est l'inverse : informer). Le médical n'est pas la préqual.",
        }),
        q({
          question: "Noter dans l'ATS, après préqual, « accent, 93, trop vieux pour l'équipe » est :",
          options: [
            "A. Illicite et dangereux : langue / résidence / âge (L. 1132-1) ; le motif doit rester professionnel (missions, préavis, fourchette, compréhension du poste).",
            "B. Conforme à l'archive 5 ans, qui exige le plus de détails intimes possible.",
            "C. Une recommandation CNIL.",
            "D. Obligatoire si le candidat a posé une question personnelle.",
          ],
          correct: 0,
          explanation:
            "L'archive probatoire (L. 1134-5 / CNIL) a besoin de motifs professionnels, pas d'un commentaire discriminatoire. La CNIL ne recommande pas ces notes. Une question personnelle du candidat se recadre, elle n'autorise pas un portrait illicite.",
        }),
      ],
    }),
  ],
};
