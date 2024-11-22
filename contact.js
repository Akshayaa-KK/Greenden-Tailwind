var sidenav=document.getElementById("side-nav")
var menubar=document.getElementById("menu-bar")
var cancel=document.getElementById("cancelnav")

menubar.addEventListener("click",function(){
    sidenav.style.right="0"
})

cancel.addEventListener("click",function(){
    sidenav.style.right="-50%"
})