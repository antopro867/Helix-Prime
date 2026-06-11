const registros = [
    {
        nombre: "HP-001 - Abyss",
        estado: "Criocontenimiento Permanente",
        clasificacion: "Nivel IV",
        peligro: "Extrema",
        prioridad: "Máxima",
        ubicacion: "Hipercongelador",
        origen: "Desconocido",
        imagen: "img/abyss.jpg",
        pagina: "registros/abyss.html"
    },

    {
        nombre: "HP-002 - Sin Registrar",
        estado: "Desconocido",
        clasificacion: "Desconocida",
        peligro: "Desconocida",
        prioridad: "No asignada",
        ubicacion: "Sin determinar",
        origen: "Desconocido",
        imagen: "img/logo_protocolo.png",
        pagina: "registros/hp002.html"
    },

    {
        nombre: "HP-003 - Sin Registrar",
        estado: "Desconocido",
        clasificacion: "Desconocida",
        peligro: "Desconocida",
        prioridad: "No asignada",
        ubicacion: "Sin determinar",
        origen: "Desconocido",
        imagen: "img/logo_protocolo.png",
        pagina: "registros/hp003.html"
    },

    {
        nombre: "HP-004 - Sin Registrar",
        estado: "Desconocido",
        clasificacion: "Desconocida",
        peligro: "Desconocida",
        prioridad: "No asignada",
        ubicacion: "Sin determinar",
        origen: "Desconocido",
        imagen: "img/logo_protocolo.png",
        pagina: "registros/hp004.html"
    },

    {
        nombre: "HP-005 - Sin Registrar",
        estado: "Desconocido",
        clasificacion: "Desconocida",
        peligro: "Desconocida",
        prioridad: "No asignada",
        ubicacion: "Sin determinar",
        origen: "Desconocido",
        imagen: "img/logo_protocolo.png",
        pagina: "registros/hp005.html"
    }
];

let indiceActual = 0;

const nombre = document.getElementById("registroNombre");
const estado = document.getElementById("registroEstado");
const clasificacion = document.getElementById("registroClasificacion");
const peligro = document.getElementById("registroPeligro");
const prioridad = document.getElementById("registroPrioridad");
const ubicacion = document.getElementById("registroUbicacion");
const origen = document.getElementById("registroOrigen");
const imagen = document.getElementById("registroImagen");
const link = document.getElementById("registroLink");

function actualizarRegistro() {

    const registro = registros[indiceActual];

    nombre.textContent = registro.nombre;
    estado.textContent = registro.estado;
    clasificacion.textContent = registro.clasificacion;
    peligro.textContent = registro.peligro;
    prioridad.textContent = registro.prioridad;
    ubicacion.textContent = registro.ubicacion;
    origen.textContent = registro.origen;

    imagen.src = registro.imagen;
    link.href = registro.pagina;
}

document.getElementById("nextBtn").addEventListener("click", () => {

    indiceActual++;

    if (indiceActual >= registros.length) {
        indiceActual = 0;
    }

    actualizarRegistro();
});

document.getElementById("prevBtn").addEventListener("click", () => {

    indiceActual--;

    if (indiceActual < 0) {
        indiceActual = registros.length - 1;
    }

    actualizarRegistro();
});

document.getElementById("randomBtn").addEventListener("click", () => {

    indiceActual = Math.floor(Math.random() * registros.length);

    actualizarRegistro();
});

actualizarRegistro();