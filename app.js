const BotonNmero = document.getElementsByName("data-number");
const BotonOpera = document.getElementsByName("data-opera");
const BotonIgual = document.getElementsByName("data-igual")[0]; 
const BotonDelete = document.getElementsByName("data-delete")[0];   

let resul = document.getElementById('result');
let openActual = ''; 
let openAnterior = '';
let operacion = undefined;

BotonNmero.forEach(function(boton){
    boton.addEventListener("click", function(){
        agregarNumero(boton.innerText);
    });
});

BotonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
        });
 
});

BotonDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});

BotonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

function agregarNumero(num){
    openActual = openActual.toString() + num.toString();
    actualizarDisplay();
}

function actualizarDisplay(){
    resul.value= openActual;
}

function selectOperacion(op){
    if(openActual === '')return;
    if(openAnterior !== ''){
        calcular();
    }
    operacion = op.toString();
    openAnterior = openActual;
    openActual = '';
}

function calcular(){
    let calculo;
    const anterior = parseFloat(openAnterior);
    const actual = parseFloat(openActual);
    if(isNaN(anterior) || isNaN(actual))return;
    switch (operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;            
        case '%':
            calculo = (anterior * actual)/100;
            break;
        case '√' :
            calculo = Math.sqrt (anterior);
            break;


       case 'sin' :
       calculo = Math.sin(anterior);
            break;
        default:
            return;    
    }
    openActual =calculo;
    operacion = undefined;
    openAnterior = '';

}

function clear(){
    openActual = '';
    openAnterior = '';
    operacion = undefined;
}

clear();