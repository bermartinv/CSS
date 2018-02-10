boxshadow = {};
valoresDefecto();

reset();

mostrarCodigo();

copy_paste();



document.getElementById('sombraX').addEventListener('input', function (e){ sombraX (e, this) })

document.getElementById('sombraY').addEventListener('input', function (e){ sombraY (e, this) })

document.getElementById('blur').addEventListener('input', function (e){ blur (e, this) })

document.getElementById('color').addEventListener('input', function (e){ color (e,this) })

document.getElementById('radio_propagacion').addEventListener('input', function (e){ radioPropagacion (e,this)})

document.getElementById('inset').addEventListener('click', function (e) {interno (e,this)})

function radioPropagacion(e, elemento){
  
  boxshadow.radioPropagacion = elemento.value + 'px';

  darEstilo();

  html();

}

function interno (e, elemento){
  let inset = document.getElementById('inset');
  if (inset.checked === true){
    boxshadow.inset = elemento.value;
    darEstilo();
    html();
  } else {
    boxshadow.inset = '';
    darEstilo();
    html();
  }
}

function sombraX (e, elemento) {

  boxshadow.valorX = elemento.value + 'px';

  darEstilo();

  html();

}

function html(){

  document.getElementById('html_boxshadow').innerHTML = 'box-shadow: ' + boxshadow.inset + ' ' + boxshadow.valorX + ' ' + boxshadow.valorY + ' ' + boxshadow.blur + ' ' + boxshadow.radioPropagacion + ' ' + boxshadow.color + ';' ;

}


function sombraY (e, elemento) {

  boxshadow.valorY = elemento.value + 'px';

  darEstilo();

  html();

}

function blur (e, elemento) {

  boxshadow.blur = elemento.value + 'px';

  darEstilo();

  html();

}

function color(e, elemento) {

boxshadow.color = elemento.value;

darEstilo();

html();

}

function darEstilo(){
// si inset esta checked metemos el inset en el estilo
  let inset = document.getElementById('inset');
  if (inset.checked === true){
    boxshadow.inset = 'inset';
// si no está inset no metemos el inset en el estilo
document.getElementById('solucion').style.boxShadow = boxshadow.inset + ' ' + boxshadow.valorX + ' ' + boxshadow.valorY + ' ' + boxshadow.blur + ' ' + boxshadow.radioPropagacion + ' ' + boxshadow.color ;
  } else {
    boxshadow.inset = '';
    document.getElementById('solucion').style.boxShadow = boxshadow.inset + ' ' + boxshadow.valorX + ' ' + boxshadow.valorY + ' ' + boxshadow.blur + ' ' + boxshadow.radioPropagacion + ' ' + boxshadow.color ;
  }
}

function reset () {

  document.getElementById('reset').addEventListener('click', valoresDefecto2)

  html();

}

function valoresDefecto2 () {
  boxshadow.valorX = '0px'
  boxshadow.valorY = '0px'
  boxshadow.blur = '0px'
  boxshadow.radioPropagacion = '0px'
  boxshadow.color = '#ffffff'
  boxshadow.inset = ''
  valoresDefecto();
  document.getElementById('html_boxshadow').innerHTML = ''
  document.getElementById('sombraX').value = ''
  document.getElementById('sombraY').value = ''
  document.getElementById('blur').value = ''
  document.getElementById('radio_propagacion').value = ''
  document.getElementById('color').value = boxshadow.color

}

function valoresDefecto () {
  boxshadow.valorX = '0px'
  boxshadow.valorY = '0px'
  boxshadow.blur = '0px'
  boxshadow.radioPropagacion = '0px'
  boxshadow.color = '#ffffff'
  boxshadow.inset = ''
  darEstilo()
}

function mostrarCodigo(){
  var formulario = document.formulario_boxshadow;
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
