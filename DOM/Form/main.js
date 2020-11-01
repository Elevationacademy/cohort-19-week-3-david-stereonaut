const invalidForm = function(str){
    const previous = document.getElementById("error-msg")
    if (previous !=null){
        previous.remove()
    }
    let error = document.createElement("div")
    error.setAttribute("id", "error-msg")
    error.innerHTML = str
    document.getElementById("main-form").appendChild(error)
}
const validate = function (){
    const previous = document.getElementById("error-msg")
    if (previous !=null){
        previous.remove()
    }
    const name = document.getElementById("name").value
    const sal = document.getElementById("sal").value
    const birthday = document.getElementById("birthday").value
    const phone = document.getElementById("phone").value
    
    if (name.length < 3){
        invalidForm("Name must be longer than 2 characters")
    } else if (sal < 10000 || sal > 16000){
        invalidForm("Salary must be greater than 10,000 and less than 16,000")
    } else if (birthday == null) {
        invalidForm("You must enter a birthday!")
    } else if (phone.toString().length != 10) {
        invalidForm("Phone must be 10 digits long")
    } else {
        document.getElementById("main-form").style.display = "none"
        let welcomeMsg = document.createElement("div")
        welcomeMsg.setAttribute("id", "welcome-msg")
        welcomeMsg.innerHTML = `Welcome, ${name}!`
        document.body.appendChild(welcomeMsg)
    }
}