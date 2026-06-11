const documentos = [

    "doc001",
    "doc002",
    "doc003",

    "reg001",
    "reg002",
    "reg003",

    "per001",
    "per002",
    "per003",

    "ins001",
    "ins002",
    "ins003"

];

documentos.forEach(id => {

    const elemento =
        document.getElementById(id);

    if(!elemento) return;

    elemento.addEventListener("click", () => {

        window.location.href =
            id + ".html";

    });

});