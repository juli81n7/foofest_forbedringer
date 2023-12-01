import Link from "next/link";
import "../styles/secondaryBtn.css";

export default function SecondaryBtn({ secbtntext, href }) {
  return <button className="secbtn">{secbtntext}</button>;
}
