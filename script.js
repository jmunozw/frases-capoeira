const frases = [
  "Haz de tu cuerpo tu instrumento.",
  "Capoeira é luta e arte.",
  "A vida é um jogo. Jogue com sabedoria.",
  "Resiste hoje, melhora amanhã.",
  "Não desista. Aprenda e volte."
]

const boton = document.getElementById("boton-frase")
const frase = document.getElementById("frase")

boton.addEventListener("click", () => {
    const index = Math.floor(Math.random() * frases.length)
    frase.textContent = frases[index]
})