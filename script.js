const container = document.getElementById("container")
const colors = ["#03071e", "#370617", "#6a040f", "#9d0208", "#d00000", "#dc2f02", "#e85d04", "#f48c06", "#faa307",]
const SQUARES = 1000

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div")
    square.classList.add("square")

    square.addEventListener("mouseover", () => setColor(square))
    square.addEventListener("mouseout", () => removeColor(square))
    container.appendChild(square)

}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`

}
function removeColor(element) {
    element.style.background = "bisque"
    element.style.boxShadow = "0 0 2px #000"
}
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}