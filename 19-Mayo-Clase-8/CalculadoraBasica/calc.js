
const botonAll = document.querySelectorAll("#bot-1");

let operacion = String("Blanco");

botonAll.forEach(button=> {
    button.addEventListener("click", () => {

     operacion = String(button.textContent);

    console.log("Se hizo clic en el botón - Fuera if:", operacion);
    
    if(operacion == "Resta"){
        console.log("Se hizo clic en el botón  resta - Paso");
        resta();
    }else if(operacion =="Suma"){
        console.log("Se hizo clic en el botón suma- Paso");
        suma();
    }else if(operacion == "Multiplicación"){
        console.log("Se hizo clic en el botón Multiplicación- Paso");
        multiplica();
    }else if(operacion == "División"){
        console.log("Se hizo clic en el botón División- Paso");
        divide();
    }else{
            console.log("Se hizo clic en el botón raiz cuadrada - Paso");
        raiz();   
         };

    });
});

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
    
    console.log("El numero 1 de la Resta es", n1);
    console.log("El numero 2 dela Resta es", n2);

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

    let resultadoR1 = Math.sqrt(n1);
    let resultadoR2 = Math.sqrt(n2);
    
    
    console.log("El resultado del número 1, es :", resultadoR1,"El resultado del número 2, es: ", resultadoR2);

    document.getElementById("salida").textContent = "La raiz cuadrada de: "+ n1  + " es: " + resultadoR1
    + " y la raiz cuadrada de: "+ n2  + " es: " + resultadoR2;

    console.log("!Felicidades¡... La raiz cuadrada finalizó exitosamente")

}
