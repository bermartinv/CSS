window.onload = function (){
var item = document.getElementById("intro_img").src;
if (item == ""){
    item.style.display="none";
    
}
var hello = document.getElementById("hello");
    hello.innerHTML = "Hello, how is it going?"    
}