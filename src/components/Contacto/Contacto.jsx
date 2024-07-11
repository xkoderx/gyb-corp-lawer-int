import "./Contacto.css";
function Contacto() {
  return (
    <>
      <section className="contacto" id="contacto">
        <div className="container contact-form">
          <h1 className="text-center mt-5 mb-5">Contactanos!</h1>
          <form action="">
            <div className="row text-center">
              <div className="col-md-6">
                <div className="form-group mb-4">
                  <input
                    type="text"
                    name="txtName"
                    className="form-control"
                    placeholder="Nombre"
                    value=""
                  />
                </div>
                <div className="form-group mb-4">
                  <input
                    type="text"
                    name="txtEmail"
                    className="form-control"
                    placeholder="Correo Electrónico"
                    value=""
                  />
                </div>
                <div className="form-group mb-4">
                  <input
                    type="text"
                    name="txtPhone"
                    className="form-control"
                    placeholder="Número de teléfono"
                    value=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea
                    name="txtMsg"
                    className="form-control"
                    placeholder="Mensaje"
                    style={{ width: "100%", height: "150px" }}
                  ></textarea>
                </div>
              </div>
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                className="btn btn-primary mt-5"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Enviar
              </button>
              {/* <!-- Modal --> */}
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Gracias
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">Te responderemos pronto.</div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className="container mapa mt-5 mb-5">
        <div className="row">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d941.3470449196901!2d-98.8816667301636!3d19.3089549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1e54b7eee08b%3A0x72790e8637c3ffa0!2sC.%20Benito%20Ju%C3%A1rez%2029%2C%20La%20Venta%2C%2056530%20Ixtapaluca%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1720588175048!5m2!1ses-419!2smx"
            width="350"
            height="350"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default Contacto;
