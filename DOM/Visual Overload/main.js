
const getRandomColor = function() {
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
    
    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
}

let ourColors = [];
const setRandomColor = function(e){
    e.style.backgroundColor = getRandomColor();
    ourColors[e.id[3]] = e.style.backgroundColor
    let count = 0
    for (i of ourColors){
        if (i === e.style.backgroundColor){
            count++
        }
    }
    if (count == 6){
        let nice = document.createElement("div")
        nice.innerHTML = "Nice Job!"
        document.body.appendChild(nice)
    }
}


for (i=0; i < 6; i++){
    const box = document.createElement("div")
    box.setAttribute("class", `box`)
    box.setAttribute("id", `box${i}`)
    box.setAttribute("onmouseenter", "setRandomColor(this)")
    box.style.backgroundColor = getRandomColor()
    ourColors.push(box.style.backgroundColor)
    document.getElementById("container").appendChild(box)
}
console.log(ourColors)