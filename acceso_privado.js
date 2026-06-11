document
.getElementById("loginForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const rango =
        document.getElementById("rango").value;

    const codigoUsuario =
        document.getElementById("workerCode")
        .value
        .trim();

    let prefijo = "";

    switch(rango){

        case "BETA-3":
            prefijo = "HP-B3-";
            break;

        case "GAMMA-1":
            prefijo = "HP-G1-";
            break;

        case "GAMMA-2":
            prefijo = "HP-G2-";
            break;

        case "GAMMA-3":
            prefijo = "HP-G3-";
            break;

        case "OMEGA-1":
            prefijo = "HP-O1-";
            break;

        case "OMEGA-2":
            prefijo = "HP-O2-";
            break;

        case "OMEGA-3":
            prefijo = "HP-O3-";
            break;

        case "OMEGA-4":
            prefijo = "HP-O4-";
            break;

        case "OMEGA-5":
            prefijo = "HP-O5-";
            break;

    }

    const codigoCompleto =
        prefijo + codigoUsuario;

    localStorage.setItem(
        "hp_rango",
        rango
    );

    localStorage.setItem(
        "hp_codigo",
        codigoCompleto
    );

    window.location.href =
        "escaner.html";

});