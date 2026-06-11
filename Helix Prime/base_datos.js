document
.getElementById("pasillo1")
.addEventListener("click", () => {

    window.location.href =
    "pasillos/pasillo1/pasillo1.html";

});

document
.getElementById("pasillo2")
.addEventListener("click", () => {

    window.location.href =
    "pasillos/pasillo2/pasillo2.html";

});

document
.getElementById("pasillo3")
.addEventListener("click", () => {

    window.location.href =
    "pasillos/pasillo3/pasillo3.html";

});

document
.getElementById("pasillo4")
.addEventListener("click", () => {

    const clave = prompt(
        "ACCESO RESTRINGIDO\n\nIntroduzca la clave de autorización Nivel Ω:"
    );

    if(clave === "O01L"){

        window.location.href =
        "pasillos/pasillo4/pasillo4.html";

    }
    else{

        alert(
            "CLAVE INCORRECTA"
        );

    }

});