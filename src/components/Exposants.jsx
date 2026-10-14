// Les lettres en exposant Unicode (ᵉ, ʳ) manquent aux sous-ensembles de
// polices auto-hébergées : on les rend en <sup> avec les lettres ordinaires.
const ORDINAL = /(\d)(ᵉʳ|ʳᵉ|ᵉ)/g
const LETTRES = { ᵉʳ: 'er', ʳᵉ: 're', ᵉ: 'e' }

export default function Exposants({ children }) {
  const morceaux = children.split(ORDINAL)
  if (morceaux.length === 1) return children

  // split avec deux groupes capturants : [texte, chiffre, exposant, texte, …]
  const rendu = []
  for (let i = 0; i < morceaux.length; i += 3) {
    rendu.push(morceaux[i])
    if (i + 1 < morceaux.length) {
      rendu.push(morceaux[i + 1], <sup key={i}>{LETTRES[morceaux[i + 2]]}</sup>)
    }
  }
  return rendu
}
