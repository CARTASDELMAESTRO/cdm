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

function mostrarCarta() {
    const indiceAleatorio = Math.floor(Math.random() * cartas.length);
    document.getElementById("cartaImagen").src = cartas[indiceAleatorio];
}
