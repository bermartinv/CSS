textshadow = {};

valoresDefecto();

reset();

mostrarCodigo();

copy_paste();

document.getElementById('texto').addEventListener('input', function (e){ cambioTexto (e, this)  })

document.getElementById('sombraX').addEventListener('input', function (e){ sombraX (e, this) })

document.getElementById('sombraY').addEventListener('input', function (e){ sombraY (e, this) })

document.getElementById('blur').addEventListener('input', function (e){ blur (e, this) })

document.getElementById('color').addEventListener('input', function (e){ color (e,this) })

function cambioTexto (e, elemento) {

  document.getElementById('shadowtext').innerHTML = elemento.value

}

function sombraX (e, elemento) {

  textshadow.valorX = elemento.value + 'px';

  darEstilo();

  html();

}

function html(){

  document.getElementById('html_textshadow').innerHTML = 'text-shadow: ' + textshadow.valorX + ' ' + textshadow.valorY + ' ' + textshadow.blur + ' ' + textshadow.color + ';' ;

}


function sombraY (e, elemento) {

  textshadow.valorY = elemento.value + 'px';

  darEstilo();

  html();

}

function blur (e, elemento) {

  textshadow.blur = elemento.value + 'px';

  darEstilo();

  html();

}

function color(e, elemento) {

textshadow.color = elemento.value;

darEstilo();

html();

}

function darEstilo(){

document.getElementById('solucion').style.textShadow = textshadow.valorX + ' ' + textshadow.valorY + ' ' + textshadow.blur + ' ' + textshadow.color ;

}

function reset () {

  document.getElementById('reset').addEventListener('click', valoresDefecto2)

  html();

}

function valoresDefecto2 () {
  textshadow.valorX = '0px'
  textshadow.valorY = '0px'
  textshadow.blur = '0px'
  textshadow.color = '#ffffff'
  valoresDefecto();
  document.getElementById('html_textshadow').innerHTML = ''
  document.getElementById('texto').value = ''
  document.getElementById('sombraX').value = textshadow.valorX
  document.getElementById('sombraY').value = textshadow.valorY
  document.getElementById('blur').value = textshadow.blur
  document.getElementById('color').value = textshadow.color

}

function valoresDefecto () {
  textshadow.valorX = '0px'
  textshadow.valorY = '0px'
  textshadow.blur = '0px'
  textshadow.color = '#ffffff'
  darEstilo()
}

function mostrarCodigo(){
  var formulario = document.formulario_textshadow;
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
