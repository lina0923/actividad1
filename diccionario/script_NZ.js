const letras = "NOPQRSTUVWXYZ".split("");
const letrasContainer = document.getElementById("letras-container");

// Crear botones con letras
letras.forEach(letra => {
    const btn = document.createElement("button");
    btn.textContent = letra;
    btn.onclick = () => document.getElementById(letra).scrollIntoView({ behavior: "smooth" });
    letrasContainer.appendChild(btn);
});
