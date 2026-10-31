import { lesson, h, t, note, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 11,
  title: "Évaluer objectivement les candidats",
  description:
    "Noter à partir de faits, pondérer, utiliser des tests dans le cadre de L. 1221-8, reconnaître les biais, comparer et restituer au manager, puis trancher un cas à trois profils.",
  lessons: [
    lesson({
      title: "S'appuyer sur la grille et la pondération après l'entretien",
      description:
        "Transformer les notes de séance en évaluation argumentée, sans changer les règles en cours de campagne.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez terminer une grille à partir de faits, appliquer une pondération figée, documenter un doute, et distinguer une note d'une décision d'étape. Vous éviterez de « rééquilibrer » un critère pour faire gagner le candidat préféré."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "L'évaluation commence pendant l'entretien, mais elle se clôt après, dans un temps court, avant que la mémoire ne sélectionne. La grille préparée au module 9 n'a de valeur que si vous la remplissez avec les preuves recueillies, pas avec l'impression globale. Un candidat agréable et flou n'est pas « conforme » sur l'éthique commerciale. Un candidat rugueux qui a su dire non à une vente inadaptée n'est pas « insuffisant en relation client » par seul confort de séance.\n\nLa pondération est une politique interne, pas une obligation légale. Elle exprime que, pour ce poste, l'éthique et l'écoute pèsent plus que l'aisance à raconter un parcours. Une fois figée, elle s'applique à tous. Recalculer les poids après coup parce qu'un profil senior est faible sur un critère essentiel est une distorsion. Vous pouvez recommander une formation, un second entretien, une réserve. Vous ne changez pas le barème.\n\nLa note n'est pas une science. Aucune échelle à quatre crans n'a de validité magique. Elle a une fonction : forcer un choix, rendre les écarts visibles, préparer une comparaison. Si tous vos candidats sont à 3, soit le descripteur est trop large, soit vous évitez le conflit. Un 2 n'est pas une insulte. C'est « en retrait par rapport au besoin du poste, sur les preuves de cet entretien ».\n\nLes preuves insuffisantes se notent comme telles. Ce n'est pas la même chose qu'une preuve contraire. Un junior sans exemple de crédit n'est pas un junior qui vendrait à tout prix. Le premier appelle un situationnel ; le second, si le situationnel est mauvais, peut justifier un arrêt sur le critère éthique. Confondre les deux, c'est écarter des profils ouverts au poste ou, à l'inverse, minimiser un risque.\n\nL'évaluation reste soumise au droit. Vous ne « rattrapez » pas une note avec l'âge, le sexe, l'origine, l'apparence, la santé, la famille (L. 1132-1). Vous ne faites pas dire à la grille ce que L. 1221-6 interdit de demander. Si un critère s'est révélé mal écrit, vous le corrigez pour la campagne suivante, pas en cours de route au détriment d'un candidat déjà vu."
        ),
        h("Méthode opérationnelle"),
        t(
          "Dans les dix minutes : relire les faits par critère, attribuer la note selon le descripteur, multiplier par le poids, totaliser. Écrire deux lignes de synthèse : forces liées au poste, écarts liés au poste, suite proposée.\n\nRègle : si un critère essentiel est à 1 (insuffisant) avec preuves, la recommandation ne peut pas être « offrir le poste » sans argument contraire documenté et validé par les RH (exigence réelle mal calibrée, aménagement, second regard). Un junior ne tranche pas seul un override.\n\nDouble notation recruteur / manager : ne pas fusionner les notes avant le débrief. L'écart est une information. On le discute sur les faits."
        ),
        h("Exemple professionnel"),
        t(
          "PME logistique, cariste préparateur. Pondération : sécurité (3), cadence (2), travail d'équipe (1). Un candidat très sympathique, anecdotes riches, mais a décrit un contournement de consigne « pour aller plus vite ». Note sécurité = 1, malgré le feeling. Recommandation : arrêt. Le manager proteste : « on manque de monde ». Le recruteur maintient le fait. Recruter en sachant un contournement de sécurité n'est pas un choix de volume, c'est un risque assumé par l'employeur ; le junior n'a pas à l'effacer de la grille."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Mettre 3 partout « on verra plus tard ». Plus tard, il n'y a plus de faits.\n\nAjouter un critère « motivation » non défini pour sauver un total.\n\nDemander au manager sa note avant d'écrire la sienne. Alignement automatique.\n\nUtiliser des décimales (2,75) pour éviter d'assumer un cran."
        ),
        h("Situations particulières"),
        t(
          "Candidat interne : mêmes descripteurs. La connaissance du site n'ajoute un point que si c'était un critère écrit (connaissance d'un outil interne), pas par connivence.\n\nÉgalité de notes : la grille peut conclure à une égalité. Ce n'est pas un échec. La suite (essai métier informé, second entretien, références cadrées) tranche, pas un critère illicite de départage.\n\nAménagement d'entretien : vous notez la compétence, pas la fluidité du canal."
        ),
        h("Mise en pratique"),
        t(
          "Critère éthique, poids 3, échelle 1-4. Faits : « a dit qu'en cas d'objectif non atteint, il proposerait quand même le crédit, le client n'est pas obligé de dire oui ». Quelle note, quelle recommandation d'étape, quelle phrase de synthèse ? Le manager veut 3 « parce qu'il est honnête d'avoir dit ça »."
        ),
        h("Correction détaillée"),
        t(
          "Note : 1, insuffisant. Le descripteur « conforme » exigeait que l'intérêt du client et la règle priment. Ici, la pression d'objectif prime. L'honnêteté de l'aveu est utile (vous avez une preuve, pas un doute) ; elle n'est pas une compétence éthique. Recommandation : arrêt ou, au minimum, non-poursuite sans second regard RH/conformité. Phrase : « Situationnel crédit : priorise l'objectif commercial sur l'adéquation client ; preuve directe, critère essentiel. » Vous ne montez pas à 3 pour récompenser la franchise."
        ),
      ],
    }),
    lesson({
      title: "Tests et méthodes d'aide au recrutement : cadre légal, sans magie",
      description:
        "Informer préalablement, vérifier la pertinence, garder la confidentialité, et ne pas attribuer aux tests une validité que vous ne pouvez pas démontrer.",
      minutes: 24,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez quand un test peut s'inscrire dans un process, quelles obligations posent les articles L. 1221-8 et L. 1221-9, et ce qu'un recruteur junior n'a pas le droit d'inventer sur la « scientificité » d'un outil propriétaire."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Dès qu'une méthode ou une technique d'aide au recrutement est utilisée à l'égard d'un candidat, deux obligations légales s'appliquent. L'article L. 1221-8 : le candidat est expressément informé, préalablement à leur mise en œuvre, des méthodes et techniques utilisées à son égard ; les résultats obtenus sont confidentiels. L'article L. 1221-9 (et déjà L. 1221-8 sur ce point) : les méthodes et techniques d'aide au recrutement ou d'évaluation doivent être pertinentes au regard de la finalité poursuivie. Un test « pour voir », sans lien avec les aptitudes du poste, n'est pas conforme à cette exigence de pertinence.\n\nL'information préalable n'est pas un bandeau flou « des tests pourront être réalisés ». C'est une information compréhensible, avant l'épreuve : nature de l'exercice, finalité (évaluer telle aptitude liée au poste), caractère confidentiel des résultats. Un cas pratique d'agence, un essai sur un logiciel, une mise en situation écrite, un test de langue si la langue est exigée par le poste : ce sont des méthodes. Elles tombent dans ce cadre. Un entretien classique est déjà une méthode d'évaluation ; dans la pratique, l'information se fait par la convocation et l'ouverture. Plus l'outil est spécifique (questionnaire, épreuve chronométrée, outil éditeur), plus l'information préalable doit être explicite.\n\nCe que ce cours ne fait pas : attribuer une validité scientifique chiffrée à un test propriétaire (personnalité, « potentiel », graphologie, métier de l'éditeur X ou Y). Un recruteur junior n'a pas à affirmer qu'« un tel outil prédit la performance ». Beaucoup d'outils circulent avec un discours commercial. La loi vous demande la pertinence au regard du poste, pas de relayer une brochure. La graphologie, les questionnaires de personnalité interprétés sans compétence, les mises en situation humiliantes ou sans rapport, sont à écarter. En cas de doute, vous n'introduisez pas l'outil ; vous en référez aux RH.\n\nLes épreuves les plus défendables pour un junior sont celles qui ressemblent au travail : expliquer une offre simple, prioriser une file, rédiger un message client, utiliser un tableur si le poste l'exige. Même alors : information préalable, mêmes conditions pour les candidats du même process, aménagement possible, résultats confidentiels, conservation selon la politique interne et le RGPD. Un score n'est pas une décision automatique. Il s'ajoute à la grille, il ne la remplace pas, et il ne sert pas à dissimuler un critère illicite (« le test a dit non » alors que le manager parlait de l'âge).\n\nLes résultats sont confidentiels (L. 1221-8). Ils ne se commentent pas à la machine à café. Le candidat peut, dans le cadre du RGPD, exercer des droits sur ses données ; vous orientez vers le process interne, vous ne promettez pas un « debrief de personnalité » que vous n'êtes pas en mesure de faire."
        ),
        h("Méthode opérationnelle"),
        t(
          "Avant d'ajouter une épreuve : quel aptitude du poste ? L'épreuve y ressemble-t-elle ? Tous les candidats du même stade la passent-ils ? Qui informe, qui corrige, qui conserve ? Quel aménagement possible ?\n\nTexte d'information, avant l'épreuve, dans la convocation ou un e-mail dédié. Pas d'épreuve « surprise » le jour J, sauf exercice clairement annoncé comme faisant partie de l'entretien et décrit.\n\nCorrection : barème écrit à l'avance, comme la grille. Le manager ne change pas le barème après avoir vu la copie du candidat interne.\n\nInterdiction opérationnelle pour le junior : acheter ou faire passer un test de personnalité « trouvé en ligne », interpréter un profil psychologique, utiliser un outil non validé par l'entreprise."
        ),
        h("Exemple professionnel"),
        t(
          "Startup, recrutement d'un support client. Épreuve de 25 minutes : trois tickets fictifs à prioriser et une réponse écrite au ticket moyen. E-mail la veille : « Vous serez évalué sur la priorisation et la clarté d'une réponse client, en lien avec le poste. Durée 25 minutes. Résultats confidentiels, communiqués aux seuls décideurs du recrutement. » Pas de test de personnalité. Un candidat demande un temps supplémentaire : aménagement accordé, mêmes tickets, même barème, mention de l'aménagement de modalité, pas du motif médical."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Faire passer un test « pour enrichir le dossier » sans savoir ce qu'on en fera.\n\nAnnoncer au candidat son « type de personnalité » à partir d'un questionnaire amateur.\n\nRéserver le cas pratique au candidat dont on doute, et en dispenser celui que l'on aime : inégalité de méthode.\n\nLaisser les copies sur un drive ouvert à tout le service."
        ),
        h("Situations particulières"),
        t(
          "Test de langue : pertinent seulement si la langue est une exigence réelle du poste, appliquée à tous les candidats concernés, pas comme filtre d'origine.\n\nAssessment center : hors autonomie d'un junior. Cadre RH, information préalable, rôles d'observateurs formés, pas de jeux humiliants.\n\nCandidat qui refuse un test : vous ne forcez pas. Vous documentez, vous voyez avec les RH si l'épreuve est indispensable et pertinente. Le refus n'autorise pas une remarque discriminatoire."
        ),
        h("Mise en pratique"),
        t(
          "Le manager veut « un MBTI ou un truc de personnalité, tout le monde fait ça, c'est scientifique ». Rédigez votre réponse (e-mail interne) en distinguant obligation légale et bonne pratique, sans affirmer de validité chiffrée."
        ),
        h("Correction détaillée"),
        t(
          "Vous rappelez L. 1221-8 (information préalable, confidentialité) et L. 1221-9 / pertinence. Vous indiquez que vous n'êtes pas en mesure d'affirmer une validité scientifique d'un outil propriétaire ou d'un questionnaire de personnalité grand public, et que ce n'est pas le rôle d'un recruteur junior que d'interpréter un profil psychologique. Vous proposez une épreuve de mise en situation liée au poste (priorisation, explication d'offre, message client), informée, barèmée, confidentielle. Si l'entreprise a déjà un outil RH homologué, son usage suit la procédure interne, pas l'improvisation du manager."
        ),
        note(
          "Ne citez pas de coefficient de validité, d'étude ou de marque comme preuve. Si un outil est imposé par votre employeur, appliquez la procédure interne et le cadre L. 1221-8 / L. 1221-9. Vérification des textes : 13/10/2026."
        ),
      ],
    }),
    lesson({
      title: "Reconnaître les biais : halo, confirmation, similarité",
      description:
        "Nommer trois biais fréquents, voir comment ils naissent dès le CV, et installer des contre-mesures simples, sans psychologie de salon.",
      minutes: 22,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez définir le biais de halo, le biais de confirmation et le biais de similarité, les repérer dans une grille ou un débrief, et appliquer des contre-mesures opérationnelles (faits, même questions, notes séparées) sans prétendre « annuler » tout biais."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Évaluer objectivement ne signifie pas devenir une machine. Cela signifie réduire les distorsions les plus connues, parce qu'elles écartent des personnes pour de mauvaises raisons et en recrutent d'autres pour de mauvaises raisons. Trois mécanismes reviennent constamment en recrutement. Ils ne sont pas des diagnostics médicaux. Ce sont des erreurs de jugement professionnelles, documentées par la pratique, que le cadre légal ne nomme pas une par une, mais que le principe de non-discrimination (L. 1132-1) rend particulièrement dangereuses lorsqu'elles s'accrochent à l'âge, au sexe, à l'origine, à l'apparence, au nom, au lieu de résidence.\n\nLe biais de halo : une caractéristique saillante colore tout le reste. Un diplôme prestigieux, une aisance orale, une recommandation interne, un « beau parcours », et soudain l'éthique, la priorisation, les écrits deviennent « sûrement bons ». L'inverse existe : un trouble de parole, un costume jugé, un CV avec un trou, et tout est tiré vers le bas. Le halo n'est pas illégal en soi ; il le devient lorsqu'il s'appuie sur un critère protégé, et il est toujours une mauvaise pratique lorsqu'il remplace les preuves.\n\nLe biais de confirmation : vous vous faites une idée au CV ou à la première minute, puis vous ne cherchez plus que ce qui la confirme. Questions faciles pour le candidat « bon », questions pièges pour l'autre. Notes sélectives. Le guide structuré existe précisément pour limiter cela. Si vous déviez du guide selon le feeling, vous réinstallez le biais.\n\nLe biais de similarité (affinité) : vous valorisez ce qui vous ressemble — école, humour, sport, origine sociale, façon de parler. « On pourrait travailler ensemble » devient un critère. Or L. 1221-6 exige le lien avec l'emploi, pas le confort du recruteur. Un manager qui veut « quelqu'un comme nous » doit être ramené à des comportements de poste. La similarité est aussi un vecteur classique de discrimination indirecte.\n\nAucune check-list n'élimine ces biais à 100 %. Les contre-mesures utiles sont prosaïques : critères écrits avant, mêmes questions d'ancrage, notes de faits, grilles séparées avant débrief, un second regard lorsque le verdict est trop rapide, vigilance sur les adjectifs (« brillant », « pas le look »). La formation que vous suivez ici est une contre-mesure. Elle ne vous place pas au-dessus du biais : elle vous oblige à le chercher dans votre propre dossier."
        ),
        h("Méthode opérationnelle"),
        t(
          "Auto-contrôle après chaque entretien : quelle a été ma première impression, en cinq mots ? Ai-je des faits contraires à cette impression dans la grille ? Si non, je relance ma mémoire : ai-je seulement confirmé ?\n\nInterdire dans les débriefs les phrases sans preuve : « pas le fit », « trop différent », « un de chez nous ». Exiger un fait par critère.\n\nSi vous vous découvrez un lien de similarité fort (même école, même associatif), le dire au débrief : « risque d'affinité, s'en tenir aux faits ». Ce n'est pas un aveu honteux, c'est une hygiène.\n\nNe jamais « corriger » un biais en inversant : écarter un profil qui vous ressemble par pur contre-biais n'est pas plus professionnel, et peut aussi discriminer."
        ),
        h("Exemple professionnel"),
        t(
          "Cabinet, mission comptable junior. Une candidate issue de la même école que le consultant obtient un halo « excellente ». Le second entretien, mené par un autre consultant avec le même guide, révèle une impossibilité à expliquer un rapprochement bancaire. Le premier consultant avait noté 4/4 en technique sans preuve. Correction : la grille du premier est reprise ; le critère technique passe à 2. Le match école n'est pas un critère. Le client est informé des faits, pas de l'école comme argument de vente."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Croire que « je n'ai pas de biais » parce que vous êtes de bonne foi. La bonne foi n'est pas une méthode.\n\nUtiliser l'anti-halo comme prétexte : « les diplômés de grandes écoles, je les note plus dur ». Ce n'est pas de l'équité.\n\nLaisser le manager dire « elle me rappelle ma fille » sans recadrer.\n\nConfondre vitesse de parole et compétence, surtout en visio."
        ),
        h("Situations particulières"),
        t(
          "Candidat recommandé par un dirigeant : halo maximal. Traitez le CV comme les autres, même guide, même test informé. Documentez. Si le dirigeant impose le recrutement, ce n'est plus une évaluation ; c'est une décision d'employeur, qui reste soumise au droit de la non-discrimination.\n\nCandidat en reconversion : risque d'anti-halo (« pas le bon logo »). Les preuves transférables et le situationnel pèsent.\n\nPanel : le plus senior parle en premier au débrief = alignement. Inversez : le plus junior parle en premier sur les faits."
        ),
        h("Mise en pratique"),
        t(
          "Notes brutes : « Super guy, on a le même humour, école prestigieuse, un peu léger sur le cas crédit mais ça s'apprend, look nickel, je le vois bien à l'agence. » Réécrivez une évaluation professionnelle en nommant les biais présents et ce qui manque."
        ),
        h("Correction détaillée"),
        t(
          "Biais : similarité (humour, projection), halo (école, look — le look est de plus illicite comme critère, L. 1132-1 apparence), confirmation probable (le cas crédit, critère essentiel, est minimisé). Il manque : faits STAR, note d'éthique, pédagogie, priorisation. Version professionnelle : « Aisance relationnelle en séance. Cas crédit incomplet : à reprendre comme écart sur critère essentiel, non comme détail formable par défaut. École et humour hors critères. Apparence hors grille. Recommandation : ne pas poursuivre sur la seule impression ; exiger les preuves manquantes ou arrêter. »"
        ),
      ],
    }),
    lesson({
      title: "Comparer les candidats sans changer les règles",
      description:
        "Construire un tableau de comparaison, traiter les égalités, et résister aux départs de comparaison illicites ou impressionnistes.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez comparer deux ou trois personnes sur les mêmes critères, expliquer un écart par des faits, et refuser un départage par l'âge, le sexe, la « proximité culturelle » ou la vitesse de décision du manager."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "La comparaison est le moment où les biais se concentrent : on ne juge plus une personne par rapport au poste, on juge des personnes les unes par rapport aux autres, souvent avec fatigue et urgence. La bonne ancre reste le poste. Un candidat n'est pas « moins bien que l'autre » en général. Il est plus ou moins proche des exigences écrites, sur des preuves de même nature. Si l'un a eu un situationnel et l'autre non, vous ne comparez pas. Si l'un a été vu 70 minutes et l'autre 30, vous le signalez : la comparaison est fragile.\n\nUn tableau (critères en lignes, candidats en colonnes, faits sous les notes) force le regard. Sans tableau, le dernier vu gagne souvent (biais de récence) ou le premier (biais de primauté). Ni l'un ni l'autre n'est un critère d'emploi. La pondération aide à ne pas faire gagner « celui qui a le plus de 4 sur des critères mineurs ».\n\nL'égalité n'est pas un échec du process. Elle signifie que, sur les preuves actuelles, deux personnes sont employables au regard du besoin. Les sorties légitimes : un second entretien ciblé sur l'écart restant, une épreuve métier informée, des références cadrées (avec information du candidat, questions professionnelles). Les sorties illégitimes : « on prend l'homme, l'équipe est déjà trop féminine » ; « la plus jeune, elle coûtera moins » ; « celui qui habite à côté ». Sexe, âge, lieu de résidence : L. 1132-1.\n\nComparer n'autorise pas à fusionner des données hors finalité. Vous ne créez pas un classement public. Vous préparez une shortlist. Les candidats non retenus à ce stade restent des personnes dont les données sont confidentielles. Vous ne dites pas à l'un ce que l'autre a « moins bien réussi » de façon identifiable.\n\nEnfin, la comparaison n'efface pas un KO éthique. Un profil brillant et un profil conforme : si le brillant a un 1 sur un critère essentiel de risque, il ne « gagne » pas par halo. C'est tout l'intérêt d'avoir figé les règles avant."
        ),
        h("Méthode opérationnelle"),
        t(
          "Remplir le tableau le jour des derniers entretiens, à froid, avec les grilles déjà closes. Une ligne « qualité des preuves » (solide / moyenne / insuffisante) pour ne pas comparer un roman et un silence.\n\nRéunion de comparaison : 30 minutes, faits d'abord, notes ensuite, décision d'étape en dernier. Le junior présente le tableau, le manager discute les écarts métier, le RH tranche les points de droit.\n\nSi le manager introduit un critère nouveau (« il faut quelqu'un de mobile le soir » alors que ce n'était pas dans la fiche), soit la fiche était incomplète et le critère, s'il est professionnel, doit être vérifié auprès de tous les finalistes encore en lice, soit c'est un caprice tardif : vous le refusez comme règle rétroactive."
        ),
        h("Exemple professionnel"),
        t(
          "ETI, deux finalistes pour un poste d'acheteur. A : très bon sur négociation, faible sur suivi administratif. B : solide partout, moins spectaculaire en oral. Le directeur veut A « parce qu'il a de la gueule ». Le tableau montre le suivi (poids 2) en retrait chez A, avec un exemple d'oubli de contrat. Décision : second entretien ciblé sur le suivi pour A, ou choix de B si le risque admin est non négociable. Pas de choix sur l'oralité seule."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Présenter d'abord « mon favori », puis les autres comme faire-valoir.\n\nMoyenne arithmétique sans pondération, puis étonnement que l'éthique pèse peu.\n\nDire au candidat B que A est « plus senior » comme unique motif, alors que le vrai motif est un feeling. Restez factuel ou, si la politique est de ne pas motiver, ne motivez pas de façon fausse."
        ),
        h("Situations particulières"),
        t(
          "Un seul candidat reçu : vous comparez au poste, pas à un idéal fantôme. L'absence de concurrent n'oblige pas à recruter.\n\nCandidat interne vs externe : mêmes lignes du tableau. La connaissance interne est un fait si elle réduit le temps d'apprentissage d'un outil du poste, pas un droit de priorité automatique, sauf accord ou politique interne claire et non discriminatoire.\n\nDiscrimination demandée par le client d'un cabinet : vous refusez. Le cabinet n'a pas à « comparer selon le souhait illicite »."
        ),
        h("Mise en pratique"),
        t(
          "Le manager : « Les deux se valent, on prend celui qui est déjà en CDI, l'autre est en chômage, ce sera plus stable, et puis il habite plus près. » Que répondez-vous, en distinguant droit et bonne pratique ?"
        ),
        h("Correction détaillée"),
        t(
          "La précarité / vulnérabilité économique et le lieu de résidence sont des critères protégés (L. 1132-1). Ce ne sont pas des critères de départage. Obligation légale : ne pas écarter pour ces motifs. Bonne pratique : revenir au tableau de compétences. Si une exigence de présence sur site est réelle, elle se vérifie par les horaires et le lieu de travail du poste, pour tous, pas par l'adresse comme proxy. La « stabilité » supposée du CDI n'est pas une preuve d'aptitude."
        ),
      ],
    }),
    lesson({
      title: "Restituer l'évaluation au manager",
      description:
        "Présenter des faits, des notes et une recommandation d'étape, sans se substituer au décideur ni valider un critère illicite.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez structurer une restitution orale et écrite de 10 minutes, défendre un écart de notes, et refuser de transformer la restitution en chambre d'écho des préférences illicites du manager."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le manager est généralement le décideur métier. Le recruteur n'est pas un secrétaire de séance. Il est le gardien du process, des preuves et du droit. La restitution sert à permettre une décision éclairée, pas à « vendre » un candidat comme un produit, ni à saboter un profil qui vous a déplu. Vous présentez : le besoin rappelé (une minute), les preuves par critère, les notes, les risques professionnels, la recommandation d'étape. Vous n'annoncez pas une embauche. Vous n'humiliez pas un candidat absent.\n\nUne restitution argumentée réduit les allers-retours et les revirements. Une restitution d'adjectifs (« super », « bizarre », « pas le feu ») force le manager à décider au feeling, puis à vous en faire porter la responsabilité. Si vous n'êtes pas d'accord avec le manager, vous le dites sur des faits, dans cette réunion, pas plus tard dans un couloir. Le désaccord se traite plus largement au module 13. Dès l'évaluation, la règle est : pas de silence sur un 1 éthique, pas d'amplification d'un défaut mineur.\n\nLe support écrit (tableau + synthèses) reste. L'oral s'envole. Si le manager dit « OK on prend X » alors que la grille de X est fragile, vous faites répéter la décision et ses motifs professionnels, et vous les tracez. Cette trace protège l'entreprise en cas de contestation : elle montre des critères d'emploi, ou au contraire elle révèle qu'il faut encore recadrer.\n\nVous ne restituez pas des données hors finalité. Pas de récit sur la famille, la santé, le logement, les photos. Si le manager les demande, vous rappelez L. 1221-6 et L. 1132-1. La restitution est aussi un acte RGPD : destinataires limités, contenu adéquat, pas de transfert à toute l'équipe « pour avis »."
        ),
        h("Méthode opérationnelle"),
        t(
          "Ordre de parole : besoin, candidat 1 faits/notes, candidat 2, comparaison, risques, recommandation, décision d'étape, message aux candidats (qui écrit, quand). Durée : 10 à 20 minutes, pas une heure de souvenirs.\n\nDocuments : grilles, tableau, CR. Pas de captures d'écran de réseaux.\n\nSi le manager n'était pas en entretien : vous ne dissimulez pas les limites de ce que vous avez vu. Vous proposez un entretien manager avant toute offre.\n\nClôture : « Décision du jour = … Motifs professionnels = … Prochaine communication candidat = date. » Écrit dans l'outil le jour même."
        ),
        h("Exemple professionnel"),
        t(
          "Industrie, restitution de 12 minutes pour un technicien méthodes. Le recruteur ouvre sur les 4 critères. Il lit deux faits d'écart sur la sécurité pour le candidat préféré du chef d'atelier. Le chef dit « on formera ». Le recruteur : « On peut former un outil. Un contournement déjà raconté comme normal est un risque actuel. Ma recommandation est un second entretien sécurité, pas une offre cette semaine. » Décision tracée : second entretien, pas d'offre."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Lire le CR mot à mot pendant vingt minutes. Le manager décroche.\n\nCacher un point faible pour « faire plaisir » puis le découvrir après l'offre.\n\nParler en premier de votre favori avec un sourire, des autres avec un ton plat.\n\nAccepter « prends celui que tu veux » : ce n'est pas une décision métier, c'est un désengagement. Vous ramenez le manager aux critères."
        ),
        h("Situations particulières"),
        t(
          "Manager distant, restitution visio : envoyer le tableau avant, même ordre, enregistrer uniquement si politique interne et information des participants.\n\nPlusieurs managers divergents : faits au centre, pas vote à main levée sur le feeling. Un décideur nommé.\n\nPression pour « remplir le poste avant la fin du mois » : le délai se gère en process (vivier, temporaire) pas en baissant un critère de sécurité ou d'éthique, ni en discriminant."
        ),
        h("Mise en pratique"),
        t(
          "Rédigez une restitution orale de 8 à 10 phrases pour un unique candidat « conforme sauf pédagogie en retrait », recommandation : second entretien avec mise en situation informée. Le manager n'a pas le temps."
        ),
        h("Correction détaillée"),
        t(
          "« Besoin : chargé de clientèle, éthique et écoute essentielles. Candidat reçu 55 minutes, guide commun. Écoute : exemple d'appel, résultat 4/5, note 3. Éthique : situationnel crédit, a proposé une alternative et un refus, note 3. Pédagogie : explication encore jargonnante, note 2. Total pondéré : conforme avec écart pédagogie. Je ne recommande pas l'offre aujourd'hui. Je recommande 25 minutes de mise en situation “expliquer un livret”, informée au préalable (L. 1221-8). Si vous n'avez pas le temps, nous reportons la décision, nous ne compensons pas par un feeling. Communication au candidat : jeudi, sans verdict d'embauche. »"
        ),
      ],
    }),
    lesson({
      title: "Exercice : trois candidats, une recommandation argumentée",
      description:
        "Noter trois profils fictifs sur la même grille, choisir une suite de process, puis comparer avec la correction.",
      minutes: 30,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous mettrez en pratique grille, pondération, biais et restitution sur un cas complet. Vous formulerez une recommandation d'étape (pas une fiction d'offre) et vous la justifierez par des faits."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Dans une campagne réelle, vous n'aurez jamais toute l'information. L'exercice accepte cette limite : vous décidez à partir des preuves ci-dessous, comme après trois entretiens semi-structurés de 55 minutes, sans test complémentaire encore prescrit. Le poste est celui du guide : chargé de clientèle, Banque des Vallées, agence de détail. Pondération figée : écoute/relation (3), éthique et cadre (3), pédagogie (2), priorisation (2), travail d'équipe (1), apprentissage/motivation pour le poste (1). Échelle 1 à 4. Un 1 sur l'éthique bloque l'offre.\n\nVotre travail n'est pas de trouver « le meilleur humain ». Il est de recommander une suite professionnelle : poursuite vers le manager / second entretien ciblé / réserve / arrêt, éventuellement un ordre de shortlist, sans mensonge aux candidats (traité au module 13). Vous devez expliciter les biais qui vous tirent (halo d'expérience, similarité, anti-halo junior).\n\nIl n'y a pas de statistique cachée ni de solution unique magique. Il y a des erreurs graves : ignorer un 1 éthique, départager par l'âge ou la famille, inventer des preuves absentes du dossier, attribuer à un test non passé une validité. La correction détaille une recommandation défendable. La vôtre peut différer sur un point de shortlist si vos notes respectent les descripteurs. Elle ne peut pas différer sur le droit."
        ),
        h("Méthode opérationnelle"),
        t(
          "Lisez les trois fiches. Notez seul, sans regarder la correction. Calculez un total pondéré (note × poids, somme). Rédigez 12 à 20 lignes : notes, biais possibles, recommandation, message d'étape (idée, pas encore l'e-mail du module 12). Puis lisez la correction."
        ),
        h("Exemple professionnel"),
        t(
          "Les trois dossiers sont fictifs. Aucun n'est un portrait de personne réelle. Les âges sont indiqués ici uniquement pour que vous pratiquiez à les ignorer comme critères ; ils n'entrent pas dans la grille."
        ),
        code(`POSTE : chargé de clientèle, banque de détail — cas fictif
Grille : 1 insuffisant | 2 en retrait | 3 conforme | 4 dépasse
Pondération : Écoute 3 · Éthique 3 · Pédagogie 2 · Priorisation 2 · Équipe 1 · Apprentissage 1
(max 48)

CANDIDAT A — « Lina » — 18 mois centre d'appels énergie, stage magasin
Faits d'entretien :
- Écoute : appel facture, reformulation, échéancier, mail, enquête 4/5. Pas d'exemple bancaire.
- Éthique : pas d'exemple passé de vente à risque. Situationnel crédit : « je ne partirais
  pas sur un crédit si le reste à vivre est tendu ; j'alerte le directeur ; je propose
  une épargne ou un report ». N'invente pas un produit.
- Pédagogie : explique un forfait énergie simplement ; cherche ses mots sur un livret.
- Priorisation : file magasin, caisse d'abord, promesse 5 min tenue.
- Équipe : s'appuie sur le senior pour un seuil, sans s'effacer.
- Apprentissage : questions précises sur la formation produits ; dit son manque bancaire.
Âge indiqué sur CV : 24 ans. À ignorer.

CANDIDAT B — « Karim » — 12 ans conseil assurance
Faits d'entretien :
- Écoute : exemple sinistre, « j'ai laissé parler ». N'a pas reformulé le besoin.
  A monopolisé 8 minutes de parcours malgré cadrage. A commenté l'âge du recruteur.
- Éthique : situationnel crédit : « s'il veut le crédit, c'est sa responsabilité,
  moi je présente, après il signe ». Peu de traces écrites (« c'est le back-office »).
- Pédagogie : très fluide à l'oral, vocabulaire pro, client peu associé à la reformulation.
- Priorisation : discours général « je gère 80 dossiers », pas d'arbitrage concret.
- Équipe : se projette plutôt en indépendant ; peu d'exemple de binôme.
- Apprentissage : motive le switch banque par « plus noble » et l'ennui, peu le métier agence.
Âge indiqué : 41 ans. À ignorer. Halo possible : ancienneté.

CANDIDAT C — « Nadia » — 3 ans boutique bancaire concurrente
Faits d'entretien :
- Écoute : STAR client mécontent sur une carte, reformulation, geste commercial validé,
  suivi J+2. Clair.
- Éthique : STAR « on me poussait un produit de la semaine » : a documenté l'inadéquation,
  a proposé un produit plus simple, a tenu le reporting. Situationnel crédit : refuse
  si indicateurs, escalade, trace.
- Pédagogie : explique un PEL de façon encore un peu jargonnante, corrige après relance.
- Priorisation : samedi matin, file + RDV, a tenu le RDV et fait prendre un ticket ;
  un client a râlé, elle l'a informé du délai.
- Équipe : binôme sur les relais pause, un désaccord avec un collègue recadré en privé.
- Apprentissage : questions sur les délégations de l'agence et les 90 premiers jours.
Le directeur a posé une question sur les enfants ; recadrage junior. Nadia n'a pas
répondu. N'entre PAS dans la grille. Âge indiqué : 27 ans. À ignorer.`),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Choisir Karim « parce qu'il en jette ». Écarter Lina « trop jeune ». Pénaliser Nadia « parce qu'il y a eu un incident enfants ». Moyenner tout le monde à 3 pour ne pas se tromper."
        ),
        h("Situations particulières"),
        t(
          "Si votre manager réel, sur ce cas, exige Karim malgré le situationnel crédit : vous ne falsifiez pas les notes. Vous documentez le désaccord (module 13). Si l'on vous demande un test de personnalité pour « sauver » Karim : L. 1221-8 / pertinence, pas de magie."
        ),
        h("Mise en pratique"),
        t(
          "Attribuez les 6 notes pour A, B et C. Calculez les totaux pondérés. Rédigez : (1) qui vous proposez en premier entretien manager ou en shortlist, (2) qui en réserve, (3) qui vous n'avancez pas, (4) un biais que vous avez dû contrecarrer, (5) ce que vous dites au manager en cinq phrases. N'inventez pas de faits."
        ),
        h("Correction détaillée"),
        t(
          "Notes défendables (les vôtres peuvent bouger d'un cran si le descripteur est respecté, pas l'éthique de B) :\n\nLina : Écoute 3, Éthique 3 (situationnel solide, pas de preuve contraire), Pédagogie 2, Priorisation 3, Équipe 3, Apprentissage 4. Total : 9+9+4+6+3+4 = 35/48. Preuves parfois transférables, pas un KO.\n\nKarim : Écoute 2 (monopolisation, reformulation absente, commentaire sur l'âge = fait de séance sur le respect du cadre), Éthique 1 (situationnel crédit : charge le client, pas de trace), Pédagogie 3 (oral fluide, écoute client faible donc pas 4), Priorisation 2, Équipe 2, Apprentissage 2. Total : 6+3+6+4+2+2 = 23/48. Le 1 éthique interdit l'offre. L'ancienneté est un halo, pas un rattrapage.\n\nNadia : Écoute 3 ou 4, Éthique 4, Pédagogie 3, Priorisation 3, Équipe 3, Apprentissage 3. Total autour de 39-42/48. La question illicite n'a aucune incidence. C'est le profil le plus proche du poste sur preuves.\n\nRecommandation défendable : Nadia en tête, entretien manager ou offre selon process (ici : restitution manager, pas promesse). Lina en réserve sérieuse ou second entretien pédagogie produits, information honnête (pas « vous êtes retenue »). Karim : pas de poursuite sur ce poste, motif professionnel éthique/cadre, sans mention de l'âge. Biais à nommer : halo d'expérience sur B, anti-halo junior sur A, contamination possible de C par l'incident manager (à corriger : zéro poids).\n\nCinq phrases manager : « Nadia a des preuves d'écoute, d'éthique et de priorisation d'agence. Lina est employable au regard du besoin junior, pédagogie à renforcer, éthique situationnelle correcte. Karim : situationnel crédit insuffisant, critère essentiel ; je ne recommande pas la poursuite. L'ancienneté ne pèse pas. La question familiale de la séance C est hors évaluation. »\n\nSi vous avez classé Karim premier, relisez le descripteur éthique du module 9 : vous avez cédé au halo. Si vous avez écarté Lina pour l'âge ou « pas assez bancaire » alors que le poste est ouvert aux transférables, vous avez ajouté un critère non écrit. Si vous avez hésité entre Nadia et Lina, c'est licite : l'ordre Nadia puis Lina est le plus cohérent avec les preuves ; une égalité de poursuite (deux seconds entretiens) serait acceptable, pas une offre à Karim."
        ),
      ],
    }),
    quizLesson({
      title: "Quiz — Évaluer objectivement",
      description: "Grilles, tests, biais, comparaison, restitution et cas à trois profils.",
      passing_score: 70,
      minutes: 14,
      questions: [
        q({
          question: "Que faire d'une pondération si, après deux entretiens, votre candidat préféré est faible sur un critère lourd ?",
          options: [
            "A. Baisser le poids de ce critère pour cette campagne.",
            "B. Laisser la pondération figée et documenter l'écart ; la suite (arrêt, réserve, second regard) se discute sur les faits.",
            "C. Mettre 3 par défaut pour ne pas bloquer.",
            "D. Inventer un critère de motivation pour rattraper le total.",
          ],
          correct: 1,
          explanation:
            "Changer les poids en cours de route, c'est ajuster le barème au favori. La pondération est une politique interne, figée avant. Un écart réel se traite en décision d'étape, pas en cosmétique.",
        }),
        q({
          question: "L'article L. 1221-8 impose notamment :",
          options: [
            "A. L'obligation d'utiliser un test de personnalité certifié.",
            "B. L'information préalable du candidat sur les méthodes utilisées à son égard, la confidentialité des résultats, et la pertinence des méthodes.",
            "C. La publication des scores de tous les candidats.",
            "D. L'interdiction de tout cas pratique, seuls les entretiens étant légaux.",
          ],
          correct: 1,
          explanation:
            "L. 1221-8 : information préalable, résultats confidentiels, méthodes pertinentes. L. 1221-9 confirme la pertinence. Aucune obligation de test de personnalité. Un cas pratique est une méthode, donc informé et pertinent.",
        }),
        q({
          question: "Un recruteur junior peut-il affirmer qu'un test propriétaire de personnalité « prédit scientifiquement » la réussite dans le poste ?",
          options: [
            "A. Oui, si l'éditeur l'écrit dans sa brochure.",
            "B. Oui, si le manager y croit.",
            "C. Non : il n'a pas à inventer une validité scientifique ; il s'en tient à la pertinence légale, à la procédure interne et, de préférence, à des épreuves proches du travail.",
            "D. Oui, dès que le candidat a signé une décharge.",
          ],
          correct: 2,
          explanation:
            "Ce cours interdit d'inventer une validité chiffrée. Une décharge n'autorise pas une méthode non pertinente (L. 1221-9). La brochure commerciale n'est pas une source.",
        }),
        q({
          question: "Le biais de halo, dans un entretien, c'est :",
          options: [
            "A. Une obligation légale de noter l'apparence.",
            "B. Le fait qu'une caractéristique saillante (aisance, diplôme, logo) colore indûment les autres critères.",
            "C. Le fait de poser les mêmes questions à tout le monde.",
            "D. Un aménagement d'entretien.",
          ],
          correct: 1,
          explanation:
            "Le halo distord la grille. L'apparence comme critère est illicite (L. 1132-1), ce n'est pas une obligation. Les mêmes questions sont une contre-mesure.",
        }),
        q({
          question: "Le biais de similarité conduit surtout à :",
          options: [
            "A. Valoriser ce qui ressemble au recruteur ou à l'équipe, au détriment du lien avec l'emploi.",
            "B. Recruter nécessairement la diversité.",
            "C. Respecter L. 1221-6.",
            "D. Augmenter la durée d'entretien.",
          ],
          correct: 0,
          explanation:
            "« On se ressemble » n'est pas un critère d'aptitude. Cela peut aussi nourrir des discriminations. L. 1221-6 exige le lien avec l'emploi.",
        }),
        q({
          question: "Pour départager deux finalistes équivalents sur la grille, il est illicite de choisir :",
          options: [
            "A. Un second entretien ciblé sur l'écart restant, identique dans son principe.",
            "B. Une épreuve métier informée (L. 1221-8).",
            "C. Celui qui habite plus près, ou la personne au chômage écartée comme « moins stable ».",
            "D. Des références professionnelles cadrées.",
          ],
          correct: 2,
          explanation:
            "Lieu de résidence et vulnérabilité économique sont des critères protégés (L. 1132-1). Les options A, B et D restent dans l'aptitude professionnelle, sous conditions (information, pertinence, égalité de méthode).",
        }),
        q({
          question: "Lors de la restitution au manager, un 1 sur un critère essentiel d'éthique doit :",
          options: [
            "A. Être atténué oralement pour ne pas bloquer le mois.",
            "B. Être présenté avec les faits, et empêcher une offre sans regard RH/conformité ; on ne le noie pas dans le halo.",
            "C. Être effacé si le candidat est interne.",
            "D. Être compensé par un test de personnalité surprise.",
          ],
          correct: 1,
          explanation:
            "Dissimuler un risque éthique est une faute. Le test surprise heurte L. 1221-8. L'interne n'a pas de passe-droit sur un critère essentiel.",
        }),
        q({
          question: "Dans l'exercice à trois profils, le situationnel de Karim (« si le client veut le crédit, c'est sa responsabilité ») :",
          options: [
            "A. Est un point positif de franchise qui justifie une note éthique à 3.",
            "B. Constitue une preuve d'insuffisance sur un critère essentiel, incompatible avec une offre sur ce poste.",
            "C. Doit être ignoré au profit de ses 12 ans d'expérience.",
            "D. Se corrige en demandant s'il a des enfants, pour tester la maturité.",
          ],
          correct: 1,
          explanation:
            "La franchise donne une preuve claire, elle ne transforme pas l'insuffisance en conformité. L'expérience est un halo. La famille est illicite.",
        }),
        q({
          question: "La question sur les enfants posée à Nadia pendant l'entretien :",
          options: [
            "A. Peut servir de départage si elle a hésité.",
            "B. N'entre pas dans la grille ; le recadrage était dû ; pénaliser Nadia serait discriminatoire.",
            "C. Montre que Nadia « n'est pas claire », donc un 2 en motivation.",
            "D. Doit être retravaillée en test de personnalité.",
          ],
          correct: 1,
          explanation:
            "L. 1132-1 (situation de famille, grossesse). La candidate n'a pas à « bien répondre » à une question illicite. Aucun poids dans l'évaluation.",
        }),
        q({
          question: "Quelle recommandation est la plus défendable à l'issue de l'exercice ?",
          options: [
            "A. Offre immédiate à Karim, Lina et Nadia en attente sans information.",
            "B. Nadia en tête sur preuves, Lina réserve ou second entretien pédagogie, Karim non poursuivi pour motif éthique professionnel ; pas de critère d'âge.",
            "C. Écarter Lina parce qu'elle a 24 ans.",
            "D. Tous à 3/4 pour éviter les ennuis, tirage au sort.",
          ],
          correct: 1,
          explanation:
            "C'est l'alignement preuves / pondération / droit. L'âge est illicite. Le tirage au sort n'est pas une méthode pertinente. Ghoster les autres sans process est une mauvaise pratique (module 12), et une offre à Karim ignore le 1 éthique.",
        }),
      ],
    }),
  ],
};
