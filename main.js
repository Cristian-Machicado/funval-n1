console.log("Hola a todos!");
console.log(3 + 2);
console.log(3 - 2);
console.log(3 / 2);
console.log(24 % 2);
console.log(3 * 2);
console.log(3 ** 2);
console.log(3 ** 4);

console.log(true);
console.log(false)

console.log(5 > 1);
console.log(5 < 1);
console.log("hola" == "hola")//comparacion
console.log("hola" === "hola") //comparacion estricta

console.log(2 == "2")
console.log(2 === "2")

//Variables
// let // varian su valor
// var // varian su valor
// const // No varian su valor
// var nombre = "Diego"
// const pi = 3.1415

/* 
variebles simples: "" , -23.3 , true, false,
[123,"def", true],
{
    nombre: "Diego"
    edad: 26,´
    peliculas_favoritas:["avengers:endgame", "el caballero de la noche"]
}
*/
/*    
    NaN = no es un numero (cuando una realiza un aopreacion entre dos tipos de datos que no son numero)
    l   let edad=36;
        let edadEnCincoAños = edad + 5;
        console.log(edadEnCincoAños - nombre) 
        let ciudad;
        console.log(ciudad);

        ciudad = "Arequipa";
*/

/*
&&(y) - ||(o)*/
let edad = 36
let ciudad = "Arequipa";
console.log(ciudad);
console.log(5 < 10 && 5 > 4); // esto si todo es verdadero saldra todo verdadero
console.log(5 < 10 || 5 < 4);

if (edad > 20 || ciudad === "arequipa" )  {
    console.log("hola");
}


// alert("Esta es una alerta") //me permite enviar mensaje de alerta en la pantalla
// prompt("Esta es un alerta")// es similar al alert pero este me permite recibir mensaje del usuario