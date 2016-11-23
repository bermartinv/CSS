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
        this.nextElementSibling.style.display = "block";
        show = true;
        }else{
        this.nextElementSibling.style.display = "none";
        
        show = false;
        }
    }
}