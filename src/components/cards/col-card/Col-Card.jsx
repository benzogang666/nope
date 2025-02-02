import "./Col-Card.css";

const Col_Card = ({ round }) => {
  return (
    <>
      <div className="col-card" key={round.id}>
        <div className="c-c-image"></div>
        <div className="c-c-data">
          <div className="c-c-named">{round.name}</div>
          <div className="c-c-details">{round.details}</div>
          <div className="c-c-price">{round.price}</div>
        </div>
      </div>
    </>
  );
};

export default Col_Card;