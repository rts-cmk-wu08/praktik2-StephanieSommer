import Link from "next/link";

export const getBands = async (stage) => {
  let res = await fetch(
    `http://localhost:4000/bands${stage ? "?stage=" + stage : ""}`
  );

  return res.json();
};

const Bands = async ({ searchParams: { stage } }) => {
  const bands = await getBands(stage);
  return (
    <main>
      <h1>Line up</h1>

      <nav>
        <Link href="?stage=Rød Scene">Rød Scene</Link>
        <Link href="?stage=Blå Scene">Blå Scene</Link>
        <Link href="?stage=Grøn Scene">Grøn Scene</Link>
        <Link href="?stage=Lilla Scene">Lilla Scene</Link>
      </nav>

      {bands.map((band) => (
        <p>{band.name}</p>
      ))}
    </main>
  );
};

export default Bands;
