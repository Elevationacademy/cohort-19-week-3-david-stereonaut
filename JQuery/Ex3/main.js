// creating elements
$("body").append("<div class=box id=box1></div>")
$("body").append("<div class=inBtwn></div>")
$("body").append("<div class=box id=box2></div?")

//giving them css properties
$(".box").css("float", "left")
$(".inBtwn").css("float", "left")
$(".inBtwn").css("height", "70px")
$(".inBtwn").css("width", "5px")
$(".box").css("border-radius", "5px")
$(".box").css("box-shadow", "2px 2px 6px grey")

//events
let lastHovered = $("#box1")

$("body").on("mouseover", ".box", function(){
    lastHovered = $(this)
})

$("body").on("mouseover", ".inBtwn", function(){
    $(".box").css("background-color", "#8e44ad")
    lastHovered.css("background-color", "red")
})