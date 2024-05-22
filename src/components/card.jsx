export function Card() {
  return ( 
    <div className="container d-flex">
    <div className="card" style={{ width: "18rem" }}>
      <a href="#">
        <img src="https://thumbs.dreamstime.com/z/s%C3%ADmbolo-de-perfil-masculino-inteligente-retrato-estilo-caricatura-m%C3%ADnimo-166146967.jpg?w=768" className="card-img-top" alt="..." />
      </a>
      <div className="card-body ">
        <h5 className="card-title text-center">Card title</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magnam velit earum necessitatibus voluptas.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    </div>
  );
}