
var miVariable; //variable: cambie a lo largo de la ejecución
let nombre;
const IVA = 1.21; /*para la constante, a diferencia de la variable,
su valor no se ve afectado en toda la ejecución del programa.
*/-Cambiar valor de una variable.
var varNombre = "Emanuel";
var varNombre = "Pedro"; //
//se agregaron las palabras reservadas let y const,
//pero se puede continuar usando var

const precio1 = 5;
const precio2 = 10;
let totalpre = precio1 + precio2;

/*el nombre de las variables deben ser identificadores unicos.
No se puede usar: 
-Números,
-caracteres especiales,
-palabras reservadas.
Se debe hacer con:
- Guion bajo,
- signo dolar,
- cualquier palabra que no rompa las dos reglas.
*/
/*2-El comentario debe explicar por qué se esta tomando está decisión,
ya que, por ejemplo, si un desarrollador ve este codigo, y el comentario es
algo cómo "Evalua si es verdadero", este ya va a saber qué hace el codigo,
por lo que no va a ser un comentario util para él.*/
if (1+1 == 2){
    console.log("La condición es verdadera");
}//"Evalua si es verdadero"