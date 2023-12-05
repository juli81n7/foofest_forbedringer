import CountButton from "./CountButton";
import "../styles/ChooseTent.css";

function ChooseTent() {
  return (
    <div className="choose-wrapper">
      <h2>CHOOSE YOUR TENTS</h2>
      <div className="counter-line">
        <h3>1 PERS TENT</h3>
        <div className="counter">
          <CountButton btntext="-" />
          <p>0</p>
          <CountButton btntext="+" />
        </div>
      </div>
      <div className="counter-line">
        <h3>2 PERS TENT</h3>
        <div className="counter">
          <CountButton btntext="-" />
          <p>0</p>
          <CountButton btntext="+" />
        </div>
      </div>
      <div className="counter-line">
        <h3>3 PERS TENT</h3>
        <div className="counter">
          <CountButton btntext="-" />
          <p>0</p>
          <CountButton btntext="+" />
        </div>
      </div>
    </div>
  );
}

export default ChooseTent;
