import Contacto from "../Contacto/Contacto";
import Nosotros from "../Nosotros/Nosotros";
import Parallax from "../Parallax/Parallax";
export default function Inicio() {
  return (
    <>
      <Parallax></Parallax>
      <section className="carrusel">
        <h1 className="text-center p-5">Conocenos</h1>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="img/lw2.jpg" className="d-block w-100" alt="lw2" />
            </div>
            <div className="carousel-item active">
              <img src="img/lw1.jpg" className="d-block w-100" alt="lw1" />
            </div>
            <div className="carousel-item active">
              <img src="img/1.jpg" className="d-block w-100" alt="1" />
            </div>
            <div className="carousel-item">
              <img src="img/2.jpg" className="d-block w-100" alt="2" />
            </div>
            <div className="carousel-item">
              <img src="img/3.jpg" className="d-block w-100" alt="3" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <Nosotros></Nosotros>
      <Contacto></Contacto>
    </>
  );
}
