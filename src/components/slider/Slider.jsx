import React, { useEffect } from "react";

const Slider = () => {
  useEffect(() => {
    const fila = document.querySelector(".contenedor-carousel");
    const peliculas = document.querySelectorAll(".pelicula");

    const flechaIzquierda = document.getElementById("flecha-izquierda");
    const flechaDerecha = document.getElementById("flecha-derecha");

    // ? ----- ----- Event Listener para la flecha derecha. ----- -----
    flechaDerecha.addEventListener("click", () => {
      fila.scrollLeft += fila.offsetWidth;

      const indicadorActivo = document.querySelector(".indicadores .activo");
      if (indicadorActivo.nextSibling) {
        indicadorActivo.nextSibling.classList.add("activo");
        indicadorActivo.classList.remove("activo");
      }
    });

    // ? ----- ----- Event Listener para la flecha izquierda. ----- -----
    flechaIzquierda.addEventListener("click", () => {
      fila.scrollLeft -= fila.offsetWidth;

      const indicadorActivo = document.querySelector(".indicadores .activo");
      if (indicadorActivo.previousSibling) {
        indicadorActivo.previousSibling.classList.add("activo");
        indicadorActivo.classList.remove("activo");
      }
    });

    // ? ----- ----- Paginacion ----- -----
    const numeroPaginas = Math.ceil(peliculas.length / 5);
    for (let i = 0; i < numeroPaginas; i++) {
      const indicador = document.createElement("button");

      if (i === 0) {
        indicador.classList.add("activo");
      }

      document.querySelector(".indicadores").appendChild(indicador);
      indicador.addEventListener("click", (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document
          .querySelector(".indicadores .activo")
          .classList.remove("activo");
        e.target.classList.add("activo");
      });
    }

    // ? ----- ----- Hover ----- -----
    peliculas.forEach((pelicula) => {
      pelicula.addEventListener("mouseenter", (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
          peliculas.forEach((pelicula) => pelicula.classList.remove("hover"));
          elemento.classList.add("hover");
        }, 300);
      });
    });

    fila.addEventListener("mouseleave", () => {
      peliculas.forEach((pelicula) => pelicula.classList.remove("hover"));
    });
  }, []);

 

  return (
    <>
      <div className="peliculas-recomendadas contenedor">
        <div className="contenedor-titulo-controles">
          <h3>Películas Recomendadas</h3>
          <div className="indicadores" />
        </div>
        <div className="contenedor-principal">
          <button
            role="button"
            id="flecha-izquierda"
            className="flecha-izquierda"
          >
            <i className="fas fa-angle-left" />
          </button>
          <div className="contenedor-carousel">
            <div className="carousel">
              <div className="pelicula">
                <a href="#">
                  <img src="img/1.png" alt="" />
                </a>
              </div>
              <div className="pelicula">
                <a href="#">
                  <img src="img/2.png" alt="" />
                </a>
              </div>
              <div className="pelicula">
                <a href="#">
                  <img src="img/3.png" alt="" />
                </a>
              </div>
              <div className="pelicula">
                <a href="#">
                  <img src="img/4.png" alt="" />
                </a>
              </div>
              <div className="pelicula">
                <a href="#">
                  <img src="img/5.png" alt="" />
                </a>
              </div>
              <div className="pelicula">
                <a href="#">
                  <img src="img/6.png" alt="" />
                </a>
              </div>
              <div className="pelicula">
                <a href="#">
                  <img src="img/7.png" alt="" />
                </a>
              </div>
              <div className="pelicula">
                <a href="#">
                  <img src="img/1.png" alt="" />
                </a>
              </div>
              <div className="pelicula">
                <a href="#">
                  <img src="img/2.png" alt="" />
                </a>
              </div>
              <div className="pelicula">
                <a href="#">
                  <img src="img/3.png" alt="" />
                </a>
              </div>
              <div className="pelicula">
                <a href="#">
                  <img src="img/1.png" alt="" />
                </a>
              </div>
              <div className="pelicula">
                <a href="#">
                  <img src="img/2.png" alt="" />
                </a>
              </div>
              <div className="pelicula">
                <a href="#">
                  <img src="img/3.png" alt="" />
                </a>
              </div>
              <div className="pelicula">
                <a href="#">
                  <img src="img/4.png" alt="" />
                </a>
              </div>
              <div className="pelicula">
                <a href="#">
                  <img src="img/5.png" alt="" />
                </a>
              </div>
              <div className="pelicula">
                <a href="#">
                  <img src="img/6.png" alt="" />
                </a>
              </div>
              <div className="pelicula">
                <a href="#">
                  <img src="img/7.png" alt="" />
                </a>
              </div>
              <div className="pelicula">
                <a href="#">
                  <img src="img/1.png" alt="" />
                </a>
              </div>
              <div className="pelicula">
                <a href="#">
                  <img src="img/2.png" alt="" />
                </a>
              </div>
              <div className="pelicula">
                <a href="#">
                  <img src="img/3.png" alt="" />
                </a>
              </div>
              <div className="pelicula">
                <a href="#">
                  <img src="img/4.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <button role="button" id="flecha-derecha" className="flecha-derecha">
            <i className="fas fa-angle-right" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
