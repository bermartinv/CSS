var rango = document.querySelectorAll('input[type=range');
objetoBlur = {
	blur : '0px',
	brigthness : '0',
	contrast: '0',
	grayscale: '0',
	hue_rotate: '0',
	invert : '0',
	opacity : '0',
	saturate : '0',
	sepia: '0'

}

for (var i = 0;i < rango.length ; i++){
	rango[i].addEventListener('input',escribirValor())
	};

	
	

function escribirValor(){
	
	var valor,
		imagen = document.getElementById('solucion');
	
	
	return function(){
		if (this.name == 'brightness'  || this.name =='contrast' || this.name =='grayscale' || this.name =='invert' || this.name =='opacity' || this.name =='saturate' || this.name =='sepia'){
			valor = '%';
		}else if (this.name == 'blur'){
			valor = 'px';
		}else if (this.name == 'hue-rotate'){
			valor = 'deg';
		}
		console.log(this);
		this.nextElementSibling.innerHTML = this.value + valor ;
		imagen.style.filter = this.name + '(' + this.value  + valor +')';
		editarEstilo(this.name,this.value,valor);

		}	


function editarEstilo(tipo,cantidad,valor){
	switch (tipo){
		case ('blur') :
			objetoBlur.blur = cantidad + valor;	
		 ;break;
		case ('brightness') : ;break;
		case ('contrast') : ;break;
		case ('grayscale') : ;break;
		case ('hue-rotate') : ;break;
		case ('invert') : ;break;
		case ('opacity') : ;break;
		case ('saturate') : ;break;
		case ('sepia') : ;break;
	}
	console.log(objetoBlur.blur);

}


}