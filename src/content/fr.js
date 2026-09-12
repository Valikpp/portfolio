// Tout le texte du site en un seul endroit : ajouter une langue = ajouter un fichier.
// Confidentialité : les quantités qui décrivent l'activité d'un client (taille du
// corpus, nombre de marques, dimensions du schéma) restent approximatives. Les
// chiffres qui décrivent la méthode sont donnés exactement.

export const identite = {
  nom: 'Vadim Prokhorov',
  role: 'data scientist',
  ecole: 'Télécom Paris, Institut Polytechnique de Paris',
}

export const sommaire = {
  titre: 'Sommaire',
}

export const accueil = {
  enonce: 'Concevoir la mesure qui décide si un résultat est réel, puis livrer ce qu’elle valide.',
  coda: 'Il arrive qu’elle ne valide rien : c’est le résultat le moins attendu, et pas le moins utile.',
  positionnement:
    'Je travaille sur le versant mathématique de la data science, qu’il s’agisse de tests d’hypothèses, de conception de métriques qu’aucune solution dégénérée ne peut gagner, de modélisation bayésienne ou de géométrie des représentations. Je construis aussi le service qui met le résultat entre les mains des équipes produit : Python, FastAPI, PostgreSQL, Docker, AWS.',
  situation:
    'Première année du cycle ingénieur à Télécom Paris, Institut Polytechnique de Paris, après une licence d’informatique mineure mathématiques obtenue à Sorbonne Université. Ouvert aux projets de recherche comme aux projets industriels.',
}

export const methode = {
  titre: 'Méthode',
  regles: [
    {
      titre: 'Mesurer avant d’optimiser',
      texte:
        'Prouver qu’un gain est encore possible avant d’y consacrer l’effort. Quand le plafond vient de la référence elle-même, aucun réglage d’algorithme ne le déplacera.',
    },
    {
      titre: 'Se méfier d’une métrique unique',
      texte:
        'Chercher d’abord comment chaque métrique peut être gagnée par une solution qui ne vaut rien, puis retenir celles qui résistent à cette attaque.',
    },
    {
      titre: 'Trouver les défauts par l’exécution',
      texte:
        'Les défauts de concurrence et de reprise ne se voient pas à la lecture du code. Ils apparaissent sous charge, et à la question « que se passe-t-il quand une deuxième version arrive ? ».',
    },
    {
      titre: 'Énoncer les limites',
      texte:
        'Dire explicitement ce qui est hérité, estimé ou non validé. Un résultat dont on connaît les limites est utilisable ; un résultat présenté sans elles ne l’est pas.',
    },
  ],
}

export const travaux = {
  titre: 'Travaux',
  chapeau:
    'Quatre études menées chez DOCENT, sur une plateforme d’analyse des tendances culturelles où une équipe artistique annote des artistes sur plus de cent sous-dimensions binaires, et une cinquième chez Agency 1301.',
  etudes: [
    {
      titre: 'Regrouper des données qui n’ont pas de groupes',
      court: 'Données sans groupes',
      texte:
        'Le résultat attendu de l’étude était « l’algorithme gagnant ». Le résultat réel : aucune structure de groupes naturelle n’existe dans ces données, et c’est l’annotation de référence elle-même qui fixe le plafond. Trois tests indépendants le montrent, à savoir une statistique de Hopkins entre 0.54 et 0.60, une co-association moyenne de 0.230 sur plusieurs centaines de milliers de paires et un accord des experts entre eux plus faible que celui du meilleur algorithme avec eux.',
      complement:
        'J’ai arrêté là l’optimisation d’algorithme et redirigé le choix vers des critères produit : stabilité, équilibre, lisibilité. Le modèle retenu, un KMeans amorcé par les piliers et entièrement déterministe, donne les groupes les plus séparables de l’étude, avec un macro-F1 de 0.776 et une stabilité à la croissance de 0.715.',
      mesure: {
        legende: 'Accord avec l’annotation des experts (ARI)',
        lignes: [
          { label: 'Modèle retenu en production', valeur: 0.189, affichage: '0.189' },
          { label: 'Les experts entre eux', valeur: 0.17, affichage: '0.170', reference: true },
        ],
        lecture:
          'Deux experts de l’équipe artistique, à qui l’on demande de regrouper les mêmes artistes, sont moins souvent d’accord entre eux que le modèle ne l’est avec eux. Le plafond de l’étude n’était donc pas l’algorithme mais la cohérence de la référence humaine : continuer à le régler n’aurait rien apporté de mesurable.',
      },
    },
    {
      titre: 'Concevoir la métrique, pas seulement l’appliquer',
      court: 'Concevoir la métrique',
      texte:
        'Les métriques standards de la batterie récompensaient des partitions sans valeur : l’une d’elles réunissait la grande majorité des éléments dans un seul groupe et obtenait pourtant un très bon rang. J’ai conçu un score de recouvrement pondéré par les notes, qui oppose un plafond analytique atteignable aux solutions dégénérées et qui est le seul de la batterie qu’une partition dégénérée ne peut pas remporter. Le classement des méthodes s’en trouve inversé par rapport à la métrique qui faisait autorité jusque-là.',
      lecture:
        'Une métrique mal choisie peut être gagnée par une solution qui ne fait rien d’utile, par exemple en mettant presque tout dans un seul groupe. Concevoir la métrique avant de comparer les méthodes évite de couronner ce genre de solution, et c’est un travail distinct de celui d’appliquer un algorithme.',
    },
    {
      titre: 'UMAP fabrique la structure qu’il mesure',
      court: 'UMAP et la structure',
      texte:
        'Même jeu de données, même annotation, deux espaces. Dans l’espace d’origine, la silhouette vaut 0.018 : aucune séparation. Après projection UMAP, elle vaut 0.326, soit dix-huit fois plus, sans qu’aucune information ait été ajoutée. La décision qui en découle : regrouper dans l’espace d’origine, et réserver les projections à l’affichage.',
      mesure: {
        legende: 'Silhouette, même partition',
        lignes: [
          { label: 'Après projection UMAP', valeur: 0.326, affichage: '0.326' },
          { label: 'Dans l’espace d’origine', valeur: 0.018, affichage: '0.018', reference: true },
        ],
        lecture:
          'La même partition paraît dix-huit fois mieux séparée après projection, sans qu’aucune donnée ait été ajoutée : c’est l’outil d’affichage qui fabrique l’apparence de structure. S’y fier aurait conduit à publier des groupes d’artistes qui n’existent pas.',
      },
    },
    {
      titre: 'Positionner une marque sans vérité terrain',
      court: 'Marques sans vérité terrain',
      texte:
        'Le portefeuille de marques réelles était trop restreint pour évaluer quoi que ce soit dessus. J’ai conçu un protocole de pseudo-marques, dans lequel des artistes mis de côté jouent le rôle de marques. Chaque composant y est réentraîné sur le seul ensemble d’apprentissage, et les métriques de rang tiennent compte des ex æquo avec un niveau de hasard explicite. Dix-huit variantes comparées sur trois protocoles, front de Pareto réduit à deux points. Diagnostic au passage : une méthode pondérée tombait sous le niveau du hasard, sa pondération supprimant exactement les dimensions discriminantes.',
      complement:
        'Pour les usages qui demandent une probabilité calibrée plutôt qu’un simple classement, j’ai construit une variante bayésienne : un modèle d’appartenance de type Bernoulli-Beta, dont la force de l’a priori est calibrée à partir d’un niveau de confiance visé. Elle répond à une autre question, qui n’est plus de savoir quel artiste arrive en tête, mais à quel point le rapprochement mérite d’être cru.',
      mesure: {
        legende: 'Précision au premier résultat',
        lignes: [
          { label: 'Moteur retenu', valeur: 0.768, affichage: '0.768' },
          { label: 'Niveau du hasard', valeur: 0.14, affichage: '0.140', reference: true },
        ],
        lecture:
          'Sur dix marques, le moteur place le bon artiste en tête dans près de huit cas, contre un à deux pour un tirage au hasard, soit cinq fois et demie le niveau du hasard. C’est ce qui rend l’outil utilisable au quotidien : la première proposition est le plus souvent la bonne.',
      },
    },
    {
      court: 'Copie absente ou échec',
      titre: 'Distinguer « aucune copie » de « la recherche a échoué »',
      texte:
        'Chez Agency 1301, sur une chaîne de détection de republication non autorisée de photographies, le cœur du modèle était hérité : mon périmètre était la mesure et la fiabilité des données autour de lui. Le taux de détection additionnait deux situations sans rapport, à savoir les photos pour lesquelles aucune copie n’existe et celles pour lesquelles la recherche avait techniquement échoué. J’ai introduit des statuts d’échec typés, enregistrés avant le lancement de la recherche, et séparé un score non calculable d’un score réellement nul. J’ai également conservé l’ensemble des candidats, retenus comme rejetés, pour que le seuil de décision puisse être réexaminé sans relancer des recherches qui prenaient des heures par lot.',
      lecture:
        'Avant, une panne technique et une absence réelle de copie produisaient le même chiffre : le taux de détection annoncé était donc faux d’une quantité que personne ne pouvait estimer. Après, les deux cas se comptent séparément, et le seuil peut être rejugé sans tout relancer.',
    },
  ],
}

export const parcours = {
  titre: 'Parcours',
  postes: [
    {
      organisation: 'DOCENT',
      intitule: 'Stagiaire data scientist',
      periode: 'févr. – août 2026',
      contexte: 'Plateforme d’analyse et de prédiction des tendances culturelles.',
      points: [
        'Méthode de segmentation retenue en production, sélectionnée parmi 15 configurations évaluées sur 8 tests, à l’aide d’un banc de comparaison reproductible que j’ai construit : il rejoue en deux minutes l’étude entière, avec ses cinq espaces de représentation et ses sept annotations d’experts.',
        'Moteur de rapprochement marque – artistes, comparé sur trois protocoles d’évaluation, avec une variante bayésienne pour les usages exigeant une probabilité calibrée.',
        'Pipeline d’annotation par LLM industrialisé : trois workflows no-code remplacés par un service Python livré en production, avec suivi du coût par exécution, reprise après échec partiel et vérification automatique des sources citées.',
        'Service porté par une file de travaux reposant sur PostgreSQL lui-même, sans courtier de messages, et par un exécuteur de migrations maison à registre de sommes de contrôle.',
      ],
    },
    {
      organisation: 'Agency 1301',
      intitule: 'Data scientist freelance',
      periode: 'automne 2025',
      contexte:
        'Détection de republication non autorisée de photographies. Le cœur du modèle était hérité ; mon périmètre était la mesure, la fiabilité des données et l’industrialisation autour de lui.',
      points: [
        'Seuil de décision rendu réexaminable : tous les candidats sont conservés, retenus comme rejetés, ce qui évite de relancer des recherches de plusieurs heures pour recalibrer.',
        'Taux de détection rendu interprétable : statuts d’échec typés, et distinction entre un score non calculable et un score réellement nul.',
        'Mesure reproductible : seuil, version applicative et horodatage gelés à chaque exécution ; vérité terrain annotée sur six niveaux avec un protocole versionné.',
      ],
    },
    {
      organisation: 'Prana France',
      intitule: 'Stagiaire data analyst',
      periode: 'mai – août 2025',
      contexte: 'PME industrielle, solutions de ventilation double-flux et décentralisée.',
      points: [
        'Tableaux de bord Power BI sur les ventes, l’activité commerciale et la génération de leads, à partir de données préparées en SQL.',
        'Assistant de support client par RAG, développé en Python sur les embeddings de la documentation produit et déployé sur AWS.',
      ],
    },
    {
      organisation: 'SAS Datafoncier',
      intitule: 'Stagiaire data scientist',
      periode: 'juin – août 2024',
      contexte: 'Start-up spécialisée dans l’analyse du marché immobilier.',
      points: [
        'Outil de prédiction du marché immobilier par régression : prix, surface, tendances.',
        'Extraction de caractéristiques par ResNet pour estimer l’état des biens, à partir d’images nettoyées et normalisées.',
      ],
    },
  ],
}

export const projets = {
  titre: 'Projets',
  liste: [
    {
      titre: 'Décodeur Morse, de l’audio au texte',
      texte:
        'Traitement du signal avec Librosa, puis un modèle CNN + LSTM avec dropout et max-pooling.',
    },
    {
      titre: 'Prédiction de départ de clients',
      texte:
        'Classification binaire : validation croisée, sélection d’hyperparamètres, arbres de décision.',
    },
    {
      titre: 'Dangerosité des émissions de centrales électriques',
      texte:
        'Projet académique en équipe, janvier – mai 2024 : classificateurs sur les émissions de carbone.',
    },
  ],
}

export const competences = {
  titre: 'Compétences',
  groupes: [
    {
      nom: 'Mathématiques et statistique',
      contenu:
        'Tests d’hypothèses, rééchantillonnage bootstrap, métriques d’accord (ARI, alpha de Cronbach), tests de tendance au regroupement (Hopkins), inférence bayésienne (Beta-Bernoulli, shrinkage), algèbre linéaire et géométrie des représentations (ACP, analyse procustéenne, fidélité des distances), conception de métriques et correction du hasard.',
    },
    {
      nom: 'Apprentissage automatique',
      contenu:
        'Classification et régression, clustering (KMeans, Ward, HDBSCAN), réduction de dimension (ACP, UMAP, t-SNE, MDS), conception de protocoles d’évaluation. scikit-learn, PyTorch, TensorFlow, scipy.',
    },
    {
      nom: 'LLM et IA générative',
      contenu:
        'RAG, embeddings, bases vectorielles, ingénierie des prompts, mise en cache de prompts, pipelines multi-étapes et agentiques, suivi du coût. SDK Anthropic, Perplexity Sonar, n8n.',
    },
    {
      nom: 'Développement assisté par IA',
      contenu:
        'Agents de codage (Claude Code, Cursor), Model Context Protocol, skills et outils personnalisés, orchestration d’agents, relecture et test systématiques du code généré.',
    },
    {
      nom: 'Apprentissage profond et représentations',
      contenu: 'CNN, LSTM, ResNet, U-Net, CLIP, sentence-transformers.',
    },
    {
      nom: 'Données et backend',
      contenu:
        'Python, C, C++, SQL, PostgreSQL, FastAPI, psycopg3, Pandas, NumPy, Power BI, Matplotlib et Seaborn.',
    },
    {
      nom: 'Infrastructure et qualité',
      contenu:
        'Docker et docker compose, AWS (EC2, RDS, S3, ALB, CloudWatch), Git, Linux, pytest, pre-commit, ruff.',
    },
  ],
}

export const formation = {
  titre: 'Formation',
  diplomes: [
    {
      intitule: 'Cycle ingénieur, première année',
      etablissement: 'Télécom Paris, Institut Polytechnique de Paris, Palaiseau',
      periode: '2026 – 2029',
    },
    {
      intitule: 'Licence d’informatique, mineure mathématiques',
      etablissement: 'Sorbonne Université, Faculté des sciences et ingénierie, Paris',
      periode: '2023 – 2026',
    },
  ],
  langues: [
    { langue: 'Russe', niveau: 'langue maternelle' },
    { langue: 'Français', niveau: 'C1, courant' },
    { langue: 'Anglais', niveau: 'B2' },
  ],
}

export const contact = {
  titre: 'Contact',
  phrase:
    'La data science et l’apprentissage automatique sont le domaine où je veux construire une expérience de premier plan, par la recherche autant que par les projets industriels. Si c’est le terrain de votre équipe, parlons-en.',
  liens: [
    {
      label: 'Courriel',
      valeur: 'contact@vadim-prokhorov.eu',
      href: 'mailto:contact@vadim-prokhorov.eu',
    },
    {
      label: 'LinkedIn',
      valeur: 'vadim-prokhorov',
      href: 'https://www.linkedin.com/in/vadim-prokhorov-58b755298/',
    },
    { label: 'GitHub', valeur: 'Valikpp', href: 'https://github.com/Valikpp' },
  ],
  lieu: 'Île-de-France',
}
