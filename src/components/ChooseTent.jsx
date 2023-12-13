import { useContext } from "react";
import { ValueContext, StateContext } from "./MyContext";
function ChooseTent({ showErrorTent }) {
  const state = useContext(ValueContext);
  const dispatch = useContext(StateContext);
  const totalTentSpots = state.tents.one + state.tents.two * 2 + state.tents.three * 3;
  function updateOneTent(action) {
    dispatch((old) => {
      const copy = { ...old };
      console.log(copy.tents.one);
      if (action === "increase") {
        if (totalTentSpots < copy.tickets) {
          copy.tents.one += 1;
        }
        console.log(copy.tents.one);
        return copy;
      } else if (action === "reduce") {
        if (copy.tents.one > 0) {
          copy.tents.one -= 1;
        }
        console.log(copy.tents.one);
        return copy;
      }
    });
  }
  function updateTwoTent(action) {
    dispatch((old) => {
      const copy = { ...old };
      console.log(copy.tents.two);
      if (action === "increase") {
        if (totalTentSpots < copy.tickets) {
          copy.tents.two += 1;
        }
        console.log(copy.tents.two);

        return copy;
      } else if (action === "reduce") {
        if (copy.tents.two > 0) {
          copy.tents.two -= 1;
        }
        console.log(copy.tents.two);
        return copy;
      }
    });
  }
  function updateThreeTent(action) {
    dispatch((old) => {
      const copy = { ...old };
      console.log(copy.tents.three);
      if (action === "increase") {
        if (totalTentSpots < copy.tickets) {
          copy.tents.three += 1;
        }
        console.log(copy.tents.three);

        return copy;
      } else if (action === "reduce") {
        if (copy.tents.three > 0) {
          copy.tents.three -= 1;
        }
        console.log(copy.tents.three);
        return copy;
      }
    });
  }

  return (
    <div className={`choose-wrapper ten ${showErrorTent ? "showError" : ""}`}>
      <h2>CHOOSE YOUR TENTS</h2>
      <div className="counter-line">
        <h3>1 PERS TENT</h3>
        <div className="counter">
          <button onClick={() => updateOneTent("reduce")}>-</button>
          <p>{state.tents.one}</p>
          <button onClick={() => updateOneTent("increase")}>+</button>
        </div>
      </div>
      <div className="counter-line">
        <h3>2 PERS TENT</h3>
        <div className="counter">
          <button onClick={() => updateTwoTent("reduce")}>-</button>
          <p>{state.tents.two}</p>
          <button onClick={() => updateTwoTent("increase")}>+</button>
        </div>
      </div>
      <div className="counter-line">
        <h3>3 PERS TENT</h3>
        <div className="counter">
          <button onClick={() => updateThreeTent("reduce")}>-</button>
          <p>{state.tents.three}</p>
          <button onClick={() => updateThreeTent("increase")}>+</button>
        </div>
      </div>
    </div>
  );
}

export default ChooseTent;
