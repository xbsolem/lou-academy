import { lesson, h, t, note, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 19,
  title: "Devenir opérationnel comme recruteur junior",
  description:
    "Installer les compétences, le rythme des premiers mois, la relation managers, les limites et la validation hiérarchique, puis se préparer à un entretien d'embauche sur le métier.",
  lessons: [
    lesson({
      title: "Compétences attendues d'un recruteur junior",
      description:
        "Clarifier ce que l'on vous demandera réellement en poste : coordination, droit de base, évaluation, écrit, outils, pas un rôle de DRH.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez décrire le socle de compétences d'un premier poste (chargé de recrutement, TAS junior, assistant recrutement, consultant débutant, chargé d'intérim).\n\nVous distinguez ce que l'on attend de vous dès J1, ce qui s'apprend en 90 jours, et ce qui reste hors mandat.\n\nVous savez traduire ces compétences en preuves pour un entretien d'embauche."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Un recruteur junior n'est pas un DRH miniature. On n'attend pas de vous que vous rédigiez un accord d'entreprise, que vous tranchiez un licenciement, ou que vous inventiez une politique de rémunération. On attend que vous fassiez avancer des besoins : comprendre un poste avec un manager, publier une offre honnête, sourcer, trier, préqualifier, organiser des entretiens, évaluer avec une grille, faire un compte rendu, relancer, refuser, coordonner une offre, préparer l'embauche avec les RH, tracer dans l'outil. La qualité se voit dans la fiabilité (dates tenues, statuts justes) plus que dans le jargon.\n\nLe socle se lit en cinq familles. Métier process : cadrage, sourcing, évaluation, closing, clôture, intégration de coordination. Droit de base : non-discrimination, questions autorisées, méthodes pertinentes et informées, honnêteté de l'offre, DPAE comme obligation employeur, RGPD de circulation des CV, alerte plutôt qu'improvisation (visa, motif de CDD, promesse d'embauche). Relation : managers, candidats, RH, parfois clients (cabinet / intérim). Outils : ATS, messagerie, tableur, visio ; indicateurs simples (TTF, TTH, conversion) sans norme magique. Posture : vouvoiement professionnel, confidentialité, limites, demande de validation.\n\nCe qui s'apprend vite si l'environnement est clair : les outils internes, les modèles d'e-mails, les conventions collectives du secteur au niveau « je sais qui demander », les viviers locaux. Ce qui ne s'improvise pas : un critère discriminatoire « demandé par le manager », un conseil en droit des étrangers, une rupture d'essai, une DPAE hors habilitation. La compétence junior inclut de savoir dire : « Je transmets à tel interlocuteur. »\n\nLes titres varient (Talent Acquisition, chargé de recrutement, consultant). Le fond ne change pas : vous êtes responsable d'un flux de personnes et d'un flux de décisions, dans un cadre légal français. L'attestation d'un parcours de formation n'est pas un diplôme d'État : en entretien, vous parlez de savoir-faire, pas d'un titre qui n'existe pas.\n\nUne compétence trop peu citée : l'écrit. Un compte rendu d'entretien factuel, un mail de refus relisible, une fiche de transmission RH sans écart avec l'offre, valent davantage qu'un discours sur « la chasse ». Une autre : le calendrier. Un junior qui tient les délais qu'il annonce devient vite crédible auprès des managers."
        ),
        note(
          "Compétence attendue ≠ tout faire. Compétence attendue = faire avancer le besoin dans le droit, tracer, alerter. Ce que vous ne savez pas encore se demande ; ce qui est illicite se refuse."
        ),
        h("Méthode opérationnelle"),
        t(
          "Faites une auto-grille : pour chaque famille (process, droit, relation, outils, écrit), une preuve déjà réalisée dans cette formation (exercice, modèle, calcul). En poste, demandez la liste des outils, des modèles, des personnes habilités (DPAE, contrats, DPO). Posez les cinq premiers besoins que l'on vous confie et le niveau de validation requis."
        ),
        code(
          "SOCLE JUNIOR — CE QUE L'ON PEUT EXIGER / CE QUE L'ON NE PEUT PAS EXIGER\n\nExigible dès les premières semaines\n- Cadrer une fiche avec un manager (must have / formable)\n- Rédiger une annonce honnête, en français si le travail s'effectue en France\n- Trier avec une grille, préqualifier, planifier\n- Compte rendu factuel, sans critère L. 1132-1\n- Refus et relances selon modèles\n- Saisie ATS (dates, source, statut)\n- Alerte RH (DPAE, titre, écart contrat, contestation)\n\nNon exigible (hors rôle ou hors compétence isolée)\n- Qualifier un motif de CDD\n- Déposer une DPAE sans habilitation\n- Conseiller un visa\n- Rompre un essai seul\n- Inventer un benchmark de délai ou de salaire\n- Trancher une accusation de discrimination"
        ),
        h("Exemple professionnel"),
        t(
          "Cabinet. On promet au junior « tu gères tes missions de A à Z ». Le premier client demande un avis sur une clause de non-concurrence et un titre de séjour. Le junior prépare le process et le sourcing, oriente le partenaire juridique / RH client, et ne « gère pas de A à Z » ce qu'il n'a pas le droit d'inventer. Sa compétence, ici, est la frontière."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Se vendre comme expert compensation. Cacher une lacune juridique jusqu'à l'incident. Croire que la compétence se mesure au nombre de CV. Négliger l'écrit. Accepter un titre ronflant sans process réel."
        ),
        h("Situations particulières"),
        t(
          "Assistant recrutement : plus de coordination, moins de décision d'offre. Intérim : réactivité mission, même droit. Reconversion vers le recrutement : valoriser l'évaluation et l'écrit déjà pratiqués dans l'ancien métier, sans prétendre à cinq ans d'ATS."
        ),
        h("Mise en pratique"),
        t(
          "Rédigez un paragraphe d'entretien (12 lignes) : « Quelles sont vos trois compétences principales pour un poste junior ? » Appuyez-vous sur des preuves de process, de droit, d'écrit."
        ),
        h("Correction détaillée"),
        t(
          "Un bon paragraphe nomme : 1) un process (cadrage → clôture) avec un exemple d'étape tenue ; 2) un réflexe juridique (ne pas discriminer, alerter DPAE / RGPD) ; 3) un écrit / une fiabilité de dates. Il ne promet pas d'être juriste ni d'avoir des délais « sous la moyenne marché ». Pourquoi : l'employeur junior achète de la sûreté de process, pas une posture d'expert."
        ),
      ],
    }),

    lesson({
      title: "Les premiers mois : priorités, rythme et preuves de fiabilité",
      description:
        "Savoir quoi sécuriser d'abord : outils, modèles, interlocuteurs, petits besoins tenus jusqu'au bout.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez ordonner les 30, 60, 90 premiers jours sans prétendre tout maîtriser.\n\nVous savez quelles preuves un responsable recrutement attend (dossiers clos, ATS propre, managers informés).\n\nVous savez éviter la dispersion (trop de canaux, trop de postes, zéro clôture)."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Les premiers mois ne sont pas un sprint de volume. Ils sont un sprint de fiabilité. Un junior qui ouvre huit postes, n'en clôture aucun, laisse 60 CV sans statut et disparaît le vendredi, perd la confiance plus vite qu'un junior qui en mène deux proprement. La priorité n°1 est de comprendre comment l'organisation décide : qui valide un besoin, qui publie, qui voit les candidats, qui fait la DPAE, qui signe le contrat, qui accueille. Sans cette carte, chaque urgence vous traverse.\n\nLes 30 premiers jours : outils (ATS, modèles, signatures), personnes (manager types, RH, paie, IT, DPO ou relais), lecture des offres en cours, reprise propre des dossiers hérités (statuts, dettes de refus). On ne « refait pas le monde » de l'annonce. On apprend le niveau d'exigence local. On assiste à des entretiens. On mène des préqualifications supervisées. On ne dépose pas de DPAE seul. On ne promet pas de délai que le manager n'a pas validé.\n\nLes 60 jours : un à trois besoins en responsabilité, avec validation des messages sensibles (refus final, offre). Reporting simple. Premiers REX. Identification des goulots (débrief manager, fourchette, confidentialité).\n\nLes 90 jours : autonomie sur un process standard, escalade claire sur les cas limites (discrimination, titre, contestation, écart offre/contrat). Qualité de l'ATS. Expérience candidat : plus de silence. Pas de KPI magique à atteindre : une médiane de TTF interne, si elle existe, se lit, elle ne se décrète pas contre le réel.\n\nLe rythme hebdomadaire type n'est pas universel, mais une structure aide : point manager, bloc sourcing / tri, bloc entretiens, bloc clôtures, bloc RH (pièces, DPAE, contrats). Les clôtures (refus, relances) se placent dans l'agenda, sinon elles n'arrivent jamais. La charge se dit : mieux vaut alerter à 8 besoins ingérables que d'accepter le 9e en silence."
        ),
        h("Méthode opérationnelle"),
        t(
          "Agenda type + liste des habilitations + stock de dossiers hérités à clôturer sous 10 jours. Un point hebdo avec votre responsable : faits, blocages, demandes de validation. Journal des questions juridiques posées à RH (vous capitalisez)."
        ),
        code(
          "30 / 60 / 90 — PLAN JUNIOR (interne, pas une norme marché)\n\nJours 1-30\n[ ] Carte des acteurs et habilitations (DPAE, contrat, DPO)\n[ ] Maîtrise ATS : statut, source, date\n[ ] Reprise des dettes de refus\n[ ] Modèles d'e-mails de l'entreprise (pas les vôtres contre la politique)\n[ ] Préqual supervisées + 1 entretien accompagné\n\nJours 31-60\n[ ] 1 à 3 postes en responsabilité\n[ ] Offre et refus final relus\n[ ] Premier reporting 1 page\n[ ] REX d'un process clos\n\nJours 61-90\n[ ] Autonomie process standard\n[ ] Escalades maîtrisées (liste des cas)\n[ ] Qualité ATS contrôlée (pas de « peut-être »)\n[ ] Point qualité 90 jours avec un manager sur une embauche"
        ),
        h("Exemple professionnel"),
        t(
          "PME. Un junior hérite de 40 fiches « en cours » dont 25 sont mortes. Il passe la semaine 1 à clôturer avec un modèle, à prévenir les managers, à remettre l'ATS à zéro. Semaine 2, il peut sourcer. S'il avait sourcé d'abord, les 25 relances auraient explosé le lundi suivant."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Vouloir « chasser » dès le jour 2. Refuser de poser des questions. Prendre tous les besoins. Changer les modèles sans accord. Mesurer sa valeur au nombre de messages LinkedIn."
        ),
        h("Situations particulières"),
        t(
          "Cabinet : les 30 jours incluent la règle client (qui contacte, qui refuse). Intérim : le rythme est quotidien ; la fiabilité = missions tenues et process agence, pas un plan 90 jours de CDI. Remplacement d'un collègue parti : documenter avant d'innover."
        ),
        h("Mise en pratique"),
        t(
          "On vous confie 6 postes le jour 4, dont 1 cadre confidentiel et 1 CDD pour lundi. Ordonnez et dites ce que vous renvoyez à votre responsable."
        ),
        h("Correction détaillée"),
        t(
          "Jour 4 : carte acteurs, dettes, CDD lundi = alerte RH calendrier DPAE/contrat (peut-être intenable), confidentiel = cadre (canaux, liste blanche) avec supervision, 2 postes simples en priorité, les autres en file avec dates. Vous ne « prenez tout ». Pourquoi : la priorisation est une compétence, pas un manque d'ambition."
        ),
      ],
    }),

    lesson({
      title: "Travailler avec les managers : cadrer, relancer, recadrer",
      description:
        "Faire du manager un partenaire de process, pas un donneur d'ordre illicite ni un goulot silencieux.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez conduire un entretien de cadrage et en sortir un écrit (critères, process, dates, fourchette).\n\nVous savez relancer un débrief sans agresser, et recadrer un critère hors droit.\n\nVous savez ce que vous n'acceptez pas de porter à sa place (mensonge d'annonce, discrimination, J1 sans formalités)."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le manager est le client interne du besoin, pas le rédacteur du Code du travail. Il connaît le travail réel, les tensions d'équipe, l'urgence. Il ne connaît pas toujours ce que l'on a le droit de demander, ni le temps d'un process, ni le coût d'un silence candidat. Votre métier est de traduire son besoin en critères professionnels, en étapes, en messages. Si vous ne faites que « chercher la perle » sans cadrer, vous porterez tous les échecs.\n\nLe cadrage produit un écrit court : mission, must have, formable, conditions (lieu, horaires, contrat, fourchette), étapes, décideur, dates de créneaux. Sans créneaux, il n'y a pas de process, seulement du sourcing pour le néant. Le manager qui « saura au feeling » n'a pas de grille : vous lui en proposez une, vous la faites valider. L. 1221-6 et L. 1132-1 s'invitent ici : un critère d'âge, de sexe, d'origine, de santé, de résidence stéréotypée, se recadre immédiatement, avec escalade si besoin.\n\nLa relance est un rythme, pas une émotion. Un débrief sous 24 à 48 heures ouvrées (règle interne possible, pas un délai légal) se pose dès le cadrage. Si le manager disparaît, vous informez le candidat d'un décalage, vous alertez votre responsable, vous ne mentez pas (« c'est super, on avance »). Le recadrage porte aussi sur le nombre d'entretiens, sur une fourchette irréaliste, sur un intitulé trompeur (L. 5331-3).\n\nLa relation se gagne par des faits : shortlist commentée, pas 15 CV « pour voir » ; disponibilités tenues ; pas de surprise d'offre. Un manager exigeant n'est pas un ennemi : c'est un process à contractualiser. Un manager qui insiste pour discriminer n'est plus dans le partenariat : c'est un sujet hiérarchique et RH."
        ),
        h("Méthode opérationnelle"),
        t(
          "Cadrage 30-45 min + e-mail de confirmation le jour même. Grille envoyée avant le premier CV. Créneaux posés. Débrief 15 min obligatoire. Tableau partagé : statut, date, action manager."
        ),
        code(
          "E-MAIL DE CADRAGE (J0)\n\nObjet : Recrutement [poste] — critères et process validés\nBonjour [Prénom],\nSuite à notre échange, je consigne :\n- Mission : \n- Must have : \n- Formable : \n- Contrat / lieu / horaires / fourchette : \n- Étapes : préqual — entretien [vous] — [éventuel] — offre par [décideur]\n- Créneaux déjà posés : \n- Délai de débrief visé : 48 h ouvrées\nMerci de confirmer. Tout critère portant sur [âge, sexe, origine, santé, etc.] ne pourra pas être appliqué.\n\nRELANCE DÉBRIEF (J+2)\nBonjour [Prénom],\nEntretien de [Candidat] effectué le [date]. Sans votre avis aujourd'hui, je dois décaler l'information candidat (j'ai promis le [date]). Merci d'un go / no go factuel sur la grille, ou d'un créneau de 10 min."
        ),
        h("Exemple professionnel"),
        t(
          "Startup. Un CPO veut « un profil qui claque, moins de 30 ans, culture US ». Le junior reformule : anglais professionnel si le poste l'exige, expérience produit, fuseau. L'âge sort. Le CPO signe la grille. Deux semaines plus tard, le débrief tarde : le junior relance, informe le candidat d'un décalage, n'invente pas un « on t'adore »."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Envoyer 20 CV pour se montrer actif. Critiquer le manager auprès du candidat. Accepter un 5e entretien « au cas où ». Oublier de consigner un critère illicite dit à l'oral."
        ),
        h("Situations particulières"),
        t(
          "Manager pair du dirigeant : même cadre, escalade plus délicate, mais réelle. Multi-managers : un décideur nommé. Manager absent J1 : déjà traité en onboarding, à rappeler au cadrage."
        ),
        h("Mise en pratique"),
        t(
          "Le manager écrit : « Envoie-moi tout le monde, je saurai. Et évite les profils trop seniors. » Rédigez votre réponse (cadrage + droit)."
        ),
        h("Correction détaillée"),
        t(
          "Vous refusez le « tout le monde » : shortlist selon must have. Vous refusez l'âge déguisé (« trop seniors ») : vous parlez d'adéquation au poste, pas d'âge. Vous proposez une grille et deux créneaux. Pourquoi : sans cela, vous devenez l'exécutant d'un tri illicite et d'un chaos de process."
        ),
      ],
    }),

    lesson({
      title: "Urgences et charge : prioriser sans casser le cadre",
      description:
        "Arbitrer entre plusieurs besoins, dire non à un délai intenable, et garder une qualité minimale de process.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez classer les besoins (impact, date, maturité du cadrage, risque légal) et rendre l'arbitrage visible.\n\nVous savez ce qu'une urgence ne permet pas (DPAE sautée, discrimination, offre trompeuse, silence candidat).\n\nVous savez demander de l'aide avant la rupture de service."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "L'urgence est partout dans le recrutement : un départ, une commande, une saison, un client cabinet. Si tout est urgent, plus rien n'est priorisé : vous travaillez sur le dernier qui a crié. La compétence junior est de rendre la file visible. Un besoin non cadré n'est pas plus prioritaire qu'un besoin cadré dont les candidats attendent un refus : la dette de process est aussi une urgence de réputation et de charge mentale.\n\nUne méthode simple : impact métier (poste critique dit par la direction, pas par impression), date réelle (J1, mission, rentrée école), maturité (fiche validée, fourchette, créneaux), risque (déjà en offre, DPAE, contestation). On ne priorise pas un caprice. On priorise un fait. On écrit la file. On fait valider par son responsable lorsque les demandes dépassent le tenable.\n\nCe qui ne se négocie pas sous urgence : L. 1132-1, L. 1221-6, L. 5331-3, DPAE avant prise de poste / essai, incident RGPD, mensonge sur un contrat. Ce qui se compacte : nombre d'entretiens, délai de sourcing si le besoin est revu (formable vs expert), canaux. Compactage ≠ suppression de la grille.\n\nLa charge se parle en nombre de postes actifs, d'entretiens, de clôtures dues. Un junior qui cache sa saturation jusqu'à l'erreur (mauvais destinataire, oubli de refus final) coûte plus cher qu'un junior qui dit : « Pour prendre celui-ci, j'en gèle un autre, lequel ? » En cabinet, la même phrase se dit au manager d'équipe, pas au client en premier."
        ),
        h("Méthode opérationnelle"),
        t(
          "Tableau de charge visibile. Règle d'entrée : pas de nouveau poste sans cadrage écrit et sans sortie d'un autre si saturation. Slot quotidien « clôtures ». Escalade à S-1 si deux urgences se percutent."
        ),
        code(
          "MATRICE DE PRIORITÉ — EXEMPLE\n\nScore interne (pas un KPI marché) : Impact (1-3) + Date (1-3) + Maturité (0 si non cadré, 2 si cadré) + Risque process (offre/DPAE/contestation = 3)\n\nCas : A cadre confidentiel non cadré ; B CDD J1 dans 4 jours, dossier incomplet ; C volume 40 CV sans refus ; D CDI standard cadré.\nTraitement : B (RH/DPAE, possible report J1) > C (dette clôture en lot) > D (flux) > A (cadrage d'abord, pas de chasse à l'aveugle).\n\nPHRASE D'ARBITRAGE\n« Je peux tenir B et C cette semaine. A attend un cadrage de 45 min. D avance au rythme des créneaux déjà posés. Si A passe devant, D glisse, je l'écris au manager de D. »"
        ),
        h("Exemple professionnel"),
        t(
          "Agence d'intérim. Trois exploitants veulent une personne pour 6 h le lendemain. Le junior ne promet trois fois le même profil. Il dit les disponibilités réelles, le process agence, et n'envoie pas un salarié non déclaré « on verra ». L'urgence client n'est pas une DPAE d'entreprise utilisatrice improvisée par le junior agence hors process."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Dire oui à tous les J1. Sauter les refus. Recruter sans grille « on n'a pas le temps ». Travailler le dimanche en silence puis craquer. Accuser les candidats du désordre interne."
        ),
        h("Situations particulières"),
        t(
          "Deux managers de même rang : l'arbitrage remonte. Urgence + confidentiel : la discrétion ajoute du temps, il faut le dire. Urgence + international : plus d'alerte RH, pas moins."
        ),
        h("Mise en pratique"),
        t(
          "Vous avez 5 postes. Le dirigeant ajoute « un ami à recaler demain, CDI, 8 k€ hors fourchette, pas de fiche ». Que répondez-vous, et que priorisez-vous ce jour ?"
        ),
        h("Correction détaillée"),
        t(
          "Vous ne sautez pas la file pour un ami hors cadrage et hors fourchette : vous demandez un cadrage, vous dites l'écart de rémunération, vous n'inventez pas un process VIP illicite. Ce jour : clôtures dues + étapes déjà promises aux candidats + alerte si DPAE/J1. Pourquoi : la priorisation protège la parole déjà donnée, qui est votre crédit professionnel."
        ),
      ],
    }),

    lesson({
      title: "Limites du poste et validation hiérarchique",
      description:
        "Savoir ce que vous décidez, ce que vous proposez, ce que vous devez faire valider, ce que vous refusez.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous disposez d'une carte de délégation type, à adapter à l'entreprise.\n\nVous savez rédiger une demande de validation (fait, risque, option, délai).\n\nVous savez documenter un refus d'exécuter un ordre illicite."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "L'autonomie junior n'est pas l'absence de chef. C'est la clarté de ce que vous pouvez engager. Sans carte de délégation, vous hésitez sur tout ou vous signez trop. Les organisations sérieuses distinguent : actes libres (relance, préqual, planification, tri selon grille validée), actes à validation (offre, exception de fourchette, recours cabinet, annonce atypique), actes interdits (discrimination, DPAE hors rôle, conseil visa, rupture d'essai isolée, promesse d'embauche improvisée).\n\nLa validation hiérarchique n'est pas une faiblesse. C'est une protection de l'entreprise et de vous. Une offre trop haute, un écrit qui ressemble à une promesse unilatérale (F39588 : notions jurisprudentielles, pas un diagnostic junior), un motif de CDD, un incident de données, une contestation pour discrimination : vous montez le dossier, vous ne « voyez plus tard ».\n\nLa forme de la demande compte. Un « tu en penses quoi ? » dans un chat, sans pièce, la veille à 19 h, n'est pas une validation. Un e-mail : faits, pièces, options, recommandation, date de besoin de réponse. Si le responsable ne répond pas, vous ne considérez pas le silence comme un oui sur un acte à risque. Vous relancez, vous ne faites pas commencer un salarié non déclaré.\n\nRefuser d'exécuter : lorsque l'ordre heurte L. 1132-1, L. 1221-6, L. 5331-3, le calendrier DPAE, ou le RGPD, vous dites non, par écrit sobre, vous proposez une alternative licite, vous informez le n+1. Vous n'argumentez pas sur les réseaux. Vous conservez les traces. Ce n'est pas de l'insubordination théâtrale : c'est le métier."
        ),
        note(
          "Le silence du n+1 n'est pas une habilitation à déposer une DPAE, à promettre un visa, ou à écarter un candidat pour un critère protégé. La validation se constate par un écrit."
        ),
        h("Méthode opérationnelle"),
        t(
          "Demandez dès J1 la carte de délégation. Tenez un registre des validations d'offre. Pour tout cas limite, e-mail unique, destinataires nommés, délai."
        ),
        code(
          "CARTE DE DÉLÉGATION — MODÈLE À FAIRE VALIDER EN INTERNE\n\nLibre (selon grille / modèles)\nPréqual, planification, tri, relances, refus précoces modèles, saisie ATS, reporting factuel\n\nValidation n+1 ou RH\nOffre et exception de fourchette, recours cabinet, annonce hors modèle, réserve longue,\nfeedback détaillé dernier tour, exception de process (saut d'étape)\n\nRH / paie / habilité seulement\nDPAE, contrat, motif CDD, titre / visa, rupture d'essai, instruction demande d'accès RGPD\n\nInterdit (escalade)\nCritère L. 1132-1, question hors L. 1221-6, faire commencer hors DPAE, coller des CV dans un outil non validé\n\nDEMANDE DE VALIDATION\nObjet : Validation offre — [Poste] — [Candidat] — réponse souhaitée avant [date/heure]\nFaits : process, fourchette cadrée, prétention, écart\nRisque si silence : désistement / délai annoncé au candidat le [date]\nOption A : offrir X (recommandé parce que …)\nOption B : tenir Y\nJe n'envoie pas l'offre sans votre retour."
        ),
        h("Exemple professionnel"),
        t(
          "ETI. Un manager dit « envoie l'offre à 42 k, je validerai après ». Le junior n'envoie pas. Il écrit au n+1 recrutement + manager : fourchette validée à 38, demande d'exception. Soit on revalide le budget, soit on tient 38 et on assume un refus. L'offre n'est pas un ballon d'essai."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Prendre un emoji pour une validation. Valider une offre en copie d'une personne non habilitée. Documenter après l'incident seulement. Dire oui au manager, non au n+1, ou l'inverse, selon l'humeur."
        ),
        h("Situations particulières"),
        t(
          "N+1 absent : délégation de backup nommée, sinon attente sur les actes à risque. Cabinet : validation client + validation manager interne, les deux. TPE : le dirigeant est souvent l'habilité DPAE et offre ; cela ne vous autorise pas à discriminer sur son ordre."
        ),
        h("Mise en pratique"),
        t(
          "Ordre oral : « Écarte les candidats du 93, et dépose la DPAE ce soir avec mon login. » Rédigez l'écrit de 8 lignes (refus, alternative, destinataires)."
        ),
        h("Correction détaillée"),
        t(
          "Destinataires : n+1 et, selon politique, RH. Contenu : vous n'écartez pas sur le lieu de résidence (critère protégé) ; vous évaluez la capacité à travailler sur le site ; vous ne déposez pas de DPAE avec un login tiers ; vous demandez à l'habilité de déposer avant J1. Alternative : critère de mobilité / horaires. Pourquoi : deux actes interdits dans la même phrase, un seul écrit clair."
        ),
      ],
    }),

    lesson({
      title: "Posture quotidienne : éthique, confidentialité, apprentissage",
      description:
        "Tenir une conduite professionnelle stable : données, réseaux, conflits d'intérêts, formation continue.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez quelles règles de confidentialité s'appliquent aux CV, aux offres, aux internes, aux clients.\n\nVous savez utiliser les réseaux professionnels sans exposer un process.\n\nVous savez apprendre en poste (sources institutionnelles, pas des rumeurs de délais légaux)."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "La posture n'est pas un vernis. C'est ce qui reste quand un manager presse, qu'un candidat séduit, qu'un outil propose un raccourci. Confidentialité : un CV n'est pas un sujet de pause café, un salaire négocié n'est pas un anecdote, un recrutement confidentiel n'est pas un post LinkedIn. Le RGPD et la loyauté interne se rejoignent : minimisation, destinataires utiles, pas de transfert vers un outil personnel ou un modèle d'IA grand public.\n\nLes réseaux : vous pouvez sourcer. Vous ne dénigrez pas un candidat, vous ne publiez pas une offres confidentielle, vous ne mentez pas sur un titre. Un visio avec un décor de logement ne s'évalue pas comme une compétence. Un « background check » amateur sur les réseaux familiaux sort de L. 1221-6.\n\nConflits d'intérêts : cooptation d'un proche, candidat qui est un ami, client cabinet qui est un ancien employeur. Vous déclarez, vous sortez du processus si la politique le demande, vous n'arrangez pas une grille.\n\nÉthique du closing : pas de pression déloyale, pas de dénigrement de l'employeur actuel du candidat, pas de fausse urgence. Le désistement se prend d'acte. Le refus se fait. L'erreur se corrige (module situations délicates).\n\nApprentissage : Légifrance, Code du travail numérique, Service-Public, CNIL, Urssaf, sources de ce cours (vérifiées le 13/10/2026). Vous relisez le texte en vigueur avant d'appliquer une règle à un cas réel. Vous ne mémorisez pas un taux d'obligation d'emploi inventé. Vous ne répétez pas qu'indiquer le salaire est déjà obligatoire en droit français consolidé si ce n'est pas le cas au jour J (directive UE 2023/970 en transposition). La formation continue du junior, c'est cette discipline de source, plus le REX des dossiers."
        ),
        h("Méthode opérationnelle"),
        t(
          "Règle des 3 destinataires : qui a besoin de cette info ? Journal de bord des questions posées à RH. Revue mensuelle : un texte source relu. Paramètres LinkedIn / ATS : pas de synchro sauvage."
        ),
        code(
          "RÈGLES DU QUOTIDIEN\n\n[ ] Pas de CV dans WhatsApp personnel\n[ ] Pas de prompt IA public nominatif\n[ ] Pas de post sur un poste confidentiel\n[ ] Pas de commentaire L. 1132-1 dans l'ATS\n[ ] Déclarer un conflit d'intérêts le jour où il apparaît\n[ ] Relire Service-Public / Urssaf / CNIL avant un cas DPAE, conservation, titre\n[ ] Corriger une erreur de com le jour même\n[ ] Demander une validation plutôt que d'inventer un délai légal"
        ),
        h("Exemple professionnel"),
        t(
          "Un junior raconte en afterwork le salaire d'une candidate et un détail de santé entendu en entretien. Un salarié le rapporte. REX : manquement confidentialité, données santé hors finalité, confiance brisée. Sanction interne possible ; le métier, lui, exigeait le silence."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Ajouter des candidats sur LinkedIn avec un message de refus public. Stocker les RIB dans sa boîte. Googler le conjoint du candidat. Copier des « astuces » de délais légaux sur un forum."
        ),
        h("Situations particulières"),
        t(
          "Télétravail : documents papier, visios dans un espace non public. Cabinet : secret client. Intérim : ne pas livrer un avis médical d'un intérimaire à l'utilisatrice."
        ),
        h("Mise en pratique"),
        t(
          "Listez 4 réflexes que vous appliquerez dès J1, rattachés à une source (L. 1132-1, L. 1221-6, RGPD/CNIL, F23107)."
        ),
        h("Correction détaillée"),
        t(
          "Exemples : grille sans critère protégé (L. 1132-1) ; questions de poste seulement (L. 1221-6) ; pas de CV hors outil (RGPD / CNIL) ; alerte DPAE avant J1 (F23107). Pourquoi : la posture se rattache à des textes, pas à une humeur éthique."
        ),
      ],
    }),

    lesson({
      title: "Devenir autonome sur un process standard : check de sortie junior",
      description:
        "Vérifier que vous pouvez mener un recrutement complet, du cadrage au REX, en sachant où vous vous arrêtez.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez dérouler un process standard de bout en bout et pointer les portes d'escalade.\n\nVous disposez d'une check de « sortie d'accompagnement » pour un premier poste.\n\nVous savez expliquer ce process en entretien d'embauche, sans romancer."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "L'autonomie visée n'est pas de tout signer. C'est de conduire un CDI ou un besoin analogue, non confidentiel, non international complexe, avec un manager partenaire, en respectant le droit et les modèles internes, et en sachant lever la main. Si vous savez cadrer, publier, sourcer, trier, préqualifier, faire passer un entretien structuré, écrire un CR, shortlister, préparer une offre à valider, refuser, coordonner dossier / DPAE / J1, suivre un point d'essai, faire un REX — vous êtes opérationnel au sens de ce cours.\n\nCe que l'autonomie n'est pas : un TTF « sous 30 jours » universel ; une habilitation Urssaf ; un avis sur un titre de séjour ; une rupture d'essai ; une politique handicap inventée ; un benchmark salarial. L'autonomie inclut le contraire : la liste des cas où vous stoppez.\n\nPour un entretien d'embauche de recruteur junior, cette check est votre fil. On vous demandera « racontez un recrutement ». Vous racontez des étapes, des acteurs, un point de droit, un indicateur interne sans norme magique, une erreur corrigée. Vous ne racontez pas une héroïsation (« j'ai tout clos en 48 h, DPAE comprise, visa compris »).\n\nLa sortie d'accompagnement (fin de période d'essai du recruteur, ou fin de formation interne) se prépare comme un onboarding inversé : quels modèles vous maîtrisez, quels managers vous savez recadrer, quelle qualité d'ATS, quelles escalades déjà faites. Votre n+1 doit craindre votre silence, pas vos questions."
        ),
        h("Méthode opérationnelle"),
        t(
          "Une fois par trimestre, passez la check ci-dessous sur un dossier réel. Les cases vides deviennent un plan de pair (assister, puis faire, puis faire relire)."
        ),
        code(
          "CHECK DE SORTIE — PROCESS STANDARD\n\nCadrage écrit manager (must / formable / conditions / créneaux)\nAnnonce honnête (nature, lieu, français si travail en France)\nSources saisies ; pas de CV hors outil\nGrille de tri et d'entretien ; questions licites\nPréqual + entretien structuré + CR factuel\nShortlist argumentée ; pas de critère L. 1132-1\nOffre validée, cohérente avec le contrat à venir\nRefus / attente / réserve : statuts et messages\nAlerte RH : DPAE avant J1, pièces, titre si besoin (sans conseil visa)\nPréboarding + point J1 (coordination, pas substitution)\nPoint d'essai + REX\nATS propre ; pas de « peut-être »\n\nESCALADES QUE JE SAIS NOMMER\nDiscrimination, accès RGPD, incident données, écart offre/contrat,\nordre de commencer hors DPAE, droit des étrangers, contestation"
        ),
        h("Exemple professionnel"),
        t(
          "Services. Au 4e mois, le junior présente un dossier : TTF interne 39 jours, TTH 18, un refus d'offre pour fourchette, un REX « dire la fourchette plus tôt ». Il n'a pas déposé la DPAE ; RH l'a fait J-2. Le n+1 valide l'autonomie sur le standard, garde la supervision des cadres confidentiels."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Déclarer l'autonomie pour éviter le contrôle. Oublier les refus dans la check. Compter un process « réussi » alors que l'essai a été rompu pour onboarding absent. Cacher une escalade manquée."
        ),
        h("Situations particulières"),
        t(
          "Volume : autonomie = standard industrialisé + clôtures, pas un CDI unique. Cabinet : autonomie = mission client dans le mandat. Intérim : autonomie = missions + process agence."
        ),
        h("Mise en pratique"),
        t(
          "En 10 lignes, racontez « un recrutement que vous mèneriez » pour un entretien d'embauche, en citant une escalade que vous ne feriez pas seul."
        ),
        h("Correction détaillée"),
        t(
          "Le récit suit le fil cadrage → clôture → DPAE RH → REX, avec un point de droit (question illicite recadrée, ou DPAE non déposée par vous). Il n'invente ni délai marché ni visa. Pourquoi : l'autonomie crédible montre le process et la limite, pas le super-héros."
        ),
      ],
    }),

    lesson({
      title: "50 questions d'entretien d'embauche pour un poste de recruteur junior",
      description:
        "Préparer un oral d'embauche : 50 questions en cinq blocs, avec des réponses modèles argumentées, cœur de la préparation à l'emploi.",
      minutes: 45,
      blocks: [
        h("Comment utiliser cette leçon"),
        t(
          "Cette leçon ne suit pas le plan en huit sections des autres cours : elle est une banque d'oral. Les 50 questions sont regroupées en cinq blocs : métier, juridique, sourcing, entretien et évaluation, études de cas. Pour chaque question, une réponse modèle argumentée vous est proposée. Ce n'est pas la seule formulation possible ; c'est un standard professionnel, en vouvoiement, sans slogan, sans statistique inventée, avec les distinctions obligation / recommandation / politique interne / bonne pratique.\n\nTravaillez à voix haute. Chronométrez 1 min 30 à 3 minutes par réponse. Ensuite, réduisez. En entretien réel, citez les textes lorsque c'est juste (L. 1132-1, L. 1221-6, L. 1221-8, L. 1221-9, L. 5331-3, F23107, CNIL, F39588), sans réciter le Code. Si l'entreprise a une politique différente d'un modèle de ce cours, dites que vous vous y plierez dès lors qu'elle est licite.\n\nSources du cours vérifiées le 13/10/2026. En poste, vous relirez le texte en vigueur."
        ),

        h("Bloc 1 — Métier (questions 1 à 10)"),
        t(
          "Question 1 — En quoi consiste le métier de recruteur junior, concrètement, dans une semaine type ?\n\nRéponse modèle. Le métier consiste à faire avancer des besoins d'embauche de façon fiable, pas à « chasser » en continu sans clôturer. Une semaine type mêle cadrage avec un manager, tri et préqualifications, entretiens, comptes rendus, relances de débrief, messages de refus ou d'attente, coordination RH (pièces, calendrier de DPAE, contrat), saisie ATS. Je bloque un temps pour les clôtures : le silence candidat n'est pas une organisation. Je n'invente pas un volume d'entretiens universel : le rythme dépend du portefeuille et de la politique interne. Ma valeur junior, c'est la tenue des dates que j'annonce et la qualité des écrits.\n\nQuestion 2 — Quelle différence faites-vous entre recruteur, RH administration du personnel, et manager embaucheur ?\n\nRéponse modèle. Le recruteur coordonne le process de choix et la relation candidat. Les RH / la paie portent généralement le dossier, la DPAE, le contrat, les affiliations. Le manager porte le besoin métier, l'évaluation du travail, l'accueil et le suivi d'essai. Je ne « signe » pas une DPAE si je n'y suis pas habilité, je ne romps pas un essai tout seul, je ne laisse pas le manager poser une question illicite sans recadrage. Cette distinction évite que tout le monde croie que l'autre s'en charge, surtout entre le oui et J1.\n\nQuestion 3 — Comment cadrez-vous un besoin avec un manager pressé ?\n\nRéponse modèle. Je sors d'un échange de 30 à 45 minutes avec un écrit : mission, must have, formable, contrat, lieu, horaires, fourchette, étapes, décideur, créneaux d'entretien. Sans créneaux, je n'ouvre pas un sourcing pour le néant. Je fais valider une grille. Si un critère touche un motif protégé, je le recadre tout de suite. Je confirme par e-mail le jour même. La rapidité vient d'un cadrage net, pas d'une chasse sans fiche.\n\nQuestion 4 — Fiche de poste et annonce : quelle différence ?\n\nRéponse modèle. La fiche de poste est l'outil interne (mission, rattachement, exigences, conditions). L'annonce est le message public ou ciblé, honnête sur la nature de l'emploi, le lieu, la rémunération et avantages si on les cite (L. 5331-3), rédigée en français si le travail s'effectue en France (L. 5331-4). Je ne copie pas la fiche brute dans une annonce, et je ne vends pas un CDI si le besoin est un CDD. L'annonce n'a pas à dire l'organigramme secret ; elle n'a pas le droit d'induire en erreur.\n\nQuestion 5 — Qu'est-ce qu'une shortlist sérieuse ?\n\nRéponse modèle. C'est un petit nombre de candidatures comparées sur la même grille, avec des faits d'évaluation, un écart restant, une recommandation. Ce n'est pas 12 CV « pour que le manager se fasse une idée ». Je n'inclus pas un profil pour faire de la figuration (interne ou externe) si la décision est déjà prise. Je ne commente pas l'âge, le sexe, l'origine, la santé. La shortlist sert à décider, pas à diluer la responsabilité.\n\nQuestion 6 — Comment formulez-vous une offre ?\n\nRéponse modèle. L'offre reprend ce qui a été cadré et dit au candidat : poste, contrat, rémunération, lieu, date visée, durée de validité. Je la fais valider avant envoi. Je ne gonfle pas un variable pour conclure. Je distingue l'offre de contrat d'une promesse unilatérale d'embauche : ces notions ne sont pas définies par la loi, elles sont encadrées par la jurisprudence, expliquée notamment par Service-Public F39588 ; je ne qualifie pas seul un écrit, j'alerte RH si un engagement circule. Une promesse n'est pas obligatoire pour embaucher.\n\nQuestion 7 — Comment refusez-vous un candidat ?\n\nRéponse modèle. Une fois la décision ferme, je réponds. Il n'y a pas d'obligation légale générale de motiver un refus. Il y a obligation de ne pas discriminer. Le canal dépend de l'étape : e-mail court au CV, téléphone plus e-mail après un process avancé. Si je donne un motif, il est professionnel et factuel. Une demande d'accès aux données n'est pas un feedback : je transmets au circuit RH / DPO. Je trace le statut le jour même.\n\nQuestion 8 — Quel est votre rôle dans l'intégration ?\n\nRéponse modèle. Je coordonne : checklist recruteur / RH / manager / IT, préboarding d'information, contrôle que la DPAE est faite par l'habilité avant la prise de poste ou l'essai, cohérence offre / contrat, accueil J1 qui a un nom. Je n'évalue pas la performance à J1. Je peux animer un point d'essai et un REX. Je ne fais pas commencer « officieusement ».\n\nQuestion 9 — Quels indicateurs utilisez-vous ?\n\nRéponse modèle. Time to fill : acceptation d'offre moins validation du besoin. Time to hire : acceptation moins entrée du candidat retenu. Ce sont des conventions à écrire, pas des normes magiques de marché. J'ajoute conversion par étape, taux d'acceptation d'offres, désistements en précisant l'étape, sources, tenue de l'essai. Je n'invente pas de benchmark. Un ATS mal renseigné rend ces chiffres inutiles. Je ne sors pas d'âge ou de sexe dans un reporting de « perf ».\n\nQuestion 10 — Que faites-vous de mieux qu'un profil qui « aime les gens » ?\n\nRéponse modèle. J'aime que le process soit tenable et licite. Je sais écrire un CR, tenir une date, recadrer un critère, alerter sur une DPAE, clôturer un refus, calculer un TTF sans folklore. L'empathie sans clôture produit du ghosting employeur. Le métier junior se voit dans les dossiers propres, pas dans une déclaration d'affection pour l'humain."
        ),

        h("Bloc 2 — Juridique (questions 11 à 20)"),
        t(
          "Question 11 — Qu'est-ce que le principe de non-discrimination à l'embauche ?\n\nRéponse modèle. L'article L. 1132-1 du Code du travail interdit d'écarter une personne d'un recrutement en raison de critères protégés (origine, sexe, âge, situation de famille, handicap, état de santé, opinions, apparence physique, lieu de résidence, etc., telle que la liste du texte). Cela s'applique aux décisions, aux commentaires ATS, aux consignes manager, aux outils de ranking. Si un manager me demande d'écarter pour l'âge ou le sexe, je n'exécute pas, j'escalade. Source vérifiée dans le cadre du cours le 13/10/2026 ; je relis le texte en vigueur en poste.\n\nQuestion 12 — Quelles informations pouvez-vous demander à un candidat ?\n\nRéponse modèle. L. 1221-6 : uniquement celles qui permettent d'apprécier la capacité à occuper l'emploi ou les aptitudes professionnelles, avec un lien direct et nécessaire. Le candidat répond de bonne foi. Je ne demande pas les enfants, la santé, la religion, les comptes, un extrait de casier hors emplois qui l'exigent réellement. Après embauche, le dossier RH a d'autres finalités administratives, toujours dans le RGPD, pas un dossier médical dans l'ATS.\n\nQuestion 13 — Un test ou un scoring, sous quelles conditions ?\n\nRéponse modèle. L. 1221-8 : le candidat est informé préalablement des méthodes et techniques d'aide au recrutement utilisées à son égard ; les résultats sont confidentiels. L. 1221-9 : les méthodes doivent être pertinentes au regard de la finalité. Un test de personnalité sans lien, un ranking opaque, un outil qui proxy l'âge ou le genre, ne passent pas. L'IA n'échappe pas à ces articles ni à L. 1132-1. La décision reste humaine et traçable.\n\nQuestion 14 — Quelles règles pour rédiger une offre d'emploi ?\n\nRéponse modèle. Pas de mention de sexe ou situation de famille dans l'offre (cadre L. 5331-2 / L. 1142-1, exceptions très limitées). Pas d'allégations fausses ou trompeuses sur l'emploi, la rémunération, le lieu (L. 5331-3). Offre en français si le travail s'effectue en France, avec description française d'un terme étranger sans équivalent (L. 5331-4). J'applique aussi L. 1132-1 dans le texte de l'annonce.\n\nQuestion 15 — Faut-il motiver un refus ?\n\nRéponse modèle. Il n'existe pas d'obligation légale générale de motiver un refus de candidature. La bonne pratique est de répondre, vite, selon l'étape. Si l'on motive, le motif est professionnel. Le RGPD donne un droit d'accès aux données, distinct de l'obligation de motiver le choix. Je ne motive jamais par un critère protégé. La politique interne peut imposer un modèle unique : je l'applique.\n\nQuestion 16 — Un candidat veut « toutes vos notes ». Que faites-vous ?\n\nRéponse modèle. Je qualifies une demande d'accès. J'accuse réception et je transmets au circuit RH / DPO. Je n'envoie pas le dossier brut le soir même, je ne filtre pas « au feeling », je ne réponds pas par un feedback métier qui élude la demande. Le droit existe ; l'instruction suit la procédure, y compris d'éventuelles limites que le juriste tranche, pas moi.\n\nQuestion 17 — Combien de temps conserve-t-on les CV ?\n\nRéponse modèle. Il faut distinguer. Archivage intermédiaire des non-retenus à des fins probatoires : 5 ans à compter de la date à laquelle le poste a été pourvu, en lien avec L. 1134-5, tel que le présente le référentiel CNIL 2026. Vivier / CVthèque : jusqu'à 2 ans à compter du dernier contact, sauf opposition — recommandation CNIL, pas une durée unique imposée par le RGPD lui-même. Candidat retenu : bascule vers le dossier personnel. Je n'affirme pas que « 2 ans » est la seule règle pour tout.\n\nQuestion 18 — Qu'est-ce que la DPAE, et quel est votre rôle ?\n\nRéponse modèle. Déclaration préalable à l'embauche, obligation de l'employeur, avant la prise de fonction ou le début de la période d'essai, au plus tôt dans les 8 jours précédant l'embauche (Service-Public F23107 + Urssaf). Mon rôle : faire connaître la date de J1, alerter, vérifier que l'habilité a déposé. Je ne dépose pas avec un login trouvé dans un tiroir. Je ne fais pas commencer sans DPAE. La DPAE ne remplace pas le contrat, et inversement.\n\nQuestion 19 — Offre de contrat et promesse unilatérale d'embauche ?\n\nRéponse modèle. Ces notions ne sont pas définies par la loi ; elles sont encadrées par la jurisprudence, expliquée par Service-Public F39588 (notamment Cass. soc. 21 septembre 2017, n° 16-20.103 et 16-20.104, telles que citées par la fiche). L'offre peut être retirée avant acceptation dans le délai laissé ou un délai raisonnable ; la promesse unilatérale vaut contrat, le retrait s'analyse en licenciement sans cause réelle et sérieuse. Une promesse n'est pas obligatoire. Je ne qualifie pas seul : j'alerte RH si un écrit d'engagement pose question.\n\nQuestion 20 — Faut-il indiquer le salaire dans l'annonce ?\n\nRéponse modèle. Au jour des sources du cours, indiquer le salaire dans l'offre n'est pas présenté comme une obligation française déjà consolidée ; une directive européenne (UE 2023/970) impose une information sur la rémunération ou une fourchette, transposition en cours. Je distingue : pas encore cette obligation interne consolidée / bonne pratique de clarté / future obligation. Je vérifie le texte de transposition en vigueur le jour J. En attendant, je ne mens pas sur la rémunération (L. 5331-3) et je dis la fourchette en process dès qu'elle est cadrée."
        ),

        h("Bloc 3 — Sourcing (questions 21 à 30)"),
        t(
          "Question 21 — Comment choisissez-vous vos canaux ?\n\nRéponse modèle. Selon le besoin réel (contrat, rareté, lieu, budget), pas selon une mode. Je mesure en interne volume, conversion, embauches, tenue de l'essai, coût du canal si connu. Je n'ai pas de palmarès national à citer. Un canal à fort volume et zéro embauche n'est pas « performant ». Un canal d'inclusion à faible volume n'est pas coupé au seul cost per hire.\n\nQuestion 22 — Que contient une annonce utile ?\n\nRéponse modèle. Métier, conditions de travail réelles, contrat, lieu, éventuellement fourchette (bonne pratique), modalités de candidature, informations utiles sur le process. Ton professionnel. Pas de critère illicite. Pas de « ninja » qui masque un besoin flou. Si le travail est en France, le français. Je fais relire si je débute, contre L. 5331-2, L. 5331-3, L. 5331-4.\n\nQuestion 23 — Comment sourcer en direct sans harceler ?\n\nRéponse modèle. Message court, poste, pourquoi cette personne, modalité pour dire non. Pas de relance infinie. Pas de données hors outil validé. Pas de commentaire sur la photo. Si la personne refuse, je clôture. Le sourcing direct est un canal, pas une chasse au trophée.\n\nQuestion 24 — Qu'est-ce qu'un vivier conforme ?\n\nRéponse modèle. Des personnes informées, une finalité, une durée (recommandation CNIL : jusqu'à 2 ans à partir du dernier contact, sauf opposition), une possibilité d'opposition, pas une base éternelle. J'enregistre la date de dernier contact. Je ne verse pas un non-retenu en vivier contre son opposition. Le vivier n'est pas un substitut de refus.\n\nQuestion 25 — Comment traitez-vous une cooptation ?\n\nRéponse modèle. Même grille que les autres. Remerciement au prescripteur selon la règle, sans livrer d'évaluation détaillée. Si le coopté est un proche, je déclare le conflit. La cooptation n'efface pas L. 1132-1. Je saisis la source « cooptation » dans l'ATS, pas « LinkedIn » par facilité.\n\nQuestion 26 — Candidature spontanée : que répondre ?\n\nRéponse modèle. S'il n'y a pas de poste : le dire, proposer un vivier selon la mention d'information, ne pas faire mine d'un process. Si un poste existe : entrer dans le flux. Clôturer. Le spontané gonfle parfois le haut du funnel : je ne le juge pas au seul volume.\n\nQuestion 27 — Profil pénurique : première réaction ?\n\nRéponse modèle. Vérifier que la pénurie est réelle (sourcing déjà tenté, pas un sentiment). Revoir must have vs formable, conditions, process trop long. Pas de critère d'âge « ça coûte moins ». Pas de mensonge de contrat. Éventuellement cabinet : décision budgétaire. Pas de TTF marché inventé.\n\nQuestion 28 — Recrutement volume : comment tenir ?\n\nRéponse modèle. Critères essentiels dès l'annonce, grille unique, calibrage manager sur un échantillon, créneaux groupés, clôture des non-retenus, messages individuels pour les interviewés. L'automatisation reste dans le cadre L. 1221-8 / L. 1221-9 / L. 1132-1. Le volume n'autorise pas le ghosting de masse.\n\nQuestion 29 — Pourquoi saisir une seule source principale ?\n\nRéponse modèle. Sinon le reporting des canaux est une conversation. Une source principale, éventuellement une secondaire. J'évite d'attribuer toutes les embauches au réseau social du CV. La source se saisit à l'entrée, pas à l'embauche « pour faire joli ».\n\nQuestion 30 — Quand recourir à un cabinet ?\n\nRéponse modèle. Lorsque le besoin, le délai et le vivier interne le justifient, avec un budget validé, un cadrage écrit, un circuit de feedback, une règle de qui refuse les candidats. Je ne recourt pas à un cabinet pour éviter de recadrer un manager. Je ne livre pas au cabinet plus de données que nécessaire."
        ),

        h("Bloc 4 — Entretien et évaluation (questions 31 à 40)"),
        t(
          "Question 31 — Pourquoi une grille d'entretien ?\n\nRéponse modèle. Pour comparer des faits sur les mêmes critères de poste, réduire le feeling, laisser une trace professionnelle. La grille se construit à partir de la fiche, pas à partir de « je saurai ». Elle n'inclut pas de critère protégé. Elle n'empêche pas l'échange humain ; elle empêche le commentaire « pas le look ».\n\nQuestion 32 — Préqualification : à quoi sert-elle ?\n\nRéponse modèle. Vérifier les conditions (lieu, horaires, contrat, fourchette, disponibilité, prérequis) et un premier niveau métier, pour ne pas faire perdre de temps. Ce n'est pas un interrogatoire. Si l'écart est net et que j'ai le mandat, je peux clôturer oralement puis par e-mail. Je ne promets pas un entretien manager pour être agréable.\n\nQuestion 33 — Comment conduisez-vous un entretien ?\n\nRéponse modèle. Cadre (durée, interlocuteurs, méthodes — L. 1221-8), questions liées au poste, mises en situation pertinentes (L. 1221-9), temps pour les questions du candidat, suite et délai réel. Je prends des notes factuelles. Je ne vends pas un poste que je ne peux pas tenir. Je ne transforme pas l'entretien en test de vie privée.\n\nQuestion 34 — Le manager pose une question illicite. Que faites-vous ?\n\nRéponse modèle. Je recadre pendant l'entretien si possible (« nous restons sur les critères du poste ») ; après, je parle au manager, je consigne, j'escalade si ça se répète. Je n'utilise pas la réponse du candidat. Je ne laisse pas la question dans le CR comme un critère. L. 1221-6 et L. 1132-1 s'appliquent aussi au manager embaucheur.\n\nQuestion 35 — Qu'est-ce qu'un biais, concrètement, pour vous ?\n\nRéponse modèle. Un écart d'évaluation qui n'est pas un critère de poste : similarité, effet de halo, fatigue, stéréotype d'âge ou de genre. La grille, le temps égal, la relecture du CR, le calibrage, réduisent, ils n'annulent pas. Un scoring IA peut reproduire le biais : relecture humaine. Je ne me prétends pas « sans biais » ; je me dote d'un process.\n\nQuestion 36 — Comment prenez-vous des notes ?\n\nRéponse modèle. Faits, exemples, écart vis-à-vis de la grille. Pas de diagnostic de personnalité de comptoir. Pas de donnée santé. Pas de photo annotée. Ces notes peuvent un jour entrer dans une demande d'accès : j'écris comme si elles pouvaient être lues dans un circuit cadré, pas comme un SMS.\n\nQuestion 37 — Un test technique, oui ou non ?\n\nRéponse modèle. Oui s'il est pertinent, proportionné, annoncé, évalué avec une grille, identique pour les personnes au même stade. Non s'il est un travail gratuit productif, un piège, ou un outil non validé. Information préalable L. 1221-8. Je ne fais pas faire un week-end de production « pour voir ».\n\nQuestion 38 — Entretien visio : points de vigilance ?\n\nRéponse modèle. Même grille qu'en présentiel. Lien testé. Pas d'enregistrement hors politique. J'évalue le poste, pas le logement. Une panne réseau n'est pas une incompétence. Si la caméra n'est pas un exigence pertinente, je ne l'érige pas en critère. Aménagement possible (handicap, accessibilité).\n\nQuestion 39 — Donnez-vous un feedback ?\n\nRéponse modèle. Selon la politique, plutôt aux personnes reçues en entretien, factuel, court, sur le poste. Pas de comparaison nominative. Pas d'obligation légale générale de motiver. Si la demande est un accès RGPD, autre circuit. Je ne promets pas un feedback que le manager refuse ensuite.\n\nQuestion 40 — Comment décidez-vous à plusieurs ?\n\nRéponse modèle. Chacun renseigne la grille avant d'entendre les autres, puis on confronte les faits. Un décideur nommé. En cas d'égalité, on revient aux must have, on ne tranche pas à l'âge ou au « fit ». Je n'invente pas un consensus. Si le manager change les critères en fin, on réécrit le besoin, on n'humilie pas les finalistes."
        ),

        h("Bloc 5 — Études de cas (questions 41 à 50)"),
        t(
          "Question 41 — Un manager : « Écarte-le, trop vieux. » Votre réponse ?\n\nRéponse modèle. Je n'exécute pas. L'âge est un critère protégé (L. 1132-1). Je demande des faits de poste. Si les faits existent, on décide sur ces faits. Sinon, le profil reste. J'informe mon responsable. Je ne traduis pas « trop vieux » en « trop senior » dans l'ATS. Je ne l'écris pas au candidat.\n\nQuestion 42 — Mail : « Envoyez-moi tout ce que vous avez sur moi, et dites-moi pourquoi. »\n\nRéponse modèle. Je sépare. Le « pourquoi » : pas d'obligation générale de motiver ; motif court si politique. Le « tout ce que vous avez » : demande d'accès, accusé, circuit DPO / RH. Je n'envoie pas les commentaires bruts du manager le soir même. Un seul mail fourre-tout de ma part mélangerait les risques.\n\nQuestion 43 — Le n°1 se désiste après un oui oral, J1 dans dix jours. Que faites-vous dans l'heure ?\n\nRéponse modèle. Prise d'acte, pas de menace. Information manager et RH (écrits déjà envoyés ? qualification offre / promesse : pas moi tout seul). Activation de la réserve si elle est encore réelle, avec un discours honnête. Vérification DPAE / contrat à stopper ou à réorienter. REX : motif de désistement s'il est donné, sans psychologie.\n\nQuestion 44 — Le poste est annulé après deux entretiens. Que dites-vous ?\n\nRéponse modèle. La vérité de process : le recrutement est annulé, ce n'est pas une évaluation du profil. Appel aux plus avancés, e-mail aux autres, stop annonce. Je ne déguise pas en « vous n'avez pas les compétences ». Si une offre orale a circulé, j'alerte RH (F39588). Je ne promets pas un autre poste fictif.\n\nQuestion 45 — L'offre disait 38 k€, le contrat arrive à 36 k€. Conduite ?\n\nRéponse modèle. Je bloque la signature. J'alerte RH et le manager. Soit le contrat revient à l'offre, soit on assume un nouvel arbitrage expliqué au candidat, qui peut refuser. Faire signer en silence n'est pas du closing, c'est une rupture de parole. Je ne « compense » pas par un variable hors mandat.\n\nQuestion 46 — « Il commence lundi, tu t'occupes de la DPAE, les identifiants sont dans le tiroir. »\n\nRéponse modèle. Je ne dépose pas hors habilitation. La DPAE est une obligation employeur, avant prise de poste ou essai, au plus tôt 8 jours avant (F23107). Alternative : l'habilité dépose, ou l'on reporte J1. Je trace l'alerte. Je ne fais pas commencer officieusement.\n\nQuestion 47 — Un collègue colle 20 CV nominatifs dans un chat d'IA grand public « pour trier ». Votre réaction ?\n\nRéponse modèle. Stop : données personnelles hors outil validé, incident potentiel, je n'imite pas. J'alerte le responsable / DPO. Un ranking n'exonère pas L. 1221-8, L. 1221-9, L. 1132-1. Je propose un tri sur grille dans l'ATS. La vitesse n'est pas un argument supérieur au cadre.\n\nQuestion 48 — Un interne candidate et demande que son manager n'en sache rien. Que faites-vous ?\n\nRéponse modèle. Je lis la politique de confidentialité interne. Je n'appelle pas le N+1 « pour avis informel ». J'enregistre, j'applique la règle, j'alerte RH en cas de conflit. Même grille que pour le poste. Un refus interne se coordonne, ce n'est pas un mail externe. L. 1132-1 s'applique aussi.\n\nQuestion 49 — Un candidat RQTH demande 15 minutes de plus et un logiciel de lecture pour la mise en situation.\n\nRéponse modèle. J'accuse réception, je transmets à RH l'aménagement de process, je confirme une date, j'évalue les critères du poste. Je ne demande pas le détail médical. Je ne dis pas « vous ferez bien pour notre taux » : l'obligation d'emploi existe pour certains employeurs, je n'invente pas un pourcentage, je vérifie le seuil légal en vigueur si je dois le citer, j'applique la politique. L. 1132-1 demeure même hors assujettissement.\n\nQuestion 50 — Un profil excellent vit hors de France. Il demande : « Vous me faites le visa ? On dit J1 dans trois semaines ? »\n\nRéponse modèle. J'évalue le poste. Je n'écarte pas pour l'origine. Je n'improvise pas le droit des étrangers, je ne garantis pas un visa, je ne fixe pas un J1 fantaisiste. J'alerte RH (titre, lieu de travail en France). RH dit les pièces au bon moment. S'il n'y a pas de cadre tenable, on ne fait pas commencer. Ma compétence junior, ici, est la limite."
        ),

        note(
          "En oral réel : une idée par phrase, un texte cité seulement s'il est juste, une limite avouée plutôt qu'une invention. Si vous ne savez pas, dites le circuit (RH, DPO, n+1), ne fabriquez pas un délai légal."
        ),
      ],
    }),

    quizLesson({
      title: "Quiz — Devenir opérationnel comme recruteur junior",
      description: "Douze questions : compétences, 90 jours, managers, charge, délégation, oral d'embauche.",
      passing_score: 70,
      minutes: 15,
      questions: [
        q({
          question: "Quelle compétence est réellement exigible d'un recruteur junior dès les premières semaines ?",
          options: [
            "A. Cadrer un besoin, tracer l'ATS, refuser selon un modèle, alerter RH sur la DPAE, sans qualifier un visa ni déposer une DPAE hors habilitation.",
            "B. Rédiger seul n'importe quel motif de CDD et rompre une période d'essai.",
            "C. Garantir un time to fill de 30 jours, norme marché.",
            "D. Conseiller un titre de séjour après une recherche en ligne.",
          ],
          correct: 0,
          explanation:
            "Le socle est le process licite et la frontière. Motif de CDD, rupture d'essai, visa, DPAE hors rôle, benchmark magique sortent du mandat.",
        }),
        q({
          question: "Priorité des 30 premiers jours ?",
          options: [
            "A. Carte des acteurs et habilitations, ATS, dettes de refus, modèles internes, préqual supervisées.",
            "B. Ouvrir le maximum de postes pour prouver son volume.",
            "C. Changer tous les modèles d'e-mails dès J2.",
            "D. Déposer les DPAE pour se rendre utile.",
          ],
          correct: 0,
          explanation:
            "La fiabilité précède le volume. Les DPAE restent du ressort habilité. L'innovation de modèles n'est pas le sujet de la première quinzaine.",
        }),
        q({
          question: "Un manager dit : « Envoie tout le monde, évite les trop seniors. » Quelle conduite ?",
          options: [
            "A. Shortlist selon des must have validés ; refuser l'âge déguisé ; proposer une grille et des créneaux.",
            "B. Envoyer 20 CV et noter « trop senior » dans l'ATS.",
            "C. Obéir : le manager est le client interne, donc la loi du poste.",
            "D. Promettre aux candidats que « c'est super, on avance » en attendant.",
          ],
          correct: 0,
          explanation:
            "Partenariat ≠ exécuter L. 1132-1. Le volume de CV sans grille n'est pas du cadrage. Mentir aux candidats n'achète pas du temps.",
        }),
        q({
          question: "Deux urgences se percutent. Que faites-vous ?",
          options: [
            "A. Rendre la file visible, proposer un gel, faire valider l'arbitrage ; ne pas sauter DPAE, discrimination, clôtures déjà dues.",
            "B. Dire oui aux deux J1, y compris sans DPAE.",
            "C. Prioriser celui qui crie le plus fort, sans écrit.",
            "D. Arrêter tous les refus pour « gagner du temps ».",
          ],
          correct: 0,
          explanation:
            "La priorisation s'écrit et se valide. L'urgence n'efface ni le droit ni la parole déjà donnée aux candidats.",
        }),
        q({
          question: "Le silence de votre n+1 sur une offre à envoyer aujourd'hui signifie :",
          options: [
            "A. Ce n'est pas une validation : vous relancez, vous n'envoyez pas un acte à risque sans écrit.",
            "B. Un oui implicite, surtout après 17 h.",
            "C. Que vous pouvez augmenter la fourchette pour conclure.",
            "D. Que vous pouvez déposer la DPAE avec son login.",
          ],
          correct: 0,
          explanation:
            "La validation se constate par un écrit. Le silence n'habilite ni l'offre hors cadre, ni la DPAE, ni une exception de salaire.",
        }),
        q({
          question: "Ordre : écarter les candidats d'un département et déposer la DPAE avec un login tiers. Réaction ?",
          options: [
            "A. Refus écrit : lieu de résidence / stéréotype géographique vs L. 1132-1 ; DPAE par l'habilité seulement.",
            "B. Exécuter pour loyauté.",
            "C. Exécuter le tri géographique, refuser seulement la DPAE.",
            "D. Exécuter la DPAE, le tri « on verra plus tard ».",
          ],
          correct: 0,
          explanation:
            "Deux interdits. Le lieu de résidence est un critère protégé ; on évalue la capacité à travailler sur le site. La DPAE n'est pas un geste débrouillard.",
        }),
        q({
          question: "En entretien d'embauche, on vous demande si vous motivez toujours les refus. Meilleure ligne ?",
          options: [
            "A. Pas d'obligation légale générale ; je réponds selon l'étape et la politique ; jamais un motif discriminatoire ; l'accès RGPD est un autre circuit.",
            "B. Oui, c'est obligatoire en 48 h par le Code du travail.",
            "C. Non, le RGPD interdit de répondre aux candidats.",
            "D. Je motive seulement si le candidat a plus de 45 ans, par respect.",
          ],
          correct: 0,
          explanation:
            "C'est le cadrage du module refus. 48 h n'est pas un délai légal général. Le RGPD n'interdit pas de répondre. L'âge n'est pas un critère de politesse.",
        }),
        q({
          question: "On vous demande de « tout gérer, visa compris ». Réponse d'oral solide ?",
          options: [
            "A. J'évalue le poste, j'alerte RH, je ne conseille pas le droit des étrangers, je ne promets pas de visa ni un J1 irréel, je n'écarte pas pour l'origine.",
            "B. Je connais les procédures préfectorales, je garantis trois semaines.",
            "C. J'écarte tout profil à l'étranger par prudence.",
            "D. Je fais commencer en visio, on régularisera.",
          ],
          correct: 0,
          explanation:
            "Limite junior claire, non-discrimination, pas de travail hors cadre. Les autres options sont des fautes d'oral et de métier.",
        }),
        q({
          question: "Quel indicateur citez-vous en oral sans vous piéger ?",
          options: [
            "A. TTF et TTH selon des dates définies, plus un funnel interne, sans « moyenne marché » inventée.",
            "B. « Le marché est à 28 jours, je suis à 20. »",
            "C. Un score IA 87 comme preuve scientifique.",
            "D. Le pourcentage d'hommes dans mes embauches, pour « l'équilibre » improvisé.",
          ],
          correct: 0,
          explanation:
            "Pas de benchmark fantôme, pas de score opaque, pas de reporting de sexe comme trophée. Les définitions internes suffisent.",
        }),
        q({
          question: "Un conflit d'intérêts (ami candidat) se traite comment ?",
          options: [
            "A. Déclaration immédiate, sortie du process si la politique le demande, même grille sinon sous contrôle.",
            "B. Grille un peu plus généreuse, par loyauté personnelle.",
            "C. Silence, tant que personne ne le sait.",
            "D. Refus automatique de l'ami, pour se protéger, sans règle.",
          ],
          correct: 0,
          explanation:
            "Déclarer et suivre la politique. Ni favoritisme, ni éviction improvisée qui peut elle-même être injuste. Le silence n'est pas une éthique.",
        }),
        q({
          question: "La check de « sortie junior » vise surtout :",
          options: [
            "A. Un process standard mené de bout en bout, avec une liste d'escalades nommées, pas l'habilitation à tout signer.",
            "B. La capacité à déposer DPAE, visas et ruptures d'essai seul.",
            "C. Un TTF inférieur à 30 jours sur tous les postes.",
            "D. L'absence de questions au n+1, preuve d'autonomie.",
          ],
          correct: 0,
          explanation:
            "Autonomie = process + limites. Les questions au n+1 sont un signe de maîtrise, pas l'inverse. Pas de norme magique de délai.",
        }),
        q({
          question: "Dans la banque de 50 questions, le « cœur » attendu par un recruteur qui vous embauche est :",
          options: [
            "A. Des réponses argumentées qui lient process, textes (non-discrimination, L. 1221-6, DPAE, RGPD) et limites d'escalade, pas une ligne de slogan.",
            "B. Des anecdotes drôles sans droit.",
            "C. Des statistiques de marché mémorisées.",
            "D. La promesse de travailler sept jours sur sept, visa et DPAE compris.",
          ],
          correct: 0,
          explanation:
            "C'est l'objet de la leçon 50 questions : l'oral professionnel argumenté. Slogans, faux benchmarks et sur-promesses hors rôle éliminent un junior sérieux.",
        }),
      ],
    }),
  ],
};
