document.addEventListener("DOMContentLoaded", function () {
    const reservaForm = document.getElementById("reserva-form");

    reservaForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const telefono = document.getElementById("telefono").value;
        const cedula = document.getElementById("cedula").value;
        const servicio = document.getElementById("servicio").value;
        const fecha = document.getElementById("fecha").value;
        const hora = document.getElementById("hora").value;

        alert(`Reserva confirmada:\nNombre: ${nombre}\nTeléfono: ${telefono}\nCédula: ${cedula}\nServicio: ${servicio}\nFecha: ${fecha}\nHora: ${hora}`);
    });
});
