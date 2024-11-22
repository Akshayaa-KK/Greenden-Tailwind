var sidenav=document.getElementById("side-nav")
var menubar=document.getElementById("menu-bar")
var cancel=document.getElementById("cancelnav")

menubar.addEventListener("click",function(){
    sidenav.style.right="0"
})

cancel.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

var bestseller=document.getElementById("bestseller")
var bestproducts=bestseller.querySelectorAll("div")
var search=document.getElementById("search")



search.addEventListener("keyup",function(){
    var productEntered=event.target.value.toUpperCase()
     
    for(count=0;count<bestproducts.length;count++)
    {
        var productName=bestproducts[count].querySelector("h1").textContent

        if(productName.toUpperCase().indexOf(productEntered)<0)
        {
            bestproducts[count].style.display="none"
        }
        else{
            bestproducts[count].style.display="block"
        }
    }

   

})