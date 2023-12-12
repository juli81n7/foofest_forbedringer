import { useContext } from "react";
import { ValueContext, StateContext } from "./MyContext";
function ChooseTent({ onePers, updateOneTent, twoPers, updateTwoTent, threePers, updateThreeTent, showErrorTent }) {
  const state = useContext(ValueContext);
  const dispatch = useContext(StateContext);
  const totalTentSpots = state.tents.one + state.tents.two * 2 + state.tents.three * 3;
  function reduceOne() {
    dispatch((old) => {
      const copy = { ...old };
      if (copy.tents.one === 0) {
        return copy;
      } else {
        copy.tents.one -= 1;
        return copy;
      }
    });
  }
  function increaseOne() {
    dispatch((old) => {
      const copy = { ...old };
      copy.tents.one += 1;
      return copy;
    });
  }

  return (
    <div className={`choose-wrapper ten ${showErrorTent ? "showError" : ""}`}>
      <h2>CHOOSE YOUR TENTS</h2>
      <div className="counter-line">
        <h3>1 PERS TENT</h3>
        <div className="counter">
          <button onClick={reduceOne}>-</button>
          <p>{state.tents.one}</p>
          <button onClick={increaseOne}>+</button>
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
