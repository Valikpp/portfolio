import { useEffect, useLayoutEffect, useRef, useState } from 'react'

/* Un bloc devient « en cours de lecture » quand son haut passe au-dessus de
   cette ligne, exprimée en fraction de la hauteur de fenêtre. */
const LIGNE_DE_LECTURE = 0.3

function hautDe(id) {
  return document.getElementById(id)?.getBoundingClientRect().top ?? Infinity
}

/** Section et sous-partie que le lecteur a sous les yeux. */
function usePositionDeLecture(entrees) {
  const [position, setPosition] = useState({ section: null, partie: null })

  useEffect(() => {
    let image = 0

    const mesurer = () => {
      image = 0
      const ligne = window.innerHeight * LIGNE_DE_LECTURE
      let section = null
      let partie = null

      for (const entree of entrees) {
        if (hautDe(entree.id) > ligne) break
        section = entree.id
        partie = null
        for (const sous of entree.parties) {
          if (hautDe(sous.id) > ligne) break
          partie = sous.id
        }
      }

      // Une dernière section courte n'atteint jamais la ligne : en bas de page, c'est elle.
      const enBas =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (enBas) {
        const derniere = entrees.at(-1)
        section = derniere.id
        partie = derniere.parties.at(-1)?.id ?? null
      }

      setPosition((avant) =>
        avant.section === section && avant.partie === partie ? avant : { section, partie },
      )
    }

    const planifier = () => {
      if (!image) image = requestAnimationFrame(mesurer)
    }

    planifier()
    window.addEventListener('scroll', planifier, { passive: true })
    window.addEventListener('resize', planifier)
    return () => {
      cancelAnimationFrame(image)
      window.removeEventListener('scroll', planifier)
      window.removeEventListener('resize', planifier)
    }
  }, [entrees])

  return position
}

/**
 * Sommaire collant dans la colonne de gauche ; sur mobile, une barre en haut
 * qui déplie la même liste. Un repère glisse le long du filet jusqu'à
 * l'entrée en cours de lecture.
 */
export default function Sommaire({ titre, entrees }) {
  const { section, partie } = usePositionDeLecture(entrees)
  const [ouvert, setOuvert] = useState(false)
  const racine = useRef(null)
  const rail = useRef(null)
  const repere = useRef(null)

  const entreeActive = entrees.find((entree) => entree.id === section)
  const partieActive = entreeActive?.parties.find((sous) => sous.id === partie)

  useLayoutEffect(() => {
    const placer = () => {
      const lien = rail.current.querySelector(`[data-cible="${partie ?? section}"]`)
      if (!lien || lien.offsetParent === null) {
        repere.current.style.opacity = '0'
        return
      }
      repere.current.style.opacity = '1'
      repere.current.style.transform = `translateY(${lien.offsetTop}px)`
      repere.current.style.height = `${lien.offsetHeight}px`
    }

    placer()
    const observateur = new ResizeObserver(placer)
    observateur.observe(rail.current)
    return () => observateur.disconnect()
  }, [section, partie, ouvert])

  useEffect(() => {
    if (!ouvert) return

    const surTouche = (evenement) => {
      if (evenement.key === 'Escape') setOuvert(false)
    }
    const surClic = (evenement) => {
      if (!racine.current.contains(evenement.target)) setOuvert(false)
    }

    document.addEventListener('keydown', surTouche)
    document.addEventListener('pointerdown', surClic)
    return () => {
      document.removeEventListener('keydown', surTouche)
      document.removeEventListener('pointerdown', surClic)
    }
  }, [ouvert])

  const fermer = () => setOuvert(false)

  return (
    <nav className="sommaire" aria-label={titre} ref={racine} data-ouvert={ouvert || undefined}>
      <button
        type="button"
        className="sommaire__bouton"
        aria-expanded={ouvert}
        aria-controls="sommaire-panneau"
        onClick={() => setOuvert((etat) => !etat)}
      >
        <span className="sommaire__courant">{entreeActive ? entreeActive.titre : titre}</span>
        {partieActive && <span className="sommaire__partie">{partieActive.titre}</span>}
      </button>

      <div className="sommaire__panneau" id="sommaire-panneau">
        <div className="sommaire__rail" ref={rail}>
          <span className="sommaire__repere" ref={repere} aria-hidden="true" />
          <ul className="sommaire__liste">
            {entrees.map((entree) => {
              const active = entree.id === section
              return (
                <li key={entree.id}>
                  <a
                    className="sommaire__lien"
                    href={`#${entree.id}`}
                    data-cible={entree.id}
                    data-actif={active || undefined}
                    aria-current={active && !partie ? 'location' : undefined}
                    onClick={fermer}
                  >
                    {entree.titre}
                  </a>
                  {active && entree.parties.length > 0 && (
                    <ul className="sommaire__parties">
                      {entree.parties.map((sous) => (
                        <li key={sous.id}>
                          <a
                            className="sommaire__lien sommaire__lien--partie"
                            href={`#${sous.id}`}
                            data-cible={sous.id}
                            data-actif={sous.id === partie || undefined}
                            aria-current={sous.id === partie ? 'location' : undefined}
                            onClick={fermer}
                          >
                            {sous.titre}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
