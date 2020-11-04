/* 
$("h1").css("color", "blue")
$(".red-div").css("color", "red")
$("li:first-child").css("color", "green")
$("li:last-child").css("color", "pink")
$("#brown-div").css("color", "brown")

$("#b1").addClass("box")
$("#b2").addClass("box")

$("#my-input").val

$(".box").hover(function(){
    $(this).css("background-color", "blue")
})

$("button").click(function(){
    alert($("#my-input").val())
})

$('.fruits').append('<p class="red">Raspberry</p>')
$('.fruits').append('<p class="brown">Kiwi</p>')

$(".feedme").on("click", function(){
    let divCopy = `<div class="feedme">${this.innerHTML}</div>`
    
    $("body").append(divCopy)
})

const names = [
    { first: "Alex", last: "Johnson" },
    { first: "Byron", last: "Loveall" },
    { first: "Cassandra", last: "Wuthers" },
    { first: "Deandre", last: "Rahm" },
    { first: "Ellena", last: "Freeman" }
]

for(let name of names){
    $("body").append(`<div class="human">${name.first} - ${name.last}</div>`)
}

$("p:last").hover(function(){
    $(this).remove()
}) */

$("button").click(function(){
    $("#blogs").append("<div class=blog>Hello Blogsies</div>")
})

$("#blogs").on("click", ".blog", function(){
    $(this).text("blargh")
})