// Tout le texte du site en un seul endroit : ajouter une langue = ajouter un fichier.
// Les coordonnées personnelles sont des valeurs FICTIVES (voir CLAUDE.md).

export const identite = {
  nom: 'Vadim Prokhorov',
  role: 'data scientist',
  ecole: 'Télécom Paris — Institut Polytechnique de Paris',
}

export const accueil = {
  enonce: 'Établir, par la mesure, qu’une piste ne vaut plus la peine d’être poursuivie.',
  positionnement:
    'C’est ma contribution la plus fréquente. Je travaille sur le versant mathématique de la data science — tests d’hypothèses, conception de métriques qu’aucune solution dégénérée ne peut gagner, modélisation bayésienne, géométrie des représentations. Et je porte en production ce que je conçois, pour que le résultat serve directement aux équipes produit.',
  situation:
    'Élève ingénieur en première année du cycle ingénieur à Télécom Paris, après une licence d’informatique mineure mathématiques à Sorbonne Université. Ouvert aux projets de recherche comme aux projets industriels.',
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
    'Quatre études menées chez DOCENT, sur une plateforme d’analyse des tendances culturelles où une équipe artistique annote des artistes sur 135 sous-dimensions binaires.',
  etudes: [
    {
      titre: 'Regrouper des données qui n’ont pas de groupes',
      texte:
        'Le résultat attendu de l’étude était « l’algorithme gagnant ». Le résultat réel : aucune structure de groupes naturelle n’existe dans ces données, et c’est l’annotation de référence elle-même qui fixe le plafond. Trois tests indépendants le montrent — statistique de Hopkins entre 0.54 et 0.60, co-association moyenne de 0.230 sur 313 236 paires, et un accord des experts entre eux plus faible que celui du meilleur algorithme avec eux. J’ai arrêté là l’optimisation d’algorithme et redirigé le choix vers des critères produit : stabilité, équilibre, lisibilité.',
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
      titre: 'UMAP fabrique la structure qu’il mesure',
      texte:
        'Même jeu de données, même annotation, deux espaces. Dans l’espace d’origine, la silhouette vaut 0.018 : aucune séparation. Après projection UMAP, elle vaut 0.326, dix-huit fois plus — sans qu’aucune information ait été ajoutée. La décision qui en découle : regrouper dans l’espace d’origine, et réserver les projections à l’affichage.',
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
      texte:
        'Neuf marques réelles seulement : impossible d’évaluer quoi que ce soit dessus. J’ai conçu un protocole de pseudo-marques — des artistes mis de côté jouent le rôle de marques, chaque composant est réentraîné sur le seul ensemble d’apprentissage, et les métriques de rang tiennent compte des ex æquo avec un niveau de hasard explicite. Dix-huit variantes comparées sur trois protocoles, front de Pareto réduit à deux points. Diagnostic au passage : une méthode pondérée tombait sous le niveau du hasard, sa pondération supprimant exactement les dimensions discriminantes.',
      mesure: {
        legende: 'Précision au premier résultat',
        lignes: [
          { label: 'Moteur retenu', valeur: 0.768, affichage: '0.768' },
          { label: 'Niveau du hasard', valeur: 0.14, affichage: '0.140', reference: true },
        ],
        lecture:
          'Sur dix marques, le moteur place le bon artiste en tête dans près de huit cas, contre un à deux pour un tirage au hasard — cinq fois et demie le niveau du hasard. C’est ce qui rend l’outil utilisable au quotidien : la première proposition est le plus souvent la bonne.',
      },
    },
    {
      titre: 'Un backend qui survit à la concurrence',
      texte:
        'File de travaux portée par PostgreSQL lui-même — verrouillage FOR UPDATE SKIP LOCKED et bail, sans courtier de messages. Schéma de 41 tables, 38 migrations, exécuteur de migrations maison avec registre de sommes de contrôle. Les tests de charge ont révélé une course à l’attribution de révision, invisible à la lecture : sous deux millisecondes d’écart entre deux prises, la quasi-totalité des exécutions échouait. Corrigée par un verrou consultatif par entité, avant la mise en service.',
      mesure: {
        legende: 'Échecs sous charge, écart de prise inférieur à 2 ms',
        lignes: [
          { label: 'Avant correction', valeur: 80, affichage: '≈ 80 %' },
          { label: 'Après correction, sur 15 exécutions', valeur: 0, affichage: '0 %', reference: true },
        ],
        lecture:
          'Sous forte charge, quatre traitements sur cinq échouaient à cause d’un défaut que la relecture du code ne montrait pas. Après correction, aucun sur quinze exécutions. Le défaut a été trouvé par les tests avant la mise en service, pas par les utilisateurs.',
      },
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
        'Méthode de segmentation retenue en production, sélectionnée parmi 15 configurations évaluées sur 8 tests, à l’aide d’un banc de comparaison reproductible rejouant l’étude entière en deux minutes.',
        'Moteur de rapprochement marque – artistes, comparé sur trois protocoles d’évaluation, avec une variante bayésienne pour les usages exigeant une probabilité calibrée.',
        'Pipeline d’annotation par LLM industrialisé : trois workflows no-code remplacés par un service Python livré en production — suivi du coût par exécution, reprise après échec partiel, vérification automatique des sources citées.',
      ],
    },
    {
      organisation: 'Agency 1301',
      intitule: 'Data scientist freelance',
      periode: 'depuis l’automne 2025',
      contexte: 'Détection de republication non autorisée de photographies. Le cœur du modèle était hérité ; mon périmètre était la mesure, la fiabilité des données et l’industrialisation autour de lui.',
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
    {
      organisation: 'CAPSULE, Sorbonne Université',
      intitule: 'Technicien support informatique',
      periode: 'depuis sept. 2024',
      contexte: 'Maintenance de postes Linux et Windows et gestion des mises à jour logicielles, en équipe.',
      points: [],
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
      nom: 'Apprentissage profond et représentations',
      contenu: 'CNN, LSTM, ResNet, U-Net, CLIP, sentence-transformers.',
    },
    {
      nom: 'LLM et IA générative',
      contenu:
        'RAG, embeddings, bases vectorielles, ingénierie des prompts, mise en cache de prompts, pipelines multi-étapes et agentiques, suivi du coût. SDK Anthropic, Perplexity Sonar, n8n.',
    },
    {
      nom: 'Données et backend',
      contenu: 'Python, C, C++, SQL, PostgreSQL, FastAPI, psycopg3, Pandas, NumPy, Power BI, Matplotlib et Seaborn.',
    },
    {
      nom: 'Infrastructure et qualité',
      contenu: 'Docker et docker compose, AWS (EC2, RDS, S3, ALB, CloudWatch), Git, Linux, pytest, pre-commit, ruff.',
    },
    {
      nom: 'Développement assisté par IA',
      contenu:
        'Agents de codage (Claude Code, Cursor), Model Context Protocol, skills et outils personnalisés, relecture et test systématiques du code généré.',
    },
  ],
}

export const formation = {
  titre: 'Formation',
  diplomes: [
    {
      intitule: 'Cycle ingénieur, première année',
      etablissement: 'Télécom Paris — Institut Polytechnique de Paris, Palaiseau',
      periode: '2026 – 2029',
    },
    {
      intitule: 'Licence d’informatique, mineure mathématiques',
      etablissement: 'Sorbonne Université — Faculté des sciences et ingénierie, Paris',
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
}
