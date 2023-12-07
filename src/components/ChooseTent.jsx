function ChooseTent({ onePers, updateOneTent, twoPers, updateTwoTent, threePers, updateThreeTent, showErrorTent }) {
  return (
    <div className={`choose-wrapper ten ${showErrorTent ? "showError" : ""}`}>
      <h2>CHOOSE YOUR TENTS</h2>
      <div className="counter-line">
        <h3>1 PERS TENT</h3>
        <div className="counter">
          <button onClick={() => updateOneTent("remove")}>-</button>
          <p>{onePers}</p>
          <button onClick={() => updateOneTent("add")}>+</button>
        </div>
      </div>
      <div className="counter-line">
        <h3>2 PERS TENT</h3>
        <div className="counter">
          <button onClick={() => updateTwoTent("remove")}>-</button>
          <p>{twoPers}</p>
          <button onClick={() => updateTwoTent("add")}>+</button>
        </div>
      </div>
      <div className="counter-line">
        <h3>3 PERS TENT</h3>
        <div className="counter">
          <button onClick={() => updateThreeTent("remove")}>-</button>
          <p>{threePers}</p>
          <button onClick={() => updateThreeTent("add")}>+</button>
        </div>
      </div>
    </div>
  );
}

export default ChooseTent;
