import { lesson, h, t, note, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 13,
  title: "Shortlist, décision et choix final",
  description:
    "Présenter une shortlist, arbitrer sans critère illicite, et traiter en profondeur le cas des trois finalistes : refuser tout de suite, attendre la signature, ou informer de façon transparente — sans jamais mentir sur le statut.",
  lessons: [
    lesson({
      title: "Construire et présenter une shortlist",
      description:
        "Passer d'une liste de personnes vues à une shortlist argumentée, limitée, comparable, destinée à la décision.",
      minutes: 22,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez définir ce qu'est une shortlist, la limiter à des profils réellement employables au regard du poste, la présenter avec des faits, et éviter d'y faire figurer un « faire-valoir » ou un profil écarté pour un motif illicite."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "La shortlist n'est pas le classement de tous ceux que vous avez aimés. C'est l'ensemble restreint des personnes que l'entreprise est prête à embaucher si le process se conclut avec elles, au regard des critères du poste. Un nom dans la shortlist n'est pas une promesse. C'est une décision d'étape : ces personnes restent en lice, les autres sortent du process de ce poste (avec un message, bonne pratique). Confondre shortlist et « on garde tout le monde au chaud sans mot » produit le problème traité dans les leçons suivantes.\n\nUne shortlist de qualité a trois propriétés. Elle est courte : deux ou trois personnes, parfois une seule. Au-delà de quatre, vous n'avez pas tranché, vous avez transféré le désordre au manager. Elle est comparable : mêmes étapes franchies, mêmes critères, preuves de même nature. Elle est honnête : chaque personne y figure parce qu'elle peut faire le poste, pas pour « faire de la figuration » afin que le favori brille. Présenter un candidat que vous savez non retenu, uniquement pour servir de contraste, est une mauvaise pratique : vous lui prenez du temps, vous créez une attente, vous traitez une personne comme un instrument.\n\nLa présentation au manager (orale + tableau) reprend le module 11 : besoin, faits, notes, risques, recommandation d'ordre éventuel. L'ordre (1, 2, 3) est une aide à la décision, pas un droit du premier à l'offre, et pas une information à donner telle quelle aux candidats. Dire à quelqu'un « vous êtes notre numéro 2 » sans cadre est souvent blessant et rarement utile. Dire « un autre profil est en cours de finalisation » peut l'être, nous le détaillons plus loin.\n\nLa shortlist reste soumise à L. 1132-1 et L. 1221-6. On n'y entre pas, on n'en sort pas, pour un critère protégé. Un manager qui dit « enlève-la, elle va avoir des enfants » exige un refus de votre part, pas une shortlist « nettoyée ». Les données de shortlist sont confidentielles : pas de diapositive nominative envoyée à tout le département.\n\nEnfin, une shortlist d'un nom est légitime. L'absence de « plan B » est un risque opérationnel (leçon désistement), pas une faute juridique. L'inverse — trois noms dont deux que personne n'embaucherait — est une faute de process."
        ),
        h("Méthode opérationnelle"),
        t(
          "Critère d'entrée en shortlist, écrit : « note minimale sur les critères essentiels, pas de 1 éthique / sécurité, preuves suffisantes ». Appliqué à tous.\n\nLivrable : une page, trois blocs identiques (faits, écarts, suite). Ordre recommandé, explicitement marqué comme tel. Décision managériale datée : qui est n°1 d'offre, qui est réserve, qui sort.\n\nCommunication : aucune offre, aucun « vous êtes retenu », tant que la décision d'offre n'est pas validée (rémunération, RH). Message de sortie aux personnes hors shortlist, à la date prévue, sauf stratégie A/B/C des leçons 3 à 6, qui ne concerne que les finalistes encore employables."
        ),
        h("Exemple professionnel"),
        t(
          "Services, shortlist de deux pour un coordinateur SAV. Le manager veut ajouter un troisième « au cas où, même s'il n'a pas le permis que le poste exige ». Le recruteur refuse l'ajout : ce n'est pas une réserve, c'est un profil non employable. La vraie réserve est la deuxième personne, qui a le permis et un écart de pédagogie. Le troisième reçoit un refus de clôture, pas un maintien fictif."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Mettre six noms « pour faire plaisir au volume ». Shortlister le candidat interne par politesse alors que la grille l'écarte. Envoyer la shortlist avec photos. Annoncer aux trois : « vous êtes tous retenus »."
        ),
        h("Situations particulières"),
        t(
          "Cabinet : shortlist client = les personnes présentables au regard du mandat, pas un catalogue. Le client n'a pas le droit d'exiger une shortlist discriminatoire.\n\nIntérim : la « shortlist » peut être une vacation du lendemain ; le principe reste : ne pas confirmer une mission que l'on n'a pas, ne pas faire attendre sans mot.\n\nPoste à pourvoir en urgence : une shortlist d'un nom + un CDD/temporaire côté RH, pas un mensonge aux réserves."
        ),
        h("Mise en pratique"),
        t(
          "Vous avez Lina (35/48), Nadia (40/48), Karim (23/48 dont 1 éthique). Le manager dit : « mets les trois, je verrai. » Rédigez la shortlist que vous présentez et la phrase de refus d'inclure Karim."
        ),
        h("Correction détaillée"),
        t(
          "Shortlist : Nadia (tête), Lina (réserve employable). Karim n'entre pas : critère essentiel éthique insuffisant, preuves de séance. Phrase : « Une shortlist n'accueille que des personnes que nous sommes prêts à embaucher. Karim, sur le situationnel crédit, ne l'est pas. Le garder « au chaud » serait un faux finaliste. Je clôture son process avec un message professionnel, sans motif illicite. » L'âge n'apparaît nulle part."
        ),
      ],
    }),
    lesson({
      title: "Décider : preuves, ordre, et ce qui ne départage pas",
      description:
        "Passer de la shortlist à un choix n°1, sans critère illicite, sans halo, et sans transformer l'ordre en promesse.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez faire formuler au manager un choix n°1 et des réserves, tracer les motifs professionnels, et refuser les départages par l'âge, le sexe, le lieu, la famille, le coût discriminatoire ou le « feeling » non documenté."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "La décision finale d'embauche appartient en principe à l'employeur, souvent incarnée par le manager du poste, avec un cadre RH. Le recruteur junior n'impose pas le nom. Il impose le cadre : preuves, droit, process. Une décision « prends celui que tu veux » n'est pas une décision. Une décision « on prend X parce que c'est un homme, l'équipe est trop féminine » est illicite (L. 1132-1). Une décision « on prend X, preuves A, B, C, écarts acceptés D » est professionnelle.\n\nL'ordre 1 / 2 / 3 a une utilité interne : qui reçoit l'offre en premier, qui est réserve. Il n'a pas à être révélé brut aux candidats. Il ne crée pas, à lui seul, un contrat. Il ne vous autorise pas à dire au n°1 « vous êtes embauché » avant l'offre validée (module 14 : offre vs promesse). Il ne vous autorise pas à dire aux n°2 et n°3 « c'est terminé pour vous » ou « vous êtes retenus aussi », selon une mécanique unique : c'est précisément la question des leçons suivantes, et la réponse n'est pas une obligation légale unique.\n\nCe qui ne départage pas : critères protégés ; salaire demandé utilisé pour écarter une femme ou un senior de façon discriminatoire ; adresse comme proxy de « classe » ; photo ; humour de séance ; école du recruteur. Ce qui peut départage, s'il était dans la fiche : une exigence professionnelle réelle encore vérifiable auprès de tous les finalistes (habilitation, langue du poste, mobilité définie). Si l'exigence apparaît après coup, vous ne l'appliquez pas rétroactivement à un seul.\n\nLa décision se date, se nomme, se motive en interne par des faits. Cette trace n'est pas une lettre au candidat. Elle est la mémoire de l'entreprise, utile si un contentieux discrimination naît, utile si le n°1 se désiste, utile si le manager change d'avis le lundi suivant."
        ),
        h("Méthode opérationnelle"),
        t(
          "Réunion de 20 minutes max : rappel du besoin, tableau, parole du junior d'abord sur les faits, choix du manager, reformulation par le recruteur, écriture dans l'outil : n°1, réserves, sorties, motifs, prochaine action, date de communication.\n\nSi le motif oral est illicite : vous ne l'écrivez pas « pour faire plaisir ». Vous recadrez, vous proposez un motif professionnel s'il existe, sinon vous escaladez. Un motif interne écrit illicite est une pièce à risque.\n\nAucune communication candidat pendant cette réunion, y compris un SMS de joie du manager."
        ),
        h("Exemple professionnel"),
        t(
          "Industrie, deux finalistes techniciens. Le chef d'atelier : « On prend M., il habite à côté, l'autre est une femme, les équipes de nuit c'est compliqué. » Recruteur : refus des deux motifs (lieu de résidence, sexe). Reprise sur les preuves de sécurité. Si l'équipe de nuit est une exigence réelle du poste, elle se vérifie par les horaires, pour les deux, tels qu'écrits dans la fiche, sans stéréotype de sexe. Décision reportée de 24 h, brief RH au chef."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Laisser le manager envoyer un « bienvenue » LinkedIn avant l'offre. Écrire dans l'ATS « écartée, bientôt enceinte ». Annoncer l'ordre aux trois dans un e-mail commun."
        ),
        h("Situations particulières"),
        t(
          "Codécision RH + manager : un désaccord se documente (leçon 8). Offre conditionnelle à une vérification (diplôme, habilitation) : le n°1 n'est pas « embauché », les réserves ne sont pas « mortes ».\n\nActionnaire ou fondateur qui impose un nom hors grille : décision d'employeur, toujours soumise au droit ; vous tracez l'écart d'évaluation."
        ),
        h("Mise en pratique"),
        t(
          "Le manager choisit Nadia, Lina réserve, et ajoute : « Lina, on la garde au cas où, mais ne lui dis rien, on verra. Nadia, dis-lui qu'elle a le poste, on verra le salaire plus tard. » Quelles deux corrections apportez-vous immédiatement ?"
        ),
        h("Correction détaillée"),
        t(
          "1) Nadia : on n'annonce pas « vous avez le poste » sans offre validée (rémunération, contrat, RH). On peut dire qu'une offre est en préparation si c'est vrai, ou rester sur une date. 2) Lina : le silence indéfini n'est pas une stratégie ; c'est le scénario B mal tenu. On choisit A, B cadré ou C (leçons suivantes), avec une date. On ne ment à aucune des deux."
        ),
      ],
    }),
    lesson({
      title: "Trois finalistes, un choisi : y a-t-il une obligation légale unique ?",
      description:
        "Traiter la question centrale : faut-il refuser tout de suite les deux autres, ou attendre que le premier ait accepté et signé ?",
      minutes: 28,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez répondre à la question de process la plus fréquente en juniorat, sans inventer la loi : il n'existe pas d'obligation légale unique de refuser immédiatement les réserves, ni d'obligation unique de les attendre jusqu'à la signature. Vous distinguerez trois scénarios, leurs risques, et l'interdit commun : le mensonge sur le statut."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "La question se pose ainsi, presque mot pour mot, dans toutes les équipes : « Nous avons trois finalistes. Le manager en choisit un. Faut-il refuser immédiatement les deux autres, ou attendre que le premier ait accepté et signé ? » Beaucoup de juniors cherchent l'article de loi qui tranche. Il n'y en a pas, dans les sources de cette formation, qui imposerait une mécanique unique. Ce n'est pas une obligation légale unique. C'est un choix de process, encadré par d'autres règles : non-discrimination (L. 1132-1), honnêteté sur l'emploi (esprit L. 5331-3), données personnelles, et — surtout — interdiction professionnelle de mentir (« vous êtes retenu / retenue ») si ce n'est pas le cas. Une politique interne peut imposer un délai maximal de maintien des réserves. Cette politique n'est pas la loi ; elle s'applique chez l'employeur qui l'a édictée.\n\nAttendre une signature avant de clôturer les autres n'est pas illégal en soi. Refuser tout de suite les réserves n'est pas illégal en soi, sous réserve qu'aucun motif discriminatoire n'entre en jeu et que l'on ne crée pas, par des propos, une fausse promesse. Ce qui devient fautif, juridiquement ou professionnellement selon les cas : dire à une réserve qu'elle est choisie pour qu'elle attende ; laisser un silence de plusieurs semaines sans actualisation ; écarter une réserve pour un critère protégé pendant l'attente ; présenter comme une embauche ce qui n'est qu'une intention.\n\nTrois scénarios, tous praticables, tous imparfaits, à choisir en conscience, de préférence avant la campagne (politique interne), pas dans l'angoisse du vendredi soir.\n\nScénario A — Refus immédiat des deux non choisis, dès que le n°1 est désigné (avant même son acceptation). Avantage : clarté, respect du temps des personnes, image, simplicité. Risque opérationnel majeur : le n°1 se désiste, négocie ailleurs, échoue à une condition, et vous vous retrouvez sans candidat, après avoir fermé les réserves. Recruter de zéro coûte des semaines. Ce scénario est défendable lorsque le vivier est profond, lorsque le n°1 a une forte probabilité d'accepter, ou lorsque l'employeur assume explicitement le risque.\n\nScénario B — Attendre la signature (parfois même la fin de la période d'essai, ce qui est encore plus lourd) avant de dire quoi que ce soit aux autres. Avantage apparent : filet de sécurité. Risques : mauvaise expérience candidat, perte des réserves qui acceptent ailleurs pendant le silence, délai qui devient déraisonnable, accusations de « garder au chaud », relances multiples, et tentation de mensonge pour gagner du temps. Plus l'attente est longue et muette, plus le scénario B se dégrade. Attendre la signature du contrat est déjà long ; attendre la fin d'essai pour « libérer » les autres n'est en général ni tenable ni respectueux, sauf cas très particulier jamais improvisé par un junior.\n\nScénario C — Information transparente, sans mensonge : les non choisis ne sont pas « retenus », ils ne sont pas non plus disparus. On leur dit, en substance, qu'un autre profil est en cours de finalisation, que leur dossier reste une réserve possible, et que l'on revient avant une date ferme. Bonne pratique. Avantage : honnêteté, maintien possible de la réserve, respect. Risques : la personne refuse d'attendre ; elle demande si elle est « la deuxième » ; le manager veut du silence. Le scénario C exige une date, un respect de cette date, et des mots justes. Il se combine souvent avec une politique interne de délai max (par exemple : on ne maintient pas une réserve plus de X jours sans actualisation).\n\nL'interdit commun aux trois scénarios : ne jamais dire « vous êtes retenu / vous avez le poste / c'est bon » à une personne qui n'est pas celle à qui l'on fait une offre réelle, et ne jamais le dire au n°1 avant que l'offre soit vraiment décidée. Mentir n'est pas un scénario D. C'est une faute.\n\nLe choix A, B ou C n'est pas un outil pour discriminer. On n'applique pas A aux uns (refus sec) et B aux autres (attente) selon l'origine, le sexe, l'âge ou la famille. On applique une politique, ou un choix de campagne, aux finalistes encore employables."
        ),
        h("Méthode opérationnelle"),
        t(
          "Avant la campagne, proposer par écrit au manager et aux RH : « En cas de n°1 + réserves, nous appliquons le scénario C, délai max [date], actualisation à [date]. Si vous exigez A, vous assumez le risque de désistement. Si vous exigez B muet, je m'y oppose comme bonne pratique ; je propose B seulement avec actualisations datées, ce qui rejoint C. »\n\nLe jour J de la décision : nommer A, B ou C dans l'outil, avec les messages du jour, les dates, les propriétaires.\n\nContrôle : relire chaque phrase candidat avec le test du mensonge. « Vous êtes retenu » = seulement si offre réelle. « Process encore ouvert, nous revenons avant le [date] » = C. « Nous ne donnons pas suite » = A (sortie vraie)."
        ),
        h("Exemple professionnel"),
        t(
          "Banque des Vallées (fictif), Nadia n°1, Lina réserve, un troisième déjà sorti au tri. Le directeur veut A (« on coupe, c'est plus simple »). Le RH rappelle que le dernier chargé de clientèle s'est désisté après signature d'une contre-offre, et que l'agence a vécu six semaines de vide. Décision : C, retour à Lina avant 10 jours, phrase transparente, pas de « tu as le poste ». Nadia reçoit une offre écrite validée, pas un simple « c'est bon » oral."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Chercher « l'article qui dit qu'il faut attendre la fin d'essai ». Il n'est pas dans nos sources comme obligation unique. Appliquer B muet par peur. Appliquer A par agacement, puis paniquer au désistement. Dire aux deux réserves qu'elles sont n°1."
        ),
        h("Situations particulières"),
        t(
          "Une seule personne en shortlist : la question A/B/C ne se pose pas de la même façon ; le risque de désistement se gère par le vivier, un process parallèle honnête, ou l'acceptation du vide. Pas en promettant à un candidat déjà refusé qu'il est « encore n°1 ».\n\nCabinet : le client choisit A alors que vous savez le n°1 fragile. Vous conseillez C, vous n'inventez pas un statut au candidat.\n\nFonction publique / règles statutaires : hors modèle unique de ce cours ; suivez le cadre spécifique de l'employeur public. N'importez pas ce cadre dans une PME par analogie hasardeuse."
        ),
        h("Mise en pratique"),
        t(
          "Rédigez, en 12 à 15 lignes, la réponse que vous feriez à un manager qui demande : « C'est la loi de refuser les deux autres tout de suite, ou c'est la loi d'attendre la signature ? » Distinguez obligation, politique interne, bonne pratique, interdit."
        ),
        h("Correction détaillée"),
        t(
          "« Ce n'est pas une obligation légale unique, ni dans un sens ni dans l'autre. La loi nous interdit de discriminer, de tromper sur l'emploi, de mal traiter les données, et nous n'avons pas d'obligation générale de motiver un refus. Elle ne nous dicte pas le moment exact où l'on clôture les réserves. Politique interne : je propose un délai max et le scénario C. Bonne pratique : information transparente, date ferme, pas de silence de trois semaines. Interdit : dire « vous êtes retenu » si ce n'est pas le cas. Scénario A : possible, risque de nous retrouver sans personne. Scénario B muet : possible factuellement, mauvaise expérience, perte des réserves. Je ne choisirai pas en fonction de l'âge ou du sexe des personnes. »"
        ),
        note(
          "Question de campagne à trancher par écrit avec le manager, avant le premier entretien si possible. Date de vérification des textes : 13/10/2026. Ne jamais inventer un article qui « oblige à attendre la signature » ou qui « oblige à refuser le jour même »."
        ),
      ],
    }),
    lesson({
      title: "Scénario A — Refuser tout de suite les non choisis",
      description:
        "Appliquer un refus immédiat des réserves : messages, honnêteté, risque de vide, et ce que l'on ne dit pas.",
      minutes: 22,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez exécuter le scénario A de façon propre : clôture rapide, message poli, motif facultatif professionnel, sans humiliation, et avec une conscience claire du risque de désistement du n°1."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le scénario A assume que, une fois le n°1 désigné pour une offre réelle, les autres sortent du process de ce poste. C'est un choix de respect du temps : les personnes peuvent rebondir. C'est aussi un choix de risque RH : si Nadia refuse l'offre dans cinq jours, Lina a peut-être déjà accepté ailleurs, ou a reçu votre refus et ne reviendra pas. Certaines le feront par élégance ; beaucoup non. A n'est donc défendable que si l'employeur a compris ce risque, ou si le marché du poste est suffisamment profond pour rerouvrir un process sans drame, ou si le n°1 a déjà donné une acceptation orale ferme en même temps qu'une offre écrite — ce qui n'est toujours pas une signature, nous y reviendrons au module 14.\n\nA n'impose pas un roman de motifs. Rappel : pas d'obligation générale de motiver un refus. Un message court est licite. Un motif vrai, professionnel, bref, est une bonne pratique s'il n'expose pas l'entreprise (comparaison blessante, critère illicite, détail d'un autre candidat). « Nous avons retenu un profil plus proche de l'exigence X » est parfois acceptable. « Nous avons pris quelqu'un de plus jeune / moins susceptible d'être enceinte » est illicite, même en interne.\n\nA n'autorise pas à clôturer une personne encore nécessaire comme réserve tout en le lui cachant : ce ne serait plus A, ce serait un B ou un C déguisé. Si vous écrivez « pas de suite » tout en demandant au manager « on la rappelle si Nadia dit non », vous avez menti. Soit vous sortez vraiment, soit vous n'êtes pas en A.\n\nLe timing de A : après la décision d'offre au n°1, pas après la seule « préférence » encore floue. Si l'offre n'est pas validée (salaire, RH), A est prématuré : vous fermez des réserves pour une embauche qui n'existe pas encore. Séquence : validation de l'offre n°1, envoi ou entretien d'offre, puis messages A aux sorties, le même jour ou le lendemain. Pas trois semaines plus tard sous étiquette A."
        ),
        h("Méthode opérationnelle"),
        t(
          "Checklist A : offre n°1 validée ; messages de clôture prêts ; ATS statut « not selected » ; pas de vivier forcé si la personne s'y oppose ; pas de téléphone humiliant obligatoire (un e-mail suffit souvent ; un appel pour un finaliste longuement investi est une bonne pratique).\n\nSi le n°1 n'a pas encore vu l'offre : attendez l'envoi de l'offre, pas la signature, pour exécuter A — ou passez en C si le risque de désistement est élevé.\n\nDocumentez : « Scénario A assumé par [manager], risque de vide expliqué le [date]. »"
        ),
        h("Exemple professionnel"),
        t(
          "PME, 40 candidats, poste d'assistant ADV, vivier profond. N°1 très aligné, salaire déjà discuté en préqualification, offre envoyée. Le recruteur applique A le jour même aux deux autres personnes reçues. L'une répond « merci, bonne continuation ». Le n°1 signe. A était cohérent. Le même A, sur un profil rare de soudeur spécialisé, serait imprudent."
        ),
        code(`MESSAGE TYPE — SCÉNARIO A (e-mail de clôture, finaliste non choisi)
Objet : Suite de votre candidature — Chargé de clientèle — Lyon Part-Dieu

Bonjour [Prénom],

Nous vous remercions du temps consacré aux échanges pour le poste de
chargé / chargée de clientèle, agence de Lyon Part-Dieu.

Après décision, nous ne donnons pas de suite à votre candidature pour
ce poste. Cette décision porte sur l'adéquation avec le besoin retenu
pour cette ouverture ; elle n'est pas une évaluation de votre parcours
dans l'absolu.

[Option bonne pratique, seulement si vrai et professionnel :]
Le besoin a été pourvu avec un profil plus directement exposé à [tel
critère de la fiche : ex. délégations d'agence déjà pratiquées].

Nous vous souhaitons la réussite de vos projets. Si vous souhaitez
vous opposer à une conservation en vivier, répondez à cet e-mail.

Cordialement,
[Nom]

À NE PAS ÉCRIRE EN A
« On vous garde au cas où. » (ce n'est plus A, et c'est contradictoire)
« Vous étiez très bien, le manager a un souci avec votre âge. »
« Vous êtes retenu aussi, bravo. » (mensonge)`),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Exécuter A parce que c'est plus confortable émotionnellement, sur un poste rare. Ajouter « on se revoit peut-être » sans vivier réel. Téléphoner pour « vider son sac » sur les défauts du candidat."
        ),
        h("Situations particulières"),
        t(
          "Candidat interne non choisi : A s'accompagne, bonne pratique, d'un échange oral cadré avec le manager ou les RH, pas d'un seul e-mail froid, et jamais d'un silence. Toujours des motifs professionnels.\n\nCandidat qui demande le nom du retenu : vous ne le donnez pas (données, confidentialité)."
        ),
        h("Mise en pratique"),
        t(
          "Le manager veut A, mais ajoute : « Dis-leur qu'on n'a pas encore décidé, comme ça s'ils sont bons on pourra revenir. » Qualifiez cette instruction et proposez soit un vrai A, soit un vrai C."
        ),
        h("Correction détaillée"),
        t(
          "L'instruction est un mensonge de statut : ce n'est ni A ni C. Vrai A : clôture réelle, on assume de ne pas revenir, ou de revenir seulement comme un nouveau contact honnête si un jour le poste se réouvre (sans garantir). Vrai C : on dit que le poste n'est pas clos pour eux, date de retour. Vous refusez l'hybride « on dit non mais on dit que ce n'est pas décidé / on dit que c'est décidé mais on garde »."
        ),
      ],
    }),
    lesson({
      title: "Scénario B — Attendre la signature avant d'informer les autres",
      description:
        "Comprendre pourquoi l'attente jusqu'à la signature (ou au-delà) est tentante, quels dégâts elle produit si elle est muette, et comment la limiter si l'employeur l'impose.",
      minutes: 24,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez décrire les risques du scénario B, refuser le B muet comme bonne pratique, et, si l'employeur impose d'attendre la signature, y greffer des actualisations datées — ce qui rapproche B de C."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le scénario B naît d'une peur raisonnable : le n°1 peut se désister jusqu'à la signature, parfois après. Les employeurs qui ont vécu un désistement tardif veulent « ne brûler aucune cartouche ». Cette peur ne crée pas une obligation légale d'attendre. Elle crée un risque de mauvaise expérience si elle se traduit par un silence, des délais qui s'allongent, des personnes qui se croient encore en course sans le savoir, ou qui relancent sans réponse. Un délai déraisonnable n'est pas chiffré ici par un article unique ; il se constate : plusieurs semaines sans mot après un entretien final, alors qu'une offre circule ailleurs dans l'entreprise, c'est trop.\n\nAttendre la signature du contrat de travail du n°1 avant de clôturer les réserves n'est pas, en soi, une fraude. C'est une stratégie de filet. Elle devient fautive si, pendant l'attente, vous dites aux réserves qu'elles sont choisies ; si vous disparaissez ; si vous les faites revenir pour un « dernier entretien » fictif destiné seulement à les retenir ; si le délai n'a plus de date. Elle devient particulièrement lourde si l'on veut attendre la fin de la période d'essai du n°1 pour « libérer » les autres : vous demandez à des personnes de geler leur vie professionnelle pendant des semaines ou des mois. Un junior n'improvise pas cette option. Elle n'est pas une obligation légale. Elle est rarement une bonne pratique.\n\nPendant B, les réserves restent des candidats : L. 1132-1, L. 1221-6, RGPD s'appliquent. Vous n'en profitez pas pour poser de nouvelles questions illicites. Vous ne les « testez » pas à la baisse. Vous ne les utilisez pas comme levier de négociation contre le n°1 (« j'en ai deux autres ») de façon à mentir à l'un ou à l'autre.\n\nSi B est imposé, la seule manière de le rendre professionnel est de le rapprocher de C : dire que le process n'est pas clos, qu'une finalisation est en cours, revenir à une date. Sinon B n'est que du ghosting de finalistes — la pire version du module 12. Les réserves, mal informées, partent. B a alors échoué deux fois : mauvaise image, et plus de filet.\n\nLa signature n'est d'ailleurs pas toujours le moment où le risque disparaît. Un désistement post-signature existe. Vouloir un filet infini n'a pas de fin propre. Il faut un terme : date, événement (signature de l'offre / du contrat), puis clôture réelle des réserves, ou nouvelle information."
        ),
        h("Méthode opérationnelle"),
        t(
          "Si B est demandé : « J'applique B seulement avec un terme [signature de l'offre écrite / signature du contrat, au plus tard le date], et des messages d'actualisation aux réserves les [dates]. Au-delà, clôture. » Écrit, validé.\n\nInterdit : aucun contact, « on verra bien ». Interdit : faux « vous êtes le n°1 ». Interdit : faire durer jusqu'à la fin d'essai sans cadrage RH explicite — escaladez.\n\nCalendrier type (politique interne, pas la loi) : offre n°1 J0, actualisation réserves J0 ou J+1 (phrase C), point J+5, clôture ou nouvelle date à J+10 maximum, par exemple. Adaptez, mais datez."
        ),
        h("Exemple professionnel"),
        t(
          "ETI, profil rare d'ingénieur méthodes. Le DRH impose d'attendre la signature du n°1. Le recruteur junior n'accepte pas le silence : il envoie le message de réserve daté (modèle C). L'une des deux réserves se retire tout de suite (« je ne reste pas en plan B »). L'autre accepte d'attendre jusqu'au 12. Le n°1 signe le 10. Clôture honnête le 11. B a fonctionné parce qu'il n'était plus muet. La personne retirée n'a pas été trompée."
        ),
        code(`CE QUE B MUET PRODUIT (à ne pas faire)
Jour 1 : manager choisit le n°1. Les deux autres n'ont aucun message.
Jour 8 : une réserve relance. Personne ne répond, « on n'a pas signé ».
Jour 14 : la réserve accepte ailleurs.
Jour 16 : le n°1 se désiste. Plus personne. Le manager blâme le recruteur.

VERSION B CADRÉE (seule version défendable)
Jour 1 : offre n°1 + message type C aux réserves, date de retour le jour 8.
Jour 8 : soit signature → clôture A des réserves ; soit pas encore →
nouvelle date jour 12, ou libération des réserves si le délai max interne
est atteint. Jamais « vous avez le poste » adressé aux réserves.`),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Confondre B avec une obligation légale de « ne pas rompre les pourparlers avant signature ». Ce cours ne vous donne pas un tel article à invoquer comme règle unique. Utiliser B pour éviter d'écrire un refus. Promettre aux réserves une réponse « dans la semaine » chaque semaine, six fois."
        ),
        h("Situations particulières"),
        t(
          "N°1 en préavis long : B peut durer des semaines. D'autant plus C, d'autant plus le droit pour la réserve de se retirer. Vous n'exigez pas d'exclusivité sans contrepartie d'offre.\n\nN°1 mineur écart de salaire encore en négo : vous n'êtes même pas en B « signature », vous êtes en offre non close. C est encore plus nécessaire. Module 14."
        ),
        h("Mise en pratique"),
        t(
          "Le manager : « Attends la fin de sa période d'essai, on ne sait jamais, et ne dis rien aux deux autres. » Rédigez votre réponse (droit vs pratique vs politique) et l'alternative que vous proposez."
        ),
        h("Correction détaillée"),
        t(
          "Réponse : « Ce n'est pas une obligation légale. Faire attendre des finalistes plusieurs mois sans mot n'est pas une bonne pratique ; délai déraisonnable, perte des personnes, expérience dégradée. Je n'improviserai pas un gel jusqu'à la fin d'essai. Alternative : scénario C jusqu'à la signature de l'offre ou du contrat, délai max [ex. 10 jours ouvrés], actualisations, puis clôture. Filet de sécurité : vivier et, si le n°1 part en essai, un process de remplacement honnête, éventuellement en réactivant une réserve avec la vérité (leçon 7). » Escalade RH si le manager maintient le silence long."
        ),
      ],
    }),
    lesson({
      title: "Scénario C — Information transparente et politique de délai maximal",
      description:
        "Dire qu'un autre profil est en cours de finalisation, donner une date, tenir cette date, sans jamais affirmer à tort que la personne est retenue.",
      minutes: 26,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez rédiger et tenir le scénario C, y compris les relances de date, le cas où la réserve refuse d'attendre, et l'articulation avec une politique interne de délai maximal."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le scénario C est la bonne pratique de ce module, parce qu'il refuse deux facilités : le mensonge et le silence. Il dit le vrai : vous n'êtes pas la personne à qui nous faisons l'offre maintenant ; le poste n'est pas encore juridiquement pourvu de façon définitive ; nous souhaitons, si vous l'acceptez, pouvoir revenir vers vous avant telle date. La personne reste actrice : elle peut attendre, poser une date plus courte, ou se retirer. Vous n'achetez pas sa disponibilité par une fausse victoire.\n\nLes mots comptent. « Un autre profil est en cours de finalisation » est exact si une offre est réellement en cours. « Vous êtes en shortlist, tout est ouvert, vous avez autant de chances que quiconque » est faux si le n°1 a déjà l'offre. « Vous êtes notre deuxième choix » est vrai mais souvent inutilement blessant ; ce n'est pas illicite en soi, c'est une question de mesure. Beaucoup d'équipes préfèrent ne pas numéroter à l'oral. La date, elle, n'est pas optionnelle. Sans date, C redevient B muet.\n\nUne politique interne peut fixer un délai maximal de maintien en réserve (exemple pédagogique : 10 jours ouvrés après l'offre au n°1, ou la date de signature prévue, le plus proche des deux). Ce n'est pas une durée légale. C'est une règle d'employeur qui protège les candidats et le recruteur. Au terme, soit clôture réelle (A différé), soit exception documentée (signature imminente le lendemain). Un junior ne prolonge pas tout seul « encore un peu » cinq fois.\n\nC n'est pas une coquille vide pour faire patienter au-delà du raisonnable. Si vous savez que la négo du n°1 durera un mois, vous le dites, et la réserve a le droit de partir. Si vous savez que le n°1 a déjà signé, C est caduc : vous êtes en A, vous clôturez.\n\nÉgalité : le même type de message aux réserves employables. Pas un C chaleureux pour le profil « qui nous ressemble » et un A sec pour l'autre sans motif professionnel."
        ),
        h("Méthode opérationnelle"),
        t(
          "J0 offre n°1 : messages C aux réserves, date D. Agenda : rappel D-1, message à D même sans news (nouvelle date ou clôture). Si la réserve pose une question directe « suis-je le plan B ? » : vérité mesurée, voir modèle. Si elle se retire : remerciement, statut clos, pas de rancune dans un futur vivier.\n\nValidation RH du modèle C une fois, puis usage. Le manager ne réécrit pas en « tu as le job »."
        ),
        h("Exemple professionnel"),
        t(
          "Startup, n°1 en négo de 5 jours. Le recruteur envoie C à la réserve, date au vendredi. Le mercredi, la réserve a une autre offre. Le recruteur dit la vérité : « Nous avons une offre en cours ailleurs ; je ne peux pas vous aligner aujourd'hui ; je comprends que vous acceptiez l'autre. » Pas de surenchère mensongère. Le n°1 signe le jeudi. Process propre, même si le filet a disparu : le filet n'était pas un otage."
        ),
        code(`MESSAGE TYPE — SCÉNARIO C (réserve, honnêteté, date)
Objet : Point d'étape — Chargé de clientèle — Lyon Part-Dieu

Bonjour [Prénom],

Nous vous remercions des échanges pour le poste de chargé / chargée de
clientèle.

À ce stade, un autre profil est en cours de finalisation. Votre candidature
n'est pas écartée : elle demeure une possibilité si cette finalisation
n'aboutissait pas. Nous n'avons pas d'offre à vous adresser aujourd'hui.

Nous revenons vers vous au plus tard le [date — ex. vendredi 30 octobre],
y compris pour vous clôturer le process ou pour actualiser cette date une
fois. Passé ce délai, sauf message de notre part, vous pourrez considérer
le process clos.

Vous êtes libre de poursuivre d'autres pistes. Si votre situation change
ou si vous ne souhaitez pas rester en attente, indiquez-le-nous.

Cordialement,
[Nom]

---
SI LA PERSONNE DEMANDE : « Je suis le plan B ? »
« Nous avons engagé une offre avec une autre personne. Nous ne vous avons
pas fait d'offre. Nous souhaitons, si vous l'acceptez, pouvoir revenir
vers vous avant le [date] si cette offre n'aboutit pas. Nous ne vous
demandons pas d'exclusivité. »

SI LA PERSONNE DEMANDE : « Je suis retenu(e) ? »
« Non, pas à ce stade. Nous ne disons pas que vous êtes retenu(e). Nous
disons que le process n'est pas clos de notre côté jusqu'au [date]. »

À NE PAS ÉCRIRE
« Vous avez le poste. » / « C'est presque sûr pour vous. »
« On a choisi quelqu'un de plus jeune, mais restez dispo. »
« Signez déjà un document pour qu'on vous réserve. » (risque de promesse,
 module 14 : pas d'initiative junior)`),
        code(`POLITIQUE INTERNE PÉDAGOGIQUE (exemple, pas une loi)
1. Décision n°1 + réserves : scénario par défaut = C.
2. Délai max de réserve : 10 jours ouvrés après l'envoi de l'offre au n°1,
   ou la date de signature prévue si elle est plus proche.
3. Au moins un message à J0 et un message à la date butoir.
4. Interdiction d'annoncer « retenu » hors offre réelle.
5. Même politique pour tous les finalistes employables.
6. Exception (allongement) : écrit RH + manager, une seule fois, 5 jours
   max, message au candidat.
7. Scénario A possible si vivier profond et risque de désistement faible,
   décision tracée.
8. Scénario B muet : non.`),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Oublier la date. Enjoliver (« vous êtes vraiment très proche du poste, c'est dans la poche »). Appliquer C pendant deux mois. Laisser le manager appeler la réserve pour dire « tu as gagné » par confusion."
        ),
        h("Situations particulières"),
        t(
          "Deux réserves : même date, même type de message. Pas de mise en concurrence orale (« la plus rapide à se rendre dispo »). La disponibilité se gère par les dates d'un poste, pas par une enchère.\n\nRéserve interne : C + un oral court, confidentialité vis-à-vis de l'équipe."
        ),
        h("Mise en pratique"),
        t(
          "C'est la date butoir. Le n°1 n'a pas signé, il demande encore 10 jours. La politique interne max est atteinte. Que faites-vous vis-à-vis de la réserve et vis-à-vis du n°1 ? Deux messages."
        ),
        h("Correction détaillée"),
        t(
          "Réserve : soit clôture honnête (A différé) : « La finalisation se poursuit au-delà du délai que nous vous avions indiqué ; nous clôturons votre process pour ce poste afin de ne pas prolonger l'attente ; merci. » Soit, exception RH unique, une nouvelle date courte, si la réserve accepte. Pas de silence. N°1 : vous ne le menacez pas avec la réserve. Vous donnez un délai d'acceptation de l'offre (module 14), vous n'inventez pas une exclusivité éternelle. Si RH autorise 5 jours de plus et que la réserve est d'accord, message C prolongé une fois. Sinon vous assumez le risque de vide : c'est le coût d'avoir un délai max, c'est aussi sa valeur."
        ),
      ],
    }),
    lesson({
      title: "Désistement du retenu : réactiver les réserves avec honnêteté",
      description:
        "Recontacter une réserve lorsque le n°1 part, sans falsifier l'histoire, sans pression, sans critère illicite.",
      minutes: 22,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez réactiver une réserve après un désistement : timing, vérité du motif, absence de pression, et conduite si la réserve refuse ou si aucune réserve n'existe plus (scénario A déjà exécuté)."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le désistement du n°1 est un incident fréquent : autre offre, refus des conditions, changement de projet, délai trop long, parfois un fait grave découvert. Il n'autorise pas la panique, ni le maquillage. Si vous aviez un scénario C, vous rappelez la réserve avec la vérité : l'offre précédente n'a pas abouti, le poste est à pourvoir, nous souhaitons reprendre avec vous, voici les conditions. Si vous aviez exécuté A, vous n'avez plus de réserve « chaude ». Vous pouvez recontacter une personne clôturée, mais alors vous dites que le process avait été clos et qu'il se réouvre, pas que « on ne vous avait jamais dit non, c'était un quiproquo ».\n\nL'honnêteté porte sur le statut, pas sur les détails confidentiels du n°1. Vous ne divulguez pas son nom, son salaire, ses raisons intimes. « La finalisation avec l'autre profil n'a pas abouti » suffit. Vous ne dénigrez pas le n°1 pour valoriser la réserve. Vous ne dites pas « vous étiez de toute façon le meilleur, on s'est trompés » si ce n'est pas le discours réel : la réserve comprend qu'elle n'était pas l'offre n°1. Elle a le droit de le trouver désagréable. Elle a le droit de dire non. Votre job est de faire une offre réelle, maintenant, pas de réécrire le passé.\n\nLa réactivation n'est pas un droit de tirage. La personne a pu s'engager ailleurs. Toute pression (« on a besoin de vous dès lundi, c'est maintenant ou jamais, on se souviendra » ) est déplacée. Un délai d'offre, clair, comme pour le n°1. Les conditions (salaire, poste) ne se dégradent pas « parce que c'est le plan B » — ce serait une faute éthique, et parfois un indice de traitement inégal. Elles ne s'envolent pas non plus sans cadre : même politique de rémunération, module 14.\n\nSi le désistement a lieu pour un motif discriminatoire du manager (« en fait je ne veux plus d'une femme ») alors qu'une offre allait partir, vous n'enchaînez pas en réactivant l'autre sur le même motif. Vous escaladez (leçon 8). Réactiver Lina parce que Nadia est une femme n'est pas un plan B, c'est une discrimination."
        ),
        h("Méthode opérationnelle"),
        t(
          "Heure 0 : n°1 se désiste, écrit dans l'outil, RH informé, offre n°1 close. Heure +1 à +4 : appel puis e-mail à la réserve n°1, modèle ci-dessous, si C était en cours et la date pas dépassée trop largement. Si A déjà envoyé : appel de réouverture honnête, sans exigence de réponse dans l'heure.\n\nPréparer l'offre de la réserve avant d'appeler, au moins en fourchette validée. Appeler pour dire « on vous aime bien » sans offre, c'est recommencer un B.\n\nSi aucune réserve : information au manager, rerouverture de process, pas de chasse précipitée discriminatoire."
        ),
        h("Exemple professionnel"),
        t(
          "Nadia refuse l'offre (préavis et salaire). Le jour même, appel à Lina, toujours en C jusqu'au vendredi. Vérité, offre validée le lendemain, même grille, pédagogie à accompagner (plan d'intégration, pas baisse de salaire). Lina demande 48 h. Accord. Elle accepte. Le CR interne note le désistement de Nadia sans commentaire de sexe ou d'âge."
        ),
        code(`MESSAGE TYPE — RÉACTIVATION HONNÊTE D'UNE RÉSERVE
Appel d'abord, puis e-mail de confirmation.

Bonjour [Prénom],

Je vous contacte au sujet du poste de chargé / chargée de clientèle,
agence de Lyon Part-Dieu.

Comme indiqué le [date], un autre profil était en cours de finalisation.
Cette finalisation n'a pas abouti. Le poste reste à pourvoir.

Nous souhaitons maintenant vous proposer de passer à l'étape d'offre.
Nous ne vous avions pas fait d'offre jusqu'ici ; nous ne réécrivons pas
cette chronologie. Si vous êtes toujours intéressé(e), nous pouvons
[vous présenter une offre orale le ... / vous envoyer une offre écrite
 demain], avec un délai de réponse jusqu'au [date].

Vous êtes libre de décliner. Cela n'affectera pas un éventuel contact
futur sur un autre poste.

Cordialement,
[Nom]

SI LA PERSONNE AVAIT DÉJÀ REÇU UN REFUS (scénario A)
« Nous vous avions indiqué une clôture le [date]. Le besoin s'est
rouvert. Nous vous recontactons de façon distincte, sans obligation
de votre côté. »`),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Appeler en disant « tout le monde vous préférait, c'est Nadia qui a fait capoter ». Baisse de salaire « plan B ». Exiger une réponse dans la soirée. Mentir : « en fait vous étiez n°1 depuis le début »."
        ),
        h("Situations particulières"),
        t(
          "Deux réserves encore actives : ordre interne préexistant, une offre à la fois, pas deux promesses parallèles. Désistement après signature : circuit RH (préavis, rétractation, éventuellement contentieux) ; le junior ne « bricole » pas un contrat. Il peut réactiver un vivier avec honnêteté, sous pilotage RH."
        ),
        h("Mise en pratique"),
        t(
          "Lina dit : « Je veux bien, mais seulement si vous m'assurez par écrit que j'étais le premier choix. » Que répondez-vous ?"
        ),
        h("Correction détaillée"),
        t(
          "Vous refusez de falsifier. « Nous ne pouvons pas écrire cela, ce ne serait pas exact. Vous n'étiez pas la personne à qui la première offre a été adressée. Nous vous adressons maintenant une offre réelle, aux conditions [X]. Vous pouvez l'accepter ou la refuser sur cette base. » Si Lina refuse, vous respectez. Un écrit faux est plus dangereux qu'un poste vacant (lien possible avec une promesse, module 14, et faute éthique)."
        ),
      ],
    }),
    lesson({
      title: "Désaccord recruteur / manager et pression discriminatoire",
      description:
        "Argumenter sur des preuves, documenter, escalader, et refuser d'exécuter une décision d'écart fondée sur un critère protégé.",
      minutes: 24,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez distinguer un désaccord métier légitime d'une injonction illicite, argumenter sans attaquer la personne du manager, tracer, et saisir votre responsable lorsque l'on vous demande d'écarter ou de choisir pour un motif discriminatoire."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le recruteur et le manager n'ont pas le même rôle, donc ils peuvent diverger. Un désaccord sur le poids d'une compétence, sur le caractère formable d'un écart, sur le scénario A ou C, est normal. Il se résout par les faits, la fiche de poste, parfois l'arbitrage RH. Un désaccord sur « on ne prend pas les [origine / femmes / seniors / personnes en situation de handicap / personnes du quartier] » n'est pas un désaccord métier. C'est une demande de discrimination à l'embauche, interdite (L. 1132-1). Votre juniorité n'est pas une excuse pour exécuter. Vous ne « comprenez les contraintes de l'équipe » en écartant une personne pour un critère protégé.\n\nArgumenter sur preuves, ce n'est pas humilier le manager en réunion publique. C'est : rappeler le critère écrit, lire le fait d'entretien, proposer une suite (second entretien, épreuve informée). Si le manager maintient un feeling contraire aux preuves, vous tracez : « Décision manager : X, malgré note éthique 1 / malgré absence de preuves. Avis recrutement : réserve / défavorable. » Cette trace n'est pas une mutinerie. C'est la mémoire du process. En cas de contentieux, un dossier vide ou un dossier qui reprend le motif illicite est un risque majeur. Un dossier qui montre que le recruteur a recadré protège l'entreprise — et vous.\n\nSi le manager reformule un motif illicite en faux motif professionnel (« pas le fit », « pas assez dynamique ») alors que la séance a porté sur l'âge ou la famille, vous refusez la reformulation cosmétique. Vous nommez ce qui a été dit, vous proposez le critère professionnel réel s'il existe (horaires, habilitation), appliqué à tous. Si rien de professionnel ne reste, vous n'écrivez pas « fit » pour couvrir.\n\nL'escalade : votre responsable recrutement ou RH, faits, citations, dates. Vous n'envoyez pas un e-mail vindicatif à toute la direction. Vous n'en parlez pas au candidat (« votre manager est sexiste ») : ce n'est pas votre canal, et cela peut aggraver. Le candidat a des voies (défenseur des droits, justice) que vous n'avez pas à piloter. Votre devoir immédiat : ne pas commettre l'acte, ne pas falsifier la shortlist, ne pas envoyer un refus dont le motif réel est illicite.\n\nUn manager peut légitimement préférer Nadia à Lina sur des preuves. Vous défendez Lina seulement si les preuves le justifient, pas par esprit de contradiction. Le contraire du copinage, c'est la grille, pas l'anti-manager systématique."
        ),
        h("Méthode opérationnelle"),
        t(
          "En séance : « Je reformule le motif. Est-ce bien [fait professionnel] ? Si le motif est [critère protégé], nous ne pouvons pas l'utiliser. » Pause. Proposition d'alternative. Si maintien illicite : « Je ne peux pas exécuter cette instruction. Je saisis [RH]. Nous suspendons la communication candidat. »\n\nÉcrit du jour : mail factuel à votre responsable, copie selon règles internes, sans copie au manager si la procédure interne prévoit un canal confidentiel — suivez l'employeur. Pas de dossier parallèle chez vous sur une messagerie perso.\n\nCandidats : pas de message de refus tant que l'instruction illicite n'est pas levée. Un silence de 24 à 48 h le temps d'arbitrer vaut mieux qu'un e-mail discriminatoire. Puis actualisation de délai si besoin."
        ),
        h("Exemple professionnel"),
        t(
          "Le directeur d'agence : « Nadia c'est non, elle va vouloir des enfants, prends Karim. » Recruteur : rappel L. 1132-1, Karim a un 1 éthique, Nadia a les preuves. Suspension. RH revoit le directeur. Décision : Karim n'est pas offert. Nadia reste n°1. L'e-mail interne du recruteur décrit les propos, sans injure. Le process reprend en C vis-à-vis de Lina, sans exposer Nadia."
        ),
        code(`TRACE INTERNE — DÉSACCORD (modèle factuel)
Date :
Poste :
Manager :
Recruteur :

Faits d'évaluation : [notes, extraits]
Décision demandée par le manager :
Motif oral indiqué :
Rappel recadrage (L. 1132-1 / L. 1221-6) :
Avis recrutement :
Action : suspension des messages candidats / saisine RH
Communication candidat : aucune / actualisation de délai le …

À NE PAS ÉCRIRE
« Le manager est un idiot. » / « On va la prendre quand même en cachette. »
Motif ATS : « pas le profil familial ».`),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Exécuter puis « ce n'est pas moi, c'est le manager ». Mentir au candidat sur le motif. En parler au déjeuner de l'open space. Menacer le manager d'un procès. Céder sur Karim malgré le 1 éthique pour « garder une relation »."
        ),
        h("Situations particulières"),
        t(
          "Client d'un cabinet qui exige un sexe ou un âge : refus du mandat discriminatoire, hiérarchie cabinet, pas de shortlist filtrée en secret.\n\nVous avez déjà envoyé un message A pour un motif que vous découvrez illicite après coup : saisine RH immédiate, pas de second e-mail bricolé seul.\n\nVous êtes d'accord avec le manager sur Nadia, pour des preuves : écrivez les preuves, pas « enfin un choix de bon sens »."
        ),
        h("Mise en pratique"),
        t(
          "Le manager accepte Nadia, mais : « Lina, refuse-la tout de suite (A), elle habite loin, ça va être les transports, et puis elle est trop jeune, on garde seulement Nadia silencieuse jusqu'à la signature (B muet). » Identifiez chaque problème et votre conduite."
        ),
        h("Correction détaillée"),
        t(
          "Problèmes : lieu de résidence et âge = critères protégés, A ne peut pas s'appuyer là-dessus ; B muet = mauvaise pratique. Conduite : Nadia peut être n°1 sur preuves. Lina, si employable, est réserve : scénario C, pas A fondé sur l'âge ou l'adresse. Horaires et lieu de travail du poste se confirment de façon professionnelle, pour tous. B muet refusé. Trace + RH si le manager maintient l'écart de Lina pour l'âge ou le logement. Aucun e-mail de refus tant que le motif n'est pas professionnel."
        ),
        note(
          "Vous n'exécutez pas une discrimination même si le manager « insiste ». Ce n'est pas une option de carrière. Sources : L. 1132-1, L. 1221-6. Vérification : 13/10/2026."
        ),
      ],
    }),
    quizLesson({
      title: "Quiz — Shortlist, décision et choix final",
      description: "Shortlist, trois finalistes, scénarios A/B/C, désistement, désaccord, mensonge de statut.",
      passing_score: 70,
      minutes: 16,
      questions: [
        q({
          question:
            "Une shortlist professionnelle contient :",
          options: [
            "A. Toutes les personnes vues, pour faire du volume.",
            "B. Uniquement des personnes que l'on est prêt à embaucher au regard du poste, en nombre restreint, avec des preuves comparables.",
            "C. Un faire-valoir volontairement trop faible pour faire briller le favori.",
            "D. Des photos pour aider le manager à se souvenir.",
          ],
          correct: 1,
          explanation:
            "La figuration et les photos (apparence) sont des fautes. La shortlist est un ensemble d'employables, pas un catalogue.",
        }),
        q({
          question:
            "« Nous avons trois finalistes. Le manager en choisit un. Faut-il refuser immédiatement les deux autres ou attendre que le premier ait accepté et signé ? » La réponse de ce cours est :",
          options: [
            "A. La loi impose toujours le refus immédiat le jour même.",
            "B. La loi impose toujours d'attendre la fin de la période d'essai.",
            "C. Il n'y a pas d'obligation légale unique ; A, B et C sont des choix de process, avec des risques différents ; mentir sur le statut est interdit comme pratique.",
            "D. On dit aux trois qu'ils sont retenus, par sécurité.",
          ],
          correct: 2,
          explanation:
            "C'est le cœur du module. Pas d'article unique dans nos sources qui dicte le moment. Politique interne possible. Interdit : « vous êtes retenu » à faux.",
        }),
        q({
          question: "Le principal risque opérationnel du scénario A (refus immédiat des réserves) est :",
          options: [
            "A. L'obligation légale de conserver les réserves cinq ans en base active.",
            "B. De se retrouver sans candidat si le n°1 se désiste, alors que les réserves ont été fermées.",
            "C. La discrimination automatique.",
            "D. L'interdiction de remercier les personnes.",
          ],
          correct: 1,
          explanation:
            "A est clair pour les personnes, mais le filet disparaît. La conservation 5 ans concerne l'archivage probatoire (L. 1134-5 / CNIL), pas une base active de réserves. A n'est pas discriminatoire en soi ; il le devient s'il s'appuie sur un critère protégé.",
        }),
        q({
          question: "Le scénario B muet (attendre la signature sans rien dire) est :",
          options: [
            "A. Une obligation légale de prudence.",
            "B. Une pratique à risque : mauvaise expérience, perte des réserves, délai déraisonnable, tentation de mensonge. S'il est imposé, il doit être rapproché de C (dates, vérité).",
            "C. La seule façon d'éviter toute discrimination.",
            "D. Recommandée jusqu'à la fin de période d'essai, toujours.",
          ],
          correct: 1,
          explanation:
            "B n'est pas illégal par nature, mais B muet est une mauvaise pratique. La fin d'essai comme terme improvisé n'est pas une bonne pratique junior.",
        }),
        q({
          question: "Quelle phrase correspond au scénario C ?",
          options: [
            "A. « Vous êtes retenu, bravo, on signe la semaine prochaine — enfin, presque, on a quelqu'un d'autre aussi. »",
            "B. « Un autre profil est en cours de finalisation ; votre candidature n'est pas écartée ; nous revenons avant le [date] ; vous n'avez pas d'offre aujourd'hui. »",
            "C. « Sans nouvelles de notre part d'ici trois mois, relancez. »",
            "D. « On a choisi quelqu'un de plus jeune, restez dispo. »",
          ],
          correct: 1,
          explanation:
            "C = vérité du statut + date + liberté du candidat. A mélange mensonge et confusion. D est illicite (âge). Le silence de trois mois est un B déraisonnable.",
        }),
        q({
          question: "Une politique interne de délai maximal de réserve :",
          options: [
            "A. Est une loi française unique à 10 jours.",
            "B. Peut imposer un terme (bonne pratique d'employeur), distincte d'une obligation légale générale ; le junior ne la prolonge pas seul cinq fois.",
            "C. Interdit le scénario C.",
            "D. Autorise à dire « retenu » pour tenir jusque-là.",
          ],
          correct: 1,
          explanation:
            "Exemple pédagogique de 10 jours dans le cours, pas un article de loi. La politique protège contre le B infini. Elle n'autorise pas le mensonge.",
        }),
        q({
          question: "Dire « vous êtes retenu(e) » à une réserve pour qu'elle attende :",
          options: [
            "A. Est une astuce de sourcing recommandée.",
            "B. Est un mensonge de statut, interdit comme pratique ; peut en plus créer un risque de qualification d'engagement (module 14).",
            "C. Est obligatoire pour rester poli.",
            "D. Est le scénario C.",
          ],
          correct: 1,
          explanation:
            "C dit précisément que la personne n'est pas retenue au sens d'une offre. Le mensonge n'est pas de la politesse. Le module 14 montrera le risque offre / promesse.",
        }),
        q({
          question: "Le n°1 se désiste. Vous aviez un scénario C en cours. Vous :",
          options: [
            "A. Réactivez la réserve en prétendant qu'elle était n°1 depuis le début.",
            "B. Dites la vérité (la finalisation n'a pas abouti), proposez une offre réelle, sans pression et sans baisser les conditions « parce que plan B ».",
            "C. Ghostez la réserve, trop compliqué.",
            "D. Prenez Karim malgré un 1 éthique, plus vite.",
          ],
          correct: 1,
          explanation:
            "L'honnêteté de chronologie est non négociable. Le 1 éthique ne redevient pas un 3 par urgence. Le ghosting n'est pas une sortie.",
        }),
        q({
          question: "Vous aviez déjà envoyé un refus A. Le n°1 part. Recontacter la personne :",
          options: [
            "A. Est interdit à jamais.",
            "B. Est possible en disant que le process avait été clos et qu'il se réouvre, sans nier le refus passé.",
            "C. Doit se faire en niant l'e-mail de refus (« bug informatique »).",
            "D. Se fait via le manager qui écrit « on t'avait choisi ».",
          ],
          correct: 1,
          explanation:
            "A a un coût : la personne n'est plus « chaude » et a reçu un non. On peut réouvrir, pas réécrire l'histoire.",
        }),
        q({
          question: "Le manager demande d'écarter une finaliste parce qu'elle « va avoir des enfants ». Vous :",
          options: [
            "A. Exécutez, c'est lui le décideur métier.",
            "B. Reformulez en « pas le fit » dans l'ATS pour protéger l'entreprise.",
            "C. Refusez d'exécuter, rappelez L. 1132-1, suspendez les messages, saisissez RH, tracez les faits.",
            "D. Prévenez la candidate en lui disant que son manager est illégal, sur LinkedIn.",
          ],
          correct: 2,
          explanation:
            "Ni exécution, ni cosmétique, ni dénonciation publique improvisée. Recadrage, suspension, escalade, trace. La grossesse / situation de famille est un critère protégé.",
        }),
        q({
          question: "Appliquer le scénario A à une personne et le scénario B chaleureux à une autre, selon l'origine ou le sexe :",
          options: [
            "A. Est une subtilité de process.",
            "B. Est un traitement inégal qui peut constituer une discrimination (L. 1132-1).",
            "C. Est recommandé par la CNIL.",
            "D. Est obligatoire si les salaires demandés diffèrent.",
          ],
          correct: 1,
          explanation:
            "A/B/C se choisissent comme politique de campagne, pas comme filtre de personnes protégées. Un écart de prétention salariale ne justifie pas un scénario discriminatoire.",
        }),
        q({
          question: "Quelle combinaison est la plus défendable pour un junior, par défaut ?",
          options: [
            "A. Dire aux trois finalistes qu'ils ont le poste, puis voir.",
            "B. Offre réelle au n°1 ; scénario C daté aux réserves employables ; jamais de critère illicite ; politique de délai max interne ; réactivation honnête en cas de désistement.",
            "C. B muet jusqu'à la fin d'essai, sans RH.",
            "D. A immédiat sur un profil rare, sans expliquer le risque de vide au manager.",
          ],
          correct: 1,
          explanation:
            "C'est la doctrine opérationnelle du module : pas d'obligation légale unique, une bonne pratique claire, des risques nommés, un interdit de mensonge, un cadre anti-discrimination.",
        }),
      ],
    }),
  ],
};
