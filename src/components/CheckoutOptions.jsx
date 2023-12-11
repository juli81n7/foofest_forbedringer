import Button from "./Button";

import "../styles/CheckoutOptions.css";

function CheckoutOptions({ setToggleCheckout }) {
  return (
    <div className="flow-btns">
      <Button btntext="ADD TO BASKET" href={"#"}></Button>
      <Button btntext="BUY NOW" href={"#"}></Button>
      <button onClick={() => setToggleCheckout((old) => !old)}>GO TO CHECKOUT</button>
    </div>
  );
}

export default CheckoutOptions;
