window.onload = function(){
    mostrar();
    arrow_top();
}

function mostrar(){

    var items, show , imagenes;
    show = false;
    items = document.querySelectorAll(".pulsador");
    numero = new Array(items.length);

    imagenes = document.querySelectorAll(".flecha");
    for ( var i = 0 ; i < items.length ; i++){

       items[i].addEventListener("click",aparecer);

    }

   function aparecer(){
      if (this.firstChild.nextSibling.firstElementChild.src == 'https://bermartinv.github.io/css/assets/images/double_arrow_bottom.png'){
          this.nextElementSibling.style.display = 'block';
          this.firstChild.nextSibling.firstElementChild.removeAttribute('src');
          this.firstChild.nextSibling.firstElementChild.setAttribute('src','https://bermartinv.github.io/css/assets/images/double_arrow_top.png');
      }else{
          this.nextElementSibling.style.display = "none";
          this.firstChild.nextSibling.firstElementChild.src = 'https://bermartinv.github.io/css/assets/images/double_arrow_bottom.png';
      }


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
 flecha.onclick = function (e){
    var posicionY = window.pageYOffset;
    setInterval(inicio,1);
     function inicio(){
         if (posicionY>=20){
             window.scrollTo(0,posicionY);
            posicionY = (posicionY - 10)
         }else{
                 clearInterval();
             }
     }

    }


}
