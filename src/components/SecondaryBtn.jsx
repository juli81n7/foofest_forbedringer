import Link from "next/link";
import "../styles/SecondaryBtn.css";

export default function SecondaryBtn({ secbtntext, href }) {
  return (
    <Link href={href} className="secbtn">
      {secbtntext}
    </Link>
  );
}
