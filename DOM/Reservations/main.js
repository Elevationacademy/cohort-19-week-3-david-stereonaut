const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
}

const checkRes = function(){
    let name = document.getElementById("name").value
    const answer = document.getElementById("answer")
    if (reservations[name.toLowerCase()] == undefined) {
        answer.innerHTML = "We have no reservations uner your name"
    } else if (!reservations[name.toLowerCase()].claimed) {
        answer.innerHTML = `Welcome, ${name}`
    } else if (reservations[name.toLowerCase()].claimed) {
        answer.innerHTML = "Hmm, someone already claimed this reservation"
    }
}