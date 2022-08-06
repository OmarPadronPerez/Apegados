var divRegla=document.getElementById('ins_regla');
var telefono="4442780457";
var mensaje="Hola,%20me%20interesa%20la%20salud%20de%20mi%20bebé%20<3";
/*var contenido='<div class="row" id="regla">';
var content = document.createTextNode('<div class="row" id="regla"><div class="col-1">1</div></div>');

   /* for(var i=0;i<12;i++){
         contenido+='<div class="col-1">'+ (i+1) +'</div>';
        //contenido+='<div class="col-1">' &i+1& '</div>';
    }
    contenido+='</div>';
    console.log(contenido);

    divRegla.insertAdjacentHTML('beforeend',contenido);*/

function llamarWhats(){
    console.log('llamar al guasap');
    window.location.href ="https://wa.me/152"+telefono+"?text="+mensaje;
    

}
function llamarTelefono(){
    console.log('llamar al telefono');
    window.location.href ="tel:"+telefono;
    
}
