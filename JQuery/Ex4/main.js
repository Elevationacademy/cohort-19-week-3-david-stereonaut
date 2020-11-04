$(".item").on("click", function(){
    if ($(this).data().instock){
        const item = `<div class=cart-item>${$(this).text()}</div>`
        $("#cart").append(item)
    }
})