import React from "react";

export const FooterComponent = () => {
  return (
    <footer className="footer bg-dark text-white py-3">
      <div className="container text-center">
        <p className="mb-0">
          &copy; 2024 - Todos los derechos reservados | <a href="#" className="text-white text-decoration-none">MiSitioWeb.com</a>
        </p>
        <p className="small mb-0">Síguenos en 
          <a href="https://facebook.com" className="ms-2 text-white text-decoration-none">Facebook</a>, 
          <a href="https://twitter.com" className="ms-2 text-white text-decoration-none">Twitter</a>, 
          <a href="https://instagram.com" className="ms-2 text-white text-decoration-none">Instagram</a>
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
