import React from 'react';

const HomeComponent = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h1 className="display-4">Bienvenido a la Página Principal</h1>
          <p className="lead">
            Explora las funcionalidades de tu aplicación navegando por el menú.
          </p>
          <hr className="my-4" />
          <p>Disfruta de una experiencia sencilla y responsiva con Bootstrap.</p>
          <a href="/productos" className="btn btn-primary btn-lg">
            Ver Productos
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
