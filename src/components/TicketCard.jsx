import Button from "./Button";
import "../styles/TicketCard.css";

export default function TicketCard({ btntext }) {
  return (
    <div className="cardframe">
      <h3 className="ticketh3">
        Tent and ticket <br /> for one
      </h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, voluptas error debitis ullam sequi nesciunt, corrupti animi dolorum esse nisi ab aliquam ad vel possimus eaque harum inventore aut hic!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <Button btntext="Buy now"></Button>
    </div>
  );
}
