import "../styles/Button.css";
import Link from "next/link";
function Button({ btntext, href }) {
  return (
    <Link href={href} className="pributton">
      {btntext}
    </Link>
  );
}

export default Button;
