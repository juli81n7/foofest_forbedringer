import Button from "./Button";
import "@/styles/Thanks.css";
export default function Thanks() {
  return (
    <div className="thankscontainer">
      <h1>Thank you for your reservation</h1>
      <div>
        <h2>Your order number:</h2>
        <h2>1234</h2>
      </div>
      <Button href={"/Account"} btntext={"View tickets"}></Button>
    </div>
  );
}
