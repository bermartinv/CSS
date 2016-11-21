

var cont = 0;
window.onload = function(){
    slides_logo();
    titulo();
    ejemplo();
}
    
    
function slides_logo(){
    var images = ['assets/images/css3.gif' ,'assets/images/html5.gif' ,'assets/images/javascript.gif' ,'assets/images/grunt.gif' ,'assets/images/github.gif'] 
var item, repeat;
var item = document.getElementById("slide");
cont %= (images.length);
item.src = images[cont];
cont++;
var repeat = setTimeout(slides_logo,3000);

}

function titulo(){
    if ((window.innerWidth)<=520){
    document.getElementsByClassName("name")[0].innerHTML = "Aprende CSS";
    }
}

function ejemplo(){
    var show=false;
    var items = document.querySelectorAll(".ejemplo");
for (var i = 0; i < items.length;i++){
  items[i].addEventListener("click",aparecer);
}

function aparecer(){
  if (show == false){
  this.firstElementChild.style.display = "block";  
    ver = true
  }else{
    this.firstElementChild.style.display = "none";
  show = false;
  }
}

}
/*

*/