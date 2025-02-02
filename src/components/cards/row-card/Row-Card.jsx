import "./Row-Card.css";

const Row_Card = ({ round }) => {
  return (
    <>
      <div className="row-card" key={round.id}>
        <div className="r-c-image"></div>
        <div className="r-c-data">
          <div className="r-c-named">{round.name}</div>
          <div className="r-c-details">{round.details}</div>
          <div className="r-c-price">{round.price}</div>
        </div>
      </div>
    </>
  );
};

export default Row_Card;