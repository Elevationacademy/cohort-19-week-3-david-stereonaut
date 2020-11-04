const render = function() {
    $(".post").remove()
    for (let post of posts){
        $("#posts-container").append(`<div class=post><b>${post.name}:</b> ${post.text}`)
    }
}
render()