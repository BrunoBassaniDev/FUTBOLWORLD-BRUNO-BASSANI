alert("Bienvenido a la mejor página de fútbol");

const jugadores = [
    { numero: 1, nombre: "Lev Yashin" },
    { numero: 2, nombre: "Cafu" },
    { numero: 3, nombre: "Paolo Maldini" },
    { numero: 4, nombre: "Franz Beckenbauer" },
    { numero: 5, nombre: "Zinedine Zidane" },
    { numero: 6, nombre: "Roberto Carlos" },
    { numero: 7, nombre: "Cristiano Ronaldo" },
    { numero: 8, nombre: "Andrés Iniesta" },
    { numero: 9, nombre: "Ronaldo Nazário" },
    { numero: 10, nombre: "Lionel Messi" }
];

const mundiales = [
    { año: 1930, sede: "Uruguay" },
    { año: 1934, sede: "Italia" },
    { año: 1938, sede: "Francia" },
    { año: 1950, sede: "Brasil" },
    { año: 1954, sede: "Suiza" },
    { año: 1958, sede: "Suecia" },
    { año: 1962, sede: "Chile" },
    { año: 1966, sede: "Inglaterra" },
    { año: 1970, sede: "México" },
    { año: 1974, sede: "Alemania Occidental" },
    { año: 1978, sede: "Argentina" },
    { año: 1982, sede: "España" },
    { año: 1986, sede: "México" },
    { año: 1990, sede: "Italia" },
    { año: 1994, sede: "Estados Unidos" },
    { año: 1998, sede: "Francia" },
    { año: 2002, sede: "Corea del Sur y Japón" },
    { año: 2006, sede: "Alemania" },
    { año: 2010, sede: "Sudáfrica" },
    { año: 2014, sede: "Brasil" },
    { año: 2018, sede: "Rusia" },
    { año: 2022, sede: "Qatar" }
];

function adivinaJugador() {
    const numero = parseInt(prompt("Ingresa un número del 1 al 10 para conocer el mejor jugador que ha usado ese número:"));

    const jugador = jugadores.find(j => j.numero === numero);

    if (jugador) {
        alert(`El mejor jugador que ha usado el número ${numero} es ${jugador.nombre}`);
    } else {
        alert("Por favor ingresa un número del 1 al 10.");
    }
}

function adivinaMundial() {
    const año = parseInt(prompt("Ingresa un año para saber si hubo mundial y dónde fue:"));

    const mundial = mundiales.find(m => m.año === año);

    if (mundial) {
        alert(`En el año ${año}, el mundial se jugó en ${mundial.sede}.`);
    } else {
        alert("No hubo mundial en ese año.");
    }
}


let opciones = parseInt(prompt("Selecciona una opción\n\n1. Adivina el Jugador\n2. Adivina el Mundial\n\nSi quiere abandonar el juego, ingrese 0"));

while (opciones !== 0) {
    if (opciones === 1) {
        adivinaJugador();
    } else if (opciones === 2) {
        adivinaMundial();
    } else {
        alert("Opción no válida. Por favor selecciona 1 o 2.");
    }

    opciones = parseInt(prompt("Selecciona una opción\n\n1. Adivina el Jugador\n2. Adivina el Mundial\n\nSi quiere abandonar el juego, ingrese 0"));
}

alert("Gracias por visitar la mejor página de fútbol");
