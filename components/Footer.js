import Logo from "./Logo";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosPaperPlane } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="mx-56 bg-grey">
      <Logo />
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words.
      </p>
      <section>
        <div>
          <BsFillTelephoneFill />
          <div>
            <p>Ring til os</p>
            <p>+45 7070 4000</p>
          </div>
        </div>
        <div>
          <IoIosPaperPlane />
          <div>
            <p>Send en mail</p>
            <p>4000@dinmaelger.com</p>
          </div>
        </div>
        <div>
          <IoLocationSharp />
          <div>
            <p>Butik</p>
            <p>Stændertorvet 78, 4000 Roskilde</p>
          </div>
          <p>Din Mægler Roskilde, er din boligibutik i lokalområdet.</p>
        </div>
      </section>
      <div>
        <h2>Quick Links</h2>
        <nav>
          <Link href="/tilsalg">Boliger til salg</Link>
          <Link href="/maelgere">Mæglere</Link>
          <Link href="/kontakt">Kontakt os</Link>
          <Link href="/login">Log ind / Bliv bruger</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
