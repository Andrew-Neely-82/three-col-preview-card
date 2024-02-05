const Card = ({ svg, title, context }) => {
  return (
    <>
      <div className="card-top">
        <img src={svg} alt="" />
        <h1 className="title">{title}</h1>
        <p className="context">{context}</p>
      </div>
      <button className="btn">Learn More</button>
    </>
  );
};
export default Card;
