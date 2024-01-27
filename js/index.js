let nombreDeUsuario = prompt("Ingresa nombre de usuario");
let contrasena = prompt("ingresa tu contraseña");

if (nombreDeUsuario === "Nombre" && (contrasena === "123456" || contrasena === "000000")){
    console.log("Permitir acceso. Hola, bienvenido.");
}else{
    console.log("Olvidaste la contraseña o no estas registrado");
}


function comprobarEdad (){
    const EDAD = parseInt(prompt("Ingresar edad"));
    if(EDAD >= 18){
        const COTIZACION_DOLAR = 850;
        const COTIZACION_EUROS = 950
        const PESO_DOLAR = (pesos) => pesos / COTIZACION_DOLAR;
        const DOLAR_PESO = (dolar) => dolar * COTIZACION_DOLAR;
        const PESO_EURO = (pesos) => pesos / COTIZACION_EUROS;
        const EURO_PESO = (euro) => euro * COTIZACION_EUROS;
        let seleccion = prompt("SELECCIONAR COTIZACION \n 1 - PESOS A DOLAR \n 2 -  DOLARES A PESOS \n 3 - PESOS A EURO \n 4 -  EUROS A PESOS");
        let valor = prompt("VALOR");
            switch (seleccion) {
            case "1":
                console.log("La cotizacion es: "+ valor + " peso argentino, es " + PESO_DOLAR(valor)+ " dolares.");
            break;
            case "2":
                console.log("La cotizacion es: "+ valor + " dolar, es " + DOLAR_PESO(valor)+ "  pesos argentinos.");
            break;
            case "3":
                console.log("La cotizacion es: "+ valor + " peso argentino, es " + PESO_EURO(valor)+ " euros.");
            break;
            case "4":
                console.log("La cotizacion es: "+ valor + " euro, es " + EURO_PESO(valor)+ "  pesos argentinos.");
            break;
            default:
                console.log("No se pudo realizar la cotizacion");
            }
        return"Gracias por utilizar el conversor de divisas."
        }else{
        return "No es mayor de edad."
    }
}
const resultadoEdad = comprobarEdad();

console.log(resultadoEdad);


