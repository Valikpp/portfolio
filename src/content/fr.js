// Tout le texte du site en un seul endroit : ajouter une langue = ajouter un fichier.
// Confidentialité : les quantités qui décrivent l'activité d'un client (taille du
// corpus, nombre de marques, dimensions du schéma) restent approximatives. Les
// chiffres qui décrivent la méthode sont donnés exactement.

export const code = 'fr'

export const ui = {
  evitement: 'Aller au contenu',
  navigation: 'Sections du site',
  langue: 'Langue du site',
}

export const identite = {
  nom: 'Vadim Prokhorov',
  role: 'data scientist',
  ecole: 'Télécom Paris, Institut Polytechnique de Paris',
}

export const mesure = {
  contre: 'contre',
}

export const deplier = {
  technique: 'Détail technique',
  competences: 'Toutes les compétences',
  methode: 'En détail',
  poste: 'Voir le détail',
  replier: 'Replier',
  renvoi: 'Voir l’étude',
}

// Le fichier est servi depuis public/cv/ ; le nom est aussi celui du téléchargement.
export const cv = {
  libelle: 'Télécharger le CV (PDF)',
  court: 'CV',
  fichier: 'CV_Vadim_Prokhorov_FR.pdf',
}

export const accueil = {
  surtitre: 'Data scientist · élève ingénieur à Télécom Paris (Institut Polytechnique de Paris)',
  // « fort » est mis en gras entre « avant » et « apres ».
  recherche: {
    avant: 'Je cherche un ',
    fort: 'stage d’été, de juillet à août 2027',
    apres: ', en data science, machine learning ou data engineering.',
  },
  contacter: 'Me contacter',
  enonce: 'Concevoir la mesure qui décide si un résultat est réel, puis livrer ce qu’elle valide.',
  positionnement:
    'Je travaille sur le versant mathématique de la data science : tests d’hypothèses, conception de métriques d’évaluation, modélisation bayésienne. Et je mets en production ce que je conçois, avec Python, FastAPI, PostgreSQL, Docker et AWS.',
}

export const enBref = {
  titre: 'En bref',
  points: [
    {
      libelle: 'Télécom Paris',
      texte: 'Admis par le concours GEI-UNIV, 20 places par cette voie',
    },
    {
      libelle: 'Expérience',
      texte:
        '4 expériences data avant le cycle ingénieur, dont un modèle et un service mis en production chez DOCENT',
    },
    {
      libelle: 'Sorbonne Université',
      texte: '2ᵉ sur 57 en L2 · 1ᵉʳ sur 117 en Sciences des données',
    },
    {
      libelle: 'Langues',
      texte:
        'Français C1 · anglais B2 (TOEFL iBT 87), langue de travail chez DOCENT · russe natif',
    },
    {
      libelle: 'Stack',
      texte: 'Python, SQL, scikit-learn, PyTorch, FastAPI, PostgreSQL, Docker, AWS',
    },
  ],
}

export const methode = {
  titre: 'Méthode',
  regles: [
    {
      titre: 'Mesurer avant d’optimiser',
      phrase: 'Prouver qu’un gain est encore possible avant d’y consacrer l’effort.',
      texte:
        'Prouver qu’un gain est encore possible avant d’y consacrer l’effort. Quand le plafond vient de la référence elle-même, aucun réglage d’algorithme ne le déplacera.',
    },
    {
      titre: 'Se méfier d’une métrique unique',
      phrase: 'Chercher d’abord comment chaque métrique peut être gagnée par une solution qui ne vaut rien.',
      texte:
        'Chercher d’abord comment chaque métrique peut être gagnée par une solution qui ne vaut rien, puis retenir celles qui résistent à cette attaque.',
    },
    {
      titre: 'Trouver les défauts par l’exécution',
      phrase: 'Les défauts de concurrence et de reprise apparaissent sous charge.',
      texte:
        'Les défauts de concurrence et de reprise ne se voient pas à la lecture du code. Ils apparaissent sous charge, et à la question « que se passe-t-il quand une deuxième version arrive ? ».',
    },
    {
      titre: 'Énoncer les limites',
      phrase: 'Dire explicitement ce qui est hérité, estimé ou non validé.',
      texte:
        'Dire explicitement ce qui est hérité, estimé ou non validé. Un résultat dont on connaît les limites est utilisable ; un résultat présenté sans elles ne l’est pas.',
    },
  ],
}

export const travaux = {
  titre: 'Travaux',
  lignes: { role: 'Mon rôle', herite: 'Hérité', limites: 'Limites' },
  // « resultat », « chiffre » et la mesure « enHaut » forment l'étage visible ;
  // le reste s'ouvre sous « Détail technique ». La réglette 0–1 n'est gardée
  // que là où elle sert le résultat (étude 4) : près de zéro, elle fait lire
  // un bon résultat comme faible.
  chapeau:
    'Quatre études menées chez DOCENT, sur une plateforme d’analyse des tendances culturelles où une équipe artistique annote des artistes sur plus de cent sous-dimensions binaires, et une cinquième chez Agency 1301.',
  etudes: [
    {
      titre: 'Regrouper des données qui n’ont pas de groupes',
      resultat:
        'Le modèle retenu s’accorde mieux avec les experts que les experts entre eux. J’ai donc arrêté d’optimiser l’algorithme, sur preuve statistique.',
      role: 'Les trois tests (Hopkins, co-association, accord inter-annotateurs) et la décision d’arrêter l’optimisation.',
      herite: 'L’annotation de référence de l’équipe artistique.',
      limites:
        'Les groupes retenus ne reflètent pas une structure naturelle : ils sont choisis sur des critères produit (stabilité, équilibre, lisibilité).',
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
      titre: 'Concevoir la métrique avant de comparer les méthodes',
      resultat:
        'Les métriques standards donnaient la victoire à des partitions dégénérées. J’ai conçu un score de recouvrement avec un plafond analytique, pour que ces partitions cessent de gagner.',
      role: 'Conception du score de recouvrement.',
      herite: 'L’annotation de référence de l’équipe artistique.',
      texte:
        'Les métriques standards de la batterie récompensaient des partitions sans valeur : l’une d’elles réunissait la grande majorité des éléments dans un seul groupe et obtenait pourtant un très bon rang. J’ai conçu un score de recouvrement pondéré par les notes, qui oppose un plafond analytique atteignable aux solutions dégénérées et qui est le seul de la batterie qu’une partition dégénérée ne peut pas remporter. Le classement des méthodes s’en trouve inversé par rapport à la métrique qui faisait autorité jusque-là.',
      lecture:
        'Une métrique mal choisie peut être gagnée par une solution qui ne fait rien d’utile, par exemple en mettant presque tout dans un seul groupe. Concevoir la métrique avant de comparer les méthodes évite de couronner ce genre de solution, et c’est un travail distinct de celui d’appliquer un algorithme.',
    },
    {
      titre: 'UMAP fabrique la structure qu’il mesure',
      resultat:
        'Après projection UMAP, la même partition paraissait 18 fois mieux séparée, sans aucune information ajoutée. Décision : regrouper dans l’espace d’origine, et garder UMAP pour l’affichage.',
      chiffre: { valeur: '×18', label: 'séparation apparente après UMAP' },
      role: 'Le diagnostic de l’effet UMAP et la décision de regrouper dans l’espace d’origine.',
      herite: 'L’annotation de référence de l’équipe artistique.',
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
      resultat:
        'Sur 10 marques, le bon artiste arrive en tête dans près de 8 cas, contre 1 à 2 au hasard : 5,5 fois le niveau du hasard.',
      role: 'Comparaison de 18 méthodes sur 3 protocoles, et variante bayésienne (Bernoulli–Beta) pour les usages qui demandent une probabilité calibrée.',
      herite: 'L’annotation de référence de l’équipe artistique.',
      limites:
        'Évalué sur des pseudo-marques : le portefeuille de marques réelles est trop restreint pour une évaluation directe.',
      texte:
        'Le portefeuille de marques réelles était trop restreint pour évaluer quoi que ce soit dessus. J’ai conçu un protocole de pseudo-marques, dans lequel des artistes mis de côté jouent le rôle de marques. Chaque composant y est réentraîné sur le seul ensemble d’apprentissage, et les métriques de rang tiennent compte des ex æquo avec un niveau de hasard explicite. Dix-huit variantes comparées sur trois protocoles, front de Pareto réduit à deux points. Diagnostic au passage : une méthode pondérée tombait sous le niveau du hasard, sa pondération supprimant exactement les dimensions discriminantes.',
      complement:
        'Pour les usages qui demandent une probabilité calibrée plutôt qu’un simple classement, j’ai construit une variante bayésienne : un modèle d’appartenance de type Bernoulli-Beta, dont la force de l’a priori est calibrée à partir d’un niveau de confiance visé. Elle répond à une autre question, qui n’est plus de savoir quel artiste arrive en tête, mais à quel point le rapprochement mérite d’être cru.',
      mesure: {
        enHaut: true,
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
      resultat:
        'Une panne technique et une absence réelle de copie donnaient le même chiffre. Je les compte maintenant séparément, et le seuil se réexamine sans tout relancer.',
      role: 'La mesure, la fiabilité des données et l’industrialisation autour du modèle.',
      herite: 'Le pipeline de détection existait déjà.',
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
      periode: 'mars – août 2026',
      contexte:
        'Plateforme d’analyse et de prédiction des tendances culturelles. Mi-temps pendant les études, puis plein temps. Équipe anglophone.',
      // « points » restent visibles ; « detail » s'ouvre sous « Voir le détail ».
      // Un point avec « renvois » pointe vers les études de ces numéros dans
      // Travaux ; « precision » distingue plusieurs liens sur une même ligne.
      points: [
        'Méthode de segmentation mise en production, choisie parmi 15 configurations évaluées sur 8 tests indépendants.',
        'Pipeline d’annotation par LLM : 3 workflows no-code (n8n) remplacés par un service Python en production (FastAPI, PostgreSQL, ~60 endpoints REST, Docker, AWS).',
      ],
      detail: [
        {
          texte:
            'Moteur de rapprochement marque – artistes : 0.768 de précision au premier résultat, contre 0.140 au hasard. 18 méthodes comparées sur 3 protocoles d’évaluation.',
          renvois: [{ etude: 4 }],
        },
        'Plateforme exploitée sur ~1 000 artistes et conçue pour plusieurs dizaines de milliers : PostgreSQL indexé, conteneurs workers ajustés à la charge, file de travaux portée par PostgreSQL, traitements asynchrones et parallélisés.',
        'Suite de tests qui a révélé en charge un défaut de concurrence, corrigé avant la mise en service.',
        {
          renvois: [
            { etude: 1, precision: 'segmentation' },
            { etude: 3, precision: 'UMAP' },
            { etude: 2, precision: 'métrique' },
          ],
        },
      ],
    },
    {
      organisation: 'Agency 1301',
      intitule: 'Data scientist freelance',
      periode: 'automne 2025',
      contexte:
        'Détection de republication non autorisée de photographies (droit d’auteur). Sur un pipeline de détection existant, mon périmètre était la mesure, la fiabilité des données et l’industrialisation.',
      points: [
        'Taux de détection rendu interprétable : une absence de résultat n’est plus confondue avec une panne technique, ce qui supprime un biais silencieux dans les statistiques.',
        'Base PostgreSQL complète, dimensionnée pour leurs volumes et ouverte aux équipes non techniques via NocoDB, avec gestion des droits.',
      ],
      detail: [
        {
          texte:
            'Tous les candidats conservés, retenus comme rejetés (100 à 200 par photo) : le seuil se recalibre sans relancer des recherches de plusieurs heures par lot.',
          renvois: [{ etude: 5 }],
        },
        'Seuil, version applicative et horodatage gelés à chaque exécution ; vérité terrain annotée sur 6 niveaux, avec un protocole versionné.',
      ],
    },
    {
      organisation: 'Prana France',
      intitule: 'Stagiaire data analyst',
      periode: 'mai – août 2025',
      contexte: 'PME industrielle, solutions de ventilation double-flux et décentralisée.',
      points: [
        'Tableaux de bord Power BI sur les ventes, l’activité commerciale et la génération de leads, sur des données préparées en SQL.',
        'Assistant de support client par RAG, développé en Python sur les embeddings de la documentation produit et déployé sur AWS.',
      ],
    },
    {
      organisation: 'SAS Datafoncier',
      intitule: 'Stagiaire data scientist',
      periode: 'juin – août 2024',
      contexte: 'Start-up spécialisée dans l’analyse du marché immobilier.',
      points: [
        'Modèle de prédiction du marché immobilier (régression sur le prix, la surface, les tendances) : validation croisée, réglage des hyperparamètres, gestion des données manquantes.',
        'Extraction de caractéristiques par ResNet sur les photos des biens, pour estimer leur état.',
      ],
    },
  ],
}

export const competences = {
  titre: 'Compétences',
  essentielTitre: 'Essentiel',
  essentiel: [
    'Python', 'SQL', 'scikit-learn', 'PyTorch', 'statistique inférentielle', 'inférence bayésienne',
    'LLM et RAG', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS',
  ],
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
      intitule: 'Cycle ingénieur, Télécom Paris',
      etablissement: 'Institut Polytechnique de Paris, Palaiseau',
      periode: '2026 – 2029',
      details: [
        'Admis par le concours GEI-UNIV : 20 places à Télécom Paris par cette voie. 1ʳᵉ année en cours : probabilités, analyse fonctionnelle et de Fourier, théorie de l’information, logique.',
      ],
    },
    {
      intitule: 'Licence Informatique, mineure Mathématiques, Sorbonne Université',
      periode: '2023 – 2026',
      details: [
        'Moyennes annuelles : L1 17,49 · L2 15,92 (2ᵉ sur 57) · L3 17,53, sur 20.',
        '1ᵉʳ sur 117 en Sciences des données · 1ᵉʳ sur 316 en Réseaux · 3ᵉ sur 318 en Algorithmique II.',
      ],
    },
  ],
  languesTitre: 'Langues',
  langues: [
    { langue: 'Russe', niveau: 'langue maternelle' },
    { langue: 'Français', niveau: 'C1' },
    { langue: 'Anglais', niveau: 'B2, TOEFL iBT 87' },
  ],
}

export const contact = {
  titre: 'Contact',
  phrase:
    'Vous recrutez un stagiaire pour l’été 2027 en data science, machine learning ou data engineering ? Écrivez-moi, je réponds sous 24 h.',
  disponibiliteTitre: 'Disponibilité',
  disponibilite: 'stage d’été, juillet – août 2027 · Île-de-France, remote ou hybride bienvenu',
  ecrire: 'Écrire un e-mail',
  courriel: 'contact@vadim-prokhorov.eu',
  liens: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vadim-prokhorov-58b755298/',
    },
    { label: 'GitHub', href: 'https://github.com/Valikpp' },
  ],
}
