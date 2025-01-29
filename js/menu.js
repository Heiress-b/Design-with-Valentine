let menu = document.getElementById("menu")
let notMenu = document.getElementById("close")
let list = document.getElementById("lists")

menu.addEventListener("click",()=>{
 list.style.top = "90px"
 menu.style.display = "none"
 notMenu.style.display = "block"
})

notMenu.addEventListener("click",()=>{
    list.style.top= "-300px"
    notMenu.style.display = "none"
    menu.style.display = "block"
})