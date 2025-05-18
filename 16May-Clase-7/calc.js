function suma(){
    let n1 = Number(document.getElementsByName("Numero 1")[0].value);
    let n2 = Number(document.getElementsByName("Numero 2")[0].value);

    console.log("El numero 1 es", n1);
    console.log("El numero 2 es", n2);

    let resultado = n1 + n2;
    
    console.log("El resultado es", resultado);

    document.getElementById("salida").textContent = "Resultado de la suma es: " + resultado;
    console.log("!Felicidades¡... La suma finalizó exitosamente")
}

const resta = () => {

    let n1 = Number(document.getElementsByName("Numero 1")[0].value);
    let n2 = Number(document.getElementsByName("Numero 2")[0].value);
    
    console.log("El numero 1 es", n1);
    console.log("El numero 2 es", n2);

    let resultado = n1 - n2;
    console.log("El resultado es", resultado);

    document.getElementById("salida").textContent = "Resultado de la resta es: " + resultado;
    console.log("!Felicidades¡... La resta finalizó exitosamente")
}
//
//
function multiplica(){
    let n1 = Number(document.getElementsByName("Numero 1")[0].value);
    let n2 = Number(document.getElementsByName("Numero 2")[0].value);

    console.log("El numero 1 es", n1);
    console.log("El numero 2 es", n2);

    let resultado = n1 * n2;
    
    console.log("El resultado es", resultado);

    document.getElementById("salida").textContent = "Resultado de la multiplicación es: " + resultado;
    console.log("!Felicidades¡... La multiplicación finalizó exitosamente")
}

const divide = () => {

    let n1 = Number(document.getElementsByName("Numero 1")[0].value);
    let n2 = Number(document.getElementsByName("Numero 2")[0].value);
    
    console.log("El numero 1 es", n1);
    console.log("El numero 2 es", n2);

    let resultado = n1 / n2;
    console.log("El resultado es", resultado);

    document.getElementById("salida").textContent = "Resultado de la división es: " + resultado;
    console.log("!Felicidades¡... La división finalizó exitosamente")
}

function raiz(){
    let n1 = Number(document.getElementsByName("Numero 1")[0].value);
    let n2 = Number(document.getElementsByName("Numero 2")[0].value);

    console.log("El numero 1 es", n1);
    console.log("El numero 2 es", n2);

    let resultado = Math.sqrt(n1);
    let resultado1 = Math.sqrt(n2);
    
    
    console.log("El resultado es", resultado);

    document.getElementById("salida").textContent = "Resultado: la raiz cuadrada de: "+ n1  + " es: " + resultado 
    + " y de: "+ n2  + " es: " + resultado1;
    console.log("!Felicidades¡... La raiz cuadrada finalizó exitosamente")
}
