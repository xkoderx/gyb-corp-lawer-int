// import "../../../public/css/animate.min.css"
function Nosotros() {
  return (
    <>
      <section className="nosotros text-center" id="nosotros">
        <h1 className="mt-5 wow wow_fadeIn">¿Quienes somos?</h1>
        <p className="m-4 p-4 p-lg-5 lead">
          Somos un equipo profesional con amplia experiencia en Derecho que
          ofrece un amplio buffete en servicios legales de manera inteligente,
          otorgando resultados y soluciones óptimas a nuestros clientes.
        </p>
        <div className="row me-auto">
          <div
            className="mb-4 col-lg-4"
            // style="visibility: visible; animation-name: fadeIn;"
          >
            <img
              width="300px"
              alt=""
              className="mb-3"
              src="https://firebasestorage.googleapis.com/v0/b/sj38-1565552456225.appspot.com/o/team-1.jpg?alt=media&token=aa9b591c-6dce-4d06-abfe-f83d0429a9cb"
            />
            <h5 className="mt-2">
              <strong>Lic. Leo Peralta</strong>
            </h5>
            <p className="mb-3">
              <strong>Director Legal</strong>
            </p>
            <p className="mb-3 pt-4 pb-4">Ley lo que nos importa.</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="25px"
              className="pe-2"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
            <a target="_blank" className="" href="tel:5518248651">
              55-18-24-86-51
            </a>
          </div>
          <div
            className="mb-4 col-lg-4"
            // style="visibility: visible; animation-name: fadeIn;"
          >
            <img
              width="300px"
              alt=""
              className="mb-3"
              src="https://firebasestorage.googleapis.com/v0/b/sj38-1565552456225.appspot.com/o/team-2.jpg?alt=media&amp;token=169f37a5-009f-4328-885c-4d99cabe0a5c"
            />
            <h5 className="mt-2">
              <strong>Mtra. Mayra Isabel Sanchez Rovirosa</strong>
            </h5>
            <p className="mb-3">
              <strong>Directora Legal</strong>
            </p>
            <p className="mb-3 pt-4 pb-4">
              Estamos aquí para ayudar a clientes y personas.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="25px"
              className="pe-2"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
            <a target="_blank" className="" href="tel:5543328134">
              55-43-32-81-34
            </a>
          </div>
          <div
            className="mb-4 col-lg-4"
            // style="visibility: visible; animation-name: fadeIn;"
          >
            <img
              width="300px"
              alt=""
              className="mb-3"
              src="https://firebasestorage.googleapis.com/v0/b/sj38-1565552456225.appspot.com/o/team-3.jpg?alt=media&token=b7a5c00b-82fc-4c6f-becc-2989eeadb00b"
            />
            <h5 className="mt-2">
              <strong>Lic. José Luis</strong>
            </h5>
            <p className="mb-3">
              <strong>Director Legal</strong>
            </p>
            <p className="mb-3 pt-4 pb-4">
              Nuestra experiencia es tu solución.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="25px"
              className="pe-2"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
            <a target="_blank" className="" href="tel:5518248651">
              55-18-24-86-51
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Nosotros;
