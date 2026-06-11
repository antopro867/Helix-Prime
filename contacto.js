emailjs.init("uzFx7oYsm_OW7V0tV");

document
.getElementById("contactForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    const btn = document.getElementById("submitBtn");

    btn.disabled = true;
    btn.textContent = "Enviando...";

    const templateParams = {

        nombre: document.getElementById("nombre").value,

        email: document.getElementById("correo").value,

        asunto: document.getElementById("asunto").value,

        mensaje: document.getElementById("mensaje").value

    };

    emailjs.send(
        "service_9r8g1iw",
        "template_ajmxh16",
        templateParams
    )
    .then(() => {

        alert(
        "Solicitud enviada correctamente.\n\nReferencia: HP-CONTACT"
        );

        document
            .getElementById("contactForm")
            .reset();

    })
    .catch((error) => {

        console.error(error);

        alert(
            "Error al enviar la solicitud."
        );

    })
    .finally(() => {

        btn.disabled = false;
        btn.textContent = "Enviar solicitud";

    });

});