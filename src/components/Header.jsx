import Image from "next/image";
import Link from "next/link";
import "../styles/Header.css";
import Button from "./Button";

function Header() {
  return (
    <header>
      <h1 className="headline">FOOFEST</h1>
      <section className="headersection">
        <div className="teasers">
          <p>Get ready for the party of the year.</p>
          <p>All your favorite underground artists that you haven´t heard of yet.</p>
          <p>Grab your crew and get your tickets before they are sold out and prepare yourselves for an experience you won´t soon forget.</p>
          {/* indsæt <Button/> her i stedet?? */}
          <Button href="/tickets" btntext="get tickets"></Button>
        </div>
        <Image src="/partypeople.png" width={712} height={451} alt="Picture of a nightime concert, full of festive people" />
      </section>
    </header>
  );
}

export default Header;
