// Vamos a crear una página sobre fútbol. En esta primera entrega, vamos a lograr que el usuario pueda ver 2 opciones, por un lado, podrá seleccionar un número del 1 al 10 y el programa le dirá el mejor jugador que haya usado ese número en la historia, y por otro lado, el usuario podrá ingresar un año, y el programa le dira si ese año hubo mundial, y dónde fué.



alert("Bienvenido a la mejor página de fútbol");

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

function adivinaJugador() {
    const numero = parseInt(prompt("Ingresa un número del 1 al 10 para conocer el mejor jugador que ha usado ese número:"));

    if (numero === 1) {
        alert("El mejor jugador que ha usado el número 1 es Lev Yashin");
    } else if (numero === 2) {
        alert("El mejor jugador que ha usado el número 2 es Cafu");
    } else if (numero === 3) {
        alert("El mejor jugador que ha usado el número 3 es Paolo Maldini");
    } else if (numero === 4) {
        alert("El mejor jugador que ha usado el número 4 es Franz Beckenbauer");
    } else if (numero === 5) {
        alert("El mejor jugador que ha usado el número 5 es Zinedine Zidane");
    } else if (numero === 6) {
        alert("El mejor jugador que ha usado el número 6 es Roberto Carlos");
    } else if (numero === 7) {
        alert("El mejor jugador que ha usado el número 7 es Cristiano Ronaldo");
    } else if (numero === 8) {
        alert("El mejor jugador que ha usado el número 8 es Andrés Iniesta");
    } else if (numero === 9) {
        alert("El mejor jugador que ha usado el número 9 es Ronaldo Nazário");
    } else if (numero === 10) {
        alert("El mejor jugador que ha usado el número 10 es Lionel Messi");
    } else {
        alert("Por favor ingresa un número del 1 al 10.");
    }
}

function adivinaMundial() {
    const año = parseInt(prompt("Ingresa un año para saber si hubo mundial y dónde fue:"));

    if (año === 1930) {
        alert("En el año 1930, el mundial se jugó en Uruguay.");
    } else if (año === 1934) {
        alert("En el año 1934, el mundial se jugó en Italia.");
    } else if (año === 1938) {
        alert("En el año 1938, el mundial se jugó en Francia.");
    } else if (año === 1950) {
        alert("En el año 1950, el mundial se jugó en Brasil.");
    } else if (año === 1954) {
        alert("En el año 1954, el mundial se jugó en Suiza.");
    } else if (año === 1958) {
        alert("En el año 1958, el mundial se jugó en Suecia.");
    } else if (año === 1962) {
        alert("En el año 1962, el mundial se jugó en Chile.");
    } else if (año === 1966) {
        alert("En el año 1966, el mundial se jugó en Inglaterra.");
    } else if (año === 1970) {
        alert("En el año 1970, el mundial se jugó en México.");
    } else if (año === 1974) {
        alert("En el año 1974, el mundial se jugó en Alemania Occidental.");
    } else if (año === 1978) {
        alert("En el año 1978, el mundial se jugó en Argentina.");
    } else if (año === 1982) {
        alert("En el año 1982, el mundial se jugó en España.");
    } else if (año === 1986) {
        alert("En el año 1986, el mundial se jugó en México.");
    } else if (año === 1990) {
        alert("En el año 1990, el mundial se jugó en Italia.");
    } else if (año === 1994) {
        alert("En el año 1994, el mundial se jugó en Estados Unidos.");
    } else if (año === 1998) {
        alert("En el año 1998, el mundial se jugó en Francia.");
    } else if (año === 2002) {
        alert("En el año 2002, el mundial se jugó en Corea del Sur y Japón.");
    } else if (año === 2006) {
        alert("En el año 2006, el mundial se jugó en Alemania.");
    } else if (año === 2010) {
        alert("En el año 2010, el mundial se jugó en Sudáfrica.");
    } else if (año === 2014) {
        alert("En el año 2014, el mundial se jugó en Brasil.");
    } else if (año === 2018) {
        alert("En el año 2018, el mundial se jugó en Rusia.");
    } else if (año === 2022) {
        alert("En el año 2022, el mundial se jugó en Catar.");
    } else {
        alert("No hubo mundial en ese año.");
    }
}

alert("Gracias por visitar la mejor página de fútbol");
