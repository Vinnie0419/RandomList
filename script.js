fetch("niveles.json")
  .then(response => response.json())
  .then(data => {

    const lista = document.querySelector(".lista");
    lista.innerHTML = "";

    data.forEach(nivel => {

      const contenedor = document.createElement("div");
      contenedor.classList.add("nivel");

      contenedor.innerHTML = `
        <a href="detalle.html?id=${nivel.id}" class="link-nivel">
          <span class="posicion">#${nivel.posicion}</span>
          <img src="${nivel.imagen}" alt="${nivel.nombre}">
          <div class="info">
              <h2>${nivel.nombre}</h2>
              <p>${nivel.dificultad}</p>
          </div>
        </a>
      `;

      lista.appendChild(contenedor);

    });

   
    document.getElementById("buscador").addEventListener("keyup", function() {
      let filtro = this.value.toLowerCase();
      let niveles = document.querySelectorAll(".nivel");

      niveles.forEach(nivel => {
        let texto = nivel.innerText.toLowerCase();
        nivel.style.display = texto.includes(filtro) ? "flex" : "none";
      });
    });

  });

  
const modal = document.getElementById("modal");
const btn = document.getElementById("infoBtn");
const cerrar = document.getElementById("cerrarModal");

btn.onclick = function() {
  modal.style.display = "flex";
}

cerrar.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
