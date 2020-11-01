
/* const box = document.getElementById("box")

box.onmouseenter = function () {
    box.style.backgroundColor = "#c0392b"
    box.innerHTML = "AHH GO AWAY"
}

const leaveColor = function () {
    box.style.backgroundColor = "#1abc9c"
    box.innerHTML = "Hover over me!"
}

box.onclick = function () {
    box.innerHTML = "clicked"
} */

/* const box = document.createElement("div") 
box.setAttribute("class", "box")
box.onclick = function(){       
    box.innerHTML = "I'm alive!"
}

document.getElementById("some-id").appendChild(box) */ 

const rock = document.getElementById("rock")
console.log(rock)
let pokeCount = 0;
const pokeRock = function () {
    const newItem = document.createElement("li")
    if (pokeCount < 2){
        newItem.innerHTML = "You poke the rock"
    } else if (pokeCount > 2) {
        newItem.innerHTML = "You poke the Ancient Mage"
    } else {
        newItem.innerHTML = "An Ancient Magician has appeared!! He looks angry for having to wake up from his eternal slumber"
    }
    rock.appendChild(newItem)
    pokeCount++
}