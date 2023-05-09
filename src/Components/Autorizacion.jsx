import { useState } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";





const mostrarAlert = () => {
  swal({
    title: "Acceso denegado",
    text: "Debes ser mayor de edad para acceder a este contenido.",
    icon: "error",

  });
};

const Autorizacion = () => {
  const navigate= useNavigate();
  const navigateHome=()=> {
    navigate('/home')
  }
  

  return (
    <div className="container-fluid position-absolute top-50 start-50 translate-middle text-center auth">
      <div className="row ">
        <div className="col-lg-12">
        <div className="d-none d-lg-block">
                  {" "}
                  <img
                    src="./image/Logo.png"
                    className="logoauth"
                    width={"270"}
                    alt=""
                  />
                </div>
          <h1 className=" mb-5 auth-text">
            Para ingresar, tienes que ser mayor de 18 años
          </h1>

            <button onClick={navigateHome} type="button" class="btn btn-secondary btn-lg m-5 btn-auth">
               Soy mayor de 18 años
            </button>
            <button onClick={() => mostrarAlert()} type="button" class="btn btn-danger btn-lg m-5 btn-auth2">
              Soy menor de 18 años
            </button>
        </div>
      </div>
    </div>
  );
};
export default Autorizacion;    
