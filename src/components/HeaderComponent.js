import React from "react";

export const HeaderComponent = () => {
  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link formato01" href="/">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link formato01" href="/clientes">
                  Clientes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link formato01" href="/productos">
                  productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link formato01" href="#">
                  Compras
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
