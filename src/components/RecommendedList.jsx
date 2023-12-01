import "../styles/RecommendedList.css";

function Recommended(props) {
  return (
    <section className="recommended-container">
      <h2 className="recommended-heading">{props.heading}</h2>
      <div className="recommended">{props.children}</div>
    </section>
  );
}

export default Recommended;
