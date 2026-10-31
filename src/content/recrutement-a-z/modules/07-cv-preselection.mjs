import { lesson, h, t, note, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 7,
  title: "Analyser les CV et présélectionner",
  description:
    "Lire un CV avec une grille, distinguer faits professionnels et biais, justifier une shortlist, et tracer la décision — à partir de quatre CV entièrement fictifs.",
  lessons: [
    lesson({
      title: "Lecture structurée d'un CV",
      description:
        "Parcourir un CV dans un ordre stable, extraire des faits liés à l'emploi, et séparer ce qui sera évalué plus tard.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez lire un CV en cinq passages (identité professionnelle, parcours daté, missions, compétences/outils, formation), extraire des preuves au regard de la fiche de poste, et noter les questions de préqualification plutôt que de « sentir » le profil."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Un CV n'est pas un roman, ni une preuve judiciaire. C'est un document déclaratif, rédigé par la personne, pour donner à voir un parcours. Le recruteur junior qui le lit « en diagonal en 20 secondes » retient surtout la mise en page, la photo, le nom, l'âge apparent, le logo des employeurs. C'est précisément ce que le cadre légal et la qualité de décision demandent de ne pas faire. L'article L. 1132-1 interdit d'écarter une personne d'un recrutement en raison de critères protégés (origine, sexe, âge, apparence, nom de famille, lieu de résidence, handicap, etc.). L'article L. 1221-6 limite les informations pertinentes à celles qui ont un lien direct et nécessaire avec l'emploi. La lecture structurée est la méthode qui aligne ces deux textes avec le métier : on cherche des faits d'emploi, pas une impression.\n\nCinq passages, toujours dans le même ordre, réduisent le biais de primauté (la première ligne dicte tout) et le biais de mise en page. Premier passage : identité professionnelle — prénom, nom, moyen de contact, titre éventuellement. Vous ne notez pas « nom étranger », « photo fatiguée », « quartier ». Deuxième : le parcours daté, en reculant dans le temps, pour voir la continuité, les contrats, les employeurs, les durées. Troisième : les missions réellement décrites, pas les intitulés ronflants. Quatrième : outils, habilitations, langues, uniquement si le poste s'en sert. Cinquième : diplômes et formation, comme des éléments parmi d'autres, pas comme un rang social. À l'issue, vous avez une fiche d'extraction : preuves pour le poste, manques, questions, pas encore une décision morale.\n\nLa lecture structurée n'est pas une obligation légale de forme. C'est une bonne pratique, et souvent une politique interne (grille ATS). Elle prépare la traçabilité : si un candidat non retenu demande pourquoi, ou si un dossier doit être conservé à des fins de preuve (logique L. 1134-5 / référentiel CNIL 2026), vous avez des motifs professionnels, pas « le CV ne me disait rien ». Elle prépare aussi L. 1221-8 : les méthodes d'aide au recrutement doivent être présentées au candidat ; une grille de lecture est une méthode, elle doit être pertinente (L. 1221-9).\n\nVous ne « googlez » pas la personne pour sa vie privée, ses réseaux extra-professionnels, ses photos de vacances. Vous ne corrigez pas l'orthographe comme un critère de nationalité. Une faute n'est un signal que si le poste exige un français écrit professionnel intense — et encore, une ou deux coquilles ne font pas un motif d'écartement. Vous ne confondez pas un CV court avec un manque de compétence : beaucoup de bons profils industriels tiennent en une page."
        ),
        note(
          "Le CV est une déclaration. Les trous, les titres, les diplômes s'éclairent en préqualification, ils ne se transforment pas en roman (maladie, grossesse, prison) dans votre tête. Pas d'évaluation de la photo, du nom, de l'adresse au-delà du lien réel avec le lieu de travail (présence sur site, pas un jugement de quartier)."
        ),
        h("Méthode opérationnelle"),
        t(
          "1. Ouvrir la fiche de poste et les critères (knock-out vs ranking) avant le CV.\n2. Lire les cinq passages, crayon / champs ATS, sans regarder la photo.\n3. Extraire 3 à 6 faits pour, 1 à 3 manques, 2 questions.\n4. Ne pas décider au premier CV : lire le lot avec la même grille.\n5. Si un élément de critère protégé saute aux yeux (âge, photo, adresse) : l'ignorer comme critère, le recouvrir si besoin dans l'ATS (commentaire factuel interdit s'il est discriminatoire).\n6. Contrôle : un collègue comprend-il votre extraction sans voir le CV ?"
        ),
        code(`EXTRACTION — 5 passages

1. Identité pro (contact, titre) — ignorer photo / apparence
2. Dates et contrats (du plus récent au plus ancien)
3. Missions = preuves du poste visé
4. Outils / habilitations / langues (lien avec l'emploi)
5. Formation (nécessaire, utile, ou décorative ?)
→ Preuves | Manques | Questions de préqual | Critère protégé vu et écarté`),
        h("Exemple professionnel"),
        t(
          "CV d'un assistant RH : le junior regarde d'abord la photo, conclut « trop junior visuellement », écarte. Lecture structurée : 22 mois de paie et dossiers, DUT + licence pro, Excel, pas d'anglais (non requis). L'extraction dit « à préqualifier ». La photo n'a rien ajouté. L'apparence est un critère protégé. La méthode a évité un écartement illicite et une erreur métier."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Lire en 15 secondes. Commencer par le diplôme d'une école. Noter « CV moche ». Googler Facebook. Comparer deux CV sur la photo. Traiter un CV intérim comme « instable » avant d'avoir lu les missions. Écrire dans l'ATS « origine : maghrébine ». Décider avant d'avoir lu tout le lot."
        ),
        h("Situations particulières"),
        t(
          "CV vidéo : même grille, pas de notation du sourire (apparence). CV en anglais pour un poste français : le fond se lit ; l'anglais n'est un plus que s'il est requis. Dossier LinkedIn sans CV : vous extraire les mêmes cinq passages, vous demandez un CV si la politique l'impose, sans en faire un piège. CV de 5 pages cadre : vous extraire, vous ne sanctionnez pas la longueur pour un poste d'assistant, vous ne la glorifiez pas non plus."
        ),
        h("Mise en pratique"),
        t(
          "Sans encore ouvrir les quatre CV de la leçon 7, rédigez votre ordre de lecture pour le poste d'assistant RH de Forges & Maintenance du Centre (paie, dossiers, entretiens, accueil, 35 h jour, site). Listez 4 éléments que vous refusez d'utiliser comme critères."
        ),
        h("Correction détaillée"),
        t(
          "Ordre : critères du poste d'abord, puis dates/contrats, missions paie et administration, outils (tableur, SIRH), formation RH ou équivalent. Refusés : photo, nom, âge inféré, quartier, sexe, situation de famille, santé, accent perçu, logo « prestigieux » comme substitut de missions. Le permis et l'anglais sont hors lien (poste sédentaire, pas de client international). Un CV intérim n'est pas un knock-out."
        ),
      ],
    }),

    lesson({
      title: "Cohérence, trous de parcours, reconversion et diplômes",
      description:
        "Repérer ce qui cloche dans les dates et les titres, traiter un trou sans roman, lire une reconversion et un diplôme à leur juste poids.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez vérifier la cohérence d'un parcours (dates, temps plein simultanés, titres vs taille d'équipe), poser des questions sur un trou sans présumer un critère protégé, valoriser une reconversion par les compétences transférables, et ne pas fétichiser un diplôme s'il n'est pas une condition d'exercice."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "La cohérence est un contrôle professionnel, pas un procès d'intention. Des dates qui se chevauchent sur deux temps pleins, un titre « DRH adjoint » dans un atelier de douze personnes, une habilitation datée après le départ de l'employeur qui l'aurait délivrée : ce sont des faits à éclaircir. Ils peuvent s'expliquer (double activité déclarée, titre interne fantaisiste, erreur de mois). Ils peuvent aussi signaler un CV enjolivé. Vous ne tranchez pas au seul papier : vous notez la question. Vous ne publiez pas « menteur » dans l'ATS.\n\nUn trou (période sans employeur) est fréquent : fin de CDD, recherche d'emploi, formation, aidant, santé, voyage, création d'activité. Plusieurs de ces causes touchent des critères protégés (santé, situation de famille, handicap). Vous n'avez pas à les deviner, et vous n'avez pas à les exiger (L. 1221-6). En préqualification, une question ouverte (« que s'est-il passé professionnellement entre 2019 et 2021 ? ») suffit. Si la personne ne veut pas détailler une raison personnelle, vous revenez aux aptitudes pour l'emploi. Un trou n'est pas, à lui seul, un motif d'écartement. Une série de contradictions non assumées peut l'être, parce qu'elle empêche d'apprécier le parcours.\n\nLa reconversion se lit à l'envers des intitulés : quelles missions, quels livrables, quelles évaluations, quel public, quels outils, se rapprochent du poste. Un formateur qui a évalué des stagiaires, rédigé des appréciations et enseigné des bases de droit social n'est pas « hors RH » : il est hors intitulé. Le rejeter parce que le mot « assistant RH » n'apparaît pas, c'est confondre étiquette et aptitude (L. 1221-6, L. 1221-9 : méthode pertinente). Inversement, une reconversion n'efface pas un manque réel (par exemple une paie hebdomadaire exigée dès J1 sans jamais avoir vu une fiche).\n\nLe diplôme pèse lorsqu'il est une condition réglementaire d'exercice, ou lorsqu'il a un lien direct avec l'emploi. Il ne pèse pas comme un marqueur social, ni comme un filtre d'origine (« diplôme étranger = non »). Un titre obtenu hors de France s'apprécie par le contenu et, le cas échéant, une équivalence ; il ne s'écarte pas au nom de L. 1132-1 (origine, appartenance nationale). Exiger cinq années d'études pour un poste d'assistant dont la fiche demande un tableur et de la rigueur est souvent un critère excessif, donc une mauvaise méthode."
        ),
        note(
          "Trou ≠ roman. Vous ne notez pas « grossesse ? » ou « arrêt maladie ? ». Vous notez « période 2019-2021 à éclaircir en préqual, sans exigence de motif personnel ». Un diplôme étranger n'est pas un knock-out. Un titre gonflé est une question, pas une condamnation écrite."
        ),
        h("Méthode opérationnelle"),
        t(
          "1. Aligner les dates sur une ligne de temps (un tableur).\n2. Marquer chevauchements, trous > quelques mois, titres vs contexte.\n3. Traduire chaque mission en preuve pour le poste, y compris hors intitulé.\n4. Classer le diplôme : réglementaire / utile / décoratif.\n5. Préparer 2 questions factuelles, zéro question de vie privée.\n6. Décision seulement après la grille complète, pas au trou isolé."
        ),
        h("Exemple professionnel"),
        t(
          "Inès Morel (nom d'emprunt), six ans formatrice : pas de ligne « RH ». Extraction : entretiens de positionnement, évaluations écrites, bases de droit du travail enseignées, organisation de sessions. Pour un assistant RH qui organise des entretiens et accueille, c'est transférable. La paie reste un manque, à tester en préqual (appétence, formation interne prévue ou non). Le junior qui écrit « reconversion = risque » sans preuve a substitué un préjugé à L. 1221-6."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Écarter tout trou de plus de trois mois. Inventer une maladie. Refuser un BTS obtenu à l'étranger. Croire un titre « Head of People » dans une TPE de 4 personnes sans lire les missions. Exiger le même diplôme que le manager. Traiter l'intérim comme un trou."
        ),
        h("Situations particulières"),
        t(
          "Période d'essai non renouvelée : ce n'est pas un secret d'État, c'est une question professionnelle. Création d'entreprise : lire ce qui a été fait (commercial, admin, cessation). Conjoint impatrié / mobilité géographique : ne pas transformer en situation de famille évaluée. Métiers réglementés (infirmier, expert-comptable) : le diplôme conditionne l'exercice, ce n'est plus du fétichisme."
        ),
        h("Mise en pratique"),
        t(
          "Parcours : janv. 2022 – juin 2024 « DRH adjoint », entreprise 15 personnes ; en parallèle févr. 2023 – déc. 2023 « commercial temps plein » autre société ; trou juil. 2024 – oct. 2026. Quelles questions posez-vous ? Que ne posez-vous pas ? Le trou suffit-il à écarter ?"
        ),
        h("Correction détaillée"),
        t(
          "Questions : deux temps plein simultanés, contenu réel du titre DRH adjoint (paie ? IRP ? recrutement ?), volume d'équipe, comment s'articulent les deux employeurs, parcours depuis juillet 2024 en termes professionnels. Vous ne demandez pas si le trou est une dépression, un congé parental, un casier. Le trou seul n'écarte pas. Le chevauchement + le titre peu plausible justifient soit une préqual de clarification, soit un non si le poste exige une admin RH démontrée dès le papier et que rien dans les missions ne l'étaye — motif professionnel écrit, pas « CV bizarre »."
        ),
      ],
    }),

    lesson({
      title: "Biais de lecture et critères protégés",
      description:
        "Nommer les biais fréquents sur un CV, les relier à L. 1132-1, et installer des contre-mesures concrètes.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez identifier les biais de photo, de nom, d'âge inféré, de lieu de résidence, de sexe, d'école, d'intérim, de reconversion, et les contrer par la grille, la lecture à l'aveugle des éléments non pertinents, et l'interdiction des commentaires ATS illicites."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Un biais n'est pas une opinion politique. C'est un raccourci de jugement qui fait écarter ou retenir une personne pour autre chose que l'aptitude à l'emploi. Sur un CV, les raccourcis les plus fréquents dans la pratique professionnelle — sans inventer ici de pourcentage — concernent le nom, l'adresse, l'âge lu dans les dates, le sexe lu dans le prénom, la photo, le handicap visible, l'école, le type de contrat (intérim, CDD). L'article L. 1132-1 dresse la liste des critères protégés : origine, sexe, mœurs, orientation sexuelle, identité de genre, âge, situation de famille ou grossesse, caractéristiques génétiques, vulnérabilité économique, appartenance vraie ou supposée à une ethnie, une nation ou une prétendue race, opinions politiques, activités syndicales ou mutualistes, mandat électif, convictions religieuses, apparence physique, nom de famille, lieu de résidence, domiciliation bancaire, état de santé, perte d'autonomie, handicap, capacité à s'exprimer dans une langue autre que le français, lanceur d'alerte, etc. Écarter Samira Benali ou Karim El Amrani (noms d'emprunt) à cause du nom, c'est précisément ce que le texte vise.\n\nLe lieu de résidence est un critère protégé. Cela n'interdit pas de vérifier qu'une présence sur site est possible (poste sédentaire à Ville-sur-Cher). Cela interdit de juger un quartier, un code postal, une « image de banlieue ». L'apparence (photo) n'est pas un critère de présélection d'assistant RH. L'âge inféré par l'année du bac n'est pas un critère. Un accent perçu lors d'un échange n'est pas un motif, hors exigence réelle de français professionnel liée à l'emploi.\n\nLes contre-mesures sont opérationnelles. Masquer la photo dans l'ATS si possible. Lire les missions avant l'en-tête. Appliquer la même grille au lot. Rédiger le motif d'écartement avec un fait du poste (« pas d'expérience d'administration du personnel ni d'équivalent transférable ») plutôt qu'une impression. Faire relire une shortlist par un pair. Interdire dans l'ATS les commentaires sur le corps, l'origine, la famille. Ce sont des bonnes pratiques et, pour le commentaire discriminatoire, un risque juridique immédiat. La méthode d'évaluation doit rester pertinente (L. 1221-9).\n\nLe biais « positif » existe aussi : copier le parcours du manager, sur-noter une école, retenir un CV « qui nous ressemble ». Il est tout aussi contraire à L. 1132-1 lorsqu'il repose sur un critère protégé, et tout aussi contraire à L. 1221-6 lorsqu'il n'a pas de lien avec l'emploi. La shortlist n'est pas un club."
        ),
        note(
          "Obligation : ne pas écarter (ni retenir) pour un critère protégé (L. 1132-1). Bonne pratique : grille unique, photo ignorée, motif écrit professionnel. Politique interne : certains ATS masquent le nom en première lecture — à utiliser si elle existe, pas à inventer comme obligation universelle."
        ),
        h("Méthode opérationnelle"),
        t(
          "1. Grille avant le nom.\n2. Photo : ne pas ouvrir / ne pas commenter.\n3. Après lecture : relire le motif ; un critère protégé s'y est-il glissé ?\n4. Comparer les extraits du lot avec les mêmes colonnes.\n5. Alertes : « on cherche une fille », « un nom plus simple pour les clients », « trop vieux pour l'équipe » — refus d'exécuter, escalade RH."
        ),
        h("Exemple professionnel"),
        t(
          "Un manager d'Alizé dit : « Écarte El Amrani, les clients n'accrocheront pas au nom. » Le junior refuse : le nom de famille est un critère protégé (L. 1132-1). Il propose de lire les missions. S'il n'y a pas d'aptitude, le motif sera professionnel et écrit. S'il y a aptitude, le nom n'entre pas dans la shortlist comme moins. L'instruction du manager n'est pas une politique interne valable : une politique ne peut pas ordonner l'illicite."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Commentaire ATS « look non professionnel ». « Femme = mieux en RH ». « Intérim = instable ». « Reconversion = pas sérieux ». « Diplôme marocain = non ». « Habite trop loin » sans avoir parlé mobilité, alors que l'on vise le quartier. Googler une personne pour sa pratique religieuse."
        ),
        h("Situations particulières"),
        t(
          "Poste avec condition d'aptitude (sécurité, habilitation) : l'aptitude se joue plus tard, médecine du travail, pas sur la photo du CV. Emploi où l'apparence est l'objet même (mannequin) : exception étroite, déjà vue côté offres, pas transposable à l'assistant RH. Anonymisation imposée par un marché public : suivez le protocole RH. Logiciel de tri automatique : L. 1221-8 information, L. 1221-9 pertinence ; un score opaque n'est pas une grille."
        ),
        h("Mise en pratique"),
        t(
          "Parmi ces motifs d'écartement, lesquels sont illicites ou non professionnels ? (1) « Pas de mission de paie ni d'équivalent. » (2) « Nom trop compliqué. » (3) « CV avec photo peu souriante. » (4) « Code postal 93. » (5) « Dates incohérentes non expliquées et titre non étayé. » (6) « Trop de missions d'intérim, forcément instable. »"
        ),
        h("Correction détaillée"),
        t(
          "(1) Professionnel, si la paie est un critère du poste et qu'aucun équivalent n'est lu. (2) Illicite, nom de famille, L. 1132-1. (3) Illicite / apparence. (4) Illicite en tant que jugement du lieu de résidence ; une question de trajet / présence site peut se poser en préqual, sans stigmatiser le département. (5) Professionnel, cohérence. (6) Biais : l'intérim décrit des contrats, pas une personnalité ; lire les missions (admin, paie, accueil) avant de conclure."
        ),
      ],
    }),

    lesson({
      title: "Shortlist : choisir, limiter, justifier",
      description:
        "Passer d'un lot de CV à une liste courte de personnes à préqualifier, avec des motifs opposables.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez construire une shortlist (oui / peut-être / non), la dimensionner pour le temps du manager, et écrire un motif de oui et un motif de non qui tiennent si le dossier est relu dans deux ans."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Présélectionner, ce n'est pas empiler « les moins pires ». C'est décider qui entre en préqualification, qui est mis en vivier si la personne est informée, qui est écarté du poste avec un motif professionnel. Une shortlist de quinze personnes pour un assistant RH n'est pas une shortlist : c'est un transfert de charge vers le téléphone. Une shortlist de une personne « clone du manager » n'est pas davantage une shortlist : c'est un biais. Le bon format dépend du volume et du plan, souvent trois à six personnes à préqualifier pour un poste unique, à ajuster sans statistique magique.\n\nChaque décision a besoin d'un motif. Le motif de « oui » cite des preuves du CV liées aux critères (missions de paie, durée, outils). Le motif de « non » cite un manque par rapport au poste, pas un critère protégé. Le « peut-être » n'est pas une lâcheté : c'est un profil transférable à éclaircir (reconversion, titre ambigu) que l'on préqualifie avec des questions ciblées, ou que l'on garde en vivier si le volume de « oui » est déjà suffisant et que l'information RGPD est faite. Vous ne laissez pas un « peut-être » sans statut : le silence n'est pas un statut.\n\nLa shortlist n'est pas une embauche. Elle n'est pas une promesse (F39588). Elle n'autorise pas à dire « vous êtes retenu pour le poste ». Elle autorise à dire « nous souhaitons un échange de préqualification ». Les personnes non shortlistées ont droit, selon la politique interne, à une réponse ; le droit des données (information, durées CNIL déjà vues) s'applique. L'archivage du motif pour les non-retenus, une fois le poste pourvu, s'inscrit dans la logique probatoire des 5 ans (L. 1134-5 / référentiel CNIL 2026), distincte du vivier 2 ans.\n\nLe manager peut discuter un « oui » ou un « non ». Il ne peut pas imposer un écartement illicite. Votre rôle de junior est de porter la grille, pas de « faire plaisir » en sortant le CV au nom."
        ),
        note(
          "Motif écrit = fait + critère du poste. « Personnalité » et « feeling du CV » ne passent pas une relecture. La shortlist est une méthode d'aide au recrutement : pertinence (L. 1221-9) et, le moment venu, information du candidat sur la suite (L. 1221-8)."
        ),
        h("Méthode opérationnelle"),
        t(
          "1. Scorer ou classer avec la grille (pas une note sur 20 décorative : des seuils knock-out puis un ranking).\n2. Trancher oui / peut-être / non.\n3. Dimensionner : capacité réelle de préqual de la semaine.\n4. Rédiger les motifs dans l'ATS le jour même.\n5. Faire valider la shortlist par le manager sur les preuves, pas sur les photos.\n6. Déclencher les réponses / vivier / archive selon politique."
        ),
        code(`MOTIFS — formulations

Oui : « Missions d'administration du personnel et éléments de paie pendant 22 mois, formation RH, tableur. À préqualifier sur SIRH et disponibilité site. »
Non : « Aucune mission d'administration du personnel, de paie, d'accueil RH ou d'équivalent transférable (formation, évaluation, organisation de sessions). Poste d'assistant RH de site non étayé. »
Interdit : « Nom », « photo », « trop vieux », « femme préférable », « 93 », « intérim = instable ».`),
        h("Exemple professionnel"),
        t(
          "Lot de 40 CV pour l'assistant RH Forges. Après knock-out (aucune admin, aucune formation/expérience transférable), 11 restent. Capacité de préqual : 6 cette semaine. Shortlist : 4 oui, 2 peut-être (reconversion à clarifier), 5 non justifiés + vivier pour 2 profils commerciaux RH d'un autre site (information). Le manager veut ajouter un CV « fils d'un client » sans preuve : le junior demande les preuves ou refuse d'en faire un critère."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Shortlist identique à « tous ceux qui ont postulé ». Motif vide. Motif illicite. Oublier les internes. Téléphoner avant d'avoir clos le lot. Promettre le poste au premier CV plaisant. Ne jamais écrire le non, donc ne jamais pouvoir expliquer."
        ),
        h("Situations particulières"),
        t(
          "Candidat interne : même grille, motif tout aussi écrit, information du process. Candidat coopté : même grille. Volume : sessions collectives, shortlist par vagues, mêmes motifs. Un seul CV excellent et 30 hors sujet : shortlist de 1 + relance du sourcing, pas 10 « remplissage » pour faire nombre."
        ),
        h("Mise en pratique"),
        t(
          "Rédigez un motif de non et un motif de oui (4 lignes chacun) pour le poste assistant RH, sans critère protégé, à partir de ces extraits : (A) 3 ans préparateur, aucune admin. (B) 18 mois gestionnaire personnel + paie de 40 dossiers."
        ),
        h("Correction détaillée"),
        t(
          "Non pour A : le métier de préparateur n'étaye pas l'administration du personnel, la paie, l'organisation d'entretiens ; pas d'équivalent transférable décrit ; écartement du poste (un vivier logistique est un autre traitement, s'il est informé). Oui pour B : durée et missions alignées, à préqualifier sur outils et site. Vous n'écrivez pas que A est « instable » ni que B est « une femme donc faite pour le RH »."
        ),
      ],
    }),

    lesson({
      title: "Traçabilité des décisions de présélection",
      description:
        "Laisser une trace utile, licite, proportionnée : ce que l'on écrit, où, combien de temps, pour qui.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez quoi écrire dans l'ATS, quoi ne jamais écrire, comment relier la trace à l'information du candidat et aux durées CNIL, et pourquoi la justification n'est pas un luxe administratif."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Une décision de présélection qui n'existe que dans la tête du junior n'est pas défendable. Si le poste est pourvu et qu'une personne non retenue conteste une discrimination, l'employeur a besoin de montrer des critères, une grille, un motif. L'article L. 1134-5 du Code du travail, fondement cité par la CNIL pour une conservation probatoire de 5 ans à compter de la date à laquelle le poste a été pourvu (candidats non retenus), n'est pas une invitation à tout garder en base active. C'est une logique de preuve. Le référentiel CNIL 2026 distingue cette archive intermédiaire du vivier recommandé à 2 ans. Votre commentaire ATS de 2026 peut être relu en 2031 : écrivez comme tel.\n\nLa trace utile contient : la date, l'auteur, le poste, le statut (oui/peut-être/non/vivier/opposition), le motif professionnel, la source (annonce, sourcing, interne), les questions à poser. Elle ne contient pas : apparence, origine, santé, famille, religion, « look », « accent », notes moqueuses. Un commentaire illicite est pire que l'absence de commentaire : il documente la discrimination.\n\nLa traçabilité sert aussi le candidat et L. 1221-8 : on peut lui dire quelles méthodes ont été utilisées (lecture sur grille, pas de test de graphologie bidon). Les méthodes doivent être pertinentes (L. 1221-9). Une note « feeling » n'est pas une méthode pertinente. Un score d'algorithme non expliqué non plus, s'il ne peut pas être justifié.\n\nProportion : vous ne scannez pas la carte vitale, vous ne gardez pas 12 versions du CV annotées à la main dans un tiroir. L'ATS, des droits d'accès limités (recruteurs du poste, RH), pas un fichier partagé « CVthèque équipe commerciale ». La minimisation RGPD et le guide CNIL recrutement (30/01/2023) vont dans le même sens. En cas d'opposition au vivier, vous retirez de l'actif ; l'archive de preuve du poste, si elle s'applique, reste un sujet RH/DPO."
        ),
        note(
          "Écrivez pour un juge et pour un DPO, pas pour un mème interne. 5 ans = archive de preuve des non-retenus (obligation de conservation à cette fin, pas un vivier). 2 ans = reco vivier. Commentaire discriminatoire = risque immédiat, L. 1132-1."
        ),
        h("Méthode opérationnelle"),
        t(
          "1. Saisir le statut le jour de la décision.\n2. Motif en une à trois phrases factuelles.\n3. Relire : un critère protégé s'y trouve-t-il ?\n4. Pièces : CV, grille, annonce datée — pas les photos de l'anniversaire du manager.\n5. Droits d'accès : vérifier qui voit le dossier.\n6. Purge / bascule archive selon politique, pas selon l'humeur."
        ),
        code(`COMMENTAIRE ATS — modèle

2026-10-13 | [vos initiales] | Assistant RH site Ville-sur-Cher
Statut : non shortlist / préqual / vivier
Motif : [faits du CV] au regard de [critères du poste]
Questions en suspens : [ ]
Critères protégés aperçus et non utilisés : [ex. photo ignorée]
Source : offre 13/10/2026`),
        h("Exemple professionnel"),
        t(
          "Mauvais commentaire : « Karim, nom chelou, photo, 93, intérim = galère ». Bon commentaire : « Karim El Amrani (nom d'emprunt pédagogique) : missions d'intérim admin (pointages, accueil de missions, éléments variables). Shortlist oui pour préqual. Photo non évaluée. Lieu de résidence non utilisé comme filtre ; mobilité site à vérifier à l'appel. » Le second tient cinq ans. Le premier condamne le dossier."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Ne rien écrire. Écrire sur un Slack public. Copier le CV dans un Drive perso. Motif « KO ». Commentaire sur le corps. Oublier de dater. Laisser le stagiaire marketing lire tous les CV. Promettre au candidat « on a tout effacé » alors que l'archive probatoire existe — seul RH/DPO parle des durées."
        ),
        h("Situations particulières"),
        t(
          "Candidat interne : le dossier peut relier au traitement RH salariés ; ne mélangez pas les commentaires de mobilité avec une blague d'équipe. Cabinet : qui trace, vous ou le cabinet ? Double saisie à éviter, contrat à lire. Demande d'accès RGPD : vous ne répondez pas au feeling, vous transmettez au DPO. Contentieux : plus aucun commentaire « pour rire »."
        ),
        h("Mise en pratique"),
        t(
          "Réécrivez ce commentaire ATS : « Inès reconversion chelou, trop vieille pour un junior, on la garde au cas où 10 ans. »"
        ),
        h("Correction détaillée"),
        t(
          "Version licite : « Inès Morel — 6 ans formatrice (évaluations, sessions, bases de droit social enseignées). Reconversion : compétences transférables vers organisation d'entretiens / accueil ; paie non démontrée. Statut : préqual (peut-être). Photo/âge non utilisés (âge = critère protégé, L. 1132-1). Vivier : seulement si informée, durée selon reco CNIL 2 ans / dernier contact, pas 10 ans. » Vous ne « gardez 10 ans au cas où »."
        ),
      ],
    }),

    lesson({
      title: "Grille d'analyse : mode d'emploi",
      description:
        "Utiliser une grille unique, knock-out puis ranking, avant d'ouvrir les quatre CV fictifs.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez remplir la grille d'analyse du cours (bloc code) sur n'importe quel CV d'assistant RH, distinguer éliminatoire et comparatif, et préparer la correction des quatre cas."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Une grille n'est pas un gadget d'école. C'est l'outil qui rend la lecture structurée reproductible. Sans grille, quatre recruteurs produisent quatre shortlists et des motifs incomparables. Avec une grille trop longue, personne ne la remplit. La grille ci-dessous est calée sur le poste support du module : assistant RH, CDI, site industriel fictif Forges & Maintenance du Centre, missions paie / dossiers / organisation d'entretiens / accueil, 35 h jour, tableur, formation RH ou expérience équivalente, pas d'anglais, pas de permis.\n\nElle sépare knock-out et ranking. Knock-out : absence totale d'élément d'administration du personnel, de paie, d'accueil RH ou d'équivalent transférable clairement décrit ; impossibilité manifeste vis-à-vis d'une exigence réelle du poste (exemple : refus annoncé d'être sur site alors que le poste est sédentaire sans télétravail — à confirmer à l'oral, rarement au seul CV). L'âge, le nom, la photo, le sexe, le département ne sont jamais des knock-out. Ranking : durée pertinente, proximité des missions, outils, clarté du parcours, questions restantes. Un score n'est qu'une aide ; il ne replacera pas le motif rédigé.\n\nRemplir la grille avant la leçon suivante. Vous travaillerez sur quatre CV entièrement fictifs, noms d'emprunt évidents : Samira Benali, Éric Vasseur, Inès Morel, Karim El Amrani. Aucun n'est une personne réelle. Vous n'irez pas les chercher sur le web. La correction détaillée n'est pas « la » vérité d'embauche : c'est une application justifiée de la grille, que vous pouvez discuter si vous apportez d'autres preuves issues du texte, pas un sentiment.\n\nLa grille est une méthode d'aide au recrutement. Elle doit rester pertinente (L. 1221-9). Si vous ajoutez une ligne « sourire de la photo » ou « prestigieux du nom d'employeur », elle cesse de l'être et elle heurte L. 1132-1 / L. 1221-6. Les RH peuvent imposer une grille entreprise : vous la suivez si elle est licite, vous signalez si elle ne l'est pas."
        ),
        note(
          "Knock-out = exigence réelle du poste, pas un préjugé. Ranking = comparaison entre personnes déjà admissibles. Toujours un motif en phrase, même si une note existe."
        ),
        h("Méthode opérationnelle"),
        t(
          "Imprimer ou copier la grille. Une grille par CV. Ne pas comparer les photos. Remplir knock-out d'abord. Si KO, motif de non, ne pas « sauver » par le feeling. Si non KO, ranking et statut. Préparer deux questions. Passer au CV suivant sans relire le précédent (réduire l'ancrage). À la fin seulement, comparer les quatre statuts."
        ),
        code(`GRILLE D'ANALYSE CV — Assistant RH site (poste fictif du cours)
Date : ..........  Recruteur : ..........  Candidat (nom d'emprunt) : ..........

A. KNOCK-OUT (oui/non, preuve dans le CV)
A1. Aucune admin personnel / paie / accueil RH / équivalent transférable décrit ?
A2. Incompatibilité manifeste avec une exigence réelle (à n'utiliser que si le CV l'écrit) ?
A3. Un critère protégé a-t-il été utilisé ? (si oui : STOP, illicite)

B. RANKING (0 = non montré, 1 = partiel, 2 = étayé)
B1. Administration du personnel (dossiers, entrées/sorties)
B2. Éléments de paie / variables / absences
B3. Organisation d'entretiens ou accueil / sessions
B4. Tableur ou SIRH
B5. Durée pertinente cumulée
B6. Cohérence dates / titres (0 = contradictions graves, 1 = questions, 2 = cohérent)
B7. Formation RH ou contenu équivalent (pas le prestige de l'école)

C. ÉLÉMENTS IGNORÉS (cocher si vus et écartés)
[ ] photo  [ ] nom comme critère  [ ] âge inféré  [ ] sexe  [ ] code postal / quartier
[ ] apparence  [ ] « instabilité » présumée de l'intérim  [ ] diplôme étranger comme KO

D. QUESTIONS DE PRÉQUAL (max 3, L. 1221-6)
1.
2.
3.

E. STATUT
[ ] Oui préqual   [ ] Peut-être préqual   [ ] Non   [ ] Vivier si informé
Motif (3 phrases, faits + critères) :
Trace ATS : date, auteur, source`),
        h("Exemple professionnel"),
        t(
          "Un junior ajoute une ligne « école de commerce ». Hors poste d'assistant de site. La responsable RH la retire : pas de lien nécessaire. La grille redevient pertinente. C'est le bon réflexe, pas une « ouverture sans exigence » : les exigences restantes (paie, dossiers) restent là."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Remplir la grille après avoir décidé. Mettre 0 à B6 parce que le nom « sonne loin ». Transformer B7 en classement des écoles. Oublier la section C. Scorer 14/14 et écrire un motif inverse. Utiliser A2 pour « habite loin » sans fait."
        ),
        h("Situations particulières"),
        t(
          "Autre poste (commercial, maintenance) : la même structure, d'autres lignes B (portefeuille, habilitation). Ne pas coller la grille RH sur un préparateur. Candidat interne : ajouter une ligne « mobilité et poste laissé vacant » (organisation), pas une ligne « on le connaît »."
        ),
        h("Mise en pratique"),
        t(
          "Copiez la grille. Dans la leçon suivante, remplissez-en quatre. Aujourd'hui, rédigez en cinq lignes ce qui serait un knock-out illicite sur ce poste, pour vous en interdire l'usage."
        ),
        h("Correction détaillée"),
        t(
          "Knock-out illicites à s'interdire : nom, photo, âge, sexe, résidence comme stigmate, diplômes étrangers par principe, intérim par principe, reconversion par principe, handicap, santé. Knock-out licites possibles : zéro élément d'admin/paie/accueil/équivalent ; contradiction de parcours qui rend le document inutilisable après questions — et encore, souvent c'est un non justifié plutôt qu'un KO immédiat. A3 doit rester à « non »."
        ),
      ],
    }),

    lesson({
      title: "Quatre CV fictifs : analyse et corrections",
      description:
        "Analyser les CV de Samira Benali, Éric Vasseur, Inès Morel et Karim El Amrani, puis comparer à la correction détaillée.",
      minutes: 32,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous avez exercé la grille sur quatre parcours fictifs contrastés (adéquation, titres gonflés, reconversion, intérim) et vous savez justifier une shortlist sans critère protégé."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Les quatre documents ci-dessous sont entièrement fictifs. Les noms d'emprunt sont volontairement évidents : Samira Benali, Éric Vasseur, Inès Morel, Karim El Amrani. Toute ressemblance avec une personne réelle serait une coïncidence ; vous ne les recherchez pas en ligne. Ils postulent au même poste pédagogique : assistant RH, CDI, Forges & Maintenance du Centre, site de Ville-sur-Cher, missions déjà connues.\n\nLe lot est conçu pour faire apparaître des erreurs classiques. Le premier CV est proche du besoin : le risque est de le sur-noter pour la mise en page, ou de l'écarter pour un trou court. Le deuxième pousse la cohérence des titres et des dates : le risque est soit de croire le titre, soit d'écrire un roman sur le trou. Le troisième est une reconversion : le risque est le knock-out « pas RH ». Le quatrième est un parcours d'intérim avec un diplôme obtenu hors de France et une photo : le risque est le nom, le quartier, l'« instabilité », l'apparence, le diplôme étranger.\n\nVous remplissez quatre grilles avant de lire la correction. La correction n'invente pas de faits absents du CV. Elle n'utilise aucun critère protégé. Elle propose une shortlist : deux oui fermes, un oui avec réserve de formation, un non — vous pouvez défendre une variante si elle s'appuie sur le texte et la grille, pas sur un feeling. Les coordonnées, employeurs et villes sont d'emprunt.\n\nCes CV ne sont pas des modèles à remettre à des candidats. Ce sont des supports d'entraînement. En situation réelle, vous n'annoterez pas un CV de commentaires illicites, même en marge « pour vous ». La leçon ressource n'est pas une fiche de huit lignes : les quatre parcours, la grille déjà vue et la correction détaillée tiennent lieu de bibliothèque de cas pour ce module."
        ),
        note(
          "Noms d'emprunt uniquement. Pas de recherche web. Photo, nom, âge, résidence : section C de la grille, jamais un KO. Correction après votre tentative, pas avant."
        ),
        h("Méthode opérationnelle"),
        t(
          "Chronométrez 12 à 15 minutes par CV, grille complète, sans relire la correction. Ensuite seulement, comparez. Notez vos écarts : biais, oubli de mission, sévérité sur un trou."
        ),
        h("Exemple professionnel"),
        t(
          "Les quatre CV tiennent lieu d'exemple. Ils varient PME, industrie, organisme de formation, intérim."
        ),
        code(`CV 1 — Samira Benali (nom d'emprunt) — entièrement fictif
Samira Benali
06 00 00 00 01 — samira.benali.fictif@email.example
Lyon (métropole) — mobilité à préciser
Titre : Assistant RH — administration du personnel et paie

Expérience
09/2024 – 07/2026  Assistant RH, Atelier Nord Services (PME fictive, 42 pers., services)
- Collecte des éléments variables de paie (absences, heures, acomptes) pour 42 dossiers
- Administration des dossiers d'entrée et de sortie, relation prestataire paie
- Organisation de 8 recrutements (planning d'entretiens, convocations, grilles)
- Accueil J1 des embauches (badges, livret d'accueil)
Outils : Excel, petit SIRH (Lucca — mention fictive pédagogique)

01/2024 – 06/2024  Recherche d'emploi après fin de CDD (période à éclaircir en préqual si besoin)

04/2023 – 12/2023  CDD Assistante administrative, Cabinet Martin-Lefort (fictif)
- Standard, planning, dossiers papier — peu de paie

Formation
2023  Licence professionnelle RH (IAE d'emprunt)
2022  DUT GEA

Pas de photo. Permis B. Anglais scolaire. Disponibilité : préavis 1 mois (CDI en cours jusqu'à 07/2026 ; CV « à date pédagogique » 13/10/2026 : vérifier si toujours en poste).`),
        code(`CV 2 — Éric Vasseur (nom d'emprunt) — entièrement fictif
Éric Vasseur
eric.vasseur.fictif@email.example — 06 00 00 00 02
« Directeur adjoint des ressources humaines »

Expérience
01/2022 – 06/2024  Directeur adjoint des RH, Atelier Vasseur Frères (fictif)
Entreprise présentée comme un « groupe » — plus bas, une ligne indique 12 salariés atelier mécanique
- « Pilotage stratégique RH »
- « Management d'une équipe RH de 8 personnes »
- « Refonte complète du SIRH et des IRP »
(aucune mission concrète de paie, de dossier ou d'entretien décrite)

02/2023 – 12/2023  Commercial sédentaire temps plein, Automobiles Dupin (fictif)
(chevauchement avec le poste ci-dessus)

2016 – 2021  Chef d'équipe production, Atelier Vasseur Frères
- Planning d'atelier, 6 techniciens, formation sécurité, quelques entretiens d'intégration technique

07/2024 – 10/2026  [aucune ligne]

Formation
Bac professionnel maintenance (2003 — n'utiliser que comme date, pas comme âge-critère)
« Master RH » suivi en e-learning, organisme non précisé, dates absentes

Photo d'identité jointe. Commentaire manuscrit du candidat : « Je vise un poste à ma hauteur, pas un job d'assistant. »`),
        code(`CV 3 — Inès Morel (nom d'emprunt) — entièrement fictif
Inès Morel
ines.morel.fictif@email.example — 06 00 00 00 03
Ville-sur-Cher (même bassin que le site)
Titre : Formatrice d'adultes — projet : administration RH / recrutement

Expérience
09/2018 – 08/2024  Formatrice, CFA Horizon Métiers (organisme fictif)
- Positionnement des stagiaires (entretiens individuels, 80 à 100 / an)
- Évaluation écrite et orale, bulletins, jurys
- Enseignement des bases du droit du travail (contrats, temps de travail) en CAP/BEP
- Organisation de sessions (salles, convocations, émargements)
- Pas de paie d'entreprise, pas de SIRH employeur

2016 – 2018  Assistante pédagogique, même organisme
- Dossiers stagiaires, convocations, relation familles (ne pas transformer en critère « situation de famille » du candidat)

Formation
2016  Licence de sciences de l'éducation
2018  Titre de formateur(trice) pour adultes (organisme fictif)

CV sans photo. Français professionnel. Tableur : listes d'émargement, notes. Projet motivé en 8 lignes (jointe) : souhaite passer côté employeur, consciente de devoir apprendre la paie.`),
        code(`CV 4 — Karim El Amrani (nom d'emprunt) — entièrement fictif
Karim El Amrani
karim.elamrani.fictif@email.example — 06 00 00 00 04
Adresse : [commune d'emprunt en Île-de-France] — ne pas juger le département
Photo couleur jointe (apparence = critère protégé, à ignorer)

Expérience (intérim, agence fictive Tempo-Flèche)
03/2026 – 09/2026  Assistant administratif, Forges & Maintenance du Centre (le même site fictif, mission)
- Pointages, relances d'absences, accueil des intérimaires, badges
- Saisie de variables pour la responsable RH
11/2025 – 02/2026  Préparateur de commandes, Logi-Flèche (fictif) — mission courte
06/2025 – 10/2025  Assistant administration du personnel, PME Propreté Lustre (fictif, 70 pers.)
- Dossiers d'entrée d'agents, contrats de travail, planning
01/2024 – 05/2025  Plusieurs missions admin / standard (détail fourni sur 1 page : durées 6 à 16 semaines)

Formation
2023  BTS assistant de gestion — diplôme obtenu au Maroc, équivalence mentionnée (à ne pas écarter au titre de l'origine)
2019  Bac

Langues : français professionnel, arabe. L'arabe n'est ni un plus imposé ni un moins (L. 1132-1, langue autre que le français). Permis B.`),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Écarter Karim pour le nom ou la photo. Écarter Inès « pas RH ». Croire Éric sur le « DRH adjoint ». Pénaliser Samira pour cinq mois de recherche. Shortlister Éric parce qu'il « vise haut » et que le manager est flatté. Écrire dans l'ATS le mot « instable » sur l'intérim sans avoir lu les missions admin."
        ),
        h("Situations particulières"),
        t(
          "Si votre shortlist diffère (par exemple Inès en oui ferme parce que la paie se forme en interne) : c'est acceptable si le motif est le critère B et la politique de formation interne, pas un feeling. Si vous avez mis Éric en oui : relisez les chevauchements et l'absence de mission concrète ; un « peut-être » de clarification est le maximum défendable, un oui ferme ne l'est pas sur ce papier."
        ),
        h("Mise en pratique"),
        t(
          "Remplissez les quatre grilles, proposez une shortlist ordonnée, rédigez les quatre motifs ATS. Puis seulement, lisez la correction."
        ),
        h("Correction détaillée"),
        t(
          "Correction pédagogique du lot. Ce n'est pas une embauche réelle. Les scores de ranking sont indicatifs (0-2)."
        ),
        code(`CORRECTION — Samira Benali
A : pas de KO. A3 non.
B : B1=2 B2=2 B3=2 B4=2 B5=2 (22 mois + CDD admin) B6=2 (trou 01-06/2024 = recherche d'emploi, à confirmer sans roman) B7=2
C : ignorer permis/anglais (non requis) ; mobilité Lyon → Ville-sur-Cher = question, pas un jugement de résidence.
D : toujours en poste ? préavis ? SIRH Lucca vs outil du site ? trajet / présence site.
E : OUI préqual. Motif : missions paie, dossiers, recrutements, accueil, formation RH, outils. Trou court expliqué par la recherche d'emploi, non éliminatoire.

CORRECTION — Éric Vasseur
A : pas un KO d'absence totale (il a fait planning et intégration technique) mais B6 très dégradé.
B : B1=0 B2=0 B3=1 (intégration technique, pas RH) B4=0 B5=0 sur le cœur de poste B6=0 (chevauchement temps plein 2023, titre DRH adjoint vs 12 salariés et « équipe RH de 8 » invraisemblable, trou 2024-2026 non documenté, master sans dates) B7=0/1
C : photo ignorée ; bac 2003 non utilisé comme âge.
D : si l'on appelait : clarification des dates et du titre — mais le papier ne soutient pas un assistant RH de site. La phrase « pas un job d'assistant » signale un écart d'attente.
E : NON. Motif : titres non étayés, contradictions de dates, aucune mission d'administration du personnel / paie ; le cœur de parcours est la production. Pas un roman sur le trou. Pas un commentaire sur la photo. Trace : non shortlist, faits ci-dessus.

CORRECTION — Inès Morel
A : pas de KO (équivalents transférables nombreux).
B : B1=1 (dossiers stagiaires, pas salariés) B2=0 B3=2 B4=1 B5=2 (6 ans) B6=2 B7=1 (droit du travail enseigné, pas un diplôme RH)
C : rien à pénaliser ; même bassin géographique = fait utile au poste, pas un bonus ethnique.
D : appétence et réalisme sur la paie ; différence dossiers stagiaires / dossiers salariés ; délai d'apprentissage.
E : OUI préqual (ou peut-être ferme si la paie est knock-out interne dès J1 sans formation — dans le brief du cours, formation interne possible : OUI). Motif : entretiens, évaluations, organisation de sessions, bases de droit social ; paie à construire ; reconversion lisible.

CORRECTION — Karim El Amrani
A : pas de KO.
B : B1=2 (dossiers, contrats, mission récente sur le MÊME site fictif) B2=1/2 (saisie de variables) B3=1 (accueil intérimaires) B4=1 B5=1/2 (cumul missions) B6=2 B7=1 (BTS gestion, équivalence : ne pas KO « diplôme marocain »)
C : OBLIGATOIRE d'ignorer photo, nom, département, arabe comme moins. Intérim ≠ instabilité.
D : enchaînement de missions (choix, marché, pas une personnalité) ; souhait CDI ; connaissance du site (conflit / atout à traiter factuellement) ; outils.
E : OUI préqual. Motif : admin personnel et variables de paie en missions, y compris sur le site ; parcours d'intérim lu comme des contrats, pas comme un défaut. Nom/photo/résidence non utilisés.

SHORTLIST PÉDAGOGIQUE
1. Samira Benali — oui
2. Karim El Amrani — oui
3. Inès Morel — oui (paie à sécuriser en préqual)
4. Éric Vasseur — non
Capacité : les trois oui tiennent dans une semaine de préqual. Vivier : aucun pour Éric sur ce poste ; pas de « 10 ans au cas où ».

CE QUE VOUS AURIEZ DÛ ÉVITER
- Pénaliser Karim ou Samira pour le nom
- Pénaliser Karim pour la photo ou l'intérim
- Pénaliser Inès pour l'absence du mot RH
- Croire ou moquer Éric ; écrire « menteur » ; inventer une maladie dans le trou
- Shortlister Éric pour flatter le manager`),
        t(
          "Si vos statuts coïncident et que vos motifs sont factuels, l'exercice est réussi même si vos notes B diffèrent d'un point. Si un critère protégé apparaît dans votre motif, recommencez ce CV uniquement."
        ),
      ],
    }),

    quizLesson({
      title: "Quiz — Analyser les CV et présélectionner",
      description: "Dix questions : lecture, biais, shortlist, traçabilité, cas fictifs.",
      passing_score: 70,
      minutes: 12,
      questions: [
        q({
          question: "Dans une lecture structurée, vous commencez par :",
          options: [
            "A. Les critères du poste, puis les faits de parcours (dates, missions, outils, formation), sans évaluer la photo.",
            "B. La photo, pour « sentir » la personne.",
            "C. Le nom de famille, pour juger l'origine.",
            "D. Google Images.",
          ],
          correct: 0,
          explanation:
            "La fiche de poste oriente l'extraction. Photo, nom, origine : critères protégés (L. 1132-1, apparence, nom). Googler la vie privée n'est pas une méthode pertinente (L. 1221-6 / L. 1221-9).",
        }),
        q({
          question: "Un trou de six mois sur un CV doit vous conduire à :",
          options: [
            "A. Noter une question professionnelle ouverte en préqual, sans roman sur la santé ou la famille, le trou n'étant pas à lui seul un motif d'écartement.",
            "B. Écarter d'office.",
            "C. Écrire « grossesse ? » dans l'ATS.",
            "D. Exiger un certificat médical.",
          ],
          correct: 0,
          explanation:
            "L. 1221-6 : pas d'information sans lien. Santé et situation de famille sont protégées (L. 1132-1). Le trou s'éclaire, il ne se psychanalyse pas. Un certificat médical n'a rien à faire en présélection d'assistant RH.",
        }),
        q({
          question: "Écarter Karim El Amrani (nom d'emprunt) à cause de son nom est :",
          options: [
            "A. Illicite : le nom de famille est un critère protégé (L. 1132-1).",
            "B. Une bonne pratique clients.",
            "C. Autorisé si le manager l'ordonne.",
            "D. Autorisé en intérim seulement.",
          ],
          correct: 0,
          explanation:
            "L. 1132-1 vise notamment le nom de famille et l'origine. L'ordre d'un manager ne légalise pas. Le type de contrat (intérim) ne crée pas d'exception.",
        }),
        q({
          question: "Inès Morel n'a pas l'intitulé « assistant RH ». La bonne lecture est :",
          options: [
            "A. Examiner les compétences transférables (entretiens, évaluations, sessions, bases de droit social) au regard de L. 1221-6, et traiter la paie comme un manque à clarifier, pas comme un KO « pas RH ».",
            "B. Knock-out automatique.",
            "C. La recruter sans grille, par sympathie pour la reconversion.",
            "D. Exiger d'abord un nouveau diplôme RH de cinq ans, par principe.",
          ],
          correct: 0,
          explanation:
            "L'intitulé n'est pas l'aptitude. La reconversion n'est ni un KO ni un passe-droit. Un diplôme n'est obligatoire que s'il a un lien réel ou réglementaire ; ce n'est pas le cas universel de l'assistant de site.",
        }),
        q({
          question: "Sur le CV d'Éric Vasseur, l'élément le plus problématique pour une présélection d'assistant RH est :",
          options: [
            "A. Les contradictions de dates (chevauchement de deux temps plein), un titre de DRH adjoint non étayé, et l'absence de missions d'admin / paie.",
            "B. La photo.",
            "C. L'année du bac, qui révèle l'âge.",
            "D. Le fait d'avoir travaillé en production.",
          ],
          correct: 0,
          explanation:
            "La cohérence et le lien avec l'emploi portent la décision de non. Photo et âge sont protégés. La production n'est pas un déshonneur ; elle n'étaye simplement pas ce poste, sauf missions transférables — ici trop faibles au regard du titre affiché.",
        }),
        q({
          question: "Un commentaire ATS « look non professionnel, 93, instable (intérim) » est :",
          options: [
            "A. À bannir : apparence, lieu de résidence, et préjugé sur l'intérim ; il documente un risque L. 1132-1 et n'est pas une méthode pertinente.",
            "B. Utile pour la preuve des 5 ans.",
            "C. Recommandé par le guide CNIL.",
            "D. Obligatoire si le CV a une photo.",
          ],
          correct: 0,
          explanation:
            "La preuve des 5 ans (L. 1134-5 / CNIL) exige des motifs professionnels, pas un commentaire discriminatoire. La CNIL ne recommande pas ce type de note. La photo n'impose aucun commentaire d'apparence.",
        }),
        q({
          question: "La durée de 5 ans évoquée pour les candidats non retenus correspond :",
          options: [
            "A. À un archivage intermédiaire à des fins de preuve à compter de la date à laquelle le poste a été pourvu (L. 1134-5 / référentiel CNIL 2026), distinct du vivier recommandé à 2 ans.",
            "B. À la durée pendant laquelle on relance tous les CV au téléphone.",
            "C. À une obligation de tout laisser en base active LinkedIn.",
            "D. À un délai d'entretien obligatoire.",
          ],
          correct: 0,
          explanation:
            "Même distinction que dans les modules stratégie et sourcing. 5 ans = preuve, pas chasse. 2 ans = reco vivier. Pas un délai légal pour recevoir en entretien.",
        }),
        q({
          question: "Le lieu de résidence d'un candidat, au stade du CV :",
          options: [
            "A. Ne peut pas servir à écarter pour un quartier ou un département (critère protégé) ; une question de présence sur site / trajet peut se poser plus tard si le poste l'exige vraiment.",
            "B. Permet d'écarter tous les codes postaux que le manager n'aime pas.",
            "C. Doit être copié dans le commentaire ATS avec un jugement.",
            "D. Est le premier knock-out de la grille du cours.",
          ],
          correct: 0,
          explanation:
            "L. 1132-1 : lieu de résidence. Le lien avec l'emploi, c'est la présence réelle sur le site, à vérifier en préqual, pas un stigmate géographique. La grille du cours range le code postal en « éléments ignorés ».",
        }),
        q({
          question: "Une shortlist de présélection est :",
          options: [
            "A. Une liste courte de personnes à préqualifier, avec motifs professionnels, qui n'est ni une promesse d'embauche ni un classement au feeling.",
            "B. Un contrat de travail.",
            "C. Une promesse unilatérale au sens de F39588.",
            "D. La liste de tous les CV reçus, pour ne fâcher personne.",
          ],
          correct: 0,
          explanation:
            "F39588 distingue offre de contrat et promesse : la shortlist n'est ni l'une ni l'autre. Empiler tous les CV n'est pas présélectionner. Le motif écrit protège la qualité et la preuve.",
        }),
        q({
          question: "Un diplôme obtenu hors de France, sur le CV fictif de Karim El Amrani :",
          options: [
            "A. S'apprécie par le contenu et l'éventuelle équivalence, en lien avec l'emploi ; il ne justifie pas un écartement pour origine ou nationalité (L. 1132-1).",
            "B. Est un knock-out automatique.",
            "C. Impose de demander la nationalité dès le CV.",
            "D. Doit être ignoré, même s'il est un BTS de gestion utile au poste.",
          ],
          correct: 0,
          explanation:
            "Ni xénophobie, ni angélisme : on lit le contenu (assistant de gestion) comme un BTS français comparable, plus l'expérience. Demander la nationalité n'a en général pas de lien avec un poste d'assistant RH (L. 1221-6) et oriente un critère protégé.",
        }),
      ],
    }),
  ],
};
