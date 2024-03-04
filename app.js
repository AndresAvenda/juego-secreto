
let = numeroSecreto = 0;
let intentos = 0;
console.log(numeroSecreto);
let lista = [];
let numMaximo = 5;

document.getElementById("intentar").disabled = false;


function elementosHtml(elemento, texto){
    let elementoFun = document.querySelector(elemento);
    elementoFun.innerHTML = texto;
}

function clickButton(){
    intentos++;
    let elementoInput = parseInt(document.getElementById("numeroUsuario").value);

    limpiarCaja();
    if(elementoInput === numeroSecreto){  
        //se habilita el boton cuando ya acerto el numero
        document.getElementById("intentar").setAttribute("disabled", "false");
        elementosHtml("p",  `Acertaste el numero en  ${intentos} ${(intentos===1) ? " vez." : " veces."}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else {
        
        if(elementoInput > numeroSecreto){
            elementosHtml("p", "El numero es menor");
        }else{
            elementosHtml("p", "El numero es mayor");
        }
    }
    console.log(elementoInput == numeroSecreto);
    console.log(intentos);
    
}

function numeroAleatorio(){
    let numAle =  Math.floor(Math.random()*numMaximo+1);
    console.log(numAle);
    console.log(lista);

    if(lista.length==numMaximo){
        elementosHtml("p", "SE ACABARON LOS INTENTOS PA")
    }
    else{
        if(lista.includes(numAle)){
            return numeroAleatorio();
        }else{
            lista.push(numAle);
            return numAle;
        }
    }
   
}

function parametrosIniciales(){
    elementosHtml("h1", "Juego Secreto!");
    elementosHtml("p", "Escoge un numero del 1 al 10");
    numeroSecreto = numeroAleatorio();

    
}

function limpiarCaja(){
    document.getElementById("numeroUsuario").value = " ";
}

function reiniciarJuego(){
    document.getElementById("intentar").disabled = false;
    limpiarCaja();
    parametrosIniciales();
    intentos = 1;
    // Habilitar boton
    document.getElementById("reiniciar").setAttribute("disabled", "true");
    
}

    




parametrosIniciales();

