document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('nav ul li');

    // Mostrar la hora actual en formato 12 horas (AM/PM)
    mostrarHoraActual();
    
    function mostrarExito(mensaje) {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `<p>${mensaje}</p>`;
    }

    function mostrarHoraActual() {
        const resultadoDiv = document.getElementById('hora-actual');
        const fecha = new Date();
        let hora = fecha.getHours();
        const minutos = fecha.getMinutes();
        const segundos = fecha.getSeconds();
        let periodo = "AM"; // Inicialmente AM

        // Convertir a formato de 12 horas
        if (hora >= 12) {
            periodo = "PM";
            if (hora > 12) {
                hora -= 12;
            }
        }

        // Ajustar la hora si es 0 AM
        if (hora === 0) {
            hora = 12;
        }

        resultadoDiv.innerHTML = `Hora actual: ${hora}:${minutos}:${segundos} ${periodo}`;
    }

    // Actualizar la hora cada segundo
    setInterval(mostrarHoraActual, 1000);
});



let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})


