import { lesson, h, t, note, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 5,
  title: "Rédiger et diffuser une offre d'emploi",
  description:
    "Rédiger une annonce claire, datée, en français, non discriminatoire et non trompeuse, puis la diffuser et la retirer sans confusion avec une promesse d'embauche.",
  lessons: [
    lesson({
      title: "Structure d'une annonce professionnelle",
      description:
        "Connaître les blocs d'une offre utile au candidat et au process, et distinguer l'annonce de la fiche de poste.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez assembler une annonce en blocs stables (intitulé, employeur, missions, profil, conditions, modalités de candidature), distinguer ce qui relève de la fiche de poste interne et ce qui se publie, et relire un texte avec l'œil du candidat et l'œil du juriste."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Une offre d'emploi est un texte public qui décrit un emploi à pourvoir, pour attirer des candidatures utiles. Elle n'est pas la fiche de poste : la fiche est un outil interne de cadrage (missions, responsabilités, critères, rattachement). L'annonce en est une version lisible, honnête et licite. Tout ce qui est dans l'annonce doit pouvoir être tenu. Tout ce qui est dans la fiche n'a pas à figurer dans l'annonce (outils internes, critères de ranking, commentaires manager). Inversement, l'annonce contient des éléments que la fiche oublie parfois : comment postuler, date, lieu précis, type de contrat, rythme, accessibilité, mentions d'information.\n\nUne structure stable n'est pas un gadget pédagogique. Elle réduit trois risques. Premier risque : le candidat ne comprend pas le métier et postule à côté, ou ne postule pas alors qu'il correspond. Deuxième risque : l'annonce promet ce que le poste n'est pas (allégation fausse ou trompeuse, article L. 5331-3 du Code du travail : existence, nature, description de l'emploi, rémunération et avantages, lieu de travail). Troisième risque : une mention illicite s'y glisse (sexe, situation de famille, âge, origine, etc.).\n\nLes blocs utiles, dans un ordre lisible, sont : un intitulé clair ; l'identité de l'employeur ou a minima le secteur et la taille si la confidentialité l'impose, sans mensonge ; les missions principales (six à dix verbes, pas un roman) ; le rattachement ; le profil au regard de l'emploi (compétences, expériences, diplômes réellement nécessaires) ; les conditions (contrat, durée si CDD, temps de travail, horaires, lieu, télétravail, rémunération si vous choisissez de l'indiquer) ; l'accessibilité et les modalités pratiques ; la date ; la façon de postuler et, le cas échéant, une information sur les méthodes (tests, délais). Cette structure est une bonne pratique professionnelle. Les obligations légales précises (français, mentions interdites, allégations) sont traitées dans les leçons suivantes : elles s'appliquent quel que soit l'ordre des blocs.\n\nL'annonce n'est pas une promesse unilatérale d'embauche. Publier un poste n'oblige pas à embaucher. Retirer une offre avant acceptation d'une offre de contrat n'est pas le même acte que retirer une promesse unilatérale (fiche Service-Public F39588, jurisprudence expliquée par Service-Public). Vous rédigez donc sans formules du type « vous êtes embauché » ou « poste garanti à l'issue de l'entretien »."
        ),
        note(
          "L'annonce est un document de recrutement, pas un contrat. Elle doit être exacte (L. 5331-3) sans devenir une promesse d'embauche. En cas de doute sur une formulation d'engagement, faites relire les RH avant publication."
        ),
        h("Méthode opérationnelle"),
        t(
          "1. Partir de la fiche de poste validée, pas d'un vieux texte d'annonce.\n2. Remplir les blocs dans un brouillon daté, en français.\n3. Faire relire le manager sur les missions et les conditions réelles (horaires, déplacements, astreintes).\n4. Faire relire les RH sur le licit (discriminations, allégations, salaire, logo, confidentialité).\n5. Contrôler : un candidat externe comprend-il le métier en trente secondes ? Un critère est-il sans lien avec l'emploi (L. 1221-6) ?\n6. Enregistrer la version publiée (traçabilité).\n7. Prévoir la date de revue et de retrait."
        ),
        code(`BLOCS D'ANNONCE — checklist de rédaction

[ ] Date de l'offre / version
[ ] Intitulé (clair, ouvert, sans critère illicite)
[ ] Employeur ou cadre d'emploi honnête
[ ] Missions (verbes, livrables, rattachement)
[ ] Profil (lien direct avec l'emploi)
[ ] Contrat, durée, temps de travail, horaires, lieu
[ ] Rémunération / avantages (si vous les indiquez : exacts)
[ ] Accessibilité / modalités pratiques
[ ] Comment postuler, délai, méthodes éventuelles
[ ] Relu manager (réalité) + RH (droit)`),
        h("Exemple professionnel"),
        t(
          "Chez Alizé Services, le manager envoie un paragraphe : « On cherche un super commercial, jeune, motivé, pour exploser les objectifs, évolution super rapide, anglais un plus. » Le recruteur junior ne publie pas ce paragraphe. Il le convertit en blocs : intitulé « Commercial BtoB TPE-PME (H/F) » ou variante épicène ; missions de prospection et suivi ; profil 2 à 5 ans de vente BtoB (le « jeune » disparaît) ; CDI, 35 h, secteur Lyon, véhicule ; pas de promesse d'évolution. L'anglais est retiré : aucun client international. La structure a servi de filtre avant le droit détaillé."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Publier la fiche de poste brute (jargon interne, 4 pages). Rédiger un slogan au lieu de missions. Oublier le contrat ou le lieu. Copier l'annonce d'un concurrent. Laisser le manager publier sur son LinkedIn personnel un texte non relu. Mélanger trois postes dans une seule annonce. Omettre la date, puis ne plus savoir quelle version circule."
        ),
        h("Situations particulières"),
        t(
          "Annonce confidentielle (remplacement non annoncé) : on décrit le poste sans exposer la personne en place, éventuellement via un cabinet ; on ne ment pas sur l'employeur au point de tromper (L. 5331-3). Annonce de volume (plusieurs préparateurs) : un texte unique, nombre de postes, process de session. Annonce cabinet : le cabinet doit rester exact sur le client et le poste ; votre brief est la source. Intérim : l'offre de mission n'est pas rédigée comme un CDI déguisé."
        ),
        h("Mise en pratique"),
        t(
          "Reconstituez les blocs manquants de cette ébauche : « Ici on recrute dans la tech, ambiance start-up, venez rejoindre l'aventure, stack moderne, remote possible. » Listez au moins huit informations absentes sans lesquelles vous refusez de publier."
        ),
        h("Correction détaillée"),
        t(
          "Informations absentes, a minima : date ; intitulé de métier réel ; missions ; type de contrat ; employeur identifiable ou cadre non trompeur ; lieu (le « remote possible » est ambigu : France ? 2 jours ?) ; temps de travail ; profil en lien avec l'emploi ; rémunération ou mention volontairement absente (choix, pas flou) ; modalités de candidature ; horaires. « Ambiance start-up » et « aventure » ne décrivent pas l'emploi. « Stack moderne » sans missions est une allégation creuse, risquée si elle masque un poste de support. Vous refusez de publier tant que manager et RH n'ont pas rempli les blocs."
        ),
      ],
    }),

    lesson({
      title: "Intitulé du poste : clarté, inclusion, ce que dit le droit",
      description:
        "Choisir un intitulé compréhensible, ouvert à toutes et tous, sans présenter H/F/X comme « la » loi unique.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez formuler un intitulé qui nomme le métier, reste licit vis-à-vis du sexe et de la situation de famille, et vous savez expliquer qu'un complément du type H/F, H/F/X ou une formulation épicène est une bonne pratique d'ouverture, pas une formule magique unique imposée par un article isolé."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "L'intitulé est le premier filtre. S'il est jargonné, anglophone sans équivalent expliqué, ou trop marketing (« ninja », « rockstar »), les personnes qui font le métier ne se reconnaissent pas, et les moteurs de recherche d'offres ne relient pas le poste aux bons synonymes. S'il contient un critère de sexe, d'âge ou de situation de famille, il expose l'entreprise. L'article L. 1132-1 du Code du travail interdit d'écarter une personne d'un recrutement en raison de critères protégés, parmi lesquels le sexe, l'âge, la situation de famille, l'origine, le handicap, l'apparence, le nom, etc. Par ailleurs, le droit des offres interdit de mentionner le sexe ou la situation de famille dans une offre, sous réserves d'exceptions limitées (artiste, mannequin/modèle) — voir L. 5331-2 / L. 1142-1 / R. 1142-1, fiche Service-Public Entreprendre F39133, vérifiée le 02/10/2025.\n\nDans ce cadre, deux questions se posent. Première : l'intitulé décrit-il un métier, ou un stéréotype (« hôtesse », « jeune diplômé », « homme de terrain ») ? « Hôtesse d'accueil » oriente le sexe ; « chargé d'accueil » ou « agent d'accueil » décrit le métier. Deuxième : faut-il ajouter H/F, F/H, H/F/X, « tous genres » ? Beaucoup d'entreprises le font pour signaler que le poste est ouvert. C'est une bonne pratique professionnelle, cohérente avec l'interdiction de réserver l'emploi à un sexe. Ce n'est pas « la » loi unique, ni l'unique formulation valable. Un intitulé épicène (« responsable paie », « technicien de maintenance » au sens du métier, « personne chargée de ») peut suffire s'il n'enferme personne. Un H/F plaqué sur un texte par ailleurs sexiste (« H/F, elle gérera aussi le café ») ne sauve rien.\n\nL'anglais dans l'intitulé obéit à une autre règle : l'offre est rédigée en français si le travail s'effectue en France, ou si l'auteur/employeur est français pour un travail à l'étranger (article L. 5331-4). Un terme étranger sans équivalent doit s'accompagner d'une description française suffisamment détaillée. Un intitulé « Account Executive » seul, sans description française du métier, ne respecte pas cette logique. Vous pouvez conserver un usage professionnel connu, à condition que le français porte le sens.\n\nEnfin, l'intitulé doit coller au marché (module stratégie) : trop fantaisiste, il rate les alertes candidats ; trop générique (« collaborateur ») il attire un flux hors sujet. L'intitulé n'est pas un outil de négociation salariale, ni une promesse de statut (« futur manager »)."
        ),
        note(
          "Bonne pratique, pas formule unique. H/F, H/F/X, « ouvert à toutes et tous » ou un intitulé épicène servent à marquer l'ouverture. L'obligation, elle, est de ne pas réserver l'offre à un sexe ou à une situation de famille (exceptions limitées) et de ne pas discriminer à l'embauche (L. 1132-1). Relisez F39133 le jour J."
        ),
        h("Méthode opérationnelle"),
        t(
          "1. Partir du nom du métier utilisé en interne et le traduire en langage de marché (synonymes de la note de marché).\n2. Retirer tout marqueur de sexe, d'âge, de beauté, de situation de famille.\n3. Choisir, selon la politique interne, un intitulé épicène et/ou un complément d'ouverture (H/F ou H/F/X) — politique / bonne pratique.\n4. Si un anglicisme demeure, ajouter la dénomination française et détailler les missions.\n5. Tester : une personne du métier comprend-elle en cinq secondes ? Un lecteur externe croit-il que le poste est réservé à un groupe ?\n6. Faire valider RH les intitulés sensibles (accueil, assistance, métiers très genrés dans les usages)."
        ),
        code(`INTITULÉS — reformuler

À éviter                         | Piste
---------------------------------|------------------------------------------
Hôtesse d'accueil jeune et jolie | Agent d'accueil / chargé d'accueil (H/F)
Commercial H, permis obligatoire  | Commercial BtoB — permis requis si lien réel avec l'emploi
Ninja Developer                   | Développeur ou développeuse backend (H/F/X) + missions FR
Assistante RH (la)                | Assistant RH / assistant de gestion RH (H/F)
Jeune diplômé finance             | Analyste financier junior — diplôme en lien avec l'emploi`),
        h("Exemple professionnel"),
        t(
          "Forges & Maintenance du Centre publiait « Mécanicien (homme, force physique, 25-40 ans) ». Le junior reformule : « Technicien de maintenance mécanique (H/F) ». Les exigences physiques, si elles sont réelles, se décrivent dans les conditions (port de charges, postures) comme des faits du poste, pas comme un sexe ou un âge. L'habilitation électrique reste dans le profil, lien direct avec l'emploi. Le H/F est ajouté selon la politique interne ; l'intitulé épicène « technicien de maintenance mécanique » portait déjà le métier."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Croire que coller « H/F » suffit, même si le texte dit « elle devra ». Utiliser « M/Mme » dans l'intitulé. Garder « jeune » pour dire junior. Traduire un poste français uniquement en anglais pour « faire moderne ». Inventer un titre ronflant qui ne correspond pas au statut (L. 5331-3). Oublier que « langue maternelle française » n'est pas un intitulé, c'est un critère illicite ou excessif : le besoin est souvent « rédaction professionnelle en français », lien avec l'emploi."
        ),
        h("Situations particulières"),
        t(
          "Exceptions artistes / mannequins : ne les étendez pas à un poste administratif. Métiers réglementés : l'intitulé peut renvoyer au titre protégé (infirmier, avocat) ; vérifiez avec les RH que le diplôme demandé est bien une condition d'exercice. Offre internationale : français + description détaillée si L. 5331-4 s'applique. Marque employeur : un slogan peut accompagner, pas remplacer, l'intitulé."
        ),
        h("Mise en pratique"),
        t(
          "Corrigez : « Digital Girl / Community Manager, 22-28 ans, native, pour animer nos réseaux avec le sourire. » Proposez un intitulé + une phrase d'ouverture, et listez les critères à retirer."
        ),
        h("Correction détaillée"),
        t(
          "Intitulé possible : « Community manager / animateur des réseaux sociaux (H/F) » ou formulation épicène « gestion des communautés et des réseaux sociaux ». À retirer : Girl (sexe), 22-28 ans (âge), native (origine / langue comme critère fermé). « Avec le sourire » et l'apparence orientent vers un critère d'apparence physique, protégé par L. 1132-1. Le besoin réel se rédige en missions : publier, modérer, relayer, mesurer. Le H/F (ou H/F/X) est une bonne pratique d'ouverture, pas un sésame si le reste du texte reste genré."
        ),
      ],
    }),

    lesson({
      title: "Missions, profil, conditions de travail et accessibilité",
      description:
        "Décrire le travail réel, les exigences nécessaires, et les conditions — y compris l'accessibilité — sans mensonge ni critère inutile.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez rédiger des missions en verbes, un profil limité à ce qui a un lien direct et nécessaire avec l'emploi (L. 1221-6), des conditions de travail exactes, et une information d'accessibilité utile, sans transformer le handicap en critère de tri illicite."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Les missions disent ce que la personne fera. Le profil dit ce dont on a besoin pour le faire. Les conditions disent dans quel cadre (contrat, horaires, lieu, pénibilité, outils). Mélanger les trois produit des annonces creuses : « vous serez force de proposition, agile, passionné » n'est ni une mission ni un critère évaluable. Six à dix missions concrètes valent mieux qu'une charte de valeurs. Chaque exigence du profil doit pouvoir se justifier par l'emploi : un diplôme, une habilitation, un permis, une langue, une expérience de durée, un outil. L'article L. 1221-6 du Code du travail limite les informations demandées au candidat à celles qui ont un lien direct et nécessaire avec l'emploi et les aptitudes professionnelles. L'annonce n'est pas un questionnaire, mais elle oriente déjà ce que les gens croient devoir prouver. Un « anglais courant » alors qu'aucun interlocuteur n'est anglophone est une exigence excessive. Un « permis B » est légitime si le poste est itinérant ; il ne l'est pas pour un poste 100 % sédentaire desservi par les transports.\n\nLes conditions de travail sont le terrain d'élection des allégations trompeuses (L. 5331-3) : « horaires de jour » alors que le poste est en 3×8 ; « télétravail » alors qu'il s'agit d'un jour par mois ; « CDI » alors que le besoin est un CDD de quatre mois ; lieu « Paris » alors que le site est à 40 km. Vous décrivez le réel, même s'il réduit le volume de candidatures. Un volume de candidatures obtenu par omission se paie en désistements et en contentieux.\n\nL'accessibilité fait partie des conditions. Elle recouvre le lieu (locaux, transports, télétravail), l'organisation (temps partiel possible ou non, aménagements), et l'information aux personnes en situation de handicap. Mentionner que le poste est ouvert aux personnes en situation de handicap, indiquer un contact pour échanger sur les aménagements, décrire les contraintes physiques réelles (station debout, port de charges, écran) est une bonne pratique, cohérente avec l'interdiction de discriminer en raison du handicap (L. 1132-1) et avec l'obligation d'emploi qui pèse sur l'employeur — obligation de l'employeur, pas un slogan à inventer. Vous n'écrivez pas « sauf handicap » ni « bonne santé obligatoire ». Vous n'utilisez pas le handicap comme un filtre de présélection. La médecine du travail, plus tard, appréciera l'aptitude ; ce n'est pas le rôle de l'annonce.\n\nLe profil « junior » ou « 5 ans d'expérience » doit rester un ordre de grandeur lié à la complexité du poste, pas un âge déguisé. Un diplôme peut être exigé s'il est nécessaire à l'emploi ou réglementé ; s'il n'est qu'un habitude, vous ouvrez aux équivalences et à la reconversion, ce qui est une politique / bonne pratique, pas une obligation unique pour tous les métiers."
        ),
        note(
          "Lien direct et nécessaire avec l'emploi (L. 1221-6). Chaque ligne du profil est un futur critère d'évaluation. Si vous ne savez pas justifier le permis, la langue, le diplôme ou l'âge apparent, retirez-les. Les conditions inexactes tombent sous L. 5331-3."
        ),
        h("Méthode opérationnelle"),
        t(
          "1. Extraire de la fiche 6 à 10 missions, verbe + objet + éventuellement fréquence.\n2. Pour chaque exigence de profil : écrire la justification « lien avec l'emploi » ; sinon, supprimer.\n3. Faire confirmer par le manager les horaires, le lieu, les déplacements, les astreintes, le télétravail réel, la pénibilité.\n4. Ajouter une phrase d'accessibilité et un canal pour en parler (politique interne / bonne pratique).\n5. Relire à voix haute : un candidat comprend-il sa semaine type ?\n6. Contrôle RH : aucune mention de santé, de beauté, de situation de famille."
        ),
        h("Exemple professionnel"),
        t(
          "CDD préparateur de commandes, entrepôt. Missions : réceptionner, préparer les commandes, emballer, signaler les écarts, respecter les règles de sécurité. Profil : expérience entrepôt ou formation logistique utile, lecture de bons, CACES si l'emploi le requiert réellement (sinon formation prévue — à dire vrai). Conditions : CDD 4 mois, horaires 5 h-13 h, station debout, port de charges, site desservi par une ligne de bus (fréquence à indiquer sans mensonge). Accessibilité : contraintes physiques décrites ; contact RH pour échanger sur un aménagement ; pas de « bonne condition physique obligatoire » comme slogan d'exclusion. Le CDI n'est pas promis dans l'annonce."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Liste de qualités (dynamique, stress-resistant, souriant). Exiger 10 ans d'expérience pour un poste junior. Cacher les 3×8. Écrire « évolution CDI garantie » sur un CDD. Oublier le lieu. Copier un profil de cadre sur un poste d'assistant. Mentionner « non fumeur » ou « sans enfant » : illicite. Décrire l'accessibilité par « locaux neufs » alors qu'il y a trois marches sans alternative."
        ),
        h("Situations particulières"),
        t(
          "Astreintes et déplacements : les chiffrer (fréquence), pas « de temps en temps ». Télétravail : nombre de jours, zone géographique, jours imposés sur site. Temps partiel : le dire si le poste l'est, ne pas le promettre s'il ne l'est pas. Travailleur handicapé déjà en poste (aménagement existant) : ne pas exposer sa situation dans une annonce de remplacement."
        ),
        h("Mise en pratique"),
        t(
          "Le manager veut : « Permis B obligatoire, anglais bilingue, disponibilité soirs et week-ends, excellente présentation, 25-35 ans » pour un assistant RH sédentaire, 35 h de jour, paie et administration du personnel, aucun visiteur international. Que gardez-vous, que reformulez-vous, que refusez-vous ?"
        ),
        h("Correction détaillée"),
        t(
          "Vous refusez l'âge (L. 1132-1) et « excellente présentation » comme critère d'apparence. Le permis n'a pas de lien avec un poste sédentaire : vous le retirez, sauf déplacement réel documenté. L'anglais bilingue : sans interlocuteur international, vous le retirez ou le rétrogradez en « non requis ». Soirs et week-ends : si c'est faux, L. 5331-3 ; si une astreinte paie existe deux soirs par mois, vous la décrivez exactement. Vous gardez : missions paie et administration, outils, discrétion, expérience ou formation RH en lien avec l'emploi, 35 h de jour, lieu."
        ),
      ],
    }),

    lesson({
      title: "Obligations légales de l'offre : français, date, non-discrimination, allégations",
      description:
        "Appliquer les règles du Code du travail et de la fiche Service-Public sur l'offre, sans inventer d'article.",
      minutes: 22,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez citer et appliquer quatre exigences : rédaction en français (L. 5331-4), datation et traçabilité de l'offre, absence de mentions discriminatoires (L. 1132-1, L. 5331-2 et textes liés), absence d'allégations fausses ou trompeuses (L. 5331-3). Vous savez relire F39133 avant une publication réelle."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le droit des offres d'emploi n'est pas un « plus » de communication. C'est un cadre pénalement et civilement sensible, que le recruteur junior applique avant de cliquer sur « publier ». Quatre piliers structurent votre relecture, à la date de vérification de ce cours (13/10/2026).\n\nPremier pilier : la langue. L'article L. 5331-4 du Code du travail impose une offre rédigée en français si le travail s'effectue en France (ou si l'auteur/employeur est français pour un travail à l'étranger). Un terme étranger sans équivalent français s'accompagne d'une description française suffisamment détaillée. Une annonce uniquement en anglais pour un poste basé à Lyon, même « tech », ne respecte pas cette règle. Vous pouvez joindre une version anglaise pour un public international : le français reste porteur.\n\nDeuxième pilier : la date et la traçabilité. Une offre qui circule sans date, sans version, sans responsable, ne peut être ni mise à jour, ni retirée proprement, ni produite en cas de contestation. La fiche Service-Public Entreprendre F39133 (« Préparer et diffuser une offre d'emploi ») est la référence opérationnelle à relire le jour J. Dater l'offre, conserver la version publiée, indiquer une date de validité ou de revue est une exigence professionnelle de traçabilité, alignée sur cette fiche et sur le besoin de preuve. Vous ne laissez pas une annonce « éternelle » en ligne alors que le poste est pourvu : outre le désordre, vous vous approchez d'une allégation sur l'existence de l'emploi (L. 5331-3).\n\nTroisième pilier : les mentions discriminatoires. L. 1132-1 interdit d'écarter une personne d'un recrutement en raison de critères protégés (origine, sexe, mœurs, orientation sexuelle, identité de genre, âge, situation de famille ou grossesse, caractéristiques génétiques, vulnérabilité économique, appartenance vraie ou supposée à une ethnie, une nation ou une prétendue race, opinions politiques, activités syndicales ou mutualistes, mandat électif, convictions religieuses, apparence physique, nom de famille, lieu de résidence, domiciliation bancaire, état de santé, perte d'autonomie, handicap, capacité à s'exprimer dans une langue autre que le français, qualité de lanceur d'alerte, etc.). Dans l'offre, mentionner le sexe ou la situation de famille est en outre spécifiquement encadré / interdit, exceptions limitées (artiste, mannequin/modèle) — L. 5331-2, L. 1142-1, R. 1142-1, F39133. Un intitulé d'ouverture H/F est une bonne pratique, pas une clause qui autorise un texte sexiste par ailleurs.\n\nQuatrième pilier : les allégations fausses ou susceptibles d'induire en erreur, article L. 5331-3, sur l'existence de l'emploi, sa nature, sa description, la rémunération et les avantages, le lieu de travail. « CDI » alors que le besoin est un stage, « 40 k€ » alors que le max est 32, « Paris 8e » alors que c'est un site logistique en grande couronne, « poste à pourvoir » alors qu'il n'existe plus : ce sont des fautes de rédaction, pas des habiletés marketing."
        ),
        note(
          "Sources (vérifiées au 13/10/2026) : L. 1132-1, L. 5331-2 et textes liés, L. 5331-3, L. 5331-4, fiche Service-Public F39133 (02/10/2025). Relisez Légifrance / Service-Public avant d'appliquer à un cas réel. Le junior ne « tasse » pas une mention douteuse pour faire plaisir au manager : il fait relire les RH."
        ),
        h("Méthode opérationnelle"),
        t(
          "Grille de relecture avant publication, dans cet ordre : (1) français porteur, anglicismes expliqués ; (2) date et version enregistrées, date de revue ; (3) recherche de critères protégés (âge, sexe, apparence, origine, santé, résidence, langue maternelle, etc.) ; (4) chaque fait vérifiable : contrat, lieu, horaires, rémunération si indiquée, existence du poste ; (5) validation RH si un seul doute. Document : PDF ou copie ATS de l'annonce publiée."
        ),
        code(`CONTRÔLE PRE-PUBLICATION

Langue     : texte FR complet ? terme étranger décrit ?
Date       : date d'offre + date de revue / retrait ?
Critères   : aucun âge, sexe, famille, apparence, origine, santé… ?
Faits      : contrat, lieu, horaires, salaire/avantages, existence = vrais ?
Promesses  : aucune embauche « garantie », aucune évolution automatique ?
Méthodes   : si test / assessment, information possible (L. 1221-8) ?`),
        h("Exemple professionnel"),
        t(
          "Pixeline s'apprête à publier : « Full remote Europe, $60k, rockstar, native English, young team. » Le junior bloque. Travail exercé depuis la France pour une société française : français obligatoire, description du métier en français. Le salaire en dollars, s'il est faux ou hors package réel, tombe sous L. 5331-3. « Native English » n'est pas un besoin : c'est un critère d'origine / de langue à reformuler, si besoin réel, en « anglais professionnel écrit et oral, réunions clients US » (lien avec l'emploi). « Young team » oriente l'âge. Date absente. L'annonce est réécrite en français, datée, avec lieu de travail (télétravail France, 4 jours de présence par trimestre à Paris — si c'est vrai)."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Publier d'abord, corriger ensuite. Laisser une annonce en ligne trois mois après l'embauche. Traduire uniquement un titre et croire que c'est du français. Écrire « 30-45 ans » pour « niveau d'expérience ». Mentionner un « quartier calme, bon pied, bon œil ». Promettre un 13e mois non décidé. Omettre le lieu pour « avoir plus de CV »."
        ),
        h("Situations particulières"),
        t(
          "Offre pour un emploi à l'étranger : L. 5331-4 si employeur/auteur français — français + détail. Exceptions artistes/mannequins : strictement limitées. Annonce de cabinet pour client confidentiel : ne pas inventer un employeur fictif au point de tromper sur l'existence ou la nature ; cadrer avec les RH et le cabinet. Recrutement d'une personne déjà identifiée (offre « pour la forme ») : l'emploi doit exister et la description rester exacte ; un processus fermé n'autorise pas un texte mensonger."
        ),
        h("Mise en pratique"),
        t(
          "Cochez les illicites ou trompeurs, et dites l'article ou le principe : (1) « Recherche femme de ménage, 35-50 ans, nationale. » (2) « CDI, 32 k€ » alors que le contrat prévu est un CDD 6 mois à 28 k€. (3) « Product Owner » + 12 lignes de missions en français, date du 13/10/2026. (4) « Poste pourvu mais on laisse l'annonce pour la marque. »"
        ),
        h("Correction détaillée"),
        t(
          "(1) Sexe, âge, nationalité / origine : L. 1132-1 et encadrement des mentions de sexe dans l'offre (L. 5331-2 / L. 1142-1). Intitulé à épicène ou ouvrir (agent de propreté H/F), retrait de l'âge et de la nationale. (2) Nature du contrat, rémunération : L. 5331-3. (3) Acceptable en structure : anglicisme du métier compensé par des missions françaises ; date présente ; à vérifier : pas d'autre mention illicite. (4) Existence de l'emploi : L. 5331-3 — retirer l'annonce. L'employeur n'utilise pas une fausse offre comme publicité."
        ),
      ],
    }),

    lesson({
      title: "Le salaire dans l'offre : droit français, directive européenne, bonne pratique",
      description:
        "Savoir quoi dire au manager au 13/10/2026 : pas d'obligation française consolidée d'afficher le salaire, directive (UE) 2023/970 en transposition.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez énoncer l'état du droit au 13/10/2026 sans le durcir ni le minimiser : indiquer le salaire dans l'offre n'est pas (encore) une obligation consolidée en droit français, une directive européenne impose une information sur la rémunération ou une fourchette, la transposition est en cours. Vous savez traiter l'affichage comme une bonne pratique / une future obligation, et, si vous affichez, comme un fait soumis à L. 5331-3."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "La question « doit-on mettre le salaire dans l'annonce ? » est devenue un piège pour les recruteurs juniors. Deux erreurs symétriques circulent. Première erreur : affirmer que c'est déjà obligatoire en France, et accuser le manager d'illégalité s'il refuse d'afficher. Deuxième erreur : affirmer que le salaire doit rester secret, ou afficher un montant fictif « pour attirer ». Ni l'une ni l'autre n'est conforme aux sources de ce cours.\n\nLa fiche Service-Public Entreprendre F39133 (vérifiée le 02/10/2025), citée dans legal-sources.json, indique qu'indiquer le salaire dans l'offre n'est pas (encore) obligatoire en droit français au jour de la fiche, mais qu'une directive européenne impose une information sur la rémunération ou une fourchette dans l'offre ; la transposition est en cours. Il s'agit de la directive (UE) 2023/970 sur la transparence des rémunérations. Distinguez donc trois niveaux, à la date du 13/10/2026 : (1) pas encore une obligation interne française consolidée à cette date — vous ne devez pas l'enseigner comme si l'article était déjà en vigueur sans vérifier le texte de transposition le jour J ; (2) une bonne pratique professionnelle (attirer les bons profils, réduire les malentendus, préparer l'égalité de traitement) ; (3) une future obligation, dès que le droit français aura transposé. Avant toute publication réelle, vous revérifiez Légifrance et Service-Public.\n\nSi l'entreprise choisit d'indiquer une rémunération ou une fourchette, L. 5331-3 s'applique : le montant, les avantages, le variable, le 13e mois, l'intéressement ne doivent pas être faux ni trompeurs. Une fourchette 28-45 k€ alors que le max réel est 32 k€ est une allégation. Un « selon profil » sans aucune ancre, s'il est utilisé pour laisser croire à un niveau senior, peut induire en erreur. La politique interne peut imposer l'affichage avant la loi : vous l'appliquez alors comme règle de l'employeur, pas comme article du Code.\n\nLe salaire n'est pas le seul élément de transparence utile : le variable, les avantages, les tickets, le véhicule, le télétravail ont une valeur. S'ils sont cités, ils sont exacts. S'ils ne sont pas cités, vous ne les inventez pas à l'entretien pour « closer ». Le junior ne décide pas seul d'afficher ou non : il pose la question aux RH avec l'état du droit, la politique interne, et le risque L. 5331-3."
        ),
        note(
          "Ne pas affirmer que l'affichage du salaire est déjà obligatoire en droit français au 13/10/2026. Ne pas affirmer non plus que la directive européenne « ne concerne pas la France ». Transposition en cours : relire le texte en vigueur le jour de la publication. Source : F39133 + directive (UE) 2023/970, legal-sources.json."
        ),
        h("Méthode opérationnelle"),
        t(
          "1. Demander aux RH la politique interne d'affichage et la fourchette réelle du poste.\n2. Vérifier le droit en vigueur le jour J (Service-Public / Légifrance), pas le souvenir d'un post LinkedIn.\n3. Si affichage : fourchette ou montant, primes et avantages, périodicité, et ce qui est hors fourchette (variable).\n4. Contrôle L. 5331-3 avec le manager : le max est-il tenable pour ce niveau ?\n5. Si non-affichage (tant que le droit français le permet encore) : préparer le discours de préqualification pour aborder les prétentions sans mensonge sur le budget.\n6. Tracer la décision (affiche / n'affiche pas) dans le dossier de poste."
        ),
        h("Exemple professionnel"),
        t(
          "Le CEO de Pixeline refuse d'afficher « parce que ce n'est pas obligatoire ». Le junior répond : ce n'est effectivement pas une obligation française consolidée au 13/10/2026 ; la directive 2023/970 est en transposition ; la politique interne peut malgré tout décider d'afficher ; si l'on affiche 55-65 k€, ce max devra être tenable (L. 5331-3). Les RH arbitrent : fourchette 48-58 k€ selon niveau, + BSPCE le cas échéant, formulés sans promesse de valorisation. Le CEO n'est pas « hors-la-loi » pour avoir demandé le secret à cette date ; il le serait s'il faisait publier 70 k€ fictifs."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Dire au manager « c'est illégal de ne pas mettre le salaire » au 13/10/2026. Afficher 40-60 k€ pour un poste budgété 36. Cacher un variable qui est en réalité le tiers de la rémunération. Copier la fourchette d'une offre concurrente. Promettre un salaire en entretien différent de l'annonce. Ignorer une politique interne qui impose déjà l'affichage."
        ),
        h("Situations particulières"),
        t(
          "Grille de branche ou minima conventionnels : vous ne publiez pas en dessous du minimum applicable ; les RH confirment. Intérim : la rémunération de l'intérimaire obéit à l'égalité de traitement avec le poste de l'entreprise utilisatrice — à faire dire par l'agence et les RH, pas à approximer dans une annonce CDI. Confidentialité : ne pas afficher n'autorise pas à mentir plus tard. Transposition publiée entre-temps : vous stoppez le modèle d'annonce et vous alignez."
        ),
        h("Mise en pratique"),
        t(
          "Un manager vous écrit le 13/10/2026 : « Mets 45 k€ dans l'annonce, on verra, de toute façon on paiera 38. » Que répondez-vous, en distinguant obligation, bonne pratique et L. 5331-3 ?"
        ),
        h("Correction détaillée"),
        t(
          "Vous refusez les 45 k€ fictifs : même si l'affichage n'est pas encore une obligation française consolidée, toute rémunération indiquée doit être exacte (L. 5331-3). Vous proposez : soit n'afficher aucun montant (si la politique interne et le droit du jour J le permettent), soit afficher une fourchette vraie (ex. 36-38 ou 36-40 si 40 est tenable). Vous mentionnez la directive en transposition et la bonne pratique d'afficher juste. Vous ne menacez pas d'illégalité pour le seul refus d'afficher, à cette date. Vous faites valider les RH."
        ),
      ],
    }),

    lesson({
      title: "Diffuser, relancer et clôturer une offre",
      description:
        "Choisir les supports, suivre l'annonce, la mettre à jour et la retirer, sans la confondre avec une offre de contrat faite au candidat.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez planifier la diffusion (canaux du plan), contrôler les versions, répondre aux questions publiques sans discriminer, retirer l'annonce dès que l'emploi n'est plus à pourvoir, et distinguer cette publication d'une offre de contrat ou d'une promesse unilatérale (F39588)."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Rédiger n'est pas diffuser. La diffusion exécute le plan de recrutement : chaque canal reçoit le même texte source, daté, ou une variante contrôlée (durée de caractère d'un jobboard, format France Travail). Multiplier les versions orales du manager sur LinkedIn, différentes de l'ATS, recrée des allégations et des critères illicites. Un seul texte maître, des extraits alignés.\n\nLa durée de publication n'est pas fixée par un article unique du Code pour tous les postes. Elle dépend du canal, du budget, du flux, et de l'existence réelle de l'emploi. Une bonne pratique est de revoir l'annonce à date fixe (par exemple à la revue du plan, J15) : trop de volume hors cible → on corrige le texte, on ne « rajoute un jobboard » par panique ; aucun flux → on revoit intitulé, conditions, canaux, pas seulement la mise en page. Relancer une annonce, c'est republier un texte toujours vrai, redaté, pas ressusciter un poste pourvu.\n\nClôturer est une obligation de vérité : si l'emploi n'existe plus, laisser l'offre en ligne induit en erreur sur l'existence de l'emploi (L. 5331-3). Vous retirez des jobboards, de France Travail, du site carrière, et vous alignez le manager. Clôturer l'annonce n'est pas embaucher, ni refuser les candidats encore en process : ces personnes ont droit à une information de process, distincte du texte public.\n\nL'offre d'emploi publique ne doit pas être confondue avec l'offre de contrat faite à un candidate, ni avec une promesse unilatérale de contrat. Selon la fiche Service-Public F39588 (vérifiée le 12/03/2026), ces dernières notions ne sont pas définies par la loi mais encadrées par la jurisprudence (notamment Cass. soc. 21 septembre 2017, n° 16-20.103 et 16-20.104). L'offre de contrat peut être retirée avant acceptation dans le délai laissé ou un délai raisonnable ; la promesse unilatérale vaut contrat, le retrait s'analyse en licenciement sans cause réelle et sérieuse. Une promesse d'embauche n'est pas obligatoire. Votre annonce ne doit pas emprunter le langage de la promesse."
        ),
        note(
          "Publier « CDI à pourvoir » n'engage pas à embaucher la première personne qui postule. En revanche, un e-mail « nous vous promettons le poste, signature lundi, salaire X, prise de poste Y » n'est plus une annonce : faites relire les RH (F39588). Retirez l'annonce publique dès que le poste n'est plus à pourvoir."
        ),
        h("Méthode opérationnelle"),
        t(
          "1. Texte maître validé RH + manager, PDF/ATS.\n2. Diffusion selon le plan (interne d'abord si politique, puis canaux prévus).\n3. Contrôle J+1 : l'intitulé, le lieu, le contrat sont-ils intacts sur chaque support ?\n4. Réponses aux commentaires publics : factuelles, sans critère protégé, sans négociation salariale bricolée dans un fil.\n5. Revue à la date du plan : corriger, prolonger, ou arrêter un canal.\n6. Retrait coordonné dès décision d'arrêt ou d'embauche qui clôt le besoin.\n7. Archiver la version publiée (preuve)."
        ),
        h("Exemple professionnel"),
        t(
          "Alizé Services embauche au 35e jour. L'annonce Indeed est encore active, le manager continue de recevoir des messages. Le junior retire Indeed, France Travail et la page carrière le jour de la décision d'offre au candidat retenu (ou dès que le besoin est clos). Les 12 candidats en cours reçoivent un message de clôture du poste, distinct. Aucun n'avait reçu de promesse. L'annonce datée du 3 mars est archivée dans le dossier."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Laisser le manager publier un texte différent. Oublier France Travail alors qu'on y avait déposé. Répondre sous l'annonce « on veut quelqu'un de jeune ». Republier sans relire après un changement d'horaires. Croire que retirer l'annonce équivaut à un licenciement du candidat pressenti. Envoyer à un candidat le texte de l'annonce en écrivant « voici votre contrat »."
        ),
        h("Situations particulières"),
        t(
          "Multi-postes : clôturer partiellement (il reste 2 préparateurs sur 6) et mettre à jour le nombre — exactitude L. 5331-3. Cabinet : qui retire, vous ou le cabinet ? À écrire dans le brief. Candidature interne encore en cours : le retrait public n'empêche pas de terminer l'évaluation interne. Urgence : une diffusion « partout » hors plan recrée des versions ; revenir au texte maître."
        ),
        h("Mise en pratique"),
        t(
          "Le poste est pourvu. Le directeur dit : « Laisse l'annonce, ça fait de la marque employeur. » Rédigez votre réponse (6-8 lignes) en citant le bon fondement."
        ),
        h("Correction détaillée"),
        t(
          "Vous refusez de laisser une offre pour un emploi qui n'existe plus : L. 5331-3 (existence de l'emploi). La marque employeur se travaille par un site carrière vrai, pas par une fausse offre. Vous retirez les supports, vous archivez, vous proposez éventuellement une page « nos métiers » qui n'est pas une offre. Vous ne citez pas F39588 ici : ce n'est pas une promesse unilatérale, c'est une allégation sur l'existence du poste."
        ),
      ],
    }),

    lesson({
      title: "Corriger une annonce médiocre et deux modèles",
      description:
        "Réécrire une offre fautive, puis disposer de deux modèles : CDI assistant RH et CDD préparateur de commandes.",
      minutes: 28,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez annoter une annonce médiocre (illicites, tromperies, flou), produire une version publiable, et vous disposez de deux modèles complets, datés, en français, ouverts, sans salaire fictif et sans promesse d'embauche."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "La correction d'annonce est un geste professionnel quotidien. On ne « adoucit » pas un texte illicite : on retire le critère, on rétablit le fait, on structure. Le texte médiocre ci-dessous accumule des fautes fréquentes : intitulé genré et anglophone non expliqué, âge, apparence, nationalité, allégations de salaire et d'évolution, lieu flou, absence de date, CDD déguisé en CDI, accessibilité absente, méthode de candidature inexistante. Chacune se rattache à un pilier déjà vu (L. 1132-1, L. 5331-2 et liés, L. 5331-3, L. 5331-4, L. 1221-6, traçabilité / F39133).\n\nLes deux modèles qui suivent ne sont pas des copier-coller universels. Le CDI assistant RH illustre un métier tertiaire, sédentaire, exigences de discrétion et d'outils, ouverture H/F comme bonne pratique, fourchette salariale affichée comme bonne pratique (et donc exacte), pas comme obligation française consolidée au 13/10/2026. Le CDD préparateur illustre un contrat court, des conditions physiques et horaires dites sans fard, l'absence de promesse de CDI, un CACES seulement s'il est requis, une accessibilité honnête. Dans les deux cas, le français porte le texte ; la date est visible ; aucun critère protégé n'est utilisé comme filtre.\n\nVous adapterez le lieu, la fourchette, les outils, le bus, le rattachement. Vous ne réintroduirez pas « jeune », « native », « évolution garantie », ni un salaire décoratif. Vous ferez relire les RH avant une publication réelle : ces modèles sont pédagogiques, ils ne dispensent pas de vérifier le droit du jour J, notamment la transposition de la directive (UE) 2023/970."
        ),
        note(
          "Entreprises, adresses et personnes : fictives. Fourchettes : exemples pédagogiques, pas des moyennes de marché. Vérifier convention collective, minima et politique interne avant usage réel."
        ),
        h("Méthode opérationnelle"),
        t(
          "Pour l'exercice : (1) lister les fautes avec le fondement ; (2) réécrire par blocs ; (3) comparer à un modèle. En situation réelle : la même grille, plus validation manager/RH, plus enregistrement de version."
        ),
        h("Exemple professionnel"),
        t(
          "Le cas et les deux modèles ci-dessous tiennent lieu d'exemple complet d'entreprise de services et d'entrepôt."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Corriger l'orthographe et laisser l'âge. Ajouter H/F et garder « elle sera notre vitrine ». Mettre une fourchette pour « être dans l'air du temps » sans tenir le max. Copier le modèle RH pour un préparateur (on perd les 3×8). Oublier de dater la version corrigée."
        ),
        h("Situations particulières"),
        t(
          "Si le manager refuse de retirer l'âge : pas de publication. Si le CDD peut déboucher sur un CDI : on peut écrire « CDD de 4 mois, éventuellement suivi d'un CDI selon besoins et évaluation » seulement si c'est vrai — ce n'est pas une garantie. Si la directive est transposée le jour J : aligner les modèles sur l'obligation nouvelle."
        ),
        h("Mise en pratique"),
        t(
          "Annotez l'annonce médiocre (fautes + fondements), puis rédigez votre version publiable. Ensuite, relisez les deux modèles et listez trois éléments que vous modifieriez pour votre entreprise fictive (sans introduire de faute)."
        ),
        code(`ANNONCE MÉDIOCRE — à corriger (ne pas publier)

Digital People — Recrute NOW
Sales Ninja / Business Developer H (la future star de notre team)
On cherche un jeune (22-30 ans), de préférence un gars, native French, bon look, pour exploser les objectifs. CDI (ou CDD on verra). Salaire 50 k€ + Tesla. Évolution manager garantie en 6 mois. Full remote monde entier. Ambiance young & fun. Anglais bilingue obligatoire (on n'a que des clients de la Loire). Poste à pourvoir hier. Envoyez photo et situation de famille à tropfort@alize-fictif.fr`),
        h("Correction détaillée"),
        t(
          "Fautes principales : anglais non porté par une description française suffisante (L. 5331-4) ; sexe (« H », « gars ») et situation de famille demandée (L. 5331-2 / L. 1142-1 / L. 1132-1) ; âge et apparence (L. 1132-1) ; « native French » (origine / langue) ; photo (apparence, et souvent hors lien L. 1221-6) ; CDI alors que « CDD on verra » (L. 5331-3, nature du contrat) ; 50 k€ + Tesla et évolution garantie si faux (L. 5331-3, rémunération, description) ; remote monde entier si le travail est en Loire (lieu) ; anglais bilingue sans clients internationaux (L. 1221-6, exigence sans lien) ; pas de date. Version publiable ci-dessous : métier en français, ouverture H/F comme bonne pratique, missions, CDI seulement si c'est le contrat réel, fourchette vraie ou silence, lieu vrai, pas de photo, pas de famille, date."
        ),
        code(`VERSION CORRIGÉE — exemple (entreprise fictive, 13/10/2026)

Alizé Services — Offre du 13/10/2026 — à pourvoir
Commercial BtoB TPE-PME (H/F)

Alizé Services, entreprise de services aux TPE-PME (45 personnes, agence Lyon), recrute un commercial BtoB en CDI, temps plein, rattachement au directeur commercial.

Missions : prospecter un portefeuille de TPE-PME du bassin lyonnais ; conduire des rendez-vous sur site et à distance ; proposer l'offre de services ; suivre les comptes ; reporter l'activité.

Profil en lien avec l'emploi : expérience de vente BtoB ou de développement de portefeuille ; aisance orale ; permis B (déplacements clients fréquents). L'anglais n'est pas requis.

Conditions : CDI, 35 h, jours de la semaine ; mix terrain / agence Lyon 3e ; véhicule de service. Rémunération : fourchette brute annuelle 32-36 k€ selon expérience, + variable selon accord interne (le maximum affiché est tenable pour ce niveau). Télétravail : 1 jour par semaine après intégration, pas un full remote.

Accessibilité : poste ouvert à toutes et tous. Pour échanger sur un aménagement, contact RH indiqué ci-dessous. Locaux au 2e étage avec ascenseur.

Candidature : CV et message de motivation à rh@alize-fictif.fr, sans photo. Pas d'information sur la situation de famille, l'âge ou l'état de santé. Les méthodes d'évaluation (entretien recruteur, entretien manager) vous seront rappelées avant mise en œuvre.

Cette annonce décrit un emploi à pourvoir. Elle ne constitue pas une promesse d'embauche.`),
        code(`MODÈLE 1 — CDI assistant RH (fictif)
Offre du 13/10/2026 — Forges & Maintenance du Centre (ETI industrielle fictive), site de Ville-sur-Cher (nom d'emprunt)

Assistant des ressources humaines (H/F)
CDI, temps plein, 35 h, horaires de jour
Rattachement : responsable RH du site

Missions :
- Collecter et contrôler les éléments de paie (entrées, absences, variables) pour transmission au prestataire
- Administrer les dossiers du personnel (entrées, sorties, DPAE en lien avec le responsable RH — la DPAE reste une obligation de l'employeur)
- Organiser les entretiens de recrutement du site (convocations, salles, grilles)
- Accueillir les nouvelles personnes le premier jour selon le parcours d'intégration
- Tenir les tableaux de suivi (effectifs, absences) demandés par la responsable RH

Profil en lien avec l'emploi :
- Formation RH, paie ou expérience équivalente en administration du personnel
- Maîtrise d'un tableur ; un logiciel de paie ou SIRH est un plus (formation interne prévue)
- Rigueur, discrétion, français professionnel écrit
- Pas d'anglais requis ; pas de permis requis (poste sédentaire desservi par les transports)

Conditions :
- Lieu : site de Ville-sur-Cher, locaux d'accueil au rez-de-chaussée, places PMR
- Rémunération : 24-27 k€ brut annuel selon expérience (fourchette exacte, affichage = bonne pratique / politique interne ; pas présenté comme obligation légale française consolidée au 13/10/2026)
- Tickets restaurant selon usage de l'entreprise ; 25 jours de congés + jours de fractionnement selon règles internes
- Télétravail : 0 jour (poste d'accueil et dossiers papier encore présents) — dit clairement

Accessibilité : poste ouvert aux personnes en situation de handicap. Un échange sur les aménagements est possible avec la responsable RH. Travail sur écran, accueil physique.

Candidature : rh@forges-centre-fictif.fr — CV sans photo. Information préalable : entretien RH puis entretien avec la responsable du site. Pas de test de personnalité.

Date de revue de l'offre : 10/11/2026. Retrait dès que le poste n'est plus à pourvoir.`),
        code(`MODÈLE 2 — CDD préparateur de commandes (fictif)
Offre du 13/10/2026 — Entrepôt Logi-Flèche (société fictive), plateforme de Saint-Orain

Préparateur / préparatrice de commandes (H/F)
CDD de 4 mois, motif : accroissement temporaire d'activité (motif à confirmer par les RH — ne pas inventer un motif)
Temps plein, horaires 5 h 00 - 13 h 00, lundi au vendredi
Nombre de postes : 3

Missions :
- Préparer les commandes à partir des bons et du système radio-fréquence
- Emballer, étiqueter, signaler les ruptures et les écarts
- Participer à la réception selon planning
- Appliquer les règles de sécurité de la plateforme

Profil en lien avec l'emploi :
- Expérience en préparation de commandes, manutention ou formation logistique — ou premier emploi si la formation interne est réelle (à ne pas promettre à faux)
- Lecture de consignes, travail en équipe, respect des règles de sécurité
- CACES 1A : requis seulement si la personne conduit un gerbeur dès J1 ; sinon, écrire « formation CACES organisée pendant le CDD » si c'est vrai
- Permis B non requis (navette depuis la gare à 6 h 10 — indiquer l'existence réelle de la navette, pas une ligne fantôme)

Conditions :
- CDD 4 mois, dates du 2 novembre 2026 au 29 février 2027
- Rémunération : 11,80 € brut / heure (exemple pédagogique — aligner sur le minimum conventionnel réel le jour J) ; primes de froid ou de productivité seulement si elles existent
- Station debout, marche, port de charges, entrepôt non chauffé en hiver : à dire
- Pas de promesse de CDI dans cette annonce
- Lieu : plateforme de Saint-Orain, 8 km de la gare ; vestiaires sur site

Accessibilité : contraintes physiques décrites ci-dessus. Poste ouvert aux personnes en situation de handicap ; aménagement à étudier avec la médecine du travail et les RH, pas en commentaire d'annonce. Locaux : quai, sanitaires RDC.

Candidature : sessions de recrutement les 20 et 21 octobre 2026, inscription à emploi@logifleche-fictif.fr. CV sans photo. Pas de renseignement sur la santé ou la situation de famille.

Cette offre sera retirée à pourvoi des 3 postes ou au plus tard le 25/10/2026.`),
        t(
          "Ce que vous auriez dû lister dans votre mise en pratique : fautes de l'annonce médiocre rattachées aux textes ; version corrigée structurée ; pour les modèles, trois adaptations licites possibles (lieu, fourchette vraie, outils SIRH, navette, dates de session) sans réintroduire d'âge, de photo, de fausse Tesla ni d'évolution garantie."
        ),
      ],
    }),

    quizLesson({
      title: "Quiz — Rédiger et diffuser une offre d'emploi",
      description: "Dix questions : langue, discrimination, allégations, salaire, diffusion.",
      passing_score: 70,
      minutes: 12,
      questions: [
        q({
          question:
            "Au 13/10/2026, indiquer le salaire ou une fourchette dans une offre d'emploi en France est :",
          options: [
            "A. Pas (encore) une obligation consolidée en droit français selon la fiche Service-Public F39133, alors que la directive (UE) 2023/970 est en transposition ; l'affichage est une bonne pratique / future obligation, et s'il a lieu il doit être exact (L. 5331-3).",
            "B. Déjà obligatoire pour toutes les entreprises, sous peine de nullité de chaque embauche.",
            "C. Interdit par le Code du travail, le salaire étant un secret pénal.",
            "D. Obligatoire seulement sur LinkedIn, jamais sur France Travail.",
          ],
          correct: 0,
          explanation:
            "Legal-sources.json / F39133 (02/10/2025) : pas encore obligatoire en droit français au jour de la fiche, directive 2023/970 en transposition. Vous revérifiez le jour J. Si un montant est publié, L. 5331-3 interdit qu'il soit faux. Ce n'est ni un secret pénal, ni une règle « LinkedIn seulement ».",
        }),
        q({
          question: "Une offre pour un emploi exercé en France doit être :",
          options: [
            "A. Rédigée en français ; un terme étranger sans équivalent s'accompagne d'une description française suffisamment détaillée (L. 5331-4).",
            "B. Rédigée uniquement en anglais si le métier est « tech ».",
            "C. Rédigée dans la langue maternelle du manager.",
            "D. Sans intitulé, pour éviter toute discrimination.",
          ],
          correct: 0,
          explanation:
            "L. 5331-4. Une version anglaise peut s'ajouter, elle ne remplace pas le français porteur. L'absence d'intitulé n'est pas une exigence légale et nuit à la clarté.",
        }),
        q({
          question: "Mentionner « femme, 25-40 ans, de préférence mariée » dans une offre est :",
          options: [
            "A. Illicite : critères protégés (L. 1132-1) et encadrement des mentions de sexe / situation de famille dans les offres (L. 5331-2, L. 1142-1, F39133), hors exceptions limitées (artiste, mannequin/modèle).",
            "B. Autorisé si l'on ajoute H/F à la fin.",
            "C. Autorisé en CDD, interdit en CDI.",
            "D. Une simple maladresse, jamais visée par un texte.",
          ],
          correct: 0,
          explanation:
            "H/F ne lave pas un texte sexiste. Le contrat (CDD/CDI) ne change pas l'interdiction. F39133 et L. 1132-1 / L. 5331-2 sont les fondements à retenir, exceptions étroites.",
        }),
        q({
          question: "Ajouter « (H/F) » ou « (H/F/X) » à un intitulé, ou choisir un intitulé épicène, c'est :",
          options: [
            "A. Une bonne pratique d'ouverture, cohérente avec l'interdiction de réserver l'emploi à un sexe — pas « la » formule légale unique obligatoire.",
            "B. La seule mention qui rend une offre valable, même si le texte reste sexiste.",
            "C. Interdit, car cela évoque le sexe.",
            "D. Réservé aux offres de la fonction publique.",
          ],
          correct: 0,
          explanation:
            "Le cours distingue obligation (ne pas réserver l'offre à un sexe, exceptions limitées) et bonne pratique (H/F, H/F/X, épicène). Aucune de ces graphies n'est un sésame si le reste discrimine. Ce n'est pas interdit du seul fait d'évoquer une ouverture.",
        }),
        q({
          question:
            "Publier « CDI 40 k€, horaires de jour, Paris » alors que le poste est un CDD de nuit en entrepôt à 35 km est :",
          options: [
            "A. Une allégation fausse ou trompeuse sur la nature, la rémunération, le lieu et la description (L. 5331-3).",
            "B. Une habileté de sourcing, recommandée par la CNIL.",
            "C. Permis si l'on corrige à l'entretien.",
            "D. Sans objet : seule la DPAE compte.",
          ],
          correct: 0,
          explanation:
            "L. 5331-3 vise l'existence, la nature, la description, la rémunération et avantages, le lieu. Corriger plus tard ne rend pas l'offre licite. La CNIL ne recommande pas le mensonge. La DPAE (F23107) est une autre obligation, en fin de course, à la charge de l'employeur.",
        }),
        q({
          question: "Pourquoi dater une offre et en conserver la version publiée ?",
          options: [
            "A. Pour la traçabilité, la mise à jour, le retrait, et la preuve — en lien avec une diffusion professionnelle (fiche F39133 à relire) ; une annonce sans date et jamais retirée fait peser un risque sur l'existence de l'emploi (L. 5331-3).",
            "B. Parce qu'une offre non datée est nulle de plein droit au bout de 48 h, article unique inventé.",
            "C. Uniquement pour le référencement Google.",
            "D. Ce n'est jamais utile si l'on recrute en interne.",
          ],
          correct: 0,
          explanation:
            "Pas d'article « 48 h » dans les sources du cours. La date est une exigence opérationnelle de traçabilité, alignée sur la fiche offres, et elle permet de ne pas laisser vivre une fausse offre. L'interne n'exonère pas d'un texte public exact s'il y a diffusion externe.",
        }),
        q({
          question: "Une exigence « permis B + anglais bilingue » dans une annonce d'assistant RH 100 % sédentaire, sans client étranger, pose surtout un problème au regard de :",
          options: [
            "A. L'article L. 1221-6 (informations / exigences en lien direct et nécessaire avec l'emploi) — ces critères sont à retirer ou à justifier par des faits du poste.",
            "B. L'interdiction d'écrire en français (L. 5331-4).",
            "C. La DPAE, qui interdit le permis.",
            "D. La directive (UE) 2023/970, qui interdit les langues.",
          ],
          correct: 0,
          explanation:
            "L. 1221-6. L. 5331-4 impose le français, il n'interdit pas de rédiger en français. La DPAE ne traite pas du permis du candidat. La directive 2023/970 concerne la transparence des rémunérations, pas l'interdiction des langues. Un anglais ou un permis peuvent être légitimes si le poste les exige vraiment.",
        }),
        q({
          question: "Laisser en ligne une annonce alors que le poste est pourvu, « pour la marque employeur », c'est :",
          options: [
            "A. À refuser : l'emploi n'existe plus, risque L. 5331-3 ; retirer l'offre et travailler la marque autrement.",
            "B. Recommandé par Service-Public F39588.",
            "C. Obligatoire pendant 5 ans (durée CNIL du vivier).",
            "D. Sans risque si l'on a mis H/F.",
          ],
          correct: 0,
          explanation:
            "F39588 traite de l'offre de contrat vs promesse unilatérale, pas d'une publicité par fausse offre. Les 5 ans sont l'archive probatoire des non-retenus, pas une durée de publication. H/F ne couvre pas un poste inexistant.",
        }),
        q({
          question: "Publier une offre d'emploi, c'est :",
          options: [
            "A. Décrire un emploi à pourvoir ; ce n'est pas, en soi, une promesse unilatérale d'embauche (F39588 : une promesse n'est pas obligatoire ; le langage d'engagement ferme relève d'un autre acte, à faire relire par les RH).",
            "B. Embaucher automatiquement le premier candidat.",
            "C. Un contrat de travail dès la mise en ligne.",
            "D. Interdit tant que le salaire n'est pas affiché, au 13/10/2026.",
          ],
          correct: 0,
          explanation:
            "F39588 (12/03/2026) et jurisprudence citée par Service-Public. L'annonce n'est pas un contrat. Au 13/10/2026 l'affichage du salaire n'est pas une condition de validité consolidée de l'offre en droit français.",
        }),
        q({
          question: "Dans l'annonce médiocre du module, demander une photo et la situation de famille est à écarter surtout parce que :",
          options: [
            "A. Ces demandes touchent l'apparence physique et la situation de famille (critères protégés, L. 1132-1) et n'ont en général pas de lien direct et nécessaire avec l'emploi (L. 1221-6) ; la situation de famille est en outre visée par le droit des offres.",
            "B. La CNIL impose la photo d'identité sur tout CV.",
            "C. La directive 2023/970 impose la photo pour vérifier l'âge.",
            "D. France Travail refuse les candidatures sans photo.",
          ],
          correct: 0,
          explanation:
            "Photo = apparence, souvent sans lien avec l'emploi (exceptions très particulières, type mannequin, hors notre cas). Situation de famille : critère protégé et mention d'offre encadrée. Aucune des sources du cours n'impose la photo ; la directive 2023/970 n'est pas un prétexte à contrôler l'âge.",
        }),
      ],
    }),
  ],
};
