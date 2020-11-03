// Exercise 1

const pushPull = function(callback){
    callback()
}

const push = function () {
    console.log("pushing it!")
}
  
const pull = function () {
    console.log("pulling it!")
}
  
pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!" 

// Exercise 2

const getTime = function(callback){
    returnTime(new Date())
}

const returnTime = function (time) {
    alert('The current time is: ' + time)
}
  
getTime(returnTime)

// Exercise 3

const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
};

const logData = function (data){
    console.log(data)
}

displayData(alert, logData, "I like to party")