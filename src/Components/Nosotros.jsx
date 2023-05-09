import React from "react";

const Nosotros = () => {
  return (
    <>
      <div>
        <h3 id="nosotros" className="ms-5 me-5 mt-1 mb-5 br-1 nuestros-vinos">
          QUIENES SOMOS
        </h3>
      </div>
      <div className="container  d-lg-block">
        <div className="row">
          <div className="col-lg-6 text-light ">
            <img
              className=" d-lg-none rounded-4 mb-3 image "
              src="./image/porcentajes.jpg"
              width={"100%"}
              height={"37%"}
            ></img>
            <h2 className="nosotros-tittles ">Porqué en lata?</h2>

            <p className="nosotros-text p-1  mb-5 fs-2">
              Es la modalidad de consumo que más crece en el mapa mundial de
              vinos. En mercados maduros como los de Chile y Argentina, que
              crean las tendencias de la región, los consumidores se sienten
              cada vez más atraídos por el vino en lata
            </p>
          </div>
          <div className="col-lg-6">
            <img
              className=" d-none d-lg-block rounded-4 mb-2 image ms-3"
              src="./image/porcentajes.jpg"
              width={"95%"}
              height={"100%"}
            ></img>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 justify-content-center align-center">
            <img
              className="  d-lg-block rounded-4 mb-2 image mt-4 "
              src="./image/ambiente.png"
              width={"100%"}
              height={"95%"}
            ></img>
          </div>
          <div className="col-lg-6 ">
            {" "}
            <div className="">
              <h2 className="nosotros-tittles mt-4 ">Ambiente</h2>
              <p className="text-light nosotros-text fs-2 ">
                En relación a la conciencia medioambiental, el reciclaje y la
                sustentabilidad son hoy temas cada vez más importantes, lo que
                explica la preferencia por las latas de aluminio, ya que son los
                envases más reciclados en el mundo con una tasa de reciclaje
                global de 69%.
              </p>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 mb-4">
                <img
                  src="./image/image2.png"
                  alt=""
                  width={"100%"}
                  height={"33%"}
                  className=" d-lg-none rounded-4 "
                />
                <h2 className="nosotros-tittles mt-5">Comodidad</h2>
                <p className="text-light nosotros-text fs-2 ">
                  La practicidad y las nuevas ocasiones de consumo son las
                  principales razones que han impulsado este cambio en el
                  consumidor a nivel global. La lata es más práctica, versátil y
                  conveniente. Es ideal para socializar al aire libre y ofrece
                  la libertad de consumir dosis más pequeñas.
                </p>
              </div>

              <div className="col-lg-6 mt-5">
                <img
                  src="./image/image2.png"
                  alt=""
                  width={"100%"}
                  height={"95%"}
                  className="d-none d-lg-block rounded-4 mb-2 image mt-1 ms-4"
                />
              </div>
            </div>
          </div>
        </div>
        <h3 className="d-lg-block d-none mt-5 br-1 nuestros-vinos "></h3>
      </div>
    </>
  );
};

export default Nosotros;
