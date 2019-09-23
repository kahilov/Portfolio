const container = document.getElementById("container")

const getRandomColor = function() {
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
    
    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
  }
const onMouseEnter = function(element){
    let randomColor = getRandomColor()
    element.style.backgroundColor = randomColor
}
for (i = 0; i < 5; i++) {
    let newBox = document.createElement("div")
    container.appendChild(newBox)
    newBox.setAttribute("class", "box")
    newBox.setAttribute("onmouseenter", "onMouseEnter(this)")
}

