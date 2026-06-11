const expedientes = [

    "omg001",
    "omg002",
    "omg003",

    "blk001",
    "blk002",
    "blk003",

    "rst001",
    "rst002",
    "rst003",

    "cnf001",
    "cnf002",
    "cnf003"

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