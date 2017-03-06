window.onload = function(){
var variable_tiempo = 0.8;

var muestra = setInterval(mostrar_loader,100);
  function mostrar_loader(){
    var elemento = document.querySelector('.loader');
    variable_tiempo = variable_tiempo - 0.1 ;
    elemento.style.opacity = variable_tiempo - 0.1;
    variable_tiempo = variable_tiempo.toFixed(1);

if (variable_tiempo <= 0){
      elemento.style.display = 'none';
      clearInterval(muestra);

    }

  }
}
