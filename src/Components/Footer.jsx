const Footer = () => {
  return (
    <>
      <footer>
        <div id="contacto" className="container-fluid footer">
          <div className="row">
            <div className="col-lg-4 mt-4 d-flex flex-column">
              <div>
                <p className="text-light">
                  <a
                    className="me-2"
                    href="https://www.instagram.com/lainesperadasdv/"
                  >
                    <i class="fa-brands fa-instagram insta"></i>
                    
                  </a>
                  <a href="https://www.instagram.com/lainesperadasdv/">lainesperadasdv</a>
                </p>
              </div>
              <div>
                <p className="text-light me-5">
                <i class="fa-solid fa-phone insta me-2"></i>
                099111222
                </p>
              </div>
              <div>
                <p className="text-light ms-5">
                <i class="fa-solid fa-envelope ms-4 p-2"></i>
                lainesperada23@gmail.com
                </p>
              </div>
            </div>

            <div className="col-lg-4 mt-1">
              <img src="./image/Logo.png" width={"40%"} alt="" />
              <p className="text-light">Copyright 2022 ©La inesperada</p>
            </div>
            <div className="col-lg-4 mt-3">
             
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
