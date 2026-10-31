import { lesson, h, t, note, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 14,
  title: "Formuler une offre et négocier",
  description:
    "Valider la rémunération, construire et présenter une offre, distinguer offre et promesse unilatérale, négocier dans une enveloppe, escalader au-delà, sans rédiger une promesse sans les RH.",
  lessons: [
    lesson({
      title: "Valider la rémunération avant d'ouvrir la bouche",
      description:
        "S'aligner sur la politique interne, la fourchette du poste, l'équité, et ce que le droit français n'impose pas encore dans l'annonce.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez obtenir une fourchette validée avant toute offre, distinguer politique interne, bonne pratique et droit (dont la directive européenne sur la transparence salariale, en transposition), et refuser d'improviser un chiffre en séance."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Une offre sans rémunération validée n'est pas une offre, c'est une conversation. Le recruteur junior n'invente pas un salaire « pour conclure ». Il part d'une politique interne : fourchette du poste, positionnement selon l'expérience, variable, avantages, règles d'exception. Cette politique n'est pas dans le Code du travail sous la forme d'un barème unique national des CDI de chargé de clientèle. Elle est un acte d'employeur. L'équité interne (ne pas proposer 8 k€ d'écart à poste égal sans motif professionnel) est une bonne pratique, et un enjeu de cohésion ; elle se relie aussi, à terme, aux exigences européennes de transparence. Au 13/10/2026, indiquer le salaire dans l'offre d'emploi n'est pas présenté par Service-Public comme une obligation interne française déjà consolidée : une directive européenne (UE 2023/970) impose une information sur la rémunération ou une fourchette dans l'offre ; la transposition est en cours. Vous n'affirmez pas que « c'est déjà obligatoire en France » sans vérifier le texte de transposition en vigueur le jour J. Vous pouvez, en bonne pratique, travailler avec des fourchettes dès maintenant, si l'employeur l'autorise.\n\nValider la rémunération, c'est aussi éviter deux fautes. La première : utiliser le sexe, l'âge, la situation de famille ou l'origine pour « caler » le chiffre (L. 1132-1). Une femme ne « coûte pas moins ». Un senior n'est pas « trop cher » par principe d'âge. La deuxième : reprendre la prétention du candidat comme seule boussole. Une prétention éclaire un dialogue ; elle ne viole pas le plafond de la fourchette, et elle ne justifie pas de sous-payer quelqu'un qui s'ignore.\n\nAvant l'offre, vous avez par écrit : salaire brut annuel (ou mensuel, selon usage), variable (objectifs, plafonds, non garanti si c'est le cas), avantages (tickets, mutuelle, intéressement, véhicule, télétravail), lieu, temps de travail, type de contrat, date de prise de poste visée, période d'essai envisagée selon le cadre RH, préavis de départ du candidat. Sans ce paquet, vous négociez dans le vide.\n\nLe junior a une enveloppe : un plancher, un plafond, parfois un geste (prime, RTT, date). Au-delà, escalation. Cette discipline n'est pas de la timidité. C'est ce qui évite une promesse orale hors cadre, plus tard difficile à retirer."
        ),
        h("Méthode opérationnelle"),
        t(
          "Fiche d'offre interne, signée manager + RH (ou process ATS) : fourchette, cible pour ce n°1, plafond, variable, avantages, date, essai. Vous n'appelez pas le candidat tant que cette fiche n'existe pas.\n\nVérifier l'équité : deux personnes au même poste, écarts justifiés par des faits (expérience, délégation), pas par le genre.\n\nSi le candidat a annoncé une prétention hors fourchette en préqualification : alerter avant de le passer n°1, pas le jour de l'offre."
        ),
        h("Exemple professionnel"),
        t(
          "ETI, poste de chargé de clientèle. Fourchette interne 28-32 k€ brut, variable d'agence non garanti. Nadia visée à 31 k€. Le directeur dit « promets 35, on verra ». Le recruteur refuse : hors enveloppe, inéquitable avec l'équipe à 30-32, et parole non retravaillable. Escalade RH. Décision : 32 k€ plafond, plus tutorat produits, pas 35 improvisé."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Annoncer une fourchette basse pour « se garder de la marge », perçue ensuite comme une tromperie. Demander le salaire actuel pour calquer, surtout si cela fige des écarts discriminatoires. Dire « l'État nous interdit de mettre le salaire dans l'annonce » ou l'inverse « c'est déjà obligatoire » sans vérification du jour J."
        ),
        h("Situations particulières"),
        t(
          "Cabinet : le salaire est celui du client, validé par le client, pas un chiffre consultant. Intérim : taux / coefficient selon grilles, pas une négo libre de junior. Package international : RH/paie, pas d'invention d'expatriation."
        ),
        h("Mise en pratique"),
        t(
          "Le manager : « Demande-lui ce qu'elle gagne aujourd'hui, on proposera 5 % de plus, comme ça on n'est pas cher, surtout si elle est jeune. » Recadrez en quatre points."
        ),
        h("Correction détaillée"),
        t(
          "1) L'âge n'entre pas dans le chiffre (L. 1132-1). 2) La politique du poste (fourchette 28-32) prime sur un +5 % mécanique, qui peut sous-payer ou dépasser. 3) Le salaire actuel est une donnée sensible ; s'il est demandé, c'est selon politique interne, lien avec l'emploi, sans s'en servir pour discriminer — la directive transparence vise précisément à réduire la dépendance au salaire antérieur ; n'en faites pas votre boussole unique. 4) Aucune offre tant que la fiche n'est pas validée. Escalade si le manager maintient « surtout si elle est jeune »."
        ),
      ],
    }),
    lesson({
      title: "Construire le contenu de l'offre",
      description:
        "Assembler un paquet complet, cohérent avec la fiche de poste, sans avantages fantômes et sans clause inventée par le junior.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez lister les éléments d'une offre professionnelle, vérifier chacun auprès des RH, et écarter les mentions que vous n'avez pas le droit de rédiger seul (promesse, clauses contractuelles sensibles)."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "L'offre que vous présentez doit coller à l'emploi réel : intitulé, lieu, temps de travail, rattachement, missions principales, rémunération, avantages, type de contrat, date visée, période d'essai selon le cadre fourni par les RH, processus d'acceptation, délai de réponse. Ce qui n'est pas encore décidé n'entre pas comme une certitude. Un « on verra le télétravail » promis à l'oral et absent du contrat est une source de conflit, et un écart avec l'esprit de L. 5331-3 (ne pas induire en erreur sur l'emploi, la rémunération, le lieu).\n\nLe junior assemble, il ne crée pas le droit. La période d'essai, les clauses de non-concurrence, la propriété intellectuelle, les variables complexes : tout cela se copie depuis le modèle RH, ou ne se dit pas. Inventer une clause « pour rassurer » est plus dangereux que de dire « je fais vérifier ». De même, vous n'écrivez pas « promesse d'embauche » sur un e-mail d'enthousiasme. La leçon suivante explique pourquoi.\n\nLe paquet comprend aussi le délai d'acceptation. Un délai clair (par exemple 5 jours ouvrés, politique interne, pas un délai légal unique à inventer) protège les deux parties : le candidat décide, l'entreprise sait quand elle passe en scénario C vis-à-vis des réserves (module 13). Un « répondez quand vous voulez » rend le scénario C ingérable.\n\nLes avantages s'écrivent en conditions réelles : mutuelle selon régime, variable selon un plan qui existe, intéressement selon accord. Vous ne garantissez pas un variable comme un fixe. Vous ne présentez pas un « 40 k€ » qui additionne un fixe de 30 et un variable max théorique de 10 jamais atteint par personne du réseau."
        ),
        h("Méthode opérationnelle"),
        t(
          "Modèle interne d'offre (e-mail ou PDF RH). Checklist : parties, poste, lieu, contrat, temps, date, essai (formulation RH), fixe, variable (caractère, base), avantages, délai d'acceptation, contact, mention « sous réserve de [conditions réellement prévues : pièces, DPAE côté employeur, etc.] » seulement si le RH l'a écrite.\n\nRelire avec la fiche de poste et l'annonce. Écart = correction avant envoi, pas « on expliquera ».\n\nCopie manager + RH avant le candidat, sauf délégation déjà donnée sur un modèle figé."
        ),
        h("Exemple professionnel"),
        t(
          "PME, offre d'un commercial sédentaire. Le manager veut écrire « 36 k€ + 10 de prime ». Le recruteur exige le plan de commission écrit. Le plan montre un variable moyen de 3, un max de 8. L'offre parle de 36 k€ fixe + variable selon plan joint, sans addition magique 46. Le candidat compare ce qui est comparable."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Oublier le lieu ou les samedis. Promettre une évolution de poste à 12 mois. Joindre un contrat complet que vous avez modifié seul. Mettre « CDI confirmé, pas d'essai » alors que les RH n'ont pas validé."
        ),
        h("Situations particulières"),
        t(
          "Remplacement de congé : le besoin peut être durable ou non ; vous ne transformez pas un CDD en CDI à l'oral. Mobilité interne : l'offre peut être un avenant, circuit RH, pas un e-mail junior isolé. Mineur, étranger soumis à autorisation : circuit RH, pas d'offre bricolée."
        ),
        h("Mise en pratique"),
        t(
          "Listez 12 mentions du paquet d'offre pour Nadia, et 3 mentions que vous refusez d'ajouter seul (« promesse d'embauche irrévocable », « pas d'essai », « 40 k€ all inclusive »)."
        ),
        h("Correction détaillée"),
        t(
          "Mentions : intitulé ; agence Lyon Part-Dieu ; CDI temps plein ; horaires d'agence ; rattachement directeur ; missions alignées fiche ; 32 k€ brut annuel ; variable d'agence selon plan, non garanti ; avantages existants ; date visée ; essai selon modèle RH ; délai d'acceptation ; contact. Refus : intitulé « promesse irrévocable » (leçon suivante, RH/juridique) ; suppression d'essai non validée ; 40 k€ qui mélange fixe et max de variable. DPAE : obligation de l'employeur avant embauche (Service-Public F23107 / Urssaf), le junior coordonne, il n'écrit pas qu'elle est « optionnelle »."
        ),
      ],
    }),
    lesson({
      title: "Offre de contrat et promesse unilatérale : ne pas confondre",
      description:
        "S'appuyer sur Service-Public F39588 (vérifié le 12/03/2026) et la Cass. soc. 21 septembre 2017 : le junior ne rédige pas une « promesse » sans RH/juridique.",
      minutes: 26,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous distinguerez offre de contrat et promesse unilatérale de contrat de travail selon le cadrage de Service-Public, vous saurez pourquoi le retrait n'a pas le même effet, et vous appliquerez une règle opérationnelle : jamais de document intitulé ou rédigé comme une promesse sans les RH ou le juridique."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Beaucoup de recruteurs disent « promesse d'embauche » pour n'importe quel e-mail positif. Ce langage est imprécis et dangereux. Service-Public Entreprendre, fiche F39588, vérifiée le 12 mars 2026, explique que les notions d'offre de contrat de travail et de promesse unilatérale de contrat de travail ne sont pas définies par la loi, mais encadrées par la jurisprudence. Sont notamment citées les décisions de la Cour de cassation, chambre sociale, du 21 septembre 2017, n° 16-20.103 et 16-20.104. Une promesse d'embauche n'est pas obligatoire pour embaucher.\n\nSelon ce cadrage : une offre de contrat peut, sous conditions, être retirée avant acceptation, dans le délai laissé au candidat pour accepter ou, à défaut, dans un délai raisonnable. Une promesse unilatérale, elle, vaut contrat : le bénéficiaire n'a plus qu'à lever l'option. Si l'employeur retire une promesse unilatérale, le retrait s'analyse en licenciement sans cause réelle et sérieuse. Autrement dit, le mot que vous mettez dans un e-mail, et surtout les engagements que vous formulez (emploi, rémunération, date, caractère irrévocable, « nous nous engageons définitivement », « vous n'avez plus qu'à confirmer votre accord »), peuvent faire basculer la qualification. Ce cours n'ajoute pas d'autre arrêt. Il n'invente pas de montant d'indemnité. Il vous demande la prudence.\n\nConséquence opérationnelle pour un junior : vous ne rédigez pas un document intitulé « promesse d'embauche », « promesse unilatérale », « engagement irrévocable ». Vous n'imitez pas un contrat. Vous utilisez le modèle d'offre validé par les RH, souvent présenté comme une offre de contrat de travail, avec un délai d'acceptation, des éléments essentiels, sans formules d'irrévocabilité que vous n'avez pas fait relire. Si un manager dicte « envoie-lui une promesse pour le bloquer », vous escaladez. Bloquer un candidat se fait par une offre réelle, un délai, et de l'honnêteté, pas par un acte juridique que vous ne maîtrisez pas.\n\nRetirer une offre n'est pas un geste anodin pour autant. Même lorsque le retrait d'une offre (non encore acceptée, dans le délai) est possible selon le cadrage F39588, il reste un acte d'employeur, souvent mal vécu, parfois contesté sur d'autres fondements (discrimination, exécution de mauvaise foi, propos). Un junior ne retire pas seul une offre « parce que le manager a changé d'avis sur l'âge ». Il saisit les RH. Après acceptation, vous n'êtes plus dans le simple retrait d'offre : le contrat peut être formé. Encore une fois : vous n'arbitrez pas seul la qualification. Vous évitez de créer le problème.\n\nUne acceptation se date. Un « super, merci » sur SMS peut, selon le contexte, être discuté comme acceptation. D'où l'intérêt d'un process : offre écrite, acceptation écrite, puis contrat RH. Vous n'ajoutez pas « c'est bon, tu commences lundi, on verra le papier »."
        ),
        h("Méthode opérationnelle"),
        t(
          "Lexique interne : on dit « offre », on ne dit pas « promesse » à l'oral au candidat. Modèle RH uniquement. Toute demande de « bloquer par un papier » = RH/juridique.\n\nDélai d'acceptation écrit. Relance à J-1. Si dépassement : vous ne supposez pas l'acceptation ; vous écrivez, puis, avec les RH, vous décidez du sort de l'offre (prolongation, caducité selon le modèle, passage aux réserves en C).\n\nRetrait envisagé : stop, RH. Motif professionalisé. Pas de motif L. 1132-1. Pas de mail junior improvisé « on retire la promesse »."
        ),
        h("Exemple professionnel"),
        t(
          "Startup, le fondateur envoie un texto : « Promesse d'embauche CDI 45 k, tu es in, on est trop contents, irrévocable de notre côté. » Le recruteur junior fait stopper, oriente vers le modèle d'offre RH, explique F39588 au fondateur en une minute : le mot et l'irrévocabilité, ce n'est pas un détail de com. Un e-mail d'offre standard part le lendemain, délai 5 jours, sans « irrévocable »."
        ),
        code(`CE QUE LE JUNIOR N'ENVOIE PAS (contre-exemple)
Objet : Promesse unilatérale d'embauche irrévocable
« Nous nous engageons de façon définitive et irrévocable à vous embaucher
en CDI le 2 novembre, 38 k€, vous n'avez plus qu'à lever l'option.
Toute rétractation de notre part vaudra licenciement. »

POURQUOI : vocabulaire et mécaniques de promesse unilatérale, hors rôle,
hors modèle, risque de qualification. Cass. soc. 21/09/2017 citée par
F39588 (12/03/2026). Pas de rédaction solo.

CE QUE LE JUNIOR ENVOIE (esprit — coller au modèle RH employeur)
Objet : Offre de contrat de travail — Chargé de clientèle — Lyon Part-Dieu
« À la suite de nos échanges, nous vous adressons une offre de contrat
de travail pour le poste de […], éléments ci-dessous. Cette offre est
valable jusqu'au [date]. Merci de nous notifier votre acceptation écrite
à [e-mail] avant cette date. Le contrat de travail sera établi par les
RH après acceptation. »

Pas de mot « promesse ». Pas d'« irrévocable » ajouté par le junior.`),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Copier un modèle internet « promesse d'embauche ». Rassurer en disant « c'est comme un contrat déjà ». Retirer une offre par SMS parce que le n°2 plaît davantage. Célébrer une acceptation orale sans confirmer par écrit."
        ),
        h("Situations particulières"),
        t(
          "Le juridique de l'entreprise utilise encore l'expression « promesse d'embauche » dans un modèle contrôlé : vous suivez le modèle interne, vous ne le réinventez pas. L'interdit porte sur l'initiative junior hors cadre.\n\nOffre retirée avant acceptation dans le délai : RH pilote le message, vous informez éventuellement une réserve selon le module 13, sans insulter le n°1.\n\nCandidat qui a signé un document ambigu : vous ne « qualifiez » pas, vous transmettez au juridique."
        ),
        h("Mise en pratique"),
        t(
          "Le manager : « Envoie une promesse pour le coller, on pourra toujours se dédire si le CODIR refuse le budget vendredi. » Rédigez votre refus et l'alternative."
        ),
        h("Correction détaillée"),
        t(
          "Refus : « Je n'envoie pas de promesse unilatérale. Selon le cadrage Service-Public F39588 (12/03/2026) et la Cass. soc. 21 septembre 2017, une promesse unilatérale vaut contrat ; un retrait s'analyse en licenciement sans cause réelle et sérieuse. Ce n'est pas un outil pour attendre un CODIR. » Alternative : soit le budget est validé et j'envoie une offre RH avec délai jusqu'à lundi ; soit nous restons en scénario C vis-à-vis du candidat (« finalisation interne, retour avant vendredi ») sans dire qu'il est embauché. Mentir « vous êtes retenu, papier irrévocable » alors que le budget n'existe pas est une faute."
        ),
        note(
          "Source unique à citer ici : SP-F39588, vérifiée le 12/03/2026 ; Cass. soc. 21 septembre 2017, n° 16-20.103 et 16-20.104. Une promesse d'embauche n'est pas obligatoire. Le junior ne rédige pas de promesse hors RH/juridique. Vérification du dossier de formation : 13/10/2026."
        ),
      ],
    }),
    lesson({
      title: "Présenter l'offre à l'oral et par écrit",
      description:
        "Conduire l'appel d'offre, envoyer le support, laisser un délai, et rester aligné mot à mot avec le papier.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez structurer un appel d'offre de 15 à 20 minutes, envoyer le écrit dans la foulée, répondre aux questions sans élargir l'enveloppe, et clôturer sans pression déloyale."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "L'offre s'annonce, elle ne se glisse pas dans un SMS à 22 h. L'oral sert à la clarté et au respect ; l'écrit fige les éléments. Les deux doivent dire la même chose. Un oral plus généreux que l'e-mail est une faute (attente, possible discussion sur l'engagement). Un e-mail plus généreux que l'oral surprend le manager. Vous lisez votre fiche d'offre avant d'appeler.\n\nL'appel n'est pas une négo immédiatement ouverte à tous les vents. Vous présentez le paquet, vous vérifiez la compréhension, vous indiquez le délai, vous proposez un temps de questions. Si le candidat négocie dans la minute, vous pouvez traiter ce qui est dans l'enveloppe (leçon suivante) ou reporter : « Je note votre demande, je reviens avant demain 12 h. » Reporter est souvent plus sûr qu'accorder dans l'élan.\n\nLe ton : factuel, courtois, sans « tu as gagné ». La personne n'a pas encore accepté. Vous ne dénigrez pas son employeur actuel. Vous ne mentez pas sur les réserves (« on n'a que vous ») si C est en cours. Vous pouvez dire, si c'est vrai, que le process avance avec une date, sans exposer nominativement autrui.\n\nAprès l'écrit : pas de relance toutes les heures. Une relance à J-1 du délai. Si le candidat pose des questions de contrat pointues, RH. Si le candidat demande un document « promesse », vous expliquez que l'entreprise adresse une offre de contrat selon son modèle, pas un acte junior."
        ),
        h("Méthode opérationnelle"),
        t(
          "Avant : fiche validée, créneau, lieu calme. Pendant : félicitations mesurées, poste, paquet, délai, questions, reformulation des points ouverts. Après : e-mail dans l'heure, copie process, ATS « offer sent », rappel agenda, message C aux réserves si politique C (module 13).\n\nScript d'ouverture : « Nous souhaitons vous adresser une offre de contrat pour [poste]. Je vous en présente les éléments, un écrit suit. Vous n'avez pas à répondre à l'instant. »"
        ),
        h("Exemple professionnel"),
        t(
          "Nadia, 18 minutes. Le recruteur déroule 32 k€, variable selon plan, date 2 novembre, essai selon modèle, délai jusqu'au 29 octobre 18 h. Nadia demande le télétravail 3 jours. Hors fiche. « Ce n'est pas dans l'offre d'aujourd'hui ; je consulte ; je ne vous le promets pas à l'oral. » E-mail sans télétravail. Le directeur confirme plus tard 1 jour : avenant d'offre, pas un souvenir d'appel."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Appeler en visio dans l'open space. Dire « le contrat est déjà gagné ». Oublier d'envoyer l'écrit. Envoyer l'écrit avec un autre salaire que l'oral. Presser « il faut me dire ce soir, sinon on prend l'autre » si ce n'est pas le process réel — et même si une réserve existe, la formulation reste honnête (C), pas un ultimatum fictif."
        ),
        h("Situations particulières"),
        t(
          "Candidat qui enregistre l'appel : politique interne, rester factuel, l'écrit prime. Candidat à l'étranger / décalage : délai d'acceptation adapté, fuseau dans l'e-mail. Offre en présentiel : même script, papier remis, copie e-mail."
        ),
        h("Mise en pratique"),
        t(
          "Rédigez le plan de l'appel d'offre (8 puces) et la première phrase de l'e-mail, sans le mot « promesse »."
        ),
        h("Correction détaillée"),
        t(
          "Puces : contexte poste ; intitulé et lieu ; contrat et temps ; date visée ; fixe ; variable et caractère ; avantages ; essai (formule RH) ; délai et modalité d'acceptation écrite ; questions. Première phrase : « Suite à notre échange de ce jour, vous trouverez ci-dessous notre offre de contrat de travail pour le poste de chargé / chargée de clientèle, agence de Lyon Part-Dieu, valable jusqu'au [date]. »"
        ),
      ],
    }),
    lesson({
      title: "Négocier dans l'enveloppe, escalader au-delà, traiter contre-offre et refus",
      description:
        "Tenir un plafond, faire remonter une demande, répondre à une contre-offre externe, et clôturer un refus sans rancune ni mensonge.",
      minutes: 22,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez mener une négociation courte, utiliser l'enveloppe (salaire, date, avantages déjà prévus), stopper dès le plafond, escalader par écrit, et réagir à une contre-offre sans surenchère émotionnelle."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Négocier n'est pas « gagner » contre le candidat. C'est chercher un accord dans un cadre. L'enveloppe existe pour cela : par exemple +1 k€, une date de départ, un matériel, pas un changement de poste. Au-delà, vous n'inventez pas. Vous dites : « Je n'ai pas délégation au-delà de [X]. Je transmets à [RH/manager], je vous reviens avant [heure]. » Cette phrase est une compétence. Accorder 3 k€ « on se débrouillera » est une faute, éventuellement une offre que l'employeur ne reconnaîtra pas, ou qu'il devra honorer à son corps défendant.\n\nLa contre-offre (l'employeur actuel ou un concurrent aligne ou surenchère) est un fait du marché, pas une offense. Vous ne dénigrez pas. Vous ne mentez pas (« eux ils vont mal »). Vous rappelez votre paquet, votre délai, éventuellement un geste encore dans l'enveloppe après escalation. Vous n'entrez pas dans une enchère sans fin. Vous n'appliquez pas un critère illicite (« s'il hésite, c'est qu'il n'est pas fiable, et puis il a une famille »).\n\nLe refus du candidat est une issue normale. Remerciement, statut, réserves (module 13), analyse interne (délai trop court ? paquet illisible ? fourchette hors marché ?). Pas de reproche. Le désistement après acceptation écrite est plus grave opérationnellement : RH, pas un solo junior, pas d'injure, réactivation honnête des réserves.\n\nVous ne « tenez » pas quelqu'un par une fausse promesse, un chantage à la réserve, ou un document irrévocable bricolé. La négo reste dans l'offre de contrat, délai, enveloppe, escalation."
        ),
        h("Méthode opérationnelle"),
        t(
          "Trois étages : (1) ce qui est déjà dans l'offre ; (2) ce qui est dans l'enveloppe restante ; (3) escalation, délai de retour, pas de vide. Tout geste nouveau = avenant d'offre écrit, même modèle, nouveau délai court.\n\nJournal de négo dans l'ATS : demande, réponse, qui a validé. Pas uniquement un souvenir d'appel.\n\nSi contre-offre : « Transmettez-nous les éléments que vous pouvez partager (poste, fixe ; pas d'obligation de montrer un document confidentiel illégalement). Je reviens. » Vous ne forcez pas la violation d'une clause de confidentialité."
        ),
        h("Exemple professionnel"),
        t(
          "Nadia demande 34 k€, plafond 32. Recruteur : pas d'accord oral. E-mail RH/manager : écart 2 k€, risque de perte, équité équipe (collègues à 31-32). Décision : maintien 32, tutorat, date de revue salariale selon politique (pas une promotion promise). Nadia accepte 32. Si le manager avait dit 34 malgré l'iniquité, RH tranche, pas le junior seul."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Matcher immédiatement une contre-offre verbale. Promettre une revue à 6 mois non prévue. Dire « de toute façon on a quelqu'un d'autre qui signera ce soir » si c'est faux. Baisser l'offre parce que la personne « n'a qu'à bien se tenir, c'est le plan B » (module 13)."
        ),
        h("Situations particulières"),
        t(
          "Candidat qui négocie après acceptation : selon le cas, nouvelle discussion RH, pas un silence punitif. Candidat qui refuse puis revient : traiter comme une nouvelle décision, pas comme un dû. Plusieurs candidats en offre parallèle : en principe non (deux promesses de fait) ; une offre à la fois, sauf cadre RH très contrôlé."
        ),
        h("Mise en pratique"),
        t(
          "Enveloppe max 32 k€. Le candidat : « 36 ou je reste. » Le manager est injoignable jusqu'au lendemain 14 h. Votre réponse orale du jour, et votre e-mail d'escalade."
        ),
        h("Correction détaillée"),
        t(
          "Oral : « Je ne peux pas m'aligner à 36 aujourd'hui, ce n'est pas dans ma délégation. Je ne vous confirme pas ce chiffre. Je transmets, je vous rappelle demain avant 16 h. Votre délai d'offre actuel reste le [date] sauf prolongation écrite. » Escalade : demande 36, plafond 32, motivation du candidat, risque, équité, options (maintien / geste date / refus). Pas de 36 « en attendant »."
        ),
      ],
    }),
    lesson({
      title: "Simulation 1 — Négociation dans l'enveloppe, puis plafond",
      description:
        "Dialogue complet : un junior motivé négocie +2 k€ puis +4 k€ ; le recruteur accorde le geste prévu, escalade au-delà, sans promesse.",
      minutes: 28,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous observerez un dialogue d'offre et de négo, identifierez les phrases d'enveloppe et d'escalade, et reproduirez le même cadrage sur un autre poste."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "La première simulation reprend Lina, réserve devenue n°1 après un désistement (module 13), ou — variante de campagne — Lina n°1 d'une autre ouverture. Peu importe : l'enjeu est l'enveloppe. Offre à 30 k€, enveloppe jusqu'à 32, au-delà escalation. Variable non garanti. Le candidat, peu expérimenté, mélange l'enthousiasme, une prétention vue sur un forum, et la peur de « mal négocier ». Votre rôle n'est pas de la punir d'oser, ni de lui offrir le plafond par sympathie junior, ni de transformer l'appel en promesse irrévocable.\n\nLa négociation d'un premier CDI est souvent le premier acte économique que la personne mène seule. Elle peut sous-demander, sur-demander, ou coller un chiffre trouvé en ligne sans lien avec la politique du poste. Vous ne « formez » pas le candidat à maximiser son package. Vous ne profitez pas non plus de sa naïveté pour ancrer le plancher. Vous présentez le paquet réel, vous accordez ce qui est délégué, vous transmettez le reste. Cette posture est une obligation de loyauté professionnelle, distincte de l'obligation légale de non-discrimination (L. 1132-1) : les deux se cumulent. Un geste salarial « parce qu'elle est jeune et que ça passera » est illicite. Un refus de 34 k€ « parce que c'est une femme, elle négocie moins bien » l'est aussi.\n\nL'écrit du soir même n'est pas un luxe. Sans lui, la mémoire de Lina retiendra 34, et la vôtre 31. L'écart oral / écrit est le terreau des contestations sur l'engagement, y compris celles qui font glisser vers une discussion offre / promesse (F39588). Dater le retour d'escalation (« demain 12 h ») évite le vide du module 12. Refuser le mot « irrévocable » à l'oral n'est pas de la froideur : c'est rester dans votre rôle. Une promesse d'embauche n'est pas obligatoire ; vous n'en créez pas une par formule magique.\n\nRegardez les moments où le recruteur reformule la demande en chiffre, où il sépare fixe et variable, où il refuse le mot promesse, où il date son retour. Ce sont les gestes à copier. Les commentaires entre crochets ne se lisent pas au candidat."
        ),
        h("Méthode opérationnelle"),
        t(
          "Lisez le dialogue une première fois. Marquez E (enveloppe), X (hors enveloppe), P (risque promesse), L (risque légal). Puis faites l'exercice de fin de leçon sans recopier mot à mot."
        ),
        h("Exemple professionnel"),
        t(
          "Cas fictif, Banque des Vallées, chargé de clientèle. Recruteur junior. Lina au téléphone, 16 h 10."
        ),
        code(`SIMULATION 1 — Offre et négo, enveloppe 30-32 k€
Offre validée : 30 k€ brut annuel, variable d'agence selon plan, CDI,
Lyon Part-Dieu, prise de poste 16 novembre, délai d'acceptation 5 jours.
Enveloppe restante : jusqu'à 32 k€, pas de télétravail, pas de titre
« responsable ». Au-delà : RH + directeur.

RECRUTEUR. — Lina, bonjour. Nous souhaitons vous adresser une offre de
contrat de travail pour le poste de chargée de clientèle, agence de
Lyon Part-Dieu. Je vous en présente les éléments ; un écrit suivra
dans l'heure. Vous n'avez pas à répondre maintenant.
LINA. — Super… donc je suis prise ? C'est une promesse d'embauche ?
RECRUTEUR. — C'est une offre de contrat, selon notre modèle RH, valable
jusqu'à vendredi 18 h. Nous n'envoyons pas de « promesse unilatérale ».
Si vous acceptez par écrit, les RH établiront le contrat. [P évité]
LINA. — D'accord. C'est combien ?
RECRUTEUR. — Salaire fixe : 30 000 euros brut annuel. Variable d'agence
selon le plan que je joins, non garanti. Avantages : [mutuelle, tickets,
selon réel]. Horaires d'agence, samedis selon planning. Période d'essai :
formulation du contrat RH, je ne la réinvente pas à l'oral. Date visée :
16 novembre.
LINA. — Sur les sites on voit 34-36. Je voulais 34. Et le titre
responsable adjoint, ça ferait bien.
RECRUTEUR. — Je reformule : vous demandez 34 k€ de fixe et un titre
d'adjoint. Le titre n'est pas dans le poste offert, je ne peux pas
l'ajouter. Sur le fixe, ma délégation va jusqu'à 32, pas 34. Je peux
porter l'offre à 31 dès maintenant, c'est dans l'enveloppe. 32, je le
peux aussi si nous nous alignons. 34, je transmets, je ne vous le
confirme pas. [E puis X]
LINA. — Si je dis oui tout de suite à 31, c'est bloqué, irrévocable
pour vous ?
RECRUTEUR. — Si nous vous envoyons 31 et que vous acceptez par écrit,
nous entrons dans le process d'embauche RH. Je n'emploie pas le mot
irrévocable à l'oral. Je n'ai pas de « papier promesse » à vous faire.
LINA. — Bon, je voudrais quand même que vous demandiez 34, j'ai un
entretien ailleurs.
RECRUTEUR. — Je transmets 34 au directeur et aux RH ce soir. Je vous
réponds demain avant 12 h. En attendant, l'offre écrite part à 30,
ou à 31 si vous préférez que l'écrit reflète déjà le geste d'enveloppe.
Que préférez-vous voir par écrit ce soir ?
LINA. — Mettez 31, et notez 34 en demande.
RECRUTEUR. — Entendu. Écrit : offre 31 k€, valable jusqu'à vendredi 18 h.
Demande 34 : escalation, retour demain 12 h. Pas de titre adjoint.

LE LENDEMAIN, RH : refus 34, maintien 31, pas 32 (équité équipe à 30-32
mais Lina junior sans délégation).
RECRUTEUR (appel). — Lina, la demande à 34 n'est pas retenue. L'offre
reste 31 k€, mêmes éléments, délai vendredi 18 h. Je n'ai pas d'autre
geste salarial. Vous pouvez refuser ; dans ce cas nous clôturerons
proprement.
LINA. — Je… je vais relire. Merci d'avoir demandé.
RECRUTEUR. — Je reste disponible pour des questions de compréhension
du plan de variable, pas pour réouvrir 34 sans nouvelle décision RH.

COMMENTAIRE
E : 31 accordé, dans l'enveloppe. X : 34 et titre, pas d'improvisation.
P : refus répété de « promesse / irrévocable ».
Pas de mensonge « vous êtes la seule ». Pas de menace illicite.`),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Accorder 34 « on verra ». Offrir le titre adjoint pour compenser. Dire que 31 est une promesse irrévocable. Oublier l'écrit le soir même, Lina n'a plus que le souvenir de 34."
        ),
        h("Situations particulières"),
        t(
          "Si RH avait dit oui à 32 le lendemain : avenant d'offre, nouveau délai court, pas un texto. Si Lina accepte 31 puis se désiste : module 13, réactivation honnête, RH."
        ),
        h("Mise en pratique"),
        t(
          "Réécrivez uniquement les répliques du recruteur entre la demande de titre adjoint et la clôture de l'appel 1, en 6 répliques maximum, pour un autre poste (assistant ADV, enveloppe 26-28 k€, demande 30 et un véhicule)."
        ),
        h("Correction détaillée"),
        t(
          "« Le véhicule n'est pas dans l'offre, je ne l'ajoute pas. » « Je reformule : 30 k€ de fixe. » « Ma délégation va jusqu'à 28. Je peux porter l'écrit à 27 ou 28. 30, je transmets, je ne confirme pas. » « Pas de promesse unilatérale, un écrit d'offre avec délai. » « Que voulez-vous voir dans l'e-mail de ce soir : 27 ou 28, en attendant le retour sur 30 ? » « Je vous rappelle demain avant 12 h sur le 30 et le véhicule, après RH. » Le véhicule, souvent hors enveloppe junior, suit le même X."
        ),
      ],
    }),
    lesson({
      title: "Simulation 2 — Contre-offre, refus, désistement",
      description:
        "Dialogue complet : un profil expérimenté brandit une contre-offre ; le recruteur escalade, tient le plafond, gère un refus puis un retour, sans document hors RH.",
      minutes: 30,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez tenir une négo sous pression de contre-offre, proposer une escalation unique, accepter un refus, et réagir à un désistement ou à un retour, sans mensonge et sans promesse bricolée."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "La deuxième simulation met en scène Karim, non pas comme le profil au 1 éthique du module 11 — ce Karim-là n'a pas d'offre — mais un profil expérimenté fictif « Karim D. », conforme sur la grille, n°1 d'une autre campagne assurance-collectives, pour montrer la pression de statut. Alternative pédagogique : vous pouvez lire « Nadia » à la place si vous refusez de « réhabiliter » un nom. L'enjeu n'est pas le prénom. L'enjeu est : contre-offre à 38 k€, enveloppe 33-35, tentation du manager de « matcher coûte que coûte », tentation du junior de tout promettre, tentation de menacer avec une réserve.\n\nUne contre-offre n'oblige pas à s'aligner. S'aligner hors équité interne crée un problème d'équipe. Ne pas s'aligner crée un risque de refus. Les deux issues sont professionnelles si le process est net. Un refus n'est pas un échec personnel du recruteur. Un désistement après acceptation écrite est un incident RH. Un retour du candidat après refus se retraite comme une nouvelle offre possible, pas comme une revanche.\n\nLa pression d'un profil senior (« je veux un écrit de votre DRH, une promesse irrévocable ce soir ») teste votre cadre, pas votre légitimité d'âge. Vous ne commentez pas votre juniorité. Vous ne cédez pas un acte juridique pour « faire sérieux ». Service-Public F39588 (12/03/2026) et la Cass. soc. 21 septembre 2017 rappellent que la promesse unilatérale n'est pas un outil de négo : elle vaut contrat. Le modèle d'offre RH, avec délai, est l'instrument. La réserve du module 13 n'est pas une arme : vous ne dites pas « on a quelqu'un qui signera ce soir » si c'est faux, et vous ne dites pas à la réserve « c'est mort » tant que l'acceptation n'est pas écrite.\n\nVous verrez aussi le mauvais réflexe : « Signe cette promesse ce soir. » Le recruteur de la simulation refuse et oriente vers l'offre, le délai, l'escalation. Après un refus, la clôture écrite est une bonne pratique, distincte de l'absence d'obligation générale de motiver. Après un retour du candidat, on n'invente pas qu'il « a toujours été le seul » : on réouvre une offre, on actualise les réserves avec vérité."
        ),
        h("Méthode opérationnelle"),
        t(
          "Sous pression : ralentir, reformuler les chiffres, séparer l'émotion (« on va vous perdre ») de la délégation, écrire. Une seule escalation, un seul retour daté. Puis décision. Puis, si refus : message A ou C selon qu'une réserve existe encore (module 13)."
        ),
        h("Exemple professionnel"),
        t(
          "Dialogue fictif, 48 heures condensées."
        ),
        code(`SIMULATION 2 — Contre-offre et issues
Offre : 34 k€, enveloppe max 35, variable selon plan.
Candidat : Karim D., 12 ans d'assurance, grille conforme (autre campagne).
Réserve : une personne en scénario C jusqu'à jeudi.

JOUR 1, 9 h 30 — APPEL D'OFFRE
RECRUTEUR. — Nous vous adressons une offre de contrat, 34 k€ fixe,
éléments que je vais détailler, écrit dans l'heure, valable jusqu'à
jeudi 18 h. Pas une promesse unilatérale, un modèle RH.
KARIM. — 34 c'est léger. Là, mon employeur m'aligne 38 plus un titre.
Si vous ne faites pas 38, je reste. En plus vous êtes junior, je veux
un écrit de votre DRH, une promesse irrévocable ce soir.
RECRUTEUR. — Je note 38 et le titre. Ma délégation s'arrête à 35.
Je n'aligne pas 38 à l'oral. Je n'émets pas de promesse irrévocable.
Je transmets à la DRH et au manager, retour demain 11 h. L'offre écrite
part à 34, délai jeudi, sauf avenant. Sur le document de votre employeur,
ne me transmettez que ce que vous avez le droit de partager.
KARIM. — Si vous avez quelqu'un d'autre, dites-le, je n'aime pas les
jeux. Vous allez me ghoster ?
RECRUTEUR. — Nous avons un process avec une date. Je vous dis la vérité
de votre statut : vous avez une offre. Je ne commente pas nominativement
d'autres personnes. Je vous écris, je ne disparais pas. [ni mensonge
« unique », ni menace « on a une réserve »]

JOUR 2, 10 h 50 — RETOUR ESCALADE
Décision interne : 35 max, pas 38, pas de titre, équité d'équipe.
RECRUTEUR. — L'entreprise porte l'offre à 35 k€, avenant écrit aujourd'hui,
même délai jeudi 18 h. 38 n'est pas retenu. Pas de promesse unilatérale
distincte : l'avenant d'offre RH fait foi.
KARIM. — C'est non. Je reste. Vous n'avez pas été sérieux.
RECRUTEUR. — J'enregistre le refus de l'offre à 35. Merci du temps
consacré. Je vous envoie une confirmation écrite de clôture. Je ne
qualifie pas votre choix. [refus, pas de rancune]

JOUR 2, 14 h — MANAGER
« Aligne 38, on s'en fiche de l'équipe, et envoie une promesse. »
RECRUTEUR. — Je n'envoie pas de promesse. 38 sort de l'enveloppe et
casse l'équité ; RH a déjà tranché 35. Si vous voulez réouvrir 38,
c'est un arbitrage DRH formel, pas un texto. Karim a refusé : le
recontacter avec 38 après un non est possible seulement si RH le
décide, comme nouvelle offre, pas comme bricolage. La réserve est
en C jusqu'à jeudi : je ne lui dirai pas qu'elle est retenue.

JOUR 3 — KARIM RAPPELLE
KARIM. — L'38 n'était pas écrit. Je veux votre 35, mais une promesse
ce soir, et vous dites aux autres que c'est mort.
RECRUTEUR. — Si l'entreprise réouvre, ce sera une nouvelle offre de
contrat à 35, modèle RH, nouveau délai court. Toujours pas de promesse
unilatérale rédigée par moi. Sur les autres profils : nous appliquons
notre process (clôture ou information datée), nous ne mentons pas, nous
ne vous « vendons » pas une exclusivité fictive avant votre acceptation
écrite. Je confirme avec la DRH et je vous rappelle avant 16 h.

DRH : OK nouvelle offre 35, délai 48 h. Réserve : message C actualisé
« nous poursuivons une finalisation, retour lundi » — pas « c'est mort ».
Karim accepte par e-mail. ATS : acceptation écrite, contrat RH.
DPAE : l'employeur, avant l'embauche, circuit RH (F23107) — le junior
vérifie que le relais est pris, il ne « s'en occupe pas tout seul »
hors consigne.

COMMENTAIRE
Contre-offre : reformulée, pas matchée dans l'élan.
Plafond : 35, escalation unique.
Promesse : refusée trois fois.
Réserve : pas d'otage, pas de mensonge.
Refus puis retour : nouvelle offre, pas de falsification du passé.
Désistement n'a pas eu lieu ; s'il avait eu lieu après acceptation :
RH + réactivation honnête de la réserve (module 13).`),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Matcher 38 sans RH. Envoyer une « promesse » pour rassurer un senior qui méprise le junior. Dire à la réserve « c'est mort » alors que Karim n'a pas accepté. Dire à Karim « on n'a que vous » alors que C est en cours. Après refus, insulter (« trop gourmand, trop vieux »)."
        ),
        h("Situations particulières"),
        t(
          "Désistement le dimanche avant le lundi de signature : message RH, pas de syndic improvisé. Contre-offre discriminatoire de l'employeur actuel (pression liée à un critère protégé) : vous n'entrez pas dans ce récit, vous tenez votre offre, vous orientez la personne vers ses conseils, vous n'êtes pas avocat.\n\nDouble acceptation (le candidat a dit oui ailleurs aussi) : RH, faits, pas de menace."
        ),
        h("Mise en pratique"),
        t(
          "À partir de la simulation 2, rédigez (1) l'e-mail d'avenant d'offre à 35 k€, sans « promesse » ; (2) l'e-mail de clôture si le refus du jour 2 avait été définitif ; (3) la phrase à la réserve du jour 3. Trois textes courts."
        ),
        h("Correction détaillée"),
        t(
          "1) « Suite à nos échanges, nous portons notre offre de contrat de travail à 35 000 euros brut annuel, autres éléments inchangés, valable jusqu'à jeudi 18 h. Merci de votre acceptation écrite à [e-mail]. Le contrat sera établi par les RH. » 2) « Nous accusons réception de votre refus de l'offre. Nous clôturons ce process et vous remercions. » (pas d'obligation générale de motiver). 3) « Nous poursuivons une finalisation ; nous vous écrivons lundi au plus tard, comme convenu ; pas d'offre à vous adresser aujourd'hui. » Si Karim a accepté, lundi = clôture A de la réserve, honnête, pas « vous n'étiez pas assez senior »."
        ),
        note(
          "Les deux simulations sont fictives. En situation réelle : modèle RH, enveloppe, escalation, F39588. Ne jamais rédiger une promesse unilatérale sans RH/juridique. DPAE = obligation employeur, coordination RH (F23107). Vérification : 13/10/2026."
        ),
      ],
    }),
    quizLesson({
      title: "Quiz — Offre et négociation",
      description: "Fourchette, paquet, offre vs promesse, enveloppe, contre-offre, simulations.",
      passing_score: 70,
      minutes: 14,
      questions: [
        q({
          question:
            "Au 13/10/2026, selon le cadrage de ce cours (Service-Public / directive UE 2023/970) :",
          options: [
            "A. Indiquer le salaire dans l'annonce est déjà, de façon consolidée, une obligation interne française que l'on peut affirmer sans vérification.",
            "B. Ce n'est pas à affirmer comme obligation interne française déjà consolidée ; une directive européenne est en transposition ; une fourchette interne reste une bonne pratique / politique d'employeur.",
            "C. Il est interdit d'indiquer une fourchette, même en interne.",
            "D. Seul l'âge du candidat fixe le salaire.",
          ],
          correct: 1,
          explanation:
            "Ne pas anticiper la transposition. L'âge comme critère de salaire est illicite (L. 1132-1). Les fourchettes internes sont un outil de politique, pas une interdiction.",
        }),
        q({
          question: "Service-Public F39588 (vérifié le 12/03/2026) et la Cass. soc. 21 septembre 2017 indiquent notamment que :",
          options: [
            "A. Une promesse unilatérale de contrat de travail vaut contrat ; le retrait s'analyse en licenciement sans cause réelle et sérieuse ; une offre peut être retirée avant acceptation dans le délai laissé ou un délai raisonnable.",
            "B. Offre et promesse sont identiques, le vocabulaire est libre.",
            "C. Une promesse d'embauche est obligatoire avant tout CDI.",
            "D. Le junior doit rédiger une promesse irrévocable pour « coller » le candidat.",
          ],
          correct: 0,
          explanation:
            "C'est le cœur juridique du module. La promesse n'est pas obligatoire. Le junior ne rédige pas ce type d'acte hors RH/juridique.",
        }),
        q({
          question: "Un manager demande d'envoyer « une promesse pour bloquer, on se dédira si le budget passe pas ». Vous :",
          options: [
            "A. Envoyez le texto irrévocable.",
            "B. Refusez, expliquez le risque de qualification (F39588), proposez soit une offre RH avec budget validé, soit un scénario C honnête sans dire « retenu ».",
            "C. Envoyez la promesse mais en tout petit.",
            "D. Dites au candidat qu'il est embauché, sans papier.",
          ],
          correct: 1,
          explanation:
            "Bloquer par un acte mal qualifié est précisément le risque. L'oral « tu es embauché » n'est pas plus sûr. C honnête ou offre réelle.",
        }),
        q({
          question: "L'enveloppe du junior sert à :",
          options: [
            "A. Improviser n'importe quel chiffre pour conclure.",
            "B. Accorder des gestes prévus (ex. jusqu'au plafond) et à escalader par écrit au-delà, sans confirmer le hors délégation.",
            "C. Matcher toute contre-offre le jour même.",
            "D. Réduire le salaire des femmes pour rester dans le budget.",
          ],
          correct: 1,
          explanation:
            "Délégation + escalation = métier. Matcher hors cadre et discriminer sont des fautes.",
        }),
        q({
          question: "Dans la simulation 1, face à une demande de « promesse irrévocable », le recruteur :",
          options: [
            "A. Accepte pour rassurer un junior.",
            "B. Maintient le vocabulaire d'offre de contrat, modèle RH, délai d'acceptation écrite.",
            "C. Promet le titre d'adjoint en compensation.",
            "D. Accorde 34 k€ sans RH.",
          ],
          correct: 1,
          explanation:
            "C'est la conduite à copier. Titre et 34 k€ étaient hors enveloppe / hors poste.",
        }),
        q({
          question: "Une contre-offre à 38 k€ alors que le max interne est 35 :",
          options: [
            "A. Oblige légalement à s'aligner.",
            "B. Se reformule, s'escalade une fois, puis se décide ; le non-alignement est une issue possible, suivie d'une clôture propre si refus.",
            "C. Autorise une promesse unilatérale junior pour « gagner ».",
            "D. Se règle en menaçant le candidat avec l'âge ou la réserve.",
          ],
          correct: 1,
          explanation:
            "Pas d'obligation d'aligner. Pas de promesse bricolée. Pas de menace illicite ou mensongère.",
        }),
        q({
          question: "L'écrit d'offre et l'oral doivent :",
          options: [
            "A. Diverger : l'oral plus généreux « pour la magie », l'écrit plus prudent.",
            "B. Dire les mêmes éléments essentiels ; tout geste nouveau devient un avenant écrit.",
            "C. Être remplacés par un SMS « c'est bon ». ",
            "D. Inclure le mot promesse, c'est plus solennel.",
          ],
          correct: 1,
          explanation:
            "L'écart oral/écrit crée l'attente et le contentieux. Le SMS ne fige pas un paquet complet.",
        }),
        q({
          question: "Après un refus du candidat, le recruteur junior :",
          options: [
            "A. Inscrit « trop gourmand, trop vieux » dans l'ATS.",
            "B. Confirme la clôture par écrit, remercie, active le process réserves selon A/B/C honnête, sans rancune.",
            "C. Ghoste, par gêne.",
            "D. Envoie quand même une promesse pour le faire changer d'avis.",
          ],
          correct: 1,
          explanation:
            "Le refus est une issue. L'âge est illicite. Le ghosting et la promesse de dernière minute sont des fautes.",
        }),
        q({
          question: "La DPAE, dans ce module, est :",
          options: [
            "A. Une option du candidat.",
            "B. Une obligation de l'employeur avant l'embauche (cadrage F23107 / Urssaf) ; le junior coordonne avec les RH, il ne la « bricole » pas seul et ne la présente pas comme facultative.",
            "C. Un synonyme de promesse unilatérale.",
            "D. À faire uniquement si le salaire dépasse 40 k€.",
          ],
          correct: 1,
          explanation:
            "F23107 : DPAE obligatoire côté employeur, délai encadré (au plus tôt dans les 8 jours précédant l'embauche, avant prise de fonction / essai). Ce n'est pas un outil de négo.",
        }),
        q({
          question: "Quelle conduite globale est la plus conforme à ce module ?",
          options: [
            "A. Fourchette validée, offre modèle RH, pas de promesse solo, enveloppe puis escalation, écrits alignés, honnêteté vis-à-vis des réserves.",
            "B. Texto irrévocable, on verra le budget, on ment aux autres.",
            "C. Matcher toutes les contre-offres, l'équité d'équipe attendra.",
            "D. Annoncer 40 k€ all inclusive en mélangeant un variable max jamais versé.",
          ],
          correct: 0,
          explanation:
            "A résume les 7 leçons. B ignore F39588 et le module 13. C et D trompent sur la rémunération (esprit L. 5331-3) et cassent l'équité.",
        }),
      ],
    }),
  ],
};
