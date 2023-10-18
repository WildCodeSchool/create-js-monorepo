import PropTypes from "prop-types";

function Details({ selectedNode }) {
  return (
    <div className="details-container">
      <h2>Détails</h2>
      <p>Titre : {selectedNode.title}</p>
      <p>Numéro : {selectedNode.id}</p>
      <p>Détails : {selectedNode.detail}</p>
      <p>Prédécesseur : {selectedNode.ancestor}</p>
      <p>Type : {selectedNode.type}</p>
      <p>Terminal : {selectedNode.terminal} </p>
      {/* <h3>Etiquette</h3>
     <p className="details-etiquette">
        <img src={selectedNode.etiquette} alt="etiquette" />
      </p> */}
    </div>
  );
}

Details.propTypes = {
  selectedNode: PropTypes.shape({
    id: PropTypes.number.isRequired, // Changer en string
    title: PropTypes.string.isRequired,
    ancestor: PropTypes.number.isRequired,
    detail: PropTypes.string.isRequired,
    type: PropTypes.number.isRequired,
    terminal: PropTypes.string.isRequired,
  }).isRequired,
};

export default Details;
