function saludo() {
    var nombre = prompt("¿Cúal es tu nombre?");
    console.log("Hola" + " " + nombre);
}
saludo(); //saludar

function sumar(a,b){
    var resultado = a+b; //variable local
    return resultado;
}
function sumar2(a,b){
    return a + b;
}
sumar(5,20);