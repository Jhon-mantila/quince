document.getElementById('cargar-invitados').addEventListener('click', function() {
    const codigo = document.getElementById('codigo-invitado').value;

    // Realiza una solicitud GET a la API para obtener los invitados
    fetch(`https://esquinaweb.com/api-invitacion/api.php?code=${codigo}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // Limpia el contenedor de invitados
            const container = document.getElementById('invitados-container');
            container.innerHTML = '';
            const invitados = data.data; // Asume que la respuesta tiene una propiedad 'invitados'

            // Crea una lista de invitados
            invitados.forEach(invitado => {
                const div = document.createElement('div');
                div.classList.add('invitado');

                // Crea un checkbox para cada invitado
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.value = invitado.id; // Asume que cada invitado tiene un id
                checkbox.id = `invitado-${invitado.id}`;

                // Crea un label para el checkbox
                const label = document.createElement('label');
                label.htmlFor = `invitado-${invitado.id}`;
                label.innerText = `${invitado.invitado}`; // Asume que los invitados tienen 'nombre' y 'apellido'

                div.appendChild(checkbox);
                div.appendChild(label);
                container.appendChild(div);
            });

            // Muestra el botón de confirmar asistencia
            document.getElementById('confirmar-asistencia').style.display = 'block';
        })
        .catch(error => console.error('Error:', error));
});

// Lógica para confirmar la asistencia
document.getElementById('confirmar-asistencia').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('#invitados-container input[type="checkbox"]');
    const asistencias = [];

    // Construye el array de asistencias
    checkboxes.forEach(checkbox => {
        const id = checkbox.value;
        const asistencia = checkbox.checked ? 1 : 0; // 1 si está seleccionado, 0 si no
        asistencias.push({ id: parseInt(id), asistencia: asistencia });
    });

    // Crea el objeto JSON para enviar
    const jsonPayload = {
        asistencias: asistencias
    };

    console.log(jsonPayload)

    // Envía la selección a la API usando PUT
    fetch('https://esquinaweb.com/api-invitacion/api.php', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonPayload) // Crea el objeto con las asistencias
    })
    .then(response => response.json())
    .then(data => {
        // Maneja la respuesta de la API
        console.log('Asistencia confirmada:', data);
        alert('Asistencia confirmada para los invitados seleccionados.');
    })
    .catch(error => console.error('Error al confirmar asistencia:', error));
});