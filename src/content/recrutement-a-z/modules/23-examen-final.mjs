import { lesson, h, t, note, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 23,
  title: "Examen final de recruteur junior",
  description:
    "Vous validez le parcours par un examen unique de 60 questions (seuil 80 %). L'attestation LOU Academy n'est pas un diplôme d'État ni une certification RNCP.",
  lessons: [
    lesson({
      title: "Consignes de l'examen final",
      description:
        "Seuil, nature de l'attestation, erreurs juridiques à revoir, tentatives autorisées.",
      minutes: 16,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Avant de composer, vous savez ce que l'examen mesure, quel seuil est exigé, ce que l'attestation vaut — et ce qu'elle ne vaut pas —, et où relire le cadre juridique (module 03) si une règle essentielle reste floue."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Cet examen est un questionnaire unique de 60 questions : 30 de connaissances, 20 de raisonnement, 10 de situations complexes. Le cas pratique détaillé a déjà été traité dans le module 22 (Atelier Nord Lumière). Ici, on évalue le transfert : les mêmes règles dans d'autres entreprises, d'autres métiers, d'autres pressions.\n\nLe seuil de réussite est de 80 %. Les tentatives ne sont pas limitées (max_attempts : illimité). Un échec n'est pas une indignité : il signale des lacunes, souvent juridiques. Relisez alors le module 03 (cadre légal), les sources de legal-sources.json (vérifiées le 13/10/2026), et les situations du module 20 correspondantes, puis retentez.\n\nL'attestation LOU Academy certifie que vous avez achevé les leçons requises et réussi les quiz de cette formation sur cette plateforme. Ce n'est pas un diplôme d'État. Ce n'est pas une certification professionnelle enregistrée au RNCP. Vous ne devez pas la présenter comme telle à un employeur, à un financeur ou à un candidat."
        ),
        h("Méthode opérationnelle"),
        t(
          "Avant l'épreuve : relire la liste d'erreurs juridiques ci-dessous, sans apprendre par cœur des délais inventés. Pendant : lire toutes les options ; les distracteurs sont volontairement séduisants (« le poste est physique, donc on peut écarter une femme enceinte » est faux). Après : lire chaque explication, y compris en cas de succès partiel.\n\nVous composez seul. Vous n'êtes pas évalué sur la mémorisation du roman Atelier Nord Lumière, mais sur des décisions transférables."
        ),
        h("Exemple professionnel"),
        t(
          "Un assistant RH d'une PME de services, un junior de cabinet et un chargé de recrutement en agence d'intérim peuvent tous réussir cet examen : les règles de non-discrimination, d'information du candidat, d'exactitude de l'offre, de RGPD et d'écrits d'embauche ne changent pas de logo. Ce qui change, c'est qui signe (politique interne) et le canal (intérim vs CDI)."
        ),
        h("Erreurs juridiques essentielles à revoir (renvoi module 03)"),
        t(
          "Relisez le module 03 avant de composer si l'un de ces points n'est pas net. Ne pas inventer de délai légal au-delà des sources du cours.\n\n1) L. 1132-1 : on n'écarte pas une personne à raison d'un critère protégé (origine, sexe, grossesse, âge, handicap, apparence, nom, résidence, opinions, syndicat, religion, santé, langue autre que le français, lanceur d'alerte, etc.). Il n'existe pas d'exception « poste physique = on refuse une femme enceinte ».\n2) L. 1221-6 : informations en lien direct et nécessaire avec l'emploi ; le candidat répond de bonne foi. Pas d'enquête familiale, médicale ou syndicale.\n3) L. 1221-8 : information préalable sur les méthodes (tests, scoring, IA). L. 1221-9 : méthodes pertinentes.\n4) Offre d'emploi : L. 5331-3 (pas d'allégation trompeuse), L. 5331-4 (français si travail en France), L. 5331-2 (pas de sexe / situation de famille, hors exceptions hors sujet junior).\n5) Salaire dans l'annonce : pas (encore) obligation interne française consolidée à la date des sources (directive UE 2023/970 en transposition). Mentir sur le salaire est déjà interdit.\n6) Offre vs promesse unilatérale : SP-F39588. Une promesse n'est pas obligatoire. Un écrit trop affirmatif se fait valider par RH. Le junior ne bricole pas un retrait.\n7) DPAE : obligation de l'employeur, avant la prise de fonction ou le début de l'essai, au plus tôt dans les 8 jours précédents (SP-F23107). Pas d'antidatage.\n8) CNIL : vivier jusqu'à 2 ans à compter du dernier contact = recommandation, avec information et opposition, pas une durée unique RGPD. Archivage intermédiaire 5 ans des non-retenus à compter de la date à laquelle le poste a été pourvu, à des fins probatoires (référentiel CNIL 2026 / L. 1134-5) = ne pas tout effacer « pour le RGPD » ni tout garder en base active.\n9) Photo, accent, « native », prénom, LinkedIn stalking politique : pas des outils de tri.\n10) Jamais recommander de mentir (manager, candidat, CRM, KPI)."
        ),
        note(
          "Date de vérification des sources : 13/10/2026. Distinguer toujours obligation légale / recommandation d'autorité / politique interne / bonne pratique. En cas de doute sur un cas réel futur, relire Légifrance, Service-Public, Code du travail numérique, CNIL, Urssaf — ne pas appliquer cet examen comme un code pénal personnel."
        ),
        h("Situations particulières"),
        t(
          "Échec à 78 % : sous le seuil. Relire les explications des questions manquées, surtout le module 03, puis retenter. Réussite à 80 % : l'attestation suit les règles de la plateforme (leçons requises + quiz réussis). Ce n'est toujours pas un diplôme d'État."
        ),
        h("Mise en pratique"),
        t(
          "Avant de lancer le quiz, écrivez de mémoire, en cinq lignes, la différence entre offre et promesse (SP-F39588) et la règle DPAE (SP-F23107). Comparez ensuite à legal-sources.json. Si vous avez inventé un délai, rayez-le."
        ),
        h("Correction détaillée"),
        t(
          "Offre : rétractable avant acceptation dans le délai laissé ou un délai raisonnable, selon l'explication Service-Public de la jurisprudence. Promesse unilatérale : vaut contrat ; le retrait s'analyse en licenciement sans cause réelle et sérieuse. Promesse non obligatoire. DPAE : avant prise de fonction ou début d'essai, au plus tôt 8 jours avant, obligation employeur. Tout autre délai (12 mois de CVthèque « illégal », 48 h de réflexion « légales », DPAE à J+7 après arrivée) est une invention : à bannir de vos réponses."
        ),
      ],
    }),
    quizLesson({
      title: "Examen final — 60 questions (seuil 80 %)",
      description:
        "30 connaissances, 20 raisonnements, 10 situations complexes. Transfert, pas restitution du cas Atelier Nord Lumière. Tentatives illimitées.",
      passing_score: 80,
      minutes: 75,
      questions: [
        q({
          question:
            "[Connaissance] Refuser une candidate parce qu'elle est enceinte, « le poste étant physique », est :",
          options: [
            "A. Autorisé : l'exception du poste physique figure dans L. 1132-1.",
            "B. Autorisé si le manager le motive par l'organisation des arrêts.",
            "C. Interdit : la grossesse et le sexe sont des critères protégés ; il n'existe pas d'exception « poste physique » permettant cet écartement (L. 1132-1, L. 1221-6).",
            "D. Autorisé pendant la période d'essai uniquement.",
          ],
          correct: 2,
          explanation:
            "Distracteur classique. L. 1132-1 protège notamment le sexe et la grossesse, y compris à l'embauche. L'organisation d'un arrêt se gère le moment venu, comme pour tout salarié. L'essai n'ouvre pas une discrimination. Module 03 / S41.",
        }),
        q({
          question:
            "[Connaissance] Les informations demandées à un candidat, sous quelque forme que ce soit, doivent :",
          options: [
            "A. Permettre d'apprécier la capacité à occuper l'emploi ou les aptitudes professionnelles, avec un lien direct et nécessaire (L. 1221-6).",
            "B. Couvrir aussi la situation familiale, pour anticiper l'absentéisme.",
            "C. Inclure un extrait de casier pour tous les postes, par égalité.",
            "D. Reprendre tout ce qui est public sur Internet.",
          ],
          correct: 0,
          explanation:
            "L. 1221-6. La famille, le casier « pour tous » et l'OSINT récréatif ne sont pas ce texte. Le candidat répond de bonne foi ; le recruteur aussi, en limitant les questions. CNIL : minimisation.",
        }),
        q({
          question:
            "[Connaissance] Avant d'utiliser un test, un scoring ou une IA d'aide au recrutement, le candidat :",
          options: [
            "A. N'a rien à savoir : l'outil est interne.",
            "B. Doit être expressément informé, préalablement, des méthodes et techniques utilisées à son égard (L. 1221-8) ; les résultats sont confidentiels ; les méthodes doivent être pertinentes (L. 1221-9).",
            "C. Doit seulement signer un NDA après le test surprise.",
            "D. Peut être informé uniquement s'il est retenu.",
          ],
          correct: 1,
          explanation:
            "L. 1221-8 et L. 1221-9. Un cas « pour voir sous stress » non annoncé (S60) ne respecte pas ces articles. L'IA n'échappe pas à l'information (S54).",
        }),
        q({
          question:
            "[Connaissance] Une offre d'emploi pour un travail effectué en France :",
          options: [
            "A. Peut être rédigée uniquement en anglais si les « talents sont internationaux ».",
            "B. Doit être en français ; un terme étranger sans équivalent exige une description française suffisamment détaillée (L. 5331-4).",
            "C. Peut rester en anglais si on publie seulement à l'étranger pour contourner le texte.",
            "D. Peut mixer « Supply Ninja » sans explication, c'est un intitulé marketing.",
          ],
          correct: 1,
          explanation:
            "L. 5331-4. Le contournement géographique ou l'intitulé fantaisiste n'effacent pas l'obligation. L. 5331-3 vise aussi la nature de l'emploi (« Ninja »).",
        }),
        q({
          question:
            "[Connaissance] Indiquer le salaire ou une fourchette dans une offre, en droit français, à la date de vérification des sources du cours (13/10/2026) :",
          options: [
            "A. Est déjà une obligation interne française consolidée ; on peut l'affirmer au manager sans réserve.",
            "B. Est interdit.",
            "C. N'est pas (encore) une obligation interne française consolidée ; une directive UE (2023/970) est en transposition ; indiquer une fourchette vraie est une bonne pratique / future obligation ; mentir sur le salaire est déjà interdit (L. 5331-3).",
            "D. Autorise à afficher un maximum jamais versé pour attirer.",
          ],
          correct: 2,
          explanation:
            "legal-sources.json UE-transparence-salariale et L. 5331-3. Ni « déjà obligatoire » ni « interdit d'indiquer ». Le clickbait salarial reste une allégation trompeuse.",
        }),
        q({
          question:
            "[Connaissance] Selon l'explication Service-Public F39588, une promesse unilatérale de contrat de travail :",
          options: [
            "A. N'a aucune portée : seul le CDI signé compte.",
            "B. Peut valoir contrat ; le retrait s'analyse en licenciement sans cause réelle et sérieuse ; une promesse d'embauche n'est pas obligatoire.",
            "C. Est obligatoire avant toute embauche.",
            "D. Peut toujours être retirée par SMS du recruteur junior, sans RH.",
          ],
          correct: 1,
          explanation:
            "SP-F39588 (jurisprudence expliquée, notamment Cass. soc. 21 sept. 2017). L'offre (autre notion) peut être retirée avant acceptation dans le délai laissé ou un délai raisonnable. Le junior fait valider les écrits ; il ne bricole pas un retrait (S62).",
        }),
        q({
          question:
            "[Connaissance] La DPAE doit être effectuée :",
          options: [
            "A. Dans le mois qui suit l'arrivée, c'est un papier RH.",
            "B. Trois mois avant J1, toujours.",
            "C. Avant la prise de fonction ou le début de la période d'essai, au plus tôt dans les 8 jours précédant l'embauche ; obligation de l'employeur ; le junior coordonne (SP-F23107).",
            "D. Uniquement si le salarié est en CDI, pas en CDD.",
          ],
          correct: 2,
          explanation:
            "SP-F23107 + Urssaf. Ne pas inventer d'autre délai. Ne pas antidater. Ce n'est pas la signature isolée du junior. Le type de contrat n'efface pas l'obligation rappelée pour l'embauche.",
        }),
        q({
          question:
            "[Connaissance] La durée de 2 ans en vivier / CVthèque, à compter du dernier contact :",
          options: [
            "A. Est une recommandation CNIL (information, opposition), pas une durée unique imposée par le RGPD lui-même pour tous les traitements.",
            "B. Est une obligation pénale unique.",
            "C. Interdit tout recontact après 12 mois (« c'est illégal »).",
            "D. Autorise à garder les CV en base active indéfiniment si le candidat a postulé une fois.",
          ],
          correct: 0,
          explanation:
            "CNIL-guide / CNIL-referentiel-2026. Distinguer vivier (reco 2 ans) et archivage probatoire 5 ans des non-retenus à compter de la date à laquelle le poste a été pourvu (L. 1134-5, présenté comme obligation par le référentiel). Pas de délai 12 mois inventé (S57).",
        }),
        q({
          question:
            "[Connaissance] Parmi ces critères, lequel n'est pas un critère protégé au sens de L. 1132-1 tel que rappelé dans les sources du cours ?",
          options: [
            "A. Le lieu de résidence.",
            "B. L'apparence physique.",
            "C. Le niveau de maîtrise d'un WMS nécessaire au poste, évalué de façon identique pour tous.",
            "D. Le nom de famille.",
          ],
          correct: 2,
          explanation:
            "Une aptitude professionnelle liée à l'emploi (L. 1221-6) n'est pas un critère protégé. Résidence, apparence, nom le sont. Attention : un « WMS » utilisé comme prétexte pour écarter un critère protégé redevient illicite.",
        }),
        q({
          question:
            "[Connaissance] Exiger une photo sur le CV, ou trier les CV selon la photo :",
          options: [
            "A. Est une bonne pratique d'image employeur.",
            "B. Égalise les chances si tout le monde fournit une photo.",
            "C. Est conforme dès lors que le manager « ne s'en sert pas ».",
            "D. Expose à une discrimination fondée sur l'apparence, l'origine vraie ou supposée, le sexe, l'âge, etc. (L. 1132-1) ; la photo n'est en général pas une information nécessaire (L. 1221-6).",
          ],
          correct: 3,
          explanation:
            "S42. L'égalisation par la photo augmente le risque. Laisser le filtre au manager, c'est le laisser opérer. Exceptions d'offres très limitées (artiste, mannequin) hors recrutement junior classique.",
        }),
        q({
          question:
            "[Connaissance] « Native French » ou « français sans accent » comme filtre de sourcing :",
          options: [
            "A. Est légitime : les opérateurs comprennent mal les accents.",
            "B. Est un proxy d'origine / de langue ; L. 1132-1 vise notamment la capacité à s'exprimer dans une langue autre que le français ; on évalue la communication nécessaire au poste, pas l'accent ni la langue maternelle.",
            "C. Est obligatoire dans une offre en France.",
            "D. Peut figurer en anglais pour contourner L. 5331-4.",
          ],
          correct: 1,
          explanation:
            "S83-S84. On peut évaluer le français professionnel par une mise en situation identique. On ne chasse pas l'accent ni le « native ». L'anglais only ne contourne rien.",
        }),
        q({
          question:
            "[Connaissance] Une allégation fausse ou susceptible d'induire en erreur dans une offre, portant sur l'existence, la nature, la description de l'emploi, la rémunération ou le lieu, est :",
          options: [
            "A. Une pratique marketing tolérée si le taux de clics est bon.",
            "B. Interdite (L. 5331-3).",
            "C. Interdite seulement si le salaire est trop bas.",
            "D. Autorisée pour les postes confidentiels (cover story d'un faux second site).",
          ],
          correct: 1,
          explanation:
            "L. 5331-3. 15 postes fictifs, salaire gonflé, gel présenté comme poste ouvert, second site inventé (S72) : même texte. La confidentialité se traite par le canal, pas par le mensonge.",
        }),
        q({
          question:
            "[Connaissance] Le droit d'accès d'un candidat à ses données de recrutement :",
          options: [
            "A. N'existe pas s'il n'est pas retenu.",
            "B. Se traite en supprimant le dossier pour n'avoir plus rien à donner.",
            "C. Existe ; le junior oriente vers le process RH / DPO, ne détruit pas les traces pour y échapper, et ne laisse pas un commentaire d'âge comme motif officiel (RGPD, CNIL, L. 1132-1, conservation L. 1134-5).",
            "D. Oblige à envoyer aussi le CV du candidat retenu.",
          ],
          correct: 2,
          explanation:
            "S51, S28. Accès ≠ données d'autrui. Destruction opportuniste : faute. Commentaire « trop vieux » : discrimination à recadrer, pas à transférer tel quel comme motif.",
        }),
        q({
          question:
            "[Connaissance] L'attestation délivrée à l'issue de cette formation LOU Academy :",
          options: [
            "A. Est un diplôme d'État de recruteur.",
            "B. Est une certification professionnelle enregistrée au RNCP.",
            "C. Certifie la réussite du parcours sur cette plateforme (leçons requises et quiz) ; ce n'est ni un diplôme d'État ni une certification RNCP.",
            "D. Remplace une DPAE.",
          ],
          correct: 2,
          explanation:
            "Course meta et consignes d'examen. La présenter comme diplôme d'État ou RNCP serait trompeur — y compris vis-à-vis d'un employeur.",
        }),
        q({
          question:
            "[Connaissance] Le lieu de résidence, utilisé pour départager deux candidats à notes égales (« le plus proche, moins d'absences ») :",
          options: [
            "A. Est du bon sens logistique, donc licite.",
            "B. Est un critère protégé (L. 1132-1) ; on départage par une preuve professionnelle (L. 1221-9).",
            "C. Est licite si on le note « mobilité » dans le CRM.",
            "D. Est licite au-delà de 30 km uniquement — délai légal de trajet.",
          ],
          correct: 1,
          explanation:
            "S31. Pas de délai légal de kilomètres à inventer. Renommer « mobilité » ne lave pas le critère. Un pile ou face n'est pas une méthode pertinente.",
        }),
        q({
          question:
            "[Connaissance] Les activités syndicales, un mandat de représentant du personnel, la qualité de lanceur d'alerte ou de facilitateur :",
          options: [
            "A. Sont des signaux de « risque social » permettant d'écarter.",
            "B. Figurent parmi les critères protégés (L. 1132-1) ; on n'enquête pas sur le contenu d'une alerte (L. 1221-6).",
            "C. Doivent être déclarés dès le CV, sous peine de nullité de l'embauche — délai légal de 48 h.",
            "D. Autorisent une note « profil conflictuel ».",
          ],
          correct: 1,
          explanation:
            "S50. Pas de délai 48 h inventé. Le code « conflictuel » est un prétexte. Le « risque social » n'est pas une aptitude professionnelle.",
        }),
        q({
          question:
            "[Connaissance] Dans une grille d'évaluation, une ligne « feeling / présentation physique / photo » :",
          options: [
            "A. Est utile pour coller au manager.",
            "B. N'est pas une méthode pertinente au regard de l'emploi (L. 1221-9) et ouvre L. 1132-1.",
            "C. Est obligatoire pour les métiers d'entrepôt.",
            "D. Devient licite si le poids est inférieur à 5 %.",
          ],
          correct: 1,
          explanation:
            "Un petit poids n'autorise pas un critère illicite. L'entrepôt n'est pas une exception d'apparence (hors cas très spécifiques d'offres, non concernés).",
        }),
        q({
          question:
            "[Connaissance] Qui est en principe signataire d'une proposition d'embauche dans une PME où le junior n'a pas de délégation ?",
          options: [
            "A. Le recruteur junior, dès qu'il « close ».",
            "B. Le manager opérationnel, par e-mail personnel.",
            "C. La personne habilitée selon la politique interne (souvent RH / direction) ; le junior prépare, n'improvise pas le mot « promesse ».",
            "D. Le candidat, qui s'auto-embauche en acceptant à l'oral.",
          ],
          correct: 2,
          explanation:
            "Politique interne + SP-F39588. Un e-mail manager « nous vous promettons » est un incident (S62), pas un modèle. L'oral n'est pas magiquement inoffensif.",
        }),
        q({
          question:
            "[Connaissance] Un commentaire CRM « trop vieux, pas le feeling » :",
          options: [
            "A. Peut servir de motif de refus transmis tel quel, par transparence.",
            "B. Est une donnée à risque (L. 1132-1) ; on recadre le manager, on documente des faits professionnels, on n'efface pas tout le dossier pour échapper à un accès.",
            "C. Est protégé par le secret des affaires, donc incommunicable à jamais.",
            "D. Est licite s'il est écrit en anglais.",
          ],
          correct: 1,
          explanation:
            "S27, S51. Transparence ≠ transmettre un motif discriminatoire. Secret des affaires n'est pas un blanc-seing. La langue ne change rien.",
        }),
        q({
          question:
            "[Connaissance] La conservation probatoire des dossiers de candidats non retenus, telle que présentée par le référentiel CNIL 2026 en lien avec L. 1134-5 :",
          options: [
            "A. Autorise à laisser tous les CV en CVthèque active indéfiniment.",
            "B. Est un archivage intermédiaire de 5 ans à compter de la date à laquelle le poste a été pourvu, à des fins de preuve — à distinguer du vivier.",
            "C. Oblige le junior à tout détruire à J+30.",
            "D. N'existe pas : le RGPD impose l'oubli immédiat.",
          ],
          correct: 1,
          explanation:
            "CNIL-referentiel-2026 et L. 1134-5. Obligation d'archivage probatoire ≠ base active. Vivier = autre finalité, reco 2 ans. Le junior ne décide pas seul un purge ou un silo éternel (S56).",
        }),
        q({
          question:
            "[Connaissance] Un must-have, dans un profil candidat, doit être :",
          options: [
            "A. Un diplôme bac+5, toujours, pour « parler aux commerciaux ».",
            "B. Un critère observable, lié aux missions, évaluable de la même façon pour tous (L. 1221-6, L. 1221-9).",
            "C. L'âge cible du service.",
            "D. La résidence à moins de 20 minutes.",
          ],
          correct: 1,
          explanation:
            "Le diplôme n'est un must que s'il est nécessaire. Âge et résidence : L. 1132-1. Le brief gonflé (S02) se challenge.",
        }),
        q({
          question:
            "[Connaissance] La méthode STAR sert à :",
          options: [
            "A. Obtenir des faits (situation, tâche, action, résultat) comparables entre candidats.",
            "B. Piéger le candidat sous stress non annoncé.",
            "C. Remplacer la grille par le feeling du panel.",
            "D. Poser des questions de situation familiale de façon structurée.",
          ],
          correct: 0,
          explanation:
            "STAR = preuves. Pas un test surprise (L. 1221-8). Pas un permis de questions illicites. Le panel sans grilles (S37) reste non pertinent.",
        }),
        q({
          question:
            "[Connaissance] Le recruteur junior, face à une question illicite du manager en entretien :",
          options: [
            "A. Laisse finir par politesse, puis « n'utilise pas » la réponse.",
            "B. Interrompt, recentre sur les aptitudes, signale les faits à RH ; il ne note pas l'information illicite dans le dossier candidat.",
            "C. Reformule pour obtenir la même information plus mollement (« disponible 24 mois ? »).",
            "D. Répond à la place du candidat pour déminer.",
          ],
          correct: 1,
          explanation:
            "S41, S48. Le silence est une complicité opérationnelle. La reformulation grossesse → 24 mois vise le même objet. Collecter quand même = RGPD / L. 1221-6.",
        }),
        q({
          question:
            "[Connaissance] Un recrutement confidentiel (titulaire non informé) autorise :",
          options: [
            "A. Une annonce décrivant une fausse ouverture de second site.",
            "B. Un canal discret (approches, cabinet) et un intitulé non mensonger ; pas une cover story (L. 5331-3).",
            "C. D'informer le titulaire contre la consigne, de votre initiative isolée.",
            "D. De publier les photos des finalistes « en off ».",
          ],
          correct: 1,
          explanation:
            "S72, S69. Confidentialité ≠ mensonge d'existence de l'emploi. Pas de publication nominative sans cadre. Pas d'indiscrétion isolée.",
        }),
        q({
          question:
            "[Connaissance] L'intérim, par rapport à un CDI, est :",
          options: [
            "A. Un CDI plus rapide, que l'on vend comme CDI au candidat d'agence pour l'attirer.",
            "B. Un canal / contrat à faire qualifier par RH selon que le besoin est un pic ou une structure ; la nature de l'emploi doit être vraie (L. 5331-3).",
            "C. Interdit dès que le manager trouve l'intérim cher.",
            "D. Un moyen de tester un mineur de 17 ans de nuit « comme les autres ».",
          ],
          correct: 1,
          explanation:
            "S71, S98. Pas d'appât de nature de contrat. Pas d'improvisation sur le travail des mineurs : RH. Le coût n'est pas une règle d'interdiction légale inventée.",
        }),
        q({
          question:
            "[Connaissance] Un indicateur de performance junior du type « nombre d'offres envoyées dans la semaine du COMEX » :",
          options: [
            "A. Justifie un mensonge de rareté ou un CRM « offer accepted » anticipé.",
            "B. Ne doit pas servir de prime poussant à closer au mépris des écrits et de L. 5331-3 (S100) ; on privilégie des indicateurs de qualité de dossier.",
            "C. Est obligatoire pour tout ATS.",
            "D. Autorise deux offres secrètes le même soir.",
          ],
          correct: 1,
          explanation:
            "S07, S100, module 21 tableau de bord. Un KPI n'autorise pas le mensonge. Double offre : chaos et SP-F39588.",
        }),
        q({
          question:
            "[Connaissance] La cooptation (y compris le CV du neveu du DG) :",
          options: [
            "A. Impose d'embaucher le coopté.",
            "B. Est un canal : même grille, conflit d'intérêts tracé, notes non maquillées.",
            "C. Impose un entretien plus dur pour « montrer l'équité ».",
            "D. Autorise d'écarter sans entretien pour éviter le soupçon.",
          ],
          correct: 1,
          explanation:
            "S73. Canal ≠ passe-droit. Entretien punitif et refus aveugle ne sont pas des méthodes pertinentes (L. 1221-9).",
        }),
        q({
          question:
            "[Connaissance] Un aménagement d'accessibilité demandé pour un entretien (salle, temps supplémentaire) :",
          options: [
            "A. Prouve l'inaptitude : on recale.",
            "B. Exige le dossier médical et la RQTH avant d'accorder quoi que ce soit.",
            "C. S'apprécie comme aménagement de l'évaluation, sans collecte médicale par le junior ; le handicap / la santé ne sont pas un motif d'écartement (L. 1132-1, L. 1221-6).",
            "D. Autorise à durcir le reste de l'oral « pour compenser ».",
          ],
          correct: 2,
          explanation:
            "S43, S89. Aménager l'évaluation ≠ baisser le niveau du poste. Compensation punitive = discrimination. Pas de médecine improvisée.",
        }),
        q({
          question:
            "[Connaissance] Vous n'avez pas le droit, dans cet enseignement, d'inventer :",
          options: [
            "A. Une fourchette salariale interne que RH n'a pas validée — et c'est tout.",
            "B. Un délai légal, une jurisprudence, une statistique ou un témoignage hors legal-sources.json et textes cités ; ni de recommander de mentir.",
            "C. Un must-have professionnel lié aux missions.",
            "D. Un plan d'intérim de transition proposé au manager.",
          ],
          correct: 1,
          explanation:
            "CONTENT_SPEC et consignes d'examen. Inventer « 12 mois illégal », « 48 h légales de réflexion », « exception poste physique » : hors sujet et faux. Un must-have métier et un plan d'intérim sont au contraire le travail.",
        }),
        q({
          question:
            "[Connaissance] L. 5331-2 (et textes liés rappelés par Service-Public) vise notamment :",
          options: [
            "A. L'obligation d'afficher le salaire, déjà consolidée en droit français.",
            "B. L'interdiction de mentionner le sexe / la situation de famille dans une offre (exceptions très limitées : artiste, mannequin/modèle).",
            "C. L'obligation de photo d'identité.",
            "D. L'interdiction de toute fourchette salariale.",
          ],
          correct: 1,
          explanation:
            "Fiche Service-Public Entreprendre F39133, sources du cours. Ne pas confondre avec la directive transparence (affichage du salaire, transposition). Photo : plutôt L. 1132-1 / L. 1221-6.",
        }),
        q({
          question:
            "[Raisonnement] Mardi, un chef d'atelier veut « quelqu'un pour lundi », sans fiche ni budget. Vous :",
          options: [
            "A. Publiez une annonce générique dans l'heure et envoyez les trois premiers CV.",
            "B. Promettez le lundi pour rassurer, puis vous ajusterez.",
            "C. Recadrez le délai, listez les manquants, proposez un plan (intérim de transition vs CDI), sans date d'arrivée inventée.",
            "D. Attendez la fin du préavis pour ne pas faire de vagues, sans rien dire.",
          ],
          correct: 2,
          explanation:
            "S01. L'urgence se traite par un plan, pas par une promesse. L. 5331-3 si l'annonce ment sur le délai. Ne pas disparaître non plus : cadrer.",
        }),
        q({
          question:
            "[Raisonnement] La fourchette interne est 8 à 12 k€ sous les retours de vos process comparables. Le fondateur refuse d'ouvrir. Vous :",
          options: [
            "A. Indiquez 42 k€ dans l'annonce pour attirer, puis recadrez.",
            "B. Documentez l'écart interne, alertez, ne sur-vendez pas la rémunération ; vous n'inventez pas une statistique nationale.",
            "C. Bloquez tout process sans accord écrit du fondateur pour ouvrir, même si RH assume le risque de délai — la seule voie.",
            "D. Culpabilisez les candidats « pas assez passionnés par le baby-foot ».",
          ],
          correct: 1,
          explanation:
            "S03. L. 5331-3. Pas de marché officiel inventé. Bloquer peut être disproportionné si RH assume ; alerter est obligatoire. Le baby-foot n'est pas un salaire.",
        }),
        q({
          question:
            "[Raisonnement] Deux finalistes à 16/20. Le manager veut celui qui habite le plus près. Vous :",
          options: [
            "A. Refusez le critère de résidence (L. 1132-1) et proposez un départage professionnel.",
            "B. Acceptez : moins d'absences.",
            "C. Faites pile ou face.",
            "D. Les écartez tous les deux pour éviter le conflit.",
          ],
          correct: 0,
          explanation:
            "S31. Méthodes pertinentes (L. 1221-9). Le conflit d'autorité se documente, il ne se résout pas en sacrifiant les deux profils.",
        }),
        q({
          question:
            "[Raisonnement] Après 20 minutes, le manager coupe : « je ne le sens pas, trop scolaire. » Aucune note. Vous :",
          options: [
            "A. Clôturez pour respecter le manager.",
            "B. Mettez 8/20 d'autorité.",
            "C. Dites au candidat que le poste est gelé.",
            "D. Demandez des faits observables, refusez un refus sans critère, et restez attentif à un biais d'âge / apparence caché derrière « scolaire ».",
          ],
          correct: 3,
          explanation:
            "S32. Feeling à traduire ou à écarter. Mensonge de gel : déloyal (L. 5331-3). Falsifier la note : faute. L. 1221-9 et L. 1132-1.",
        }),
        q({
          question:
            "[Raisonnement] Vous aviez promis un retour sous cinq jours. Le manager n'a pas tranché. Le candidat relance. Le manager : « ignore, trop pressé = mauvais profil. » Vous :",
          options: [
            "A. N'ignorez pas : état réel + nouveau délai + relance écrite du manager.",
            "B. Testez la motivation par le silence.",
            "C. Inventez un refus pour clore.",
            "D. Inventez qu'il est le favori.",
          ],
          correct: 0,
          explanation:
            "S21. Le silence n'est pas un critère. Mentir dans un sens ou dans l'autre n'est pas une option. CNIL : loyauté du traitement.",
        }),
        q({
          question:
            "[Raisonnement] Une candidate a une offre concurrente à 48 h. Votre manager est en salon. Vous :",
          options: [
            "A. Lui demandez de refuser l'autre offre, « on est presque sûrs ».",
            "B. L'écartez : trop de contraintes.",
            "C. Accélérez réellement ce qui est possible, ou la laissez partir proprement, sans promesse molle.",
            "D. Inventez un entretien déjà validé.",
          ],
          correct: 2,
          explanation:
            "S23. Pas de pont brûlé sur du vent. Pas de punition de la transparence. Pas de mensonge d'agenda.",
        }),
        q({
          question:
            "[Raisonnement] Le manager veut trois « yes en poche » et que chacun entende « vous êtes très bien positionné », sans date. Vous :",
          options: [
            "A. Obéissez : stratégie de réserve.",
            "B. Promettez le poste aux trois.",
            "C. Coupez toute information pour rester neutre.",
            "D. Informez chacun de la shortlist ouverte, datez, refusez les formulations mensongères.",
          ],
          correct: 3,
          explanation:
            "S25. Le silence n'est pas la neutralité. Trois priorités uniques sont un mensonge. Loyauté > file d'attente.",
        }),
        q({
          question:
            "[Raisonnement] Le poste est gelé. Le manager veut que vous disiez « on n'a pas trouvé le profil » et que l'annonce reste en ligne. Vous :",
          options: [
            "A. Informez du gel / retirez ou marquez pourvu ; pas de défaut de profil inventé ; pas d'emploi fantôme (L. 5331-3).",
            "B. Mentez pour protéger le budget de l'an prochain.",
            "C. Promettez une ouverture dans trois mois sans décision.",
            "D. Dites à chacun qu'il est en finale.",
          ],
          correct: 0,
          explanation:
            "S61, S67. Existence de l'emploi. Vivier seulement informé et vrai. Marque employeur et données sans finalité.",
        }),
        q({
          question:
            "[Raisonnement] Une candidate allègue une discrimination. Le manager veut répondre sèchement et supprimer les notes. Vous :",
          options: [
            "A. Laissez le manager et nettoyez le CRM.",
            "B. Présentez des excuses publiques sur LinkedIn de votre propre chef.",
            "C. Ne détruisez pas, saisissez RH, conservez, vérifiez que le refus documenté est professionnel.",
            "D. Promettez un second poste pour éteindre l'accusation.",
          ],
          correct: 2,
          explanation:
            "S64. Destruction de preuves, clash, poste fantôme : fautes. Polarisation publique isolée : imprudente. L. 1132-1, L. 1134-5.",
        }),
        q({
          question:
            "[Raisonnement] L'outil IA sort un top 10 sans aucune femme. Le manager ne veut ouvrir que ce top. Aucun candidat n'est informé. Vous :",
          options: [
            "A. Suivez le top : l'outil est objectif.",
            "B. Renommez l'IA « aide à la lecture » et continuez.",
            "C. Injectez le genre dans le modèle sans règle.",
            "D. N'en faites pas la décision, informez (L. 1221-8), contrôlez les biais, alertez RH / DPO.",
          ],
          correct: 3,
          explanation:
            "S54. L'IA n'est pas objective par nature. Un top 10 sans femme est une alerte L. 1132-1. Cosmétique sémantique insuffisante. Bricolage du genre : dangereux.",
        }),
        q({
          question:
            "[Raisonnement] Un collègue a fouillé Instagram (mariage, post politique) pour le CR. Vous :",
          options: [
            "A. Intégrez : c'est public.",
            "B. Refusez ces éléments, les sortez du dossier (L. 1132-1, L. 1221-6, CNIL).",
            "C. Les gardez sans les écrire.",
            "D. Demandez au candidat de justifier ses posts.",
          ],
          correct: 1,
          explanation:
            "S53. Public ≠ pertinent ≠ licite. Garder sans écrire, c'est encore traiter la donnée. Opinions politiques protégées.",
        }),
        q({
          question:
            "[Raisonnement] En préqual, le candidat refuse d'indiquer une prétention et demande d'abord la fourchette, que vous avez. Vous :",
          options: [
            "A. L'écartez : pas sérieux.",
            "B. Inventez une fourchette plus basse pour le faire descendre.",
            "C. Communiquez la fourchette autorisée et poursuivez si le cadre lui convient (S19, L. 5331-3).",
            "D. Insistez jusqu'à obtenir un chiffre, c'est un test de caractère.",
          ],
          correct: 2,
          explanation:
            "La prétention est utile, pas un test de soumission. Mentir sur la fourchette est interdit. L. 1221-6 : lien avec l'emploi, pas un rapport de force.",
        }),
        q({
          question:
            "[Raisonnement] Le manager veut « tous les CV », y compris hors critères, et a déjà commenté des photos. Vous :",
          options: [
            "A. Transférez la CVthèque.",
            "B. Convenez d'une grille écrite, envoyez un flot qualifié, refusez le tri photo / âge (L. 1132-1).",
            "C. Filtrez vous-même « ce qui lui plaira » (look, adresse).",
            "D. Ne filtrez plus du tout pour éviter le conflit.",
          ],
          correct: 1,
          explanation:
            "S10. Présélection = métier, pas censure. Anticiper les goûts illicites = discrimination par procuration.",
        }),
        q({
          question:
            "[Raisonnement] Un interne et un externe sont évalués. Le manager : « prends l'interne, sinon il se démotive », malgré un écart WMS net. Politique : pas de priorité automatique. Vous :",
          options: [
            "A. Offrez le poste comme une faveur.",
            "B. Faites passer l'externe dans un process alibi.",
            "C. Évaluez sur la même grille, explicitez la politique, ne maquillez pas (S34).",
            "D. Écartez l'interne d'emblée pour ne pas créer d'espoir.",
          ],
          correct: 2,
          explanation:
            "Équité. Process potiche : L. 5331-3 si l'emploi n'est pas réellement ouvert. L'interne a droit à un vrai feedback.",
        }),
        q({
          question:
            "[Raisonnement] Après acceptation orale, counter-offer de l'employeur actuel. Le manager dit « mercenaire, on n'aligne pas ». L'écrit n'est pas parti. Vous :",
          options: [
            "A. Traitez le candidat de mercenaire et clôturez.",
            "B. Restez factuel, leviers vrais seulement, pas de dénigrement, pas d'écrit menti, pas d'alignement sauvage sans RH (S17).",
            "C. Montez immédiatement sans RH.",
            "D. Dites que l'écrit est déjà envoyé pour le bloquer.",
          ],
          correct: 1,
          explanation:
            "Jamais mentir sur un écrit. Jamais dénigrer. La contre-offre n'est pas un critère moral. Politique de négo = RH.",
        }),
        q({
          question:
            "[Raisonnement] J-3, aucun PC, aucun tuteur, badge non commandé. Le manager : « on n'a plus besoin de toi ». Vous :",
          options: [
            "A. Disparaissez : ce n'est plus du recrutement.",
            "B. Promettez parrain, laptop et formation 3 jours pour rassurer.",
            "C. Faites l'intégration à la place du manager le lundi.",
            "D. Passage de relais écrit, alerte sur les manques, informations vraies au candidat, sans moyen fictif (S94).",
          ],
          correct: 3,
          explanation:
            "Le junior n'est pas l'intégrateur, il n'est pas un disparu, il n'est pas un vendeur de moyens fictifs (loyauté / L. 5331-3 analogie avantages).",
        }),
        q({
          question:
            "[Raisonnement] Une requête booléenne vous est donnée : (HEC OR ESSEC) NOT (Mohamed OR Fatima) AND native French. Vous :",
          options: [
            "A. L'utilisez : ça marche en cabinet.",
            "B. Enlevez les prénoms mais gardez native et HEC only.",
            "C. Refusez et reconstruisez sur les compétences (L. 1132-1, L. 1221-6, L. 1221-9).",
            "D. La lancez sans noter le motif, ainsi « ça n'existe pas ».",
          ],
          correct: 2,
          explanation:
            "S83. L'absence de trace n'efface pas l'acte. HEC exclusif sans lien nécessaire : discrimination indirecte possible. Native : origine / langue.",
        }),
        q({
          question:
            "[Raisonnement] Un ami proche postule. Vous vous croyez neutre. Vous :",
          options: [
            "A. Préqualifiez en silence.",
            "B. Le recalez d'office pour éviter le soupçon.",
            "C. Le sur-notez pour compenser le soupçon inverse.",
            "D. Déclarez le conflit et vous déportez (S95).",
          ],
          correct: 3,
          explanation:
            "La neutralité proclamée ne suffit pas. Recale et sur-notation sont des biais. Politique déontologique : déclaration.",
        }),
        q({
          question:
            "[Raisonnement] Le candidat veut lire le projet de contrat avant de démissionner. Le manager : « s'il n'a pas confiance, on passe au suivant. » RH a un projet validable. Vous :",
          options: [
            "A. Écartez pour manque de confiance.",
            "B. Transmettez les documents validés RH : c'est prudent, pas un affront (S92).",
            "C. Promettez oralement que « ce sera le même que tout le monde » sans pièce.",
            "D. Envoyez un contrat non validé pour aller vite.",
          ],
          correct: 1,
          explanation:
            "Test de confiance inversé = mauvais critère. Oral vague et contrat sauvage : SP-F39588 / S14.",
        }),
        q({
          question:
            "[Raisonnement] Votre N+1 ferme les yeux « si ça signe » : vous pourriez dire que le second a déjà signé ailleurs (faux) et qu'un laptop custom est commandé (faux). Vous :",
          options: [
            "A. Refusez le mensonge, gardez les faits, n'antidatez pas le CRM (S100, L. 5331-3).",
            "B. Mentez : « tout le monde le fait », l'objectif d'abord.",
            "C. Truquez le CRM « offer accepted » en attendant.",
            "D. Baissez le salaire dans l'outil puis promettez un rattrapage.",
          ],
          correct: 0,
          explanation:
            "Jamais recommander de mentir. Un N+1 complice n'est pas une source du droit. Faux avantage, fausse rareté, faux rattrapage : fautes empilées.",
        }),
        q({
          question:
            "[Situation complexe] En entretien, le manager demande les projets d'enfants « poste physique », commente la photo du CV et veut recaler « les clients ne sont pas prêts ». La candidate vous regarder. Vous :",
          options: [
            "A. Laissez faire : trois signaux, un seul pourrait passer.",
            "B. Reformulez sur les 24 mois de disponibilité et triez quand même sur la photo, sans le noter.",
            "C. Interrompez la question grossesse, refusez le tri apparence / origine, recentrez sur les aptitudes, alertez RH (L. 1132-1, L. 1221-6) ; aucune exception « poste physique ».",
            "D. Notez tout « pour le dossier » au cas où un contentieux viendrait.",
          ],
          correct: 2,
          explanation:
            "S41+S42+S45. Trois illicites n'en font pas un licite. Noter les réponses illicites aggrave la collecte. La reformulation 24 mois est la même question. Transfert du module 03, pas du roman module 22.",
        }),
        q({
          question:
            "[Situation complexe] Un e-mail du directeur dit « nous vous promettons le poste, 37 k€, le 3 novembre ». Le COMEX coupe le budget. On vous demande de retirer en douce et d'écrire « ce n'était qu'une piste », tout en envoyant le même jour une offre à un second. Vous :",
          options: [
            "A. Retirez en douce et doublez l'offre : le COMEX d'abord.",
            "B. Alertez RH / juridique : formulation potentiellement de promesse unilatérale (SP-F39588) ; vous ne bricolez ni le retrait ni une seconde attribution ; vous conservez les pièces.",
            "C. Un SMS « finalement non » suffit, ce n'est pas un contrat.",
            "D. Conseillez au premier candidat de mentir à son employeur actuel pour gagner du temps.",
          ],
          correct: 1,
          explanation:
            "S62+S07+S63. Terrain juridique. SMS = écrit. Double attribution = chaos. Jamais conseiller de mentir. La « piste » réécrite aggrave la mauvaise foi.",
        }),
        q({
          question:
            "[Situation complexe] Scoring IA non annoncé, top 10 sans femmes, manager qui ne veut que ce top, et un booléen NOT de prénoms « pour alimenter l'IA ». Vous :",
          options: [
            "A. Combinez IA + booléen : objectivité maximale.",
            "B. Informez a posteriori seulement les retenues.",
            "C. Stoppez l'usage décisionnel, refusez le booléen discriminatoire, informez (L. 1221-8), contrôlez, alertez DPO / RH (L. 1132-1, L. 1221-9).",
            "D. Rééquilibrez en injectant le sexe dans le modèle sans documentation.",
          ],
          correct: 2,
          explanation:
            "S54+S83. Deux discriminations (algo + requête) ne se compensent pas par un bricolage de genre. L'information préalable n'est pas un luxe pour les non-retenus.",
        }),
        q({
          question:
            "[Situation complexe] Poste publié à l'externe alors que le manager a « son » interne et veut un process alibi ; le brief dit encore « jeune, bac+5, 10 ans ». Vous :",
          options: [
            "A. Faites l'alibi : l'interne aura le poste, les externes nourrissent le vivier.",
            "B. Respectez la publication interne réelle, même grille, recadrez le brief (pas « jeune »), refusez le process potiche (L. 5331-3, L. 1132-1).",
            "C. Bloquez l'interne pour « ouvrir le jeu » de force.",
            "D. Dites aux externes que c'est déjà pourvu tout en collectant les CV.",
          ],
          correct: 1,
          explanation:
            "S74+S02+S44. Si vous attirez, l'emploi est réel. « Jeune » sort. L'interne n'est ni sacré ni sacrifié. Collecte mensongère : L. 5331-3 + CNIL.",
        }),
        q({
          question:
            "[Situation complexe] Candidat en situation de handicap : compétences ok, demande un aménagement d'horaire. Le manager : « on n'est pas équipés, recale, et demande-lui son dossier médical pour le justifier. » Vous :",
          options: [
            "A. Recalez : l'entreprise n'est pas équipée.",
            "B. Exigez le dossier médical : L. 1221-6 le permet pour tous les postes physiques.",
            "C. Ne l'écartez pas du seul fait du handicap ; saisissez RH / référent ; pas de collecte médicale junior (L. 1132-1, L. 1221-6, CNIL).",
            "D. Le convoquez à un oral plus dur pour compenser.",
          ],
          correct: 2,
          explanation:
            "S43+S89. « Pas équipés » n'est pas un tri junior. Le médical n'est pas un réflexe L. 1221-6. Compensation punitive : discrimination.",
        }),
        q({
          question:
            "[Situation complexe] Lundi 8 h, embauche. Vendredi, DPAE non faite. Le manager : « il commence, on dira mercredi, et toi tu remplis avec l'identifiant d'un collègue. » Vous :",
          options: [
            "A. Alertez l'employeur / RH : DPAE avant prise de fonction ou début d'essai, au plus tôt 8 jours avant (SP-F23107) ; pas d'antidatage, pas d'identifiant emprunté.",
            "B. Laissez commencer : ce n'est qu'un papier.",
            "C. Antidatez mercredi : le salarié sera content d'avoir le job.",
            "D. Remplissez avec l'identifiant emprunté pour sauver J1.",
          ],
          correct: 0,
          explanation:
            "S91. Obligation employeur. Coordination junior. Deux mensonges (date, identité) n'en font pas une régularisation. Pas d'autre délai inventé.",
        }),
        q({
          question:
            "[Situation complexe] Demande d'accès RGPD. CRM : « trop vieux, pas le feeling ». Le manager veut tout supprimer. Un archivage probatoire peut s'appliquer (référentiel CNIL / L. 1134-5). Vous :",
          options: [
            "A. Tout supprimer dans l'heure : plus de données, plus de problème.",
            "B. Envoyer le CRM brut sans RH, commentaire compris, « transparence ».",
            "C. Ignorer : non-retenu = pas de droits.",
            "D. Process RH / DPO, pas de destruction opportuniste, recadrage du commentaire illicite, distinction vivier / archivage (S51, S56).",
          ],
          correct: 3,
          explanation:
            "Accès + non-discrimination + conservation. Trois régimes, une seule conduite : ne pas bricoler. Le ZIP sauvage et la purge sont deux fautes opposées.",
        }),
        q({
          question:
            "[Situation complexe] Deux finalistes de même niveau. L'homme a demandé 38 k€, la femme 34, fourchette jusqu'à 38. Le manager : « on prend la femme à 34, on économise » et veut enlever la femme de 54 ans d'un pack COMEX « pour éviter les questions ». Vous :",
          options: [
            "A. Suivez : chacun a demandé ce qu'il voulait, et le COMEX n'aime pas l'âge.",
            "B. Alertez RH : écart de salaire genré et écartement pour l'âge (L. 1132-1) ; présentez les personnes sur des critères professionnels ; rémunération alignée sur le poste, pas sur le genre.",
            "C. Recalez la femme pour « éviter le sujet ».",
            "D. Montez la femme à 38 tout seul, sans RH, et cachez-la au COMEX quand même.",
          ],
          correct: 1,
          explanation:
            "S20+S40. Deux discriminations (rémunération / âge). « Elle a demandé moins » ne lave pas. Rétablissement sauvage + invisibilisation : incohérent et toujours illicite sur l'âge.",
        }),
        q({
          question:
            "[Situation complexe] Désistement la veille. Le manager veut un mail de honte, un remboursement des entretiens, garder deux personnes en leur disant qu'elles sont n°1, et laisser l'annonce en ligne « pour la réserve ». Vous :",
          options: [
            "A. Accusé sobre, pas de pénalité inventée, plan B, vérité aux autres (refus ou attente datée), annonce retirée ou marquée pourvue (S26, S25, S67).",
            "B. Mail de honte + remboursement : la leçon doit passer.",
            "C. Double n°1 + annonce : stratégie classique.",
            "D. Commentaire LinkedIn négatif sur le candidat, pour dissuader les autres.",
          ],
          correct: 0,
          explanation:
            "Pas de créance inventée, pas de diffamation, pas de triple mensonge d'existence de l'emploi / de position. Priorité opérationnelle + loyauté.",
        }),
        q({
          question:
            "[Situation complexe] Annonce rédigée par un manager IT pour un poste à Lille : anglais only, titre « Supply Ninja », « jeune dynamique 25-30 », « 15 postes immédiats », « jusqu'à 80 k€ » jamais versés, photo exigée. Vous :",
          options: [
            "A. Publiez : modernité + clic.",
            "B. Publiez en anglais seulement à l'étranger pour contourner L. 5331-4.",
            "C. Refusez la mise en ligne, réécrivez en français, sans âge, sans volume fictif, sans maximum salarial fantaisiste, sans photo, avec un intitulé et une nature d'emploi exacts (L. 5331-2, L. 5331-3, L. 5331-4, L. 1132-1).",
            "D. Gardez « jeune » et 80 k€, mais en petit caractère.",
          ],
          correct: 2,
          explanation:
            "S44+S80+S82+S15+S42. Cinq illicites / tromperies. Le petit caractère et le contournement géographique ne sauvent rien. Transfert : vous n'avez pas besoin du dossier Atelier Nord Lumière pour décider.",
        }),
      ],
    }),
  ],
};
