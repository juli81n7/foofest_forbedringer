import Link from "next/link";
import Image from "next/image";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link className="link" href="/">
        FOOFEST
      </Link>
      <div className="rightside">
        <button className="moon-btn" aria-hidden="true">
          <Image className="moon" src="/theme.svg" width={40} height={20} alt="Picture of the author" />
        </button>
        <nav>
          <ul className="nav-ul">
            <li>
              <Link className="link" href="/Tickets">
                TICKETS
              </Link>
            </li>
            <li>
              <Link className="link" href="/Program#now">
                PROGRAM
              </Link>
            </li>
            <li>
              <Link className="link" href="/Account">
                MY ACCOUNT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
