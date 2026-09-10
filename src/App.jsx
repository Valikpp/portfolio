import Mesure from './components/Mesure'
import Section from './components/Section'
import {
  accueil,
  competences,
  contact,
  formation,
  identite,
  methode,
  parcours,
  travaux,
} from './content/fr'
import './App.css'

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
          <a href="#competences">{competences.titre}</a>
          <a href="#contact">{contact.titre}</a>
        </nav>
      </header>

      <main id="contenu" className="page">
        <div className="accueil">
          <h1 className="accueil__enonce">{accueil.enonce}</h1>
          <div className="accueil__corps">
            <p className="accueil__positionnement">{accueil.positionnement}</p>
            <p className="accueil__situation">{accueil.situation}</p>
          </div>
        </div>

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
          {travaux.etudes.map((etude) => (
            <article className="etude" key={etude.titre}>
              <h3 className="etude__titre">{etude.titre}</h3>
              <p className="etude__texte">{etude.texte}</p>
              <Mesure
                legende={etude.mesure.legende}
                lignes={etude.mesure.lignes}
                lecture={etude.mesure.lecture}
              />
            </article>
          ))}
        </Section>

        <Section id="parcours" titre={parcours.titre}>
          {parcours.postes.map((poste) => (
            <article className="poste" key={poste.organisation}>
              <div className="poste__entete">
                <h3 className="poste__organisation">{poste.organisation}</h3>
                <span className="poste__periode">{poste.periode}</span>
              </div>
              <p className="poste__intitule">{poste.intitule}</p>
              <p className="poste__contexte">{poste.contexte}</p>
              {poste.points.length > 0 && (
                <ul className="poste__points">
                  {poste.points.map((point) => (
                    <li className="poste__point" key={point}>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
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
        </Section>
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
