window.onload = function(){
    mostrar();
} 

function mostrar(){
    var items, show , imagenes;
    show = false;
    items = document.querySelectorAll(".pulsador");
    imagenes = document.querySelectorAll(".flecha");
    for ( var i = 0 ; i < items.length ; i++){
        items[i].addEventListener("click",aparecer);
    }

    function aparecer(){
        if (show == false){
        this.nextElementSibling.style.display = "block";  this.firstChild.nextSibling.firstElementChild.src = 'https://bermartinv.github.io/css/assets/images/double_arrow_top.png';
        show = true;
        }else{
        this.nextElementSibling.style.display = "none";  this.firstChild.nextSibling.firstElementChild.src ='https://bermartinv.github.io/css/assets/images/double_arrow_bottom.png'; 
        
        show = false;
        }
    }
}