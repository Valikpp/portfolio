const GRADUATIONS = [0, 0.5, 1]

/**
 * Une valeur mesurée ne se montre jamais seule : elle est mise en regard de sa
 * référence (niveau du hasard, accord des experts, état avant correction). Le
 * chiffre se lit d'abord ; la réglette 0–1 montre l'écart à l'échelle réelle,
 * sans l'agrandir. C'est le seul endroit de la page où l'accent est dépensé.
 */
export default function Mesure({ legende, lignes, lecture, contre }) {
  const valeurs = lignes.filter((ligne) => !ligne.reference)
  const references = lignes.filter((ligne) => ligne.reference)

  return (
    <figure className="mesure">
      <figcaption className="mesure__legende">{legende}</figcaption>

      {valeurs.map((ligne) => (
        <p className="mesure__chiffre" key={ligne.label}>
          <span className="mesure__valeur">{ligne.affichage}</span>
          <span className="mesure__label">{ligne.label}</span>
        </p>
      ))}

      {references.map((ligne) => (
        <p className="mesure__reference" key={ligne.label}>
          {contre} <span className="mesure__reference-valeur">{ligne.affichage}</span> ·{' '}
          {ligne.label}
        </p>
      ))}

      <div className="mesure__echelle" aria-hidden="true">
        <div className="mesure__axe">
          {lignes.map((ligne) => (
            <span
              key={ligne.label}
              className={`mesure__repere${ligne.reference ? ' mesure__repere--reference' : ''}`}
              style={{ left: `${Math.min(Math.max(ligne.valeur, 0), 1) * 100}%` }}
            />
          ))}
        </div>
        <div className="mesure__graduations">
          {GRADUATIONS.map((graduation) => (
            <span key={graduation}>{graduation}</span>
          ))}
        </div>
      </div>

      {lecture && <p className="lecture">{lecture}</p>}
    </figure>
  )
}
