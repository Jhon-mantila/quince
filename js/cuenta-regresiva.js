simplyCountdown('.simply-countdown', {
    year: 2024, // required
        month: 12, // required
        day: 14, // required
        hours: 8, // Default is 0 [0-23] integer
        minutes: 0, // Default is 0 [0-59] integer
        seconds: 0, // Default is 0 [0-59] integer
        words: { //words displayed into the countdown
            days: { singular: 'día', plural: 'días' },
            hours: { singular: 'hora', plural: 'horas' },
            minutes: { singular: 'minuto', plural: 'minutos' },
            seconds: { singular: 'segundos', plural: 'segundos' }
        },

});

puntos('.simply-days-section');
puntos('.simply-hours-section');
puntos('.simply-minutes-section');

function puntos(clase){

    const puntos = document.createElement('spam');
    puntos.classList.add('puntos');
    
        const cartelPunto1 = document.createElement('spam');
        cartelPunto1.classList.add('cartelPunto');

        const cartelPunto2 = document.createElement('spam');
        cartelPunto2.classList.add('cartelPunto');

    puntos.append(cartelPunto1, cartelPunto2);

    const cartelDias = document.querySelector(clase);
    cartelDias.append(puntos);

}
