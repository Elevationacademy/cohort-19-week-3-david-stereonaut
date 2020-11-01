
const playingField = document.getElementById("playing-field")

const block = document.getElementById("block")
const down = document.getElementById("down")
block.style.backgroundColor = "yellow"

const moveRight = function(){
    block.style.left = `${((parseInt(block.style.left) || 0) + 15)}px` 
}

const moveLeft = function(){
    block.style.left = `${((parseInt(block.style.left) || 0) - 15)}px` 
}

const moveUp = function(){
    block.style.top = `${((parseInt(block.style.top) || 0) - 15)}px` 
}

const moveDown = function(){
    block.style.top = `${((parseInt(block.style.top) || 0) + 15)}px` 
}

const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)
const subHeader = document.createElement("h2")
subHeader.innerHTML = '"Best game I have ever played" - Bill Gates'
subHeader.setAttribute("class", "sub-header")
document.body.appendChild(subHeader)