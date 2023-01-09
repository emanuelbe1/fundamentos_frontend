
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