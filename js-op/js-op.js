// El programa pedira al usuario la medida de un lado del cuadrado y mostrara el resultado por una alerta
// crear las variables, pedir los datos con prompts y almacenar las variables y luego hacer operacion. Al final mostrar con "alert()" el resultado
/*
 MI SOLICION
let lado1 = 5
prompt("Introdusca el lado2 del cuadrado")
let lado2 = prompt
console.log(lado1 * lado2);
*/
//SOLUCION MAESTRO
/*alert("Saludos");
let lado;
let area;

lado = prompt("Ingrese el lado: ")
area = lado ** 2
alert("El area del cuadrado con lado "+lado+" es "+area)
*/

// // convertir el string a numero
// alert("Saludos");
// let lado;
// let area;
// lado = prompt("Ingrese el lado: ")
// console.log(typeof lado);
// lado = parseFloat(lado) // esto lo trasforma el string lado en decimales
// // lado = parseInt //Serviria para cuando solo queramos usar enteros
// area = lado ** 2
// alert("El area del cuadrado con lado " + lado + " es " + area)

/*
ATM
Vamos a crear un programa que simule la interacion con un ATM
este debe tener la posibilidad de hacer la siguentes operaciones
-Depositar
-Retirar
-Ver Saldo
-Pâgar servicios

usar
-declaracion de variables
-Usar "prompt()" para pedir datos
-usar "alert()" para datos o  mensajes
-usar Condicionales (if y else)
-opcional (swich case)
*/
alert("Bienvenido");
let idioma = prompt("Seleccione el idioma: \n 1-Español \n 2-English\n 3- o Ingrese otro idioma ");
if (idioma === "1") {
    console.log("Modo español activado")
} else if(idioma === "2"){
    console.log("English Mode")
} else {
    console.log(idioma)
}

let operacion = prompt("Que desea hacer\n1-Deposito\n2-Retiro\n3-ConsultaSaldo\n4-Pagos")



if (operacion === "1") {
    console.log("selecciono Deposito")
} else if (operacion === "2") {
    console.log("selecciono Retiro")
} else if (operacion === "3") {
    console.log("selecciono Ver Saldo")
} else if (operacion === "4") {
    console.log("selecciono Pagos")
} else {
    console.log("selecciono una opcion invalida")
}
