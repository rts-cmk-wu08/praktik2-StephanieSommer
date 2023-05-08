import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex gap-4">
      <Link href="/tilsalg">Boliger til salg</Link>
      <Link href="/maeglere">Mæglere</Link>
      <Link href="/favoritter">Mine favoritter</Link>
      <Link href="/kontakt">Kontakt os</Link>
    </nav>
  );
};

export default Navigation;
