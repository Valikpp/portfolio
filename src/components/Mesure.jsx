/**
 * Une valeur mesurée ne se montre jamais seule : elle est mise en regard de sa
 * référence (niveau du hasard, accord des experts, état avant correction), sur
 * une échelle commune. C'est le seul endroit de la page où l'accent est dépensé.
 */
export default function Mesure({ legende, lignes, lecture }) {
  const maximum = Math.max(...lignes.map((ligne) => ligne.valeur))

  return (
    <figure className="mesure">
      <figcaption className="mesure__legende">{legende}</figcaption>
      {lignes.map((ligne) => {
        const largeur = maximum > 0 ? (ligne.valeur / maximum) * 100 : 0
        return (
          <div
            key={ligne.label}
            className={`mesure__ligne${ligne.reference ? ' mesure__ligne--reference' : ''}`}
          >
            <div className="mesure__entete">
              <span className="mesure__label">{ligne.label}</span>
              <span className="mesure__valeur">{ligne.affichage}</span>
            </div>
            <div className="mesure__piste">
              {largeur > 0 ? (
                <div className="mesure__barre" style={{ width: `${largeur}%` }} />
              ) : (
                <div className="mesure__zero" />
              )}
            </div>
          </div>
        )
      })}
      {lecture && <p className="mesure__lecture">{lecture}</p>}
    </figure>
  )
}
