import Link from "next/link";
import "../styles/SecondaryBtn.css";

export default function SecondaryBtn({ secbtntext, href }) {
  return <p className="secbtn">{secbtntext}</p>;
}
