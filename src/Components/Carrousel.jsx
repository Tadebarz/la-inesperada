import React from "react";

const Carrousel = () => {
  return (
    <div className="container-fluid mw-100">
      
      <div className="row">
        <div className="col-lg-12  mb-5">
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner ">

                <div class="carousel-item active">
                
                  <img src="./image/bodega.jpg" class="d-block w-100" alt="..." />
                  
              </div>
              <div class="carousel-item">
                <img src="./image/image2.png" class="d-block w-100" alt="..." />
              </div>
              
              <div class="carousel-item ">
                <img src="./image/image3.png" class="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
