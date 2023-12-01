/* eslint-disable react/prop-types */
function CardComplete({ item }) {
  return (
    <figure className="container-card">
      <div className="left-part-container-card">
        <img
          style={{ height: "280px", width: "350px" }}
          src={item.img}
          alt={item.title}
        />
      </div>
      <div className="right-card-container">
        <div className="data-item">
          <div className="container-price_pro">
            <h1>{item.prix} €</h1>
          </div>
          <h2>{item.title}</h2>
          <p>{item.adresse}</p>
          <figcaption name="description">{item.resumes} </figcaption>
        </div>
      </div>
    </figure>
  );
}

export default CardComplete;
