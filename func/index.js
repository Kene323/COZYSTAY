const head_id = document.getElementById("head_id")
const scrollUp = 100

window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY;

    if(scrollTop > scrollUp) {
        head_id.style.backgroundColor = "#53624e"
    } else{
        head_id.style.backgroundColor = "transparent"
    }
})