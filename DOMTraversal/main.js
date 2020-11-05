const dataIDs = []
$(".generator").click(function(){
    console.log(`Processor ID: ${$(this).closest(".processor").attr('id')}`)
    console.log(`Computer's data-id: ${$(this).closest(".computer").data().id}`)
    dataIDs.push({cmp_id: $(this).closest(".computer").data().id})
    console.log(`BUS: ${$(this).closest(".computer").find(".BUS").text()}`)
})

$(".validator").click(function(){
    console.log(`Generator: ${$(this).closest(".computer").find(".generator").text()}`)
    console.log(`MB: ${$(this).closest(".computer").find(".MB").text()}`)
    // console.log(`QR1: ${$(this).closest(".computer").find(".QR").text()}`)
    $(this).closest(".computer").find(".QR").each(function(){
        console.log(`QR: ${$(this).text()}`)
    })
})