const cronometro = document.querySelector('h3');

const pausa = document.getElementById('pausa');
const iniciar = document.getElementById('iniciar');
const resetear = document.getElementById('resetear');

let segundos = 0;
let minutos = 0;

// Intervalo que se ejecuatara cada segundos una vez que lo iniciemos
const intervaloCronometro = () => {
    segundos++;
    cronometro.innerHTML = (segundos < 10) ? `${minutos}:0${segundos}` : `${minutos}:${segundos}`;

    if (segundos === 60) {
        segundos = 0;
        minutos++;
        cronometro.innerHTML = (segundos < 10) ? `${minutos}:0${segundos}` : `${minutos}:${segundos}`;
    }
}

// Funcion que inica el cronometro cuando pulsamos el boton 
const iniciarCronometro = () => {
    const intervalo = setInterval(intervaloCronometro,1000);
    iniciar.disabled = true;  // Desactivamos el boton play una vez que lo iniciamos
    
    pausa.addEventListener('click',() => {
        iniciar.disabled = false;
        clearInterval(intervalo);
    });

    resetear.addEventListener('click',() => {
        iniciar.disabled = false;
        segundos = 0;
        minutos = 0;
        cronometro.innerHTML = `0:00`;
        clearInterval(intervalo);
    });
}

iniciar.addEventListener('click',iniciarCronometro);