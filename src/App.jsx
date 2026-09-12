import Deplier from './components/Deplier'
import Mesure from './components/Mesure'
import Section from './components/Section'
import Sommaire from './components/Sommaire'
import {
  accueil,
  competences,
  contact,
  deplier,
  formation,
  identite,
  mesure,
  methode,
  parcours,
  projets,
  sommaire,
  travaux,
} from './content/fr'
import './App.css'

const ancreEtude = (index) => `travaux-${index + 1}`
const ancrePoste = (index) => `parcours-${index + 1}`

// Construit une fois : le contenu est statique, et le sommaire observe ces ancres.
const entreesDuSommaire = [
  { id: 'methode', titre: methode.titre, parties: [] },
  {
    id: 'travaux',
    titre: travaux.titre,
    parties: travaux.etudes.map((etude, i) => ({ id: ancreEtude(i), titre: etude.court })),
  },
  {
    id: 'parcours',
    titre: parcours.titre,
    parties: parcours.postes.map((poste, i) => ({ id: ancrePoste(i), titre: poste.organisation })),
  },
  { id: 'projets', titre: projets.titre, parties: [] },
  { id: 'competences', titre: competences.titre, parties: [] },
  { id: 'formation', titre: formation.titre, parties: [] },
  { id: 'contact', titre: contact.titre, parties: [] },
]

export default function App() {
  return (
    <>
      <a className="lien-evitement" href="#contenu">
        Aller au contenu
      </a>

      <header className="entete page">
        <span className="entete__nom">{identite.nom}</span>
        <nav className="entete__nav" aria-label="Sections du site">
          <a href="#methode">{methode.titre}</a>
          <a href="#travaux">{travaux.titre}</a>
          <a href="#parcours">{parcours.titre}</a>
          <a href="#projets">{projets.titre}</a>
          <a href="#competences">{competences.titre}</a>
          <a href="#contact">{contact.titre}</a>
        </nav>
      </header>

      <main id="contenu" className="page">
        <div className="accueil">
          <h1 className="accueil__enonce">{accueil.enonce}</h1>
          <p className="accueil__coda">{accueil.coda}</p>
          <div className="accueil__corps">
            <p className="accueil__positionnement">{accueil.positionnement}</p>
            <p className="accueil__situation">{accueil.situation}</p>
          </div>
        </div>

        <div className="plan">
          <Sommaire titre={sommaire.titre} entrees={entreesDuSommaire} />

          <div className="plan__sections">
            <Section id="methode" titre={methode.titre}>
              <div className="regles">
                {methode.regles.map((regle) => (
                  <article key={regle.titre}>
                    <h3 className="regle__titre">{regle.titre}</h3>
                    <p className="regle__texte">{regle.texte}</p>
                  </article>
                ))}
              </div>
            </Section>

            <Section id="travaux" titre={travaux.titre}>
              <p className="travaux__chapeau">{travaux.chapeau}</p>
              {travaux.etudes.map((etude, i) => (
                <article className="etude" id={ancreEtude(i)} key={etude.titre}>
                  <h3 className="etude__titre">{etude.titre}</h3>
                  {etude.mesure && (
                    <Mesure
                      legende={etude.mesure.legende}
                      lignes={etude.mesure.lignes}
                      lecture={etude.mesure.lecture}
                      contre={mesure.contre}
                    />
                  )}
                  {etude.lecture && <p className="lecture">{etude.lecture}</p>}
                  <Deplier ouvrir={deplier.etude} fermer={deplier.replier}>
                    <p className="etude__texte">{etude.texte}</p>
                    {etude.complement && <p className="etude__texte">{etude.complement}</p>}
                  </Deplier>
                </article>
              ))}
            </Section>

            <Section id="parcours" titre={parcours.titre}>
              {parcours.postes.map((poste, i) => (
                <article className="poste" id={ancrePoste(i)} key={poste.organisation}>
                  <div className="poste__entete">
                    <h3 className="poste__organisation">{poste.organisation}</h3>
                    <span className="poste__periode">{poste.periode}</span>
                  </div>
                  <p className="poste__intitule">{poste.intitule}</p>
                  <p className="poste__contexte">{poste.contexte}</p>
                  {poste.points.length > 0 && (
                    <Deplier ouvrir={deplier.poste} fermer={deplier.replier}>
                      <ul className="poste__points">
                        {poste.points.map((point) => {
                          const { texte, renvoi } =
                            typeof point === 'string' ? { texte: point } : point
                          return (
                            <li className="poste__point" key={texte}>
                              {texte}
                              {renvoi && (
                                <>
                                  {' '}
                                  <a className="poste__renvoi" href={`#${ancreEtude(renvoi - 1)}`}>
                                    {deplier.renvoi}
                                  </a>
                                </>
                              )}
                            </li>
                          )
                        })}
                      </ul>
                    </Deplier>
                  )}
                </article>
              ))}
            </Section>

            <Section id="projets" titre={projets.titre}>
              <div className="projets">
                {projets.liste.map((projet) => (
                  <article key={projet.titre}>
                    <h3 className="projet__titre">{projet.titre}</h3>
                    <p className="projet__texte">{projet.texte}</p>
                  </article>
                ))}
              </div>
            </Section>

            <Section id="competences" titre={competences.titre}>
              <div className="competences">
                {competences.groupes.map((groupe) => (
                  <div key={groupe.nom}>
                    <h3 className="competence__nom">{groupe.nom}</h3>
                    <p className="competence__contenu">{groupe.contenu}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="formation" titre={formation.titre}>
              {formation.diplomes.map((diplome) => (
                <article className="diplome" key={diplome.intitule}>
                  <h3 className="diplome__intitule">{diplome.intitule}</h3>
                  <p className="diplome__detail">
                    {diplome.etablissement}, {diplome.periode}
                  </p>
                </article>
              ))}
              <ul className="langues">
                {formation.langues.map((langue) => (
                  <li key={langue.langue}>
                    {langue.langue} <span className="langue__niveau">({langue.niveau})</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="contact" titre={contact.titre}>
              <p className="contact__phrase">{contact.phrase}</p>
              <div className="contact__liens">
                {contact.liens.map((lien) => (
                  <div key={lien.label}>
                    <span className="contact__label">{lien.label}</span>
                    <a className="contact__valeur" href={lien.href}>
                      {lien.valeur}
                    </a>
                  </div>
                ))}
              </div>
              <p className="contact__lieu">{contact.lieu}</p>
            </Section>
          </div>
        </div>
      </main>

      <footer className="pied page">
        <span>
          {identite.nom}, {identite.role}
        </span>
        <span>{identite.ecole}</span>
      </footer>
    </>
  )
}
