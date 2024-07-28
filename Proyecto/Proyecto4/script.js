// Declara aqui tus variables
let mario = document.querySelector(".mario");
let moneda = document.querySelector(".moneda");



/* Problema 1:Cuando se presione el botón "Saltar", Mario debe subir 
hasta donde esta la moneda, y esta debe desaparecer */
let botonSaltar = document.querySelector(".Saltar");
botonSaltar.onclick = function () {
  let posicionActual =  120;
  const limiteSaltar = 130; 

  // Calcular la nueva posición
  let nuevaPosicion = posicionActual;
  if (nuevaPosicion <= limiteSaltar) {
    mario.style.bottom = nuevaPosicion + "px"; // Actualizar la posición
 moneda.style.visibility = "hidden"
  }
};

/*Problema 2 : Cuando se presione de nuevo el boton "Bajar" Mario baja al nivel del suelo de nuevo */
let botonBajar = document.querySelector(".bajar");
botonBajar.onclick = function () {
  let posicionActual =  35;
  const limiteBajar = 25; 

  // Calcular la nueva posición
  let nuevaPosicion = posicionActual;
  if (nuevaPosicion >= limiteBajar) {
    mario.style.bottom = nuevaPosicion + "px"; // Actualizar la posición
  }
};

// 3: Cuando el botón "Cambiar el color" es presionado, el color de fondo cambia
let botoncolor= document.querySelector(".cambiar-color")
botoncolor.onclick = function (){
document.body.style.background= "cyan";  
}
// 4: Cuando el botón "Finalizar juego" es presionado, el título de la página dice "Game over"
let botonfinalizar = document.querySelector(".finalizar")
botonfinalizar.onclick = function (){
 let final = document.querySelector("h1");
 final.innerHTML = "Game over"
}
// 5: Cuando el botón "Actualizar Puntaje" es presionado, el contador de puntuación se establece en "1" en lugar de 0
let puntaje = document.querySelector(".actualizar-puntaje")
puntaje.onclick = function (){
let puntaje = document.querySelector(".score")
puntaje.innerHTML = "1";
}
// 6: Cuando el botón "Crecer" es presionado, la imagen de Mario se debe hacer más grande.
let botoncrecer = document.querySelector(".crecer");
botoncrecer.onclick = function (){
  let posicionActual = parseInt(mario.style.height) || 75;
  const cantidadPixelesPorPaso = 10;
  const limiteCrecer = 100;

  let nuevaPosicion = posicionActual + cantidadPixelesPorPaso;
  if (nuevaPosicion <= limiteCrecer) {
    mario.style.height = nuevaPosicion + "px";
  }
}
//7: Ya el boton de mover a la derecha esta hecho. Haz ahora uno para que se mueva a la izquierda.
let botonDerecha = document.querySelector(".derecha");
botonDerecha.onclick = function () {
  let posicionActual = parseInt(mario.style.left) || 75; // Obtener la posición actual (si no la consigue empienza en 75)
  const cantidadPixelesPorPaso = 10; // Cantidad de píxeles a mover
  const limiteDerecha = 700; // 700px es lo maximo que se va a mover para que no se salga de la pantalla

  // Calcular la nueva posición
  let nuevaPosicion = posicionActual + cantidadPixelesPorPaso;
  if (nuevaPosicion <= limiteDerecha) {
    mario.style.left = nuevaPosicion + "px"; // Actualizar la posición
  }
};

// Haz aqui el boton de mover a la izquierda
let botonIzquierda = document.querySelector(".Izquierda");
botonIzquierda.onclick = function () {
  let posicionActual = parseInt(mario.style.left) || 75;
  const cantidadPixelesPorPaso = 10;
  const limiteIzquierda = -15; 

  // Calcular la nueva posición
  let nuevaPosicion = posicionActual - cantidadPixelesPorPaso;
  if (nuevaPosicion >= limiteIzquierda) {
    mario.style.left = nuevaPosicion + "px"; // Actualizar la posición
  }
};

