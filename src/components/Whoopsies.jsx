import Button from "./Button";
import "@/styles/Whoopsies.css";

export default function Whoopsies() {
  return (
    <div className="whoopsies">
      {" "}
      <h2 className="whoopsies-heading">Whoopsies</h2>
      <p>You have not reserved any tickets yet. What are you waiting for? </p>
      <div className="btn_container">
        <Button href="/Tickets" btntext="Get Tickets" />
      </div>{" "}
    </div>
  );
}
