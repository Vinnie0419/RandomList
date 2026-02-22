const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("niveles.json")
  .then(response => response.json())
  .then(data => {

    const nivel = data.find(n => n.id == id);
    const contenedor = document.querySelector(".detalle");

    if (nivel) {
      contenedor.innerHTML = `
        <h1>${nivel.nombre}</h1>

        <img src="${nivel.imagen}" width="400">

        <p><strong>Posición:</strong> #${nivel.posicion}</p>
        <p><strong>Dificultad:</strong> ${nivel.dificultad}</p>
        <p>${nivel.creador}</p>
        <p>${nivel.idlevel}</p>
        <p>${nivel.descripcion}</p>


        <h2>Video</h2>

        <div class="video-container">
          <iframe id="video"
            src="${nivel.video}" 
            frameborder="0" 
            allowfullscreen>
          </iframe>
        </div>

        <br><br>
        <a href="index.html">⬅ Volver</a>
      `;
    } else {
      contenedor.innerHTML = "<h2>Nivel no encontrado</h2>";
    }

  });
