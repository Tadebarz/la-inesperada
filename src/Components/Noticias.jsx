import React from "react";
import { useState } from "react";
import Modal from "./Modal";

const Noticias = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };
  return (
    <>
       <div>
        {isOpen ? (
          <Modal
            closePopup={() => {
              setIsOpen(false);
            }}
          />
        ) : null}
      </div>
      <h3
        id="noticias"
        className=" d-none d-lg-block ms-5 me-5 mt-1 mb-5 br-1 nuestros-vinos"
      >
        NOTICIAS
      </h3>

      <div  className="d-none d-lg-block container mb-5">
        <div className="row">
          <div className="col-lg-3 ">
            <a >
              <div class="card text-bg-dark cardi" onClick={openPopup}>
                <img
                  src="./image/Caja.png"
                  class="card-img img-noticias"
                  alt="..."
                />
                <div class="card-img-overlay"></div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 ">
            <a href="#">
              <div class="card text-bg-dark cardi ">
                <img
                  src="./image/Noticia1.png"
                  class="card-img img-noticias"
                  alt="..."
                />
                <div class="card-img-overlay"></div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 ">
            <a href="#">
              <div class="card text-bg-dark cardi ">
                <img
                  src="./image/Noticia2.png"
                  class="card-img img-noticias"
                  alt="..."
                />
                <div class="card-img-overlay"></div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 mb-5">
            <a href="#">
              <div class="card text-bg-dark cardi ">
                <img
                  src="./image/Noticia3.png"
                  class="card-img img-noticias"
                  alt="..."
                />
                <div class="card-img-overlay"></div>
              </div>
            </a>
          </div>
          <h3 className=" mt-5 br-1 "></h3>
        </div>
      </div>
    </>
  );
};

export default Noticias;
