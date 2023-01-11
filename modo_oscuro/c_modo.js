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


document.getElementById("b_modo").addEventListener('click', function(){
    if(document.getElementById('estilo').getAttribute('href') == "css/m_claro.css" ){
        document.getElementById('estilo').setAttribute('href', "css/m_oscuro.css");
        console.log("se cambio al modo oscuro")
    }else{
        document.getElementById('estilo').setAttribute('href', "css/m_claro.css");
        console.log("Se cambio al modo claro.");
    }
});
