import { lesson, h, t, note, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 2,
  title: "Construire le profil et la fiche de poste",
  description:
    "Distinguer fiche de poste, profil recherché et annonce, analyser les missions, classer les critères sans discrimination, construire une grille pondérée et valider trois fiches complètes avec le manager.",
  lessons: [
    lesson({
      title: "Fiche de poste, profil recherché et annonce : trois objets distincts",
      description:
        "Savoir à quoi sert chaque document, ce qu'il contient, et ce qui se passe si on les fusionne trop tôt.",
      minutes: 22,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous distinguez la fiche de poste, le profil recherché et l'annonce. Vous savez lequel rédiger en premier, lequel reste interne, et lequel s'adresse aux candidats. Vous évitez de recruter à partir d'un texte marketing qui n'a jamais décrit le travail."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Trois documents circulent dans un recrutement. Ils n'ont pas le même destinataire, pas la même durée de vie, pas le même niveau de détail. Les confondre est l'une des causes les plus banales d'échec : on publie une annonce séduisante, on sélectionne sur un portrait, et personne n'a décrit le travail.\n\nLa fiche de poste décrit un emploi dans l'organisation : finalité, rattachement, missions, responsabilités, conditions d'exercice, relations internes et externes. Elle survit au recrutement. Elle sert aussi à l'intégration, à l'entretien professionnel, parfois à la classification. Elle est un document d'organisation, pas un argumentaire commercial. Dans beaucoup de PME, elle n'existe pas ou elle a dix ans : le recrutement est le moment de la créer ou de la remettre à jour, pas de faire semblant.\n\nLe profil recherché est un objet de sélection, temporaire. Il traduit le brief en critères : indispensables, souhaitables, éliminatoires professionnels, niveau de maîtrise attendu. Il n'a pas vocation à être publié tel quel. Il contient des éléments que l'on ne met pas dans l'annonce (pondération, « formable en 3 mois », nom du tuteur, salaire max interne). C'est votre boussole de tri, pas le texte candidat.\n\nL'annonce est un message public : attirer des candidatures pertinentes, informer sans induire en erreur, respecter le français et les interdictions d'offres (détail au module cadre légal). Elle est plus courte, plus lisible, sans jargon interne, sans critères illicites, sans promesses fausses. Elle dérive de la fiche et du profil ; elle ne les remplace pas.\n\nL'ordre professionnel est : brief validé → fiche de poste (ou mise à jour) → profil de sélection → puis seulement l'annonce et les canaux. Inverser, c'est écrire le slogan avant le cahier des charges. Un cabinet qui n'a que l'annonce du client n'a pas de mandat cadré : il doit reconstruire fiche et profil, même si le livrable public reste l'offre.\n\nCes trois objets doivent rester cohérents. Si la fiche dit « astreintes », l'annonce ne peut pas les taire si elles structurent l'emploi. Si le profil dit « habilitation obligatoire à J1 », l'annonce ne doit pas laisser croire que l'on forme tout le monde. La cohérence n'est pas de tout copier partout : c'est de ne pas se contredire."
        ),
        h("Méthode opérationnelle"),
        t(
          "Après validation du brief : (1) reprendre la fiche existante ou créer une structure vide ; (2) y verser missions, rattachement, conditions ; (3) extraire le profil de sélection dans un tableau à part (leçon 4) ; (4) seulement ensuite rédiger l'annonce (module dédié plus loin dans le parcours). Interlocuteurs : manager pour les missions, RH pour classification, contrat, intitulé officiel. Contrôle : trois fichiers ou trois sections clairement nommés, pas un seul pavé « fiche-annonce-profil »."
        ),
        note(
          "Bonne pratique : trois documents. Politique interne : certaines entreprises n'ont qu'un modèle unique ; vous y distinguez quand même les blocs « organisation », « sélection », « communication ». Obligation : l'offre publique ne doit pas contenir d'allégations fausses ni de critères de sexe ou d'âge hors exceptions (module 3)."
        ),
        h("Exemple professionnel"),
        t(
          "Cabinet, mandat « Business Analyst » pour une ETI d'assurance. Le client envoie une annonce déjà rédigée, très marketing, sans rattachement, avec « 5 ans min. » et « anglais courant ». Vous reconstruisez : fiche (finalité du poste dans le programme de transformation, lien DSI / métier, livrables), profil (indispensables : recueil de besoin, rédaction de spécifications, animation d'ateliers ; anglais = réunions mensuelles avec un prestataire, niveau B2 écrit suffit ; 5 ans = souhaitable), annonce ensuite, alignée, sans copier la fourchette interne max. Le client voulait publier le jour même : vous gagnez une demi-journée de cadrage et vous évitez 80 candidatures hors sujet."
        ),
        code(
          `TROIS OBJETS — repère rapide

                    Destinataire         Durée de vie        Contient
Fiche de poste      interne (org, RH)    tant que l'emploi   missions, rattachement,
                                         existe              conditions, responsabilités
Profil recherché    recruteur + manager  le temps du process critères classés, pondération,
                    (interne)                                « formable / non formable »
Annonce             candidats, public    le temps de la      message honnête, missions
                                         diffusion           clés, conditions essentielles

Ne va PAS dans l'annonce : salaire max interne, commentaires sur la personne
qui part, pondération secrète, critères illicites, promesses non tenues.`
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Publier l'annonce avant la fiche. Recopier une fiche de 2014. Mettre la pondération dans l'annonce. Rédiger le profil comme une liste de qualités. Croire que « on n'a pas de fiche dans cette PME » dispense de décrire les missions. Utiliser l'annonce du concurrent comme fiche de poste."
        ),
        h("Situations particulières"),
        t(
          "Intérim : la qualification de mission n'est pas une fiche pérenne, mais les missions, horaires et lieu doivent être aussi clairs. Reprise de poste confidentielle : la fiche interne existe, l'annonce est plus prudente, jamais mensongère. Création de poste : la fiche est un hypothèse à réviser à 6 mois ; dites-le au manager. Multi-sites : la fiche précise le site principal, pas « France entière » si la personne sera à Saint-Étienne."
        ),
        h("Mise en pratique"),
        t(
          "On vous donne ce pavé unique : « On cherche un as de l'admin, polyvalent, esprit startup, 3-5 ans, pour tout faire au bureau, salaire sexy, CDD ou CDI selon profil. » Séparez en trois listes : ce qui irait dans une fiche, dans un profil, dans une annonce, et ce qui ne va nulle part."
        ),
        h("Correction détaillée"),
        t(
          "Fiche : il n'y a presque rien — « tout faire au bureau » n'est pas une mission. Il faut recréer finalité, missions, rattachement. Profil : « 3-5 ans » est un indicateur faible ; « polyvalent » n'est pas un critère ; CDD ou CDI selon profil n'est pas un critère de personne, c'est une indécision d'organisation. Annonce : « as », « esprit startup », « salaire sexy » sont du flou ou des allégations risquées. Nulle part : le slogan, le « selon profil » sans fourchette interne validée. Conclusion : vous ne publiez pas. Vous revenez au brief."
        ),
      ],
    }),

    lesson({
      title: "Analyser les missions et identifier les compétences",
      description:
        "Passer des missions aux compétences techniques, comportementales et transférables, de façon observable.",
      minutes: 24,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez déduire des compétences à partir de missions concrètes. Vous distinguez technique, comportemental observable, et transférable. Vous évitez les listes de qualités invisibles (« rigoureux, passionné, leader »)."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Une compétence n'est pas un trait de caractère. C'est la capacité à produire un résultat dans une situation de travail. On l'identifie en partant des missions, jamais l'inverse. « Besoin d'un leader » ne dit rien. « Animer un brief quotidien de 12 personnes et arbitrer les priorités de la journée » dit presque tout : organisation, communication, décision sous contrainte, connaissance du flux.\n\nLes compétences techniques (parfois dites « hard ») portent sur des savoirs et des savoir-faire professionnels : logiciel, machine, norme, langue utilisée dans un contexte, méthode. Elles se vérifient par des preuves (réalisations, tests pertinents, mises en situation), pas par le seul intitulé du CV.\n\nLes compétences comportementales ne sont utiles que si elles sont observables. « Sens du client » devient « traiter une réclamation en recadrant les faits, proposant une option, écrivant un suivi ». « Autonomie » devient « avancer 3 jours sans consignes sur un dossier déjà cadré, et alerter si le délai glisse ». Sans situation, le comportemental est un prétexte à l'impression, donc au biais.\n\nLes compétences transférables viennent d'un autre métier, d'un autre secteur, parfois d'un engagement associatif ou d'une reconversion, et servent le poste. Un ancien commercial peut exceller au recueil de besoin pour un poste de chef de projet. Un ouvrier devenu formateur interne a déjà de la pédagogie de terrain. Le junior qui refuse tout ce qui n'est pas « le même intitulé » se ferme des viviers et confond habitude et exigence.\n\nLa méthode d'analyse est un va-et-vient. Mission → résultats attendus → situations difficiles du poste → compétences nécessaires → ce qui est formable ici. Une compétence que l'équipe peut transmettre en six semaines n'a pas le même statut qu'une habilitation exigée le premier jour. C'est ainsi que l'on prépare le classement indispensable / souhaitable de la leçon suivante, et la pondération de la grille.\n\nAttention au vocabulaire interne. « Savoir gérer la GED » peut vouloir dire classer des PDF, ou piloter un projet documentaire. Vous faites décrire une journée, un dossier type, un incident. Les mots du métier du manager ne sont pas encore des compétences du profil."
        ),
        h("Méthode opérationnelle"),
        t(
          "Pour chaque mission du brief : écrire le livrable, la fréquence, les interlocuteurs, ce qui se passe si c'est mal fait. En déduire 1 à 3 compétences. Les formuler par un verbe + un objet + un contexte. Classer : technique / comportementale observable / transférable. Marquer formable ou non, avec qui, en combien de temps. Faire valider au manager par des exemples, pas par un nuage de mots. Contrôle : aucune compétence orpheline (sans mission) et aucune mission orpheline (sans compétence)."
        ),
        h("Exemple professionnel"),
        t(
          "Services, ETI de 280 personnes, poste d'assistant commercial export. Mission « gérer les commandes ». Après analyse : saisir les commandes dans l'ERP (technique, formable 3 semaines), vérifier Incoterms et délais avec l'usine (technique métier, partiellement formable), écrire aux agents en anglais (langue en contexte écrit, niveau à préciser), traiter une commande bloquée sans paniquer le client (comportemental observable), prioriser 40 mails le matin (organisation). Un candidat venant de la logistique, sans titre « assistant commercial », peut déjà tenir 3 de ces 5 blocs : compétence transférable à valoriser dans le profil, pas à écarter d'emblée."
        ),
        code(
          `FICHE D'ANALYSE MISSION → COMPÉTENCES

Mission : .....................................................
Livrable / fréquence : ........................................
Si c'est mal fait, conséquence : ..............................

Compétence 1 (technique) : ....................................
Compétence 2 (comportementale, situation) : ...................
Compétence 3 (transférable possible depuis) : .................
Formable ici : oui / non    Tuteur : ..........    Délai : ....

Formulation interdite : « bon relationnel », « dynamique »,
« esprit d'équipe », « leadership » sans situation.
Formulation attendue : verbe + objet + contexte.`
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Recopier des listes de compétences trouvées sur internet. Empiler 25 compétences pour un seul poste. Confondre outil et capacité. Mettre « anglais » sans usage. Traiter toute expérience hors secteur comme un défaut. Valider avec le manager un nuage de mots en 30 secondes."
        ),
        h("Situations particulières"),
        t(
          "Reconversion : cartographier les transférables avant de dire « pas le bon parcours ». Poste expert rare : moins de comportemental générique, plus de preuves techniques, sans en faire un mur de diplômes inutiles. Management : décrire les actes (recruter, recadrer, planifier, arbitrer), pas le mot « manager ». Intérim : les compétences du jour J priment ; le transférable se discute si la mission est longue ou pérennisable."
        ),
        h("Mise en pratique"),
        t(
          "Mission brute : « s'occuper des RH de la PME ». Transformez-la en 5 missions concrètes possibles dans une PME de 40 personnes, puis en compétences observables. Indiquez deux transférables acceptables."
        ),
        h("Correction détaillée"),
        t(
          "Missions possibles : administration du personnel (DPAE, dossiers, absences) en lien avec l'expert-comptable ; recrutement opérationnel avec les managers ; accueil et intégration ; suivi des visites médicales et des habilitations ; paie préparatoire ou contrôle des variables. Compétences : exactitude documentaire, priorisation, entretien de brief, discrétion (situation : données de santé et salaires), usage d'un logiciel de paie ou tableur. Transférables : un assistant de direction qui tenait déjà les dossiers confidentiels et les plannings ; un assistant d'agence d'intérim habitué aux dossiers salariés. « S'occuper des RH » tout seul n'est ni une mission ni une compétence."
        ),
      ],
    }),

    lesson({
      title: "Critères éliminatoires, souhaitables et critères interdits",
      description:
        "Classer les critères de sélection et écarter tout critère discriminatoire, en s'appuyant sur L. 1132-1 et L. 1221-6.",
      minutes: 26,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez poser des critères éliminatoires professionnels justifiés, des critères souhaitables, et refuser les critères discriminatoires. Vous reliez ce classement aux articles L. 1132-1 et L. 1221-6 du Code du travail, sans vous substituer à un juriste."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Tout critère de sélection n'a pas le même statut. Un critère éliminatoire professionnel est une condition sans laquelle le poste ne peut pas être tenu, dès l'arrivée ou dans un délai trop court pour l'organisation. Exemples : une habilitation exigée par l'emploi, une langue utilisée quotidiennement avec des clients, un permis lorsque les déplacements sans alternative sont un fait du poste. Il doit rester rare, écrit, expliqué.\n\nUn critère souhaitable améliore la prise de poste. Son absence n'arrête pas le dossier. En faire un éliminatoire « pour se simplifier le tri » est une erreur métier : on appauvrit le vivier et on se rapproche d'un filtre opaque.\n\nUn critère discriminatoire est interdit. L'article L. 1132-1 du Code du travail pose qu'aucune personne ne peut être écartée d'une procédure de recrutement en raison de critères protégés. Parmi ceux-ci, tels que listés par le Code du travail numérique (vérification au 13/10/2026) : origine, sexe, mœurs, orientation sexuelle, identité de genre, âge, situation de famille ou grossesse, caractéristiques génétiques, vulnérabilité économique, appartenance vraie ou supposée à une ethnie, une nation ou une prétendue race, opinions politiques, activités syndicales ou mutualistes, mandat électif, convictions religieuses, apparence physique, nom de famille, lieu de résidence, domiciliation bancaire, état de santé, perte d'autonomie, handicap, capacité à s'exprimer dans une langue autre que le français, qualité de lanceur d'alerte, facilitateur ou personne en lien avec un lanceur d'alerte. Texte : https://code.travail.gouv.fr/code-du-travail/l1132-1\n\nL'article L. 1221-6 ajoute une règle de méthode : les informations demandées au candidat, sous quelque forme que ce soit, ne peuvent avoir comme finalité que d'apprécier la capacité à occuper l'emploi ou les aptitudes professionnelles. Elles doivent présenter un lien direct et nécessaire avec l'emploi proposé. https://code.travail.gouv.fr/code-du-travail/l1221-6\n\nConséquence pratique pour la fiche et le profil : un critère qui n'a pas ce lien ne rentre pas. « Jeune », « sans enfants », « de préférence une femme », « photo obligatoire », « habite à côté » (le lieu de résidence est un critère protégé), « bon français à l'oral » si l'emploi n'exige pas ce niveau, sont à sortir. Un permis se justifie par des déplacements. Une langue se justifie par un usage. Un diplôme se justifie par l'emploi, surtout s'il est réglementé.\n\nVous n'êtes pas le juge de la discrimination. Vous êtes le premier filtre professionnel : vous n'écrivez pas ces critères, vous ne les utilisez pas au tri, vous recadrez le manager, vous alertez les RH. Le module 3 approfondit les conséquences et les questions d'entretien. Ici, l'enjeu est de ne pas graver l'illicite dans la fiche de poste."
        ),
        h("Méthode opérationnelle"),
        t(
          "Reprenez chaque critère du brief. Colonne 1 : éliminatoire professionnel (justification écrite du lien avec l'emploi). Colonne 2 : souhaitable. Colonne 3 : interdit ou hors lien — à supprimer, pas à « formuler plus subtilement ». Faites relire par RH les éliminatoires. Contrôle : aucun critère de la liste L. 1132-1, aucune information sans lien L. 1221-6. Date de vérification des textes : 13/10/2026 ; relire le texte en vigueur le jour J."
        ),
        note(
          "Obligation légale : L. 1132-1 (non-discrimination à l'embauche) et L. 1221-6 (lien direct et nécessaire). Ce n'est pas une « politique diversité » interne, même si l'entreprise en a une. Bonne pratique : limiter les éliminatoires à 3 ou 4. Politique interne : un diplôme « maison » exigé de tous doit quand même rester en lien avec l'emploi."
        ),
        h("Exemple professionnel"),
        t(
          "PME 40 personnes, poste d'assistant administratif (fiche complète en leçon 5). Le gérant veut : « femme de préférence, 25-35 ans, habite la ville, permis, Word/Excel, discrète, pas d'enfants en bas âge parce que les horaires d'accueil sont 8 h-12 h / 14 h-18 h. »\n\nÉliminatoires professionnels possibles : maîtrise réelle du tableur pour un volume de factures ; tenue d'un accueil aux horaires du site (contrainte du poste, pas de la vie personnelle). Souhaitables : expérience PME, logiciel de paie déjà vu. Interdits : sexe, âge, résidence, situation de famille. Le permis : seulement s'il y a des courses ou des déplacements réguliers ; sinon, hors lien. « Discrète » devient : traiter des données de paie et d'arrêt de travail sans les diffuser — comportemental lié à l'emploi, pas un jugement moral."
        ),
        code(
          `CLASSEMENT DES CRITÈRES — modèle

ÉLIMINATOIRE (lien emploi écrit)     SOUHAITABLE              INTERDIT / HORS LIEN
Habilitation X si le poste l'exige   Secteur déjà connu       Sexe, âge, photo
Permis si déplacements hebdo         Logiciel déjà pratiqué   Situation de famille
Langue si usage réel documenté       Diplôme non réglementé   Résidence, apparence
                                     si équivalence possible  Santé, grossesse, etc.

Formulation de substitution interdite :
« jeune dynamique » à la place de « moins de 30 ans » reste un critère d'âge.
On décrit le poste (horaires, charge, déplacements), on ne décrit pas la personne.`
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Reformuler un critère interdit pour « que ça passe ». Mettre 12 éliminatoires. Oublier que le lieu de résidence est protégé. Exiger un « français parfait » par confort. Copier « H/F » en croyant que cela suffit si le reste du texte est genré. Laisser le manager coller une photo sur le besoin « pour voir le sérieux »."
        ),
        h("Situations particulières"),
        t(
          "Emplois à exception limitée (artiste, mannequin/modèle) : hors le cas dûment justifié, le sexe n'est pas un critère ; le détail offres d'emploi est au module 3. Handicap : on n'écarte pas pour ce motif ; l'aménagement se discute dans le cadre prévu, avec RH, pas en filtre CV. Langue : L. 1132-1 protège notamment la capacité à s'exprimer dans une langue autre que le français — n'en faites pas un grief. Poste en contact enfants / sécurité : vous ne devenez pas enquêteur ; le cadre des vérifications (casier, diplômes) se fait selon les règles et l'information du candidat, module 3."
        ),
        h("Mise en pratique"),
        t(
          "Classez : (1) « 5 ans d'expérience minimum » ; (2) « permis B, 4 déplacements chantiers par semaine » ; (3) « de préférence un homme pour l'atelier » ; (4) « Excel, tableaux croisés, dès J1 » ; (5) « habite à moins de 20 minutes » ; (6) « disponible le samedi, le magasin ouvre le samedi ». Justifiez en une phrase chaque classement."
        ),
        h("Correction détaillée"),
        t(
          "(1) Souhaitable par défaut, parfois indicateur : ce n'est éliminatoire que si l'on a décrit des actes non formables ici. Un mur d'années mal justifié peut masquer un filtre d'âge. (2) Éliminatoire professionnel si les déplacements sont un fait du poste sans alternative. (3) Interdit : sexe, L. 1132-1. (4) Éliminatoire ou souhaitable selon le volume réel et le tutorat possible ; le lien avec l'emploi existe. (5) Interdit / hors lien : lieu de résidence. On peut décrire le lieu de travail et les horaires, pas imposer un rayon. (6) Contrainte du poste (ouverture samedi) : on l'écrit comme condition d'emploi, on ne fouille pas la vie familiale pour « voir si c'est compatible »."
        ),
      ],
    }),

    lesson({
      title: "Construire une grille de sélection pondérée",
      description:
        "Transformer le profil en grille notée, partageable avec le manager, utilisable du CV à l'entretien.",
      minutes: 24,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez construire une grille pondérée de 5 à 8 critères, lui donner des ancres d'évaluation, et l'utiliser de façon cohérente entre préselection et entretien. Vous savez ce qu'une grille ne fait pas : elle n'élimine pas le jugement, elle le discipline."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Sans grille, chaque décideur pèse ce qu'il aime. Le manager survalorise « quelqu'un comme moi », le junior survalorise un CV fluide, un troisième survalorise l'école. La grille n'empêche pas ces biais à elle seule, mais elle oblige à nommer les critères avant de voir les personnes, et à comparer les dossiers sur les mêmes axes.\n\nPondérer, c'est dire que tout n'a pas le même poids. Un critère éliminatoire professionnel peut être binaire (oui/non) : sans l'habilitation exigée, la note du reste ne « rattrape » pas. Les autres critères reçoivent un poids (par exemple 5, 10, 15, 20) dont le total fait 100. Les souhaitables pèsent moins que les indispensables. Rien d'interdit n'entre dans la grille.\n\nLes ancres d'évaluation évitent le 3/5 mou. Pour chaque critère, on décrit ce que vaut 1, 3 et 5 (ou 0, 2, 4). « Expérience client » : 1 = n'a jamais tenu un portefeuille ; 3 = a suivi des clients avec un script ; 5 = a traité des réclamations et des renouvellements en autonomie. Sans ancre, la note est une humeur.\n\nLa grille est un outil interne de sélection, pas un document à envoyer aux candidats. Les méthodes d'évaluation devront être pertinentes et les candidats informés préalablement (L. 1221-8 et L. 1221-9, module 3). À ce stade, retenez : une grille de CV n'est pas un test psychométrique ; si vous ajoutez un test, ce sera un autre sujet, avec information et pertinence.\n\nLa grille se fige avant l'arrivée des CV. La modifier parce que l'on « aime bien » un candidat est une fraude au process. On peut la réviser entre deux campagnes, pas au milieu d'une shortlist, sauf erreur manifeste de critère (critère illicite découvert, mission qui change), et alors on documente."
        ),
        h("Méthode opérationnelle"),
        t(
          "1. Partir du profil classé, pas de l'annonce. 2. Choisir 5 à 8 critères, dont 0 à 3 binaires éliminatoires. 3. Attribuer les poids avec le manager (20 minutes). 4. Écrire les ancres 1/3/5. 5. Tester la grille sur 2 CV fictifs ou anciens pour voir si elle produit un classement absurde. 6. Utiliser la même grille en préselection et en trame d'entretien. 7. Conserver les grilles remplies dans le dossier du poste, selon la politique de conservation (module 3). Contrôle : somme des poids = 100 ; aucun critère L. 1132-1."
        ),
        h("Exemple professionnel"),
        t(
          "Startup, développeur backend (fiche en leçon 6). Éliminatoire binaire : capacité à livrer du code backend dans le langage du socle (évaluée plus tard par exercice pertinent, annoncé). Pondération du reste : conception d'API 25, qualité / tests 20, débogage production 20, communication avec le produit 15, autonomie d'organisation 10, Go (souhaitable) 10. Le CTO voulait 40 % sur « culture GitHub ». Vous refusez cet item flou : on évalue des contributions et des pratiques, pas une esthétique de profil public, et encore moins une exploration des réseaux hors lien avec l'emploi."
        ),
        code(
          `GRILLE PONDÉRÉE — modèle (total 100)

Critère                         Poids   1 (insuffisant)     3 (correct)          5 (solide)
------------------------------ ------- ------------------- -------------------- -------------------
Tenue des missions cœur           25    n'a pas produit     a produit avec      a produit en
                                        le livrable type    aide                autonomie
Outil / méthode indispensable     20    jamais utilisé      utilisé avec        utilisé en
                                                            tutorat             situation proche
Situation comportementale clé     15    pas d'exemple       exemple partiel     exemple complet,
                                                                                résultat clair
Condition d'emploi assumée        10    incompatible        négociable borné    aligné
(horaires, site — pas la vie
privée)
Souhaitable métier                10    absent              proche              présent
Transférable / potentiel          10    hors sujet          1 pont clair        2 ponts + preuve
Communication professionnelle     10    confus              clair à l'écrit     clair écrit + oral
                                        (sur dossier)       ou à l'oral         selon le poste

Éliminatoire binaire (hors 100) : ................ oui / non   justification emploi : ........

Candidat : ..........  Note : .... / 100    Décision : poursuite / réserve / arrêt
Évaluateur : ..........  Date : ..........
La grille ne contient aucun critère interdit.`
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Mettre 15 critères à 6,6 %. Noter le « feeling » comme critère. Pondérer après avoir vu le CV préféré. Utiliser une grille différente par candidat. Confondre grille interne et test non annoncé. Donner zéro à un candidat parce que le CV n'a pas de photo ou un prénom inhabituel."
        ),
        h("Situations particulières"),
        t(
          "Volume massif (alternance, opérateurs) : grille courte, 5 critères, même discipline. Poste unique expert : plus de poids sur les preuves techniques, mises en situation pertinentes. Cabinet : la grille se partage avec le client, sinon la shortlist sera jugée sur des critères secrets. Intérim : grille du jour J (horaires, geste, sécurité), pas un modèle cadre."
        ),
        h("Mise en pratique"),
        t(
          "Construisez une grille à 6 critères (poids + ancre du niveau 5 seulement) pour un assistant administratif d'accueil + facturation dans une PME. Interdiction d'y mettre l'âge, le sexe, la résidence, la photo."
        ),
        h("Correction détaillée"),
        t(
          "Exemple cohérent : accueil public (20) — niveau 5 : gère un flux et un visiteur mécontent sans perdre le suivi ; facturation / tableur (25) — niveau 5 : tableaux, contrôles, relances déjà tenus ; priorisation (15) ; discrétion des données (15) — situation professionnelle, pas moralisme ; expression écrite professionnelle (15) ; expérience d'un logiciel proche (10). Éliminatoire binaire possible : présence aux horaires d'ouverture du site, posée comme condition d'emploi. Si vous avez pondéré « présentation physique » ou « proximité géographique », la grille est non conforme."
        ),
      ],
    }),

    lesson({
      title: "Fiche complète : assistant administratif en PME de 40 personnes",
      description:
        "Étudier et réutiliser une fiche de poste complète, avec profil et extraits de critères, pour une PME de services / négoce.",
      minutes: 24,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez lire une fiche complète de PME, en extraire le profil de sélection, et l'adapter sans la vider. Vous voyez comment missions, conditions et critères tiennent en un seul document interne, distinct de l'annonce."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Dans une PME de 40 personnes, l'assistant administratif n'est pas « la personne qui fait tout ce que les autres ne font pas ». Si la fiche dit cela, le recrutement échouera : trop de managers, trop de priorités, aucun succès mesurable. La fiche doit nommer un rattachement (souvent le gérant, un responsable administratif ou le responsable d'agence), un périmètre (accueil, standard, facturation, dossiers du personnel en appui, fournitures), et ce qui n'est pas dans le poste (comptabilité de clôture, commercial terrain, informatique système).\n\nLe volume fait la compétence. « Facturation » pour 20 factures mois n'est pas « facturation » pour 400. « Accueil » d'un showroom n'est pas un standard 80 appels. La fiche de PME honnête donne des ordres de grandeur, même approximatifs, validés par le manager. Elle dit aussi les horaires d'ouverture, la pause méridienne possible ou non, le travail du samedi s'il existe.\n\nLe profil qui en découle est plus étroit que la fiche. La fiche décrit l'emploi. Le profil dit ce que l'on exige à l'entrée et ce que l'on forme. Dans une PME sans tuteur, « formable » est souvent un vœu : il faut un nom et un temps. Sinon, le critère remonte en indispensable.\n\nCette leçon est un modèle. Elle n'est pas une statistique du marché, ni un salaire « officiel ». La fourchette indiquée est un exemple pédagogique interne à l'entreprise fictive, à remplacer par la politique réelle. L'annonce n'est pas rédigée ici ; seuls les éléments qui devront y rester honnêtes sont signalés."
        ),
        h("Méthode opérationnelle"),
        t(
          "Lisez la fiche. Surlignez missions, hors périmètre, conditions, indispensables. Construisez mentalement 5 critères de grille. Comparez avec le bloc « profil interne » fourni. L'écart, s'il existe, est ce que vous auriez dû arbitrer avec le manager."
        ),
        h("Exemple professionnel"),
        t(
          "Entreprise fictive : Armor Négoce, PME de négoce de fournitures professionnelles, 40 salariés, un site, Loire-Atlantique. Remplacement d'un départ. Horaires d'accueil 8 h 30-12 h 30 et 14 h-18 h. Facturation export limitée. Pas de télétravail sur l'accueil. Le gérant voulait « une fille à l'accueil » : recadré, absent de la fiche."
        ),
        code(
          `FICHE DE POSTE — Assistant administratif polyvalent
Entreprise : Armor Négoce (PME, 40 personnes, un site)
Rattachement : Responsable administratif et financier
Statut / classification : selon grille interne (à renseigner RH)
Lieu : site de [Ville] — poste présentiel (accueil public)
Horaires : 8 h 30-12 h 30 / 14 h-18 h, lundi-vendredi
Contrat type visé : CDI (validation direction)
Astreintes : non    Télétravail : non (contrainte d'accueil)
Déplacements : exceptionnels (poste, mairie) — permis non exigé

Finalité
Assurer l'accueil physique et téléphonique, tenir la facturation
courante et le classement, et appuyer le RAF sur l'administratif
du quotidien, afin que les commerciaux et l'atelier restent sur
leur métier.

Missions permanentes
1. Accueillir les visiteurs et filtrer le standard (environ 30-50
   appels / jour en période normale).
2. Saisir et émettre les factures, relancer les impayés simples
   selon la procédure (volume indicatif : 80-120 factures / mois).
3. Classer et retrouver les dossiers (commandes, livraisons, RH
   administratifs de base) dans la GED et les classeurs.
4. Préparer les éléments variables pour l'expert-comptable
   (absences, notes de frais) — sans établir la paie.
5. Gérer fournitures, courrier, prises de rendez-vous direction.
6. Mettre à jour les tableaux de suivi (impayés, stocks d'office).

Hors périmètre
Paie complète, clôture comptable, prospection commerciale,
administration serveur / informatique, management.

Relations
Interne : RAF, gérant, 6 commerciaux, atelier.
Externe : clients au comptoir, transporteurs, expert-comptable,
fournisseurs de bureau.

Moyens
ERP / facturation en place, suite bureautique, standard IP.
Pas de budget à engager sans validation RAF.

Profil interne de sélection (ne se publie pas tel quel)
Éliminatoires professionnels :
- Tenir l'accueil aux horaires du site
- Produire des documents écrits professionnels en français
- Utiliser un tableur pour des suivis simples (ou équivalent
  démontrable) dès les premières semaines
Souhaitables : expérience accueil ou facturation PME ; ERP proche
Formable (tuteur : RAF, 6 semaines) : ERP maison, procédure impayés
Interdit dans la sélection : sexe, âge, situation de famille,
résidence, photo, apparence.

Conditions d'emploi à rester honnêtes dans l'annonce
Présentiel, horaires d'ouverture, CDI visé, site unique.
Rémunération : fourchette interne à valider — ne pas écrire
« selon profil » sans cadre.

Cette fiche n'est pas une offre d'emploi ni une promesse d'embauche.`
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Laisser « polyvalent » sans hors périmètre. Oublier les volumes. Exiger le permis par habitude. Recopier « H/F souriante, 25-40 ans ». Transformer la fiche en annonce lyrique. Promettre de la paie alors que l'expert-comptable la fait."
        ),
        h("Situations particulières"),
        t(
          "Si l'accueil passe à un samedi sur deux : c'est une condition d'emploi à ajouter, pas un filtre « gens sans enfants ». Si le gérant veut aussi de l'anglais au téléphone (10 appels export / semaine) : la langue redevient un critère, avec le niveau d'usage. Si deux managers pilotent la personne : la fiche doit dire qui priorise, sinon le poste est intenable."
        ),
        h("Mise en pratique"),
        t(
          "Le RAF veut ajouter « gestion complète de la paie » et « community management des réseaux de l'entreprise ». Décidez, en cinq lignes, ce que vous faites de chaque ajout (dans la fiche, hors périmètre, ou second poste) et l'effet sur le profil."
        ),
        h("Correction détaillée"),
        t(
          "Paie complète : ce n'est plus le même emploi (responsabilité, logiciel, délais, confidentialité accrue). Soit on recadre le poste (intitulé, salaire, indispensables), soit on laisse à l'expert-comptable / un profil dédié. Community management : autre métier, autre rythme, autre compétence ; hors périmètre, ou mission très bornée (publier un événement mensuel) si le volume est réel et formable. Les deux ajouts ensemble reproduisent le poste fourre-tout. Vous n'alourdissez pas les éliminatoires en silence : vous rouvrez un arbitrage de brief."
        ),
      ],
    }),

    lesson({
      title: "Fiches complètes : développeur backend startup et technicien de maintenance",
      description:
        "Comparer deux fiches abouties, hors PME de bureau : produit logiciel et industrie.",
      minutes: 26,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous disposez de deux fiches complètes supplémentaires, que vous savez comparer : ce qui change (missions, preuves, conditions) et ce qui ne change pas (classement des critères, hors illicite, validation)."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le canevas de fiche ne change pas avec le secteur. Ce qui change, c'est la nature des preuves et des conditions. Un développeur backend s'évalue sur des livrables logiciels, des pratiques de qualité, une collaboration produit. Un technicien de maintenance s'évalue sur des gestes, des habilitations, la sécurité, des horaires d'atelier. Dans les deux cas, on décrit d'abord le travail, on classe ensuite les critères, on refuse les portraits.\n\nEn startup, la fiche combat trois dérives : le titre gonflé, le « tout le monde fait tout », le remote non décidé. En industrie, elle combat le clone du partant, l'âge comme faux critère de maturité, et l'oubli des astreintes. Les deux fiches ci-dessous sont des modèles pédagogiques d'entreprises fictives. Les fourchettes de rémunération sont des exemples internes à remplacer, pas des données de marché.\n\nVous remarquerez que chaque fiche contient un hors périmètre. C'est volontaire. Sans lui, le développeur se retrouve d'astreinte produit, commercial et recruteur. Sans lui, le technicien reprend le stock, les achats et la conduite de ligne. Le hors périmètre protège le brief autant que les missions.\n\nLe profil interne, en bas de chaque fiche, est le pont vers la grille pondérée. Il ne se copie pas dans l'annonce. L'annonce dira les missions clés, le lieu, les horaires, le contrat, les indispensables honnêtes. Le reste reste un outil de sélection."
        ),
        h("Méthode opérationnelle"),
        t(
          "Lisez les deux fiches. Pour chacune, écrivez en marge : 3 indispensables, 2 souhaitables, 1 condition d'emploi à ne pas oublier dans l'annonce, 1 critère que le manager aurait pu vouloir et que la fiche refuse. C'est l'exercice de lecture d'un recruteur qui n'a pas mené le brief."
        ),
        h("Exemple professionnel"),
        t(
          "Fiche 1 : startup SaaS fictive « Nordic Flow », 18 personnes, Paris / hybride. Création de poste backend. Fiche 2 : PMI fictive « Ateliers Loire Métal », 55 personnes, replacement retraite d'un technicien de maintenance. Variante industrie du brief module 1."
        ),
        code(
          `FICHE DE POSTE — Développeur ou développeuse backend
Entreprise : Nordic Flow (startup SaaS, 18 personnes)
Rattachement : CTO    Équipe : 4 personnes produit / tech
Lieu : Paris 11e — hybride 3 jours sur site / semaine (règle équipe)
Contrat visé : CDI    Télétravail : 2 jours, pas full remote
Astreintes : 1 semaine / 8, incidents production (à confirmer à l'offre)
Classification / salaire : fourchette interne à valider RH / fondateur

Finalité
Concevoir, exposer et maintenir les API et services métier qui
servent l'application, avec un niveau de qualité permettant des
mises en production fréquentes sans régression majeure.

Missions (6 premiers mois — création de poste)
1. Concevoir et implémenter des API (socle actuel : Java ; Go
   souhaitable) documentées et testées.
2. Corriger les incidents de production avec le CTO, documenter.
3. Écrire et maintenir les tests automatisés du périmètre confié.
4. Participer aux rituels produit (planification, revue) : estimer,
   alerter sur un délai, proposer une option technique.
5. Relire le code des pairs et faire relire le sien.
6. Améliorer un bout de dette technique priorisé, pas « refondre
   le SI » seul.

Hors périmètre (6 mois)
Closing commercial, recrutement, infogérance complète, mobile natif,
management d'équipe.

Relations : CTO, 1 product manager, 1 développeur front, CS.
Moyens : dépôt de code, CI, environnement de staging.

Profil interne de sélection
Éliminatoires : avoir déjà livré et maintenu du backend en
conditions réelles (langage du socle ou transférable proche) ;
travailler 3 jours sur site.
Souhaitables : Go, SaaS B2B, expérience d'astreinte déjà vécue.
Formable : stack interne, métier du produit.
Interdit : âge, photo, « culture ninja », écoles uniquement,
origine, sexe. L'anglais écrit de documentation est souhaitable
si les libs le sont ; les réunions sont en français.

Cette fiche n'est pas une offre ni une promesse d'embauche.`
        ),
        code(
          `FICHE DE POSTE — Technicien ou technicienne de maintenance
Entreprise : Ateliers Loire Métal (PMI, 55 personnes)
Rattachement : Responsable d'atelier
Lieu : site de [Ville] — présentiel atelier
Horaires : 2×8    Astreinte : 1 week-end / 4 (point ouvert validé)
Contrat visé : CDI    Télétravail : non
Habilitation : électrique à détenir ou à obtenir sous 90 jours
               (parcours nommé, budget formation : oui / à confirmer)
Permis B : exigé (déplacements ponctuels entre deux sites, 18 km)

Finalité
Assurer le dépannage et le préventif des équipements de production
afin de limiter les arrêts non planifiés et de tenir le planning
GMAO.

Missions
1. Dépanner (mécanique, base électrique) les équipements du site.
2. Réaliser le préventif selon le planning GMAO et renseigner
   chaque intervention.
3. Alerter le responsable d'atelier sur une pièce critique ou un
   risque sécurité.
4. Accueillir et suivre un prestataire ponctuel sur une machine.
5. Proposer un amélioration simple (accessibilité, gabarit, 5S
   maintenance) — pas un projet methods à temps plein.

Hors périmètre
Gestion du stock pièces (repris par l'appro), achats, conduite de
ligne, relation client commerciale.

Relations : responsable d'atelier, 8 opérateurs, appro, prestataires.
Moyens : atelier, outillage, GMAO, EPI.

Profil interne de sélection
Éliminatoires : dépannage mécanique en autonomie sur un parc
comparable (pas « 15 ans » comme mur) ; travail en 2×8 ; permis B
(déplacements sites) ; engagement sur le parcours habilitation si
non détenue.
Souhaitables : GMAO déjà pratiquée, secteur métallurgie / agro.
Formable : GMAO maison, parc spécifique (tuteur : sortant, 8 sem.).
Interdit : âge (« comme Gérard », « pas un jeune »), sexe, résidence
comme filtre, apparence.

Cette fiche n'est pas une offre ni une promesse d'embauche.`
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Copier la fiche startup pour l'industrie en changeant l'intitulé. Oublier 2×8 et astreintes dans la fiche maintenance. Mettre « bac+5 » éliminatoire chez le développeur sans lien. Exiger GitHub public. Exiger un homme à l'atelier. Promettre du full remote alors que la fiche dit 3 jours sur site."
        ),
        h("Situations particulières"),
        t(
          "Si le CTO veut un test technique : il devra être pertinent, annoncé, confidentiel dans ses résultats (module 3). Si l'usine est Seveso ou à habilitations multiples : RH et HSE valident les indispensables, vous ne les inventez pas. Si le second site tombe : le permis peut redevenir non indispensable ; on met à jour la fiche, on ne laisse pas un critère mort."
        ),
        h("Mise en pratique"),
        t(
          "Un manager industrie veut ajouter « 15 ans de chaudronnerie » en éliminatoire. Un CTO veut ajouter « école d'ingénieurs uniquement ». Rédigez les deux réponses, 4 lignes chacune, en proposant un critère de remplacement observable."
        ),
        h("Correction détaillée"),
        t(
          "Industrie : « 15 ans » n'est pas un acte de travail. Remplacement : avoir déjà dépanné en autonomie un parc comparable et tenir le 2×8 ; la chaudronnerie fine passe en souhaitable si un tutorat de 8 semaines existe. Startup : l'école n'est pas le poste. Remplacement : avoir livré du backend en conditions réelles, tests, relecture ; le diplôme d'ingénieur, s'il reste, est souhaitable. Dans les deux cas, un mur d'années ou d'école mal justifié peut fonctionner comme un filtre d'âge ou d'origine scolaire sans lien nécessaire avec l'emploi : on ne l'écrit pas."
        ),
      ],
    }),

    lesson({
      title: "Validation avec le manager et actualisation de la fiche",
      description:
        "Faire valider, figer la version, et savoir quand reprendre la fiche pendant ou après le process.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez faire valider une fiche et un profil, gérer les corrections, et actualiser sans truquer un process en cours. Vous savez quand un changement de fiche impose de revoir l'annonce et les candidats déjà engagés."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Une fiche non validée n'est pas une fiche : c'est un brouillon du recruteur. La validation n'est pas une politesse. C'est l'acte par lequel le manager assume les missions, les hors périmètre, les conditions et les critères. Sans cet acte, il rejettera la shortlist au motif que « ce n'est pas ce que je voulais », alors que c'était exactement ce que le silence avait laissé passer.\n\nValider, c'est dater. Un mail « ok pour moi » sur la version 3, avec le fichier en pièce, suffit dans la plupart des PME. Dans une ETI, un circuit (RH, N+2) peut s'ajouter. En cabinet, la validation du client est une pièce du mandat. Vous ne considérez pas un « c'est bien » en fin de réunion comme une validation du texte, parce que le texte n'existait pas encore.\n\nL'actualisation est normale. Un poste vit : une machine part, le remote change, une mission passe à un collègue. On met à jour la fiche d'organisation. En revanche, changer les critères de sélection au milieu des entretiens, pour coller à un candidat ou pour exclure un autre, n'est pas une actualisation : c'est un process biaisé, et potentiellement discriminatoire si le nouveau critère est illicite ou appliqué à géométrie variable.\n\nQuand un changement est réel (le besoin a changé), vous documentez : quoi, pourquoi, à quelle date, qui valide. Vous examinez l'effet sur l'annonce (doit-on la corriger pour ne pas induire en erreur ?) et sur les candidats en cours (information honnête, nouvelle adéquation). Vous ne laissez pas une annonce active qui décrit un autre emploi.\n\nAprès embauche, la fiche sert à l'intégration. Le recruteur junior n'en est plus le propriétaire, mais il a intérêt à transmettre la version validée à la personne qui accueille. Un écart entre le vendu au candidat et le vécu à J+15 est un échec de cadrage, pas seulement un échec de management."
        ),
        h("Méthode opérationnelle"),
        t(
          "Envoyez fiche + profil + (plus tard) projet d'annonce. Demandez une validation par section si le manager est bavard. Délai : 48 à 72 heures, relance datée. Versionnez (v1, v2). Après validation, freeze des critères pour la campagne. Toute demande de changement en cours de process : réunion courte, écrit, décision de poursuivre, d'informer les candidats, ou de stopper. Contrôle : la date de validation est sur le dossier du poste."
        ),
        note(
          "Bonne pratique : freeze des critères pendant une campagne. Obligation : ne pas introduire un critère interdit « en cours de route » ; ne pas laisser une offre active fausse (L. 5331-3, module 3). Politique interne : circuit de validation propre à l'entreprise."
        ),
        h("Exemple professionnel"),
        t(
          "ETI, poste de chef de projet. Version 1 validée. En milieu de shortlist, le N+2 exige « anglais C1 et 8 ans » qui n'étaient pas dans la fiche. Deux candidats déjà reçus n'ont pas ce niveau. Vous ne discriminez pas a posteriori. Vous faites une réunion : soit le besoin a vraiment changé (projet international nouveau) et l'on reprend process, annonce, information des candidats ; soit c'est une préférence tardive, et l'on tient la fiche validée. Vous documentez le choix. Vous ne « glissez » pas le C1 seulement sur le candidat que le N+2 n'a pas aimé."
        ),
        code(
          `VALIDATION FICHE DE POSTE — circuit junior

Document : Fiche + profil    Version : ....    Date d'envoi : ....
Manager : ..........    RH : ..........    Autre : ..........

Sections validées : finalité / missions / hors périmètre /
conditions / indispensables / souhaitables

Demandes de correction : ......................................
Arbitrage fait : oui / non    Par : ..........    Date : ....

FREEZE campagne : oui, à compter du ..........
Changement en cours de process : interrompt le freeze
→ écrit + effet candidats + effet annonce

Transmission post-embauche à l'accueil : oui / non    Date : ....`
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Lancer l'annonce « en attendant la validation ». Empiler les versions sans freeze. Modifier la grille pour un CV. Oublier d'aligner l'annonce après un vrai changement. Ne jamais renvoyer la fiche à l'intégration. Prendre la colère d'un manager pour une actualisation de besoin."
        ),
        h("Situations particulières"),
        t(
          "Manager qui ne lit pas : réunion de 15 minutes sur le document partagé, validation en séance. Multi-décideurs : une validation conjointe, pas deux fiches. Poste confidentiel : validation restreinte, même rigueur. Intérim : toute modification de qualification, horaires ou lieu en cours de mission se recadre avec le client et le salarié concerné ; ce n'est plus seulement une fiche."
        ),
        h("Mise en pratique"),
        t(
          "L'annonce est en ligne depuis 10 jours. Le manager écrit : « En fait on veut quelqu'un de plus jeune, et du full remote. » Que faites-vous, dans l'ordre, en 8 lignes ?"
        ),
        h("Correction détaillée"),
        t(
          "1. Recadrer « plus jeune » : critère d'âge interdit, n'entre ni dans la fiche ni dans le tri. 2. Traiter le full remote comme un possible vrai changement de conditions : est-ce une règle d'équipe validée, ou un caprice de sourcing ? 3. Si le remote change vraiment : nouvelle validation, mise à jour fiche, correction de l'annonce (ne pas laisser un présentiel obligatoire si le poste devient remote — allégation trompeuse). 4. Informer les candidats déjà en process des conditions réelles. 5. Ne pas appliquer le remote à géométrie variable. 6. Ne pas relancer une campagne sur l'âge. 7. Écrire tout cela. 8. Si le manager insiste sur l'âge : alerte RH, pas de « filtre discret »."
        ),
      ],
    }),

    quizLesson({
      title: "Quiz — Construire le profil et la fiche de poste",
      description:
        "Vérifier que vous distinguez les documents, classez les critères et construisez une sélection pondérée licite.",
      passing_score: 70,
      minutes: 15,
      questions: [
        q({
          question:
            "Quel ordre professionnel est le plus solide une fois le brief validé ?",
          options: [
            "A. Annonce, puis profil, puis fiche si quelqu'un a le temps.",
            "B. Fiche de poste (ou mise à jour), profil de sélection, puis annonce.",
            "C. Profil LinkedIn du manager, puis annonce, la fiche est facultative.",
            "D. Grille de salaire, puis annonce, la fiche vient à l'intégration.",
          ],
          correct: 1,
          explanation:
            "On décrit l'emploi, on en tire les critères internes, on communique ensuite. Publier d'abord produit un texte décorrélé du travail. La fiche n'est pas un luxe d'après embauche.",
        }),
        q({
          question:
            "Une compétence comportementale utile dans un profil est surtout…",
          options: [
            "A. Un trait de caractère (« passionné, leader né »).",
            "B. Une capacité observable dans une situation de travail, formulée par un verbe, un objet et un contexte.",
            "C. Une note de feeling après le premier regard sur le CV.",
            "D. Un synonyme de « culture d'entreprise ».",
          ],
          correct: 1,
          explanation:
            "Sans situation observable, le comportemental devient un biais. Le feeling et la « culture » ne sont pas des compétences.",
        }),
        q({
          question:
            "Le lieu de résidence comme filtre (« habite à moins de 20 minutes ») est…",
          options: [
            "A. Un éliminatoire professionnel classique, pratique en PME.",
            "B. Un souhaitable, à mettre dans l'annonce.",
            "C. Un critère protégé : on décrit le lieu de travail et les horaires, on ne filtre pas sur la résidence.",
            "D. Autorisé si on le formule « candidat local ».",
          ],
          correct: 2,
          explanation:
            "L. 1132-1 mentionne le lieu de résidence parmi les critères protégés. Reformuler « local » ne rend pas le filtre licite. On pose les faits du poste (site, horaires, déplacements).",
        }),
        q({
          question:
            "À quoi sert principalement une pondération figée avant l'arrivée des CV ?",
          options: [
            "A. À garantir mathématiquement l'absence de tout biais.",
            "B. À discipliner la comparaison sur des critères nommés à l'avance, plutôt que de recaler les poids sur le candidat préféré.",
            "C. À remplacer les entretiens.",
            "D. À justifier de ne pas informer les candidats des méthodes utilisées.",
          ],
          correct: 1,
          explanation:
            "La grille discipline, elle n'abolit pas le jugement et ne remplace pas l'entretien. L'information préalable sur les méthodes (L. 1221-8) n'est pas éludée par un tableau interne.",
        }),
        q({
          question:
            "Dans la fiche Armor Négoce, pourquoi un « hors périmètre » est-il indispensable ?",
          options: [
            "A. Pour décorer le document RH.",
            "B. Pour empêcher le poste fourre-tout (paie complète, commercial, informatique) et garder un profil tenable.",
            "C. Parce que la loi impose une liste d'exclusions dans toute fiche.",
            "D. Pour pouvoir payer moins.",
          ],
          correct: 1,
          explanation:
            "Le hors périmètre est un outil de cadrage, pas une obligation légale de forme, ni un levier salarial. Sans lui, la PME recrute un emploi impossible.",
        }),
        q({
          question:
            "Un CTO veut « école d'ingénieurs uniquement » pour un poste backend. Le remplacement le plus professionnel est…",
          options: [
            "A. Garder l'école en éliminatoire, c'est un proxy de niveau.",
            "B. Exiger un GitHub public très actif.",
            "C. Exiger d'avoir déjà livré et maintenu du backend en conditions réelles, le diplôme passant en souhaitable s'il reste.",
            "D. Exiger 10 ans d'expérience pour compenser.",
          ],
          correct: 2,
          explanation:
            "On sélectionne des actes de travail. L'école seule, le GitHub public imposé ou un mur d'années mal justifié ne sont pas de meilleurs proxies.",
        }),
        q({
          question:
            "En cours de shortlist, un N+2 ajoute un critère d'anglais C1 absent de la fiche validée, et l'applique seulement au candidat qu'il n'a pas aimé. Que faites-vous ?",
          options: [
            "A. Vous appliquez le C1 à cette personne seulement, pour respecter la hiérarchie.",
            "B. Vous documentez : soit le besoin a vraiment changé pour tous (reprise de process et information), soit le critère tardif n'est pas retenu ; pas de géométrie variable.",
            "C. Vous fermez les yeux : l'anglais n'est jamais un problème juridique.",
            "D. Vous baissez la note de « feeling » du candidat concerné, sans écrire l'anglais.",
          ],
          correct: 1,
          explanation:
            "Un critère doit être le même pour tous. L'anglais peut être un vrai critère d'emploi s'il a un lien ; ce qui est inacceptable est l'application ciblée et tardive, ou le feeling caché.",
        }),
        q({
          question:
            "Quelle affirmation sur L. 1221-6 est exacte au stade de la construction du profil ?",
          options: [
            "A. On peut demander toute information « utile à l'ambiance d'équipe ».",
            "B. Les informations demandées au candidat doivent avoir pour seule finalité d'apprécier la capacité à occuper l'emploi ou les aptitudes professionnelles, avec un lien direct et nécessaire.",
            "C. L. 1221-6 ne concerne que les questionnaires écrits, pas le brief.",
            "D. L. 1221-6 autorise la photo si elle est « professionnelle ».",
          ],
          correct: 1,
          explanation:
            "Le texte vise les informations sous quelque forme que ce soit. L'ambiance, la photo de convenance et le brief oral n'échappent pas au lien avec l'emploi. https://code.travail.gouv.fr/code-du-travail/l1221-6",
        }),
        q({
          question:
            "Permis B : dans quel cas peut-il être un éliminatoire professionnel ?",
          options: [
            "A. Par principe, pour tout poste en PMI.",
            "B. Lorsque des déplacements réguliers sans alternative sont un fait du poste, comme deux sites distants à desservir.",
            "C. Pour vérifier que la personne « a une vie structurée ».",
            "D. Pour filtrer les candidats qui habitent trop loin, sans parler des déplacements.",
          ],
          correct: 1,
          explanation:
            "Le permis se justifie par l'emploi (déplacements). Il n'est pas un test de moralité ni un substitut au filtre de résidence.",
        }),
        q({
          question:
            "L'annonce est en ligne. Le manager veut « quelqu'un de plus jeune » et du full remote. Quelle combinaison est correcte ?",
          options: [
            "A. Filtrer l'âge en silence et passer l'annonce en remote sans valider.",
            "B. Recadrer l'âge (interdit), traiter le remote comme un possible vrai changement de conditions à valider, puis aligner fiche, annonce et candidats en cours.",
            "C. Tout refuser, y compris le remote, parce qu'une fiche ne se touche jamais.",
            "D. Fermer le poste : tout changement en cours est illégal.",
          ],
          correct: 1,
          explanation:
            "L'âge ne s'arbitre pas. Le remote peut être une actualisation légitime s'il est vrai et validé ; alors fiche et annonce doivent cesser de se contredire, et les candidats sont informés. Une fiche peut vivre ; un process ne se truque pas.",
        }),
      ],
    }),
  ],
};
