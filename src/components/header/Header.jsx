import React from "react";

const Header = () => {
  return (
    <header>
      <div className="contenedor">
        <h2 className="logotipo">Jc Johan Netflix</h2>
        <nav>
          <a href="#" className="activo">
            Inicio
          </a>
          <a href="#">Programas</a>
          <a href="#">Películas</a>
          <a href="#">Más Recientes</a>
          <a href="#">Mi lista</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
