import Image from "next/image";
import Link from "next/link";
import "../styles/Header.css";
import Button from "./Button";

function Header() {
  return (
    <header>
      <h1 className="headline headerh1">FOOFEST</h1>

      <div className="teasers">
        <p>Get ready for the party of the year.</p>
        <p>All your favorite underground artists that you have not heard of yet.</p>
        <p>Grab your crew and get your tickets before they are sold out and prepare yourselves for an experience you will not soon forget.</p>
        {/* indsæt <Link/> her i stedet?? */}
        <Button href="/Tickets" btntext="get tickets"></Button>
      </div>
      <Image className="hero-img" src="/partypeople.png" width={712} height={451} alt="Picture of a nightime concert, full of festive people" />
    </header>
  );
}

export default Header;
