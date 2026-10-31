import { lesson, h, t, note, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 16,
  title: "Finaliser l'embauche et organiser l'intégration",
  description:
    "Passer de l'acceptation à une prise de poste sûre : dossier, formalités, DPAE, contrat, préboarding, onboarding, période d'essai et REX, en distinguant recruteur, RH et manager.",
  lessons: [
    lesson({
      title: "Du oui à J1 : acteurs, séquence et risques de rupture",
      description:
        "Cartographier qui fait quoi entre recruteur, RH et manager, et sécuriser la période qui sépare l'acceptation de la prise de poste.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez distinguer les responsabilités du recruteur junior, des RH, du manager et, le cas échéant, de la paie, de l'IT et de la médecine du travail.\n\nVous savez dérouler la séquence type entre acceptation de l'offre et premier jour, sans confondre vitesse et oubli de formalités.\n\nVous identifiez les points de rupture fréquents (désistement, délai, matériel, silence) et le rôle de coordination du recrutement."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "L'acceptation d'une offre n'est pas l'embauche. Entre le « oui » du candidat et la prise de poste, plusieurs actes se succèdent : confirmation écrite, constitution du dossier, formalités sociales, contrat, préparation matérielle, information de l'équipe, accueil. Chacun de ces actes a un propriétaire. Lorsque tout le monde croit que « les autres s'en chargent », le futur salarié se retrouve sans contrat, sans badge, ou sans interlocuteur.\n\nLe recruteur junior n'est pas l'employeur. Il ne « signe » pas les obligations de l'entreprise à la place des personnes habilitées. Son rôle, une fois le besoin pourvu, est de coordination et de continuité de la relation : s'assurer que les bons interlocuteurs ont les bonnes informations, que le candidat sait qui le contacte pour quoi, que les dates (préavis, J1, visites) sont partagées, que les statuts ATS sont à jour. Selon l'organisation, le junior peut préparer un dossier, relancer un document manquant, planifier un point de préboarding. Il ne se substitue pas à la paie pour une DPAE, ni au juriste ou au RRH pour un contrat atypique, ni au manager pour l'accueil métier.\n\nLes RH (au sens service administration du personnel / paie / relations sociales) portent généralement : dossier d'embauche, DPAE, contrat dans sa version administrative, affiliations, visites de santé au travail selon le dispositif de l'entreprise, informations obligatoires liées au personnel. Le manager porte le besoin métier, l'organisation de J1, les objectifs des premières semaines, le parrainage, la charge de travail réaliste. L'IT et les services généraux portent comptes, matériel, accès physiques. La médecine du travail n'est pas « le recruteur qui pose des questions de santé » : le suivi de santé au travail a son circuit, distinct des questions d'entretien (L. 1221-6).\n\nCette période est fragile. Le candidat peut encore se désister. Une offre mal qualifiée juridiquement (offre de contrat vs promesse unilatérale d'embauche) peut produire des effets que le junior ne doit pas arbitrer seul : ces notions ne sont pas définies par la loi, elles sont encadrées par la jurisprudence, expliquée notamment par Service-Public (F39588, vérifié le 12/03/2026). Le silence de l'entreprise entre le oui et J1 est l'une des causes fréquentes de doute. Le préboarding n'est pas un luxe relationnel : c'est une continuité de process.\n\nLe cadre légal de l'embauche pèse sur l'employeur. La DPAE est une obligation de l'employeur, avant la prise de fonction ou le début de la période d'essai, au plus tôt dans les 8 jours précédant l'embauche (Service-Public F23107 + Urssaf, vérifié le 13/10/2026). Le junior coordonne ; il n'invente pas d'être « déclarant Urssaf » si ce n'est pas son rôle. Les données du dossier restent soumises au RGPD et au principe de pertinence : on ne constitue pas un dossier médical parallèle dans l'ATS."
        ),
        note(
          "Distinguez toujours : obligation de l'employeur (DPAE, contrat selon les règles applicables, non-discrimination) / circuit RH interne / coordination recruteur / accueil manager. Un junior qui « signe la DPAE tout seul » hors habilitation crée un faux sentiment de conformité."
        ),
        h("Méthode opérationnelle"),
        t(
          "Dès l'acceptation : 1) confirmer par écrit les éléments déjà validés (intitulé, type de contrat, date de prise de poste visée, rémunération selon l'offre). 2) Ouvrir une checklist partagée recruteur / RH / manager. 3) Nommer un contact unique pour le candidat (souvent le recruteur jusqu'à J-7, puis RH ou manager). 4) Collecter les pièces selon la liste RH, pas selon l'inspiration. 5) Planifier DPAE, contrat, matériel, accès. 6) Informer l'équipe selon la règle de confidentialité. 7) Tracer dans l'ATS le statut « embauche en cours » puis « embauché »."
        ),
        code(
          "MATRICE RÔLES — DU OUI À J1\n\nAction                         Recruteur junior     RH / paie           Manager            IT / moyens généraux\nConfirmer l'offre acceptée      Coordonne            Informe si besoin   Valide métier      —\nCollecter pièces dossier        Relance              Protège / valide    —                  —\nDPAE                            Alerte du calendrier Réalise (habilité)  Donne la date J1   —\nContrat                         Transmet éléments    Rédige / fait signer Informe clauses métier —\nMatériel / comptes              Relance              Parfois commande    Exprime le besoin  Réalise\nAccueil J1                      Peut passer          Parfois parcours RH Porte l'accueil    Accès physiques\nPériode d'essai (suivi)         Point d'étape        Cadre RH            Évalue le travail  —\nREX recrutement                 Anime                Contribue           Contribue          —\n\nRègle : si vous n'êtes pas habilité, vous ne « validez » pas. Vous signalez l'absence."
        ),
        h("Exemple professionnel"),
        t(
          "Startup 40 personnes, pas de RRH à temps plein. Le CEO dit au junior : « Tu t'occupes de tout, DPAE comprise, j'ai le compte Urssaf. » Le junior n'a ni formation ni habilitation. Décision : il prépare la checklist, rassemble les pièces, bloque un créneau avec le prestataire paie / expert-comptable qui dépose réellement la DPAE, et refuse de cliquer « envoyer » sur un compte nominatif qui n'est pas le sien sans consigne écrite et formation. Il documente qui a déposé, quand, pour quel J1."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Disparaître après le oui : « maintenant c'est les RH ». Oublier d'informer l'IT. Annoncer une date de J1 au candidat sans que le manager soit disponible. Demander un extrait de casier, une photo d'identité ou un document de santé « au cas où » hors liste RH et hors lien avec l'emploi. Promettre un titre de séjour « on verra bien » (hors mandat, voir module recrutements spécifiques)."
        ),
        h("Situations particulières"),
        t(
          "Cabinet : le junior coordonne l'entrée chez le client ; il ne fait pas la DPAE du client. Intérim : la qualification de l'employeur et les formalités suivent le régime de l'agence ; le junior applique le process agence, il n'invente pas. Prise de poste à distance : le « J1 » matériel et le « J1 » juridique (contrat, DPAE) restent dus ; l'accueil visio ne les remplace pas. Candidat encore en préavis : le calendrier d'embauche part de la date réelle, pas de l'enthousiasme du manager."
        ),
        h("Mise en pratique"),
        t(
          "Un manager vous écrit : « Il a dit oui, il commence lundi, débrouille-toi. » Il est mercredi. Listez ce que vous vérifiez avant de confirmer le lundi au candidat, et ce que vous renvoyez au manager / aux RH."
        ),
        h("Correction détaillée"),
        t(
          "Vous ne confirmez pas lundi sans : date réellement tenable (préavis, disponibilité manager), habilitation à lancer les formalités, pièces minimales du dossier, DPAE possible avant prise de poste, matériel/accès, contrat en cours de préparation. Vous renvoyez au manager la charge d'accueil et la confirmation de la date. Vous renvoyez aux RH (ou prestataire paie) DPAE et contrat. Pourquoi : « débrouille-toi » n'est pas une habilitation. Un J1 improvisé est un risque social et un risque d'expérience candidat."
        ),
      ],
    }),

    lesson({
      title: "Dossier d'embauche et formalités : collecter juste ce qu'il faut",
      description:
        "Constituer un dossier pertinent, tracer les pièces, et éviter les demandes excessives ou illicites.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez ce qu'un dossier d'embauche sert à faire (identifier, payer, déclarer, intégrer) et ce qu'il ne sert pas à faire (enquêter sur la vie privée).\n\nVous savez relancer une pièce manquante sans harceler, et stocker les documents dans l'outil RH prévu, pas dans une messagerie personnelle.\n\nVous appliquez L. 1221-6 : seules les informations en lien direct et nécessaire avec l'emploi sont demandées."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le dossier d'embauche est un ensemble de pièces et d'informations nécessaires à l'administration du personnel et à l'exécution du contrat. Il n'est pas une continuation de l'évaluation. Une fois la personne retenue, vous ne « profitez pas » de l'embauche pour obtenir ce que vous n'aviez pas le droit de demander en entretien (situation de famille, état de santé, originaires, opinions).\n\nL'article L. 1221-6 du Code du travail demeure : les informations demandées, sous quelque forme que ce soit, ne peuvent avoir comme finalité que d'apprécier la capacité à occuper l'emploi ou les aptitudes professionnelles, avec un lien direct et nécessaire. Après embauche, d'autres finalités administratives existent (paie, affiliations, urgence, droits sociaux), toujours dans le cadre du RGPD : minimisation, finalité, durée, accès limité. La CNIL, dans son guide du recrutement et son référentiel de durées RH, distingue le candidat et le salarié. Le candidat retenu : conservation en base active le temps de la procédure jusqu'à la signature, puis réemploi pour la gestion du personnel (référentiel CNIL 2026). Ce n'est pas une autorisation d'alimenter l'ATS avec des pièces médicales.\n\nLa liste des pièces est une politique interne, parfois enrichie par une convention ou un secteur réglementé (habilitation, casier pour certains emplois, titre autorisant le travail). Le junior n'ajoute pas de pièces « par prudence ». Il applique la liste, et alerte si un document semble hors sujet. Un RIB, un justificatif d'identité, les informations nécessaires à la DPAE et à la paie sont du circuit RH. Un questionnaire sur les enfants, une photo « pour voir la tête », un relevé de comptes, un profil de réseaux sociaux imprimé n'en sont pas.\n\nLe moment de la collecte : assez tôt pour que RH puisse déclarer et préparer le contrat, pas si tôt que l'on stocke des données d'une personne qui n'a pas encore accepté. Bonne pratique : après acceptation ferme, via un canal sécurisé prévu (portail RH, lien, e-mail professionnel), avec une date limite réaliste. Relance unique puis relance manager si blocage, pas cinq SMS quotidiens.\n\nLe risque d'un dossier incomplet est opérationnel (pas de paie, pas de DPAE à temps). Le risque d'un dossier excessif est juridique et relationnel. Les deux se gèrent par une liste écrite, pas par la mémoire du junior."
        ),
        note(
          "Obligation : pertinence des informations (L. 1221-6), non-discrimination, RGPD. Recommandation d'autorité : durées et finalités CNIL. Politique interne : liste des pièces, outil de dépôt. Bonne pratique : un canal, une liste, des relances datées. Le junior ne crée pas de dossier parallèle sur son Drive personnel."
        ),
        h("Méthode opérationnelle"),
        t(
          "Utilisez la checklist RH. Expliquez au futur salarié pourquoi chaque pièce est demandée, en une phrase. Offrez une alternative si un justificatif habituel manque (perte de carte, changement de banque) en lien avec RH, sans bloquer J1 pour un détail rattrapable. Classez dès réception. Signalez les pièces sensibles (titre de séjour, casier si réellement requis par l'emploi) au circuit habilité : vous ne les interprétez pas seul."
        ),
        code(
          "CHECKLIST DOSSIER — RELANCES RECRUTEUR (à adapter à la liste RH, ne pas ajouter)\n\nAprès acceptation ferme :\n[ ] Envoi de la liste officielle + lien de dépôt + date limite\n[ ] Identité / état civil nécessaires à la paie et à la DPAE\n[ ] Coordonnées de contact et contact d'urgence selon politique\n[ ] RIB lorsque la paie le demande\n[ ] Diplômes / habilitations seulement s'ils sont exigés pour l'emploi\n[ ] Titre autorisant le travail : collecte et lecture par le circuit RH, pas d'improvisation « droit des étrangers » par le junior\n[ ] Autres pièces sectorielles (casier, habilitation site) uniquement si l'emploi l'exige\n[ ] Interdit : dossier médical ATS, questions famille, copies de réseaux, photo « pour le fun »\n[ ] Stockage : outil RH / coffre, pas la messagerie personnelle\n[ ] Relance J-n selon calendrier interne, copie RH si silence"
        ),
        h("Exemple professionnel"),
        t(
          "ETI agroalimentaire. Un manager demande au junior « récupère aussi son carnet de vaccination et si elle est enceinte, on a des produits chimiques ». Le junior n'ajoute pas ces demandes au dossier d'embauche. L'aptitude et le suivi de santé relèvent de la santé au travail, pas d'un e-mail de recrutement. Il oriente le manager vers RH et le service de prévention. Il collecte uniquement la liste RH."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Demander « tous les contrats précédents ». Stocker les pièces dans WhatsApp. Relancer dix fois pour un RIB alors que J1 est dans trois semaines. Commenter un nom de famille ou une nationalité sur le justificatif. Oublier de clôturer l'accès ATS « candidat » une fois le dossier passé en salarié."
        ),
        h("Situations particulières"),
        t(
          "Mineur, alternant, stagiaire : listes et conventions spécifiques ; le junior suit le modèle RH, il n'invente pas un CDI. Recrutement urgent : on priorise les pièces bloquantes pour DPAE et paie ; le reste a une date de rattrapage écrite. Candidat sans RIB immédiat : solution paie (attente, autre modalité interne), pas d'annulation d'embauche improvisée par le junior."
        ),
        h("Mise en pratique"),
        t(
          "Parmi ces demandes, lesquelles passez-vous, lesquelles refusez-vous d'ajouter, et vers qui renvoyez-vous : 1) copie de pièce d'identité ; 2) attestation de domicile des parents ; 3) RIB ; 4) questionnaire « avez-vous des enfants ? » ; 5) diplôme exigé par la fiche de poste ; 6) capture d'écran LinkedIn."
        ),
        h("Correction détaillée"),
        t(
          "1 et 3 et 5 : circuit RH, si dans la liste. 2 : non, pas de lien nécessaire. 4 : non, critère et information hors L. 1221-6 / non-discrimination. 6 : non, ce n'est pas une pièce d'embauche. Pourquoi : le dossier sert à embaucher et à administrer, pas à prolonger le sourcing."
        ),
      ],
    }),

    lesson({
      title: "DPAE : obligation de l'employeur, calendrier et rôle du junior",
      description:
        "Comprendre la déclaration préalable à l'embauche sans se prendre pour l'Urssaf, et coordonner le calendrier réel.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez que la DPAE est une obligation de l'employeur, à effectuer avant la prise de fonction ou le début de la période d'essai, au plus tôt dans les 8 jours précédant l'embauche.\n\nVous savez quel est votre rôle (alerter, transmettre la date, vérifier que l'habilité a agi) et ce que vous ne faites pas (déposer sans habilitation, antedater, « signer pour dépanner »).\n\nVous savez quoi faire si J1 est trop proche pour le calendrier interne."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "La DPAE (déclaration préalable à l'embauche) est le formalisme social qui signale l'embauche aux organismes compétents via le circuit Urssaf. Selon Service-Public Entreprendre (fiche F23107) et l'Urssaf, elle est obligatoire avant la prise de fonction ou le début de la période d'essai, et elle peut être effectuée au plus tôt dans les 8 jours précédant l'embauche. Date de vérification des sources du cours : 13/10/2026. Relisez le texte en vigueur le jour J sur Service-Public / Urssaf avant un cas réel.\n\nCette obligation pèse sur l'employeur, pas sur « le recrutement » en tant que métier. Dans une organisation, la personne habilitée est généralement la paie, le RRH, l'expert-comptable, ou un dirigeant de TPE. Le recruteur junior coordonne le calendrier : il fait connaître la date de prise de poste dès qu'elle est ferme, il alerte si cette date est trop proche, il vérifie que la DPAE a bien été faite avant J1. Il ne considère pas un e-mail interne « tu t'en occupes » comme une habilitation juridique personnelle.\n\n« Au plus tôt 8 jours avant » signifie que l'on ne déclare pas des semaines à l'avance pour « se débarrasser » d'un dossier encore incertain. « Avant la prise de fonction ou le début de la période d'essai » signifie que le salarié ne doit pas commencer, même « pour voir », avant déclaration. Faire commencer quelqu'un « officieusement » en attendant la DPAE n'est pas une bonne pratique : c'est un risque pour l'employeur.\n\nLe junior n'invente pas le contenu de la DPAE (heures, contrat, lieu) : il transmet les éléments validés (identité selon dossier, date, nature du contrat, lieu de travail). Une erreur de date ou de contrat dans la déclaration crée des corrections ultérieures. Une DPAE n'équivaut pas au contrat de travail : les deux se coordonnent, ils ne se remplacent pas.\n\nSi le manager veut un démarrage le lendemain, le recruteur dit le calendrier réel : pièces minimales, disponibilité de la personne habilitée, délai « au plus tôt 8 jours avant » qui n'interdit pas une DPAE plus proche de J1, mais n'excuse pas l'absence de DPAE. L'urgence métier ne supprime pas l'obligation. Le junior alerte par écrit, propose la première date réellement tenable, et n'antidate pas."
        ),
        note(
          "Source : Service-Public F23107 + Urssaf — DPAE obligatoire avant prise de fonction ou début de période d'essai, au plus tôt dans les 8 jours précédants. Obligation employeur. Le junior coordonne avec les RH. Il ne « signe » pas la DPAE tout seul si ce n'est pas son rôle."
        ),
        h("Méthode opérationnelle"),
        t(
          "Dès date de J1 ferme : notification RH / paie avec nom, date, type de contrat, lieu. Confirmation de la personne qui dépose. Point de contrôle la veille de J1 : DPAE faite, contrat en cours ou signé selon process, accueil prêt. Si absence de DPAE : ne pas faire commencer ; escalade responsable."
        ),
        code(
          "CHECKLIST DPAE — CÔTÉ RECRUTEUR JUNIOR\n\n[ ] Date de prise de poste écrite, validée manager + candidat\n[ ] Type de contrat et lieu transmis (pas d'à-peu-près)\n[ ] Identité / pièces minimales reçues par RH\n[ ] Personne habilitée nommée (RH, paie, expert-comptable, dirigeant)\n[ ] Dépôt prévu dans la fenêtre : avant J1 / essai, au plus tôt 8 jours avant\n[ ] Preuve de dépôt ou confirmation RH consignée (pas dans un chat perso perdu)\n[ ] Interdit : faire commencer « au noir » ; déposer sans habilitation ; antedater ; inventer un contrat\n\nMAIL TYPE AU SERVICE HABILITÉ\nObjet : DPAE à prévoir — [Nom] — J1 [date]\nBonjour,\nEmbauche de [Prénom Nom], poste [intitulé], contrat [CDI/CDD/…], lieu [site], prise de poste [date].\nMerci de confirmer le dépôt de la DPAE avant cette date, conformément au calendrier Urssaf / F23107.\nPièces déjà transmises : [liste]. Manquants : [liste].\nRecrutement — [nom]"
        ),
        h("Exemple professionnel"),
        t(
          "PME du transport. Un exploitant fait monter un nouveau salarié sur un quai « dès ce soir, on est débordés ». Le dossier est incomplet, la paie est absente. Le junior, alerté, écrit au dirigeant : pas de prise de poste avant DPAE. Il propose le lendemain matin si la personne habilitée dépose dans la soirée, ou un report. Il ne « couvre » pas une prise de poste non déclarée pour faire plaisir à l'exploitant."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Croire que le contrat signé remplace la DPAE. Croire que la DPAE remplace le contrat. Laisser J1 un lundi férié de paie sans anticiper. Utiliser un ancien compte Urssaf d'un collègue parti. Annoncer au candidat « c'est bon tu es déclaré » sans confirmation."
        ),
        h("Situations particulières"),
        t(
          "Multi-embauches le même jour : chaque DPAE est individuelle ; le junior fournit un tableau, pas un message flou « les trois de l'équipe nuit ». Entrée après mobilité interne : ce n'est pas toujours une embauche externe ; RH qualifie. Intérim : l'employeur de l'intérimaire est l'agence, dans le régime qui lui est applicable ; le junior agence suit le process agence, le junior entreprise cliente ne « fait pas une DPAE intérim » à la place de l'agence."
        ),
        h("Mise en pratique"),
        t(
          "J1 est dans 3 jours. RH vous dit : « Dépose la DPAE, tu as les identifiants dans le tiroir. » Que répondez-vous, et quelle alternative proposez-vous ?"
        ),
        h("Correction détaillée"),
        t(
          "Vous ne déposez pas si ce n'est pas votre rôle habilité. Vous proposez : 1) RH ou dirigeant dépose ; 2) prestataire paie dépose ; 3) report de J1 si personne n'est disponible avant la prise de poste. Vous tracez l'alerte. Pourquoi : la DPAE est une obligation d'employeur, pas un geste débrouillard. Un identifiant dans un tiroir n'est pas une délégation claire."
        ),
      ],
    }),

    lesson({
      title: "Contrat de travail : préparer, relayer, ne pas improviser",
      description:
        "Fournir les éléments exacts du contrat, faire circuler la version valide, et éviter les fausses promesses sur les clauses.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez quels éléments issus du recrutement doivent se retrouver dans le contrat, et qui rédige.\n\nVous savez accompagner la signature sans jouer au juriste : avenants, période d'essai, clause de mobilité, temps de travail.\n\nVous savez quoi faire si le contrat s'écarte de l'offre acceptée."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le contrat de travail formalise la relation. Sa rédaction est un acte RH / juridique, pas un exercice de style du recruteur. Le junior fournit la matière : intitulé, coefficient ou statut s'il a été validé, rémunération, type de contrat, date de début, lieu, temps de travail, éléments variables déjà promis par écrit dans l'offre. Il ne « récrit » pas une clause parce que le candidat a peur, et il n'ajoute pas un avantage pour conclure.\n\nL'offre acceptée et le contrat doivent être cohérents. Un écart (salaire, statut, lieu, dates) n'est pas un détail : c'est un nouveau sujet de décision, à revalider avec le manager et RH, puis à réexpliquer au candidat. Envoyer un contrat moins-disant que l'offre, en demandant une signature rapide, est une erreur de confiance et, potentiellement, un litige. À l'inverse, un contrat plus généreux que l'offre sans mandat crée un engagement non budgété.\n\nLa qualification offre de contrat / promesse unilatérale d'embauche n'est pas tranchée par le junior. Service-Public (F39588, 12/03/2026) rappelle que ces notions ne sont pas définies par la loi mais encadrées par la jurisprudence (notamment Cass. soc. 21 septembre 2017, n° 16-20.103 et 16-20.104, telles que citées par cette fiche). Une promesse unilatérale n'est pas obligatoire pour embaucher. Si un écrit d'engagement a déjà été envoyé et que l'une des parties se rétracte, RH intervient. Le junior conserve les versions et les dates.\n\nLa période d'essai, lorsqu'elle est prévue, a une durée qui dépend du contrat, du statut et des textes applicables (loi, convention). Le junior ne « met trois mois à tout le monde » par habitude. Il relaye la durée inscrite par RH. Il explique au candidat, s'il est interrogé, que l'essai sert à évaluer l'adéquation, des deux côtés, dans le cadre fixé, et que le suivi sera porté par le manager, avec un cadre RH.\n\nLe moment : le contrat doit pouvoir être lu avant J1. Une signature le matin même, sous pression, est un mauvais signal. La bonne pratique est d'envoyer le projet, de laisser un temps de lecture, de recenser les questions, de les transmettre à RH, de faire signer selon le process (électronique ou papier). Le junior n'interdit pas au candidat de relire, et il ne lui dit pas « c'est du standard, signe ». "
        ),
        h("Méthode opérationnelle"),
        t(
          "1) Fiche de transmission recrutement → RH (données de l'offre). 2) Relecture de cohérence offre / projet de contrat. 3) Envoi au candidat par le canal prévu. 4) Centralisation des questions. 5) Signature. 6) Archivage RH, pas dans l'ATS public. 7) Information manager : date de signature, date J1, points d'attention (télétravail, mobilité) sans copier le contrat entier dans un chat."
        ),
        code(
          "FICHE DE TRANSMISSION — RECRUTEMENT VERS RH (contrat)\n\nCandidat : \nPoste / service / manager : \nType de contrat : CDI / CDD (motif à faire qualifier par RH, pas par le junior) / autre\nDate de début visée : \nTemps de travail : \nLieu / mobilité déjà annoncée : \nRémunération fixe : \nVariable / avantages déjà écrits dans l'offre : \nPériode d'essai : à inscrire par RH selon textes applicables\nÉléments NON promis (à ne pas inventer) : \nPièces dossier : complet / manquant [liste]\nDPAE : demandée le [date] à [habilité]\nAlertes : écart offre / souhait manager, préavis, visa / titre (alerter RH, ne pas qualifier)"
        ),
        h("Exemple professionnel"),
        t(
          "Cabinet, mission cadre. Le client envoie un contrat avec un lieu de travail différent de l'offre (site B au lieu du siège). Le consultant junior le voit. Il ne le fait pas signer « pour aller vite ». Il appelle le client, confronte l'écart, obtient soit un retour au lieu promis, soit un avenant d'offre accepté par le candidat. Il documente."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Promettre une clause de télétravail non écrite. Expliquer qu'une période d'essai « ça ne se rompt jamais ». Laisser le candidat signer une version PDF annotée à la main non relue par RH. Copier un ancien contrat et changer juste le nom."
        ),
        h("Situations particulières"),
        t(
          "CDD : le motif est un acte juridique ; le junior ne choisit pas un motif « parce que ça passe ». Alternance / stage : convention, pas un CDI bricolé. Langue du contrat : si le travail s'effectue en France, soyez attentif à la compréhension ; les règles d'offre en français (L. 5331-4) ne se substituent pas au conseil RH sur la langue du contrat. Candidat à l'étranger : alerte RH, pas d'improvisation sur le droit du travail applicable."
        ),
        h("Mise en pratique"),
        t(
          "L'offre acceptée indique 38 k€, le projet de contrat 36 k€ « selon grilles ». Le manager dit : « Il signera, il est content d'entrer. » Que faites-vous ?"
        ),
        h("Correction détaillée"),
        t(
          "Vous bloquez l'envoi. Vous signalez l'écart à RH et au manager. Soit le contrat revient à 38 k€, soit une nouvelle décision est expliquée au candidat avant signature, avec la possibilité qu'il refuse. Pourquoi : faire signer un contrat moins-disant en silence n'est pas une technique de closing, c'est une rupture de parole de l'employeur."
        ),
      ],
    }),

    lesson({
      title: "Préboarding : maintenir le lien entre signature et premier jour",
      description:
        "Organiser les contacts utiles avant J1 pour réduire le désistement et préparer un accueil réel.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez construire un mini-parcours de préboarding proportionné à l'entreprise, sans harceler le futur salarié encore en poste ailleurs.\n\nVous savez qui envoie quoi : recruteur, RH, manager, IT.\n\nVous savez détecter un signal de désistement et réagir sans pression déloyale."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le préboarding est l'ensemble des contacts et préparatifs entre l'acceptation (ou la signature) et J1. Ce n'est pas une obligation légale générale. C'est une bonne pratique de sécurisation : la personne n'est pas encore dans l'équipe, elle compare encore, elle subit parfois une contre-offre, elle doute si l'entreprise se tait. Le recruteur est souvent le seul visage connu : s'il disparaît, le vide est total.\n\nLe préboarding n'est pas une intégration anticipée illégale (« viens travailler un peu avant d'être déclaré »). Aucune tâche productive avant DPAE et cadre contractuel. Le préboarding, c'est de l'information, de l'organisation, de la relation. Exemples : date et lieu de convocation, documents restants, présentation du manager par visio courte, envoi d'un ordre du jour de J1, recueil des besoins matériels, information sur le dress code réellement attendu, pas un roman sur « nos valeurs ».\n\nLe dosage dépend du délai. Un J1 à 48 heures : checklist opérationnelle seulement. Un préavis de trois mois : un rythme (par exemple un point à J+7 après signature, un point à J-15, un point à J-3), pas un message quotidien. Le futur salarié est souvent encore chez un employeur : des appels sur son lieu de travail actuel sont une maladresse.\n\nLes acteurs : le recruteur coordonne et reste joignable ; RH envoie ce qui est administratif ; le manager prend un contact métier court ; l'IT prépare sans exiger du salarié qu'il configure un SI la veille à 23 h. Le junior n'envahit pas la messagerie personnelle de documents confidentiels non chiffrés.\n\nUn signal de désistement (réponses vagues, report de signature, questions soudaines de rémunération déjà close, silence) se traite par un appel de clarification, pas par la peur. Si le désistement se confirme, vous activez le plan B et le process du module refus / désistement. Vous n'inventez pas de pénalité."
        ),
        h("Méthode opérationnelle"),
        t(
          "Créez un calendrier de préboarding dans l'ATS ou un tableau partagé. Chaque contact a un objectif unique. Mesurez les non-réponses. Préparez J1 avec le manager au moins une semaine avant (ou dès que possible si urgence)."
        ),
        code(
          "CHECKLIST PRÉBOARDING (délai > 2 semaines) — à adapter\n\nJ0 acceptation\n[ ] Mail de bienvenue recruteur : prochaines étapes, qui contacte pour quoi, dates\n[ ] Transmission RH (dossier, DPAE, contrat)\n[ ] Info manager : date, points d'accueil à préparer\n\nJ+3 / J+7\n[ ] Relance pièces manquantes si besoin\n[ ] Contact court manager (15 min) : contexte équipe, pas nouvel entretien d'évaluation\n[ ] Recueil taille d'équipement / besoin IT\n\nJ-15\n[ ] Confirmation lieu, horaire, interlocuteur J1, documents à apporter\n[ ] Vérifier DPAE planifiée, contrat lu\n\nJ-3\n[ ] Mail pratique J1\n[ ] Contrôle matériel / comptes « prêts ou date »\n[ ] Le junior reste joignable ; pas de nouvelle négociation salariale improvisée\n\nINTERDIT\n- Travail productif avant cadre d'embauche\n- Messages quotidiens « pour créer du lien »\n- Demander de démissionner avant signature du contrat si ce n'est pas le process validé"
        ),
        h("Exemple professionnel"),
        t(
          "Services, ETI. Un futur ingénieur a trois mois de préavis. Le junior envoie un mail toutes les 48 h « notre culture ». Le candidat, encore en poste, se plaint à un ami interne. Le responsable recrutement recadre : un point mensuel, un contact manager à mi-préavis, un pack J-7. Le désistement évité n'est pas le fruit du volume de mails, c'est le fruit d'un rythme respectueux."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Ajouter le futur salarié à toutes les listes de diffusion internes trop tôt. L'inviter à un pot d'équipe avant annonce officielle interne. Oublier de le prévenir d'un changement de date de J1. Le « briefer » comme s'il devait déjà performer."
        ),
        h("Situations particulières"),
        t(
          "Recrutement confidentiel : pas d'annonce interne, pas de photo sur l'intranet, canal unique. Volume : préboarding automatisé correct (dates, lieu, pièces) + contact humain pour les statuts sensibles. Distant : envoi d'adresse de visio test 48 h avant, pas le matin même."
        ),
        h("Mise en pratique"),
        t(
          "Rédigez le mail J0 (acceptation) de 12 à 18 lignes : étapes, acteurs, ce que vous attendez du candidat, ce qu'il peut ignorer jusqu'à nouvel avis."
        ),
        h("Correction détaillée"),
        t(
          "Le mail J0 remercie, confirme les éléments déjà clos (poste, date visée, type de contrat), liste les prochaines étapes (pièces, contrat, DPAE côté employeur, contact manager), donne un seul interlocuteur pour les questions, et n'ajoute ni nouveau salaire, ni nouveau lieu. Pourquoi : le préboarding commence par réduire l'incertitude, pas par ouvrir de nouveaux sujets."
        ),
      ],
    }),

    lesson({
      title: "Onboarding : matériel, accès, formation initiale et accueil",
      description:
        "Préparer un premier jour et une première semaine utilisables, en laissant au manager ce qui est métier.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez construire une checklist d'onboarding opérationnel (matériel, accès, sécurité, présentation, formation initiale) et l'attribuer aux bons acteurs.\n\nVous savez ce que le recruteur contrôle la veille et le matin, sans remplacer le manager.\n\nVous savez traiter un incident de J1 (pas de badge, pas de manager, pas de poste de travail) sans rejeter la faute sur le nouvel arrivant."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "L'onboarding est l'intégration dans le travail réel : pouvoir entrer, se connecter, comprendre les règles utiles, rencontrer l'équipe, commencer à apprendre le poste. Ce n'est pas un « kit goodies ». Ce n'est pas non plus, pour le junior, l'animation de toute la vie de l'équipe. Le manager reste responsable de l'intégration métier. Les RH portent souvent le parcours administratif et social. L'IT et les moyens généraux portent l'outillage. Le recruteur s'assure que cette chaîne a été déclenchée et que le nouvel arrivant n'est pas seul devant une porte fermée.\n\nLe matériel (ordinateur, téléphone, EPI, badge, tenture de poste) se commande en amont. Un J1 sans outil n'est pas « formateur » : c'est une perte de temps et un signal de désorganisation. Les accès (bâtiment, SI, logiciels métier, droits a minima) se préparent avec un principe de minimisation : on n'ouvre pas tous les droits « on verra plus tard », surtout sur des données personnelles de tiers.\n\nLa formation initiale recouvre : consignes de sécurité, outils de base, process qualité, présentation des règles internes utiles au poste. Elle n'est pas un second entretien. Elle n'est pas le lieu pour poser des questions de santé, de parentalité ou d'origine. L'information sur les méthodes d'évaluation professionnelle, si de nouvelles méthodes sont utilisées après embauche, reste encadrée par la pertinence (L. 1221-8 et L. 1221-9 s'agissant des méthodes d'aide au recrutement et d'évaluation).\n\nLe premier jour a une heure de début, un interlocuteur nommé, un plan B si le manager est absent (délégué, RH, recruteur pour l'accueil puis activité préparée). Laisser un nouvel embauché attendre quarante minutes à l'accueil est un échec collectif, pas une « mise à l'épreuve ».\n\nLe recruteur junior n'évalue pas la performance à J1. Il peut faire un point de 10 minutes en fin de journée : est-ce que les accès fonctionnent, est-ce que le planning de la semaine est clair, est-ce qu'une question administrative bloque. Puis il se retire."
        ),
        h("Méthode opérationnelle"),
        t(
          "Réunion courte J-7 recruteur / manager / IT / RH. Checklist unique. Contrôle J-1. Accueil J1 : qui ouvre la porte. Point J+1 ou J+2. Clôture de la checklist, bascule du dossier vers le suivi d'essai."
        ),
        code(
          "CHECKLIST ONBOARDING J-7 → J+7\n\nRH\n[ ] DPAE faite avant prise de poste / essai\n[ ] Contrat signé ou process de signature tenu\n[ ] Dossier paie suffisant\n[ ] Convocation / info santé au travail selon dispositif interne (pas le recruteur qui « ausculte »)\n\nIT / moyens généraux\n[ ] Compte nominatif prêt, droits minimaux\n[ ] Matériel configuré, EPI si besoin\n[ ] Badge / clés / parking\n\nManager\n[ ] Planning semaine 1 (réunions, binôme, premières tâches réalistes)\n[ ] Annonce interne autorisée\n[ ] Parrain / binôme nommé\n[ ] Objectifs d'essai en brouillon\n\nRecruteur junior\n[ ] Vérifier que les cases ci-dessus ont un propriétaire et une date\n[ ] Mail J-1 pratique (heure, adresse, nom de l'accueil, documents)\n[ ] Présence ou relais le matin\n[ ] Point flash J+1 : incidents d'accès / de clarté\n[ ] Ne pas siéger toute la semaine dans l'open space « pour aider »\n\nJ1 TYPE (exemple services, à adapter)\n09:00 Accueil nommé\n09:15 Administratif court RH si prévu\n09:45 Poste de travail / accès\n10:30 Équipe\n11:30 Sécurité / règles utiles\n14:00 Première activité métier avec binôme\n16:30 Point manager 15 min"
        ),
        h("Exemple professionnel"),
        t(
          "Industrie, équipe 3×8. Un embauché arrive à 5 h 45, le recruteur avait prévu un accueil « horaire de bureau ». Personne. Décision REX : pour un poste d'équipe, J1 se calque sur l'horaire réel, avec un nom d'agent d'accueil de nuit / chef d'équipe, EPI prêts, consignes sécurité avant toute tâche. Le junior se déplace ou délègue explicitement, il n'improvise pas un accueil de 9 h."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Confondre onboarding et visite touristique. Oublier les EPI. Créer des accès trop larges. Laisser le nouvel arrivant « lire les procédures » huit heures. Photographier l'équipe sans recueil des accords internes. Demander un feedback public dès J1 pour LinkedIn."
        ),
        h("Situations particulières"),
        t(
          "100 % distant : envoi du matériel avec délai, session de test des outils la veille, parrain identifié, créneaux plus courts et plus fréquents. Multisite : J1 sur le site réel de travail, pas seulement au siège RH. Handicap : aménagements déjà anticipés avec RH et le manager, pas « on verra le jour J ». Volume : session d'accueil collective + check individuel des accès."
        ),
        h("Mise en pratique"),
        t(
          "Le manager est malade J1. Le matériel n'est pas arrivé. Rédigez le plan B de la matinée (acteurs, activités, ce que vous dites au nouvel embauché)."
        ),
        h("Correction détaillée"),
        t(
          "Vous n'annulez pas J1 à 8 h 30 sans proposition. Un relais nommé (adjoint, RH, vous-même pour l'accueil) prend le matin : administratif déjà prêt, présentation règles utiles, lecture documentée, rencontre d'une personne disponible, replanification du matériel avec date. Vous dites la vérité : incident logistique, pas « c'est normal au début ». Pourquoi : l'onboarding est un service dû, pas une faveur du manager présent."
        ),
      ],
    }),

    lesson({
      title: "Période d'essai, suivi et REX de recrutement",
      description:
        "Suivre l'essai sans empiéter sur l'évaluation managériale, et capitaliser le recrutement pour le prochain.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez quel est le rôle du recruteur pendant la période d'essai : points d'étape, détection de signaux, pas décision de rupture isolée.\n\nVous savez organiser un REX de recrutement (besoin, sourcing, critères, délais, expérience candidat, intégration).\n\nVous savez clôturer le dossier recrutement et laisser le dossier salarié aux RH."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "La période d'essai, lorsqu'elle est contractuellement prévue, permet à l'employeur d'évaluer les compétences du salarié dans son travail, et au salarié d'évaluer si le poste lui convient, dans le cadre des textes applicables. Sa durée, son renouvellement éventuel, les formes de rupture, ne sont pas des « usages du junior ». Ils relèvent du contrat, de la loi et de la convention. Le recruteur ne rompt pas un essai tout seul « parce que le manager n'est pas convaincu » : il alerte RH, s'assure que le manager a des faits professionnels, et que le calendrier (fin d'essai) n'est pas découvert la veille.\n\nLe suivi d'essai n'est pas un second process de recrutement clandestin. On n'invite pas le salarié à de nouveaux « entretiens de sélection » pour refaire le matching. On s'assure que l'intégration prévue a eu lieu, que les objectifs de découverte du poste ont été dits, que les difficultés d'accès ou de formation ne sont pas prises pour de l'incompétence. Beaucoup d'essais « ratés » sont des onboardings ratés.\n\nLe recruteur peut animer un point à 2-3 semaines et à mi-essai, en trilateral court ou en bilatéral puis restitution, selon la culture. Il écoute le salarié (clarté du poste vs promesse) et le manager (faits de travail). Écart de promesse (télétravail, contenu, équipe) : c'est un sujet de parole employeur, pas seulement un « mauvais recrutement ». Écart de compétences : c'est un sujet d'évaluation managériale, documenté, sans critère protégé (L. 1132-1).\n\nLe REX (retour d'expérience) clôt le cycle. Il n'attend pas six mois. Bonne pratique : 30 à 45 minutes, une fois J1 passé et, idéalement, après un premier point d'essai. Participants : recruteur, manager, parfois RH. Objet : qualité du cadrage, de l'annonce, du vivier, des critères, des délais, de l'offre, de l'intégration. Livrable : 5 décisions concrètes pour le prochain poste, pas un procès. On ne cite pas de statistiques de marché inventées pour se justifier. On parle de ce process-ci.\n\nLa clôture ATS : statut embauché, archivage des candidats non retenus selon les durées (obligation d'archivage intermédiaire 5 ans à compter de la date à laquelle le poste a été pourvu, à des fins probatoires, en lien avec L. 1134-5 / référentiel CNIL ; vivier jusqu'à 2 ans à compter du dernier contact sauf opposition — recommandation CNIL, pas une durée unique imposée par le RGPD lui-même). Le junior applique la politique, il ne laisse pas les CV en base active « au cas où » indéfiniment."
        ),
        note(
          "Le junior ne décide pas une rupture de période d'essai hors circuit RH. Il ne « motive » pas une rupture par un critère protégé. Il ne prolonge pas un essai par e-mail personnel."
        ),
        h("Méthode opérationnelle"),
        t(
          "Poser les dates d'essai dans le calendrier à J1. Planifier les points. Si signal faible : faits écrits du manager, entretien de recadrage métier par le manager, RH en copie du cadre. REX avec support unique. Purge / archivage selon politique."
        ),
        code(
          "TRAME POINT D'ESSAI (15-20 min) — recruteur facilitateur\n\n1. Conditions d'intégration (accès, binôme, formation) : ok / écart\n2. Poste réel vs poste annoncé : ok / écart\n3. Faits de travail (exemples du manager) : \n4. Questions du salarié : \n5. Objectifs jusqu'au prochain point : \n6. Alerte RH ? (écart grave, fin d'essai proche, promesse non tenue)\n\nTRAME REX RECRUTEMENT (30-45 min)\n\nBesoin initial vs besoin réel :\nDélai (ouverture → acceptation) : faits, pas « norme magique »\nSources qui ont produit la shortlist :\nCritères qui ont réellement départagé :\nQualité de l'offre (acceptation / friction) :\nIntégration J1 / J+15 :\n3 choses à répéter / 3 choses à changer :\nDécisions datées (fiche de poste, canal, grille, préboarding) :"
        ),
        h("Exemple professionnel"),
        t(
          "PME. À 4 semaines, le manager dit : « Elle n'est pas assez souriante, on arrête l'essai. » Le junior demande des faits de travail. Il n'y en a pas. L'accueil a été inexistant, pas de binôme. Décision : RH + manager, plan d'intégration réel, pas une rupture fondée sur un trait de personnalité. Si plus tard des faits professionnels existent, ils seront documentés. Le sourire n'est pas un critère magique, et l'apparence / le sexe ne doivent pas s'y glisser (L. 1132-1)."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Oublier la date de fin d'essai. Prendre parti public pour le salarié contre le manager, ou l'inverse, sans faits. Transformer le REX en règlement de comptes. Laisser le statut ATS « offre » six mois après J1. Recueillir un avis médical via le manager."
        ),
        h("Situations particulières"),
        t(
          "CDD court : l'essai est souvent bref ; le calendrier de suivi se compacte, il ne disparaît pas. Cadre dirigeant : le REX implique parfois la direction ; le junior prépare le dossier, il n'anime pas seul un conflit politique. Prestataire / cabinet : le REX se fait avec le client sur la mission, sans livrer de données inutiles sur les autres candidats."
        ),
        h("Mise en pratique"),
        t(
          "Le manager vous écrit à J-4 de la fin d'essai : « On arrête. » Aucun point n'a eu lieu. Listez votre séquence des 24 heures (questions, interlocuteurs, ce que vous ne faites pas)."
        ),
        h("Correction détaillée"),
        t(
          "Vous n'envoyez pas de mail de rupture. Vous collectez des faits professionnels, vous alertez RH immédiatement (calendrier), vous organisez un échange manager / RH, vous vérifiez le contrat (durée, formes). Vous pouvez écouter le salarié si RH le demande, sans promettre. Pourquoi : une rupture d'essai est un acte employeur cadré, pas un SMS de recrutement. Quatre jours, c'est tard : d'où l'intérêt des points amont."
        ),
      ],
    }),

    quizLesson({
      title: "Quiz — Embauche et intégration",
      description: "Huit questions : rôles, DPAE, dossier, contrat, préboarding, essai.",
      passing_score: 70,
      minutes: 10,
      questions: [
        q({
          question: "Concernant la DPAE, quelle affirmation est exacte ?",
          options: [
            "A. C'est une obligation de l'employeur, à effectuer avant la prise de fonction ou le début de la période d'essai, au plus tôt dans les 8 jours précédant l'embauche.",
            "B. C'est une obligation personnelle du recruteur junior, qui doit la signer dans les 48 heures après l'entretien final.",
            "C. Elle remplace le contrat de travail si elle est déposée sur le site Urssaf.",
            "D. Elle peut être faite jusqu'à 2 ans après J1, conformément à la recommandation CNIL sur le vivier.",
          ],
          correct: 0,
          explanation:
            "F23107 / Urssaf : avant prise de fonction ou essai, au plus tôt 8 jours avant. Obligation employeur. Elle ne remplace pas le contrat. Les 2 ans CNIL concernent le vivier de candidats, pas la DPAE. Le junior n'est pas le déclarant par défaut.",
        }),
        q({
          question: "Un collègue vous donne les identifiants Urssaf « pour dépanner » la DPAE. Que faites-vous ?",
          options: [
            "A. Vous refusez de déposer hors habilitation, vous faites réaliser la DPAE par la personne habilitée (RH, paie, dirigeant, prestataire) avant J1.",
            "B. Vous déposez, l'essentiel est que ce soit fait.",
            "C. Vous demandez au candidat de se déclarer lui-même.",
            "D. Vous attendez la fin de la période d'essai pour déclarer, c'est plus prudent.",
          ],
          correct: 0,
          explanation:
            "La DPAE est due avant la prise de poste / l'essai. Le junior ne s'improvise pas déclarant. Le candidat ne se déclare pas à la place de l'employeur. Attendre la fin de l'essai est contraire au calendrier.",
        }),
        q({
          question: "Quelle demande n'a pas sa place dans le dossier d'embauche constitué par le recruteur ?",
          options: [
            "A. Un questionnaire sur le nombre d'enfants et un état de santé détaillé, « pour la mutuelle et l'équipe ».",
            "B. Les pièces d'identité nécessaires à la paie et à la DPAE, selon la liste RH.",
            "C. Le RIB lorsque la paie le demande.",
            "D. Un diplôme expressément exigé par l'emploi.",
          ],
          correct: 0,
          explanation:
            "L. 1221-6 et non-discrimination : pas d'enquête familiale ou de santé via le recrutement. La santé au travail et la mutuelle ont leurs circuits. Identité, RIB, diplôme exigé peuvent relever de la liste RH.",
        }),
        q({
          question: "Le projet de contrat indique un salaire inférieur à l'offre acceptée. Conduite recommandée ?",
          options: [
            "A. Bloquer l'envoi, signaler l'écart à RH et au manager, ne pas faire signer en silence.",
            "B. Faire signer vite, le candidat est « content d'entrer ».",
            "C. Augmenter vous-même le variable pour compenser, sans mandat.",
            "D. Dire que l'offre orale n'a jamais existé.",
          ],
          correct: 0,
          explanation:
            "L'écart offre / contrat est une nouvelle décision, pas un détail d'impression. Compenser sans mandat ou nier l'offre casse la parole employeur et crée un litige.",
        }),
        q({
          question: "Quelle est la répartition la plus juste des rôles à l'onboarding ?",
          options: [
            "A. Le manager porte l'accueil métier ; RH l'administratif ; l'IT les accès ; le recruteur coordonne et contrôle que la chaîne est déclenchée.",
            "B. Le recruteur junior évalue la performance dès J1 et décide de l'essai.",
            "C. L'IT décide du salaire et de la DPAE.",
            "D. Le manager dépose la DPAE, le recruteur rédige seul le contrat.",
          ],
          correct: 0,
          explanation:
            "Coordination ≠ substitution. L'évaluation de l'essai est managériale dans un cadre RH. DPAE et contrat ne sont pas des actes IT ou junior isolés.",
        }),
        q({
          question: "Le préboarding autorise-t-il à faire travailler le futur salarié avant J1 « pour avancer » ?",
          options: [
            "A. Non : pas de travail productif avant le cadre d'embauche (dont DPAE avant prise de poste / essai). Le préboarding est information et organisation.",
            "B. Oui, si le candidat est d'accord et non payé.",
            "C. Oui, cela remplace la période d'essai.",
            "D. Oui, c'est une obligation légale de formation initiale.",
          ],
          correct: 0,
          explanation:
            "Le préboarding n'est pas une obligation légale générale, et ce n'est pas du travail dissimulé « consentie ». La DPAE est due avant la prise de fonction / l'essai. L'essai ne se remplace pas par du bénévolat.",
        }),
        q({
          question: "Un manager veut rompre l'essai « parce que la personne n'est pas assez souriante », sans faits de travail. Que faites-vous ?",
          options: [
            "A. Vous n'exécutez pas ce motif ; vous exigez des faits professionnels et alertez RH ; un onboarding absent peut expliquer un faux « échec ».",
            "B. Vous envoyez un SMS de rupture le soir même, par réactivité.",
            "C. Vous transformez le motif en « look pas corporate » dans l'ATS.",
            "D. Vous prolongez l'essai par e-mail personnel de 6 mois.",
          ],
          correct: 0,
          explanation:
            "Rupture d'essai = circuit RH, faits professionnels, pas un critère d'apparence. Le junior ne rompt pas seul et ne prolonge pas hors textes applicables.",
        }),
        q({
          question: "Quelle affirmation sur la conservation des données après embauche est la plus conforme aux sources du cours ?",
          options: [
            "A. Candidat retenu : la procédure se referme vers le dossier personnel ; candidats non retenus : archivage intermédiaire 5 ans à compter du pourvoi du poste (probatoire, L. 1134-5) ; vivier 2 ans = recommandation CNIL, pas une durée unique RGPD.",
            "B. Tous les CV restent en base active indéfiniment, c'est une obligation Urssaf.",
            "C. On supprime tout le jour de J1, y compris les traces probatoires.",
            "D. La DPAE impose de publier le CV du nouvel embauché pendant 5 ans.",
          ],
          correct: 0,
          explanation:
            "Référentiel CNIL 2026 + L. 1134-5 : 5 ans probatoires pour non-retenus à compter du pourvoi. Vivier 2 ans = recommandation. Ni conservation active infinie, ni destruction immédiate de toute trace, ni publication du CV.",
        }),
      ],
    }),
  ],
};
