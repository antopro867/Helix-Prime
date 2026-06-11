const rango =
localStorage.getItem("hp_rango");

const codigo =
localStorage.getItem("hp_codigo");

document.getElementById("rango").textContent =
rango;

document.getElementById("codigo").textContent =
codigo;

const tarjeta =
document.getElementById("tarjeta");

const lector =
document.getElementById("lector");

const estado =
document.getElementById("estado");

const accederBtn =
document.getElementById("accederBtn");

const credenciales = {

    "HP-B3-2041":"BETA-3",
    "HP-G2-0814":"GAMMA-2",
    "HP-O4-0007":"OMEGA-4",
    "HP-O5-0001":"OMEGA-5"

};

let arrastrando = false;
let offsetX = 0;

let escaneado = false;
let reiniciando = false;

let dentroDelLector = false;
let tiempoEntrada = 0;

const posicionInicial = {

    left:100

};

tarjeta.addEventListener("mousedown", (e) => {

    if(escaneado) return;

    if(reiniciando) return;

    tarjeta.style.transition = "none";

    arrastrando = true;

    offsetX =
        e.clientX - tarjeta.offsetLeft;

    tarjeta.style.cursor =
        "grabbing";

});

document.addEventListener("mousemove", (e) => {

    if(!arrastrando) return;

    tarjeta.style.left =
        (e.clientX - offsetX) + "px";

    comprobarEscaneo();

});

document.addEventListener("mouseup", () => {

    arrastrando = false;

    tarjeta.style.cursor =
        "grab";

});

function reiniciarTarjeta(){

    reiniciando = true;

    tarjeta.style.transition =
        "left 0.35s ease";

    tarjeta.style.left =
        posicionInicial.left + "px";

    setTimeout(() => {

        estado.textContent =
            "PASE LA TARJETA";

        escaneado = false;

        dentroDelLector = false;

        reiniciando = false;

    }, 350);

}

function comprobarEscaneo(){

    if(escaneado) return;

    const tarjetaRect =
        tarjeta.getBoundingClientRect();

    const lectorRect =
        lector.getBoundingClientRect();

    const colision = !(

        tarjetaRect.right < lectorRect.left ||

        tarjetaRect.left > lectorRect.right ||

        tarjetaRect.bottom < lectorRect.top ||

        tarjetaRect.top > lectorRect.bottom

    );

    if(colision && !dentroDelLector){

        dentroDelLector = true;

        tiempoEntrada =
            Date.now();

        return;

    }

    if(
        dentroDelLector &&
        tarjetaRect.left > lectorRect.right
    ){

        escaneado = true;

        dentroDelLector = false;

        const tiempoEscaneo =
            Date.now() - tiempoEntrada;

        if(tiempoEscaneo < 400){

            estado.textContent =
                "DEMASIADO RÁPIDO";

            setTimeout(() => {

                reiniciarTarjeta();

            }, 1200);

            return;

        }

        if(tiempoEscaneo > 700){

            estado.textContent =
                "DEMASIADO LENTO";

            setTimeout(() => {

                reiniciarTarjeta();

            }, 1200);

            return;

        }

        estado.textContent =
            "ESCANEO CORRECTO";

        setTimeout(() => {

            estado.textContent =
                "VERIFICANDO...";

            setTimeout(() => {

                if(
                    credenciales[codigo] === rango
                ){

                    estado.textContent =
                        "ACCESO CONCEDIDO";

                    accederBtn.style.display =
                        "block";

                }
                else{

                    estado.textContent =
                        "CREDENCIALES INVÁLIDAS";

                    setTimeout(() => {

                        reiniciarTarjeta();

                    }, 1500);

                }

            }, 1500);

        }, 1000);

    }

accederBtn.addEventListener("click", () => {

    window.location.href =
        "base_datos.html";

});
}