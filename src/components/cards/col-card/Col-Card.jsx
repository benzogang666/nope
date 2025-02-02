import "./Col-Card.css";

const Col_Card = ({ round }) => {
  return (
    <>
      <div className="col-cards">
        {round.map((line) => (
          <div className="col-card" key={line.id}>
            <div className="c-c-image"></div>
            <div className="c-c-data">
              <div className="c-c-named">{line.name}</div>
              <div className="c-c-details">{line.details}</div>
              <div className="c-c-price">{line.price}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Col_Card;