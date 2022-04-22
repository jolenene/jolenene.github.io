let mouseCursor = document.querySelector(".cursor")
let lis = document.querySelectorAll("li")

window.addEventListener("mousemove", cursor)

function cursor(e){
    mouseCursor.style.top = e.pageY + "px"
    mouseCursor.style.left = e.pageX + "px"
}
window.addEventListener("mousedown", function(){
    mouseCursor.classList.add("mouse-down")
})
window.addEventListener("mouseup", function(){
    mouseCursor.classList.remove("mouse-down")
})