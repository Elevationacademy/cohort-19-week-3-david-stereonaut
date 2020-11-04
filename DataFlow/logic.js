$("#post-btn").on("click", function(){
    posts.push({name: $("#name").val(), text: $("#text").val()});
    render();
})