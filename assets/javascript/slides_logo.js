

var cont = 0;
window.onload = function slides_logo(){
    var images = ['assets/images/css3.gif' ,'assets/images/html5.gif' ,'assets/images/javascript.gif' ,'assets/images/grunt.gif' ,'assets/images/github.gif'] 
var item, repeat;
var item = document.getElementById("slide");
cont %= (images.length);
item.src = images[cont];
cont++;
var repeat = setTimeout(slides_logo,3000);

}


/*

*/