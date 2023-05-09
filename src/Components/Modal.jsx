import React from "react";

const Modal = (props) => {
    
    
  return (
    <div className="pokeFormPopup mt-5 text-light m-3">
            <div className="justify-content-start d-flex ">
            <button type="button" className="closeModal fs-3" onClick={props.closePopup}>X</button>
            
      </div >
      <div className="container-fluid">
      <div className="col-lg-12 borde-titulo ">
      <h1 className="titulo-noticia">Titulo de la noticia</h1>
      <p className="align-items-end">10/20/30</p>
      </div>

      
      <div className="col-lg-12">
        <img src="./image/image1.png" className="mt-4 mb-4 imagen-noticia" width={500} alt="" />
        <h2 className="subtitulo">Subtitulo</h2>
        <p className="fs-4 parrafo-noticia">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
          inventore minus debitis quis vero repellat quia neque beatae nostrum
          quo iste pariatur numquam accusantium animi ab, officia porro?
          Distinctio, atque quidem tenetur neque in cupiditate sunt fugit at
          assumenda reprehenderit! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Consequatur eius sunt architecto. Est, praesentium
          voluptatum sint, commodi quis aperiam debitis incidunt blanditiis
          quisquam, nulla laudantium veniam necessitatibus quod libero iste
          delectus! Iure eius temporibus quos, voluptatem ullam magnam ex,
          inventore fugiat alias, autem sequi ut optio accusamus in quod
          mollitia ducimus quia reiciendis nostrum. Nam nemo laudantium incidunt
          accusamus rerum. Consequuntur assumenda minus, vel magni quia id
          excepturi reprehenderit quibusdam architecto quidem, obcaecati itaque
          necessitatibus? Quo maxime quod excepturi consequuntur placeat? Quidem
          numquam rem quos aliquam ea tempore dolore optio expedita dicta, quod
          dolorum delectus quisquam aut explicabo neque magni.f
        </p>
      </div>
      <div className="col-lg-12">
        {" "}
        <img src="./image/image2.png" width={500} alt="" className="noticia-imagen" />
      </div>{" "}
      <div className="col-lg-12">
        <p className="mt-4 fs-4 m-3 parrafo-noticia">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
          earum molestias tempore, ullam facere minima doloremque repudiandae
          odit accusamus numquam officia alias tenetur iure voluptatem velit
          suscipit perferendis amet voluptatum nobis ducimus dolorem. Fuga ipsum
          sit voluptatibus nobis sed? Qui debitis facere nam sit molestiae
          consectetur corporis vel amet sint quos aliquid ducimus doloremque,
          quam, veritatis aspernatur cum reiciendis quod repellat. Nulla iste
          voluptatem tempore possimus. Minima dolor expedita, magnam animi
          tempore, iusto voluptatibus ullam mollitia reiciendis fugiat
          doloremque excepturi nesciunt blanditiis maxime. Tenetur aliquid
          tempora repellendus est, cum ipsum nostrum repudiandae? Voluptates,
          sunt repudiandae! Modi placeat, perferendis natus voluptatum, nulla
          illo eum eaque labore eligendi eveniet voluptatibus provident
          nesciunt? Temporibus ad, animi modi facere officiis, fugiat nisi
          dignissimos saepe deleniti beatae molestiae porro in minima, quidem
          quos illum consequatur cumque et necessitatibus eaque autem. Totam
          optio error aspernatur eos dignissimos laudantium! Ab pariatur magnam
          soluta in officiis beatae ducimus?
        </p>
      </div>
    </div>
    </div>
  );
};

export default Modal;
