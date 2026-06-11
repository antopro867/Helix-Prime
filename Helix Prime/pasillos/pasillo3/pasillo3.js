const expedientes = [

    "ano001",
    "ano002",
    "ano003",

    "con001",
    "con002",
    "con003",

    "inc001",
    "inc002",
    "inc003",

    "exp001",
    "exp002",
    "exp003"

];

expedientes.forEach(id => {

    const elemento =
        document.getElementById(id);

    if(!elemento) return;

    elemento.addEventListener("click", () => {

        window.location.href =
            id + ".html";

    });

});