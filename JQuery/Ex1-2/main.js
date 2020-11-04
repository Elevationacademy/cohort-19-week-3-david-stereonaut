$("button").click(function(){
    $("ul").append(`<li>${$("input").val()}`)
    $("input").val("")
})
$("ul").on("click", "li", function(){
    $(this).remove()
})