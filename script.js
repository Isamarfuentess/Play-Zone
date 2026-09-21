document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       ELEMENTOS
    ===================================== */

    const botonBuscar =
        document.getElementById("botonBuscar");

    const panelBuscador =
        document.getElementById("panelBuscador");

    const inputBuscar =
        document.getElementById("buscarPaquete");

    const selectorOrden =
        document.getElementById("ordenarPaquetes");

    const contenedorPaquetes =
        document.getElementById("contenedorPaquetes");

    const botonMenu =
        document.getElementById("botonMenu");

    const menuNavegacion =
        document.getElementById("menuNavegacion");


    /* =====================================
       ABRIR / CERRAR BUSCADOR
    ===================================== */

    botonBuscar.addEventListener("click", function () {

        if (panelBuscador.style.display === "block") {

            panelBuscador.style.display = "none";

        } else {

            panelBuscador.style.display = "block";
            inputBuscar.focus();

        }

    });


    /* =====================================
       BUSCAR POR NOMBRE
    ===================================== */

    inputBuscar.addEventListener("input", function () {

        const texto =
            inputBuscar.value
                .toLowerCase()
                .trim();

        const paquetes =
            contenedorPaquetes.querySelectorAll(".paquete");


        paquetes.forEach(function (paquete) {

            const nombre =
                paquete.dataset.nombre
                    .toLowerCase();

            if (nombre.includes(texto)) {

                paquete.style.display = "flex";

            } else {

                paquete.style.display = "none";

            }

        });

    });


    /* =====================================
       ORDENAR
    ===================================== */

    selectorOrden.addEventListener("change", function () {

        const opcion =
            selectorOrden.value;

        const paquetes =
            Array.from(
                contenedorPaquetes.querySelectorAll(".paquete")
            );


        /* MENOR A MAYOR */

        if (opcion === "menor") {

            paquetes.sort(function (a, b) {

                return (
                    Number(a.dataset.precio) -
                    Number(b.dataset.precio)
                );

            });

        }


        /* MAYOR A MENOR */

        else if (opcion === "mayor") {

            paquetes.sort(function (a, b) {

                return (
                    Number(b.dataset.precio) -
                    Number(a.dataset.precio)
                );

            });

        }


        /* ALFABÉTICO A-Z */

        else if (opcion === "alfabetico") {

            paquetes.sort(function (a, b) {

                return a.dataset.nombre.localeCompare(
                    b.dataset.nombre,
                    "es",
                    {
                        sensitivity: "base"
                    }
                );

            });

        }


        paquetes.forEach(function (paquete) {

            contenedorPaquetes.appendChild(paquete);

        });

    });


    /* =====================================
       MENÚ DE CELULAR
    ===================================== */

    botonMenu.addEventListener("click", function () {

        if (menuNavegacion.style.display === "flex") {

            menuNavegacion.style.display = "none";

        } else {

            menuNavegacion.style.display = "flex";
            menuNavegacion.style.flexDirection = "column";
            menuNavegacion.style.position = "absolute";
            menuNavegacion.style.top = "70px";
            menuNavegacion.style.right = "20px";
            menuNavegacion.style.backgroundColor = "#18242c";
            menuNavegacion.style.padding = "20px";
            menuNavegacion.style.borderRadius = "10px";
            menuNavegacion.style.gap = "15px";

        }

    });


    /* =====================================
       FORMULARIO WHATSAPP
    ===================================== */

    const formulario =
        document.getElementById("formulario");


    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        const nombre =
            document.getElementById("nombre")
                .value
                .trim();

        const paquete =
            document.getElementById("paquete")
                .value;

        const mensaje =
            document.getElementById("mensaje")
                .value
                .trim();


        if (
            nombre === "" ||
            paquete === "" ||
            mensaje === ""
        ) {

            alert(
                "Por favor completa todos los campos."
            );

            return;

        }


        const telefono =
            "526651218502";


        const texto =
            "Hola, soy " +
            nombre +
            ".\n\nEstoy interesado(a) en el paquete: " +
            paquete +
            ".\n\nMensaje: " +
            mensaje;


        const url =
            "https://wa.me/" +
            telefono +
            "?text=" +
            encodeURIComponent(texto);


        window.open(url, "_blank");

    });

});


/* =====================================
   MODAL DE PAQUETES
===================================== */

function seleccionarPaquete(nombre, precio) {

    const modal =
        document.getElementById("modal");

    const mensaje =
        document.getElementById("mensajeModal");


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

    document
        .getElementById("modal")
        .style.display = "none";

}


/* =====================================
   CERRAR MODAL AL HACER CLICK AFUERA
===================================== */

window.addEventListener("click", function (event) {

    const modal =
        document.getElementById("modal");

    if (event.target === modal) {

        modal.style.display = "none";

    }

});