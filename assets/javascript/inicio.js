window.onload = function(){
var variable = 0.8;
var muestra = setInterval(mostrar,100);
  function mostrar(){
    var elemento = document.querySelector('.loader');
    variable = variable - 0.1 ;
    elemento.style.opacity = variable - 0.1;
    if (variable == 0){
      clearInterval(mostrar);
    }
  }
}
