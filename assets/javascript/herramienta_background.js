window.onload = function(){
    
    herramienta_background();
    
}

function herramienta_background(){
    
    var formulario = document.formulario_background;
    
    var elementos = document.forms['formulario'].elements;
    
    var solucion = document.getElementById('solucion');
    
    var radio = document.getElementsByName('position');
    
    var codigo_html = document.getElementById('codigo_html');
    
    var imagen_html = document.getElementById('imagen_html');
    
    var repeat_html = document.getElementById('repeat_html');
    
    var attachment_html = document.getElementById('attachment_html');
    
    var size_html = document.getElementById('size_html');
    
    var origin_html = document.getElementById('origin_html');
    
    formulario.color.addEventListener('change',cambioColor); 
    
    formulario.file.addEventListener('change',cambioImagen);
    
    formulario.repeat.addEventListener('change',cambioRepeat);
    
    formulario.attachment.addEventListener('change',cambioAttachment);
    
    formulario.size.addEventListener('change',cambioSize);
    
    formulario.origin.addEventListener('change',cambioOrigin);
    
    formulario.clip.addEventListener('change',cambioClip);
    
    formulario.reset.addEventListener('click',inicio);
    
    formulario.codigo_html.addEventListener('click',mostrar_codigo_html);
    
    deshabilitado();
      
    radio[0].addEventListener('click',background_position_keyword);
    
    radio[1].addEventListener('click',background_position_positionXY);
  
    radio[2].addEventListener('click',background_position_positionPX);
    
    radio[3].addEventListener('click',function(){deshabilitado();solucion.style.backgroundPosition = 'initial';position_html.innerHTML = 'background-position: '+solucion.style.backgroundPosition+';'});
    
    radio[4].addEventListener('click',function(){deshabilitado();solucion.style.backgroundPosition = 'inherit';position_html.innerHTML = 'background-position: '+solucion.style.backgroundPosition+';'});
    
    function background_position_keyword(){
     
     formulario.position_keyword.disabled = false;
        
     formulario.positionX.disabled = true;
    
     formulario.positionY.disabled = true;
    
     formulario.positionX_px.disabled = true;
    
     formulario.positionY_px.disabled = true;
        
     formulario.position_keyword.addEventListener('change',cambiarPositionKeyword);
        
        function cambiarPositionKeyword(){
            
            solucion.style.backgroundPosition = 'none';
            
            if (elementos['position_keyword'].options[1].selected){
                
                solucion.style.backgroundPosition = 'left top';
                
                cambio_position_keyword_html(solucion.style.backgroundPosition);
                
            }else if (elementos['position_keyword'].options[2].selected){
                
                solucion.style.backgroundPosition = 'left center';
                
                cambio_position_keyword_html(solucion.style.backgroundPosition);
                
            }else if (elementos['position_keyword'].options[3].selected){
                
                solucion.style.backgroundPosition = 'left bottom';
                
                cambio_position_keyword_html(solucion.style.backgroundPosition);
                
            }else if (elementos['position_keyword'].options[4].selected){
                
                solucion.style.backgroundPosition = 'right top';
                
                cambio_position_keyword_html(solucion.style.backgroundPosition);
                
            }else if (elementos['position_keyword'].options[5].selected){
                
                solucion.style.backgroundPosition = 'right center';
                
                cambio_position_keyword_html(solucion.style.backgroundPosition);
                
            }else if (elementos['position_keyword'].options[6].selected){
                
                solucion.style.backgroundPosition = 'right bottom';
                
                cambio_position_keyword_html(solucion.style.backgroundPosition);
                
            }else if (elementos['position_keyword'].options[7].selected){
                
                solucion.style.backgroundPosition = 'center top';
                
                cambio_position_keyword_html(solucion.style.backgroundPosition);
                
            }else if (elementos['position_keyword'].options[8].selected){
                
                solucion.style.backgroundPosition = 'center center';
                
                cambio_position_keyword_html(solucion.style.backgroundPosition);
                
            }else if (elementos['position_keyword'].options[9].selected){
                
                solucion.style.backgroundPosition = 'center bottom';
                
                cambio_position_keyword_html(solucion.style.backgroundPosition);
                
            }else{
                
                position_html.innerHTML = '';
            }
       
            function cambio_position_keyword_html(texto){
                
                position_html.innerHTML = 'background-position: '+texto+';';
                
            }
            
        }
        
    }
    
    function background_position_positionXY(){
        
     formulario.position_keyword.disabled = true;
        
     formulario.positionX.disabled = false;
    
     formulario.positionY.disabled = false;
    
     formulario.positionX_px.disabled = true;
    
     formulario.positionY_px.disabled = true; 
    
     formulario.positionX.addEventListener('change',cambiarPositionXY);
    
     formulario.positionY.addEventListener('change',cambiarPositionXY);
        
        function cambiarPositionXY(){
        
            solucion.style.backgroundPosition = formulario.positionX.value+'% '+formulario.positionY.value+'%';
            
            cambiarPositionXY_html(formulario.positionX.value,formulario.positionY.value);
            
            function cambiarPositionXY_html(textoX,textoY){
                
                position_html.innerHTML = 'background-position:'+textoX+'% '+textoY+'% ;';
                
            }
           
    }
        
}
    
    function background_position_positionPX(){
        
     formulario.position_keyword.disabled = true;
        
     formulario.positionX.disabled = true;
    
     formulario.positionY.disabled = true;
    
     formulario.positionX_px.disabled = false;
    
     formulario.positionY_px.disabled = false;  
        
     formulario.positionX_px.addEventListener('change',cambiarPositionPXX);
    
     formulario.positionY_px.addEventListener('change',cambiarPositionPXX);
        
        function cambiarPositionPXX(){
        
            solucion.style.backgroundPosition = formulario.positionX_px.value+'px '+formulario.positionY_px.value+'px';
            
            cambiarPositionPXX_html(formulario.positionX_px.value,formulario.positionY_px.value);
            
            function cambiarPositionPXX_html(textoX,textoY){
                
                position_html.innerHTML = 'background-position: '+textoX+'px '+textoY+'px ;';
                
            }
            
    }
           
}
    
    function deshabilitado(){
        
     formulario.position_keyword.disabled = true;
    
     formulario.positionX.disabled = true;
    
     formulario.positionY.disabled = true;
    
     formulario.positionX_px.disabled = true;
    
     formulario.positionY_px.disabled = true;
        
    }
        
    function cambioColor(){
        
        solucion.style.backgroundColor = document.formulario_background.color.value;
        
        color_html.innerHTML = 'background-color: '+document.formulario_background.color.value+';';
        
        }
    
    function cambioImagen(){
        
        if (formulario.file.options[1].selected){
          
        solucion.style.backgroundImage = "url( 'http://lorempixel.com/100/100')";
            
        cambio_imagen_html(solucion.style.backgroundImage);
            
        }else if (formulario.file.options[2].selected){
            
            solucion.style.backgroundImage ="url( 'http://lorempixel.com/200/200')"; 
            
            cambio_imagen_html(solucion.style.backgroundImage);
            
        }else if (formulario.file.options[3].selected){
                        
            solucion.style.backgroundImage = "url( 'http://lorempixel.com/300/300')";
            
            cambio_imagen_html(solucion.style.backgroundImage);
            
        }else if (formulario.file.options[4].selected){
            
            solucion.style.backgroundImage ="url( 'http://lorempixel.com/400/400')";
            
            cambio_imagen_html(solucion.style.backgroundImage);
            
        }else if (formulario.file.options[5].selected){
            
            solucion.style.backgroundImage ="url( 'http://lorempixel.com/500/500')";
            
            cambio_imagen_html(solucion.style.backgroundImage);
            
        }else if (formulario.file.options[6].selected){
            
            solucion.style.backgroundImage ="url( 'http://lorempixel.com/600/600')";
            
            cambio_imagen_html(solucion.style.backgroundImage);
            
        }else if (formulario.file.options[7].selected){
            
            solucion.style.backgroundImage ="url( 'http://lorempixel.com/700/700')";
            
            cambio_imagen_html(solucion.style.backgroundImage);
            
        }else{
            
            solucion.style.backgroundImage = 'none';
            
            cambio_imagen_html(solucion.style.backgroundImage);
            
        }
        
       function cambio_imagen_html(texto){
         
        imagen_html.innerHTML = 'background-image: '+texto+';';
         
       } 
        
    }
    
    function cambioRepeat(){
        
        if (formulario.repeat.options[1].selected){
            
            solucion.style.backgroundRepeat = 'repeat';
            
            cambio_repeat_html(solucion.style.backgroundRepeat);
            
        }else if (formulario.repeat.options[2].selected){
            
            solucion.style.backgroundRepeat = 'repeat-x';
            
            cambio_repeat_html(solucion.style.backgroundRepeat);
            
        }else if (formulario.repeat.options[3].selected){
            
            solucion.style.backgroundRepeat = 'repeat-y';
            
            cambio_repeat_html(solucion.style.backgroundRepeat);
            
        }else if (formulario.repeat.options[4].selected){
            
            solucion.style.backgroundRepeat = 'no-repeat';
            
            cambio_repeat_html(solucion.style.backgroundRepeat);
            
        }else if (formulario.repeat.options[5].selected){
            
            solucion.style.backgroundRepeat = 'inherit';
            
            cambio_repeat_html(solucion.style.backgroundRepeat);
            
        }else{
            
            repeat_html.innerHTML = '';
            
        }
        
        function cambio_repeat_html(texto){
            
            repeat_html.innerHTML = 'background-repeat: '+texto+';';
            
        }
        
    }
     
    function cambioAttachment(){
        
        if (formulario.attachment.options[1].selected){
    
            solucion.style.backgroundAttachment = "scroll";
            
            cambio_attachment_html(solucion.style.backgroundAttachment);
            
        }else if(formulario.attachment.options[2].selected){
            
            solucion.style.backgroundAttachment = 'fixed';
            
            cambio_attachment_html(solucion.style.backgroundAttachment);
            
        }else if(formulario.attachment.options[3].selected){
            
            solucion.style.backgroundAttachment = 'local';
            
            cambio_attachment_html(solucion.style.backgroundAttachment);
            
        }else if (formulario.attachment.options[4].selected){
            
            solucion.style.backgroundAttachment = 'inherit';
            
            cambio_attachment_html(solucion.style.backgroundAttachment);
            
        }else{
            
            attachment_html.innerHTML = '';
            
        }
        
        function cambio_attachment_html(texto){
            
            attachment_html.innerHTML = 'background-attachment: '+texto+';';
        
        }
    }
    
    function cambioSize(){
        
        if (formulario.size.options[1].selected){
            
            solucion.style.backgroundSize = 'auto';
            
            cambio_size_html(solucion.style.backgroundSize);
            
        }else if(formulario.size.options[2].selected){
            
            solucion.style.backgroundSize = 'cover';
                        
            cambio_size_html(solucion.style.backgroundSize);
        
        }
        
        else if(formulario.size.options[3].selected){
            
            solucion.style.backgroundSize = 'contain';
            
            cambio_size_html(solucion.style.backgroundSize);
            
        }else{
            
            size_html.innerHTML = '';
            
        }
        
        function cambio_size_html(texto){
            
            size_html.innerHTML = 'background-size: '+texto+';';
            
        }
        
    }
    
    function cambioOrigin(){
        
       if (formulario.origin.options[1].selected){
           
            solucion.style.backgroundOrigin = 'border-box';
           
            cambio_origin_html(solucion.style.backgroundOrigin);
           
        }else if(formulario.origin.options[2].selected){
            
            solucion.style.backgroundOrigin = 'padding-box';
            
            cambio_origin_html(solucion.style.backgroundOrigin);
            
        }else if(formulario.origin.options[3].selected){
            
            solucion.style.backgroundOrigin = 'content-box';
            
            cambio_origin_html(solucion.style.backgroundOrigin);
            
        }else if(formulario.origin.options[4].selected){
            
            solucion.style.backgroundOrigin = 'inherit';
            
            cambio_origin_html(solucion.style.backgroundOrigin);
            
        }else{
            
            origin_html.innerHTML = '';
            
        } 
        
        function cambio_origin_html(texto){
            
            origin_html.innerHTML = 'background-origin: '+texto+';';
        }
        
    }
    
    function cambioClip(){
        
       if (formulario.clip.options[1].selected){
           
            solucion.style.backgroundClip = 'border-box';
           
            cambio_clip_html(solucion.style.backgroundClip);
           
        }else if(formulario.clip.options[2].selected){
            
            solucion.style.backgroundClip = 'padding-box';
            
            cambio_clip_html(solucion.style.backgroundClip);
            
        }else if(formulario.clip.options[3].selected){
            
            solucion.style.backgroundClip = 'content-box';
            
            cambio_clip_html(solucion.style.backgroundClip);
            
        }else if(formulario.clip.options[4].selected){
            
            solucion.style.backgroundClip = 'inherit';
            
            cambio_clip_html(solucion.style.backgroundClip);
            
        }else{
            
            clip_html.innerHTML = '';
            
        } 
        
        function cambio_clip_html(texto){
            
            clip_html.innerHTML = 'background-clip: '+texto+';';
            
        }
        
    }
    
    function inicio(){
         
        solucion.style.backgroundColor = '#ffffff';
         
        solucion.style.backgroundImage = 'none';
         
        solucion.style.backgroundRepeat = 'repeat';
         
        solucion.style.backgroundAttachment = 'scroll';
         
        solucion.style.backgroundSize = 'auto';
         
        solucion.style.backgroundOrigin = 'padding-box';
         
        solucion.style.backgroundClip = 'padding-box';
         
        deshabilitado();
         
        solucion.style.backgroundPosition = '0% 0%';
        
        color_html.innerHTML = '';
        
        imagen_html.innerHTML = '';
        
        repeat_html.innerHTML = '';
        
        attachment_html.innerHTML = '';
        
        size_html.innerHTML = '';
        
        origin_html.innerHTML = '';
        
        clip_html.innerHTML = '';
        
        position.innerHTML = '';
        
    }
    
    function mostrar_codigo_html(){
        
        codigo_html.style.display = 'block';
                
    }
    
}