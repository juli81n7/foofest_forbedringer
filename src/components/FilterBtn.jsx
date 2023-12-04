import "../styles/FilterBtn.css";
import Link from "next/link";
function Button({ btntext }) {
  return <button className="filter-button">{btntext}</button>;
}

export default Button;
