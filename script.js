// Array con las URL de las cartas
const cartas = [
    "https://drive.google.com/uc?export=view&id=1zfuq5c1pgU9CFa_0fZyy-VyBBjUQolsN",
    "https://drive.google.com/uc?export=view&id=1CatSVa8EGDsdPEF7sfYvtjrUewnMvcjt",
    "https://drive.google.com/uc?export=view&id=1u9cPqAFzzb0vUMkxtkJWwWE6NIZytdz1",
    "https://drive.google.com/uc?export=view&id=14239Ne1R6S5SzmejL3S1No7lptbsmyt-",
    "https://drive.google.com/uc?export=view&id=1wKgPRYjfENT6MDSjqgMFWVOPA3mlNdVS",
    "https://drive.google.com/uc?export=view&id=14POqAToR93PeijpKhDG1wsv6bC1fCCSU",
    "https://drive.google.com/uc?export=view&id=1WCenR5BzPpraqKlrUMMMDcXODXgMGUmy",
    "https://drive.google.com/uc?export=view&id=1aDKy9h6iLN4lRK7VVbXZbjBfvSiNecB-",
    "https://drive.google.com/uc?export=view&id=1H_dBwZZaiaVx5nhIxvvbZndFBcxLVfoE",
    "https://drive.google.com/uc?export=view&id=112PMSCwzWKcREQp0QSllRN6Fbo4Y1diI",
    "https://drive.google.com/uc?export=view&id=1Ntg0uyu89-4mifhyQdf4cUjGZsRg7jnz",
    "https://drive.google.com/uc?export=view&id=1tqOb1m8gwS8vjDJnCAaXpgYY7O9uVA6k",
    "https://drive.google.com/uc?export=view&id=1MByoxe3M7ir0c2Gx1W7eEwfmGBbarNAX",
    "https://drive.google.com/uc?export=view&id=1YjRZ-A_paxdkYoEOvUfZdXfHHlPF_sMP",
    "https://drive.google.com/uc?export=view&id=1VnddMd5zSVHppGL6Q3dymqWOm2SPYWma",
    "https://drive.google.com/uc?export=view&id=19W3-_R5laxS2NeJzc0uxFJuNt9GFkjzk",
    "https://drive.google.com/uc?export=view&id=1mGUeQHmFi5SiZkDNQXkRwHhNpxH9fRN6",
    "https://drive.google.com/uc?export=view&id=1i7ZatQWHqHc-lyuxU-MOLy3IAzzjxFm5",
    "https://drive.google.com/uc?export=view&id=1Nx2WQ3OAwprIatmvBxV7QhjdZZC05O1d",
    "https://drive.google.com/uc?export=view&id=19QdXbeDzhXQM-Ak9rIk_Y18hOGVzfvtl",
    "https://drive.google.com/uc?export=view&id=1I3MCIOWtojO3_U1WbLdE7TrOcGvhuPkp",
    "https://drive.google.com/uc?export=view&id=1fT1UX6bE9dSd6ZwJ3gBihPvHH4zl1vpK"
];

// Función para obtener una carta aleatoria
function obtenerCartaAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * cartas.length);
    return cartas[indiceAleatorio];
}

// Función para mostrar una carta aleatoria en la imagen principal
function mostrarCarta() {
    const cartaAleatoria = obtenerCartaAleatoria();  // Obtener una carta aleatoria
    document.getElementById("cartaImagen").src = cartaAleatoria;  // Mostrar la carta en el contenedor
}

// Función para mostrar varias cartas aleatorias (1, 3 o 5)
function mostrarCartasAleatorias(numCartas) {
    const contenedorCartas = document.getElementById('cartasMostradas');  // Contenedor donde se mostrarán las cartas
    contenedorCartas.innerHTML = '';  // Limpiar el contenedor antes de agregar nuevas cartas
    
    // Mostrar las cartas aleatorias
    for (let i = 0; i < numCartas; i++) {
        const cartaAleatoria = obtenerCartaAleatoria();  // Obtener una carta aleatoria
        const imagenCarta = document.createElement('img');  // Crear un nuevo elemento de imagen
        imagenCarta.src = cartaAleatoria;  // Establecer la fuente de la imagen
        imagenCarta.alt = `Carta ${i + 1}`;  // Establecer un texto alternativo por si no se carga la imagen
        contenedorCartas.appendChild(imagenCarta);  // Agregar la carta al contenedor
    }
}

// Si quieres que se muestren cartas automáticamente al cargar la página, puedes añadir algo como esto:
// mostrarCartasAleatorias(3);  // Esto muestra 3 cartas al cargar la página
