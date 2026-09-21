/* =====================================
   MENÚ
===================================== */

function mostrarMenu() {

    const nav = document.querySelector("nav");

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "70px";
        nav.style.right = "20px";
        nav.style.backgroundColor = "#18242c";
        nav.style.padding = "20px";
        nav.style.borderRadius = "10px";
        nav.style.gap = "15px";
    }
}


/* =====================================
   SELECCIONAR PAQUETE
===================================== */

function seleccionarPaquete(nombre, precio) {

    const modal = document.getElementById("modal");

    const mensaje = document.getElementById("mensajeModal");

    mensaje.innerHTML =
        "Has seleccionado el paquete <strong>" +
        nombre +
        "</strong> con un precio de <strong>$" +
        precio +
        " MXN</strong>.<br><br>" +
        "Puedes continuar en la sección de contacto para solicitar información.";

    modal.style.display = "flex";
}


/* =====================================
   CERRAR MODAL
===================================== */

function cerrarModal() {

    const modal = document.getElementById("modal");

    modal.style.display = "none";
}


/* =====================================
   CERRAR MODAL AL HACER CLICK AFUERA
===================================== */

window.onclick = function(event) {

    const modal = document.getElementById("modal");

    if (event.target === modal) {

        modal.style.display = "none";

    }

};


/* =====================================
   FORMULARIO - WHATSAPP
===================================== */

document.getElementById("formulario").addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const paquete = document.getElementById("paquete").value;
    const mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || paquete === "" || mensaje === "") {

        alert("Por favor completa todos los campos.");

        return;
    }

    // Número de WhatsApp de Play Zone
    const telefono = "526651218502";

    const texto =
        "Hola, soy " + nombre +
        ".\n\nEstoy interesado(a) en el paquete: " + paquete +
        ".\n\nMensaje: " + mensaje;

    const url =
        "https://wa.me/" +
        telefono +
        "?text=" +
        encodeURIComponent(texto);

    window.open(url, "_blank");

});