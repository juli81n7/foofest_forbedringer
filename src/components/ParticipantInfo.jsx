import "@/styles/ParticipantInfo.css";
import Button from "./Button";

export default function ParticipantForm() {
  return (
    <div className="formline">
      <h3>Participant 1</h3>
      <div className="formgrid">
        <div className="inputlayout">
          <label htmlFor="fullname">Full name</label>
          <input type="text" id="fullname" />
        </div>
        <div className="inputlayout">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="inputlayout">
          <label htmlFor="phone">phone number</label>
          <input type="tel" id="phone" />
        </div>
        <div className="inputlayout">
          <label htmlFor="birth">Date of birth</label>
          <input type="date" id="birth" />
        </div>
        <div className="inputlayout">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" />
        </div>
        <div className="formbtn">
          <Button href={"/"} btntext={"Next"}></Button>
        </div>
      </div>
    </div>
  );
}
