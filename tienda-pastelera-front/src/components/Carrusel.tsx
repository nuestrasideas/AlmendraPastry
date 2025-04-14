import React from 'react';

const Carrusel: React.FC = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="/public/assets/imagenes/receta-de-cocina-og.jpg"
            alt="First slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Primera Imagen</h5>
            <p>Descripción de la primera imagen.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="/public/assets/imagenes/cheesecake-brownies-with-raspberry.jpg"
            alt="Second slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Segunda Imagen</h5>
            <p>Descripción de la segunda imagen.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="/public/assets/imagenes/frame-food-ingredients-baking-gently-pink-pastel-background-cooking-flat-lay-with-copy-space-top-view-baking-concept-flat-lay.jpg"
            alt="Third slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Tercera Imagen</h5>
            <p>Descripción de la tercera imagen.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carrusel;
