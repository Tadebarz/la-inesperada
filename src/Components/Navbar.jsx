import React from "react";

const Navbar1 = () => {
  return (
    <div className=" Navbar  container-fluid fs-3 ">
      <div className="container">
        <nav class="navbar navbar-expand-lg text-center ">
          <div class="container-fluid">
            <img
              src="./image/Logo.png"
              className="d-lg-none"
              width={"170"}
              alt=""
            />
            <button
              class="navbar-toggler nav-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon "></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-center align-center"
              id="navbarNav"
            >
              <ul class="navbar-nav align-items-center text-center">
                <li class="nav-item me-lg-4">
                  <a
                    class="nav-link active text-light"
                    aria-current="page"
                    href="#noticias"
                  >
                    Noticias
                  </a>
                </li>
                <li class="nav-item me-lg-4">
                  <a class="nav-link text-light" href="#nosotros">
                    Nosotros
                  </a>
                </li>

                <div className="d-none d-lg-block">
                  {" "}
                  <img
                    src="./image/Logo.png"
                    className="logo"
                    width={"170"}
                    alt=""
                  />
                </div>

                <li class="nav-item me-lg-4 ">
                  
                    <a class="nav-link text-light m-lg-3 " href="#vinos">
                      Vinos
                    </a>
                  
                </li>

                <li class="nav-item  w-100">
                  <a href="#contacto" class="nav-link text-light ">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export { Navbar1 };
