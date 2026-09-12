/** Le titre ouvre la section ; la colonne de gauche est réservée au sommaire. */
export default function Section({ id, titre, children }) {
  const titreId = `${id}-titre`

  return (
    <section className="section" id={id} aria-labelledby={titreId}>
      <h2 className="section__titre" id={titreId}>
        {titre}
      </h2>
      <div className="section__contenu">{children}</div>
    </section>
  )
}
