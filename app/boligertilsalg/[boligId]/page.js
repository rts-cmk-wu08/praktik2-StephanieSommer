import Image from "next/image";

const getData = async (boligId) => {
  const result = await fetch(
    `https://dinmaegler.onrender.com/homes/${boligId}`
  );
  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }
  return result.json();
};

const BoligDetail = async ({ params: { boligId } }) => {
  const bolig = await getData(boligId);
  return (
    <main>
      <Image
        src={bolig.images[0].url}
        width={bolig.images[0].width}
        height={bolig.images[0].height}
      />
      <h2 className="text-lg font-semibold">{bolig.adress1}</h2>
      <div className="flex gap-1 py-4">
        <p>{bolig.postalcode}</p>
        <p>{bolig.city}</p>
      </div>
      <p>Kr. {bolig.price}</p>
      <p>Sagsnummer:</p>
      <p>Boligareal: {bolig.livingspace} m²</p>
      <p>Grundareal: {bolig.lotsize} m²</p>
      <p>Rum/værelser: {bolig.rooms}</p>
      <p>Antal plan: {bolig.floorplan.size}</p>
      <p>Kælder: {bolig.basementsize}</p>
      <p>Byggeår: {bolig.built}</p>
      <p>Ombygget: {bolig.remodel}</p>
      <p>Energimærke: {bolig.energylabel}</p>
      <p>Udbetaling: Kr. {bolig.payment}</p>
      <p>Brutto ex. ejerudgift: Kr. {bolig.gross}</p>
      <p>Netto ex. ejerudgift: Kr. {bolig.netto}</p>
      <p>Ejerudgifter: Kr. {bolig.cost}</p>
      <h2>Beskrivelse</h2>
      <p>{bolig.description}</p>
      <h2>Ansvarlig mægler</h2>
      <Image src={bolig.agent.image.url} width={bolig.agent.image.size} height={bolig.agent.image.size} />
      <p>{bolig.agent.name}</p>
      <p>{bolig.agent.title}</p>
      <p>{bolig.agent.phone}</p>
      <p>{bolig.agent.email}</p>
    </main>
  );
};

export default BoligDetail;
