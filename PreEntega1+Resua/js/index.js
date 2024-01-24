let nombreDeUsuario = prompt("Ingresa nombre de usuario");
let contrasena = prompt("ingresa tu contraseña");

if (nombreDeUsuario === "Alumno" && (contrasena === "123456" || contrasena === "000000")){
    console.log("Permitir acceso");
}else{
    console.log("Acceso denegado");
}


function comprobarEdad (){
    const EDAD = parseInt(prompt("Ingresar edad"));
    if(EDAD >= 18){
        return"Es mayor de edad."
    }else{
        return "No es mayor de edad."
    }
}
const resultadoEdad = comprobarEdad();

console.log(resultadoEdad);

const COTIZACION_DOLAR = 850;
const COTIZACION_EUROS= 950
const cotizarDolar = (pesos) => pesos / COTIZACION_DOLAR;
const cotizarPesosDolar = (dolar) => dolar * COTIZACION_DOLAR;
const cotizarEuro = (pesos) => pesos / COTIZACION_EUROS;
const cotizarPesosEuro = (euro) => euro * COTIZACION_EUROS;
let seleccion = prompt("SELECCIONAR COTIZACION \n 1 - DOLARES A PESOS \n 2 -  PESOS A DOLAR \n 3 - EUROS A PESOS \n 4 -  PESOS A EURO");
let valor = prompt("VALOR");
switch (seleccion) {
    case "1":
        alert(cotizarPesosDolar(valor));
        break;
    case "2":
        alert(cotizarDolar(valor));
        break;
        case "3":
        alert(cotizarPesosEuro(valor));
        break;
        case "4":
        alert(cotizarEuro(valor));
        break;
    default:
        break;
}


