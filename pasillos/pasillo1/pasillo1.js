const documentos = [

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

document
.getElementById("doc001")
.addEventListener("click", () => {

    window.location.href =
    "expedientes/DOC/doc001/doc001.html";

});

document
.getElementById("doc002")
.addEventListener("click", () => {

    window.location.href =
    "expedientes/DOC/doc002/doc002.html";

});

document
.getElementById("doc003")
.addEventListener("click", () => {

    window.location.href =
    "expedientes/DOC/doc003/doc003.html";

});