// English version: same structure as fr.js, key for key. New blocks come from
// docs/website-texts-fr-en.md; the technical layer is translated from the French
// text without adding or removing any claim, every number unchanged.

export const code = 'en'

export const ui = {
  evitement: 'Skip to content',
  navigation: 'Site sections',
  langue: 'Site language',
}

export const identite = {
  nom: 'Vadim Prokhorov',
  role: 'data scientist',
  ecole: 'Télécom Paris, Institut Polytechnique de Paris',
}

export const mesure = {
  contre: 'against',
}

export const deplier = {
  technique: 'Technical detail',
  competences: 'All skills',
  methode: 'In detail',
  poste: 'See details',
  replier: 'Collapse',
  renvoi: 'See the study',
}

// Served from public/cv/; the name is also the download file name.
export const cv = {
  libelle: 'Download CV (PDF)',
  court: 'CV',
  fichier: 'CV_Vadim_Prokhorov_EN.pdf',
}

export const accueil = {
  surtitre: 'Data scientist · engineering student at Télécom Paris (Institut Polytechnique de Paris)',
  recherche: {
    avant: 'I’m looking for a ',
    fort: 'summer internship, July to August 2027',
    apres: ', in data science, machine learning or data engineering.',
  },
  contacter: 'Get in touch',
  enonce: 'I design the measurement that decides whether a result is real, then ship what it validates.',
  positionnement:
    'I work on the mathematical side of data science: hypothesis testing, evaluation metric design, Bayesian modelling. And I put what I design into production, with Python, FastAPI, PostgreSQL, Docker and AWS.',
}

export const enBref = {
  titre: 'At a glance',
  points: [
    {
      libelle: 'Télécom Paris',
      texte: 'Admitted through the GEI-UNIV competitive exam, 20 places on this track',
    },
    {
      libelle: 'Experience',
      texte:
        '4 data roles before engineering school, including a model and a service shipped to production at DOCENT',
    },
    {
      libelle: 'Sorbonne Université',
      texte: 'Ranked 2nd of 57 in year 2 · 1st of 117 in Data Science',
    },
    {
      libelle: 'Languages',
      texte:
        'French C1 · English B2 (TOEFL iBT 87), daily working language at DOCENT · Russian native',
    },
    {
      libelle: 'Stack',
      texte: 'Python, SQL, scikit-learn, PyTorch, FastAPI, PostgreSQL, Docker, AWS',
    },
  ],
}

export const methode = {
  titre: 'How I work',
  regles: [
    {
      titre: 'Measure before tuning',
      phrase: 'Prove a gain is still possible before spending effort on it.',
      texte:
        'Prove a gain is still possible before spending effort on it. When the ceiling comes from the reference itself, no amount of algorithm tuning will move it.',
    },
    {
      titre: 'Distrust a single metric',
      phrase: 'First look for how each metric can be won by a worthless solution.',
      texte:
        'First look for how each metric can be won by a worthless solution, then keep the ones that withstand that attack.',
    },
    {
      titre: 'Find defects by running the code',
      phrase: 'Concurrency and recovery bugs show up under load.',
      texte:
        'Concurrency and recovery defects do not show up when reading the code. They appear under load, and with the question “what happens when a second version arrives?”.',
    },
    {
      titre: 'State the limits',
      phrase: 'Say plainly what is inherited, estimated or unvalidated.',
      texte:
        'Say plainly what is inherited, estimated or unvalidated. A result whose limits are known is usable; a result presented without them is not.',
    },
  ],
}

export const travaux = {
  titre: 'Selected work',
  lignes: { role: 'My part', herite: 'Inherited', limites: 'Limits' },
  chapeau:
    'Four studies at DOCENT, a cultural-trends platform where an artistic team annotates artists on more than a hundred binary sub-dimensions, and a fifth at Agency 1301.',
  etudes: [
    {
      titre: 'Clustering data that has no clusters',
      resultat:
        'The production model agrees with the experts more than the experts agree with each other. So I stopped tuning the algorithm, on statistical evidence.',
      role: 'The three tests (Hopkins, co-association, inter-annotator agreement) and the decision to stop tuning.',
      herite: 'The reference annotation by the artistic team.',
      limites:
        'The selected groups do not reflect a natural structure: they are chosen on product criteria (stability, balance, readability).',
      texte:
        'The expected outcome of the study was “the winning algorithm”. The actual outcome: no natural cluster structure exists in this data, and it is the reference annotation itself that sets the ceiling. Three independent tests show this: a Hopkins statistic between 0.54 and 0.60, a mean co-association of 0.230 over several hundred thousand pairs, and an agreement between experts that is lower than the agreement of the best algorithm with them.',
      complement:
        'I stopped algorithm tuning there and redirected the choice towards product criteria: stability, balance, readability. The selected model, a pillar-seeded and fully deterministic KMeans, gives the most separable groups in the study, with a macro-F1 of 0.776 and a growth stability of 0.715.',
      mesure: {
        legende: 'Agreement with the expert annotation (ARI)',
        lignes: [
          { label: 'Model selected for production', valeur: 0.189, affichage: '0.189' },
          { label: 'Experts with each other', valeur: 0.17, affichage: '0.170', reference: true },
        ],
        lecture:
          'Two experts from the artistic team, asked to group the same artists, agree with each other less often than the model agrees with them. The ceiling of the study was therefore not the algorithm but the consistency of the human reference: further tuning would have brought nothing measurable.',
      },
    },
    {
      titre: 'Designing the metric before comparing methods',
      resultat:
        'Standard metrics were rewarding degenerate partitions. I designed an overlap score with an analytical ceiling so those partitions stop winning.',
      role: 'Designed the overlap score.',
      herite: 'The reference annotation by the artistic team.',
      texte:
        'The standard metrics in the battery rewarded worthless partitions: one of them put the vast majority of items into a single group and still achieved a very good rank. I designed a grade-weighted overlap score that sets an attainable analytical ceiling against degenerate solutions, and that is the only one in the battery a degenerate partition cannot win. The ranking of methods is inverted compared with the metric that had been authoritative until then.',
      lecture:
        'A poorly chosen metric can be won by a solution that does nothing useful, for example by putting almost everything in a single group. Designing the metric before comparing methods avoids crowning that kind of solution, and it is a separate piece of work from applying an algorithm.',
    },
    {
      titre: 'UMAP creates the structure it measures',
      resultat:
        'After a UMAP projection, the same partition looked 18 times better separated, with no information added. Decision: cluster in the original space, and keep UMAP for display.',
      chiffre: { valeur: '×18', label: 'apparent separation after UMAP' },
      role: 'Diagnosed the UMAP effect and decided to cluster in the original space.',
      herite: 'The reference annotation by the artistic team.',
      texte:
        'Same dataset, same annotation, two spaces. In the original space, the silhouette is 0.018: no separation. After UMAP projection, it is 0.326, eighteen times higher, without any information being added. The resulting decision: cluster in the original space, and keep projections for display.',
      mesure: {
        legende: 'Silhouette, same partition',
        lignes: [
          { label: 'After UMAP projection', valeur: 0.326, affichage: '0.326' },
          { label: 'In the original space', valeur: 0.018, affichage: '0.018', reference: true },
        ],
        lecture:
          'The same partition looks eighteen times better separated after projection, without any data being added: it is the display tool that creates the appearance of structure. Relying on it would have led to publishing groups of artists that do not exist.',
      },
    },
    {
      titre: 'Matching a brand without ground truth',
      resultat:
        'Out of 10 brands, the right artist comes first in nearly 8 cases, against 1 or 2 at random: 5.5 times the chance level.',
      role: 'Compared 18 methods across 3 protocols, and built a Bayesian (Bernoulli–Beta) variant for uses that need a calibrated probability.',
      herite: 'The reference annotation by the artistic team.',
      limites:
        'Evaluated on pseudo-brands: the portfolio of real brands is too small for direct evaluation.',
      texte:
        'The portfolio of real brands was too small to evaluate anything on. I designed a pseudo-brand protocol, in which held-out artists play the role of brands. Every component is retrained on the training set only, and the rank metrics account for ties with an explicit chance level. Eighteen variants compared across three protocols, Pareto front reduced to two points. A diagnosis along the way: a weighted method fell below chance level, because its weighting suppressed exactly the discriminating dimensions.',
      complement:
        'For uses that need a calibrated probability rather than a simple ranking, I built a Bayesian variant: a Bernoulli-Beta membership model whose prior strength is calibrated from a target confidence level. It answers a different question: no longer which artist comes first, but how far the match deserves to be believed.',
      mesure: {
        enHaut: true,
        legende: 'Top-1 precision',
        lignes: [
          { label: 'Selected engine', valeur: 0.768, affichage: '0.768' },
          { label: 'Chance level', valeur: 0.14, affichage: '0.140', reference: true },
        ],
        lecture:
          'Out of ten brands, the engine puts the right artist first in nearly eight cases, against one or two for a random draw, that is five and a half times the chance level. This is what makes the tool usable day to day: the first suggestion is most often the right one.',
      },
    },
    {
      titre: 'Telling “no copy found” from “the search failed”',
      resultat:
        'A technical failure and a genuine absence of copies produced the same number. I now count them separately, and the threshold can be re-examined without rerunning everything.',
      role: 'Measurement, data reliability and industrialisation around the model.',
      herite: 'The detection pipeline already existed.',
      texte:
        'At Agency 1301, on a pipeline detecting unauthorised reuse of photographs, the core of the model was inherited: my scope was measurement and data reliability around it. The detection rate added up two unrelated situations: photos for which no copy exists, and photos for which the search had technically failed. I introduced typed failure statuses, recorded before the search starts, and separated a score that cannot be computed from a score that is genuinely zero. I also kept every candidate, accepted or rejected, so that the decision threshold can be re-examined without rerunning searches that took hours per batch.',
      lecture:
        'Before, a technical failure and a genuine absence of copies produced the same number: the reported detection rate was therefore wrong by an amount nobody could estimate. Now the two cases are counted separately, and the threshold can be reassessed without rerunning everything.',
    },
  ],
}

export const parcours = {
  titre: 'Experience',
  postes: [
    {
      organisation: 'DOCENT',
      intitule: 'Data scientist intern',
      periode: 'March – August 2026',
      contexte:
        'Platform for analysing and predicting cultural trends. Part-time alongside my studies, then full-time. English-speaking team.',
      points: [
        'Segmentation method put into production, chosen from 15 configurations evaluated on 8 independent tests.',
        'LLM annotation pipeline: 3 no-code workflows (n8n) replaced by a production Python service (FastAPI, PostgreSQL, ~60 REST endpoints, Docker, AWS).',
      ],
      detail: [
        {
          texte:
            'Brand-to-artist matching engine: 0.768 precision at top-1, against 0.140 for random. 18 methods compared across 3 evaluation protocols.',
          renvois: [{ etude: 4 }],
        },
        'Platform running on ~1,000 artists and built to grow to tens of thousands: indexed PostgreSQL, worker containers that scale with load, a job queue running on PostgreSQL itself, asynchronous and parallel processing.',
        'A test suite that exposed a concurrency defect under load, fixed before go-live.',
        {
          renvois: [
            { etude: 1, precision: 'segmentation' },
            { etude: 3, precision: 'UMAP' },
            { etude: 2, precision: 'metric' },
          ],
        },
      ],
    },
    {
      organisation: 'Agency 1301',
      intitule: 'Freelance data scientist',
      periode: 'Autumn 2025',
      contexte:
        'Detecting unauthorised reuse of photographs (copyright). On an existing detection pipeline, my scope was measurement, data reliability and industrialisation.',
      points: [
        'Detection rate made interpretable: a missing result is no longer confused with a technical failure, which removes a silent bias from the reported statistics.',
        'Full PostgreSQL database sized for their volumes, opened to non-technical teams through NocoDB, with access control.',
      ],
      detail: [
        {
          texte:
            'Every candidate kept, accepted or rejected (100 to 200 per photo): the threshold can be recalibrated without rerunning searches that took hours per batch.',
          renvois: [{ etude: 5 }],
        },
        'Threshold, app version and timestamp frozen on every run; ground truth annotated on 6 levels under a versioned protocol.',
      ],
    },
    {
      organisation: 'Prana France',
      intitule: 'Data analyst intern',
      periode: 'May – August 2025',
      contexte: 'Industrial SME making heat-recovery and decentralised ventilation systems.',
      points: [
        'Power BI dashboards on sales, commercial activity and lead generation, built on data prepared in SQL.',
        'Customer-support RAG assistant written in Python on embeddings of the product documentation, deployed on AWS.',
      ],
    },
    {
      organisation: 'SAS Datafoncier',
      intitule: 'Data scientist intern',
      periode: 'June – August 2024',
      contexte: 'Start-up specialised in real-estate market analysis.',
      points: [
        'Real-estate market prediction model (regression on price, surface area, trends): cross-validation, hyperparameter tuning, missing-data handling.',
        'ResNet feature extraction on property photos to estimate their condition.',
      ],
    },
  ],
}

export const competences = {
  titre: 'Skills',
  essentielTitre: 'Core',
  essentiel: [
    'Python', 'SQL', 'scikit-learn', 'PyTorch', 'inferential statistics', 'Bayesian inference',
    'LLMs and RAG', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS',
  ],
  groupes: [
    {
      nom: 'Mathematics and statistics',
      contenu:
        'Hypothesis testing, bootstrap resampling, agreement metrics (ARI, Cronbach’s alpha), cluster-tendency tests (Hopkins), Bayesian inference (Beta-Bernoulli, shrinkage), linear algebra and representation geometry (PCA, Procrustes analysis, distance fidelity), metric design and correction for chance.',
    },
    {
      nom: 'Machine learning',
      contenu:
        'Classification and regression, clustering (KMeans, Ward, HDBSCAN), dimensionality reduction (PCA, UMAP, t-SNE, MDS), evaluation protocol design. scikit-learn, PyTorch, TensorFlow, scipy.',
    },
    {
      nom: 'LLMs and generative AI',
      contenu:
        'RAG, embeddings, vector databases, prompt engineering, prompt caching, multi-stage and agentic pipelines, cost tracking. Anthropic SDK, Perplexity Sonar, n8n.',
    },
    {
      nom: 'AI-assisted development',
      contenu:
        'Coding agents (Claude Code, Cursor), Model Context Protocol, custom skills and tools, agent orchestration, systematic review and testing of generated code.',
    },
    {
      nom: 'Deep learning and representations',
      contenu: 'CNN, LSTM, ResNet, U-Net, CLIP, sentence-transformers.',
    },
    {
      nom: 'Data and backend',
      contenu:
        'Python, C, C++, SQL, PostgreSQL, FastAPI, psycopg3, Pandas, NumPy, Power BI, Matplotlib and Seaborn.',
    },
    {
      nom: 'Infrastructure and quality',
      contenu:
        'Docker and docker compose, AWS (EC2, RDS, S3, ALB, CloudWatch), Git, Linux, pytest, pre-commit, ruff.',
    },
  ],
}

export const formation = {
  titre: 'Education',
  diplomes: [
    {
      intitule: 'Engineering degree (Diplôme d’ingénieur), Télécom Paris',
      etablissement: 'Institut Polytechnique de Paris, Palaiseau',
      periode: '2026 – 2029',
      details: [
        'Admitted through the GEI-UNIV competitive exam: 20 places at Télécom Paris on this track. Year 1 in progress: probability, functional and Fourier analysis, information theory, logic.',
      ],
    },
    {
      intitule: 'BSc Computer Science, minor in Mathematics, Sorbonne Université',
      periode: '2023 – 2026',
      details: [
        'Year averages: 17.49 · 15.92 (ranked 2nd of 57) · 17.53, out of 20.',
        '1st of 117 in Data Science · 1st of 316 in Networks · 3rd of 318 in Algorithms II.',
      ],
    },
  ],
  languesTitre: 'Languages',
  langues: [
    { langue: 'Russian', niveau: 'native' },
    { langue: 'French', niveau: 'C1' },
    { langue: 'English', niveau: 'B2, TOEFL iBT 87' },
  ],
}

export const contact = {
  titre: 'Contact',
  phrase:
    'Hiring a summer 2027 intern in data science, machine learning or data engineering? Email me, I reply within 24 hours.',
  disponibiliteTitre: 'Availability',
  disponibilite: 'summer internship, July – August 2027 · Paris region, remote or hybrid welcome',
  ecrire: 'Send an email',
  courriel: 'contact@vadim-prokhorov.eu',
  liens: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vadim-prokhorov-58b755298/',
    },
    { label: 'GitHub', href: 'https://github.com/Valikpp' },
  ],
}
