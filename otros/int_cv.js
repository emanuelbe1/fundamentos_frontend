/**document.getElementById("boton").onclick = function(){
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS";
}*/
//Al evento, agregarle un evento listener. Se puede conocer más eventos en
//HTML DOM event w3schools.

/*document.addEventListener('click', function(){
    console.log("Hola desde EventListener");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS";
});*/

document.getElementById("boton_color_r").addEventListener('click', function() {
    console.log("Capturamos el evento click para cambiar el fondo");
    document.body.style.backgroundColor = 'rgb(75, 118, 217)';
});//explicación: cuando haya un click en el boton color, se va a cambiar el fondo

document.getElementById("boton_color_l").addEventListener('click', function() {
    console.log("Capturamos el evento click para cambiar el fondo a lightsteel blue");
    document.body.style.backgroundColor = '#D1C7C5';
});

document.getElementById("boton_default").addEventListener('click', function() {
    console.log("Capturamos el evento click para cambiar el fondo a default");
    document.body.style.backgroundColor = 'wheat';
});


document.getElementById("boton_ocultar1").addEventListener('click', function() {
    if(document.getElementById('exp1').style.display == 'none'){
        document.getElementById('exp1').style.display = 'initial';
        document.getElementById('boton_ocultar1').innerHTML = 'Ocultar'
        ;
    } else {
        document.getElementById('exp1').style.display = 'none';
        document.getElementById('boton_ocultar').innerHTML = 'Mostrar'
    };
});

document.getElementById("boton_ocultar2").addEventListener('click', function() {
    if(document.getElementById('exp2').style.display == 'none'){
        document.getElementById('exp2').style.display = 'initial';
        document.getElementById('boton_ocultar2').innerHTML = 'Ocultar'
        ;
    } else {
        document.getElementById('exp2').style.display = 'none';
        document.getElementById('boton_ocultar').innerHTML = 'Mostrar'
    };
});