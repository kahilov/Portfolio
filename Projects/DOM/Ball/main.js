const ball = document.getElementById("block")

const moveRight = function(){
    let left = parseInt(ball.style.left) || 0
    left += 15
    ball.style.left = left + "px"
}
const moveLeft = function(){
    let right = parseInt(ball.style.right) || 0
    right += 15
    ball.style.right = right + "px"
}
const moveUp = function(){
    let bottom = parseInt(ball.style.bottom) || 0
    bottom += 15
    ball.style.bottom = bottom + "px"
}
const moveDown = function(){
    let top = parseInt(ball.style.top) || 0
    top += 15
    ball.style.top = top + "px"
}
const arrowUp = document.getElementById("up")
arrowUp.onclick = function () {
    moveUp()
}
const arrowDown = document.getElementById("down")
arrowDown.onclick = function () {
    moveDown()
}
const arrowLeft = document.getElementById("left")
arrowLeft.onclick = function () {
    moveLeft()
}
const arrowRight = document.getElementById("right")
arrowRight.onclick = function () {
    moveRight()
}


const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)
header.setAttribute("class", "my-header")

const header1 = document.createElement("h2")
header1.innerHTML = "YO YO"
header1.style.color = "blue"
header1.style.fontFamily = "Helvetica"
document.body.appendChild(header1)
header1.setAttribute("id", "yo")





