/**
 * Détail repliable : l'essentiel reste visible, le développement s'ouvre à la
 * demande. <details> natif : clavier, lecteurs d'écran et recherche dans la
 * page (qui déplie le bloc trouvé) fonctionnent sans JavaScript.
 */
export default function Deplier({ ouvrir, fermer, children }) {
  return (
    <details className="deplier">
      <summary className="deplier__bouton">
        <span className="deplier__ouvrir">{ouvrir}</span>
        <span className="deplier__fermer">{fermer}</span>
      </summary>
      <div className="deplier__contenu">{children}</div>
    </details>
  )
}
