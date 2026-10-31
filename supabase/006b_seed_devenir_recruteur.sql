-- LOU Academy — 006b PARTIE 2/2 — devenir-recruteur-a-z
-- Modules restants (positions 12–23).
-- Exécuter APRÈS 006a.

BEGIN;


DO $seed$
DECLARE
  payload        jsonb := $coursejsonb$
{
  "slug": "devenir-recruteur-a-z",
  "title": "Devenir recruteur — Maîtriser le recrutement de A à Z",
  "description": "De l'identification du besoin à l'intégration du collaborateur.\n\nCette formation professionnalisante prépare à un premier poste de chargé de recrutement, recruteur junior, Talent Acquisition Specialist junior, assistant recrutement, consultant débutant en cabinet ou chargé de recrutement en agence d'intérim.\n\nVous apprenez à cadrer un besoin avec un manager, rédiger une fiche de poste et une annonce, sourcer, analyser des CV, conduire une préqualification et un entretien structuré, évaluer sans biais, présenter une shortlist, formuler une offre, gérer les refus et préparer l'intégration. Le cadre juridique français (non-discrimination, questions autorisées, RGPD, offres d'emploi, promesse d'embauche, DPAE) est traité comme une compétence métier, pas comme une annexe.\n\nLe parcours combine cours détaillés, cas d'entreprise (PME, ETI, startup, industrie, services, cabinet, intérim), exercices corrigés, une bibliothèque de situations professionnelles, des modèles de documents et un projet final de recrutement fictif. L'attestation LOU Academy certifie la réussite du parcours dans cette plateforme : ce n'est pas un diplôme d'État ni une certification professionnelle enregistrée au RNCP.\n\nPublic : débutants, reconversion, assistants RH. Durée indicative : 40 heures. Niveau : débutant professionnalisant. Catégorie : Ressources humaines.",
  "level": "debutant",
  "category": "Ressources humaines",
  "icon": "fa-user-tie",
  "gradient": "linear-gradient(135deg, #4f46e5, #06b6d4)",
  "estimated_duration_minutes": 2400,
  "modules": [
    {
      "position": 12,
      "title": "Gérer le processus et la relation candidat",
      "description": "Cartographier les étapes, convoquer, relancer, reporter, informer sans mentir, et distinguer obligation légale, droits RGPD et bonne pratique — y compris l'absence d'obligation générale de motiver un refus.",
      "lessons": [
        {
          "title": "Cartographier le processus, la transparence et les délais",
          "description": "Rendre le parcours lisible pour le candidat et pour l'interne : étapes, responsables, délais cibles, points de communication.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez dessiner un process de recrutement en étapes nommées, attribuer un responsable à chaque communication, et fixer des délais cibles internes sans les présenter comme des délais légaux inventés."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un candidat ne vit pas « votre ATS ». Il vit une suite de messages, de silences et de rendez-vous. La relation candidat commence à la confirmation de réception, pas à l'entretien. Un process non cartographié produit des trous : personne ne sait qui rappelle, les managers gardent des CV, les délais s'allongent, le ghosting s'installe. Cartographier n'est pas une obligation légale unique. C'est une bonne pratique de maîtrise, et un outil de conformité : moins de données éparpillées, moins de questions hors cadre, moins de promesses orales contradictoires.\n\nLa transparence professionnelle consiste à dire les étapes réellement prévues, pas un roman d'entreprise. « Entretien recruteur, entretien manager, décision, réponse sous dix jours ouvrés » est une information utile si elle est tenue ou actualisée. « Process rapide, on avance vite, belle aventure » n'informe pas. Mentir sur l'existence d'un poste ou sur les conditions heurte l'esprit de L. 5331-3 (allégations fausses ou trompeuses dans les offres). À l'oral et par e-mail, la même honnêteté s'impose.\n\nLes délais de réponse aux candidats ne sont pas, en droit français, un barème unique du type « 48 h légales » ou « 15 jours maximum » que ce cours pourrait afficher comme obligation générale. N'inventez pas un délai légal. Une politique interne peut imposer un délai maximal de silence (bonne pratique fortement recommandée, parfois une règle d'employeur). Un silence trop long, même sans infraction isolée nommée, dégrade l'expérience, fait perdre des profils, et peut, combiné à d'autres éléments, nourrir un sentiment de traitement inégal. La non-discrimination (L. 1132-1) reste due à chaque étape : on ne « laisse pourrir » un dossier pour un motif protégé.\n\nLe process type d'un recruteur junior en entreprise : réception / tri, accusé, préqualification, entretien 1, entretien 2 éventuel, épreuve informée éventuelle, shortlist, décision, offre ou clôture, conservation selon règles. En cabinet, s'ajoute le client. En intérim, s'ajoutent des vacations courtes. À chaque porte, un message : convocation, confirmation, suivi, report, remerciement, clôture. Si une porte n'a pas de message prévu, c'est là que naît le ghosting.\n\nLa cartographie sert aussi au RGPD : on sait quelles données circulent, vers qui, jusqu'à quand. Le guide CNIL du recrutement (30 janvier 2023) et le référentiel durées RH (2026, voir legal-sources.json) distinguent base active, vivier recommandé, archivage probatoire. Sans carte du process, les CV restent dans des boîtes mail personnelles."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Sur une page : colonnes Étape / Acteur / Délai cible interne / Message au candidat / Données utilisées / Sortie possible. Faites valider par le manager et les RH. Ne promettez au candidat que ce qui est sur cette page.\n\nDélais cibles exemplaires de politique interne (pas des délais légaux) : accusé sous 72 h, suite d'entretien sous 5 à 10 jours ouvrés, actualisation si le délai glisse. Écrire le délai dans l'outil, avec une alerte, pas seulement dans votre tête.\n\nPoint hebdomadaire : dossiers sans contact depuis X jours. Un dossier sans propriétaire nommé est un risque."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "PME de 60 personnes, un assistant RH. Process écrit : accusé automatique, tri sous 5 jours, entretien unique recruteur+manager, réponse sous 8 jours ouvrés après le dernier entretien. Le gérant voulait « on verra ». L'assistant a imposé le tableau parce que trois candidats de la campagne précédente relançaient encore un mois plus tard. Le gérant a accepté le délai interne. Ce n'est pas devenu une obligation légale ; c'est devenu une règle d'employeur, opposable au manager qui « oublie »."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Annoncer « on revient vers vous très vite » sans date. Personne n'a la même définition de « vite ».\n\nAvoir un process différent pour le candidat interne « on lui dira au café » et l'externe. L'équité de communication fait partie de l'équité de traitement.\n\nInventer un « délai légal de deux mois » pour justifier un silence. Ce cours l'interdit."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Cabinet : le process client s'ajoute. Vous ne promettez pas une date que le client n'a pas validée. Vous dites : « Nous avons demandé un retour pour jeudi ; si nous n'avons pas de décision, nous vous actualisons vendredi. »\n\nVolume intérim : messages plus courts, mais un statut (reçu, présenté, non retenu pour cette vacation). Le volume n'autorise pas le zéro réponse comme doctrine.\n\nPoste gelé en cours de route : information factuelle (« le recrutement est suspendu »), pas disparition."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Dessinez le process d'un CDI chargé de clientèle (6 à 8 étapes). Pour chaque étape : acteur, délai cible interne, message oui/non. Indiquez explicitement un élément que vous n'inscrirez pas comme « obligation légale de délai »."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Étapes possibles : réception et accusé (recruteur, 72 h) ; tri (recruteur, 5 j) ; préqualification (recruteur) ; entretien 1 (recruteur+directeur) ; débrief (J0) ; second regard éventuel ; décision d'étape ; offre ou clôture. Messages à toutes les portes de rendez-vous et de décision. Ce que vous n'écrivez pas comme obligation légale : « réponse sous 8 jours, c'est la loi ». Vous écrivez : « réponse sous 8 jours ouvrés, politique interne / bonne pratique, à actualiser si glissement »."
            }
          ],
          "position": 0
        },
        {
          "title": "Convocations et confirmations",
          "description": "Rédiger des convocations complètes, confirmer sans ambiguïté, et intégrer l'information utile (aménagement, méthodes, interlocuteurs).",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez rédiger une convocation professionnelle (présentiel ou visio) et un accusé de confirmation, en y plaçant les informations de cadre, d'aménagement, et le cas échéant l'information préalable sur une méthode (L. 1221-8)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La convocation n'est pas un SMS minimaliste « 10 h, vous venez ? ». C'est le document qui fixe le contrat de rendez-vous : objet du poste, date, heure, durée, lieu ou lien, interlocuteurs et fonctions, documents éventuels, contact d'empêchement, phrase d'aménagement, suite éventuelle. Un candidat mal convoqué arrive au mauvais endroit, croit passer un entretien de 20 minutes, ou découvre un cas pratique par surprise. La surprise sur une méthode d'évaluation heurte L. 1221-8 si une technique d'aide au recrutement est mise en œuvre sans information préalable.\n\nLa confirmation (du candidat ou de vous-même) ferme l'incertitude. Un « ok » dans un fil de 15 messages n'est pas une confirmation robuste. Un e-mail unique qui reprend les éléments, avec un objet clair, l'est. La politique interne peut exiger un créneau bloqué dans un agenda. Ce n'est pas dans le Code du travail ; c'est de l'organisation.\n\nLe ton est courtois et vouvoyé. Ni fausse intimité, ni ordre militaire. Vous ne demandez pas, dans la convocation, d'informations de santé, de famille, de photo, de pièce d'identité hors cadre prévu par l'employeur pour l'accès au site (et alors, finalité accès, pas recrutement émotionnel). Une pièce d'identité à l'accueil pour un badge n'est pas une enquête d'identité au sens du tri des CV ; elle ne s'utilise pas pour commenter un nom (le nom est un critère protégé, L. 1132-1).\n\nConvocation interne (mobilité) : même clarté. Le candidat interne a droit à un horaire, une salle, une confidentialité vis-à-vis des collègues. Le convoquer en copiant toute l'équipe est une faute de relation et de données."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Objet : « Entretien — [poste] — [date] [heure] ». Corps : remerciement, poste, modalités, durée, participants, documents, aménagement, empêchement, mention si épreuve. Envoi J-3 au moins, sauf urgence assumée. Relance silencieux J-1 si pas de confirmation.\n\nVisio : lien, outil, plan B téléphone, consigne de calme et de confidentialité de votre côté aussi.\n\nPrésentiel : adresse, bâtiment, accueil, badge, accessibilité du lieu (information factuelle, pas une enquête).\n\nCopie : manager s'il participe, pas toute l'agence."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Cabinet, convocation d'un candidat chez le client industriel. Le consultant envoie deux e-mails : l'un au candidat (lieu client, accueil sécurité, durée, noms), l'un au client (rappel questions interdites, timing). Sans le second, le candidat subit un interrogatoire improvisé à l'entrée du site."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Envoyer un lien visio cinq minutes avant.\n\nConvoquer « pour un échange informel » alors qu'il s'agit d'un entretien d'embauche avec grille. Le mot informel n'ôte ni L. 1221-6 ni L. 1132-1.\n\nDemander une photo « pour l'accueil ».\n\nMettre le manager en copie cachée d'un e-mail où le candidat parle d'un aménagement : diffusion excessive."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Candidat qui confirme puis pose dix questions de fond par e-mail : répondez sur la logistique immédiatement ; renvoyez le fond à l'entretien ou à un point factuel déjà public (fiche de poste), pour ne pas créer deux process inégaux.\n\nDouble convocation par erreur (deux candidats, même créneau) : vous assumez, vous replanifiez, vous ne faites pas attendre 40 minutes en silence."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Listez les 10 mentions minimales d'une convocation visio de 50 minutes avec cas pratique de 10 minutes. Indiquez une mention illicite à ne pas ajouter."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Mentions : poste ; date/heure/fuseau ; durée ; outil et lien ; plan B téléphone ; noms et fonctions ; déroulé (dont cas pratique = méthode, donc information L. 1221-8) ; documents ; aménagement ; contact empêchement. Mention illicite : « Précisez votre situation familiale pour l'organisation des samedis » ou « envoyez une photo ». Les samedis se décrivent comme horaires du poste, pour tous."
            }
          ],
          "position": 1
        },
        {
          "title": "Relances, reports et gestion des délais qui glissent",
          "description": "Relancer sans harceler, reporter sans diluer, et informer quand le délai annoncé ne sera pas tenu.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez relancer un candidat ou un manager avec un objet clair, proposer un report daté, et envoyer un message d'actualisation lorsque la décision glisse — sans fausse promesse."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La relance est un acte de process, pas un acte de pression commerciale. Relancer un candidat qui n'a pas confirmé un créneau est légitime. Relancer trois fois par jour un profil « chaud » ressemble à du harcèlement de sourcing et dégrade la relation. Relancer un manager qui bloque une décision est votre travail interne : le candidat ne doit pas payer le silence managérial par un vide.\n\nLe report (du candidat ou de l'entreprise) doit rester exceptionnel, daté, expliqué sans détail intime. « Un imprévu interne nous conduit à proposer mardi 10 h » suffit. Vous ne demandez pas au candidat pourquoi il reporte au-delà de ce qui est utile à replanifier. S'il évoque un enfant ou une santé, vous n'en faites pas un critère (L. 1132-1). Un report n'est pas un KO. Une série de reports non expliqués côté candidat peut conduire à clôturer le créneau, de façon factuelle, pas morale.\n\nQuand le délai que vous aviez annoncé glisse, le message d'actualisation est une bonne pratique puissante. Il n'est pas une obligation légale générale. Il évite le ghosting perçu. Le contenu : nous n'avons pas encore de décision, nouvelle date de communication, éventuellement raison de process (« un entretien complémentaire est en cours ») sans mentir sur le statut de la personne. Vous ne dites pas « vous êtes en finale et c'est presque gagné » si ce n'est pas vrai. Le module 13 traite précisément le cas des réserves.\n\nLes délais glissent surtout pour trois raisons : manager absent, trop de profils, poste incertain. Les deux premières se gèrent par l'agenda et le cadrage. La troisième exige de l'honnêteté : si le poste n'est plus sûr, vous le dites, plutôt que de faire patienter « au cas où »."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Relance candidat, J-1 puis J0 matin si besoin, un canal (e-mail, ou téléphone si créneau proche). Relance manager : J+2 après débrief, puis votre responsable si silence. Le candidat reçoit une actualisation au plus tard à la date promise, même pour dire « pas encore de décision, nouveau point le… ».\n\nReport : proposer deux créneaux, garder le guide identique, noter l'incident de planning, pas un jugement.\n\nRègle : toute date dite au candidat est écrite dans l'outil avec rappel."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "ETI, le directeur d'usine part deux semaines. Le recruteur écrit aux trois personnes déjà vues : « La décision prévue le 15 est reportée au 26, en raison d'une absence interne. Votre dossier est toujours en cours. Nous vous écrivons le 26, y compris si nous n'avons qu'une actualisation. » Deux candidats restent. Un se retire. Le recruteur n'avait pas menti. Le directeur, au retour, n'a plus à gérer la colère d'un silence."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Ne pas écrire à la date promise, « parce qu'on n'a rien à dire ». Vous aviez quelque chose à dire : que vous n'aviez pas de décision.\n\nFaire reporter le candidat trois fois et s'étonner qu'il accepte ailleurs.\n\nRelancer le candidat en le culpabilisant (« on se dérange pour vous »)."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Candidat qui ne vient pas sans nouvelles (no-show) : un message factuel le jour même, offre d'un report unique selon politique, puis clôture si silence. Pas d'ironie.\n\nManager qui demande de « geler » les candidats sans mot : vous expliquez le coût (perte de profils, image). Si le gel est décidé, message de suspension.\n\nCabinet : relance client documentée ; le candidat n'est pas otage d'un client muet au-delà d'un délai que votre cabinet a fixé en politique interne."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Vous aviez promis une réponse vendredi. Il est vendredi 16 h, le manager n'a pas tranché. Rédigez l'e-mail d'actualisation (8 à 12 lignes) et l'e-mail interne au manager (5 lignes)."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Candidat : remerciement, rappel du poste et de la date promise, information honnête (décision non encore arrêtée), nouvelle date (ex. mercredi), contact. Pas de « vous êtes notre priorité absolue » si trois personnes sont en lice. Manager : « Date promise aux candidats : aujourd'hui. Sans arbitrage, j'envoie une actualisation au [date]. Merci de votre décision d'étape (poursuite / réserve / arrêt) avant mardi 12 h, ou d'un point de 15 minutes. » Vous ne ghostez pas pour protéger le manager."
            }
          ],
          "position": 2
        },
        {
          "title": "Expérience candidat, ghosting et traitements trop lents",
          "description": "Comprendre ce que le silence produit, répondre à tous comme bonne pratique, et ne pas confondre cette pratique avec une obligation légale de motiver les refus.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous distinguerez clairement obligation légale, droits RGPD, politique interne et bonne pratique sur la réponse aux candidats. Vous saurez pourquoi le ghosting est une faute professionnelle même lorsqu'aucune loi n'impose un modèle de lettre de refus motivé."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le ghosting, en recrutement, est le fait de laisser un candidat sans réponse alors qu'un contact a été établi (candidature, entretien, promesse de retour). Ce n'est pas un terme du Code du travail. C'est une pratique qui casse la confiance, vide les viviers, et met le recruteur junior en contradiction avec le discours d'employeur responsable. Beaucoup de juniors ghostent par gêne : ils n'ont pas de décision, ils n'aiment pas dire non, le manager ne revient pas. La gêne n'est pas une méthode. Un message d'actualisation ou de clôture courte est toujours possible.\n\nIl n'existe pas, en droit français, d'obligation générale de motiver un refus d'embauche, ni d'obligation générale de répondre à toutes les candidatures spontanées dans un délai légal unique que ce cours pourrait citer. Cette absence d'obligation générale ne signifie pas que tout est permis. L'interdiction de discriminer (L. 1132-1) s'applique : un refus, silencieux ou non, ne peut pas reposer sur un critère protégé. Les allégations trompeuses sur l'emploi sont interdites (L. 5331-3). Les données personnelles restent soumises au RGPD : finalité, minimisation, durées, droits de la personne (accès, notamment). Un candidat peut poser des questions sur le traitement de ses données. Cela n'équivaut pas à un droit général d'obtenir une dissertation sur les motifs métier du refus.\n\nLa bonne pratique professionnelle, distincte de la loi, est de répondre à toute personne reçue en entretien, et autant que possible à toute personne préqualifiée ou dont la candidature a été examinée, au moins par un message de clôture. Motiver brièvement (« profil ne correspondant pas aux exigences du poste au regard de [critère professionnel] ») est une bonne pratique lorsque c'est vrai, utile et non risqué ; ce n'est pas une obligation. Mentir sur le motif (« overqualified » alors que le manager a commenté l'âge) est plus grave qu'un refus court. En cas de doute juridique, un refus non détaillé, poli, sans critère illicite, vaut mieux qu'une fausse raison.\n\nL'expérience candidat, ce n'est pas un « wow parcours ». C'est : savoir où l'on en est, être traité avec courtoisie, ne pas subir de questions illicites, recevoir ce qui a été promis, pouvoir prévenir d'un empêchement, exercer ses droits sur les données. Un process sobre et tenu bat un process « marque employeur » qui ghoste après l'entretien.\n\nRépondre à tous a un coût de temps. Ce coût se réduit par des modèles (leçon suivante), des statuts d'ATS, des envois groupés personnalisés (prénom, poste, pas un copier-coller visible). Le coût du silence est plus élevé : relances, e-réputation, perte de cooptation, et, si un contentieux discrimination naît, un dossier vide de motifs professionnels."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Règle interne à proposer : tout entretien = un message de suite à la date promise. Tout process clos = un statut clos dans l'outil le jour J. Les candidatures non retenues au tri : message de clôture groupé selon politique (bonne pratique, à caler avec le volume).\n\nVous ne laissez pas au manager le « je lui dirai ». Vous écrivez, sauf si le process prévoit un appel du manager pour les finalistes, et encore : vous tracez.\n\nSi vous ne pouvez pas motiver : « Nous ne donnons pas de suite à votre candidature pour ce poste. Nous vous remercions du temps consacré. » C'est suffisant légalement dans le cas général. Ajouter un motif seulement s'il est professionnel, sincère, et aligné sur la grille."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Agence d'intérim, 40 candidatures pour une vacation. L'agence ne peut pas appeler tout le monde cinq minutes. Elle envoie un SMS/e-mail de réception, présente trois profils, écrit aux 37 autres « non retenu pour cette vacation, conservation en vivier X mois sauf opposition, conformément à notre information ». Ce n'est pas du luxe. C'est tenable. Un commercial qui ne prévient pas un intérimaire après un entretien client produit un ghosting immédiat et une perte de disponibilité."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Attendre d'avoir « le bon mot » pendant trois semaines. Un message court le vendredi promis vaut mieux.\n\nMotiver par un critère illicite ou un faux motif.\n\nRépondre seulement aux gens « intéressants pour un autre poste » et ignorer les autres : vous créez deux classes.\n\nCroire que le RGPD oblige à motiver le refus métier. Le RGPD porte sur les données, pas sur une obligation générale de justification d'un choix d'embauche."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Candidat qui exige par écrit « les motifs détaillés et les notes d'entretien ». Vous ne répondez pas seul : process RH / DPO. Vous n'inventez pas un refus d'accès global, vous n'envoyez pas non plus un dossier plein d'adjectifs illicites.\n\nCandidat interne : un refus silencieux est particulièrement destructeur. Un entretien de restitution interne, cadré, est une bonne pratique, avec l'accord du process.\n\nRéseaux sociaux : ne pas commenter un process sous un post public. Réponse courte en privé, même contenu que l'e-mail."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Un collègue dit : « On n'est pas obligés de répondre, c'est pas la loi, on ghoste, ça va plus vite. » Rédigez votre réponse en quatre points : obligation légale, interdits, RGPD, bonne pratique."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1) Il n'y a pas d'obligation générale de motiver un refus ni un délai légal unique de réponse à toute candidature que nous puissions citer. 2) Il est interdit d'écarter pour un motif discriminatoire (L. 1132-1) et d'induire en erreur sur l'emploi (L. 5331-3). 3) Les données restent encadrées (RGPD, CNIL) : pas de conservation infinie en base active, droits de la personne. 4) Bonne pratique et souvent politique interne : répondre au moins à toute personne reçue, actualiser les délais, ne jamais promettre un retour que l'on n'envoie pas. Le ghosting n'est donc pas « autorisé par la loi » au sens d'une pratique recommandable ; il est seulement, dans le cas général, non sanctionné par un article qui imposerait une lettre motivée. Nous ne le pratiquons pas."
            }
          ],
          "position": 3
        },
        {
          "title": "Confidentialité, RGPD et destinataires des messages",
          "description": "Savoir qui a le droit de lire quoi, combien de temps, et comment un e-mail de process peut devenir un incident de données.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez limiter les destinataires, éviter les copier-coller dangereux, informer sur les durées selon les sources CNIL, et orienter un exercice de droits vers le process interne."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Chaque e-mail de convocation, de suivi ou de refus véhicule des données personnelles : identifiant, poste visé, parfois des éléments de parcours. Le destinataire doit être justifié par la finalité recrutement. Mettre en copie l'équipe entière, transférer un CV à un ami « qui recrute », laisser un compte rendu dans un groupe de discussion : ce sont des incidents. L. 1221-8 rappelle que les résultats des méthodes sont confidentiels. Le RGPD impose un traitement licite, limité, sécurisé. La CNIL, dans son guide du recrutement (30/01/2023), recommande notamment, pour un vivier, une durée jusqu'à deux ans à compter du dernier contact, candidat informé, avec possibilité d'opposition. Ce n'est pas une durée unique obligatoire pour tous les traitements. Le référentiel CNIL durées RH (publié 2 avril 2026, mis à jour 20 mai 2026) distingue notamment : candidat retenu (base active le temps de la procédure jusqu'à la signature, puis réemploi RH) ; candidat non retenu (archivage intermédiaire 5 ans à compter de la date à laquelle le poste a été pourvu, à des fins probatoires, en lien avec L. 1134-5) — obligation de conservation probatoire, pas une autorisation de laisser les CV en base de travail indéfiniment.\n\nVous n'avez pas à réciter ces durées au candidat dans chaque e-mail. L'information sur le traitement se fait selon le dispositif de l'employeur (mentions, politique, clause de candidature). Vous devez en revanche aligner vos actes : ne pas promettre « on garde votre CV pour toujours », ne pas ignorer une opposition au vivier, ne pas mélanger archivage probatoire et CVthèque active.\n\nLa confidentialité, c'est aussi le contenu. Un e-mail de refus ne reprend pas les notes « look » ou « enfants ». Un e-mail de convocation ne révèle pas aux autres candidats l'identité des personnes en lice (copie multiple visible). Un e-mail interne au manager ne s'intitule pas « la blonde de 10 h ». Le nom de famille comme objet de moquerie est un critère protégé (L. 1132-1).\n\nLorsqu'un candidat exerce un droit (accès, rectification, opposition), vous ne composez pas une réponse juridique isolée. Vous saisissez le circuit interne (RH, DPO). Vous ne détruisez pas un dossier dans la panique pour « qu'il n'y ait plus rien » : l'archivage probatoire peut être légitime. Vous ne versez pas non plus un dossier insultant."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Destinataires nommés, pas de listes larges. Cci pour un envoi groupé de clôture. Pièces jointes chiffrées ou lien d'ATS selon outil, pas un CV dans un fil transférable à l'infini.\n\nObjets d'e-mails internes : poste + initiales ou identifiant outil, pas un surnom.\n\nOpposition vivier : statut bloqué, confirmation courte, conservation probatoire selon politique si le poste a été pourvu, distincte du vivier.\n\nFin de journée : pas de CV sur imprimante, pas de notes sur table."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Startup, le fondateur transfère cinq CV à un groupe Slack « team ». Un salarié répond par émoji sur la photo d'une candidate. Le recruteur junior fait retirer les fichiers, rappelle le canal RH, documente. Le process est repris : les CV ne sortent plus de l'ATS. L'incident n'est pas « de l'humour start-up » ; c'est un traitement et un risque d'apparence physique (critère protégé)."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Répondre à un candidat en mettant le manager et trois collègues en copie, y compris un échange sur un aménagement.\n\nPromettre « vos données sont détruites dès le refus » alors que l'archivage 5 ans peut s'appliquer. Vous n'inventez pas, vous renvoyez aux mentions internes.\n\nUtiliser votre messagerie personnelle pour « aller plus vite »."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Cabinet : le CV transmis au client = destinataire justifié, client briefé, pas de transfert à un autre client sans base et sans information adaptée.\n\nDemande d'un client de « tout le dossier, y compris nos notes look ». Refus. Vous transmettez des éléments professionnels.\n\nCandidat mineur : hors champ habituel de ce module ; circuit RH, pas d'initiative junior isolée."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Vous devez clôturer 12 candidats non reçus en entretien. Décrivez : canal, destinataires, contenu minimal, mention vivier, ce que vous ne joignez pas."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "E-mail groupé en copie cachée ou envoi ATS unitaire. Destinataires : chaque candidat, pas les autres. Contenu : poste, non-poursuite, remerciement, information vivier si réelle (durée recommandée, opposition possible), pas de notes, pas de comparatif. Pièce jointe : aucune grille. Si mentions RGPD déjà fournies à la candidature, un rappel court ou un lien interne suffit, selon le dispositif employeur. Vous n'écrivez pas « c'est la loi de tout supprimer sous 48 h »."
            }
          ],
          "position": 4
        },
        {
          "title": "Modèles d'e-mails : convocation, confirmation, suivi, report, remerciement",
          "description": "Disposer de cinq modèles complets, adaptables, distinguant ce qui est obligatoire, interne, ou de bonne pratique.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 28,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez adapter cinq modèles sans les rendre faux, trop juridiques, ou trop familiers. Vous identifierez, dans chaque texte, ce qui relève du cadre légal (information méthode, non-discrimination, données) et ce qui est une courtoisie professionnelle."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un modèle n'est pas une magie : s'il promet une date, vous la tenez ou vous actualisez. S'il mentionne un vivier, le vivier doit exister. S'il annonce un cas pratique, L. 1221-8 est respecté. Les textes ci-dessous sont pédagogiques, fictifs, vouvoyés, pour un poste de chargé de clientèle à la Banque des Vallées. Ils ne dispensent pas de relire les mentions RGPD de votre employeur.\n\nLe remerciement post-entretien n'est pas une obligation légale. C'est une bonne pratique : il confirme que la séance a eu lieu, rappelle la date de prochaine communication, et réduit l'angoisse du silence. Il ne dit pas « vous avez été brillant, vous êtes retenu ». Le suivi n'est pas une relance commerciale. Le report assume la responsabilité du côté qui reporte.\n\nVous personnalisez le prénom, le poste, la date, les interlocuteurs. Vous ne personnalisez pas par des commentaires sur le parcours qui trahiraient un critère illicite. Un modèle de refus figurerait surtout au module 15 ; ici, le suivi peut déjà clôturer sans motif détaillé, ce qui reste licite dans le cas général, tout en restant courtois.\n\nUn modèle mal utilisé devient un mensonge industrialisé : date non tenue, vivier inexistant, « vous êtes retenu » copié-collé. La bonne pratique de répondre à tous n'est pas une obligation légale générale de motiver un refus ; l'interdiction de discriminer (L. 1132-1) et les droits RGPD, eux, ne se désactivent pas parce que le texte est un modèle. Relisez chaque envoi comme s'il pouvait être versé à un dossier."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Copier le modèle dans l'outil, remplir les crochets, relire à voix haute, vérifier les destinataires, programmer le rappel de la date promise. Faire relire une fois par votre responsable les cinq modèles de votre entreprise, puis cesser d'improviser chaque matin."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Les cinq modèles suivants constituent le livrable opérationnel de la leçon. Cas fictif, agence Lyon Part-Dieu."
            },
            {
              "block_type": "code",
              "content": "MODÈLE 1 — CONVOCATION (visio, avec cas pratique)\nObjet : Entretien — Chargé de clientèle — 21 octobre 2026, 10 h 00\n\nMadame, Monsieur [Nom],\n\nNous vous remercions de votre candidature au poste de chargé / chargée de\nclientèle, agence de Lyon Part-Dieu.\n\nNous vous proposons un entretien en visioconférence :\n- Date et heure : mardi 21 octobre 2026, 10 h 00 (heure de Paris)\n- Durée prévue : 50 minutes\n- Interlocuteurs : [Prénom Nom], chargé de recrutement ; [Prénom Nom],\n  directeur d'agence\n- Outil : [lien]\n- En cas de difficulté technique : [téléphone], nous poursuivrons au besoin\n  par appel.\n\nDéroulé : parcours professionnel, situations de relation client, un cas\npratique court (priorisation d'accueil et éthique de conseil), vos questions.\nLe cas pratique vise à apprécier des aptitudes liées au poste. Les résultats\nsont confidentiels.\n\nDocuments : aucun, hors votre CV déjà reçu.\nSi vous avez besoin d'un aménagement pour passer cet entretien dans de\nbonnes conditions, écrivez-nous avant le 20 octobre à [e-mail].\n\nMerci de confirmer votre présence en répondant à cet e-mail. En cas\nd'empêchement, prévenez-nous dès que possible afin de replanifier.\n\nCordialement,\n[Nom] — Recrutement, Banque des Vallées\n[téléphone]\n\n---\nInformation : traitement de données pour la finalité de recrutement, selon\nles mentions portées à [lien interne / politique]. Droits : [contact DPO/RH]."
            },
            {
              "block_type": "code",
              "content": "MODÈLE 2 — CONFIRMATION (après accord du candidat)\nObjet : Confirmation — Entretien chargé de clientèle — 21 octobre 2026, 10 h\n\nBonjour [Prénom],\n\nNous confirmons notre entretien du mardi 21 octobre 2026 à 10 h 00,\nen visioconférence, durée 50 minutes, avec [noms].\n\nLien : [lien]\nPlan B téléphone : [numéro]\n\nNous vous souhaitons une bonne préparation. Pour toute question de\nlogistique, cet e-mail reste le bon contact.\n\nCordialement,\n[Nom]"
            },
            {
              "block_type": "code",
              "content": "MODÈLE 3 — SUIVI (actualisation de délai, sans mensonge)\nObjet : Suites de votre entretien du 21 octobre — Chargé de clientèle\n\nBonjour [Prénom],\n\nNous vous remercions encore du temps consacré à l'entretien du 21 octobre\npour le poste de chargé de clientèle, agence de Lyon Part-Dieu.\n\nNous vous avions indiqué un retour pour le 25 octobre. La décision n'est\npas encore arrêtée. Votre candidature est toujours en cours d'examen.\n\nNous vous écrivons à nouveau au plus tard le mercredi 29 octobre, y compris\ns'il s'agit d'une nouvelle actualisation.\n\nNous restons à votre disposition pour toute information de process.\n\nCordialement,\n[Nom]\n\n[Variante de CLÔTURE, si décision d'arrêt — bonne pratique de répondre,\n pas d'obligation générale de motiver]\n« Après examen, nous ne donnons pas de suite à votre candidature pour ce\nposte. Nous vous remercions sincèrement du temps consacré. Si vous ne\nsouhaitez pas que votre dossier soit conservé en vivier (jusqu'à [durée\nselon politique], sauf opposition), indiquez-le-nous. Ce message ne\npréjuge pas d'une autre opportunité future, distincte. »"
            },
            {
              "block_type": "code",
              "content": "MODÈLE 4 — REPORT (initiative entreprise)\nObjet : Report de votre entretien du 21 octobre — nouveau créneau proposé\n\nBonjour [Prénom],\n\nUn imprévu interne nous conduit à reporter l'entretien prévu le 21 octobre\nà 10 h 00 pour le poste de chargé de clientèle.\n\nNous vous proposons, selon votre disponibilité :\n- jeudi 23 octobre, 9 h 30\n- vendredi 24 octobre, 14 h 00\n\nMême modalité visio, même durée, mêmes interlocuteurs, même déroulé\n(y compris le cas pratique déjà annoncé).\n\nNous regrettons la gêne occasionnée. Merci de nous indiquer le créneau\nqui vous convient, ou une contrainte d'horaire, sans avoir à en préciser\nle motif personnel.\n\nCordialement,\n[Nom]"
            },
            {
              "block_type": "code",
              "content": "MODÈLE 5 — REMERCIEMENT POST-ENTRETIEN (bonne pratique)\nObjet : Merci — Entretien du 21 octobre — Chargé de clientèle\n\nBonjour [Prénom],\n\nNous vous remercions d'avoir participé à l'entretien de ce jour concernant\nle poste de chargé de clientèle, agence de Lyon Part-Dieu.\n\nComme indiqué en séance, nous visons une communication de suite au plus\ntard le 25 octobre 2026. Cette communication pourra être une poursuite\nde process, une actualisation, ou une clôture.\n\nNous n'avons pas de décision à vous annoncer aujourd'hui.\n\nCordialement,\n[Nom]\n\n[À NE PAS ÉCRIRE]\n« Vous êtes notre candidat numéro 1. » / « C'était parfait, on vous garde. »\n« On a écarté les autres. » / « Dites-nous si vous êtes enceinte, pour le planning. »"
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Envoyer le modèle de remerciement en y ajoutant un verdict. Utiliser la variante de clôture tout en promettant un vivier qui n'existe pas. Laisser les crochets [Nom] non remplis. Envoyer le modèle 3 (« toujours en cours ») alors que le manager a déjà dit non."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Présentiel : remplacez le lien par l'adresse, l'accueil, l'accessibilité du bâtiment. Cabinet : précisez le lieu client et les consignes de sécurité. Candidat interne : même modèle, confidentialité des destinataires, pas de copie à l'équipe actuelle."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le manager veut que le modèle 5 dise : « Vous êtes très bien, on vous fait une offre lundi » alors que la shortlist n'est pas arbitrée. Rédigez votre refus interne et la phrase que vous conservez dans l'e-mail candidat."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Refus interne : « Nous n'annonçons pas une offre non décidée. Une telle phrase serait une information trompeuse et créerait une attente incontrôlable, voire un contentieux si l'on y voyait une promesse (module 14). » Phrase conservée : celle du modèle 5, date de suite, « pas de décision aujourd'hui ». Bonne pratique de remercier, pas d'obligation de motiver, interdiction de mentir."
            },
            {
              "block_type": "callout",
              "content": "Répondre à tous les candidats reçus est une bonne pratique (souvent une politique interne). Ce n'est pas une obligation légale générale de motiver un refus. Discrimination interdite (L. 1132-1). Droits sur les données : RGPD / CNIL. Textes vérifiés le 13/10/2026."
            }
          ],
          "position": 5
        },
        {
          "title": "Quiz — Processus et relation candidat",
          "description": "Transparence, convocations, ghosting, obligation vs bonne pratique, RGPD, modèles.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 12,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Répondez à chaque question. En cas d'échec, relisez le module puis retentez. Les questions juridiques essentielles exigent une justification : lisez toujours l'explication après validation."
            }
          ],
          "quiz": {
            "title": "Quiz — Processus et relation candidat",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Un délai unique « réponse sous 15 jours, c'est la loi » :",
                "question_type": "single_choice",
                "options": [
                  "A. Est une obligation légale générale en droit français, à citer telle quelle.",
                  "B. N'est pas une obligation légale générale identifiable ici ; un délai cible relève de la politique interne et de la bonne pratique, à tenir ou à actualiser.",
                  "C. Autorise le ghosting au-delà de 15 jours.",
                  "D. S'applique seulement aux candidats internes."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Ce cours interdit d'inventer un délai légal unique. Tenir une date promise est une bonne pratique. Le ghosting n'est pas « autorisé » comme méthode, même sans article imposant une lettre motivée."
              },
              {
                "question": "Une convocation qui inclut un cas pratique doit :",
                "question_type": "single_choice",
                "options": [
                  "A. Cacher le cas pour que ce soit plus naturel.",
                  "B. Informer préalablement, car il s'agit d'une méthode d'aide à l'évaluation (L. 1221-8), avec résultats confidentiels.",
                  "C. Demander une photo et la situation familiale.",
                  "D. Être envoyée uniquement par SMS sans déroulé."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L. 1221-8 : information préalable, pertinence, confidentialité des résultats. Photo et famille : hors cadre / critères protégés."
              },
              {
                "question": "Vous aviez promis une réponse vendredi, le manager n'a pas tranché. Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. N'écrivez pas, faute de décision.",
                  "B. Envoyez une actualisation honnête avec une nouvelle date, et relancez le manager par écrit.",
                  "C. Annoncez au candidat qu'il est retenu pour le garder.",
                  "D. Ghostez jusqu'à nouvel ordre du manager."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "La date promise crée une attente professionnelle. L'actualisation est une bonne pratique. Le mensonge « retenu » est interdit comme pratique (et dangereux juridiquement, module 14)."
              },
              {
                "question": "Existe-t-il une obligation légale générale de motiver un refus d'embauche ?",
                "question_type": "single_choice",
                "options": [
                  "A. Oui, toujours, par lettre recommandée avec les notes d'entretien.",
                  "B. Non, pas d'obligation générale de motiver ; en revanche, discrimination interdite et droits RGPD sur les données. Répondre à tous est une bonne pratique.",
                  "C. Oui, uniquement si le candidat a plus de 50 ans.",
                  "D. Non, et cela autorise un refus pour grossesse si l'on ne l'écrit pas."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "C'est la distinction centrale du module. L'âge ou la grossesse comme motif, même non écrit, restent illicites (L. 1132-1). L'absence de devoir général de motiver n'est pas un permis de discriminer."
              },
              {
                "question": "Le ghosting après entretien est :",
                "question_type": "single_choice",
                "options": [
                  "A. Une bonne pratique de productivité.",
                  "B. Une faute professionnelle de relation, même si aucune loi n'impose un modèle unique de lettre motivée.",
                  "C. Obligatoire pour les profils non retenus, pour des raisons RGPD.",
                  "D. Réservé aux candidatures spontanées, jamais aux personnes reçues."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le RGPD n'impose pas le silence. Le silence après un entretien est une mauvaise pratique. La bonne pratique est au minimum un message de clôture ou d'actualisation."
              },
              {
                "question": "Selon les sources CNIL rappelées dans ce cours, pour un candidat non retenu :",
                "question_type": "single_choice",
                "options": [
                  "A. On peut laisser le CV en base active indéfiniment, c'est plus simple.",
                  "B. On distingue notamment vivier (recommandation, souvent jusqu'à 2 ans après dernier contact, opposition possible) et archivage intermédiaire probatoire (5 ans à compter de la pourvue du poste, L. 1134-5) — sans tout mélanger.",
                  "C. On détruit tout le jour du refus, c'est toujours obligatoire, sans exception.",
                  "D. On publie les scores."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Référentiel CNIL 2026 + guide recrutement 2023 + L. 1134-5. Ni conservation active infinie, ni destruction universelle immédiate présentée comme unique règle."
              },
              {
                "question": "Un e-mail de remerciement post-entretien peut :",
                "question_type": "single_choice",
                "options": [
                  "A. Annoncer « vous êtes le numéro 1, offre lundi » alors que la décision n'est pas prise.",
                  "B. Remercier, rappeler la date de prochaine communication, et indiquer qu'il n'y a pas de décision ce jour.",
                  "C. Demander un projet de grossesse pour le planning.",
                  "D. Mettre tous les candidats en copie visible pour la transparence."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Bonne pratique de courtoisie, honnêteté du statut, confidentialité des destinataires. Pas de fausse offre. Pas de question illicite."
              },
              {
                "question": "Un candidat demande « toutes vos notes et les motifs détaillés du refus ». Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Envoyez le dossier brut, y compris les commentaires d'apparence.",
                  "B. Répondez seul que « le RGPD interdit tout accès ».",
                  "C. Orientez vers le process interne RH/DPO, sans inventer un motif illicite et sans vider le dossier dans la panique.",
                  "D. Ignorez, le ghosting règle le sujet."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Droit d'accès = circuit interne, pas un junior isolé. Ni rejet global inventé, ni communication de mentions illicites. Le ghosting n'éteint pas un exercice de droits."
              }
            ]
          },
          "position": 6
        }
      ]
    },
    {
      "position": 13,
      "title": "Shortlist, décision et choix final",
      "description": "Présenter une shortlist, arbitrer sans critère illicite, et traiter en profondeur le cas des trois finalistes : refuser tout de suite, attendre la signature, ou informer de façon transparente — sans jamais mentir sur le statut.",
      "lessons": [
        {
          "title": "Construire et présenter une shortlist",
          "description": "Passer d'une liste de personnes vues à une shortlist argumentée, limitée, comparable, destinée à la décision.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez définir ce qu'est une shortlist, la limiter à des profils réellement employables au regard du poste, la présenter avec des faits, et éviter d'y faire figurer un « faire-valoir » ou un profil écarté pour un motif illicite."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La shortlist n'est pas le classement de tous ceux que vous avez aimés. C'est l'ensemble restreint des personnes que l'entreprise est prête à embaucher si le process se conclut avec elles, au regard des critères du poste. Un nom dans la shortlist n'est pas une promesse. C'est une décision d'étape : ces personnes restent en lice, les autres sortent du process de ce poste (avec un message, bonne pratique). Confondre shortlist et « on garde tout le monde au chaud sans mot » produit le problème traité dans les leçons suivantes.\n\nUne shortlist de qualité a trois propriétés. Elle est courte : deux ou trois personnes, parfois une seule. Au-delà de quatre, vous n'avez pas tranché, vous avez transféré le désordre au manager. Elle est comparable : mêmes étapes franchies, mêmes critères, preuves de même nature. Elle est honnête : chaque personne y figure parce qu'elle peut faire le poste, pas pour « faire de la figuration » afin que le favori brille. Présenter un candidat que vous savez non retenu, uniquement pour servir de contraste, est une mauvaise pratique : vous lui prenez du temps, vous créez une attente, vous traitez une personne comme un instrument.\n\nLa présentation au manager (orale + tableau) reprend le module 11 : besoin, faits, notes, risques, recommandation d'ordre éventuel. L'ordre (1, 2, 3) est une aide à la décision, pas un droit du premier à l'offre, et pas une information à donner telle quelle aux candidats. Dire à quelqu'un « vous êtes notre numéro 2 » sans cadre est souvent blessant et rarement utile. Dire « un autre profil est en cours de finalisation » peut l'être, nous le détaillons plus loin.\n\nLa shortlist reste soumise à L. 1132-1 et L. 1221-6. On n'y entre pas, on n'en sort pas, pour un critère protégé. Un manager qui dit « enlève-la, elle va avoir des enfants » exige un refus de votre part, pas une shortlist « nettoyée ». Les données de shortlist sont confidentielles : pas de diapositive nominative envoyée à tout le département.\n\nEnfin, une shortlist d'un nom est légitime. L'absence de « plan B » est un risque opérationnel (leçon désistement), pas une faute juridique. L'inverse — trois noms dont deux que personne n'embaucherait — est une faute de process."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Critère d'entrée en shortlist, écrit : « note minimale sur les critères essentiels, pas de 1 éthique / sécurité, preuves suffisantes ». Appliqué à tous.\n\nLivrable : une page, trois blocs identiques (faits, écarts, suite). Ordre recommandé, explicitement marqué comme tel. Décision managériale datée : qui est n°1 d'offre, qui est réserve, qui sort.\n\nCommunication : aucune offre, aucun « vous êtes retenu », tant que la décision d'offre n'est pas validée (rémunération, RH). Message de sortie aux personnes hors shortlist, à la date prévue, sauf stratégie A/B/C des leçons 3 à 6, qui ne concerne que les finalistes encore employables."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Services, shortlist de deux pour un coordinateur SAV. Le manager veut ajouter un troisième « au cas où, même s'il n'a pas le permis que le poste exige ». Le recruteur refuse l'ajout : ce n'est pas une réserve, c'est un profil non employable. La vraie réserve est la deuxième personne, qui a le permis et un écart de pédagogie. Le troisième reçoit un refus de clôture, pas un maintien fictif."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Mettre six noms « pour faire plaisir au volume ». Shortlister le candidat interne par politesse alors que la grille l'écarte. Envoyer la shortlist avec photos. Annoncer aux trois : « vous êtes tous retenus »."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Cabinet : shortlist client = les personnes présentables au regard du mandat, pas un catalogue. Le client n'a pas le droit d'exiger une shortlist discriminatoire.\n\nIntérim : la « shortlist » peut être une vacation du lendemain ; le principe reste : ne pas confirmer une mission que l'on n'a pas, ne pas faire attendre sans mot.\n\nPoste à pourvoir en urgence : une shortlist d'un nom + un CDD/temporaire côté RH, pas un mensonge aux réserves."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Vous avez Lina (35/48), Nadia (40/48), Karim (23/48 dont 1 éthique). Le manager dit : « mets les trois, je verrai. » Rédigez la shortlist que vous présentez et la phrase de refus d'inclure Karim."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Shortlist : Nadia (tête), Lina (réserve employable). Karim n'entre pas : critère essentiel éthique insuffisant, preuves de séance. Phrase : « Une shortlist n'accueille que des personnes que nous sommes prêts à embaucher. Karim, sur le situationnel crédit, ne l'est pas. Le garder « au chaud » serait un faux finaliste. Je clôture son process avec un message professionnel, sans motif illicite. » L'âge n'apparaît nulle part."
            }
          ],
          "position": 0
        },
        {
          "title": "Décider : preuves, ordre, et ce qui ne départage pas",
          "description": "Passer de la shortlist à un choix n°1, sans critère illicite, sans halo, et sans transformer l'ordre en promesse.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez faire formuler au manager un choix n°1 et des réserves, tracer les motifs professionnels, et refuser les départages par l'âge, le sexe, le lieu, la famille, le coût discriminatoire ou le « feeling » non documenté."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La décision finale d'embauche appartient en principe à l'employeur, souvent incarnée par le manager du poste, avec un cadre RH. Le recruteur junior n'impose pas le nom. Il impose le cadre : preuves, droit, process. Une décision « prends celui que tu veux » n'est pas une décision. Une décision « on prend X parce que c'est un homme, l'équipe est trop féminine » est illicite (L. 1132-1). Une décision « on prend X, preuves A, B, C, écarts acceptés D » est professionnelle.\n\nL'ordre 1 / 2 / 3 a une utilité interne : qui reçoit l'offre en premier, qui est réserve. Il n'a pas à être révélé brut aux candidats. Il ne crée pas, à lui seul, un contrat. Il ne vous autorise pas à dire au n°1 « vous êtes embauché » avant l'offre validée (module 14 : offre vs promesse). Il ne vous autorise pas à dire aux n°2 et n°3 « c'est terminé pour vous » ou « vous êtes retenus aussi », selon une mécanique unique : c'est précisément la question des leçons suivantes, et la réponse n'est pas une obligation légale unique.\n\nCe qui ne départage pas : critères protégés ; salaire demandé utilisé pour écarter une femme ou un senior de façon discriminatoire ; adresse comme proxy de « classe » ; photo ; humour de séance ; école du recruteur. Ce qui peut départage, s'il était dans la fiche : une exigence professionnelle réelle encore vérifiable auprès de tous les finalistes (habilitation, langue du poste, mobilité définie). Si l'exigence apparaît après coup, vous ne l'appliquez pas rétroactivement à un seul.\n\nLa décision se date, se nomme, se motive en interne par des faits. Cette trace n'est pas une lettre au candidat. Elle est la mémoire de l'entreprise, utile si un contentieux discrimination naît, utile si le n°1 se désiste, utile si le manager change d'avis le lundi suivant."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Réunion de 20 minutes max : rappel du besoin, tableau, parole du junior d'abord sur les faits, choix du manager, reformulation par le recruteur, écriture dans l'outil : n°1, réserves, sorties, motifs, prochaine action, date de communication.\n\nSi le motif oral est illicite : vous ne l'écrivez pas « pour faire plaisir ». Vous recadrez, vous proposez un motif professionnel s'il existe, sinon vous escaladez. Un motif interne écrit illicite est une pièce à risque.\n\nAucune communication candidat pendant cette réunion, y compris un SMS de joie du manager."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Industrie, deux finalistes techniciens. Le chef d'atelier : « On prend M., il habite à côté, l'autre est une femme, les équipes de nuit c'est compliqué. » Recruteur : refus des deux motifs (lieu de résidence, sexe). Reprise sur les preuves de sécurité. Si l'équipe de nuit est une exigence réelle du poste, elle se vérifie par les horaires, pour les deux, tels qu'écrits dans la fiche, sans stéréotype de sexe. Décision reportée de 24 h, brief RH au chef."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Laisser le manager envoyer un « bienvenue » LinkedIn avant l'offre. Écrire dans l'ATS « écartée, bientôt enceinte ». Annoncer l'ordre aux trois dans un e-mail commun."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Codécision RH + manager : un désaccord se documente (leçon 8). Offre conditionnelle à une vérification (diplôme, habilitation) : le n°1 n'est pas « embauché », les réserves ne sont pas « mortes ».\n\nActionnaire ou fondateur qui impose un nom hors grille : décision d'employeur, toujours soumise au droit ; vous tracez l'écart d'évaluation."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le manager choisit Nadia, Lina réserve, et ajoute : « Lina, on la garde au cas où, mais ne lui dis rien, on verra. Nadia, dis-lui qu'elle a le poste, on verra le salaire plus tard. » Quelles deux corrections apportez-vous immédiatement ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1) Nadia : on n'annonce pas « vous avez le poste » sans offre validée (rémunération, contrat, RH). On peut dire qu'une offre est en préparation si c'est vrai, ou rester sur une date. 2) Lina : le silence indéfini n'est pas une stratégie ; c'est le scénario B mal tenu. On choisit A, B cadré ou C (leçons suivantes), avec une date. On ne ment à aucune des deux."
            }
          ],
          "position": 1
        },
        {
          "title": "Trois finalistes, un choisi : y a-t-il une obligation légale unique ?",
          "description": "Traiter la question centrale : faut-il refuser tout de suite les deux autres, ou attendre que le premier ait accepté et signé ?",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 28,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez répondre à la question de process la plus fréquente en juniorat, sans inventer la loi : il n'existe pas d'obligation légale unique de refuser immédiatement les réserves, ni d'obligation unique de les attendre jusqu'à la signature. Vous distinguerez trois scénarios, leurs risques, et l'interdit commun : le mensonge sur le statut."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La question se pose ainsi, presque mot pour mot, dans toutes les équipes : « Nous avons trois finalistes. Le manager en choisit un. Faut-il refuser immédiatement les deux autres, ou attendre que le premier ait accepté et signé ? » Beaucoup de juniors cherchent l'article de loi qui tranche. Il n'y en a pas, dans les sources de cette formation, qui imposerait une mécanique unique. Ce n'est pas une obligation légale unique. C'est un choix de process, encadré par d'autres règles : non-discrimination (L. 1132-1), honnêteté sur l'emploi (esprit L. 5331-3), données personnelles, et — surtout — interdiction professionnelle de mentir (« vous êtes retenu / retenue ») si ce n'est pas le cas. Une politique interne peut imposer un délai maximal de maintien des réserves. Cette politique n'est pas la loi ; elle s'applique chez l'employeur qui l'a édictée.\n\nAttendre une signature avant de clôturer les autres n'est pas illégal en soi. Refuser tout de suite les réserves n'est pas illégal en soi, sous réserve qu'aucun motif discriminatoire n'entre en jeu et que l'on ne crée pas, par des propos, une fausse promesse. Ce qui devient fautif, juridiquement ou professionnellement selon les cas : dire à une réserve qu'elle est choisie pour qu'elle attende ; laisser un silence de plusieurs semaines sans actualisation ; écarter une réserve pour un critère protégé pendant l'attente ; présenter comme une embauche ce qui n'est qu'une intention.\n\nTrois scénarios, tous praticables, tous imparfaits, à choisir en conscience, de préférence avant la campagne (politique interne), pas dans l'angoisse du vendredi soir.\n\nScénario A — Refus immédiat des deux non choisis, dès que le n°1 est désigné (avant même son acceptation). Avantage : clarté, respect du temps des personnes, image, simplicité. Risque opérationnel majeur : le n°1 se désiste, négocie ailleurs, échoue à une condition, et vous vous retrouvez sans candidat, après avoir fermé les réserves. Recruter de zéro coûte des semaines. Ce scénario est défendable lorsque le vivier est profond, lorsque le n°1 a une forte probabilité d'accepter, ou lorsque l'employeur assume explicitement le risque.\n\nScénario B — Attendre la signature (parfois même la fin de la période d'essai, ce qui est encore plus lourd) avant de dire quoi que ce soit aux autres. Avantage apparent : filet de sécurité. Risques : mauvaise expérience candidat, perte des réserves qui acceptent ailleurs pendant le silence, délai qui devient déraisonnable, accusations de « garder au chaud », relances multiples, et tentation de mensonge pour gagner du temps. Plus l'attente est longue et muette, plus le scénario B se dégrade. Attendre la signature du contrat est déjà long ; attendre la fin d'essai pour « libérer » les autres n'est en général ni tenable ni respectueux, sauf cas très particulier jamais improvisé par un junior.\n\nScénario C — Information transparente, sans mensonge : les non choisis ne sont pas « retenus », ils ne sont pas non plus disparus. On leur dit, en substance, qu'un autre profil est en cours de finalisation, que leur dossier reste une réserve possible, et que l'on revient avant une date ferme. Bonne pratique. Avantage : honnêteté, maintien possible de la réserve, respect. Risques : la personne refuse d'attendre ; elle demande si elle est « la deuxième » ; le manager veut du silence. Le scénario C exige une date, un respect de cette date, et des mots justes. Il se combine souvent avec une politique interne de délai max (par exemple : on ne maintient pas une réserve plus de X jours sans actualisation).\n\nL'interdit commun aux trois scénarios : ne jamais dire « vous êtes retenu / vous avez le poste / c'est bon » à une personne qui n'est pas celle à qui l'on fait une offre réelle, et ne jamais le dire au n°1 avant que l'offre soit vraiment décidée. Mentir n'est pas un scénario D. C'est une faute.\n\nLe choix A, B ou C n'est pas un outil pour discriminer. On n'applique pas A aux uns (refus sec) et B aux autres (attente) selon l'origine, le sexe, l'âge ou la famille. On applique une politique, ou un choix de campagne, aux finalistes encore employables."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Avant la campagne, proposer par écrit au manager et aux RH : « En cas de n°1 + réserves, nous appliquons le scénario C, délai max [date], actualisation à [date]. Si vous exigez A, vous assumez le risque de désistement. Si vous exigez B muet, je m'y oppose comme bonne pratique ; je propose B seulement avec actualisations datées, ce qui rejoint C. »\n\nLe jour J de la décision : nommer A, B ou C dans l'outil, avec les messages du jour, les dates, les propriétaires.\n\nContrôle : relire chaque phrase candidat avec le test du mensonge. « Vous êtes retenu » = seulement si offre réelle. « Process encore ouvert, nous revenons avant le [date] » = C. « Nous ne donnons pas suite » = A (sortie vraie)."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Banque des Vallées (fictif), Nadia n°1, Lina réserve, un troisième déjà sorti au tri. Le directeur veut A (« on coupe, c'est plus simple »). Le RH rappelle que le dernier chargé de clientèle s'est désisté après signature d'une contre-offre, et que l'agence a vécu six semaines de vide. Décision : C, retour à Lina avant 10 jours, phrase transparente, pas de « tu as le poste ». Nadia reçoit une offre écrite validée, pas un simple « c'est bon » oral."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Chercher « l'article qui dit qu'il faut attendre la fin d'essai ». Il n'est pas dans nos sources comme obligation unique. Appliquer B muet par peur. Appliquer A par agacement, puis paniquer au désistement. Dire aux deux réserves qu'elles sont n°1."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Une seule personne en shortlist : la question A/B/C ne se pose pas de la même façon ; le risque de désistement se gère par le vivier, un process parallèle honnête, ou l'acceptation du vide. Pas en promettant à un candidat déjà refusé qu'il est « encore n°1 ».\n\nCabinet : le client choisit A alors que vous savez le n°1 fragile. Vous conseillez C, vous n'inventez pas un statut au candidat.\n\nFonction publique / règles statutaires : hors modèle unique de ce cours ; suivez le cadre spécifique de l'employeur public. N'importez pas ce cadre dans une PME par analogie hasardeuse."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Rédigez, en 12 à 15 lignes, la réponse que vous feriez à un manager qui demande : « C'est la loi de refuser les deux autres tout de suite, ou c'est la loi d'attendre la signature ? » Distinguez obligation, politique interne, bonne pratique, interdit."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "« Ce n'est pas une obligation légale unique, ni dans un sens ni dans l'autre. La loi nous interdit de discriminer, de tromper sur l'emploi, de mal traiter les données, et nous n'avons pas d'obligation générale de motiver un refus. Elle ne nous dicte pas le moment exact où l'on clôture les réserves. Politique interne : je propose un délai max et le scénario C. Bonne pratique : information transparente, date ferme, pas de silence de trois semaines. Interdit : dire « vous êtes retenu » si ce n'est pas le cas. Scénario A : possible, risque de nous retrouver sans personne. Scénario B muet : possible factuellement, mauvaise expérience, perte des réserves. Je ne choisirai pas en fonction de l'âge ou du sexe des personnes. »"
            },
            {
              "block_type": "callout",
              "content": "Question de campagne à trancher par écrit avec le manager, avant le premier entretien si possible. Date de vérification des textes : 13/10/2026. Ne jamais inventer un article qui « oblige à attendre la signature » ou qui « oblige à refuser le jour même »."
            }
          ],
          "position": 2
        },
        {
          "title": "Scénario A — Refuser tout de suite les non choisis",
          "description": "Appliquer un refus immédiat des réserves : messages, honnêteté, risque de vide, et ce que l'on ne dit pas.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez exécuter le scénario A de façon propre : clôture rapide, message poli, motif facultatif professionnel, sans humiliation, et avec une conscience claire du risque de désistement du n°1."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le scénario A assume que, une fois le n°1 désigné pour une offre réelle, les autres sortent du process de ce poste. C'est un choix de respect du temps : les personnes peuvent rebondir. C'est aussi un choix de risque RH : si Nadia refuse l'offre dans cinq jours, Lina a peut-être déjà accepté ailleurs, ou a reçu votre refus et ne reviendra pas. Certaines le feront par élégance ; beaucoup non. A n'est donc défendable que si l'employeur a compris ce risque, ou si le marché du poste est suffisamment profond pour rerouvrir un process sans drame, ou si le n°1 a déjà donné une acceptation orale ferme en même temps qu'une offre écrite — ce qui n'est toujours pas une signature, nous y reviendrons au module 14.\n\nA n'impose pas un roman de motifs. Rappel : pas d'obligation générale de motiver un refus. Un message court est licite. Un motif vrai, professionnel, bref, est une bonne pratique s'il n'expose pas l'entreprise (comparaison blessante, critère illicite, détail d'un autre candidat). « Nous avons retenu un profil plus proche de l'exigence X » est parfois acceptable. « Nous avons pris quelqu'un de plus jeune / moins susceptible d'être enceinte » est illicite, même en interne.\n\nA n'autorise pas à clôturer une personne encore nécessaire comme réserve tout en le lui cachant : ce ne serait plus A, ce serait un B ou un C déguisé. Si vous écrivez « pas de suite » tout en demandant au manager « on la rappelle si Nadia dit non », vous avez menti. Soit vous sortez vraiment, soit vous n'êtes pas en A.\n\nLe timing de A : après la décision d'offre au n°1, pas après la seule « préférence » encore floue. Si l'offre n'est pas validée (salaire, RH), A est prématuré : vous fermez des réserves pour une embauche qui n'existe pas encore. Séquence : validation de l'offre n°1, envoi ou entretien d'offre, puis messages A aux sorties, le même jour ou le lendemain. Pas trois semaines plus tard sous étiquette A."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Checklist A : offre n°1 validée ; messages de clôture prêts ; ATS statut « not selected » ; pas de vivier forcé si la personne s'y oppose ; pas de téléphone humiliant obligatoire (un e-mail suffit souvent ; un appel pour un finaliste longuement investi est une bonne pratique).\n\nSi le n°1 n'a pas encore vu l'offre : attendez l'envoi de l'offre, pas la signature, pour exécuter A — ou passez en C si le risque de désistement est élevé.\n\nDocumentez : « Scénario A assumé par [manager], risque de vide expliqué le [date]. »"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "PME, 40 candidats, poste d'assistant ADV, vivier profond. N°1 très aligné, salaire déjà discuté en préqualification, offre envoyée. Le recruteur applique A le jour même aux deux autres personnes reçues. L'une répond « merci, bonne continuation ». Le n°1 signe. A était cohérent. Le même A, sur un profil rare de soudeur spécialisé, serait imprudent."
            },
            {
              "block_type": "code",
              "content": "MESSAGE TYPE — SCÉNARIO A (e-mail de clôture, finaliste non choisi)\nObjet : Suite de votre candidature — Chargé de clientèle — Lyon Part-Dieu\n\nBonjour [Prénom],\n\nNous vous remercions du temps consacré aux échanges pour le poste de\nchargé / chargée de clientèle, agence de Lyon Part-Dieu.\n\nAprès décision, nous ne donnons pas de suite à votre candidature pour\nce poste. Cette décision porte sur l'adéquation avec le besoin retenu\npour cette ouverture ; elle n'est pas une évaluation de votre parcours\ndans l'absolu.\n\n[Option bonne pratique, seulement si vrai et professionnel :]\nLe besoin a été pourvu avec un profil plus directement exposé à [tel\ncritère de la fiche : ex. délégations d'agence déjà pratiquées].\n\nNous vous souhaitons la réussite de vos projets. Si vous souhaitez\nvous opposer à une conservation en vivier, répondez à cet e-mail.\n\nCordialement,\n[Nom]\n\nÀ NE PAS ÉCRIRE EN A\n« On vous garde au cas où. » (ce n'est plus A, et c'est contradictoire)\n« Vous étiez très bien, le manager a un souci avec votre âge. »\n« Vous êtes retenu aussi, bravo. » (mensonge)"
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Exécuter A parce que c'est plus confortable émotionnellement, sur un poste rare. Ajouter « on se revoit peut-être » sans vivier réel. Téléphoner pour « vider son sac » sur les défauts du candidat."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Candidat interne non choisi : A s'accompagne, bonne pratique, d'un échange oral cadré avec le manager ou les RH, pas d'un seul e-mail froid, et jamais d'un silence. Toujours des motifs professionnels.\n\nCandidat qui demande le nom du retenu : vous ne le donnez pas (données, confidentialité)."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le manager veut A, mais ajoute : « Dis-leur qu'on n'a pas encore décidé, comme ça s'ils sont bons on pourra revenir. » Qualifiez cette instruction et proposez soit un vrai A, soit un vrai C."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "L'instruction est un mensonge de statut : ce n'est ni A ni C. Vrai A : clôture réelle, on assume de ne pas revenir, ou de revenir seulement comme un nouveau contact honnête si un jour le poste se réouvre (sans garantir). Vrai C : on dit que le poste n'est pas clos pour eux, date de retour. Vous refusez l'hybride « on dit non mais on dit que ce n'est pas décidé / on dit que c'est décidé mais on garde »."
            }
          ],
          "position": 3
        },
        {
          "title": "Scénario B — Attendre la signature avant d'informer les autres",
          "description": "Comprendre pourquoi l'attente jusqu'à la signature (ou au-delà) est tentante, quels dégâts elle produit si elle est muette, et comment la limiter si l'employeur l'impose.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 24,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez décrire les risques du scénario B, refuser le B muet comme bonne pratique, et, si l'employeur impose d'attendre la signature, y greffer des actualisations datées — ce qui rapproche B de C."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le scénario B naît d'une peur raisonnable : le n°1 peut se désister jusqu'à la signature, parfois après. Les employeurs qui ont vécu un désistement tardif veulent « ne brûler aucune cartouche ». Cette peur ne crée pas une obligation légale d'attendre. Elle crée un risque de mauvaise expérience si elle se traduit par un silence, des délais qui s'allongent, des personnes qui se croient encore en course sans le savoir, ou qui relancent sans réponse. Un délai déraisonnable n'est pas chiffré ici par un article unique ; il se constate : plusieurs semaines sans mot après un entretien final, alors qu'une offre circule ailleurs dans l'entreprise, c'est trop.\n\nAttendre la signature du contrat de travail du n°1 avant de clôturer les réserves n'est pas, en soi, une fraude. C'est une stratégie de filet. Elle devient fautive si, pendant l'attente, vous dites aux réserves qu'elles sont choisies ; si vous disparaissez ; si vous les faites revenir pour un « dernier entretien » fictif destiné seulement à les retenir ; si le délai n'a plus de date. Elle devient particulièrement lourde si l'on veut attendre la fin de la période d'essai du n°1 pour « libérer » les autres : vous demandez à des personnes de geler leur vie professionnelle pendant des semaines ou des mois. Un junior n'improvise pas cette option. Elle n'est pas une obligation légale. Elle est rarement une bonne pratique.\n\nPendant B, les réserves restent des candidats : L. 1132-1, L. 1221-6, RGPD s'appliquent. Vous n'en profitez pas pour poser de nouvelles questions illicites. Vous ne les « testez » pas à la baisse. Vous ne les utilisez pas comme levier de négociation contre le n°1 (« j'en ai deux autres ») de façon à mentir à l'un ou à l'autre.\n\nSi B est imposé, la seule manière de le rendre professionnel est de le rapprocher de C : dire que le process n'est pas clos, qu'une finalisation est en cours, revenir à une date. Sinon B n'est que du ghosting de finalistes — la pire version du module 12. Les réserves, mal informées, partent. B a alors échoué deux fois : mauvaise image, et plus de filet.\n\nLa signature n'est d'ailleurs pas toujours le moment où le risque disparaît. Un désistement post-signature existe. Vouloir un filet infini n'a pas de fin propre. Il faut un terme : date, événement (signature de l'offre / du contrat), puis clôture réelle des réserves, ou nouvelle information."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Si B est demandé : « J'applique B seulement avec un terme [signature de l'offre écrite / signature du contrat, au plus tard le date], et des messages d'actualisation aux réserves les [dates]. Au-delà, clôture. » Écrit, validé.\n\nInterdit : aucun contact, « on verra bien ». Interdit : faux « vous êtes le n°1 ». Interdit : faire durer jusqu'à la fin d'essai sans cadrage RH explicite — escaladez.\n\nCalendrier type (politique interne, pas la loi) : offre n°1 J0, actualisation réserves J0 ou J+1 (phrase C), point J+5, clôture ou nouvelle date à J+10 maximum, par exemple. Adaptez, mais datez."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "ETI, profil rare d'ingénieur méthodes. Le DRH impose d'attendre la signature du n°1. Le recruteur junior n'accepte pas le silence : il envoie le message de réserve daté (modèle C). L'une des deux réserves se retire tout de suite (« je ne reste pas en plan B »). L'autre accepte d'attendre jusqu'au 12. Le n°1 signe le 10. Clôture honnête le 11. B a fonctionné parce qu'il n'était plus muet. La personne retirée n'a pas été trompée."
            },
            {
              "block_type": "code",
              "content": "CE QUE B MUET PRODUIT (à ne pas faire)\nJour 1 : manager choisit le n°1. Les deux autres n'ont aucun message.\nJour 8 : une réserve relance. Personne ne répond, « on n'a pas signé ».\nJour 14 : la réserve accepte ailleurs.\nJour 16 : le n°1 se désiste. Plus personne. Le manager blâme le recruteur.\n\nVERSION B CADRÉE (seule version défendable)\nJour 1 : offre n°1 + message type C aux réserves, date de retour le jour 8.\nJour 8 : soit signature → clôture A des réserves ; soit pas encore →\nnouvelle date jour 12, ou libération des réserves si le délai max interne\nest atteint. Jamais « vous avez le poste » adressé aux réserves."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Confondre B avec une obligation légale de « ne pas rompre les pourparlers avant signature ». Ce cours ne vous donne pas un tel article à invoquer comme règle unique. Utiliser B pour éviter d'écrire un refus. Promettre aux réserves une réponse « dans la semaine » chaque semaine, six fois."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "N°1 en préavis long : B peut durer des semaines. D'autant plus C, d'autant plus le droit pour la réserve de se retirer. Vous n'exigez pas d'exclusivité sans contrepartie d'offre.\n\nN°1 mineur écart de salaire encore en négo : vous n'êtes même pas en B « signature », vous êtes en offre non close. C est encore plus nécessaire. Module 14."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le manager : « Attends la fin de sa période d'essai, on ne sait jamais, et ne dis rien aux deux autres. » Rédigez votre réponse (droit vs pratique vs politique) et l'alternative que vous proposez."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Réponse : « Ce n'est pas une obligation légale. Faire attendre des finalistes plusieurs mois sans mot n'est pas une bonne pratique ; délai déraisonnable, perte des personnes, expérience dégradée. Je n'improviserai pas un gel jusqu'à la fin d'essai. Alternative : scénario C jusqu'à la signature de l'offre ou du contrat, délai max [ex. 10 jours ouvrés], actualisations, puis clôture. Filet de sécurité : vivier et, si le n°1 part en essai, un process de remplacement honnête, éventuellement en réactivant une réserve avec la vérité (leçon 7). » Escalade RH si le manager maintient le silence long."
            }
          ],
          "position": 4
        },
        {
          "title": "Scénario C — Information transparente et politique de délai maximal",
          "description": "Dire qu'un autre profil est en cours de finalisation, donner une date, tenir cette date, sans jamais affirmer à tort que la personne est retenue.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 26,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez rédiger et tenir le scénario C, y compris les relances de date, le cas où la réserve refuse d'attendre, et l'articulation avec une politique interne de délai maximal."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le scénario C est la bonne pratique de ce module, parce qu'il refuse deux facilités : le mensonge et le silence. Il dit le vrai : vous n'êtes pas la personne à qui nous faisons l'offre maintenant ; le poste n'est pas encore juridiquement pourvu de façon définitive ; nous souhaitons, si vous l'acceptez, pouvoir revenir vers vous avant telle date. La personne reste actrice : elle peut attendre, poser une date plus courte, ou se retirer. Vous n'achetez pas sa disponibilité par une fausse victoire.\n\nLes mots comptent. « Un autre profil est en cours de finalisation » est exact si une offre est réellement en cours. « Vous êtes en shortlist, tout est ouvert, vous avez autant de chances que quiconque » est faux si le n°1 a déjà l'offre. « Vous êtes notre deuxième choix » est vrai mais souvent inutilement blessant ; ce n'est pas illicite en soi, c'est une question de mesure. Beaucoup d'équipes préfèrent ne pas numéroter à l'oral. La date, elle, n'est pas optionnelle. Sans date, C redevient B muet.\n\nUne politique interne peut fixer un délai maximal de maintien en réserve (exemple pédagogique : 10 jours ouvrés après l'offre au n°1, ou la date de signature prévue, le plus proche des deux). Ce n'est pas une durée légale. C'est une règle d'employeur qui protège les candidats et le recruteur. Au terme, soit clôture réelle (A différé), soit exception documentée (signature imminente le lendemain). Un junior ne prolonge pas tout seul « encore un peu » cinq fois.\n\nC n'est pas une coquille vide pour faire patienter au-delà du raisonnable. Si vous savez que la négo du n°1 durera un mois, vous le dites, et la réserve a le droit de partir. Si vous savez que le n°1 a déjà signé, C est caduc : vous êtes en A, vous clôturez.\n\nÉgalité : le même type de message aux réserves employables. Pas un C chaleureux pour le profil « qui nous ressemble » et un A sec pour l'autre sans motif professionnel."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "J0 offre n°1 : messages C aux réserves, date D. Agenda : rappel D-1, message à D même sans news (nouvelle date ou clôture). Si la réserve pose une question directe « suis-je le plan B ? » : vérité mesurée, voir modèle. Si elle se retire : remerciement, statut clos, pas de rancune dans un futur vivier.\n\nValidation RH du modèle C une fois, puis usage. Le manager ne réécrit pas en « tu as le job »."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Startup, n°1 en négo de 5 jours. Le recruteur envoie C à la réserve, date au vendredi. Le mercredi, la réserve a une autre offre. Le recruteur dit la vérité : « Nous avons une offre en cours ailleurs ; je ne peux pas vous aligner aujourd'hui ; je comprends que vous acceptiez l'autre. » Pas de surenchère mensongère. Le n°1 signe le jeudi. Process propre, même si le filet a disparu : le filet n'était pas un otage."
            },
            {
              "block_type": "code",
              "content": "MESSAGE TYPE — SCÉNARIO C (réserve, honnêteté, date)\nObjet : Point d'étape — Chargé de clientèle — Lyon Part-Dieu\n\nBonjour [Prénom],\n\nNous vous remercions des échanges pour le poste de chargé / chargée de\nclientèle.\n\nÀ ce stade, un autre profil est en cours de finalisation. Votre candidature\nn'est pas écartée : elle demeure une possibilité si cette finalisation\nn'aboutissait pas. Nous n'avons pas d'offre à vous adresser aujourd'hui.\n\nNous revenons vers vous au plus tard le [date — ex. vendredi 30 octobre],\ny compris pour vous clôturer le process ou pour actualiser cette date une\nfois. Passé ce délai, sauf message de notre part, vous pourrez considérer\nle process clos.\n\nVous êtes libre de poursuivre d'autres pistes. Si votre situation change\nou si vous ne souhaitez pas rester en attente, indiquez-le-nous.\n\nCordialement,\n[Nom]\n\n---\nSI LA PERSONNE DEMANDE : « Je suis le plan B ? »\n« Nous avons engagé une offre avec une autre personne. Nous ne vous avons\npas fait d'offre. Nous souhaitons, si vous l'acceptez, pouvoir revenir\nvers vous avant le [date] si cette offre n'aboutit pas. Nous ne vous\ndemandons pas d'exclusivité. »\n\nSI LA PERSONNE DEMANDE : « Je suis retenu(e) ? »\n« Non, pas à ce stade. Nous ne disons pas que vous êtes retenu(e). Nous\ndisons que le process n'est pas clos de notre côté jusqu'au [date]. »\n\nÀ NE PAS ÉCRIRE\n« Vous avez le poste. » / « C'est presque sûr pour vous. »\n« On a choisi quelqu'un de plus jeune, mais restez dispo. »\n« Signez déjà un document pour qu'on vous réserve. » (risque de promesse,\n module 14 : pas d'initiative junior)"
            },
            {
              "block_type": "code",
              "content": "POLITIQUE INTERNE PÉDAGOGIQUE (exemple, pas une loi)\n1. Décision n°1 + réserves : scénario par défaut = C.\n2. Délai max de réserve : 10 jours ouvrés après l'envoi de l'offre au n°1,\n   ou la date de signature prévue si elle est plus proche.\n3. Au moins un message à J0 et un message à la date butoir.\n4. Interdiction d'annoncer « retenu » hors offre réelle.\n5. Même politique pour tous les finalistes employables.\n6. Exception (allongement) : écrit RH + manager, une seule fois, 5 jours\n   max, message au candidat.\n7. Scénario A possible si vivier profond et risque de désistement faible,\n   décision tracée.\n8. Scénario B muet : non."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Oublier la date. Enjoliver (« vous êtes vraiment très proche du poste, c'est dans la poche »). Appliquer C pendant deux mois. Laisser le manager appeler la réserve pour dire « tu as gagné » par confusion."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Deux réserves : même date, même type de message. Pas de mise en concurrence orale (« la plus rapide à se rendre dispo »). La disponibilité se gère par les dates d'un poste, pas par une enchère.\n\nRéserve interne : C + un oral court, confidentialité vis-à-vis de l'équipe."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "C'est la date butoir. Le n°1 n'a pas signé, il demande encore 10 jours. La politique interne max est atteinte. Que faites-vous vis-à-vis de la réserve et vis-à-vis du n°1 ? Deux messages."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Réserve : soit clôture honnête (A différé) : « La finalisation se poursuit au-delà du délai que nous vous avions indiqué ; nous clôturons votre process pour ce poste afin de ne pas prolonger l'attente ; merci. » Soit, exception RH unique, une nouvelle date courte, si la réserve accepte. Pas de silence. N°1 : vous ne le menacez pas avec la réserve. Vous donnez un délai d'acceptation de l'offre (module 14), vous n'inventez pas une exclusivité éternelle. Si RH autorise 5 jours de plus et que la réserve est d'accord, message C prolongé une fois. Sinon vous assumez le risque de vide : c'est le coût d'avoir un délai max, c'est aussi sa valeur."
            }
          ],
          "position": 5
        },
        {
          "title": "Désistement du retenu : réactiver les réserves avec honnêteté",
          "description": "Recontacter une réserve lorsque le n°1 part, sans falsifier l'histoire, sans pression, sans critère illicite.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez réactiver une réserve après un désistement : timing, vérité du motif, absence de pression, et conduite si la réserve refuse ou si aucune réserve n'existe plus (scénario A déjà exécuté)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le désistement du n°1 est un incident fréquent : autre offre, refus des conditions, changement de projet, délai trop long, parfois un fait grave découvert. Il n'autorise pas la panique, ni le maquillage. Si vous aviez un scénario C, vous rappelez la réserve avec la vérité : l'offre précédente n'a pas abouti, le poste est à pourvoir, nous souhaitons reprendre avec vous, voici les conditions. Si vous aviez exécuté A, vous n'avez plus de réserve « chaude ». Vous pouvez recontacter une personne clôturée, mais alors vous dites que le process avait été clos et qu'il se réouvre, pas que « on ne vous avait jamais dit non, c'était un quiproquo ».\n\nL'honnêteté porte sur le statut, pas sur les détails confidentiels du n°1. Vous ne divulguez pas son nom, son salaire, ses raisons intimes. « La finalisation avec l'autre profil n'a pas abouti » suffit. Vous ne dénigrez pas le n°1 pour valoriser la réserve. Vous ne dites pas « vous étiez de toute façon le meilleur, on s'est trompés » si ce n'est pas le discours réel : la réserve comprend qu'elle n'était pas l'offre n°1. Elle a le droit de le trouver désagréable. Elle a le droit de dire non. Votre job est de faire une offre réelle, maintenant, pas de réécrire le passé.\n\nLa réactivation n'est pas un droit de tirage. La personne a pu s'engager ailleurs. Toute pression (« on a besoin de vous dès lundi, c'est maintenant ou jamais, on se souviendra » ) est déplacée. Un délai d'offre, clair, comme pour le n°1. Les conditions (salaire, poste) ne se dégradent pas « parce que c'est le plan B » — ce serait une faute éthique, et parfois un indice de traitement inégal. Elles ne s'envolent pas non plus sans cadre : même politique de rémunération, module 14.\n\nSi le désistement a lieu pour un motif discriminatoire du manager (« en fait je ne veux plus d'une femme ») alors qu'une offre allait partir, vous n'enchaînez pas en réactivant l'autre sur le même motif. Vous escaladez (leçon 8). Réactiver Lina parce que Nadia est une femme n'est pas un plan B, c'est une discrimination."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Heure 0 : n°1 se désiste, écrit dans l'outil, RH informé, offre n°1 close. Heure +1 à +4 : appel puis e-mail à la réserve n°1, modèle ci-dessous, si C était en cours et la date pas dépassée trop largement. Si A déjà envoyé : appel de réouverture honnête, sans exigence de réponse dans l'heure.\n\nPréparer l'offre de la réserve avant d'appeler, au moins en fourchette validée. Appeler pour dire « on vous aime bien » sans offre, c'est recommencer un B.\n\nSi aucune réserve : information au manager, rerouverture de process, pas de chasse précipitée discriminatoire."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Nadia refuse l'offre (préavis et salaire). Le jour même, appel à Lina, toujours en C jusqu'au vendredi. Vérité, offre validée le lendemain, même grille, pédagogie à accompagner (plan d'intégration, pas baisse de salaire). Lina demande 48 h. Accord. Elle accepte. Le CR interne note le désistement de Nadia sans commentaire de sexe ou d'âge."
            },
            {
              "block_type": "code",
              "content": "MESSAGE TYPE — RÉACTIVATION HONNÊTE D'UNE RÉSERVE\nAppel d'abord, puis e-mail de confirmation.\n\nBonjour [Prénom],\n\nJe vous contacte au sujet du poste de chargé / chargée de clientèle,\nagence de Lyon Part-Dieu.\n\nComme indiqué le [date], un autre profil était en cours de finalisation.\nCette finalisation n'a pas abouti. Le poste reste à pourvoir.\n\nNous souhaitons maintenant vous proposer de passer à l'étape d'offre.\nNous ne vous avions pas fait d'offre jusqu'ici ; nous ne réécrivons pas\ncette chronologie. Si vous êtes toujours intéressé(e), nous pouvons\n[vous présenter une offre orale le ... / vous envoyer une offre écrite\n demain], avec un délai de réponse jusqu'au [date].\n\nVous êtes libre de décliner. Cela n'affectera pas un éventuel contact\nfutur sur un autre poste.\n\nCordialement,\n[Nom]\n\nSI LA PERSONNE AVAIT DÉJÀ REÇU UN REFUS (scénario A)\n« Nous vous avions indiqué une clôture le [date]. Le besoin s'est\nrouvert. Nous vous recontactons de façon distincte, sans obligation\nde votre côté. »"
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Appeler en disant « tout le monde vous préférait, c'est Nadia qui a fait capoter ». Baisse de salaire « plan B ». Exiger une réponse dans la soirée. Mentir : « en fait vous étiez n°1 depuis le début »."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Deux réserves encore actives : ordre interne préexistant, une offre à la fois, pas deux promesses parallèles. Désistement après signature : circuit RH (préavis, rétractation, éventuellement contentieux) ; le junior ne « bricole » pas un contrat. Il peut réactiver un vivier avec honnêteté, sous pilotage RH."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Lina dit : « Je veux bien, mais seulement si vous m'assurez par écrit que j'étais le premier choix. » Que répondez-vous ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vous refusez de falsifier. « Nous ne pouvons pas écrire cela, ce ne serait pas exact. Vous n'étiez pas la personne à qui la première offre a été adressée. Nous vous adressons maintenant une offre réelle, aux conditions [X]. Vous pouvez l'accepter ou la refuser sur cette base. » Si Lina refuse, vous respectez. Un écrit faux est plus dangereux qu'un poste vacant (lien possible avec une promesse, module 14, et faute éthique)."
            }
          ],
          "position": 6
        },
        {
          "title": "Désaccord recruteur / manager et pression discriminatoire",
          "description": "Argumenter sur des preuves, documenter, escalader, et refuser d'exécuter une décision d'écart fondée sur un critère protégé.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 24,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez distinguer un désaccord métier légitime d'une injonction illicite, argumenter sans attaquer la personne du manager, tracer, et saisir votre responsable lorsque l'on vous demande d'écarter ou de choisir pour un motif discriminatoire."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le recruteur et le manager n'ont pas le même rôle, donc ils peuvent diverger. Un désaccord sur le poids d'une compétence, sur le caractère formable d'un écart, sur le scénario A ou C, est normal. Il se résout par les faits, la fiche de poste, parfois l'arbitrage RH. Un désaccord sur « on ne prend pas les [origine / femmes / seniors / personnes en situation de handicap / personnes du quartier] » n'est pas un désaccord métier. C'est une demande de discrimination à l'embauche, interdite (L. 1132-1). Votre juniorité n'est pas une excuse pour exécuter. Vous ne « comprenez les contraintes de l'équipe » en écartant une personne pour un critère protégé.\n\nArgumenter sur preuves, ce n'est pas humilier le manager en réunion publique. C'est : rappeler le critère écrit, lire le fait d'entretien, proposer une suite (second entretien, épreuve informée). Si le manager maintient un feeling contraire aux preuves, vous tracez : « Décision manager : X, malgré note éthique 1 / malgré absence de preuves. Avis recrutement : réserve / défavorable. » Cette trace n'est pas une mutinerie. C'est la mémoire du process. En cas de contentieux, un dossier vide ou un dossier qui reprend le motif illicite est un risque majeur. Un dossier qui montre que le recruteur a recadré protège l'entreprise — et vous.\n\nSi le manager reformule un motif illicite en faux motif professionnel (« pas le fit », « pas assez dynamique ») alors que la séance a porté sur l'âge ou la famille, vous refusez la reformulation cosmétique. Vous nommez ce qui a été dit, vous proposez le critère professionnel réel s'il existe (horaires, habilitation), appliqué à tous. Si rien de professionnel ne reste, vous n'écrivez pas « fit » pour couvrir.\n\nL'escalade : votre responsable recrutement ou RH, faits, citations, dates. Vous n'envoyez pas un e-mail vindicatif à toute la direction. Vous n'en parlez pas au candidat (« votre manager est sexiste ») : ce n'est pas votre canal, et cela peut aggraver. Le candidat a des voies (défenseur des droits, justice) que vous n'avez pas à piloter. Votre devoir immédiat : ne pas commettre l'acte, ne pas falsifier la shortlist, ne pas envoyer un refus dont le motif réel est illicite.\n\nUn manager peut légitimement préférer Nadia à Lina sur des preuves. Vous défendez Lina seulement si les preuves le justifient, pas par esprit de contradiction. Le contraire du copinage, c'est la grille, pas l'anti-manager systématique."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "En séance : « Je reformule le motif. Est-ce bien [fait professionnel] ? Si le motif est [critère protégé], nous ne pouvons pas l'utiliser. » Pause. Proposition d'alternative. Si maintien illicite : « Je ne peux pas exécuter cette instruction. Je saisis [RH]. Nous suspendons la communication candidat. »\n\nÉcrit du jour : mail factuel à votre responsable, copie selon règles internes, sans copie au manager si la procédure interne prévoit un canal confidentiel — suivez l'employeur. Pas de dossier parallèle chez vous sur une messagerie perso.\n\nCandidats : pas de message de refus tant que l'instruction illicite n'est pas levée. Un silence de 24 à 48 h le temps d'arbitrer vaut mieux qu'un e-mail discriminatoire. Puis actualisation de délai si besoin."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Le directeur d'agence : « Nadia c'est non, elle va vouloir des enfants, prends Karim. » Recruteur : rappel L. 1132-1, Karim a un 1 éthique, Nadia a les preuves. Suspension. RH revoit le directeur. Décision : Karim n'est pas offert. Nadia reste n°1. L'e-mail interne du recruteur décrit les propos, sans injure. Le process reprend en C vis-à-vis de Lina, sans exposer Nadia."
            },
            {
              "block_type": "code",
              "content": "TRACE INTERNE — DÉSACCORD (modèle factuel)\nDate :\nPoste :\nManager :\nRecruteur :\n\nFaits d'évaluation : [notes, extraits]\nDécision demandée par le manager :\nMotif oral indiqué :\nRappel recadrage (L. 1132-1 / L. 1221-6) :\nAvis recrutement :\nAction : suspension des messages candidats / saisine RH\nCommunication candidat : aucune / actualisation de délai le …\n\nÀ NE PAS ÉCRIRE\n« Le manager est un idiot. » / « On va la prendre quand même en cachette. »\nMotif ATS : « pas le profil familial »."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Exécuter puis « ce n'est pas moi, c'est le manager ». Mentir au candidat sur le motif. En parler au déjeuner de l'open space. Menacer le manager d'un procès. Céder sur Karim malgré le 1 éthique pour « garder une relation »."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Client d'un cabinet qui exige un sexe ou un âge : refus du mandat discriminatoire, hiérarchie cabinet, pas de shortlist filtrée en secret.\n\nVous avez déjà envoyé un message A pour un motif que vous découvrez illicite après coup : saisine RH immédiate, pas de second e-mail bricolé seul.\n\nVous êtes d'accord avec le manager sur Nadia, pour des preuves : écrivez les preuves, pas « enfin un choix de bon sens »."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le manager accepte Nadia, mais : « Lina, refuse-la tout de suite (A), elle habite loin, ça va être les transports, et puis elle est trop jeune, on garde seulement Nadia silencieuse jusqu'à la signature (B muet). » Identifiez chaque problème et votre conduite."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Problèmes : lieu de résidence et âge = critères protégés, A ne peut pas s'appuyer là-dessus ; B muet = mauvaise pratique. Conduite : Nadia peut être n°1 sur preuves. Lina, si employable, est réserve : scénario C, pas A fondé sur l'âge ou l'adresse. Horaires et lieu de travail du poste se confirment de façon professionnelle, pour tous. B muet refusé. Trace + RH si le manager maintient l'écart de Lina pour l'âge ou le logement. Aucun e-mail de refus tant que le motif n'est pas professionnel."
            },
            {
              "block_type": "callout",
              "content": "Vous n'exécutez pas une discrimination même si le manager « insiste ». Ce n'est pas une option de carrière. Sources : L. 1132-1, L. 1221-6. Vérification : 13/10/2026."
            }
          ],
          "position": 7
        },
        {
          "title": "Quiz — Shortlist, décision et choix final",
          "description": "Shortlist, trois finalistes, scénarios A/B/C, désistement, désaccord, mensonge de statut.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 16,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Répondez à chaque question. En cas d'échec, relisez le module puis retentez. Les questions juridiques essentielles exigent une justification : lisez toujours l'explication après validation."
            }
          ],
          "quiz": {
            "title": "Quiz — Shortlist, décision et choix final",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Une shortlist professionnelle contient :",
                "question_type": "single_choice",
                "options": [
                  "A. Toutes les personnes vues, pour faire du volume.",
                  "B. Uniquement des personnes que l'on est prêt à embaucher au regard du poste, en nombre restreint, avec des preuves comparables.",
                  "C. Un faire-valoir volontairement trop faible pour faire briller le favori.",
                  "D. Des photos pour aider le manager à se souvenir."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "La figuration et les photos (apparence) sont des fautes. La shortlist est un ensemble d'employables, pas un catalogue."
              },
              {
                "question": "« Nous avons trois finalistes. Le manager en choisit un. Faut-il refuser immédiatement les deux autres ou attendre que le premier ait accepté et signé ? » La réponse de ce cours est :",
                "question_type": "single_choice",
                "options": [
                  "A. La loi impose toujours le refus immédiat le jour même.",
                  "B. La loi impose toujours d'attendre la fin de la période d'essai.",
                  "C. Il n'y a pas d'obligation légale unique ; A, B et C sont des choix de process, avec des risques différents ; mentir sur le statut est interdit comme pratique.",
                  "D. On dit aux trois qu'ils sont retenus, par sécurité."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "C'est le cœur du module. Pas d'article unique dans nos sources qui dicte le moment. Politique interne possible. Interdit : « vous êtes retenu » à faux."
              },
              {
                "question": "Le principal risque opérationnel du scénario A (refus immédiat des réserves) est :",
                "question_type": "single_choice",
                "options": [
                  "A. L'obligation légale de conserver les réserves cinq ans en base active.",
                  "B. De se retrouver sans candidat si le n°1 se désiste, alors que les réserves ont été fermées.",
                  "C. La discrimination automatique.",
                  "D. L'interdiction de remercier les personnes."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "A est clair pour les personnes, mais le filet disparaît. La conservation 5 ans concerne l'archivage probatoire (L. 1134-5 / CNIL), pas une base active de réserves. A n'est pas discriminatoire en soi ; il le devient s'il s'appuie sur un critère protégé."
              },
              {
                "question": "Le scénario B muet (attendre la signature sans rien dire) est :",
                "question_type": "single_choice",
                "options": [
                  "A. Une obligation légale de prudence.",
                  "B. Une pratique à risque : mauvaise expérience, perte des réserves, délai déraisonnable, tentation de mensonge. S'il est imposé, il doit être rapproché de C (dates, vérité).",
                  "C. La seule façon d'éviter toute discrimination.",
                  "D. Recommandée jusqu'à la fin de période d'essai, toujours."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "B n'est pas illégal par nature, mais B muet est une mauvaise pratique. La fin d'essai comme terme improvisé n'est pas une bonne pratique junior."
              },
              {
                "question": "Quelle phrase correspond au scénario C ?",
                "question_type": "single_choice",
                "options": [
                  "A. « Vous êtes retenu, bravo, on signe la semaine prochaine — enfin, presque, on a quelqu'un d'autre aussi. »",
                  "B. « Un autre profil est en cours de finalisation ; votre candidature n'est pas écartée ; nous revenons avant le [date] ; vous n'avez pas d'offre aujourd'hui. »",
                  "C. « Sans nouvelles de notre part d'ici trois mois, relancez. »",
                  "D. « On a choisi quelqu'un de plus jeune, restez dispo. »"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "C = vérité du statut + date + liberté du candidat. A mélange mensonge et confusion. D est illicite (âge). Le silence de trois mois est un B déraisonnable."
              },
              {
                "question": "Une politique interne de délai maximal de réserve :",
                "question_type": "single_choice",
                "options": [
                  "A. Est une loi française unique à 10 jours.",
                  "B. Peut imposer un terme (bonne pratique d'employeur), distincte d'une obligation légale générale ; le junior ne la prolonge pas seul cinq fois.",
                  "C. Interdit le scénario C.",
                  "D. Autorise à dire « retenu » pour tenir jusque-là."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Exemple pédagogique de 10 jours dans le cours, pas un article de loi. La politique protège contre le B infini. Elle n'autorise pas le mensonge."
              },
              {
                "question": "Dire « vous êtes retenu(e) » à une réserve pour qu'elle attende :",
                "question_type": "single_choice",
                "options": [
                  "A. Est une astuce de sourcing recommandée.",
                  "B. Est un mensonge de statut, interdit comme pratique ; peut en plus créer un risque de qualification d'engagement (module 14).",
                  "C. Est obligatoire pour rester poli.",
                  "D. Est le scénario C."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "C dit précisément que la personne n'est pas retenue au sens d'une offre. Le mensonge n'est pas de la politesse. Le module 14 montrera le risque offre / promesse."
              },
              {
                "question": "Le n°1 se désiste. Vous aviez un scénario C en cours. Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Réactivez la réserve en prétendant qu'elle était n°1 depuis le début.",
                  "B. Dites la vérité (la finalisation n'a pas abouti), proposez une offre réelle, sans pression et sans baisser les conditions « parce que plan B ».",
                  "C. Ghostez la réserve, trop compliqué.",
                  "D. Prenez Karim malgré un 1 éthique, plus vite."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L'honnêteté de chronologie est non négociable. Le 1 éthique ne redevient pas un 3 par urgence. Le ghosting n'est pas une sortie."
              },
              {
                "question": "Vous aviez déjà envoyé un refus A. Le n°1 part. Recontacter la personne :",
                "question_type": "single_choice",
                "options": [
                  "A. Est interdit à jamais.",
                  "B. Est possible en disant que le process avait été clos et qu'il se réouvre, sans nier le refus passé.",
                  "C. Doit se faire en niant l'e-mail de refus (« bug informatique »).",
                  "D. Se fait via le manager qui écrit « on t'avait choisi »."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "A a un coût : la personne n'est plus « chaude » et a reçu un non. On peut réouvrir, pas réécrire l'histoire."
              },
              {
                "question": "Le manager demande d'écarter une finaliste parce qu'elle « va avoir des enfants ». Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Exécutez, c'est lui le décideur métier.",
                  "B. Reformulez en « pas le fit » dans l'ATS pour protéger l'entreprise.",
                  "C. Refusez d'exécuter, rappelez L. 1132-1, suspendez les messages, saisissez RH, tracez les faits.",
                  "D. Prévenez la candidate en lui disant que son manager est illégal, sur LinkedIn."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Ni exécution, ni cosmétique, ni dénonciation publique improvisée. Recadrage, suspension, escalade, trace. La grossesse / situation de famille est un critère protégé."
              },
              {
                "question": "Appliquer le scénario A à une personne et le scénario B chaleureux à une autre, selon l'origine ou le sexe :",
                "question_type": "single_choice",
                "options": [
                  "A. Est une subtilité de process.",
                  "B. Est un traitement inégal qui peut constituer une discrimination (L. 1132-1).",
                  "C. Est recommandé par la CNIL.",
                  "D. Est obligatoire si les salaires demandés diffèrent."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "A/B/C se choisissent comme politique de campagne, pas comme filtre de personnes protégées. Un écart de prétention salariale ne justifie pas un scénario discriminatoire."
              },
              {
                "question": "Quelle combinaison est la plus défendable pour un junior, par défaut ?",
                "question_type": "single_choice",
                "options": [
                  "A. Dire aux trois finalistes qu'ils ont le poste, puis voir.",
                  "B. Offre réelle au n°1 ; scénario C daté aux réserves employables ; jamais de critère illicite ; politique de délai max interne ; réactivation honnête en cas de désistement.",
                  "C. B muet jusqu'à la fin d'essai, sans RH.",
                  "D. A immédiat sur un profil rare, sans expliquer le risque de vide au manager."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "C'est la doctrine opérationnelle du module : pas d'obligation légale unique, une bonne pratique claire, des risques nommés, un interdit de mensonge, un cadre anti-discrimination."
              }
            ]
          },
          "position": 8
        }
      ]
    },
    {
      "position": 14,
      "title": "Formuler une offre et négocier",
      "description": "Valider la rémunération, construire et présenter une offre, distinguer offre et promesse unilatérale, négocier dans une enveloppe, escalader au-delà, sans rédiger une promesse sans les RH.",
      "lessons": [
        {
          "title": "Valider la rémunération avant d'ouvrir la bouche",
          "description": "S'aligner sur la politique interne, la fourchette du poste, l'équité, et ce que le droit français n'impose pas encore dans l'annonce.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez obtenir une fourchette validée avant toute offre, distinguer politique interne, bonne pratique et droit (dont la directive européenne sur la transparence salariale, en transposition), et refuser d'improviser un chiffre en séance."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Une offre sans rémunération validée n'est pas une offre, c'est une conversation. Le recruteur junior n'invente pas un salaire « pour conclure ». Il part d'une politique interne : fourchette du poste, positionnement selon l'expérience, variable, avantages, règles d'exception. Cette politique n'est pas dans le Code du travail sous la forme d'un barème unique national des CDI de chargé de clientèle. Elle est un acte d'employeur. L'équité interne (ne pas proposer 8 k€ d'écart à poste égal sans motif professionnel) est une bonne pratique, et un enjeu de cohésion ; elle se relie aussi, à terme, aux exigences européennes de transparence. Au 13/10/2026, indiquer le salaire dans l'offre d'emploi n'est pas présenté par Service-Public comme une obligation interne française déjà consolidée : une directive européenne (UE 2023/970) impose une information sur la rémunération ou une fourchette dans l'offre ; la transposition est en cours. Vous n'affirmez pas que « c'est déjà obligatoire en France » sans vérifier le texte de transposition en vigueur le jour J. Vous pouvez, en bonne pratique, travailler avec des fourchettes dès maintenant, si l'employeur l'autorise.\n\nValider la rémunération, c'est aussi éviter deux fautes. La première : utiliser le sexe, l'âge, la situation de famille ou l'origine pour « caler » le chiffre (L. 1132-1). Une femme ne « coûte pas moins ». Un senior n'est pas « trop cher » par principe d'âge. La deuxième : reprendre la prétention du candidat comme seule boussole. Une prétention éclaire un dialogue ; elle ne viole pas le plafond de la fourchette, et elle ne justifie pas de sous-payer quelqu'un qui s'ignore.\n\nAvant l'offre, vous avez par écrit : salaire brut annuel (ou mensuel, selon usage), variable (objectifs, plafonds, non garanti si c'est le cas), avantages (tickets, mutuelle, intéressement, véhicule, télétravail), lieu, temps de travail, type de contrat, date de prise de poste visée, période d'essai envisagée selon le cadre RH, préavis de départ du candidat. Sans ce paquet, vous négociez dans le vide.\n\nLe junior a une enveloppe : un plancher, un plafond, parfois un geste (prime, RTT, date). Au-delà, escalation. Cette discipline n'est pas de la timidité. C'est ce qui évite une promesse orale hors cadre, plus tard difficile à retirer."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Fiche d'offre interne, signée manager + RH (ou process ATS) : fourchette, cible pour ce n°1, plafond, variable, avantages, date, essai. Vous n'appelez pas le candidat tant que cette fiche n'existe pas.\n\nVérifier l'équité : deux personnes au même poste, écarts justifiés par des faits (expérience, délégation), pas par le genre.\n\nSi le candidat a annoncé une prétention hors fourchette en préqualification : alerter avant de le passer n°1, pas le jour de l'offre."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "ETI, poste de chargé de clientèle. Fourchette interne 28-32 k€ brut, variable d'agence non garanti. Nadia visée à 31 k€. Le directeur dit « promets 35, on verra ». Le recruteur refuse : hors enveloppe, inéquitable avec l'équipe à 30-32, et parole non retravaillable. Escalade RH. Décision : 32 k€ plafond, plus tutorat produits, pas 35 improvisé."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Annoncer une fourchette basse pour « se garder de la marge », perçue ensuite comme une tromperie. Demander le salaire actuel pour calquer, surtout si cela fige des écarts discriminatoires. Dire « l'État nous interdit de mettre le salaire dans l'annonce » ou l'inverse « c'est déjà obligatoire » sans vérification du jour J."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Cabinet : le salaire est celui du client, validé par le client, pas un chiffre consultant. Intérim : taux / coefficient selon grilles, pas une négo libre de junior. Package international : RH/paie, pas d'invention d'expatriation."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le manager : « Demande-lui ce qu'elle gagne aujourd'hui, on proposera 5 % de plus, comme ça on n'est pas cher, surtout si elle est jeune. » Recadrez en quatre points."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1) L'âge n'entre pas dans le chiffre (L. 1132-1). 2) La politique du poste (fourchette 28-32) prime sur un +5 % mécanique, qui peut sous-payer ou dépasser. 3) Le salaire actuel est une donnée sensible ; s'il est demandé, c'est selon politique interne, lien avec l'emploi, sans s'en servir pour discriminer — la directive transparence vise précisément à réduire la dépendance au salaire antérieur ; n'en faites pas votre boussole unique. 4) Aucune offre tant que la fiche n'est pas validée. Escalade si le manager maintient « surtout si elle est jeune »."
            }
          ],
          "position": 0
        },
        {
          "title": "Construire le contenu de l'offre",
          "description": "Assembler un paquet complet, cohérent avec la fiche de poste, sans avantages fantômes et sans clause inventée par le junior.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez lister les éléments d'une offre professionnelle, vérifier chacun auprès des RH, et écarter les mentions que vous n'avez pas le droit de rédiger seul (promesse, clauses contractuelles sensibles)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "L'offre que vous présentez doit coller à l'emploi réel : intitulé, lieu, temps de travail, rattachement, missions principales, rémunération, avantages, type de contrat, date visée, période d'essai selon le cadre fourni par les RH, processus d'acceptation, délai de réponse. Ce qui n'est pas encore décidé n'entre pas comme une certitude. Un « on verra le télétravail » promis à l'oral et absent du contrat est une source de conflit, et un écart avec l'esprit de L. 5331-3 (ne pas induire en erreur sur l'emploi, la rémunération, le lieu).\n\nLe junior assemble, il ne crée pas le droit. La période d'essai, les clauses de non-concurrence, la propriété intellectuelle, les variables complexes : tout cela se copie depuis le modèle RH, ou ne se dit pas. Inventer une clause « pour rassurer » est plus dangereux que de dire « je fais vérifier ». De même, vous n'écrivez pas « promesse d'embauche » sur un e-mail d'enthousiasme. La leçon suivante explique pourquoi.\n\nLe paquet comprend aussi le délai d'acceptation. Un délai clair (par exemple 5 jours ouvrés, politique interne, pas un délai légal unique à inventer) protège les deux parties : le candidat décide, l'entreprise sait quand elle passe en scénario C vis-à-vis des réserves (module 13). Un « répondez quand vous voulez » rend le scénario C ingérable.\n\nLes avantages s'écrivent en conditions réelles : mutuelle selon régime, variable selon un plan qui existe, intéressement selon accord. Vous ne garantissez pas un variable comme un fixe. Vous ne présentez pas un « 40 k€ » qui additionne un fixe de 30 et un variable max théorique de 10 jamais atteint par personne du réseau."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Modèle interne d'offre (e-mail ou PDF RH). Checklist : parties, poste, lieu, contrat, temps, date, essai (formulation RH), fixe, variable (caractère, base), avantages, délai d'acceptation, contact, mention « sous réserve de [conditions réellement prévues : pièces, DPAE côté employeur, etc.] » seulement si le RH l'a écrite.\n\nRelire avec la fiche de poste et l'annonce. Écart = correction avant envoi, pas « on expliquera ».\n\nCopie manager + RH avant le candidat, sauf délégation déjà donnée sur un modèle figé."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "PME, offre d'un commercial sédentaire. Le manager veut écrire « 36 k€ + 10 de prime ». Le recruteur exige le plan de commission écrit. Le plan montre un variable moyen de 3, un max de 8. L'offre parle de 36 k€ fixe + variable selon plan joint, sans addition magique 46. Le candidat compare ce qui est comparable."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Oublier le lieu ou les samedis. Promettre une évolution de poste à 12 mois. Joindre un contrat complet que vous avez modifié seul. Mettre « CDI confirmé, pas d'essai » alors que les RH n'ont pas validé."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Remplacement de congé : le besoin peut être durable ou non ; vous ne transformez pas un CDD en CDI à l'oral. Mobilité interne : l'offre peut être un avenant, circuit RH, pas un e-mail junior isolé. Mineur, étranger soumis à autorisation : circuit RH, pas d'offre bricolée."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Listez 12 mentions du paquet d'offre pour Nadia, et 3 mentions que vous refusez d'ajouter seul (« promesse d'embauche irrévocable », « pas d'essai », « 40 k€ all inclusive »)."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Mentions : intitulé ; agence Lyon Part-Dieu ; CDI temps plein ; horaires d'agence ; rattachement directeur ; missions alignées fiche ; 32 k€ brut annuel ; variable d'agence selon plan, non garanti ; avantages existants ; date visée ; essai selon modèle RH ; délai d'acceptation ; contact. Refus : intitulé « promesse irrévocable » (leçon suivante, RH/juridique) ; suppression d'essai non validée ; 40 k€ qui mélange fixe et max de variable. DPAE : obligation de l'employeur avant embauche (Service-Public F23107 / Urssaf), le junior coordonne, il n'écrit pas qu'elle est « optionnelle »."
            }
          ],
          "position": 1
        },
        {
          "title": "Offre de contrat et promesse unilatérale : ne pas confondre",
          "description": "S'appuyer sur Service-Public F39588 (vérifié le 12/03/2026) et la Cass. soc. 21 septembre 2017 : le junior ne rédige pas une « promesse » sans RH/juridique.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 26,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous distinguerez offre de contrat et promesse unilatérale de contrat de travail selon le cadrage de Service-Public, vous saurez pourquoi le retrait n'a pas le même effet, et vous appliquerez une règle opérationnelle : jamais de document intitulé ou rédigé comme une promesse sans les RH ou le juridique."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Beaucoup de recruteurs disent « promesse d'embauche » pour n'importe quel e-mail positif. Ce langage est imprécis et dangereux. Service-Public Entreprendre, fiche F39588, vérifiée le 12 mars 2026, explique que les notions d'offre de contrat de travail et de promesse unilatérale de contrat de travail ne sont pas définies par la loi, mais encadrées par la jurisprudence. Sont notamment citées les décisions de la Cour de cassation, chambre sociale, du 21 septembre 2017, n° 16-20.103 et 16-20.104. Une promesse d'embauche n'est pas obligatoire pour embaucher.\n\nSelon ce cadrage : une offre de contrat peut, sous conditions, être retirée avant acceptation, dans le délai laissé au candidat pour accepter ou, à défaut, dans un délai raisonnable. Une promesse unilatérale, elle, vaut contrat : le bénéficiaire n'a plus qu'à lever l'option. Si l'employeur retire une promesse unilatérale, le retrait s'analyse en licenciement sans cause réelle et sérieuse. Autrement dit, le mot que vous mettez dans un e-mail, et surtout les engagements que vous formulez (emploi, rémunération, date, caractère irrévocable, « nous nous engageons définitivement », « vous n'avez plus qu'à confirmer votre accord »), peuvent faire basculer la qualification. Ce cours n'ajoute pas d'autre arrêt. Il n'invente pas de montant d'indemnité. Il vous demande la prudence.\n\nConséquence opérationnelle pour un junior : vous ne rédigez pas un document intitulé « promesse d'embauche », « promesse unilatérale », « engagement irrévocable ». Vous n'imitez pas un contrat. Vous utilisez le modèle d'offre validé par les RH, souvent présenté comme une offre de contrat de travail, avec un délai d'acceptation, des éléments essentiels, sans formules d'irrévocabilité que vous n'avez pas fait relire. Si un manager dicte « envoie-lui une promesse pour le bloquer », vous escaladez. Bloquer un candidat se fait par une offre réelle, un délai, et de l'honnêteté, pas par un acte juridique que vous ne maîtrisez pas.\n\nRetirer une offre n'est pas un geste anodin pour autant. Même lorsque le retrait d'une offre (non encore acceptée, dans le délai) est possible selon le cadrage F39588, il reste un acte d'employeur, souvent mal vécu, parfois contesté sur d'autres fondements (discrimination, exécution de mauvaise foi, propos). Un junior ne retire pas seul une offre « parce que le manager a changé d'avis sur l'âge ». Il saisit les RH. Après acceptation, vous n'êtes plus dans le simple retrait d'offre : le contrat peut être formé. Encore une fois : vous n'arbitrez pas seul la qualification. Vous évitez de créer le problème.\n\nUne acceptation se date. Un « super, merci » sur SMS peut, selon le contexte, être discuté comme acceptation. D'où l'intérêt d'un process : offre écrite, acceptation écrite, puis contrat RH. Vous n'ajoutez pas « c'est bon, tu commences lundi, on verra le papier »."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Lexique interne : on dit « offre », on ne dit pas « promesse » à l'oral au candidat. Modèle RH uniquement. Toute demande de « bloquer par un papier » = RH/juridique.\n\nDélai d'acceptation écrit. Relance à J-1. Si dépassement : vous ne supposez pas l'acceptation ; vous écrivez, puis, avec les RH, vous décidez du sort de l'offre (prolongation, caducité selon le modèle, passage aux réserves en C).\n\nRetrait envisagé : stop, RH. Motif professionalisé. Pas de motif L. 1132-1. Pas de mail junior improvisé « on retire la promesse »."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Startup, le fondateur envoie un texto : « Promesse d'embauche CDI 45 k, tu es in, on est trop contents, irrévocable de notre côté. » Le recruteur junior fait stopper, oriente vers le modèle d'offre RH, explique F39588 au fondateur en une minute : le mot et l'irrévocabilité, ce n'est pas un détail de com. Un e-mail d'offre standard part le lendemain, délai 5 jours, sans « irrévocable »."
            },
            {
              "block_type": "code",
              "content": "CE QUE LE JUNIOR N'ENVOIE PAS (contre-exemple)\nObjet : Promesse unilatérale d'embauche irrévocable\n« Nous nous engageons de façon définitive et irrévocable à vous embaucher\nen CDI le 2 novembre, 38 k€, vous n'avez plus qu'à lever l'option.\nToute rétractation de notre part vaudra licenciement. »\n\nPOURQUOI : vocabulaire et mécaniques de promesse unilatérale, hors rôle,\nhors modèle, risque de qualification. Cass. soc. 21/09/2017 citée par\nF39588 (12/03/2026). Pas de rédaction solo.\n\nCE QUE LE JUNIOR ENVOIE (esprit — coller au modèle RH employeur)\nObjet : Offre de contrat de travail — Chargé de clientèle — Lyon Part-Dieu\n« À la suite de nos échanges, nous vous adressons une offre de contrat\nde travail pour le poste de […], éléments ci-dessous. Cette offre est\nvalable jusqu'au [date]. Merci de nous notifier votre acceptation écrite\nà [e-mail] avant cette date. Le contrat de travail sera établi par les\nRH après acceptation. »\n\nPas de mot « promesse ». Pas d'« irrévocable » ajouté par le junior."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Copier un modèle internet « promesse d'embauche ». Rassurer en disant « c'est comme un contrat déjà ». Retirer une offre par SMS parce que le n°2 plaît davantage. Célébrer une acceptation orale sans confirmer par écrit."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Le juridique de l'entreprise utilise encore l'expression « promesse d'embauche » dans un modèle contrôlé : vous suivez le modèle interne, vous ne le réinventez pas. L'interdit porte sur l'initiative junior hors cadre.\n\nOffre retirée avant acceptation dans le délai : RH pilote le message, vous informez éventuellement une réserve selon le module 13, sans insulter le n°1.\n\nCandidat qui a signé un document ambigu : vous ne « qualifiez » pas, vous transmettez au juridique."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le manager : « Envoie une promesse pour le coller, on pourra toujours se dédire si le CODIR refuse le budget vendredi. » Rédigez votre refus et l'alternative."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Refus : « Je n'envoie pas de promesse unilatérale. Selon le cadrage Service-Public F39588 (12/03/2026) et la Cass. soc. 21 septembre 2017, une promesse unilatérale vaut contrat ; un retrait s'analyse en licenciement sans cause réelle et sérieuse. Ce n'est pas un outil pour attendre un CODIR. » Alternative : soit le budget est validé et j'envoie une offre RH avec délai jusqu'à lundi ; soit nous restons en scénario C vis-à-vis du candidat (« finalisation interne, retour avant vendredi ») sans dire qu'il est embauché. Mentir « vous êtes retenu, papier irrévocable » alors que le budget n'existe pas est une faute."
            },
            {
              "block_type": "callout",
              "content": "Source unique à citer ici : SP-F39588, vérifiée le 12/03/2026 ; Cass. soc. 21 septembre 2017, n° 16-20.103 et 16-20.104. Une promesse d'embauche n'est pas obligatoire. Le junior ne rédige pas de promesse hors RH/juridique. Vérification du dossier de formation : 13/10/2026."
            }
          ],
          "position": 2
        },
        {
          "title": "Présenter l'offre à l'oral et par écrit",
          "description": "Conduire l'appel d'offre, envoyer le support, laisser un délai, et rester aligné mot à mot avec le papier.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez structurer un appel d'offre de 15 à 20 minutes, envoyer le écrit dans la foulée, répondre aux questions sans élargir l'enveloppe, et clôturer sans pression déloyale."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "L'offre s'annonce, elle ne se glisse pas dans un SMS à 22 h. L'oral sert à la clarté et au respect ; l'écrit fige les éléments. Les deux doivent dire la même chose. Un oral plus généreux que l'e-mail est une faute (attente, possible discussion sur l'engagement). Un e-mail plus généreux que l'oral surprend le manager. Vous lisez votre fiche d'offre avant d'appeler.\n\nL'appel n'est pas une négo immédiatement ouverte à tous les vents. Vous présentez le paquet, vous vérifiez la compréhension, vous indiquez le délai, vous proposez un temps de questions. Si le candidat négocie dans la minute, vous pouvez traiter ce qui est dans l'enveloppe (leçon suivante) ou reporter : « Je note votre demande, je reviens avant demain 12 h. » Reporter est souvent plus sûr qu'accorder dans l'élan.\n\nLe ton : factuel, courtois, sans « tu as gagné ». La personne n'a pas encore accepté. Vous ne dénigrez pas son employeur actuel. Vous ne mentez pas sur les réserves (« on n'a que vous ») si C est en cours. Vous pouvez dire, si c'est vrai, que le process avance avec une date, sans exposer nominativement autrui.\n\nAprès l'écrit : pas de relance toutes les heures. Une relance à J-1 du délai. Si le candidat pose des questions de contrat pointues, RH. Si le candidat demande un document « promesse », vous expliquez que l'entreprise adresse une offre de contrat selon son modèle, pas un acte junior."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Avant : fiche validée, créneau, lieu calme. Pendant : félicitations mesurées, poste, paquet, délai, questions, reformulation des points ouverts. Après : e-mail dans l'heure, copie process, ATS « offer sent », rappel agenda, message C aux réserves si politique C (module 13).\n\nScript d'ouverture : « Nous souhaitons vous adresser une offre de contrat pour [poste]. Je vous en présente les éléments, un écrit suit. Vous n'avez pas à répondre à l'instant. »"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Nadia, 18 minutes. Le recruteur déroule 32 k€, variable selon plan, date 2 novembre, essai selon modèle, délai jusqu'au 29 octobre 18 h. Nadia demande le télétravail 3 jours. Hors fiche. « Ce n'est pas dans l'offre d'aujourd'hui ; je consulte ; je ne vous le promets pas à l'oral. » E-mail sans télétravail. Le directeur confirme plus tard 1 jour : avenant d'offre, pas un souvenir d'appel."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Appeler en visio dans l'open space. Dire « le contrat est déjà gagné ». Oublier d'envoyer l'écrit. Envoyer l'écrit avec un autre salaire que l'oral. Presser « il faut me dire ce soir, sinon on prend l'autre » si ce n'est pas le process réel — et même si une réserve existe, la formulation reste honnête (C), pas un ultimatum fictif."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Candidat qui enregistre l'appel : politique interne, rester factuel, l'écrit prime. Candidat à l'étranger / décalage : délai d'acceptation adapté, fuseau dans l'e-mail. Offre en présentiel : même script, papier remis, copie e-mail."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Rédigez le plan de l'appel d'offre (8 puces) et la première phrase de l'e-mail, sans le mot « promesse »."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Puces : contexte poste ; intitulé et lieu ; contrat et temps ; date visée ; fixe ; variable et caractère ; avantages ; essai (formule RH) ; délai et modalité d'acceptation écrite ; questions. Première phrase : « Suite à notre échange de ce jour, vous trouverez ci-dessous notre offre de contrat de travail pour le poste de chargé / chargée de clientèle, agence de Lyon Part-Dieu, valable jusqu'au [date]. »"
            }
          ],
          "position": 3
        },
        {
          "title": "Négocier dans l'enveloppe, escalader au-delà, traiter contre-offre et refus",
          "description": "Tenir un plafond, faire remonter une demande, répondre à une contre-offre externe, et clôturer un refus sans rancune ni mensonge.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez mener une négociation courte, utiliser l'enveloppe (salaire, date, avantages déjà prévus), stopper dès le plafond, escalader par écrit, et réagir à une contre-offre sans surenchère émotionnelle."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Négocier n'est pas « gagner » contre le candidat. C'est chercher un accord dans un cadre. L'enveloppe existe pour cela : par exemple +1 k€, une date de départ, un matériel, pas un changement de poste. Au-delà, vous n'inventez pas. Vous dites : « Je n'ai pas délégation au-delà de [X]. Je transmets à [RH/manager], je vous reviens avant [heure]. » Cette phrase est une compétence. Accorder 3 k€ « on se débrouillera » est une faute, éventuellement une offre que l'employeur ne reconnaîtra pas, ou qu'il devra honorer à son corps défendant.\n\nLa contre-offre (l'employeur actuel ou un concurrent aligne ou surenchère) est un fait du marché, pas une offense. Vous ne dénigrez pas. Vous ne mentez pas (« eux ils vont mal »). Vous rappelez votre paquet, votre délai, éventuellement un geste encore dans l'enveloppe après escalation. Vous n'entrez pas dans une enchère sans fin. Vous n'appliquez pas un critère illicite (« s'il hésite, c'est qu'il n'est pas fiable, et puis il a une famille »).\n\nLe refus du candidat est une issue normale. Remerciement, statut, réserves (module 13), analyse interne (délai trop court ? paquet illisible ? fourchette hors marché ?). Pas de reproche. Le désistement après acceptation écrite est plus grave opérationnellement : RH, pas un solo junior, pas d'injure, réactivation honnête des réserves.\n\nVous ne « tenez » pas quelqu'un par une fausse promesse, un chantage à la réserve, ou un document irrévocable bricolé. La négo reste dans l'offre de contrat, délai, enveloppe, escalation."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Trois étages : (1) ce qui est déjà dans l'offre ; (2) ce qui est dans l'enveloppe restante ; (3) escalation, délai de retour, pas de vide. Tout geste nouveau = avenant d'offre écrit, même modèle, nouveau délai court.\n\nJournal de négo dans l'ATS : demande, réponse, qui a validé. Pas uniquement un souvenir d'appel.\n\nSi contre-offre : « Transmettez-nous les éléments que vous pouvez partager (poste, fixe ; pas d'obligation de montrer un document confidentiel illégalement). Je reviens. » Vous ne forcez pas la violation d'une clause de confidentialité."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Nadia demande 34 k€, plafond 32. Recruteur : pas d'accord oral. E-mail RH/manager : écart 2 k€, risque de perte, équité équipe (collègues à 31-32). Décision : maintien 32, tutorat, date de revue salariale selon politique (pas une promotion promise). Nadia accepte 32. Si le manager avait dit 34 malgré l'iniquité, RH tranche, pas le junior seul."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Matcher immédiatement une contre-offre verbale. Promettre une revue à 6 mois non prévue. Dire « de toute façon on a quelqu'un d'autre qui signera ce soir » si c'est faux. Baisser l'offre parce que la personne « n'a qu'à bien se tenir, c'est le plan B » (module 13)."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Candidat qui négocie après acceptation : selon le cas, nouvelle discussion RH, pas un silence punitif. Candidat qui refuse puis revient : traiter comme une nouvelle décision, pas comme un dû. Plusieurs candidats en offre parallèle : en principe non (deux promesses de fait) ; une offre à la fois, sauf cadre RH très contrôlé."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Enveloppe max 32 k€. Le candidat : « 36 ou je reste. » Le manager est injoignable jusqu'au lendemain 14 h. Votre réponse orale du jour, et votre e-mail d'escalade."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Oral : « Je ne peux pas m'aligner à 36 aujourd'hui, ce n'est pas dans ma délégation. Je ne vous confirme pas ce chiffre. Je transmets, je vous rappelle demain avant 16 h. Votre délai d'offre actuel reste le [date] sauf prolongation écrite. » Escalade : demande 36, plafond 32, motivation du candidat, risque, équité, options (maintien / geste date / refus). Pas de 36 « en attendant »."
            }
          ],
          "position": 4
        },
        {
          "title": "Simulation 1 — Négociation dans l'enveloppe, puis plafond",
          "description": "Dialogue complet : un junior motivé négocie +2 k€ puis +4 k€ ; le recruteur accorde le geste prévu, escalade au-delà, sans promesse.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 28,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous observerez un dialogue d'offre et de négo, identifierez les phrases d'enveloppe et d'escalade, et reproduirez le même cadrage sur un autre poste."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La première simulation reprend Lina, réserve devenue n°1 après un désistement (module 13), ou — variante de campagne — Lina n°1 d'une autre ouverture. Peu importe : l'enjeu est l'enveloppe. Offre à 30 k€, enveloppe jusqu'à 32, au-delà escalation. Variable non garanti. Le candidat, peu expérimenté, mélange l'enthousiasme, une prétention vue sur un forum, et la peur de « mal négocier ». Votre rôle n'est pas de la punir d'oser, ni de lui offrir le plafond par sympathie junior, ni de transformer l'appel en promesse irrévocable.\n\nLa négociation d'un premier CDI est souvent le premier acte économique que la personne mène seule. Elle peut sous-demander, sur-demander, ou coller un chiffre trouvé en ligne sans lien avec la politique du poste. Vous ne « formez » pas le candidat à maximiser son package. Vous ne profitez pas non plus de sa naïveté pour ancrer le plancher. Vous présentez le paquet réel, vous accordez ce qui est délégué, vous transmettez le reste. Cette posture est une obligation de loyauté professionnelle, distincte de l'obligation légale de non-discrimination (L. 1132-1) : les deux se cumulent. Un geste salarial « parce qu'elle est jeune et que ça passera » est illicite. Un refus de 34 k€ « parce que c'est une femme, elle négocie moins bien » l'est aussi.\n\nL'écrit du soir même n'est pas un luxe. Sans lui, la mémoire de Lina retiendra 34, et la vôtre 31. L'écart oral / écrit est le terreau des contestations sur l'engagement, y compris celles qui font glisser vers une discussion offre / promesse (F39588). Dater le retour d'escalation (« demain 12 h ») évite le vide du module 12. Refuser le mot « irrévocable » à l'oral n'est pas de la froideur : c'est rester dans votre rôle. Une promesse d'embauche n'est pas obligatoire ; vous n'en créez pas une par formule magique.\n\nRegardez les moments où le recruteur reformule la demande en chiffre, où il sépare fixe et variable, où il refuse le mot promesse, où il date son retour. Ce sont les gestes à copier. Les commentaires entre crochets ne se lisent pas au candidat."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Lisez le dialogue une première fois. Marquez E (enveloppe), X (hors enveloppe), P (risque promesse), L (risque légal). Puis faites l'exercice de fin de leçon sans recopier mot à mot."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Cas fictif, Banque des Vallées, chargé de clientèle. Recruteur junior. Lina au téléphone, 16 h 10."
            },
            {
              "block_type": "code",
              "content": "SIMULATION 1 — Offre et négo, enveloppe 30-32 k€\nOffre validée : 30 k€ brut annuel, variable d'agence selon plan, CDI,\nLyon Part-Dieu, prise de poste 16 novembre, délai d'acceptation 5 jours.\nEnveloppe restante : jusqu'à 32 k€, pas de télétravail, pas de titre\n« responsable ». Au-delà : RH + directeur.\n\nRECRUTEUR. — Lina, bonjour. Nous souhaitons vous adresser une offre de\ncontrat de travail pour le poste de chargée de clientèle, agence de\nLyon Part-Dieu. Je vous en présente les éléments ; un écrit suivra\ndans l'heure. Vous n'avez pas à répondre maintenant.\nLINA. — Super… donc je suis prise ? C'est une promesse d'embauche ?\nRECRUTEUR. — C'est une offre de contrat, selon notre modèle RH, valable\njusqu'à vendredi 18 h. Nous n'envoyons pas de « promesse unilatérale ».\nSi vous acceptez par écrit, les RH établiront le contrat. [P évité]\nLINA. — D'accord. C'est combien ?\nRECRUTEUR. — Salaire fixe : 30 000 euros brut annuel. Variable d'agence\nselon le plan que je joins, non garanti. Avantages : [mutuelle, tickets,\nselon réel]. Horaires d'agence, samedis selon planning. Période d'essai :\nformulation du contrat RH, je ne la réinvente pas à l'oral. Date visée :\n16 novembre.\nLINA. — Sur les sites on voit 34-36. Je voulais 34. Et le titre\nresponsable adjoint, ça ferait bien.\nRECRUTEUR. — Je reformule : vous demandez 34 k€ de fixe et un titre\nd'adjoint. Le titre n'est pas dans le poste offert, je ne peux pas\nl'ajouter. Sur le fixe, ma délégation va jusqu'à 32, pas 34. Je peux\nporter l'offre à 31 dès maintenant, c'est dans l'enveloppe. 32, je le\npeux aussi si nous nous alignons. 34, je transmets, je ne vous le\nconfirme pas. [E puis X]\nLINA. — Si je dis oui tout de suite à 31, c'est bloqué, irrévocable\npour vous ?\nRECRUTEUR. — Si nous vous envoyons 31 et que vous acceptez par écrit,\nnous entrons dans le process d'embauche RH. Je n'emploie pas le mot\nirrévocable à l'oral. Je n'ai pas de « papier promesse » à vous faire.\nLINA. — Bon, je voudrais quand même que vous demandiez 34, j'ai un\nentretien ailleurs.\nRECRUTEUR. — Je transmets 34 au directeur et aux RH ce soir. Je vous\nréponds demain avant 12 h. En attendant, l'offre écrite part à 30,\nou à 31 si vous préférez que l'écrit reflète déjà le geste d'enveloppe.\nQue préférez-vous voir par écrit ce soir ?\nLINA. — Mettez 31, et notez 34 en demande.\nRECRUTEUR. — Entendu. Écrit : offre 31 k€, valable jusqu'à vendredi 18 h.\nDemande 34 : escalation, retour demain 12 h. Pas de titre adjoint.\n\nLE LENDEMAIN, RH : refus 34, maintien 31, pas 32 (équité équipe à 30-32\nmais Lina junior sans délégation).\nRECRUTEUR (appel). — Lina, la demande à 34 n'est pas retenue. L'offre\nreste 31 k€, mêmes éléments, délai vendredi 18 h. Je n'ai pas d'autre\ngeste salarial. Vous pouvez refuser ; dans ce cas nous clôturerons\nproprement.\nLINA. — Je… je vais relire. Merci d'avoir demandé.\nRECRUTEUR. — Je reste disponible pour des questions de compréhension\ndu plan de variable, pas pour réouvrir 34 sans nouvelle décision RH.\n\nCOMMENTAIRE\nE : 31 accordé, dans l'enveloppe. X : 34 et titre, pas d'improvisation.\nP : refus répété de « promesse / irrévocable ».\nPas de mensonge « vous êtes la seule ». Pas de menace illicite."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Accorder 34 « on verra ». Offrir le titre adjoint pour compenser. Dire que 31 est une promesse irrévocable. Oublier l'écrit le soir même, Lina n'a plus que le souvenir de 34."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Si RH avait dit oui à 32 le lendemain : avenant d'offre, nouveau délai court, pas un texto. Si Lina accepte 31 puis se désiste : module 13, réactivation honnête, RH."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Réécrivez uniquement les répliques du recruteur entre la demande de titre adjoint et la clôture de l'appel 1, en 6 répliques maximum, pour un autre poste (assistant ADV, enveloppe 26-28 k€, demande 30 et un véhicule)."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "« Le véhicule n'est pas dans l'offre, je ne l'ajoute pas. » « Je reformule : 30 k€ de fixe. » « Ma délégation va jusqu'à 28. Je peux porter l'écrit à 27 ou 28. 30, je transmets, je ne confirme pas. » « Pas de promesse unilatérale, un écrit d'offre avec délai. » « Que voulez-vous voir dans l'e-mail de ce soir : 27 ou 28, en attendant le retour sur 30 ? » « Je vous rappelle demain avant 12 h sur le 30 et le véhicule, après RH. » Le véhicule, souvent hors enveloppe junior, suit le même X."
            }
          ],
          "position": 5
        },
        {
          "title": "Simulation 2 — Contre-offre, refus, désistement",
          "description": "Dialogue complet : un profil expérimenté brandit une contre-offre ; le recruteur escalade, tient le plafond, gère un refus puis un retour, sans document hors RH.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 30,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez tenir une négo sous pression de contre-offre, proposer une escalation unique, accepter un refus, et réagir à un désistement ou à un retour, sans mensonge et sans promesse bricolée."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La deuxième simulation met en scène Karim, non pas comme le profil au 1 éthique du module 11 — ce Karim-là n'a pas d'offre — mais un profil expérimenté fictif « Karim D. », conforme sur la grille, n°1 d'une autre campagne assurance-collectives, pour montrer la pression de statut. Alternative pédagogique : vous pouvez lire « Nadia » à la place si vous refusez de « réhabiliter » un nom. L'enjeu n'est pas le prénom. L'enjeu est : contre-offre à 38 k€, enveloppe 33-35, tentation du manager de « matcher coûte que coûte », tentation du junior de tout promettre, tentation de menacer avec une réserve.\n\nUne contre-offre n'oblige pas à s'aligner. S'aligner hors équité interne crée un problème d'équipe. Ne pas s'aligner crée un risque de refus. Les deux issues sont professionnelles si le process est net. Un refus n'est pas un échec personnel du recruteur. Un désistement après acceptation écrite est un incident RH. Un retour du candidat après refus se retraite comme une nouvelle offre possible, pas comme une revanche.\n\nLa pression d'un profil senior (« je veux un écrit de votre DRH, une promesse irrévocable ce soir ») teste votre cadre, pas votre légitimité d'âge. Vous ne commentez pas votre juniorité. Vous ne cédez pas un acte juridique pour « faire sérieux ». Service-Public F39588 (12/03/2026) et la Cass. soc. 21 septembre 2017 rappellent que la promesse unilatérale n'est pas un outil de négo : elle vaut contrat. Le modèle d'offre RH, avec délai, est l'instrument. La réserve du module 13 n'est pas une arme : vous ne dites pas « on a quelqu'un qui signera ce soir » si c'est faux, et vous ne dites pas à la réserve « c'est mort » tant que l'acceptation n'est pas écrite.\n\nVous verrez aussi le mauvais réflexe : « Signe cette promesse ce soir. » Le recruteur de la simulation refuse et oriente vers l'offre, le délai, l'escalation. Après un refus, la clôture écrite est une bonne pratique, distincte de l'absence d'obligation générale de motiver. Après un retour du candidat, on n'invente pas qu'il « a toujours été le seul » : on réouvre une offre, on actualise les réserves avec vérité."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Sous pression : ralentir, reformuler les chiffres, séparer l'émotion (« on va vous perdre ») de la délégation, écrire. Une seule escalation, un seul retour daté. Puis décision. Puis, si refus : message A ou C selon qu'une réserve existe encore (module 13)."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Dialogue fictif, 48 heures condensées."
            },
            {
              "block_type": "code",
              "content": "SIMULATION 2 — Contre-offre et issues\nOffre : 34 k€, enveloppe max 35, variable selon plan.\nCandidat : Karim D., 12 ans d'assurance, grille conforme (autre campagne).\nRéserve : une personne en scénario C jusqu'à jeudi.\n\nJOUR 1, 9 h 30 — APPEL D'OFFRE\nRECRUTEUR. — Nous vous adressons une offre de contrat, 34 k€ fixe,\néléments que je vais détailler, écrit dans l'heure, valable jusqu'à\njeudi 18 h. Pas une promesse unilatérale, un modèle RH.\nKARIM. — 34 c'est léger. Là, mon employeur m'aligne 38 plus un titre.\nSi vous ne faites pas 38, je reste. En plus vous êtes junior, je veux\nun écrit de votre DRH, une promesse irrévocable ce soir.\nRECRUTEUR. — Je note 38 et le titre. Ma délégation s'arrête à 35.\nJe n'aligne pas 38 à l'oral. Je n'émets pas de promesse irrévocable.\nJe transmets à la DRH et au manager, retour demain 11 h. L'offre écrite\npart à 34, délai jeudi, sauf avenant. Sur le document de votre employeur,\nne me transmettez que ce que vous avez le droit de partager.\nKARIM. — Si vous avez quelqu'un d'autre, dites-le, je n'aime pas les\njeux. Vous allez me ghoster ?\nRECRUTEUR. — Nous avons un process avec une date. Je vous dis la vérité\nde votre statut : vous avez une offre. Je ne commente pas nominativement\nd'autres personnes. Je vous écris, je ne disparais pas. [ni mensonge\n« unique », ni menace « on a une réserve »]\n\nJOUR 2, 10 h 50 — RETOUR ESCALADE\nDécision interne : 35 max, pas 38, pas de titre, équité d'équipe.\nRECRUTEUR. — L'entreprise porte l'offre à 35 k€, avenant écrit aujourd'hui,\nmême délai jeudi 18 h. 38 n'est pas retenu. Pas de promesse unilatérale\ndistincte : l'avenant d'offre RH fait foi.\nKARIM. — C'est non. Je reste. Vous n'avez pas été sérieux.\nRECRUTEUR. — J'enregistre le refus de l'offre à 35. Merci du temps\nconsacré. Je vous envoie une confirmation écrite de clôture. Je ne\nqualifie pas votre choix. [refus, pas de rancune]\n\nJOUR 2, 14 h — MANAGER\n« Aligne 38, on s'en fiche de l'équipe, et envoie une promesse. »\nRECRUTEUR. — Je n'envoie pas de promesse. 38 sort de l'enveloppe et\ncasse l'équité ; RH a déjà tranché 35. Si vous voulez réouvrir 38,\nc'est un arbitrage DRH formel, pas un texto. Karim a refusé : le\nrecontacter avec 38 après un non est possible seulement si RH le\ndécide, comme nouvelle offre, pas comme bricolage. La réserve est\nen C jusqu'à jeudi : je ne lui dirai pas qu'elle est retenue.\n\nJOUR 3 — KARIM RAPPELLE\nKARIM. — L'38 n'était pas écrit. Je veux votre 35, mais une promesse\nce soir, et vous dites aux autres que c'est mort.\nRECRUTEUR. — Si l'entreprise réouvre, ce sera une nouvelle offre de\ncontrat à 35, modèle RH, nouveau délai court. Toujours pas de promesse\nunilatérale rédigée par moi. Sur les autres profils : nous appliquons\nnotre process (clôture ou information datée), nous ne mentons pas, nous\nne vous « vendons » pas une exclusivité fictive avant votre acceptation\nécrite. Je confirme avec la DRH et je vous rappelle avant 16 h.\n\nDRH : OK nouvelle offre 35, délai 48 h. Réserve : message C actualisé\n« nous poursuivons une finalisation, retour lundi » — pas « c'est mort ».\nKarim accepte par e-mail. ATS : acceptation écrite, contrat RH.\nDPAE : l'employeur, avant l'embauche, circuit RH (F23107) — le junior\nvérifie que le relais est pris, il ne « s'en occupe pas tout seul »\nhors consigne.\n\nCOMMENTAIRE\nContre-offre : reformulée, pas matchée dans l'élan.\nPlafond : 35, escalation unique.\nPromesse : refusée trois fois.\nRéserve : pas d'otage, pas de mensonge.\nRefus puis retour : nouvelle offre, pas de falsification du passé.\nDésistement n'a pas eu lieu ; s'il avait eu lieu après acceptation :\nRH + réactivation honnête de la réserve (module 13)."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Matcher 38 sans RH. Envoyer une « promesse » pour rassurer un senior qui méprise le junior. Dire à la réserve « c'est mort » alors que Karim n'a pas accepté. Dire à Karim « on n'a que vous » alors que C est en cours. Après refus, insulter (« trop gourmand, trop vieux »)."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Désistement le dimanche avant le lundi de signature : message RH, pas de syndic improvisé. Contre-offre discriminatoire de l'employeur actuel (pression liée à un critère protégé) : vous n'entrez pas dans ce récit, vous tenez votre offre, vous orientez la personne vers ses conseils, vous n'êtes pas avocat.\n\nDouble acceptation (le candidat a dit oui ailleurs aussi) : RH, faits, pas de menace."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "À partir de la simulation 2, rédigez (1) l'e-mail d'avenant d'offre à 35 k€, sans « promesse » ; (2) l'e-mail de clôture si le refus du jour 2 avait été définitif ; (3) la phrase à la réserve du jour 3. Trois textes courts."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1) « Suite à nos échanges, nous portons notre offre de contrat de travail à 35 000 euros brut annuel, autres éléments inchangés, valable jusqu'à jeudi 18 h. Merci de votre acceptation écrite à [e-mail]. Le contrat sera établi par les RH. » 2) « Nous accusons réception de votre refus de l'offre. Nous clôturons ce process et vous remercions. » (pas d'obligation générale de motiver). 3) « Nous poursuivons une finalisation ; nous vous écrivons lundi au plus tard, comme convenu ; pas d'offre à vous adresser aujourd'hui. » Si Karim a accepté, lundi = clôture A de la réserve, honnête, pas « vous n'étiez pas assez senior »."
            },
            {
              "block_type": "callout",
              "content": "Les deux simulations sont fictives. En situation réelle : modèle RH, enveloppe, escalation, F39588. Ne jamais rédiger une promesse unilatérale sans RH/juridique. DPAE = obligation employeur, coordination RH (F23107). Vérification : 13/10/2026."
            }
          ],
          "position": 6
        },
        {
          "title": "Quiz — Offre et négociation",
          "description": "Fourchette, paquet, offre vs promesse, enveloppe, contre-offre, simulations.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 14,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Répondez à chaque question. En cas d'échec, relisez le module puis retentez. Les questions juridiques essentielles exigent une justification : lisez toujours l'explication après validation."
            }
          ],
          "quiz": {
            "title": "Quiz — Offre et négociation",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Au 13/10/2026, selon le cadrage de ce cours (Service-Public / directive UE 2023/970) :",
                "question_type": "single_choice",
                "options": [
                  "A. Indiquer le salaire dans l'annonce est déjà, de façon consolidée, une obligation interne française que l'on peut affirmer sans vérification.",
                  "B. Ce n'est pas à affirmer comme obligation interne française déjà consolidée ; une directive européenne est en transposition ; une fourchette interne reste une bonne pratique / politique d'employeur.",
                  "C. Il est interdit d'indiquer une fourchette, même en interne.",
                  "D. Seul l'âge du candidat fixe le salaire."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Ne pas anticiper la transposition. L'âge comme critère de salaire est illicite (L. 1132-1). Les fourchettes internes sont un outil de politique, pas une interdiction."
              },
              {
                "question": "Service-Public F39588 (vérifié le 12/03/2026) et la Cass. soc. 21 septembre 2017 indiquent notamment que :",
                "question_type": "single_choice",
                "options": [
                  "A. Une promesse unilatérale de contrat de travail vaut contrat ; le retrait s'analyse en licenciement sans cause réelle et sérieuse ; une offre peut être retirée avant acceptation dans le délai laissé ou un délai raisonnable.",
                  "B. Offre et promesse sont identiques, le vocabulaire est libre.",
                  "C. Une promesse d'embauche est obligatoire avant tout CDI.",
                  "D. Le junior doit rédiger une promesse irrévocable pour « coller » le candidat."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "C'est le cœur juridique du module. La promesse n'est pas obligatoire. Le junior ne rédige pas ce type d'acte hors RH/juridique."
              },
              {
                "question": "Un manager demande d'envoyer « une promesse pour bloquer, on se dédira si le budget passe pas ». Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Envoyez le texto irrévocable.",
                  "B. Refusez, expliquez le risque de qualification (F39588), proposez soit une offre RH avec budget validé, soit un scénario C honnête sans dire « retenu ».",
                  "C. Envoyez la promesse mais en tout petit.",
                  "D. Dites au candidat qu'il est embauché, sans papier."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Bloquer par un acte mal qualifié est précisément le risque. L'oral « tu es embauché » n'est pas plus sûr. C honnête ou offre réelle."
              },
              {
                "question": "L'enveloppe du junior sert à :",
                "question_type": "single_choice",
                "options": [
                  "A. Improviser n'importe quel chiffre pour conclure.",
                  "B. Accorder des gestes prévus (ex. jusqu'au plafond) et à escalader par écrit au-delà, sans confirmer le hors délégation.",
                  "C. Matcher toute contre-offre le jour même.",
                  "D. Réduire le salaire des femmes pour rester dans le budget."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Délégation + escalation = métier. Matcher hors cadre et discriminer sont des fautes."
              },
              {
                "question": "Dans la simulation 1, face à une demande de « promesse irrévocable », le recruteur :",
                "question_type": "single_choice",
                "options": [
                  "A. Accepte pour rassurer un junior.",
                  "B. Maintient le vocabulaire d'offre de contrat, modèle RH, délai d'acceptation écrite.",
                  "C. Promet le titre d'adjoint en compensation.",
                  "D. Accorde 34 k€ sans RH."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "C'est la conduite à copier. Titre et 34 k€ étaient hors enveloppe / hors poste."
              },
              {
                "question": "Une contre-offre à 38 k€ alors que le max interne est 35 :",
                "question_type": "single_choice",
                "options": [
                  "A. Oblige légalement à s'aligner.",
                  "B. Se reformule, s'escalade une fois, puis se décide ; le non-alignement est une issue possible, suivie d'une clôture propre si refus.",
                  "C. Autorise une promesse unilatérale junior pour « gagner ».",
                  "D. Se règle en menaçant le candidat avec l'âge ou la réserve."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Pas d'obligation d'aligner. Pas de promesse bricolée. Pas de menace illicite ou mensongère."
              },
              {
                "question": "L'écrit d'offre et l'oral doivent :",
                "question_type": "single_choice",
                "options": [
                  "A. Diverger : l'oral plus généreux « pour la magie », l'écrit plus prudent.",
                  "B. Dire les mêmes éléments essentiels ; tout geste nouveau devient un avenant écrit.",
                  "C. Être remplacés par un SMS « c'est bon ». ",
                  "D. Inclure le mot promesse, c'est plus solennel."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L'écart oral/écrit crée l'attente et le contentieux. Le SMS ne fige pas un paquet complet."
              },
              {
                "question": "Après un refus du candidat, le recruteur junior :",
                "question_type": "single_choice",
                "options": [
                  "A. Inscrit « trop gourmand, trop vieux » dans l'ATS.",
                  "B. Confirme la clôture par écrit, remercie, active le process réserves selon A/B/C honnête, sans rancune.",
                  "C. Ghoste, par gêne.",
                  "D. Envoie quand même une promesse pour le faire changer d'avis."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le refus est une issue. L'âge est illicite. Le ghosting et la promesse de dernière minute sont des fautes."
              },
              {
                "question": "La DPAE, dans ce module, est :",
                "question_type": "single_choice",
                "options": [
                  "A. Une option du candidat.",
                  "B. Une obligation de l'employeur avant l'embauche (cadrage F23107 / Urssaf) ; le junior coordonne avec les RH, il ne la « bricole » pas seul et ne la présente pas comme facultative.",
                  "C. Un synonyme de promesse unilatérale.",
                  "D. À faire uniquement si le salaire dépasse 40 k€."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "F23107 : DPAE obligatoire côté employeur, délai encadré (au plus tôt dans les 8 jours précédant l'embauche, avant prise de fonction / essai). Ce n'est pas un outil de négo."
              },
              {
                "question": "Quelle conduite globale est la plus conforme à ce module ?",
                "question_type": "single_choice",
                "options": [
                  "A. Fourchette validée, offre modèle RH, pas de promesse solo, enveloppe puis escalation, écrits alignés, honnêteté vis-à-vis des réserves.",
                  "B. Texto irrévocable, on verra le budget, on ment aux autres.",
                  "C. Matcher toutes les contre-offres, l'équité d'équipe attendra.",
                  "D. Annoncer 40 k€ all inclusive en mélangeant un variable max jamais versé."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "A résume les 7 leçons. B ignore F39588 et le module 13. C et D trompent sur la rémunération (esprit L. 5331-3) et cassent l'équité."
              }
            ]
          },
          "position": 7
        }
      ]
    },
    {
      "position": 15,
      "title": "Gérer les refus et les situations délicates",
      "description": "Traiter chaque refus et chaque incident de process avec une décision claire, un message professionnel et une traçabilité conforme au droit français.",
      "lessons": [
        {
          "title": "Dire non sans nuire : principes, cadre légal et posture",
          "description": "Poser le cadre du refus : pas d'obligation générale de motiver, interdiction de discriminer, droits d'accès RGPD, moment, canal et niveau d'information.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À l'issue de cette leçon, vous savez distinguer une obligation légale, une recommandation d'autorité, une politique interne et une bonne pratique lorsque vous refusez un candidat.\n\nVous savez pourquoi le droit français n'impose pas, en règle générale, de motiver un refus de candidature, tout en interdisant d'écarter une personne d'un recrutement pour un motif discriminatoire.\n\nVous savez réorienter une demande d'accès aux données personnelles vers le circuit prévu (RH, DPO ou référent conformité) sans improviser une réponse juridique.\n\nVous savez choisir le moment, le canal et le niveau de détail d'un message de refus selon l'étape du process et le risque relationnel."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le recrutement produit davantage de refus que d'embauches. Un process sérieux écarte des candidatures à chaque étape : lecture de CV, préqualification, premier entretien, entretiens suivants, décision finale. Le candidat non retenu n'a pas « échoué » au sens scolaire du terme : il n'a pas été retenu pour ce poste, à cette date, au regard des critères professionnels retenus. Cette distinction oriente le ton. Vous ne jugez pas la personne ; vous clôturez une candidature.\n\nEn droit français, il n'existe pas d'obligation légale générale de motiver un refus de candidature. Le recruteur n'est donc pas tenu, par un texte général, d'expliquer par écrit pourquoi un CV n'a pas été retenu. Cette absence d'obligation ne signifie pas que le silence est toujours la meilleure pratique, ni que n'importe quel motif peut être donné. Deux cadres s'imposent toujours.\n\nPremier cadre : l'interdiction de discriminer à l'embauche. L'article L. 1132-1 du Code du travail interdit d'écarter une personne d'un recrutement en raison de critères protégés (origine, sexe, mœurs, orientation sexuelle, identité de genre, âge, situation de famille ou grossesse, caractéristiques génétiques, vulnérabilité économique, appartenance vraie ou supposée à une ethnie, une nation ou une prétendue race, opinions politiques, activités syndicales ou mutualistes, mandat électif, convictions religieuses, apparence physique, nom de famille, lieu de résidence, domiciliation bancaire, état de santé, perte d'autonomie, handicap, capacité à s'exprimer dans une langue autre que le français, qualité de lanceur d'alerte, facilitateur ou personne en lien avec un lanceur d'alerte). Un refus fondé sur l'un de ces critères, ou un message qui le laisse entendre, expose l'employeur. Source : Code du travail, L. 1132-1, vérifié le 13/10/2026.\n\nDeuxième cadre : les informations demandées au candidat et les méthodes d'évaluation. L'article L. 1221-6 limite les informations demandées à ce qui permet d'apprécier la capacité à occuper l'emploi ou les aptitudes professionnelles, avec un lien direct et nécessaire avec l'emploi. Les articles L. 1221-8 et L. 1221-9 imposent d'informer le candidat des méthodes utilisées et d'employer des méthodes pertinentes. Un refus qui s'appuie sur une question illicite, un stéréotype ou un critère non professionnel n'est pas défendable, même si le message reste poli.\n\nLe RGPD s'ajoute à ce cadre. Le candidat peut exercer un droit d'accès à ses données. Ce droit n'oblige pas à motiver le refus métier ; il oblige à traiter la demande d'accès selon la procédure interne, dans les délais prévus par l'organisation, en lien avec le DPO ou le référent désigné. La CNIL distingue notamment la conservation en vivier (recommandation : jusqu'à 2 ans à compter du dernier contact, candidat informé, possibilité d'opposition) et l'archivage intermédiaire à des fins probatoires (5 ans à compter de la date à laquelle le poste a été pourvu, en lien avec L. 1134-5). Distinguez : obligation de conservation probatoire / recommandation de durée de vivier / politique interne de réponse aux refus.\n\nSi vous donnez un motif, il doit être professionnel, factuel, rattaché aux critères du poste, et formulé de façon à ne pas humilier. Un motif mal écrit crée plus de risque qu'un refus courtois non motivé. La politique interne peut imposer un modèle unique : dans ce cas, vous l'appliquez. La bonne pratique professionnelle consiste à répondre, à le faire rapidement une fois la décision ferme, et à adapter le canal à l'investissement du candidat."
            },
            {
              "block_type": "callout",
              "content": "Obligation légale : ne pas discriminer (L. 1132-1) ; traiter une demande d'accès RGPD selon la procédure. Pas d'obligation légale générale de motiver un refus. Recommandation d'autorité : durées de conservation CNIL (vivier 2 ans = recommandation ; 5 ans probatoires = obligation liée à L. 1134-5). Politique interne : modèles d'e-mails, qui appelle, qui signe. Bonne pratique : répondre, tracer, adapter le canal à l'étape."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Avant tout message, vérifiez que la décision est ferme. Un « non » envoyé trop tôt, puis un rappel du manager, détruit la crédibilité. Confirmez avec le manager ou votre responsable selon la règle interne. Consultez l'ATS : statut, commentaires, historique d'échanges, existence d'une autre opportunité interne.\n\nChoisissez le canal. L'e-mail est le canal de référence : il laisse une trace, il peut être relu, il peut s'appuyer sur un modèle validé. Le téléphone se justifie lorsque le candidat a investi du temps (plusieurs entretiens, offre, déplacement) ou lorsqu'une relation doit être préservée (vivier, rareté du profil, partenaire école). Un SMS n'est pas un canal de refus professionnel, sauf consigne interne très encadrée pour un simple accusé de fin de process volume.\n\nRédigez selon trois niveaux d'information. Niveau 1 : remerciement, décision, clôture, possibilité de conserver le dossier selon la politique et l'information déjà donnée au candidat. Niveau 2 : motif professionnel court, non comparatif, non personnel (« le profil retenu correspond plus étroitement à l'expérience exigée sur tel outil / tel environnement »). Niveau 3 : échange oral de feedback, uniquement si vous y êtes formé, si le manager l'accepte, et si le feedback reste factuel. N'inventez pas de motif pour « adoucir ».\n\nTracez. Passez le statut dans l'ATS le jour du message. Archivez le modèle utilisé. Si le candidat demande ses données, n'envoyez pas le dossier brut : ouvrez le ticket prévu (RH, DPO). Si le candidat évoque une discrimination, ne argumentez pas seul : alertez immédiatement votre responsable et conservez les écrits."
            },
            {
              "block_type": "code",
              "content": "CHECKLIST AVANT ENVOI D'UN REFUS\n\n[ ] Décision confirmée par le décideur prévu (manager / responsable recrutement)\n[ ] Statut ATS vérifié : pas d'autre process ouvert sur le même candidat\n[ ] Motif interne consigné (critères du poste, faits d'évaluation) — ne pas le coller tel quel dans l'e-mail\n[ ] Canal choisi selon l'étape (e-mail / téléphone + e-mail de confirmation)\n[ ] Niveau d'information autorisé par la politique interne\n[ ] Relecture : aucun critère L. 1132-1, aucun jugement de personne, aucune comparaison nominative\n[ ] Information conservation / opposition déjà donnée ou renvoyée vers la mention RGPD du process\n[ ] Envoi + mise à jour ATS le même jour"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "PME de services B2B, 80 salariés, recrutement d'un chargé de clientèle. Quarante-deux candidatures. Le dirigeant dit au junior : « Envoie un mail type, et si on te demande pourquoi, tu dis qu'on a pris quelqu'un de plus jeune, ça passera mieux. »\n\nLe junior refuse cette consigne. L'âge est un critère protégé. Un motif « plus jeune » n'est pas un motif professionnel licite. Il reformule avec le dirigeant le vrai écart : autonomie commerciale sur un portefeuille grands comptes, déjà exigée dans la fiche de poste. Il envoie un refus non comparatif, sans mention d'âge, et consigne le motif interne réel dans l'ATS."
            },
            {
              "block_type": "code",
              "content": "ÉCHANGE JUNIOR / DIRIGEANT\n\nDirigeant : Dis-leur qu'on a pris plus jeune, ça évite les débats.\nJunior : Je ne peux pas écrire cela. L'âge est un critère protégé. Si nous devons un motif, il doit rester professionnel : ici, l'autonomie sur un portefeuille grands comptes.\nDirigeant : D'accord. Mail simple alors.\nJunior : Oui. Remerciement, décision, conservation du dossier selon notre mention d'information. Pas de comparaison entre candidats."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Attendre « d'avoir le temps » : le candidat interprète le silence comme du mépris ou comme un process encore ouvert.\n\nInventer un motif gentil (« on a gelé le poste ») alors que le poste est pourvu : le mensonge revient lorsque l'annonce est republiée.\n\nMotiver par un critère protégé, même « positif » (« on voulait une femme », « quelqu'un de plus jeune », « quelqu'un du coin »).\n\nColler dans l'e-mail les commentaires bruts de l'ATS (« trop bavard », « look pas corporate », « accent »).\n\nRépondre seul à une contestation juridique ou à une demande RGPD sans circuit interne.\n\nRefuser par téléphone sans trace écrite ensuite, ou à l'inverse envoyer un e-mail glacial après trois heures d'entretien sans aucun appel."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Candidat interne : le refus est un acte RH autant qu'un acte recrutement. Le message se coordonne avec le manager actuel et les RH. Un e-mail standard externe est inadapté.\n\nCandidat recommandé par un salarié ou un client : remerciez, refusez sur des critères de poste, informez le prescripteur selon la règle interne, sans livrer d'évaluation détaillée.\n\nCandidat déjà salarié d'un client (cabinet) : le refus reste factuel ; vous ne commentez pas la situation chez le client.\n\nProcess mixte (interne + externe) : ne dites pas aux externes « on a préféré un interne » si la politique demande un motif neutre ; vous pouvez indiquer que le poste a été pourvu, sans comparer les personnes."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Un candidat vous écrit : « Merci de me dire pourquoi je n'ai pas été retenu, et envoyez-moi tout ce que vous avez sur moi (notes d'entretien, commentaires du manager, scores). » Le manager vous a dit oralement : « Il est compétent mais trop vieux pour l'équipe. » Rédigez : 1) ce que vous consignez en interne ; 2) ce que vous répondez au candidat ; 3) ce que vous faites de la phrase du manager."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "En interne, vous consignez un motif professionnel s'il existe (écart sur un critère de poste documenté). Vous ne consignez pas « trop vieux » comme motif de décision. Vous alertez votre responsable : la phrase du manager est un critère protégé (âge). La décision doit être reprise sur des bases licites, ou le process doit être réexaminé.\n\nAu candidat, vous n'êtes pas tenu par une obligation légale générale de motiver le refus métier. Vous remerciez, vous confirmez la non-sélection, vous restez factuel. Vous ne répétez pas la phrase sur l'âge. Pour les données, vous n'envoyez pas le dossier brut : vous enregistrez la demande d'accès et vous la transmettez au circuit RGPD (RH / DPO). Les notes peuvent contenir des données de tiers ou des commentaires non aboutis : leur communication suit la procédure, pas l'improvisation du junior.\n\nPourquoi cette correction : le risque n'est pas « manquer de gentillesse ». Le risque est de transformer un refus mal cadré en preuve d'une décision discriminatoire, tout en manquant une demande d'accès qui est un droit."
            }
          ],
          "position": 0
        },
        {
          "title": "Refuser un CV, une préqualification et un premier entretien",
          "description": "Traiter les refus précoces : volume, délai, ton, motif interne et message externe, sans laisser le process ouvert par négligence.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez clôturer une candidature dès que l'écart avec les critères essentiels du poste est établi, sans attendre la fin du process « par politesse ».\n\nVous savez rédiger un refus de CV, un refus après préqualification et un refus après premier entretien, avec un niveau d'information croissant mais toujours professionnel.\n\nVous savez distinguer le motif interne (traçabilité, calibration manager) du message externe (clair, non discriminatoire, non humiliant)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Les refus précoces représentent le volume. Un CV non retenu, un entretien téléphonique qui révèle un écart de localisation, de disponibilité ou de socle technique, un premier entretien qui confirme un manque d'autonomie : ce sont des décisions de process, pas des jugements de valeur. Plus le refus est tardif, plus le candidat a investi, plus le message doit être soigné. Inversement, un refus de CV peut rester court, à condition d'être envoyé.\n\nLe problème du refus de CV est le silence de masse. Beaucoup d'entreprises n'écrivent pas. Ce silence n'est pas une obligation légale ; c'est souvent une pratique de charge. Elle a un coût : image employeur, relances, candidatures qui restent « en cours » dans l'ATS, recruteur junior qui ne sait plus qui est encore actif. La bonne pratique est de répondre lorsque la décision est prise. La politique interne peut prévoir un e-mail automatique de fin de process à une date donnée : vous l'appliquez, vous ne le contournez pas au cas par cas sans raison.\n\nLe refus après préqualification est plus délicat. Le candidat a parlé à quelqu'un. Il a souvent réorganisé une pause, parfois posé une demi-journée. Un e-mail impersonnel le jour même reste correct si l'écart est net (mobilité impossible, rémunération hors cadrage déjà annoncé, indisponibilité incompatible). Si la préqualification était longue et qualitative, un appel court plus un e-mail de confirmation est plus professionnel.\n\nLe refus après premier entretien engage la réputation du recruteur. Le candidat a préparé, s'est déplacé ou s'est connecté, a répondu à des mises en situation. Le problème n'est plus seulement d'informer : c'est de clôturer sans laisser entendre que « ça avance encore ». Le risque est de garder le candidat « au chaud » par confort, au cas où le premier choix se désiste. Cette réserve se gère autrement : statut distinct, message d'attente, pas un silence.\n\nÀ chaque étape, le motif interne doit exister. « Ne me plaît pas » n'est pas un motif. « N'a pas l'expérience exigée sur le pilotage d'un portefeuille de X comptes, critère essentiel validé avec le manager » en est un. Ce motif reste interne tant que la politique n'autorise pas un feedback. Le message externe peut se limiter à la décision. Il ne doit jamais révéler un critère protégé, une rumeur, ou une comparaison nominative avec un autre candidat.\n\nLe moment : dès que la décision est ferme, dans un délai court. Un refus de CV sous 5 à 10 jours ouvrés après clôture de la vague est une organisation interne, pas un délai légal. Un refus post-entretien se vise sous 48 heures ouvrées après la décision, sauf process plus long annoncé au candidat. Annoncer un délai et le tenir vaut mieux qu'une promesse vague."
            },
            {
              "block_type": "callout",
              "content": "Il n'existe pas de délai légal général pour envoyer un refus de candidature. Le délai est une règle interne et une bonne pratique. En revanche, laisser un dossier « ouvert » sans décision réelle fausse les indicateurs et expose à des relances auxquelles vous ne savez pas répondre."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Pour le CV : triez par critères essentiels. Les écarts rédhibitoires documentés (habilitation obligatoire absente, mobilité géographique incompatible déjà indiquée, niveau d'expérience hors cadrage de la fiche) se refusent par lot, modèle court. Les CV « possibles » ne se refusent pas par confort de charge : ils restent en shortlist large ou en réserve de vague.\n\nPour la préqualification : en fin d'appel, si l'écart est déjà net et que vous avez le mandat de clôturer, vous pouvez l'annoncer oralement avec calme, puis confirmer par e-mail. Si vous devez recaler avec le manager, dites le délai réel, tenez-le, puis refusez.\n\nPour le premier entretien : débriefez le manager avec des faits. Si le non est clair, envoyez le refus sans attendre « d'avoir vu tout le monde » lorsque le candidat est hors critères. Si le candidat reste comparable, placez-le en réserve, avec un message d'attente, pas un refus."
            },
            {
              "block_type": "code",
              "content": "MODÈLE — REFUS DE CV (e-mail)\nObjet : Votre candidature — [intitulé du poste] — [entreprise]\n\nBonjour [Prénom],\n\nNous vous remercions d'avoir candidaté au poste de [intitulé].\n\nAprès étude de votre parcours, nous ne donnerons pas de suite favorable à votre candidature pour ce poste.\n\nCette décision ne préjuge pas de l'intérêt que nous pourrions porter à votre profil sur une autre opportunité, conformément aux informations déjà communiquées sur la durée de conservation de votre dossier.\n\nNous vous souhaitons une pleine réussite dans vos recherches.\n\nCordialement,\n[Prénom Nom]\n[Fonction] — [Entreprise]\n[Téléphone]\n\n---\nMODÈLE — REFUS APRÈS PRÉQUALIFICATION (e-mail)\nObjet : Suite de notre échange — [intitulé]\n\nBonjour [Prénom],\n\nJe vous remercie pour notre échange du [date].\n\nAprès relecture de vos éléments au regard des critères du poste, nous ne poursuivrons pas le process.\n\nLe besoin porte notamment sur [critère professionnel objectif, si la politique autorise un motif court]. Votre profil reste intéressant ; nous clôturons toutefois cette candidature.\n\nJe vous remercie du temps consacré et vous souhaite le meilleur pour la suite.\n\nCordialement,\n[...]\n\n---\nSCRIPT TÉLÉPHONIQUE — REFUS APRÈS 1ER ENTRETIEN\n\n« Bonjour [Prénom], [Prénom], du recrutement chez [entreprise]. Avez-vous deux minutes ?\nJe vous appelle au sujet du poste de [intitulé]. Nous avons bien avancé de notre côté. La décision est de ne pas donner suite après l'entretien.\nLe besoin est très marqué sur [critère professionnel]. Ce n'est pas un jugement sur l'ensemble de votre parcours.\nJe vous envoie un e-mail de confirmation. Merci d'avoir accordé ce temps. Je vous souhaite une bonne continuation. »"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Startup produit, recrutement d'un développeur backend. Après préqualification, le candidat est solide techniquement mais ne peut pas travailler en France aux horaires de l'équipe (décalage de six heures, déjà écarté dans la fiche). Le junior hésite : le profil est rare, le CTO dit « on verra plus tard ».\n\nDécision recommandée : clôturer ce process-ci, proposer un vivier si le candidat est d'accord, ne pas le laisser croire qu'un entretien CTO va arriver. Message : écart sur l'organisation du travail, déjà posée comme critère. Erreur à éviter : « on te garde au chaud » sans date."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Empiler des « peut-être » dans l'ATS pour ne pas écrire de refus.\n\nRefuser un CV sur un critère non écrit dans la fiche (école, photo, prénom, adresse).\n\nAnnoncer en préqualification « je te fais passer » pour faire plaisir, puis laisser le manager refuser sans message.\n\nEnvoyer un refus de premier entretien en copie au manager avec les notes brutes visibles par erreur.\n\nUtiliser un modèle « votre profil ne correspond pas à nos valeurs » : formule floue, potentiellement blessante, difficile à défendre."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Candidature spontanée hors poste ouvert : ce n'est pas un refus de process, c'est une non-ouverture. Message : pas de poste correspondant à ce jour, conservation selon mention d'information.\n\nCandidat volume (campagne 200 CV) : l'automatisation d'un e-mail de clôture est une organisation interne acceptable si le texte est correct et si les personnes reçues en entretien ont un traitement distinct.\n\nCandidat en situation de handicap qui a mentionné un aménagement : le refus doit rester fondé sur les compétences et exigences du poste, pas sur le handicap. Si le manager refuse « à cause du handicap », vous n'exécutez pas ce motif ; vous alertez RH."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Vous avez reçu 18 CV pour un poste d'assistant QHSE en industrie (ETI, 3 usines). 11 n'ont pas l'habilitation ou l'expérience terrain exigées. 4 sont possibles. 3 sont en shortlist. Rédigez le lot de refus des 11 et la phrase que vous dites au manager pour les 4 « possibles » que vous ne refusez pas encore."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Les 11 reçoivent un e-mail court de non-suite, sans détail humiliant (pas « vous n'avez aucune habilitation, dossier incomplet »). Le motif interne, lui, est précis : absence d'un prérequis essentiel documenté. Les 4 possibles restent en statut distinct : « à revoir si shortlist insuffisante », avec une date de revue. Vous dites au manager : « Quatre profils sont en deçà du socle mais pas rédhibitoires ; je ne les refuse pas tant que la shortlist n'est pas sécurisée. » Pourquoi : refuser trop tôt par confort, puis republier l'annonce, est un échec d'organisation, pas une preuve de rigueur."
            }
          ],
          "position": 1
        },
        {
          "title": "Refus final, mise en attente et mise en réserve",
          "description": "Clôturer le dernier tour, distinguer attente et réserve, et parler vrai sans entretenir un faux espoir.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez conduire un refus final après un process avancé, par téléphone puis e-mail, avec un motif professionnel si la politique le permet.\n\nVous distinguez trois statuts : refusé, en attente d'une décision encore ouverte, en réserve d'un choix prioritaire.\n\nVous savez rédiger un message d'attente et un message de réserve qui ne promettent pas une embauche."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le refus final concerne une personne qui a souvent rencontré plusieurs interlocuteurs, parfois visité un site, parfois parlé rémunération. Le problème n'est plus l'information minimale : c'est la dignité du clôture et la préservation d'un vivier. Le risque est double. Trop sec, le message brise une relation utile. Trop chaud, il laisse croire que la décision n'est pas réelle (« on se revoit très vite ») alors que le poste est pourvu.\n\nLa décision recommandée est : appel dès que la décision est ferme, e-mail de confirmation le jour même, motif interne consigné, motif externe court et professionnel si autorisé. Le raisonnement : la personne a investi ; un canal oral reconnaît cet investissement ; l'écrit sécurise. Le moment : après validation du décideur, avant que le candidat apprenne la nouvelle par un réseau social ou par un autre candidat. Le message porte sur le poste, pas sur la valeur globale de la personne. Les erreurs : laisser le manager « s'en charger plus tard », envoyer un e-mail collectif, comparer au candidat retenu par son nom, inventer un gel de poste.\n\nL'attente n'est pas un refus. C'est une décision non encore prise, ou une étape administrative encore ouverte (validation budgétaire, dernier entretien reporté). Le problème : beaucoup de juniors disent « on vous tient au courant » sans date. Le risque : le candidat accepte ailleurs pendant que vous croyez le process vivant, ou à l'inverse reste bloqué sur un espoir flou. Décision recommandée : statut « en attente », date de prochaine information, contenu de ce qui est encore ouvert. Message : factuel, avec une date. Erreur : utiliser l'attente pour ne pas oser refuser.\n\nLa réserve est un refus conditionnel interne : un candidat n'est pas le choix n°1, mais il reste mobilisable si le n°1 se désiste ou si un second poste ouvre. Le problème est le décalage entre l'interne et l'externe. En interne, « plan B » est clair. En externe, « vous êtes notre second choix » est brutal et parfois inutile. Décision recommandée : si la réserve est courte (quelques jours) et réelle, message d'attente daté. Si la réserve est vague, refusez proprement et proposez un vivier. Le raisonnement : un candidat adulte peut entendre qu'une décision n'est pas close ; il ne doit pas servir de file d'attente invisible pendant des semaines. Erreur : garder six personnes « en réserve » sans jamais les informer.\n\nDans les trois cas, le cadre légal reste le même : pas d'obligation générale de motiver ; obligation de ne pas discriminer ; droit d'accès aux données si le candidat le demande. Un refus final n'autorise pas davantage un commentaire sur l'âge, le sexe, l'origine, l'état de santé ou tout autre critère protégé."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Créez trois statuts ATS distincts, même si les libellés internes varient : refusé, en attente (décision ouverte + date), réserve courte (n°1 en cours de décision / d'acceptation + date de caducité).\n\nPour le refus final : bloquez 15 minutes, appelez, tenez le script, laissez une brève place à la réaction, ne négociez pas la décision au téléphone si elle est close, confirmez par e-mail.\n\nPour l'attente : écrivez la date d'update et le motif d'attente (dernier entretien, arbitrage, validation). Si la date saute, prévenez avant l'échéance.\n\nPour la réserve : fixez une durée (par exemple 5 à 10 jours ouvrés, règle interne, pas un délai légal). Au terme, soit vous activez, soit vous refusez."
            },
            {
              "block_type": "code",
              "content": "MODÈLE — REFUS FINAL (e-mail de confirmation après appel)\nObjet : Suite du process — [intitulé]\n\nBonjour [Prénom],\n\nComme échangé à l'instant, nous avons le regret de vous informer que nous ne retiendrons pas votre candidature pour le poste de [intitulé].\n\nLa décision s'appuie sur l'adéquation globale avec le besoin actuel, notamment [critère professionnel si autorisé]. Elle ne remet pas en cause la qualité des échanges.\n\nNous vous remercions sincèrement du temps consacré et de l'intérêt porté à [entreprise].\n\nCordialement,\n[...]\n\n---\nMODÈLE — MISE EN ATTENTE\nObjet : Point d'étape — [intitulé]\n\nBonjour [Prénom],\n\nLe process est toujours en cours. L'arbitrage n'est pas clos à ce jour (étape restante : [préciser]).\n\nJe vous donne une information ferme au plus tard le [date]. Sans nouvelle de notre part à cette date, relancez-moi.\n\nMerci de votre patience.\n\n---\nMODÈLE — RÉSERVE COURTE (sans dire « plan B »)\nObjet : Suite de votre candidature — [intitulé]\n\nBonjour [Prénom],\n\nNous n'avons pas encore clos la décision. Votre candidature reste active à ce stade.\n\nJe reviens vers vous au plus tard le [date] avec une issue claire : poursuite ou clôture.\n\nMerci de votre compréhension."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Cabinet de recrutement, mission cadre commercial pour une ETI industrielle. Deux finalistes. Le client choisit A. Le consultant junior veut garder B « au cas où » pendant un mois, sans rien dire, parce que A n'a pas encore signé.\n\nDécision : informer B d'une attente datée de 7 jours (règle cabinet), pas d'un mois de silence. Si A signe, refus final de B par téléphone. Si A se désiste, réactiver B immédiatement, sans laisser croire qu'il était le premier choix si ce n'était pas le cas."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Dire « vous étiez excellent, on ne comprend pas » : cela décrédibilise la décision et pousse le candidat à contester.\n\nPromettre un feedback détaillé que le manager refuse ensuite de donner.\n\nUtiliser « on vous met en vivier » comme substitut d'un refus, sans information RGPD ni réel suivi.\n\nAnnoncer le refus final en copie à toute la shortlist."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Offre déjà orale au n°1 : le n°2 est en réserve réelle. Le message d'attente est honnête. Le refus n'est envoyé qu'à l'acceptation écrite ou à la date butoir.\n\nÉgalité interne entre deux candidats : le refus final doit s'appuyer sur des critères de poste, pas sur « on s'entend mieux avec ». Si les faits d'entretien ne departagent pas, c'est un défaut de grille, à traiter en amont.\n\nCandidat qui demande « qui a été pris ? » : vous ne communiquez pas l'identité du retenu. Vous clôturez sur le poste et les critères."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Rédigez deux e-mails différents pour le même candidat finaliste non retenu : a) refus définitif le jour où le n°1 a signé ; b) attente de 5 jours ouvrés pendant que le n°1 décide. Indiquez pourquoi vous ne pouvez pas envoyer le même texte."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Le texte a) clôture : décision, remerciement, pas de date de « peut-être ». Le texte b) maintient une candidature active et une date. Envoyer a) trop tôt perd le plan B. Envoyer b) après signature du n°1 est un mensonge de process. Le bon texte dépend du statut réel, pas de l'envie d'être aimé."
            }
          ],
          "position": 2
        },
        {
          "title": "Demandes d'explications, contestation et mécontentement",
          "description": "Répondre à un candidat qui veut comprendre, qui conteste, ou qui manifeste sa colère, sans improvisation juridique.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez traiter une demande d'explications métier (feedback) sans la confondre avec une demande d'accès RGPD ni avec une contestation pour discrimination.\n\nVous savez recadrer un échange agressif, tracer, et escalader lorsque le sujet sort de votre mandat.\n\nVous savez ce que vous ne devez jamais écrire pour « calmer »."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Trois demandes se ressemblent dans la boîte mail et n'ont pas le même régime.\n\nLa demande d'explications métier : « Pourquoi n'ai-je pas été retenu ? Qu'aurais-je dû faire autrement ? » Ce n'est pas, en soi, une obligation légale de motiver. C'est une demande de feedback. La politique interne peut l'autoriser, le limiter aux personnes reçues en entretien, ou l'interdire au junior. Si vous répondez, le contenu reste professionnel, rattaché à des faits d'évaluation et aux critères du poste. Vous ne comparez pas à un autre candidat nommé. Vous ne diagnostiquez pas la personne (« vous n'êtes pas fait pour ce métier »).\n\nLa demande d'accès aux données : « Transmettez-moi mon dossier, vos notes, vos scores, les e-mails internes. » C'est un exercice de droits RGPD. Vous n'êtes pas le DPO. Vous accusez réception, vous transmettez au circuit prévu, vous ne filtrez pas « au feeling » les pièces, vous ne promettez pas un envoi le soir même si la procédure prévoit un délai interne. Le droit d'accès existe ; son instruction suit la procédure, y compris les éventuelles limites liées aux droits de tiers ou au secret des affaires, que le juriste ou le DPO tranche, pas le junior.\n\nLa contestation : le candidat estime que la décision est illégale, discriminatoire, ou fondée sur une question interdite. Le risque n'est plus relationnel seulement : il devient juridique et réputationnel. Décision recommandée : rester courtois, ne pas plaider le dossier par e-mail, ne pas détruire de traces, alerter le responsable et les RH, consigner les faits. Un recruteur junior qui « explique pour convaincre » aggrave souvent le dossier en ajoutant des phrases maladroites.\n\nLe mécontentement sans contestation juridique (ton agressif, menace de bad buzz, injures) se traite par un recadrage calme, une clôture de l'échange si besoin, et une alerte si la menace vise une personne. Vous n'êtes pas tenu d'accepter un échange irrespectueux. Vous restez professionnel jusqu'au bout.\n\nDans tous les cas, le moment compte. Une réponse rapide qui dit « nous avons bien reçu, voici le circuit » vaut mieux qu'un silence de dix jours suivi d'une dissertation. Le message doit coller au type de demande. L'erreur classique est de répondre à une demande RGPD par un feedback métier, ou à une accusation de discrimination par un argument d'âge ou de « fit culturel » encore plus risqué."
            },
            {
              "block_type": "callout",
              "content": "Une demande d'accès RGPD n'oblige pas à motiver le refus d'embauche. Un feedback métier n'épuise pas un droit d'accès. Une allégation de discrimination sort du mandat d'un junior : escalade immédiate, pas de débat d'opinion."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Classez le mail en une des trois cases (feedback / accès / contestation) avant d'écrire. Si le mail mélange les trois, traitez-les dans cet ordre : accusé de réception global, circuit RGPD, position métier courte, escalade si discrimination alléguée.\n\nPour le feedback : une à trois phrases factuelles maximum, validées si besoin par le manager. Proposez un appel de 10 minutes plutôt qu'un e-mail long si le candidat a atteint le dernier tour.\n\nPour le RGPD : modèle d'accusé + transfert interne le jour même.\n\nPour la contestation : pas de fond sans responsable. Accusé, information que le sujet est transmis, conservation des écrits."
            },
            {
              "block_type": "code",
              "content": "MODÈLE — DEMANDE D'EXPLICATIONS MÉTIER (après entretien, politique = motif court)\nObjet : Re : Votre demande d'explications — [poste]\n\nBonjour [Prénom],\n\nNous confirmons que votre candidature n'a pas été retenue.\n\nAu regard des critères du poste, nous avons notamment privilégié une expérience plus directe sur [critère professionnel]. Ce retour est factuel et limité à ce process.\n\nNous vous remercions encore du temps consacré.\n\nCordialement,\n[...]\n\n---\nMODÈLE — DEMANDE D'ACCÈS RGPD (accusé junior)\nObjet : Re : Votre demande d'accès à vos données\n\nBonjour [Prénom],\n\nNous avons bien reçu votre demande d'accès à vos données personnelles relatives au recrutement.\n\nElle est transmise ce jour à [RH / DPO / référent], qui l'instruit selon notre procédure. Vous recevrez une réponse par ce circuit.\n\nCordialement,\n[...]\n\n---\nMODÈLE — CONTESTATION / DISCRIMINATION ALLÉGUÉE\nObjet : Re : Votre message du [date]\n\nBonjour [Prénom],\n\nNous avons bien pris connaissance de votre message. Votre demande est transmise à [responsable recrutement / RH].\n\nNous vous répondrons par ce canal. Nous ne commentons pas davantage à ce stade.\n\nCordialement,\n[...]\n\n---\nSCRIPT TÉLÉPHONIQUE — CANDIDAT MÉCONTENT\n\n« Je vous écoute. Je comprends que la décision soit décevante.\nJe peux rappeler le cadre : la candidature n'a pas été retenue pour ce poste, sur des critères professionnels.\nJe ne peux pas débattre d'un autre candidat, ni modifier la décision à l'oral.\nSi vous souhaitez exercer un droit d'accès à vos données, je vous indique le circuit : [adresse / formulaire].\nSi votre message concerne un autre sujet, je transmets à mon responsable.\nJe clôture cet échange ici. Un e-mail de confirmation part aujourd'hui. »"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Services informatiques, ETI. Un candidat non retenu après dernier entretien écrit : « Vous m'avez demandé si j'avais des enfants, c'est illégal, je vais au Défenseur des droits, et je veux toutes les notes. » Le junior a effectivement laissé le manager poser cette question sans recadrer.\n\nDécision : ne pas nier par mail, ne pas justifier la question, alerter RH et responsable, consigner l'incident, accuser réception de la demande d'accès, ouvrir le traitement de la contestation. En parallèle, le junior fait un REX : la question sur les enfants n'a pas de lien nécessaire avec l'emploi (L. 1221-6) et touche un critère protégé (situation de famille)."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Écrire « nous ne discriminons jamais » dans un mail de dix lignes : formule défensive, peu utile, parfois contredite par le process réel.\n\nDonner un feedback improvisé pour éviter l'escalade (« c'est surtout votre personnalité »).\n\nSupprimer des commentaires ATS après la contestation.\n\nArgumenter sur les réseaux sociaux ou répondre à un avis public sans consigne communication.\n\nPromettre « je vous envoie le dossier ce soir »."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Candidat interne qui conteste auprès de son manager actuel : coordination RH obligatoire. Le junior ne gère pas seul un conflit hiérarchique.\n\nMessage copié à un syndicat, à un avocat, ou à la direction générale : escalade immédiate, style encore plus sobre.\n\nMenace de publication de messages internes : ne pas polémiquer ; informer le responsable et, selon la politique, la communication interne."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Classez et répondez (structure seulement, 5 lignes max par réponse) à ces trois extraits : 1) « Dites-moi franchement ce qui n'allait pas, j'ai besoin de progresser. » 2) « Envoyez-moi toutes les données que vous avez sur moi. » 3) « Vous m'avez écarté parce que je suis trop vieux, c'est scandaleux. »"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1) Feedback métier : possible si politique ok ; faits de poste ; pas de psychologie. 2) Accusé RGPD + transfert DPO/RH ; pas de dossier en pièce jointe improvisée. 3) Escalade ; accusé neutre ; aucun débat sur l'âge. Pourquoi : trois régimes, trois circuits. Un seul e-mail « fourre-tout » mélange les risques."
            }
          ],
          "position": 3
        },
        {
          "title": "Ghosting, refus d'offre et désistement",
          "description": "Agir lorsque le candidat disparaît, refuse l'offre, ou se désiste après avoir dit oui, côté candidat comme côté process interne.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez relancer un candidat silencieux avec un nombre d'essais limité, puis clôturer sans dramatiser.\n\nVous savez traiter un refus d'offre comme une information de marché, pas comme un affront personnel.\n\nVous savez gérer un désistement tardif : sécuriser le plan B, informer le manager, tracer, sans pression déloyale."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le ghosting désigne ici le silence d'un candidat alors qu'une étape est ouverte : non-réponse aux relances, absence à un entretien sans message, disparition après une proposition. Ce n'est pas une infraction. C'est un fait de process. Le problème pour le junior est l'incertitude : le poste reste bloqué, le manager s'impatiente, le plan B n'est pas activé. Le risque est d'attendre trop longtemps par espoir, ou à l'inverse d'accuser le candidat dans un mail émotionnel. Décision recommandée : relances cadencées (par exemple J+1, J+3, J+5 ouvrés — rythme interne, pas un délai légal), canal mixte e-mail + téléphone, puis clôture ATS « sans réponse » et activation du suivant. Message final : court, factuel, porte ouverte professionnelle. Erreur : dix relances, ou un message culpabilisant.\n\nLe refus d'offre est une décision du candidat. Le problème n'est pas « il a dit non » : c'est de comprendre le motif utile (rémunération, contenu, délai, contre-offre, mobilité, sentiment de process) sans interroger au-delà du professionnel, puis d'en faire un REX avec le manager. Le risque est de négocier hors mandat, de dénigrer le candidat auprès du manager, ou de forcer. Décision : accuser réception, remercier, demander un motif court s'il est donné librement, clôturer, proposer le plan B. Le moment : le jour du refus. Erreur : laisser l'offre « ouverte » sans date alors que le candidat a dit non.\n\nLe désistement (après acceptation orale ou écrite, avant ou parfois après formalisation) est plus grave opérationnellement. Selon le stade, les effets juridiques ne sont pas les mêmes : une offre de contrat n'est pas une promesse unilatérale ; une promesse unilatérale d'embauche, si elle est constituée, vaut contrat et le retrait s'analyse autrement. Ces notions ne sont pas définies par la loi ; elles sont encadrées par la jurisprudence, expliquée notamment par Service-Public (F39588, vérifié le 12/03/2026). Le junior ne qualifie pas seul l'acte. Il alerte RH si un écrit d'engagement a été envoyé. Côté pratique : informer le manager, mesurer si le plan B est encore joignable, ne pas menacer le candidat, ne pas inventer de pénalité. Un désistement n'autorise pas non plus un commentaire discriminatoire (« encore une femme qui change d'avis »).\n\nLe ghosting employeur existe aussi : ne plus répondre à un candidat. Ce n'est pas une stratégie. C'est un défaut de process, traité dans les leçons de communication. Vous ne l'imitez pas parce qu'un candidat l'a fait."
            },
            {
              "block_type": "callout",
              "content": "Ne qualifiez pas seul un échange d'« offre » ou de « promesse d'embauche ». Si un écrit d'engagement a circulé et que le candidat se désiste ou que l'entreprise se rétracte, RH et, si besoin, un juriste tranchent. Source de cadrage : Service-Public F39588, vérifié le 12/03/2026."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Ghosting : trois tentatives maximum sur des canaux différents, délais écrits dans l'ATS, clôture. N'attendez pas le manager pour relancer ; attendez-le pour activer un n°2 s'il faut arbitrer.\n\nRefus d'offre : appel si le candidat a répondu par mail d'une ligne ; question ouverte sur le motif ; restitution factuelle au manager ; mise à jour des hypothèses (salaire, délai, contenu).\n\nDésistement : chronologie des écrits, information RH, décision de republier ou d'activer la réserve, message de clôture au candidat sans reproche."
            },
            {
              "block_type": "code",
              "content": "MODÈLE — RELANCE PUIS CLÔTURE GHOSTING\nObjet : Dernière relance — [poste] — réponse souhaitée avant le [date]\n\nBonjour [Prénom],\n\nJe n'ai pas eu de retour à mes messages des [dates].\n\nSans réponse de votre part avant le [date, heure], je clôturerai cette candidature pour ce poste.\n\nVous pouvez bien sûr me relancer ultérieurement si votre situation change.\n\nCordialement,\n[...]\n\n---\nMODÈLE — PRISE D'ACTE D'UN REFUS D'OFFRE\nObjet : Prise d'acte — proposition [poste]\n\nBonjour [Prénom],\n\nNous prenons acte de votre décision de décliner la proposition pour le poste de [intitulé].\n\nNous vous remercions d'avoir considéré cette opportunité. Si vous souhaitez nous indiquer le motif principal, cela nous aide à améliorer nos process ; ce n'est pas une obligation.\n\nNous vous souhaitons une pleine réussite.\n\n---\nSCRIPT — DÉSISTEMENT APRÈS ACCORD ORAL\n\n« J'entends que vous retirez votre accord. Je prends acte.\nJe ne vais pas argumenter pour vous faire changer d'avis contre votre intérêt.\nPouvez-vous me dire le motif principal, si vous le souhaitez : contenu, rémunération, délai, autre projet ?\nJe transmets à l'équipe. Les éventuelles suites administratives seront gérées par [RH] si un écrit a été émis.\nJe vous remercie d'avoir prévenu. »"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Agence d'intérim. Un intérimaire confirme une mission le vendredi, ne se présente pas le lundi, n'est pas joignable. Le junior veut envoyer un SMS : « Grâce à vous on a un client furieux, ne comptez plus sur nous. »\n\nDécision : constater l'absence, informer le client selon la procédure agence, clôturer la mission dans l'outil, tracer. Un message factuel de clôture suffit. Le commentaire punitif n'aide pas le client, expose l'agence, et ne sécurise pas le remplacement."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Attendre deux semaines un candidat silencieux alors qu'un plan B disponible s'étiole.\n\nNégocier une contre-offre hors mandat pour « sauver » un oui.\n\nMenacer d'un signalement à Pôle emploi / France Travail ou d'une « liste noire ».\n\nCulpabiliser un refus d'offre (« on a tout fait pour vous »).\n\nOublier d'informer le manager le jour du désistement."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Absence à entretien : une relance le jour même, une seconde le lendemain, puis clôture. Proposez un report une fois si le motif est sérieux et le planning tenable.\n\nRefus d'offre pour contre-offre de l'employeur actuel : notez le motif, ne dénigrez pas l'employeur actuel, ne surenchérissez pas sans mandat.\n\nDésistement d'un candidat déjà annoncé à l'équipe : le manager annonce l'annulation en interne ; le junior ne laisse pas filtrer de détails personnels."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le n°1 n'a pas répondu depuis 4 jours ouvrés à une offre envoyée avec une date de validité à J+5. Le n°2 est en réserve et vous a demandé un point hier. Que faites-vous aujourd'hui, demain, et à J+5 ? Rédigez le mail au n°2 pour aujourd'hui."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Aujourd'hui : relance n°1 (téléphone + e-mail), information manager, mail d'attente daté au n°2 (« décision non close, update au plus tard [date de validité de l'offre] »). Demain : seconde relance n°1 si silence. À J+5 sans réponse : clôture n°1 pour silence, activation n°2 si le manager confirme, sans dire que le n°1 a disparu. Pourquoi : vous ne sacrifiez pas le n°2 au silence, vous ne le mentiez pas non plus en lui promettant le poste aujourd'hui."
            }
          ],
          "position": 4
        },
        {
          "title": "Quand l'entreprise change la donne : avis du manager, annulation, suspension, pourvoi interne",
          "description": "Parler aux candidats lorsque le besoin bouge côté employeur, sans faire porter à autrui une décision interne.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez agir lorsque le manager change d'avis, lorsque le poste est annulé, suspendu, ou pourvu en interne.\n\nVous savez qui décide, qui informe les candidats, et quel niveau de vérité vous pouvez dire sans exposer l'entreprise ni humilier les personnes.\n\nVous savez distinguer un report d'un abandon, et un pourvoi interne d'un refus « classique »."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le process ne se casse pas seulement côté candidat. L'employeur peut modifier le besoin. Quatre situations types se distinguent.\n\nLe manager change d'avis : après avoir validé un profil, il veut « voir encore deux personnes », ou il écarte un finaliste qu'il avait soutenu, ou il durcit un critère. Problème : le junior a déjà engagé la parole du process (délais, étapes, parfois une intention d'offre). Risques : perte de confiance des candidats, conflit avec le manager, décisions incohérentes dans l'ATS. Décision recommandée : recadrer le besoin par écrit (nouvelle grille, nouveau délai), ne pas promettre au candidat ce que le manager vient d'annuler, faire arbitrer votre responsable si le changement est tardif et coûteux. Moment : le jour du changement, pas « on verra lundi ». Message interne : faits et impact (candidats en attente, délais, risque de désistement). Message externe : uniquement ce qui est sûr. Erreur : critiquer le manager auprès du candidat, ou exécuter sans reformuler le besoin.\n\nLe poste est annulé : le besoin disparaît (budget, réorganisation, fusion, abandon de projet). Problème : des personnes ont investi. Risques : image, parfois contestation si l'annulation masque un autre motif. Décision : arrêter immédiatement les entretiens, informer tous les candidats encore actifs, ne pas inventer un « profil non retenu » pour éviter d'avouer l'annulation. Un motif d'annulation de poste est souvent plus propre qu'un faux refus individuel. Moment : dès la confirmation écrite interne. Erreur : laisser l'annonce en ligne.\n\nLe recrutement est suspendu : le besoin n'est pas mort, il est reporté. Problème : confusion avec l'annulation. Risques : garder des candidats dans un limbe, ou les refuser trop tôt puis les rappeler. Décision : message de suspension avec une date de réinformation, proposition de clôturer si le candidat le souhaite, conservation selon la mention RGPD. Si aucune date n'est possible, traitez plutôt comme une annulation avec vivier. Erreur : « on vous rappelle » sans jamais rappeler.\n\nLe poste est pourvu en interne : un salarié est retenu. Les candidats externes (et parfois d'autres internes) doivent être informés. Problème : tentation de dire « on a trouvé mieux dehors » ou, à l'inverse, de cacher l'interne par gêne. Risques : rumeur interne, sentiment d'avoir servi de faire-valoir. Décision : indiquer que le poste a été pourvu, éventuellement qu'une candidature interne a été retenue si la politique le permet, sans évaluer les externes à la baisse. Les internes non retenus relèvent d'un traitement RH. Erreur : continuer à recevoir des externes « pour la forme » alors que la décision interne est déjà prise — pratique déloyale, et incompatible avec des méthodes pertinentes (L. 1221-9).\n\nLe cadre légal ne crée pas d'obligation générale de motiver le refus des personnes non retenues. Il impose de ne pas discriminer. Un pourvoi interne n'autorise pas d'écarter un externe pour un critère protégé. Un changement d'avis du manager n'autorise pas de nouvelles questions hors L. 1221-6."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Exigez un écrit interne (e-mail manager, ticket ATS, validation direction) avant d'informer les candidats d'une annulation, d'une suspension ou d'un pourvoi interne.\n\nListez les candidatures actives par statut. Priorisez : personnes en attente d'offre, personnes convoquées cette semaine, puis le reste.\n\nAppelez les personnes les plus avancées ; e-mail pour les autres. Retirez ou mettez hors ligne l'annonce. Stoppez les sourcings en cours. Informez les cabinets partenaires le jour même.\n\nProposez, si réel, un autre poste ou un vivier. Ne le promettez pas pour vous faire pardonner."
            },
            {
              "block_type": "code",
              "content": "MODÈLE — POSTE ANNULÉ\nObjet : Information importante — poste [intitulé]\n\nBonjour [Prénom],\n\nNous vous informons que le recrutement pour le poste de [intitulé] est annulé. Cette décision est liée à [réorganisation / budget / abandon de projet — formulation validée en interne], et non à l'évaluation de votre candidature.\n\nLes entretiens éventuellement planifiés sont annulés. Nous vous remercions d'avoir accordé du temps à ce process.\n\nSi vous acceptez que nous conservions votre dossier pour d'autres opportunités, cela se fera selon les informations déjà communiquées sur la durée de conservation et vos droits.\n\nCordialement,\n[...]\n\n---\nMODÈLE — RECRUTEMENT SUSPENDU\nObjet : Suspension du recrutement — [intitulé]\n\nBonjour [Prénom],\n\nLe recrutement est suspendu à ce jour. Nous ne sommes pas en mesure de garantir une reprise à une date ferme.\n\nJe vous donne un point au plus tard le [date]. Si vous souhaitez que nous clôturions dès maintenant votre candidature, indiquez-le-moi.\n\n---\nMODÈLE — POURVU EN INTERNE\nObjet : Suite de votre candidature — [intitulé]\n\nBonjour [Prénom],\n\nLe poste de [intitulé] a été pourvu. Une candidature interne a été retenue.\n\nNous vous remercions d'avoir participé à ce process. Votre candidature n'a pas été écartée pour un motif autre que le choix effectué sur ce besoin.\n\n---\nSCRIPT — MANAGER QUI CHANGE D'AVIS (interne)\n\n« Je prends note du nouveau critère [X]. Aujourd'hui, trois candidats ont déjà passé [étape] sur la base de l'ancien cadrage.\nDeux options : on reprend un avenant de fiche et on informe les personnes concernées du changement d'étape, ou on clôture ce process et on en ouvre un autre.\nJe ne peux pas dire aux finalistes que rien n'a changé. Dites-moi l'option retenue par écrit. »"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Industrie, usine de 250 personnes. Un chef d'atelier dit le lundi : « Recrute un régleur. » Le vendredi, après trois préqualifications, RH apprend qu'un salarié d'un autre site va muter sur le poste. Le junior a un entretien lundi déjà confirmé.\n\nDécision : annuler l'entretien, appeler le candidat, expliquer un pourvoi interne, ne pas le recevoir « quand même ». Informer les deux autres préqualifiés par e-mail le vendredi. Tracer le motif réel : mobilité interne, pas « profil insuffisant »."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Laisser le rendez-vous lundi « pour ne pas faire désordre ». Faire passer des gens pour un poste déjà attribué n'est pas une politesse ; c'est une déloyauté de process.\n\nBlâmer le manager dans l'e-mail au candidat.\n\nAnnoncer une suspension sans date de réinformation, puis disparaître.\n\nTransformer tous les externes en « refusés pour compétences » afin de masquer un interne."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Annulation après une offre orale : alerte RH immédiate. Selon la qualification de l'écrit ou de l'oral (offre vs promesse unilatérale), les conséquences ne sont pas du ressort du junior.\n\nSuspension liée à un PSE ou à un gel des embauches : formulations validées par RH / communication interne uniquement.\n\nManager qui change d'avis pour un motif discriminatoire : vous n'exécutez pas ; vous alertez."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Quatre candidats actifs : A a une offre orale en cours de rédaction, B a un entretien demain, C a envoyé un CV hier, D est en réserve. Le directeur annule le poste ce soir. Ordre des actions et canal pour chacun."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Stop annonce et convocations. Alerte RH pour A (offre orale : pas d'improvisation juridique). Appel A puis B ce soir ou demain matin très tôt, avant l'heure de l'entretien. E-mail C et D : annulation de poste, pas un faux refus de profil. Pourquoi : plus le candidat est avancé, plus le canal est oral et rapide. Le contenu reste le même : le poste n'existe plus, ce n'est pas une évaluation de la personne."
            }
          ],
          "position": 5
        },
        {
          "title": "Retards, erreurs de communication et rattrapage",
          "description": "Corriger un oubli, un mauvais destinataire, un délai non tenu ou une information erronée, sans aggraver la situation.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez reconnaître une erreur de communication, en mesurer l'impact, et envoyer un rectificatif clair.\n\nVous savez gérer un retard de process annoncé, un e-mail parti au mauvais destinataire, ou une information contradictoire entre recruteur et manager.\n\nVous savez quand l'erreur reste opérable par vos soins et quand elle exige une escalade."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le retard n'est pas un refus. C'est un écart entre la date promise et la date réelle. Le problème : le candidat comble le vide par une hypothèse (on l'a oublié, on l'a écarté, le poste est pourvu). Le risque : désistement, mauvaise image, relance agressive, ou au contraire silence du candidat qui a déjà accepté ailleurs. Décision recommandée : prévenir avant l'échéance, donner une nouvelle date, s'y tenir. Si vous n'avez pas l'information, dites-le plutôt que d'inventer un motif. Moment : dès que vous savez que la date va sauter. Message : excuse factuelle, nouvelle date, pas de roman. Erreur : disparaître pour « attendre d'avoir une bonne nouvelle ».\n\nL'erreur de communication recouvre plusieurs faits : mauvais destinataire (CV ou notes envoyés à la mauvaise personne), mauvais contenu (salaire annoncé hors cadrage, étape inventée, refus envoyé au candidat retenu), contradiction public (annonce encore en ligne alors que le poste est pourvu), copie inutile qui expose des données. Le risque RGPD est réel : une donnée personnelle envoyée au mauvais destinataire est un incident. Décision : cesser l'erreur (rappel d'e-mail si possible, demande de suppression), informer le responsable et le circuit incident si des données de tiers ont fuité, prévenir les personnes concernées selon la procédure, corriger le message métier. Le junior ne décide pas seul si l'incident est « notifiable ». Il alerte.\n\nLe rattrapage a une règle : un seul rectificatif clair vaut mieux que trois messages d'excuse. Vous nommez l'erreur utile (« un e-mail de refus vous a été adressé par erreur ; votre candidature est toujours au stade X »), vous dites l'état réel, vous proposez un canal pour questions. Vous n'ajoutez pas de détails inutiles qui créent de nouvelles questions.\n\nLe cadre : pas d'obligation générale de motiver un refus ; obligation de ne pas discriminer ; obligation de traiter les données de façon loyale et de réagir à un incident selon la procédure interne, en lien avec le RGPD. Une erreur de com n'autorise pas à « rattraper » en révélant des informations sur un autre candidat."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1) Qualifier : retard simple, contradiction métier, ou incident de données. 2) Stopper la source (modèle d'e-mail, annonce, accès ATS). 3) Informer le responsable si incident ou si candidat finaliste. 4) Rectifier les destinataires concernés, un par un. 5) Tracer dans l'ATS. 6) REX : cause, pas coupable unique."
            },
            {
              "block_type": "code",
              "content": "MODÈLE — RETARD ANNONCÉ AVANT L'ÉCHÉANCE\nObjet : Décalage d'information — [poste]\n\nBonjour [Prénom],\n\nJe m'étais engagé à vous donner une suite le [date]. L'arbitrage n'est pas clos.\n\nJe vous écris avant cette échéance pour vous proposer une nouvelle date : le [nouvelle date].\n\nVotre candidature reste en cours. Merci de votre compréhension.\n\n---\nMODÈLE — REFUS ENVOYÉ PAR ERREUR\nObjet : Rectificatif important — votre candidature est toujours en cours\n\nBonjour [Prénom],\n\nUn message de clôture vous a été adressé par erreur aujourd'hui. Il ne correspond pas à la décision réelle.\n\nVotre candidature au poste de [intitulé] est toujours au stade : [étape]. Prochaine action : [date / entretien / arbitrage].\n\nJe reste disponible par téléphone au [numéro] pour en reparler.\n\nVeuillez m'excuser pour cette erreur.\n\n---\nMODÈLE — MAUVAIS DESTINATAIRE (données)\nObjet : Message envoyé par erreur — merci de supprimer\n\nBonjour,\n\nLe message précédent, ainsi que ses pièces, ne vous était pas destiné. Merci de le supprimer et de ne pas en faire usage.\n\nConfirmez-moi cette suppression en répondant à cet e-mail.\n\n[Puis : alerte interne RH / DPO / responsable selon procédure incident]"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Cabinet. Le junior envoie un tableau de shortlist (noms, prénoms, prétentions, commentaires) au mauvais client, homonyme d'entreprise. Il s'en aperçoit dix minutes plus tard.\n\nDécision : e-mail de rappel immédiat, demande de suppression, alerte au consultant responsable et au circuit incident, pas d'attente du lendemain. Le rectificatif métier au bon client se fait ensuite, avec un tableau à jour. Pas de détail sur l'incident dans un mail aux candidats."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Ajouter une copie au manager « pour info » contenant encore la mauvaise pièce.\n\nMentir sur la cause (« problème informatique ») lorsque la cause est une mauvaise liste de diffusion : le mensonge empêche le REX.\n\nEnchaîner trois excuses personnelles longues, sans dire l'état du process.\n\nCorriger un salaire annoncé à la hausse sans mandat, pour compenser le retard."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Erreur découverte par le candidat (il a reçu le refus d'un autre) : excuses, pas de commentaire sur l'autre personne, incident données, escalade.\n\nRetard causé par le manager qui ne débriefe pas : vous relancez le manager par écrit, vous informez le candidat du décalage, vous n'inventez pas un avis.\n\nDouble information contradictoire (le manager a dit « c'est bon » au candidat, vous envoyez un mail d'attente) : alignement immédiat en interne, un seul message de clarification signé du process."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Vous aviez promis une réponse vendredi 17 h. Il est vendredi 16 h 45, le manager n'a pas tranché. Rédigez l'e-mail de 16 h 50. Puis, lundi, le manager refuse. Rédigez le second e-mail. Pourquoi ne pas attendre lundi sans écrire vendredi ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vendredi : vous respectez votre parole de process en annonçant le décalage, nouvelle date lundi. Lundi : refus clair, canal adapté à l'étape. Sans le mail de vendredi, le candidat passe le week-end à interpréter le silence, parfois en se désistant. Le retard géré n'est pas un refus ; le silence, si."
            }
          ],
          "position": 6
        },
        {
          "title": "Bibliothèque de modèles : e-mails et scripts pour les situations délicates",
          "description": "Disposer de textes prêts à adapter, classés par situation, avec consignes d'usage et limites juridiques.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 24,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez choisir un modèle selon la situation, l'adapter (noms, poste, date, critère professionnel autorisé), et le relire contre les critères protégés.\n\nVous savez quand passer du mail au téléphone, et quand ne pas utiliser de modèle du tout (contestation, incident RGPD, offre/promesse)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un modèle n'est pas une obligation légale. C'est un outil de politique interne et de bonne pratique : il réduit les écarts de ton, les oublis, et les phrases risquées. Il ne remplace pas la décision. Si le statut ATS est faux, le plus beau mail est un mensonge.\n\nAdaptez toujours : intitulé exact, prénom, date de l'échange, prochaine étape réelle. N'ajoutez pas de motif « pour faire humain » si vous n'avez pas de fait professionnel. N'ornez pas d'un « vous étiez le meilleur » qui contredit la décision.\n\nLes scripts téléphoniques se lisent comme une structure, pas comme un texte dit mot à mot. Le silence après l'annonce du refus fait partie du respect. Vous ne remplissez pas ce silence par un roman.\n\nRappel de cadre, valable pour tous les modèles : pas d'obligation légale générale de motiver un refus ; obligation de ne pas discriminer (L. 1132-1) ; informations et méthodes d'évaluation circonscrites au professionnel (L. 1221-6, L. 1221-8, L. 1221-9) ; droit d'accès aux données si le candidat le demande, via le circuit RGPD, distinct du feedback métier ; conservation probatoire et vivier selon CNIL / L. 1134-5, sans transformer le mail de refus en cours de droit.\n\nLes modèles ci-dessous couvrent les situations déjà analysées : refus CV, préqual, premier entretien, refus final, attente, réserve, explications, mécontentement, ghosting, refus d'offre, désistement, changement d'avis, poste annulé, suspension, pourvoi interne, retard, erreur de com. Ils sont rédigés pour un recruteur junior en entreprise, en cabinet ou en agence ; le pied de signature change, pas le principe."
            },
            {
              "block_type": "callout",
              "content": "Avant envoi : relire le message à la recherche d'un critère L. 1132-1, d'une comparaison nominative, d'une promesse d'autre poste non réelle, et d'une pièce jointe trop large. Si le candidat demande ses données, n'utilisez pas un modèle de feedback : utilisez l'accusé d'accès."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1) Identifier la situation type. 2) Vérifier le statut réel. 3) Choisir le canal. 4) Copier le modèle. 5) Personnaliser. 6) Faire relire un refus final ou une erreur de com par un pair / responsable si vous débutez. 7) Envoyer et tracer. 8) Ne pas engager de fil de discussion infini : une réponse de clarification, puis clôture ou escalade."
            },
            {
              "block_type": "code",
              "content": "A. REFUS CV — version courte\nObjet : Votre candidature — [poste]\nBonjour [Prénom],\nNous vous remercions d'avoir candidaté au poste de [poste] au sein de [entreprise].\nNous ne donnerons pas de suite favorable à votre candidature pour ce poste.\nNous vous souhaitons une pleine réussite dans vos recherches.\nCordialement,\n[signature]\n\nB. REFUS PRÉQUALIFICATION — avec motif court autorisé\nObjet : Suite de notre échange du [date]\nBonjour [Prénom],\nMerci pour notre échange. Nous ne poursuivrons pas : le poste exige [critère professionnel], que ce process ne permet pas de couvrir.\nJe vous remercie du temps accordé.\n\nC. REFUS 1ER ENTRETIEN — confirmation après appel\nObjet : Confirmation — suite du process [poste]\nBonjour [Prénom],\nComme évoqué par téléphone, nous ne donnons pas suite après l'entretien du [date].\nCette décision porte sur l'adéquation avec le besoin actuel, notamment [critère].\nMerci encore.\n\nD. REFUS FINAL — confirmation\n(voir leçon refus final ; appel obligatoire si process avancé)\n\nE. ATTENTE DATÉE\nObjet : Point d'étape au [date]\nBonjour [Prénom],\nLe process n'est pas clos (étape restante : [X]). Prochaine information ferme le [date].\n\nF. RÉSERVE COURTE\nObjet : Votre candidature reste active jusqu'au [date]\nBonjour [Prénom],\nNous n'avons pas encore d'issue définitive. Je vous écris au plus tard le [date] pour une poursuite ou une clôture.\n\nG. DEMANDE D'EXPLICATIONS — sans obligation de développer\nBonjour [Prénom],\nNous confirmons la non-sélection pour ce poste. Nous ne formulons pas de commentaire détaillé au-delà des critères professionnels déjà évoqués.\nSi votre message est une demande d'accès à vos données, indiquez-le clairement : nous transmettrons au circuit prévu.\n\nH. MÉCONTENTEMENT — recadrage\nBonjour [Prénom],\nNous avons pris connaissance de votre message. La décision de ne pas retenir la candidature est maintenue.\nNous poursuivrons l'échange si des faits nouveaux professionnels sont à corriger, ou si vous exercez un droit sur vos données via [contact].\nNous ne poursuivrons pas un échange irrespectueux.\n\nI. CLÔTURE GHOSTING\nBonjour [Prénom],\nSans retour à nos relances des [dates], nous clôturons cette candidature à la date du [date].\n\nJ. REFUS D'OFFRE — prise d'acte\nBonjour [Prénom],\nNous prenons acte de votre décision de décliner la proposition. Merci de nous avoir informés.\n\nK. DÉSISTEMENT — prise d'acte\nBonjour [Prénom],\nNous prenons acte de votre désistement. Les éventuelles suites liées à un écrit déjà émis seront traitées par [RH].\n\nL. POSTE ANNULÉ / SUSPENDU / POURVU INTERNE\n(voir leçon dédiée ; ne pas transformer en faux refus de compétences)\n\nM. RETARD / RECTIFICATIF\n(voir leçon dédiée)\n\n---\nSCRIPTS TÉLÉPHONIQUES EXPRESS\n\nRefus final :\n« Je vous appelle pour vous donner la décision. Nous ne retenons pas votre candidature pour [poste]. Le besoin s'oriente vers [critère]. Merci pour le temps consacré. Je confirme par e-mail. »\n\nAnnulation de poste :\n« Je vous appelle pour une information de process, pas un avis sur votre profil. Le poste est annulé [motif validé]. Les rendez-vous sont annulés. Un e-mail part aujourd'hui. »\n\nErreur de refus :\n« Je vous appelle tout de suite : un e-mail erroné est parti. Votre candidature est toujours au stade [X]. Veuillez m'excuser. Je confirme par écrit dans l'heure. »"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "PME du bâtiment. La dirigeante demande au junior de copier-coller un ancien SMS : « Désolé c'est mort, on a pris un pote du chef de chantier. » Le junior propose le modèle L (pourvu, ici de fait une décision interne / réseau) en e-mail professionnel, sans mention du « pote », et un appel au candidat déjà reçu. La dirigeante accepte l'e-mail. Le motif interne réel (cooptation retenue) est tracé en ATS, pas dans le SMS."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Empiler trois modèles dans un seul mail. Utiliser le modèle contestation pour un simple feedback. Laisser [poste] non remplacé. Ajouter un emoji pour « adoucir ». Mettre le manager en copie du refus final avec les notes d'entretien visibles."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Cabinet : le client peut exiger de valider le texte. Vous n'envoyez pas un refus au nom du client sans sa règle. Intérim : le refus d'une mission n'est pas toujours un refus d'inscription ; distinguez les deux statuts. Volume campus : un mail groupé en CCI est possible pour les non-reçus ; les personnes interviewées restent en message individuel."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Choisissez le modèle (lettre A à M) et le canal pour : 1) CV non retenu, 80 candidatures ; 2) finaliste ; 3) candidat qui n'a pas répondu à l'offre ; 4) manager qui annule après deux entretiens ; 5) candidat qui demande « toutes vos notes »."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1) A, e-mail, éventuellement lot. 2) Appel + D. 3) Relance puis I, activation plan B. 4) Appel + L annulation, pas un A déguisé. 5) Accusé RGPD, pas G de feedback. Pourquoi : le modèle suit le fait réel et le régime juridique, pas l'humeur du jour."
            }
          ],
          "position": 7
        },
        {
          "title": "Quiz — Refus et situations délicates",
          "description": "Dix questions : cadre légal du refus, canaux, statuts, incidents et messages.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 12,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Répondez à chaque question. En cas d'échec, relisez le module puis retentez. Les questions juridiques essentielles exigent une justification : lisez toujours l'explication après validation."
            }
          ],
          "quiz": {
            "title": "Quiz — Refus et situations délicates",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "En droit français, concernant la motivation d'un refus de candidature, quelle affirmation est exacte ?",
                "question_type": "single_choice",
                "options": [
                  "A. Il n'existe pas d'obligation légale générale de motiver un refus de candidature, mais l'employeur reste tenu de ne pas discriminer.",
                  "B. Tout refus doit être motivé par écrit dans un délai légal de 48 heures.",
                  "C. Le recruteur junior doit toujours expliquer le refus, car le RGPD impose de motiver les décisions d'embauche.",
                  "D. Seuls les refus après entretien final doivent être motivés, en vertu de l'article L. 1221-6."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Il n'existe pas d'obligation légale générale de motiver un refus. L. 1221-6 encadre les informations demandées au candidat, pas une obligation de motiver le non. Le RGPD organise notamment un droit d'accès aux données, distinct d'une obligation de motiver le choix métier. L'interdiction de discriminer (L. 1132-1) s'applique toujours. Pas de délai légal général de 48 heures pour un refus."
              },
              {
                "question": "Un manager vous dit de refuser un candidat « parce qu'il est trop vieux pour l'équipe ». Que faites-vous ?",
                "question_type": "single_choice",
                "options": [
                  "A. Vous n'exécutez pas ce motif, vous alertez votre responsable : l'âge est un critère protégé (L. 1132-1).",
                  "B. Vous envoyez un refus poli en copiant la phrase du manager, par loyauté interne.",
                  "C. Vous refusez sans motif, donc le critère d'âge n'existe plus juridiquement.",
                  "D. Vous proposez au candidat un questionnaire médical pour objectiver l'âge."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "L'âge est un critère protégé. Un refus fondé sur ce motif n'est pas licite. Ne pas l'écrire dans l'e-mail ne l'efface pas si c'est la vraie raison. Un questionnaire médical n'est pas l'outil du recruteur pour « objectiver l'âge » et sort du cadre L. 1221-6."
              },
              {
                "question": "Un candidat non retenu écrit : « Envoyez-moi toutes vos notes d'entretien et commentaires du manager. » Quelle est la bonne qualification ?",
                "question_type": "single_choice",
                "options": [
                  "A. Demande d'accès à des données personnelles : accusé de réception et transfert au circuit RH / DPO, sans envoi improvisé du dossier brut.",
                  "B. Demande de feedback métier : vous devez motiver le refus par retour le jour même.",
                  "C. Demande abusive : vous pouvez ignorer le mail, le droit d'accès ne concerne pas le recrutement.",
                  "D. Vous envoyez uniquement les notes positives, pour protéger l'entreprise."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "C'est un exercice de droits sur les données, pas une obligation de motiver le refus. Le junior n'instruit pas seul, ne filtre pas « au feeling » et n'ignore pas la demande. Le circuit interne (RH, DPO) instruit, y compris d'éventuelles limites."
              },
              {
                "question": "Quelle distinction est correcte entre attente et réserve ?",
                "question_type": "single_choice",
                "options": [
                  "A. L'attente correspond à une décision encore ouverte, avec une date d'information ; la réserve est un plan B interne, avec une durée de caducité, qui ne doit pas se traduire par un silence prolongé.",
                  "B. L'attente est un refus définitif ; la réserve est un accord d'embauche.",
                  "C. La réserve interdit tout contact avec le candidat jusqu'à l'embauche du n°1.",
                  "D. Attente et réserve sont des obligations légales identiques, d'une durée de 2 ans (CNIL)."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Ce sont des statuts de process, pas des durées CNIL. Le vivier 2 ans est une recommandation de conservation, distincte. La réserve n'interdit pas d'informer ; elle exige une date. L'attente n'est pas un refus."
              },
              {
                "question": "Un poste est pourvu en interne alors que deux candidats externes ont déjà passé un entretien. Que faites-vous ?",
                "question_type": "single_choice",
                "options": [
                  "A. Vous informez les deux que le poste a été pourvu (pourvoi interne si la politique le permet), sans les recevoir « pour la forme » et sans faux motif de compétences.",
                  "B. Vous les recevez quand même, pour ne pas perdre la face.",
                  "C. Vous leur envoyez un refus de CV standard, comme s'ils n'avaient pas été vus.",
                  "D. Vous attendez qu'ils relancent, car il n'y a pas d'obligation de répondre."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Continuer un process pour un poste déjà attribué n'est pas une méthode pertinente. Un faux refus de compétences est déloyal. L'absence d'obligation générale de motiver n'autorise pas le silence après un entretien réel. L'information de pourvoi est la décision recommandée."
              },
              {
                "question": "Quelle conduite est recommandée face au ghosting d'un candidat à qui une offre a été envoyée ?",
                "question_type": "single_choice",
                "options": [
                  "A. Relances cadencées sur une courte période, clôture à la date de validité, activation du plan B, message factuel, sans menace.",
                  "B. Dix relances quotidiennes, puis un mail indiquant une « liste noire ».",
                  "C. Attendre 30 jours, car le silence vaut acceptation de l'offre.",
                  "D. Publier le prénom du candidat en interne comme « non fiable »."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Le silence ne vaut pas acceptation. Les menaces, listes noires et commentaires infamants sont des erreurs professionnelles, et peuvent poser des questions de données et de réputation. Un process cadencé protège le besoin."
              },
              {
                "question": "Le manager annule le poste après deux préqualifications. Quel message est le plus adapté ?",
                "question_type": "single_choice",
                "options": [
                  "A. Annoncer l'annulation du recrutement, ce n'est pas une évaluation du profil, stopper l'annonce et les rendez-vous.",
                  "B. Dire à chacun qu'il n'a pas les compétences, pour éviter d'avouer l'annulation.",
                  "C. Ne rien dire tant que le budget n'est pas « officiel », même si les rendez-vous ont lieu demain.",
                  "D. Promettre un autre poste équivalent dès la semaine suivante, pour se faire pardonner."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Le fait réel est l'annulation. Un faux refus de compétences est une erreur. Faire passer des entretiens après décision d'annuler est déloyal. Une promesse d'autre poste non réelle crée un nouvel engagement."
              },
              {
                "question": "Vous avez promis une réponse vendredi. À 16 h 45, le manager n'a pas tranché. Que faites-vous ?",
                "question_type": "single_choice",
                "options": [
                  "A. Vous écrivez avant l'échéance pour annoncer le décalage et une nouvelle date, sans inventer une décision.",
                  "B. Vous attendez lundi sans rien dire, pour n'écrire que lorsqu'il y aura une décision.",
                  "C. Vous refusez par précaution, quitte à rappeler le candidat lundi s'il est choisi.",
                  "D. Vous envoyez un SMS : « c'est bon, on te prend », pour tenir le délai."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Un retard annoncé n'est pas un refus. Le silence jusqu'à lundi trahit la parole de process. Un refus ou une embauche fictifs pour « tenir le délai » sont des erreurs graves."
              },
              {
                "question": "Un e-mail contenant les commentaires d'entretien d'un candidat part au mauvais destinataire. Premier réflexe ?",
                "question_type": "single_choice",
                "options": [
                  "A. Tenter un rappel, demander la suppression, alerter le circuit incident (responsable / RH / DPO) : il s'agit d'un incident de données.",
                  "B. Ignorer si le destinataire est « de confiance ».",
                  "C. Prévenir uniquement le candidat concerné, sans alerter en interne, pour éviter les ennuis.",
                  "D. Modifier les notes dans l'ATS pour qu'elles soient plus positives, puis ne rien dire."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "C'est un incident potentiel sur des données personnelles. Le junior n'arbitre pas seul la notification. Il stoppe, demande la suppression, alerte. Modifier les notes après coup aggrave."
              },
              {
                "question": "Quelle phrase est à proscrire dans un refus, même « pour faire simple » ?",
                "question_type": "single_choice",
                "options": [
                  "A. « On a pris quelqu'un de plus jeune, ça collera mieux avec l'équipe. »",
                  "B. « Nous ne donnerons pas suite à votre candidature pour ce poste. »",
                  "C. « Le poste a été pourvu. »",
                  "D. « Nous vous remercions d'avoir accordé du temps à ce process. »"
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "La phrase A mobilise un critère protégé (âge) et un stéréotype d'équipe. B, C et D sont des formulations professionnelles courantes, sous réserve qu'elles correspondent au fait réel."
              }
            ]
          },
          "position": 8
        }
      ]
    },
    {
      "position": 16,
      "title": "Finaliser l'embauche et organiser l'intégration",
      "description": "Passer de l'acceptation à une prise de poste sûre : dossier, formalités, DPAE, contrat, préboarding, onboarding, période d'essai et REX, en distinguant recruteur, RH et manager.",
      "lessons": [
        {
          "title": "Du oui à J1 : acteurs, séquence et risques de rupture",
          "description": "Cartographier qui fait quoi entre recruteur, RH et manager, et sécuriser la période qui sépare l'acceptation de la prise de poste.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez distinguer les responsabilités du recruteur junior, des RH, du manager et, le cas échéant, de la paie, de l'IT et de la médecine du travail.\n\nVous savez dérouler la séquence type entre acceptation de l'offre et premier jour, sans confondre vitesse et oubli de formalités.\n\nVous identifiez les points de rupture fréquents (désistement, délai, matériel, silence) et le rôle de coordination du recrutement."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "L'acceptation d'une offre n'est pas l'embauche. Entre le « oui » du candidat et la prise de poste, plusieurs actes se succèdent : confirmation écrite, constitution du dossier, formalités sociales, contrat, préparation matérielle, information de l'équipe, accueil. Chacun de ces actes a un propriétaire. Lorsque tout le monde croit que « les autres s'en chargent », le futur salarié se retrouve sans contrat, sans badge, ou sans interlocuteur.\n\nLe recruteur junior n'est pas l'employeur. Il ne « signe » pas les obligations de l'entreprise à la place des personnes habilitées. Son rôle, une fois le besoin pourvu, est de coordination et de continuité de la relation : s'assurer que les bons interlocuteurs ont les bonnes informations, que le candidat sait qui le contacte pour quoi, que les dates (préavis, J1, visites) sont partagées, que les statuts ATS sont à jour. Selon l'organisation, le junior peut préparer un dossier, relancer un document manquant, planifier un point de préboarding. Il ne se substitue pas à la paie pour une DPAE, ni au juriste ou au RRH pour un contrat atypique, ni au manager pour l'accueil métier.\n\nLes RH (au sens service administration du personnel / paie / relations sociales) portent généralement : dossier d'embauche, DPAE, contrat dans sa version administrative, affiliations, visites de santé au travail selon le dispositif de l'entreprise, informations obligatoires liées au personnel. Le manager porte le besoin métier, l'organisation de J1, les objectifs des premières semaines, le parrainage, la charge de travail réaliste. L'IT et les services généraux portent comptes, matériel, accès physiques. La médecine du travail n'est pas « le recruteur qui pose des questions de santé » : le suivi de santé au travail a son circuit, distinct des questions d'entretien (L. 1221-6).\n\nCette période est fragile. Le candidat peut encore se désister. Une offre mal qualifiée juridiquement (offre de contrat vs promesse unilatérale d'embauche) peut produire des effets que le junior ne doit pas arbitrer seul : ces notions ne sont pas définies par la loi, elles sont encadrées par la jurisprudence, expliquée notamment par Service-Public (F39588, vérifié le 12/03/2026). Le silence de l'entreprise entre le oui et J1 est l'une des causes fréquentes de doute. Le préboarding n'est pas un luxe relationnel : c'est une continuité de process.\n\nLe cadre légal de l'embauche pèse sur l'employeur. La DPAE est une obligation de l'employeur, avant la prise de fonction ou le début de la période d'essai, au plus tôt dans les 8 jours précédant l'embauche (Service-Public F23107 + Urssaf, vérifié le 13/10/2026). Le junior coordonne ; il n'invente pas d'être « déclarant Urssaf » si ce n'est pas son rôle. Les données du dossier restent soumises au RGPD et au principe de pertinence : on ne constitue pas un dossier médical parallèle dans l'ATS."
            },
            {
              "block_type": "callout",
              "content": "Distinguez toujours : obligation de l'employeur (DPAE, contrat selon les règles applicables, non-discrimination) / circuit RH interne / coordination recruteur / accueil manager. Un junior qui « signe la DPAE tout seul » hors habilitation crée un faux sentiment de conformité."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Dès l'acceptation : 1) confirmer par écrit les éléments déjà validés (intitulé, type de contrat, date de prise de poste visée, rémunération selon l'offre). 2) Ouvrir une checklist partagée recruteur / RH / manager. 3) Nommer un contact unique pour le candidat (souvent le recruteur jusqu'à J-7, puis RH ou manager). 4) Collecter les pièces selon la liste RH, pas selon l'inspiration. 5) Planifier DPAE, contrat, matériel, accès. 6) Informer l'équipe selon la règle de confidentialité. 7) Tracer dans l'ATS le statut « embauche en cours » puis « embauché »."
            },
            {
              "block_type": "code",
              "content": "MATRICE RÔLES — DU OUI À J1\n\nAction                         Recruteur junior     RH / paie           Manager            IT / moyens généraux\nConfirmer l'offre acceptée      Coordonne            Informe si besoin   Valide métier      —\nCollecter pièces dossier        Relance              Protège / valide    —                  —\nDPAE                            Alerte du calendrier Réalise (habilité)  Donne la date J1   —\nContrat                         Transmet éléments    Rédige / fait signer Informe clauses métier —\nMatériel / comptes              Relance              Parfois commande    Exprime le besoin  Réalise\nAccueil J1                      Peut passer          Parfois parcours RH Porte l'accueil    Accès physiques\nPériode d'essai (suivi)         Point d'étape        Cadre RH            Évalue le travail  —\nREX recrutement                 Anime                Contribue           Contribue          —\n\nRègle : si vous n'êtes pas habilité, vous ne « validez » pas. Vous signalez l'absence."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Startup 40 personnes, pas de RRH à temps plein. Le CEO dit au junior : « Tu t'occupes de tout, DPAE comprise, j'ai le compte Urssaf. » Le junior n'a ni formation ni habilitation. Décision : il prépare la checklist, rassemble les pièces, bloque un créneau avec le prestataire paie / expert-comptable qui dépose réellement la DPAE, et refuse de cliquer « envoyer » sur un compte nominatif qui n'est pas le sien sans consigne écrite et formation. Il documente qui a déposé, quand, pour quel J1."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Disparaître après le oui : « maintenant c'est les RH ». Oublier d'informer l'IT. Annoncer une date de J1 au candidat sans que le manager soit disponible. Demander un extrait de casier, une photo d'identité ou un document de santé « au cas où » hors liste RH et hors lien avec l'emploi. Promettre un titre de séjour « on verra bien » (hors mandat, voir module recrutements spécifiques)."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Cabinet : le junior coordonne l'entrée chez le client ; il ne fait pas la DPAE du client. Intérim : la qualification de l'employeur et les formalités suivent le régime de l'agence ; le junior applique le process agence, il n'invente pas. Prise de poste à distance : le « J1 » matériel et le « J1 » juridique (contrat, DPAE) restent dus ; l'accueil visio ne les remplace pas. Candidat encore en préavis : le calendrier d'embauche part de la date réelle, pas de l'enthousiasme du manager."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Un manager vous écrit : « Il a dit oui, il commence lundi, débrouille-toi. » Il est mercredi. Listez ce que vous vérifiez avant de confirmer le lundi au candidat, et ce que vous renvoyez au manager / aux RH."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vous ne confirmez pas lundi sans : date réellement tenable (préavis, disponibilité manager), habilitation à lancer les formalités, pièces minimales du dossier, DPAE possible avant prise de poste, matériel/accès, contrat en cours de préparation. Vous renvoyez au manager la charge d'accueil et la confirmation de la date. Vous renvoyez aux RH (ou prestataire paie) DPAE et contrat. Pourquoi : « débrouille-toi » n'est pas une habilitation. Un J1 improvisé est un risque social et un risque d'expérience candidat."
            }
          ],
          "position": 0
        },
        {
          "title": "Dossier d'embauche et formalités : collecter juste ce qu'il faut",
          "description": "Constituer un dossier pertinent, tracer les pièces, et éviter les demandes excessives ou illicites.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez ce qu'un dossier d'embauche sert à faire (identifier, payer, déclarer, intégrer) et ce qu'il ne sert pas à faire (enquêter sur la vie privée).\n\nVous savez relancer une pièce manquante sans harceler, et stocker les documents dans l'outil RH prévu, pas dans une messagerie personnelle.\n\nVous appliquez L. 1221-6 : seules les informations en lien direct et nécessaire avec l'emploi sont demandées."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le dossier d'embauche est un ensemble de pièces et d'informations nécessaires à l'administration du personnel et à l'exécution du contrat. Il n'est pas une continuation de l'évaluation. Une fois la personne retenue, vous ne « profitez pas » de l'embauche pour obtenir ce que vous n'aviez pas le droit de demander en entretien (situation de famille, état de santé, originaires, opinions).\n\nL'article L. 1221-6 du Code du travail demeure : les informations demandées, sous quelque forme que ce soit, ne peuvent avoir comme finalité que d'apprécier la capacité à occuper l'emploi ou les aptitudes professionnelles, avec un lien direct et nécessaire. Après embauche, d'autres finalités administratives existent (paie, affiliations, urgence, droits sociaux), toujours dans le cadre du RGPD : minimisation, finalité, durée, accès limité. La CNIL, dans son guide du recrutement et son référentiel de durées RH, distingue le candidat et le salarié. Le candidat retenu : conservation en base active le temps de la procédure jusqu'à la signature, puis réemploi pour la gestion du personnel (référentiel CNIL 2026). Ce n'est pas une autorisation d'alimenter l'ATS avec des pièces médicales.\n\nLa liste des pièces est une politique interne, parfois enrichie par une convention ou un secteur réglementé (habilitation, casier pour certains emplois, titre autorisant le travail). Le junior n'ajoute pas de pièces « par prudence ». Il applique la liste, et alerte si un document semble hors sujet. Un RIB, un justificatif d'identité, les informations nécessaires à la DPAE et à la paie sont du circuit RH. Un questionnaire sur les enfants, une photo « pour voir la tête », un relevé de comptes, un profil de réseaux sociaux imprimé n'en sont pas.\n\nLe moment de la collecte : assez tôt pour que RH puisse déclarer et préparer le contrat, pas si tôt que l'on stocke des données d'une personne qui n'a pas encore accepté. Bonne pratique : après acceptation ferme, via un canal sécurisé prévu (portail RH, lien, e-mail professionnel), avec une date limite réaliste. Relance unique puis relance manager si blocage, pas cinq SMS quotidiens.\n\nLe risque d'un dossier incomplet est opérationnel (pas de paie, pas de DPAE à temps). Le risque d'un dossier excessif est juridique et relationnel. Les deux se gèrent par une liste écrite, pas par la mémoire du junior."
            },
            {
              "block_type": "callout",
              "content": "Obligation : pertinence des informations (L. 1221-6), non-discrimination, RGPD. Recommandation d'autorité : durées et finalités CNIL. Politique interne : liste des pièces, outil de dépôt. Bonne pratique : un canal, une liste, des relances datées. Le junior ne crée pas de dossier parallèle sur son Drive personnel."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Utilisez la checklist RH. Expliquez au futur salarié pourquoi chaque pièce est demandée, en une phrase. Offrez une alternative si un justificatif habituel manque (perte de carte, changement de banque) en lien avec RH, sans bloquer J1 pour un détail rattrapable. Classez dès réception. Signalez les pièces sensibles (titre de séjour, casier si réellement requis par l'emploi) au circuit habilité : vous ne les interprétez pas seul."
            },
            {
              "block_type": "code",
              "content": "CHECKLIST DOSSIER — RELANCES RECRUTEUR (à adapter à la liste RH, ne pas ajouter)\n\nAprès acceptation ferme :\n[ ] Envoi de la liste officielle + lien de dépôt + date limite\n[ ] Identité / état civil nécessaires à la paie et à la DPAE\n[ ] Coordonnées de contact et contact d'urgence selon politique\n[ ] RIB lorsque la paie le demande\n[ ] Diplômes / habilitations seulement s'ils sont exigés pour l'emploi\n[ ] Titre autorisant le travail : collecte et lecture par le circuit RH, pas d'improvisation « droit des étrangers » par le junior\n[ ] Autres pièces sectorielles (casier, habilitation site) uniquement si l'emploi l'exige\n[ ] Interdit : dossier médical ATS, questions famille, copies de réseaux, photo « pour le fun »\n[ ] Stockage : outil RH / coffre, pas la messagerie personnelle\n[ ] Relance J-n selon calendrier interne, copie RH si silence"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "ETI agroalimentaire. Un manager demande au junior « récupère aussi son carnet de vaccination et si elle est enceinte, on a des produits chimiques ». Le junior n'ajoute pas ces demandes au dossier d'embauche. L'aptitude et le suivi de santé relèvent de la santé au travail, pas d'un e-mail de recrutement. Il oriente le manager vers RH et le service de prévention. Il collecte uniquement la liste RH."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Demander « tous les contrats précédents ». Stocker les pièces dans WhatsApp. Relancer dix fois pour un RIB alors que J1 est dans trois semaines. Commenter un nom de famille ou une nationalité sur le justificatif. Oublier de clôturer l'accès ATS « candidat » une fois le dossier passé en salarié."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Mineur, alternant, stagiaire : listes et conventions spécifiques ; le junior suit le modèle RH, il n'invente pas un CDI. Recrutement urgent : on priorise les pièces bloquantes pour DPAE et paie ; le reste a une date de rattrapage écrite. Candidat sans RIB immédiat : solution paie (attente, autre modalité interne), pas d'annulation d'embauche improvisée par le junior."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Parmi ces demandes, lesquelles passez-vous, lesquelles refusez-vous d'ajouter, et vers qui renvoyez-vous : 1) copie de pièce d'identité ; 2) attestation de domicile des parents ; 3) RIB ; 4) questionnaire « avez-vous des enfants ? » ; 5) diplôme exigé par la fiche de poste ; 6) capture d'écran LinkedIn."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1 et 3 et 5 : circuit RH, si dans la liste. 2 : non, pas de lien nécessaire. 4 : non, critère et information hors L. 1221-6 / non-discrimination. 6 : non, ce n'est pas une pièce d'embauche. Pourquoi : le dossier sert à embaucher et à administrer, pas à prolonger le sourcing."
            }
          ],
          "position": 1
        },
        {
          "title": "DPAE : obligation de l'employeur, calendrier et rôle du junior",
          "description": "Comprendre la déclaration préalable à l'embauche sans se prendre pour l'Urssaf, et coordonner le calendrier réel.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez que la DPAE est une obligation de l'employeur, à effectuer avant la prise de fonction ou le début de la période d'essai, au plus tôt dans les 8 jours précédant l'embauche.\n\nVous savez quel est votre rôle (alerter, transmettre la date, vérifier que l'habilité a agi) et ce que vous ne faites pas (déposer sans habilitation, antedater, « signer pour dépanner »).\n\nVous savez quoi faire si J1 est trop proche pour le calendrier interne."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La DPAE (déclaration préalable à l'embauche) est le formalisme social qui signale l'embauche aux organismes compétents via le circuit Urssaf. Selon Service-Public Entreprendre (fiche F23107) et l'Urssaf, elle est obligatoire avant la prise de fonction ou le début de la période d'essai, et elle peut être effectuée au plus tôt dans les 8 jours précédant l'embauche. Date de vérification des sources du cours : 13/10/2026. Relisez le texte en vigueur le jour J sur Service-Public / Urssaf avant un cas réel.\n\nCette obligation pèse sur l'employeur, pas sur « le recrutement » en tant que métier. Dans une organisation, la personne habilitée est généralement la paie, le RRH, l'expert-comptable, ou un dirigeant de TPE. Le recruteur junior coordonne le calendrier : il fait connaître la date de prise de poste dès qu'elle est ferme, il alerte si cette date est trop proche, il vérifie que la DPAE a bien été faite avant J1. Il ne considère pas un e-mail interne « tu t'en occupes » comme une habilitation juridique personnelle.\n\n« Au plus tôt 8 jours avant » signifie que l'on ne déclare pas des semaines à l'avance pour « se débarrasser » d'un dossier encore incertain. « Avant la prise de fonction ou le début de la période d'essai » signifie que le salarié ne doit pas commencer, même « pour voir », avant déclaration. Faire commencer quelqu'un « officieusement » en attendant la DPAE n'est pas une bonne pratique : c'est un risque pour l'employeur.\n\nLe junior n'invente pas le contenu de la DPAE (heures, contrat, lieu) : il transmet les éléments validés (identité selon dossier, date, nature du contrat, lieu de travail). Une erreur de date ou de contrat dans la déclaration crée des corrections ultérieures. Une DPAE n'équivaut pas au contrat de travail : les deux se coordonnent, ils ne se remplacent pas.\n\nSi le manager veut un démarrage le lendemain, le recruteur dit le calendrier réel : pièces minimales, disponibilité de la personne habilitée, délai « au plus tôt 8 jours avant » qui n'interdit pas une DPAE plus proche de J1, mais n'excuse pas l'absence de DPAE. L'urgence métier ne supprime pas l'obligation. Le junior alerte par écrit, propose la première date réellement tenable, et n'antidate pas."
            },
            {
              "block_type": "callout",
              "content": "Source : Service-Public F23107 + Urssaf — DPAE obligatoire avant prise de fonction ou début de période d'essai, au plus tôt dans les 8 jours précédants. Obligation employeur. Le junior coordonne avec les RH. Il ne « signe » pas la DPAE tout seul si ce n'est pas son rôle."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Dès date de J1 ferme : notification RH / paie avec nom, date, type de contrat, lieu. Confirmation de la personne qui dépose. Point de contrôle la veille de J1 : DPAE faite, contrat en cours ou signé selon process, accueil prêt. Si absence de DPAE : ne pas faire commencer ; escalade responsable."
            },
            {
              "block_type": "code",
              "content": "CHECKLIST DPAE — CÔTÉ RECRUTEUR JUNIOR\n\n[ ] Date de prise de poste écrite, validée manager + candidat\n[ ] Type de contrat et lieu transmis (pas d'à-peu-près)\n[ ] Identité / pièces minimales reçues par RH\n[ ] Personne habilitée nommée (RH, paie, expert-comptable, dirigeant)\n[ ] Dépôt prévu dans la fenêtre : avant J1 / essai, au plus tôt 8 jours avant\n[ ] Preuve de dépôt ou confirmation RH consignée (pas dans un chat perso perdu)\n[ ] Interdit : faire commencer « au noir » ; déposer sans habilitation ; antedater ; inventer un contrat\n\nMAIL TYPE AU SERVICE HABILITÉ\nObjet : DPAE à prévoir — [Nom] — J1 [date]\nBonjour,\nEmbauche de [Prénom Nom], poste [intitulé], contrat [CDI/CDD/…], lieu [site], prise de poste [date].\nMerci de confirmer le dépôt de la DPAE avant cette date, conformément au calendrier Urssaf / F23107.\nPièces déjà transmises : [liste]. Manquants : [liste].\nRecrutement — [nom]"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "PME du transport. Un exploitant fait monter un nouveau salarié sur un quai « dès ce soir, on est débordés ». Le dossier est incomplet, la paie est absente. Le junior, alerté, écrit au dirigeant : pas de prise de poste avant DPAE. Il propose le lendemain matin si la personne habilitée dépose dans la soirée, ou un report. Il ne « couvre » pas une prise de poste non déclarée pour faire plaisir à l'exploitant."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Croire que le contrat signé remplace la DPAE. Croire que la DPAE remplace le contrat. Laisser J1 un lundi férié de paie sans anticiper. Utiliser un ancien compte Urssaf d'un collègue parti. Annoncer au candidat « c'est bon tu es déclaré » sans confirmation."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Multi-embauches le même jour : chaque DPAE est individuelle ; le junior fournit un tableau, pas un message flou « les trois de l'équipe nuit ». Entrée après mobilité interne : ce n'est pas toujours une embauche externe ; RH qualifie. Intérim : l'employeur de l'intérimaire est l'agence, dans le régime qui lui est applicable ; le junior agence suit le process agence, le junior entreprise cliente ne « fait pas une DPAE intérim » à la place de l'agence."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "J1 est dans 3 jours. RH vous dit : « Dépose la DPAE, tu as les identifiants dans le tiroir. » Que répondez-vous, et quelle alternative proposez-vous ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vous ne déposez pas si ce n'est pas votre rôle habilité. Vous proposez : 1) RH ou dirigeant dépose ; 2) prestataire paie dépose ; 3) report de J1 si personne n'est disponible avant la prise de poste. Vous tracez l'alerte. Pourquoi : la DPAE est une obligation d'employeur, pas un geste débrouillard. Un identifiant dans un tiroir n'est pas une délégation claire."
            }
          ],
          "position": 2
        },
        {
          "title": "Contrat de travail : préparer, relayer, ne pas improviser",
          "description": "Fournir les éléments exacts du contrat, faire circuler la version valide, et éviter les fausses promesses sur les clauses.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez quels éléments issus du recrutement doivent se retrouver dans le contrat, et qui rédige.\n\nVous savez accompagner la signature sans jouer au juriste : avenants, période d'essai, clause de mobilité, temps de travail.\n\nVous savez quoi faire si le contrat s'écarte de l'offre acceptée."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le contrat de travail formalise la relation. Sa rédaction est un acte RH / juridique, pas un exercice de style du recruteur. Le junior fournit la matière : intitulé, coefficient ou statut s'il a été validé, rémunération, type de contrat, date de début, lieu, temps de travail, éléments variables déjà promis par écrit dans l'offre. Il ne « récrit » pas une clause parce que le candidat a peur, et il n'ajoute pas un avantage pour conclure.\n\nL'offre acceptée et le contrat doivent être cohérents. Un écart (salaire, statut, lieu, dates) n'est pas un détail : c'est un nouveau sujet de décision, à revalider avec le manager et RH, puis à réexpliquer au candidat. Envoyer un contrat moins-disant que l'offre, en demandant une signature rapide, est une erreur de confiance et, potentiellement, un litige. À l'inverse, un contrat plus généreux que l'offre sans mandat crée un engagement non budgété.\n\nLa qualification offre de contrat / promesse unilatérale d'embauche n'est pas tranchée par le junior. Service-Public (F39588, 12/03/2026) rappelle que ces notions ne sont pas définies par la loi mais encadrées par la jurisprudence (notamment Cass. soc. 21 septembre 2017, n° 16-20.103 et 16-20.104, telles que citées par cette fiche). Une promesse unilatérale n'est pas obligatoire pour embaucher. Si un écrit d'engagement a déjà été envoyé et que l'une des parties se rétracte, RH intervient. Le junior conserve les versions et les dates.\n\nLa période d'essai, lorsqu'elle est prévue, a une durée qui dépend du contrat, du statut et des textes applicables (loi, convention). Le junior ne « met trois mois à tout le monde » par habitude. Il relaye la durée inscrite par RH. Il explique au candidat, s'il est interrogé, que l'essai sert à évaluer l'adéquation, des deux côtés, dans le cadre fixé, et que le suivi sera porté par le manager, avec un cadre RH.\n\nLe moment : le contrat doit pouvoir être lu avant J1. Une signature le matin même, sous pression, est un mauvais signal. La bonne pratique est d'envoyer le projet, de laisser un temps de lecture, de recenser les questions, de les transmettre à RH, de faire signer selon le process (électronique ou papier). Le junior n'interdit pas au candidat de relire, et il ne lui dit pas « c'est du standard, signe ». "
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1) Fiche de transmission recrutement → RH (données de l'offre). 2) Relecture de cohérence offre / projet de contrat. 3) Envoi au candidat par le canal prévu. 4) Centralisation des questions. 5) Signature. 6) Archivage RH, pas dans l'ATS public. 7) Information manager : date de signature, date J1, points d'attention (télétravail, mobilité) sans copier le contrat entier dans un chat."
            },
            {
              "block_type": "code",
              "content": "FICHE DE TRANSMISSION — RECRUTEMENT VERS RH (contrat)\n\nCandidat : \nPoste / service / manager : \nType de contrat : CDI / CDD (motif à faire qualifier par RH, pas par le junior) / autre\nDate de début visée : \nTemps de travail : \nLieu / mobilité déjà annoncée : \nRémunération fixe : \nVariable / avantages déjà écrits dans l'offre : \nPériode d'essai : à inscrire par RH selon textes applicables\nÉléments NON promis (à ne pas inventer) : \nPièces dossier : complet / manquant [liste]\nDPAE : demandée le [date] à [habilité]\nAlertes : écart offre / souhait manager, préavis, visa / titre (alerter RH, ne pas qualifier)"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Cabinet, mission cadre. Le client envoie un contrat avec un lieu de travail différent de l'offre (site B au lieu du siège). Le consultant junior le voit. Il ne le fait pas signer « pour aller vite ». Il appelle le client, confronte l'écart, obtient soit un retour au lieu promis, soit un avenant d'offre accepté par le candidat. Il documente."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Promettre une clause de télétravail non écrite. Expliquer qu'une période d'essai « ça ne se rompt jamais ». Laisser le candidat signer une version PDF annotée à la main non relue par RH. Copier un ancien contrat et changer juste le nom."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "CDD : le motif est un acte juridique ; le junior ne choisit pas un motif « parce que ça passe ». Alternance / stage : convention, pas un CDI bricolé. Langue du contrat : si le travail s'effectue en France, soyez attentif à la compréhension ; les règles d'offre en français (L. 5331-4) ne se substituent pas au conseil RH sur la langue du contrat. Candidat à l'étranger : alerte RH, pas d'improvisation sur le droit du travail applicable."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "L'offre acceptée indique 38 k€, le projet de contrat 36 k€ « selon grilles ». Le manager dit : « Il signera, il est content d'entrer. » Que faites-vous ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vous bloquez l'envoi. Vous signalez l'écart à RH et au manager. Soit le contrat revient à 38 k€, soit une nouvelle décision est expliquée au candidat avant signature, avec la possibilité qu'il refuse. Pourquoi : faire signer un contrat moins-disant en silence n'est pas une technique de closing, c'est une rupture de parole de l'employeur."
            }
          ],
          "position": 3
        },
        {
          "title": "Préboarding : maintenir le lien entre signature et premier jour",
          "description": "Organiser les contacts utiles avant J1 pour réduire le désistement et préparer un accueil réel.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez construire un mini-parcours de préboarding proportionné à l'entreprise, sans harceler le futur salarié encore en poste ailleurs.\n\nVous savez qui envoie quoi : recruteur, RH, manager, IT.\n\nVous savez détecter un signal de désistement et réagir sans pression déloyale."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le préboarding est l'ensemble des contacts et préparatifs entre l'acceptation (ou la signature) et J1. Ce n'est pas une obligation légale générale. C'est une bonne pratique de sécurisation : la personne n'est pas encore dans l'équipe, elle compare encore, elle subit parfois une contre-offre, elle doute si l'entreprise se tait. Le recruteur est souvent le seul visage connu : s'il disparaît, le vide est total.\n\nLe préboarding n'est pas une intégration anticipée illégale (« viens travailler un peu avant d'être déclaré »). Aucune tâche productive avant DPAE et cadre contractuel. Le préboarding, c'est de l'information, de l'organisation, de la relation. Exemples : date et lieu de convocation, documents restants, présentation du manager par visio courte, envoi d'un ordre du jour de J1, recueil des besoins matériels, information sur le dress code réellement attendu, pas un roman sur « nos valeurs ».\n\nLe dosage dépend du délai. Un J1 à 48 heures : checklist opérationnelle seulement. Un préavis de trois mois : un rythme (par exemple un point à J+7 après signature, un point à J-15, un point à J-3), pas un message quotidien. Le futur salarié est souvent encore chez un employeur : des appels sur son lieu de travail actuel sont une maladresse.\n\nLes acteurs : le recruteur coordonne et reste joignable ; RH envoie ce qui est administratif ; le manager prend un contact métier court ; l'IT prépare sans exiger du salarié qu'il configure un SI la veille à 23 h. Le junior n'envahit pas la messagerie personnelle de documents confidentiels non chiffrés.\n\nUn signal de désistement (réponses vagues, report de signature, questions soudaines de rémunération déjà close, silence) se traite par un appel de clarification, pas par la peur. Si le désistement se confirme, vous activez le plan B et le process du module refus / désistement. Vous n'inventez pas de pénalité."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Créez un calendrier de préboarding dans l'ATS ou un tableau partagé. Chaque contact a un objectif unique. Mesurez les non-réponses. Préparez J1 avec le manager au moins une semaine avant (ou dès que possible si urgence)."
            },
            {
              "block_type": "code",
              "content": "CHECKLIST PRÉBOARDING (délai > 2 semaines) — à adapter\n\nJ0 acceptation\n[ ] Mail de bienvenue recruteur : prochaines étapes, qui contacte pour quoi, dates\n[ ] Transmission RH (dossier, DPAE, contrat)\n[ ] Info manager : date, points d'accueil à préparer\n\nJ+3 / J+7\n[ ] Relance pièces manquantes si besoin\n[ ] Contact court manager (15 min) : contexte équipe, pas nouvel entretien d'évaluation\n[ ] Recueil taille d'équipement / besoin IT\n\nJ-15\n[ ] Confirmation lieu, horaire, interlocuteur J1, documents à apporter\n[ ] Vérifier DPAE planifiée, contrat lu\n\nJ-3\n[ ] Mail pratique J1\n[ ] Contrôle matériel / comptes « prêts ou date »\n[ ] Le junior reste joignable ; pas de nouvelle négociation salariale improvisée\n\nINTERDIT\n- Travail productif avant cadre d'embauche\n- Messages quotidiens « pour créer du lien »\n- Demander de démissionner avant signature du contrat si ce n'est pas le process validé"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Services, ETI. Un futur ingénieur a trois mois de préavis. Le junior envoie un mail toutes les 48 h « notre culture ». Le candidat, encore en poste, se plaint à un ami interne. Le responsable recrutement recadre : un point mensuel, un contact manager à mi-préavis, un pack J-7. Le désistement évité n'est pas le fruit du volume de mails, c'est le fruit d'un rythme respectueux."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Ajouter le futur salarié à toutes les listes de diffusion internes trop tôt. L'inviter à un pot d'équipe avant annonce officielle interne. Oublier de le prévenir d'un changement de date de J1. Le « briefer » comme s'il devait déjà performer."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Recrutement confidentiel : pas d'annonce interne, pas de photo sur l'intranet, canal unique. Volume : préboarding automatisé correct (dates, lieu, pièces) + contact humain pour les statuts sensibles. Distant : envoi d'adresse de visio test 48 h avant, pas le matin même."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Rédigez le mail J0 (acceptation) de 12 à 18 lignes : étapes, acteurs, ce que vous attendez du candidat, ce qu'il peut ignorer jusqu'à nouvel avis."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Le mail J0 remercie, confirme les éléments déjà clos (poste, date visée, type de contrat), liste les prochaines étapes (pièces, contrat, DPAE côté employeur, contact manager), donne un seul interlocuteur pour les questions, et n'ajoute ni nouveau salaire, ni nouveau lieu. Pourquoi : le préboarding commence par réduire l'incertitude, pas par ouvrir de nouveaux sujets."
            }
          ],
          "position": 4
        },
        {
          "title": "Onboarding : matériel, accès, formation initiale et accueil",
          "description": "Préparer un premier jour et une première semaine utilisables, en laissant au manager ce qui est métier.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez construire une checklist d'onboarding opérationnel (matériel, accès, sécurité, présentation, formation initiale) et l'attribuer aux bons acteurs.\n\nVous savez ce que le recruteur contrôle la veille et le matin, sans remplacer le manager.\n\nVous savez traiter un incident de J1 (pas de badge, pas de manager, pas de poste de travail) sans rejeter la faute sur le nouvel arrivant."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "L'onboarding est l'intégration dans le travail réel : pouvoir entrer, se connecter, comprendre les règles utiles, rencontrer l'équipe, commencer à apprendre le poste. Ce n'est pas un « kit goodies ». Ce n'est pas non plus, pour le junior, l'animation de toute la vie de l'équipe. Le manager reste responsable de l'intégration métier. Les RH portent souvent le parcours administratif et social. L'IT et les moyens généraux portent l'outillage. Le recruteur s'assure que cette chaîne a été déclenchée et que le nouvel arrivant n'est pas seul devant une porte fermée.\n\nLe matériel (ordinateur, téléphone, EPI, badge, tenture de poste) se commande en amont. Un J1 sans outil n'est pas « formateur » : c'est une perte de temps et un signal de désorganisation. Les accès (bâtiment, SI, logiciels métier, droits a minima) se préparent avec un principe de minimisation : on n'ouvre pas tous les droits « on verra plus tard », surtout sur des données personnelles de tiers.\n\nLa formation initiale recouvre : consignes de sécurité, outils de base, process qualité, présentation des règles internes utiles au poste. Elle n'est pas un second entretien. Elle n'est pas le lieu pour poser des questions de santé, de parentalité ou d'origine. L'information sur les méthodes d'évaluation professionnelle, si de nouvelles méthodes sont utilisées après embauche, reste encadrée par la pertinence (L. 1221-8 et L. 1221-9 s'agissant des méthodes d'aide au recrutement et d'évaluation).\n\nLe premier jour a une heure de début, un interlocuteur nommé, un plan B si le manager est absent (délégué, RH, recruteur pour l'accueil puis activité préparée). Laisser un nouvel embauché attendre quarante minutes à l'accueil est un échec collectif, pas une « mise à l'épreuve ».\n\nLe recruteur junior n'évalue pas la performance à J1. Il peut faire un point de 10 minutes en fin de journée : est-ce que les accès fonctionnent, est-ce que le planning de la semaine est clair, est-ce qu'une question administrative bloque. Puis il se retire."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Réunion courte J-7 recruteur / manager / IT / RH. Checklist unique. Contrôle J-1. Accueil J1 : qui ouvre la porte. Point J+1 ou J+2. Clôture de la checklist, bascule du dossier vers le suivi d'essai."
            },
            {
              "block_type": "code",
              "content": "CHECKLIST ONBOARDING J-7 → J+7\n\nRH\n[ ] DPAE faite avant prise de poste / essai\n[ ] Contrat signé ou process de signature tenu\n[ ] Dossier paie suffisant\n[ ] Convocation / info santé au travail selon dispositif interne (pas le recruteur qui « ausculte »)\n\nIT / moyens généraux\n[ ] Compte nominatif prêt, droits minimaux\n[ ] Matériel configuré, EPI si besoin\n[ ] Badge / clés / parking\n\nManager\n[ ] Planning semaine 1 (réunions, binôme, premières tâches réalistes)\n[ ] Annonce interne autorisée\n[ ] Parrain / binôme nommé\n[ ] Objectifs d'essai en brouillon\n\nRecruteur junior\n[ ] Vérifier que les cases ci-dessus ont un propriétaire et une date\n[ ] Mail J-1 pratique (heure, adresse, nom de l'accueil, documents)\n[ ] Présence ou relais le matin\n[ ] Point flash J+1 : incidents d'accès / de clarté\n[ ] Ne pas siéger toute la semaine dans l'open space « pour aider »\n\nJ1 TYPE (exemple services, à adapter)\n09:00 Accueil nommé\n09:15 Administratif court RH si prévu\n09:45 Poste de travail / accès\n10:30 Équipe\n11:30 Sécurité / règles utiles\n14:00 Première activité métier avec binôme\n16:30 Point manager 15 min"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Industrie, équipe 3×8. Un embauché arrive à 5 h 45, le recruteur avait prévu un accueil « horaire de bureau ». Personne. Décision REX : pour un poste d'équipe, J1 se calque sur l'horaire réel, avec un nom d'agent d'accueil de nuit / chef d'équipe, EPI prêts, consignes sécurité avant toute tâche. Le junior se déplace ou délègue explicitement, il n'improvise pas un accueil de 9 h."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Confondre onboarding et visite touristique. Oublier les EPI. Créer des accès trop larges. Laisser le nouvel arrivant « lire les procédures » huit heures. Photographier l'équipe sans recueil des accords internes. Demander un feedback public dès J1 pour LinkedIn."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "100 % distant : envoi du matériel avec délai, session de test des outils la veille, parrain identifié, créneaux plus courts et plus fréquents. Multisite : J1 sur le site réel de travail, pas seulement au siège RH. Handicap : aménagements déjà anticipés avec RH et le manager, pas « on verra le jour J ». Volume : session d'accueil collective + check individuel des accès."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le manager est malade J1. Le matériel n'est pas arrivé. Rédigez le plan B de la matinée (acteurs, activités, ce que vous dites au nouvel embauché)."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vous n'annulez pas J1 à 8 h 30 sans proposition. Un relais nommé (adjoint, RH, vous-même pour l'accueil) prend le matin : administratif déjà prêt, présentation règles utiles, lecture documentée, rencontre d'une personne disponible, replanification du matériel avec date. Vous dites la vérité : incident logistique, pas « c'est normal au début ». Pourquoi : l'onboarding est un service dû, pas une faveur du manager présent."
            }
          ],
          "position": 5
        },
        {
          "title": "Période d'essai, suivi et REX de recrutement",
          "description": "Suivre l'essai sans empiéter sur l'évaluation managériale, et capitaliser le recrutement pour le prochain.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez quel est le rôle du recruteur pendant la période d'essai : points d'étape, détection de signaux, pas décision de rupture isolée.\n\nVous savez organiser un REX de recrutement (besoin, sourcing, critères, délais, expérience candidat, intégration).\n\nVous savez clôturer le dossier recrutement et laisser le dossier salarié aux RH."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La période d'essai, lorsqu'elle est contractuellement prévue, permet à l'employeur d'évaluer les compétences du salarié dans son travail, et au salarié d'évaluer si le poste lui convient, dans le cadre des textes applicables. Sa durée, son renouvellement éventuel, les formes de rupture, ne sont pas des « usages du junior ». Ils relèvent du contrat, de la loi et de la convention. Le recruteur ne rompt pas un essai tout seul « parce que le manager n'est pas convaincu » : il alerte RH, s'assure que le manager a des faits professionnels, et que le calendrier (fin d'essai) n'est pas découvert la veille.\n\nLe suivi d'essai n'est pas un second process de recrutement clandestin. On n'invite pas le salarié à de nouveaux « entretiens de sélection » pour refaire le matching. On s'assure que l'intégration prévue a eu lieu, que les objectifs de découverte du poste ont été dits, que les difficultés d'accès ou de formation ne sont pas prises pour de l'incompétence. Beaucoup d'essais « ratés » sont des onboardings ratés.\n\nLe recruteur peut animer un point à 2-3 semaines et à mi-essai, en trilateral court ou en bilatéral puis restitution, selon la culture. Il écoute le salarié (clarté du poste vs promesse) et le manager (faits de travail). Écart de promesse (télétravail, contenu, équipe) : c'est un sujet de parole employeur, pas seulement un « mauvais recrutement ». Écart de compétences : c'est un sujet d'évaluation managériale, documenté, sans critère protégé (L. 1132-1).\n\nLe REX (retour d'expérience) clôt le cycle. Il n'attend pas six mois. Bonne pratique : 30 à 45 minutes, une fois J1 passé et, idéalement, après un premier point d'essai. Participants : recruteur, manager, parfois RH. Objet : qualité du cadrage, de l'annonce, du vivier, des critères, des délais, de l'offre, de l'intégration. Livrable : 5 décisions concrètes pour le prochain poste, pas un procès. On ne cite pas de statistiques de marché inventées pour se justifier. On parle de ce process-ci.\n\nLa clôture ATS : statut embauché, archivage des candidats non retenus selon les durées (obligation d'archivage intermédiaire 5 ans à compter de la date à laquelle le poste a été pourvu, à des fins probatoires, en lien avec L. 1134-5 / référentiel CNIL ; vivier jusqu'à 2 ans à compter du dernier contact sauf opposition — recommandation CNIL, pas une durée unique imposée par le RGPD lui-même). Le junior applique la politique, il ne laisse pas les CV en base active « au cas où » indéfiniment."
            },
            {
              "block_type": "callout",
              "content": "Le junior ne décide pas une rupture de période d'essai hors circuit RH. Il ne « motive » pas une rupture par un critère protégé. Il ne prolonge pas un essai par e-mail personnel."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Poser les dates d'essai dans le calendrier à J1. Planifier les points. Si signal faible : faits écrits du manager, entretien de recadrage métier par le manager, RH en copie du cadre. REX avec support unique. Purge / archivage selon politique."
            },
            {
              "block_type": "code",
              "content": "TRAME POINT D'ESSAI (15-20 min) — recruteur facilitateur\n\n1. Conditions d'intégration (accès, binôme, formation) : ok / écart\n2. Poste réel vs poste annoncé : ok / écart\n3. Faits de travail (exemples du manager) : \n4. Questions du salarié : \n5. Objectifs jusqu'au prochain point : \n6. Alerte RH ? (écart grave, fin d'essai proche, promesse non tenue)\n\nTRAME REX RECRUTEMENT (30-45 min)\n\nBesoin initial vs besoin réel :\nDélai (ouverture → acceptation) : faits, pas « norme magique »\nSources qui ont produit la shortlist :\nCritères qui ont réellement départagé :\nQualité de l'offre (acceptation / friction) :\nIntégration J1 / J+15 :\n3 choses à répéter / 3 choses à changer :\nDécisions datées (fiche de poste, canal, grille, préboarding) :"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "PME. À 4 semaines, le manager dit : « Elle n'est pas assez souriante, on arrête l'essai. » Le junior demande des faits de travail. Il n'y en a pas. L'accueil a été inexistant, pas de binôme. Décision : RH + manager, plan d'intégration réel, pas une rupture fondée sur un trait de personnalité. Si plus tard des faits professionnels existent, ils seront documentés. Le sourire n'est pas un critère magique, et l'apparence / le sexe ne doivent pas s'y glisser (L. 1132-1)."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Oublier la date de fin d'essai. Prendre parti public pour le salarié contre le manager, ou l'inverse, sans faits. Transformer le REX en règlement de comptes. Laisser le statut ATS « offre » six mois après J1. Recueillir un avis médical via le manager."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "CDD court : l'essai est souvent bref ; le calendrier de suivi se compacte, il ne disparaît pas. Cadre dirigeant : le REX implique parfois la direction ; le junior prépare le dossier, il n'anime pas seul un conflit politique. Prestataire / cabinet : le REX se fait avec le client sur la mission, sans livrer de données inutiles sur les autres candidats."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le manager vous écrit à J-4 de la fin d'essai : « On arrête. » Aucun point n'a eu lieu. Listez votre séquence des 24 heures (questions, interlocuteurs, ce que vous ne faites pas)."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vous n'envoyez pas de mail de rupture. Vous collectez des faits professionnels, vous alertez RH immédiatement (calendrier), vous organisez un échange manager / RH, vous vérifiez le contrat (durée, formes). Vous pouvez écouter le salarié si RH le demande, sans promettre. Pourquoi : une rupture d'essai est un acte employeur cadré, pas un SMS de recrutement. Quatre jours, c'est tard : d'où l'intérêt des points amont."
            }
          ],
          "position": 6
        },
        {
          "title": "Quiz — Embauche et intégration",
          "description": "Huit questions : rôles, DPAE, dossier, contrat, préboarding, essai.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 10,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Répondez à chaque question. En cas d'échec, relisez le module puis retentez. Les questions juridiques essentielles exigent une justification : lisez toujours l'explication après validation."
            }
          ],
          "quiz": {
            "title": "Quiz — Embauche et intégration",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Concernant la DPAE, quelle affirmation est exacte ?",
                "question_type": "single_choice",
                "options": [
                  "A. C'est une obligation de l'employeur, à effectuer avant la prise de fonction ou le début de la période d'essai, au plus tôt dans les 8 jours précédant l'embauche.",
                  "B. C'est une obligation personnelle du recruteur junior, qui doit la signer dans les 48 heures après l'entretien final.",
                  "C. Elle remplace le contrat de travail si elle est déposée sur le site Urssaf.",
                  "D. Elle peut être faite jusqu'à 2 ans après J1, conformément à la recommandation CNIL sur le vivier."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "F23107 / Urssaf : avant prise de fonction ou essai, au plus tôt 8 jours avant. Obligation employeur. Elle ne remplace pas le contrat. Les 2 ans CNIL concernent le vivier de candidats, pas la DPAE. Le junior n'est pas le déclarant par défaut."
              },
              {
                "question": "Un collègue vous donne les identifiants Urssaf « pour dépanner » la DPAE. Que faites-vous ?",
                "question_type": "single_choice",
                "options": [
                  "A. Vous refusez de déposer hors habilitation, vous faites réaliser la DPAE par la personne habilitée (RH, paie, dirigeant, prestataire) avant J1.",
                  "B. Vous déposez, l'essentiel est que ce soit fait.",
                  "C. Vous demandez au candidat de se déclarer lui-même.",
                  "D. Vous attendez la fin de la période d'essai pour déclarer, c'est plus prudent."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "La DPAE est due avant la prise de poste / l'essai. Le junior ne s'improvise pas déclarant. Le candidat ne se déclare pas à la place de l'employeur. Attendre la fin de l'essai est contraire au calendrier."
              },
              {
                "question": "Quelle demande n'a pas sa place dans le dossier d'embauche constitué par le recruteur ?",
                "question_type": "single_choice",
                "options": [
                  "A. Un questionnaire sur le nombre d'enfants et un état de santé détaillé, « pour la mutuelle et l'équipe ».",
                  "B. Les pièces d'identité nécessaires à la paie et à la DPAE, selon la liste RH.",
                  "C. Le RIB lorsque la paie le demande.",
                  "D. Un diplôme expressément exigé par l'emploi."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "L. 1221-6 et non-discrimination : pas d'enquête familiale ou de santé via le recrutement. La santé au travail et la mutuelle ont leurs circuits. Identité, RIB, diplôme exigé peuvent relever de la liste RH."
              },
              {
                "question": "Le projet de contrat indique un salaire inférieur à l'offre acceptée. Conduite recommandée ?",
                "question_type": "single_choice",
                "options": [
                  "A. Bloquer l'envoi, signaler l'écart à RH et au manager, ne pas faire signer en silence.",
                  "B. Faire signer vite, le candidat est « content d'entrer ».",
                  "C. Augmenter vous-même le variable pour compenser, sans mandat.",
                  "D. Dire que l'offre orale n'a jamais existé."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "L'écart offre / contrat est une nouvelle décision, pas un détail d'impression. Compenser sans mandat ou nier l'offre casse la parole employeur et crée un litige."
              },
              {
                "question": "Quelle est la répartition la plus juste des rôles à l'onboarding ?",
                "question_type": "single_choice",
                "options": [
                  "A. Le manager porte l'accueil métier ; RH l'administratif ; l'IT les accès ; le recruteur coordonne et contrôle que la chaîne est déclenchée.",
                  "B. Le recruteur junior évalue la performance dès J1 et décide de l'essai.",
                  "C. L'IT décide du salaire et de la DPAE.",
                  "D. Le manager dépose la DPAE, le recruteur rédige seul le contrat."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Coordination ≠ substitution. L'évaluation de l'essai est managériale dans un cadre RH. DPAE et contrat ne sont pas des actes IT ou junior isolés."
              },
              {
                "question": "Le préboarding autorise-t-il à faire travailler le futur salarié avant J1 « pour avancer » ?",
                "question_type": "single_choice",
                "options": [
                  "A. Non : pas de travail productif avant le cadre d'embauche (dont DPAE avant prise de poste / essai). Le préboarding est information et organisation.",
                  "B. Oui, si le candidat est d'accord et non payé.",
                  "C. Oui, cela remplace la période d'essai.",
                  "D. Oui, c'est une obligation légale de formation initiale."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Le préboarding n'est pas une obligation légale générale, et ce n'est pas du travail dissimulé « consentie ». La DPAE est due avant la prise de fonction / l'essai. L'essai ne se remplace pas par du bénévolat."
              },
              {
                "question": "Un manager veut rompre l'essai « parce que la personne n'est pas assez souriante », sans faits de travail. Que faites-vous ?",
                "question_type": "single_choice",
                "options": [
                  "A. Vous n'exécutez pas ce motif ; vous exigez des faits professionnels et alertez RH ; un onboarding absent peut expliquer un faux « échec ».",
                  "B. Vous envoyez un SMS de rupture le soir même, par réactivité.",
                  "C. Vous transformez le motif en « look pas corporate » dans l'ATS.",
                  "D. Vous prolongez l'essai par e-mail personnel de 6 mois."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Rupture d'essai = circuit RH, faits professionnels, pas un critère d'apparence. Le junior ne rompt pas seul et ne prolonge pas hors textes applicables."
              },
              {
                "question": "Quelle affirmation sur la conservation des données après embauche est la plus conforme aux sources du cours ?",
                "question_type": "single_choice",
                "options": [
                  "A. Candidat retenu : la procédure se referme vers le dossier personnel ; candidats non retenus : archivage intermédiaire 5 ans à compter du pourvoi du poste (probatoire, L. 1134-5) ; vivier 2 ans = recommandation CNIL, pas une durée unique RGPD.",
                  "B. Tous les CV restent en base active indéfiniment, c'est une obligation Urssaf.",
                  "C. On supprime tout le jour de J1, y compris les traces probatoires.",
                  "D. La DPAE impose de publier le CV du nouvel embauché pendant 5 ans."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Référentiel CNIL 2026 + L. 1134-5 : 5 ans probatoires pour non-retenus à compter du pourvoi. Vivier 2 ans = recommandation. Ni conservation active infinie, ni destruction immédiate de toute trace, ni publication du CV."
              }
            ]
          },
          "position": 7
        }
      ]
    },
    {
      "position": 17,
      "title": "Outils et indicateurs du recrutement",
      "description": "Utiliser ATS, CRM et pipeline, calculer les indicateurs (délais, coûts, conversion, sources, qualité, expérience) sans inventer de norme magique, et connaître les limites de l'IA.",
      "lessons": [
        {
          "title": "ATS, CRM et pipeline : piloter le flux sans se noyer dans l'outil",
          "description": "Comprendre à quoi servent l'ATS, le CRM recrutement et le pipeline, et quelles disciplines de saisie rendent les indicateurs fiables.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous distinguez ATS (suivi des candidatures et des postes), CRM recrutement (relation vivier / contacts) et tableur de secours.\n\nVous savez représenter un pipeline par étapes, avec un statut unique par candidature et une date d'entrée dans chaque étape.\n\nVous savez pourquoi une saisie incomplète rend tous les indicateurs mensongers."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "L'ATS (Applicant Tracking System) est le système de suivi des candidatures. Il relie un besoin (poste, requisition) à des personnes, des étapes, des documents, des messages et des décisions. Il n'est pas un réseau social. Il n'est pas non plus, à lui seul, un dossier paie. Son utilité : ne pas perdre une candidature, savoir qui attend une réponse, produire des indicateurs, tracer une décision. Une obligation légale n'est pas « d'avoir un ATS » : beaucoup de TPE fonctionnent avec messagerie et tableur. L'outil est une politique interne et une bonne pratique d'organisation dès que le volume dépasse la mémoire d'une personne.\n\nLe CRM recrutement (parfois un module de l'ATS) sert à suivre des contacts qui ne sont pas forcément candidats d'un poste ouvert : vivier, cooptations, anciens finalistes, écoles. Il impose le même cadre RGPD que le recrutement : information, finalité, durées, opposition. La recommandation CNIL d'un vivier jusqu'à 2 ans à compter du dernier contact, sauf opposition, n'est pas une durée unique imposée par le RGPD lui-même ; l'archivage intermédiaire 5 ans à compter du pourvoi du poste, à des fins probatoires, s'appuie sur L. 1134-5. L'outil ne crée pas le droit ; il doit pouvoir l'appliquer (date de dernier contact, information, suppression).\n\nLe pipeline est la représentation du flux : combien de personnes à chaque étape, pour un poste ou pour un portefeuille. Un pipeline n'est fiable que si chaque candidature a un et un seul statut courant, une date d'entrée dans l'étape, un motif de sortie lorsque c'est un refus. « En cours » fourre-tout n'est pas un statut. Les étapes types — à adapter à l'entreprise — sont : nouveau, tri CV, préqualification, entretien 1, entretiens suivants, shortlist, offre, embauche, refusé, sans réponse, réserve, attente. Trop d'étapes tue la saisie ; trop peu empêche de voir où le flux se casse.\n\nL'ATS ne décide pas. Il enregistre. Les méthodes d'aide au recrutement, y compris lorsqu'elles sont outillées (scoring, parsing, ranking), doivent être pertinentes au regard de la finalité (L. 1221-9) et le candidat doit être informé préalablement des méthodes utilisées à son égard (L. 1221-8). Un scoring opaque qui écarte sur un proxy d'âge, de genre ou d'origine n'est pas « de la data » : c'est un risque de discrimination (L. 1132-1).\n\nLe junior n'est pas administrateur système. Il est responsable de la qualité de ce qu'il saisit : dates réelles, sources, commentaires professionnels, pas de données hors L. 1221-6. Un commentaire « look pas corporate » dans l'ATS est une preuve potentielle, pas une aide-mémoire anodine."
            },
            {
              "block_type": "callout",
              "content": "Pas d'obligation légale d'utiliser un ATS. Obligation : non-discrimination, méthodes pertinentes, information du candidat, RGPD. Politique interne : outil, étapes, droits d'accès. Bonne pratique : un statut, une date, un motif interne de refus."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "En début de poste : créer la réquisition avec date de validation du besoin (elle servira au time to fill). À chaque mouvement : changer le statut le jour même. Source saisie à l'entrée. Commentaire = fait d'évaluation, pas un jugement de personne. Droits d'accès : le manager voit ce qui lui est destiné, pas toute la CVthèque par curiosité. Export : ne pas sortir un fichier nominatif sur une clé USB personnelle."
            },
            {
              "block_type": "code",
              "content": "PIPELINE MINIMAL — STATUTS (exemple interne, pas une norme légale)\n\n1. Nouveau (date d'entrée = date de candidature ou de premier contact)\n2. Tri CV\n3. Préqualification\n4. Entretien 1\n5. Entretien suivant / tests (si informés, L. 1221-8)\n6. Shortlist\n7. Offre\n8. Embauché\nS. Sans réponse / ghosting\nR. Refusé (motif interne, étape de sortie)\nA. Attente (date d'update)\nB. Réserve courte (date de caducité)\nV. Vivier (date dernier contact, info / opposition)\n\nRÈGLE DE SAISIE\n- Un seul statut courant\n- Date réelle, pas date de saisie rétroactive « pour faire joli » sauf correction tracée\n- Source : un canal principal\n- Interdit dans les commentaires : critères L. 1132-1, santé, rumeurs"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "PME 60 personnes, tableur partagé. Trois recruteurs écrivent « ok », « top », « ko » dans la même colonne. Impossible de savoir qui doit un retour. Passage à un ATS léger : étapes fermées, responsable de chaque fiche, relance à J+2 sur les statuts « entretien 1 fait » sans débrief. L'outil n'a pas recruté ; il a rendu visible le goulot « manager ne débriefe pas »."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Laisser 40 fiches en « nouveau » par peur de refuser. Dupliquer un candidat sous trois fiches. Saisir la source « LinkedIn » pour un coopté. Copier-coller un CV dans un prompt d'IA grand public. Donner au manager un accès admin « plus simple »."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Cabinet : un pipeline par mission client, confidentialité renforcée. Intérim : le pipeline mixte missions / disponibilités n'est pas le même objet qu'un CDI unique ; ne pas forcer un modèle entreprise. Multi-ATS (client + cabinet) : la vérité statutaire du junior est l'outil de son employeur ; il ne laisse pas le candidat dans le vide entre les deux."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Voici des libellés trouvés dans un ATS. Recodez-les en statut + commentaire acceptable, ou dites « à supprimer / à alerter » : 1) « trop vieille mais sympa » ; 2) « entretien 1 ok, attente dispo manager, relance 18/10 » ; 3) « ko, pas le bon outil ERP » ; 4) « peut-être » ; 5) « enceinte ? à voir »."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1) Alerter : critère d'âge, ne pas laisser. 2) Statut attente + date, commentaire factuel. 3) Refusé, motif interne professionnel. 4) Inacceptable comme statut : décider attente datée, réserve ou triangulation. 5) Alerter : santé / grossesse, hors L. 1221-6 et L. 1132-1. Pourquoi : l'ATS est une mémoire juridique autant qu'un kanban."
            }
          ],
          "position": 0
        },
        {
          "title": "Time to fill et time to hire : deux délais, zéro norme magique",
          "description": "Définir, calculer et interpréter les délais de recrutement sans invoquer un benchmark universel inventé.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez définir le time to fill et le time to hire selon la convention de ce cours, et vous savez qu'une entreprise peut les définir autrement : l'essentiel est de l'écrire.\n\nVous savez les calculer sur des données fictives et interpréter un écart, sans dire « c'est trop long par rapport au marché » sans source.\n\nVous savez quels leviers internes agissent sur chaque délai."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un délai de recrutement n'est pas une obligation légale. Aucun article du Code du travail ne fixe un nombre de jours « normal » pour pourvoir un poste. Les durées que vous calculerez ici sont des indicateurs de gestion. Ils servent à voir où le temps passe, à comparer des postes entre eux dans la même organisation, à détecter un goulot. Ils ne servent pas à humilier un junior, ni à invoquer une « moyenne marché » que ce cours n'a pas mesurée et que vous n'inventerez pas.\n\nConvention de ce cours, à écrire dans votre politique interne si vous l'adoptez :\n\nLe time to fill mesure le temps que l'organisation met à pourvoir un besoin, du point de vue du poste. Date de début : validation du besoin (réquisition approuvée, ouverture réelle du process). Date de fin : acceptation de l'offre (le poste est pourvu côté décision). Formule : date d'acceptation de l'offre − date de validation du besoin, en jours calendaires ou ouvrés, mais toujours la même convention. On ne mélange pas.\n\nLe time to hire mesure le temps que le candidat finalement embauché a passé dans le process. Date de début : son entrée (candidature reçue ou premier contact sourcé daté). Date de fin : la même acceptation d'offre. Formule : date d'acceptation − date d'entrée du candidat retenu.\n\nPourquoi deux indicateurs. Un time to fill long avec un time to hire court signifie que l'organisation a tardé à trouver (ou à ouvrir) le bon profil, mais a ensuite décidé vite sur la personne retenue. Un time to hire long avec un time to fill comparable signifie que le candidat retenu a attendu longtemps (risque de désistement, mauvaise expérience). Un time to fill qui s'arrête à J1 (prise de poste) n'est pas le même objet : il inclut le préavis. Ce cours le nomme alors « délai d'arrivée » si vous l'utilisez, pour ne pas le confondre avec le fill.\n\nIl n'existe pas de norme magique universelle (ni « 30 jours », ni « 45 jours », ni un pourcentage de marché). Un poste pénurique, un process à cinq entretiens, un comité mensuel, un préavis long, un gel budgétaire, faussent toute comparaison externe. Comparez d'abord : ce poste vs d'autres postes analogues chez vous ; cette vague vs la précédente ; le temps passé par étape (tri, attente manager, offre).\n\nCes indicateurs ne disent rien, à eux seuls, de la légalité du process. Un process très rapide peut être discriminatoire. Un process long peut être soigneux. On ne « gagne » pas du temps en sautant l'information sur les méthodes (L. 1221-8) ou en posant des questions hors L. 1221-6."
            },
            {
              "block_type": "callout",
              "content": "Écrivez vos dates de début et de fin. Ne changez pas de définition en cours d'année pour embellir un reporting. N'inventez pas de benchmark marché. N'utilisez pas un délai comme preuve qu'un candidat « n'était pas motivé »."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Dans l'ATS, champs obligatoires : date de validation du besoin, date d'entrée de chaque candidat, date d'offre, date d'acceptation. Calculez par poste, puis médiane sur un portefeuille (la moyenne est tirée par un outlier de 180 jours). Découpez par étape pour agir : relance manager, réduction d'un entretien inutile, offre plus rapide."
            },
            {
              "block_type": "code",
              "content": "DÉFINITIONS — CONVENTION DU COURS\n\nTime to fill (TTF) = date_acceptation_offre − date_validation_besoin\nTime to hire (TTH) = date_acceptation_offre − date_entrée_candidat_retenu\nDélai d'arrivée (si utilisé) = date_prise_de_poste − date_validation_besoin\n\nEXERCICE DONNÉES FICTIVES — poste « Chargé de recrutement junior », PME services\n\nValidation du besoin : 02/03/2026\nCandidat retenu (Amina) : candidature le 20/03/2026, offre le 10/04/2026, acceptation le 12/04/2026, J1 le 02/06/2026\nAutre finaliste (Bruno) : premier contact sourcé le 05/03/2026 (non retenu)\n\nCalculez TTF et TTH en jours calendaires.\nInterprétez : que mesure-t-on si l'on s'arrête à J1 ?"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "ETI industrielle. Le DRH demandait « pourquoi 70 jours, le marché c'est 40 ». Aucune source. Le junior présente le découpage : 25 jours avant première diffusion (fiche non validée), 15 jours d'attente de débrief, 20 jours de préavis dans le délai d'arrivée qu'on avait mélangé au fill. On sépare TTF et délai d'arrivée. On agit sur la validation de fiche et le débrief, pas sur un slogan de marché."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Partir de la date de publication de l'annonce alors que le besoin était validé trois semaines plus tôt (TTF sous-estimé). Partir de la date de création de fiche ATS renseignée le jour de l'embauche (TTF = 0, absurde). Comparer un CDD d'été et un cadre expert. Annoncer un TTF « sous 15 jours » au manager sans tenir compte des étapes qu'il impose."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Poste gelé 3 semaines : soit on stoppe le chronomètre (politique interne à écrire), soit on le laisse courir pour montrer le coût du gel. Les deux se défendent ; le mélange, non. Volume : médiane par campagne, pas une moyenne tirée par un poste resté ouvert 8 mois. Cabinet : TTF client (besoin client → acceptation) vs TTH cabinet (entrée du candidat chez vous → acceptation) : deux reportings, deux interlocuteurs."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Calculez TTF et TTH (jours calendaires) sur les données Amina ci-dessus. Puis calculez le délai d'arrivée. En une phrase, dites ce que chaque chiffre permet de dire au manager, sans benchmark."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "TTF = 12/04 − 02/03 = 41 jours. TTH = 12/04 − 20/03 = 23 jours. Délai d'arrivée = 02/06 − 02/03 = 92 jours. On peut dire : 41 jours pour décider d'une embauche après ouverture ; Amina a passé 23 jours dans le process ; 92 jours avant qu'elle soit en poste, largement tirés par le préavis. On ne peut pas dire « 41 c'est bon / mauvais vs le marché » : aucune norme magique ici. Bruno n'entre pas dans le TTH (il n'est pas le retenu). Pourquoi deux délais : le manager qui ne voit que 92 jours croit que le recrutement a « duré un trimestre » alors qu'une part est un préavis, hors main du junior."
            }
          ],
          "position": 1
        },
        {
          "title": "Coût, conversion, acceptation d'offres et désistement",
          "description": "Calculer un cost per hire, des taux de passage et des taux d'acceptation / désistement, puis les lire avec prudence.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez poser une formule de coût par embauche en listant les coûts inclus, sans prétendre à un chiffre marché.\n\nVous savez calculer des taux de conversion d'étape à étape, un taux d'acceptation d'offres et un taux de désistement.\n\nVous savez interpréter un goulot sans accuser automatiquement « la qualité des CV »."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le cost per hire (coût par embauche) est un indicateur économique interne. Formule de base : somme des coûts de recrutement attribués à la période ou aux postes concernés, divisée par le nombre d'embauches réalisées sur le même périmètre. Le débat n'est pas la formule, c'est le numérateur. Incluez-vous : salaires chargés de l'équipe recrutement au prorata, jobboards, agence, cooptation, outils ATS, déplacements, tests payants, temps manager ? Une politique interne doit le dire. Un cost per hire qui n'inclut que les annonces, comparé à un autre qui inclut l'agence et les salaires, ne se compare pas. Ce cours n'avance aucun coût moyen national.\n\nLa conversion mesure le passage d'une étape à la suivante. Taux de conversion A→B = nombre de personnes passées en B / nombre de personnes entrées en A, sur un poste ou une période. On peut calculer : CV reçus → préqualifiés ; préqualifiés → entretien 1 ; entretien 1 → offre ; offre → acceptation. Un taux bas n'est pas « la faute des candidats » par défaut. Il peut signaler une annonce trop large, un tri trop sévère, un manager inatteignable, une offre non compétitive, un process trop long (le TTH rejoint ici le désistement).\n\nLe taux d'acceptation des offres = offres acceptées / offres émises (sur la période, en veillant aux offres encore ouvertes). Un taux bas oriente vers le contenu de l'offre, le délai, le process vécu, l'écart entre poste annoncé et poste réel — pas vers une psychologie générale des candidats.\n\nLe taux de désistement doit préciser l'étape : désistement après acceptation, après offre, après convocation, absence à entretien. Formule type : nombre de désistements à l'étape X / nombre de personnes arrivées à l'étape X. Mélanger ghosting pré-entretien et rupture d'essai fausse le pilote.\n\nAucun de ces taux n'est une obligation légale. Ils ne justifient pas non plus de discriminer pour « améliorer la conversion ». Un scoring qui écarte des adresses ou des âges pour « performer » heurte L. 1132-1. Un indicateur se lit avec le qualitatif (motifs de refus d'offre recueillis librement) et avec les volumes (un taux sur 3 personnes n'est pas un pilote)."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Fixez le périmètre (poste, trimestre, type de contrat). Excluez les petits volumes de votre « alerte ». Pour chaque goulot, posez trois hypothèses (offre, process, ciblage) et une action de test, pas un discours. Tracez les motifs de refus d'offre dans une liste fermée courte : rémunération, contenu, délai, contre-offre, localisation, autre — sans insister si le candidat ne dit rien."
            },
            {
              "block_type": "code",
              "content": "FORMULES (convention de cours)\n\nCost per hire = coûts_recrutement_inclus / nombre_d_embauches\nConversion A→B = effectif_étape_B / effectif_étape_A\nTaux d'acceptation d'offres = offres_acceptées / offres_émises_closes\nTaux de désistement après convocation = absences_ou_annulations_candidat / convocations_envoyées\n\nDONNÉES FICTIVES — campagne « Techniciens maintenance », 1 site, T1\n\nCoûts : jobboard 2 400 € ; cabinet (1 poste) 6 000 € ; ATS prorata 300 € ; cooptation 0 €\nSalaires recrutement : non inclus dans cette politique (à noter)\nEmbauches : 3\n\nFunnel : 120 CV → 24 préqual → 12 entretiens 1 → 5 offres émises → 3 acceptées → 1 désistement après acceptation (avant J1)\nConvocations entretien 1 : 14 (2 no-show)\n\nCalculez : cost per hire (selon numérateur ci-dessus) ; conversions CV→préqual, préqual→E1, E1→offre, offre→acceptation ; taux de no-show ; taux de désistement post-acceptation."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Startup. Le fondateur voit 5 offres pour 2 acceptations et dit « les gens ne sont pas sérieux ». Le junior aligne les motifs : 2 refus pour écart de rémunération déjà visible dès l'annonce, 1 pour délai de process de 6 semaines après entretien. Action : cadrer la fourchette en amont (bonne pratique, pas encore une obligation française consolidée d'indiquer le salaire dans l'annonce au jour des sources du cours — directive UE 2023/970 en transposition) et raccourcir le TTH. Pas de discours moral sur les candidats."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Diviser par le nombre de postes ouverts et non par les embauches réellement faites. Oublier le coût cabinet. Publier un taux d'acceptation de 100 % en omettant les offres encore ouvertes et les orales. Utiliser un taux sur 4 CV pour changer toute la stratégie. Accuser un canal « qui convertit mal » alors que le tri humain est incohérent."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Intérim : le « cost per hire » n'est pas toujours l'indicateur pertinent (coût de mission, taux d'entrée en mission). Cabinet : marge et délai client vs coût interne. Interne : un pourvoi interne a un coût (temps) mais pas le même numérateur d'agence ; ne le noyez pas dans le même ratio sans le dire."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Calculez tous les indicateurs demandés dans le bloc données fictives « Techniciens maintenance ». Puis, en 5 lignes, proposez une hypothèse pour le goulot le plus marqué, sans invoquer de statistique nationale."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Cost per hire = (2 400 + 6 000 + 300) / 3 = 8 700 / 3 = 2 900 € par embauche, salaires recrutement non inclus (à rappeler au lecteur du reporting).\nConversion CV→préqual = 24/120 = 20 %. Préqual→E1 = 12/24 = 50 %. E1→offre = 5/12 ≈ 41,7 %. Offre→acceptation = 3/5 = 60 %. No-show = 2/14 ≈ 14,3 %. Désistement post-acceptation = 1/3 ≈ 33 % (petit volume : on signale le fait, on ne déclare pas une « crise »).\nGoulot : 120→24 peut dire annonce trop large ou tri sévère ; 5 offres pour 3 acceptations + 1 désistement après oui oriente vers l'offre et le préboarding, pas vers « les techniciens ». Pourquoi : les pourcentages éclairent, les volumes et les motifs décident de l'action. 2 900 € n'est ni « cher » ni « bon marché » vs un marché non cité ici."
            }
          ],
          "position": 2
        },
        {
          "title": "Sources, qualité d'embauche et expérience candidat",
          "description": "Lire la performance des canaux, la qualité à 90 jours et l'expérience vécue, sans KPI inventés.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez attribuer une source principale par candidature et calculer volume, conversion et embauches par canal.\n\nVous savez poser un indicateur interne de qualité d'embauche (essai, satisfaction manager à une date, adéquation au poste) sans benchmark externe.\n\nVous savez approximer l'expérience candidat par des faits de process (délai de réponse, clôture, no-show) plutôt que par un slogan."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La source est l'origine principale de la candidature : annonce jobboard X, site carrière, cooptation, cabinet, sourcing direct, école, mobilité interne, agence d'intérim, candidature spontanée. Sans source saisie à l'entrée, tout reporting « quel canal marche » est une conversation. Règle : une source principale, éventuellement une source secondaire, pas cinq tags contradictoires.\n\nOn ne juge pas un canal au seul volume. Un canal qui envoie 200 CV hors critères et 0 embauche n'est pas « performant ». Un canal qui envoie 8 CV et 2 embauches mérite d'être lu en conversion et en qualité, pas d'être coupé parce que le volume est faible. Ce cours ne fournit pas de répartition « normale » entre LinkedIn, France Travail, cooptation, etc. Ces parts varient selon le métier, le bassin, le budget, l'image.\n\nLa qualité d'embauche n'est pas le charisme du junior. C'est la tenue de l'embauche au-delà du jour de signature : validation de l'essai, présence à 90 jours, avis du manager sur l'adéquation aux critères du poste, éventuellement autonomie atteinte — indicateurs internes à définir. Un recrutement « rapide et pas cher » qui se rompt en essai est un échec de qualité, visible si l'on relie ATS et RH. On n'invente pas un score magique 1-100 de « quality of hire marché ».\n\nL'expérience candidat est ce que la personne vit : clarté de l'annonce, délai de premier retour, tenue des rendez-vous, information sur les méthodes (L. 1221-8), questions licites (L. 1221-6), refus ou attente datée, cohérence offre / poste. On peut la rapprocher de faits : temps jusqu'au premier retour, part de candidatures clôturées, no-show, refus d'offre motivés par le process, incidents de communication. Un questionnaire post-process est une politique interne possible, volontaire, sans pression, sans données hors finalité. Pas de note moyenne nationale dans ce cours.\n\nRelier les trois évite les fausses victoires : un canal peu cher, conversion élevée, mais essais rompus et avis candidats dégradés, n'est pas à scaler. Un canal plus coûteux qui produit des embauches stables peut être défendable. L'arbitrage est managérial, chiffré, sans discrimination (on n'écarte pas un canal parce qu'il « amène tel public » au sens d'un critère protégé)."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Champ source obligatoire. Tableau mensuel : volume, entretiens, offres, embauches, coût du canal si connu, essais validés à date. Enquête courte post-clôture (3 questions) si politique ok. REX qualité à 90 jours avec le manager, faits de poste."
            },
            {
              "block_type": "code",
              "content": "DONNÉES FICTIVES — 1 mois, poste unique « Conseiller clientèle », centre de contacts\n\nCanal          CV   E1   Offres   Embauches   Coût canal (€)\nJobboard A      80    8      2         1          800\nCooptation      10    6      3         2            0 (prime non encore versée)\nSourcing direct 15    4      1         0          temps interne non chiffré\nSpontané        25    1      0         0            0\n\nÀ 90 jours (données RH fictives) : sur les 3 embauches, 1 rupture d'essai (issue du jobboard A), 2 toujours en poste (cooptation).\nPremier retour médian : jobboard 9 jours ; cooptation 2 jours ; sourcing 4 jours ; spontané 12 jours (plusieurs non clôturés).\n\nCalculez embauches / CV par canal. Interprétez qualité et expérience sans conclure à une loi de marché."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Agence d'intérim. Un jobboard ramène beaucoup d'inscriptions, peu de missions tenues à 1 mois. La cooptation de salariés déjà connus tient mieux. Le junior propose de garder le jobboard pour le volume d'urgence, mais de mesurer la tenue à 4 semaines, pas seulement les inscriptions. Pas de chiffre « marché de l'intérim » inventé : comparaison interne entre canaux de l'agence."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Attribuer toutes les embauches à « LinkedIn » parce que le CV est au format LinkedIn. Couper un canal le lendemain d'une campagne trop courte. Envoyer un NPS agressif le soir du refus. Mesurer la qualité au « feeling » du manager le jour J1 seulement."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Marque employeur forte : le spontané gonfle, la conversion CV→entretien baisse, ce n'est pas forcément un échec d'annonce. Secteur confidentiel : peu de canaux publics, la source « réseau dirigeant » doit être saisie comme telle. Handicap / partenaires emploi : un volume faible peut être un canal stratégique d'inclusion, non jugé au seul cost per hire."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Sur le tableau fictif, calculez le taux d'embauche sur CV par canal. Puis rédigez 6 lignes de reporting pour le manager : que garder, que vérifier, ce que l'on ne peut pas conclure."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Jobboard A : 1/80 = 1,25 %. Cooptation : 2/10 = 20 %. Sourcing : 0/15 = 0 %. Spontané : 0/25 = 0 %. Qualité : la seule embauche jobboard est aussi la rupture d'essai ; les 2 cooptations tiennent à 90 jours — signal interne, volume faible. Expérience : spontané et jobboard ont les premiers retours les plus lents, avec des non-clôturés — action de process, pas de morale. On ne peut pas conclure « la cooptation gagne toujours dans le secteur ». On peut décider : fiabiliser la clôture spontané/jobboard, continuer la cooptation, examiner pourquoi le sourcing n'a pas converti (cible, discours, délai). Pourquoi : trois familles d'indicateurs, une décision locale."
            }
          ],
          "position": 3
        },
        {
          "title": "Reporting : dire vrai aux managers et à la direction",
          "description": "Construire un point recrutement lisible, actionnable, sans vanity metrics ni benchmarks fantômes.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez sélectionner 6 à 10 indicateurs utiles pour un comité, avec définitions écrites.\n\nVous savez raconter un goulot (fait, hypothèse, demande d'arbitrage) plutôt que d'aligner des pourcentages.\n\nVous savez ce que l'on ne met pas dans un reporting (données sensibles, comparaisons discriminatoires, normes inventées)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le reporting n'est pas une obligation légale de forme. C'est un outil de décision. Un bon reporting répond à : combien de besoins ouverts, depuis quand, où ils bloquent, combien d'embauches, à quel délai interne, à quel coût selon la politique, avec quelle qualité récente, et quelles décisions vous demandez. Un mauvais reporting aligne des vanity metrics (likes, CV bruts, « reach ») qui n'aident personne à arbitrer une fiche, un budget ou un entretien de moins.\n\nLe public change le niveau. Le manager d'un poste veut : statut des personnes, dates, blocage précis, prochaine action. La direction veut : portefeuille, risques (postes critiques, désistements, coût agence), tendances internes. Le junior ne noie pas le second avec 40 prénoms, ni le premier avec un slide « vision data ». Les données personnelles restent minimisées : un comité de direction n'a pas besoin de l'âge, de l'adresse ou de l'état de santé d'un candidat. L. 1132-1 et le RGPD s'appliquent aussi aux tableaux.\n\nChaque indicateur porte sa définition en note de bas de page (TTF, TTH, cost per hire et son numérateur). Sans cela, un mois « meilleur » n'est qu'un changement de formule. On n'ajoute pas « vs marché = X jours » : ce cours n'a pas de telle source, et une direction sérieuse préfère une absence de chiffre à un chiffre inventé.\n\nLe reporting sert aussi à protéger le process : montrer qu'un délai est de l'attente manager, pas du sourcing, n'est pas une dénonciation, c'est un fait daté. Le ton reste professionnel, sans ironie, avec une demande claire (valider la fiche, libérer deux créneaux, accepter une fourchette).\n\nL'IA qui « génère un commentaire de reporting » n'exonère pas de vérifier les comptes. Un total qui ne recoupe pas l'ATS se voit. Mieux vaut un tableau plus pauvre et vrai."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Hebdo manager : kanban + 5 lignes. Mensuel direction : 1 page. Toujours : définitions, volume, action demandée. Relecture : aucune colonne âge/sexe/origine, aucun commentaire L. 1132-1, aucun benchmark sans source."
            },
            {
              "block_type": "code",
              "content": "CANEVAS 1 PAGE — COMITÉ MENSUEL (fictif, à remplir avec des vrais chiffres internes)\n\n1. Portefeuille : postes ouverts / ouverts > 45 j (seuil interne, pas une norme marché) / embauches du mois\n2. Délais : médiane TTF, médiane TTH (définitions)\n3. Funnel global : CV → E1 → offres → acceptations\n4. Offres : taux d'acceptation, désistements post-oui\n5. Coût : cost per hire selon numérateur validé ; part agence\n6. Qualité : essais en cours, ruptures d'essai du mois\n7. Expérience : % de clôtures, médiane premier retour\n8. Risques : 3 postes, 1 ligne chacun (blocage + demande)\n9. Décisions à prendre aujourd'hui : \n\nINTERDIT DANS LE SLIDE\n- « Le marché est à 28 jours »\n- Colonne « femmes / hommes / seniors » pour « piloter la perf »\n- Prénoms + commentaires bruts d'entretien\n- Scores IA non expliqués"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Cabinet. Un junior envoie chaque vendredi un fichier de 12 onglets. Le client ne l'ouvre plus. Passage à un e-mail de 15 lignes : mission, pipeline réel (4 noms en shortlist), dates, blocage (attente d'un client depuis 8 jours), demande (créneau mercredi). Les indicateurs de délai restent au reporting interne cabinet, pas dans le mail client hebdo."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Changer la définition du TTF le mois où il est mauvais. Afficher 152 % de conversion. Copier un dashboard trouvé sur internet avec des cibles chiffrées. Parler d'un candidat interne dans un slide largement diffusé."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "TPE : un tableau unique suffit, pas de comité. Volume campus : ajouter la donnée école / session, pas la vie privée. Recrutement confidentiel : reporting restreint, intitulés floutés."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "À partir des données « Techniciens maintenance » (leçon coût / conversion) et des 41 / 23 / 92 jours (leçon délais, poste Amina), rédigez le paragraphe « risques et décisions » d'un comité, 8 à 12 lignes, sans benchmark."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Le paragraphe doit : rappeler le cost per hire 2 900 € (salaires non inclus), le funnel 5 offres / 3 acceptations / 1 désistement post-oui, demander un arbitrage sur l'offre ou le préboarding, séparer TTF 41 j et délai d'arrivée 92 j pour ne pas faire porter le préavis au sourcing. Il ne doit pas dire « on est au-dessus du marché ». Pourquoi : un comité tranche des actions, pas des slogans."
            }
          ],
          "position": 4
        },
        {
          "title": "IA en recrutement : usages, limites et responsabilité du junior",
          "description": "Utiliser un outil d'assistance sans déléguer une décision, sans exposer des données, sans contourner le droit.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez ce qu'un outil d'IA peut assister (brouillon, synthèse, aide à structurer) et ce qu'il ne peut pas remplacer (décision, motivation licite, information du candidat).\n\nVous savez relier L. 1221-8, L. 1221-9, L. 1132-1, L. 1221-6 et le RGPD à un usage concret d'outil.\n\nVous savez refuser un usage (CV collé dans un outil grand public, tri automatique opaque, questions générées illicites)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "L'intelligence artificielle, dans le recrutement quotidien d'un junior, désigne souvent des fonctions d'assistance : rédaction d'annonce, parsing de CV, ranking, chatbots de candidature, synthèse d'entretien, prédiction de « matching ». Aucune de ces fonctions n'est, en soi, interdite par un texte unique « anti-IA ». Aucune n'est non plus un droit à sous-traiter l'embauche à un modèle.\n\nLe droit applicable reste le droit du recrutement. Les méthodes et techniques d'aide au recrutement doivent être pertinentes au regard de la finalité (L. 1221-9). Le candidat est informé préalablement des méthodes utilisées à son égard ; les résultats sont confidentiels (L. 1221-8). Les informations demandées restent limitées à ce qui a un lien direct et nécessaire avec l'emploi (L. 1221-6). L'interdiction de discriminer (L. 1132-1) s'applique aux décisions humaines et aux systèmes qui les préparent : un proxy (code postal, prénom, dates trop lisibles comme âge, temps parental) peut reproduire un critère protégé. Le RGPD s'applique aux traitements : finalité, minimisation, sécurité, droits des personnes, éventuellement analyses d'impact selon le contexte — le junior n'improvise pas une analyse d'impact, il alerte le DPO / RH si un nouvel outil traite des CV.\n\nLimites pratiques. Un modèle génératif grand public n'est pas un sous-traitant validé : y coller un CV nominatif est souvent une fuite. Un score unique sans critère lisible n'aide pas à un refus professionnel et ne se défend pas. Une synthèse d'entretien peut omettre un fait ou en inventer : vous relisez. Un chatbot qui pose « êtes-vous marié, avez-vous des enfants, quel âge » n'est pas « digital », c'est hors cadre. Une IA n'a pas d'obligation de motiver un refus, pas plus que vous ; elle n'autorise pas non plus un motif discriminatoire généré « par erreur ».\n\nLa politique interne prime sur l'enthousiasme : outils autorisés, données autorisées, mention d'information candidats, validation humaine des écarts. Le junior qui « teste un outil trouvé en ligne » sur la CVthèque sort de son mandat.\n\nBonne pratique : l'IA brouillonne, l'humain décide, l'ATS trace, le candidat est informé des méthodes réellement utilisées, pas d'un jargon marketing."
            },
            {
              "block_type": "callout",
              "content": "Obligation : méthodes pertinentes, information préalable, non-discrimination, protection des données. Recommandation d'autorité : guides CNIL recrutement / durées. Politique interne : catalogue d'outils. Bonne pratique : relecture humaine systématique. Pas de norme magique de « taux d'automatisation »."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Avant usage : l'outil est-il dans le catalogue ? Les candidats sont-ils informés ? Des données nominatives sortent-elles du SI ? Le critère de tri est-il un critère de poste ? Après usage : relecture, décision humaine consignée, pas de commentaire « l'IA a dit non » comme seul motif interne."
            },
            {
              "block_type": "code",
              "content": "USAGES — FRONTIÈRE JUNIOR\n\nAcceptable si politique OK et relecture\n- Brouillon d'annonce à partir de la fiche (puis contrôle L. 5331-2 / L. 5331-3 / L. 5331-4)\n- Grille d'entretien à partir des critères du poste (puis retrait des questions illicites)\n- Synthèse que vous corrigez après vos notes manuscrites / ATS\n\nInterdit / hors mandat\n- Coller 15 CV nominatifs dans un chat public\n- Laisser un ranking écarter sans relecture humaine\n- Générer un motif de refus « trop senior / pas le bon genre »\n- Enregistrer un entretien dans un outil non validé\n- Faire croire au candidat qu'il parle à un humain si c'est un bot, contrairement à l'information due\n\nEXERCICE CHIFFRÉ (rappel, données leçon conversion)\nFunnel 120 → 24 → 12 → 5 → 3. Un outil propose d'écarter automatiquement les 80 CV « les moins matchés ». Quelle information manque avant tout test ? Quel risque L. 1132-1 / L. 1221-8 ?"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "ETI. Un éditeur promet « -70 % de temps de tri ». Le junior teste sur 20 CV déjà lus, en anonymisant. Il découvre que le modèle valorise des verbes d'action et pénalise les parcours à trous, donc des reconversions. Il ne déploie pas. Il alerte RH : pertinence douteuse, risque d'effet discriminatoire indirect, information candidats absente. Le temps de tri n'est pas un argument supérieur au cadre légal."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Prendre une hallucination (diplôme inventé) pour un fait. Laisser le manager croire que « le score 87 » est une mesure scientifique. Oublier d'informer alors qu'une technique nouvelle est utilisée. Utiliser l'IA pour rédiger un mail de refus discriminatoire plus poli."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Parsing qui lit une photo : risque apparence physique (critère protégé) et données inutiles. Tests de personnalité automatisés : pertinence L. 1221-9 et information L. 1221-8, sinon abstention. International : un outil US n'est pas « conforme » par magie au RGPD."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Répondez à l'exercice du ranking automatique des 80 CV. Puis calculez, si les 24 préqualifiés restaient choisis uniquement parmi un sous-ensemble de 40 CV tirés au hasard, ce que l'on ne saurait toujours pas (qualité, discrimination, expérience)."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Avant tout test, il manque : critères de matching lisibles et pertinents (poste), information des candidats (L. 1221-8), analyse du risque de biais (proxies d'âge, de genre, d'origine), cadre RGPD de l'outil, relecture humaine. Le risque L. 1132-1 est un écartement systémique. Tirer 40 CV au hasard n'est pas une solution métier : on ne sait toujours pas si l'on perd des profils compétents, et l'expérience candidat n'est pas traitée. Pourquoi : accélérer le tri n'est légitime que si la méthode reste pertinente, informée, non discriminatoire, et que la décision reste humaine et traçable."
            }
          ],
          "position": 5
        },
        {
          "title": "Quiz — Outils et indicateurs",
          "description": "Dix questions dont des calculs sur données fictives, sans benchmark marché.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 14,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Répondez à chaque question. En cas d'échec, relisez le module puis retentez. Les questions juridiques essentielles exigent une justification : lisez toujours l'explication après validation."
            }
          ],
          "quiz": {
            "title": "Quiz — Outils et indicateurs",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Selon la convention de ce cours, comment se distinguent time to fill (TTF) et time to hire (TTH) ?",
                "question_type": "single_choice",
                "options": [
                  "A. TTF = date d'acceptation de l'offre − date de validation du besoin ; TTH = date d'acceptation de l'offre − date d'entrée du candidat retenu.",
                  "B. TTF et TTH sont identiques et valent toujours 30 jours, norme marché.",
                  "C. TTH inclut le préavis jusqu'à J1 ; TTF s'arrête au premier CV.",
                  "D. TTF est une obligation Urssaf ; TTH est une recommandation CNIL de 2 ans."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Deux dates de début différentes, même date de fin (acceptation). Pas de norme magique 30 jours. Le préavis relève d'un délai d'arrivée si on le mesure. Urssaf / CNIL n'imposent pas ces KPI."
              },
              {
                "question": "Données fictives : besoin validé le 1er mars, candidat retenu entré le 21 mars, offre acceptée le 10 avril. TTF et TTH en jours calendaires ?",
                "question_type": "single_choice",
                "options": [
                  "A. TTF = 40 jours ; TTH = 20 jours.",
                  "B. TTF = 20 jours ; TTH = 40 jours.",
                  "C. TTF = 10 jours ; TTH = 10 jours.",
                  "D. TTF = 60 jours ; TTH = 30 jours."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Du 1er mars au 10 avril : 40 jours. Du 21 mars au 10 avril : 20 jours. Inverser TTF et TTH est l'erreur classique. 10 ou 60 ne correspondent pas aux dates."
              },
              {
                "question": "Coûts fictifs : annonces 1 500 €, agence 4 500 €, ATS 300 €, 2 embauches. Salaires recrutement exclus par politique. Cost per hire ?",
                "question_type": "single_choice",
                "options": [
                  "A. 3 150 €, en rappelant que les salaires recrutement sont exclus du numérateur.",
                  "B. 1 500 €, seul le jobboard compte.",
                  "C. 6 300 €, on ne divise jamais.",
                  "D. 45 000 €, « moyenne marché »."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "(1 500+4 500+300)/2 = 6 300/2 = 3 150 €. Il faut énoncer le périmètre. Pas de moyenne marché dans ce cours."
              },
              {
                "question": "Funnel fictif : 50 CV, 10 entretiens, 4 offres, 3 acceptations. Quelle lecture est correcte ?",
                "question_type": "single_choice",
                "options": [
                  "A. Conversion CV→entretien = 20 % ; taux d'acceptation des offres = 75 % ; les volumes restent modestes pour généraliser.",
                  "B. Conversion CV→entretien = 75 % car 3/4.",
                  "C. Le taux d'acceptation est une obligation légale de 100 %.",
                  "D. 20 % est en dessous du marché, il faut discriminer plus au tri."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "10/50 = 20 % ; 3/4 = 75 %. 3/4 n'est pas la conversion CV→entretien. Pas d'obligation légale d'acceptation, pas de marché cité, pas de discrimination comme levier."
              },
              {
                "question": "14 convocations, 2 absences sans message. Taux de no-show ?",
                "question_type": "single_choice",
                "options": [
                  "A. 2/14 ≈ 14,3 %.",
                  "B. 2/12 ≈ 16,7 %.",
                  "C. 14/2 = 7.",
                  "D. 0 %, le no-show ne se calcule pas."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Le dénominateur est le nombre de convocations envoyées (14), pas les présents (12). Le no-show se calcule, sans devenir une « norme »."
              },
              {
                "question": "Quelle affirmation sur les sources est la plus juste ?",
                "question_type": "single_choice",
                "options": [
                  "A. On saisit une source principale à l'entrée et on lit volume, conversion et qualité (ex. tenue de l'essai), sans répartition « normale » de marché.",
                  "B. Le meilleur canal est toujours LinkedIn, c'est établi.",
                  "C. Le volume de CV suffit à classer les canaux.",
                  "D. Un canal d'inclusion à faible volume doit être coupé s'il n'améliore pas le cost per hire."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Pas de palmarès universel. Le volume seul trompe. Un canal stratégique (inclusion, école) ne se juge pas au seul coût."
              },
              {
                "question": "Dans un reporting direction, que bannissez-vous ?",
                "question_type": "single_choice",
                "options": [
                  "A. Un benchmark « le marché est à 28 jours » sans source, et une colonne d'âges pour « piloter la perf ».",
                  "B. La définition écrite du TTF.",
                  "C. Une demande d'arbitrage sur deux créneaux manager.",
                  "D. Le nombre d'embauches du mois."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Pas de norme magique inventée, pas de critère protégé dans le slide. Définitions, faits et demandes d'arbitrage sont le cœur du reporting."
              },
              {
                "question": "Un outil d'IA classe les CV. Quel cadre s'applique ?",
                "question_type": "single_choice",
                "options": [
                  "A. Méthode pertinente (L. 1221-9), information préalable du candidat (L. 1221-8), non-discrimination (L. 1132-1), RGPD, décision humaine.",
                  "B. Si le score est élevé, L. 1132-1 ne s'applique plus.",
                  "C. L'IA remplace l'information du candidat car c'est un secret d'algorithme.",
                  "D. Coller les CV dans un chat public est recommandé pour la transparence."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "L'outil est une méthode d'aide au recrutement : les articles cités s'appliquent. Le secret d'algorithme ne barre pas L. 1221-8. Un chat public n'est pas une mesure de sécurité RGPD."
              },
              {
                "question": "3 embauches, 1 rupture d'essai à 90 jours, 2 encore en poste. Quelle phrase de reporting est acceptable ?",
                "question_type": "single_choice",
                "options": [
                  "A. « Sur 3 embauches du trimestre, 1 essai rompu, 2 tenues à 90 jours ; volume faible, on relie au canal et à l'onboarding, sans norme externe. »",
                  "B. « Notre quality of hire est de 67 %, au-dessus du marché européen. »",
                  "C. « 33 % d'échec, il faut arrêter d'embaucher des profils en reconversion. »",
                  "D. « 100 % de réussite, on ignore les ruptures d'essai. »"
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "On décrit les faits internes, on souligne le petit volume, on n'invente pas de marché, on ne cible pas un public au sens d'un stéréotype, on n'efface pas les ruptures."
              },
              {
                "question": "Pourquoi un ATS mal renseigné rend-il les KPI inutilisables ?",
                "question_type": "single_choice",
                "options": [
                  "A. Sans date d'entrée, sans statut unique et sans source, TTF, TTH, conversion et canaux ne mesurent plus le réel.",
                  "B. Parce que l'ATS est obligatoire pour la DPAE.",
                  "C. Parce que le RGPD interdit les indicateurs.",
                  "D. Parce que le time to fill légal est de 8 jours, comme la DPAE."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Les KPI naissent des dates et statuts. L'ATS n'est pas la DPAE. Le RGPD n'interdit pas tout indicateur. Les 8 jours concernent la fenêtre DPAE (au plus tôt), pas un TTF légal."
              }
            ]
          },
          "position": 6
        }
      ]
    },
    {
      "position": 18,
      "title": "Recrutements spécifiques et situations complexes",
      "description": "Adapter le process aux contrats, aux profils, aux organisations et aux contraintes (inclusion, international, urgence, confidentialité) sans sortir du mandat junior.",
      "lessons": [
        {
          "title": "CDI, CDD et intérim : le contrat change le process",
          "description": "Adapter sourcing, message, délais et acteurs selon la nature du contrat, sans qualifier seul un motif de CDD.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez quelles spécificités opérationnelles distinguent un recrutement en CDI, en CDD et en intérim.\n\nVous identifiez les risques de chaque cadre (promesse, motif, employeur, délais) et les adaptations de process.\n\nVous savez ce que le junior ne tranche pas (motif de CDD, qualification d'employeur, durée d'essai)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le type de contrat n'est pas un détail de pied de page. Il change le public visé, le discours d'annonce, les critères de disponibilité, les interlocuteurs, et parfois l'identité de l'employeur. Recruter « comme pour un CDI » un besoin de trois semaines, ou vendre un CDD comme un CDI « on verra », produit des désistements, des contentieux et une expérience candidat dégradée. L'article L. 5331-3 interdit les allégations fausses ou susceptibles d'induire en erreur sur l'existence, la nature, la description de l'emploi, la rémunération et avantages, le lieu de travail. Annoncer un CDI alors que le besoin validé est un CDD n'est pas une technique de volume : c'est un risque d'offre trompeuse.\n\nLe CDI est le cadre de référence de beaucoup d'entreprises. Spécificités : process souvent plus long, enjeu d'essai, vivier, marque employeur, cohérence offre / contrat. Risques : surpromettre la stabilité du poste (un CDI n'interdit pas une réorganisation), négliger le préavis du candidat, traiter le closing comme un détail. Adaptations : cadrage de rémunération et de contenu plus soigneux, préboarding, REX qualité à 90 jours. Le junior n'invente pas que « tout le monde est en CDI dans le secteur ».\n\nLe CDD est un contrat à durée déterminée. Spécificités : date de fin ou durée, motif, parfois renouvellement selon les textes — autant d'éléments que RH qualifie. Risques : le junior qui choisit un motif « parce que ça passe » ; le manager qui veut un CDD pour « tester » hors cadre ; le candidat qui croit à une transformation automatique en CDI. Adaptations : le motif et la durée sont écrits dans l'annonce de façon honnête ; le process peut être plus compact si la date de début est proche ; on ne promet pas la titularisation. Le junior transmet à RH ; il ne rédige pas le motif juridique.\n\nL'intérim met en relation une entreprise de travail temporaire, un salarié, une entreprise utilisatrice. Spécificités : l'employeur de l'intérimaire, dans ce régime, est l'agence ; le junior côté agence source la disponibilité et la compétence pour une mission ; le junior côté entreprise cliente exprime un besoin de mission, pas une DPAE d'embauche classique à la place de l'agence. Risques : faire passer une mission pour un CDI client ; laisser un intérimaire commencer sans le process agence ; mélanger les pipelines. Adaptations : discours clair sur la mission (dates, horaires, lieu, compétences), réactivité, respect du process de l'agence. Pas de benchmark de taux de conversion « marché de l'intérim » inventé.\n\nDans les trois cas, L. 1132-1, L. 1221-6, L. 1221-8 et L. 1221-9 s'appliquent. Un CDD ou une mission ne « justifient » pas une question discriminatoire, ni une méthode d'évaluation non pertinente."
            },
            {
              "block_type": "callout",
              "content": "Obligation : honnêteté de l'offre (L. 5331-3), non-discrimination, méthodes pertinentes. Le motif d'un CDD et la DPAE sont des actes employeur / RH, pas un bricolage junior. Politique interne : qui recrute l'intérim (agence vs RH). Bonne pratique : nommer le contrat dès l'annonce."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Dès le cadrage : type de contrat, dates, lieu, rémunération, qui est l'employeur. Faire qualifier le CDD par RH avant diffusion. Choisir les canaux selon l'urgence et la durée (sans magie de marché). Adapter le nombre d'entretiens à l'enjeu réel : un CDD court n'exige pas cinq tours ; un CDI cadre n'est pas un « oui » sur CV. Dire le contrat au téléphone dès la préqualification."
            },
            {
              "block_type": "code",
              "content": "GRILLE D'ADAPTATION — CONTRAT\n\n                 CDI                      CDD                         Intérim (agence)\nAnnonce          nature CDI               durée / terme + nature      mission, dates, lieu, horaires\nMotif juridique  n/a                      RH qualifie, junior non     contrat de mission agence\nDPAE             employeur client         employeur client            process agence (employeur ETT)\nEntretiens       selon enjeu poste        souvent compact             réactif, compétences + dispo\nPromesse         pas de « job à vie »     pas de CDI automatique      pas de CDI client implicite\nRisque junior    overselling              faux motif / fausse durée   confusion employeur"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Industrie. Un chef d'atelier veut « un CDI, ça motive plus », alors que le budget est un remplacement de 4 mois. Le junior refuse de publier un CDI. Il fait qualifier un CDD par RH, publie la durée, source des profils ouverts à un CDD, et note que certains refus d'offre viendront de la durée : c'est un fait de besoin, pas un échec de charisme."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Écrire « CDI (CDD au début) ». Recruter un intérimaire comme un CDI interne sans l'agence. Oublier de dire les 3×8 dès la préqual d'une mission. Utiliser un modèle de refus CDI pour une mission de 48 h (ton disproportionné, mais la clôture reste due)."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "CDD puis espoir de CDI : on peut dire qu'une suite est possible si c'est vrai et non garanti ; on ne l'écrit pas comme une certitude. Multi-missions intérim : statut « disponible » ≠ embauche. Temps partiel : c'est une nature de temps de travail, à dire dès l'offre (L. 5331-3)."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Rédigez 4 lignes d'annonce (contrat, dates, lieu, horaires) pour : a) CDI jours ; b) CDD 5 mois remplacement ; c) mission intérim 3 semaines équipe nuit. Puis indiquez l'erreur L. 5331-3 si vous publiez a) pour le besoin b)."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "a) CDI, lieu, horaires de jour. b) CDD 5 mois, remplacement, dates, lieu. c) mission, 3 semaines, nuit, employeur agence apparent. Publier a) pour b) induit en erreur sur la nature de l'emploi. Pourquoi : le contrat est un élément du besoin, pas un levier marketing."
            }
          ],
          "position": 0
        },
        {
          "title": "Alternance et stage : former n'est pas « recruter moins cher »",
          "description": "Cadrer un besoin d'alternant ou de stagiaire : pédagogie, tuteur, durée, discours, limites du junior.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez en quoi un recrutement d'alternant ou de stagiaire n'est pas un CDI junior déguisé.\n\nVous identifiez tuteur, rythme scolaire, convention, et risques d'un discours trompeur.\n\nVous savez renvoyer à RH les qualifications de contrat (apprentissage, professionnalisation, convention de stage)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Alternance et stage visent d'abord un parcours de formation. L'entreprise accueille pour faire apprendre, avec un tuteur ou maître d'apprentissage, un rythme (école / entreprise), des objectifs pédagogiques. Recruter comme si l'on cherchait un « petit CDI payé moins » produit des ruptures, des écoles mécontentes, et un décalage d'annonce (L. 5331-3 : nature de l'emploi).\n\nL'alternance (apprentissage ou contrat de professionnalisation — la qualification exacte est RH) : spécificités = calendrier scolaire, durée de formation, tutorat réel, grilles de rémunération qui ne se « négocient pas au feeling » par le junior. Risques : absence de tuteur, tâches sans rapport avec le diplôme, publication trop tardive par rapport aux dates d'école, questions d'âge ou d'origine déguisées en « fit école ». Adaptations : associer le tuteur aux entretiens, dire le rythme, sourcer via écoles et CFA, évaluer le potentiel d'apprentissage et les prérequis, pas dix ans d'expérience. Le junior ne décide pas seul du type de contrat ni du niveau de prise en charge.\n\nLe stage : spécificités = convention, stagiaire non salarié au sens du contrat de travail classique, durée et gratification selon les règles applicables — que RH / l'école portent. Risques : stage qui est un emploi déguisé ; recrutement sans convention ; entretien identique à un cadre dirigeant ; promesse d'embauche orale imprudente. Adaptations : process court, critères de formation, présence d'un tuteur, discours honnête sur les missions et sur l'absence de garantie d'embauche. Une promesse unilatérale n'est pas obligatoire ; si un écrit d'engagement circule, RH (F39588).\n\nDans les deux cas, L. 1132-1 s'applique : on n'écarte pas un candidat d'alternance pour un critère protégé. L. 1221-6 aussi : pas d'enquête familiale « pour voir s'il sera assidu ». Les méthodes (tests, mises en situation) restent pertinentes (L. 1221-9) et informées (L. 1221-8)."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Cadrage : diplôme visé, rythme, tuteur nommé, missions d'apprentissage, dates. Canaux : écoles, CFA, jobboards étudiants, interne. Entretien : motivation pour le métier, bases, capacité à apprendre, pas un oral de senior. Décision : tuteur + manager + RH. Préparer l'accueil (poste, binôme, planning école)."
            },
            {
              "block_type": "code",
              "content": "CHECKLIST ALTERNANCE / STAGE — AVANT PUBLICATION\n\n[ ] Tuteur / maître d'apprentissage identifié et d'accord\n[ ] Missions alignées au référentiel (pas « faire le café + Excel inconnu »)\n[ ] Rythme et dates scolaires connus\n[ ] Type de contrat / convention : qualification RH, pas junior\n[ ] Rémunération / gratification : barème RH, pas bricolage\n[ ] Annonce : nature exacte (alternance / stage), durée, lieu, rythme\n[ ] Process : 1 à 2 entretiens, tuteur présent au moins une fois\n[ ] Pas de promesse d'embauche automatique"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Cabinet. Un manager veut un stagiaire « qui gère déjà des missions clients seul, 5 jours / 5, 6 mois, on verra la convention ». Le junior refuse de publier. Sans tuteur ni convention, ce n'est pas un stage. Il oriente soit vers un vrai stage cadré, soit vers un besoin RH d'un autre contrat, dûment qualifié."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Exiger 3 ans d'expérience pour une licence en alternance. Oublier de prévenir l'école. Faire passer 4 tours. Promettre « CDI à la clé » pour obtenir un oui. Demander l'âge pour « voir si le contrat d'apprentissage passe » au lieu de renvoyer à RH."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Mineur : circuit RH, autorisations, travaux réglementés — pas d'improvisation. Handicap : aménagements et partenaires, même cadre d'inclusion. Volume école : session collective + entretiens individuels courts, refus groupés corrects pour les non-reçus, individuels pour les reçus."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Un manager vous donne cette fiche : « Alternant commercial, autonome sur un portefeuille, objectif comme un sédentaire, tuteur à désigner plus tard. » Listez 5 questions de recadrage et 2 éléments que vous n'écrivez pas dans l'annonce tant qu'ils ne sont pas vrais."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Questions : tuteur nommé ? rythme ? missions d'apprentissage vs quota ? outils formés ? dates école ? On n'écrit pas « autonomie totale sur portefeuille » ni « CDI garanti ». Pourquoi : l'alternance est un contrat de formation ; l'annonce doit coller à la nature réelle (L. 5331-3)."
            }
          ],
          "position": 1
        },
        {
          "title": "Cadres, profils pénuriques et expérimentés",
          "description": "Recruter lorsque le levier n'est plus le volume de CV : rareté, exigence, délais, discrétion, offre.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez adapter sourcing, délais, niveau d'interlocuteur et closing lorsque le profil est cadre, rare ou très expérimenté.\n\nVous identifiez les risques (process trop junior, offre tardive, questions hors sujet, confidentialité).\n\nVous savez jusqu'où vous allez seul et quand vous embarquez un senior recrutement ou le manager."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un cadre n'est pas « un employé avec un meilleur titre ». Spécificités souvent observées en interne : process à plusieurs interlocuteurs, enjeux de rémunération et de statut, sensibilité à l'image du process, préavis plus longs, parfois clause et mobilité. Risques : faire passer un cadre par le même tunnel qu'un volume de débutants (attente, tests non pertinents, junior seul sur l'entretien d'évaluation stratégique) ; poser des questions de vie privée « pour voir le leadership » ; laisser une offre sans décideur. Adaptations : cadrage politique du poste (mandat, équipe, rattachement), sourcing direct, process calendrier compact une fois le candidat engagé, interlocuteurs de niveau adapté, feedback rapide. Pas de TTF « marché des cadres » inventé.\n\nUn profil pénurique est un profil dont le vivier local ou national est étroit au regard du besoin (compétence + bassin + conditions). La pénurie n'est pas un sentiment : elle se constate par un sourcing déjà fait, des refus d'approche, une absence de CV utilisables. Risques : baisser les critères en silence sans réécrire la fiche ; discriminer par facilité (« on veut un jeune, ça coûte moins ») ; multiplier les canaux sans revoir le besoin (télétravail, salaire, tutorat). Adaptations : revoir le besoin avec le manager (must have vs formation possible), sourcer, soigner l'expérience, décider vite, parfois recourir à un cabinet — décision budgétaire, pas un aveu. Toujours L. 1132-1.\n\nUn profil expérimenté peut n'être ni cadre ni pénurique : il a un historique dense. Spécificités : analyse de parcours, risques de surqualification réelle ou fantasmée, motivation à « redescendre » ou à transmettre. Risques : écarter pour l'âge (critère protégé) sous prétexte d'expérience ; tests infantilisants ; offre indigne du cadrage. Adaptations : évaluer l'adéquation au poste actuel, pas un CV de 25 ans ligne à ligne ; demander la motivation pour CE poste ; ne pas diagnostiquer une « trop grande seniorité » qui n'est qu'un âge.\n\nDans les trois cas, l'information sur les méthodes (L. 1221-8) et leur pertinence (L. 1221-9) restent dues. Un assessment n'est pas un droit du manager à n'importe quel outil."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Cadrage écrit : critères rares vs formables, fourchette, interlocuteurs, confidentialité. Mapping de sourcing. Approche personnalisée. Entretien 1 parfois à deux (junior + senior ou manager). Offre préparée avant le dernier tour. Points de process plus fréquents."
            },
            {
              "block_type": "code",
              "content": "ADAPTATIONS — CADRE / PÉNURIQUE / EXPÉRIMENTÉ\n\nSourcing     : direct + réseau + éventuellement cabinet, pas seulement une annonce générique\nMessage      : poste, enjeux, rattachement, conditions déjà cadrées\nProcess      : peu d'étapes inutiles, dates tenues, décideur identifié\nÉvaluation   : faits de mandat, pas « leadership » vague, pas l'âge\nOffre        : alignée dès le cadrage, délai de validité, interlocuteur légitime\nJunior       : prépare, source, coordonne ; n'improvise pas une fourchette ni un titre"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "ETI. Recherche d'un responsable maintenance, rareté locale. Le manager veut « moins de 40 ans, plus malléable ». Le junior recadre : l'âge est protégé. On parle d'outils, d'astreintes, de management d'équipe. Le vivier s'élargit à des profils expérimentés. Deux approches ciblées valent mieux que 80 CV hors sujet."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Ghosting d'un cadre après trois heures d'entretiens. Test de logique non pertinent. Dire « on n'a pas de budget cabinet » puis exiger un délai de volume. Écarter un expérimenté « trop cher » sans avoir parlé rémunération."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Cadre dirigeant : souvent confidentiel, board, parfois cabinet ; le junior assiste, il ne pilote pas seul. Pénurie + petit budget : revoir le besoin, pas « mentir sur le CDI ». Expérimenté en reconversion vers moins de management : évaluer le poste cible, pas le prestige passé."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Un manager dit : « Profil pénurique, process en 6 entretiens, fourchette fermée trop basse, pas de télétravail. » Proposez un ordre de discussion (besoin, process, offre) et ce que vous tracez."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "On discute d'abord le besoin (must have formable), puis l'offre (fourchette, conditions), puis un process compact. Tracer l'écart. Pourquoi : six entretiens + offre non tenable est un process qui sélectionne ceux qui n'ont pas d'options, pas « les meilleurs »."
            }
          ],
          "position": 2
        },
        {
          "title": "Débutants et reconversion : évaluer le potentiel sans baisser le droit",
          "description": "Recruter un premier emploi ou un changement de métier avec des critères d'apprentissage, pas des stéréotypes.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez construire une grille pour un débutant (prérequis, potentiel, conditions d'apprentissage) distincte d'une grille d'expérimenté.\n\nVous savez traiter une reconversion : transférable vs à former, sans mépris ni angélisme.\n\nVous évitez les critères illicites souvent collés à ces publics (âge, origine, parentalité)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un débutant n'a pas à « déjà avoir fait le poste ». Spécificités : peu de preuves métier, importance des stages / projets / attitudes professionnelles observables, besoin d'un tuteur, rémunération et titre honnêtes. Risques : exiger trois ans d'expérience pour un poste junior (annonce incohérente, L. 5331-3 si le titre dit junior) ; multiplier les tours pour « se rassurer » ; écarter pour l'âge ou l'école au lieu du prérequis ; questions sur la situation de famille « pour la stabilité ». Adaptations : prérequis réellement indispensables (habilitation, mobilité, outil de base), mises en situation courtes pertinentes (L. 1221-9), présence du futur tuteur, process court, onboarding plus dense. Pas de statistique nationale sur « la génération Z ».\n\nLa reconversion est un changement de métier, parfois après un autre secteur, une interruption, un handicap, un choix. Spécificités : parcours non linéaire, compétences transférables, motivation à documenter, parfois formation en cours. Risques : lire les « trous » comme un défaut moral ; écarter pour l'âge ; exiger le même CV qu'un natif du métier ; tests non pertinents. Adaptations : identifier ce qui se transfère (relation client, rigueur, outillage) et ce qui se forme (logiciel, normes) ; donner une mise en situation du poste cible ; ne pas demander l'état de santé pour « expliquer le trou » (L. 1221-6, L. 1132-1).\n\nDans les deux cas, le junior reste un évaluateur de l'adéquation au poste, pas un coach de vie. Le feedback, si politique ok, porte sur des faits professionnels. Le refus reste non discriminatoire, sans obligation générale de motiver."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Réécrire la fiche : 5 prérequis max, dont ceux vraiment bloquants. Choisir une mise en situation de 20 minutes. Former le manager à ne pas noter « le feeling d'immaturité ». Prévoir le tutorat avant de publier. Sourcer écoles, reconversion, internes."
            },
            {
              "block_type": "code",
              "content": "GRILLE DÉBUTANT / RECONVERSION (exemple interne)\n\nPrérequis bloquants (oui/non) : [habilitation / mobilité / horaires / outil de base]\nPreuves d'apprentissage : stage, projet, formation, bénévolat professionnel pertinent\nMise en situation du poste : faits observés\nConditions d'intégration : tuteur, 30-60-90 internes (plan, pas un KPI marché)\nInterdit de scorer : âge, origine, photo, « trop de métiers », grossesse, santé\nDécision : prérequis + potentiel observable + capacité à accueillir"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Services. Poste de chargé de support N1. Un candidat en reconversion après 12 ans en logistique. Le manager dit « trop vieux, il ne restera pas ». Le junior ramène l'entretien sur les outils, les horaires, une mise en situation ticket. L'âge sort de la grille. Si l'écart est l'outil, on le nomme ; si l'accueil n'existe pas, on ne recrute pas un débutant pour l'abandonner."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Annonce « junior, 5 ans d'expérience ». Entretien de 90 minutes sans exercice. Promettre une montée rapide non budgétée. Demander pourquoi une reconversion « si tard »."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Reconversion via un dispositif public : le junior ne promet pas un financement ; il oriente RH. Débutant interne (stage puis embauche) : process transparent vis-à-vis des externes si un poste ouvre vraiment. Volume débutants : session collective + grille unique."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Transformez ces critères en version licite et utile, ou biffez : 1) moins de 25 ans ; 2) première expérience welcome ; 3) dynamisme ; 4) disponible soirs ; 5) français langue maternelle."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1) Biffer (âge). 2) Garder si le poste est réellement junior. 3) Remplacer par des comportements observés (ponctualité, clarté orale). 4) Garder si le poste l'exige, dit dans l'annonce. 5) Biffer / reformuler : capacité à travailler en français si nécessaire au poste, sans « langue maternelle » (critère lié à L. 1132-1 sur la langue autre que le français). Pourquoi : le potentiel ne se mesure pas par un stéréotype."
            }
          ],
          "position": 3
        },
        {
          "title": "Volume, multisite et distance : industrialiser sans déshumaniser",
          "description": "Tenir un flux, plusieurs sites ou un recrutement à distance, avec les mêmes obligations de droit et de clôture.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez organiser un recrutement volume (étapes, modèles, tris) sans ghosting de masse.\n\nVous savez coordonner un besoin multisite (qui décide, quel lieu, quelle mobilité).\n\nVous savez conduire un process à distance sans perdre la pertinence des méthodes ni la sécurité des données."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le volume n'autorise pas le hors-droit. Spécificités : beaucoup de candidatures, besoin de standard (grille, créneaux, mails), tentation de l'automatisation. Risques : silence de masse, tri sur photo ou prénom, chatbot illicite, annonce trompeuse pour « faire rentrer du flux », tests non pertinents. Adaptations : critères essentiels dès l'annonce, tri à deux relectures sur un échantillon, e-mails de clôture, distinction de traitement entre non-reçus et personnes interviewées, IA seulement dans le cadre déjà vu (information, pertinence, relecture). Pas de « taux de sélection marché ».\n\nLe multisite : plusieurs lieux, parfois plusieurs managers, un même intitulé. Spécificités : mobilité, astreintes différentes, conventions ou usages de site, qui embauche. Risques : publier un lieu et en affecter un autre (L. 5331-3) ; faire juger un candidat par un site puis l'envoyer ailleurs sans son accord ; DPAE / contrat sur le mauvais établissement — RH. Adaptations : une réquisition par site ou un besoin clairement multi-lieux dit au candidat ; calendrier par décideur ; mobilité traitée comme critère de poste, pas comme origine ou lieu de résidence au sens d'un stéréotype (le lieu de résidence est un critère protégé : on évalue la capacité à travailler sur le site, pas « les gens de banlieue »).\n\nLa distance (visio, télétravail, équipes distribuées) : spécificités : entretiens visio, tests à distance, onboarding distant. Risques : inégalité d'équipement prise pour de l'incompétence ; enregistrement d'entretien non validé ; questions sur le domicile trop intrusives ; promesse de télétravail non contractuelle. Adaptations : mêmes grilles qu'en présentiel, test de visio en amont, pas d'obligation de caméra si la politique et le poste ne l'exigent pas de façon pertinente, matériel d'onboarding anticipé, contrat aligné sur le lieu de travail réel. L. 1221-8 si méthodes spécifiques (tests en ligne)."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Volume : vague de tri, calibrage manager sur 8 CV, lots de refus. Multisite : matrice site × décideur × lieu publié. Distance : kit candidat (lien, durée, outils), backup téléphone, pas d'enregistrement sauvage."
            },
            {
              "block_type": "code",
              "content": "VOLUME — STANDARD MINIMUM\n[ ] Critères essentiels dans l'annonce\n[ ] Grille de tri identique\n[ ] Créneaux d'entretien groupés\n[ ] Clôture des non-retenus (modèle A du module refus)\n[ ] Interviewés : message individuel\n\nMULTISITE — QUESTIONS AU MANAGER\nSite d'affectation réel ? Mobilité inter-sites ? Qui signe l'entretien final ?\nAstreintes / horaires du site ? Même rémunération ?\n\nDISTANCE — CHECK VISIO\nLien test, durée, interlocuteurs, méthode (L. 1221-8), pas d'enregistrement hors politique,\nconsigne : évaluer le poste, pas le décor du logement."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Centre de contacts, 3 villes. Le junior publie « Bordeaux » puis envoie les gens à Limoges. Désistements et accusation de publicité trompeuse. Correction : trois annonces ou une annonce multi-sites explicite, affectation dite en préqual."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Session visio de 12 candidats sans grille. Juger le Wi-Fi. Oublier le site dans la DPAE transmise à RH. Fermer une vague sans e-mail."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Hybride : dire le nombre de jours sur site s'il est déjà une règle, sans inventer une obligation légale universelle de mention. International distant : voir leçon suivante, alerte RH. Volume + handicap : l'industrialisation ne doit pas éliminer les demandes d'aménagement d'entretien."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "80 candidatures, 2 sites, entretiens visio. Proposez le planning d'une semaine (tri, calibrage, clôture, visio) et 3 mentions à faire figurer dans l'annonce."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "J1-2 tri + calibrage 8 CV. J3 lots de refus. J4-5 visio selon site. Annonce : lieux, contrat, visio comme modalité d'entretien si c'est le cas. Pourquoi : le volume se tient par le calendrier et l'honnêteté du lieu, pas par le silence."
            }
          ],
          "position": 4
        },
        {
          "title": "International et mobilité interne : deux expertises, une limite junior",
          "description": "Alerter sur un titre de séjour / visa, ne pas improviser le droit des étrangers, et traiter un interne comme un candidat protégé par le même droit.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez que le droit des étrangers et des titres autorisant le travail n'est pas un domaine d'improvisation du recruteur junior : vous collectez selon la liste RH, vous alertez, vous n'inventez pas une procédure de visa.\n\nVous savez conduire une mobilité interne : confidentialité vis-à-vis du manager actuel, équité vis-à-vis des externes, refus soigné.\n\nVous savez ce que vous dites, et ne dites pas, à un candidat actuellement à l'étranger."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un recrutement « international » recouvre des faits très différents : candidat à l'étranger qui travaillerait en France ; salarié déjà en France avec un titre ; poste basé hors de France ; équipe distante multi-pays. Ces cas n'ont pas les mêmes règles. Le junior n'est pas conseiller en droit des étrangers. Il ne promet pas « on s'occupe du visa », il ne refuse pas « parce que le nom sonne étranger », il ne demande pas trop tôt des pièces disproportionnées à tous « au cas où ». L'interdiction de discriminer (origine, appartenance vraie ou supposée à une nation, etc., L. 1132-1) s'applique. La capacité à occuper l'emploi peut inclure, lorsque c'est le cas, le droit de travailler en France : c'est alors un sujet de titre, traité par le circuit RH, pas un jugement d'origine.\n\nSpécificités : délais administratifs souvent hors main du junior, documents sensibles, coordination RH / parfois expert. Risques : discrimination à l'entrée ; conseil juridique erroné ; faire commencer avant d'avoir le cadre ; stocker un titre dans un chat. Adaptations : dès que le besoin implique un travail en France, RH indique à quel moment du process la vérification du titre se fait, de façon identique pour les personnes concernées par cette vérification, sans harcèlement des autres. Le junior alerte : « candidat actuellement hors de France / titre à vérifier — RH ». Il n'interprète pas un récépissé. Il n'antidate pas une DPAE. Il n'invente pas un taux ou un délai d'administration.\n\nLa mobilité interne : spécificités = connaissance du contexte, enjeux politiques, peur du manager actuel, parfois priorité interne de politique d'entreprise (politique interne, pas une « loi du junior »). Risques : prévenir le manager actuel contre la volonté du salarié et hors règle RH ; faire passer l'interne « pour la forme » alors que l'externe est déjà choisi (déloyauté, méthodes peu pertinentes) ; refuser un interne par mail standard externe ; utiliser la mobilité pour écarter un externe sur un critère protégé. Adaptations : process publié en interne, confidentialité selon politique, même grille professionnelle, traitement de refus interne coordonné RH / manager actuel, information des externes si pourvoi interne (module refus). L. 1132-1 s'applique aussi aux internes.\n\nOffre et promesse : un écrit d'embauche transfrontalier se fait relire. F39588 : le junior ne qualifie pas seul offre vs promesse."
            },
            {
              "block_type": "callout",
              "content": "Droit des étrangers : alerter RH, ne pas improviser. Non-discrimination : l'origine n'est pas un critère de tri. Mobilité interne : politique d'entreprise + même droit du recrutement. Pas de délai de visa inventé dans ce cours."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "International : flag ATS « alerte RH titre / lieu de travail », pas de conseil, pas de promesse, pièces via coffre RH. Interne : accusé confidentiel, calendrier, qui est informé à quelle étape, grille identique, feedback interne plus soigné."
            },
            {
              "block_type": "code",
              "content": "SCRIPT — CANDIDAT À L'ÉTRANGER QUI DEMANDE « VOUS FAITES LE VISA ? »\n\n« Je ne suis pas en mesure de vous conseiller sur un titre ou un visa. Notre service RH traite les conditions d'emploi en France lorsque le poste est basé en France.\nJe transmets votre situation (lieu actuel, date de disponibilité) à RH, qui vous indiquera les pièces éventuelles au bon moment.\nJe ne peux ni garantir une obtention, ni écarter un profil sur l'origine. Le poste exige de travailler à [lieu]. »\n\nSCRIPT — CANDIDAT INTERNE, CONFIDENTIALITÉ\n\n« Votre candidature interne est enregistrée. Selon notre règle, votre manager actuel [est / n'est pas] informé à ce stade.\nLe process suit la même grille que pour ce poste. Je vous donne une date de prochaine étape. »"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Startup. Un founder dit au junior : « Prends-le, on lui fera un titre, j'ai un ami à la préfecture. » Le junior n'embauche pas sur cette base. Il saisit RH, ne promet rien au candidat, ne publie pas de date de J1 fantaisiste. Si RH dit que le cadre n'est pas tenable, on ne fait pas commencer."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Demander la nationalité en première ligne du formulaire « pour info ». Prévenir le N+1 d'un interne par convivialité. Dire aux externes que l'interne est « prioritaire » si ce n'est pas la règle, ou l'inverse. Googler une procédure de visa et la coller dans un mail."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Détachement / expatriation : expert RH, pas un mail junior. Interne en conflit avec son manager : RH. Poste en France, entretien depuis l'étranger : possible, le lieu de travail reste le sujet RH. UE / hors UE : vous ne résumez pas le droit ; vous orientez."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Deux cas : 1) CV d'un profil compétent, adresse à l'étranger, poste en France. 2) Salarié interne qui demande que son manager n'en sache rien. Vos 5 premières actions pour chacun."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1) Évaluer le poste, flag RH titre/lieu, pas de promesse de visa, pas d'écartement pour origine, pas de J1 inventé. 2) Lire la politique confidentialité interne, enregistrer, ne pas appeler le manager « pour avis informel », suivre la règle, alerter RH si conflit. Pourquoi : deux expertises (étrangers, relations sociales internes) hors improvisation."
            }
          ],
          "position": 5
        },
        {
          "title": "Inclusion et handicap : appliquer la politique, respecter le droit",
          "description": "Recruter sans discriminer, aménager un process, et parler de l'obligation d'emploi sans inventer un taux.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez que le handicap est un critère protégé et que des aménagements d'entretien / de poste relèvent d'un circuit RH, pas d'un bricolage compassionnel.\n\nVous savez qu'une obligation d'emploi des travailleurs handicapés existe pour certains employeurs : vous appliquez la politique interne et, si un taux est cité, vous le rattachez à la vérification du seuil légal en vigueur, vous ne l'inventez pas.\n\nVous savez sourcer et évaluer sans transformer le handicap en unique identité du candidat."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "L'inclusion dans le recrutement, au quotidien du junior, c'est d'abord appliquer le droit commun : ne pas écarter une personne en raison d'un critère protégé (L. 1132-1, qui cite notamment le handicap, l'état de santé, la perte d'autonomie), ne demander que des informations en lien direct et nécessaire avec l'emploi (L. 1221-6), utiliser des méthodes pertinentes (L. 1221-9), informer des méthodes (L. 1221-8). Un « fit culturel » qui signifie « on ne veut pas de différence visible » n'est pas un critère professionnel.\n\nLe handicap peut être mentionné par le candidat, ou faire l'objet d'une demande d'aménagement du process (temps, visio, accessibilité des locaux, support). Cette mention n'autorise pas une enquête médicale par le recruteur. L'aptitude relève, le moment venu, de la santé au travail, pas d'un e-mail « racontez votre handicap ». Le junior : écoute la demande d'aménagement, transmet à RH, adapte l'entretien dans des limites raisonnables déjà validées, évalue le poste. Il ne « diagnostique » pas, il ne promet pas un aménagement de poste qu'il n'a pas le pouvoir d'accorder, il n'écarte pas « au cas où ce serait lourd pour l'équipe ».\n\nCertains employeurs sont soumis à une obligation d'emploi des travailleurs handicapés. C'est un cadre légal qui existe ; son seuil, son assiette, ses modalités évoluent et se vérifient dans les textes en vigueur et auprès de RH. Le junior n'invente pas un pourcentage (notamment, il n'affirme pas un taux comme s'il l'avait lu ici). Il applique la politique de l'entreprise (partenariats Cap emploi / autres, recrutement, recours à des prestataires — autant de sujets RH). S'il doit citer un taux dans un support interne, il écrit : « vérifier le seuil légal en vigueur et l'assujettissement de l'employeur ». Il ne transforme pas l'obligation en triage public des CV (« on prend celui-ci pour le taux » au mépris des compétences), ni en question illicite posée à tous.\n\nSourcing : réseaux spécialisés, jobboards, partenaires, accessibilité de l'annonce (clarté, canal). Évaluation : mêmes exigences de poste, mises en situation aménageables. Refus : motif professionnel interne, pas le handicap. Données : minimisation, pas de dossier médical dans l'ATS."
            },
            {
              "block_type": "callout",
              "content": "Obligation : non-discrimination (L. 1132-1, handicap notamment). Obligation d'emploi : existe pour certains employeurs — vérifier seuil et assujettissement en vigueur, ne pas inventer un taux. Politique interne : partenaires, aménagements, qui décide. Bonne pratique : aménagement de process sur demande, évaluation du poste."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Annonce accessible, mention d'un contact pour aménagement d'entretien si politique ok. Grille identique. Circuit RH dès qu'un aménagement de poste est en jeu. Pas de question santé. REX : a-t-on écarté pour un critère protégé ?"
            },
            {
              "block_type": "code",
              "content": "SCRIPT — DEMANDE D'AMÉNAGEMENT D'ENTRETIEN\n\n« Merci de m'avoir indiqué ce dont vous avez besoin pour passer l'entretien dans de bonnes conditions.\nJe transmets à [RH] ce qui concerne l'organisation (accès, temps, visio, support).\nL'évaluation portera sur les critères du poste de [intitulé].\nJe vous confirme les modalités au plus tard le [date]. »\n\nÀ NE PAS DIRE\n« Vous serez un bon dossier pour notre obligation d'emploi. »\n« C'est quoi exactement votre maladie ? »\n« On verra avec l'équipe si ça les dérange. »"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "PME. Un manager refuse un candidat « on n'est pas équipés, et puis on n'est pas assez gros pour l'obligation ». Le junior : 1) l'assujettissement se vérifie, on n'invente pas un seuil ; 2) même hors obligation, L. 1132-1 s'applique ; 3) l'aménagement se discute avec RH sur des faits de poste, pas un refus de principe. Le process reprend sur les compétences."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Citer « 6 % » comme un chiffre du cours. Noter « RQTH » en commentaire visible de tout manager curieux. Poser la question du handicap à tous « pour le reporting ». Baisser les exigences du poste sans le dire (ni au candidat ni au manager), puis rompre l'essai."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Handicap invisible, non mentionné : on n'enquête pas. Volume : le standard n'élimine pas une demande d'aménagement. Cadre / pénurique : l'inclusion n'est pas réservée aux postes « faciles ». International : pas de confusion entre titre de séjour et handicap."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Un candidat écrit : « Je suis RQTH, j'aurai besoin d'un logiciel de lecture et de 15 minutes de plus sur la mise en situation. » Rédigez : mail au candidat, mail à RH, ce que vous dites au manager."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Candidat : accusé, circuit aménagement process, date de confirmation, évaluation sur le poste. RH : demande concrète, pas de dossier médical. Manager : modalités d'entretien, pas le détail de santé, rappel d'évaluer les critères du poste. Pourquoi : aménager le process n'est pas « recruter pour un taux »."
            }
          ],
          "position": 6
        },
        {
          "title": "Urgent, confidentiel, petit budget, manager exigeant",
          "description": "Tenir le cadre lorsque la pression opérationnelle pousse à sauter des étapes ou à promettre l'impossible.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez prioriser un besoin urgent sans DPAE oubliée, sans offre trompeuse, sans discrimination « pour aller vite ».\n\nVous savez mener un recrutement confidentiel (canaux, intitulés, qui sait).\n\nVous savez recadrer un petit budget et un manager exigeant par des faits de process, avec escalade si le cadre légal est en jeu."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "L'urgence est un délai métier court. Spécificités : pression, tentation de réduire les vérifications, d'élargir l'annonce, de faire commencer avant les formalités. Risques : DPAE oubliée (obligation employeur, avant prise de poste / essai, au plus tôt 8 jours avant — F23107), contrat bâclé, discrimination « le premier disponible », allégations trompeuses pour attirer. Adaptations : process compact mais complet (critères, un entretien structuré, vérifications utiles), plan B parallèle, dates réelles, pas de travail avant cadre d'embauche. L'urgence n'est pas une norme de TTF magique : c'est un arbitrage interne.\n\nLe confidentiel : remplacement d'un salarié qui n'est pas informé, poste stratégique, marché sensible. Spécificités : pas d'annonce publique ou annonce floutée, NDA parfois, vivier discret, peu d'interlocuteurs. Risques : fuite, rendez-vous sur site trop visibles, LinkedIn du junior qui « chasse le directeur financier », mensonge d'intitulé (L. 5331-3 si offre publique trompeuse). Adaptations : canal fermé, intitulé honnête vis-à-vis du candidat sous accord de confidentialité, calendrier hors site si besoin, ATS à droits restreints. Le junior ne poste pas le besoin sur son profil.\n\nLe petit budget : fourchette basse, pas d'agence, peu de jobboards. Spécificités : besoin de canaux low cost (cooptation, interne, sourcing direct). Risques : mensonge sur le salaire, « CDI » pour compenser, charge de travail non dite. Adaptations : revoir le besoin (junior formable vs expert), dire la fourchette en entretien dès qu'elle est connue (bonne pratique ; indiquer le salaire dans l'annonce n'est pas présenté ici comme obligation française déjà consolidée — directive UE 2023/970 en transposition), assumer des refus d'offre. Pas de chiffre « salaire médian marché » inventé.\n\nLe manager exigeant : beaucoup d'entretiens, critères mouvants, indisponibilité, commentaires limites. Spécificités : le junior sert le besoin, pas l'ego. Risques : exécuter un critère protégé ; laisser le process durer ; promettre au candidat un oui que le manager n'a pas donné. Adaptations : cadrage écrit, grille, créneaux bloqués, reformulation des critères illicites, escalade au responsable recrutement si le manager insiste sur un critère L. 1132-1. La courtoisie n'est pas la soumission au hors-droit."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Urgent : double pipeline (n°1 + réserve), checklist DPAE/contrat dès le oui. Confidentiel : liste blanche des informés, canaux, consigne LinkedIn. Petit budget : fiche revuée, canaux, discours vrai. Manager exigeant : e-mail de cadrage, 48 h pour valider, sinon escalade."
            },
            {
              "block_type": "code",
              "content": "MAIL DE CADRAGE — MANAGER SOUS PRESSION\n\nObjet : Recadrage du besoin [poste] — validation demandée pour [date]\nBonjour [Prénom],\nPour tenir [date métier], j'ai besoin de votre validation écrite sur :\n1) critères essentiels (liste) — hors tout critère illicite\n2) fourchette et contrat honnêtes vis-à-vis de l'annonce\n3) deux créneaux d'entretien cette semaine\n4) décideur unique du dernier tour\nSans cela, je ne peux ni publier ni promettre un délai.\nSi un critère porte sur [âge / origine / santé / …], je ne pourrai pas l'appliquer ; j'en référerai à [responsable].\nMerci."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "TPE. Le dirigeant : « Recrute ce week-end, on verra les papiers, je veux quelqu'un du quartier, discret, pas cher. » Le junior : pas de DPAE sautée, pas de critère de résidence comme stéréotype (lieu de résidence protégé ; on parle du lieu de travail et des horaires), pas d'annonce menteuse, confidentialité = canaux, pas un CV collé au café du commerce."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Publier l'offre confidentielle sur trois jobboards « un peu ». Promettre une prime non budgétée. Faire six entretiens en 10 jours puis disparaître. Accepter un critère d'âge « juste cette fois »."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Urgent + international : encore plus d'alerte RH, pas moins. Confidentiel + interne : risque de rumeur, RH. Petit budget + pénurique : revoir le poste, éventuellement geler, pas mentir. Manager exigeant + handicap : aménagement ≠ « lenteur »."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Classez ces consignes en « j'exécute / je recadre / j'escalade » : 1) entretien unique cette semaine ; 2) pas d'annonce, approche directe ; 3) « pas de femme, l'équipe n'est pas prête » ; 4) commencer lundi sans DPAE ; 5) fourchette à dire dès la préqual."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1) J'exécute si la grille existe. 2) J'exécute si confidentiel cadré. 3) J'escalade (sexe, L. 1132-1). 4) Je recadre + RH (DPAE avant prise de poste). 5) J'exécute (bonne pratique de clarté). Pourquoi : la pression n'efface que ce que l'on consent à effacer ; le droit, non."
            }
          ],
          "position": 7
        },
        {
          "title": "Quiz — Recrutements spécifiques",
          "description": "Dix questions : contrats, publics, international, handicap, pression opérationnelle.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 12,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Répondez à chaque question. En cas d'échec, relisez le module puis retentez. Les questions juridiques essentielles exigent une justification : lisez toujours l'explication après validation."
            }
          ],
          "quiz": {
            "title": "Quiz — Recrutements spécifiques",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Publier un CDI alors que le besoin validé est un CDD de 4 mois, c'est surtout :",
                "question_type": "single_choice",
                "options": [
                  "A. Un risque d'allégation trompeuse sur la nature de l'emploi (L. 5331-3), pas une technique de volume acceptable.",
                  "B. Une obligation si l'on veut des candidatures.",
                  "C. Sans importance, le contrat se voit à J1.",
                  "D. Une recommandation CNIL de 2 ans."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "L. 5331-3 vise notamment la nature de l'emploi. Attendre J1 pour dire le CDD n'est pas une information loyale. Sans lien avec les durées CNIL."
              },
              {
                "question": "Le motif d'un CDD est :",
                "question_type": "single_choice",
                "options": [
                  "A. Qualifié par RH / l'employeur ; le junior ne le choisit pas « parce que ça passe ».",
                  "B. Libre, le junior coche « accroissement » par défaut.",
                  "C. Inutile dès lors que le candidat est d'accord.",
                  "D. Remplacé par la DPAE."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Le motif est un acte juridique. L'accord du candidat ne le crée pas. La DPAE ne replace pas le contrat ni son motif."
              },
              {
                "question": "Pour un stage, le recruteur junior doit surtout :",
                "question_type": "single_choice",
                "options": [
                  "A. S'assurer d'un tuteur, d'une convention (circuit RH / école) et d'un discours honnête, sans promesse d'embauche automatique.",
                  "B. Publier « CDI junior » pour attirer, puis faire signer une convention.",
                  "C. Faire passer cinq entretiens identiques à un cadre dirigeant.",
                  "D. Demander l'état de santé « pour l'assiduité »."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Le stage est un accueil pédagogique cadré. Un intitulé trompeur, un process disproportionné ou une question santé sortent du cadre."
              },
              {
                "question": "Écarter un profil expérimenté « trop vieux, pas malléable », c'est :",
                "question_type": "single_choice",
                "options": [
                  "A. Un risque de discrimination (âge, L. 1132-1) ; on évalue l'adéquation au poste, pas l'âge.",
                  "B. Un critère de pénurie reconnu.",
                  "C. Autorisé en CDI, interdit en intérim.",
                  "D. Un indicateur de quality of hire."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "L'âge est protégé, quel que soit le contrat. La pénurie ne lève pas L. 1132-1. Ce n'est pas un KPI qualité."
              },
              {
                "question": "Candidat compétent actuellement à l'étranger, poste en France. Conduite junior ?",
                "question_type": "single_choice",
                "options": [
                  "A. Évaluer le poste, alerter RH sur le titre / le lieu, ne pas improviser le droit des étrangers ni promettre un visa.",
                  "B. Expliquer la procédure préfectorale trouvée en ligne et garantir un J1.",
                  "C. Écarter immédiatement en raison de l'origine.",
                  "D. Faire commencer en visio sans en parler à RH."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Limite du mandat : alerte RH, pas de conseil visa, pas de discrimination, pas de prise de poste hors cadre."
              },
              {
                "question": "Concernant l'obligation d'emploi des travailleurs handicapés, quelle phrase est conforme à ce cours ?",
                "question_type": "single_choice",
                "options": [
                  "A. Elle existe pour certains employeurs ; le junior applique la politique interne et, s'il cite un taux, le rattache à la vérification du seuil légal en vigueur, sans l'inventer.",
                  "B. Elle impose à tout junior de demander le handicap à tous les candidats.",
                  "C. Le taux est de 6 %, chiffre unique à mémoriser, valable pour toutes les entreprises.",
                  "D. Elle autorise à écarter un candidat non handicapé, même plus compétent."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Pas de taux inventé dans le cours. Pas de question santé de masse. L'évaluation reste celle du poste ; L. 1132-1 s'applique."
              },
              {
                "question": "Une mobilité interne se traite :",
                "question_type": "single_choice",
                "options": [
                  "A. Avec la confidentialité prévue par la politique, une grille professionnelle, un refus coordonné RH, sans prévenir le manager actuel « par amitié » hors règle.",
                  "B. En prévenant toujours le N+1 dès la candidature, par loyauté.",
                  "C. En recevant l'interne pour la forme si l'externe est déjà choisi.",
                  "D. Hors L. 1132-1, car c'est « de la famille »."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Politique de confidentialité, équité de grille, droit commun de la non-discrimination. Le faire-valoir et la confidence hors règle sont des erreurs."
              },
              {
                "question": "Recrutement volume : quelle pratique reste due ?",
                "question_type": "single_choice",
                "options": [
                  "A. Une clôture des non-retenus, une grille de tri, pas de tri sur un critère protégé, méthodes pertinentes si tests.",
                  "B. Le silence de masse, car il n'y a jamais obligation de répondre.",
                  "C. Un chatbot qui pose des questions sur les enfants, pour gagner du temps.",
                  "D. Une annonce CDI pour un besoin de 3 semaines."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Le volume n'efface ni L. 1132-1, ni L. 1221-6, ni L. 5331-3, ni la bonne pratique de clôture. L'absence d'obligation générale de motiver n'équivaut pas à une stratégie de silence après un process réel."
              },
              {
                "question": "Un manager exige « pas de femme, l'équipe n'est pas prête » et un J1 lundi sans DPAE. Que faites-vous ?",
                "question_type": "single_choice",
                "options": [
                  "A. Escalade sur le critère de sexe (L. 1132-1) et recadrage calendrier : DPAE avant prise de poste / essai, par la personne habilitée.",
                  "B. Vous exécutez, l'urgence justifie tout.",
                  "C. Vous exécutez le critère de sexe mais pas la DPAE.",
                  "D. Vous exécutez la DPAE vous-même avec des identifiants trouvés dans un tiroir, et vous écartez les femmes."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Deux limites : discrimination et obligation employeur de DPAE. L'urgence n'en lève aucune. Le junior n'est pas déclarant par défaut."
              },
              {
                "question": "Petit budget + profil pénurique : première adaptation recommandée ?",
                "question_type": "single_choice",
                "options": [
                  "A. Revoir le besoin (formable vs expert) et dire vrai sur le contrat et la fourchette, plutôt que mentir sur un CDI ou un salaire.",
                  "B. Publier un salaire inventé « marché + 20 % ».",
                  "C. Exiger six entretiens pour compenser le salaire.",
                  "D. Écarter les reconversions pour « sécuriser »."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Le levier honnête est le besoin et la vérité de l'offre (L. 5331-3). Pas de benchmark inventé, pas de process punitif, pas de stéréotype sur la reconversion."
              }
            ]
          },
          "position": 8
        }
      ]
    },
    {
      "position": 19,
      "title": "Devenir opérationnel comme recruteur junior",
      "description": "Installer les compétences, le rythme des premiers mois, la relation managers, les limites et la validation hiérarchique, puis se préparer à un entretien d'embauche sur le métier.",
      "lessons": [
        {
          "title": "Compétences attendues d'un recruteur junior",
          "description": "Clarifier ce que l'on vous demandera réellement en poste : coordination, droit de base, évaluation, écrit, outils, pas un rôle de DRH.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez décrire le socle de compétences d'un premier poste (chargé de recrutement, TAS junior, assistant recrutement, consultant débutant, chargé d'intérim).\n\nVous distinguez ce que l'on attend de vous dès J1, ce qui s'apprend en 90 jours, et ce qui reste hors mandat.\n\nVous savez traduire ces compétences en preuves pour un entretien d'embauche."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un recruteur junior n'est pas un DRH miniature. On n'attend pas de vous que vous rédigiez un accord d'entreprise, que vous tranchiez un licenciement, ou que vous inventiez une politique de rémunération. On attend que vous fassiez avancer des besoins : comprendre un poste avec un manager, publier une offre honnête, sourcer, trier, préqualifier, organiser des entretiens, évaluer avec une grille, faire un compte rendu, relancer, refuser, coordonner une offre, préparer l'embauche avec les RH, tracer dans l'outil. La qualité se voit dans la fiabilité (dates tenues, statuts justes) plus que dans le jargon.\n\nLe socle se lit en cinq familles. Métier process : cadrage, sourcing, évaluation, closing, clôture, intégration de coordination. Droit de base : non-discrimination, questions autorisées, méthodes pertinentes et informées, honnêteté de l'offre, DPAE comme obligation employeur, RGPD de circulation des CV, alerte plutôt qu'improvisation (visa, motif de CDD, promesse d'embauche). Relation : managers, candidats, RH, parfois clients (cabinet / intérim). Outils : ATS, messagerie, tableur, visio ; indicateurs simples (TTF, TTH, conversion) sans norme magique. Posture : vouvoiement professionnel, confidentialité, limites, demande de validation.\n\nCe qui s'apprend vite si l'environnement est clair : les outils internes, les modèles d'e-mails, les conventions collectives du secteur au niveau « je sais qui demander », les viviers locaux. Ce qui ne s'improvise pas : un critère discriminatoire « demandé par le manager », un conseil en droit des étrangers, une rupture d'essai, une DPAE hors habilitation. La compétence junior inclut de savoir dire : « Je transmets à tel interlocuteur. »\n\nLes titres varient (Talent Acquisition, chargé de recrutement, consultant). Le fond ne change pas : vous êtes responsable d'un flux de personnes et d'un flux de décisions, dans un cadre légal français. L'attestation d'un parcours de formation n'est pas un diplôme d'État : en entretien, vous parlez de savoir-faire, pas d'un titre qui n'existe pas.\n\nUne compétence trop peu citée : l'écrit. Un compte rendu d'entretien factuel, un mail de refus relisible, une fiche de transmission RH sans écart avec l'offre, valent davantage qu'un discours sur « la chasse ». Une autre : le calendrier. Un junior qui tient les délais qu'il annonce devient vite crédible auprès des managers."
            },
            {
              "block_type": "callout",
              "content": "Compétence attendue ≠ tout faire. Compétence attendue = faire avancer le besoin dans le droit, tracer, alerter. Ce que vous ne savez pas encore se demande ; ce qui est illicite se refuse."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Faites une auto-grille : pour chaque famille (process, droit, relation, outils, écrit), une preuve déjà réalisée dans cette formation (exercice, modèle, calcul). En poste, demandez la liste des outils, des modèles, des personnes habilités (DPAE, contrats, DPO). Posez les cinq premiers besoins que l'on vous confie et le niveau de validation requis."
            },
            {
              "block_type": "code",
              "content": "SOCLE JUNIOR — CE QUE L'ON PEUT EXIGER / CE QUE L'ON NE PEUT PAS EXIGER\n\nExigible dès les premières semaines\n- Cadrer une fiche avec un manager (must have / formable)\n- Rédiger une annonce honnête, en français si le travail s'effectue en France\n- Trier avec une grille, préqualifier, planifier\n- Compte rendu factuel, sans critère L. 1132-1\n- Refus et relances selon modèles\n- Saisie ATS (dates, source, statut)\n- Alerte RH (DPAE, titre, écart contrat, contestation)\n\nNon exigible (hors rôle ou hors compétence isolée)\n- Qualifier un motif de CDD\n- Déposer une DPAE sans habilitation\n- Conseiller un visa\n- Rompre un essai seul\n- Inventer un benchmark de délai ou de salaire\n- Trancher une accusation de discrimination"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Cabinet. On promet au junior « tu gères tes missions de A à Z ». Le premier client demande un avis sur une clause de non-concurrence et un titre de séjour. Le junior prépare le process et le sourcing, oriente le partenaire juridique / RH client, et ne « gère pas de A à Z » ce qu'il n'a pas le droit d'inventer. Sa compétence, ici, est la frontière."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Se vendre comme expert compensation. Cacher une lacune juridique jusqu'à l'incident. Croire que la compétence se mesure au nombre de CV. Négliger l'écrit. Accepter un titre ronflant sans process réel."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Assistant recrutement : plus de coordination, moins de décision d'offre. Intérim : réactivité mission, même droit. Reconversion vers le recrutement : valoriser l'évaluation et l'écrit déjà pratiqués dans l'ancien métier, sans prétendre à cinq ans d'ATS."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Rédigez un paragraphe d'entretien (12 lignes) : « Quelles sont vos trois compétences principales pour un poste junior ? » Appuyez-vous sur des preuves de process, de droit, d'écrit."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Un bon paragraphe nomme : 1) un process (cadrage → clôture) avec un exemple d'étape tenue ; 2) un réflexe juridique (ne pas discriminer, alerter DPAE / RGPD) ; 3) un écrit / une fiabilité de dates. Il ne promet pas d'être juriste ni d'avoir des délais « sous la moyenne marché ». Pourquoi : l'employeur junior achète de la sûreté de process, pas une posture d'expert."
            }
          ],
          "position": 0
        },
        {
          "title": "Les premiers mois : priorités, rythme et preuves de fiabilité",
          "description": "Savoir quoi sécuriser d'abord : outils, modèles, interlocuteurs, petits besoins tenus jusqu'au bout.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez ordonner les 30, 60, 90 premiers jours sans prétendre tout maîtriser.\n\nVous savez quelles preuves un responsable recrutement attend (dossiers clos, ATS propre, managers informés).\n\nVous savez éviter la dispersion (trop de canaux, trop de postes, zéro clôture)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Les premiers mois ne sont pas un sprint de volume. Ils sont un sprint de fiabilité. Un junior qui ouvre huit postes, n'en clôture aucun, laisse 60 CV sans statut et disparaît le vendredi, perd la confiance plus vite qu'un junior qui en mène deux proprement. La priorité n°1 est de comprendre comment l'organisation décide : qui valide un besoin, qui publie, qui voit les candidats, qui fait la DPAE, qui signe le contrat, qui accueille. Sans cette carte, chaque urgence vous traverse.\n\nLes 30 premiers jours : outils (ATS, modèles, signatures), personnes (manager types, RH, paie, IT, DPO ou relais), lecture des offres en cours, reprise propre des dossiers hérités (statuts, dettes de refus). On ne « refait pas le monde » de l'annonce. On apprend le niveau d'exigence local. On assiste à des entretiens. On mène des préqualifications supervisées. On ne dépose pas de DPAE seul. On ne promet pas de délai que le manager n'a pas validé.\n\nLes 60 jours : un à trois besoins en responsabilité, avec validation des messages sensibles (refus final, offre). Reporting simple. Premiers REX. Identification des goulots (débrief manager, fourchette, confidentialité).\n\nLes 90 jours : autonomie sur un process standard, escalade claire sur les cas limites (discrimination, titre, contestation, écart offre/contrat). Qualité de l'ATS. Expérience candidat : plus de silence. Pas de KPI magique à atteindre : une médiane de TTF interne, si elle existe, se lit, elle ne se décrète pas contre le réel.\n\nLe rythme hebdomadaire type n'est pas universel, mais une structure aide : point manager, bloc sourcing / tri, bloc entretiens, bloc clôtures, bloc RH (pièces, DPAE, contrats). Les clôtures (refus, relances) se placent dans l'agenda, sinon elles n'arrivent jamais. La charge se dit : mieux vaut alerter à 8 besoins ingérables que d'accepter le 9e en silence."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Agenda type + liste des habilitations + stock de dossiers hérités à clôturer sous 10 jours. Un point hebdo avec votre responsable : faits, blocages, demandes de validation. Journal des questions juridiques posées à RH (vous capitalisez)."
            },
            {
              "block_type": "code",
              "content": "30 / 60 / 90 — PLAN JUNIOR (interne, pas une norme marché)\n\nJours 1-30\n[ ] Carte des acteurs et habilitations (DPAE, contrat, DPO)\n[ ] Maîtrise ATS : statut, source, date\n[ ] Reprise des dettes de refus\n[ ] Modèles d'e-mails de l'entreprise (pas les vôtres contre la politique)\n[ ] Préqual supervisées + 1 entretien accompagné\n\nJours 31-60\n[ ] 1 à 3 postes en responsabilité\n[ ] Offre et refus final relus\n[ ] Premier reporting 1 page\n[ ] REX d'un process clos\n\nJours 61-90\n[ ] Autonomie process standard\n[ ] Escalades maîtrisées (liste des cas)\n[ ] Qualité ATS contrôlée (pas de « peut-être »)\n[ ] Point qualité 90 jours avec un manager sur une embauche"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "PME. Un junior hérite de 40 fiches « en cours » dont 25 sont mortes. Il passe la semaine 1 à clôturer avec un modèle, à prévenir les managers, à remettre l'ATS à zéro. Semaine 2, il peut sourcer. S'il avait sourcé d'abord, les 25 relances auraient explosé le lundi suivant."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Vouloir « chasser » dès le jour 2. Refuser de poser des questions. Prendre tous les besoins. Changer les modèles sans accord. Mesurer sa valeur au nombre de messages LinkedIn."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Cabinet : les 30 jours incluent la règle client (qui contacte, qui refuse). Intérim : le rythme est quotidien ; la fiabilité = missions tenues et process agence, pas un plan 90 jours de CDI. Remplacement d'un collègue parti : documenter avant d'innover."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "On vous confie 6 postes le jour 4, dont 1 cadre confidentiel et 1 CDD pour lundi. Ordonnez et dites ce que vous renvoyez à votre responsable."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Jour 4 : carte acteurs, dettes, CDD lundi = alerte RH calendrier DPAE/contrat (peut-être intenable), confidentiel = cadre (canaux, liste blanche) avec supervision, 2 postes simples en priorité, les autres en file avec dates. Vous ne « prenez tout ». Pourquoi : la priorisation est une compétence, pas un manque d'ambition."
            }
          ],
          "position": 1
        },
        {
          "title": "Travailler avec les managers : cadrer, relancer, recadrer",
          "description": "Faire du manager un partenaire de process, pas un donneur d'ordre illicite ni un goulot silencieux.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez conduire un entretien de cadrage et en sortir un écrit (critères, process, dates, fourchette).\n\nVous savez relancer un débrief sans agresser, et recadrer un critère hors droit.\n\nVous savez ce que vous n'acceptez pas de porter à sa place (mensonge d'annonce, discrimination, J1 sans formalités)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le manager est le client interne du besoin, pas le rédacteur du Code du travail. Il connaît le travail réel, les tensions d'équipe, l'urgence. Il ne connaît pas toujours ce que l'on a le droit de demander, ni le temps d'un process, ni le coût d'un silence candidat. Votre métier est de traduire son besoin en critères professionnels, en étapes, en messages. Si vous ne faites que « chercher la perle » sans cadrer, vous porterez tous les échecs.\n\nLe cadrage produit un écrit court : mission, must have, formable, conditions (lieu, horaires, contrat, fourchette), étapes, décideur, dates de créneaux. Sans créneaux, il n'y a pas de process, seulement du sourcing pour le néant. Le manager qui « saura au feeling » n'a pas de grille : vous lui en proposez une, vous la faites valider. L. 1221-6 et L. 1132-1 s'invitent ici : un critère d'âge, de sexe, d'origine, de santé, de résidence stéréotypée, se recadre immédiatement, avec escalade si besoin.\n\nLa relance est un rythme, pas une émotion. Un débrief sous 24 à 48 heures ouvrées (règle interne possible, pas un délai légal) se pose dès le cadrage. Si le manager disparaît, vous informez le candidat d'un décalage, vous alertez votre responsable, vous ne mentez pas (« c'est super, on avance »). Le recadrage porte aussi sur le nombre d'entretiens, sur une fourchette irréaliste, sur un intitulé trompeur (L. 5331-3).\n\nLa relation se gagne par des faits : shortlist commentée, pas 15 CV « pour voir » ; disponibilités tenues ; pas de surprise d'offre. Un manager exigeant n'est pas un ennemi : c'est un process à contractualiser. Un manager qui insiste pour discriminer n'est plus dans le partenariat : c'est un sujet hiérarchique et RH."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Cadrage 30-45 min + e-mail de confirmation le jour même. Grille envoyée avant le premier CV. Créneaux posés. Débrief 15 min obligatoire. Tableau partagé : statut, date, action manager."
            },
            {
              "block_type": "code",
              "content": "E-MAIL DE CADRAGE (J0)\n\nObjet : Recrutement [poste] — critères et process validés\nBonjour [Prénom],\nSuite à notre échange, je consigne :\n- Mission : \n- Must have : \n- Formable : \n- Contrat / lieu / horaires / fourchette : \n- Étapes : préqual — entretien [vous] — [éventuel] — offre par [décideur]\n- Créneaux déjà posés : \n- Délai de débrief visé : 48 h ouvrées\nMerci de confirmer. Tout critère portant sur [âge, sexe, origine, santé, etc.] ne pourra pas être appliqué.\n\nRELANCE DÉBRIEF (J+2)\nBonjour [Prénom],\nEntretien de [Candidat] effectué le [date]. Sans votre avis aujourd'hui, je dois décaler l'information candidat (j'ai promis le [date]). Merci d'un go / no go factuel sur la grille, ou d'un créneau de 10 min."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Startup. Un CPO veut « un profil qui claque, moins de 30 ans, culture US ». Le junior reformule : anglais professionnel si le poste l'exige, expérience produit, fuseau. L'âge sort. Le CPO signe la grille. Deux semaines plus tard, le débrief tarde : le junior relance, informe le candidat d'un décalage, n'invente pas un « on t'adore »."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Envoyer 20 CV pour se montrer actif. Critiquer le manager auprès du candidat. Accepter un 5e entretien « au cas où ». Oublier de consigner un critère illicite dit à l'oral."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Manager pair du dirigeant : même cadre, escalade plus délicate, mais réelle. Multi-managers : un décideur nommé. Manager absent J1 : déjà traité en onboarding, à rappeler au cadrage."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le manager écrit : « Envoie-moi tout le monde, je saurai. Et évite les profils trop seniors. » Rédigez votre réponse (cadrage + droit)."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vous refusez le « tout le monde » : shortlist selon must have. Vous refusez l'âge déguisé (« trop seniors ») : vous parlez d'adéquation au poste, pas d'âge. Vous proposez une grille et deux créneaux. Pourquoi : sans cela, vous devenez l'exécutant d'un tri illicite et d'un chaos de process."
            }
          ],
          "position": 2
        },
        {
          "title": "Urgences et charge : prioriser sans casser le cadre",
          "description": "Arbitrer entre plusieurs besoins, dire non à un délai intenable, et garder une qualité minimale de process.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez classer les besoins (impact, date, maturité du cadrage, risque légal) et rendre l'arbitrage visible.\n\nVous savez ce qu'une urgence ne permet pas (DPAE sautée, discrimination, offre trompeuse, silence candidat).\n\nVous savez demander de l'aide avant la rupture de service."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "L'urgence est partout dans le recrutement : un départ, une commande, une saison, un client cabinet. Si tout est urgent, plus rien n'est priorisé : vous travaillez sur le dernier qui a crié. La compétence junior est de rendre la file visible. Un besoin non cadré n'est pas plus prioritaire qu'un besoin cadré dont les candidats attendent un refus : la dette de process est aussi une urgence de réputation et de charge mentale.\n\nUne méthode simple : impact métier (poste critique dit par la direction, pas par impression), date réelle (J1, mission, rentrée école), maturité (fiche validée, fourchette, créneaux), risque (déjà en offre, DPAE, contestation). On ne priorise pas un caprice. On priorise un fait. On écrit la file. On fait valider par son responsable lorsque les demandes dépassent le tenable.\n\nCe qui ne se négocie pas sous urgence : L. 1132-1, L. 1221-6, L. 5331-3, DPAE avant prise de poste / essai, incident RGPD, mensonge sur un contrat. Ce qui se compacte : nombre d'entretiens, délai de sourcing si le besoin est revu (formable vs expert), canaux. Compactage ≠ suppression de la grille.\n\nLa charge se parle en nombre de postes actifs, d'entretiens, de clôtures dues. Un junior qui cache sa saturation jusqu'à l'erreur (mauvais destinataire, oubli de refus final) coûte plus cher qu'un junior qui dit : « Pour prendre celui-ci, j'en gèle un autre, lequel ? » En cabinet, la même phrase se dit au manager d'équipe, pas au client en premier."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Tableau de charge visibile. Règle d'entrée : pas de nouveau poste sans cadrage écrit et sans sortie d'un autre si saturation. Slot quotidien « clôtures ». Escalade à S-1 si deux urgences se percutent."
            },
            {
              "block_type": "code",
              "content": "MATRICE DE PRIORITÉ — EXEMPLE\n\nScore interne (pas un KPI marché) : Impact (1-3) + Date (1-3) + Maturité (0 si non cadré, 2 si cadré) + Risque process (offre/DPAE/contestation = 3)\n\nCas : A cadre confidentiel non cadré ; B CDD J1 dans 4 jours, dossier incomplet ; C volume 40 CV sans refus ; D CDI standard cadré.\nTraitement : B (RH/DPAE, possible report J1) > C (dette clôture en lot) > D (flux) > A (cadrage d'abord, pas de chasse à l'aveugle).\n\nPHRASE D'ARBITRAGE\n« Je peux tenir B et C cette semaine. A attend un cadrage de 45 min. D avance au rythme des créneaux déjà posés. Si A passe devant, D glisse, je l'écris au manager de D. »"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Agence d'intérim. Trois exploitants veulent une personne pour 6 h le lendemain. Le junior ne promet trois fois le même profil. Il dit les disponibilités réelles, le process agence, et n'envoie pas un salarié non déclaré « on verra ». L'urgence client n'est pas une DPAE d'entreprise utilisatrice improvisée par le junior agence hors process."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Dire oui à tous les J1. Sauter les refus. Recruter sans grille « on n'a pas le temps ». Travailler le dimanche en silence puis craquer. Accuser les candidats du désordre interne."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Deux managers de même rang : l'arbitrage remonte. Urgence + confidentiel : la discrétion ajoute du temps, il faut le dire. Urgence + international : plus d'alerte RH, pas moins."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Vous avez 5 postes. Le dirigeant ajoute « un ami à recaler demain, CDI, 8 k€ hors fourchette, pas de fiche ». Que répondez-vous, et que priorisez-vous ce jour ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vous ne sautez pas la file pour un ami hors cadrage et hors fourchette : vous demandez un cadrage, vous dites l'écart de rémunération, vous n'inventez pas un process VIP illicite. Ce jour : clôtures dues + étapes déjà promises aux candidats + alerte si DPAE/J1. Pourquoi : la priorisation protège la parole déjà donnée, qui est votre crédit professionnel."
            }
          ],
          "position": 3
        },
        {
          "title": "Limites du poste et validation hiérarchique",
          "description": "Savoir ce que vous décidez, ce que vous proposez, ce que vous devez faire valider, ce que vous refusez.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous disposez d'une carte de délégation type, à adapter à l'entreprise.\n\nVous savez rédiger une demande de validation (fait, risque, option, délai).\n\nVous savez documenter un refus d'exécuter un ordre illicite."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "L'autonomie junior n'est pas l'absence de chef. C'est la clarté de ce que vous pouvez engager. Sans carte de délégation, vous hésitez sur tout ou vous signez trop. Les organisations sérieuses distinguent : actes libres (relance, préqual, planification, tri selon grille validée), actes à validation (offre, exception de fourchette, recours cabinet, annonce atypique), actes interdits (discrimination, DPAE hors rôle, conseil visa, rupture d'essai isolée, promesse d'embauche improvisée).\n\nLa validation hiérarchique n'est pas une faiblesse. C'est une protection de l'entreprise et de vous. Une offre trop haute, un écrit qui ressemble à une promesse unilatérale (F39588 : notions jurisprudentielles, pas un diagnostic junior), un motif de CDD, un incident de données, une contestation pour discrimination : vous montez le dossier, vous ne « voyez plus tard ».\n\nLa forme de la demande compte. Un « tu en penses quoi ? » dans un chat, sans pièce, la veille à 19 h, n'est pas une validation. Un e-mail : faits, pièces, options, recommandation, date de besoin de réponse. Si le responsable ne répond pas, vous ne considérez pas le silence comme un oui sur un acte à risque. Vous relancez, vous ne faites pas commencer un salarié non déclaré.\n\nRefuser d'exécuter : lorsque l'ordre heurte L. 1132-1, L. 1221-6, L. 5331-3, le calendrier DPAE, ou le RGPD, vous dites non, par écrit sobre, vous proposez une alternative licite, vous informez le n+1. Vous n'argumentez pas sur les réseaux. Vous conservez les traces. Ce n'est pas de l'insubordination théâtrale : c'est le métier."
            },
            {
              "block_type": "callout",
              "content": "Le silence du n+1 n'est pas une habilitation à déposer une DPAE, à promettre un visa, ou à écarter un candidat pour un critère protégé. La validation se constate par un écrit."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Demandez dès J1 la carte de délégation. Tenez un registre des validations d'offre. Pour tout cas limite, e-mail unique, destinataires nommés, délai."
            },
            {
              "block_type": "code",
              "content": "CARTE DE DÉLÉGATION — MODÈLE À FAIRE VALIDER EN INTERNE\n\nLibre (selon grille / modèles)\nPréqual, planification, tri, relances, refus précoces modèles, saisie ATS, reporting factuel\n\nValidation n+1 ou RH\nOffre et exception de fourchette, recours cabinet, annonce hors modèle, réserve longue,\nfeedback détaillé dernier tour, exception de process (saut d'étape)\n\nRH / paie / habilité seulement\nDPAE, contrat, motif CDD, titre / visa, rupture d'essai, instruction demande d'accès RGPD\n\nInterdit (escalade)\nCritère L. 1132-1, question hors L. 1221-6, faire commencer hors DPAE, coller des CV dans un outil non validé\n\nDEMANDE DE VALIDATION\nObjet : Validation offre — [Poste] — [Candidat] — réponse souhaitée avant [date/heure]\nFaits : process, fourchette cadrée, prétention, écart\nRisque si silence : désistement / délai annoncé au candidat le [date]\nOption A : offrir X (recommandé parce que …)\nOption B : tenir Y\nJe n'envoie pas l'offre sans votre retour."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "ETI. Un manager dit « envoie l'offre à 42 k, je validerai après ». Le junior n'envoie pas. Il écrit au n+1 recrutement + manager : fourchette validée à 38, demande d'exception. Soit on revalide le budget, soit on tient 38 et on assume un refus. L'offre n'est pas un ballon d'essai."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Prendre un emoji pour une validation. Valider une offre en copie d'une personne non habilitée. Documenter après l'incident seulement. Dire oui au manager, non au n+1, ou l'inverse, selon l'humeur."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "N+1 absent : délégation de backup nommée, sinon attente sur les actes à risque. Cabinet : validation client + validation manager interne, les deux. TPE : le dirigeant est souvent l'habilité DPAE et offre ; cela ne vous autorise pas à discriminer sur son ordre."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Ordre oral : « Écarte les candidats du 93, et dépose la DPAE ce soir avec mon login. » Rédigez l'écrit de 8 lignes (refus, alternative, destinataires)."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Destinataires : n+1 et, selon politique, RH. Contenu : vous n'écartez pas sur le lieu de résidence (critère protégé) ; vous évaluez la capacité à travailler sur le site ; vous ne déposez pas de DPAE avec un login tiers ; vous demandez à l'habilité de déposer avant J1. Alternative : critère de mobilité / horaires. Pourquoi : deux actes interdits dans la même phrase, un seul écrit clair."
            }
          ],
          "position": 4
        },
        {
          "title": "Posture quotidienne : éthique, confidentialité, apprentissage",
          "description": "Tenir une conduite professionnelle stable : données, réseaux, conflits d'intérêts, formation continue.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez quelles règles de confidentialité s'appliquent aux CV, aux offres, aux internes, aux clients.\n\nVous savez utiliser les réseaux professionnels sans exposer un process.\n\nVous savez apprendre en poste (sources institutionnelles, pas des rumeurs de délais légaux)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La posture n'est pas un vernis. C'est ce qui reste quand un manager presse, qu'un candidat séduit, qu'un outil propose un raccourci. Confidentialité : un CV n'est pas un sujet de pause café, un salaire négocié n'est pas un anecdote, un recrutement confidentiel n'est pas un post LinkedIn. Le RGPD et la loyauté interne se rejoignent : minimisation, destinataires utiles, pas de transfert vers un outil personnel ou un modèle d'IA grand public.\n\nLes réseaux : vous pouvez sourcer. Vous ne dénigrez pas un candidat, vous ne publiez pas une offres confidentielle, vous ne mentez pas sur un titre. Un visio avec un décor de logement ne s'évalue pas comme une compétence. Un « background check » amateur sur les réseaux familiaux sort de L. 1221-6.\n\nConflits d'intérêts : cooptation d'un proche, candidat qui est un ami, client cabinet qui est un ancien employeur. Vous déclarez, vous sortez du processus si la politique le demande, vous n'arrangez pas une grille.\n\nÉthique du closing : pas de pression déloyale, pas de dénigrement de l'employeur actuel du candidat, pas de fausse urgence. Le désistement se prend d'acte. Le refus se fait. L'erreur se corrige (module situations délicates).\n\nApprentissage : Légifrance, Code du travail numérique, Service-Public, CNIL, Urssaf, sources de ce cours (vérifiées le 13/10/2026). Vous relisez le texte en vigueur avant d'appliquer une règle à un cas réel. Vous ne mémorisez pas un taux d'obligation d'emploi inventé. Vous ne répétez pas qu'indiquer le salaire est déjà obligatoire en droit français consolidé si ce n'est pas le cas au jour J (directive UE 2023/970 en transposition). La formation continue du junior, c'est cette discipline de source, plus le REX des dossiers."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Règle des 3 destinataires : qui a besoin de cette info ? Journal de bord des questions posées à RH. Revue mensuelle : un texte source relu. Paramètres LinkedIn / ATS : pas de synchro sauvage."
            },
            {
              "block_type": "code",
              "content": "RÈGLES DU QUOTIDIEN\n\n[ ] Pas de CV dans WhatsApp personnel\n[ ] Pas de prompt IA public nominatif\n[ ] Pas de post sur un poste confidentiel\n[ ] Pas de commentaire L. 1132-1 dans l'ATS\n[ ] Déclarer un conflit d'intérêts le jour où il apparaît\n[ ] Relire Service-Public / Urssaf / CNIL avant un cas DPAE, conservation, titre\n[ ] Corriger une erreur de com le jour même\n[ ] Demander une validation plutôt que d'inventer un délai légal"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Un junior raconte en afterwork le salaire d'une candidate et un détail de santé entendu en entretien. Un salarié le rapporte. REX : manquement confidentialité, données santé hors finalité, confiance brisée. Sanction interne possible ; le métier, lui, exigeait le silence."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Ajouter des candidats sur LinkedIn avec un message de refus public. Stocker les RIB dans sa boîte. Googler le conjoint du candidat. Copier des « astuces » de délais légaux sur un forum."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Télétravail : documents papier, visios dans un espace non public. Cabinet : secret client. Intérim : ne pas livrer un avis médical d'un intérimaire à l'utilisatrice."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Listez 4 réflexes que vous appliquerez dès J1, rattachés à une source (L. 1132-1, L. 1221-6, RGPD/CNIL, F23107)."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Exemples : grille sans critère protégé (L. 1132-1) ; questions de poste seulement (L. 1221-6) ; pas de CV hors outil (RGPD / CNIL) ; alerte DPAE avant J1 (F23107). Pourquoi : la posture se rattache à des textes, pas à une humeur éthique."
            }
          ],
          "position": 5
        },
        {
          "title": "Devenir autonome sur un process standard : check de sortie junior",
          "description": "Vérifier que vous pouvez mener un recrutement complet, du cadrage au REX, en sachant où vous vous arrêtez.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez dérouler un process standard de bout en bout et pointer les portes d'escalade.\n\nVous disposez d'une check de « sortie d'accompagnement » pour un premier poste.\n\nVous savez expliquer ce process en entretien d'embauche, sans romancer."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "L'autonomie visée n'est pas de tout signer. C'est de conduire un CDI ou un besoin analogue, non confidentiel, non international complexe, avec un manager partenaire, en respectant le droit et les modèles internes, et en sachant lever la main. Si vous savez cadrer, publier, sourcer, trier, préqualifier, faire passer un entretien structuré, écrire un CR, shortlister, préparer une offre à valider, refuser, coordonner dossier / DPAE / J1, suivre un point d'essai, faire un REX — vous êtes opérationnel au sens de ce cours.\n\nCe que l'autonomie n'est pas : un TTF « sous 30 jours » universel ; une habilitation Urssaf ; un avis sur un titre de séjour ; une rupture d'essai ; une politique handicap inventée ; un benchmark salarial. L'autonomie inclut le contraire : la liste des cas où vous stoppez.\n\nPour un entretien d'embauche de recruteur junior, cette check est votre fil. On vous demandera « racontez un recrutement ». Vous racontez des étapes, des acteurs, un point de droit, un indicateur interne sans norme magique, une erreur corrigée. Vous ne racontez pas une héroïsation (« j'ai tout clos en 48 h, DPAE comprise, visa compris »).\n\nLa sortie d'accompagnement (fin de période d'essai du recruteur, ou fin de formation interne) se prépare comme un onboarding inversé : quels modèles vous maîtrisez, quels managers vous savez recadrer, quelle qualité d'ATS, quelles escalades déjà faites. Votre n+1 doit craindre votre silence, pas vos questions."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Une fois par trimestre, passez la check ci-dessous sur un dossier réel. Les cases vides deviennent un plan de pair (assister, puis faire, puis faire relire)."
            },
            {
              "block_type": "code",
              "content": "CHECK DE SORTIE — PROCESS STANDARD\n\nCadrage écrit manager (must / formable / conditions / créneaux)\nAnnonce honnête (nature, lieu, français si travail en France)\nSources saisies ; pas de CV hors outil\nGrille de tri et d'entretien ; questions licites\nPréqual + entretien structuré + CR factuel\nShortlist argumentée ; pas de critère L. 1132-1\nOffre validée, cohérente avec le contrat à venir\nRefus / attente / réserve : statuts et messages\nAlerte RH : DPAE avant J1, pièces, titre si besoin (sans conseil visa)\nPréboarding + point J1 (coordination, pas substitution)\nPoint d'essai + REX\nATS propre ; pas de « peut-être »\n\nESCALADES QUE JE SAIS NOMMER\nDiscrimination, accès RGPD, incident données, écart offre/contrat,\nordre de commencer hors DPAE, droit des étrangers, contestation"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Services. Au 4e mois, le junior présente un dossier : TTF interne 39 jours, TTH 18, un refus d'offre pour fourchette, un REX « dire la fourchette plus tôt ». Il n'a pas déposé la DPAE ; RH l'a fait J-2. Le n+1 valide l'autonomie sur le standard, garde la supervision des cadres confidentiels."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Déclarer l'autonomie pour éviter le contrôle. Oublier les refus dans la check. Compter un process « réussi » alors que l'essai a été rompu pour onboarding absent. Cacher une escalade manquée."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Volume : autonomie = standard industrialisé + clôtures, pas un CDI unique. Cabinet : autonomie = mission client dans le mandat. Intérim : autonomie = missions + process agence."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "En 10 lignes, racontez « un recrutement que vous mèneriez » pour un entretien d'embauche, en citant une escalade que vous ne feriez pas seul."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Le récit suit le fil cadrage → clôture → DPAE RH → REX, avec un point de droit (question illicite recadrée, ou DPAE non déposée par vous). Il n'invente ni délai marché ni visa. Pourquoi : l'autonomie crédible montre le process et la limite, pas le super-héros."
            }
          ],
          "position": 6
        },
        {
          "title": "50 questions d'entretien d'embauche pour un poste de recruteur junior",
          "description": "Préparer un oral d'embauche : 50 questions en cinq blocs, avec des réponses modèles argumentées, cœur de la préparation à l'emploi.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 45,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Comment utiliser cette leçon"
            },
            {
              "block_type": "text",
              "content": "Cette leçon ne suit pas le plan en huit sections des autres cours : elle est une banque d'oral. Les 50 questions sont regroupées en cinq blocs : métier, juridique, sourcing, entretien et évaluation, études de cas. Pour chaque question, une réponse modèle argumentée vous est proposée. Ce n'est pas la seule formulation possible ; c'est un standard professionnel, en vouvoiement, sans slogan, sans statistique inventée, avec les distinctions obligation / recommandation / politique interne / bonne pratique.\n\nTravaillez à voix haute. Chronométrez 1 min 30 à 3 minutes par réponse. Ensuite, réduisez. En entretien réel, citez les textes lorsque c'est juste (L. 1132-1, L. 1221-6, L. 1221-8, L. 1221-9, L. 5331-3, F23107, CNIL, F39588), sans réciter le Code. Si l'entreprise a une politique différente d'un modèle de ce cours, dites que vous vous y plierez dès lors qu'elle est licite.\n\nSources du cours vérifiées le 13/10/2026. En poste, vous relirez le texte en vigueur."
            },
            {
              "block_type": "heading",
              "content": "Bloc 1 — Métier (questions 1 à 10)"
            },
            {
              "block_type": "text",
              "content": "Question 1 — En quoi consiste le métier de recruteur junior, concrètement, dans une semaine type ?\n\nRéponse modèle. Le métier consiste à faire avancer des besoins d'embauche de façon fiable, pas à « chasser » en continu sans clôturer. Une semaine type mêle cadrage avec un manager, tri et préqualifications, entretiens, comptes rendus, relances de débrief, messages de refus ou d'attente, coordination RH (pièces, calendrier de DPAE, contrat), saisie ATS. Je bloque un temps pour les clôtures : le silence candidat n'est pas une organisation. Je n'invente pas un volume d'entretiens universel : le rythme dépend du portefeuille et de la politique interne. Ma valeur junior, c'est la tenue des dates que j'annonce et la qualité des écrits.\n\nQuestion 2 — Quelle différence faites-vous entre recruteur, RH administration du personnel, et manager embaucheur ?\n\nRéponse modèle. Le recruteur coordonne le process de choix et la relation candidat. Les RH / la paie portent généralement le dossier, la DPAE, le contrat, les affiliations. Le manager porte le besoin métier, l'évaluation du travail, l'accueil et le suivi d'essai. Je ne « signe » pas une DPAE si je n'y suis pas habilité, je ne romps pas un essai tout seul, je ne laisse pas le manager poser une question illicite sans recadrage. Cette distinction évite que tout le monde croie que l'autre s'en charge, surtout entre le oui et J1.\n\nQuestion 3 — Comment cadrez-vous un besoin avec un manager pressé ?\n\nRéponse modèle. Je sors d'un échange de 30 à 45 minutes avec un écrit : mission, must have, formable, contrat, lieu, horaires, fourchette, étapes, décideur, créneaux d'entretien. Sans créneaux, je n'ouvre pas un sourcing pour le néant. Je fais valider une grille. Si un critère touche un motif protégé, je le recadre tout de suite. Je confirme par e-mail le jour même. La rapidité vient d'un cadrage net, pas d'une chasse sans fiche.\n\nQuestion 4 — Fiche de poste et annonce : quelle différence ?\n\nRéponse modèle. La fiche de poste est l'outil interne (mission, rattachement, exigences, conditions). L'annonce est le message public ou ciblé, honnête sur la nature de l'emploi, le lieu, la rémunération et avantages si on les cite (L. 5331-3), rédigée en français si le travail s'effectue en France (L. 5331-4). Je ne copie pas la fiche brute dans une annonce, et je ne vends pas un CDI si le besoin est un CDD. L'annonce n'a pas à dire l'organigramme secret ; elle n'a pas le droit d'induire en erreur.\n\nQuestion 5 — Qu'est-ce qu'une shortlist sérieuse ?\n\nRéponse modèle. C'est un petit nombre de candidatures comparées sur la même grille, avec des faits d'évaluation, un écart restant, une recommandation. Ce n'est pas 12 CV « pour que le manager se fasse une idée ». Je n'inclus pas un profil pour faire de la figuration (interne ou externe) si la décision est déjà prise. Je ne commente pas l'âge, le sexe, l'origine, la santé. La shortlist sert à décider, pas à diluer la responsabilité.\n\nQuestion 6 — Comment formulez-vous une offre ?\n\nRéponse modèle. L'offre reprend ce qui a été cadré et dit au candidat : poste, contrat, rémunération, lieu, date visée, durée de validité. Je la fais valider avant envoi. Je ne gonfle pas un variable pour conclure. Je distingue l'offre de contrat d'une promesse unilatérale d'embauche : ces notions ne sont pas définies par la loi, elles sont encadrées par la jurisprudence, expliquée notamment par Service-Public F39588 ; je ne qualifie pas seul un écrit, j'alerte RH si un engagement circule. Une promesse n'est pas obligatoire pour embaucher.\n\nQuestion 7 — Comment refusez-vous un candidat ?\n\nRéponse modèle. Une fois la décision ferme, je réponds. Il n'y a pas d'obligation légale générale de motiver un refus. Il y a obligation de ne pas discriminer. Le canal dépend de l'étape : e-mail court au CV, téléphone plus e-mail après un process avancé. Si je donne un motif, il est professionnel et factuel. Une demande d'accès aux données n'est pas un feedback : je transmets au circuit RH / DPO. Je trace le statut le jour même.\n\nQuestion 8 — Quel est votre rôle dans l'intégration ?\n\nRéponse modèle. Je coordonne : checklist recruteur / RH / manager / IT, préboarding d'information, contrôle que la DPAE est faite par l'habilité avant la prise de poste ou l'essai, cohérence offre / contrat, accueil J1 qui a un nom. Je n'évalue pas la performance à J1. Je peux animer un point d'essai et un REX. Je ne fais pas commencer « officieusement ».\n\nQuestion 9 — Quels indicateurs utilisez-vous ?\n\nRéponse modèle. Time to fill : acceptation d'offre moins validation du besoin. Time to hire : acceptation moins entrée du candidat retenu. Ce sont des conventions à écrire, pas des normes magiques de marché. J'ajoute conversion par étape, taux d'acceptation d'offres, désistements en précisant l'étape, sources, tenue de l'essai. Je n'invente pas de benchmark. Un ATS mal renseigné rend ces chiffres inutiles. Je ne sors pas d'âge ou de sexe dans un reporting de « perf ».\n\nQuestion 10 — Que faites-vous de mieux qu'un profil qui « aime les gens » ?\n\nRéponse modèle. J'aime que le process soit tenable et licite. Je sais écrire un CR, tenir une date, recadrer un critère, alerter sur une DPAE, clôturer un refus, calculer un TTF sans folklore. L'empathie sans clôture produit du ghosting employeur. Le métier junior se voit dans les dossiers propres, pas dans une déclaration d'affection pour l'humain."
            },
            {
              "block_type": "heading",
              "content": "Bloc 2 — Juridique (questions 11 à 20)"
            },
            {
              "block_type": "text",
              "content": "Question 11 — Qu'est-ce que le principe de non-discrimination à l'embauche ?\n\nRéponse modèle. L'article L. 1132-1 du Code du travail interdit d'écarter une personne d'un recrutement en raison de critères protégés (origine, sexe, âge, situation de famille, handicap, état de santé, opinions, apparence physique, lieu de résidence, etc., telle que la liste du texte). Cela s'applique aux décisions, aux commentaires ATS, aux consignes manager, aux outils de ranking. Si un manager me demande d'écarter pour l'âge ou le sexe, je n'exécute pas, j'escalade. Source vérifiée dans le cadre du cours le 13/10/2026 ; je relis le texte en vigueur en poste.\n\nQuestion 12 — Quelles informations pouvez-vous demander à un candidat ?\n\nRéponse modèle. L. 1221-6 : uniquement celles qui permettent d'apprécier la capacité à occuper l'emploi ou les aptitudes professionnelles, avec un lien direct et nécessaire. Le candidat répond de bonne foi. Je ne demande pas les enfants, la santé, la religion, les comptes, un extrait de casier hors emplois qui l'exigent réellement. Après embauche, le dossier RH a d'autres finalités administratives, toujours dans le RGPD, pas un dossier médical dans l'ATS.\n\nQuestion 13 — Un test ou un scoring, sous quelles conditions ?\n\nRéponse modèle. L. 1221-8 : le candidat est informé préalablement des méthodes et techniques d'aide au recrutement utilisées à son égard ; les résultats sont confidentiels. L. 1221-9 : les méthodes doivent être pertinentes au regard de la finalité. Un test de personnalité sans lien, un ranking opaque, un outil qui proxy l'âge ou le genre, ne passent pas. L'IA n'échappe pas à ces articles ni à L. 1132-1. La décision reste humaine et traçable.\n\nQuestion 14 — Quelles règles pour rédiger une offre d'emploi ?\n\nRéponse modèle. Pas de mention de sexe ou situation de famille dans l'offre (cadre L. 5331-2 / L. 1142-1, exceptions très limitées). Pas d'allégations fausses ou trompeuses sur l'emploi, la rémunération, le lieu (L. 5331-3). Offre en français si le travail s'effectue en France, avec description française d'un terme étranger sans équivalent (L. 5331-4). J'applique aussi L. 1132-1 dans le texte de l'annonce.\n\nQuestion 15 — Faut-il motiver un refus ?\n\nRéponse modèle. Il n'existe pas d'obligation légale générale de motiver un refus de candidature. La bonne pratique est de répondre, vite, selon l'étape. Si l'on motive, le motif est professionnel. Le RGPD donne un droit d'accès aux données, distinct de l'obligation de motiver le choix. Je ne motive jamais par un critère protégé. La politique interne peut imposer un modèle unique : je l'applique.\n\nQuestion 16 — Un candidat veut « toutes vos notes ». Que faites-vous ?\n\nRéponse modèle. Je qualifies une demande d'accès. J'accuse réception et je transmets au circuit RH / DPO. Je n'envoie pas le dossier brut le soir même, je ne filtre pas « au feeling », je ne réponds pas par un feedback métier qui élude la demande. Le droit existe ; l'instruction suit la procédure, y compris d'éventuelles limites que le juriste tranche, pas moi.\n\nQuestion 17 — Combien de temps conserve-t-on les CV ?\n\nRéponse modèle. Il faut distinguer. Archivage intermédiaire des non-retenus à des fins probatoires : 5 ans à compter de la date à laquelle le poste a été pourvu, en lien avec L. 1134-5, tel que le présente le référentiel CNIL 2026. Vivier / CVthèque : jusqu'à 2 ans à compter du dernier contact, sauf opposition — recommandation CNIL, pas une durée unique imposée par le RGPD lui-même. Candidat retenu : bascule vers le dossier personnel. Je n'affirme pas que « 2 ans » est la seule règle pour tout.\n\nQuestion 18 — Qu'est-ce que la DPAE, et quel est votre rôle ?\n\nRéponse modèle. Déclaration préalable à l'embauche, obligation de l'employeur, avant la prise de fonction ou le début de la période d'essai, au plus tôt dans les 8 jours précédant l'embauche (Service-Public F23107 + Urssaf). Mon rôle : faire connaître la date de J1, alerter, vérifier que l'habilité a déposé. Je ne dépose pas avec un login trouvé dans un tiroir. Je ne fais pas commencer sans DPAE. La DPAE ne remplace pas le contrat, et inversement.\n\nQuestion 19 — Offre de contrat et promesse unilatérale d'embauche ?\n\nRéponse modèle. Ces notions ne sont pas définies par la loi ; elles sont encadrées par la jurisprudence, expliquée par Service-Public F39588 (notamment Cass. soc. 21 septembre 2017, n° 16-20.103 et 16-20.104, telles que citées par la fiche). L'offre peut être retirée avant acceptation dans le délai laissé ou un délai raisonnable ; la promesse unilatérale vaut contrat, le retrait s'analyse en licenciement sans cause réelle et sérieuse. Une promesse n'est pas obligatoire. Je ne qualifie pas seul : j'alerte RH si un écrit d'engagement pose question.\n\nQuestion 20 — Faut-il indiquer le salaire dans l'annonce ?\n\nRéponse modèle. Au jour des sources du cours, indiquer le salaire dans l'offre n'est pas présenté comme une obligation française déjà consolidée ; une directive européenne (UE 2023/970) impose une information sur la rémunération ou une fourchette, transposition en cours. Je distingue : pas encore cette obligation interne consolidée / bonne pratique de clarté / future obligation. Je vérifie le texte de transposition en vigueur le jour J. En attendant, je ne mens pas sur la rémunération (L. 5331-3) et je dis la fourchette en process dès qu'elle est cadrée."
            },
            {
              "block_type": "heading",
              "content": "Bloc 3 — Sourcing (questions 21 à 30)"
            },
            {
              "block_type": "text",
              "content": "Question 21 — Comment choisissez-vous vos canaux ?\n\nRéponse modèle. Selon le besoin réel (contrat, rareté, lieu, budget), pas selon une mode. Je mesure en interne volume, conversion, embauches, tenue de l'essai, coût du canal si connu. Je n'ai pas de palmarès national à citer. Un canal à fort volume et zéro embauche n'est pas « performant ». Un canal d'inclusion à faible volume n'est pas coupé au seul cost per hire.\n\nQuestion 22 — Que contient une annonce utile ?\n\nRéponse modèle. Métier, conditions de travail réelles, contrat, lieu, éventuellement fourchette (bonne pratique), modalités de candidature, informations utiles sur le process. Ton professionnel. Pas de critère illicite. Pas de « ninja » qui masque un besoin flou. Si le travail est en France, le français. Je fais relire si je débute, contre L. 5331-2, L. 5331-3, L. 5331-4.\n\nQuestion 23 — Comment sourcer en direct sans harceler ?\n\nRéponse modèle. Message court, poste, pourquoi cette personne, modalité pour dire non. Pas de relance infinie. Pas de données hors outil validé. Pas de commentaire sur la photo. Si la personne refuse, je clôture. Le sourcing direct est un canal, pas une chasse au trophée.\n\nQuestion 24 — Qu'est-ce qu'un vivier conforme ?\n\nRéponse modèle. Des personnes informées, une finalité, une durée (recommandation CNIL : jusqu'à 2 ans à partir du dernier contact, sauf opposition), une possibilité d'opposition, pas une base éternelle. J'enregistre la date de dernier contact. Je ne verse pas un non-retenu en vivier contre son opposition. Le vivier n'est pas un substitut de refus.\n\nQuestion 25 — Comment traitez-vous une cooptation ?\n\nRéponse modèle. Même grille que les autres. Remerciement au prescripteur selon la règle, sans livrer d'évaluation détaillée. Si le coopté est un proche, je déclare le conflit. La cooptation n'efface pas L. 1132-1. Je saisis la source « cooptation » dans l'ATS, pas « LinkedIn » par facilité.\n\nQuestion 26 — Candidature spontanée : que répondre ?\n\nRéponse modèle. S'il n'y a pas de poste : le dire, proposer un vivier selon la mention d'information, ne pas faire mine d'un process. Si un poste existe : entrer dans le flux. Clôturer. Le spontané gonfle parfois le haut du funnel : je ne le juge pas au seul volume.\n\nQuestion 27 — Profil pénurique : première réaction ?\n\nRéponse modèle. Vérifier que la pénurie est réelle (sourcing déjà tenté, pas un sentiment). Revoir must have vs formable, conditions, process trop long. Pas de critère d'âge « ça coûte moins ». Pas de mensonge de contrat. Éventuellement cabinet : décision budgétaire. Pas de TTF marché inventé.\n\nQuestion 28 — Recrutement volume : comment tenir ?\n\nRéponse modèle. Critères essentiels dès l'annonce, grille unique, calibrage manager sur un échantillon, créneaux groupés, clôture des non-retenus, messages individuels pour les interviewés. L'automatisation reste dans le cadre L. 1221-8 / L. 1221-9 / L. 1132-1. Le volume n'autorise pas le ghosting de masse.\n\nQuestion 29 — Pourquoi saisir une seule source principale ?\n\nRéponse modèle. Sinon le reporting des canaux est une conversation. Une source principale, éventuellement une secondaire. J'évite d'attribuer toutes les embauches au réseau social du CV. La source se saisit à l'entrée, pas à l'embauche « pour faire joli ».\n\nQuestion 30 — Quand recourir à un cabinet ?\n\nRéponse modèle. Lorsque le besoin, le délai et le vivier interne le justifient, avec un budget validé, un cadrage écrit, un circuit de feedback, une règle de qui refuse les candidats. Je ne recourt pas à un cabinet pour éviter de recadrer un manager. Je ne livre pas au cabinet plus de données que nécessaire."
            },
            {
              "block_type": "heading",
              "content": "Bloc 4 — Entretien et évaluation (questions 31 à 40)"
            },
            {
              "block_type": "text",
              "content": "Question 31 — Pourquoi une grille d'entretien ?\n\nRéponse modèle. Pour comparer des faits sur les mêmes critères de poste, réduire le feeling, laisser une trace professionnelle. La grille se construit à partir de la fiche, pas à partir de « je saurai ». Elle n'inclut pas de critère protégé. Elle n'empêche pas l'échange humain ; elle empêche le commentaire « pas le look ».\n\nQuestion 32 — Préqualification : à quoi sert-elle ?\n\nRéponse modèle. Vérifier les conditions (lieu, horaires, contrat, fourchette, disponibilité, prérequis) et un premier niveau métier, pour ne pas faire perdre de temps. Ce n'est pas un interrogatoire. Si l'écart est net et que j'ai le mandat, je peux clôturer oralement puis par e-mail. Je ne promets pas un entretien manager pour être agréable.\n\nQuestion 33 — Comment conduisez-vous un entretien ?\n\nRéponse modèle. Cadre (durée, interlocuteurs, méthodes — L. 1221-8), questions liées au poste, mises en situation pertinentes (L. 1221-9), temps pour les questions du candidat, suite et délai réel. Je prends des notes factuelles. Je ne vends pas un poste que je ne peux pas tenir. Je ne transforme pas l'entretien en test de vie privée.\n\nQuestion 34 — Le manager pose une question illicite. Que faites-vous ?\n\nRéponse modèle. Je recadre pendant l'entretien si possible (« nous restons sur les critères du poste ») ; après, je parle au manager, je consigne, j'escalade si ça se répète. Je n'utilise pas la réponse du candidat. Je ne laisse pas la question dans le CR comme un critère. L. 1221-6 et L. 1132-1 s'appliquent aussi au manager embaucheur.\n\nQuestion 35 — Qu'est-ce qu'un biais, concrètement, pour vous ?\n\nRéponse modèle. Un écart d'évaluation qui n'est pas un critère de poste : similarité, effet de halo, fatigue, stéréotype d'âge ou de genre. La grille, le temps égal, la relecture du CR, le calibrage, réduisent, ils n'annulent pas. Un scoring IA peut reproduire le biais : relecture humaine. Je ne me prétends pas « sans biais » ; je me dote d'un process.\n\nQuestion 36 — Comment prenez-vous des notes ?\n\nRéponse modèle. Faits, exemples, écart vis-à-vis de la grille. Pas de diagnostic de personnalité de comptoir. Pas de donnée santé. Pas de photo annotée. Ces notes peuvent un jour entrer dans une demande d'accès : j'écris comme si elles pouvaient être lues dans un circuit cadré, pas comme un SMS.\n\nQuestion 37 — Un test technique, oui ou non ?\n\nRéponse modèle. Oui s'il est pertinent, proportionné, annoncé, évalué avec une grille, identique pour les personnes au même stade. Non s'il est un travail gratuit productif, un piège, ou un outil non validé. Information préalable L. 1221-8. Je ne fais pas faire un week-end de production « pour voir ».\n\nQuestion 38 — Entretien visio : points de vigilance ?\n\nRéponse modèle. Même grille qu'en présentiel. Lien testé. Pas d'enregistrement hors politique. J'évalue le poste, pas le logement. Une panne réseau n'est pas une incompétence. Si la caméra n'est pas un exigence pertinente, je ne l'érige pas en critère. Aménagement possible (handicap, accessibilité).\n\nQuestion 39 — Donnez-vous un feedback ?\n\nRéponse modèle. Selon la politique, plutôt aux personnes reçues en entretien, factuel, court, sur le poste. Pas de comparaison nominative. Pas d'obligation légale générale de motiver. Si la demande est un accès RGPD, autre circuit. Je ne promets pas un feedback que le manager refuse ensuite.\n\nQuestion 40 — Comment décidez-vous à plusieurs ?\n\nRéponse modèle. Chacun renseigne la grille avant d'entendre les autres, puis on confronte les faits. Un décideur nommé. En cas d'égalité, on revient aux must have, on ne tranche pas à l'âge ou au « fit ». Je n'invente pas un consensus. Si le manager change les critères en fin, on réécrit le besoin, on n'humilie pas les finalistes."
            },
            {
              "block_type": "heading",
              "content": "Bloc 5 — Études de cas (questions 41 à 50)"
            },
            {
              "block_type": "text",
              "content": "Question 41 — Un manager : « Écarte-le, trop vieux. » Votre réponse ?\n\nRéponse modèle. Je n'exécute pas. L'âge est un critère protégé (L. 1132-1). Je demande des faits de poste. Si les faits existent, on décide sur ces faits. Sinon, le profil reste. J'informe mon responsable. Je ne traduis pas « trop vieux » en « trop senior » dans l'ATS. Je ne l'écris pas au candidat.\n\nQuestion 42 — Mail : « Envoyez-moi tout ce que vous avez sur moi, et dites-moi pourquoi. »\n\nRéponse modèle. Je sépare. Le « pourquoi » : pas d'obligation générale de motiver ; motif court si politique. Le « tout ce que vous avez » : demande d'accès, accusé, circuit DPO / RH. Je n'envoie pas les commentaires bruts du manager le soir même. Un seul mail fourre-tout de ma part mélangerait les risques.\n\nQuestion 43 — Le n°1 se désiste après un oui oral, J1 dans dix jours. Que faites-vous dans l'heure ?\n\nRéponse modèle. Prise d'acte, pas de menace. Information manager et RH (écrits déjà envoyés ? qualification offre / promesse : pas moi tout seul). Activation de la réserve si elle est encore réelle, avec un discours honnête. Vérification DPAE / contrat à stopper ou à réorienter. REX : motif de désistement s'il est donné, sans psychologie.\n\nQuestion 44 — Le poste est annulé après deux entretiens. Que dites-vous ?\n\nRéponse modèle. La vérité de process : le recrutement est annulé, ce n'est pas une évaluation du profil. Appel aux plus avancés, e-mail aux autres, stop annonce. Je ne déguise pas en « vous n'avez pas les compétences ». Si une offre orale a circulé, j'alerte RH (F39588). Je ne promets pas un autre poste fictif.\n\nQuestion 45 — L'offre disait 38 k€, le contrat arrive à 36 k€. Conduite ?\n\nRéponse modèle. Je bloque la signature. J'alerte RH et le manager. Soit le contrat revient à l'offre, soit on assume un nouvel arbitrage expliqué au candidat, qui peut refuser. Faire signer en silence n'est pas du closing, c'est une rupture de parole. Je ne « compense » pas par un variable hors mandat.\n\nQuestion 46 — « Il commence lundi, tu t'occupes de la DPAE, les identifiants sont dans le tiroir. »\n\nRéponse modèle. Je ne dépose pas hors habilitation. La DPAE est une obligation employeur, avant prise de poste ou essai, au plus tôt 8 jours avant (F23107). Alternative : l'habilité dépose, ou l'on reporte J1. Je trace l'alerte. Je ne fais pas commencer officieusement.\n\nQuestion 47 — Un collègue colle 20 CV nominatifs dans un chat d'IA grand public « pour trier ». Votre réaction ?\n\nRéponse modèle. Stop : données personnelles hors outil validé, incident potentiel, je n'imite pas. J'alerte le responsable / DPO. Un ranking n'exonère pas L. 1221-8, L. 1221-9, L. 1132-1. Je propose un tri sur grille dans l'ATS. La vitesse n'est pas un argument supérieur au cadre.\n\nQuestion 48 — Un interne candidate et demande que son manager n'en sache rien. Que faites-vous ?\n\nRéponse modèle. Je lis la politique de confidentialité interne. Je n'appelle pas le N+1 « pour avis informel ». J'enregistre, j'applique la règle, j'alerte RH en cas de conflit. Même grille que pour le poste. Un refus interne se coordonne, ce n'est pas un mail externe. L. 1132-1 s'applique aussi.\n\nQuestion 49 — Un candidat RQTH demande 15 minutes de plus et un logiciel de lecture pour la mise en situation.\n\nRéponse modèle. J'accuse réception, je transmets à RH l'aménagement de process, je confirme une date, j'évalue les critères du poste. Je ne demande pas le détail médical. Je ne dis pas « vous ferez bien pour notre taux » : l'obligation d'emploi existe pour certains employeurs, je n'invente pas un pourcentage, je vérifie le seuil légal en vigueur si je dois le citer, j'applique la politique. L. 1132-1 demeure même hors assujettissement.\n\nQuestion 50 — Un profil excellent vit hors de France. Il demande : « Vous me faites le visa ? On dit J1 dans trois semaines ? »\n\nRéponse modèle. J'évalue le poste. Je n'écarte pas pour l'origine. Je n'improvise pas le droit des étrangers, je ne garantis pas un visa, je ne fixe pas un J1 fantaisiste. J'alerte RH (titre, lieu de travail en France). RH dit les pièces au bon moment. S'il n'y a pas de cadre tenable, on ne fait pas commencer. Ma compétence junior, ici, est la limite."
            },
            {
              "block_type": "callout",
              "content": "En oral réel : une idée par phrase, un texte cité seulement s'il est juste, une limite avouée plutôt qu'une invention. Si vous ne savez pas, dites le circuit (RH, DPO, n+1), ne fabriquez pas un délai légal."
            }
          ],
          "position": 7
        },
        {
          "title": "Quiz — Devenir opérationnel comme recruteur junior",
          "description": "Douze questions : compétences, 90 jours, managers, charge, délégation, oral d'embauche.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 15,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Répondez à chaque question. En cas d'échec, relisez le module puis retentez. Les questions juridiques essentielles exigent une justification : lisez toujours l'explication après validation."
            }
          ],
          "quiz": {
            "title": "Quiz — Devenir opérationnel comme recruteur junior",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Quelle compétence est réellement exigible d'un recruteur junior dès les premières semaines ?",
                "question_type": "single_choice",
                "options": [
                  "A. Cadrer un besoin, tracer l'ATS, refuser selon un modèle, alerter RH sur la DPAE, sans qualifier un visa ni déposer une DPAE hors habilitation.",
                  "B. Rédiger seul n'importe quel motif de CDD et rompre une période d'essai.",
                  "C. Garantir un time to fill de 30 jours, norme marché.",
                  "D. Conseiller un titre de séjour après une recherche en ligne."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Le socle est le process licite et la frontière. Motif de CDD, rupture d'essai, visa, DPAE hors rôle, benchmark magique sortent du mandat."
              },
              {
                "question": "Priorité des 30 premiers jours ?",
                "question_type": "single_choice",
                "options": [
                  "A. Carte des acteurs et habilitations, ATS, dettes de refus, modèles internes, préqual supervisées.",
                  "B. Ouvrir le maximum de postes pour prouver son volume.",
                  "C. Changer tous les modèles d'e-mails dès J2.",
                  "D. Déposer les DPAE pour se rendre utile."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "La fiabilité précède le volume. Les DPAE restent du ressort habilité. L'innovation de modèles n'est pas le sujet de la première quinzaine."
              },
              {
                "question": "Un manager dit : « Envoie tout le monde, évite les trop seniors. » Quelle conduite ?",
                "question_type": "single_choice",
                "options": [
                  "A. Shortlist selon des must have validés ; refuser l'âge déguisé ; proposer une grille et des créneaux.",
                  "B. Envoyer 20 CV et noter « trop senior » dans l'ATS.",
                  "C. Obéir : le manager est le client interne, donc la loi du poste.",
                  "D. Promettre aux candidats que « c'est super, on avance » en attendant."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Partenariat ≠ exécuter L. 1132-1. Le volume de CV sans grille n'est pas du cadrage. Mentir aux candidats n'achète pas du temps."
              },
              {
                "question": "Deux urgences se percutent. Que faites-vous ?",
                "question_type": "single_choice",
                "options": [
                  "A. Rendre la file visible, proposer un gel, faire valider l'arbitrage ; ne pas sauter DPAE, discrimination, clôtures déjà dues.",
                  "B. Dire oui aux deux J1, y compris sans DPAE.",
                  "C. Prioriser celui qui crie le plus fort, sans écrit.",
                  "D. Arrêter tous les refus pour « gagner du temps »."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "La priorisation s'écrit et se valide. L'urgence n'efface ni le droit ni la parole déjà donnée aux candidats."
              },
              {
                "question": "Le silence de votre n+1 sur une offre à envoyer aujourd'hui signifie :",
                "question_type": "single_choice",
                "options": [
                  "A. Ce n'est pas une validation : vous relancez, vous n'envoyez pas un acte à risque sans écrit.",
                  "B. Un oui implicite, surtout après 17 h.",
                  "C. Que vous pouvez augmenter la fourchette pour conclure.",
                  "D. Que vous pouvez déposer la DPAE avec son login."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "La validation se constate par un écrit. Le silence n'habilite ni l'offre hors cadre, ni la DPAE, ni une exception de salaire."
              },
              {
                "question": "Ordre : écarter les candidats d'un département et déposer la DPAE avec un login tiers. Réaction ?",
                "question_type": "single_choice",
                "options": [
                  "A. Refus écrit : lieu de résidence / stéréotype géographique vs L. 1132-1 ; DPAE par l'habilité seulement.",
                  "B. Exécuter pour loyauté.",
                  "C. Exécuter le tri géographique, refuser seulement la DPAE.",
                  "D. Exécuter la DPAE, le tri « on verra plus tard »."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Deux interdits. Le lieu de résidence est un critère protégé ; on évalue la capacité à travailler sur le site. La DPAE n'est pas un geste débrouillard."
              },
              {
                "question": "En entretien d'embauche, on vous demande si vous motivez toujours les refus. Meilleure ligne ?",
                "question_type": "single_choice",
                "options": [
                  "A. Pas d'obligation légale générale ; je réponds selon l'étape et la politique ; jamais un motif discriminatoire ; l'accès RGPD est un autre circuit.",
                  "B. Oui, c'est obligatoire en 48 h par le Code du travail.",
                  "C. Non, le RGPD interdit de répondre aux candidats.",
                  "D. Je motive seulement si le candidat a plus de 45 ans, par respect."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "C'est le cadrage du module refus. 48 h n'est pas un délai légal général. Le RGPD n'interdit pas de répondre. L'âge n'est pas un critère de politesse."
              },
              {
                "question": "On vous demande de « tout gérer, visa compris ». Réponse d'oral solide ?",
                "question_type": "single_choice",
                "options": [
                  "A. J'évalue le poste, j'alerte RH, je ne conseille pas le droit des étrangers, je ne promets pas de visa ni un J1 irréel, je n'écarte pas pour l'origine.",
                  "B. Je connais les procédures préfectorales, je garantis trois semaines.",
                  "C. J'écarte tout profil à l'étranger par prudence.",
                  "D. Je fais commencer en visio, on régularisera."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Limite junior claire, non-discrimination, pas de travail hors cadre. Les autres options sont des fautes d'oral et de métier."
              },
              {
                "question": "Quel indicateur citez-vous en oral sans vous piéger ?",
                "question_type": "single_choice",
                "options": [
                  "A. TTF et TTH selon des dates définies, plus un funnel interne, sans « moyenne marché » inventée.",
                  "B. « Le marché est à 28 jours, je suis à 20. »",
                  "C. Un score IA 87 comme preuve scientifique.",
                  "D. Le pourcentage d'hommes dans mes embauches, pour « l'équilibre » improvisé."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Pas de benchmark fantôme, pas de score opaque, pas de reporting de sexe comme trophée. Les définitions internes suffisent."
              },
              {
                "question": "Un conflit d'intérêts (ami candidat) se traite comment ?",
                "question_type": "single_choice",
                "options": [
                  "A. Déclaration immédiate, sortie du process si la politique le demande, même grille sinon sous contrôle.",
                  "B. Grille un peu plus généreuse, par loyauté personnelle.",
                  "C. Silence, tant que personne ne le sait.",
                  "D. Refus automatique de l'ami, pour se protéger, sans règle."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Déclarer et suivre la politique. Ni favoritisme, ni éviction improvisée qui peut elle-même être injuste. Le silence n'est pas une éthique."
              },
              {
                "question": "La check de « sortie junior » vise surtout :",
                "question_type": "single_choice",
                "options": [
                  "A. Un process standard mené de bout en bout, avec une liste d'escalades nommées, pas l'habilitation à tout signer.",
                  "B. La capacité à déposer DPAE, visas et ruptures d'essai seul.",
                  "C. Un TTF inférieur à 30 jours sur tous les postes.",
                  "D. L'absence de questions au n+1, preuve d'autonomie."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Autonomie = process + limites. Les questions au n+1 sont un signe de maîtrise, pas l'inverse. Pas de norme magique de délai."
              },
              {
                "question": "Dans la banque de 50 questions, le « cœur » attendu par un recruteur qui vous embauche est :",
                "question_type": "single_choice",
                "options": [
                  "A. Des réponses argumentées qui lient process, textes (non-discrimination, L. 1221-6, DPAE, RGPD) et limites d'escalade, pas une ligne de slogan.",
                  "B. Des anecdotes drôles sans droit.",
                  "C. Des statistiques de marché mémorisées.",
                  "D. La promesse de travailler sept jours sur sept, visa et DPAE compris."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "C'est l'objet de la leçon 50 questions : l'oral professionnel argumenté. Slogans, faux benchmarks et sur-promesses hors rôle éliminent un junior sérieux."
              }
            ]
          },
          "position": 8
        }
      ]
    },
    {
      "position": 20,
      "title": "Bibliothèque de 100 situations professionnelles",
      "description": "Vous vous entraînez sur cent situations distinctes de recruteur junior : pression manager, salaire, ghosting, discrimination, RGPD, négociation, IA, cooptation et incidents de process.",
      "lessons": [
        {
          "title": "Urgence, pression manager et cadrage du besoin",
          "description": "Dix situations sur le recadrage du délai, le brief incomplet et la pression opérationnelle.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 32,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À l'issue de cette leçon, vous savez recadrer une urgence sans mentir sur le délai, distinguer intérim de transition et CDI, et refuser de lancer un process sans informations minimales. Vous identifiez ce qui relève d'une bonne pratique, d'une politique interne et d'une obligation légale."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le recruteur junior n'est pas un prestataire d'exécution du manager. Son premier geste est le cadrage : missions, critères, budget, calendrier, alternatives (interne, intérim, redéploiement). Promettre une date d'arrivée que le marché ne permet pas pousse à baisser la garde, à rédiger une annonce trompeuse et à créer un conflit de confiance.\n\nL'urgence opérationnelle est réelle dans l'industrie et les services. Elle se traite par un plan (remplacement temporaire, priorisation des must-have, calendrier de marché), pas par une promesse. Une allégation fausse ou susceptible d'induire en erreur sur l'existence, la nature ou le délai de l'emploi est interdite (Code du travail, L. 5331-3)."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Pour chaque situation : lisez le contexte, choisissez une option, puis comparez avec la conduite recommandée. Qualifiez toujours : obligation légale, recommandation d'autorité, politique interne, bonne pratique. Ne jamais inventer un délai légal. Ne jamais recommander de mentir au manager ou au candidat."
            },
            {
              "block_type": "heading",
              "content": "Bibliothèque de situations S01 à S10"
            },
            {
              "block_type": "heading",
              "content": "S01 — Le manager veut quelqu'un pour lundi"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nVous êtes chargé de recrutement junior dans une PME industrielle de 70 salariés, près de Roubaix. Mardi 9 h, le responsable d'atelier vous appelle : un coordinateur de production a annoncé son départ, le préavis n'est pas encore formalisé, et il vous demande « quelqu'un opérationnel lundi, même en intérim, peu importe le profil pourvu qu'il tienne le planning ». Le poste n'a pas de fiche à jour. Le salaire n'est pas cadré. Le directeur industriel n'est pas informé. Vous n'avez aucun vivier immédiat sur ce métier.\n\nQUESTION\nQuelle conduite adoptez-vous en priorité ?\n\nA. Lancer une annonce générique dans l'heure et envoyer les trois premiers CV au manager.\nB. Recadrer le délai, recenser les informations manquantes et proposer un plan réaliste (intérim de transition vs CDI), sans promettre une embauche pour lundi.\nC. Promettre un CDI pour lundi afin de rassurer le manager, puis ajuster ensuite.\nD. Attendre que le démissionnaire parte pour commencer, afin de ne pas faire de vagues."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Vous distinguez l'urgence opérationnelle (remplacement temporaire possible via l'intérim, en lien avec les RH) et le recrutement pérenne (brief, critères, délai de marché). Vous ne promettez pas une date d'arrivée que vous ne maîtrisez pas.\n\nJUSTIFICATION : un recrutement junior ne fabrique pas un candidat en cinq jours. Promettre lundi crée une attente intenable et pousse à baisser la garde sur les critères.\n\nRISQUES : promesse irréaliste, mauvaise embauche, annonce trompeuse sur le délai.\n\nERREURS FRÉQUENTES : dire oui pour plaire ; lancer un process sans budget ni missions ; confondre intérim d'attente et CDI.\n\nQUALIFICATION : bonne pratique (cadrage) ; obligation légale si l'annonce contient des allégations trompeuses (L. 5331-3).\n\nRÉFÉRENCE : legal-sources.json, L5331-3."
            },
            {
              "block_type": "heading",
              "content": "S02 — Brief gonflé : bac+5 et dix ans pour un poste de coordination"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nDans une ETI agroalimentaire de 400 salariés (Arras), le chef de service logistique vous demande un « coordinateur supply, bac+5, dix ans d'expérience WMS, anglais courant, management d'équipe, six sigma, mobilité internationale ». En recoupant avec les missions décrites, il s'agit d'animer un planning, relayer les retards transporteurs et fiabiliser un tableau de bord. Le salaire visé est celui d'un profil confirmé intermédiaire, pas d'un expert senior. Deux recrutements similaires ont échoué l'an dernier faute de candidats.\n\nQUESTION\nQue faites-vous avant de publier ?\n\nA. Publier le brief tel quel : c'est le manager qui connaît le métier.\nB. Challenger les must-have, séparer le souhaitable du nécessaire, et proposer une version réaliste du profil.\nC. Baisser secrètement les critères dans l'annonce sans le dire au manager.\nD. Exiger un bac+5 uniquement, le reste étant négociable à l'entretien."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Vous challengez le brief par les missions réelles. Vous proposez des must-have (pilotage planning, WMS de base, relation transporteurs) et des nice-to-have (six sigma, anglais courant si 90 % des flux sont France).\n\nJUSTIFICATION : un profil sur-spécifié vide le vivier et allonge le délai. Mentir au manager ou publier un profil décorrélé des missions crée un écart d'attente.\n\nRISQUES : zéro candidature, frustration manager, discrimination indirecte si le diplôme est exigé sans lien nécessaire avec l'emploi (L. 1221-6 : informations en lien direct avec l'emploi).\n\nERREURS FRÉQUENTES : copier-coller le brief ; « c'est le métier du manager » ; baisser les critères en cachette.\n\nQUALIFICATION : bonne pratique ; L. 1221-6 encadre ce que l'on peut exiger du candidat, pas le droit du manager à rêver un profil.\n\nRÉFÉRENCE : legal-sources.json, L1221-6."
            },
            {
              "block_type": "heading",
              "content": "S03 — Fourchette salariale nettement sous le marché"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nStartup industrielle de 45 personnes (Lille). Le fondateur veut un responsable qualité « à 32 k€, c'est déjà bien, on a une baby-foot et du télétravail ». Vos recherches internes (offres comparables, retours de process récents, fourchettes RH) montrent que les profils tenant vraiment le poste se situent plutôt 8 à 12 k€ au-dessus. Le fondateur refuse d'ouvrir la fourchette. Il vous demande de « trouver quelqu'un de motivé par le projet ».\n\nQUESTION\nQuelle est la conduite professionnelle ?\n\nA. Publier sans fourchette et laisser le candidat découvrir le salaire en fin de process.\nB. Documenter l'écart, alerter par écrit le manager et RH, et ne pas sur-vendre la rémunération dans l'annonce.\nC. Indiquer 38-42 k€ dans l'annonce pour attirer, puis « recadrer » à 32 k€ en entretien.\nD. Refuser tout process tant que le salaire n'est pas aligné marché."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Vous objectivatez l'écart (données internes, pas de statistique inventée), vous alertez, vous proposez des leviers (variable, évolution à 12 mois, intitulé, périmètre). Vous ne mentez pas sur la rémunération.\n\nJUSTIFICATION : une allégation trompeuse sur la rémunération est interdite (L. 5331-3). Cacher le salaire jusqu'au bout fait perdre des candidats et dégrade la marque employeur. Bloquer tout process peut être disproportionné si RH et direction assument le risque de délai.\n\nRISQUES : désistements tardifs, allégation trompeuse, temps perdu.\n\nERREURS FRÉQUENTES : gonfler l'annonce ; culpabiliser le candidat « pas assez passionné ».\n\nQUALIFICATION : obligation légale (L. 5331-3 sur les allégations) ; indiquer le salaire dans l'offre n'est pas (encore) une obligation interne française consolidée à la date de vérification (directive UE 2023/970 en transposition) — bonne pratique / future obligation. Ne pas affirmer qu'il est déjà obligatoire de l'afficher.\n\nRÉFÉRENCE : L5331-3, UE-transparence-salariale."
            },
            {
              "block_type": "heading",
              "content": "S04 — Le manager refuse de donner le budget"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nETI de services informatiques (Lyon). Vous briefez un manager qui « n'a pas le droit de parler salaire » et vous demande de sourcer « les meilleurs ». Les RH vous confirment qu'une fourchette existe mais que ce manager la communique rarement. Deux candidats ont déjà quitté le process au stade offre, furieux de l'écart.\n\nQUESTION\nQue faites-vous ?\n\nA. Sourcer sans fourchette : le salaire se discute toujours à la fin.\nB. Exiger de RH la fourchette avant de lancer, et convenir avec le manager du moment où elle est dite au candidat.\nC. Inventer une fourchette « un peu large » pour débloquer les approches.\nD. Demander au candidat sa prétention et caler l'offre dessus, sans budget."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Pas de process sérieux sans fourchette connue du recruteur. Vous ne l'inventez pas. Vous alignez manager et RH sur le moment de la communication (bonne pratique : tôt, au plus tard en préqual).\n\nJUSTIFICATION : sans budget, vous perdez du temps, vous créez de la frustration et vous prenez le risque d'une offre hors cadre.\n\nRISQUES : process à vide, conflit d'autorité recruteur / manager / RH.\n\nERREURS FRÉQUENTES : inventer une fourchette ; tout reporter à l'offre.\n\nQUALIFICATION : bonne pratique et politique interne (le budget appartient à l'employeur). Obligation légale si vous affirmez un salaire faux (L. 5331-3)."
            },
            {
              "block_type": "heading",
              "content": "S05 — Recrutement lancé sans fiche de poste"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nPME du BTP (50 salariés, Dunkerque). Le directeur d'agence vous dit : « On a besoin d'un conducteur de travaux, tu connais, tu as déjà recruté ça. Sors une annonce. » Les deux derniers conducteurs n'avaient pas le même périmètre (l'un encadrait 8 compagnons, l'autre gérait surtout les sous-traitants et la relation client). Aucun document écrit.\n\nQUESTION\nQuelle est la priorité ?\n\nA. Réutiliser l'annonce de l'an dernier pour gagner 48 heures.\nB. Organiser un recueil écrit (missions, équipe, déplacements, rémunération, critères) avant toute diffusion.\nC. Publier une annonce large et préciser le poste en entretien.\nD. Demander au directeur de vous dicter l'annonce au téléphone et la mettre en ligne tel quel."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Une fiche de poste n'est pas un luxe documentaire : elle aligne le manager, le recruteur, l'annonce et la grille d'évaluation.\n\nJUSTIFICATION : sans cadrage, chaque candidat est jugé sur des critères changeants. L'annonce risque d'être inexacte (L. 5331-3).\n\nRISQUES : discrimination par critères implicites (« je le vois bien sur les chantiers ») ; écart d'attente.\n\nERREURS FRÉQUENTES : recyclage d'annonce ; « on verra en entretien ».\n\nQUALIFICATION : bonne pratique. L'offre ne doit pas induire en erreur (L. 5331-3). L. 1221-8 : le candidat est informé des méthodes utilisées.\n\nRÉFÉRENCE : L5331-3, L1221-8."
            },
            {
              "block_type": "heading",
              "content": "S06 — Le manager change le besoin en cours de process"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nCabinet interne d'une ETI industrielle. Vous avez déjà préqualifié quatre personnes sur un poste de technicien méthodes. Le manager vous écrit : « En fait on veut plutôt un profil automatisme, et idéalement de l'anglais. » Les quatre candidats ont un rendez-vous planifié. L'annonce en ligne décrit encore le premier besoin.\n\nQUESTION\nQue faites-vous ?\n\nA. Convoquer quand même et juger « à l'instinct » si les gens peuvent basculer.\nB. Geler les entretiens, requalifier le besoin par écrit, informer les candidats de l'évolution, et ne pas les évaluer sur des critères non communiqués.\nC. Annuler silencieusement les rendez-vous et republier une nouvelle annonce.\nD. Ajouter l'anglais et l'automatisme comme critères « bonus » sans rien dire."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Un changement de besoin n'est pas un crime ; le cacher en est un, professionnellement. Vous documentez, vous informez, vous évitez d'évaluer sur des critères secrets.\n\nJUSTIFICATION : L. 1221-8 et L. 1221-9 : méthodes pertinentes et information préalable. L. 5331-3 : l'annonce ne doit pas induire en erreur.\n\nRISQUES : perte de temps candidat, grief de manque de transparence, biais.\n\nERREURS FRÉQUENTES : « on verra bien » ; ghosting des convoqués.\n\nQUALIFICATION : bonne pratique + obligations L. 1221-8, L. 1221-9, L. 5331-3."
            },
            {
              "block_type": "heading",
              "content": "S07 — Pression pour « closer » avant une revue de direction"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nVous êtes junior en Talent Acquisition dans une startup (Paris). Votre N+1 vous demande d'avoir « un signed offer avant le COMEX de jeudi ». Il reste un finaliste, des références non faites, et le manager n'a pas tranché entre deux personnes. On vous suggère d'envoyer une proposition « pour faire avancer ».\n\nQUESTION\nQuelle conduite ?\n\nA. Envoyer l'offre au plus disponible des deux pour tenir le COMEX.\nB. Refuser de formuler une offre tant que la décision n'est pas cadrée, et proposer un point de décision accéléré mais complet.\nC. Envoyer les deux offres en parallèle, « le premier qui signe gagne ».\nD. Promettre oralement le poste au finaliste et rédiger l'écrit après le COMEX."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Le calendrier politique n'autorise pas une offre bancale, encore moins deux offres concurrentes. Une promesse orale mal maîtrisée peut être requalifiée selon les termes employés (offre vs promesse unilatérale — voir Service-Public F39588).\n\nJUSTIFICATION : vous protégez l'entreprise et le candidat. Un COMEX n'est pas une cause réelle d'embauche précipitée.\n\nRISQUES : double embauche, promesse mal calée, discrimination si le choix se fait au « plus disponible ».\n\nERREURS FRÉQUENTES : closer pour faire plaisir ; oral « tu as le poste » sans écrit validé RH.\n\nQUALIFICATION : bonne pratique ; vigilance juridique sur l'écrit d'embauche (SP-F39588). Politique interne : qui signe les offres.\n\nRÉFÉRENCE : SP-F39588."
            },
            {
              "block_type": "heading",
              "content": "S08 — Le manager veut « le meilleur » sans critères"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nPME de services (90 salariés, Nantes). Le directeur commercial vous dit : « Trouve-moi un business developer, le meilleur. Je saurai le reconnaître. » Il refuse une grille. Lors du dernier recrutement, il a écarté une candidate après 8 minutes « parce qu'elle n'avait pas le spark ».\n\nQUESTION\nQue faites-vous ?\n\nA. Lui faire confiance : c'est lui qui va manager la personne.\nB. Imposer une grille minimale (missions, résultats attendus, critères observables) avant tout entretien, et documenter les écarts.\nC. Laisser le spark et vous concentrer sur le sourcing.\nD. Filtrer vous-même les profils « qui plairont » (âge, look, école)."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Sans critères observables, le recrutement devient un jugement d'affinité, terrain privilégié des discriminations (L. 1132-1 : apparence, âge, sexe, origine, etc.).\n\nJUSTIFICATION : votre rôle est d'objectiver. Vous n'êtes pas un obstacle ; vous êtes le garde-fou.\n\nRISQUES : discrimination, inégalité de traitement, impossibilité de motiver un refus.\n\nERREURS FRÉQUENTES : anticiper les goûts du manager ; copier son vocabulaire flou.\n\nQUALIFICATION : obligation légale de non-discrimination (L. 1132-1) ; bonne pratique d'évaluation structurée (L. 1221-9 : méthodes pertinentes).\n\nRÉFÉRENCE : L1132-1, L1221-9."
            },
            {
              "block_type": "heading",
              "content": "S09 — Urgence réelle après un arrêt brutal"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nIndustrie (ETI, 600 salariés, Saint-Nazaire). Un responsable maintenance est en arrêt, la durée est inconnue, le service est en 3×8. Le directeur vous demande un CDD de remplacement « tout de suite ». Les RH confirment le besoin. Le manager veut coller le CDD sur la fiche du titulaire, y compris des habilitations longues à obtenir.\n\nQUESTION\nQuelle conduite ?\n\nA. Promettre un CDD opérationnel sous 10 jours, habilitations comprises.\nB. Cadrer ce qui est réellement tenable en CDD de remplacement, les habilitations critiques, et un calendrier honnête, en lien avec RH.\nC. Lancer un CDI : « au moins on règle le sujet ».\nD. Attendre la reprise du titulaire pour ne pas embaucher « pour rien »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. L'urgence est réelle. Vous ne promettez pas l'impossible (habilitations). Le choix CDD de remplacement vs autres contrats est une décision RH/employeur, pas un bricolage du junior.\n\nJUSTIFICATION : honnêteté du délai + pertinence du contrat. Ne pas inventer un délai légal de recrutement.\n\nRISQUES : embauche non opérationnelle, mauvaise qualification de contrat, surcharge du service.\n\nERREURS FRÉQUENTES : transformer un remplacement en CDI « pour simplifier » sans RH ; promettre les habilitations.\n\nQUALIFICATION : bonne pratique ; politique interne / RH sur le type de contrat. Ne pas inventer de délai légal d'embauche."
            },
            {
              "block_type": "heading",
              "content": "S10 — Le manager veut voir « tous les CV » sans présélection"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nPME retail (120 salariés). La responsable de magasin exige de recevoir tous les CV, y compris hors critères, « pour ne rater personne ». Elle n'a pas le temps de les lire. Elle vous a déjà reproché d'avoir « filtré trop dur » alors que vous aviez écarté des candidatures sans lien avec l'emploi.\n\nQUESTION\nQue faites-vous ?\n\nA. Transférer l'intégralité de la CVthèque en pièce jointe.\nB. Convenir d'une grille de présélection écrite, envoyer un flot qualifié, et tracer les écarts pour les candidatures hors sujet.\nC. Ne plus filtrer du tout pour éviter le conflit.\nD. Écarter silencieusement les profils qui « ne lui plairont pas » (âge, photo, adresse)."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. La présélection est votre métier, pas une censure. Une grille écrite protège le manager et vous. Filtrer sur des critères protégés est interdit (L. 1132-1).\n\nJUSTIFICATION : tout envoyer noie la décision. Ne plus filtrer vous fait perdre votre rôle. Filtrer sur la photo ou l'âge est discriminatoire.\n\nRISQUES : discrimination, surcharge, grief de tri illicite.\n\nERREURS FRÉQUENTES : « pour lui faire plaisir » ; tri esthétique.\n\nQUALIFICATION : obligation L. 1132-1 ; L. 1221-6 (informations en lien avec l'emploi) ; bonne pratique de scoring.\n\nRÉFÉRENCE : L1132-1, L1221-6."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Dire oui pour être aimé. Promettre une date. Lancer sans budget. Recyclage d'annonce. Filtrer sur des goûts. Mentir au manager « pour son bien ». Confondre urgence du terrain et qualité minimale d'un CDI."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Reprenez S01 et S03. Rédigez en dix lignes le message que vous enverriez au manager : faits, écart, options, ce que vous ne ferez pas (mentir sur le salaire ou le délai). Comparez ensuite avec la conduite recommandée."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Un bon message nomme le fait (« fourchette 32 k€ vs retours internes plutôt 8 à 12 k€ au-dessus »), propose des options (ouvrir, réduire le périmètre, intérim de transition), et refuse explicitement l'allégation trompeuse. Un mauvais message culpabilise, invente un « salaire marché officiel », ou promet un miracle."
            }
          ],
          "position": 0
        },
        {
          "title": "Salaire, budget, prétentions et négociation",
          "description": "Dix situations sur l'écart au marché, la prétention hors budget, la négo et les avantages non confirmés.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 30,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez traiter un écart salarial sans mentir, préparer une négociation dans le cadre RH, et distinguer une offre d'une promesse. Vous n'inventez ni fourchette ni avantage."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La rémunération est un critère de décision autant qu'un risque juridique si elle est présentée de façon trompeuse. Le recruteur junior n'est pas décideur du budget : il alerte, documente, propose des leviers (variable, 12 mois, périmètre, titre) et prépare la décision. Une « promesse » mal rédigée peut valoir contrat ; une offre est rétractable dans les conditions rappelées par Service-Public (F39588), sous réserve des termes employés. Faites valider tout écrit par les RH."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Dès la préqual : prétention, fourchette autorisée, leviers. Jamais de chiffre inventé. Jamais d'avantage « on verra ». Tout écart est remonté avant l'entretien final."
            },
            {
              "block_type": "heading",
              "content": "Bibliothèque de situations S11 à S20"
            },
            {
              "block_type": "heading",
              "content": "S11 — Prétention au-dessus du budget"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nPME industrielle (85 salariés). Un profil rare en WMS demande 42 k€. La fourchette validée est 34-37 k€. Le manager dit : « Fais-le venir, on verra, il baissera. » Le candidat a une autre piste au même niveau de prétention. Vous n'avez aucun levier variable validé.\n\nQUESTION\nQuelle conduite ?\n\nA. Le convoquer en taisant la fourchette pour « créer l'envie ».\nB. Lui indiquer honnêtement la fourchette avant un entretien long, et ne poursuivre que s'il accepte d'explorer le cadre ou si RH ouvre le budget.\nC. Lui dire que le poste est à 42 k€ pour le faire venir.\nD. Le recaler immédiatement sans en parler au manager."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Transparence précoce. Poursuivre en silence gaspille le temps des deux côtés et prépare un désistement à l'offre.\n\nJUSTIFICATION : L. 5331-3 interdit d'induire en erreur sur la rémunération. Mentir à 42 k€ est une faute professionnelle.\n\nRISQUES : désistement tardif, conflit, allégation trompeuse.\n\nERREURS FRÉQUENTES : « il baissera » ; gonfler le chiffre.\n\nQUALIFICATION : obligation L. 5331-3 ; bonne pratique de transparence. Affichage du salaire dans l'annonce : pas (encore) obligation interne française consolidée (directive UE en transposition).\n\nRÉFÉRENCE : L5331-3, UE-transparence-salariale."
            },
            {
              "block_type": "heading",
              "content": "S12 — Négociation salariale : le candidat demande +3 k€"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nAprès une proposition écrite à 36 k€ (haut de fourchette validée), le finaliste demande 39 k€ et un 13e mois. Le manager dit « ok pour 39 si tu closes demain ». Les RH n'ont pas validé. Le 13e mois n'existe pas dans la politique de l'entreprise.\n\nQUESTION\nQue faites-vous ?\n\nA. Confirmer 39 k€ et le 13e mois par e-mail pour closer.\nB. Suspendre, faire valider budget et avantages par RH, et répondre sans promettre ce qui n'existe pas.\nC. Dire que c'est d'accord « en interne » et que l'écrit suivra.\nD. Menacer le candidat de perdre le poste s'il négocie."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Vous n'êtes pas signataire. Un e-mail trop affirmatif peut s'analyser comme une offre, voire davantage selon les termes (SP-F39588).\n\nJUSTIFICATION : le 13e mois n'est pas un levier improvisé. La précipitation du manager ne crée pas une politique RH.\n\nRISQUES : promesse non tenue, inégalité de traitement, écrit trop engageant.\n\nERREURS FRÉQUENTES : closer à l'oral ; inventer un avantage.\n\nQUALIFICATION : politique interne (qui valide) ; vigilance SP-F39588 ; bonne pratique d'équité interne.\n\nRÉFÉRENCE : SP-F39588."
            },
            {
              "block_type": "heading",
              "content": "S13 — Le candidat demande le salaire des collègues"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nEn préqual, une candidate demande : « Combien gagne la personne qui fait le même métier dans l'équipe ? » Le manager vous a dit de ne jamais parler des salaires individuels. La fourchette du poste est communicable.\n\nQUESTION\nQuelle réponse ?\n\nA. Donner le salaire du collègue : la transparence, c'est l'avenir.\nB. Refuser de communiquer un salaire individuel, et indiquer la fourchette du poste ainsi que les critères d'évolution, selon ce que RH autorise.\nC. Inventer une fourchette large pour ne pas se fermer.\nD. Répondre que tout le monde est au SMIC plus un variable."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Un salaire individuel d'un salarié n'est pas une information de recrutement à divulguer. La fourchette du poste, elle, est un outil légitime si elle est exacte.\n\nJUSTIFICATION : confidentialité des données d'un tiers (RGPD / loyauté) + L. 5331-3 si vous inventez. La directive transparence salariale est en transposition : ne pas affirmer une obligation française d'afficher déjà le salaire, ni un droit du candidat à connaître le bulletin d'un collègue.\n\nRISQUES : violation de confidentialité, allégation fausse.\n\nERREURS FRÉQUENTES : « transparence » mal comprise ; mensonge.\n\nQUALIFICATION : politique interne + protection des données d'autrui ; L. 5331-3.\n\nRÉFÉRENCE : CNIL-guide, UE-transparence-salariale, L5331-3."
            },
            {
              "block_type": "heading",
              "content": "S14 — Avantages promis par le manager, non confirmés RH"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nLe manager a dit en entretien : « Ici tout le monde a deux jours de télétravail et une voiture. » Les RH vous indiquent : télétravail un jour, pas de véhicule sur ce poste. Le candidat vous écrit pour « confirmer les deux jours et la voiture avant de démissionner ».\n\nQUESTION\nQue faites-vous ?\n\nA. Confirmer pour ne pas le perdre, on régularisera.\nB. Rectifier par écrit ce qui est réellement ouvert, alerter RH et manager, et ne pas laisser une promesse fausse circuler.\nC. Ne pas répondre, le contrat tranchera.\nD. Dire que le manager a raison, les RH sont trop rigides."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Vous corrigez. Vous ne laissez pas le candidat démissionner sur une base fausse. Vous recadrez le manager.\n\nJUSTIFICATION : allégation trompeuse (L. 5331-3) et risque d'écrit engageant. Ne pas répondre est une forme de laisser-faire.\n\nRISQUES : contentieux, rupture de confiance, départ immédiat après J1.\n\nERREURS FRÉQUENTES : « le contrat corrigera » ; allégeance au manager.\n\nQUALIFICATION : obligation de ne pas induire en erreur (L. 5331-3) ; politique interne avantages.\n\nRÉFÉRENCE : L5331-3, SP-F39588."
            },
            {
              "block_type": "heading",
              "content": "S15 — Variable commercial irréaliste dans l'annonce"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nLe directeur des ventes veut écrire « jusqu'à 80 k€ à l'année » pour un poste dont le fixe est 32 k€ et dont aucun commercial n'a dépassé 48 k€ total les trois dernières années. L'objectif « 80 » suppose un chiffre d'affaires jamais atteint sur le secteur.\n\nQUESTION\nQuelle conduite ?\n\nA. Publier 80 k€ : c'est un maximum théorique.\nB. Refuser l'allégation, proposer une formulation exacte (fixe + variable selon objectifs, exemples de réalisé si RH l'autorise), sans maximum fantaisiste.\nC. Mettre 80 k€ en petit dans l'annonce et expliquer à l'entretien.\nD. Ne pas parler de rémunération du tout."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Un maximum jamais observé, présenté comme accessible, est susceptible d'induire en erreur (L. 5331-3).\n\nJUSTIFICATION : vous protégez l'entreprise. Le silence total n'est pas illégal en soi à ce jour sur l'affichage du salaire, mais ce n'est pas une solution au mensonge.\n\nRISQUES : contentieux, marque employeur, turnover J+90.\n\nERREURS FRÉQUENTES : « tout le monde fait ça » ; petit caractère.\n\nQUALIFICATION : obligation L. 5331-3.\n\nRÉFÉRENCE : L5331-3."
            },
            {
              "block_type": "heading",
              "content": "S16 — Candidat qui négocie le télétravail hors politique"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nLe poste est annoncé « 1 jour de télétravail ». Le finaliste, qui habite à 2 h de train, demande 4 jours. Le manager est d'accord « s'il performe ». Aucune exception n'est écrite. D'autres salariés du service sont à 1 jour.\n\nQUESTION\nQue faites-vous ?\n\nA. Accorder 4 jours par e-mail de recruteur.\nB. Remonter à RH : exception possible, équité interne, formalisation, et ne rien confirmer tant que ce n'est pas validé.\nC. Dire non de vous-même sans en parler : la politique est la politique.\nD. Promettre 4 jours les trois premiers mois « pour voir »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Une exception managériale orale crée de l'iniquité et un écrit à risque. Vous n'êtes pas le décideur de la politique de télétravail.\n\nJUSTIFICATION : équité interne + validation RH. Un « pour voir » est une promesse déguisée.\n\nRISQUES : précédent, conflictualité d'équipe, offre ambiguë.\n\nERREURS FRÉQUENTES : closer sur un avantage que vous ne tenez pas.\n\nQUALIFICATION : politique interne ; bonne pratique d'équité ; vigilance SP-F39588 sur l'écrit."
            },
            {
              "block_type": "heading",
              "content": "S17 — Counter-offer de l'employeur actuel"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nVous avez une acceptation orale à 38 k€. Le lendemain, le candidat rappelle : son employeur aligne à 41 k€. Il hésite. Le manager de votre côté dit « on ne s'aligne pas, c'est un mercenaire ». Les RH n'ont pas encore envoyé l'écrit.\n\nQUESTION\nQuelle conduite ?\n\nA. Le traiter de mercenaire et clore le dossier.\nB. Rester factuel : rappeler l'offre réelle, les leviers non salariaux vrais, ne pas dénigrer l'employeur actuel, et laisser une décision dans un délai raisonnable cadré.\nC. Monter immédiatement à 41 k€ sans RH.\nD. Dire que l'écrit est déjà envoyé alors qu'il ne l'est pas, pour le bloquer."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Une counter-offer est fréquente. Le mot « mercenaire » n'est pas une évaluation. Mentir sur un écrit est une faute.\n\nJUSTIFICATION : vous ne dénigrez pas. Vous ne surenchérissez pas seul. Vous ne mentez pas.\n\nRISQUES : offre non autorisée ; diffamation / déloyauté ; candidat qui reste par peur.\n\nERREURS FRÉQUENTES : chantage ; alignement sauvage ; mensonge sur l'écrit.\n\nQUALIFICATION : bonne pratique ; politique interne de négo ; ne jamais mentir."
            },
            {
              "block_type": "heading",
              "content": "S18 — Profil pénurique unique, hors budget"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nMétier en tension (automaticien de nuit, usine 24/7). Un seul candidat tenable en trois semaines. Prétention 8 % au-dessus du max. Le manager dit « on ne peut pas s'arrêter ». La direction n'a pas encore arbitrée. Un intérimaire tient le poste depuis deux mois à un coût élevé.\n\nQUESTION\nQue faites-vous ?\n\nA. Promettre le salaire demandé « on fera passer ça ».\nB. Chiffrer l'écart, le comparer au coût de l'intérim et du poste vacant, et demander un arbitrage écrit avant toute promesse.\nC. Laisser partir le candidat pour « tenir la grille » sans alerter.\nD. Lui proposer un CDI au max puis un avenant « dès que possible »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Vous objectivatez. L'avenant vague est une promesse. Laisser partir sans alerte est une non-assistance managériale.\n\nJUSTIFICATION : décision d'employeur, pas de junior. L'intérim a un coût : c'est un argument interne, pas une menace au candidat.\n\nRISQUES : promesse hors cadre ; perte du seul profil ; avenant illusoire.\n\nERREURS FRÉQUENTES : « on fera passer » ; rigidité muette.\n\nQUALIFICATION : bonne pratique de business case interne ; politique salariale."
            },
            {
              "block_type": "heading",
              "content": "S19 — Le candidat refuse d'indiquer sa prétention"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nEn préqual, le candidat dit : « Donnez-moi d'abord votre fourchette, je ne me brade pas. » Vous avez une fourchette validée 33-37 k€. Le manager veut « tester le prix du marché » via les prétentions.\n\nQUESTION\nQuelle conduite ?\n\nA. Insister jusqu'à obtenir un chiffre, sinon écarter le candidat.\nB. Communiquer la fourchette autorisée, noter qu'il n'a pas d'autre prétention à ce stade, et poursuivre si le cadre lui convient.\nC. Inventer une fourchette plus basse pour le faire descendre.\nD. Écarter : un candidat qui ne donne pas de chiffre n'est pas sérieux."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. L. 1221-6 : on ne demande que ce qui a un lien avec l'emploi. La prétention est utile, pas un test de soumission. Mentir sur la fourchette est interdit (L. 5331-3).\n\nJUSTIFICATION : la transparence débloque. Écarter pour « non-soumission » n'est pas un critère professionnel.\n\nRISQUES : allégation trompeuse ; biais de docilité.\n\nERREURS FRÉQUENTES : marchandage ; écran de fumée.\n\nQUALIFICATION : L. 5331-3 ; bonne pratique. L. 1221-6.\n\nRÉFÉRENCE : L1221-6, L5331-3."
            },
            {
              "block_type": "heading",
              "content": "S20 — Égalité de traitement : deux finalistes, deux salaires"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nDeux finalistes de même niveau, mêmes missions. L'homme a demandé 38 k€, la femme 34 k€. Le manager dit : « On prend la femme à 34, on économise. » Les compétences évaluées sont équivalentes. La fourchette va jusqu'à 38.\n\nQUESTION\nQuelle conduite ?\n\nA. Suivre le manager : chacun a demandé ce qu'il voulait.\nB. Alerter RH : un écart fondé sur le sexe (ou sur une prétention elle-même biaisée par le sexe) expose à une discrimination. Proposer une rémunération alignée sur le poste, pas sur le genre.\nC. Monter la femme à 38 sans rien dire, pour « rétablir » seul.\nD. Recaler la femme et prendre l'homme « pour éviter le sujet »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. L. 1132-1 interdit d'écarter ou de traiter défavorablement notamment en raison du sexe. Vous n'arbitragez pas seul une politique salariale, vous alertez.\n\nJUSTIFICATION : « elle a demandé moins » n'efface pas le risque. Recaler pour éviter le sujet est aussi discriminatoire.\n\nRISQUES : discrimination à l'embauche, écart injustifié.\n\nERREURS FRÉQUENTES : optimisation budgétaire genrée ; rétablissement sauvage sans RH.\n\nQUALIFICATION : obligation légale L. 1132-1.\n\nRÉFÉRENCE : L1132-1."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Closer sans RH. Inventer un avantage. Utiliser la prétention comme test de caractère. Aligner deux salaires sur le genre. Promettre un avenant."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Rédigez la réponse écrite à S14 (rectification télétravail / voiture) en quinze lignes maximum, factuelle, sans accuser le candidat, avec copie du process interne à suivre."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Le message remercie, rappelle les éléments réellement ouverts, indique que les propos du manager ont été recadrés, propose un point, et ne confirme aucun avantage non validé. Il ne dit pas « ce n'était qu'une piste » si c'était une affirmation. Il ne demande pas au candidat de « faire confiance »."
            }
          ],
          "position": 1
        },
        {
          "title": "Relation candidat : ghosting, délais, offres concurrentes",
          "description": "Dix situations sur le respect des délais, le ghosting, l'autre offre, le désistement et la mise en attente.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 30,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous apprenez à tenir une relation candidat honnête : pas de silence, pas de file d'attente infinie, pas de mensonge sur le calendrier. Vous traitez une autre offre, un délai de réflexion et un désistement sans improvisation agressive."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le ghosting (absence de réponse après un engagement de process) n'est pas un outil de pouvoir. Il dégrade la marque employeur et, dans certains cas, laisse des données sans information claire. Garder plusieurs finalistes « au chaud » sans transparence n'est pas une stratégie : c'est un risque de désistement en chaîne et un traitement déloyal. Un candidat n'a pas d'obligation légale de motiver son désistement. L'employeur, s'il refuse, n'a pas toujours à motiver comme un licenciement ; pour autant, une demande de motif se traite avec prudence (faits professionnels, pas de critères protégés)."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Calendrier annoncé = calendrier tenu ou mis à jour. File d'attente : information, durée, alternative. Autre offre : accélération réelle ou retrait propre. Jamais de chantage. Jamais de « vous êtes le seul » si c'est faux."
            },
            {
              "block_type": "heading",
              "content": "Bibliothèque de situations S21 à S30"
            },
            {
              "block_type": "heading",
              "content": "S21 — Ghosting après un entretien"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nPME de services (60 salariés). Un candidat a passé 1 h 30 d'entretien. Vous lui aviez dit « retour sous cinq jours ». Le manager n'a pas donné son avis. Dix jours ont passé. Le candidat relance. Le manager vous dit « ignore, s'il est trop pressé ce n'est pas un bon profil ».\n\nQUESTION\nQuelle conduite ?\n\nA. Ne pas répondre : le silence teste la motivation.\nB. Répondre dans la journée, donner un état réel (décision non rendue) et un nouveau délai, tout en relançant le manager par écrit.\nC. Lui dire qu'il n'est pas retenu pour clore, alors que ce n'est pas tranché.\nD. Lui dire qu'il est le favori pour le faire patienter."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Vous devez une réponse, même imparfaite. Mentir (favori ou refus fictif) n'est pas une option.\n\nJUSTIFICATION : le silence n'est pas un critère d'évaluation. Un refus inventé peut vous priver d'un bon profil et est déloyal.\n\nRISQUES : marque employeur, perte du candidat, données laissées sans clôture claire.\n\nERREURS FRÉQUENTES : tester la motivation par le vide ; mensonge de confort.\n\nQUALIFICATION : bonne pratique professionnelle ; CNIL : information et loyauté du traitement (recommandation d'autorité).\n\nRÉFÉRENCE : CNIL-guide."
            },
            {
              "block_type": "heading",
              "content": "S22 — Le candidat ne répond plus après la proposition"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nVous avez envoyé une proposition écrite valable jusqu'à vendredi. Mardi, aucune réponse. Le manager panique et veut appeler toutes les heures. Un second finaliste attend une réponse promise « en fin de semaine ».\n\nQUESTION\nQue faites-vous ?\n\nA. Harceler d'appels jusqu'à obtenir un oui.\nB. Une relance courte et datée, un seul canal de trop, et préparer le plan B avec le second sans lui mentir sur sa position.\nC. Dire au second qu'il a le poste au cas où.\nD. Retirer l'offre immédiatement pour « se venger » du silence."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Une relance est légitime. Le harcèlement et la double attribution ne le sont pas. Retirer par piqué n'est pas une politique.\n\nJUSTIFICATION : l'offre a un délai. Service-Public rappelle que l'offre (au sens jurisprudentiel expliqué) peut être retirée avant acceptation dans le délai laissé ou un délai raisonnable ; la promesse unilatérale est un autre régime. Faites qualifier l'écrit par RH avant tout retrait (SP-F39588). Ne jouez pas au juriste isolé.\n\nRISQUES : double embauche, retrait mal calé, pressions.\n\nERREURS FRÉQUENTES : harcèlement ; offre parallèle mensongère.\n\nQUALIFICATION : bonne pratique + vigilance SP-F39588 (validation RH).\n\nRÉFÉRENCE : SP-F39588."
            },
            {
              "block_type": "heading",
              "content": "S23 — Le candidat a une autre offre"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nEn préqual, une candidate indique une offre concurrente à 48 h. Votre process prévoit encore un entretien manager la semaine suivante. Le manager est en salon professionnel.\n\nQUESTION\nQuelle conduite ?\n\nA. Lui dire de refuser l'autre offre, « on est presque sûrs ».\nB. Accélérer réellement ce qui est possible, ou la laisser partir proprement si le process ne peut pas bouger, sans lui demander de brûler l'autre pont sur une promesse molle.\nC. Inventer un entretien « déjà validé » pour la retenir.\nD. L'écarter : trop de contraintes."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Vous n'obtenez pas une démission ou un refus d'offre concurrente sur du vent.\n\nJUSTIFICATION : accélérer est professionnel ; mentir est une faute. Écarter parce qu'elle a une option est un biais de docilité.\n\nRISQUES : candidat sans rien ; réputation ; promesse orale.\n\nERREURS FRÉQUENTES : « on est presque sûrs » ; punir la transparence.\n\nQUALIFICATION : bonne pratique. Ne jamais recommander de mentir."
            },
            {
              "block_type": "heading",
              "content": "S24 — Finaliste qui demande deux semaines de réflexion"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nAprès l'offre, le finaliste demande deux semaines : il veut en parler à son conjoint et terminer un projet. Le manager dit « 48 h max, sinon on passe au suivant ». L'écrit RH laisse « un délai de réponse » non chiffré. Le second est solide mais pas équivalent.\n\nQUESTION\nQue faites-vous ?\n\nA. Accorder deux semaines sans condition ni point d'étape.\nB. Négocier un délai intermédiaire (par exemple quelques jours) avec un point d'étape, informer le second de façon honnête (process encore ouvert), et ne pas menacer.\nC. Retirer l'offre le soir même pour reprendre la main.\nD. Dire au second qu'il est choisi, tout en laissant le premier réfléchir."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Deux semaines peuvent être trop longues selon le marché ; 48 h peut être brutal. Vous cadrez. Vous ne doublez pas les promesses.\n\nJUSTIFICATION : pas de délai légal magique de réflexion à inventer. C'est un arbitrage process + écrit (SP-F39588 : délai laissé ou raisonnable pour une offre).\n\nRISQUES : perte des deux ; écrit ambigu.\n\nERREURS FRÉQUENTES : ultimatum humiliant ; double attribution.\n\nQUALIFICATION : bonne pratique ; politique interne ; SP-F39588.\n\nRÉFÉRENCE : SP-F39588."
            },
            {
              "block_type": "heading",
              "content": "S25 — Garder plusieurs personnes en attente"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nLe manager veut « trois yes en poche » avant de choisir, et vous demande de dire à chacun « vous êtes très bien positionné, on revient vite ». Aucune date. L'un des trois a déjà décliné une autre piste sur la foi de vos propos trop chauds.\n\nQUESTION\nQuelle conduite ?\n\nA. Obéir : c'est de la stratégie.\nB. Refuser les formulations mensongères, informer chacun de sa situation réelle (shortlist ouverte, pas de décision), et limiter la durée d'attente.\nC. Promettre le poste aux trois, le manager tranchera.\nD. Ne plus donner aucune information « pour rester neutre »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Une shortlist n'est pas une réserve de candidats trompés. Le silence n'est pas la neutralité.\n\nJUSTIFICATION : loyauté. Un « très bien positionné » répété à trois personnes est un piège.\n\nRISQUES : désistements, réputation, grief de mauvaise foi.\n\nERREURS FRÉQUENTES : infliger l'attente ; sur-vendre.\n\nQUALIFICATION : bonne pratique ; loyauté du traitement des données (CNIL).\n\nRÉFÉRENCE : CNIL-guide."
            },
            {
              "block_type": "heading",
              "content": "S26 — Désistement la veille de la prise de poste"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nLe candidat devait arriver lundi. Dimanche soir, il écrit : il reste chez lui, counter-offer + peur du changement. Le manager veut que vous « le fassiez honte » et que vous exigiez le remboursement des frais d'entretien. Aucune clause de ce type n'existe.\n\nQUESTION\nQue faites-vous ?\n\nA. Envoyer un message culpabilisant et exiger un remboursement.\nB. Accuser réception sobre, informer RH et manager, relancer le plan B, et ne pas inventer une pénalité.\nC. Menacer d'un procès pour promesse non tenue du candidat.\nD. Publier un commentaire négatif sur son profil LinkedIn."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Un désistement est un coup dur, pas un droit de punir. Vous n'inventez pas de créance. Vous ne diffamez pas.\n\nJUSTIFICATION : pas de délai légal ni de pénalité à inventer. La priorité est opérationnelle (plan B, intérim, second).\n\nRISQUES : diffamation, harcèlement, temps perdu en vengeance.\n\nERREURS FRÉQUENTES : message humiliant ; « on le poursuivra ».\n\nQUALIFICATION : bonne pratique ; ne pas inventer de sanction légale."
            },
            {
              "block_type": "heading",
              "content": "S27 — Demande de motif de refus par le candidat"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nAprès un entretien, vous notifiez un refus poli. Le candidat exige « le motif exact, les notes du manager et le classement ». Le manager a écrit dans le CRM : « Pas le feeling, un peu vieux pour l'équipe. »\n\nQUESTION\nQuelle conduite ?\n\nA. Transférer le commentaire brut du manager.\nB. Ne pas transmettre le commentaire discriminatoire, recadrer le manager, répondre au candidat sur des critères professionnels objectifs, et alerter RH.\nC. Ignorer : on ne doit jamais motiver.\nD. Inventer un motif (« poste gelé ») pour éviter le conflit."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Un motif lié à l'âge est une discrimination (L. 1132-1). Vous ne le « lavez » pas en le transmettant, vous ne le remplacez pas par un mensonge.\n\nJUSTIFICATION : droit d'accès RGPD ≠ droit à lire un commentaire illicite que vous laisseriez tel quel. Le droit d'accès s'exerce selon les règles CNIL / RGPD ; vous orientez vers le process RH prévu. Vous pouvez (et devez) corriger des données inexactes ou illicites dans vos outils.\n\nRISQUES : preuve de discrimination, mensonge, refus d'accès mal géré.\n\nERREURS FRÉQUENTES : copier-coller le CRM ; ghosting ; mensonge.\n\nQUALIFICATION : obligation L. 1132-1 ; RGPD / CNIL (droit d'accès, exactitude) ; bonne pratique de feedback factuel.\n\nRÉFÉRENCE : L1132-1, CNIL-guide."
            },
            {
              "block_type": "heading",
              "content": "S28 — Candidat qui demande un feedback trop détaillé"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nUne candidate non retenue après trois tours veut « le détail de chaque réponse STAR, la note de chacun des six intervieweurs et le CV du retenu ». Votre politique interne prévoit un feedback oral court, factuel, sans comparaison nominative.\n\nQUESTION\nQue faites-vous ?\n\nA. Envoyer le dossier complet des six intervieweurs.\nB. Proposer un feedback professionnel limité aux écarts observés sur le poste, sans données d'autrui et sans notes brutes si la politique l'interdit.\nC. Ne rien dire pour « se protéger juridiquement ».\nD. Lui lire le CV du retenu en masquant le nom."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Le feedback est utile. Les données d'un tiers ne se partagent pas. Le silence total n'est pas une protection magique.\n\nJUSTIFICATION : RGPD (données d'autrui) + politique interne. Un feedback factuel réduit les malentendus.\n\nRISQUES : violation de données ; discrimination si le feedback glisse sur un critère protégé.\n\nERREURS FRÉQUENTES : trop ou trop peu ; comparaison nominative.\n\nQUALIFICATION : obligation RGPD vis-à-vis des tiers ; politique interne ; bonne pratique.\n\nRÉFÉRENCE : CNIL-guide."
            },
            {
              "block_type": "heading",
              "content": "S29 — Relance sourcing trop insistante"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nVotre N+1 vous demande d'appeler trois fois par jour un profil LinkedIn qui n'a pas répondu, puis de lui écrire via un compte personnel. Le profil a déjà indiqué « pas intéressé » en commentaire privé.\n\nQUESTION\nQuelle conduite ?\n\nA. Obéir : en sourcing, qui ne tente rien n'a rien.\nB. Arrêter les relances, tracer le refus, et ne pas contourner via un compte personnel.\nC. Lui envoyer un cadeau en message pour « humaniser ».\nD. Le faire relancer par un autre recruteur en se faisant passer pour une autre entreprise."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Un refus est un refus. Le compte personnel et l'identité d'emprunt sont déloyaux.\n\nJUSTIFICATION : CNIL / loyauté du traitement ; L. 1221-6 n'autorise pas de harceler. L'approche commerciale a une limite : le respect de la personne.\n\nRISQUES : harcèlement, atteinte à la vie privée, réputation.\n\nERREURS FRÉQUENTES : volume = qualité ; usurpation de canal.\n\nQUALIFICATION : bonne pratique ; recommandation CNIL (loyauté) ; politique interne éthique.\n\nRÉFÉRENCE : CNIL-guide."
            },
            {
              "block_type": "heading",
              "content": "S30 — Candidature spontanée hors process"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nUn profil très pertinent envoie une spontanée. Aucun poste ouvert. Le manager dit « garde-le au chaud six mois sans rien lui dire, on va peut-être créer un poste ». Le candidat demande ce que vous allez faire de son CV.\n\nQUESTION\nQuelle conduite ?\n\nA. Promettre un poste qui n'existe pas.\nB. Informer : pas de poste ouvert, durée et finalité de conservation, droit d'opposition, et ne le « chauffer » pas sur un poste fictif.\nC. Ne jamais répondre aux spontanéess.\nD. Le mettre en process d'un autre poste sans lien pour « occuper » le dossier."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Vivier possible si information et possibilité d'opposition (recommandation CNIL : jusqu'à 2 ans à compter du dernier contact — recommandation, pas une durée unique imposée par le RGPD lui-même).\n\nJUSTIFICATION : L. 5331-3 si vous laissez croire à un emploi inexistant. CNIL : information, durée, opposition.\n\nRISQUES : allégation trompeuse ; conservation opaque.\n\nERREURS FRÉQUENTES : « au chaud » silencieux ; poste fantôme.\n\nQUALIFICATION : L. 5331-3 ; recommandation CNIL vivier 2 ans ; obligation d'information RGPD.\n\nRÉFÉRENCE : CNIL-guide, CNIL-referentiel-2026, L5331-3."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Tester la motivation par le silence. Double promesse. Feedback copié du CRM illicite. Harcèlement de sourcing. Vivier fantôme."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Rédigez le message de S25 à chacun des trois candidats (trois variantes honnêtes, pas trois copies « vous êtes le meilleur »)."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Chaque message dit : shortlist de X personnes, pas de décision, prochaine date, possibilité de se retirer. Aucun « vous êtes notre priorité unique ». Le ton est respectueux, pas froidement juridique."
            }
          ],
          "position": 2
        },
        {
          "title": "Décision, notes égales, subjectivité et shortlist",
          "description": "Dix situations sur la comparaison des candidats, le manager subjectif et l'absence de profil parfait.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 30,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez départager deux notes égales sans critère illicite, recadrer un « je ne le sens pas », et recommander un profil imparfait plutôt que d'attendre l'introuvable."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "L'évaluation doit reposer sur des méthodes pertinentes au regard de l'emploi (L. 1221-9). Le feeling n'est pas interdit comme intuition à explorer ; il est interdit comme substitut à un critère protégé (âge, origine, apparence, sexe, etc.). Deux notes égales se départagent par des critères professionnels prévus, un entretien complémentaire, ou une mise en situation, pas par la photo ou le « fit culturel » flou."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Grille avant l'entretien. Notes après preuves. Écarts documentés. Recommandation écrite. Le manager décide, vous tracez."
            },
            {
              "block_type": "heading",
              "content": "Bibliothèque de situations S31 à S40"
            },
            {
              "block_type": "heading",
              "content": "S31 — Deux notes égales"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nDeux finalistes : 16/20 tous les deux sur la grille. L'un a un meilleur WMS, l'autre une meilleure communication client. Le manager dit : « Prends celui qui habite le plus près, ça coûtera moins d'absences. » Le lieu de résidence est un critère protégé (L. 1132-1).\n\nQUESTION\nQuelle conduite ?\n\nA. Choisir le plus proche : c'est du bon sens logistique.\nB. Refuser le critère de résidence, proposer un départage professionnel (mise en situation, références sur les must-have) et documenter.\nC. Choisir à pile ou face pour être « neutre ».\nD. Écarter les deux et relancer le sourcing."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Le lieu de résidence figure parmi les critères de discrimination (L. 1132-1). Un pile ou face n'est pas une méthode pertinente (L. 1221-9).\n\nJUSTIFICATION : on départage sur le poste. L'organisation des déplacements se discute en conditions de travail, pas comme filtre d'embauche illicite.\n\nRISQUES : discrimination ; décision inexpliquable.\n\nERREURS FRÉQUENTES : proximité = motivation ; relance de confort.\n\nQUALIFICATION : obligation L. 1132-1 ; L. 1221-9.\n\nRÉFÉRENCE : L1132-1, L1221-9."
            },
            {
              "block_type": "heading",
              "content": "S32 — Manager subjectif : « je ne le sens pas »"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nAprès 20 minutes, le manager coupe l'entretien : « Je ne le sens pas. » Le candidat a répondu de façon structurée aux questions métier. Aucune note n'est saisie. Le manager ajoute : « Il a un côté trop scolaire. »\n\nQUESTION\nQue faites-vous ?\n\nA. Clôturer le dossier immédiatement pour respecter le manager.\nB. Demander des faits observables, terminer ou replanifier un entretien structuré, et refuser de coder un refus sans critère.\nC. Mettre 8/20 d'autorité pour coller au feeling.\nD. Dire au candidat que le poste est gelé."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Vous traduisez le flou en faits (exemples, lacunes) ou vous ne validez pas le refus. Mentir sur un gel de poste est déloyal.\n\nJUSTIFICATION : L. 1221-9 (méthodes pertinentes) ; risque que « scolaire » masque l'âge, l'origine ou l'apparence (L. 1132-1).\n\nRISQUES : discrimination, process inéquitable.\n\nERREURS FRÉQUENTES : obéir au feeling ; falsifier la note ; mensonge de clôture.\n\nQUALIFICATION : L. 1221-9, L. 1132-1 ; bonne pratique.\n\nRÉFÉRENCE : L1132-1, L1221-9."
            },
            {
              "block_type": "heading",
              "content": "S33 — Aucun candidat parfait"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nAprès six semaines, trois profils tiennent 70 % des must-have, aucun 100 %. Le manager veut « continuer jusqu'au mouton à cinq pattes ». L'intérim de transition coûte cher. Les must-have n'ont pas été revus.\n\nQUESTION\nQuelle conduite ?\n\nA. Continuer indéfiniment : la qualité d'abord.\nB. Revoir les must-have, présenter les trois écarts, recommander le meilleur appariement formation/risque, et faire décider.\nC. Forcer le manager à prendre le premier CV du lot.\nD. Baisser secrètement les critères dans la grille pour faire un vainqueur."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Le parfait n'est pas un critère. Vous objectivatez le coût du vide. Vous ne truquez pas la grille.\n\nJUSTIFICATION : décision éclairée. Truquer les notes est une faute documentaire.\n\nRISQUES : poste vacant chronique ; biais ; perte des 70 %.\n\nERREURS FRÉQUENTES : quête infinie ; forçage ; fraude de scoring.\n\nQUALIFICATION : bonne pratique ; L. 1221-9 (pertinence)."
            },
            {
              "block_type": "heading",
              "content": "S34 — Candidat interne contre externe"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nUn magasinier interne pose sa candidature. Un externe est plus « propre » sur le papier. Le manager dit : « L'interne, s'il n'a pas le poste, il va se démotiver, prends-le. » Aucune politique de priorité interne écrite. L'interne a des écarts nets sur le WMS.\n\nQUESTION\nQue faites-vous ?\n\nA. Prendre l'interne pour la paix sociale.\nB. Évaluer les deux sur la même grille, expliciter la politique interne s'il y en a une, et ne pas offrir le poste comme une faveur.\nC. Écarter l'interne d'emblée « pour ne pas créer d'espoir ».\nD. Dire à l'externe que le poste est réservé, tout en le faisant passer des entretiens."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Mobilité interne : politique à clarifier, pas favoritisme. Faire passer un process faux à l'externe est déloyal (et L. 5331-3 si l'emploi n'est pas réellement ouvert).\n\nJUSTIFICATION : équité de traitement. L'interne a droit à un feedback vrai.\n\nRISQUES : favoritisme, discrimination inverse mal assumée, process potiche.\n\nERREURS FRÉQUENTES : paix sociale ; process alibi.\n\nQUALIFICATION : politique interne ; bonne pratique ; L. 5331-3 si emploi non réel.\n\nRÉFÉRENCE : L5331-3."
            },
            {
              "block_type": "heading",
              "content": "S35 — Shortlist : le manager ne veut voir qu'un CV"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nVous avez trois profils tenables. Le manager : « Envoie le meilleur, je n'ai pas le temps. » Votre politique interne demande une shortlist de trois avec écarts.\n\nQUESTION\nQuelle conduite ?\n\nA. N'envoyer qu'un CV pour être service-oriented.\nB. Envoyer une shortlist courte (2 ou 3) avec recommandation argumentée, et un créneau de 20 minutes plutôt qu'un dossier de 40 pages.\nC. Envoyer les 40 CV pour qu'il « sente ».\nD. Choisir seul et lancer l'offre."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Vous facilitez la décision, vous ne la confisquez pas, vous ne noyez pas.\n\nJUSTIFICATION : votre valeur est la comparaison. Décider seul n'est pas votre mandat (sauf délégation écrite).\n\nRISQUES : embauche non portée par le manager ; favoritisme.\n\nERREURS FRÉQUENTES : un seul CV « pour aller vite » ; 40 CV.\n\nQUALIFICATION : politique interne ; bonne pratique."
            },
            {
              "block_type": "heading",
              "content": "S36 — Références professionnelles négatives"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nUn ancien manager du candidat, contacté avec l'accord du candidat, dit : « Incapable, toujours malade, et puis son nom ne passe pas auprès des clients. » Le reste des références est bon. Le candidat n'a pas d'arrêt visible dans le CV.\n\nQUESTION\nQue faites-vous ?\n\nA. Écarter sur la santé et le nom.\nB. Écarter les propos sur la santé, le nom et les clients (critères protégés ou stéréotypes), recouper les faits professionnels vérifiables, et ne pas traiter une rumeur comme une preuve.\nC. Transmettre la citation brute au manager.\nD. Ignorer toutes les références désormais."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. État de santé, nom de famille : L. 1132-1. Une référence n'autorise pas un propos discriminatoire.\n\nJUSTIFICATION : vous recoupez les faits (délais, qualité de livrable) pas les stigmates.\n\nRISQUES : discrimination, diffamation, décision biaisée.\n\nERREURS FRÉQUENTES : copier la rumeur ; tout jeter.\n\nQUALIFICATION : obligation L. 1132-1 ; L. 1221-6 ; bonne pratique de recoupement.\n\nRÉFÉRENCE : L1132-1, L1221-6."
            },
            {
              "block_type": "heading",
              "content": "S37 — Scorecard incomplète après panel"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nSix personnes ont vu le candidat. Deux n'ont pas rempli la grille. L'une a mis « OK » dans le chat. Le manager veut décider ce soir.\n\nQUESTION\nQuelle conduite ?\n\nA. Décider avec ce qui est là.\nB. Exiger les grilles manquantes ou sortir du panel les avis non argumentés, puis décider.\nC. Faire la moyenne en mettant 10 par défaut aux absents.\nD. Donner plus de poids à celui qui a le plus haut coefficient hiérarchique, sans notes."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Un chat « OK » n'est pas une évaluation pertinente (L. 1221-9). La hiérarchie ne remplace pas la preuve.\n\nJUSTIFICATION : traçabilité et équité. Les absents ne votent pas par silence.\n\nRISQUES : décision inattaquable en apparence, indéfendable en faits.\n\nERREURS FRÉQUENTES : moyenne magique ; pouvoir du grade.\n\nQUALIFICATION : L. 1221-9 ; bonne pratique.\n\nRÉFÉRENCE : L1221-9."
            },
            {
              "block_type": "heading",
              "content": "S38 — Candidat surqualifié"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nUne ex-directrice supply postule à un poste de coordinateur. Le manager a peur qu'elle s'ennuie et parte. Il dit « trop chère, trop âgée, trop cadre ». L'âge est un critère protégé. Le salaire demandé est dans la fourchette.\n\nQUESTION\nQue faites-vous ?\n\nA. Écarter pour surqualification et âge.\nB. Évaluer le risque réel (motivation, rémunération, autonomie du poste) sans utiliser l'âge, et documenter un écart professionnel s'il existe.\nC. La convoquer pour « faire plaisir à RH diversité ».\nD. Lui proposer un stage pour « redescendre »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. La surqualification peut être un vrai sujet (ennui, coût, management d'un N+1 moins expérimenté). L'âge ne l'est pas comme critère (L. 1132-1).\n\nJUSTIFICATION : posez des questions de motivation et de périmètre. N'anticipez pas un départ sur un stéréotype d'âge.\n\nRISQUES : discrimination ; process alibi diversité.\n\nERREURS FRÉQUENTES : « trop âgée » ; entretien de façade.\n\nQUALIFICATION : obligation L. 1132-1 ; bonne pratique.\n\nRÉFÉRENCE : L1132-1."
            },
            {
              "block_type": "heading",
              "content": "S39 — Candidat hors sujet que le manager aime"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nUn commercial terrain a un CV hors cible pour un poste supply. Le manager l'a rencontré au golf et le veut en entretien prioritaire. Les autres attendent depuis 10 jours.\n\nQUESTION\nQuelle conduite ?\n\nA. Le mettre en tête de liste : réseau du manager.\nB. L'évaluer avec la même grille ; s'il est hors critères, le dire ; ne pas faire passer les autres après lui par faveur.\nC. Écarter sans regarder, par principe d'équité.\nD. Inventer un second poste pour lui."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Le réseau n'interdit pas une candidature ; il n'autorise pas un traitement de faveur opaque ni un poste fantôme (L. 5331-3).\n\nJUSTIFICATION : même grille. Transparence du calendrier pour les autres.\n\nRISQUES : cooptation déguisée, inéquité.\n\nERREURS FRÉQUENTES : file VIP ; refus de principe.\n\nQUALIFICATION : bonne pratique ; L. 5331-3 si poste créé pour la façade.\n\nRÉFÉRENCE : L5331-3."
            },
            {
              "block_type": "heading",
              "content": "S40 — Présentation shortlist au COMEX express"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nOn vous donne 6 minutes en COMEX pour trois finalistes. Votre N+1 vous demande d'enlever la femme de 54 ans « ça va faire trop de questions » et de ne montrer que deux hommes.\n\nQUESTION\nQue faites-vous ?\n\nA. Obéir pour protéger le COMEX.\nB. Refuser d'écarter sur l'âge, présenter les trois sur des critères professionnels, et alerter RH.\nC. Présenter les trois mais en dévalorisant oralement la candidate.\nD. Dire qu'il n'y a que deux candidats."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Écarter une personne en raison de l'âge est une discrimination (L. 1132-1). Mentir sur le nombre de finalistes est une faute.\n\nJUSTIFICATION : votre rôle n'est pas de pré-laver le COMEX des femmes de 54 ans.\n\nRISQUES : discrimination caractérisée, faux process.\n\nERREURS FRÉQUENTES : anticipation du biais du COMEX = reproduction du biais.\n\nQUALIFICATION : obligation L. 1132-1.\n\nRÉFÉRENCE : L1132-1."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Départager sur le domicile. Coder le feeling. Truquer la grille. Process alibi. Anticiper les biais du COMEX."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Pour S31, rédigez cinq lignes de recommandation au manager : deux écarts professionnels, une proposition de départage, un critère que vous refusez."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "La recommandation nomme WMS vs communication client, propose une mise en situation planning/relance transporteur, et refuse explicitement le lieu de résidence comme critère, en citant L. 1132-1 sans faire un cours de droit de vingt minutes."
            }
          ],
          "position": 3
        },
        {
          "title": "Non-discrimination et questions interdites",
          "description": "Dix situations sur les critères protégés, la grossesse, la photo, le handicap et les questions du manager.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 34,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez interrompre une question illicite, traiter une photo de CV, un handicap, une grossesse, un prénom, un signe religieux, sans « bon sens » qui viole L. 1132-1 et L. 1221-6."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "L. 1132-1 interdit d'écarter une personne d'un recrutement à raison de critères protégés (origine, sexe, grossesse, âge, handicap, apparence, nom, lieu de résidence, opinions, etc.). L. 1221-6 limite les informations demandées à celles qui ont un lien direct et nécessaire avec l'emploi. Une exception « le poste est physique donc on peut refuser une femme enceinte » est fausse. Un aménagement de poste se discute avec les acteurs compétents (RH, médecine du travail le moment venu), pas par un tri à l'embauche sur la santé ou la grossesse."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Question illicite : vous interrompez, vous recadrez, vous tracez. Vous ne riez pas. Vous ne « traduisez » pas la question en version soft pour obtenir l'info quand même."
            },
            {
              "block_type": "heading",
              "content": "Bibliothèque de situations S41 à S50"
            },
            {
              "block_type": "heading",
              "content": "S41 — Question sur une grossesse"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nEn entretien, le manager demande à une candidate : « Vous prévoyez des enfants bientôt ? Le poste est physique, on ne peut pas se permettre un arrêt. » La candidate vous regarder.\n\nQUESTION\nQuelle conduite ?\n\nA. Laisser le manager : le poste est physique, c'est du bon sens.\nB. Interrompre, indiquer que la question n'est pas autorisée, recentrer sur les aptitudes professionnelles, et reprendre avec RH.\nC. Reformuler : « Êtes-vous disponible les 24 prochains mois sans interruption ? »\nD. Noter la réponse pour « anticiper l'organisation »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Refuser une femme enceinte, y compris si le poste est physique, n'est pas une option légale. La grossesse et la situation de famille sont des critères protégés (L. 1132-1). La reformulation « disponible 24 mois » vise le même objet illicite.\n\nJUSTIFICATION : L. 1221-6 : seules les informations en lien avec l'emploi. L'organisation d'un arrêt se gère le moment venu, comme pour tout salarié.\n\nRISQUES : discrimination caractérisée, preuve dans la salle.\n\nERREURS FRÉQUENTES : exception « poste physique » ; question soft.\n\nQUALIFICATION : obligation légale L. 1132-1, L. 1221-6.\n\nRÉFÉRENCE : L1132-1, L1221-6."
            },
            {
              "block_type": "heading",
              "content": "S42 — Photo sur le CV"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nUn manager vous dit : « Enlève tous les CV sans photo, et ceux où la personne ne fait pas sérieuse. » Plusieurs CV ont une photo. L'un d'eux montre une personne noire ; le manager a déjà commenté « ça va pas passer avec les clients du Nord ».\n\nQUESTION\nQue faites-vous ?\n\nA. Trier sur la photo : l'image fait partie du métier.\nB. Refuser tout tri sur la photo ou l'apparence, évaluer les compétences, et alerter RH sur le propos relatif aux clients.\nC. Garder les photos mais « ne pas s'en servir » tout en les laissant au manager.\nD. Exiger une photo de tous pour égaliser."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Apparence physique et origine (vraie ou supposée) sont protégées (L. 1132-1). Exiger une photo n'égalise rien : cela augmente le risque. Vous ne pouvez pas « ne pas vous en servir » si vous la laissez comme filtre.\n\nJUSTIFICATION : L. 1221-6 : la photo n'est en général pas une information nécessaire à l'appréciation des aptitudes (hors métiers d'apparence très spécifiques, non concernés ici).\n\nRISQUES : discrimination raciale et d'apparence.\n\nERREURS FRÉQUENTES : « les clients ne sont pas prêts » ; photo obligatoire.\n\nQUALIFICATION : obligation L. 1132-1, L. 1221-6.\n\nRÉFÉRENCE : L1132-1, L1221-6."
            },
            {
              "block_type": "heading",
              "content": "S43 — Candidat en situation de handicap"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nUn candidat mentionne une RQTH et demande si un aménagement d'horaire est envisageable. Le manager dit : « On n'est pas équipés, recale. » Aucune analyse du poste n'a été faite. Le candidat a les compétences.\n\nQUESTION\nQuelle conduite ?\n\nA. Recaler : l'entreprise n'est pas « équipée ».\nB. Ne pas écarter du seul fait du handicap ; analyser le poste, saisir RH / référent handicap, et évaluer les aptitudes professionnelles.\nC. Le convoquer en entretien « diversité » plus long que les autres, avec des questions médicales.\nD. Exiger le détail médical pour « savoir à quoi s'en tenir »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Le handicap est un critère protégé (L. 1132-1). L'employeur a des obligations d'emploi des travailleurs handicapés et d'aménagement raisonnable dans le cadre légal applicable : vous ne tranchez pas « on n'est pas équipés » tout seul. Vous ne collectez pas le dossier médical.\n\nJUSTIFICATION : L. 1221-6 : pas d'informations santé hors lien nécessaire ; la santé est un critère protégé.\n\nRISQUES : discrimination ; collecte excessive (RGPD / CNIL).\n\nERREURS FRÉQUENTES : recalé automatique ; questions médicales.\n\nQUALIFICATION : obligation L. 1132-1, L. 1221-6 ; politique interne handicap ; CNIL (minimisation).\n\nRÉFÉRENCE : L1132-1, L1221-6, CNIL-guide."
            },
            {
              "block_type": "heading",
              "content": "S44 — Annonce « jeune dynamique »"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nLe manager a rédigé : « Cherche jeune dynamique, 25-30 ans, native French, bonne présentation. » Il veut publier aujourd'hui.\n\nQUESTION\nQue faites-vous ?\n\nA. Publier : c'est le vocabulaire du métier.\nB. Refuser la publication, réécrire sans âge, sexe, apparence ni exigence de langue maternelle, et expliquer les interdits.\nC. Publier en anglais pour contourner.\nD. Garder « jeune » mais enlever les âges chiffrés."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. L'offre ne doit pas mentionner le sexe / situation de famille (L. 5331-2 et textes liés). Âge, apparence, origine, langue autre que le français comme critère d'écartement : L. 1132-1. « Native French » vise souvent l'origine. « Jeune » reste un filtre d'âge.\n\nJUSTIFICATION : L. 5331-4 : offre en français si le travail s'effectue en France ; publier en anglais pour contourner n'efface pas l'interdit.\n\nRISQUES : offre illicite, discrimination.\n\nERREURS FRÉQUENTES : cosmétique (« jeune » sans chiffres) ; langue maternelle.\n\nQUALIFICATION : obligations L. 1132-1, L. 5331-2, L. 5331-4.\n\nRÉFÉRENCE : L1132-1, L5331-2, L5331-4."
            },
            {
              "block_type": "heading",
              "content": "S45 — Prénom, nom et « clients du coin »"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nUn manager écarte un CV : « Le nom ne va pas passer auprès des agriculteurs. » Le parcours est solide.\n\nQUESTION\nQuelle conduite ?\n\nA. Suivre le manager : il connaît le terrain.\nB. Refuser l'écartement fondé sur le nom, recadrer, et poursuivre l'évaluation professionnelle.\nC. Proposer au candidat d'utiliser un prénom d'usage « plus local ».\nD. Le recaler en invoquant un « manque de réseau local » inventé."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Le nom de famille et l'origine vraie ou supposée sont protégés (L. 1132-1). Demander un prénom d'usage est une discrimination déguisée. Inventer un motif est un mensonge.\n\nJUSTIFICATION : les clients n'effacent pas la loi.\n\nRISQUES : discrimination, preuve écrite si le motif est dans le CRM.\n\nERREURS FRÉQUENTES : « réalisme commercial » ; motif de substitution.\n\nQUALIFICATION : obligation L. 1132-1.\n\nRÉFÉRENCE : L1132-1."
            },
            {
              "block_type": "heading",
              "content": "S46 — Signe religieux visible en entretien"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nUne candidate porte un foulard. Après l'entretien, le manager dit : « Très bien, mais le foulard, en entreprise on est laïcs, recale. » Il n'existe pas de règle interne écrite applicable aux salariés, et encore moins un motif d'écarter une candidate sur ses convictions religieuses.\n\nQUESTION\nQue faites-vous ?\n\nA. Recaler : la laïcité s'applique à toutes les entreprises.\nB. Rappeler que les convictions religieuses sont un critère protégé, qu'une entreprise privée n'est pas l'administration, et saisir RH avant toute décision de tenue.\nC. Lui demander si elle peut « l'enlever le jour J ».\nD. Noter « problème d'image » dans la grille."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Convictions religieuses : L. 1132-1. Vous n'inventez pas un régime de laïcité du secteur privé. Toute règle de neutralité, si elle existe, est un sujet RH / juridique, pas un tri junior. Demander d'enlever le foulard pour être embauchée est discriminatoire.\n\nJUSTIFICATION : ne jouez pas au juriste de la neutralité. Alertez.\n\nRISQUES : discrimination religieuse.\n\nERREURS FRÉQUENTES : « on est laïcs » ; case image.\n\nQUALIFICATION : obligation L. 1132-1 ; politique interne à faire qualifier par RH, pas à inventer.\n\nRÉFÉRENCE : L1132-1."
            },
            {
              "block_type": "heading",
              "content": "S47 — Âge : « trop senior » / « trop junior »"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nDeux CV : 24 ans et 58 ans. Le manager : « Le jeune, il va partir ; le vieux, il va être malade. Prends 35-40. » Les compétences ne sont pas lues.\n\nQUESTION\nQuelle conduite ?\n\nA. Cibler 35-40 ans : c'est le bon ratio risque/prix.\nB. Évaluer les compétences sans filtre d'âge, et refuser les stéréotypes santé / fidélité liés à l'âge.\nC. Garder les deux pour « l'équilibre intergénérationnel » affiché, sans les évaluer.\nD. Écarter les deux et chercher 35-40 via LinkedIn filtres âge."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. L'âge est un critère protégé. L'état de santé aussi. Les filtres LinkedIn d'âge, si vous les utilisez pour écarter, reproduisent la discrimination.\n\nJUSTIFICATION : L. 1132-1. Le « équilibre » de façade n'est pas une évaluation.\n\nRISQUES : discrimination directe.\n\nERREURS FRÉQUENTES : pyramide des âges comme brief ; filtres plateforme.\n\nQUALIFICATION : obligation L. 1132-1.\n\nRÉFÉRENCE : L1132-1."
            },
            {
              "block_type": "heading",
              "content": "S48 — Entretien qui dérape : questions illicites en rafale"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nLe manager enchaîne : situation familiale, crédit immobilier, syndicat dans le précédent poste, opinions politiques « pour voir si ça va matcher l'équipe ». Vous êtes assis à côté.\n\nQUESTION\nQue faites-vous ?\n\nA. Laisser finir pour ne pas le humilier en public.\nB. Interrompre clairement, recentrer, protéger le candidat, et signaler à RH après coup avec des faits.\nC. Répondre à la place du candidat pour « déminer ».\nD. Noter toutes les réponses, on ne sait jamais."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Activités syndicales, opinions politiques, situation de famille : L. 1132-1. L. 1221-6 : pas de lien nécessaire. Rester silencieux vous rend complice opérationnel. Noter ces réponses est une collecte illicite (RGPD).\n\nJUSTIFICATION : interruption calme mais nette. Debrief RH factuel.\n\nRISQUES : discrimination, données excessives.\n\nERREURS FRÉQUENTES : politesse = silence ; notes « pour le dossier ».\n\nQUALIFICATION : obligations L. 1132-1, L. 1221-6, CNIL minimisation.\n\nRÉFÉRENCE : L1132-1, L1221-6, CNIL-guide."
            },
            {
              "block_type": "heading",
              "content": "S49 — Apparence, tatouage, piercing"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nPoste de coordinateur interne, sans contact prestige particulier. Le manager recale : « Les tatouages, ce n'est pas notre image. »\n\nQUESTION\nQuelle conduite ?\n\nA. Suivre l'image de l'entreprise.\nB. Refuser un écartement fondé sur l'apparence physique, sauf exigence professionnelle réelle, proportionnée et non discriminatoire validée par RH — ce qui n'est pas le cas ici.\nC. Demander au candidat de les cacher en entretien et « on verra ».\nD. Le recaler pour « non-conformité culturelle »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Apparence physique : L. 1132-1. Un coordinateur interne n'a pas une exigence d'apparence de type mannequin (exceptions d'offres très limitées, artistes / mannequins — L. 5331-2).\n\nJUSTIFICATION : « image » est souvent un biais. Demander de cacher, c'est encore juger l'apparence.\n\nRISQUES : discrimination.\n\nERREURS FRÉQUENTES : culture d'entreprise = clone esthétique.\n\nQUALIFICATION : obligation L. 1132-1.\n\nRÉFÉRENCE : L1132-1, L5331-2."
            },
            {
              "block_type": "heading",
              "content": "S50 — Candidat syndiqué ou lanceur d'alerte"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nUn CV mentionne un mandat de représentant du personnel. Un autre, en entretien, indique avoir été facilitateur auprès d'un lanceur d'alerte. Le manager : « On ne va pas s'attirer ça. »\n\nQUESTION\nQue faites-vous ?\n\nA. Écarter les deux : trop de risque social.\nB. Interdire ce motif d'écartement, recentrer sur les aptitudes, et alerter RH si le manager insiste.\nC. Noter « profil conflictuel » comme critère métier.\nD. Poser des questions sur les dossiers d'alerte pour « vérifier la loyauté »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Activités syndicales, mandat, qualité de lanceur d'alerte, facilitateur ou personne en lien : L. 1132-1. Interroger le contenu d'une alerte n'a pas de lien nécessaire avec l'emploi (L. 1221-6) et est déloyal.\n\nJUSTIFICATION : le « risque social » n'est pas un critère d'aptitude.\n\nRISQUES : discrimination, collecte excessive.\n\nERREURS FRÉQUENTES : code « conflictuel » ; investigation de l'alerte.\n\nQUALIFICATION : obligation L. 1132-1, L. 1221-6.\n\nRÉFÉRENCE : L1132-1, L1221-6."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Exception « poste physique » pour la grossesse. Trier sur la photo. « Les clients ne sont pas prêts ». Laïcité improvisée. Silence pendant un dérapage."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Rédigez la phrase d'interruption pour S41 et S48 (deux phrases orales, calmes, fermes) et le mail d'alerte RH (faits, citations, sans commentaire moralisateur)."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Interruption : « Cette question n'est pas autorisée, elle n'a pas de lien avec les aptitudes pour le poste. Revenons aux missions de coordination. » Mail RH : date, personnes présentes, questions posées, votre interruption, réaction du manager, CV non tranché. Pas de « il est nul », pas de diagnostic psychologique."
            }
          ],
          "position": 4
        },
        {
          "title": "RGPD, données, LinkedIn et outils",
          "description": "Dix situations sur le droit d'accès, la CVthèque, le stalking LinkedIn, l'IA et les transferts de CV.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 32,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous traitez une demande d'accès, vous ne survolez pas la vie privée en ligne, vous n'utilisez pas une IA comme décisionnaire opaque, et vous ne transférez pas un CV « entre copains »."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le candidat est informé des méthodes (L. 1221-8). Les méthodes sont pertinentes (L. 1221-9). La CNIL recommande un vivier jusqu'à 2 ans à compter du dernier contact, avec information et opposition — ce n'est pas une durée unique obligatoire pour tous les traitements. L'archivage intermédiaire de 5 ans à compter de la date à laquelle le poste a été pourvu, pour les non-retenus, à des fins probatoires, est présenté par le référentiel CNIL 2026 comme une obligation liée à L. 1134-5. Distinguez base active, archivage et vivier. Ne laissez pas les CV « dans la boîte mail perso »."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Demande d'accès : process RH, identité, réponse dans le cadre RGPD, pas de bricolage. LinkedIn : informations professionnelles pertinentes, pas le compte personnel, pas les photos de vacances. IA : outil d'aide, information du candidat, contrôle humain, pas de critère protégé."
            },
            {
              "block_type": "heading",
              "content": "Bibliothèque de situations S51 à S60"
            },
            {
              "block_type": "heading",
              "content": "S51 — Droit d'accès RGPD"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nUn candidat non retenu demande « toutes les données, notes, e-mails, enregistrements, scoring IA et commentaires du manager ». Votre CRM contient le commentaire « trop vieux, pas le feeling ». Vous n'avez pas de procédure personnelle, les RH si.\n\nQUESTION\nQuelle conduite ?\n\nA. Envoyer tout le CRM en PDF, commentaire compris, sans RH.\nB. Orienter vers le process RH / DPO, ne pas détruire les traces, faire corriger le commentaire illicite, et ne pas répondre en amateur.\nC. Supprimer le dossier pour « n'avoir plus rien à donner ».\nD. Ignorer : un non-retenu n'a pas de droit d'accès."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Le droit d'accès existe. La destruction pour échapper à la demande est une faute. Le commentaire d'âge est illicite : il se recadre, il ne se « lave » pas par la suppression opportuniste de tout le dossier (des obligations de conservation probatoire peuvent s'appliquer — L. 1134-5 / référentiel CNIL).\n\nJUSTIFICATION : vous n'êtes pas le DPO. Vous alertez. Vous ne mentez pas « nous n'avons rien ».\n\nRISQUES : manquement RGPD, preuve de discrimination, destruction de preuve.\n\nERREURS FRÉQUENTES : ZIP sauvage ; oubli volontaire.\n\nQUALIFICATION : RGPD (obligation) ; CNIL ; L. 1132-1 ; conservation L. 1134-5 / CNIL-referentiel-2026.\n\nRÉFÉRENCE : CNIL-guide, CNIL-referentiel-2026, L1134-5, L1132-1."
            },
            {
              "block_type": "heading",
              "content": "S52 — Manager qui demande des informations personnelles"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nLe manager vous écrit : « Avant l'entretien, file-moi son âge, s'il a des enfants, et son adresse exacte, je veux savoir s'il tiendra les 5 h du matin. »\n\nQUESTION\nQue faites-vous ?\n\nA. Extraire l'état civil du CV et répondre.\nB. Refuser ces informations, proposer des questions professionnelles sur les contraintes du poste (horaires, astreintes) posées au candidat, sans enquête familiale.\nC. Regarder Facebook et résumer.\nD. Donner l'adresse mais pas l'âge, « compromis »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Âge, situation de famille, lieu de résidence : critères protégés (L. 1132-1). L. 1221-6 : pas d'informations sans lien nécessaire. Les horaires du poste se posent comme exigence du job, pas comme enquête sur les enfants.\n\nJUSTIFICATION : Facebook n'est pas un outil RH. Le compromis sur l'adresse reste un critère protégé.\n\nRISQUES : discrimination, collecte excessive.\n\nERREURS FRÉQUENTES : service rendu au manager = infraction.\n\nQUALIFICATION : L. 1132-1, L. 1221-6, CNIL.\n\nRÉFÉRENCE : L1132-1, L1221-6, CNIL-guide."
            },
            {
              "block_type": "heading",
              "content": "S53 — LinkedIn stalking excessif"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nVotre collègue vous montre qu'il a ouvert le compte Instagram du candidat, les photos de mariage, et un like sur un post politique. Il veut mettre ça dans le CR : « profil engagé, vie désordonnée ».\n\nQUESTION\nQuelle conduite ?\n\nA. Intégrer : tout ce qui est public est utilisable.\nB. Refuser d'utiliser ces éléments, les sortir du dossier, et rappeler que seules les informations pertinentes au poste s'apprécient.\nC. Les garder sans les écrire.\nD. Demander au candidat de justifier ses posts."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Public ≠ pertinent ≠ licite. Opinions politiques : L. 1132-1. L. 1221-6 et L. 1221-9 : lien avec l'emploi, méthodes pertinentes. CNIL : minimisation, pas de fouille de la vie privée.\n\nJUSTIFICATION : un CR qui parle de mariage et de politique est une pièce à risque.\n\nRISQUES : discrimination, collecte excessive, atteinte à la vie privée.\n\nERREURS FRÉQUENTES : OSINT récréatif ; « c'est public ».\n\nQUALIFICATION : obligations L. 1132-1, L. 1221-6, L. 1221-9 ; recommandation CNIL.\n\nRÉFÉRENCE : L1132-1, L1221-6, L1221-9, CNIL-guide."
            },
            {
              "block_type": "heading",
              "content": "S54 — IA qui classe les CV"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nUn outil classe les CV. Le top 10 ne contient aucune femme. Le paramétrage n'est pas documenté. Le manager veut n'ouvrir que le top 10. Aucun candidat n'a été informé d'un scoring automatisé.\n\nQUESTION\nQue faites-vous ?\n\nA. Suivre le top 10 : l'outil est objectif.\nB. Ne pas limiter l'examen au ranking opaque, informer selon L. 1221-8, contrôler les biais, et alerter RH / DPO avant tout usage décisionnel.\nC. Renommer l'IA « aide à la lecture » et continuer.\nD. Alimenter l'IA avec le genre pour « rééquilibrer » sans règle."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. L. 1221-8 : information préalable sur les méthodes. L. 1221-9 : pertinence. Un classement qui élimine les femmes est un signal d'alerte de discrimination (L. 1132-1). L'IA n'est pas « objective » par nature.\n\nJUSTIFICATION : contrôle humain réel. Informer. Documenter. Ne pas bricoler le genre dans le modèle.\n\nRISQUES : discrimination algorithmique, défaut d'information, RGPD (décision automatisée / profilage : à faire qualifier par DPO, vous n'inventez pas l'article).\n\nERREURS FRÉQUENTES : foi dans le score ; cosmétique sémantique.\n\nQUALIFICATION : L. 1221-8, L. 1221-9, L. 1132-1 ; CNIL ; politique interne outils.\n\nRÉFÉRENCE : L1221-8, L1221-9, L1132-1, CNIL-guide."
            },
            {
              "block_type": "heading",
              "content": "S55 — Transfert de CV à une autre filiale"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nVotre collègue d'une filiale belge vous demande « tous les CV d'automaticiens des 18 mois, on recrute aussi ». Aucun candidat n'a été informé d'un transfert hors du process initial.\n\nQUESTION\nQuelle conduite ?\n\nA. Envoyer le fichier Excel, c'est le même groupe.\nB. Refuser le transfert brut, passer par RH / DPO : finalité, information, base, éventuellement nouvel accord ou information selon le cadre.\nC. Envoyer seulement les noms et LinkedIn.\nD. Dire aux candidats que leur CV « circule dans le groupe » alors que ce n'est pas le process."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Changement de finalité / destinataire = sujet RGPD. « Même groupe » n'est pas une autorisation magique. Mentir sur la circulation n'arrange rien.\n\nJUSTIFICATION : CNIL recrutement : information, finalité, destinataires. Vous ne bricolez pas un fichier de 18 mois.\n\nRISQUES : transfert illicite, perte de confiance.\n\nERREURS FRÉQUENTES : groupe = un seul responsable ; extract LinkedIn comme astuce.\n\nQUALIFICATION : RGPD / CNIL ; politique interne groupe.\n\nRÉFÉRENCE : CNIL-guide."
            },
            {
              "block_type": "heading",
              "content": "S56 — Candidat s'oppose à la conservation"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nUn non-retenu écrit : « Supprimez tout. » Le poste vient d'être pourvu. Le référentiel CNIL 2026 indique un archivage intermédiaire de 5 ans à des fins probatoires (L. 1134-5). Le candidat n'est pas en vivier actif.\n\nQUESTION\nQue faites-vous ?\n\nA. Tout supprimer dans l'heure pour faire plaisir.\nB. Accuser réception, transmettre au DPO / RH, distinguer vivier (opposition) et archivage probatoire, et ne pas inventer que « le RGPD oblige à tout garder 5 ans en base active ».\nC. Le laisser en base active six ans « au cas où ».\nD. Répondre que c'est impossible, point."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. L'opposition au vivier n'est pas la même chose que l'archivage légal/probatoire. Vous ne décidez pas seul. Vous n'affirmez pas une conservation active infinie. Les 2 ans vivier sont une recommandation CNIL, pas une durée unique RGPD.\n\nJUSTIFICATION : CNIL-referentiel-2026 + L. 1134-5. Distinguer.\n\nRISQUES : suppression de pièces utiles ; conservation excessive en actif ; réponse fausse.\n\nERREURS FRÉQUENTES : tout effacer ; tout garder en CVthèque.\n\nQUALIFICATION : obligation (archivage probatoire selon référentiel / L. 1134-5) ; recommandation (vivier 2 ans) ; RGPD (droits).\n\nRÉFÉRENCE : CNIL-referentiel-2026, CNIL-guide, L1134-5."
            },
            {
              "block_type": "heading",
              "content": "S57 — Vivier : recontacter un CV de 18 mois"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nVous trouvez un CV de 18 mois, dernier contact positif. Le candidat n'a pas été réinformé depuis. Un poste proche ouvre. Votre fichier n'a pas de case opposition.\n\nQUESTION\nQuelle conduite ?\n\nA. L'appeler en disant « vous avez postulé hier ».\nB. Le recontacter en rappelant l'origine du CV, le nouveau poste, et la possibilité de s'opposer à rester en vivier.\nC. Ne jamais recontacter après 12 mois, « c'est illégal ».\nD. Le mettre en process sans le prévenir, « on lui dira s'il est pris »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. 18 mois < 2 ans de la recommandation CNIL vivier, mais ce n'est pas un droit de mentir sur la date. Inventer un délai légal de 12 mois est faux. Un process sans information viole L. 1221-8 et le RGPD.\n\nJUSTIFICATION : loyauté. Information. Opposition.\n\nRISQUES : mensonge, conservation sans info.\n\nERREURS FRÉQUENTES : délai inventé ; « postulé hier ».\n\nQUALIFICATION : recommandation CNIL 2 ans ; obligation d'information ; L. 1221-8.\n\nRÉFÉRENCE : CNIL-guide, L1221-8."
            },
            {
              "block_type": "heading",
              "content": "S58 — CV envoyé au mauvais destinataire"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nVous avez envoyé par erreur un CV complet (téléphone, adresse) à un manager d'un autre service, hors process. L'e-mail est parti.\n\nQUESTION\nQue faites-vous ?\n\nA. Espérer qu'il ne lise pas.\nB. Faire rappeler l'e-mail si possible, demander la suppression à l'erroné, signaler selon la procédure interne d'incident, et ne pas cacher le fait à RH / DPO.\nC. Prévenir le candidat que « son CV circule, c'est positif ».\nD. Renvoyer le même CV à toute l'usine pour « égaliser »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. C'est un incident de données. La procédure interne (et éventuellement la notification, qui n'est pas de votre ressort isolé) s'applique. Mentir au candidat en positif est déloyal.\n\nJUSTIFICATION : minimiser l'impact, tracer, apprendre (double validation des destinataires).\n\nRISQUES : diffusion de données, perte de confiance, manquement RGPD.\n\nERREURS FRÉQUENTES : silence ; spin marketing.\n\nQUALIFICATION : RGPD (incident) ; politique interne ; bonne pratique.\n\nRÉFÉRENCE : CNIL-guide."
            },
            {
              "block_type": "heading",
              "content": "S59 — Enregistrement de l'entretien"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nUn candidat prévient qu'il enregistre l'entretien. Le manager, lui, enregistre en secret « pour se souvenir ». Aucune information préalable n'a été donnée sur un enregistrement employeur.\n\nQUESTION\nQuelle conduite ?\n\nA. Laisser les deux enregistrer, c'est équitable.\nB. Stopper l'enregistrement secret, appliquer la politique interne (en général : pas d'enregistrement ou information + base + sécurité), et ne pas improviser un fichier audio de recrutement.\nC. Enregistrer aussi de votre côté « pour la preuve ».\nD. Exiger que le candidat efface, sans recadrer le manager."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. L. 1221-8 : le candidat est informé des méthodes. Un enregistrement secret n'est pas une méthode pertinente assumée. La politique interne et le DPO tranchent. Vous n'ouvrez pas un troisième enregistrement amateur.\n\nJUSTIFICATION : preuve illicite / données excessives / défaut d'information.\n\nRISQUES : RGPD, déloyauté, fichier hors outil.\n\nERREURS FRÉQUENTES : course à l'enregistrement ; deux poids deux mesures.\n\nQUALIFICATION : L. 1221-8, L. 1221-9, CNIL ; politique interne.\n\nRÉFÉRENCE : L1221-8, L1221-9, CNIL-guide."
            },
            {
              "block_type": "heading",
              "content": "S60 — Test ou mise en situation non annoncée"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nLe manager sort un cas Excel de 45 minutes non annoncé, « pour voir sous stress ». L'annonce et la convocation ne mentionnaient aucun test. L. 1221-8 exige une information préalable sur les méthodes.\n\nQUESTION\nQue faites-vous ?\n\nA. Laisser faire : le stress est le métier.\nB. Reporter le test, informer le candidat, et ne l'utiliser que s'il est pertinent, identique pour les autres, et annoncé.\nC. Compter le refus du candidat comme un moins.\nD. Donner le cas seulement aux candidats « douteux »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Information préalable (L. 1221-8), pertinence (L. 1221-9), égalité de traitement. Un test surprise réservé aux « douteux » est inéquitable et potentiellement discriminatoire si le doute est un biais.\n\nJUSTIFICATION : vous pouvez tester, vous devez informer.\n\nRISQUES : méthode illicite, inéquité.\n\nERREURS FRÉQUENTES : surprise = authenticité ; test ciblé.\n\nQUALIFICATION : obligations L. 1221-8, L. 1221-9.\n\nRÉFÉRENCE : L1221-8, L1221-9."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "ZIP d'accès sans DPO. Stalking « public ». Foi dans l'IA. Groupe = droit de tout transférer. Inventer un délai de 12 mois. Effacer pour se protéger."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Pour S54, listez cinq questions à poser au fournisseur de l'IA et trois mentions d'information candidat, sans jargon vide."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Questions : données d'entraînement, critères, taux d'erreur par genre/âge si connu, reprise humaine, conservation. Mentions : existence d'un outil d'aide, pas de décision exclusive, contact DPO, droit d'accès. Vous ne promettez pas une « IA éthique certifiée » sans preuve."
            }
          ],
          "position": 5
        },
        {
          "title": "Incidents de process : annulation, promesse, allégations",
          "description": "Dix situations sur le poste annulé, l'écrit d'embauche, l'allégation de discrimination et les mensonges de parcours.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 32,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez clôturer un poste annulé sans mensonge, faire qualifier une offre par RH, et traiter une allégation de discrimination sans improvisation ni destruction de preuves."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Service-Public F39588 : l'offre de contrat et la promesse unilatérale de contrat ne sont pas définies par la loi mais encadrées par la jurisprudence. L'offre peut être retirée avant acceptation dans le délai laissé ou un délai raisonnable ; la promesse unilatérale vaut contrat, le retrait s'analyse en licenciement sans cause réelle et sérieuse. Une promesse d'embauche n'est pas obligatoire. Faites valider les écrits. Un poste annulé : L. 5331-3 si vous laissez croire qu'il existe encore."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Tout écrit d'embauche passe par RH. Poste annulé : information simultanée des candidats en process. Allégation : faits, conservation, RH, pas de commentaire public."
            },
            {
              "block_type": "heading",
              "content": "Bibliothèque de situations S61 à S70"
            },
            {
              "block_type": "heading",
              "content": "S61 — Poste annulé en cours de process"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nQuatre personnes sont en shortlist. La direction gèle le poste. Le manager veut que vous disiez « on n'a pas trouvé le profil » pour ne pas affaiblir sa demande budgétaire l'an prochain.\n\nQUESTION\nQuelle conduite ?\n\nA. Mentir sur le motif : protection interne.\nB. Informer que le poste n'est pas pourvu / est gelé, sans inventer un défaut de profil, et clôturer les données selon les règles.\nC. Ne prévenir personne et laisser l'annonce en ligne.\nD. Promettre une ouverture dans trois mois pour les retenir."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Mentir sur le motif blesse inutilement et peut être trompeur (L. 5331-3 : existence de l'emploi). Laisser l'annonce est une allégation d'emploi existant. Promettre trois mois sans décision est un poste fantôme.\n\nJUSTIFICATION : loyauté. Vivier possible si information vraie.\n\nRISQUES : allégation trompeuse, réputation, données actives sans finalité.\n\nERREURS FRÉQUENTES : gel silencieux ; mensonge « profil ».\n\nQUALIFICATION : L. 5331-3 ; CNIL (finalité) ; bonne pratique.\n\nRÉFÉRENCE : L5331-3, CNIL-guide."
            },
            {
              "block_type": "heading",
              "content": "S62 — Promesse déjà envoyée, besoin de reculer"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nUn e-mail du manager, copié au candidat, dit : « Nous vous promettons le poste de coordinateur, prise de fonction le 3 novembre, salaire 37 k€. » Le COMEX refuse le budget. Le manager vous demande de « retirer en douce ».\n\nQUESTION\nQue faites-vous ?\n\nA. Retirer en douce et espérer que le candidat n'insiste pas.\nB. Alerter RH / juridique immédiatement : les termes (« nous vous promettons », éléments essentiels) peuvent s'analyser en promesse unilatérale ; vous ne bricolez pas un retrait.\nC. Envoyer un nouvel e-mail : « ce n'était qu'une piste ».\nD. Proposer au candidat de mentir à son employeur actuel en restant."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. SP-F39588 : une promesse unilatérale peut valoir contrat ; le retrait s'analyse alors en licenciement sans cause réelle et sérieuse. Ce n'est pas un terrain junior. Mentir « piste » aggrave.\n\nJUSTIFICATION : escalation. Conservation des e-mails. Pas de conseil de mentir au candidat.\n\nRISQUES : contentieux prud'homal, mauvaise foi.\n\nERREURS FRÉQUENTES : retrait amateur ; réécriture de l'histoire.\n\nQUALIFICATION : vigilance juridique SP-F39588 (jurisprudence expliquée par Service-Public) ; politique interne qui signe.\n\nRÉFÉRENCE : SP-F39588."
            },
            {
              "block_type": "heading",
              "content": "S63 — Modèle « offre » vs formulation trop engageante"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nOn vous demande d'envoyer « une promesse d'embauche pour le rassurer avant Noël » alors que le casier administratif n'est pas fini et que RH n'a pas validé. Un modèle d'offre conditionnelle existe.\n\nQUESTION\nQuelle conduite ?\n\nA. Envoyer « je vous promets le poste » pour rassurer.\nB. N'envoyer qu'un écrit validé RH, plutôt une offre clairement identifiée, conditions suspensives visibles, sans vocabulaire de promesse.\nC. Un SMS « c'est bon tu as le job » en attendant.\nD. Rien écrire, tout à l'oral « ça n'engage pas »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Une promesse n'est pas obligatoire (SP-F39588). L'oral n'est pas magiquement inoffensif. Le SMS est un écrit.\n\nJUSTIFICATION : rassurer par un calendrier vrai, pas par un contrat involontaire.\n\nRISQUES : requalification, conditions oubliées.\n\nERREURS FRÉQUENTES : mot « promesse » par générosité ; oral protecteur.\n\nQUALIFICATION : SP-F39588 ; politique interne.\n\nRÉFÉRENCE : SP-F39588."
            },
            {
              "block_type": "heading",
              "content": "S64 — Allégation de discrimination"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nUne candidate écrit que son refus est « sexiste et raciste ». Le manager veut répondre : « On a pris un homme, point, arrêtez d'accuser. » Il veut aussi supprimer les notes d'entretien.\n\nQUESTION\nQue faites-vous ?\n\nA. Laisser le manager répondre et nettoyer le CRM.\nB. Ne pas détruire, ne pas répondre sur le fond seul, saisir RH, conserver les pièces, et s'assurer que le refus documenté est professionnel.\nC. Présenter des excuses publiques sur LinkedIn.\nD. Promettre un second poste pour éteindre l'accusation."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Destruction de preuves : faute. Réponse agressive : aggravation. Un second poste fantôme : L. 5331-3 et mauvaise foi. Vous n'êtes pas le porte-parole contentieux.\n\nJUSTIFICATION : L. 1132-1 ; conservation L. 1134-5 / CNIL. Polarisation publique inutile.\n\nRISQUES : preuve, diffamation inverse, absence de dossier.\n\nERREURS FRÉQUENTES : purge CRM ; clash e-mail.\n\nQUALIFICATION : L. 1132-1 ; L. 1134-5 ; politique interne.\n\nRÉFÉRENCE : L1132-1, L1134-5, CNIL-referentiel-2026."
            },
            {
              "block_type": "heading",
              "content": "S65 — Incohérence de dates sur le CV"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nUn trou de 11 mois apparaît entre deux postes. En préqual, le candidat dit « année sabbatique ». LinkedIn montre un poste sur cette période. Le manager dit « c'est un menteur, recale » sans l'entendre.\n\nQUESTION\nQuelle conduite ?\n\nA. Recaler pour mensonge, sans question.\nB. Confronter calmement l'écart, laisser expliquer, et ne trancher que sur des faits, sans harcèlement ni enquête privée hors sujet.\nC. Appeler l'ancien employeur en secret malgré le refus du candidat d'activer les références maintenant.\nD. Poster l'écart sur un groupe Facebook RH."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. L'incohérence se travaille. Le mensonge, s'il est établi sur un élément essentiel, est un motif professionnel. L'enquête parallèle et la mise au pilori ne le sont pas.\n\nJUSTIFICATION : L. 1221-6 (bonne foi du candidat, questions liées à l'emploi) ; loyauté des méthodes (L. 1221-8 / L. 1221-9).\n\nRISQUES : diffamation, référence hors accord, biais.\n\nERREURS FRÉQUENTES : tribunal LinkedIn ; recalé immédiat.\n\nQUALIFICATION : bonne pratique ; L. 1221-6, L. 1221-8, L. 1221-9.\n\nRÉFÉRENCE : L1221-6, L1221-8, L1221-9."
            },
            {
              "block_type": "heading",
              "content": "S66 — Mensonge sur un diplôme"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nLe candidat a écrit « Master logistique ». Le diplôme produit est une attestation de 40 heures. Il minimise : « Tout le monde gonfle un peu. » Le diplôme n'était pas un must-have, mais l'annonce exigeait honnêteté du parcours. RH n'a pas de politique écrite sur ce cas.\n\nQUESTION\nQue faites-vous ?\n\nA. Passer : ce n'était pas un must-have.\nB. Documenter l'écart, en parler à RH et au manager comme un sujet de loyauté, et ne pas banaliser un faux, sans humiliation publique.\nC. Le menacer de dépôt de plainte dans l'heure.\nD. Le garder et « corriger le CV pour lui »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Un faux n'est pas un détail de wording. Corriger le CV à sa place est une complicité documentaire. La plainte n'est pas votre premier réflexe junior isolé : RH / juridique.\n\nJUSTIFICATION : loyauté, L. 1221-6 (bonne foi). Décision d'employeur.\n\nRISQUES : embauche sur un faux ; accusation hasardeuse.\n\nERREURS FRÉQUENTES : « tout le monde gonfle » ; réécriture complice.\n\nQUALIFICATION : bonne pratique ; politique interne ; L. 1221-6.\n\nRÉFÉRENCE : L1221-6."
            },
            {
              "block_type": "heading",
              "content": "S67 — Annonce toujours en ligne alors que le poste est pourvu"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nLe CDI est signé. L'annonce tourne encore. Des candidats postulent. Le manager dit « laisse, ça fait de la réserve ».\n\nQUESTION\nQuelle conduite ?\n\nA. Laisser tourner pour le vivier.\nB. Retirer ou indiquer clairement que le poste est pourvu, et ne collecter un vivier que de façon informée, sans laisser croire à un emploi ouvert.\nC. Répondre à chacun qu'il est en finale.\nD. Transférer les nouveaux CV au manager du site voisin sans information."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. L. 5331-3 : existence de l'emploi. Vivier : information CNIL, pas un piège à CV.\n\nJUSTIFICATION : une réserve se construit honnêtement.\n\nRISQUES : allégation trompeuse, collecte sans finalité claire.\n\nERREURS FRÉQUENTES : always-on job posting mensonger.\n\nQUALIFICATION : L. 5331-3 ; CNIL.\n\nRÉFÉRENCE : L5331-3, CNIL-guide."
            },
            {
              "block_type": "heading",
              "content": "S68 — Candidat qui critique violemment son employeur"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nEn entretien, le candidat passe 20 minutes à dénigrer nommément son N+1 actuel (incompétence, alcool, « je peux vous donner des preuves »). Les réponses métier sont moyennes.\n\nQUESTION\nQue faites-vous ?\n\nA. Noter les preuves et les classer.\nB. Recadrer, refuser les pièces sur un tiers, évaluer le professionnalisme et le fond métier, sans colporter.\nC. Recaler automatiquement : un critique n'est jamais embauchable.\nD. Appeler le N+1 pour « vérifier »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Vous n'êtes pas un recueil de dénonciations. Un recalé automatique peut faire rater un signal, mais le dénigrement nommé est un indice de professionnalisme. Appeler le N+1 actuel sans cadre est déloyal et dangereux.\n\nJUSTIFICATION : pertinence (L. 1221-9), minimisation des données d'un tiers.\n\nRISQUES : diffamation, rupture de confidentialité.\n\nERREURS FRÉQUENTES : gossip RH ; recalé moralisateur sans fond.\n\nQUALIFICATION : bonne pratique ; CNIL (données de tiers).\n\nRÉFÉRENCE : CNIL-guide, L1221-9."
            },
            {
              "block_type": "heading",
              "content": "S69 — Publication LinkedIn trop précise"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nVotre N+1 veut poster : « On recrute un coordinateur supply pour remplacer Paul D. qui part, process confidentiel, voici les 3 finalistes (photo). » Le remplacement n'est pas connu de l'équipe. Les finalistes n'ont pas consenti à une publication.\n\nQUESTION\nQuelle conduite ?\n\nA. Poster : ça modernise la marque employeur.\nB. Refuser : confidentialité du salarié sortant, données des candidats, recrutement éventuellement confidentiel.\nC. Poster sans les photos mais avec les noms.\nD. Demander aux finalistes en 10 minutes un « ok » oral flou."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Données des candidats (CNIL), vie professionnelle du sortant, possible recrutement confidentiel. Un ok oral précipité n'est pas un consentement éclairé pour une publication nominative.\n\nJUSTIFICATION : marque employeur ≠ exposition des personnes.\n\nRISQUES : RGPD, conflit interne, perte de finalistes.\n\nERREURS FRÉQUENTES : content d'abord.\n\nQUALIFICATION : RGPD / CNIL ; bonne pratique confidentialité ; politique interne communication.\n\nRÉFÉRENCE : CNIL-guide."
            },
            {
              "block_type": "heading",
              "content": "S70 — Rumeur interne sur le recrutement"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nL'open space dit que « le poste est déjà promis au neveu d'un chef ». Deux candidats externes sont en process réel. Un salarié vous demande confirmation. Vous n'avez pas d'information de favoritisme avéré.\n\nQUESTION\nQue faites-vous ?\n\nA. Démentir avec force alors que vous ne savez pas.\nB. Ne pas alimenter la rumeur, garantir un process équitable tracé, et alerter RH si un conflit d'intérêts apparaît.\nC. Confirmer « c'est possible, ici c'est comme ça ».\nD. Arrêter le process externe pour « éviter le scandale »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Vous ne démentez pas ce que vous ignorez, vous ne confirmez pas une rumeur, vous ne sacrifiez pas des candidats pour une rumeur. Vous tracez.\n\nJUSTIFICATION : équité réelle > communication de couloir.\n\nRISQUES : process alibi ; diffamation ; panique.\n\nERREURS FRÉQUENTES : participation au gossip ; gel injustifié.\n\nQUALIFICATION : bonne pratique ; politique interne déontologie."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Mentir sur un gel. Retirer une promesse « en douce ». Purger le CRM. Tribunal LinkedIn. Post LinkedIn nominatif."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Rédigez le mail candidats de S61 (poste gelé) et la première phrase d'escalade RH de S62."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "S61 : le poste est gelé par décision de l'entreprise, leur candidature a été étudiée, conservation / vivier selon règles, remerciements. Pas de « votre profil n'était pas le bon ». S62 : « Un écrit employant le mot promettre et les éléments essentiels a été envoyé au candidat ; je n'effectue aucun retrait sans consigne RH / juridique. Pièces jointes. »"
            }
          ],
          "position": 6
        },
        {
          "title": "Recrutements spécifiques : interne, intérim, confidentiel, volume",
          "description": "Dix situations sur le handicap déjà couvert, l'intérim, le confidentiel, la cooptation, l'alternance et le volume.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 30,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous distinguez intérim et CDI, gérez un recrutement confidentiel sans mensonge, traitez une cooptation du neveu du DG, et ne transformez pas un volume en usine à biais."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "L'intérim est un canal et un contrat spécifiques, pas un CDI « plus rapide ». Un recrutement confidentiel (remplacement non annoncé) n'autorise pas une fausse annonce. La cooptation est un canal : elle n'efface ni la grille ni L. 1132-1. Un mineur / un alternant : cadre RH, pas d'improvisation sur le temps de travail. Vous n'inventez pas de délai légal d'embauche."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Canal ≠ critère. Confidentiel : formulation vraie (nouveau poste / renforcement) ou pas d'annonce publique. Cooptation : même process. Volume : mêmes questions, mêmes grilles."
            },
            {
              "block_type": "heading",
              "content": "Bibliothèque de situations S71 à S80"
            },
            {
              "block_type": "heading",
              "content": "S71 — Intérim versus CDI"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nLe manager veut un CDI « parce que l'intérim c'est trop cher » alors que le besoin est un pic de 4 mois et que le budget d'un CDI n'est pas ouvert à 12 mois. Une agence partenaire existe. Les RH n'ont pas tranché.\n\nQUESTION\nQuelle conduite ?\n\nA. Lancer le CDI : le manager a raison sur le coût.\nB. Objectiver pic vs besoin structurel, faire qualifier le contrat par RH, et ne pas vendre un CDI à un candidat si le besoin est un pic assumé.\nC. Promettre un CDI au candidat d'agence pour le faire basculer.\nD. Dire aux candidats CDI que c'est un CDD, on verra."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Le type de contrat est une décision d'employeur. Vendre un CDI pour appâter un intérimaire, ou l'inverse, est trompeur (L. 5331-3 : nature de l'emploi).\n\nJUSTIFICATION : coût de l'intérim vs risque d'un CDI sans charge. Pas de mensonge de nature de contrat.\n\nRISQUES : allégation trompeuse, contentieux de requalification (sujet RH, vous n'inventez pas les règles).\n\nERREURS FRÉQUENTES : CDI par facilité ; appât.\n\nQUALIFICATION : L. 5331-3 ; politique interne ; bonne pratique.\n\nRÉFÉRENCE : L5331-3."
            },
            {
              "block_type": "heading",
              "content": "S72 — Recrutement confidentiel"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nVous devez remplacer un responsable magasin qui n'est pas au courant. Le manager veut une annonce « recherche responsable magasin pour ouverture d'un second site » alors qu'il n'y a pas de second site.\n\nQUESTION\nQue faites-vous ?\n\nA. Publier la fausse ouverture : la confidentialité d'abord.\nB. Refuser l'allégation fausse, proposer un canal discret (cabinet, approches ciblées, intitulé vrai non mensonger) et un cadrage de qui est informé.\nC. Prévenir le titulaire « entre nous ».\nD. Publier sans intitulé, seulement « poste à pourvoir »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. L. 5331-3 : existence et nature de l'emploi. La confidentialité se traite par le canal, pas par un mensonge. Prévenir le titulaire contre la consigne n'est pas votre initiative isolée.\n\nJUSTIFICATION : approches nominatives, cabinet, NDA interne. Pas de second site fictif.\n\nRISQUES : offre trompeuse, rumeur, rupture de confiance si le titulaire l'apprend par L'annonce.\n\nERREURS FRÉQUENTES : cover story ; indiscrétion.\n\nQUALIFICATION : obligation L. 5331-3 ; bonne pratique de confidentialité.\n\nRÉFÉRENCE : L5331-3."
            },
            {
              "block_type": "heading",
              "content": "S73 — Cooptation du neveu du DG"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nLe DG envoie le CV de son neveu pour le poste de coordinateur. « Fais-lui passer les entretiens, c'est un bon gamin. » Le neveu a un DUT hors cible. Deux autres candidats sont meilleurs sur la grille.\n\nQUESTION\nQuelle conduite ?\n\nA. Le retenir : c'est le neveu du DG.\nB. Même grille, même process, tracer le conflit d'intérêts, et ne pas maquiller les notes. La décision d'employeur, si elle déroge, n'est pas la vôtre à falsifier.\nC. Écarter sans entretien pour « éviter le soupçon ».\nD. Faire un entretien plus dur pour « montrer l'équité »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. La cooptation n'est pas nulle ; le favoritisme maquillé l'est. Un entretien punitif n'est pas l'équité. Écarter sans regarder peut être une lâcheté politique, pas une méthode (L. 1221-9).\n\nJUSTIFICATION : vous tracez. Vous n'inventez pas 18/20. Si le DG impose, RH le documente : ce n'est plus une évaluation, c'est une décision d'autorité.\n\nRISQUES : discrimination des autres, notes falsifiées, rumeur vraie.\n\nERREURS FRÉQUENTES : 20/20 automatique ; entretien piège.\n\nQUALIFICATION : bonne pratique déontologique ; L. 1221-9 ; L. 1132-1 si l'écartement des autres est un prétexte illicite.\n\nRÉFÉRENCE : L1221-9, L1132-1."
            },
            {
              "block_type": "heading",
              "content": "S74 — Candidat interne déjà évoqué, six CV externes"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nPolitique interne : les postes sont publiés 7 jours en interne. Le manager a déjà « son » interne et veut limiter l'externe à un alibi. La politique n'interdit pas l'externe.\n\nQUESTION\nQue faites-vous ?\n\nA. Faire un process potiche externe.\nB. Appliquer la publication interne, évaluer tous les recevables, et refuser le process alibi (L. 5331-3 si l'emploi n'est pas réellement ouvert aux externes que vous attirez).\nC. Bloquer l'interne pour « ouvrir le jeu ».\nD. Dire aux externes que c'est déjà pourvu tout en collectant les CV."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Si vous publiez à l'externe, le poste est réel. Un alibi est trompeur.\n\nJUSTIFICATION : politique interne 7 jours ≠ attribution automatique. Pas de délai légal inventé au-delà de la politique.\n\nRISQUES : allégation, démotivation, grief interne.\n\nERREURS FRÉQUENTES : alibi ; punir l'interne.\n\nQUALIFICATION : politique interne ; L. 5331-3.\n\nRÉFÉRENCE : L5331-3."
            },
            {
              "block_type": "heading",
              "content": "S75 — Alternance versus CDI junior"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nLe manager veut un CDI « pas cher » avec les missions d'un alternant formé 2 jours par semaine. Il refuse le tutorat. L'annonce parlait d'un CDI autonome.\n\nQUESTION\nQuelle conduite ?\n\nA. Embaucher un junior CDI et le former « sur le tas » sans le dire.\nB. Réaligner besoin, budget, tutorat et type de contrat avec RH ; ne pas vendre l'autonomie si le poste est un apprentissage déguisé.\nC. Publier les deux contrats sur la même annonce sans le préciser.\nD. Prendre un stagiaire de 4 mois pour tester, sans convention claire."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Nature de l'emploi (L. 5331-3). Un stage sans cadre est un sujet RH (vous n'inventez pas les règles de stage). L'alternance suppose un tutorat réel.\n\nJUSTIFICATION : honnêteté du contrat et des missions.\n\nRISQUES : allégation, échec d'intégration, requalification (RH).\n\nERREURS FRÉQUENTES : CDI low cost = alternant sans droits.\n\nQUALIFICATION : L. 5331-3 ; politique interne formation.\n\nRÉFÉRENCE : L5331-3."
            },
            {
              "block_type": "heading",
              "content": "S76 — Recrutement volume : dix magasiniers"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nDix postes identiques. Le manager veut des entretiens de 8 minutes « au feeling, on a pas le temps ». Il propose de ne voir que les hommes « pour le port de charge ».\n\nQUESTION\nQue faites-vous ?\n\nA. Suivre : le volume justifie le feeling.\nB. Maintenir une grille courte mais identique, des questions liées au poste (dont les charges, posées à tous), et refuser le filtre de sexe.\nC. Filtrer les femmes « pour les protéger ».\nD. Outsourcer à une IA sans information."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Le sexe est un critère protégé (L. 1132-1). Le port de charge se traduit en exigence de poste évaluée pour tous, pas en exclusion des femmes. L'IA sans L. 1221-8 : déjà vu (S54).\n\nJUSTIFICATION : volume ≠ exception à la loi. Une grille de 15 minutes tient.\n\nRISQUES : discrimination de sexe.\n\nERREURS FRÉQUENTES : protectionnisme sexiste ; speed feeling.\n\nQUALIFICATION : obligation L. 1132-1 ; L. 1221-9.\n\nRÉFÉRENCE : L1132-1, L1221-9."
            },
            {
              "block_type": "heading",
              "content": "S77 — Cabinet et process interne en parallèle"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nUn cabinet vous envoie des CV déjà vus en interne, avec un markup. Le manager veut payer pour « aller plus vite ». Les candidats ne savent pas qu'ils sont présentés deux fois.\n\nQUESTION\nQuelle conduite ?\n\nA. Payer et avancer, le temps compte.\nB. Dédupliquer, clarifier la propriété du dossier selon le contrat cabinet, informer pour éviter la double présentation opaque.\nC. Laisser le cabinet dire qu'il a « trouvé » des profils internes.\nD. Écarter les candidats communs par simplicité."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Double présentation : mauvaise expérience candidat, coût, confusion d'employeur. Le contrat cabinet tranche les honoraires, pas vous tout seul.\n\nJUSTIFICATION : loyauté. Pas d'écartement automatique d'un bon profil.\n\nRISQUES : double frais, ghosting croisé, L. 1221-8 (qui évalue, par quelle méthode).\n\nERREURS FRÉQUENTES : payer pour la paix ; punir le candidat.\n\nQUALIFICATION : politique interne / contrat ; bonne pratique ; L. 1221-8.\n\nRÉFÉRENCE : L1221-8."
            },
            {
              "block_type": "heading",
              "content": "S78 — Freelance ou salariat"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nUn profil rare ne veut que du freelance. Le manager dit « on le prend en facture, comme un salarié, mêmes horaires, même PC, même manager, 5 jours ». Les RH n'ont pas validé.\n\nQUESTION\nQue faites-vous ?\n\nA. Le contracter en freelance pour aller vite.\nB. Alerter RH : un schéma de salariat déguisé n'est pas un levier de recrutement junior ; vous ne promettez ni le schéma ni un CDI fictif.\nC. Promettre un CDI dans six mois oralement pour qu'il accepte la facture.\nD. Indiquer « CDI » dans l'annonce et payer en freelance."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. La requalification est un sujet employeur / URSSAF / juge, pas un bricolage. L. 5331-3 si la nature de l'emploi est fausse. Promesse orale de CDI : SP-F39588.\n\nJUSTIFICATION : vous ne conseillez pas un montage. Vous alertez.\n\nRISQUES : requalification, fausse nature d'emploi, promesse.\n\nERREURS FRÉQUENTES : « tout le monde fait du freelance ».\n\nQUALIFICATION : politique interne ; L. 5331-3 ; SP-F39588. Vous n'inventez pas les critères de requalification.\n\nRÉFÉRENCE : L5331-3, SP-F39588."
            },
            {
              "block_type": "heading",
              "content": "S79 — Multi-postes : un candidat pour deux jobs"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nLa même personne matche un poste qualité et un poste supply. Deux managers la veulent en exclusivité. Chacun vous demande de cacher l'autre process.\n\nQUESTION\nQuelle conduite ?\n\nA. Cacher : ça simplifie.\nB. Informer la candidate des deux pistes internes, coordonner les agendas, et ne pas faire deux offres surprises le même jour sans RH.\nC. La pousser vers le manager le plus senior.\nD. La faire échouer sur l'un pour libérer l'autre."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Transparence interne et candidat. Deux offres simultanées mal calées : chaos et écrits à risque (SP-F39588).\n\nJUSTIFICATION : la personne décide, l'entreprise arbitre ses priorités, vous ne trichez pas sur un entretien.\n\nRISQUES : double promesse ; perte de la candidate.\n\nERREURS FRÉQUENTES : secret inter-managers ; sabordage.\n\nQUALIFICATION : bonne pratique ; politique interne ; SP-F39588.\n\nRÉFÉRENCE : SP-F39588."
            },
            {
              "block_type": "heading",
              "content": "S80 — Offre uniquement en anglais pour un poste à Lille"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nLe manager IT veut une offre 100 % anglais, titre « Supply Ninja », aucun équivalent français, travail à Lille. Il dit que « les talents sont internationaux ».\n\nQUESTION\nQue faites-vous ?\n\nA. Publier en anglais : modernité.\nB. Rédiger en français, expliquer les termes sans équivalent, et éventuellement joindre une version anglaise, sans intitulé fantaisiste trompeur.\nC. Garder « Ninja » en français autour.\nD. Ne pas publier en France, seulement à l'étranger, pour éviter L. 5331-4."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. L. 5331-4 : offre en français si le travail s'effectue en France ; terme étranger sans équivalent : description française suffisamment détaillée. « Ninja » peut aussi induire en erreur sur la nature (L. 5331-3).\n\nJUSTIFICATION : conformité + lisibilité. Une version EN en plus est possible.\n\nRISQUES : offre irrégulière.\n\nERREURS FRÉQUENTES : anglais only ; contournement géographique.\n\nQUALIFICATION : obligation L. 5331-4, L. 5331-3.\n\nRÉFÉRENCE : L5331-4, L5331-3."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Cover story. Neveu à 20/20. Process alibi. Volume sexiste. Freelance bricolé. Anglais only à Lille."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Pour S73, rédigez la note au dossier (conflit d'intérêts, notes réelles, phrase à RH)."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "La note dit : lien de parenté signalé par le DG, entretien identique, scores X/Y, écarts WMS, pas de majoration. Demande à RH de confirmer si une décision d'autorité se substitue à l'évaluation — auquel cas ce n'est plus présenté comme un choix « meilleur candidat »."
            }
          ],
          "position": 7
        },
        {
          "title": "Sourcing, annonces, volume digital et éthique de recherche",
          "description": "Dix situations sur l'annonce, les booléens, le vivier, le diplôme et la langue.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 28,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous évitez les allégations d'annonce, les booléens discriminants, et le sourcing qui confond diplôme, langue et origine."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "L'annonce est un acte juridique (L. 5331-2, L. 5331-3, L. 5331-4) autant qu'un marketing. Le sourcing booléen peut reproduire des discriminations (écoles, prénoms, « native », âge). L. 1132-1 cite la capacité à s'exprimer dans une langue autre que le français comme critère protégé : exiger le français se justifie par le poste, pas par « native »."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Relire l'annonce avec la grille d'interdits. Relire les requêtes : pas de filtres d'âge, de sexe, de photo. Documenter les canaux."
            },
            {
              "block_type": "heading",
              "content": "Bibliothèque de situations S81 à S90"
            },
            {
              "block_type": "heading",
              "content": "S81 — Salaire dans l'annonce : le manager exige de le cacher"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nLe manager refuse toute fourchette. Un collègue affirme que « depuis la directive européenne, c'est obligatoire de mettre le salaire, donc on n'a plus le choix ». Date de vérification des sources : 13/10/2026.\n\nQUESTION\nQuelle conduite ?\n\nA. Affirmer au manager que c'est déjà obligatoire en droit français, point.\nB. Distinguer : pas (encore) une obligation interne française consolidée à la date des sources, directive UE 2023/970 en transposition, bonne pratique d'indiquer une fourchette vraie, interdit de mentir sur le salaire.\nC. Mettre un salaire gonflé « pour coller à l'Europe ».\nD. Ne jamais indiquer le salaire, même après transposition, par principe."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Ne pas affirmer que l'affichage est déjà obligatoire en France sans vérifier le texte de transposition en vigueur le jour J. Ne pas mentir sur le chiffre (L. 5331-3). La fourchette vraie est une bonne pratique / future obligation.\n\nJUSTIFICATION : legal-sources.json UE-transparence-salariale, fiche Service-Public 02/10/2025.\n\nRISQUES : conseil juridique faux ; allégation trompeuse.\n\nERREURS FRÉQUENTES : « c'est déjà la loi » ; silence = mensonge.\n\nQUALIFICATION : droit européen en transposition ; L. 5331-3 ; bonne pratique.\n\nRÉFÉRENCE : UE-transparence-salariale, L5331-3."
            },
            {
              "block_type": "heading",
              "content": "S82 — Fausse urgence dans l'annonce"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nLe texte dit « embauche immédiate, poste à pourvoir hier, 15 postes ». Il y a un poste, prise de fonction dans trois mois, process de cinq semaines.\n\nQUESTION\nQue faites-vous ?\n\nA. Garder l'urgence : ça booste les clics.\nB. Corriger : un poste, date réaliste, pas d'allégation de volume.\nC. Mettre 15 postes et recaler 14 personnes.\nD. Écrire « immédiat » et expliquer à l'entretien le vrai calendrier."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. L. 5331-3 : existence, nature, description. Le clickbait n'est pas un canal RH.\n\nJUSTIFICATION : 15 postes fictifs = tromperie. Calendrier faux = tromperie.\n\nRISQUES : offre irrégulière, afflux ingérable, réputation.\n\nERREURS FRÉQUENTES : marketing d'annonce copié des jobboards agressifs.\n\nQUALIFICATION : obligation L. 5331-3.\n\nRÉFÉRENCE : L5331-3."
            },
            {
              "block_type": "heading",
              "content": "S83 — Requêtes booléennes qui filtrent les écoles et les prénoms"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nUn consultant vous donne sa requête : (HEC OR ESSEC) NOT (Mohamed OR Fatima) AND « native French ». Il dit que c'est « pour coller au comité de direction ».\n\nQUESTION\nQuelle conduite ?\n\nA. L'utiliser : ça marche chez lui.\nB. Refuser : filtre d'origine / nom / religion supposée / langue maternelle, sans lien nécessaire ; construire une requête sur les compétences.\nC. Enlever les prénoms mais garder native French et HEC only.\nD. Lancer la requête et « ne pas noter » le motif."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. L. 1132-1 (origine, nom, convictions, langue autre que le français). Un diplomaire exclusif peut être une discrimination indirecte s'il n'a pas de lien nécessaire (L. 1221-6 / pertinence L. 1221-9).\n\nJUSTIFICATION : le COMEX n'autorise pas un filtre illicite. « Ne pas noter » n'efface pas l'acte.\n\nRISQUES : discrimination systémique.\n\nERREURS FRÉQUENTES : booléen magique ; école = talent.\n\nQUALIFICATION : obligation L. 1132-1 ; L. 1221-6 ; L. 1221-9.\n\nRÉFÉRENCE : L1132-1, L1221-6, L1221-9."
            },
            {
              "block_type": "heading",
              "content": "S84 — Exigence d'un français « sans accent »"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nLe poste est un coordinateur interne, 95 % écrit et oral avec des équipes françaises. Le manager : « Pas d'accent, les opérateurs ne comprennent pas. »\n\nQUESTION\nQue faites-vous ?\n\nA. Filtrer les accents en entretien.\nB. Évaluer la capacité à communiquer sur le poste (clarté, vocabulaire métier), sans critère d'origine ou d'accent comme proxy, et recadrer le manager.\nC. Exiger un test de français littéraire niveau agrégation.\nD. Écarter tout candidat né hors de France."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. La langue nécessaire au poste s'évalue. L'accent et le lieu de naissance sont des proxies d'origine (L. 1132-1). La capacité à s'exprimer dans une langue autre que le français est un critère protégé : ici, c'est le français du job qui compte, pas la chasse à l'accent.\n\nJUSTIFICATION : mise en situation orale métier, identique pour tous.\n\nRISQUES : discrimination. Test disproportionné (L. 1221-9).\n\nERREURS FRÉQUENTES : accent = incompétence ; nationalité.\n\nQUALIFICATION : L. 1132-1, L. 1221-9.\n\nRÉFÉRENCE : L1132-1, L1221-9."
            },
            {
              "block_type": "heading",
              "content": "S85 — Candidat qui refuse une information professionnelle"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nEn préqual, vous demandez les dates de disponibilité et l'habilitation chariot si le poste la requiert. Le candidat refuse « par principe, trop d'infos ». Il répond sur le reste.\n\nQUESTION\nQuelle conduite ?\n\nA. Écarter : un refus = mensonge.\nB. Expliquer le lien avec l'emploi (L. 1221-6), proposer de répondre plus tard par écrit, et ne pas exiger d'autres infos (enfants, santé).\nC. Insister sur la santé « pour les habilitations ».\nD. Poursuivre sans jamais obtenir la disponibilité."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Les infos liées à l'emploi sont légitimes. Le candidat répond de bonne foi (L. 1221-6) mais vous expliquez le pourquoi. La santé n'est pas à collecter par le recruteur junior (médecine du travail le moment venu).\n\nJUSTIFICATION : pédagogie puis, si refus persistant sur un must-have (disponibilité, habilitation), écart professionnel documenté.\n\nRISQUES : collecte santé ; recalé punitif.\n\nERREURS FRÉQUENTES : tout refus = insolence ; glissement médical.\n\nQUALIFICATION : L. 1221-6 ; CNIL minimisation.\n\nRÉFÉRENCE : L1221-6, CNIL-guide."
            },
            {
              "block_type": "heading",
              "content": "S86 — Demande de casier judiciaire"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nPour un poste de coordinateur supply sans contact argent ni mineurs, le manager veut un extrait de casier « on ne sait jamais ». Aucune politique interne ne le prévoit.\n\nQUESTION\nQue faites-vous ?\n\nA. Le demander à tous « pour égalité ».\nB. Refuser de collecter cette donnée sans cadre RH / légal identifié ; ce n'est pas un réflexe junior.\nC. Le demander seulement aux candidats « qui ont une tête ».\nD. Fouiller les bases publiques d'affaires judiciaires."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Donnée très sensible, finalité et base à faire qualifier par RH. L. 1221-6 : lien direct et nécessaire — ici non démontré. Fouille et ciblage à la tête : discrimination (apparence, origine).\n\nJUSTIFICATION : vous n'inventez pas l'autorisation. Égalité n'autorise pas une collecte excessive.\n\nRISQUES : RGPD, discrimination, collecte illicite.\n\nERREURS FRÉQUENTES : « on ne sait jamais » ; OSINT judiciaire.\n\nQUALIFICATION : L. 1221-6 ; CNIL ; politique interne.\n\nRÉFÉRENCE : L1221-6, CNIL-guide."
            },
            {
              "block_type": "heading",
              "content": "S87 — Vérification du titre de séjour"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nUn candidat n'a pas encore les pièces. Le manager dit « on ne prend pas d'étrangers, trop compliqué ». Les RH gèrent l'autorisation de travail le cas échéant.\n\nQUESTION\nQuelle conduite ?\n\nA. Écarter tous les noms « étrangers ».\nB. Ne pas faire de la nationalité un filtre de sourcing ; coordonner avec RH l'autorisation de travailler, sans harceler ni collecter des pièces trop tôt hors process.\nC. Demander le passeport à tous dès la CVthèque.\nD. Promettre que l'entreprise « s'occupe toujours des papiers » sans le savoir."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. L'origine / la nationalité comme motif d'écartement : L. 1132-1. L'autorisation de travailler est un sujet réel, RH, pas un prétexte. Promettre un accompagnement inexistant est trompeur. Collecte trop précoce de pièces d'identité : CNIL minimisation.\n\nJUSTIFICATION : process RH. Pas de tri patronymique.\n\nRISQUES : discrimination ; promesse ; données excessives.\n\nERREURS FRÉQUENTES : patronyme = papiers ; « trop compliqué ».\n\nQUALIFICATION : L. 1132-1 ; CNIL ; politique interne.\n\nRÉFÉRENCE : L1132-1, CNIL-guide."
            },
            {
              "block_type": "heading",
              "content": "S88 — Message d'approche copié-collé mensonger"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nLe template d'approche dit : « Votre profil a particulièrement retenu l'attention de la direction, entretien assuré. » Ce n'est pas vrai : c'est un InMail de volume.\n\nQUESTION\nQue faites-vous ?\n\nA. Garder : le taux de réponse est bon.\nB. Réécrire un message honnête (poste, pourquoi ce profil, pas de fausse shortlist direction).\nC. Ajouter « urgent, 15 postes ».\nD. Utiliser le compte LinkedIn d'un directeur sans son accord."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Loyauté. L. 5331-3 si l'emploi ou le process est déformé. Usurper le compte d'un directeur : déontologie et identité.\n\nJUSTIFICATION : le taux de réponse ne blanchit pas le mensonge.\n\nRISQUES : réputation, allégation, incident de compte.\n\nERREURS FRÉQUENTES : templates menteurs ; urgence fictive.\n\nQUALIFICATION : bonne pratique ; L. 5331-3.\n\nRÉFÉRENCE : L5331-3."
            },
            {
              "block_type": "heading",
              "content": "S89 — Candidat handicap non déclaré, aménagement visible demandé"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nSans mention RQTH, un candidat demande une salle accessible et 15 minutes de plus sur un cas écrit. Le manager : « S'il demande déjà ça, il ne tiendra pas. Recale. »\n\nQUESTION\nQuelle conduite ?\n\nA. Recaler : trop de demandes.\nB. Accorder l'accessibilité et un aménagement raisonnable de l'évaluation, sans exiger un dossier médical, et évaluer les aptitudes.\nC. Exiger la RQTH pour « justifier ».\nD. Lui faire un oral plus dur « pour compenser l'aménagement »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Handicap / état de santé : L. 1132-1. Aménager l'évaluation, ce n'est pas baisser le niveau du poste. Exiger la RQTH ou durcir le reste : discrimination. Pas de dossier médical (L. 1221-6, CNIL).\n\nJUSTIFICATION : aptitudes professionnelles. Logistique d'entretien accessible.\n\nRISQUES : discrimination, données santé.\n\nERREURS FRÉQUENTES : demande d'accès = inaptitude ; compensation punitive.\n\nQUALIFICATION : L. 1132-1, L. 1221-6 ; bonne pratique accessibilité.\n\nRÉFÉRENCE : L1132-1, L1221-6, CNIL-guide."
            },
            {
              "block_type": "heading",
              "content": "S90 — Candidat qui arrive en retard"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nLe candidat prévient d'un retard train de 25 minutes. Le manager veut annuler et noter 0 « non-respect ». Un autre candidat, hier, a eu 20 minutes de retard sans préavis et a été vu « parce que c'est un pote du chef ».\n\nQUESTION\nQue faites-vous ?\n\nA. Annuler celui qui prévient, garder le pote.\nB. Appliquer la même règle aux deux, reporter si besoin, et ne pas transformer un incident de transport en critère moral, surtout avec un traitement de faveur.\nC. Noter « non-respect » seulement pour celui qui prévient.\nD. Faire l'entretien dans le hall en 5 minutes pour « lui apprendre »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Égalité de traitement. Un retard annoncé n'est pas plus grave qu'un retard non annoncé. L'humiliation dans le hall n'est pas une méthode (L. 1221-9).\n\nJUSTIFICATION : faits, identiques. Le réseau du chef n'est pas un critère (voir S73).\n\nRISQUES : inéquité, favoritisme.\n\nERREURS FRÉQUENTES : punir le professionnel qui prévient.\n\nQUALIFICATION : bonne pratique ; L. 1221-9.\n\nRÉFÉRENCE : L1221-9."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Dire que le salaire est déjà obligatoire. Clickbait 15 postes. Booléen de prénoms. Accent. Casier « on ne sait jamais »."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Réécrivez la requête de S83 en compétences (WMS, planning, Excel, 3×8) sans école exclusive ni prénom ni native."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Exemple : (\"WMS\" OR \"warehouse management\") AND (planning OR ordonnancement) AND (Excel OR PowerQuery) AND (\"3x8\" OR nuit OR équipes) — puis revue humaine. Pas de NOT prénoms. Pas de native. Les écoles en OR peuvent être un signal faible, jamais un AND exclusif sans lien."
            }
          ],
          "position": 8
        },
        {
          "title": "Intégration, DPAE, éthique personnelle et cas limites",
          "description": "Dix situations sur la finalisation, le préboarding, le conflit d'intérêts et le relais à l'intégration.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 30,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous clôturez proprement : DPAE avec les RH, pas de promesses d'intégration inventées, conflit d'intérêts déclaré, relais au manager d'accueil."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La DPAE est obligatoire avant la prise de fonction ou le début de la période d'essai, au plus tôt dans les 8 jours précédant l'embauche (Service-Public F23107 / Urssaf). C'est une obligation de l'employeur, pas du junior isolé ; vous coordonnez. Vous n'inventez pas d'autres délais. Le recruteur n'est pas l'intégrateur, mais un relais (outils, contacts, première semaine)."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Checklist RH avant J1. Pas d'ami non déclaré dans le process. Messages de refus aux non-retenus avant l'arrivée du retenu. Passage de relais écrit."
            },
            {
              "block_type": "heading",
              "content": "Bibliothèque de situations S91 à S100"
            },
            {
              "block_type": "heading",
              "content": "S91 — DPAE oubliée"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nLe candidat arrive lundi 8 h. Vendredi, personne n'a parlé de DPAE. Le manager dit « ce n'est qu'un papier, on fera ça la semaine prochaine ». Vous êtes junior, pas le déclarant Urssaf.\n\nQUESTION\nQuelle conduite ?\n\nA. Laisser venir : ce n'est pas votre signature.\nB. Alerter RH / employeur immédiatement : la DPAE se fait avant la prise de fonction ou le début de la période d'essai, au plus tôt dans les 8 jours précédant l'embauche ; vous ne reportez pas à la semaine suivante.\nC. Remplir une DPAE vous-même avec un faux identifiant.\nD. Demander au candidat de dire qu'il a commencé mercredi."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. SP-F23107. Vous n'inventez pas un identifiant. Vous ne faites pas antedater le début. Reporter après J1 n'est pas conforme à la règle rappelée.\n\nJUSTIFICATION : coordination. Urgence vraie.\n\nRISQUES : manquement employeur ; mensonge de date.\n\nERREURS FRÉQUENTES : « ce n'est qu'un papier » ; faire commencer sous un faux jour.\n\nQUALIFICATION : obligation légale de l'employeur (DPAE) ; votre rôle : alerte et coordination.\n\nRÉFÉRENCE : SP-F23107."
            },
            {
              "block_type": "heading",
              "content": "S92 — Candidat qui veut le contrat avant de démissionner"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nLe finaliste demande le projet de contrat et les documents d'information avant de démissionner. Le manager : « S'il fait ça, c'est qu'il n'a pas confiance, on passe au second. » RH a un projet validable.\n\nQUESTION\nQue faites-vous ?\n\nA. Écarter : manque de confiance.\nB. Transmettre les documents validés RH, c'est un geste professionnel, pas un affront.\nC. Promettre oralement que « le contrat sera le même que tout le monde » sans pièce.\nD. Envoyer un contrat non validé pour aller vite."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Demander à lire avant de démissionner est prudent, pas un critère d'écartement. Un oral vague ou un contrat non validé : risque SP-F39588 / écart d'avantages (S14).\n\nJUSTIFICATION : loyauté. Qualité de l'écrit.\n\nRISQUES : démission sur du vent ; écrit sauvage.\n\nERREURS FRÉQUENTES : test de confiance inversé.\n\nQUALIFICATION : bonne pratique ; politique interne ; SP-F39588.\n\nRÉFÉRENCE : SP-F39588."
            },
            {
              "block_type": "heading",
              "content": "S93 — Période d'essai utilisée comme filet abusif"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nLe manager : « On l'embauche, si c'est pas le bon on cassera l'essai, donc on peut se permettre un doute fort sur les compétences. » Le doute porte sur un must-have WMS.\n\nQUESTION\nQuelle conduite ?\n\nA. Embaucher : l'essai est fait pour ça.\nB. Refuser de remplacer l'évaluation par l'essai : embaucher malgré un doute fort sur un must-have est une mauvaise pratique, et l'essai n'est pas un CDD de test bricolé.\nC. Promettre au candidat qu'on ne rompra jamais l'essai.\nD. Allonger oralement l'essai « le temps qu'on soit sûrs »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. L'essai a un cadre légal (vous ne le détaillez pas au-delà de ce que RH valide, vous n'inventez pas de durées). Ce n'est pas une excuse pour un recrutement bâclé. Promettre de ne jamais rompre, ou allonger à l'oral, est imprudent (écrits, SP-F39588 analogie sur les engagements).\n\nJUSTIFICATION : qualité de la décision d'embauche.\n\nRISQUES : échec J+20, engagement oral, durée d'essai non maîtrisée.\n\nERREURS FRÉQUENTES : essai = filet ; promesse inverse.\n\nQUALIFICATION : bonne pratique ; politique interne / RH sur l'essai. Ne pas inventer la durée légale dans la leçon."
            },
            {
              "block_type": "heading",
              "content": "S94 — Onboarding : le recruteur disparaît"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nLe CDI est signé. Le manager dit « merci, on n'a plus besoin de toi ». Aucun computer, aucun tuteur, le badge n'est pas commandé. La personne arrive lundi.\n\nQUESTION\nQue faites-vous ?\n\nA. Clôturer le dossier recrutement, ce n'est plus vous.\nB. Faire un passage de relais écrit (checklist J-7 / J1), alerter sur les manques, et prévenir la personne des infos vraies, sans promettre un tuteur qui n'existe pas.\nC. Promettre un parrain, un laptop et une formation 3 jours pour rassurer.\nD. Arriver lundi à sa place pour faire l'intégration."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Le junior n'est pas le manager d'accueil, mais il ne laisse pas un trou. Il ne promet pas des moyens fictifs (L. 5331-3 analogie sur les avantages ; loyauté).\n\nJUSTIFICATION : préboarding. Faits. Escalade.\n\nRISQUES : départ immédiat, promesse d'intégration fausse.\n\nERREURS FRÉQUENTES : disparition ; overpromise J1.\n\nQUALIFICATION : bonne pratique ; politique interne onboarding."
            },
            {
              "block_type": "heading",
              "content": "S95 — Conflit d'intérêts : ami du recruteur"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nUn ami proche postule. Vous le savez. Le manager vous demande de préqualifier « comme les autres ». Vous pensez pouvoir rester neutre.\n\nQUESTION\nQuelle conduite ?\n\nA. Préqualifier en silence : vous êtes professionnel.\nB. Déclarer le conflit, vous retirer de l'évaluation, et faire reprendre le dossier par un autre.\nC. Le recaler d'office pour éviter le soupçon.\nD. Le sur-noter pour « compenser » le soupçon inverse."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. La neutralité proclamée ne suffit pas. Recaler ou sur-noter : biais inverse. La déclaration est la seule voie propre.\n\nJUSTIFICATION : déontologie. Traçabilité. Égalité de traitement vis-à-vis des autres candidats.\n\nRISQUES : favoritisme, accusation, notes infondées.\n\nERREURS FRÉQUENTES : « je gère » ; sacrifice de l'ami.\n\nQUALIFICATION : politique interne déontologie ; bonne pratique."
            },
            {
              "block_type": "heading",
              "content": "S96 — Candidat en arrêt : le manager veut « savoir »"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nEntre l'acceptation et J1, vous apprenez qu'une personne est en arrêt. Le manager veut le motif médical et envisager de retirer l'offre. L'écrit d'embauche est déjà envoyé (modèle offre validé RH).\n\nQUESTION\nQue faites-vous ?\n\nA. Demander le motif et retirer si c'est « long ».\nB. Ne pas collecter de donnée de santé, alerter RH : état de santé = critère protégé, et tout retrait d'écrit se qualifie avec RH (offre vs promesse, SP-F39588).\nC. Féliciter le manager de son anticipation.\nD. Poser la question via un message « comment vas-tu vraiment ? »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. L. 1132-1 (santé). L. 1221-6. Retrait : SP-F39588, pas un acte junior. Le message « vraiment » est une collecte déguisée.\n\nJUSTIFICATION : médecine du travail n'est pas le recruteur. Pas de délai d'arrêt à inventer comme motif d'embauche.\n\nRISQUES : discrimination santé ; retrait mal calé.\n\nERREURS FRÉQUENTES : enquête médicale ; compassion inquisitrice.\n\nQUALIFICATION : L. 1132-1, L. 1221-6 ; SP-F39588.\n\nRÉFÉRENCE : L1132-1, L1221-6, SP-F39588."
            },
            {
              "block_type": "heading",
              "content": "S97 — Refus des non-retenus après signature"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nLe retenu a signé. Trois finalistes n'ont pas de mail de refus. Le manager veut attendre J15 « au cas où l'essai se passe mal », tout en leur disant que le process « avance bien ».\n\nQUESTION\nQuelle conduite ?\n\nA. Les garder au chaud avec un mensonge d'avancée.\nB. Notifier un refus vrai ou une mise en attente honnête (vivier, durée, opposition), sans les retenir sur un essai d'autrui non dit.\nC. Ne jamais refuser par écrit, seulement à l'oral flou.\nD. Les convoquer à un « dernier tour » fictif."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. File d'attente sur l'essai d'un tiers sans le dire : déloyal. Un dernier tour fictif : L. 5331-3 / L. 1221-8. L'oral flou ne protège pas.\n\nJUSTIFICATION : clôture ou transparence. Plan B interne n'oblige pas à tromper.\n\nRISQUES : trois désistements de personne, réputation, données actives.\n\nERREURS FRÉQUENTES : réservoir d'essai ; fiction de tour.\n\nQUALIFICATION : bonne pratique ; L. 1221-8 ; L. 5331-3 ; CNIL.\n\nRÉFÉRENCE : L1221-8, L5331-3, CNIL-guide."
            },
            {
              "block_type": "heading",
              "content": "S98 — Candidat mineur / apprentissage mal cadré"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nUn manager veut « un jeune de 17 ans, 35 h de nuit, comme les autres, CDI ». Vous n'êtes pas juriste du travail des mineurs. Les RH n'ont pas été saisies.\n\nQUESTION\nQue faites-vous ?\n\nA. Lancer le CDI de nuit : égalité avec les majeurs.\nB. Saisir RH avant tout process : le travail des mineurs et la nuit sont encadrés ; vous n'improvisez pas et vous n'inventez pas les durées.\nC. Mettre 18 ans dans l'annonce tout en visant 17 ans.\nD. Le payer de la main à la main le premier mois « pour tester »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Vous ne devenez pas code du travail des mineurs. Vous n'inventez pas de délai ni de dérogation. Mensonge d'âge dans l'annonce : L. 5331-3 + discrimination / protection des mineurs. Travail dissimulé : hors de question.\n\nJUSTIFICATION : escalation RH. Égalité n'efface pas les règles protectrices.\n\nRISQUES : infraction, allégation, travail dissimulé.\n\nERREURS FRÉQUENTES : « comme les autres » ; test cash.\n\nQUALIFICATION : obligation de saisir RH ; L. 5331-3 ; ne pas inventer le détail légal mineurs.\n\nRÉFÉRENCE : L5331-3."
            },
            {
              "block_type": "heading",
              "content": "S99 — Pression pour mentir au candidat sur le climat social"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nLe site est en conflit ouvert. Le manager : « Ne dis rien, sinon personne ne vient. Dis que l'ambiance est familiale. »\n\nQUESTION\nQuelle conduite ?\n\nA. Dire familiale : on recrute d'abord.\nB. Ne pas mentir sur le climat ; décrire les faits que vous avez le droit de dire (missions, équipe, contexte général validé RH), sans dénigrer ni cacher un élément décisif que RH autorise à formuler.\nC. Envoyer des extraits de tracts syndicaux au candidat.\nD. Promettre que le conflit sera fini avant J1."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Mentir sur l'ambiance est déloyal et peut s'apparenter à induire en erreur sur la description de l'emploi (L. 5331-3). Vous n'êtes pas un relais de tracts. Vous ne promettez pas la fin d'un conflit.\n\nJUSTIFICATION : vérité utile, validée, sans panique ni spin.\n\nRISQUES : départ J1, allégation, polarisation.\n\nERREURS FRÉQUENTES : storytelling familial ; dossier militant.\n\nQUALIFICATION : L. 5331-3 ; bonne pratique ; politique interne com.\n\nRÉFÉRENCE : L5331-3."
            },
            {
              "block_type": "heading",
              "content": "S100 — Le recruteur junior « closer » pour son objectif personnel"
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nIl vous reste un recrutement à « closer » pour votre objectif trimestriel. Le finaliste hésite. Vous pourriez dire que le second a déjà signé ailleurs (faux) et que le laptop custom est commandé (faux). Votre N+1 ferme les yeux « si ça signe ».\n\nQUESTION\nQuelle conduite ?\n\nA. Mentir : l'objectif d'abord, tout le monde le fait.\nB. Refuser le mensonge, garder les faits, accepter de ne pas signer, et ne pas truquer le report d'activité.\nC. Truquer le CRM « offer accepted » en attendant.\nD. Baisser le salaire dans l'outil pour que ça « rentre » puis promettre un rattrapage."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE : option B. Jamais recommander de mentir. Un objectif interne n'autorise ni fausse rareté, ni faux avantage (L. 5331-3), ni faux CRM, ni rattrapage salarial fantôme (SP-F39588 / équité).\n\nJUSTIFICATION : c'est la situation qui résume le métier : la pression ne change pas la règle.\n\nRISQUES : tout ce que le module a décrit, concentré en un geste.\n\nERREURS FRÉQUENTES : KPI > éthique ; N+1 complice comme permission.\n\nQUALIFICATION : obligation de ne pas induire en erreur (L. 5331-3) ; bonne pratique déontologique ; politique interne reporting.\n\nRÉFÉRENCE : L5331-3, SP-F39588."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Reporter la DPAE après J1. Punir celui qui veut lire le contrat. Essai-filet. Disparition à J-1. Ami non déclaré. Mentir pour un KPI."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Rédigez le mail de passage de relais de S94 (destinataires, 8 cases J-7, 5 cases J1, 3 risques) et la déclaration de conflit de S95 (deux phrases)."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Relais : RH, manager, IT, badge, tuteur nommé ou « non nommé — alerte », planning J1, documents. Risques : pas de PC, pas de tuteur, arrivée dans un service en 3×8 sans accueil. Conflit : « Monsieur X est un ami personnel. Je me déporte de l'évaluation et de la recommandation. Merci de réattribuer le dossier. »"
            }
          ],
          "position": 9
        },
        {
          "title": "Quiz — 15 décisions tirées des situations",
          "description": "Quinze questions issues des cas S01 à S100. Seuil de réussite : 75 %.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Répondez à chaque question. En cas d'échec, relisez le module puis retentez. Les questions juridiques essentielles exigent une justification : lisez toujours l'explication après validation."
            }
          ],
          "quiz": {
            "title": "Quiz — 15 décisions tirées des situations",
            "passing_score": 75,
            "max_attempts": null,
            "questions": [
              {
                "question": "S01 / S07. Un manager veut une embauche pour lundi et vous pousse à « closer » avant un COMEX. Quelle conduite ?",
                "question_type": "single_choice",
                "options": [
                  "A. Promettre la date ou envoyer une offre non tranchée pour calmer la pression.",
                  "B. Recadrer le délai, refuser une offre sans décision, proposer un plan réel (intérim de transition, point de décision).",
                  "C. Envoyer deux offres en parallèle, le premier qui signe gagne.",
                  "D. Promettre oralement le poste, l'écrit suivra après le COMEX."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "La pression n'autorise ni date miracle ni offre bancale. Distinguez urgence opérationnelle et CDI. Un oral « tu as le poste » est imprudent (SP-F39588). Option B seule tient."
              },
              {
                "question": "S03 / S81. Indiquer le salaire dans l'annonce, en France, à la date de vérification des sources du cours (13/10/2026) :",
                "question_type": "single_choice",
                "options": [
                  "A. C'est déjà une obligation interne française consolidée, on peut l'affirmer au manager sans réserve.",
                  "B. Ce n'est pas (encore) une obligation interne française consolidée ; une directive UE est en transposition ; mentir sur le salaire reste interdit (L. 5331-3) ; indiquer une fourchette vraie est une bonne pratique.",
                  "C. Il est interdit d'indiquer le salaire dans une offre.",
                  "D. On peut indiquer un salaire gonflé le temps d'attirer, puis recadrer."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "legal-sources.json, UE-transparence-salariale et L. 5331-3. Ne pas affirmer l'obligation française déjà en vigueur. Ne pas gonfler le chiffre."
              },
              {
                "question": "S41. Le manager demande si une candidate prévoit des enfants, « le poste est physique ». Que faites-vous ?",
                "question_type": "single_choice",
                "options": [
                  "A. Laisser la question : l'exception du poste physique existe.",
                  "B. Interrompre : grossesse / situation de famille sont protégées (L. 1132-1) ; pas de reformulation « disponible 24 mois ».",
                  "C. Reformuler sur les 24 mois de disponibilité ininterrompue.",
                  "D. Noter la réponse pour l'organisation, sans l'utiliser."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Il n'existe pas d'exception « poste physique » permettant d'écarter une femme enceinte ou de poser cette question. L. 1132-1 et L. 1221-6. La reformulation vise le même objet illicite."
              },
              {
                "question": "S42. Un manager veut trier les CV sur la photo et écarter une personne « qui ne passera pas auprès des clients ». Conduite ?",
                "question_type": "single_choice",
                "options": [
                  "A. Trier sur la photo, l'image fait partie de tout métier.",
                  "B. Refuser le tri sur l'apparence et l'origine ; évaluer les compétences (L. 1132-1, L. 1221-6).",
                  "C. Exiger une photo de tous pour égaliser les chances.",
                  "D. Laisser les photos au manager en se disant que vous, vous ne vous en servez pas."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Apparence et origine sont protégées. Exiger la photo augmente le risque. Laisser le filtre au manager, c'est le laisser opérer."
              },
              {
                "question": "S51. Un candidat demande l'accès à toutes ses données. Le CRM contient « trop vieux, pas le feeling ». Que faire ?",
                "question_type": "single_choice",
                "options": [
                  "A. Supprimer le dossier pour n'avoir plus rien à donner.",
                  "B. Orienter vers RH / DPO, ne pas détruire, faire recadrer le commentaire illicite.",
                  "C. Ignorer : un non-retenu n'a pas de droit d'accès.",
                  "D. Envoyer le CRM brut sans RH, commentaire d'âge compris, « transparence totale »."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le droit d'accès existe. Détruire pour y échapper est une faute (et peut contrarier une conservation probatoire, L. 1134-5 / référentiel CNIL). Le commentaire d'âge est discriminatoire."
              },
              {
                "question": "S62 / S63. Un e-mail manager dit « nous vous promettons le poste » avec salaire et date. Le budget saute. Conduite junior ?",
                "question_type": "single_choice",
                "options": [
                  "A. Retirer en douce et écrire que ce n'était qu'une piste.",
                  "B. Alerter RH / juridique : formulation potentiellement de promesse unilatérale (SP-F39588) ; ne pas bricoler le retrait.",
                  "C. Un SMS « finalement non » suffit, ce n'est pas un contrat.",
                  "D. Conseiller au candidat de mentir à son employeur actuel pour gagner du temps."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "SP-F39588 : la promesse unilatérale peut valoir contrat ; le retrait s'analyse alors en licenciement sans cause réelle et sérieuse. Terrain RH / juridique. Jamais conseiller de mentir."
              },
              {
                "question": "S54. Une IA classe les CV, le top 10 sans aucune femme, candidats non informés. Que faire ?",
                "question_type": "single_choice",
                "options": [
                  "A. Suivre le top 10 : l'outil est objectif.",
                  "B. Ne pas limiter l'examen au ranking, informer (L. 1221-8), contrôler les biais, alerter RH / DPO.",
                  "C. Renommer l'IA « aide à la lecture » et continuer à n'ouvrir que le top 10.",
                  "D. Injecter le genre dans le modèle sans règle pour rééquilibrer."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L. 1221-8, L. 1221-9, L. 1132-1. L'IA n'est pas objective par nature. Un top 10 sans femme est un signal. Le contrôle humain doit être réel."
              },
              {
                "question": "S73. Le DG envoie le CV de son neveu et veut le « bon gamin » en poste. Votre rôle ?",
                "question_type": "single_choice",
                "options": [
                  "A. Le retenir : autorité du DG.",
                  "B. Même grille, tracer le conflit d'intérêts, ne pas maquiller les notes.",
                  "C. Entretien plus dur pour montrer l'équité.",
                  "D. Écarter sans entretien pour éviter le soupçon."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Cooptation = canal, pas passe-droit. Falsifier les notes est une faute. Entretien punitif ou refus aveugle ne sont pas des méthodes pertinentes (L. 1221-9)."
              },
              {
                "question": "S31. Deux notes égales. Le manager veut le candidat qui habite le plus près. Conduite ?",
                "question_type": "single_choice",
                "options": [
                  "A. Accepter : moins d'absences, bon sens.",
                  "B. Refuser le critère de résidence (L. 1132-1) et départager sur des preuves professionnelles.",
                  "C. Pile ou face, pour la neutralité.",
                  "D. Écarter les deux."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le lieu de résidence est un critère protégé. Le pile ou face n'est pas une méthode pertinente (L. 1221-9)."
              },
              {
                "question": "S27. Le CRM du manager dit « un peu vieux, pas le feeling ». Le candidat demande le motif de refus. Que faire ?",
                "question_type": "single_choice",
                "options": [
                  "A. Transférer le commentaire brut.",
                  "B. Ne pas transmettre ce motif discriminatoire, recadrer le manager, répondre sur des critères professionnels, alerter RH.",
                  "C. Inventer « poste gelé » pour éviter le conflit.",
                  "D. Ignorer toute demande de motif, toujours."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L. 1132-1 (âge). Mentir sur un gel n'est pas une solution. Le droit d'accès se traite avec RH ; on ne « lave » pas un commentaire illicite en le transmettant tel quel au candidat comme motif officiel."
              },
              {
                "question": "S53. Un collègue a fouillé Instagram (mariage, post politique) et veut le mettre au CR. Conduite ?",
                "question_type": "single_choice",
                "options": [
                  "A. Tout ce qui est public est utilisable en recrutement.",
                  "B. Refuser : opinions politiques protégées, informations non pertinentes (L. 1132-1, L. 1221-6, CNIL).",
                  "C. Garder l'info sans l'écrire.",
                  "D. Demander au candidat de justifier ses posts."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Public ≠ pertinent ≠ licite. Les opinions politiques sont un critère protégé. Minimisation CNIL."
              },
              {
                "question": "S44. Annonce « jeune dynamique, 25-30 ans, native French, bonne présentation ». Action ?",
                "question_type": "single_choice",
                "options": [
                  "A. Publier : vocabulaire classique.",
                  "B. Refuser et réécrire sans âge, apparence, ni exigence de langue maternelle (L. 1132-1, L. 5331-2).",
                  "C. Publier en anglais pour contourner.",
                  "D. Enlever les chiffres d'âge mais garder « jeune » et « native »."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Âge, apparence, origine / langue maternelle : L. 1132-1. L. 5331-4 : si le travail est en France, l'offre est en français ; l'anglais ne contourne pas l'interdit."
              },
              {
                "question": "S61 / S67. Le poste est gelé ou déjà pourvu. Le manager veut laisser l'annonce ou dire « on n'a pas trouvé ». Conduite ?",
                "question_type": "single_choice",
                "options": [
                  "A. Mentir sur le profil et laisser l'annonce, ça fait du vivier.",
                  "B. Informer du gel / retirer ou indiquer clairement que c'est pourvu ; vivier seulement de façon informée (L. 5331-3, CNIL).",
                  "C. Dire à chacun qu'il est en finale.",
                  "D. Promettre une ouverture dans trois mois sans décision."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L. 5331-3 vise l'existence de l'emploi. Un vivier se dit comme vivier, pas comme poste ouvert. Pas de finale fictive."
              },
              {
                "question": "S43 / S89. Un candidat en situation de handicap demande un aménagement d'horaire ou d'accessibilité. Le manager veut recaler. Conduite ?",
                "question_type": "single_choice",
                "options": [
                  "A. Recaler : l'entreprise « n'est pas équipée ».",
                  "B. Ne pas écarter du seul fait du handicap ; analyser le poste avec RH / référent ; aménager l'évaluation sans dossier médical.",
                  "C. Exiger le détail médical et la RQTH avant tout entretien.",
                  "D. Convoquer à un entretien plus dur pour compenser l'aménagement."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L. 1132-1 (handicap, santé). L. 1221-6 et CNIL : pas de collecte médicale par le junior. L'aménagement d'évaluation n'est pas un abaissement du poste ni un prétexte à durcir le reste."
              },
              {
                "question": "S91 / S100. DPAE non faite la veille de J1, et tentation de mentir pour un KPI de signature. Quelle combinaison est correcte ?",
                "question_type": "single_choice",
                "options": [
                  "A. Laisser commencer et truquer le CRM si besoin, on régularisera.",
                  "B. Alerter RH : DPAE avant la prise de fonction ou le début de l'essai, au plus tôt dans les 8 jours précédents (SP-F23107) ; et refuser tout mensonge pour closer (L. 5331-3).",
                  "C. Antidater le début au mercredi et promettre un laptop fictif pour signer.",
                  "D. Remplir la DPAE avec un identifiant emprunté, l'objectif d'abord."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "SP-F23107 : calendrier DPAE, obligation employeur, coordination junior. S100 : jamais mentir pour un KPI. Antidater, emprunter un identifiant, faux laptop : fautes."
              }
            ]
          },
          "position": 10
        }
      ]
    },
    {
      "position": 21,
      "title": "Modèles de documents RH",
      "description": "Vous disposez de modèles complets pour cadrer, sourcer, évaluer, refuser, offrir et intégrer, avec consignes d'usage et interdits (discrimination, données excessives).",
      "lessons": [
        {
          "title": "Fiche de recueil du besoin et questionnaire manager",
          "description": "Deux documents pour sortir du brief oral et obtenir un cadrage écrit.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 24,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À l'issue de cette leçon, vous savez faire remplir une fiche de recueil et conduire un brief manager avec un questionnaire fermé, sans collecter d'informations discriminatoires."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le besoin n'existe pas tant qu'il n'est pas écrit. Un brief oral produit des critères changeants, des annonces inexactes et des évaluations incomparables. La fiche de recueil est le document de travail du recruteur ; le questionnaire structure l'entretien de brief. Ni l'un ni l'autre n'est un fichier de données candidats : ce sont des documents internes sur un emploi.\n\nL. 5331-3 interdit les allégations trompeuses dans l'offre qui naîtra de ce brief. L. 1221-6 et L. 1132-1 interdisent de transformer le brief en liste de critères protégés (âge, sexe, apparence, résidence, etc.)."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1) Envoyer la fiche 24 h avant le brief. 2) Conduire le brief avec le questionnaire (45 minutes). 3) Restituer une synthèse écrite au manager sous 24 h. 4) Faire valider must-have, fourchette, calendrier. 5) Archiver dans le dossier poste, pas dans une CVthèque."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "PME industrielle, 80 salariés, Lille. Le responsable logistique veut « quelqu'un qui tienne le planning ». Sans fiche, l'annonce devient un catalogue. Avec la fiche, on obtient : missions, 3×8, WMS, fourchette, intérim de transition possible."
            },
            {
              "block_type": "heading",
              "content": "Document 1 — Fiche de recueil du besoin"
            },
            {
              "block_type": "text",
              "content": "Usage : à remplir par le recruteur pendant / après le brief, puis à faire signer (ou valider par e-mail) par le manager et, selon politique interne, par RH. Ne pas y mettre de photo type du « profil idéal », ni d'âge cible, ni de sexe."
            },
            {
              "block_type": "code",
              "content": "FICHE DE RECUEIL DU BESOIN — RECRUTEMENT\nRéf. poste : ________    Date : ________    Recruteur : ________\nManager demandeur : ________    Service : ________    Site : ________\nN+1 du poste : ________    RH référent : ________\n\n1. CONTEXTE\nCréation / Remplacement (qui, date de départ, préavis) / CDD / Intérim / Autre : ________\nLe titulaire est-il informé ?  Oui / Non / Sans objet\nConfidentialité particulière :  Non / Oui (préciser le canal autorisé, sans cover story) :\nRaison du besoin (2 à 5 lignes, faits) :\n\n2. CONTRAT ET ORGANISATION\nType de contrat visé : CDI / CDD (motif, durée) / Intérim (durée) / Alternance / Autre\nTemps de travail : ________    Horaires / 3×8 / astreintes / déplacements :\nLieu de travail principal : ________    Télétravail selon politique interne :\nDate de prise de fonction visée (réaliste) : ________\nN+1, taille d'équipe, interfaces (production, transport, qualité, client) :\n\n3. MISSIONS (5 à 8 missions, verbes d'action, livrables)\n1.\n2.\n3.\n4.\n5.\nCritères de succès à 3 / 6 / 12 mois :\n\n4. RÉMUNÉRATION ET AVANTAGES (exactitude : L. 5331-3)\nFourchette fixe validée RH : ________ à ________ € brut annuel\nVariable / 13e mois / tickets / mutuelle / véhicule / autre (uniquement s'ils existent) :\nHors fourchette : le recruteur n'invente rien et n'annonce rien.\n\n5. CRITÈRES PROFESSIONNELS\nMust-have (3 à 5, observables, liés à l'emploi — L. 1221-6) :\nNice-to-have (3 à 5) :\nNon-critères (ce que le manager a dit et que l'on écarte : âge, sexe, photo, résidence, etc.) :\n\n6. PROCESS\nCanaux autorisés : interne / jobboard / école / cabinet / cooptation / autre\nNombre d'entretiens, interlocuteurs, tests (à annoncer au candidat — L. 1221-8) :\nQui décide / qui signe l'écrit d'embauche :\nBudget cabinet / annonces :\n\n7. VALIDATIONS\nManager : nom, date, « lu et approuvé »\nRH : fourchette, contrat, avantages\nPoints ouverts (infos manquantes) :"
            },
            {
              "block_type": "heading",
              "content": "Document 2 — Questionnaire de brief manager"
            },
            {
              "block_type": "text",
              "content": "Usage : guide d'entretien de cadrage. Le recruteur pose les questions, ne laisse pas le manager dicter une annonce discriminatoire. Les questions en italique interne sont des relances, pas un interrogatoire du candidat."
            },
            {
              "block_type": "code",
              "content": "QUESTIONNAIRE BRIEF MANAGER (45 min)\n\nA. POURQUOI CE POSTE MAINTENANT ?\n- Que se passe-t-il si le poste n'est pas pourvu dans 4 / 8 / 12 semaines ?\n- S'agit-il d'un pic (intérim / CDD) ou d'un besoin structurel (CDI) ?\n- Y a-t-il un candidat interne identifié ? Politique de publication interne ?\n\nB. UNE JOURNÉE TYPE\n- Décrivez une journée chargée et une journée normale.\n- Quels outils (WMS, ERP, Excel) ? Quelle autonomie de décision ?\n- Avec qui la personne se fâche-t-elle le plus souvent (transporteurs, production) ?\n\nC. MUST-HAVE VERSUS SOUHAITS\n- Si vous ne pouviez retenir que trois exigences, lesquelles ? Pourquoi ?\n- Qu'est-ce qui a fait échouer les deux derniers titulaires (faits, pas de personnes) ?\n- Quel diplôme est réellement nécessaire ? Que vaut une reconversion ?\n\nD. ARGENT ET CALENDRIER\n- Fourchette validée par qui ? Variable réel vs théorique ?\n- Date d'arrivée vs délai de marché : que proposons-nous en transition ?\n- Qui valide une exception salariale ?\n\nE. ÉVALUATION\n- Quelles mises en situation accepteriez-vous (planning, relance, tableau) ?\n- Comment départagerons-nous deux notes égales (critère professionnel) ?\n- Quelles questions vous vous interdisez (grossesse, âge, origine, santé, syndicat) ?\n\nINTERDITS DANS CE DOCUMENT ET DANS LE BRIEF\n- Âge cible, « jeune », pyramide des âges comme filtre.\n- Sexe, apparence, photo, prénom, « tête de l'emploi ».\n- Lieu de résidence comme critère d'écartement.\n- Nationalité, langue maternelle, accent.\n- Situation de famille, santé, handicap comme motif de recale automatique.\n- Cover story d'annonce (faux second site, 15 postes, salaire gonflé)."
            },
            {
              "block_type": "callout",
              "content": "QUALIFICATION : bonne pratique (cadrage écrit) ; politique interne (qui valide le budget) ; obligation L. 5331-3 (annonce future exacte), L. 1132-1 et L. 1221-6 (pas de critères protégés dans le brief). RÉFÉRENCE : L1132-1, L1221-6, L5331-3."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Laisser le manager dicter « 25-30 ans, native, bonne tête ». Recueillir le brief sur un coin de table sans restitution. Archiver la fiche dans un Drive personnel. Inventer la fourchette pour « débloquer »."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Manager absent : pas d'annonce. Remplacement confidentiel : canal discret, pas de cover story (module 20, S72). Brief gonflé : challenger les must-have (S02)."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Remplissez la fiche pour un coordinateur supply CDI en PME, avec trois must-have et deux infos encore manquantes. Ne mettez aucun critère d'âge."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Une fiche correcte a des missions mesurables (fiabilité du planning, relances transporteurs, tableau quotidien), une fourchette RH, un calendrier honnête, et une ligne « non-critères ». Une fiche incorrecte recopie « bac+5, 10 ans, jeune, mobile, native »."
            }
          ],
          "position": 0
        },
        {
          "title": "Fiche de poste et profil candidat",
          "description": "Deux documents distincts : l'emploi d'un côté, le portrait professionnel de l'autre.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous séparez la fiche de poste (l'emploi) du profil (ce que l'on cherche), pour éviter de coller un avatar discriminatoire sur une liste de missions."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La fiche de poste décrit l'organisation, les missions, les responsabilités, les conditions. Elle sert aussi après l'embauche. Le profil candidat traduit les missions en aptitudes observables. Mélanger les deux produit des annonces du type « jeune dynamique pour missions de planning ». L. 1221-6 : seules les informations en lien avec l'emploi. Un diplôme n'est un must-have que s'il est nécessaire."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Rédiger la fiche de poste avec le manager. En déduire le profil (must / nice / non-critères). Faire valider les deux. L'annonce naît de la fiche, pas du profil marketing."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "ETI agroalimentaire : la fiche dit « relayer les retards quais 5 h-13 h ». Le profil dit « a déjà tenu un planning d'expédition », pas « homme, 30 ans, permis, habitant à 10 km »."
            },
            {
              "block_type": "heading",
              "content": "Document 1 — Fiche de poste"
            },
            {
              "block_type": "code",
              "content": "FICHE DE POSTE\n\nIntitulé : Coordinateur / Coordinatrice supply chain\nService : Logistique    Site : Lille    Statut : ________\nN+1 : Responsable logistique    N-1 : aucun / magasinier(s) en appui\nContrat : CDI    Temps : plein    Horaires : 5 h 30 – 13 h 30 + astreinte planning selon usage du site\n\nRAISON D'ÊTRE\nFiabiliser le flux d'expédition quotidien (planning, quais, transporteurs, exceptions) pour tenir le taux de service convenu avec les clients internes (production, commercial).\n\nMISSIONS\n1. Construire et ajuster le planning d'expédition J / J+1 à partir de l'ERP et des contraintes quais.\n2. Relancer les transporteurs en cas d'écart, tracer les incidents, alerter le N+1 au-delà du seuil défini.\n3. Tenir le tableau de bord quotidien (retards, ruptures, taux de service) et l'expliquer en 10 minutes au brief 6 h.\n4. Coordonner magasin / production sur les priorités de picking.\n5. Contribuer aux plans d'actions qualité logistique (sinistres, écarts de stock liés à l'expédition).\nHors missions : pas de management hiérarchique d'équipe complète ; pas de négociation tarifaire transporteurs (achats).\n\nMOYENS ET CONDITIONS\nOutils : ERP, WMS, Excel. Équipements de protection. Déplacements exceptionnels vers un entrepôt secondaire.\nTélétravail : selon politique interne du site (à ne pas sur-promettre).\n\nRATTACHEMENT, INTERFACES, REMPLACEMENT\nInterfaces : production, magasin, qualité, commercial, transporteurs.\nRemplacement : N+1 / binôme à nommer.\n\nSÉCURITÉ, HABILITATIONS LIÉES AU POSTE (si nécessaires, pas un prétexte santé)\nHabilitation chariot : oui / non    Travail en entrepôt : oui\n\nNE PAS INSCRIRE\nÂge, sexe, apparence, nationalité, « native », situation de famille, état de santé, photo type."
            },
            {
              "block_type": "heading",
              "content": "Document 2 — Profil candidat (must / nice)"
            },
            {
              "block_type": "code",
              "content": "PROFIL CANDIDAT — lié à la fiche de poste ci-dessus\n\nMUST-HAVE (observables en CV, préqual, entretien, mise en situation)\n- A déjà construit ou ajusté un planning d'expédition / transport / production sur un outil (ERP, WMS ou tableur avancé).\n- Sait relater un incident transporteur ou quai avec faits, délai, action.\n- Disponible pour les horaires du poste (à vérifier en préqual, sans question familiale — L. 1221-6).\n- Français professionnel oral/écrit suffisant pour le brief de 6 h (évaluation par mise en situation, pas par l'accent ni l'origine — L. 1132-1).\n\nNICE-TO-HAVE\n- WMS nommé (l'entreprise forme si les bases planning existent).\n- Expérience 3×8 ou horaires décalés.\n- Tableau de bord (Excel, Power Query) déjà produit.\n- Reconversion logistique avec stage / alternance probants.\n\nVOIES D'ACCÈS ACCEPTÉES\nInterne magasin / ordonnancement ; externe industrie ; reconversion forces armées logistique ; intérim long sur quais.\n\nNON-CRITÈRES (rappel manager)\nÂge, photo, sexe, lieu de résidence comme filtre, diplôme bac+5 obligatoire, « native French », réseau local comme prétexte d'origine.\n\nPREUVES ATTENDUES\nExemples STAR, extrait de tableau (anonymisé), mise en situation planning 20 minutes (annoncée — L. 1221-8)."
            },
            {
              "block_type": "callout",
              "content": "QUALIFICATION : bonne pratique documentaire ; L. 1221-6 (lien avec l'emploi) ; L. 1132-1 (non-critères) ; L. 1221-8 (tests annoncés). RÉFÉRENCE : L1221-6, L1132-1, L1221-8."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Copier un profil LinkedIn « 10 ans + anglais courant + management ». Fusionner fiche et avatar. Oublier les horaires réels. Exiger un master sans lien."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Surqualification (S38) : le profil parle de motivation et de périmètre, pas d'âge. Handicap (S43) : le profil ne dit pas « valide, apte, sans aménagement »."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Transformez trois missions de la fiche en trois must-have observables. Écrivez un non-critère que le manager avait glissé."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Mission « tableau quotidien » → must-have « a déjà produit un suivi d'indicateurs et l'a expliqué à un N+1 ». Non-critère : « habiter à moins de 20 minutes » (résidence, L. 1132-1)."
            }
          ],
          "position": 1
        },
        {
          "title": "Grille de critères et plan de recrutement",
          "description": "Pondérer ce qui compte et séquencer le process avant de publier.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez pondérer des critères professionnels et publier un plan de recrutement (étapes, acteurs, délais de marché honnêtes, pas de délai légal inventé)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Sans pondération, deux notes égales se départagent sur un critère illicite (S31). Sans plan, le manager improvise des tours supplémentaires. L. 1221-9 : méthodes pertinentes. L. 1221-8 : le candidat est informé des méthodes. Le plan indique les tests, pas un « surprise stress » (S60)."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Grille validée avant la première CV. Plan validé avant l'annonce. Toute étape ajoutée en cours = information des candidats encore en lice."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Startup 40 personnes : le plan tient sur une page (préqual 20 min, un entretien manager, une mise en situation, une offre RH). L'ETI ajoute un panel : alors le plan le dit dès le début."
            },
            {
              "block_type": "heading",
              "content": "Document 1 — Grille de critères pondérés"
            },
            {
              "block_type": "code",
              "content": "GRILLE DE CRITÈRES — Coordinateur supply — réf. POSTE-____\nValidée manager / RH le : ________\nBarème : 1 insuffisant / 2 partiel / 3 acquis / 4 solide  |  note = score × poids\n\nCritère                          Poids   Preuve attendue                         Interdit d'y coller\nPilotage planning / flux           5     Exemple + cas 20 min                    Âge, « maturité »\nIncident transporteur / quai       4     STAR + traçabilité                      « Caractère »\nOutils (ERP/WMS/Excel)             3     Démo ou description précise             Diplôme comme proxy\nCommunication brief 6 h            3     Oral structuré                          Accent, origine\nHoraires du poste                  3     Disponibilité déclarée                  Enfants, conjoint\nMotivation / compréhension poste   2     Questions du candidat                   « Faim », look\n\nTotal max : 80 (5+4+3+3+3+2 = 20 × 4)\nSeuil d'entretien manager : 48/80 après préqual (ajustable, écrit)\nDépartage à notes égales : cas planning supplémentaire, PAS le domicile (L. 1132-1)\n\nNe pas ajouter de ligne : présentation physique, photo, prénom, école exclusive, syndicat, santé."
            },
            {
              "block_type": "heading",
              "content": "Document 2 — Plan de recrutement"
            },
            {
              "block_type": "code",
              "content": "PLAN DE RECRUTEMENT — réf. POSTE-____\nOuverture : ________    Pourvoi visé : ________ (hypothèse de marché, pas une promesse)\nRecruteur : ________    Manager : ________    RH : ________\n\nÉtape                    Qui              Délai indicatif     Livrable                 Info candidat (L. 1221-8)\n0. Cadrage               Recruteur+mgr    J0-J2               Fiche + grille + fourchette\n1. Publication interne   RH               selon politique     Annonce interne\n2. Annonce externe       Recruteur        J2                  Annonce FR exacte\n3. Sourcing              Recruteur        J2-J12              Canaux + booléens\n4. Analyse CV            Recruteur        continu             Grille CV + motifs\n5. Préqual 20-25 min     Recruteur        sous 5 j du CV      Script + CR\n6. Entretien manager     Manager+recr.    créneau tenu        Guide STAR\n7. Mise en situation     Recruteur        annoncée            Cas planning 20 min\n8. Shortlist             Recruteur        1 page              2 ou 3 profils\n9. Décision              Manager+RH       réunion 30 min      Grille complète\n10. Offre écrite         RH (signature)   modèle offre        PAS le mot promettre\n11. Refus / vivier       Recruteur        48 h après décision Messages types\n12. Préboarding          Recruteur+mgr    J-7                 Checklist\n13. DPAE                 Employeur/RH     avant J1 / essai    SP-F23107 (8 jours max avant)\n\nTransition opérationnelle si délai trop court : intérim / interne — décision RH, pas cover story.\n\nRôles\nRecruteur : process, conformité, relation candidat, recommandation.\nManager : expertise métier, décision, accueil.\nRH : contrat, rémunération, DPAE, écrits d'embauche.\n\nCe plan n'invente aucun délai légal de recrutement. Les seuls délais cités sont opérationnels ou, pour la DPAE, ceux de SP-F23107."
            },
            {
              "block_type": "callout",
              "content": "QUALIFICATION : bonne pratique ; L. 1221-8 et L. 1221-9 ; DPAE = obligation employeur SP-F23107 ; non-discrimination L. 1132-1. RÉFÉRENCE : L1221-8, L1221-9, L1132-1, SP-F23107."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Pondérer « feeling » à 10. Ajouter un test surprise. Promettre une embauche à J+10. Oublier la publication interne."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Volume (S76) : grille courte mais identique. Cabinet parallèle (S77) : le plan dit qui possède le dossier."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Calculez la note d'un candidat 3-3-2-3-3-2 sur la grille. Passe-t-il le seuil 48 ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "(3×5)+(3×4)+(2×3)+(3×3)+(3×3)+(2×2) = 15+12+6+9+9+4 = 55. Oui, au-dessus de 48. Un 1 sur le planning (poids 5) ferait chuter fortement : c'est le must-have."
            }
          ],
          "position": 2
        },
        {
          "title": "Modèle d'annonce d'emploi",
          "description": "Une annonce complète en français, exacte, non discriminatoire, plus une variante courte.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous rédigez une offre conforme : français, pas d'allégation, pas de critère illicite, rémunération non mensongère."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "L. 5331-4 : français si le travail s'effectue en France. L. 5331-3 : pas d'allégation fausse (existence, nature, rémunération, lieu). L. 5331-2 : pas de mention de sexe / situation de famille (exceptions très limitées, hors sujet ici). Affichage du salaire : pas (encore) obligation interne française consolidée (directive UE en transposition) ; fourchette vraie = bonne pratique. Mentir sur le salaire = interdit."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Partir de la fiche de poste. Relire avec la liste d'interdits. Faire valider RH la rémunération. Publier. Retirer dès que pourvu ou gelé (S67)."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Cabinet qui republie en anglais only un poste Lille : à corriger (S80). Jobboard qui ajoute « jeune dynamique » : à refuser."
            },
            {
              "block_type": "heading",
              "content": "Document 1 — Annonce complète"
            },
            {
              "block_type": "code",
              "content": "OFFRE D'EMPLOI (version longue — site carrière / Pôle emploi)\n\nIntitulé : Coordinateur / coordinatrice supply chain — CDI — Lille\nEmployeur : [Raison sociale] — [activité, taille, site]\nLieu de travail : Lille (préciser entrepôt / usine) — télétravail : selon politique interne (1 jour si tel est le cas, sinon ne pas l'écrire)\nContrat : CDI, temps plein\nHoraires : 5 h 30 – 13 h 30, rythme lié aux expéditions (à indiquer honnêtement)\nRémunération : fourchette 34 000 – 37 000 € brut annuel selon profil (uniquement si validée ; sinon ne pas inventer). Variable : uniquement s'il existe, sans « jusqu'à 80 k€ » fictif.\nPrise de fonction visée : [mois], sous réserve de process (pas « immédiat / 15 postes »).\n\nMissions\n- Construire le planning d'expédition J / J+1 et gérer les exceptions quais / transporteurs.\n- Tenir le tableau de bord quotidien et le brief opérationnel du matin.\n- Coordonner magasin et production sur les priorités.\n\nProfil recherché (lien avec l'emploi)\n- Expérience de planning flux (industrie, entrepôt, transport) ou reconversion avec mise en situation concluante.\n- Aisance tableur / ERP ou WMS (formation interne possible sur l'outil nommé).\n- Communication claire à l'oral pour un brief court.\n\nNous ne demandons pas de photo. Les candidatures sont étudiées au regard des aptitudes professionnelles (L. 1221-6).\n\nProcess (L. 1221-8)\nAnalyse de CV, préqualification téléphonique (20 min), entretien avec le manager, mise en situation planning (20 min), prise de références si accord.\n\nCandidater : [mail / ATS]  |  Informations données personnelles : [lien politique / mentions CNIL]\nContact recrutement : [nom, mail] — pas de compte perso.\n\nINTERDITS DANS L'ANNONCE\njeune, 25-30 ans, homme/femme (hors exceptions légales), native, bonne présentation, photo obligatoire, 15 postes fictifs, salaire gonflé, faux second site, « Ninja », anglais only pour un travail en France."
            },
            {
              "block_type": "heading",
              "content": "Document 2 — Variante courte jobboard"
            },
            {
              "block_type": "code",
              "content": "CDI — Coordinateur supply chain — Lille\nPlanning d'expédition, quais, transporteurs, tableau quotidien. Horaires 5h30-13h30.\nCDI, 34-37 k€ brut (si validé). Process : préqual, entretien, cas 20 min.\nSans photo. Candidatures : rh@...\nPas de « urgent 15 postes ». Pas de critère d'âge."
            },
            {
              "block_type": "callout",
              "content": "QUALIFICATION : obligations L. 5331-2, L. 5331-3, L. 5331-4 ; L. 1221-8 ; bonne pratique fourchette ; UE-transparence-salariale (pas encore obligation FR consolidée). RÉFÉRENCE : L5331-2, L5331-3, L5331-4, L1221-8, UE-transparence-salariale."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Copier l'annonce d'un concurrent. Laisser le jobboard ajouter « H/F jeune ». Oublier de retirer l'offre une fois pourvue."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Confidentiel : pas de fausse ouverture (S72). Gel : information vraie (S61)."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Barrez cinq formulations illicites ou trompeuses dans : « Cherche jeune supply ninja native, 15 postes immédiats, jusqu'à 80 k€, photo exigée, anglais only. »"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "À barrer : jeune (âge), ninja (nature floue / trompeuse), native (origine / langue), 15 postes immédiats (existence), 80 k€ (rémunération), photo, anglais only (L. 5331-4). Remplacer par l'annonce-modèle."
            }
          ],
          "position": 3
        },
        {
          "title": "Stratégie de sourcing et requêtes booléennes",
          "description": "Un plan de canaux et des requêtes sur compétences, sans filtres illicites.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous planifiez les canaux et écrivez des requêtes booléennes professionnelles, sans prénoms, sans âge, sans native."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le sourcing est une recherche d'aptitudes, pas une chasse à l'origine. Une requête NOT Mohamed est une discrimination (S83). LinkedIn stalking hors sujet est illicite (S53). L. 1221-8 : si vous utilisez un scoring, information."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Choisir 3 canaux maximum au départ. Écrire 2 requêtes (large / stricte). Mesurer le rendement. Pas de compte personnel. Pas de harcèlement de relance (S29)."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Industrie Lille : interne magasin + jobboard + approches WMS régionales. Pas besoin de 12 canaux."
            },
            {
              "block_type": "heading",
              "content": "Document 1 — Stratégie de sourcing"
            },
            {
              "block_type": "code",
              "content": "STRATÉGIE SOURCING — POSTE-____\nCible : profil must-have (planning, horaires, outils)\nMarché : tension estimée (qualitative, pas de statistique inventée) : ________\nBudget canaux : ________\n\nCanal              Objectif                  Volume visé     Message type     Risque à éviter\nMobilité interne   7 jours min si politique  tous éligibles  mail interne     process alibi\nJobboard A         candidatures actives      annonce exacte  annonce modèle   critères auto du board\nApproche LinkedIn  profils WMS / planning    20 approches/sem  modèle honnête  stalking, templates menteurs\nCooptation         primes selon politique    suivi           même grille      neveu maquillé\nAgence / cabinet   si tension                contrat clair   dédup            double présentation\nVivier             CV < reco CNIL 2 ans      recontact loyal opposition, pas « postulé hier »\n\nPilotage hebdo : nb approches, réponses, préqual, ratio femmes/hommes du flux (alerte biais, pas de quota bricolé illicite), délais.\n\nArrêt d'un canal : rendement nul ou biais manifeste (ex. 100 % d'un seul sexe sur un métier mixte) → revoir requête et annonce, alerter RH."
            },
            {
              "block_type": "heading",
              "content": "Document 2 — Requêtes booléennes"
            },
            {
              "block_type": "code",
              "content": "REQUÊTES (compétences, pas les personnes)\n\nA. LARGE\n(\"coordinateur\" OR coordinatrice OR \"chargé d'expédition\" OR ordonnancement OR \"planning transport\")\nAND (WMS OR ERP OR \"gestion de stock\" OR quais)\nAND (Lille OR \"Hauts-de-France\" OR Roubaix OR Tourcoing OR Douai)\n\nB. STRICTE\n(WMS OR \"warehouse management\" OR Reflex OR SAP)\nAND (planning OR \"taux de service\" OR expédition)\nAND (Excel OR \"tableau de bord\")\nAND (logistique OR supply)\n\nC. RECONVERSION\n(logistique OR ravitaillement OR \"supply chain\")\nAND (reconversion OR formation OR titre OR \"poec\" OR militaire)\nAND (planning OR stock OR transport)\n\nINTERDITS DANS LA REQUÊTE\nAND (jeune OR \"25-30\" OR HEC OR \"native French\")\nNOT (Mohamed OR Fatima OR \"plus de 50\")\nfiltre âge / sexe / photo de la plateforme utilisé pour écarter\n\nD. MESSAGE ASSOCIÉ : voir leçon messages — jamais « la direction a retenu votre profil » si c'est faux."
            },
            {
              "block_type": "callout",
              "content": "QUALIFICATION : bonne pratique sourcing ; obligation L. 1132-1 si la requête discrimine ; L. 1221-6 / L. 1221-9 ; CNIL (vivier, loyauté). RÉFÉRENCE : L1132-1, L1221-6, L1221-9, CNIL-guide."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Requêtes d'écoles. NOT prénoms. 200 InMails copiés. Vivier sans information."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "IA de ranking (S54) : pas dans la stratégie tant que L. 1221-8 n'est pas tenu. Confidentiel : approches nominatives, pas d'annonce menteuse."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Corrigez : (jeune OR HEC) NOT Fatima AND native AND Lille."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Supprimer jeune, HEC exclusif, NOT Fatima, native. Garder Lille + compétences planning/WMS. L'école peut apparaître en OR faible, jamais en condition exclusive sans lien nécessaire."
            }
          ],
          "position": 4
        },
        {
          "title": "Messages d'approche, de relance et de mobilité interne",
          "description": "Trois messages complets, honnêtes, sans harcèlement ni fausse shortlist.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous écrivez une approche, une relance unique, et un message interne, sans usurpation d'identité ni mensonge."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le taux de réponse ne blanchit pas un template mensonger (S88). Un refus d'approche arrête le flux (S29). Les données du message : minimisation (pas de « j'ai vu vos photos de mariage »)."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Personnaliser 2 lignes métier. Une relance à J+4. Stop si non. Copie dans l'ATS, pas sur un Gmail perso."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Approche d'une coordinatrice WMS à Douai : on cite le WMS et les horaires, pas « aventure humaine extraordinaire »."
            },
            {
              "block_type": "heading",
              "content": "Documents — trois messages"
            },
            {
              "block_type": "code",
              "content": "1. APPROCHE À FROID (LinkedIn / e-mail)\nObjet : Coordinateur supply — CDI Lille — échange de 15 min ?\n\nBonjour [Prénom],\nJe suis [Nom], chargé(e) de recrutement chez [Entreprise], site de Lille.\nJe vous contacte au sujet d'un CDI de coordination supply (planning d'expédition, quais, transporteurs, horaires 5 h 30 – 13 h 30). Votre expérience [WMS / planning / entrepôt] a un lien avec ce besoin — ce n'est pas une shortlist direction déjà faite.\n\nFourchette indicative si validée : 34-37 k€ brut. Process : préqual, entretien manager, cas planning 20 min.\nSi le cadre ne convient pas, un non suffit, je n'insisterai pas.\nBien cordialement,\n[Nom] [tél pro] [lien mentions données]\n\nNE PAS ÉCRIRE : « la direction a adoré votre profil » ; « 15 postes urgents » ; « j'ai vu votre Instagram ».\n\n\n2. RELANCE (une seule, J+3 à J+5)\nObjet : Re : Coordinateur supply — Lille\nBonjour [Prénom],\nJe me permets une unique relance sur le CDI coordinateur supply à Lille (planning, 5 h 30). Si vous préférez ne pas échanger, je clos le contact.\nCordialement, [Nom]\n\nPas d'appel trois fois par jour. Pas de compte personnel. Pas de cadeau.\n\n\n3. MOBILITÉ INTERNE\nObjet : Poste ouvert — Coordinateur supply — candidatures internes\nBonjour,\nUn CDI de coordinateur supply est ouvert sur le site de Lille. Les salariés intéressés peuvent candidater jusqu'au [date politique interne] auprès de [RH], avec un CV à jour.\nLe process est le même que pour l'externe (grille, entretiens). Nous ne promettons pas l'attribution.\nLes informations sont traitées pour ce recrutement [mentions].\n[RH / Recrutement]\n\nPas de « c'est déjà promis à X ». Pas de photo exigée."
            },
            {
              "block_type": "callout",
              "content": "QUALIFICATION : bonne pratique ; L. 5331-3 si l'emploi est déformé ; CNIL loyauté / minimisation ; L. 1221-8 (process dit). RÉFÉRENCE : L5331-3, CNIL-guide, L1221-8."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Template « vous êtes l'élu ». Relance quotidienne. Message interne qui brûle un remplacement confidentiel."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Confidentiel : pas de mail large. Candidat « pas intéressé » : stop. Vivier 18 mois : dire l'origine du CV (S57)."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Réécrivez en 8 lignes une approche qui citait à tort « entretien assuré avec le DG »."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "On retire la garantie d'entretien DG. On garde poste, lien de profil, horaires, fourchette vraie, process réel, possibilité de dire non."
            }
          ],
          "position": 5
        },
        {
          "title": "Grille d'analyse de CV et script de préqualification",
          "description": "Un scoring CV et un script téléphonique de 20 minutes, sans questions illicites.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 24,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous analysez un CV avec une grille et conduisez une préqual structurée, y compris disponibilité et prétention, sans enquête familiale."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le CV est une déclaration, pas une preuve. Les trous se questionnent (S65), ils ne se jugent pas à l'âge. La photo s'ignore (S42). L. 1221-6 : questions liées à l'emploi. Le candidat répond de bonne foi ; vous aussi."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Grille CV avant l'appel. Script visible. CR dans l'ATS le jour même. Pas d'enregistrement secret (S59)."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Cabinet : la préqual vend le poste. Interne industrie : elle vérifie horaires, WMS, prétention, et vend aussi, mais sans spin."
            },
            {
              "block_type": "heading",
              "content": "Document 1 — Grille d'analyse de CV"
            },
            {
              "block_type": "code",
              "content": "GRILLE ANALYSE CV — POSTE-____    Candidat : ________    Date : ________\nSource : spontané / annonce / approche / interne / cabinet / cooptation\n\nItem                         0 absent  1 flou  2 présent  3 probant    Commentaire factuel\nPlanning / flux\nOutils (WMS, ERP, Excel)\nHoraires / industrie / quais\nDurée et continuité des postes (faits, pas « trop vieux »)\nLien missions / intitulés\nIncohérences dates / lieux (à questionner, pas à pilorier)\nPrérequis habilitation si must-have\n\nDécision : convier préqual / mettre en attente / refuser / hors sujet\nMotif professionnel (une phrase, aucun critère protégé)\nPhoto : ignorée    Âge / adresse : non utilisés comme filtre\nDonnées excessives présentes sur le CV (santé, enfants, syndicat) : non reprises, non copiées dans le CRM."
            },
            {
              "block_type": "heading",
              "content": "Document 2 — Script de préqualification (20-25 min)"
            },
            {
              "block_type": "code",
              "content": "SCRIPT PRÉQUAL TÉLÉPHONIQUE\nAvant : vérifier que la personne peut parler. Rappeler : poste, durée, enregistrement NON, usage des données, suite possible.\n\n1. CADRE (2 min)\n« Je suis [Nom], recrutement [Entreprise]. Il s'agit d'un CDI coordinateur supply à Lille, horaires 5 h 30 – 13 h 30, fourchette [si validée]. L'échange dure 20 minutes. Vous êtes d'accord pour continuer ? »\n\n2. PARCOURS LIÉ AU POSTE (6 min)\n« Décrivez-moi un planning que vous avez tenu : volume, outil, qui décidait. »\n« Un incident quais ou transporteur : fait, action, résultat. »\nReconversion : « Quelle preuve concrète (stage, outil, volume) ? »\n\n3. CONDITIONS DU POSTE (4 min) — L. 1221-6\n« Le poste commence à 5 h 30 sur site. Cette organisation vous convient-elle ? »\nPAS : enfants, conjoint, garde, grossesse, santé, trajet comme enquête.\nHabilitation chariot si must-have : « L'avez-vous, à jour ? » Pas de dossier médical.\n\n4. OUTILS (3 min)\n« Quel WMS / ERP / tableur ? Que saviez-vous faire seul(e) ? »\n\n5. MOTIVATION ET QUESTIONS (3 min)\n« Pourquoi ce poste plutôt qu'un autre ? » Laisser 2 questions.\n\n6. PRÉTENTION ET PROCESS (3 min)\n« Notre fourchette validée est [X-Y]. Souhaitez-vous poursuivre dans ce cadre ? »\nSi refus de chiffre : donner la fourchette, ne pas écarter pour docilité (S19).\n« Process : entretien manager, cas 20 min annoncé, références si vous êtes d'accord. »\nDisponibilité / préavis (fait professionnel). Autre offre : écouter, ne pas demander de brûler un pont (S23).\n\n7. CLÔTURE\n« Merci. Retour sous [délai vrai]. Vos données servent à ce recrutement [et vivier si politique, avec opposition]. »\nCR le jour même : faits, scores, décision, aucun commentaire d'apparence.\n\nQUESTIONS INTERDITES (ne jamais les poser)\nÂge, origines, enfants, projets familiaux, santé, handicap détail, syndicat, religion, opinions, crédit, photo, « vous habitez trop loin »."
            },
            {
              "block_type": "callout",
              "content": "QUALIFICATION : L. 1221-6, L. 1132-1, L. 1221-8 ; CNIL (finalité, minimisation) ; bonne pratique de CR factuel. RÉFÉRENCE : L1221-6, L1132-1, L1221-8, CNIL-guide."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Lire le CV à voix haute. Poser « vous avez des enfants pour le 5 h 30 ? ». Recaler sur la photo. Promettre l'entretien manager."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Candidat qui refuse une info professionnelle (S85) : expliquer le lien, puis documenter. Incohérence CV (S65) : confronter calmement."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Rédigez trois questions de remplacement à « Vous habitez loin, ça va être dur avec les enfants ? »"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "« Les horaires sont 5 h 30 sur site, cinq jours. Cette organisation vous convient-elle ? » « Avez-vous déjà tenu des horaires décalés, dans quel contexte ? » « Un retard de transport, comment l'avez-vous géré sur un planning ? » Aucune question sur la famille."
            }
          ],
          "position": 6
        },
        {
          "title": "Guide d'entretien et questions STAR",
          "description": "Un guide d'entretien complet et une banque STAR alignée sur les critères.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 24,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous préparez un entretien structuré, à questions identiques sur les must-have, avec relances STAR, sans dérapage."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "STAR : Situation, Tâche, Action, Résultat. L. 1221-9 : pertinence. L. 1221-8 : méthodes informées. Si le manager dérape, vous interrompez (S41, S48). La mise en situation est annoncée."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Envoyer le guide la veille au manager. Répartir les questions. Grille ouverte pendant l'entretien. Debrief immédiat."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Panel de six personnes sans guide : chacun pose sa question illicite. Avec guide : 45 minutes, trois critères, un cas."
            },
            {
              "block_type": "heading",
              "content": "Document 1 — Guide d'entretien"
            },
            {
              "block_type": "code",
              "content": "GUIDE D'ENTRETIEN — Coordinateur supply — 45 à 60 min\nCandidat : ________    Date : ________    Présents : ________ (rôles)\nRappel ouverture (recruteur, 2 min) :\n« Merci d'être venu. Poste CDI, Lille, horaires 5h30, fourchette [X-Y]. Déroulé : parcours, trois situations, cas planning 20 min déjà annoncé, vos questions. Pas d'enregistrement. Questions limitées aux aptitudes (L. 1221-6). »\n\nDéroulé\n0-5 min   Accueil, cadre, confidentialité\n5-15 min  Parcours lié aux missions (pas biographie familiale)\n15-35 min STAR sur planning, incident, tableau\n35-50 min Cas planning (si prévu)\n50-55 min Questions du candidat — réponses vraies (climat, avantages : S14, S99)\n55-60 min Suite de process, délai réel, pas « vous êtes le seul »\n\nRôle recruteur : temps, légalité, notes. Rôle manager : métier. Interruption si question illicite : « Cette question n'est pas autorisée, revenons aux missions. »\n\nAprès : grilles individuelles avant le debrief (S37). Pas de chat « OK »."
            },
            {
              "block_type": "heading",
              "content": "Document 2 — Banque de questions STAR"
            },
            {
              "block_type": "code",
              "content": "BANQUE STAR (mêmes questions à tous sur les must-have)\n\nPLANNING (poids 5)\nS : « Décrivez une journée où le planning d'expédition a basculé. »\nT : « Quelle était votre responsabilité exacte ? »\nA : « Qu'avez-vous fait, dans quel ordre, avec qui, sur quel outil ? »\nR : « Quel résultat (heure de départ, taux de service, ce qui a échoué) ? »\nRelances : volume, décision autonome vs N+1, ce que vous feriez autrement.\n\nINCIDENT TRANSPORTEUR / QUAI (poids 4)\nS : « Un transporteur ne se présente pas, ou un quai saturé. Un cas réel. »\nT/A/R : idem.\nRelances : traçabilité, ton avec le partenaire, seuil d'alerte.\n\nTABLEAU DE BORD (poids 3)\n« Montrez (ou décrivez) un indicateur que vous teniez. Qui le lisait ? Quelle décision ça a changé ? »\n\nHORAIRES (poids 3) — pas de famille\n« Avez-vous déjà travaillé en horaires décalés ? Comment organisiez-vous la passation avec l'équipe d'après-midi ? »\n\nCOMMUNICATION BRIEF\n« En 3 minutes, expliquez-moi comme à un chef d'atelier pourquoi une ligne va partir en retard. »\n\nCAS (annoncé)\nDonnées : 12 commandes, 3 quais, 2 retards transporteurs. « Construisez l'ordre du matin et ce que vous dites à 6 h. »\n\nQUESTIONS À NE JAMAIS POSER\nprojets d'enfants, âge, origine, syndicat, religion, santé, crédit, « vous habitez où exactement pour filtrer », « vous êtes marié »."
            },
            {
              "block_type": "callout",
              "content": "QUALIFICATION : L. 1221-6, L. 1221-8, L. 1221-9, L. 1132-1 ; bonne pratique STAR. RÉFÉRENCE : L1221-6, L1221-8, L1221-9, L1132-1."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Questions différentes selon le feeling. Laisser le manager enchaîner sur la famille. Cas surprise. Promettre le poste en clôture."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Candidat qui enregistre (S59) : politique interne, pas de secret manager. Retard (S90) : même règle pour tous."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Écrivez les relances STAR pour un candidat qui répond « je gère le stress, je suis un fighter » sans exemple."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "« Donnez un exemple daté. Quel était le volume ? Qu'avez-vous fait vous, pas l'équipe ? Quel chiffre à la fin ? Si vous n'avez pas d'exemple, nous évaluerons le cas pratique, pas le slogan. »"
            }
          ],
          "position": 7
        },
        {
          "title": "Grille d'évaluation, tableau comparatif et shortlist",
          "description": "Trois documents pour passer de l'entretien à une recommandation écrite.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous notez après preuves, comparez à critères constants, et présentez une shortlist sans retirer une personne pour l'âge."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La shortlist est une aide à la décision, pas un filtre COMEX (S40). Deux notes égales : départage prévu (S31). Candidat interne : même grille (S34)."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Notes individuelles → tableau → recommandation 1 page → réunion 30 min. Le recruteur recommande, le manager décide, RH valide le cadre."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "PME : shortlist de 2, une page. ETI : 3, avec risques d'intégration. Jamais 12 CV « pour sentir »."
            },
            {
              "block_type": "heading",
              "content": "Document 1 — Grille d'évaluation post-entretien"
            },
            {
              "block_type": "code",
              "content": "GRILLE ÉVALUATION — [Nom] — [date] — évaluateurs : ________\nRemplir SEUL avant le debrief. 1-4 × poids (voir grille critères).\n\nCritère                Poids  Score  Preuve (citation / fait)           Pas de preuve = pas de 4\nPlanning                 5\nIncident                 4\nOutils                   3\nBrief oral               3\nHoraires (déclaration)   3\nMotivation poste         2\nTotal / 80 : ____    Zones d'écart : ____    Formation nécessaire : ____\n\nAlerte légale (si une remarque illicite a été dite, la tracer à part pour RH, ne pas la coder comme note)\nRecommandation de l'évaluateur : poursuivre / refuser / incomplet\nSignature :"
            },
            {
              "block_type": "heading",
              "content": "Document 2 — Tableau comparatif"
            },
            {
              "block_type": "code",
              "content": "TABLEAU COMPARATIF — POSTE-____    Date : ________\nCandidat        Planning /5  Incident /4  Outils /3  Oral /3  Horaires /3  Motiv /2  Total  Risque intégration (pro)  Décision\nA interne\nB externe\nC reconversion\nD surqualifié\n\nRègles\n- Même pondération.\n- Pas de colonne âge, adresse, photo, prétention comme jugement de caractère.\n- Prétention : ligne séparée informative vs fourchette, pas un score de docilité.\n- Départage : cas supplémentaire, pas le domicile."
            },
            {
              "block_type": "heading",
              "content": "Document 3 — Présentation shortlist manager"
            },
            {
              "block_type": "code",
              "content": "SHORTLIST — Coordinateur supply — [date] — recruteur : ________\nProcess : n CV, n préqual, n entretiens. Fourchette : [X-Y].\n\nCandidat 1 — [Nom] — total __/80\nPreuves fortes : …\nÉcarts : …\nConditions (préavis, prétention dans / hors fourchette) :\nRisque : (professionnel, pas « trop âgée »)\n\nCandidat 2 — …\nCandidat 3 — …\n\nRecommandation du recruteur (une personne ou ex aequo + départage proposé) :\nCe que je ne recommande pas : écarter [Nom] pour l'âge / le sexe / le nom / le handicap.\nDécision attendue du manager le : ________\nÉcrit d'embauche : modèle OFFRE validé RH, pas une promesse (SP-F39588).\nRefus des autres : messages sous 48 h, honnêtes."
            },
            {
              "block_type": "callout",
              "content": "QUALIFICATION : L. 1221-9, L. 1132-1 ; politique interne de décision ; SP-F39588 pour la suite. RÉFÉRENCE : L1221-9, L1132-1, SP-F39588."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Moyenne avec des 10 par défaut. Enlever la femme de 54 ans du pack COMEX. Colonne « feeling »."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Neveu du DG (S73) : ligne conflit d'intérêts, notes réelles. Aucun parfait (S33) : recommander le 70 % + plan de formation."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Rédigez la recommandation si A=55, B=55, A meilleur WMS, B meilleur oral, manager qui veut le plus proche."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Ex aequo. Départage : cas planning. Interdit : résidence. Recommandation conditionnelle au résultat du cas, pas au code postal."
            }
          ],
          "position": 8
        },
        {
          "title": "Compte rendu, convocation, confirmation et suivi",
          "description": "Quatre écrits de process : CR factuel et messages de rendez-vous.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous produisez un CR utilisable et des messages de convocation clairs, avec le process annoncé (L. 1221-8)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le CR n'est pas un roman ni un dossier de santé. Il est communicable en droit d'accès : écrivez comme si le candidat pouvait le lire après filtrage RH. Pas de « trop vieux » (S27, S51)."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "CR le jour même. Convocation avec date, lieu, interlocuteurs, durée, cas s'il y a lieu, accessibilité. Relance de suivi si le manager dépasse le délai promis (S21)."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Convocation visio : lien, règles, pas de test surprise. Présentiel : adresse, badge, contact de retard."
            },
            {
              "block_type": "heading",
              "content": "Documents"
            },
            {
              "block_type": "code",
              "content": "1. COMPTE RENDU D'ENTRETIEN\nPoste / date / présents / candidat\nFaits sur chaque critère (citations courtes)\nScores de l'évaluateur\nPoints à vérifier (référence, habilitation) — pas la santé\nIncidents de process (question illicite interrompue) : pour RH, pas dans le motif de refus\nDécision provisoire\nPièces : grilles. Pas de capture Instagram.\n\n\n2. CONVOCATION\nObjet : Entretien — Coordinateur supply — [date]\nBonjour [Prénom],\nNous vous confirmons un entretien le [date] à [heure] au [adresse / lien visio], durée [45-60 min].\nInterlocuteurs : [noms, fonctions].\nDéroulé : échanges sur vos expériences de planning, puis mise en situation de 20 minutes (déjà indiquée). Vous pouvez signaler un besoin d'accessibilité à [mail] sans transmettre de dossier médical.\nDocuments : [pièce d'identité à l'accueil si politique, pas de photo de CV].\nMerci de confirmer. En cas d'empêchement, [tél].\n[Mentions données]\nCordialement,\n\n\n3. CONFIRMATION (après accord oral de créneau)\nBonjour [Prénom],\nBien reçu : nous nous voyons le [date heure lieu]. Prévoir [badge / 10 min d'avance]. À mardi.\n[Nom]\n\n\n4. SUIVI CANDIDAT (délai non tenu)\nBonjour [Prénom],\nJe vous avais indiqué un retour au [date]. La décision n'est pas rendue. Nouveau point au [date vraie]. Merci de votre patience ; vous pouvez me dire si votre calendrier a changé.\nPas de « vous êtes le favori ». Pas de silence."
            },
            {
              "block_type": "callout",
              "content": "QUALIFICATION : L. 1221-8 ; CNIL (exactitude, minimisation, accessibilité du droit) ; L. 1132-1 (contenu du CR) ; bonne pratique d'accessibilité sans donnée santé. RÉFÉRENCE : L1221-8, CNIL-guide, L1132-1."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "CR de feeling. Convocation sans mention du cas. Ghosting après « cinq jours »."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Accessibilité (S89) : accorder, ne pas recaler. Mauvais destinataire (S58) : incident."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Réécrivez un CR qui dit : « Bon feeling, un peu vieux, femme posée, habite loin. »"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Remplacer par des faits planning/incident/outils/scores. Supprimer âge, sexe comme jugement, résidence. Si le manager a dit « vieux », le noter en alerte RH, pas en motif."
            }
          ],
          "position": 9
        },
        {
          "title": "Refus à trois stades et mise en attente transparente",
          "description": "Quatre messages : refus CV, refus préqual, refus finaliste, attente honnête.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous clôturez sans ghosting, sans motif discriminatoire, sans file d'attente mensongère."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le refus n'est pas un réquisitoire. Le motif, s'il est donné, est professionnel. Une demande d'accès ≠ coller le CRM illicite (S27). Garder trois yes en poche (S25) est déloyal. Vivier : information et opposition (CNIL, reco 2 ans)."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Refus CV : sous 10 jours si possible. Préqual : sous 5 jours. Finaliste : appel + mail, 48 h après décision. Attente : date de fin et vérité du process."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Finaliste après trois tours : un appel de 10 minutes + mail. Un mail froid de trois lignes après 4 semaines de silence est trop peu."
            },
            {
              "block_type": "heading",
              "content": "Documents — refus et attente"
            },
            {
              "block_type": "code",
              "content": "1. REFUS APRÈS CV\nObjet : Votre candidature — Coordinateur supply\nBonjour [Prénom],\nNous avons bien étudié votre candidature. Nous ne donnons pas suite : le parcours présenté est trop éloigné du pilotage de planning d'expédition requis.\nVos données : [durée / vivier si oui, opposition, droits]. Merci de votre intérêt.\nCordialement,\nPas de « trop junior » comme code d'âge. Pas de silence.\n\n\n2. REFUS APRÈS PRÉQUAL\nBonjour [Prénom],\nMerci pour l'échange du [date]. Nous ne poursuivons pas : l'expérience d'incidents quais / transporteurs n'a pas été illustrée au niveau requis pour ce poste.\n[Feedback d'une phrase, factuel]. Données : [mentions].\nCordialement,\n\n\n3. REFUS APRÈS ENTRETIEN / FINALISTE\nAppel : remercier, annoncer, un écart professionnel, la suite (vivier oui/non), laisser une question.\nPuis mail :\nBonjour [Prénom],\nComme évoqué, nous avons retenu un autre profil plus démonstratif sur [critère]. Ce n'est pas un jugement de votre valeur globale.\nJe reste disponible pour un retour oral de 10 minutes. Données : [mentions].\nNous ne communiquons pas les données d'un autre candidat.\n\n\n4. MISE EN ATTENTE TRANSPARENTE\nBonjour [Prénom],\nVotre candidature reste en shortlist ouverte (plusieurs personnes). Aucune décision n'est prise. Point au [date]. Vous n'êtes pas « le seul ». Si une autre offre se présente, dites-le-nous.\nSi au [date] nous n'avons pas tranché, vous recevrez un refus ou une nouvelle date, pas un silence.\n\nINTERDITS\nMotif âge, grossesse, origine, handicap, syndicat. « Poste gelé » alors qu'il ne l'est pas. « Vous êtes prioritaire » × 3 personnes. Transfert du commentaire CRM illicite."
            },
            {
              "block_type": "callout",
              "content": "QUALIFICATION : bonne pratique relation candidat ; L. 1132-1 (motif) ; CNIL (information, vivier, droits) ; L. 5331-3 si l'emploi est présenté comme encore ouvert à tort. RÉFÉRENCE : L1132-1, CNIL-guide, L5331-3."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Ghosting. Copier-coller « profil ne correspondant pas » à un finaliste. File d'attente sur l'essai d'un tiers (S97)."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Allégation de discrimination (S64) : RH, conservation, pas de clash. Demande trop détaillée (S28) : pas les données d'autrui."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Rédigez le refus finaliste dont le CRM dit « pas le feeling, un peu vieux »."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "On ignore le CRM illicite, on recadre le manager ailleurs, on écrit un écart de preuve sur un critère (ex. incident transporteur non illustré). On propose un oral court. On n'invente pas un gel de poste."
            }
          ],
          "position": 10
        },
        {
          "title": "Proposition d'embauche : modèle offre et vigilance promesse",
          "description": "Un modèle d'offre, une checklist RH, et ce qu'il ne faut jamais écrire.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 24,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous préparez une proposition écrite de type offre, vous faites valider RH, et vous n'employez pas le vocabulaire de la promesse unilatérale par générosité."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Service-Public F39588 (vérifié 12/03/2026) : offre de contrat vs promesse unilatérale, notions jurisprudentielles. L'offre peut être retirée avant acceptation dans le délai laissé ou un délai raisonnable. La promesse unilatérale vaut contrat ; le retrait s'analyse en licenciement sans cause réelle et sérieuse. Une promesse d'embauche n'est pas obligatoire. Le junior ne qualifie pas seul un écrit déjà parti (S62) : il alerte."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Grille complète + décision + fourchette + avantages réels → projet d'offre → validation RH signataire → envoi → délai de réponse cadré → acceptation écrite → contrat. Pas de SMS « tu as le job »."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Le manager envoie « nous vous promettons le poste, 37 k€, le 3 novembre ». C'est le cas S62 : stop junior, RH / juridique."
            },
            {
              "block_type": "heading",
              "content": "Document 1 — Modèle d'offre (à faire valider RH)"
            },
            {
              "block_type": "code",
              "content": "PROPOSITION D'EMBAUCHE — DOCUMENT DE TYPE OFFRE\n(Papier à en-tête employeur — signataire habilité RH / direction, PAS le junior seul)\n(Ce modèle n'est pas un conseil juridique personnalisé ; toute adaptation passe par RH.)\n\n[Ville], le [date]\n[Nom du candidat]  [adresse fournie pour ce process]\n\nObjet : Offre de contrat de travail — Coordinateur / coordinatrice supply chain — [site]\n\nMadame, Monsieur,\nÀ la suite du processus de recrutement, [Raison sociale] vous adresse la présente OFFRE de contrat de travail, distincte d'une promesse unilatérale.\n\nPoste : Coordinateur supply chain    Lieu : [adresse du site]\nContrat proposé : CDI à temps plein    Horaires : [ceux du poste, exacts]\nRémunération : [fixe brut annuel exact]  |  Avantages : [uniquement ceux validés : mutuelle, tickets, télétravail réel]\nDate de prise de fonction envisagée : [date]  |  Période d'essai : [selon RH / convention, ne pas inventer]\nConditions : [visite d'information / pièces administratives selon RH — pas de collecte santé par le recruteur]\n\nCette offre est valable jusqu'au [date/heure]. Sans acceptation écrite de votre part parvenue avant cette échéance, elle deviendra caduque.\nVous pouvez l'accepter en retournant le présent document daté, signé, avec la mention manuscrite « bon pour acceptation de l'offre ».\nJusqu'à votre acceptation, [l'employeur se réserve la possibilité de retirer l'offre dans les conditions applicables — formulation RH].\n\nNous vous remercions de ne pas démissionner de votre emploi actuel sur la seule foi d'un échange oral.\n\nSignataire habilité : [nom, fonction]    Copie : RH, manager, dossier.\n\nNE PAS ÉCRIRE\n« Nous vous promettons le poste » ; « engagement ferme et irrévocable » ; « vous êtes embauché(e) dès à présent » si RH n'a pas voulu cet effet.\nAvantages non validés (voiture, 4 jours de télétravail). Salaire différent de la décision."
            },
            {
              "block_type": "heading",
              "content": "Document 2 — Checklist avant envoi + avertissement"
            },
            {
              "block_type": "code",
              "content": "CHECKLIST AVANT ENVOI D'UNE OFFRE\n[ ] Décision manager tracée + grilles complètes\n[ ] Fourchette / salaire / avantages validés RH (S12, S14)\n[ ] Intitulé, lieu, horaires = annonce = fiche de poste (L. 5331-3)\n[ ] Signataire habilité identifié\n[ ] Délai de réponse cadré, second finaliste informé HONNÊTEMENT (pas de double offre secrète)\n[ ] Vocabulaire relu : OFFRE, pas PROMESSE, sauf instruction juridique contraire\n[ ] Mentions données / conservation\n[ ] Pas de SMS, pas de WhatsApp perso, pas d'oral « c'est bon » concurrent de l'écrit\n[ ] Projet relu par RH\n\nAVERTISSEMENT — PROMESSE UNILATÉRALE\nSi un écrit (e-mail manager compris) contient déjà une promesse avec les éléments essentiels, le junior N'IMPROVISE PAS un retrait (SP-F39588, S62). Escalade RH / juridique. Conservation des pièces.\n\nLe recruteur junior n'est pas signataire sauf délégation écrite."
            },
            {
              "block_type": "callout",
              "content": "QUALIFICATION : SP-F39588 (jurisprudence expliquée par Service-Public) ; politique interne de signature ; L. 5331-3 (exactitude) ; bonne pratique de délai cadré. RÉFÉRENCE : SP-F39588, L5331-3."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Mot « promesse » pour rassurer. Offre à 39 k€ non validée. Deux offres le même soir. Oral qui contredit l'écrit."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Counter-offer (S17) : pas d'alignement sauvage. Candidat qui veut le contrat avant de démissionner (S92) : transmettre le projet validé."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Corrigez : « On te promet le job à 39 k et la voiture, signe vite, l'essai on verra. »"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Remplacer par une offre RH : salaire validé, véhicule seulement s'il existe, essai selon cadre RH, délai, signataire. Retirer « on te promet ». Ne pas banaliser l'essai comme filet (S93)."
            }
          ],
          "position": 11
        },
        {
          "title": "Checklists finalisation, préboarding et onboarding",
          "description": "Trois checklists pour ne pas « disparaître » entre la signature et J+7.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous coordonnez la finalisation administrative, le préboarding et le relais d'accueil, sans promettre un tuteur fictif."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "DPAE : avant la prise de fonction ou le début de la période d'essai, au plus tôt dans les 8 jours précédant l'embauche (SP-F23107). Obligation employeur, coordination recruteur. L'onboarding n'est pas un argument d'annonce mensonger (S94)."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Checklist partagée RH / manager / IT / recruteur. Point J-7. Message d'accueil factuel. Passage de relais écrit."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Industrie 3×8 : si personne n'est là à 5 h 30 le lundi, J1 est un échec. Le recruteur alerte le vendredi, il ne « fait pas l'intégration à la place »."
            },
            {
              "block_type": "heading",
              "content": "Documents — trois checklists"
            },
            {
              "block_type": "code",
              "content": "1. FINALISATION (après acceptation de l'offre)\n[ ] Acceptation écrite datée\n[ ] Contrat (RH) cohérent avec l'offre\n[ ] Pièces administratives selon liste RH (identité, RIB, etc.) — PAS de questionnaire médical recruteur\n[ ] DPAE : responsable nommé, déclenchée avant J1 / essai, pas plus tôt que 8 jours avant (SP-F23107)\n[ ] Visite d'information / santé au travail : circuit RH, pas le junior\n[ ] Habilitations poste : planning, pas d'invention\n[ ] Refus envoyés aux non-retenus (ou attente honnête — S97)\n[ ] Annonce retirée ou marquée pourvue (S67)\n[ ] Dossier : grilles, offres, mails — conservation selon politique / CNIL / L. 1134-5\n\n\n2. PRÉBOARDING J-7 → J-1\n[ ] Mail de bienvenue : heure, lieu, contact d'accueil, documents, PAS de laptop fictif\n[ ] Manager nommé pour J1\n[ ] Poste de travail / badge / droits WMS demandés à l'IT\n[ ] Planning de la première semaine (même imparfait, mais vrai)\n[ ] Tenue / EPI si entrepôt\n[ ] Accessibilité si demandée\n[ ] Alerte écrite si un item critique manque\n\n\n3. ONBOARDING J1 / S1 (relais, pas substitution au manager)\nJ1 : accueil à l'heure du poste, sécurité, présentation équipe présente, outils de base, premier planning accompagné\nS1 : point 20 min recruteur-salarié « le process d'arrivée correspond-il à l'écrit ? » (écarts = alerte, pas un débrief médical)\nJ7 : le recruteur clôt sa part si le manager a pris le relais ; sinon escalade\n\nMESSAGE TYPE J-7\nBonjour [Prénom],\nRendez-vous lundi [date] à [heure réelle] à [adresse], accueil par [Nom, tél]. Merci d'apporter [liste RH]. Les éléments encore en cours (ex. droits WMS) vous seront indiqués sans promesse d'un outil non commandé.\nÀ lundi, [Nom]"
            },
            {
              "block_type": "callout",
              "content": "QUALIFICATION : SP-F23107 (DPAE, obligation employeur) ; CNIL / L. 1134-5 (conservation) ; L. 1221-6 (pas de santé par le recruteur) ; bonne pratique de relais. RÉFÉRENCE : SP-F23107, CNIL-referentiel-2026, L1134-5, L1221-6."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Disparition. Promesse de parrain. DPAE « la semaine prochaine ». Collecte médicale « pour le dossier »."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Arrêt entre offre et J1 (S96) : pas d'enquête santé, RH. Désistement veille (S26) : plan B, pas de vengeance."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le PC n'est pas commandé vendredi 16 h, J1 lundi 5 h 30. Écrivez l'alerte interne et la phrase au candidat."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Interne : « J1 lundi 5 h 30, pas de poste de travail confirmé — risque d'échec d'accueil. Action IT / manager avant 10 h. » Candidat : ne pas promettre le PC ; dire l'heure d'accueil et qu'un point outils sera fait, ou décaler J1 si RH le décide. Pas de « tout sera prêt, promis »."
            }
          ],
          "position": 12
        },
        {
          "title": "Tableau de suivi et tableau de bord d'indicateurs",
          "description": "Deux outils de pilotage : le suivi de dossier et les indicateurs, sans KPI qui poussent à mentir.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous tenez un tableau de process et un mini tableau de bord, en refusant les indicateurs qui encouragent le ghosting ou le mensonge (S100)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un indicateur oriente le comportement. « Offres envoyées » sans qualité pousse aux doubles offres. « Délai de clôture » pousse à closer (S07, S100). Distinguez indicateurs de flux (descriptifs) et cibles managériales. Pas de statistique inventée dans ce cours : les champs ci-dessous sont des structures, pas des normes de marché."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Mise à jour quotidienne du suivi. Revue hebdo 20 min avec le manager. Tableau de bord mensuel RH. Aucune donnée de santé, d'origine, de photo."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "PME : un tableur. ETI : un ATS. Le contenu minimal est le même : étape, date, décision, motif professionnel."
            },
            {
              "block_type": "heading",
              "content": "Document 1 — Tableau de suivi de process"
            },
            {
              "block_type": "code",
              "content": "SUIVI RECRUTEMENT — POSTE-____\nColonne          Contenu autorisé                         Interdit\nCandidat         Nom, coordonnées pro                     N° sécu, santé, enfants\nSource           canal                                    « piston DG » comme insulte — le conflit d'intérêts se note à part\nÉtape            CV / préqual / entretien / offre / refus\nDates            réception, relance, décision             pas de date fictive\nScores           totaux grille                            feeling, photo, âge\nPrétention       chiffre vs fourchette                    jugement moral\nMotif            phrase professionnelle                   critère protégé\nVivier           oui/non, date dernier contact, opposition\nIncident         question illicite, e-mail parti faux dest.  pas de rumeur\nRelais J1        checklist                                promesses d'intégration\n\nFiltre de vue manager : pas les commentaires RH sensibles. Export : minimisation."
            },
            {
              "block_type": "heading",
              "content": "Document 2 — Tableau de bord indicateurs"
            },
            {
              "block_type": "code",
              "content": "TABLEAU DE BORD MENSUEL (structure — pas de chiffres inventés)\n\nIndicateur de flux (descriptif)\n- Postes ouverts / pourvus / gelés / annulés\n- Délai de cadrage (brief → fiche validée)\n- Délai première préqual\n- Délai décision après shortlist\n- Taux de réponse aux approches (par canal)\n- Refus envoyés vs dossiers clos sans réponse (alerte ghosting)\n- Offres acceptées / refusées / désistements J-1\n\nIndicateurs de qualité (questions, pas de vanité)\n- % de dossiers avec grille complète\n- % d'annonces relues (interdits)\n- Incidents légaux signalés (questions illicites, fuites)\n- Écart offre vs fourchette validée (doit être 0 hors exception RH)\n- J1 avec accueil réel (badge, manager présent)\n\nIndicateurs à NE PAS utiliser comme prime junior\n- « Nombre d'offres envoyées » isolé\n- « Signatures dans la semaine du COMEX »\n- Taux de conversion qui justifie un mensonge de rareté\n- Filtre de performance par origine, âge, sexe des embauchés comme objectif recruteur\n\nRevue : 20 min. Un KPI n'autorise pas S100."
            },
            {
              "block_type": "callout",
              "content": "QUALIFICATION : bonne pratique de pilotage ; CNIL (minimisation dans les tableaux) ; L. 1132-1 (pas d'indicateur-filtre illicite) ; éthique vs KPI (S100). RÉFÉRENCE : CNIL-guide, L1132-1."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "ATS comme tiroir à commentaires d'âge. Objectif de signatures qui justifie le mensonge. Oublier les refus dans le suivi."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "IA (S54) : un indicateur « % femmes dans le top 10 de l'outil » est une alerte de biais, pas un tri. Droit d'accès : le tableau fait partie des données."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Votre N+1 veut une prime sur « offres envoyées ». Rédigez cinq lignes pour proposer un indicateur de qualité à la place."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Proposer : dossiers avec grille complète, refus envoyés sous 48 h après décision, zéro écart d'avantage non validé, zéro incident non signalé. Expliquer qu'un volume d'offres pousse aux doubles envois et aux écrits imprudents (SP-F39588)."
            }
          ],
          "position": 13
        },
        {
          "title": "Quiz — Usage des documents (5 questions)",
          "description": "Cinq questions sur l'usage des modèles : interdits, offre vs promesse, DPAE, données.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 8,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Répondez à chaque question. En cas d'échec, relisez le module puis retentez. Les questions juridiques essentielles exigent une justification : lisez toujours l'explication après validation."
            }
          ],
          "quiz": {
            "title": "Quiz — Usage des documents (5 questions)",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Dans une fiche de recueil ou une annonce, quelle information est à exclure ?",
                "question_type": "single_choice",
                "options": [
                  "A. La fourchette salariale validée par RH.",
                  "B. Un âge cible ou une exigence de photo / « native French ».",
                  "C. Les horaires réels du poste.",
                  "D. La mention du cas pratique de 20 minutes."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L. 1132-1 et L. 1221-6 : pas d'âge, de photo exigée, de langue maternelle comme filtre. Fourchette vraie, horaires et tests annoncés sont au contraire utiles (et L. 1221-8 pour les méthodes)."
              },
              {
                "question": "Vous devez envoyer un écrit d'embauche. Quelle conduite ?",
                "question_type": "single_choice",
                "options": [
                  "A. Écrire « nous vous promettons le poste » pour rassurer, signé par vous.",
                  "B. Utiliser un modèle d'OFFRE validé RH, signataire habilité, sans avantages inventés (SP-F39588).",
                  "C. Un SMS « tu as le job » en attendant l'écrit.",
                  "D. Envoyer deux offres le même soir pour sécuriser le COMEX."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Une promesse n'est pas obligatoire et peut valoir contrat. Le junior n'est pas signataire par défaut. SMS = écrit. Double offre : chaos."
              },
              {
                "question": "À propos de la DPAE, quelle affirmation est exacte ?",
                "question_type": "single_choice",
                "options": [
                  "A. Le recruteur junior la fait après la première semaine, ce n'est qu'un papier.",
                  "B. Obligation de l'employeur, avant la prise de fonction ou le début de l'essai, au plus tôt dans les 8 jours précédant l'embauche (SP-F23107) ; le junior alerte et coordonne.",
                  "C. Elle doit être faite trois mois avant J1.",
                  "D. On peut antidater le début de contrat pour rattraper un oubli."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "SP-F23107 / Urssaf. Ne pas inventer d'autre délai. Ne pas antidater. Ce n'est pas la signature du junior isolé."
              },
              {
                "question": "Un CR d'entretien peut-il contenir « trop vieux, pas le feeling, habite loin » ?",
                "question_type": "single_choice",
                "options": [
                  "A. Oui, c'est la vérité du manager.",
                  "B. Non : âge et résidence sont des critères protégés ; le feeling sans fait n'est pas une méthode pertinente ; le CR doit rester professionnel (L. 1132-1, L. 1221-9).",
                  "C. Oui si on ne le montre jamais au candidat.",
                  "D. Oui si on l'écrit en anglais."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Un CR est une donnée. Le cacher ou le traduire n'efface pas L. 1132-1. Droit d'accès possible. Recadrer le manager, écrire des preuves métier."
              },
              {
                "question": "Une mise en attente « vous êtes très bien positionné » envoyée à trois finalistes sans date est :",
                "question_type": "single_choice",
                "options": [
                  "A. Une bonne stratégie de réserve.",
                  "B. Une pratique à remplacer par une information vraie (shortlist ouverte, date de point, droit de se retirer).",
                  "C. Obligatoire tant que l'essai du retenu n'est pas fini.",
                  "D. Un droit du manager qui efface L. 5331-3."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "S25 / S97. Loyauté. Pas de réserve sur l'essai d'un tiers non dite. L. 5331-3 si l'emploi est déformé. Le manager n'autorise pas le mensonge."
              }
            ]
          },
          "position": 14
        }
      ]
    },
    {
      "position": 22,
      "title": "Projet final : un recrutement complet",
      "description": "Vous menez de bout en bout le recrutement d'un coordinateur supply chain chez Atelier Nord Lumière, PME industrielle de 85 salariés à Lille.",
      "lessons": [
        {
          "title": "Analyser le besoin et lister les informations manquantes",
          "description": "Vous prenez connaissance du dossier Atelier Nord Lumière et vous identifiez ce qui manque avant tout process.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 28,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous analysez un brief gonflé, une fourchette sous marché et un calendrier irréaliste, puis vous produisez une liste d'informations manquantes priorisée, sans inventer les réponses."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Atelier Nord Lumière est une PME industrielle fictive de 85 salariés, basée à Lille, qui fabrique des luminaires techniques pour le tertiaire et l'industrie. L'entrepôt expédie vers la France et le Benelux. Le responsable logistique, Marc Vasseur, 48 ans d'ancienneté dans l'entreprise, veut un « coordinateur supply chain CDI, opérationnel dans quinze jours ». Il n'y a pas de fiche de poste à jour. Un magasinier interne, Camille Leroy, a fait savoir qu'il était intéressé. Un intérimaire tient une partie du planning depuis six semaines. La DRH (une personne, Nadia Khelifi) valide les contrats et la DPAE ; elle n'a pas encore vu le brief.\n\nVotre rôle : chargé de recrutement junior, en poste depuis quatre mois, vous reportez à Nadia. Vous n'êtes pas signataire des offres. Vous ne mentez ni au manager ni aux candidats. Vous ne publiez rien tant que le cadrage minimal n'est pas écrit."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Lire le brief. Marquer : fait / hypothèse / manquant / interdit. Distinguer urgence opérationnelle (intérim) et CDI. Ne pas transformer le brief en annonce. Alerter Nadia sur le salaire et les critères protégés s'ils apparaissent."
            },
            {
              "block_type": "heading",
              "content": "Dossier — brief reçu de Marc Vasseur (e-mail)"
            },
            {
              "block_type": "code",
              "content": "De : marc.vasseur@atelier-nord-lumiere.example\nÀ : recrutement@atelier-nord-lumiere.example\nObjet : Urgent — coordinateur supply\n\nNadia m'a dit de passer par toi. J'ai besoin de quelqu'un de costaud pour lundi dans quinze jours max.\n\nOn cherche un coordinateur supply chain, bac+5, 8 à 10 ans d'expérience, anglais courant (on exporte un peu), WMS expert, management d'équipe, Lean / six sigma, permis, mobile, jeune pour tenir le rythme des quais. Salaire 32-33 k€, on a déjà un baby-foot, ça motive.\n\nMissions : le planning, les transporteurs qui nous pourrissent, le tableau, et idéalement négocier les tarifs transport. Horaires comme nous, ça commence tôt.\n\nCamille le magasinier veut le poste, super motivé, mais je veux aussi voir du monde dehors pour comparer. Envoie-moi tous les CV, je saurai.\n\nSi tu ne trouves pas, on prendra Camille. Merci de clôturer avant la revue de direction du 28."
            },
            {
              "block_type": "heading",
              "content": "Données internes déjà connues (fiables)"
            },
            {
              "block_type": "text",
              "content": "Effectif : 85. Site unique Lille (entrepôt + atelier). Horaires logistique : 5 h 30 – 13 h 30. Outil : ERP maison + Excel ; un WMS « LégerWMS » en déploiement partiel (pas encore expert sur tout le site). Pas de management hiérarchique prévu sur ce poste (appuis magasiniers, pas d'équipe N-1 complète). Les tarifs transporteurs sont négociés par les achats, pas par le coordinateur. Export Benelux : e-mails en français, quelques documents en néerlandais/anglais gérés par le commercial. Dernier CDI logistique pourvu il y a 14 mois : 36 k€ (intitulé proche, pas une statistique de marché nationale — donnée interne uniquement). Fourchette demandée par Marc : 32-33 k€, non validée par Nadia. Intérimaire planning : coût élevé, contrat 1 mois renouvelable. Politique interne : publication 7 jours en interne. Nadia signe les offres. Télétravail logistique : 0 jour (contrainte quais), à ne pas sur-promettre."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique — consigne et livrable"
            },
            {
              "block_type": "text",
              "content": "Livrable attendu (à rédiger, puis à comparer à la correction) :\n1) Synthèse en 12 lignes : ce que le poste semble être vraiment, vs ce que Marc a écrit.\n2) Liste d'informations manquantes, classées P1 (bloquant pour publier) / P2 (bloquant pour offrir) / P3 (confort).\n3) Trois risques (légal, process, marché) si vous publiez le brief tel quel.\n4) Une phrase d'alerte à Nadia sur le salaire et une sur les critères illicites.\n\nNe pas inventer le « salaire marché France ». Vous n'avez que la donnée interne 36 k€ et le brief 32-33 k€."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée — grille critérée"
            },
            {
              "block_type": "code",
              "content": "GRILLE DE CORRECTION — LEÇON 1 (20 points)\nCritère                                         0-1    2-3     4\nA. Écart missions réelles / brief gonflé        ignore  partiel complet (planning, tableau, relances ; PAS achats transport ; PAS management d'équipe)\nB. Diplôme et 8-10 ans challengés               non     un mot  argumentés via les missions\nC. « Jeune » identifié comme illicite           non     oui     + L. 1132-1 cité sans roman\nD. Infos manquantes P1 (fourchette RH, horaires exacts, WMS réel, qui décide, date réelle, confidentialité Camille)  <3 items  3-4  ≥5 justifiés\nE. Salaire : écart interne 36 vs 32-33, sans statistique inventée  invente un marché  cite 36k  + alerte Nadia, pas de promesse\nF. Intérim de transition vs CDI 15 jours        confondu  mentionné  plan séparé\nG. Process alibi interne / « tous les CV »      ignoré   vu      recadré (politique 7 j, présélection)\nH. Français professionnel, vouvoiement, pas de mensonge  non  presque  oui\n\nP1 typiques : validation RH de la fourchette ; missions hors achats ; niveau WMS réel ; management oui/non ; horaires 5h30 ; date de prise de fonction vs intérim ; tests prévus (L. 1221-8) ; qui signe ; remplacement de qui ; Camille informé du process équitable.\nP2 : références, habilitations, astreintes, binôme.\nP3 : titre exact, place de parking, badge.\n\nRisques si publication brute : annonce discriminatoire (« jeune ») ; allégation rémunération / nature (L. 5331-3) ; process interne alibi ; 15 jours irréalistes ; anglais courant non nécessaire.\n\nPhrase Nadia salaire : « Marc vise 32-33 k€ ; le dernier CDI proche interne était à 36 k€ ; je ne publierai pas de chiffre non validé ni gonflé. »\nPhrase illicite : « Je n'inscrirai pas « jeune » ni d'âge ; L. 1132-1. »\n\nBarème indicatif : 16/20 = livrable professionnel. En dessous : relire le brief ligne à ligne."
            },
            {
              "block_type": "callout",
              "content": "QUALIFICATION : L. 1132-1 (jeune) ; L. 5331-3 (annonce future) ; politique interne 7 jours ; bonne pratique de cadrage. Pas de délai légal de recrutement inventé. RÉFÉRENCE : L1132-1, L5331-3."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Publier l'e-mail de Marc. Inventer un salaire marché national. Promettre quinze jours. Écarter Camille d'avance ou le promettre d'avance."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Revue du 28 : pression type S07, pas une cause d'offre bancale. Baby-foot : pas un élément de rémunération (L. 5331-3 si on s'en sert pour compenser un salaire sous-évalué de façon trompeuse)."
            }
          ],
          "position": 0
        },
        {
          "title": "Questions au manager",
          "description": "Vous préparez et simulez le brief avec Marc Vasseur, puis vous rédigez la restitution.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 26,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous posez des questions de cadrage, vous recadrez les illicites, vous obtenez des must-have réalistes sans humilier le manager."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Marc n'est pas un adversaire. Il a un entrepôt sous tension. Votre job est de traduire sa peur opérationnelle en critères observables. S'il répète « jeune », vous interrompez comme en entretien candidat, avec calme."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "45 minutes. Ordre : contexte, journée type, must-have, argent, évaluation, Camille, intérim. Restitution écrite sous 24 h, à faire valider."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel — extraits de réponses de Marc (simulation)"
            },
            {
              "block_type": "code",
              "content": "Q. Que se passe-t-il si on n'a personne en CDI dans quinze jours ?\nR. L'intérimaire tient le planning mais il part dès qu'il a une mission mieux payée. Les quais débordent deux matins par semaine.\n\nQ. Management d'équipe ?\nR. En vrai, Camille et deux magasiniers l'aideront. Pas de N-1 à évaluer. J'ai mis management pour faire sérieux.\n\nQ. Négociation tarifs transport ?\nR. Les achats font ça. Moi je veux surtout qu'on arrête d'apprendre les retards à 11 h.\n\nQ. WMS expert, bac+5, 10 ans, anglais, six sigma ?\nR. LégerWMS, on forme. Le bac+5 c'est pour avoir quelqu'un qui parle aux commerciaux. L'anglais, c'est rare. Six sigma, on n'en fait pas. 10 ans, je veux quelqu'un qui a déjà vu un quai.\n\nQ. Jeune ?\nR. Bon, pas jeune. Mais quelqu'un qui se lève. Les horaires c'est 5 h 30.\n\nQ. Salaire 32-33 ?\nR. Nadia verra. Je ne veux pas un profil à 42. Si c'est 36 comme l'autre, il faudra qu'elle dise oui.\n\nQ. Camille ?\nR. Motivé, connaît les références produits, jamais tenu le planning seul. Je ne lui ai pas promis le poste. Je veux comparer.\n\nQ. Tests ?\nR. Un petit cas planning, 20 minutes, pour tout le monde.\n\nQ. Date revue du 28 ?\nR. Je veux un point, pas forcément un contrat signé. Ne dis pas ça aux candidats."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique — consigne et livrable"
            },
            {
              "block_type": "text",
              "content": "Livrable :\n1) Liste de 12 questions que VOUS auriez posées (dont au moins une sur le budget, une sur Camille, une sur les tests, une de recadrage « jeune »).\n2) Phrase orale de recadrage de « jeune ».\n3) Restitution d'une page à Marc et Nadia : missions, must-have, nice-to-have, non-critères, fourchette à valider, process, intérim.\n4) Ce que vous refusez encore de faire (publier 32-33 non validés, promettre le 28, envoyer tous les CV bruts)."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée — grille critérée"
            },
            {
              "block_type": "code",
              "content": "GRILLE — LEÇON 2 (20 points)\nA. 12 questions utiles, pas d'enquête sur la vie de Marc          /4\nB. Recadrage « jeune » : interruption + L. 1132-1, ton respectueux /4\nC. Must-have réalistes (planning, 5h30, incident, Excel/WMS base)  /4\nD. Hors scope écrit (achats, management, six sigma, anglais courant, bac+5 obligatoire) /3\nE. Camille : process équitable, pas de promesse, pas d'alibi       /3\nF. Tests annoncés (L. 1221-8) + cas identique pour tous            /2\n\nRestitution type (attendu) :\nMissions : planning J/J+1, relances transporteurs, tableau 6h, coordination magasin/production.\nMust-have : preuve de planning ou cas concluant ; horaires 5h30 ; communication brief.\nNice : LégerWMS, 3×8 déjà fait, tableau Excel.\nNon-critères : âge, bac+5 obligatoire, anglais courant, six sigma, « jeune ».\nFourchette : à valider Nadia ; donnée interne 36 k€ ; 32-33 insuffisant à confirmer.\nProcess : interne 7 j, préqual, entretien, cas 20 min, shortlist 2-3, offre Nadia.\nIntérim : transition si CDI > 15 j.\nRefus : tous les CV bruts ; closer pour le 28 ; fourchette non validée dans l'annonce."
            },
            {
              "block_type": "callout",
              "content": "QUALIFICATION : L. 1132-1 ; L. 1221-8 ; politique interne ; bonne pratique. RÉFÉRENCE : L1132-1, L1221-8."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Laisser « jeune » dans la restitution. Promettre Camille pour la paix. Valider 32-33 pour faire plaisir. Oublier le cas 20 min dans l'info candidat."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Marc dit « je saurai » : imposer la grille (S08). Revue du 28 : point d'avancement, pas signature."
            }
          ],
          "position": 1
        },
        {
          "title": "Fiche de poste et critères",
          "description": "Vous rédigez la fiche, le profil et la grille pondérée du coordinateur supply.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 28,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous livrez trois documents alignés, utilisables pour l'annonce, le scoring et le départage, sans critère protégé."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La fiche décrit l'emploi Atelier Nord Lumière. Le profil traduit. La grille pèse le planning plus fort que l'anglais, qui n'est plus un must-have."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Reprendre la restitution validée. Faire relire Marc (métier) et Nadia (contrat, salaire encore ouvert). Gel de publication tant que la fourchette n'est pas tranchée : vous pouvez rédiger l'annonce sans chiffre, mais pas un chiffre faux."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique — consigne et livrable"
            },
            {
              "block_type": "text",
              "content": "Livrable : fiche de poste (missions, horaires 5 h 30, pas d'achats transport, pas de management hiérarchique), profil must/nice/non-critères, grille de critères avec poids et départage à notes égales (pas le domicile). Indiquer explicitement la voie interne Camille comme voie d'accès possible, pas comme attribution."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée — documents attendus (extrait)"
            },
            {
              "block_type": "code",
              "content": "FICHE (minimum attendu)\nIntitulé : Coordinateur / coordinatrice supply chain\nLieu : Lille, entrepôt Atelier Nord Lumière\nCDI temps plein, 5 h 30 – 13 h 30\nN+1 : Marc Vasseur, responsable logistique\nMissions : planning expédition J/J+1 ; relances transporteurs et exceptions quais ; tableau de bord et brief 6 h ; coordination magasin / production.\nHors : négociation tarifaire transporteurs ; management évalué d'une équipe.\nOutils : ERP, Excel, LégerWMS en déploiement (formation interne).\nTélétravail : 0 jour (contrainte quais) — l'écrire pour ne pas sur-promettre.\n\nPROFIL\nMust : preuve de construction / ajustement d'un planning de flux ; relater un incident quais/transporteur ; acceptation des horaires ; oral de brief.\nNice : WMS, Excel tableau, expérience industrie, reconversion avec stage probant, connaissance interne produits (Camille).\nNon-critères : âge, jeune, bac+5 obligatoire, anglais courant, six sigma, photo, résidence.\n\nGRILLE (exemple conforme)\nPlanning 5 | Incident 4 | Outils 3 | Brief 3 | Horaires 3 | Motivation/compréhension 2\nTotal 80. Seuil entretien 48. Départage : cas planning, PAS le code postal.\n\nGRILLE DE CORRECTION LEÇON 3 (20)\nDocuments complets (pas 8 lignes) /6\nAlignement brief recadré (hors achats, hors management) /4\nHoraires et télétravail honnêtes /3\nNon-critères L. 1132-1 /3\nPondération planning > anglais (anglais absent des must) /2\nDépartage licite /2"
            },
            {
              "block_type": "callout",
              "content": "QUALIFICATION : L. 1221-6, L. 1132-1, L. 1221-9. RÉFÉRENCE : L1221-6, L1132-1, L1221-9."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Laisser bac+5 en must. Colonne feeling. Oublier 5 h 30. Mettre Camille en « poste réservé »."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Nadia n'a pas validé 32-33 : la fiche peut indiquer « fourchette RH en cours », pas un mensonge 36-40 pour attirer."
            }
          ],
          "position": 2
        },
        {
          "title": "Annonce et stratégie de sourcing",
          "description": "Vous rédigez l'annonce française exacte et un plan de canaux, y compris la mobilité interne.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 24,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous publiez une offre conforme et un sourcing utile (interne 7 jours, jobboard, approches WMS, pas de booléen illicite)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Nadia valide une fourchette 34-37 k€ après votre alerte (compromis : au-dessus de 32-33, proche du 36 interne, en dessous d'un profil 42 k€). L'annonce peut donc citer 34-37. Ce n'est pas encore une obligation légale française d'affichage (directive UE en transposition) : ici c'est une décision interne / bonne pratique. Mentir resterait interdit."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Annonce FR. Process L. 1221-8 (préqual, entretien, cas 20 min). Interne 7 jours. Sourcing externe en parallèle après validation Nadia, sans process alibi. Requêtes sans prénoms ni native."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique — consigne et livrable"
            },
            {
              "block_type": "text",
              "content": "Livrable : 1) annonce complète ; 2) variante courte ; 3) stratégie (interne, jobboard, 15 approches LinkedIn/sem, vivier si existant) ; 4) une requête booléenne conforme ; 5) message interne mobilité. Interdits à lister en bas de votre copie."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "code",
              "content": "ANNONCE — attendu minimal\nCDI Coordinateur/coordinatrice supply chain, Lille, Atelier Nord Lumière (85 salariés, luminaires techniques).\n5 h 30 – 13 h 30, entrepôt. 34-37 k€ brut annuel selon profil (validé).\nMissions planning, relances, tableau, coordination magasin/production.\nPas de photo. Process : préqual 20 min, entretien, cas planning 20 min.\nPas : jeune, 15 postes, anglais only, salaire 42, second site, management d'équipe, achats transport.\n\nREQUÊTE type\n(planning OR expédition OR quais OR ordonnancement) AND (WMS OR ERP OR Excel) AND (Lille OR \"Hauts-de-France\")\nSans NOT prénoms, sans native, sans HEC only.\n\nMOBILITÉ\nMail interne 7 jours, process identique, pas de promesse à Camille.\n\nGRILLE LEÇON 4 (20)\nConformité L. 5331-2/3/4 /6\nFourchette vraie 34-37 /4\nProcess annoncé /3\nInterne 7 j honnête /3\nBooléen sans discrimination /2\nFrançais professionnel /2"
            },
            {
              "block_type": "callout",
              "content": "QUALIFICATION : L. 5331-2, L. 5331-3, L. 5331-4, L. 1221-8 ; UE-transparence-salariale (affichage = choix interne ici, pas « déjà obligatoire ») ; politique 7 jours. RÉFÉRENCE : L5331-2, L5331-3, L5331-4, L1221-8, UE-transparence-salariale."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Annonce de Marc. Oublier le cas 20 min. Booléen écoles. Publier avant les 7 jours internes si la politique l'impose — ici elle l'impose : respecter, tout en préparant les canaux."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Si Marc veut une cover story : refuser (S72). Ici le poste est réel et assumé."
            }
          ],
          "position": 3
        },
        {
          "title": "Analyser six CV et shortlister",
          "description": "Vous scorez six candidatures fictives, dont un hors sujet, un surqualifié, une reconversion et un profil pénurique.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 35,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous appliquez la grille CV, vous ignorez photos et âges, vous motivez chaque décision, vous proposez une shortlist de préqual."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Les six CV arrivent la même semaine. Marc veut « tous les CV ». Vous envoyez une analyse, pas un ZIP. Camille est interne : même grille, plus la connaissance produit en nice-to-have, pas en passe-droit."
            },
            {
              "block_type": "heading",
              "content": "Les six CV (extraits — dossier fictif)"
            },
            {
              "block_type": "code",
              "content": "CV1 — Camille LEROY — interne Atelier Nord Lumière\nMagasinier-cariste, 6 ans sur site. Références produits, inventaires, picking, parfois aide au planning Excel quand l'intérimaire est absent (10 à 15 jours cumulés). Pas de WMS nominatif hors LégerWMS « j'ai cliqué un peu ». Motivation écrite : « Je veux prendre le planning, je connais les pannes de quais. » Prétention : 34 k€. Horaires 5 h 30 déjà tenus. Photo sur le CV : à ignorer.\n\nCV2 — Karim HADDAD — hors sujet\nBusiness developer BTP, 7 ans, chasse de chantiers, LinkedIn « closer ». Un stage logistique de 2 mois en 2014. Lettre : « Je m'adapte à tout, j'ai le permis, j'habite Lille. » Prétention 40 k€. Aucun planning d'expédition.\n\nCV3 — Sylvie MOREAU — surqualifiée\nEx-directrice supply d'un groupe industriel (1800 salariés), 18 ans, management de 40 personnes, achats transport, S&OP Europe, anglais quotidien. Prétention : 34-37 k€ « pour revenir sur le terrain et réduire les déplacements, projet personnel non médical ». Lettre claire sur le périmètre coordinateur. Âge visible par les dates longues : NE PAS s'en servir (S38).\n\nCV4 — Julien PETIT — reconversion\nAncien logisticien des forces armées (ravitaillement, planning de convois), titre professionnel logistique obtenu il y a 8 mois, stage 3 mois en entrepôt textile (Excel, quais, pas de WMS). Lettre structurée. Prétention 33-35 k€. Disponible 1 mois.\n\nCV5 — Inès BENALI — profil pénurique\n5 ans coordinatrice WMS (Reflex) en 3×8, ETI agro, relances transporteurs, tableaux Power Query. Prétention 41 k€, autre piste en cours. Lettre : « Intéressée par l'industrie, pas en dessous de 40. » Compétences must-have très alignées. Hors fourchette.\n\nCV6 — Thomas DUBOIS — match apparent, incohérences\nCV : « Coordinateur planning 2019-2024, WMS expert, management 8 personnes ». LinkedIn (pro, pas Instagram) : intitulé magasinier jusqu'en 2022, puis 14 mois non datés, puis « coordinator » 2023-2024 chez un prestataire. Diplôme « Master logistique » ; pièce ultérieure = attestation 40 h (à creuser en préqual, S66). Prétention 36 k€. Photo, 29 ans écrit : ignorer âge et photo."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique — consigne et livrable"
            },
            {
              "block_type": "text",
              "content": "Pour chaque CV : décision (préqual / refus / attente), motif professionnel d'une phrase, 3 scores grille CV, un risque. Puis shortlist de préqual (qui, dans quel ordre, pourquoi pas les autres). Message à Marc : pas de ZIP, pas de filtre photo. Que faire d'Inès (41 k€) avant de la faire venir (S11) ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée — grille critérée"
            },
            {
              "block_type": "code",
              "content": "DÉCISIONS ATTENDUES (tolérance : argument inverse solide, jamais un motif illicite)\n\nCV1 Camille : PRÉQUAL. Preuve partielle de planning, horaires, produit. Écart : planning jamais tenu seul. Nice interne. Pas de promesse.\n\nCV2 Karim : REFUS CV. Hors sujet commercial. Permis/Lille/« s'adapte » ne sont pas des must-have. Motif : absence de pilotage de planning de flux. Pas « nom » ou origine.\n\nCV3 Sylvie : PRÉQUAL. Compétences largement au-dessus ; risque ennui / management d'un N+1 moins senior / motivation à tester — PAS l'âge. Salaire dans la fourchette : ne pas écarter pour « trop chère » si 34-37.\n\nCV4 Julien : PRÉQUAL. Reconversion avec preuves militaires + stage. Cas 20 min décisif. Pas de pénalisation « pas de bac+5 ».\n\nCV5 Inès : CONTACT TRANSPARENT SUR 34-37 avant entretien long. Si elle refuse le cadre, ne pas la faire voyager. Si elle explore, PRÉQUAL. Ne pas lui dire 41. Ne pas la recaler comme « trop gourmande » de façon morale.\n\nCV6 Thomas : PRÉQUAL pour confronter les écarts (dates, diplôme, management). Pas de recale LinkedIn public ni de post Facebook (S65). Pas d'enquête privée.\n\nSHORTLIST PRÉQUAL type : Camille, Julien, Sylvie, Inès (si cadre salarial ok), Thomas. Pas Karim.\nOrdre : Inès seulement après transparence salaire ; Camille tôt (équité interne, pas VIP golf).\n\nGRILLE LEÇON 5 (20)\nKarim refusé pour le poste, pas pour la personne /3\nSylvie non écartée pour l'âge /4\nInès : transparence 34-37 /3\nThomas : confrontation, pas pilori /3\nCamille : ni cadeau ni alibi /3\nShortlist argumentée, pas de photo/âge /4"
            },
            {
              "block_type": "callout",
              "content": "QUALIFICATION : L. 1132-1 (âge, origine, apparence) ; L. 1221-6 ; L. 5331-3 (salaire Inès) ; bonne pratique interne. RÉFÉRENCE : L1132-1, L1221-6, L5331-3."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Envoyer les six CV à Marc « il saura ». Recaler Sylvie « trop âgée ». Promettre Camille. Mentir à Inès sur 41 k€. Recaler Thomas sans l'entendre."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Marc demande la photo de Sylvie : S42, refuser. Cooptation d'un neveu absente ici ; Camille n'est pas un neveu du DG, c'est un interne légitime."
            }
          ],
          "position": 4
        },
        {
          "title": "Préqualification et guide d'entretien",
          "description": "Vous rédigez les CR de préqual simulés et le guide d'entretien + cas planning.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 30,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous menez des préquals distinctes (interne, reconversion, surqualifiée, pénurique, incohérent) et vous figez un guide identique pour Marc."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Inès, informée de 34-37, accepte un échange « pour comprendre le poste » sans s'engager sous 40. Thomas reconnaît un intitulé « enjolivé » et une attestation 40 h présentée comme master : sujet loyauté. Sylvie explique un souhait de terrain. Camille décrit précisément 12 jours de planning. Julien structure un exemple militaire. Karim n'est pas appelé."
            },
            {
              "block_type": "heading",
              "content": "Synthèse des préquals (simulation à utiliser)"
            },
            {
              "block_type": "code",
              "content": "Camille : horaires OK, 34 k€ OK, exemples picking solides, planning : 12 jours, Excel, a appelé 2 transporteurs avec Marc. Veut le poste. Risque : sous-exposition. Décision : entretien + cas.\n\nJulien : horaires OK, 34-35 k€, exemple convoi (volume, aléas, décision). Stage textile : quais. WMS : non. Décision : entretien + cas.\n\nSylvie : horaires 5h30 acceptés explicitement, 36 k€, motivation : moins de leadership, plus de flux. Risque : périmètre. Décision : entretien + cas (S38, tester, pas l'âge).\n\nInès : 34-37 trop bas vs 41 et vs son autre piste. Reste ouverte si évolution 12 mois écrite — vous NE PROMETTEZ PAS d'avenant (S18). Décision : vous en parlez à Nadia ; entretien seulement si Nadia assume le cadre ou une exception. Pour la suite du projet pédagogique, Nadia refuse 41, accepte un entretien si Inès confirme 37 max. Inès décline l'entretien. REFUS / clôture honnête.\n\nThomas : reconnaît l'intitulé gonflé et le « master » = 40 h. Exemples quais réels 2023-2024. Management 8 personnes : faux. Prétention 36. Décision : Nadia/Marc : loyauté. Pour le projet, vous documentez et NE le convoquez PAS à l'entretien manager (écart de loyauté sur des éléments essentiels, S66), SANS humiliation publique.\n\nKarim : déjà refusé, mail motif professionnel."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique — consigne et livrable"
            },
            {
              "block_type": "text",
              "content": "Livrable : 1) CR préqual Camille / Julien / Sylvie (faits, scores, décision) ; 2) mail Inès (fourchette, pas d'avenant fantôme) ; 3) note RH Thomas (faits, pas de Facebook) ; 4) guide d'entretien 45-60 min + cas 20 min (données) + questions STAR identiques ; 5) consigne à Marc : pas de question grossesse, âge, photo."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "code",
              "content": "MAIL INÈS (attendu)\nFourchette 34-37 validée, pas de 41, pas d'avenant promis. Merci, vivier si elle accepte, opposition possible. Pas de « vous n'êtes pas assez passionnée ».\n\nNOTE THOMAS\nFaits : écart intitulé / LinkedIn pro ; diplôme présenté vs attestation 40 h ; management 8 personnes reconnu inexact. Décision : ne pas poursuivre, motif loyauté du parcours (L. 1221-6 bonne foi). Pas de publication. Pas de menace de plainte junior.\n\nGUIDE : ouverture légale, STAR planning/incident/tableau, cas 12 commandes / 3 quais / 2 retards, questions du candidat, délai vrai. Interruption « jeune/enfants ».\n\nCAS : donner les mêmes données aux trois. Annoncé (L. 1221-8).\n\nGRILLE LEÇON 6 (20)\nPrequals distinctes et factuelles /4\nInès sans mensonge salarial /4\nThomas : faits + discrétion /3\nGuide identique + cas annoncé /5\nConsigne anti-dérapage Marc /4"
            },
            {
              "block_type": "callout",
              "content": "QUALIFICATION : L. 1221-6, L. 1221-8, L. 1132-1, L. 5331-3 ; CNIL (note Thomas interne). RÉFÉRENCE : L1221-6, L1221-8, L1132-1, L5331-3, CNIL-guide."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Promettre 40 k€ à Inès « on fera passer ». Convoquer Thomas pour « piéger ». Questions différentes à Camille (copain interne) et à Sylvie."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Marc veut voir Thomas « pour le coincer » : refuser l'entretien-piège (L. 1221-9)."
            }
          ],
          "position": 5
        },
        {
          "title": "Évaluer, comparer, présenter la shortlist et recommander",
          "description": "Vous notez trois entretiens simulés, vous départagez sans critère illicite, vous recommandez.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 32,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous remplissez les grilles, vous tenez tête à un « je ne la sens pas » sur Sylvie, vous livrez une shortlist et une recommandation argumentée."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Marc a vu Camille, Julien et Sylvie. Il aime Camille (« on le connaît »). Il dit de Sylvie : « trop cadre, trop senior, elle va s'ennuyer, et puis l'équipe est jeune. » « Équipe jeune » + « senior » = alerte âge (L. 1132-1). Julien a réussi le cas. Camille a partiellement réussi. Sylvie a réussi le cas trop vite et a parlé S&OP : risque de périmètre, pas d'âge."
            },
            {
              "block_type": "heading",
              "content": "Réponses simulées (preuves pour vos notes)"
            },
            {
              "block_type": "code",
              "content": "CAMILLE — total indicatif 52/80\nPlanning 3/4 : 12 jours réels, dépend de Marc. Incident 3/4 : deux relances avec Marc. Outils 2/4 : Excel, LégerWMS clics. Brief 3/4 : connaît les pannes. Horaires 4/4. Motivation 4/4.\nCas : ordre des quais correct, a oublié un retard transporteur.\n\nJULIEN — 61/80\nPlanning 4 : exemple convoi transposé, cas : a traité les 2 retards. Incident 4. Outils 2 : pas de WMS, Excel clair. Brief 3 : structuré, vocabulaire militaire à traduire. Horaires 4. Motivation 3 : reconversion assumée, questions sur LégerWMS.\nCas : bon, 18 min.\n\nSYLVIE — 64/80\nPlanning 4 : trop riche, recentrée. Incident 4. Outils 3. Brief 4. Horaires 4 (a confirmé 5h30). Motivation 2 : dit « je déléguerai le tableau » — écart périmètre coordinateur.\nCas : excellent, a proposé de renégocier un tarif transporteur (HORS POSTE) : signal de dérive vers son ancien job.\n\nMARC : « On prend Camille, Sylvie je ne la sens pas, trop senior. Julien, pourquoi pas, mais Camille d'abord. »"
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique — consigne et livrable"
            },
            {
              "block_type": "text",
              "content": "Livrable : 1) trois grilles ; 2) tableau comparatif ; 3) shortlist 1 page ; 4) recommandation (qui, pourquoi, plan de formation, ce que vous refusez comme motif) ; 5) phrase de recadrage à Marc sur « trop senior / équipe jeune » ; 6) si notes proches Julien/Sylvie : départage professionnel (périmètre vs WMS à former)."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée — grille critérée"
            },
            {
              "block_type": "code",
              "content": "RECOMMANDATION TYPE (une voie conforme, pas la seule si argumentée)\n\nRecommander Julien pour le CDI coordinateur : meilleures preuves de planning autonome + cas, fourchette, risque formation WMS acceptable (LégerWMS interne).\nCamille : second, plan de montée (planning accompagné 3 mois) OU mobilité plus tard — pas un cadeau, pas un recale humiliant.\nSylvie : écart de périmètre (« je déléguerai le tableau », réflexe achats transport) documenté. NE PAS écrire « trop vieille / équipe jeune ». Si Marc insiste sur l'âge : alerte Nadia L. 1132-1.\n\nAlternative conforme : recommander Sylvie SI elle recentre et si Marc accepte un N-1 expert — alors figer le périmètre par écrit. Sans cela, le risque est réel (pas l'âge).\n\nInacceptable : Camille « pour la paix » malgré cas incomplet ET sans plan ; écarter Sylvie pour l'âge ; départager au domicile.\n\nGRILLE LEÇON 7 (20)\nNotes liées aux preuves /4\nRefus du motif âge /5\nRecommandation + formation /4\nShortlist honnête vis-à-vis de Camille /3\nPhrase de recadrage manager /4"
            },
            {
              "block_type": "callout",
              "content": "QUALIFICATION : L. 1132-1 ; L. 1221-9 ; politique interne mobilité ; bonne pratique de recommandation écrite. RÉFÉRENCE : L1132-1, L1221-9."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Obéir à « je ne la sens pas ». 20/20 Camille. Oublier le hors poste de Sylvie (vrai écart). Tricher les notes pour le 28."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Deux notes : Julien 61 / Sylvie 64 mais écart périmètre. Le total ne suffit pas : lire les preuves (leçon critères)."
            }
          ],
          "position": 6
        },
        {
          "title": "Négociation, désistement, messages et relais d'intégration",
          "description": "Vous formulez l'offre, gérez un désistement possible, écrivez les refus et passez le relais J1.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 30,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous préparez une offre Nadia (pas une promesse), un plan B en cas de désistement, des refus honnêtes et une checklist J-7 réelle — y compris la DPAE."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Scénario du projet : Nadia valide une offre à Julien, 36 k€, modèle OFFRE, délai de réponse vendredi. Julien a une autre piste. Mardi, il demande 38 k€ et deux jours de télétravail (politique : 0 jour quais). Jeudi soir, il se désiste : counter-offer de son stage transformé en CDD mieux payé. Plan B : Camille, avec plan de formation, si Marc et Nadia confirment. Marc veut « faire honte » à Julien et garder Sylvie au chaud en lui disant qu'elle est première."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Pas d'alignement 38 ni télétravail inventé. Pas de vengeance. Sylvie : vérité (on ne poursuit pas / ou attente honnête si Camille n'est pas décidé). DPAE : Nadia, avant J1, fenêtre 8 jours (SP-F23107). Annonce à retirer une fois pourvu."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique — consigne et livrable"
            },
            {
              "block_type": "text",
              "content": "Livrable :\n1) Projet d'offre Julien (éléments, vocabulaire OFFRE, signataire Nadia, délai).\n2) Réponse à la négo 38 k€ + télétravail.\n3) Mail après désistement (sobre) + ce que vous refusez d'écrire.\n4) Refus / suite Camille et Sylvie (deux textes différents, vrais).\n5) Si Camille accepté : checklist finalisation + préboarding 5 h 30 + alerte si LégerWMS/droits non ouverts.\n6) Phrase à Marc qui veut « faire honte »."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée — grille critérée"
            },
            {
              "block_type": "code",
              "content": "1. OFFRE Julien : CDI, Lille, 36 k€, 5h30, 0 jour TT, essai selon Nadia, valable jusqu'à vendredi, signataire Nadia, pas « nous promettons ».\n\n2. NÉGO : 38 hors fourchette → Nadia. TT 2 jours = non, politique quais, ne pas promettre « on verra ». Pas de menace. Pas d'avenant magique.\n\n3. DÉSISTEMENT : accusé de réception, regret professionnel, pas de remboursement inventé, pas de LinkedIn punitif (S26). Plan B immédiat.\n\n4. SYLVIE : si process clos, refus factuel (périmètre / autre profil retenu) + feedback oral possible. PAS « vous êtes première » pendant l'essai de Camille. CAMILLE : offre séparée, plan de formation planning 90 jours, même honnêteté de périmètre.\n\n5. J-7 Camille : heure 5h30, accueil Marc, badge, DPAE Nadia avant J1 (SP-F23107), droits Excel/LégerWMS, tuteur planning (Marc ou binôme). Pas de laptop fictif. Refus Karim déjà envoyé ; Thomas clôturé ; Inès déjà informée.\n\n6. À MARC : « Nous n'envoyons pas de message humiliant. Priorité : pourvoir le planning. »\n\nGRILLE LEÇON 8 (20)\nOffre vs promesse /4\nNégo sans mensonge /3\nDésistement sobre + plan B /4\nMessages Camille/Sylvie non mensongers /4\nDPAE + préboarding réel /3\nRefus de la vengeance /2"
            },
            {
              "block_type": "callout",
              "content": "QUALIFICATION : SP-F39588 (offre) ; SP-F23107 (DPAE) ; L. 5331-3 (avantages, emploi) ; bonne pratique ; politique TT 0 jour. RÉFÉRENCE : SP-F39588, SP-F23107, L5331-3."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "SMS « tu as le job ». Accorder le TT pour closer. Double promesse Sylvie/Camille. DPAE après J1. Mail de honte à Julien."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Si Camille refuse aussi : reprendre Inès seulement avec une fourchette vraie (toujours pas 41 si non validé) ou prolonger l'intérim — décision Nadia, pas cover story."
            }
          ],
          "position": 7
        },
        {
          "title": "Quiz — Décisions sur le cas Atelier Nord Lumière",
          "description": "Dix questions de décision sur ce recrutement. Seuil : 75 %.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 16,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Répondez à chaque question. En cas d'échec, relisez le module puis retentez. Les questions juridiques essentielles exigent une justification : lisez toujours l'explication après validation."
            }
          ],
          "quiz": {
            "title": "Quiz — Décisions sur le cas Atelier Nord Lumière",
            "passing_score": 75,
            "max_attempts": null,
            "questions": [
              {
                "question": "Le brief de Marc demande un profil « jeune », bac+5, 10 ans, 32-33 k€, opérationnel sous quinze jours. Premier geste ?",
                "question_type": "single_choice",
                "options": [
                  "A. Publier le brief tel quel pour tenir la revue du 28.",
                  "B. Recadrer les critères, lister les manquants, alerter Nadia sur le salaire et retirer « jeune » (L. 1132-1).",
                  "C. Promettre le poste à Camille pour sécuriser.",
                  "D. Indiquer 42 k€ dans l'annonce pour attirer, on recadrera."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Leçon 1. Pas de publication brute, pas de promesse interne, pas de salaire trompeur (L. 5331-3). « Jeune » est illicite."
              },
              {
                "question": "Nadia valide 34-37 k€. L'affichage dans l'annonce est :",
                "question_type": "single_choice",
                "options": [
                  "A. Interdit en France.",
                  "B. Une décision interne / bonne pratique ici ; ce n'est pas (encore) à affirmer comme obligation française consolidée ; le chiffre doit être vrai.",
                  "C. Obligatoire depuis la directive, on peut l'affirmer sans réserve.",
                  "D. Facultatif donc on peut écrire 34-37 tout en visant 32."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "UE-transparence-salariale + L. 5331-3. Fourchette validée et vraie. Pas de discours juridique faux."
              },
              {
                "question": "Karim Haddad (commercial, stage logistique 2014). Décision ?",
                "question_type": "single_choice",
                "options": [
                  "A. Préqual « on ne sait jamais », il habite Lille.",
                  "B. Refus CV : absence de pilotage de planning de flux, motif professionnel.",
                  "C. Refus parce que le nom « ne passera pas aux quais ».",
                  "D. Entretien prioritaire, Marc l'a croisé au golf — ici : il n'est pas interne, c'est hors sujet."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Hors sujet. Le nom est un critère protégé. Le golf n'est pas dans ce dossier ; même s'il l'était, la grille primerait (S39)."
              },
              {
                "question": "Sylvie Moreau est surqualifiée. Marc dit « trop senior, l'équipe est jeune ». Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. L'écartez pour l'âge et la pyramide.",
                  "B. Documentez un écart de périmètre s'il existe, et refusez le motif d'âge (L. 1132-1).",
                  "C. La convoquez en entretien diversité de façade.",
                  "D. La placez première pour compenser."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Leçon 7. L'âge est interdit. Le périmètre (« je déléguerai », réflexe achats) est un vrai sujet. Pas de process alibi."
              },
              {
                "question": "Inès Benali demande 41 k€. Fourchette 34-37. Conduite avant un entretien long ?",
                "question_type": "single_choice",
                "options": [
                  "A. La faire venir en taisant la fourchette, « elle baissera ».",
                  "B. Indiquer 34-37 honnêtement ; ne poursuivre que si elle explore ce cadre ou si Nadia ouvre le budget ; pas d'avenant magique.",
                  "C. Lui écrire que le poste est à 41 k€.",
                  "D. La recaler : une prétention haute est un défaut de caractère."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "S11 / leçon 5-6. Transparence. L. 5331-3. Pas de jugement moral sur la prétention."
              },
              {
                "question": "Thomas a présenté un master et un management de 8 personnes inexacts. Conduite ?",
                "question_type": "single_choice",
                "options": [
                  "A. Poster l'écart sur un groupe RH.",
                  "B. Documenter les faits, décider sur la loyauté du parcours, sans humiliation publique ni enquête privée hors sujet.",
                  "C. Corriger son CV pour lui et le convoquer.",
                  "D. Le convoquer pour un entretien-piège « afin de le coincer »."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "S65-S66, leçon 6. Loyauté. Pas de pilori. Pas de complicité documentaire. Pas de méthode-piège (L. 1221-9)."
              },
              {
                "question": "Julien est recommandé. Marc veut close avant le 28 avec un mail « nous te promettons le poste ». Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Envoyez le mail pour tenir la revue.",
                  "B. Passez par une OFFRE Nadia, vocabulaire maîtrisé (SP-F39588), la revue n'est pas une signature.",
                  "C. Un SMS depuis votre mobile perso.",
                  "D. Promettez aussi Sylvie au cas où."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Leçon 8, S07, S63. Signataire RH. Pas de double promesse. Pas de mot « promettons » par générosité."
              },
              {
                "question": "Julien se désiste jeudi soir. Marc veut un mail de honte et garder Sylvie en lui disant qu'elle est n°1. Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Envoyez le mail de honte et le mensonge à Sylvie.",
                  "B. Accusé sobre, plan B Camille si validé, vérité à Sylvie (refus ou attente datée), pas de vengeance.",
                  "C. Exigez un remboursement des entretiens.",
                  "D. Laissez l'annonce en ligne en disant à chacun qu'il est en finale."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "S25, S26, S67, leçon 8. Un désistement se traite par un accusé sobre et un plan B, pas par la honte ni une créance inventée. Mentir à Sylvie sur un n°1 ou laisser l'annonce comme réserve fictive est déloyal (L. 5331-3)."
              },
              {
                "question": "Camille est finalement embauché. La DPAE :",
                "question_type": "single_choice",
                "options": [
                  "A. Se fait la semaine suivante, ce n'est qu'un papier.",
                  "B. Est une obligation de l'employeur, avant la prise de fonction ou le début de l'essai, au plus tôt dans les 8 jours précédents ; vous alertez Nadia (SP-F23107).",
                  "C. Est de votre signature junior, avec un identifiant emprunté si besoin.",
                  "D. Peut être antidatée si Camille commence lundi."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "SP-F23107 / Urssaf : DPAE avant la prise de fonction ou le début de l'essai, au plus tôt dans les 8 jours précédents. Obligation de l'employeur ; vous alertez Nadia. Pas d'identifiant emprunté, pas d'antidatage, pas de report à la semaine suivante."
              },
              {
                "question": "Quelle recommandation est conforme si les scores sont Julien 61, Sylvie 64 avec dérive de périmètre, Camille 52 ?",
                "question_type": "single_choice",
                "options": [
                  "A. Camille d'office, paix sociale.",
                  "B. Julien au regard des preuves de planning autonome et du cas ; Camille plan B formé ; Sylvie écart de périmètre documenté, pas d'âge.",
                  "C. Sylvie d'office malgré « je déléguerai le tableau », pour le prestige.",
                  "D. Pile ou face Julien/Sylvie, et le plus proche de l'entrepôt."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Leçon 7. Preuves > paix sociale. Résidence et pile ou face exclus (L. 1132-1, L. 1221-9). Alternative Sylvie seulement si périmètre recentré par écrit."
              }
            ]
          },
          "position": 8
        }
      ]
    },
    {
      "position": 23,
      "title": "Examen final de recruteur junior",
      "description": "Vous validez le parcours par un examen unique de 60 questions (seuil 80 %). L'attestation LOU Academy n'est pas un diplôme d'État ni une certification RNCP.",
      "lessons": [
        {
          "title": "Consignes de l'examen final",
          "description": "Seuil, nature de l'attestation, erreurs juridiques à revoir, tentatives autorisées.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 16,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Avant de composer, vous savez ce que l'examen mesure, quel seuil est exigé, ce que l'attestation vaut — et ce qu'elle ne vaut pas —, et où relire le cadre juridique (module 03) si une règle essentielle reste floue."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Cet examen est un questionnaire unique de 60 questions : 30 de connaissances, 20 de raisonnement, 10 de situations complexes. Le cas pratique détaillé a déjà été traité dans le module 22 (Atelier Nord Lumière). Ici, on évalue le transfert : les mêmes règles dans d'autres entreprises, d'autres métiers, d'autres pressions.\n\nLe seuil de réussite est de 80 %. Les tentatives ne sont pas limitées (max_attempts : illimité). Un échec n'est pas une indignité : il signale des lacunes, souvent juridiques. Relisez alors le module 03 (cadre légal), les sources de legal-sources.json (vérifiées le 13/10/2026), et les situations du module 20 correspondantes, puis retentez.\n\nL'attestation LOU Academy certifie que vous avez achevé les leçons requises et réussi les quiz de cette formation sur cette plateforme. Ce n'est pas un diplôme d'État. Ce n'est pas une certification professionnelle enregistrée au RNCP. Vous ne devez pas la présenter comme telle à un employeur, à un financeur ou à un candidat."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Avant l'épreuve : relire la liste d'erreurs juridiques ci-dessous, sans apprendre par cœur des délais inventés. Pendant : lire toutes les options ; les distracteurs sont volontairement séduisants (« le poste est physique, donc on peut écarter une femme enceinte » est faux). Après : lire chaque explication, y compris en cas de succès partiel.\n\nVous composez seul. Vous n'êtes pas évalué sur la mémorisation du roman Atelier Nord Lumière, mais sur des décisions transférables."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Un assistant RH d'une PME de services, un junior de cabinet et un chargé de recrutement en agence d'intérim peuvent tous réussir cet examen : les règles de non-discrimination, d'information du candidat, d'exactitude de l'offre, de RGPD et d'écrits d'embauche ne changent pas de logo. Ce qui change, c'est qui signe (politique interne) et le canal (intérim vs CDI)."
            },
            {
              "block_type": "heading",
              "content": "Erreurs juridiques essentielles à revoir (renvoi module 03)"
            },
            {
              "block_type": "text",
              "content": "Relisez le module 03 avant de composer si l'un de ces points n'est pas net. Ne pas inventer de délai légal au-delà des sources du cours.\n\n1) L. 1132-1 : on n'écarte pas une personne à raison d'un critère protégé (origine, sexe, grossesse, âge, handicap, apparence, nom, résidence, opinions, syndicat, religion, santé, langue autre que le français, lanceur d'alerte, etc.). Il n'existe pas d'exception « poste physique = on refuse une femme enceinte ».\n2) L. 1221-6 : informations en lien direct et nécessaire avec l'emploi ; le candidat répond de bonne foi. Pas d'enquête familiale, médicale ou syndicale.\n3) L. 1221-8 : information préalable sur les méthodes (tests, scoring, IA). L. 1221-9 : méthodes pertinentes.\n4) Offre d'emploi : L. 5331-3 (pas d'allégation trompeuse), L. 5331-4 (français si travail en France), L. 5331-2 (pas de sexe / situation de famille, hors exceptions hors sujet junior).\n5) Salaire dans l'annonce : pas (encore) obligation interne française consolidée à la date des sources (directive UE 2023/970 en transposition). Mentir sur le salaire est déjà interdit.\n6) Offre vs promesse unilatérale : SP-F39588. Une promesse n'est pas obligatoire. Un écrit trop affirmatif se fait valider par RH. Le junior ne bricole pas un retrait.\n7) DPAE : obligation de l'employeur, avant la prise de fonction ou le début de l'essai, au plus tôt dans les 8 jours précédents (SP-F23107). Pas d'antidatage.\n8) CNIL : vivier jusqu'à 2 ans à compter du dernier contact = recommandation, avec information et opposition, pas une durée unique RGPD. Archivage intermédiaire 5 ans des non-retenus à compter de la date à laquelle le poste a été pourvu, à des fins probatoires (référentiel CNIL 2026 / L. 1134-5) = ne pas tout effacer « pour le RGPD » ni tout garder en base active.\n9) Photo, accent, « native », prénom, LinkedIn stalking politique : pas des outils de tri.\n10) Jamais recommander de mentir (manager, candidat, CRM, KPI)."
            },
            {
              "block_type": "callout",
              "content": "Date de vérification des sources : 13/10/2026. Distinguer toujours obligation légale / recommandation d'autorité / politique interne / bonne pratique. En cas de doute sur un cas réel futur, relire Légifrance, Service-Public, Code du travail numérique, CNIL, Urssaf — ne pas appliquer cet examen comme un code pénal personnel."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Échec à 78 % : sous le seuil. Relire les explications des questions manquées, surtout le module 03, puis retenter. Réussite à 80 % : l'attestation suit les règles de la plateforme (leçons requises + quiz réussis). Ce n'est toujours pas un diplôme d'État."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Avant de lancer le quiz, écrivez de mémoire, en cinq lignes, la différence entre offre et promesse (SP-F39588) et la règle DPAE (SP-F23107). Comparez ensuite à legal-sources.json. Si vous avez inventé un délai, rayez-le."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Offre : rétractable avant acceptation dans le délai laissé ou un délai raisonnable, selon l'explication Service-Public de la jurisprudence. Promesse unilatérale : vaut contrat ; le retrait s'analyse en licenciement sans cause réelle et sérieuse. Promesse non obligatoire. DPAE : avant prise de fonction ou début d'essai, au plus tôt 8 jours avant, obligation employeur. Tout autre délai (12 mois de CVthèque « illégal », 48 h de réflexion « légales », DPAE à J+7 après arrivée) est une invention : à bannir de vos réponses."
            }
          ],
          "position": 0
        },
        {
          "title": "Examen final — 60 questions (seuil 80 %)",
          "description": "30 connaissances, 20 raisonnements, 10 situations complexes. Transfert, pas restitution du cas Atelier Nord Lumière. Tentatives illimitées.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 75,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Répondez à chaque question. En cas d'échec, relisez le module puis retentez. Les questions juridiques essentielles exigent une justification : lisez toujours l'explication après validation."
            }
          ],
          "quiz": {
            "title": "Examen final — 60 questions (seuil 80 %)",
            "passing_score": 80,
            "max_attempts": null,
            "questions": [
              {
                "question": "[Connaissance] Refuser une candidate parce qu'elle est enceinte, « le poste étant physique », est :",
                "question_type": "single_choice",
                "options": [
                  "A. Autorisé : l'exception du poste physique figure dans L. 1132-1.",
                  "B. Autorisé si le manager le motive par l'organisation des arrêts.",
                  "C. Interdit : la grossesse et le sexe sont des critères protégés ; il n'existe pas d'exception « poste physique » permettant cet écartement (L. 1132-1, L. 1221-6).",
                  "D. Autorisé pendant la période d'essai uniquement."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Distracteur classique. L. 1132-1 protège notamment le sexe et la grossesse, y compris à l'embauche. L'organisation d'un arrêt se gère le moment venu, comme pour tout salarié. L'essai n'ouvre pas une discrimination. Module 03 / S41."
              },
              {
                "question": "[Connaissance] Les informations demandées à un candidat, sous quelque forme que ce soit, doivent :",
                "question_type": "single_choice",
                "options": [
                  "A. Permettre d'apprécier la capacité à occuper l'emploi ou les aptitudes professionnelles, avec un lien direct et nécessaire (L. 1221-6).",
                  "B. Couvrir aussi la situation familiale, pour anticiper l'absentéisme.",
                  "C. Inclure un extrait de casier pour tous les postes, par égalité.",
                  "D. Reprendre tout ce qui est public sur Internet."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "L. 1221-6. La famille, le casier « pour tous » et l'OSINT récréatif ne sont pas ce texte. Le candidat répond de bonne foi ; le recruteur aussi, en limitant les questions. CNIL : minimisation."
              },
              {
                "question": "[Connaissance] Avant d'utiliser un test, un scoring ou une IA d'aide au recrutement, le candidat :",
                "question_type": "single_choice",
                "options": [
                  "A. N'a rien à savoir : l'outil est interne.",
                  "B. Doit être expressément informé, préalablement, des méthodes et techniques utilisées à son égard (L. 1221-8) ; les résultats sont confidentiels ; les méthodes doivent être pertinentes (L. 1221-9).",
                  "C. Doit seulement signer un NDA après le test surprise.",
                  "D. Peut être informé uniquement s'il est retenu."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L. 1221-8 et L. 1221-9. Un cas « pour voir sous stress » non annoncé (S60) ne respecte pas ces articles. L'IA n'échappe pas à l'information (S54)."
              },
              {
                "question": "[Connaissance] Une offre d'emploi pour un travail effectué en France :",
                "question_type": "single_choice",
                "options": [
                  "A. Peut être rédigée uniquement en anglais si les « talents sont internationaux ».",
                  "B. Doit être en français ; un terme étranger sans équivalent exige une description française suffisamment détaillée (L. 5331-4).",
                  "C. Peut rester en anglais si on publie seulement à l'étranger pour contourner le texte.",
                  "D. Peut mixer « Supply Ninja » sans explication, c'est un intitulé marketing."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L. 5331-4. Le contournement géographique ou l'intitulé fantaisiste n'effacent pas l'obligation. L. 5331-3 vise aussi la nature de l'emploi (« Ninja »)."
              },
              {
                "question": "[Connaissance] Indiquer le salaire ou une fourchette dans une offre, en droit français, à la date de vérification des sources du cours (13/10/2026) :",
                "question_type": "single_choice",
                "options": [
                  "A. Est déjà une obligation interne française consolidée ; on peut l'affirmer au manager sans réserve.",
                  "B. Est interdit.",
                  "C. N'est pas (encore) une obligation interne française consolidée ; une directive UE (2023/970) est en transposition ; indiquer une fourchette vraie est une bonne pratique / future obligation ; mentir sur le salaire est déjà interdit (L. 5331-3).",
                  "D. Autorise à afficher un maximum jamais versé pour attirer."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "legal-sources.json UE-transparence-salariale et L. 5331-3. Ni « déjà obligatoire » ni « interdit d'indiquer ». Le clickbait salarial reste une allégation trompeuse."
              },
              {
                "question": "[Connaissance] Selon l'explication Service-Public F39588, une promesse unilatérale de contrat de travail :",
                "question_type": "single_choice",
                "options": [
                  "A. N'a aucune portée : seul le CDI signé compte.",
                  "B. Peut valoir contrat ; le retrait s'analyse en licenciement sans cause réelle et sérieuse ; une promesse d'embauche n'est pas obligatoire.",
                  "C. Est obligatoire avant toute embauche.",
                  "D. Peut toujours être retirée par SMS du recruteur junior, sans RH."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "SP-F39588 (jurisprudence expliquée, notamment Cass. soc. 21 sept. 2017). L'offre (autre notion) peut être retirée avant acceptation dans le délai laissé ou un délai raisonnable. Le junior fait valider les écrits ; il ne bricole pas un retrait (S62)."
              },
              {
                "question": "[Connaissance] La DPAE doit être effectuée :",
                "question_type": "single_choice",
                "options": [
                  "A. Dans le mois qui suit l'arrivée, c'est un papier RH.",
                  "B. Trois mois avant J1, toujours.",
                  "C. Avant la prise de fonction ou le début de la période d'essai, au plus tôt dans les 8 jours précédant l'embauche ; obligation de l'employeur ; le junior coordonne (SP-F23107).",
                  "D. Uniquement si le salarié est en CDI, pas en CDD."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "SP-F23107 + Urssaf. Ne pas inventer d'autre délai. Ne pas antidater. Ce n'est pas la signature isolée du junior. Le type de contrat n'efface pas l'obligation rappelée pour l'embauche."
              },
              {
                "question": "[Connaissance] La durée de 2 ans en vivier / CVthèque, à compter du dernier contact :",
                "question_type": "single_choice",
                "options": [
                  "A. Est une recommandation CNIL (information, opposition), pas une durée unique imposée par le RGPD lui-même pour tous les traitements.",
                  "B. Est une obligation pénale unique.",
                  "C. Interdit tout recontact après 12 mois (« c'est illégal »).",
                  "D. Autorise à garder les CV en base active indéfiniment si le candidat a postulé une fois."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "CNIL-guide / CNIL-referentiel-2026. Distinguer vivier (reco 2 ans) et archivage probatoire 5 ans des non-retenus à compter de la date à laquelle le poste a été pourvu (L. 1134-5, présenté comme obligation par le référentiel). Pas de délai 12 mois inventé (S57)."
              },
              {
                "question": "[Connaissance] Parmi ces critères, lequel n'est pas un critère protégé au sens de L. 1132-1 tel que rappelé dans les sources du cours ?",
                "question_type": "single_choice",
                "options": [
                  "A. Le lieu de résidence.",
                  "B. L'apparence physique.",
                  "C. Le niveau de maîtrise d'un WMS nécessaire au poste, évalué de façon identique pour tous.",
                  "D. Le nom de famille."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Une aptitude professionnelle liée à l'emploi (L. 1221-6) n'est pas un critère protégé. Résidence, apparence, nom le sont. Attention : un « WMS » utilisé comme prétexte pour écarter un critère protégé redevient illicite."
              },
              {
                "question": "[Connaissance] Exiger une photo sur le CV, ou trier les CV selon la photo :",
                "question_type": "single_choice",
                "options": [
                  "A. Est une bonne pratique d'image employeur.",
                  "B. Égalise les chances si tout le monde fournit une photo.",
                  "C. Est conforme dès lors que le manager « ne s'en sert pas ».",
                  "D. Expose à une discrimination fondée sur l'apparence, l'origine vraie ou supposée, le sexe, l'âge, etc. (L. 1132-1) ; la photo n'est en général pas une information nécessaire (L. 1221-6)."
                ],
                "correct_answer": [
                  3
                ],
                "explanation": "S42. L'égalisation par la photo augmente le risque. Laisser le filtre au manager, c'est le laisser opérer. Exceptions d'offres très limitées (artiste, mannequin) hors recrutement junior classique."
              },
              {
                "question": "[Connaissance] « Native French » ou « français sans accent » comme filtre de sourcing :",
                "question_type": "single_choice",
                "options": [
                  "A. Est légitime : les opérateurs comprennent mal les accents.",
                  "B. Est un proxy d'origine / de langue ; L. 1132-1 vise notamment la capacité à s'exprimer dans une langue autre que le français ; on évalue la communication nécessaire au poste, pas l'accent ni la langue maternelle.",
                  "C. Est obligatoire dans une offre en France.",
                  "D. Peut figurer en anglais pour contourner L. 5331-4."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "S83-S84. On peut évaluer le français professionnel par une mise en situation identique. On ne chasse pas l'accent ni le « native ». L'anglais only ne contourne rien."
              },
              {
                "question": "[Connaissance] Une allégation fausse ou susceptible d'induire en erreur dans une offre, portant sur l'existence, la nature, la description de l'emploi, la rémunération ou le lieu, est :",
                "question_type": "single_choice",
                "options": [
                  "A. Une pratique marketing tolérée si le taux de clics est bon.",
                  "B. Interdite (L. 5331-3).",
                  "C. Interdite seulement si le salaire est trop bas.",
                  "D. Autorisée pour les postes confidentiels (cover story d'un faux second site)."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L. 5331-3. 15 postes fictifs, salaire gonflé, gel présenté comme poste ouvert, second site inventé (S72) : même texte. La confidentialité se traite par le canal, pas par le mensonge."
              },
              {
                "question": "[Connaissance] Le droit d'accès d'un candidat à ses données de recrutement :",
                "question_type": "single_choice",
                "options": [
                  "A. N'existe pas s'il n'est pas retenu.",
                  "B. Se traite en supprimant le dossier pour n'avoir plus rien à donner.",
                  "C. Existe ; le junior oriente vers le process RH / DPO, ne détruit pas les traces pour y échapper, et ne laisse pas un commentaire d'âge comme motif officiel (RGPD, CNIL, L. 1132-1, conservation L. 1134-5).",
                  "D. Oblige à envoyer aussi le CV du candidat retenu."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "S51, S28. Accès ≠ données d'autrui. Destruction opportuniste : faute. Commentaire « trop vieux » : discrimination à recadrer, pas à transférer tel quel comme motif."
              },
              {
                "question": "[Connaissance] L'attestation délivrée à l'issue de cette formation LOU Academy :",
                "question_type": "single_choice",
                "options": [
                  "A. Est un diplôme d'État de recruteur.",
                  "B. Est une certification professionnelle enregistrée au RNCP.",
                  "C. Certifie la réussite du parcours sur cette plateforme (leçons requises et quiz) ; ce n'est ni un diplôme d'État ni une certification RNCP.",
                  "D. Remplace une DPAE."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Course meta et consignes d'examen. La présenter comme diplôme d'État ou RNCP serait trompeur — y compris vis-à-vis d'un employeur."
              },
              {
                "question": "[Connaissance] Le lieu de résidence, utilisé pour départager deux candidats à notes égales (« le plus proche, moins d'absences ») :",
                "question_type": "single_choice",
                "options": [
                  "A. Est du bon sens logistique, donc licite.",
                  "B. Est un critère protégé (L. 1132-1) ; on départage par une preuve professionnelle (L. 1221-9).",
                  "C. Est licite si on le note « mobilité » dans le CRM.",
                  "D. Est licite au-delà de 30 km uniquement — délai légal de trajet."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "S31. Pas de délai légal de kilomètres à inventer. Renommer « mobilité » ne lave pas le critère. Un pile ou face n'est pas une méthode pertinente."
              },
              {
                "question": "[Connaissance] Les activités syndicales, un mandat de représentant du personnel, la qualité de lanceur d'alerte ou de facilitateur :",
                "question_type": "single_choice",
                "options": [
                  "A. Sont des signaux de « risque social » permettant d'écarter.",
                  "B. Figurent parmi les critères protégés (L. 1132-1) ; on n'enquête pas sur le contenu d'une alerte (L. 1221-6).",
                  "C. Doivent être déclarés dès le CV, sous peine de nullité de l'embauche — délai légal de 48 h.",
                  "D. Autorisent une note « profil conflictuel »."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "S50. Pas de délai 48 h inventé. Le code « conflictuel » est un prétexte. Le « risque social » n'est pas une aptitude professionnelle."
              },
              {
                "question": "[Connaissance] Dans une grille d'évaluation, une ligne « feeling / présentation physique / photo » :",
                "question_type": "single_choice",
                "options": [
                  "A. Est utile pour coller au manager.",
                  "B. N'est pas une méthode pertinente au regard de l'emploi (L. 1221-9) et ouvre L. 1132-1.",
                  "C. Est obligatoire pour les métiers d'entrepôt.",
                  "D. Devient licite si le poids est inférieur à 5 %."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Un petit poids n'autorise pas un critère illicite. L'entrepôt n'est pas une exception d'apparence (hors cas très spécifiques d'offres, non concernés)."
              },
              {
                "question": "[Connaissance] Qui est en principe signataire d'une proposition d'embauche dans une PME où le junior n'a pas de délégation ?",
                "question_type": "single_choice",
                "options": [
                  "A. Le recruteur junior, dès qu'il « close ».",
                  "B. Le manager opérationnel, par e-mail personnel.",
                  "C. La personne habilitée selon la politique interne (souvent RH / direction) ; le junior prépare, n'improvise pas le mot « promesse ».",
                  "D. Le candidat, qui s'auto-embauche en acceptant à l'oral."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Politique interne + SP-F39588. Un e-mail manager « nous vous promettons » est un incident (S62), pas un modèle. L'oral n'est pas magiquement inoffensif."
              },
              {
                "question": "[Connaissance] Un commentaire CRM « trop vieux, pas le feeling » :",
                "question_type": "single_choice",
                "options": [
                  "A. Peut servir de motif de refus transmis tel quel, par transparence.",
                  "B. Est une donnée à risque (L. 1132-1) ; on recadre le manager, on documente des faits professionnels, on n'efface pas tout le dossier pour échapper à un accès.",
                  "C. Est protégé par le secret des affaires, donc incommunicable à jamais.",
                  "D. Est licite s'il est écrit en anglais."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "S27, S51. Transparence ≠ transmettre un motif discriminatoire. Secret des affaires n'est pas un blanc-seing. La langue ne change rien."
              },
              {
                "question": "[Connaissance] La conservation probatoire des dossiers de candidats non retenus, telle que présentée par le référentiel CNIL 2026 en lien avec L. 1134-5 :",
                "question_type": "single_choice",
                "options": [
                  "A. Autorise à laisser tous les CV en CVthèque active indéfiniment.",
                  "B. Est un archivage intermédiaire de 5 ans à compter de la date à laquelle le poste a été pourvu, à des fins de preuve — à distinguer du vivier.",
                  "C. Oblige le junior à tout détruire à J+30.",
                  "D. N'existe pas : le RGPD impose l'oubli immédiat."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "CNIL-referentiel-2026 et L. 1134-5. Obligation d'archivage probatoire ≠ base active. Vivier = autre finalité, reco 2 ans. Le junior ne décide pas seul un purge ou un silo éternel (S56)."
              },
              {
                "question": "[Connaissance] Un must-have, dans un profil candidat, doit être :",
                "question_type": "single_choice",
                "options": [
                  "A. Un diplôme bac+5, toujours, pour « parler aux commerciaux ».",
                  "B. Un critère observable, lié aux missions, évaluable de la même façon pour tous (L. 1221-6, L. 1221-9).",
                  "C. L'âge cible du service.",
                  "D. La résidence à moins de 20 minutes."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le diplôme n'est un must que s'il est nécessaire. Âge et résidence : L. 1132-1. Le brief gonflé (S02) se challenge."
              },
              {
                "question": "[Connaissance] La méthode STAR sert à :",
                "question_type": "single_choice",
                "options": [
                  "A. Obtenir des faits (situation, tâche, action, résultat) comparables entre candidats.",
                  "B. Piéger le candidat sous stress non annoncé.",
                  "C. Remplacer la grille par le feeling du panel.",
                  "D. Poser des questions de situation familiale de façon structurée."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "STAR = preuves. Pas un test surprise (L. 1221-8). Pas un permis de questions illicites. Le panel sans grilles (S37) reste non pertinent."
              },
              {
                "question": "[Connaissance] Le recruteur junior, face à une question illicite du manager en entretien :",
                "question_type": "single_choice",
                "options": [
                  "A. Laisse finir par politesse, puis « n'utilise pas » la réponse.",
                  "B. Interrompt, recentre sur les aptitudes, signale les faits à RH ; il ne note pas l'information illicite dans le dossier candidat.",
                  "C. Reformule pour obtenir la même information plus mollement (« disponible 24 mois ? »).",
                  "D. Répond à la place du candidat pour déminer."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "S41, S48. Le silence est une complicité opérationnelle. La reformulation grossesse → 24 mois vise le même objet. Collecter quand même = RGPD / L. 1221-6."
              },
              {
                "question": "[Connaissance] Un recrutement confidentiel (titulaire non informé) autorise :",
                "question_type": "single_choice",
                "options": [
                  "A. Une annonce décrivant une fausse ouverture de second site.",
                  "B. Un canal discret (approches, cabinet) et un intitulé non mensonger ; pas une cover story (L. 5331-3).",
                  "C. D'informer le titulaire contre la consigne, de votre initiative isolée.",
                  "D. De publier les photos des finalistes « en off »."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "S72, S69. Confidentialité ≠ mensonge d'existence de l'emploi. Pas de publication nominative sans cadre. Pas d'indiscrétion isolée."
              },
              {
                "question": "[Connaissance] L'intérim, par rapport à un CDI, est :",
                "question_type": "single_choice",
                "options": [
                  "A. Un CDI plus rapide, que l'on vend comme CDI au candidat d'agence pour l'attirer.",
                  "B. Un canal / contrat à faire qualifier par RH selon que le besoin est un pic ou une structure ; la nature de l'emploi doit être vraie (L. 5331-3).",
                  "C. Interdit dès que le manager trouve l'intérim cher.",
                  "D. Un moyen de tester un mineur de 17 ans de nuit « comme les autres »."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "S71, S98. Pas d'appât de nature de contrat. Pas d'improvisation sur le travail des mineurs : RH. Le coût n'est pas une règle d'interdiction légale inventée."
              },
              {
                "question": "[Connaissance] Un indicateur de performance junior du type « nombre d'offres envoyées dans la semaine du COMEX » :",
                "question_type": "single_choice",
                "options": [
                  "A. Justifie un mensonge de rareté ou un CRM « offer accepted » anticipé.",
                  "B. Ne doit pas servir de prime poussant à closer au mépris des écrits et de L. 5331-3 (S100) ; on privilégie des indicateurs de qualité de dossier.",
                  "C. Est obligatoire pour tout ATS.",
                  "D. Autorise deux offres secrètes le même soir."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "S07, S100, module 21 tableau de bord. Un KPI n'autorise pas le mensonge. Double offre : chaos et SP-F39588."
              },
              {
                "question": "[Connaissance] La cooptation (y compris le CV du neveu du DG) :",
                "question_type": "single_choice",
                "options": [
                  "A. Impose d'embaucher le coopté.",
                  "B. Est un canal : même grille, conflit d'intérêts tracé, notes non maquillées.",
                  "C. Impose un entretien plus dur pour « montrer l'équité ».",
                  "D. Autorise d'écarter sans entretien pour éviter le soupçon."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "S73. Canal ≠ passe-droit. Entretien punitif et refus aveugle ne sont pas des méthodes pertinentes (L. 1221-9)."
              },
              {
                "question": "[Connaissance] Un aménagement d'accessibilité demandé pour un entretien (salle, temps supplémentaire) :",
                "question_type": "single_choice",
                "options": [
                  "A. Prouve l'inaptitude : on recale.",
                  "B. Exige le dossier médical et la RQTH avant d'accorder quoi que ce soit.",
                  "C. S'apprécie comme aménagement de l'évaluation, sans collecte médicale par le junior ; le handicap / la santé ne sont pas un motif d'écartement (L. 1132-1, L. 1221-6).",
                  "D. Autorise à durcir le reste de l'oral « pour compenser »."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "S43, S89. Aménager l'évaluation ≠ baisser le niveau du poste. Compensation punitive = discrimination. Pas de médecine improvisée."
              },
              {
                "question": "[Connaissance] Vous n'avez pas le droit, dans cet enseignement, d'inventer :",
                "question_type": "single_choice",
                "options": [
                  "A. Une fourchette salariale interne que RH n'a pas validée — et c'est tout.",
                  "B. Un délai légal, une jurisprudence, une statistique ou un témoignage hors legal-sources.json et textes cités ; ni de recommander de mentir.",
                  "C. Un must-have professionnel lié aux missions.",
                  "D. Un plan d'intérim de transition proposé au manager."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "CONTENT_SPEC et consignes d'examen. Inventer « 12 mois illégal », « 48 h légales de réflexion », « exception poste physique » : hors sujet et faux. Un must-have métier et un plan d'intérim sont au contraire le travail."
              },
              {
                "question": "[Connaissance] L. 5331-2 (et textes liés rappelés par Service-Public) vise notamment :",
                "question_type": "single_choice",
                "options": [
                  "A. L'obligation d'afficher le salaire, déjà consolidée en droit français.",
                  "B. L'interdiction de mentionner le sexe / la situation de famille dans une offre (exceptions très limitées : artiste, mannequin/modèle).",
                  "C. L'obligation de photo d'identité.",
                  "D. L'interdiction de toute fourchette salariale."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Fiche Service-Public Entreprendre F39133, sources du cours. Ne pas confondre avec la directive transparence (affichage du salaire, transposition). Photo : plutôt L. 1132-1 / L. 1221-6."
              },
              {
                "question": "[Raisonnement] Mardi, un chef d'atelier veut « quelqu'un pour lundi », sans fiche ni budget. Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Publiez une annonce générique dans l'heure et envoyez les trois premiers CV.",
                  "B. Promettez le lundi pour rassurer, puis vous ajusterez.",
                  "C. Recadrez le délai, listez les manquants, proposez un plan (intérim de transition vs CDI), sans date d'arrivée inventée.",
                  "D. Attendez la fin du préavis pour ne pas faire de vagues, sans rien dire."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "S01. L'urgence se traite par un plan, pas par une promesse. L. 5331-3 si l'annonce ment sur le délai. Ne pas disparaître non plus : cadrer."
              },
              {
                "question": "[Raisonnement] La fourchette interne est 8 à 12 k€ sous les retours de vos process comparables. Le fondateur refuse d'ouvrir. Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Indiquez 42 k€ dans l'annonce pour attirer, puis recadrez.",
                  "B. Documentez l'écart interne, alertez, ne sur-vendez pas la rémunération ; vous n'inventez pas une statistique nationale.",
                  "C. Bloquez tout process sans accord écrit du fondateur pour ouvrir, même si RH assume le risque de délai — la seule voie.",
                  "D. Culpabilisez les candidats « pas assez passionnés par le baby-foot »."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "S03. L. 5331-3. Pas de marché officiel inventé. Bloquer peut être disproportionné si RH assume ; alerter est obligatoire. Le baby-foot n'est pas un salaire."
              },
              {
                "question": "[Raisonnement] Deux finalistes à 16/20. Le manager veut celui qui habite le plus près. Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Refusez le critère de résidence (L. 1132-1) et proposez un départage professionnel.",
                  "B. Acceptez : moins d'absences.",
                  "C. Faites pile ou face.",
                  "D. Les écartez tous les deux pour éviter le conflit."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "S31. Méthodes pertinentes (L. 1221-9). Le conflit d'autorité se documente, il ne se résout pas en sacrifiant les deux profils."
              },
              {
                "question": "[Raisonnement] Après 20 minutes, le manager coupe : « je ne le sens pas, trop scolaire. » Aucune note. Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Clôturez pour respecter le manager.",
                  "B. Mettez 8/20 d'autorité.",
                  "C. Dites au candidat que le poste est gelé.",
                  "D. Demandez des faits observables, refusez un refus sans critère, et restez attentif à un biais d'âge / apparence caché derrière « scolaire »."
                ],
                "correct_answer": [
                  3
                ],
                "explanation": "S32. Feeling à traduire ou à écarter. Mensonge de gel : déloyal (L. 5331-3). Falsifier la note : faute. L. 1221-9 et L. 1132-1."
              },
              {
                "question": "[Raisonnement] Vous aviez promis un retour sous cinq jours. Le manager n'a pas tranché. Le candidat relance. Le manager : « ignore, trop pressé = mauvais profil. » Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. N'ignorez pas : état réel + nouveau délai + relance écrite du manager.",
                  "B. Testez la motivation par le silence.",
                  "C. Inventez un refus pour clore.",
                  "D. Inventez qu'il est le favori."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "S21. Le silence n'est pas un critère. Mentir dans un sens ou dans l'autre n'est pas une option. CNIL : loyauté du traitement."
              },
              {
                "question": "[Raisonnement] Une candidate a une offre concurrente à 48 h. Votre manager est en salon. Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Lui demandez de refuser l'autre offre, « on est presque sûrs ».",
                  "B. L'écartez : trop de contraintes.",
                  "C. Accélérez réellement ce qui est possible, ou la laissez partir proprement, sans promesse molle.",
                  "D. Inventez un entretien déjà validé."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "S23. Pas de pont brûlé sur du vent. Pas de punition de la transparence. Pas de mensonge d'agenda."
              },
              {
                "question": "[Raisonnement] Le manager veut trois « yes en poche » et que chacun entende « vous êtes très bien positionné », sans date. Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Obéissez : stratégie de réserve.",
                  "B. Promettez le poste aux trois.",
                  "C. Coupez toute information pour rester neutre.",
                  "D. Informez chacun de la shortlist ouverte, datez, refusez les formulations mensongères."
                ],
                "correct_answer": [
                  3
                ],
                "explanation": "S25. Le silence n'est pas la neutralité. Trois priorités uniques sont un mensonge. Loyauté > file d'attente."
              },
              {
                "question": "[Raisonnement] Le poste est gelé. Le manager veut que vous disiez « on n'a pas trouvé le profil » et que l'annonce reste en ligne. Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Informez du gel / retirez ou marquez pourvu ; pas de défaut de profil inventé ; pas d'emploi fantôme (L. 5331-3).",
                  "B. Mentez pour protéger le budget de l'an prochain.",
                  "C. Promettez une ouverture dans trois mois sans décision.",
                  "D. Dites à chacun qu'il est en finale."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "S61, S67. Existence de l'emploi. Vivier seulement informé et vrai. Marque employeur et données sans finalité."
              },
              {
                "question": "[Raisonnement] Une candidate allègue une discrimination. Le manager veut répondre sèchement et supprimer les notes. Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Laissez le manager et nettoyez le CRM.",
                  "B. Présentez des excuses publiques sur LinkedIn de votre propre chef.",
                  "C. Ne détruisez pas, saisissez RH, conservez, vérifiez que le refus documenté est professionnel.",
                  "D. Promettez un second poste pour éteindre l'accusation."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "S64. Destruction de preuves, clash, poste fantôme : fautes. Polarisation publique isolée : imprudente. L. 1132-1, L. 1134-5."
              },
              {
                "question": "[Raisonnement] L'outil IA sort un top 10 sans aucune femme. Le manager ne veut ouvrir que ce top. Aucun candidat n'est informé. Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Suivez le top : l'outil est objectif.",
                  "B. Renommez l'IA « aide à la lecture » et continuez.",
                  "C. Injectez le genre dans le modèle sans règle.",
                  "D. N'en faites pas la décision, informez (L. 1221-8), contrôlez les biais, alertez RH / DPO."
                ],
                "correct_answer": [
                  3
                ],
                "explanation": "S54. L'IA n'est pas objective par nature. Un top 10 sans femme est une alerte L. 1132-1. Cosmétique sémantique insuffisante. Bricolage du genre : dangereux."
              },
              {
                "question": "[Raisonnement] Un collègue a fouillé Instagram (mariage, post politique) pour le CR. Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Intégrez : c'est public.",
                  "B. Refusez ces éléments, les sortez du dossier (L. 1132-1, L. 1221-6, CNIL).",
                  "C. Les gardez sans les écrire.",
                  "D. Demandez au candidat de justifier ses posts."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "S53. Public ≠ pertinent ≠ licite. Garder sans écrire, c'est encore traiter la donnée. Opinions politiques protégées."
              },
              {
                "question": "[Raisonnement] En préqual, le candidat refuse d'indiquer une prétention et demande d'abord la fourchette, que vous avez. Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. L'écartez : pas sérieux.",
                  "B. Inventez une fourchette plus basse pour le faire descendre.",
                  "C. Communiquez la fourchette autorisée et poursuivez si le cadre lui convient (S19, L. 5331-3).",
                  "D. Insistez jusqu'à obtenir un chiffre, c'est un test de caractère."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "La prétention est utile, pas un test de soumission. Mentir sur la fourchette est interdit. L. 1221-6 : lien avec l'emploi, pas un rapport de force."
              },
              {
                "question": "[Raisonnement] Le manager veut « tous les CV », y compris hors critères, et a déjà commenté des photos. Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Transférez la CVthèque.",
                  "B. Convenez d'une grille écrite, envoyez un flot qualifié, refusez le tri photo / âge (L. 1132-1).",
                  "C. Filtrez vous-même « ce qui lui plaira » (look, adresse).",
                  "D. Ne filtrez plus du tout pour éviter le conflit."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "S10. Présélection = métier, pas censure. Anticiper les goûts illicites = discrimination par procuration."
              },
              {
                "question": "[Raisonnement] Un interne et un externe sont évalués. Le manager : « prends l'interne, sinon il se démotive », malgré un écart WMS net. Politique : pas de priorité automatique. Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Offrez le poste comme une faveur.",
                  "B. Faites passer l'externe dans un process alibi.",
                  "C. Évaluez sur la même grille, explicitez la politique, ne maquillez pas (S34).",
                  "D. Écartez l'interne d'emblée pour ne pas créer d'espoir."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Équité. Process potiche : L. 5331-3 si l'emploi n'est pas réellement ouvert. L'interne a droit à un vrai feedback."
              },
              {
                "question": "[Raisonnement] Après acceptation orale, counter-offer de l'employeur actuel. Le manager dit « mercenaire, on n'aligne pas ». L'écrit n'est pas parti. Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Traitez le candidat de mercenaire et clôturez.",
                  "B. Restez factuel, leviers vrais seulement, pas de dénigrement, pas d'écrit menti, pas d'alignement sauvage sans RH (S17).",
                  "C. Montez immédiatement sans RH.",
                  "D. Dites que l'écrit est déjà envoyé pour le bloquer."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Jamais mentir sur un écrit. Jamais dénigrer. La contre-offre n'est pas un critère moral. Politique de négo = RH."
              },
              {
                "question": "[Raisonnement] J-3, aucun PC, aucun tuteur, badge non commandé. Le manager : « on n'a plus besoin de toi ». Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Disparaissez : ce n'est plus du recrutement.",
                  "B. Promettez parrain, laptop et formation 3 jours pour rassurer.",
                  "C. Faites l'intégration à la place du manager le lundi.",
                  "D. Passage de relais écrit, alerte sur les manques, informations vraies au candidat, sans moyen fictif (S94)."
                ],
                "correct_answer": [
                  3
                ],
                "explanation": "Le junior n'est pas l'intégrateur, il n'est pas un disparu, il n'est pas un vendeur de moyens fictifs (loyauté / L. 5331-3 analogie avantages)."
              },
              {
                "question": "[Raisonnement] Une requête booléenne vous est donnée : (HEC OR ESSEC) NOT (Mohamed OR Fatima) AND native French. Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. L'utilisez : ça marche en cabinet.",
                  "B. Enlevez les prénoms mais gardez native et HEC only.",
                  "C. Refusez et reconstruisez sur les compétences (L. 1132-1, L. 1221-6, L. 1221-9).",
                  "D. La lancez sans noter le motif, ainsi « ça n'existe pas »."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "S83. L'absence de trace n'efface pas l'acte. HEC exclusif sans lien nécessaire : discrimination indirecte possible. Native : origine / langue."
              },
              {
                "question": "[Raisonnement] Un ami proche postule. Vous vous croyez neutre. Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Préqualifiez en silence.",
                  "B. Le recalez d'office pour éviter le soupçon.",
                  "C. Le sur-notez pour compenser le soupçon inverse.",
                  "D. Déclarez le conflit et vous déportez (S95)."
                ],
                "correct_answer": [
                  3
                ],
                "explanation": "La neutralité proclamée ne suffit pas. Recale et sur-notation sont des biais. Politique déontologique : déclaration."
              },
              {
                "question": "[Raisonnement] Le candidat veut lire le projet de contrat avant de démissionner. Le manager : « s'il n'a pas confiance, on passe au suivant. » RH a un projet validable. Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Écartez pour manque de confiance.",
                  "B. Transmettez les documents validés RH : c'est prudent, pas un affront (S92).",
                  "C. Promettez oralement que « ce sera le même que tout le monde » sans pièce.",
                  "D. Envoyez un contrat non validé pour aller vite."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Test de confiance inversé = mauvais critère. Oral vague et contrat sauvage : SP-F39588 / S14."
              },
              {
                "question": "[Raisonnement] Votre N+1 ferme les yeux « si ça signe » : vous pourriez dire que le second a déjà signé ailleurs (faux) et qu'un laptop custom est commandé (faux). Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Refusez le mensonge, gardez les faits, n'antidatez pas le CRM (S100, L. 5331-3).",
                  "B. Mentez : « tout le monde le fait », l'objectif d'abord.",
                  "C. Truquez le CRM « offer accepted » en attendant.",
                  "D. Baissez le salaire dans l'outil puis promettez un rattrapage."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Jamais recommander de mentir. Un N+1 complice n'est pas une source du droit. Faux avantage, fausse rareté, faux rattrapage : fautes empilées."
              },
              {
                "question": "[Situation complexe] En entretien, le manager demande les projets d'enfants « poste physique », commente la photo du CV et veut recaler « les clients ne sont pas prêts ». La candidate vous regarder. Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Laissez faire : trois signaux, un seul pourrait passer.",
                  "B. Reformulez sur les 24 mois de disponibilité et triez quand même sur la photo, sans le noter.",
                  "C. Interrompez la question grossesse, refusez le tri apparence / origine, recentrez sur les aptitudes, alertez RH (L. 1132-1, L. 1221-6) ; aucune exception « poste physique ».",
                  "D. Notez tout « pour le dossier » au cas où un contentieux viendrait."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "S41+S42+S45. Trois illicites n'en font pas un licite. Noter les réponses illicites aggrave la collecte. La reformulation 24 mois est la même question. Transfert du module 03, pas du roman module 22."
              },
              {
                "question": "[Situation complexe] Un e-mail du directeur dit « nous vous promettons le poste, 37 k€, le 3 novembre ». Le COMEX coupe le budget. On vous demande de retirer en douce et d'écrire « ce n'était qu'une piste », tout en envoyant le même jour une offre à un second. Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Retirez en douce et doublez l'offre : le COMEX d'abord.",
                  "B. Alertez RH / juridique : formulation potentiellement de promesse unilatérale (SP-F39588) ; vous ne bricolez ni le retrait ni une seconde attribution ; vous conservez les pièces.",
                  "C. Un SMS « finalement non » suffit, ce n'est pas un contrat.",
                  "D. Conseillez au premier candidat de mentir à son employeur actuel pour gagner du temps."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "S62+S07+S63. Terrain juridique. SMS = écrit. Double attribution = chaos. Jamais conseiller de mentir. La « piste » réécrite aggrave la mauvaise foi."
              },
              {
                "question": "[Situation complexe] Scoring IA non annoncé, top 10 sans femmes, manager qui ne veut que ce top, et un booléen NOT de prénoms « pour alimenter l'IA ». Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Combinez IA + booléen : objectivité maximale.",
                  "B. Informez a posteriori seulement les retenues.",
                  "C. Stoppez l'usage décisionnel, refusez le booléen discriminatoire, informez (L. 1221-8), contrôlez, alertez DPO / RH (L. 1132-1, L. 1221-9).",
                  "D. Rééquilibrez en injectant le sexe dans le modèle sans documentation."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "S54+S83. Deux discriminations (algo + requête) ne se compensent pas par un bricolage de genre. L'information préalable n'est pas un luxe pour les non-retenus."
              },
              {
                "question": "[Situation complexe] Poste publié à l'externe alors que le manager a « son » interne et veut un process alibi ; le brief dit encore « jeune, bac+5, 10 ans ». Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Faites l'alibi : l'interne aura le poste, les externes nourrissent le vivier.",
                  "B. Respectez la publication interne réelle, même grille, recadrez le brief (pas « jeune »), refusez le process potiche (L. 5331-3, L. 1132-1).",
                  "C. Bloquez l'interne pour « ouvrir le jeu » de force.",
                  "D. Dites aux externes que c'est déjà pourvu tout en collectant les CV."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "S74+S02+S44. Si vous attirez, l'emploi est réel. « Jeune » sort. L'interne n'est ni sacré ni sacrifié. Collecte mensongère : L. 5331-3 + CNIL."
              },
              {
                "question": "[Situation complexe] Candidat en situation de handicap : compétences ok, demande un aménagement d'horaire. Le manager : « on n'est pas équipés, recale, et demande-lui son dossier médical pour le justifier. » Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Recalez : l'entreprise n'est pas équipée.",
                  "B. Exigez le dossier médical : L. 1221-6 le permet pour tous les postes physiques.",
                  "C. Ne l'écartez pas du seul fait du handicap ; saisissez RH / référent ; pas de collecte médicale junior (L. 1132-1, L. 1221-6, CNIL).",
                  "D. Le convoquez à un oral plus dur pour compenser."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "S43+S89. « Pas équipés » n'est pas un tri junior. Le médical n'est pas un réflexe L. 1221-6. Compensation punitive : discrimination."
              },
              {
                "question": "[Situation complexe] Lundi 8 h, embauche. Vendredi, DPAE non faite. Le manager : « il commence, on dira mercredi, et toi tu remplis avec l'identifiant d'un collègue. » Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Alertez l'employeur / RH : DPAE avant prise de fonction ou début d'essai, au plus tôt 8 jours avant (SP-F23107) ; pas d'antidatage, pas d'identifiant emprunté.",
                  "B. Laissez commencer : ce n'est qu'un papier.",
                  "C. Antidatez mercredi : le salarié sera content d'avoir le job.",
                  "D. Remplissez avec l'identifiant emprunté pour sauver J1."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "S91. Obligation employeur. Coordination junior. Deux mensonges (date, identité) n'en font pas une régularisation. Pas d'autre délai inventé."
              },
              {
                "question": "[Situation complexe] Demande d'accès RGPD. CRM : « trop vieux, pas le feeling ». Le manager veut tout supprimer. Un archivage probatoire peut s'appliquer (référentiel CNIL / L. 1134-5). Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Tout supprimer dans l'heure : plus de données, plus de problème.",
                  "B. Envoyer le CRM brut sans RH, commentaire compris, « transparence ».",
                  "C. Ignorer : non-retenu = pas de droits.",
                  "D. Process RH / DPO, pas de destruction opportuniste, recadrage du commentaire illicite, distinction vivier / archivage (S51, S56)."
                ],
                "correct_answer": [
                  3
                ],
                "explanation": "Accès + non-discrimination + conservation. Trois régimes, une seule conduite : ne pas bricoler. Le ZIP sauvage et la purge sont deux fautes opposées."
              },
              {
                "question": "[Situation complexe] Deux finalistes de même niveau. L'homme a demandé 38 k€, la femme 34, fourchette jusqu'à 38. Le manager : « on prend la femme à 34, on économise » et veut enlever la femme de 54 ans d'un pack COMEX « pour éviter les questions ». Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Suivez : chacun a demandé ce qu'il voulait, et le COMEX n'aime pas l'âge.",
                  "B. Alertez RH : écart de salaire genré et écartement pour l'âge (L. 1132-1) ; présentez les personnes sur des critères professionnels ; rémunération alignée sur le poste, pas sur le genre.",
                  "C. Recalez la femme pour « éviter le sujet ».",
                  "D. Montez la femme à 38 tout seul, sans RH, et cachez-la au COMEX quand même."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "S20+S40. Deux discriminations (rémunération / âge). « Elle a demandé moins » ne lave pas. Rétablissement sauvage + invisibilisation : incohérent et toujours illicite sur l'âge."
              },
              {
                "question": "[Situation complexe] Désistement la veille. Le manager veut un mail de honte, un remboursement des entretiens, garder deux personnes en leur disant qu'elles sont n°1, et laisser l'annonce en ligne « pour la réserve ». Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Accusé sobre, pas de pénalité inventée, plan B, vérité aux autres (refus ou attente datée), annonce retirée ou marquée pourvue (S26, S25, S67).",
                  "B. Mail de honte + remboursement : la leçon doit passer.",
                  "C. Double n°1 + annonce : stratégie classique.",
                  "D. Commentaire LinkedIn négatif sur le candidat, pour dissuader les autres."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Pas de créance inventée, pas de diffamation, pas de triple mensonge d'existence de l'emploi / de position. Priorité opérationnelle + loyauté."
              },
              {
                "question": "[Situation complexe] Annonce rédigée par un manager IT pour un poste à Lille : anglais only, titre « Supply Ninja », « jeune dynamique 25-30 », « 15 postes immédiats », « jusqu'à 80 k€ » jamais versés, photo exigée. Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Publiez : modernité + clic.",
                  "B. Publiez en anglais seulement à l'étranger pour contourner L. 5331-4.",
                  "C. Refusez la mise en ligne, réécrivez en français, sans âge, sans volume fictif, sans maximum salarial fantaisiste, sans photo, avec un intitulé et une nature d'emploi exacts (L. 5331-2, L. 5331-3, L. 5331-4, L. 1132-1).",
                  "D. Gardez « jeune » et 80 k€, mais en petit caractère."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "S44+S80+S82+S15+S42. Cinq illicites / tromperies. Le petit caractère et le contournement géographique ne sauvent rien. Transfert : vous n'avez pas besoin du dossier Atelier Nord Lumière pour décider."
              }
            ]
          },
          "position": 1
        }
      ]
    }
  ]
}
$coursejsonb$;
  v_course_id    uuid;
  v_module_id    uuid;
  v_lesson_id    uuid;
  v_quiz_id      uuid;
  v_mod          record;
  v_les          record;
  v_blk          record;
  v_q            record;
BEGIN
  SELECT id INTO v_course_id FROM courses WHERE slug = 'devenir-recruteur-a-z';
  IF v_course_id IS NULL THEN
    RAISE EXCEPTION 'Cours devenir-recruteur-a-z absent. Exécutez 006a d''abord.';
  END IF;
  IF EXISTS (
    SELECT 1 FROM modules WHERE course_id = v_course_id AND position >= 12
  ) THEN
    RAISE NOTICE '006b : déjà chargé — skip.';
  ELSE
      
    FOR v_mod IN
      SELECT t.value AS obj, (t.ordinality - 1)::int AS pos
      FROM jsonb_array_elements(payload->'modules') WITH ORDINALITY AS t
    LOOP
      INSERT INTO modules (course_id, title, description, position)
      VALUES (
        v_course_id,
        v_mod.obj->>'title',
        v_mod.obj->>'description',
        COALESCE((v_mod.obj->>'position')::int, v_mod.pos)
      )
      RETURNING id INTO v_module_id;

      FOR v_les IN
        SELECT t.value AS obj, (t.ordinality - 1)::int AS pos
        FROM jsonb_array_elements(v_mod.obj->'lessons') WITH ORDINALITY AS t
      LOOP
        INSERT INTO lessons (
          module_id, title, description, lesson_type, position,
          estimated_duration_minutes, is_required
        )
        VALUES (
          v_module_id,
          v_les.obj->>'title',
          v_les.obj->>'description',
          COALESCE(v_les.obj->>'lesson_type', 'lesson'),
          COALESCE((v_les.obj->>'position')::int, v_les.pos),
          NULLIF(v_les.obj->>'estimated_duration_minutes', '')::int,
          COALESCE((v_les.obj->>'is_required')::boolean, true)
        )
        RETURNING id INTO v_lesson_id;

        FOR v_blk IN
          SELECT t.value AS obj, (t.ordinality - 1)::int AS pos
          FROM jsonb_array_elements(COALESCE(v_les.obj->'blocks', '[]'::jsonb)) WITH ORDINALITY AS t
        LOOP
          INSERT INTO content_blocks (lesson_id, block_type, content, position, metadata)
          VALUES (
            v_lesson_id,
            v_blk.obj->>'block_type',
            CASE
              WHEN jsonb_typeof(v_blk.obj->'content') IN ('object', 'array')
                THEN (v_blk.obj->'content')::text
              ELSE COALESCE(v_blk.obj->>'content', '')
            END,
            COALESCE((v_blk.obj->>'position')::int, v_blk.pos),
            CASE
              WHEN jsonb_typeof(v_blk.obj->'metadata') = 'object'
                THEN v_blk.obj->'metadata'
              ELSE NULL
            END
          );
        END LOOP;

        IF v_les.obj->>'lesson_type' = 'quiz' AND v_les.obj->'quiz' IS NOT NULL THEN
          INSERT INTO quizzes (lesson_id, title, passing_score, max_attempts)
          VALUES (
            v_lesson_id,
            v_les.obj->'quiz'->>'title',
            COALESCE((v_les.obj->'quiz'->>'passing_score')::numeric, 70),
            NULLIF(v_les.obj->'quiz'->>'max_attempts', '')::int
          )
          RETURNING id INTO v_quiz_id;

          FOR v_q IN
            SELECT t.value AS obj, (t.ordinality - 1)::int AS pos
            FROM jsonb_array_elements(v_les.obj->'quiz'->'questions') WITH ORDINALITY AS t
          LOOP
            INSERT INTO quiz_questions (
              quiz_id, question, question_type, options, correct_answer, explanation, position
            )
            VALUES (
              v_quiz_id,
              v_q.obj->>'question',
              COALESCE(v_q.obj->>'question_type', 'single_choice'),
              v_q.obj->'options',
              v_q.obj->'correct_answer',
              v_q.obj->>'explanation',
              COALESCE((v_q.obj->>'position')::int, v_q.pos)
            );
          END LOOP;
        END IF;
      END LOOP;
    END LOOP
  END IF;
END
$seed$;

UPDATE courses
SET status = 'published',
    published_at = COALESCE(published_at, now()),
    updated_at = now()
WHERE slug = 'devenir-recruteur-a-z';

COMMIT;
