function mostrarAlerta(titulo, texto, urlImagen) {
    Swal.fire({
        title: titulo,
        text: texto,
        imageUrl: urlImagen,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Imagen",
        customClass: {
            image: "swal-image",
        },
    });
}

async function adivinarJugador() {
    try {
        const response = await fetch('./data.json');
        const data = await response.json();
        const jugadores = data.jugadores;

        Swal.fire({
            title: "Ingresa un número del 1 al 10:",
            input: "number",
            inputAttributes: {
                min: 1,
                max: 10,
                step: 1,
            },
            showCancelButton: true,
            confirmButtonText: "Buscar",
            cancelButtonText: "Cancelar",
            inputValidator: (valor) => {
                if (!valor) {
                    return "¡Necesitas ingresar un número!";
                }
            },
        }).then((resultado) => {
            if (resultado.isConfirmed) {
                const numero = parseInt(resultado.value);
                const jugador = jugadores.find((j) => j.numero === numero);

                if (jugador) {
                    mostrarAlerta(
                        jugador.nombre,
                        `Es el mejor jugador que ha usado el número ${numero}.`,
                        `assets/${jugador.imagen}`
                    );
                    agregarAlHistorial(`Número ${numero}: ${jugador.nombre}`);
                } else {
                    mostrarAlerta("Error", "Por favor ingresa un número del 1 al 10.", "");
                }
            }
        });
    } catch (error) {
        Swal.fire('Error', 'No se pudieron cargar los datos.');
    }
}

async function adivinarMundial() {
    try {
        const response = await fetch('./data.json');
        const data = await response.json();
        const mundiales = data.mundiales;

        Swal.fire({
            title: "Ingresa un año para saber si hubo mundial y dónde fue:",
            input: "number",
            inputAttributes: {
                min: 1930,
                max: 2022,
            },
            showCancelButton: true,
            confirmButtonText: "Buscar",
            cancelButtonText: "Cancelar",
            inputValidator: (valor) => {
                if (!valor) {
                    return "¡Necesitas ingresar un año!";
                }
            },
        }).then((resultado) => {
            if (resultado.isConfirmed) {
                const año = parseInt(resultado.value);
                const mundial = mundiales.find((m) => m.año === año);

                if (mundial) {
                    mostrarAlerta(
                        mundial.sede,
                        `En el año ${año}.`,
                        `assets/${mundial.imagen}`
                    );
                    agregarAlHistorial(`Año ${año}: ${mundial.sede}`);
                } else {
                    mostrarAlerta("Error", "No hubo mundial en ese año.", "");
                }
            }
        });
    } catch (error) {
        Swal.fire('Error', 'No se pudieron cargar los datos.');
    }
}


function agregarAlHistorial(entrada) {
    let historial = JSON.parse(localStorage.getItem("historial")) || [];
    historial.unshift(entrada);
    if (historial.length > 10) {
        historial.pop();
    }
    localStorage.setItem("historial", JSON.stringify(historial));
    actualizarVistaHistorial();
}


function actualizarVistaHistorial() {
    const listaHistorial = document.getElementById("listaHistorial");
    listaHistorial.innerHTML = "";
    const historial = JSON.parse(localStorage.getItem("historial")) || [];
    historial.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        listaHistorial.appendChild(li);
    });
}

actualizarVistaHistorial();
document.getElementById("jugarJugador").addEventListener("click", adivinarJugador);
document.getElementById("jugarMundial").addEventListener("click", adivinarMundial);