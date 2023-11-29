import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link className={styles.link} href="/">
        FOOFEST
      </Link>
      <div className={styles.rightside}>
        <button className={styles.button} aria-hidden="true">
          <Image className={styles.moon} src="/theme.svg" width={40} height={20} alt="Picture of the author" />
        </button>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li>
              <Link href="/tickets">TICKETS</Link>
            </li>
            <li>
              <Link href="/program">PROGRAM</Link>
            </li>
            <li>
              <Link href="/profile">PROFILE</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
