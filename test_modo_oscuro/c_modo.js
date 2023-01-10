/*document.getElementById('pagestyle').setAttribute('href', pagesheet)
/*document.getElementById("b_modo").addEventListener('click', function() {
    if(document.getElementById('exp2').style.display == 'none'){
        document.getElementById('exp2').style.display = 'initial';
        document.getElementById('boton_ocultar2').innerHTML = 'Ocultar'
        ;
    } else {
        document.getElementById('exp2').style.display = 'none';
        document.getElementById('boton_ocultar2').innerHTML = 'Mostrar detalles'
    };
});*/


document.getElementById("b_modo").addEventListener('click', function() {
    if(document.getElementById('estilo').getAttribute('href') == "m_oscuro.css" ){
        document.getElementById('estilo').setAttribute('href', "m_claro.css");
    }else{
        document.getElementById('estilo').setAttribute('href', "m_oscuro.css");
        console.log("Se cambio al color oscuro.");
    }
});
