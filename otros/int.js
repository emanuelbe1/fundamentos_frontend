/*
document.getElementById("boton_ocultar2").addEventListener('click', function() {
    if(document.getElementById('exp2').style.display == 'none'){
        document.getElementById('exp2').style.display = 'initial';
        document.getElementById('boton_ocultar2').innerHTML = 'Ocultar'
        ;
    } else {
        document.getElementById('exp2').style.display = 'none';
        document.getElementById('boton_ocultar2').innerHTML = 'Mostrar detalles'
    };
});



<script type="text/javascript">
    function cambiarHojaEstilo(pagesheet){
        document.getElementById('pagestyle').setAttribute('href', pagesheet);
        document.getElementById('headstyle').setAttribute('href',headsheet);
    }
</script>*/

document.getElementById("b_modo").addEventListener('click', function(){
    if(document.getElementById('estilo').getAttribute('href') == "css/light.css" ){
        document.getElementById('estilo').setAttribute('href', "css/dark.css");
        document.getElementById('b_modo').innerHTML = 'Cambiar al modo claro';
        console.log("Se cambio al modo oscuro");
    }else{
        document.getElementById('estilo').setAttribute('href', "css/light.css");
        document.getElementById('b_modo').innerHTML = 'Cambiar al modo oscuro';
        console.log("Se cambio al modo claro.");
    }
});