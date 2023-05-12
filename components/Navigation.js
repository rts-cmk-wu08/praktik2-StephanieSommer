import Link from "next/link";

const Navigation = ({ header, footer }) => {
  return (
    <nav className={`flex gap-4 mt-4 ${footer && "flex-col"}`}>
      <Link href="/boligertilsalg">Boliger til salg</Link>
      <Link href="/maeglere">Mæglere</Link>
      {header && <Link href="/favoritter">Mine favoritter</Link>}
      <Link href="/kontakt">Kontakt os</Link>
      {footer && <Link href="/login">Log ind / bliv bruger</Link>}
    </nav>
  );
};

export default Navigation;
