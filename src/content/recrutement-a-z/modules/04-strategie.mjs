import { lesson, h, t, note, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 4,
  title: "Construire une stratégie de recrutement",
  description:
    "Choisir les canaux, le calendrier et le budget d'un recrutement en lisant le marché, en respectant les obligations à signaler aux RH, et en distinguant politique interne et bonne pratique.",
  lessons: [
    lesson({
      title: "Lire le marché de l'emploi avant d'ouvrir un poste",
      description:
        "Relier l'intitulé, le bassin, le contrat et la tension du métier au choix des canaux et à un délai réaliste.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez décrire le marché d'un poste en trois couches (intitulé, bassin, contrat), distinguer un métier en tension d'un métier abondant, et en déduire des conséquences opérationnelles : canaux, délai, implication du manager, vigilance salariale. Vous savez aussi ce que vous ne devez pas inventer : un chiffre de tension, un délai « moyen du marché », une statistique de conversion."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Une stratégie de recrutement n'est pas une liste de jobboards. C'est une lecture du marché, puis un choix de moyens adaptés au besoin déjà cadré (fiche de poste, critères, délai, budget). Sans cette lecture, le recruteur junior ouvre les mêmes canaux pour un commercial sédentaire en CDI, un technicien de maintenance de nuit et un profil produit rare. Il promet un calendrier qu'il ne tiendra pas et il expose l'entreprise à un process trop long, trop cher, ou trop pauvre en candidatures utiles.\n\nLe marché de l'emploi, pour un poste donné, se lit en trois couches. Première couche : l'intitulé et ses synonymes. Un « chargé de clientèle BtoB » n'est pas un « business developer ». Un « technicien de maintenance industrielle » n'est pas un « agent de maintenance immobilière ». Si vous cherchez le mauvais nom, vous lisez le mauvais marché. Deuxième couche : le bassin d'emploi et le lieu de travail. Recruter un préparateur de commandes dans une zone logistique dense n'est pas recruter le même métier dans une commune isolée, avec les mêmes horaires et le même transport. Troisième couche : le contrat, le rythme et le niveau. Un CDD de trois mois, un CDI de jour et un CDI en 3×8 n'attirent pas les mêmes personnes. Ces trois couches déterminent si une annonce suffira, ou s'il faudra sourcer, coopter, passer par l'intérim ou un cabinet.\n\nUn métier est dit « en tension » lorsque les employeurs peinent à pourvoir les postes, parce que les compétences sont rares, géographiquement concentrées, fortement sollicitées, ou peu attractives aux conditions proposées. Cette notion n'est pas une obligation légale. C'est un constat de marché. France Travail, les branches professionnelles, les observatoires de métiers et, en interne, l'historique des recrutements de l'entreprise, fournissent des diagnostics. Vous ne devez pas inventer un taux de tension, un nombre de candidats « moyens » ou un délai « du marché ». Vous reliez le constat disponible au choix des canaux, au réalisme du délai annoncé au manager, et à la discussion salariale avec les RH.\n\nLa lecture du marché a une conséquence directe sur le rôle du recruteur junior. Si le poste est abondant (nombreuses candidatures spontanées ou réponses d'annonces sur des postes similaires récents), une diffusion d'offre bien rédigée, plus un vivier interne, peuvent suffire. Si le poste est tendu, l'annonce seule est souvent insuffisante : il faut un plan multicanal, un sourcing actif, parfois un cabinet ou de l'intérim, et un manager disponible pour accélérer les décisions. Dans tous les cas, le choix des canaux est une politique interne ou une bonne pratique, pas une obligation légale — sauf lorsqu'une obligation particulière doit être signalée aux RH, notamment une priorité de réembauche après licenciement économique."
        ),
        note(
          "Ne présentez jamais un chiffre de marché, un délai « moyen » ou un taux de conversion si vous ne l'avez pas sous la main dans une source interne ou institutionnelle. Inventer une statistique pour convaincre un manager n'est pas professionnel. En cas de doute, dites ce que vous observez (volume d'offres comparables, historique interne) et ce que vous ne savez pas encore."
        ),
        h("Méthode opérationnelle"),
        t(
          "Avant d'ouvrir le moindre canal, vous constituez une mini-note de marché, même courte, que vous pouvez montrer au manager et aux RH. Ordre de travail :\n\n1. Relire la fiche de poste et l'intitulé retenu. Lister deux ou trois synonymes réellement utilisés dans les offres (pas des anglicismes décoratifs).\n2. Identifier le lieu de travail, le télétravail éventuel, les horaires, le type de contrat et la date de prise de poste souhaitée.\n3. Consulter l'historique interne : postes proches pourvus dans les 12 à 24 derniers mois, canaux qui ont produit des embauches, délais constatés, difficultés notées. C'est souvent la source la plus fiable pour un junior.\n4. Regarder les offres comparables actuellement en ligne (intitulé, bassin, contrat) pour comprendre le langage du marché et le niveau d'exigence habituel — sans copier une annonce concurrente, et sans en déduire un salaire « obligatoire ».\n5. Qualifier le poste : abondant, intermédiaire, tendu. Cette qualification est un jugement professionnel étayé, pas un label officiel.\n6. En déduire une première hypothèse de canaux et un délai réaliste, à valider avec le manager et les RH.\n7. Signaler immédiatement aux RH tout élément juridique à vérifier avant diffusion : licenciement économique récent et priorité de réembauche possible, obligation d'emploi de travailleurs handicapés, accord interne sur la mobilité, règle de publication interne préalable."
        ),
        code(`NOTE DE MARCHÉ — trame junior (à classer dans le dossier de poste)

Poste : [intitulé]
Contrat / lieu / horaires : [ ]
Synonymes d'intitulé : [ ]
Historique interne (postes proches) : [délai, canaux, difficultés]
Lecture externe (offres comparables, sans statistique inventée) : [ ]
Qualification : abondant / intermédiaire / tendu
Hypothèse de canaux : [ ]
Délai réaliste proposé au manager : [ ]
Points à signaler aux RH (priorité de réembauche, accord interne, etc.) : [ ]
Date de la note / auteur : [ ]`),
        h("Exemple professionnel"),
        t(
          "Chez Alizé Services, PME de 45 personnes en services aux entreprises, le directeur commercial demande un « business developer » en CDI, prise de poste « dès que possible », pour un portefeuille de TPE de la région lyonnaise. Le recruteur junior, Léa Moreau (prénom d'emprunt), relit la fiche : il s'agit d'un commercial sédentaire et terrain, BtoB, 2 à 5 ans d'expérience, véhicule de service, pas d'anglais quotidien. Elle cherche l'historique interne : le dernier commercial a été embauché il y a 14 mois via une annonce France Travail + Indeed, en sept semaines, après 38 candidatures dont 6 préqualifiées. Elle observe des offres comparables sous « commercial BtoB », « chargé d'affaires TPE » et « attaché commercial ». Elle classe le poste en « intermédiaire » : l'annonce devrait produire un flux, mais le délai de sept semaines n'est pas « dès que possible ». Elle propose au manager un plan annonce + cooptation + vivier, un délai cible de six à huit semaines, et une discussion RH sur la fourchette salariale affichée ou non dans l'offre (bonne pratique, pas une obligation française consolidée au 13/10/2026)."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Ouvrir LinkedIn et un jobboard le jour même, sans note de marché, parce que le manager « a urgence ». Reprendre le même mix de canaux que le recrutement précédent, alors que le métier, le lieu ou le contrat ont changé. Qualifier un poste de « tendu » pour justifier un cabinet cher, sans autre élément que l'impatience du manager. Annoncer un délai de quinze jours sur un métier rare. Inventer un « 40 candidats en moyenne » pour rassurer. Oublier de demander aux RH s'il existe une priorité de réembauche ou une publication interne obligatoire. Confondre le marché national d'un métier et le bassin local du poste."
        ),
        h("Situations particulières"),
        t(
          "En startup, le marché se lit aussi à l'aune de la marque employeur et du package (intéressement, remote, titre). Un intitulé « Product Manager » peut attirer un flux visuellement abondant et un vivier réellement pauvre si le niveau demandé est senior pour un salaire junior. En ETI industrielle, le marché se lit souvent par diplômes reconnus, habilitations (électrique, CACES) et 3×8 : le volume d'offres en ligne sous-estime la difficulté réelle. En cabinet ou intérim, vous lisez le marché du client et le vôtre : disponibilité des intérimaires, délais de mission, concurrence d'autres agences. Dans une zone rurale, le transport et le logement pèsent davantage que l'intitulé. Dans tous ces cas, la méthode reste la même : trois couches, historique interne, pas de statistique inventée, signalement RH des obligations."
        ),
        h("Mise en pratique"),
        t(
          "Vous êtes chargé de recrutement junior dans une ETI de maintenance industrielle. Le responsable d'atelier ouvre un poste de technicien de maintenance mécanique, CDI, 3×8, site à 18 km d'une ville moyenne, habilitation électrique souhaitée. Le manager dit : « Mettez l'annonce partout, on a besoin de quelqu'un dans quinze jours. » Rédigez une note de marché d'une page (trame ci-dessus) et formulez, en cinq lignes, ce que vous répondez au manager et ce que vous signalez aux RH. Vous n'avez pas de chiffre de tension sous la main."
        ),
        h("Correction détaillée"),
        t(
          "La note doit d'abord recadrer l'intitulé (technicien de maintenance mécanique / électromécanicien selon les usages locaux), le contrat (CDI 3×8) et le lieu (site excentré : le bassin n'est pas « la France »). Sans statistique, vous pouvez écrire : historique interne à compléter avec les RH (dernier recrutement similaire, canaux, délai) ; offres comparables observées sous les synonymes, souvent avec habilitations ; qualification probable « tendu ou intermédiaire-tendu » en raison des 3×8, de l'habilitation et du lieu — jugement à confirmer, pas un label. L'hypothèse de canaux ne peut pas être « partout » : annonce ciblée, intérim possible en passerelle, écoles/CFP, cooptation atelier, éventuellement cabinet spécialisé si le délai et le budget le justifient. La réponse au manager : quinze jours n'est pas un délai réaliste pour un CDI 3×8 habilitation sur un site excentré ; vous proposez un délai cible après lecture de l'historique, et une solution intérim de transition si la production l'exige. Le signalement RH : vérifier priorité de réembauche si licenciement économique antérieur sur des postes proches ; vérifier les règles internes de publication ; cadrer le budget intérim vs cabinet vs annonce. Vous n'inventez aucun taux de conversion."
        ),
        code(`RÉPONSE TYPE AU MANAGER (extrait)

« Je diffuse dès que la fiche et les RH sont alignés, mais quinze jours pour un CDI 3×8 avec habilitation sur ce site n'est pas un délai que je peux garantir. Je vous propose : 1) note de marché et mix de canaux demain ; 2) intérim de transition si l'atelier ne peut pas attendre ; 3) point de suivi hebdomadaire. Je vérifie aussi avec les RH s'il existe une priorité de réembauche ou une publication interne obligatoire avant les canaux externes. »`),
      ],
    }),

    lesson({
      title: "Recrutement interne et recrutement externe : arbitrer",
      description:
        "Savoir quand chercher d'abord en interne, ce qui est obligation, accord ou politique, et comment articuler les deux sans perdre de temps.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous distinguez recrutement interne (mobilité, promotion, réaffectation) et recrutement externe. Vous savez que le choix des canaux externes n'est pas une obligation légale, alors qu'une priorité de réembauche, un accord ou une règle interne de publication peuvent créer une obligation à traiter avant d'ouvrir le marché. Vous savez arbitrer avec le manager et les RH, pas seul."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Recruter en interne, c'est pourvoir le poste avec une personne déjà liée à l'entreprise : salarié en mobilité, en promotion, en réaffectation, parfois en retour d'absence. Recruter en externe, c'est chercher une personne qui n'occupe pas déjà ce contrat dans l'organisation : candidature, sourcing, intérim, cabinet, école. Les deux ne s'opposent pas mécaniquement. Un process sérieux peut publier en interne et préparer les canaux externes en parallèle, à condition de respecter l'ordre fixé par le droit applicable, les accords et la politique de l'entreprise.\n\nLe recruteur junior confond souvent trois natures de règles. Première nature : l'obligation légale. Après certains licenciements économiques, une priorité de réembauche peut s'appliquer au bénéfice de salariés licenciés. Ce n'est pas au junior d'en fixer seul le périmètre, la durée ou la liste des bénéficiaires. C'est une obligation à signaler immédiatement aux RH, avant d'ouvrir un jobboard ou un cabinet. Deuxième nature : l'accord collectif, le règlement ou la politique RH interne. Beaucoup d'entreprises imposent une publication interne pendant quelques jours, un passage par la mobilité, ou une validation du comité de direction au-delà d'un niveau de poste. Ce n'est pas « la loi » au sens du Code du travail : c'est une règle de l'employeur, que vous appliquez. Troisième nature : la bonne pratique. Même sans règle écrite, commencer par le vivier interne et la cooptation évite de payer un cabinet pour un profil qui existe déjà à deux bureaux de là.\n\nL'arbitrage interne / externe n'est pas qu'une question d'éthique managériale. Il a des effets concrets : délai, coût, climat social, montée en compétence, risque de frustration si un candidat interne n'est pas reçu, risque de « copier-coller » si l'on promeut sans évaluer. Un candidat interne doit être évalué avec la même rigueur qu'un candidat externe, sur la capacité à occuper l'emploi (article L. 1221-6 du Code du travail : les informations demandées doivent avoir un lien direct et nécessaire avec l'emploi). Il n'a pas un droit automatique au poste, sauf dispositif particulier que les RH vous indiqueront.\n\nEnfin, l'interne ne « coûte rien » que sur le papier. Un salarié promu laisse un poste derrière lui. Un plan de recrutement sérieux prévoit cette vacance en cascade, ou assume de la traiter plus tard. Le junior qui « gagne deux semaines » en nommant un interne sans plan de remplacement crée un second recrutement dans l'urgence. L'arbitrage se fait donc à trois : manager du poste, manager du candidat interne, RH."
        ),
        note(
          "Obligation vs choix de canaux. La priorité de réembauche (lorsqu'elle s'applique) est une obligation à faire traiter par les RH. Publier sur Indeed, LinkedIn, un jobboard spécialisé, une école ou un cabinet est un choix de politique interne ou une bonne pratique. Ne dites jamais à un manager : « On n'a pas le droit de recruter en externe avant d'avoir postulé en interne » si vous n'avez pas vérifié l'accord ou la politique. Demandez aux RH."
        ),
        h("Méthode opérationnelle"),
        t(
          "1. Demander aux RH, dès le cadrage du besoin : existence d'une priorité de réembauche à vérifier ; accord ou politique de mobilité / publication interne ; vivier de salariés volontaires à la mobilité ; éventuelle obligation d'emploi ou engagement interne à relayer auprès de certains publics (ce n'est pas au junior d'improviser un critère illicite).\n2. Lister les viviers internes : mobilité déclarée, anciens candidats internes, personnes en CDD ou intérim déjà connues sur le site, apprentis en fin de cycle.\n3. Convenir avec le manager d'un ordre : publication interne seule pendant X jours (si politique), ou interne + préparation externe en parallèle.\n4. Informer les candidats internes du process, des critères et du calendrier — même information de méthode que pour l'externe (article L. 1221-8 : le candidat est informé préalablement des méthodes d'aide au recrutement).\n5. Évaluer l'interne avec la grille du poste, pas avec « on le connaît ». Documenter le refus interne avec le même soin que le refus externe.\n6. Si l'interne est retenu, ouvrir immédiatement le plan de remplacement du poste laissé vacant.\n7. Si l'externe est ouvert, ne pas abandonner l'interne en cours de route sans réponse."
        ),
        h("Exemple professionnel"),
        t(
          "Nimvia, startup produit de 28 personnes, ouvre un poste de Customer Success. La CEO veut « quelqu'un du marché, qui a déjà fait du SaaS ». Le support interne compte une salariée en CDI depuis 18 mois, Clara Dufour (nom d'emprunt), qui a demandé une mobilité. La politique interne, écrite, prévoit 7 jours de publication sur l'intranet avant tout jobboard. Le recruteur junior publie en interne, reçoit Clara, l'évalue sur la grille (gestion de portefeuille, priorisation, écrit professionnel). Il informe la CEO que la politique interne s'applique, que Clara doit être reçue, et que les canaux externes peuvent être préparés (annonce rédigée, pas encore diffusée). Clara n'est pas retenue : le niveau d'anglais client est insuffisant, critère professionnel annoncé. Le refus est expliqué, tracé, et l'annonce part le 8e jour. Le choix des jobboards reste une politique / bonne pratique. Aucune priorité de réembauche n'a été signalée par les RH."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Ouvrir LinkedIn le jour J parce que le manager « ne veut personne de l'équipe ». Promettre le poste à un interne pour « dépanner » sans évaluation. Oublier de demander la priorité de réembauche. Traiter le candidat interne sans grille, puis le recaler sans trace, ce qui alimente un conflit social. Diffuser en externe pendant la période de publication interne obligatoire prévue par la politique. Croire que l'interne est gratuit et négliger le poste laissé vacant. Inversement, bloquer tout canal externe « par principe » alors qu'aucune règle ne l'impose et que le métier est tendu."
        ),
        h("Situations particulières"),
        t(
          "Licenciement économique récent : stoppez-vous et saisissez les RH avant tout canal externe. Intérim longue durée sur le poste : la personne déjà en mission est un vivier interne de fait ; l'évaluer n'interdit pas de comparer. Groupe multi-sites : l'interne peut être un salarié d'un autre établissement ; vérifiez mobilité géographique et statut. Représentation du personnel : certains postes ou certaines étapes sont informés selon les usages de l'entreprise ; encore une fois, les RH pilotent. Cabinet de recrutement : le contrat avec le cabinet ne vous dispense pas des règles internes de l'entreprise cliente."
        ),
        h("Mise en pratique"),
        t(
          "Le manager d'une PME de services vous écrit : « Pas la peine de publier en interne, personne n'est au niveau, allez directement sur les jobboards. » La politique RH, que vous avez sous les yeux, impose 5 jours ouvrés de publication intranet. Les RH vous ont aussi demandé de signaler tout licenciement économique des 24 derniers mois. Que faites-vous, dans l'ordre, et que répondez-vous au manager ?"
        ),
        h("Correction détaillée"),
        t(
          "Vous ne suivez pas l'instruction du manager sur les canaux, parce que la publication interne est ici une politique interne applicable, pas une option. Vous confirmez aux RH l'ouverture du poste et posez la question de la priorité de réembauche. Vous publiez en interne 5 jours ouvrés, vous préparez l'annonce externe sans la diffuser. Vous répondez au manager que la politique s'applique, que cela n'interdit pas de préparer l'externe, et que si aucun interne n'est au niveau, le process externe partira au terme des 5 jours. Vous ne dites pas que « la loi interdit l'externe » : ce n'est pas exact. Vous ne qualifiez pas les internes « hors niveau » avant de les avoir évalués."
        ),
      ],
    }),

    lesson({
      title: "Cartographier les canaux : jobboards, écoles, cabinets, intérim, approche directe, cooptation",
      description:
        "Connaître le rôle, le coût, le délai et les limites de chaque canal, et les choisir selon le poste, pas selon l'habitude.",
      minutes: 22,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez décrire six familles de canaux (jobboards et France Travail, écoles et organismes de formation, cabinets, intérim, approche directe, cooptation), ce qu'elles produisent, ce qu'elles coûtent en temps et en argent, et dans quel cas les activer. Vous savez que cette cartographie est un outil de politique interne et de bonne pratique, pas un menu imposé par la loi."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Un canal de recrutement est un moyen d'entrer en contact avec des personnes susceptibles d'occuper l'emploi. Il n'existe pas de canal « magique ». Il existe des canaux adaptés à un intitulé, un bassin, un contrat, un délai et un budget. Le recruteur junior qui « met partout » dilue son message, sature le manager de profils inadaptés et ne sait plus d'où vient la candidature utile. Le recruteur junior qui n'utilise qu'un seul canal (souvent LinkedIn ou un jobboard généraliste) se prive d'un vivier entier.\n\nLes jobboards et France Travail sont des canaux de diffusion d'offre : le candidat vient à vous. Ils conviennent bien lorsque le métier est lisible, le contrat attractif et le volume de réponses attendu suffisant. Ils conviennent mal seuls lorsque le métier est rare, mal nommé, ou que les personnes en poste ne consultent pas les annonces. France Travail reste un relais utile, y compris pour des publics éloignés de l'emploi ou des bassins locaux : ce n'est ni un canal « bas de gamme » ni une obligation pour chaque poste, sauf politique interne ou partenaire particulier.\n\nLes écoles, CFA, universités et organismes de formation alimentent les profils juniors, alternants, stagiaires et parfois la formation continue. Le délai n'est pas celui d'une annonce : il suit les calendriers de promotion. Un cabinet de recrutement (approche directe, chasse, rétrocession) vend un service de recherche et d'évaluation. Il se justifie sur un profil rare, confidentiel, senior, ou lorsque l'interne n'a pas la bande passante. Ce n'est pas un aveu d'échec : c'est un achat de moyen. L'intérim (agence de travail temporaire) pourvoit un besoin de flexibilité, un remplacement, un pic, ou une passerelle vers un CDI. Confondre cabinet et intérim est une erreur de débutant : l'un cherche souvent un contrat durable pour le client ; l'autre met à disposition un salarié de l'agence, dans un cadre légal propre que les RH et l'agence maîtrisent.\n\nL'approche directe (sourcing actif, messages, appels) va chercher des personnes qui n'ont pas postulé. Elle est décisive sur les métiers en tension et les profils en poste. Elle exige du temps, une écriture soignée et le respect du RGPD et des conditions d'utilisation des plateformes. La cooptation mobilise les salariés : un collaborateur oriente une personne de son réseau. C'est souvent un canal rapide et de qualité si la prime, les critères et l'éthique sont clairs (pas de pression, pas de discrimination, même grille d'évaluation). La cooptation est une politique interne, pas une obligation légale.\n\nAucun de ces canaux n'exonère des règles de non-discrimination (article L. 1132-1) ni des règles de l'offre lorsqu'il y a annonce (français, mentions interdites, allégations — voir le module offres). Le canal change le mode d'entrée ; il ne change pas le droit applicable au recrutement."
        ),
        note(
          "Le choix d'un canal n'est pas une obligation légale, sauf règle interne, accord, marché public ou priorité à faire traiter par les RH. Un jobboard n'est pas « plus légal » qu'une approche directe. En revanche, chaque canal a des contraintes propres : contrat de l'agence d'intérim, contrat du cabinet, conditions d'utilisation d'un réseau, information RGPD des personnes sourcées."
        ),
        h("Méthode opérationnelle"),
        t(
          "Pour chaque poste, vous remplissez une carte de canaux avant de dépenser du temps ou de l'argent. Interlocuteurs : manager (où a-t-il déjà recruté ? qui connaît-il ?), RH (contrats cadre cabinet/intérim, politique de cooptation, budget), éventuellement communication interne (écoles partenaires). Documents : fiche de poste, note de marché, grille tarifaire interne des prestataires. Contrôle : chaque canal activé a un responsable, une date de lancement, un critère d'arrêt (trop de volume, trop peu, trop cher)."
        ),
        code(`CARTE DES CANAUX — à cocher selon le poste

Canal              | Utile si…                              | Coût principal         | Risque junior
-------------------|----------------------------------------|------------------------|---------------------------
Jobboards / FT     | Métier lisible, flux attendu           | Crédit d'annonce, temps| Annonce trop large
Écoles / CFA       | Junior, alternance, calendrier promo   | Temps de relation      | Trop tard dans l'année
Cabinet            | Rare, confidentiel, senior, urgence    | Honoraires             | Brief flou, doublon interne
Intérim            | Flexibilité, remplacement, passerelle  | Coefficient agence     | Confondre avec un CDI
Approche directe   | Profils en poste, tension, confidentialité | Temps recruteur | Message générique, CGU
Cooptation         | Équipe engagée, métier connu en interne| Prime éventuelle       | Copinage, biais, pression
Vivier / CVthèque  | Candidats déjà connus, réemploi        | Temps + RGPD           | Relancer hors durée / opposition`),
        h("Exemple professionnel"),
        t(
          "Forges & Maintenance du Centre, ETI industrielle, doit remplacer un électromécanicien de nuit parti en retraite. Le responsable d'atelier a déjà « mis une annonce Indeed il y a deux ans, ça n'avait rien donné ». Le recruteur junior cartographie : jobboard généraliste = canal secondaire (visibilité, pas le cœur) ; France Travail et jobboard industrie = oui ; CFA et école de maintenance = oui, mais pour un junior ou une alternance, pas pour remplacer un expert de nuit en trois semaines ; intérim = oui en passerelle pour tenir le planning ; cabinet spécialisé industrie = à arbitrer selon budget ; approche directe sur les profils en poste dans un rayon de 40 km = oui ; cooptation atelier = oui, avec consigne claire (même grille, pas de promesse). Le mix retenu n'est pas « partout » : cinq canaux, chacun avec une fonction."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Activer un cabinet « pour se couvrir » sur un poste junior abondant. Utiliser l'intérim comme unique stratégie d'embauche CDI sans en parler aux RH. Envoyer la même annonce sur dix jobboards et ne plus savoir d'où viennent les CV. Oublier la cooptation parce qu'il n'y a pas de prime, alors que l'équipe peut relayer. Faire de l'approche directe en copiant un message type sans le poste. Promettre à un école 4 embauches que le manager n'a pas validées. Négliger France Travail par snobisme. Signer un contrat cabinet sans vérifier qu'un interne n'est pas déjà en cours d'évaluation."
        ),
        h("Situations particulières"),
        t(
          "Poste confidentiel (remplacement d'une personne encore en poste) : l'annonce publique peut être dangereuse ; l'approche directe ou le cabinet sont souvent plus adaptés, avec un brief de confidentialité. Volume (10 préparateurs) : jobboards + intérim + écoles, process de sessions collectives, pas de chasse individuelle. Alternance : calendrier scolaire, référent pédagogique, règle interne d'accueil. Marché public ou entreprise sous accord particulier : les RH vous indiquent d'éventuels relais obligatoires. International : offre en français si le travail s'effectue en France (article L. 5331-4), même si un canal anglophone est utilisé en complément."
        ),
        h("Mise en pratique"),
        t(
          "Pour chacun des trois besoins suivants, choisissez 3 canaux maximum et justifiez en une phrase : (1) CDI assistant commercial, PME centre-ville, métier lisible, délai 8 semaines ; (2) CDD 4 mois préparateur de commandes, entrepôt, pic d'activité ; (3) CDI product designer senior, startup, profil rare, confidentialité du produit."
        ),
        h("Correction détaillée"),
        t(
          "(1) Jobboards + France Travail + cooptation / vivier : métier lisible, flux probable, pas besoin d'un cabinet. (2) Intérim en tête + jobboards + cooptation entrepôt : le CDD court et le pic appellent une mise à disposition rapide ; un cabinet CDI n'a pas de sens. (3) Approche directe + cabinet éventuel + réseau / cooptation produit : l'annonce seule exposerait le produit et attirerait un flux hors cible. Dans les trois cas, vous n'invoquez aucune obligation légale de canal ; vous proposez un mix. Vous signalez aux RH, pour les trois, la question de priorité de réembauche si elle n'a pas été tranchée."
        ),
      ],
    }),

    lesson({
      title: "Construire et animer un vivier de candidats",
      description:
        "Tenir une CVthèque utile, informer les personnes, respecter la recommandation CNIL de durée et le droit d'opposition.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez ce qu'est un vivier, à quoi il sert dans une stratégie, comment l'alimenter et l'animer, et comment le distinguer d'une base « fourre-tout ». Vous savez présenter la durée de 2 ans comme une recommandation CNIL, pas comme une durée unique imposée par le RGPD, et vous savez informer, tracer le dernier contact, et honorer une opposition."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Un vivier (ou CVthèque active) est un ensemble de personnes déjà identifiées, dont les données sont conservées pour de futurs recrutements, avec une finalité claire, une information des personnes, et une durée qui n'est pas infinie. Ce n'est pas le dossier des candidats du poste en cours : ce dossier-là vit le temps de la procédure, puis, pour les non-retenus, un archivage intermédiaire à des fins de preuve. La CNIL, dans son référentiel durées de conservation RH (publié le 2 avril 2026, mis à jour le 20 mai 2026) et dans son guide du recrutement, distingue ces traitements. Candidat non retenu : archivage intermédiaire de 5 ans à compter de la date à laquelle le poste a été pourvu, à des fins probatoires, en lien avec l'article L. 1134-5 du Code du travail — il s'agit d'une conservation de preuve, pas d'une autorisation de relancer la personne comme si elle était en vivier. Vivier / CVthèque : jusqu'à 2 ans à compter du dernier contact, sauf opposition — recommandation CNIL, pas une durée unique imposée par le RGPD lui-même.\n\nCette distinction change le quotidien du junior. Vous n'avez pas le droit, au nom du « on ne sait jamais », de laisser tous les CV en base active indéfiniment, ni de relancer dans 4 ans une personne non informée. Vous n'avez pas non plus l'obligation de tout supprimer au 24e mois si un autre traitement légitime (preuve) s'applique : encore une fois, ce sont deux bases, deux durées, deux finalités. En pratique, l'outil ATS doit permettre de séparer : process en cours ; archive probatoire ; vivier actif.\n\nAnimer un vivier, ce n'est pas envoyer une newsletter mensuelle générique. C'est : qualifier la personne (métier, bassin, contrat visé, dernier échange) ; informer de la conservation et de ses droits ; relancer lorsque un poste réel correspond ; tracer le dernier contact, qui fait courir la durée recommandée de 2 ans ; retirer sans délai en cas d'opposition. Un vivier mort (CV non relus, personnes jamais informées, doublons) coûte plus qu'il ne rapporte : il crée un risque RGPD et il donne au manager l'illusion d'un stock.\n\nLe vivier s'inscrit dans la stratégie : c'est le premier canal à interroger avant d'acheter une annonce ou un cabinet. Il ne remplace pas une lecture de marché. Un vivier de commerciaux sédentaires ne pourvoit pas un poste d'ingénieur maintenance. Alimenter le vivier est un travail continu, pas une tâche de fin de process : chaque entretien non retenu, chaque sourcing courtois, chaque candidature spontanée pertinente peut, si la personne est informée et d'accord, rejoindre le vivier."
        ),
        note(
          "Recommandation d'autorité, pas durée unique obligatoire. La CNIL recommande jusqu'à 2 ans à compter du dernier contact pour un vivier, avec information et possibilité d'opposition (guide recrutement, 30/01/2023, et référentiel 2026). Le RGPD n'écrit pas « 2 ans » comme une règle unique. L'archivage 5 ans des non-retenus est une logique probatoire (L. 1134-5), distincte du vivier. En cas de doute sur un cas réel, relisez le référentiel CNIL et demandez aux RH / DPO."
        ),
        h("Méthode opérationnelle"),
        t(
          "1. Vérifier avec les RH / DPO le paramétrage de l'ATS : finalités, durées, mentions d'information, registre.\n2. Pour chaque personne entrée en vivier : mention d'information (pourquoi, combien de temps, droits), support de recueil, date du dernier contact.\n3. Qualifier : métier, niveau, bassin, contrats acceptés, points de vigilance professionnels (disponibilité), jamais de commentaire discriminatoire.\n4. Interroger le vivier en premier à chaque ouverture de poste, avec la même grille que les autres canaux.\n5. Relancer de façon ciblée (un poste réel), pas par campagne fourre-tout.\n6. En cas d'opposition ou de demande de suppression du vivier : retirer de la base active ; conserver seulement ce que la politique probatoire impose, si elle s'applique, dans l'espace d'archive prévu.\n7. Purge périodique : personnes sans contact depuis la durée prévue, doublons, données inutiles."
        ),
        code(`FICHE VIVIER — champs minimaux (exemple de politique interne)

Identité professionnelle : prénom, nom, coordonnées
Postes / métiers cibles :
Bassin / mobilité :
Contrats envisagés :
Date d'entrée en vivier :
Date du dernier contact (fait courir la durée recommandée) :
Mention d'information envoyée le :
Opposition : non / oui (date, traitement)
Commentaire professionnel (faits, pas de critères protégés) :
Source d'entrée : candidature / sourcing / spontanée / interne`),
        h("Exemple professionnel"),
        t(
          "Alizé Services a 200 CV dans un dossier partagé « CVthèque 2019-2026 », sans mention d'information, avec des commentaires du type « trop âgée » et « accent ». Le nouveau recruteur junior refuse d'utiliser ce dossier comme vivier. Avec les RH, il isole les process des 5 dernières années pour l'archive probatoire, supprime les commentaires illicites, et reconstruit un vivier propre : 22 personnes informées par e-mail, qualifiées, dernier contact daté. Sur le poste commercial, 3 personnes du vivier sont relancées ; l'une d'elles entre en préqualification. Le dossier ancien n'est plus une source d'approche."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Relancer un CV de 2018 « au cas où ». Écrire « on garde votre CV 10 ans ». Mélanger archive de preuve et vivier actif. Noter un critère protégé dans la fiche. Oublier d'informer une personne sourcée sur LinkedIn avant de la ranger en CVthèque. Promettre au manager « on a 400 profils en base » alors que 380 ne sont plus contactables licitement. Traiter une opposition comme une simple « désinscription newsletter » sans retirer la fiche active."
        ),
        h("Situations particulières"),
        t(
          "Candidature spontanée : même régime d'information et de durée ; ce n'est pas un chèque en blanc. Intérimaire connu : les données relevant de l'agence et celles de votre vivier interne ne se confondent pas ; respectez les deux cadres. Candidat interne : la mobilité se gère souvent dans un traitement RH distinct ; ne mélangez pas avec la CVthèque externe sans consigne. Opposition pendant un process en cours : vous cessez les relances vivier ; le process du poste ouvert a sa propre base légale et sa propre durée, à faire dire par les RH."
        ),
        h("Mise en pratique"),
        t(
          "Un manager vous demande d'appeler « tous les CV refusés depuis 4 ans pour le poste de commercial ». Que répondez-vous ? Distinguez ce que vous pouvez faire, ce que vous signalez aux RH, et ce que vous refusez."
        ),
        h("Correction détaillée"),
        t(
          "Vous refusez d'appeler « tous les CV depuis 4 ans » comme un vivier. Au-delà de la durée recommandée de 2 ans à compter du dernier contact, et surtout sans information ni traçabilité, l'approche n'est pas conforme à la recommandation CNIL et au principe de durée limitée. Les dossiers de non-retenus peuvent exister en archive probatoire 5 ans : ce n'est pas une liste d'appels marketing. Vous proposez : extraire du vivier actif (informé, dernier contact < durée prévue, pas d'opposition) les profils commerciaux pertinents ; pour le reste, demander aux RH / DPO. Vous ne citez pas un « droit d'appeler 5 ans » qui n'existe pas."
        ),
      ],
    }),

    lesson({
      title: "Budget, calendrier et indicateurs de suivi",
      description:
        "Chiffrer les moyens, poser un calendrier réaliste et suivre un plan sans inventer d'indicateurs trompeurs.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez construire un budget de recrutement (temps interne, annonces, prestataires, cooptation, outils), un calendrier par étapes, et un tableau de suivi simple. Vous savez ce qu'un junior peut suivre (volume, délais, source des embauches) et ce qu'il ne doit pas inventer (taux « du marché », coût par embauche fantaisiste)."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Un plan de recrutement sans budget et sans calendrier n'est pas un plan : c'est une intention. Le budget n'est pas seulement la facture du cabinet. Il comprend le temps du recruteur, le temps du manager (entretiens), les crédits d'annonces, les éventuelles primes de cooptation, les honoraires, le coefficient d'intérim, les déplacements, les tests payants, et parfois l'onboarding. Un junior qui « offre » un cabinet au manager sans ordre de mission RH crée un engagement financier qu'il n'a pas le pouvoir de signer.\n\nLe calendrier se construit à l'envers de la date de prise de poste souhaitée, en ajoutant des étapes réelles : cadrage, publication interne éventuelle, diffusion, sourcing, préqualification, entretiens, décision, préavis du candidat, DPAE et intégration (la DPAE est une obligation de l'employeur avant la prise de fonction, au plus tôt dans les 8 jours précédant l'embauche — fiche Service-Public F23107 ; le junior coordonne, il ne « fait pas » la DPAE seul). Sur un métier tendu, le préavis du candidat en poste pèse souvent plus que le temps d'annonce. Promettre une arrivée au 1er du mois alors que le préavis est de trois mois n'est pas un calendrier, c'est une fiction.\n\nLe suivi sert à décider, pas à décorer un slide. Les indicateurs utiles au junior sont simples : nombre de candidatures reçues par canal, nombre de préqualifiés, nombre d'entretiens manager, délais entre étapes, source du candidat retenu, motifs de refus documentés (professionnels). Un taux de conversion n'a de sens que si le dénominateur est clair et le volume suffisant pour ne pas raconter n'importe quoi. Vous n'inventez pas de benchmark. Vous comparez à l'historique interne lorsqu'il existe.\n\nBudget, calendrier et suivi sont des outils de gouvernance. Ils rendent visibles les arbitrages : si le manager veut un profil rare pour dans trois semaines sans intérim et sans cabinet, le tableau montre l'incohérence. Le junior n'impose pas ; il formalise. Le choix de dépenser reste RH / direction. Le choix des canaux reste une politique interne. Le calendrier légal (DPAE, information des méthodes, non-discrimination) n'est pas compressible parce que le budget est trop juste."
        ),
        note(
          "La DPAE est une obligation de l'employeur, pas du recruteur junior isolé (Service-Public F23107, Urssaf). Vous la placez dans le calendrier d'embauche et vous coordonnez avec les RH. Vous ne la « sautez » pas pour gagner deux jours. Vous n'inventez pas non plus un coût moyen d'embauche national."
        ),
        h("Méthode opérationnelle"),
        t(
          "1. Lister les postes ouverts et la date de prise de poste souhaitée (souhait, pas promesse).\n2. Pour chaque poste : étapes, responsables, durées estimées à partir de l'historique interne si disponible.\n3. Associer à chaque canal un coût (temps ou argent) et un critère d'arrêt.\n4. Faire valider budget et calendrier par les RH avant engagement prestataire.\n5. Tenir un suivi hebdomadaire d'une page : pipeline, blocages, décisions à prendre.\n6. En fin de recrutement : source de l'embauche, délai réel, écart au calendrier, enseignement pour le prochain poste — sans statistique décorative."
        ),
        code(`CALENDRIER TYPE — CDI (adapter, ne pas copier comme norme)

S-0  Cadrage manager + RH, note de marché, priorités à signaler
S0   Publication interne si politique / préparation annonce
S1   Diffusion + sourcing + interrogation vivier
S2   Préqualifications
S3-4 Entretiens manager / éventuel 2e tour
S5   Décision, offre, négociation
S6+  Préavis candidat (variable) + DPAE + intégration

Suivi hebdo : candidatures / préqualifiés / entretiens / blocage / décision attendue`),
        h("Exemple professionnel"),
        t(
          "Pixeline, startup produit, veut un développeur backend « pour le sprint du 15 ». Le calendrier réel, posé par le recruteur : 10 jours de sourcing, 1 semaine d'entretiens, préavis probable d'un à trois mois. Le budget : crédits LinkedIn Recruiter déjà payés, pas de cabinet cette année, temps fondateur = 4 entretiens max. Le suivi montre, au bout de 12 jours, 7 conversations, 2 entretiens, 0 offre. La décision n'est pas « on communique plus fort » : c'est un arbitrage (élargir le niveau, ouvrir un cabinet, glisser le sprint, mission freelance). Le tableau a servi à décider, pas à cacher le délai."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Annoncer une date d'arrivée sans intégrer le préavis. Engager un cabinet par e-mail sans bon de commande RH. Suivre 25 indicateurs et n'en lire aucun. Afficher un « taux de transformation 12 % » calculé sur 8 CV. Oublier le temps manager dans le calendrier. Compresser la préqualification pour « aller plus vite », puis noyer le manager sous des profils non filtrés. Omettre la DPAE dans le rétroplanning d'embauche."
        ),
        h("Situations particulières"),
        t(
          "Multi-postes identiques : un calendrier de sessions (journées de recrutement) est plus efficace qu'un suivi individu par individu. Intérim : le calendrier de mission (démarrage, renouvellement, éventuel CDI) n'est pas celui d'un CDI classique. Cabinet : le calendrier contractuel (présentations garanties, exclusivité) s'ajoute au vôtre ; lisez le contrat. Startup en levée de fonds : le budget recrutement peut être gelé d'une semaine à l'autre ; le plan doit prévoir un stop/go."
        ),
        h("Mise en pratique"),
        t(
          "Le manager veut un chargé de clientèle en CDI, arrivée au 1er du mois dans 18 jours, budget annonces seulement, pas d'intérim. Construisez un calendrier en 8 lignes qui montre le conflit, et proposez deux options chiffrées en temps (pas en euros inventés)."
        ),
        h("Correction détaillée"),
        t(
          "Le calendrier doit faire apparaître : cadrage (déjà trop tard si on veut 18 jours), diffusion, délai de réponses, préqualification, entretiens, décision, préavis (souvent supérieur à 18 jours si la personne est en poste), DPAE. Le conflit est visible : 18 jours ne couvrent pas un CDI + préavis. Option A : tenir le CDI, glisser la date d'arrivée, budget annonces + sourcing temps interne. Option B : intérim ou CDD relais pour la date, CDI en parallèle — à valider RH (l'intérim a un coût, vous ne l'inventez pas, vous le faites chiffrer). Vous ne promettez pas l'impossible pour « faire plaisir »."
        ),
      ],
    }),

    lesson({
      title: "Construire un plan de recrutement multicanal",
      description:
        "Assembler marché, interne/externe, canaux, vivier, budget et calendrier en un plan unique, suivi et arrêtable.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez rédiger un plan de recrutement d'une à deux pages : objectif, contraintes, mix de canaux, ordre de lancement, budget, calendrier, indicateurs, points de vigilance juridiques à signaler. Vous savez qu'un plan multicanal n'est pas « plus de canaux », c'est une combinaison justifiée, avec des critères d'arrêt."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Un plan multicanal répond à une question simple : par quels moyens, dans quel ordre, avec quels moyens financiers et humains, allons-nous pourvoir ce poste dans un délai réaliste, sans discrimination, et sans engager l'entreprise à l'aveugle ? Il n'est pas un copier-coller du plan précédent. Il n'est pas non plus une collection de canaux activés le même matin. Chaque canal a une fonction : produire du volume, produire de la rareté, tenir un planning, respecter une politique interne, ou relayer une école partenaire.\n\nLa construction du plan suit une logique, pas une inspiration. On part du besoin cadré et de la note de marché. On tranche interne / externe avec les RH (politique, priorité de réembauche à signaler). On choisit un mix court (souvent trois à cinq canaux) plutôt qu'une liste de quinze. On séquence : ce qui est obligatoire ou politique d'abord (publication interne, traitement RH d'une priorité), puis le canal le plus probable au meilleur coût, puis les canaux de renfort si le pipeline est insuffisant à une date dite. On affecte un responsable et un critère d'arrêt à chaque canal. On pose le calendrier et le budget. On définit le suivi.\n\nLe plan est un document de travail, pas un contrat avec le candidat. Il ne crée pas une promesse d'embauche. Il ne fixe pas le salaire comme une obligation d'annonce (indiquer le salaire dans l'offre n'est pas une obligation consolidée en droit français au 13/10/2026 ; la directive (UE) 2023/970 est en transposition — bonne pratique / future obligation, à relire le jour J). Il doit en revanche être compatible avec le droit : non-discrimination dans le choix des viviers et des écoles, offres conformes, données des sourcés traitées selon le RGPD et les recommandations CNIL.\n\nUn bon plan se révise. Si, à la date de revue, le canal A n'a produit aucun préqualifié, on arrête A ou on change le message ; on n'ajoute pas D, E et F par panique. Le junior qui empile les canaux sans revue crée du bruit. Le junior qui attend la fin du mois pour dire que « ça n'a pas marché » a perdu le calendrier."
        ),
        note(
          "Le plan de recrutement est un outil interne. Il ne se confond ni avec l'offre d'emploi, ni avec une promesse d'embauche (Service-Public F39588 : l'offre de contrat et la promesse unilatérale sont des notions jurisprudentielles distinctes ; une promesse d'embauche n'est pas obligatoire). Ne faites pas signer un « plan » au candidat."
        ),
        h("Méthode opérationnelle"),
        t(
          "Ordre imposé au junior : (1) fiche de poste + critères ; (2) note de marché ; (3) questions RH (priorité de réembauche, publication interne, budget, prestataires cadrés) ; (4) mix et séquence ; (5) rédaction du plan une page ; (6) validation manager + RH ; (7) lancement ; (8) revue à date fixe. Outils : ATS pour tracer la source, tableur si l'ATS est pauvre. Contrôle : aucune diffusion externe avant le feu vert RH sur les points d'obligation."
        ),
        code(`PLAN DE RECRUTEMENT — structure unique

1. Poste, contrat, lieu, date souhaitée, date réaliste
2. Qualification de marché (abondant / intermédiaire / tendu) + sources (interne, pas de stats inventées)
3. Interne / externe : politique, priorité de réembauche (signalée aux RH : oui/non, réponse)
4. Mix de canaux (3 à 5) : fonction, date de lancement, responsable, critère d'arrêt
5. Vivier : interrogé le [date], N profils pertinents, N relances
6. Budget : temps interne, annonces, prestataires (à valider)
7. Calendrier des étapes et revue
8. Indicateurs de suivi
9. Vigilances : non-discrimination, RGPD vivier, offre conforme, DPAE en fin de course`),
        h("Exemple professionnel"),
        t(
          "Chez Alizé Services, le plan du commercial BtoB tient en une page : marché intermédiaire (historique interne 7 semaines) ; publication intranet 5 jours (politique) ; pas de priorité de réembauche selon RH ; mix = vivier (3 relances) + cooptation (mail interne J+0 après publication) + France Travail / Indeed (J+5) + approche directe légère si moins de 4 préqualifiés au 15e jour ; pas de cabinet ; revue le 15e jour ; budget = crédits d'annonces déjà souscrits + temps recruteur. Le manager signe le délai de 6 à 8 semaines. Le plan est suivi dans l'ATS (champ « source »)."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Rédiger le plan après avoir déjà diffusé. Mettre dix canaux pour « couvrir ». Oublier le critère d'arrêt. Ne pas tracer la source, donc ne jamais apprendre. Faire valider le plan par le seul manager, sans RH, alors qu'un cabinet est prévu. Copier un plan industrie sur un poste startup. Ajouter un canal discriminatoire (« uniquement cette école de fils de… ») : illicite, L. 1132-1."
        ),
        h("Situations particulières"),
        t(
          "Urgence réelle de production : le plan peut placer l'intérim en canal 1, le CDI en canal 2, sans confondre les deux contrats. Confidentialité : plan sans annonce publique. Volume : plan de campagne (calendrier de sessions, un message, plusieurs postes). Multi-sites : un plan par bassin, pas un plan national aveugle."
        ),
        h("Mise en pratique"),
        t(
          "Rédigez le squelette d'un plan (structure ci-dessus) pour un CDI chargé de recrutement junior, ETI, bassin provincial, délai 10 semaines, budget sans cabinet. Indiquez explicitement la ligne « priorité de réembauche »."
        ),
        h("Correction détaillée"),
        t(
          "Le squelette doit contenir les 9 blocs. Marché : probablement intermédiaire (métier RH junior lisible, bassin à qualifier par l'historique). Interne : mobilité assistant RH possible ; publication interne selon politique ; ligne explicite « priorité de réembauche : demandée aux RH le [date], réponse [ ] — obligation à traiter avant canaux externes si elle s'applique ». Mix raisonnable : vivier + interne + jobboards RH / France Travail + cooptation + écoles RH si calendrier compatible ; approche directe limitée ; pas de cabinet. Calendrier 10 semaines : réaliste si préavis inclus. Budget : temps + annonces. Indicateurs : sources, préqualifiés, délais. Vigilances L. 1132-1, L. 1221-6, CNIL vivier, offre en français."
        ),
      ],
    }),

    lesson({
      title: "Trois plans de recrutement complets",
      description:
        "Appliquer la méthode à une PME de services (commercial), une ETI industrielle (maintenance) et une startup produit.",
      minutes: 28,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À la fin de cette leçon, vous savez lire et transposer trois plans complets, différents par le marché, le mix et le calendrier, mais identiques par la structure et par la distinction obligation / politique / bonne pratique. Vous saurez produire le même niveau de détail sur un quatrième poste."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Les trois cas ci-dessous sont fictifs. Ils illustrent que la structure du plan reste stable alors que le mix change. La PME de services a un métier lisible et un budget serré : l'annonce et la cooptation portent l'essentiel. L'ETI industrielle a un métier en tension locale, des habilitations et des 3×8 : l'intérim, l'école et l'approche directe pèsent davantage. La startup produit a un profil rare et une marque encore faible : l'approche directe et le cadrage du package pèsent plus que le jobboard généraliste.\n\nDans les trois plans, une ligne est identique : la priorité de réembauche n'est pas tranchée par le junior. Elle est signalée aux RH. Si les RH confirment qu'elle s'applique, le canal externe attend le traitement RH. Si les RH confirment qu'elle ne s'applique pas, les canaux choisis (jobboards, écoles, cabinets, intérim, approche directe, cooptation) restent des choix de politique interne et de bonne pratique. Aucun de ces trois plans n'invente un taux de tension, un coût moyen d'embauche ou un délai « de marché » national.\n\nVous observerez aussi que le plan n'est pas l'annonce. L'annonce, lorsqu'elle existe, est un canal parmi d'autres, soumis aux règles du module suivant (français, date, non-discrimination, allégations). Le plan n'est pas davantage une offre de contrat faite au candidat. Enfin, le suivi est sobre : mieux vaut six indicateurs lus chaque semaine que vingt indicateurs jamais regardés.\n\nCes modèles sont des supports de travail. Vous les adaptez : un commercial en 3×8 n'est pas le commercial d'Alizé ; un site industriel en région parisienne n'est pas Forges & Maintenance du Centre ; une startup avec une marque forte n'a pas le même mix que Pixeline. La compétence visée n'est pas d'apprendre les trois scénarios par cœur, c'est de remplir la structure sans trou."
        ),
        note(
          "Noms d'entreprises, de villes précises de sites et de personnes : fictifs. Ne pas recopier ces plans dans un dossier réel sans les recadrer avec les RH. Ne pas extraire de ces cas une statistique."
        ),
        h("Méthode opérationnelle"),
        t(
          "Lisez chaque plan avec la même grille : le marché est-il justifié sans chiffre inventé ? L'interne et la priorité de réembauche sont-ils traités ? Chaque canal a-t-il une fonction et un critère d'arrêt ? Le calendrier intègre-t-il préavis et DPAE ? Le budget est-il validable par les RH ? Les vigilances juridiques sont-elles nommées (L. 1132-1, RGPD/CNIL, offre) ?"
        ),
        h("Exemple professionnel"),
        t(
          "Les trois plans ci-dessous tiennent lieu d'exemple. Ils sont rédigés au niveau attendu d'un recruteur junior dans un dossier de poste."
        ),
        code(`PLAN 1 — PME services / commercial
Entreprise fictive : Alizé Services, 45 personnes, Lyon et proche couronne
Poste : commercial BtoB TPE-PME, CDI, terrain + sédentaire, véhicule de service
Date souhaitée manager : « dès que possible »
Date réaliste proposée : 6 à 8 semaines + préavis du candidat retenu
Marché : intermédiaire. Historique interne : dernier commercial pourvu en 7 semaines, annonce + FT, 6 préqualifiés. Synonymes : chargé d'affaires TPE, attaché commercial BtoB. Pas de statistique externe inventée.
Interne / externe : publication intranet 5 jours (politique RH). Mobilité : 1 assistante commerciale intéressée, à évaluer. Priorité de réembauche : signalée aux RH le 3 mars 2026, réponse RH « ne s'applique pas sur ce poste ».
Mix (séquence) :
  1. Vivier (3 profils commerciaux informés, dernier contact < 12 mois) — relance J0 interne / J5 externe
  2. Cooptation salariés — mail interne J0, prime selon politique, même grille
  3. France Travail + 1 jobboard généraliste déjà souscrit — J5
  4. Approche directe légère (réseau local) — si < 4 préqualifiés à J15
  5. Pas de cabinet, pas d'intérim sauf si le directeur commercial bascule en urgence (décision RH)
Critères d'arrêt : stop jobboard si volume hors cible > 50 CV non pertinents et 0 préqualifié à J12 (revoir l'annonce avant d'ajouter un canal).
Budget : temps recruteur + crédits d'annonces déjà payés + prime de cooptation si embauche par ce canal (montant : politique RH, non inventé ici).
Calendrier : S0 interne ; S1 diffusion ; S2 préqualif ; S3-4 entretiens ; S5 décision ; puis préavis + DPAE (coordination RH).
Suivi : source, nb CV, nb préqualifiés, nb entretiens, blocage, décision à J15 et J30.
Vigilances : L. 1132-1 (cible commerciale, pas de critère d'âge ou de sexe) ; offre en français, pas d'allégation sur « évolution garantie » ; salaire dans l'annonce = bonne pratique à trancher avec RH (pas d'obligation FR consolidée au 13/10/2026) ; vivier informé, pas de relance des archives 2019.`),
        code(`PLAN 2 — ETI industrie / maintenance
Entreprise fictive : Forges & Maintenance du Centre, 620 personnes, site à 18 km d'une ville moyenne
Poste : technicien de maintenance mécanique, CDI, 3×8, habilitation électrique souhaitée
Date souhaitée : 15 jours (planning d'atelier)
Date réaliste CDI : 8 à 12 semaines + préavis. Passerelle : intérim dès que possible si RH valide.
Marché : tendu localement (3×8 + habilitation + site excentré). Historique : 2 échecs d'annonces seules sur 18 mois, 1 embauche via intérim puis CDI. Pas de taux national cité.
Interne / externe : mobilité 2 sites du groupe à interroger. Publication interne groupe 7 jours (accord / politique — à confirmer RH). Priorité de réembauche : signalée aux RH (licenciement économique d'un atelier voisin il y a 11 mois). LES CANAUX EXTERNES ATTENDENT LA RÉPONSE RH. Obligation à traiter, pas un choix de jobboard.
Mix (si feu vert RH) :
  1. Intérim (agence déjà en contrat cadre) — tenir le planning, évaluer pour passerelle CDI
  2. Cooptation atelier (consigne : pas de pression, habilitations vérifiées en process, pas au café)
  3. Jobboards industrie + France Travail — annonce honnête sur les 3×8 (L. 5331-3 : pas d'allégation trompeuse sur les horaires)
  4. CFA / lycée pro maintenance — canal junior / alternance, pas le remplacement express de l'expert
  5. Approche directe rayon 40 km — profils en poste
  6. Cabinet spécialisé industrie — seulement si à J21 pipeline CDI < 2 préqualifiés et budget validé
Critères d'arrêt : intérim continue tant que le CDI n'est pas pourvu, revue hebdo du coefficient et de la qualité ; cabinet non lancé tant que 1 et 5 n'ont pas été faits.
Budget : intérim (RH/achats) + annonces + temps recruteur + cabinet éventuel sur devis.
Calendrier : J0 RH priorité + interne ; intérim en parallèle dès feu vert ; CDI selon mix ; DPAE avant prise de poste du CDI (et règles propres à l'intérim gérées avec l'agence et les RH).
Suivi : heures d'intérim vs avancement CDI ; sources ; habilitations documentées ; sécurité des informations demandées (L. 1221-6, lien avec l'emploi).
Vigilances : ne pas écarter un candidat pour un critère protégé ; ne pas exiger un diplôme si l'habilitation et l'expérience suffisent sauf vrai besoin du poste ; RGPD des sourcés ; offre en français, horaires vrais.`),
        code(`PLAN 3 — Startup produit
Entreprise fictive : Pixeline, 28 personnes, produit SaaS BtoB, full remote France
Poste : product designer (expérience 5 ans+), CDI
Date souhaitée : « pour le sprint du 15 » (18 jours)
Date réaliste : 6 à 10 semaines de process + préavis (souvent 1 à 3 mois). Le sprint du 15 ne peut pas dépendre de cette embauche.
Marché : tendu sur le niveau demandé. Marque employeur encore faible. Flux d'annonces généralistes souvent hors cible. Pas de chiffre de salaire « marché » inventé : fourchette à poser avec les fondateurs (transparence = bonne pratique / directive UE 2023/970 en transposition, pas obligation FR consolidée au 13/10/2026).
Interne / externe : 1 personne support a demandé une passerelle « produit » : à évaluer par respect de la politique interne (7 jours intranet) et par équité, pas par faveur. Priorité de réembauche : demandée aux RH (startup sans licenciement économique : réponse probable négative, mais le junior ne tranche pas).
Mix :
  1. Interne + vivier designers déjà en contact (informés)
  2. Approche directe (réseaux professionnels) — canal principal
  3. Cooptation équipe produit / tech
  4. Jobboard design spécialisé — secondaire, pas Indeed générique en premier
  5. Cabinet produit — option J+21 si 0 entretien avancé, budget à valider (souvent lourd pour 28 personnes)
Confidentialité : l'annonce ne divulgue pas la roadmap ; brief chasse sous NDA si cabinet.
Critères d'arrêt : stop jobboard généraliste si 40 CVs hors niveau ; revue fondateur 30 min / semaine max.
Budget : temps recruteur (2 jours/semaine) + crédits réseau déjà payés + cabinet seulement sur décision écrite.
Calendrier : ne pas promettre le sprint du 15 ; poser un freelance/mission si le produit ne peut pas attendre (décision produit, pas recrutement seul) ; DPAE avant J0 du CDI.
Suivi : conversations sourcing, taux de réponse (interne, sans benchmark inventé), entretiens, motif de refus professionnel.
Vigilances : L. 1132-1 (pas de « profil jeune startup » comme critère d'âge) ; L. 1221-8 information sur les tests éventuels (cas pratique design) ; portfolio demandé = lien avec l'emploi ; vivier 2 ans reco CNIL.`),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Copier le plan startup sur l'ETI. Lancer les canaux externes du plan 2 avant la réponse RH sur la priorité de réembauche. Promettre le sprint du 15. Omettre l'intérim dans le plan industrie par idéologie « on ne veut que du CDI ». Publier une annonce trompeuse sur les 3×8 pour « avoir plus de CV ». Oublier le candidat interne de la startup."
        ),
        h("Situations particulières"),
        t(
          "Si les RH confirment une priorité de réembauche sur le plan 2, le plan se réécrit : traitement RH d'abord, canaux ensuite. Si le budget Pixeline interdit tout cabinet, le critère d'arrêt du canal 5 devient « jamais lancé » et l'on élargit le cadrage (niveau, freelance). Si Alizé reçoit 80 CV hors cible, on ne « rajoute LinkedIn Recruiter » par réflexe : on corrige l'annonce et l'intitulé."
        ),
        h("Mise en pratique"),
        t(
          "À partir du plan 1, le directeur commercial décide d'exiger un cabinet dès J0, « pour aller plus vite », alors que le marché est intermédiaire et que le budget n'est pas validé. Rédigez 8 à 10 lignes : ce que vous maintenez du plan, ce que vous refusez de lancer seul, et la question précise que vous posez aux RH."
        ),
        h("Correction détaillée"),
        t(
          "Vous maintenez la structure : interne 5 jours, vivier, cooptation, FT/jobboard, revue à J15. Vous refusez d'engager un cabinet dès J0 sans validation RH/budget : ce n'est pas un canal obligatoire, c'est un achat. Vous expliquez que, sur un marché intermédiaire avec historique de 7 semaines, le cabinet n'est pas le premier levier de vitesse ; la vitesse se joue aussi sur la disponibilité du manager à recevoir. Question RH : « Le directeur commercial demande un cabinet dès J0 sur le poste commercial BtoB. Disposons-nous d'un contrat cadre, d'un budget, et d'une règle d'activation ? Si oui, quel critère d'arrêt par rapport au mix déjà lancé ? » Vous ne dites pas que « la loi interdit les cabinets » (faux) ni que « on n'a pas le droit d'aller plus vite » (faux). Vous distinguez choix de canal (politique) et engagement financier (pouvoir RH)."
        ),
      ],
    }),

    quizLesson({
      title: "Quiz — Construire une stratégie de recrutement",
      description: "Dix questions : marché, canaux, vivier, budget, obligations à signaler.",
      passing_score: 70,
      minutes: 12,
      questions: [
        q({
          question:
            "Un manager vous demande d'ouvrir immédiatement les jobboards. Les RH vous indiquent qu'un licenciement économique a eu lieu l'an dernier sur un poste proche. Quelle est la bonne conduite ?",
          options: [
            "A. Signaler et laisser les RH traiter une éventuelle priorité de réembauche avant de lancer les canaux externes ; le choix des jobboards n'est pas une obligation légale.",
            "B. Ouvrir les jobboards tout de suite : la priorité de réembauche ne concerne que les syndicats, pas le recruteur.",
            "C. Refuser tout recrutement externe pendant cinq ans, durée unique prévue pour tous les viviers.",
            "D. Publier uniquement sur LinkedIn, canal « plus légal » qu'un jobboard.",
          ],
          correct: 0,
          explanation:
            "La priorité de réembauche, lorsqu'elle s'applique, est une obligation à faire traiter par les RH, pas un choix de canal. Le junior ne fixe pas seul le périmètre. En revanche, Indeed, LinkedIn ou un cabinet ne sont pas imposés par la loi : ce sont des choix de politique interne ou de bonne pratique. Les 5 ans cités dans le distracteur C concernent une logique d'archivage probatoire des non-retenus (L. 1134-5 / référentiel CNIL), pas un gel des recrutements externes, et pas la durée du vivier actif (recommandation 2 ans).",
        }),
        q({
          question: "Que signifie qualifier un métier de « en tension » dans un plan de recrutement junior ?",
          options: [
            "A. Un constat de marché (difficulté à pourvoir) qui oriente canaux et délai, sans statistique inventée et sans en faire une obligation légale.",
            "B. Une obligation légale de passer par un cabinet de chasse.",
            "C. L'interdiction de publier une offre sur France Travail.",
            "D. La preuve que le salaire devra obligatoirement figurer dans l'annonce, en droit français consolidé au 13/10/2026.",
          ],
          correct: 0,
          explanation:
            "« En tension » est un jugement professionnel étayé (historique interne, habilitations, lieu, contrat), pas un label légal. Il justifie souvent sourcing, intérim ou cabinet, mais n'oblige aucun canal. Indiquer le salaire dans l'offre n'est pas une obligation française consolidée au 13/10/2026 (directive UE 2023/970 en transposition). France Travail n'est pas interdit sur un métier tendu.",
        }),
        q({
          question: "La publication interne préalable d'un poste, dans la plupart des entreprises, est :",
          options: [
            "A. Une politique interne, un accord ou une bonne pratique — à vérifier avec les RH — et non, par principe, « la » loi unique du recrutement.",
            "B. Une obligation du Code du travail identique pour toutes les TPE.",
            "C. Interdite, car elle discrimine les candidats externes.",
            "D. Remplacée automatiquement par la cooptation.",
          ],
          correct: 0,
          explanation:
            "Beaucoup d'entreprises imposent quelques jours d'intranet : c'est leur règle, vous l'appliquez. Ce n'est pas un article unique du Code du travail applicable à toute TPE. Ce n'est pas non plus une discrimination illicite par nature : évaluer les internes avec la même grille, sans critère protégé (L. 1132-1), reste exigé. La cooptation est un autre canal, politique interne elle aussi.",
        }),
        q({
          question: "Quelle distinction est exacte entre cabinet de recrutement et agence d'intérim ?",
          options: [
            "A. Le cabinet est généralement missionné pour trouver un candidat pour un poste du client ; l'intérim met à disposition un salarié de l'agence, dans un cadre propre, souvent pour un besoin de flexibilité ou une passerelle.",
            "B. L'intérim est réservé aux cadres, le cabinet aux ouvriers.",
            "C. Les deux sont des obligations légales dès que le poste est ouvert depuis 15 jours.",
            "D. Le cabinet permet d'ignorer le RGPD ; l'intérim l'ignore aussi.",
          ],
          correct: 0,
          explanation:
            "Confondre les deux est une erreur de débutant. Ni l'un ni l'autre n'est obligatoire au 15e jour. Aucun prestataire n'exonère du RGPD ni de la non-discrimination. Le choix d'y recourir est budgétaire et stratégique, validé par les RH.",
        }),
        q({
          question: "La durée « 2 ans » pour un vivier / CVthèque, selon les sources du cours (CNIL), est :",
          options: [
            "A. Une recommandation d'autorité (jusqu'à 2 ans à compter du dernier contact, information, opposition possible), pas une durée unique écrite par le RGPD pour tous les traitements.",
            "B. Une obligation pénale automatique, identique à l'archivage probatoire de 5 ans.",
            "C. Un minimum légal : on doit tout garder au moins 2 ans, même en cas d'opposition.",
            "D. Une durée qui autorise à relancer les CV de 2016 s'ils sont « bons ».",
          ],
          correct: 0,
          explanation:
            "Guide CNIL recrutement et référentiel 2026 : vivier jusqu'à 2 ans à compter du dernier contact, sauf opposition — recommandation, pas durée unique RGPD. Les 5 ans concernent l'archive intermédiaire des non-retenus à des fins de preuve (L. 1134-5), autre finalité. Une opposition sur le vivier se respecte. Relancer 2016 n'est pas conforme à cette recommandation.",
        }),
        q({
          question: "Dans un calendrier de CDI, que devez-vous intégrer en plus du temps d'annonce et d'entretiens ?",
          options: [
            "A. Le préavis probable du candidat retenu et, côté employeur, la coordination de la DPAE avant la prise de poste (obligation de l'employeur, pas du junior isolé).",
            "B. Uniquement le week-end de séminaire d'intégration, obligatoire par le Code du travail.",
            "C. Un délai légal unique de 15 jours entre l'annonce et l'embauche.",
            "D. Rien : la date donnée par le manager est toujours la date d'arrivée.",
          ],
          correct: 0,
          explanation:
            "Le préavis fait souvent basculer le calendrier. La DPAE est obligatoire avant la prise de fonction ou le début de période d'essai, au plus tôt dans les 8 jours précédant l'embauche (Service-Public F23107) : le junior coordonne avec les RH. Il n'existe pas de délai légal unique de 15 jours « annonce → embauche ». Le séminaire n'est pas une obligation universelle du Code.",
        }),
        q({
          question: "Un plan multicanal efficace, pour un recruteur junior, c'est surtout :",
          options: [
            "A. 3 à 5 canaux justifiés, séquencés, avec critère d'arrêt et revue à date, après traitement des obligations RH.",
            "B. Tous les jobboards le même matin, pour « couvrir ».",
            "C. Un cabinet uniquement, parce que c'est plus conforme au RGPD.",
            "D. Un canal unique imposé par l'article L. 1132-1.",
          ],
          correct: 0,
          explanation:
            "Multicanal ne veut pas dire dispersion. L. 1132-1 interdit la discrimination ; il n'impose pas un canal. Un cabinet n'est pas « plus RGPD ». Empiler les jobboards sans revue empêche d'apprendre d'où vient le candidat utile.",
        }),
        q({
          question: "La cooptation dans une stratégie de recrutement est :",
          options: [
            "A. Une politique interne / bonne pratique, utile si la grille d'évaluation reste la même et si l'on évite pression et critères protégés.",
            "B. Une obligation légale dès 50 salariés.",
            "C. Un canal qui permet de s'affranchir de L. 1221-6 (on peut tout demander, c'est « un copain »).",
            "D. Interdite, car elle est toujours discriminatoire.",
          ],
          correct: 0,
          explanation:
            "La cooptation n'est ni obligatoire ni interdite par principe. Elle devient illicite si elle sert de couverture à une discrimination (L. 1132-1) ou si l'on pose des questions sans lien avec l'emploi (L. 1221-6). La prime, lorsqu'elle existe, est une règle interne.",
        }),
        q({
          question:
            "Sur le plan industrie (technicien 3×8, habilitation, site excentré), pourquoi l'annonce seule est-elle souvent insuffisante ?",
          options: [
            "A. Parce que le marché local, les horaires et les exigences techniques réduisent le flux spontané ; intérim, cooptation, sourcing et écoles ont une fonction propre.",
            "B. Parce que la loi interdit les annonces pour les 3×8.",
            "C. Parce que France Travail refuse les offres industrielles.",
            "D. Parce que le salaire devrait obligatoirement être caché, ce qui fait fuir les candidats.",
          ],
          correct: 0,
          explanation:
            "C'est un constat de marché et d'historique, pas une interdiction d'annoncer. L'annonce doit au contraire être honnête sur les 3×8 (L. 5331-3, allégations trompeuses). France Travail n'interdit pas l'industrie. Le salaire n'a pas à être « caché par la loi » ; l'afficher n'est simplement pas encore une obligation française consolidée au 13/10/2026.",
        }),
        q({
          question: "Qui valide l'engagement d'un cabinet ou d'un contrat d'intérim dans les plans du module ?",
          options: [
            "A. Les RH / la personne ayant le pouvoir d'engager le budget — pas le recruteur junior seul, même sous pression du manager.",
            "B. Le premier candidat préqualifié.",
            "C. France Travail, qui homologué tous les prestataires.",
            "D. Le CSE, dans toutes les entreprises, pour chaque CDD.",
          ],
          correct: 0,
          explanation:
            "Le junior propose un mix ; il n'engage pas un honoraire ou un contrat cadre. Le manager peut demander, les RH (ou achats / direction) valident. France Travail n'homologue pas « tous les prestataires ». Les instances du personnel ont des attributions propres, variables : ce n'est pas au junior d'inventer une consultation pour chaque CDD.",
        }),
      ],
    }),
  ],
};
