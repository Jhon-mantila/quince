// Detecta si un elemento está en la ventana visible
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Añade la clase 'active' si el evento está en la ventana visible
function activateTimelineEvents() {
    const events = document.querySelectorAll('.timeline-event');
    const timelineLine = document.querySelector('.timeline-line');

    let lastActiveIndex = -1;

    events.forEach((event, index) => {
        if (isInViewport(event)) {
            event.classList.add('active');
            lastActiveIndex = index;
        } else {
            event.classList.remove('active');
        }
    });

    // Ajusta la altura de la línea en base al último evento visible
    if (lastActiveIndex >= 0) {
        const lastEvent = events[lastActiveIndex];
        const lineHeight = lastEvent.offsetTop + lastEvent.clientHeight / 2;
        timelineLine.style.height = `${lineHeight}px`;
    }
}

// Llama a la función al hacer scroll
window.addEventListener('scroll', activateTimelineEvents);

// Ejecuta la función al cargar la página también
window.addEventListener('load', activateTimelineEvents);
