import { useContext } from "react";
import { ValueContext, StateContext } from "./MyContext";

function ChooseTent({ showErrorTent, setShowErrorTent, setShowError, setButtonError }) {
  const state = useContext(ValueContext);
  const dispatch = useContext(StateContext);

  const totalTentSpots = state.tents.one + state.tents.two * 2 + state.tents.three * 3;

  function updateOneTent(action) {
    dispatch((old) => {
      const copy = JSON.parse(JSON.stringify(old));
      if (action === "increase") {
        if (totalTentSpots < copy.regular + copy.vip) {
          copy.tents.one += 1;
          setButtonError(false);
          return copy;
        }
        setShowErrorTent(true);
        return copy;
      } else if (action === "reduce") {
        if (copy.tents.one > 0) {
          copy.tents.one -= 1;
          setShowError(false);
          setShowErrorTent(false);
          return copy;
        }
        return copy;
      }
    });
  }
  function updateTwoTent(action) {
    dispatch((old) => {
      const copy = JSON.parse(JSON.stringify(old));

      if (action === "increase") {
        if (totalTentSpots + 1 < copy.regular + copy.vip) {
          copy.tents.two += 1;
          setButtonError(false);
          return copy;
        }
        setShowErrorTent(true);
        return copy;
      } else if (action === "reduce") {
        if (copy.tents.two > 0) {
          copy.tents.two -= 1;
          setShowError(false);
          setShowErrorTent(false);
          return copy;
        }

        return copy;
      }
    });
  }
  function updateThreeTent(action) {
    dispatch((old) => {
      const copy = JSON.parse(JSON.stringify(old));

      if (action === "increase") {
        if (totalTentSpots + 2 < copy.regular + copy.vip) {
          copy.tents.three += 1;
          setButtonError(false);
          return copy;
        }
        setShowErrorTent(true);
        return copy;
      } else if (action === "reduce") {
        if (copy.tents.three > 0) {
          copy.tents.three -= 1;
          setShowError(false);
          setShowErrorTent(false);
          return copy;
        }

        return copy;
      }
    });
  }
  function green() {
    dispatch((old) => {
      const copy = JSON.parse(JSON.stringify(old));
      copy.greenCamping = !copy.greenCamping;
      return copy;
    });
  }
  function crew() {
    dispatch((old) => {
      const copy = JSON.parse(JSON.stringify(old));
      copy.crewSetup = !copy.crewSetup;
      return copy;
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
      <div className="checkboxes green-option">
        <h3>
          GREEN CAMPING{" "}
          <div className="heart-container">
            <svg className="heart-icon green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.05 73.54">
              <g id="Layer_1-2" data-name="Layer 1">
                <polyline className="cls-1" points="45.02 73.18 16.86 45.02 .55 28.71 6.22 5.95 28.71 .55 45.02 16.86 61.33 .55 83.82 5.95 89.49 28.71 73.18 45.02 45.03 73.18" />
              </g>
            </svg>
          </div>
          <span>({(state.tents.one + state.tents.two + state.tents.three) * 249},- total)</span>
        </h3>
        <label htmlFor="green" className="checkbox-label" aria-label="Green Camping Checkbox">
          <input onClick={green} className="check-box" type="checkbox" name="green camping" id="green" />
        </label>
      </div>
      <div className="checkboxes crew-option">
        <h3>
          Tent setup <span>({state.tents.one * 199 + state.tents.two * 299 + state.tents.three * 399},- total)</span>
        </h3>
        <label htmlFor="crew" className="checkbox-label" aria-label="Crew setup tent">
          <input onClick={crew} className="check-box" type="checkbox" name="crew camping" id="crew" />
        </label>
      </div>
    </div>
  );
}

export default ChooseTent;
