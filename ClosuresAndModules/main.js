// Exercise 1

const StringFormatter = function () {
    const capitalizeFirst = function (str) {
        return str[0].toUpperCase()+str.slice(1)
    }
    const skewerCase = function (str) {
        return str.replace(" ", "-")
    }
    return {
        capitalizeFirst,
        skewerCase
    }
}

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should print Dorothy
console.log(formatter.skewerCase("blue box")) //should print blue-box

//Exercise 2

const Bank = function () {
    let money = 500
    const depositCash = function (cash) {
        money += cash
    }
    const checkBalance = function () {
        console.log(money)
    }
    return {
        deposit: depositCash,
        showBalance: checkBalance
    }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950

// Exercise 3

const SongsManager = function () {
    const songs = {} 
    const addSong = function (name, url){
        songs[name] = url.slice(32)
    }
    const getSong = function (name){
        console.log("https://www.youtube.com/watch?v="+songs[name])
    }
    return {
        addSong,
        getSong
    }
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ