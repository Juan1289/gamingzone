const form = document.getElementById("formVenta");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const juego = {
        nombre: document.getElementById("nombreJuego").value,
        categoria: document.getElementById("categoria").value,
        plataforma: document.getElementById("plataforma").value,
        precio: document.getElementById("precio").value,
        descripcion: document.getElementById("descripcion").value
    };

    // Guardar en localStorage
    let juegos = JSON.parse(localStorage.getItem("juegos")) || [];
    juegos.push(juego);
    localStorage.setItem("juegos", JSON.stringify(juegos));

    alert("Juego publicado correctamente 🎮🔥");

    form.reset();
});