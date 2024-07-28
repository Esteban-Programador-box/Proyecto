function mostrarResultado(resultado){    
    document.querySelector(".resultado").style.color = "black";
    document.querySelector(".resultado").innerHTML = resultado;
}

function mensajeError(mensaje){    
    document.querySelector(".resultado").style.color = "red";
    document.querySelector(".resultado").innerHTML = mensaje;
    
}

//Declara tus funciones aquí
function Sumar (num1, num2){
let suma = num1+num2;
return suma;    
}


function Restar (num1, num2){
let resta=  num1-num2;
return resta;    
}

function Multiplicar (num1, num2){
let multiplica = num1*num2;    
return multiplica;    
}    

function Dividir (num1, num2){   
let divide = num1/num2;    
return divide;
}

// Boton sumar
document.querySelector(".sumar-boton").addEventListener('click', function(){    
    //Obtenemos lo que el usuario ingresó en el input
    let numeroA = Number(document.querySelector(".primer-numero").value);
    let numeroB = Number(document.querySelector(".segundo-numero").value);
  	if (isNaN(numeroA) || isNaN(numeroB)){ 
    let error = "Ingrese un numero valido";    
    mensajeError(error);
    }else{
    let resultado = Sumar (numeroA, numeroB);
    mostrarResultado(resultado);  
    }    
    
      
});

// Boton restar
document.querySelector(".restar-boton").addEventListener('click', function(){    
    //Obtenemos lo que el usuario ingresó en el input
    let numeroA = Number(document.querySelector(".primer-numero").value);
    let numeroB = Number(document.querySelector(".segundo-numero").value);
  	if (isNaN(numeroA) || isNaN(numeroB)){ 
   let error = "Ingrese un numero valido";    
    mensajeError(error);
    }else{
      let resultado = Restar (numeroA, numeroB);
    mostrarResultado(resultado);    
    } 
   
});

// Boton multiplicar
document.querySelector(".multiplicar-boton").addEventListener('click', function(){    
    //Obtenemos lo que el usuario ingresó en el input
    let numeroA = Number(document.querySelector(".primer-numero").value);
    let numeroB = Number(document.querySelector(".segundo-numero").value);
  	if (isNaN(numeroA) || isNaN(numeroB)){ 
     let error = "Ingrese un numero valido";    
    mensajeError(error);
    }else{
   
    let resultado = Multiplicar (numeroA, numeroB);
    mostrarResultado(resultado);    
    } 
    
    
});

// Boton dividir
document.querySelector(".dividir-boton").addEventListener('click', function(){    
    //Obtenemos lo que el usuario ingresó en el input
    let numeroA = Number(document.querySelector(".primer-numero").value);
    let numeroB = Number(document.querySelector(".segundo-numero").value);
    if (numeroB === 0){
     let errord = "El divisor no puede ser 0";
     mensajeError(errord);
    }else if((isNaN(numeroA) || isNaN(numeroB))){ 
      let error = "Ingrese un numero valido";    
    mensajeError(error);      
    }else{
    
     let resultado = Dividir (numeroA, numeroB);
    mostrarResultado(resultado);    
    } 
    
});
