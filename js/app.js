

let openBar = document.getElementById("bars");
openBar.addEventListener('click', function(){
    document.getElementById("sidebar").classList.add("open")

})
let closeBar = document.getElementById("times");
closeBar.onclick = function(){
     document.getElementById("sidebar").classList.remove("open")
     
     
}
let myBody = document.getElementsByTagName("section")[0].addEventListener("click", function(){
    document.getElementById("sidebar").classList.remove("open")
})
function page(){
    location.href= "https://google.com"
}
