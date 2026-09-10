/** Le titre vit dans une colonne étroite à gauche ; le contenu occupe le reste. */
export default function Section({ id, titre, children }) {
  const titreId = `${id}-titre`

  return (
    <section className="section" id={id} aria-labelledby={titreId}>
      <div className="section__grille">
        <h2 className="section__titre" id={titreId}>
          {titre}
        </h2>
        <div className="section__contenu">{children}</div>
      </div>
    </section>
  )
}
