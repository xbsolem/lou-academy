import { pack, quizLesson, q, code } from "../lib.mjs";

export default {
  position: 9,
  title: "Congés payés : acquisition, décompte et indemnité",
  description:
    "Acquérir 2,5 jours ouvrables par mois, distinguer ouvrables et ouvrés, comparer maintien et dixième, et traiter fractionnement et absences sans inventer de règle 2026 non relue.",
  lessons: [
    pack({
      title: "Acquisition : 2,5 jours ouvrables par mois, plafond 30 (L. 3141-3)",
      description: "Poser le droit légal d'acquisition avant toute conversion en ouvrés ou tout calcul d'indemnité.",
      minutes: 18,
      objectifs:
        "Vous appliquez L. 3141-3 : 2,5 jours ouvrables par mois de travail effectif, sans que la durée totale du congé légal n'excède 30 jours ouvrables. Vous savez qu'une CCN peut être plus favorable.",
      theorie:
        "L'article L. 3141-3 du Code du travail : le salarié a droit à un congé de deux jours et demi ouvrables par mois de travail effectif chez le même employeur. La durée totale du congé légal ne peut excéder trente jours ouvrables. Source : legal-sources.json L3141-3, Légifrance.\n\n2,5 × 12 = 30. Le plafond 30 n'est pas une moyenne : c'est le maximum légal d'acquisition des CP de base. Une CCN, un accord ou un usage peut accorder davantage (un 3e jour, un congé d'ancienneté, un congé d'été). LIRE LA CCN. Ce cours n'invente ni 2,08, ni 2,5 ouvrés « légaux », ni 32 jours.\n\nMois de travail effectif : la loi assimile certains mois incomplets (règle des 4 semaines ou 24 jours de travail effectif équivalant à un mois, L. 3141-4 — à relire pour le détail). Un junior ne refuse pas 2,5 jours à un embauché le 2 du mois « parce que le mois n'est pas plein » sans ouvrir L. 3141-4.\n\nLe droit s'acquiert pendant la période de référence (leçon suivante), se prend pendant une période de prise, se paie au moment de la prise (indemnité) ou au solde de tout compte s'il reste des jours. On n'avance pas 30 jours en janvier à un embauché du 1er janvier comme un dû déjà liquide, sauf politique d'anticipation d'entreprise clairement paramétrée (souvent avec régularisation de trop-pris).\n\nOuvrables : lundi–samedi dans le décompte légal classique (hors dimanche et fériés habituellement chômés dans ce décompte). Ce n'est pas encore la leçon ouvrés, mais vous devez cesser de dire « 2,5 jours » sans préciser ouvrables.\n\nNature : 2,5 et 30 = obligation légale. Jours extra CCN = conventionnel, à lire. Anticipation = politique interne. 2,5 ouvrés présentés comme légaux = erreur.",
      methode:
        "1) Date d'entrée. 2) Mois de travail effectif (et assimilés, leçon absences). 3) 2,5 × nombre de mois, cap 30 légal. 4) Ajouter uniquement les jours CCN lus. 5) Paramétrer le compteur (ouvrable ou ouvré selon le dossier, conversion explicite). 6) Ne pas créditer 30 d'un clic en janvier sans règle d'anticipation.",
      extra: [
        code(`ACQUISITION LÉGALE — L. 3141-3
1 mois de travail effectif     + 2,5 jours ouvrables
12 mois                        30 jours ouvrables (plafond légal)
CCN plus favorable             LIRE LA CCN (ne pas inventer +2)

Embauche 1er janvier, présence complète, pas d'absence non assimilée :
après 4 mois → 10 jours ouvrables
après 12 mois → 30 jours ouvrables`),
      ],
      exemple:
        "Start-up, SIRH paramétré en 2,08 jours ouvrés (25/12). Ce n'est pas « illégal » si 25 ouvrés = 30 ouvrables, mais le junior doit savoir que la loi parle ouvrable. Un contrôle 2,08 × 12 = 24,96 ≈ 25 ouvrés. Si le SIRH crédite 2,08 ouvrables, le salarié est lésé : alerte paramétrage.",
      erreurs:
        "25 jours légaux ouvrables. 2,5 ouvrés présentés comme L. 3141-3. Créditer 30 jours le premier mois. Ignorer une CCN à 30 jours + ancienneté. Arrondir 2,5 à 2 « pour simplifier ».",
      particuliers:
        "Multi-employeurs : chaque contrat a son compteur. Temps partiel : le décompte des droits en jours d'absence se proratise souvent à la prise, l'acquisition légale reste 2,5 ouvrables par mois de travail effectif — modalités de pose à caler, pas à inventer un 1,25 automatique sans règle d'entreprise. VRP, intermittents : textes particuliers.",
      exercice:
        "Embauche au 1er mars 2026, temps plein, aucun jour d'absence. Combien de jours ouvrables légaux au 31 août 2026 ? Au 28 février 2027, hors CCN ?",
      correction:
        "1er mars–31 août = 6 mois → 6 × 2,5 = 15 jours ouvrables. 1er mars 2026–28 février 2027 = 12 mois → 30 jours, plafond légal, pas 32,5. Toute CCN plus favorable s'ajoute seulement si elle est lue.",
    }),
    pack({
      title: "Période de référence, période de prise et ordre des départs",
      description: "Savoir de quand à quand on acquiert, et quand on pose, sans inventer le calendrier de l'entreprise.",
      minutes: 18,
      objectifs:
        "Vous distinguez période d'acquisition et période de prise. Vous savez que le 1er juin–31 mai est le repère historique, qu'un accord peut retenir l'année civile, et que l'ordre des départs a un cadre légal.",
      theorie:
        "Deux horloges. La période de référence (acquisition) : période pendant laquelle le travail effectif ouvre les 2,5 jours par mois. Le repère historique du Code et de nombreuses entreprises est le 1er juin année N au 31 mai année N+1. Un accord d'entreprise ou de branche peut retenir une autre période, souvent l'année civile (1er janvier–31 décembre). Vous lisez le paramétrage du dossier ; vous n'imposez pas le 1er juin à une ETI qui est en année civile depuis un accord.\n\nLa période de prise : période pendant laquelle les jours acquis doivent être pris. Le congé principal (24 jours ouvrables, hors 5e semaine) se prend dans un cadre légal qui mentionne notamment la période du 1er mai au 31 octobre pour une fraction (règles de fractionnement, leçon dédiée). L'employeur fixe l'ordre des départs après avis, le cas échéant, des IRP, en tenant compte de situations énumérées par le Code (ex. famille, ancienneté — relire L. 3141-16). Un junior n'invente pas « les mères partent en priorité » comme une règle maison contraire au texte ; il n'invente pas non plus un refus de congé sans motif d'organisation.\n\nReport : le principe est la prise dans la période. Des reports existent (accord, arrêt, règles liées à la maladie — leçon absences, à vérifier). Un solde « caduc d'office le 31 mai » sans lecture du texte et de l'accord est une pratique à risque.\n\nPaie : l'indemnité de CP se calcule sur la rémunération de la période de référence (méthode du dixième) et/ou sur le salaire de la période de prise (maintien). D'où l'importance de savoir quelle période le dossier utilise.\n\nEntrée en cours de période : droits au prorata des mois de travail effectif. Sortie : indemnité compensatrice de CP sur les jours acquis non pris (module sorties, principe déjà vrai ici).\n\nNature : période juin–mai = cadre légal historique / défaut fréquent. Année civile = souvent accord. Ordre des départs = cadre légal + organisation. Policy « pose obligatoire semaine 32 » = interne, si légale.",
      methode:
        "À l'ouverture du dossier : extraire période de référence, période de prise, compteur (N, N-1, anticipé), règle de report, circuit de validation. Noter dans la fiche entreprise. Ne pas utiliser le calendrier du dossier précédent en cabinet.",
      extra: [
        code(`DEUX HORLOGES — à remplir par dossier
Période d'acquisition : 1er juin–31 mai  /  année civile  /  autre (accord) : …
Période de prise      : …
Compteurs             : acquis N-1  |  en cours N  |  anticipé
Validation            : SIRH / manager / paie
Report                : accord / maladie (À VÉRIFIER texte) / aucun automatique inventé`),
      ],
      exemple:
        "Cabinet, client A en 1er juin, client B en année civile. Le collaborateur qui clôture les deux comme « juin » offre 30 jours trop tôt ou trop tard. Check-list client dès le premier bulletin.",
      erreurs:
        "Fusionner acquisition et prise. Faire périmer des jours le 31 mai sans texte. Imposer juillet à tout le monde sans ordre des départs. Calculer le dixième sur l'année civile alors que le dossier est en juin–mai, ou l'inverse.",
      particuliers:
        "Congés d'un rachat / fusion : reprise des compteurs, avenant. CDD : CP ou indemnité de 10 % selon les cas (indemnité de fin de CDD distincte de l'ICC). Un junior ne mélange pas 10 % de CP et 10 % de précarité.",
      exercice:
        "Dossier année civile. Salarié entré le 1er septembre 2026. Au 31 décembre 2026, droits légaux ouvrables ? Quelle période servira au dixième de ses premiers congés d'été 2027 si rien d'autre n'est prévu ?",
      correction:
        "4 mois (sept.–déc.) × 2,5 = 10 jours ouvrables au 31/12/2026. Le dixième de l'indemnité, lorsque ces jours seront pris, portera sur la rémunération de la période de référence applicable (ici l'année civile 2026 pour ces 10 jours, sous réserve de l'accord). Vous ne prenez pas juin 2025–mai 2026, période où il n'était pas là. Vous ne créditez pas 30 jours.",
    }),
    pack({
      title: "Ouvrables et ouvrés : deux langages, un même droit",
      description: "Convertir sans léser, et paramétrer le compteur du logiciel sur la bonne unité.",
      minutes: 20,
      objectifs:
        "Vous expliquez 30 ouvrables ≈ 25 ouvrés pour une semaine de 5 jours, vous convertissez un solde, et vous refusez un paramétrage qui mélange les unités.",
      theorie:
        "Jour ouvrable : tous les jours de la semaine sauf le jour de repos hebdomadaire (généralement le dimanche) et, selon le décompte retenu, les fériés chômés. Dans le schéma légal classique à semaine de 6 ouvrables, 30 jours = 5 semaines.\n\nJour ouvré : jour habituellement travaillé dans l'entreprise, souvent 5 par semaine (lundi–vendredi). 5 semaines × 5 = 25 jours ouvrés, équivalent courant de 30 ouvrables.\n\nConversion usuelle 5 jours travaillés : jours ouvrés = jours ouvrables × 5/6. 30 × 5/6 = 25. 12 ouvrables = 10 ouvrés. 2,5 ouvrables par mois ≈ 2,08 ouvrés par mois (2,5 × 5/6).\n\nCette conversion n'est pas un article qui dit « 2,08 ». C'est une équivalence d'entreprise pour un horaire de 5 jours. Une entreprise ouverte 6 jours (samedi travaillé) ne convertit pas comme une entreprise 5 jours. Un temps partiel 3 jours ne « prend pas 25 ouvrés » comme un 5 jours : le décompte à la pose suit les jours où il aurait travaillé, selon la méthode du dossier (jours ouvrables du calendrier, ou jours de l'emploi). Vous ne lésez personne en convertissant 30 ouvrables en 25 ouvrés chez un 5 jours ; vous lésez en convertissant 30 ouvrables en 25 ouvrables, ou 25 ouvrés en 25 ouvrables.\n\nPaie : le logiciel a une unité. Les demandes managers sont souvent en « semaines de vacances ». Une semaine = 6 ouvrables ou 5 ouvrés selon le compteur. Contrôle : 2 semaines = 12 ouvrables = 10 ouvrés.\n\nNature : ouvrable = langage légal de L. 3141-3. Ouvré = paramètre d'entreprise / équivalence. 5/6 = méthode d'équivalence à 5 jours, pas une CCN inventée.",
      methode:
        "1) Quelle unité dans le logiciel ? 2) Combien de jours travaillés par semaine ? 3) Traduire toute demande (« je pose 2 semaines ») dans l'unité. 4) Contrôler qu'un solde 12 n'est pas 12 ouvrés dans un compteur ouvrable. 5) Documenter la règle sur la fiche entreprise.",
      extra: [
        code(`ÉQUIVALENCE — semaine à 5 jours travaillés (lundi–vendredi)
30 ouvrables  =  25 ouvrés  =  5 semaines
12 ouvrables  =  10 ouvrés  =  2 semaines
2,5 ouvrables / mois  ≈  2,08 ouvrés / mois

DEMANDE « 1 semaine »
Compteur ouvrable : 6 jours
Compteur ouvré    : 5 jours

INTERDIT : mélanger 2,5 (ouvrables) et un compteur ouvré sans × 5/6.`),
      ],
      exemple:
        "CSP. Un salarié à 12 jours ouvrables restants pose « 12 jours » du lundi au dimanche suivant en mode ouvré : le SIRH débite 10 ouvrés si on recale, ou 12 ouvrés s'il est mal paramétré (trop débité). Le junior vérifie le calendrier réel de pose, pas le chiffre tapé par le manager.",
      erreurs:
        "25 jours ouvrables légaux. Débiter 6 ouvrés pour une semaine. Appliquer 5/6 à une boutique ouverte 6 jours. Dire « ouvrable = ouvré, c'est la même chose ».",
      particuliers:
        "Forfait jours : compteur souvent en jours de repos / CP distincts, calendaire. Temps partiel 4 jours : une « semaine de CP » n'est pas 6 ouvrables payés comme 6 jours de 8 h ; l'indemnité suit le maintien ou le dixième (leçon suivante). Jours fériés dans une période de CP : selon qu'ils sont ouvrables chômés, ils peuvent ne pas être décomptés — relire la règle du dossier / CCN, ne pas inventer.",
      exercice:
        "Compteur légal ouvrable. Semaine de 5 jours. Solde 9 ouvrables. Le salarié veut 2 semaines calendaires (lun.–ven. travaillés). Pouvez-vous accorder 2 semaines ? Combien débiter si vous n'accordez que le solde, en ouvrés équivalents ?",
      correction:
        "2 semaines = 12 ouvrables = 10 ouvrés. Solde 9 ouvrables < 12 : vous n'accordez pas 2 semaines pleines sur les seuls CP légaux (sauf anticipation validée). 9 ouvrables ≈ 9 × 5/6 = 7,5 ouvrés. La pose concrète se cale sur le calendrier (début un lundi, samedi ouvrable décompté même s'il ne travaille pas). Vous expliquez le samedi décompté : c'est le propre des ouvrables.",
    }),
    pack({
      title: "Indemnité : comparer maintien et dixième (L. 3141-24)",
      description: "Les deux méthodes, la plus favorable, un exemple chiffré. Le diviseur 26 est une pratique à confirmer.",
      minutes: 24,
      objectifs:
        "Vous appliquez L. 3141-24 : l'indemnité de CP ne peut être inférieure au dixième de la rémunération brute de la période de référence, ni au salaire qui aurait été perçu. Vous calculez les deux et vous retenez le plus favorable.",
      theorie:
        "L'article L. 3141-24 : l'indemnité de congés payés ne peut être inférieure au dixième de la rémunération brute totale perçue par le salarié au cours de la période de référence. Elle ne peut pas non plus être inférieure au salaire que le salarié aurait perçu s'il avait travaillé (maintien). Source : legal-sources.json L3141-24.\n\nDeux méthodes, une obligation : verser au moins le maximum des deux. Un logiciel qui n'en calcule qu'une sans comparaison expose à un sous-paiement. Le gestionnaire junior apprend à lire le résultat des deux, pas à « choisir le dixième parce que c'est plus simple ».\n\nMéthode du dixième : 10 % du brut de la période de référence (salaire, primes assujetties selon règles, HS selon inclusion — relire le BOSS / la CCN pour les primes). Pour 30 jours ouvrables, ce dixième indemnise l'année de CP. Pour une fraction : dixième × (jours pris / 30), en ouvrable.\n\nMéthode du maintien : salaire que le salarié aurait gagné pendant les jours d'absence. Pratique fréquente : salaire mensuel / 26 × jours ouvrables de CP (26 ≈ nombre d'ouvrables d'un mois). Autre pratique : / 22 ou / 21,67 en ouvrés. LABELLISÉ : L. 3141-24 n'impose pas le diviseur 26. C'est un paramètre d'entreprise / une pratique. Vous l'identifiez dans le logiciel, vous ne l'inventez pas comme « la loi 26 ».\n\nExemple pédagogique — période de référence : 12 × 2 400 = 28 800 € de brut. Dixième = 2 880 € pour 30 ouvrables → 96,00 € par jour ouvrable. Salaire actuel 2 600 €. Maintien, hypothèse diviseur 26 : 2 600 / 26 = 100,00 € par jour ouvrable. Pour 10 jours ouvrables : dixième 960,00 € ; maintien 1 000,00 €. On verse 1 000,00 € (maintien plus favorable).\n\nExemple inverse — brut de référence 36 000 € (année avec prime). Dixième = 3 600 € / 30 = 120,00 € / jour. Salaire actuel 2 600 €, maintien 100,00 €. Pour 10 jours : dixième 1 200 € > maintien 1 000 €. On verse 1 200 €.\n\nSur le bulletin : souvent une ligne « absence CP » en moins (maintien retiré du salaire mensualisé) et une ligne « indemnité CP » en plus. Le net ne doit pas s'effondrer du seul fait de poser des CP. Contrôle : brut du mois ≈ brut habituel si maintien gagne ; brut plus élevé si le dixième gagne (effet prime de la période de référence).\n\nNature : comparaison = obligation légale. Diviseur 26 = pratique / paramètre, à confirmer. Inclusion d'une prime dans le dixième = lecture BOSS/CCN, pas un réflexe « toutes les primes » ou « aucune prime ».",
      methode:
        "1) Extraire le brut de la période de référence (règles d'inclusion). 2) Dixième, ramené au jour. 3) Maintien selon le diviseur du dossier (le nommer). 4) Comparer. 5) Saisir les deux rubriques. 6) Contrôler le brut du mois de pose. 7) Si le logiciel n'a qu'une méthode : alerter le paramétreur.",
      extra: [
        code(`COMPARAISON — 10 jours ouvrables
Période de référence  28 800 €  →  1/10 = 2 880 € / 30 j = 96,00 €/j
                       10 j     →  960,00 €
Salaire actuel        2 600 €   →  maintien HYPOTHÈSE /26 = 100,00 €/j
                       10 j     →  1 000,00 €
Retenu : 1 000,00 € (maintien)

AUTRE CAS — référence 36 000 €  →  1/10 = 120,00 €/j × 10 = 1 200,00 €
Maintien 1 000,00 €  →  retenu : 1 200,00 € (dixième)

Diviseur 26 : PRATIQUE à confirmer dans le paramétrage, pas un article « L. 26 ».`),
      ],
      exemple:
        "Industrie avec 13e mois versé en décembre, période juin–mai. En juillet, le dixième gagne souvent grâce au 13e. Un paramétrage « maintien only » sous-paie tous les juillet. Contrôle annuel d'un échantillon de bulletins de pose.",
      erreurs:
        "Une seule méthode pour toujours. Diviseur 30 sur des ouvrables (sous-indemnité de maintien). Oublier les HS de la période de référence dans le dixième sans vérifier. Payer 0 pendant les CP « on rattrapera ». Utiliser 2 400 € de référence alors que le salaire a baissé, sans faire la comparaison.",
      particuliers:
        "Temps partiel, forfait jours : le maintien se calcule dans l'unité du contrat. Entrée en cours de période : dixième sur le brut réellement perçu, pas sur un annuel fictif. ICC de sortie : même comparaison, module sorties. Primes exceptionnelles : inclusion = BOSS, escalade si doute.",
      exercice:
        "Référence 30 000 €, 30 jours acquis. Salaire actuel 2 400 €, diviseur 26 (paramètre du dossier). Comparez pour 12 jours ouvrables. Quelle méthode l'emporte ?",
      correction:
        "Dixièmes : 30 000 × 10 % = 3 000 € / 30 = 100,00 €/j × 12 = 1 200,00 €. Maintien : 2 400 / 26 = 92,31 €/j × 12 = 1 107,72 €. Le dixième l'emporte (1 200,00 €). Vous versez au moins 1 200,00 €. Arrondi du maintien : 2 400 / 26 = 92,307… → 92,31 €/j selon arrondi au centime.",
    }),
    pack({
      title: "Fractionnement : un cadre légal, pas des jours inventés",
      description: "Savoir que des jours extra de fractionnement existent dans le Code, relire L. 3141-23, ne pas créditer de mémoire.",
      minutes: 16,
      objectifs:
        "Vous savez que le fractionnement du congé principal peut ouvrir des jours supplémentaires légaux. Vous ouvrez L. 3141-23 avant toute attribution. Vous n'inventez ni 1, ni 2, ni 3 jours « parce que c'est comme ça ».",
      theorie:
        "Le congé principal d'une durée supérieure à 12 jours ouvrables peut être fractionné, avec des règles de continuité d'une fraction (au moins 12 jours ouvrables continus, dans les conditions du Code). Lorsque des jours de ce congé principal sont pris hors d'une période définie par la loi (repère : hors 1er mai–31 octobre, sous réserve du texte consolidé), un droit à congé supplémentaire de fractionnement est prévu par L. 3141-23.\n\nCe droit existe. Il n'est pas une CCN. Il n'est pas facultatif au seul motif que « on n'a jamais fait ». Il a des conditions (nombre de jours hors période, exclusion de la 5e semaine du décompte du supplément, accord du salarié sur le fractionnement dans les cas prévus).\n\nConsigne pédagogique stricte : vous ne créditez pas 1 ou 2 jours dans un exercice ou un dossier réel de mémoire. Vous ouvrez L. 3141-23 (Légifrance) le jour J, vous lisez le nombre attaché à la situation, vous lisez aussi la CCN (souvent plus favorable ou organisatrice). Inventer « +2 jours dès qu'on pose en novembre » sans les conditions du texte est une faute.\n\nLa 5e semaine (jours au-delà de 24 ouvrables) a un régime de fractionnement distinct : elle ne sert généralement pas à ouvrir le supplément légal. Encore une raison de lire l'article plutôt que d'appliquer une rumeur.\n\nPaie : les jours de fractionnement s'ajoutent au compteur, puis s'indemnisent comme les autres CP (maintien vs dixième). Ils ne sont pas une prime.\n\nNature : L. 3141-23 = obligation légale conditionnelle. Nombre exact de jours = texte consolidé à relire. CCN = éventuellement plus. Usage « on ne donne jamais le fractionnement » = non opposable à la loi.",
      methode:
        "1) Le congé principal est-il fractionné ? 2) Combien de jours hors période légale ? 3) Ouvrir L. 3141-23 + CCN. 4) Créditer seulement après lecture. 5) Si le SIRH crédite en automatique : contrôler l'article paramétré. 6) En cas de doute : pas de crédit, question au responsable.",
      noteText:
        "Ne pas inventer le nombre de jours de fractionnement dans ce cours. Le cadre légal existe (L. 3141-23). La production exige Légifrance le jour du calcul. Une CCN peut aménager : LIRE LA CCN.",
      extra: [
        code(`FRACTIONNEMENT — check-list (pas un barème inventé)
[ ] Congé principal > 12 jours ouvrables
[ ] Une fraction ≥ 12 jours continus (conditions du Code)
[ ] Jours pris HORS période légale (relire L. 3141-23 : 1er mai–31 octobre)
[ ] 5e semaine exclue du décompte du supplément (selon texte)
[ ] Nombre de jours extra : LIRE L. 3141-23 consolidé — NE PAS INVENTER
[ ] CCN plus favorable ? LIRE
[ ] Crédit compteur + indemnité comme un CP`),
      ],
      exemple:
        "PME, pose de 8 jours en novembre, 16 jours en juillet. Le manager : « mets 2 jours de fractionnement ». Le junior n'obéit pas au chiffre 2. Il ouvre L. 3141-23, vérifie si les 8 jours hors période et leur nature (principal vs 5e semaine) ouvrent 1 ou 2 jours, ou rien. Il documente l'article.",
      erreurs:
        "Créditer +2 à tous ceux qui posent en hiver. Oublier que le droit existe. Confondre RTT et fractionnement. Inventer +3. Appliquer le fractionnement sur un solde de 5e semaine uniquement, sans lecture.",
      particuliers:
        "Fermeture annuelle d'entreprise en août : le fractionnement n'est pas « offert » si tout le monde pose l'été ; il peut naître si l'employeur impose un reliquat hors période. Accord de soustraction au fractionnement : relire si le texte l'autorise. Junior : pas de renonciation informelle.",
      exercice:
        "Un salarié pose 18 jours ouvrables du 1er au 21 juillet, puis 6 jours en novembre. Que faites-vous concrètement pour le fractionnement, sans écrire un nombre de jours extra dans la correction mémoire ?",
      correction:
        "Vous notez : congé principal fractionné, 6 jours hors période mai–octobre (sous réserve que ces 6 jours ne soient pas seulement la 5e semaine). Vous ouvrez L. 3141-23 et la CCN, vous appliquez le nombre du texte, vous le citez dans le dossier. Vous n'écrivez pas « +2 » dans cette correction : l'exercice entraîne le geste de lecture, pas la récitation d'un souvenir. Si le SIRH a déjà crédité, vous contrôlez contre l'article.",
    }),
    pack({
      title: "Absences et acquisition : assimilations, maladie, ce que l'on ne invente pas",
      description: "L. 3141-5 et évolution maladie/CP : citer le principe, renvoyer à Légifrance/BOSS pour la règle 2026 détaillée.",
      minutes: 20,
      objectifs:
        "Vous rattachez l'acquisition au travail effectif et aux assimilations légales. Vous savez que le droit des CP pendant la maladie a évolué. Vous refusez d'appliquer de mémoire « 0 jour en maladie » ou « 2,5 jours quoi qu'il arrive » sans texte 2026 ouvert.",
      theorie:
        "L. 3141-3 rattache l'acquisition au travail effectif. L. 3141-5 liste des périodes assimilées à du travail effectif pour les CP (parmi d'autres, selon le texte : congé de maternité, paternité, adoption, certaines périodes d'arrêt AT/MP, congés de formation dans les conditions prévues, etc.). Relire la liste consolidée : elle n'est pas un souvenir de stage.\n\nUne absence non assimilée n'ouvre pas, en principe, les 2,5 jours. D'où l'enjeu de qualification : CP déjà posés, maladie, grève, congé sans solde, mise à pied, chômage partiel, etc. Chaque motif a un régime. Un congé sans solde n'est pas un AT. Un arrêt maladie n'est pas un congé parental.\n\nMaladie et CP — évolution. Le droit de l'Union européenne et la jurisprudence ont conduit la France à adapter le Code. La loi n° 2024-364 du 22 avril 2024 a notamment modifié les règles d'acquisition et de report des CP en lien avec les arrêts maladie. Les modalités précises applicables en 2026 (nombre de jours acquis pendant un arrêt pour maladie non professionnelle, plafond, durée de report, information du salarié, articulation AT/MP) doivent être relues sur Légifrance (L. 3141-5 et articles voisins consolidés au jour du calcul) et au BOSS. Un junior n'applique ni l'ancien réflexe « maladie ordinaire = 0 acquisition » ni un forfait inventé « 2,5 jours même pour 12 mois d'arrêt » sans ouvrir le texte du jour.\n\nCe que vous pouvez dire avec certitude : (1) le sujet a changé, on ne recopie pas un manuel de 2019 ; (2) l'AT/MP a longtemps eu un régime d'assimilation plus favorable que la maladie ordinaire — à confirmer dans le texte consolidé ; (3) un report lié à l'impossibilité de prise pour cause d'arrêt existe dans le nouveau cadre — durée et point de départ à vérifier ; (4) la production exige Légifrance + BOSS.\n\nPaie : une absence maladie a d'abord un régime de maintien de salaire / IJSS (modules absences et maladie). L'impact sur le compteur CP est un second geste, pas un « on coupe 2,5 jours » automatique dans le SIRH sans paramétrage à jour 2024-2026.\n\nNature : L. 3141-5 = obligation légale (liste). Règle maladie 2026 détaillée = à vérifier, non inventée ici. CCN plus favorable (maintien d'acquisition) = à lire.",
      methode:
        "1) Qualifier l'absence. 2) Chercher L. 3141-5 (assimilé ou non). 3) Si maladie / AT : ouvrir le texte consolidé 2026 + BOSS, ne pas se fier au paramétrage d'un logiciel non patché. 4) Ajuster le compteur sous revue. 5) Informer selon les obligations d'information du salarié (délais de report : texte). 6) Tracer la date de lecture Légifrance.",
      noteText:
        "Règle 2026 détaillée maladie/CP : NON inventée dans ce cours. Vérifier Légifrance (L. 3141-5 et s.) et le BOSS avant toute saisie. Un paramétrage SIRH « ancien monde » n'est pas une source.",
      extra: [
        code(`ABSENCE → COMPTEUR CP
Travail effectif                    : acquisition 2,5 j / mois (L. 3141-3)
Période L. 3141-5 assimilée         : acquisition (LIRE la liste consolidée)
Congé sans solde / non assimilé     : en principe pas d'acquisition
Maladie non pro / AT-MP / report    : LIRE Légifrance + BOSS (évolution 2024-2026)
                                     NE PAS INVENTER 0 ni 2,5 de mémoire
CCN plus favorable                  : LIRE LA CCN

Production : date de consultation du texte + capture / lien dans le dossier.`),
      ],
      exemple:
        "ETI, arrêt maladie de 4 mois en 2026. Le SIRH n'a crédité aucun CP. Le junior ne « corrige pas +10 jours » au feeling. Il ouvre L. 3141-5 consolidé, le BOSS, la CCN, fait valider le nombre et le report, puis corrige. L'inverse (créditer 10 sans texte) est aussi une faute.",
      erreurs:
        "Manuel 2015 : zéro CP en maladie. Créditer 2,5 sur un congé sans solde. Traiter AT et maladie identiquement sans lecture. Laisser un SIRH non mis à jour décider du droit. Inventer un report de 15 mois de mémoire sans vérifier s'il s'applique au cas.",
      particuliers:
        "Maternité : assimilation classique, à confirmer dans L. 3141-5 — ne pas aligner sur la maladie ordinaire. Activité partielle : régime spécifique à vérifier. Temps partiel thérapeutique : mixte travail / arrêt, dossier supervisé. Contentieux d'acquisition : hors autonomie junior.",
      exercice:
        "Trois absences en 2026 : (a) 3 semaines de CP ; (b) 2 mois de congé sans solde ; (c) 2 mois d'arrêt maladie non professionnelle. Pour chacune : acquisition certaine, non acquisition de principe, ou « texte à ouvrir » ?",
      correction:
        "(a) Les CP pris n'empêchent pas l'acquisition déjà née ; ce ne sont pas une absence « non travaillée » au sens d'un mois perdu d'acquisition — le mois reste un mois de relation de travail avec CP. (b) Congé sans solde : en principe non assimilé, pas de 2,5 jours — confirmer qu'aucune CCN n'assimile. (c) Maladie non pro : TEXTE À OUVRIR (L. 3141-5 consolidé, BOSS, loi 2024-364). Vous n'écrivez ni 0 ni 5 jours dans cette correction. C'est le geste professionnel.",
    }),
    pack({
      title: "Cas chiffrés : du compteur au bulletin du mois de pose",
      description: "Enchaîner acquisition, conversion, comparaison d'indemnité et lignes de bulletin.",
      minutes: 24,
      objectifs:
        "Vous traitez un dossier complet : 10 mois d'acquisition, pose de 12 ouvrables, comparaison dixième/maintien, et vous décrivez les lignes du bulletin.",
      theorie:
        "Cas unique, janvier 2026 pour les taux de salaire, période de référence pédagogique 1er juin 2025–31 mai 2026 déjà close, pose en juillet 2026. Pour l'indemnité, les taux de cotisations du mois de pose suivraient le barème du mois de versement ; ici l'exercice s'arrête à l'indemnité brute de CP, sans refaire le module cotisations.\n\nSalarié temps plein, 5 jours travaillés, compteur ouvrable. Présence 10 mois sur la période de référence, absences toutes assimilées ou inexistantes. Acquisition légale : 10 × 2,5 = 25 jours ouvrables (pas 30). CCN : silence (pas de jour inventé). Fractionnement : hors cas (pose d'été).\n\nIl pose 12 jours ouvrables en juillet (2 semaines en décompte ouvrable, soit 10 jours ouvrés d'absence au travail lundi–vendredi, plus 2 samedis décomptés).\n\nBrut de la période de référence : 10 × 2 500 = 25 000 € (hypothèse de salaire stable, pas un taux URSSAF). Dixième annuel pour 30 jours serait 2 500 €, donc par jour 2 500/30 = 83,33 €. Pour 25 jours acquis, le dixième porte sur 25 000 € → 2 500 € d'indemnité pour 25 jours = 100,00 € par jour. LABELLISÉ méthode : 10 % du brut de référence indemnise les droits acquis de la période ; 2 500 € / 25 j = 100 €/j, cohérent avec 25 000 × 10 % / 25. Pour 12 jours : 1 200,00 € au dixième.\n\nSalaire de juillet (maintien) : 2 500 € / 26 (hypothèse de paramétrage) = 96,15 € par ouvrable. 12 jours : 1 153,80 €. Comparaison L. 3141-24 : 1 200,00 > 1 153,80 → on retient 1 200,00 €.\n\nBulletin (schéma pédagogique fréquent) : salaire de base 2 500,00 ; retenue absence CP 12 × 96,15 = −1 153,80 (si le logiciel retire le maintien) ; indemnité CP +1 200,00 ; brut du mois 2 546,20 € avant autres éléments. Contrôle : le salarié n'est pas à 2 500 − 1 153,80 = 1 346,20 € (oubli de l'indemnité). Écart +46,20 € = victoire du dixième.\n\nSi le diviseur n'était pas 26, les 1 153,80 changent ; la comparaison se refait. Si le compteur était ouvré, 10 ouvrés posés ≈ 12 ouvrables, mêmes 12 ouvrables d'indemnité si le droit est suivi en ouvrable.\n\nVous n'enchaînez pas ici maladie 2026, ni +2 fractionnement inventés, ni RGDU.",
      methode:
        "Compteur → jours posés dans la bonne unité → dixième → maintien (diviseur nommé) → max → lignes bulletin → contrôle brut. Faire relire un binôme sur le samedi ouvrable.",
      extra: [
        code(`CAS JUILLET — 12 jours ouvrables
Acquisition          10 × 2,5 = 25 j ouvrables légaux
Pose                 12 j ouvrables (2 samedis décomptés, 10 j de travail)
Référence            25 000 €  →  1/10 = 2 500 € pour 25 j = 100,00 €/j
Dixième 12 j         1 200,00 €
Maintien             2 500 / 26 = 96,15 €/j × 12 = 1 153,80 €   (diviseur = paramètre)
Retenu L. 3141-24    1 200,00 €
Bulletin schématique
  Base                 2 500,00
  Absence CP          −1 153,80
  Indemnité CP        +1 200,00
  Brut                 2 546,20
Contrôle : jamais laisser l'absence sans l'indemnité.`),
      ],
      exemple:
        "Un manager voit 2 546 € et demande d'aligner à 2 500 « il était en vacances ». Refus : le dixième est légal. Expliquer la prime de la période de référence (ici, le 10 % sur 25 000 vs maintien).",
      erreurs:
        "Retenue sans indemnité. 12 ouvrés débités d'un compteur ouvrable de 12 (trop). Dixième sur 12/30 × 25 000/10 mal calé. Inventer 30 jours d'acquisition. Diviseur 30 présenté comme L. 3141-24. Ajouter 2 jours de fractionnement « au cas où ».",
      particuliers:
        "Pose à cheval sur deux mois : deux bulletins, un seul droit. Demi-journée : unité du compteur. Anticipation de jours non acquis : trop-pris à régulariser en sortie. ICC : même comparaison, sur les jours restants, au moment du solde.",
      exercice:
        "Mêmes données, mais brut de référence 22 000 € (salaire plus bas en début de période) et salaire actuel 2 500 €, /26. Pour 12 jours, quelle méthode l'emporte et quel brut schématique (base − maintien + indemnité) ?",
      correction:
        "Dixièmes : 22 000 × 10 % = 2 200 € pour 25 j = 88,00 €/j × 12 = 1 056,00 €. Maintien : 1 153,80 €. Le maintien l'emporte. Bulletin : 2 500,00 − 1 153,80 + 1 153,80 = 2 500,00 € (neutralité du maintien). Vous versez 1 153,80 € d'indemnité, pas 1 056,00 €. C'est tout l'intérêt de L. 3141-24.",
    }),
    quizLesson({
      title: "Quiz — Congés payés",
      description: "Acquisition, ouvrables, L. 3141-24, fractionnement, maladie.",
      passing_score: 70,
      questions: [
        q({
          question: "L. 3141-3 fixe l'acquisition légale à :",
          options: [
            "A. 2,5 jours ouvrables par mois de travail effectif, maximum 30 jours ouvrables",
            "B. 2,5 jours ouvrés par mois, maximum 25 ouvrés, sans CCN possible",
            "C. 2,08 jours ouvrables par mois",
            "D. 30 jours dès l'embauche",
          ],
          correct: 0,
          explanation:
            "Ouvrables, plafond 30. Une CCN peut être plus favorable. 2,08 est une conversion ouvré, pas le texte légal.",
        }),
        q({
          question: "Pour une semaine à 5 jours travaillés, 30 jours ouvrables équivalent couramment à :",
          options: [
            "A. 30 jours ouvrés",
            "B. 25 jours ouvrés",
            "C. 20 jours ouvrés",
            "D. 12 jours ouvrés",
          ],
          correct: 1,
          explanation:
            "5 semaines × 5 ouvrés = 25. Conversion 5/6. Une entreprise à 6 jours travaillés ne convertit pas de la même façon.",
        }),
        q({
          question: "L. 3141-24 impose :",
          options: [
            "A. Toujours le dixième, jamais le maintien",
            "B. Toujours le maintien, le dixième est facultatif",
            "C. De comparer dixième de la période de référence et maintien, et de retenir le plus favorable",
            "D. Un diviseur légal unique égal à 26",
          ],
          correct: 2,
          explanation:
            "Les deux méthodes, le max. Le 26 est une pratique de paramétrage, pas un article « L. 26 ».",
        }),
        q({
          question: "Référence 28 800 € (96 €/j au dixième) et maintien 100 €/j (diviseur d'entreprise). Pour 10 jours ouvrables, on verse :",
          options: [
            "A. 960 €",
            "B. 1 000 €",
            "C. 1 960 € (les deux additionnés)",
            "D. 0 €, les CP ne se paient qu'au STC",
          ],
          correct: 1,
          explanation:
            "Max(960, 1000) = 1 000 €. On n'additionne pas. Les CP pris se paient le mois de pose.",
        }),
        q({
          question: "Les jours supplémentaires de fractionnement :",
          options: [
            "A. N'existent pas en droit français",
            "B. Valent toujours +3 jours",
            "C. Relèvent d'un cadre légal (L. 3141-23) dont le nombre exact se lit dans le texte consolidé et la CCN ; on n'invente pas le crédit",
            "D. Se confondent avec les RTT",
          ],
          correct: 2,
          explanation:
            "Le cadre existe. La consigne du cours : LIRE L. 3141-23, ne pas inventer 1 ou 2 jours de mémoire en production.",
        }),
        q({
          question: "Acquisition des CP pendant un arrêt maladie en 2026 :",
          options: [
            "A. Toujours 0, comme « avant »",
            "B. Toujours 2,5 jours par mois, sans plafond ni lecture",
            "C. Le droit a évolué (notamment loi du 22 avril 2024) : relire L. 3141-5 consolidé et le BOSS, ne pas inventer le détail",
            "D. Uniquement si la CCN Syntec s'applique",
          ],
          correct: 2,
          explanation:
            "Évolution réelle, détail 2026 non récité de mémoire dans ce cours. Ni 0 automatique ni 2,5 inventé.",
        }),
        q({
          question: "10 mois de travail effectif, hors CCN, droits légaux ouvrables :",
          options: [
            "A. 30",
            "B. 25 (10 × 2,5)",
            "C. 20",
            "D. 10 × 2,08 = 20,8 ouvrables",
          ],
          correct: 1,
          explanation:
            "2,5 × 10 = 25 ouvrables. 2,08 est une conversion ouvré. Le plafond 30 ne s'applique qu'à 12 mois légaux.",
        }),
        q({
          question: "Sur un bulletin de pose, oublier la ligne indemnité CP après une retenue d'absence CP :",
          options: [
            "A. Est acceptable si le salarié a « vraiment été absent »",
            "B. Sous-paie le salarié et viole L. 3141-24",
            "C. Est corrigé par la CSG",
            "D. Est obligatoire en forfait jours",
          ],
          correct: 1,
          explanation:
            "Le schéma base − absence + indemnité existe pour mensualiser sans priver du droit. L'indemnité est due.",
        }),
        q({
          question: "La période juin–mai :",
          options: [
            "A. Est le seul calendrier légal possible, l'année civile est interdite",
            "B. Est le repère historique d'acquisition ; un accord peut retenir une autre période (souvent l'année civile) à lire dans le dossier",
            "C. Sert uniquement au PAS",
            "D. Remplace le PMSS",
          ],
          correct: 1,
          explanation:
            "Deux horloges possibles selon accord. En cabinet, chaque client a la sienne. Rien à voir avec le PAS ou le PMSS.",
        }),
      ],
    }),
  ],
};
