for (color of $("span")){
    color.addClass("picker")
    color.attr('id', `${color.html()}`)
    color.css('background-color', `${color.data().color}`)
}
