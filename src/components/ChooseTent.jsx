import "../styles/ChooseTent.css";
import CountButton from "./CountButton";

function ChooseTent() {
  return (
    <div>
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
