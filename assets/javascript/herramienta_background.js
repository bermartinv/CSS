window.onload = function(){
    
    herramienta_background();
    
}

function herramienta_background(){
    
    var formulario = document.formulario_background;
    
    var elementos = document.forms['formulario'].elements;
    
    var solucion = document.getElementById('solucion');
    
    var radio = document.getElementsByName('position');
    
    formulario.color.addEventListener('change',cambioColor); 
    
    formulario.file.addEventListener('change',cambioImagen);
    
    formulario.repeat.addEventListener('change',cambioRepeat);
    
    formulario.attachment.addEventListener('change',cambioAttachment);
    
    formulario.size.addEventListener('change',cambioSize);
    
    formulario.origin.addEventListener('change',cambioOrigin);
    
    formulario.clip.addEventListener('change',cambioClip);
    
    formulario.reset.addEventListener('click',inicio);
    
    deshabilitado();
  
    radio[0].addEventListener('click',background_position_keyword);
    
    radio[1].addEventListener('click',background_position_positionXY);
  
    radio[2].addEventListener('click',background_position_positionPX);
    
    radio[3].addEventListener('click',function(){deshabilitado();solucion.style.backgroundPosition = 'initial'});
    
    radio[4].addEventListener('click',function(){deshabilitado();solucion.style.backgroundPosition = 'inherit'});
    
    function background_position_keyword(){
     
     formulario.position_keyword.disabled = false;
        
     formulario.positionX.disabled = true;
    
     formulario.positionY.disabled = true;
    
     formulario.positionX_px.disabled = true;
    
     formulario.positionY_px.disabled = true;
        
     formulario.position_keyword.addEventListener('change',cambiarPositionKeyword);
        
        function cambiarPositionKeyword(){
            
            solucion.style.backgroundPosition = 'none';
            
            solucion.style.backgroundPosition = 'none';
            
            if (elementos['position_keyword'].options[1].selected){
                
                solucion.style.backgroundPosition = 'left top'; 
                
            }else if (elementos['position_keyword'].options[2].selected){
                
                solucion.style.backgroundPosition = 'left center';
                
            }else if (elementos['position_keyword'].options[3].selected){
                
                solucion.style.backgroundPosition = 'left bottom';
                
            }else if (elementos['position_keyword'].options[4].selected){
                
                solucion.style.backgroundPosition = 'right top';
                
            }else if (elementos['position_keyword'].options[5].selected){
                
                solucion.style.backgroundPosition = 'right center';
                
            }else if (elementos['position_keyword'].options[6].selected){
                
                solucion.style.backgroundPosition = 'right bottom';
                
            }else if (elementos['position_keyword'].options[7].selected){
                
                solucion.style.backgroundPosition = 'center top';
                
            }else if (elementos['position_keyword'].options[8].selected){
                
                solucion.style.backgroundPosition = 'center center';
                
            }else if (elementos['position_keyword'].options[1].selected){
                
                solucion.style.backgroundPosition = 'center bottom';
                
            }else{
                
                solucion.style.backgroundPosition = 'none';
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
        }
    
    function cambioImagen(){
        
        if (formulario.file.options[1].selected){
            
        solucion.style.backgroundImage = "url( 'http://lorempixel.com/100/100')";
            
        solucion.style.backgroundAttachment = 'scroll';
            
        }
        else if (formulario.file.options[2].selected){
            
            solucion.style.backgroundImage ="url( 'http://lorempixel.com/200/200')"; 
            
        }else if (formulario.file.options[3].selected){
            
            solucion.style.backgroundImage = "url( 'http://lorempixel.com/300/300')";
            
        }else if (formulario.file.options[4].selected){
            
            solucion.style.backgroundImage ="url( 'http://lorempixel.com/400/400')";
            
        }else if (formulario.file.options[5].selected){
            
            solucion.style.backgroundImage ="url( 'http://lorempixel.com/500/500')";
            
        }else if (formulario.file.options[6].selected){
            
            solucion.style.backgroundImage ="url( 'http://lorempixel.com/600/600')";
            
        }else if (formulario.file.options[7].selected){
            
            solucion.style.backgroundImage ="url( 'http://lorempixel.com/700/700')";
        }else{
            
            solucion.style.backgroundImage = 'none';
            
        }
        
    }
    
    function cambioRepeat(){
        
        if (formulario.repeat.options[1].selected){
            
            solucion.style.backgroundRepeat = 'repeat';
            
        }else if (formulario.repeat.options[2].selected){
            
            solucion.style.backgroundRepeat = 'repeat-x';
            
        }else if (formulario.repeat.options[3].selected){
            
            solucion.style.backgroundRepeat = 'repeat-y';
            
        }else if (formulario.repeat.options[4].selected){
            
            solucion.style.backgroundRepeat = 'no-repeat';
        }else if (formulario.repeat.options[5].selected){
            
            solucion.style.backgroundRepeat = 'inherit';
            
        }else{
            
            solucion.style.backgroundRepeat = '';
            
        }
        
    }
     
    function cambioAttachment(){
        
        if (formulario.attachment.options[1].selected){
    
            solucion.style.backgroundAttachment = "scroll";
            
        }else if(formulario.attachment.options[2].selected){
            
            solucion.style.backgroundAttachment = 'fixed';
            
        }else if(formulario.attachment.options[3].selected){
            
            solucion.style.backgroundAttachment = 'local';
        }else if (formulario.attachment.options[3].selected){
            
            solucion.style.backgroundAttachment = 'inherit';
            
        }else{
            
            solucion.style.backgroundAttachment = 'none';
            
        }
    }
    
    function cambioSize(){
        
        if (formulario.size.options[1].selected){
            
            solucion.style.backgroundSize = 'auto';
            
        }else if(formulario.size.options[2].selected){
            
            solucion.style.backgroundSize = 'cover';
        }
        else if(formulario.size.options[3].selected){
            
            solucion.style.backgroundSize = 'contain';
            
        }else{
            
            solucion.style.backgroundSize = 'none';
            
        }
        
    }
    
    function cambioOrigin(){
        
       if (formulario.origin.options[1].selected){
           
            solucion.style.backgroundOrigin = 'border-box';
           
        }else if(formulario.origin.options[2].selected){
            
            solucion.style.backgroundOrigin = 'padding-box';
            
        }
        
        else if(formulario.origin.options[3].selected){
            
            solucion.style.backgroundOrigin = 'content-box';
            
        }else if(formulario.origin.options[4].selected){
            
            solucion.style.backgroundOrigin = 'inherit';
            
        }else{
            
            solucion.style.backgroundOrigin = 'padding-box';
            
        } 
        
    }
    
    function cambioClip(){
        
       if (formulario.clip.options[1].selected){
           
            solucion.style.backgroundClip = 'border-box';
           
        }else if(formulario.clip.options[2].selected){
            
            solucion.style.backgroundClip = 'padding-box';
            
        }
        
        else if(formulario.clip.options[3].selected){
            
            solucion.style.backgroundClip = 'content-box';
            
        }else if(formulario.clip.options[4].selected){
            
            solucion.style.backgroundClip = 'inherit';
            
        }else{
            
            solucion.style.backgroundClip = 'padding-box';
            
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
        
    }
    
}