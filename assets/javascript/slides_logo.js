

var cont = 0;
window.onload = function(){
    slides_logo();
    titulo();
    arrow_top();
    alert("Hola");
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

function arrow_top(){
window.onscroll = function (e){
    var posicion = e.pageY;
   
    if (posicion >=200){
        flecha.style.visibility = "visible";
    }else{
        flecha.style.visibility = "hidden";
    }
    
}
 var flecha =document.getElementById("image_arrow_top");
    flecha.onclick = function subir(){
    window.scrollTo(0,0);
}
    
}
