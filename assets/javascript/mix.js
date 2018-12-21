
copy_paste();
start();
mostrarCodigo();

function start(){
  
  let objectValue = document.getElementById('mix-blend-mode');
  let botonReset = document.getElementById('reset');
  let imagen = document.getElementById('solucion-texto');

  botonReset.addEventListener('click',reset);
  objectValue.addEventListener('input',funcionType);
  
	

	function funcionType(){

    imagen.style.mixBlendMode = objectValue.value;

    document.getElementById('mix-blend-mode-style').innerHTML = 'mix-blend-mode: ' + objectValue.value + ' ;' ;

	}

 

  function reset(){

    imagen.style.objectFit = 'fill';

    objectValue.value = '';
  
}

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

function mostrarCodigo(){
  var variable = 0;
  botonCodigo.addEventListener('click',function(){
                                    if (variable == 0){
                                      document.getElementById('codigo_html').style.display = 'flex';

                                      variable = 1;
                                    }else{
                                      document.getElementById('codigo_html').style.display = 'none';
                                      variable = 0 ;
                                    }
  });
}