var elem = document.querySelectorAll(".elem")
// var elemImage = document.querySelector("#elem1 img");
// elem1.addEventListener("mousemove",function(delts) {
//     elemImage.style.left = delts.x + "px";
//     elemImage.style.top = delts.y + "px";

// })
// elem1.addEventListener("mouseenter",function(delts) {
//     elemImage.style.opacity = 1;
// })
// elem1.addEventListener("mouseleave",function(delts) {
//     elemImage.style.opacity = 0;
// })

elem.forEach(function(val) {
    val.addEventListener("mouseenter",function() {
        val.style.backgroundColor = "red"
        val.childNodes[3].style.opacity = 1;
    });
    val.addEventListener("mouseleave",function() {
        val.style.backgroundColor = "transparent";
        val.childNodes[3].style.opacity = 0;
    });

    val.addEventListener("mousemove", function(delts) {
        val.childNodes[3].style.left = delts.x + "px";
    })
});