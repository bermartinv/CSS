var rango = document.querySelectorAll('input[type=range'),
	imagen = document.getElementById('imagenFinal');
objetoFilter = {
	blur : '0px',
	brightness : '1',
	contrast: '1',
	grayscale: '0',
	hue_rotate: '0',
	invert : '0',
	opacity : '1',
	saturate : '1',
	sepia: '0',
	total: ''

}
mostrarCodigo();
reset(); 
copy_paste();

for (var i = 0;i < rango.length ; i++){
	rango[i].addEventListener('input',escribirValor())
	};

	
	

function escribirValor(){
	
	var valor,
		imagen = document.getElementById('imagenFinal');
	
	
	return function(){
		if (this.name == 'brightness'  || this.name =='contrast' || this.name =='grayscale' || this.name =='invert' || this.name =='opacity' || this.name =='saturate' || this.name =='sepia'){
			valor = '%';
		}else if (this.name == 'blur'){
			valor = 'px';
		}else if (this.name == 'hue-rotate'){
			valor = 'deg';
		}
		this.nextElementSibling.innerHTML = this.value + valor ;
		//imagen.style.filter = this.name + '(' + this.value  + valor +')';
		editarEstilo(this.name,this.value,valor,imagen);

		}	


function editarEstilo(tipo,cantidad,valor,imagen){
	switch (tipo){
		case ('blur') :
			objetoFilter.blur = cantidad + valor;
			break;
		case ('brightness') : 
			objetoFilter.brightness = cantidad + valor;
			break;
		case ('contrast') :
			objetoFilter.contrast = cantidad + valor;
			break;
		case ('grayscale') :
			objetoFilter.grayscale = cantidad + valor ;
			break;
		case ('hue-rotate') :
			objetoFilter.hue_rotate = cantidad + valor;
			break;
		case ('invert') :
			objetoFilter.invert = cantidad + valor;
			break;
		case ('opacity') :
			objetoFilter.opacity = cantidad + valor;
			break;
		case ('saturate') :
			objetoFilter.saturate = cantidad + valor ;
			break;
		case ('sepia') :
			objetoFilter.sepia = cantidad + valor ;
			break;
	}
	objetoFilter.total = 'blur(' + objetoFilter.blur + ') ' + 'brightness(' + objetoFilter.brightness + ') ' + 'contrast(' + objetoFilter.contrast + ') ' + 'grayscale(' + objetoFilter.grayscale + ') ' + 'hue-rotate(' + objetoFilter.hue_rotate + ') ' + 'invert(' + objetoFilter.invert + ') ' + 'opacity(' + objetoFilter.opacity + ') ' + 'saturate(' + objetoFilter.saturate + ') ' + 'sepia(' +objetoFilter.sepia + ')'  ;
		console.log(objetoFilter.total);
		imagen.style.filter = objetoFilter.total;
		document.getElementById('html_filter').innerHTML = 'filter: ' + objetoFilter.total + ' ;' ;
}
	
}


function mostrarCodigo(){
  var formulario = document.formulario_filter2;
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

function deshabilitar(){
	var rango = document.querySelectorAll('input[type=range');
	var imagen = document.getElementById('imagenFinal');
	for (var i = 0;i < rango.length ; i++){
	rango[i].value = '0';
	rango[i].nextElementSibling.innerHTML = '' ;
}
	objetoFilter.blur = '0px'; objetoFilter.brightness = '1'; objetoFilter.contrast = '1'; objetoFilter.grayscale = '0';
	objetoFilter.hue_rotate = '0'; objetoFilter.invert = '0'; objetoFilter.opacity = '1'; objetoFilter.saturate = '1';
	objetoFilter.sepia = '0'; 
	objetoFilter.total = 'blur(' + objetoFilter.blur + ') ' + 'brightness(' + objetoFilter.brightness + ') ' + 'contrast(' + objetoFilter.contrast + ') ' + 'grayscale(' + objetoFilter.grayscale + ') ' + 'hue-rotate(' + objetoFilter.hue_rotate + ') ' + 'invert(' + objetoFilter.invert + ') ' + 'opacity(' + objetoFilter.opacity + ') ' + 'saturate(' + objetoFilter.saturate + ') ' + 'sepia(' +objetoFilter.sepia + ')'  ;
		console.log(objetoFilter.total);
	imagen.style.filter = objetoFilter.total;
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