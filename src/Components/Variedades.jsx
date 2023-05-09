import React from "react";

const Variedades = () => {
  return (
    <>
      {" "}
      <div>
        <h3 id="vinos" className="ms-5 me-5 mt-5 br-1 nuestros-vinos">
          NUESTROS VINOS
        </h3>
      </div>
      <div className="container mt-3">
        <p className="text-light fs-1 mb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde alias
          ducimus dignissimos corrupti excepturi!
        </p>

        <div className="d-lg-none col-12 ">
          <div class="card mb-5 bg-black text-light">
            <div class="card-body card-sm">
              <h2 class="card-title titulo-card ">Rose</h2>
              <p class="card-text fs-2 ">
                El rosado es una variedad que crece en la preferencia mundial.
                El secreto es combinar sabores y aromas para lograr el
                equilibrio entre personalidad y suavidad. Se sirve frío.
              </p>
            </div>
            <img src="./image/inesperada.png" class="image-can" alt="..." />
          </div>
          <div class="card mb-5 bg-black text-light">
            <div class="card-body card-sm">
              <h3 class="card-title titulo-card">Merlot</h3>
              <p class="card-text fs-2">
                El rosado es una variedad que crece en la preferencia mundial.
                El secreto es combinar sabores y aromas para lograr el
                equilibrio entre personalidad y suavidad. Se sirve frío.
              </p>
              <p class="card-text"></p>
            </div>
            <img
              src="./image/inesperada.png"
              class="card-img-bottom"
              alt="..."
            />
          </div>
          <div class="card mb-5 bg-black text-light ">
            <div class="card-body card-sm">
              <h3 class="card-title titulo-card">Chardonnay</h3>
              <p class="card-text fs-2  ">
                La dedicación de los enólogos creó este vino especialmente para
                celebrar. Es frutado, ligero, perfumado. Una fiesta para los
                sentidos.
              </p>
            </div>
            <img
              src="./image/inesperada.png"
              class="card-img-bottom"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div className="container d-none d-lg-flex ">
        <div class="row row-cols-1 row-cols-md-2 g-4 mb-5">
          <div class="col-lg-4">
            <div class="card card-lg ">
              <img
                src="./image/inesperada.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title fs-1 titulo-card">Chardonnay</h5>
                <p class="card-text fs-5">
                  La dedicación de los enólogos creó este vino especialmente
                  para celebrar. Es frutado, ligero, perfumado. Una fiesta para
                  los sentidos.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card card-lg">
              <img
                src="./image/inesperada.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title fs-1 titulo-card">Rose</h5>
                <p class="card-text fs-5">
                  El rosado es una variedad que crece en la preferencia mundial.
                  El secreto es combinar sabores y aromas para lograr el
                  equilibrio entre personalidad y suavidad. Se sirve frío.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card card-lg">
              <img
                src="./image/inesperada.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title fs-1 titulo-card">Merlot</h5>
                <p class="card-text fs-5 ">
                  Joven, vibrante, amable. Expresa las nuevas tendencias en el
                  gusto sin perder contacto con las raíces y tradiciones del
                  Merlot uruguayo.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Variedades;
