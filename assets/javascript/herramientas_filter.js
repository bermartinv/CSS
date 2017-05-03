objeto = {
    estilo : '',
    medida : '',
    tipo_medida : ''
}
;
deshabilitar();
inicio();
mostrarCodigo();
reset();
copy_paste();

function deshabilitar (){
  var elementos = document.getElementsByName('medida');
  var losinputs = document.querySelectorAll('.valores');

  document.getElementById('solucion').style.filter = 'none';
  document.getElementById('select_filter').value= '';
  document.getElementById('html_filter').innerHTML = '';
  for(var i = 0 ; i < elementos.length ; i++){
      elementos[i].disabled = true;
      losinputs[i].style.opacity = 0.2;
      elementos[i].value = '';
    }

};

function inicio(){
var elementos = document.getElementsByName('medida');
var losinputs = document.querySelectorAll('.valores');
var element_select = document.getElementById('select_filter');
element_select.addEventListener('change',analizar);
var imagen = document.getElementById('solucion');
function analizar(){
    if (element_select.options[0].selected){
      alert ('Hola que tal');
    }else if (element_select.options[1].selected) {
        deshabilitar();
        elementos[0].disabled = false;
        losinputs[0].style.opacity = 1;
        elementos[0].addEventListener('input',function(){
                  imagen.style.filter = 'blur('+elementos[0].value+'px)';
                  objeto.medida = elementos[0].value;
                  objeto.estilo = 'blur';
                  objeto.tipo_medida = 'px';
                  document.getElementById('html_filter').innerHTML ='filter: '+ objeto.estilo + '('+objeto.medida+'px);';
                  filtrarDatos(objeto.tipo_medida,objeto.medida);
          })

    }else if (element_select.options[2].selected) {
        deshabilitar();
        elementos[2].disabled = false;
        losinputs[2].style.opacity = 1;
        elementos[2].addEventListener('input',function(){
                  objeto.estilo = 'brightness';
                  imagen.style.filter = objeto.estilo+'('+elementos[2].value+'%)';
                  objeto.medida = elementos[2].value;
                  objeto.tipo_medida = '%%';
                  document.getElementById('html_filter').innerHTML ='filter: '+ objeto.estilo + '('+objeto.medida+'%);';
                  filtrarDatos(objeto.tipo_medida,objeto.medida);
          })
    }else if (element_select.options[3].selected) {
              deshabilitar();
              elementos[2].disabled = false;
              losinputs[2].style.opacity = 1;
              elementos[2].addEventListener('input',function(){
                        objeto.estilo = 'contrast';
                        imagen.style.filter = objeto.estilo+'('+elementos[2].value+'%)';
                        objeto.medida = elementos[2].value;
                        objeto.tipo_medida = '%%';
                        document.getElementById('html_filter').innerHTML ='filter: '+ objeto.estilo + '('+objeto.medida+'%);';
                        filtrarDatos(objeto.tipo_medida,objeto.medida);
                })
    }else if (element_select.options[4].selected) {
                        deshabilitar();
                        elementos[1].disabled = false;
                        losinputs[1].style.opacity = 1;
                        elementos[1].addEventListener('input',function(){
                        objeto.estilo = 'grayscale';
                        imagen.style.filter = objeto.estilo+'('+elementos[1].value+'%)';
                        objeto.medida = elementos[1].value;
                        objeto.tipo_medida = '%';
                        document.getElementById('html_filter').innerHTML ='filter: '+ objeto.estilo + '('+objeto.medida+'%);';
                        filtrarDatos(objeto.tipo_medida,objeto.medida);
                          })
    }else if (element_select.options[5].selected) {
                        deshabilitar();
                        elementos[3].disabled = false;
                        losinputs[3].style.opacity = 1;
                        elementos[3].addEventListener('input',function(){
                        objeto.estilo = 'hue-rotate';
                        imagen.style.filter = objeto.estilo+'('+elementos[3].value+'deg)';
                        objeto.medida = elementos[3].value;
                        objeto.tipo_medida = 'deg';
                        document.getElementById('html_filter').innerHTML ='filter: '+ objeto.estilo + '('+objeto.medida+'deg);';
                        filtrarDatos(objeto.tipo_medida,objeto.medida);
                          })
      }else if (element_select.options[6].selected) {
                        deshabilitar();
                        elementos[1].disabled = false;
                        losinputs[1].style.opacity = 1;
                        elementos[1].addEventListener('input',function(){
                        objeto.estilo = 'invert';
                        imagen.style.filter = objeto.estilo+'('+elementos[1].value+'%';
                        objeto.medida = elementos[1].value;
                        objeto.tipo_medida = '%';
                        document.getElementById('html_filter').innerHTML ='filter: '+ objeto.estilo + '('+objeto.medida+'%);';
                        filtrarDatos(objeto.tipo_medida,objeto.medida);
                          })
      }else if (element_select.options[7].selected) {
                        deshabilitar();
                        elementos[1].disabled = false;
                        losinputs[1].style.opacity = 1;
                        elementos[1].addEventListener('input',function(){
                        objeto.estilo = 'opacity';
                        imagen.style.filter = objeto.estilo+'('+elementos[1].value+'%)';
                        objeto.medida = elementos[1].value;
                        objeto.tipo_medida = '%';
                        document.getElementById('html_filter').innerHTML ='filter: '+ objeto.estilo + '('+objeto.medida+'%);';
                        filtrarDatos(objeto.tipo_medida,objeto.medida);
                          })
      }else if (element_select.options[8].selected) {
                        deshabilitar();
                        elementos[2].disabled = false;
                        losinputs[2].style.opacity = 1;
                        elementos[2].addEventListener('input',function(){
                        objeto.estilo = 'saturate';
                        imagen.style.filter = objeto.estilo+'('+elementos[2].value+'%)';
                        objeto.medida = elementos[2].value;
                        objeto.tipo_medida = '%%';
                        document.getElementById('html_filter').innerHTML ='filter: '+ objeto.estilo + '('+objeto.medida+'%);';
                        filtrarDatos(objeto.tipo_medida,objeto.medida);
                        })
      }else if (element_select.options[9].selected) {
                        deshabilitar();
                        elementos[1].disabled = false;
                        losinputs[1].style.opacity = 1;
                        elementos[1].addEventListener('input',function(){
                        objeto.estilo = 'sepia';
                        imagen.style.filter = objeto.estilo+'('+elementos[1].value+'%)';
                        objeto.medida = elementos[1].value;
                        objeto.tipo_medida = '%';
                        document.getElementById('html_filter').innerHTML ='filter: '+ objeto.estilo + '('+objeto.medida+'%);';
                      filtrarDatos(objeto.tipo_medida,objeto.medida);           })
        }else{
          alert ('Hola que tal');
        }
      }
}
function mostrarCodigo(){
  var formulario = document.formulario_filter;
  var variable = 0;
  formulario.botonCodigo.addEventListener('click',function(){
              if (variable == 0){
                  document.getElementById('codigo_html').style.display = 'flex';
                  variable = 1;
              }else{
                  document.getElementById('codigo_html').style.display = 'none';
                  variable = 0 ;
              }
  });
}
function reset(){
  var botonReset = document.getElementById('reset');
  var solucion = document.getElementById('solucion');
  botonReset.addEventListener('click',function(){
                                    deshabilitar();
                                    document.getElementById('html_filter').innerHTML ='';
                                        });
}
function copy_paste(){
  var boton = document.getElementById('copy_paste');
  boton.addEventListener('click',function(event){

                                    var codigo = document.querySelector('#html');
                                    window.getSelection().removeAllRanges();
                                    var range = document.createRange();
                                    range.selectNode(codigo);
                                    window.getSelection().addRange(range);
                                    var resultado = document.execCommand('copy');
                                    var copiadoImagen = document.getElementById('img_copied');
                                    copiadoImagen.style.display = 'block';
                                    copiadoImagen.style.position = 'relative';
                                    var reiniciar = setTimeout(desaparecer,600);
                                    function desaparecer(){
                                      copiadoImagen.style.display = 'none';
                                    }



                                      })
}
function filtrarDatos(tipo,valor){
  switch (tipo) {
    case 'px':

      if (valor > 200){
        pop_alert(200);
        deshabilitar();
      }
      break;
    case '%':
      if (valor > 100){
        alert ('Debe introducir un número inferior a 100');
        pop_alert(100);
        deshabilitar();
      }
        break;
    case '%%':
      if (valor > 1000){
        pop_alert(1000);
        deshabilitar();
      }
          break;
    case 'deg':
      if (valor > 360){
        pop_alert(360);
        deshabilitar();
      }
            break;

    default:

  }
}

function pop_alert(valor){
  var popup = document.getElementById('popup');
  document.getElementById('valor_filter').innerHTML = valor;
  alert (window.pageYOffset);
  popup.style.top = (window.pageYOffset+100)+'px';
    if (popup.style.display == 'block'){
      popup.style.display = 'none';
    } else {
      popup.style.display = 'block';
    }

  document.getElementById('boton_popup').addEventListener('click',function(){
    popup.style.display = 'none';
  });
  document.getElementById('close').addEventListener('click',function(){
    popup.style.display = 'none';
  });
};
