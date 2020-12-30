//Crear una función expresada que al recibir un numero como parametro imprimima por consola “El número es par” si lo es, o “El número es impar” si no lo es. En el caso que el numero fuese 0 mostrar un mensaje de error. Se debe incluir un if ternario en script.

let parImpar = function (num) {
    if (num==0) {
        console.log('Error');
        
    } else {
        num % 2 == 0 ? console.log('El número es par') : console.log('El número es impar')
    }    
        
}

parImpar(0)