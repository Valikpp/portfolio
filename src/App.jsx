import { useEffect } from 'react'
import Deplier from './components/Deplier'
import Exposants from './components/Exposants'
import Mesure from './components/Mesure'
import Section from './components/Section'
import './App.css'

const ancreEtude = (index) => `travaux-${index + 1}`
const ancrePoste = (index) => `parcours-${index + 1}`

// Chaque langue est une page à part (/ et /en/), servie telle quelle par l'hébergeur.
const VERSIONS = [
  { code: 'fr', libelle: 'FR', nom: 'Français', href: '/' },
  { code: 'en', libelle: 'EN', nom: 'English', href: '/en/' },
]

/**
 * Un lien vers une étude (#travaux-N, depuis un courriel ou depuis Parcours)
 * ouvre son détail technique avant que la page n'y défile.
 */
function useAncresDEtude() {
  useEffect(() => {
    const ouvrir = (id) => {
      const etude = document.getElementById(id)
      const details = etude?.matches('.etude') && etude.querySelector(':scope > details')
      if (details) details.open = true
      return etude
    }

    // Au chargement, la cible n'existait pas encore quand le navigateur a lu l'ancre.
    const auChargement = decodeURIComponent(location.hash.slice(1))
    if (auChargement) ouvrir(auChargement)?.scrollIntoView()

    const surClic = (evenement) => {
      const lien = evenement.target.closest?.('a[href^="#travaux-"]')
      if (lien) ouvrir(lien.getAttribute('href').slice(1))
    }
    // Ancre changée à la main dans la barre d'adresse, sans clic.
    const surAncre = () => ouvrir(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView()

    document.addEventListener('click', surClic)
    window.addEventListener('hashchange', surAncre)
    return () => {
      document.removeEventListener('click', surClic)
      window.removeEventListener('hashchange', surAncre)
    }
  }, [])
}

/** Lien de téléchargement du CV ; « variante » règle l'aspect. */
function LienCV({ cv, variante, children }) {
  return (
    <a
      className={`bouton bouton--${variante}`}
      href={`/cv/${cv.fichier}`}
      download={cv.fichier}
      target="_blank"
      rel="noopener"
    >
      {children}
    </a>
  )
}

/** Un point de Parcours : texte seul, ou texte suivi de renvois vers les études. */
function PointDePoste({ point, libelle }) {
  const { texte, renvois = [] } = typeof point === 'string' ? { texte: point } : point
  return (
    <li className="poste__point">
      {texte}
      {renvois.map((renvoi, i) => (
        <span key={renvoi.etude}>
          {i > 0 ? ' · ' : texte && ' '}
          <a className="poste__renvoi" href={`#${ancreEtude(renvoi.etude - 1)}`}>
            {libelle}
            {renvoi.precision && ` (${renvoi.precision})`}
          </a>
        </span>
      ))}
    </li>
  )
}

/** Étage technique : les valeurs en texte, sans réglette. */
function ValeursEnTexte({ legende, lignes }) {
  return (
    <div className="valeurs">
      <p className="valeurs__legende">{legende}</p>
      <ul>
        {lignes.map((ligne) => (
          <li className="valeurs__ligne" key={ligne.label}>
            <span className="valeurs__valeur">{ligne.affichage}</span> {ligne.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Etude({ etude, id, contenu }) {
  const { deplier, mesure, travaux } = contenu
  const mesureEnHaut = etude.mesure?.enHaut
  // L'étude 4 garde sa lecture dans le résultat visible : la répéter dessous n'apporte rien.
  const lecture = mesureEnHaut ? null : (etude.mesure?.lecture ?? etude.lecture)
  const lignes = ['role', 'herite', 'limites'].filter((cle) => etude[cle])

  return (
    <article className="etude" id={id}>
      <h3 className="etude__titre">{etude.titre}</h3>
      <p className="etude__resultat">{etude.resultat}</p>
      {etude.chiffre && (
        <p className="mesure__chiffre etude__chiffre">
          <span className="mesure__valeur">{etude.chiffre.valeur}</span>
          <span className="mesure__label">{etude.chiffre.label}</span>
        </p>
      )}
      {mesureEnHaut && (
        <Mesure legende={etude.mesure.legende} lignes={etude.mesure.lignes} contre={mesure.contre} />
      )}

      <Deplier ouvrir={deplier.technique} fermer={deplier.replier}>
        <p className="etude__texte">{etude.texte}</p>
        {etude.complement && <p className="etude__texte">{etude.complement}</p>}
        {etude.mesure && !mesureEnHaut && (
          <ValeursEnTexte legende={etude.mesure.legende} lignes={etude.mesure.lignes} />
        )}
        {lecture && <p className="lecture">{lecture}</p>}
        {lignes.length > 0 && (
          <dl className="etude__lignes">
            {lignes.map((cle) => (
              <div key={cle}>
                <dt>{travaux.lignes[cle]}</dt>
                <dd>{etude[cle]}</dd>
              </div>
            ))}
          </dl>
        )}
      </Deplier>
    </article>
  )
}

/** FR | EN : la langue courante n'est pas un lien. */
function ChoixDeLangue({ code, libelle }) {
  return (
    <nav className="langues-site" aria-label={libelle}>
      {VERSIONS.map((version) =>
        version.code === code ? (
          <span key={version.code} aria-current="page" title={version.nom}>
            {version.libelle}
          </span>
        ) : (
          <a
            key={version.code}
            href={version.href}
            hrefLang={version.code}
            lang={version.code}
            title={version.nom}
          >
            {version.libelle}
          </a>
        ),
      )}
    </nav>
  )
}

export default function App({ contenu }) {
  const {
    accueil,
    competences,
    contact,
    cv,
    deplier,
    enBref,
    formation,
    identite,
    methode,
    parcours,
    travaux,
    ui,
  } = contenu
  const lienLinkedIn = contact.liens.find((lien) => lien.label === 'LinkedIn')
  const lienGitHub = contact.liens.find((lien) => lien.label === 'GitHub')

  useAncresDEtude()

  return (
    <>
      <a className="lien-evitement" href="#contenu">
        {ui.evitement}
      </a>

      <header className="entete">
        <div className="entete__interieur page">
          <a className="entete__nom" href="#top">
            {identite.nom}
          </a>
          <nav className="entete__nav" aria-label={ui.navigation}>
            <a href="#parcours">{parcours.titre}</a>
            <a href="#travaux">{travaux.titre}</a>
            <a href="#formation">{formation.titre}</a>
            <a href="#contact">{contact.titre}</a>
          </nav>
          <ChoixDeLangue code={contenu.code} libelle={ui.langue} />
          <LienCV cv={cv} variante="compact">
            {cv.court}
          </LienCV>
        </div>
      </header>

      <main id="contenu" className="page">
        <div className="accueil" id="top">
          <p className="accueil__surtitre">{accueil.surtitre}</p>
          <h1 className="accueil__nom">{identite.nom}</h1>
          <p className="accueil__recherche">
            {accueil.recherche.avant}
            <strong>{accueil.recherche.fort}</strong>
            {accueil.recherche.apres}
          </p>
          <div className="accueil__actions">
            <LienCV cv={cv} variante="plein">{cv.libelle}</LienCV>
            <a className="bouton bouton--trait" href="#contact">
              {accueil.contacter}
            </a>
          </div>
          <a className="accueil__lien" href={lienLinkedIn.href}>
            {lienLinkedIn.label}
          </a>
          <p className="accueil__enonce">{accueil.enonce}</p>
          <p className="accueil__positionnement">{accueil.positionnement}</p>
        </div>

        <Section id="en-bref" titre={enBref.titre}>
          <dl className="en-bref">
            {enBref.points.map((point) => (
              <div className="en-bref__point" key={point.libelle}>
                <dt className="en-bref__libelle">{point.libelle}</dt>
                <dd className="en-bref__texte">
                  <Exposants>{point.texte}</Exposants>
                </dd>
              </div>
            ))}
          </dl>
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
              <ul className="poste__points">
                {poste.points.map((point) => (
                  <PointDePoste point={point} libelle={deplier.renvoi} key={point} />
                ))}
              </ul>
              {poste.detail && (
                <Deplier ouvrir={deplier.poste} fermer={deplier.replier}>
                  <ul className="poste__points">
                    {poste.detail.map((point, j) => (
                      <PointDePoste point={point} libelle={deplier.renvoi} key={j} />
                    ))}
                  </ul>
                </Deplier>
              )}
            </article>
          ))}
        </Section>

        <Section id="travaux" titre={travaux.titre}>
          <p className="travaux__chapeau">{travaux.chapeau}</p>
          {travaux.etudes.map((etude, i) => (
            <Etude etude={etude} id={ancreEtude(i)} contenu={contenu} key={etude.titre} />
          ))}
        </Section>

        <Section id="formation" titre={formation.titre}>
          {formation.diplomes.map((diplome) => (
            <article className="diplome" key={diplome.intitule}>
              <h3 className="diplome__intitule">{diplome.intitule}</h3>
              <p className="diplome__meta">
                {diplome.etablissement && <>{diplome.etablissement} · </>}
                {diplome.periode}
              </p>
              {diplome.details.map((detail) => (
                <p className="diplome__detail" key={detail}>
                  <Exposants>{detail}</Exposants>
                </p>
              ))}
            </article>
          ))}
          <p className="langues">
            <span className="langues__titre">{formation.languesTitre}</span>
            {formation.langues.map((langue, i) => (
              <span key={langue.langue}>
                {i > 0 && ' · '}
                {langue.langue} ({langue.niveau})
              </span>
            ))}
          </p>
        </Section>

        <Section id="competences" titre={competences.titre}>
          <p className="essentiel">
            <span className="essentiel__titre">{competences.essentielTitre}</span>
            {competences.essentiel.join(' · ')}
          </p>
          <Deplier ouvrir={deplier.competences} fermer={deplier.replier}>
            <div className="competences">
              {competences.groupes.map((groupe) => (
                <div key={groupe.nom}>
                  <h3 className="competence__nom">{groupe.nom}</h3>
                  <p className="competence__contenu">{groupe.contenu}</p>
                </div>
              ))}
            </div>
          </Deplier>
        </Section>

        <Section id="methode" titre={methode.titre}>
          <div className="regles">
            {methode.regles.map((regle) => (
              <article key={regle.titre}>
                <h3 className="regle__titre">{regle.titre}</h3>
                <p className="regle__phrase">{regle.phrase}</p>
                <Deplier ouvrir={deplier.methode} fermer={deplier.replier}>
                  <p className="regle__texte">{regle.texte}</p>
                </Deplier>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" titre={contact.titre}>
          <p className="contact__phrase">{contact.phrase}</p>
          <p className="contact__disponibilite">
            <span className="contact__label">{contact.disponibiliteTitre}</span>
            {contact.disponibilite}
          </p>
          <div className="contact__actions">
            <a className="bouton bouton--plein" href={`mailto:${contact.courriel}`}>
              {contact.ecrire}
            </a>
            <LienCV cv={cv} variante="trait">{cv.libelle}</LienCV>
          </div>
          <p className="contact__liens">
            <a href={`mailto:${contact.courriel}`}>{contact.courriel}</a>
            {contact.liens.map((lien) => (
              <a href={lien.href} key={lien.label}>
                {lien.label}
              </a>
            ))}
          </p>
        </Section>
      </main>

      <footer className="pied page">
        <span>
          {identite.nom} · {identite.role} · {identite.ecole}
        </span>
        <a href={lienGitHub.href}>{lienGitHub.label}</a>
      </footer>
    </>
  )
}
