import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosPaperPlane } from "react-icons/io";

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
        width={1920}
        height={500}
        className="h-screen"
      />
      <div className="flex mx-56 justify-between pt-16 pb-3">
        <div>
          <h2 className="text-xl font-semibold">{bolig.adress1}</h2>
          <div className="flex gap-1 py-4 text-xl font-semibold">
            <p>{bolig.postalcode}</p>
            <p>{bolig.city}</p>
          </div>
        </div>
        <Image
          src="/Group58.png"
          width={500}
          height={500}
          className="h-11 w-72"
        />
        <p className="text-3xl font-semibold">Kr. {bolig.price}</p>
      </div>
      <div className="border-t-2 bg-black mx-56"></div>

      <div className="mx-56 pt-11 flex justify-between">
        <div>
          <p>Sagsnummer:</p>
          <p>Boligareal:</p>
          <p>Grundareal:</p>
          <p>Rum/værelser:</p>
          <p>Antal plan:</p>
        </div>
        <div>
          <p>1234567898.</p>
          <p>{bolig.livingspace} m²</p>
          <p>{bolig.lotsize} m²</p>
          <p>{bolig.rooms}</p>
          <p>{bolig.floorplan.size}</p>
        </div>

        <div>
          <p>Kælder:</p>
          <p>Byggeår:</p>
          <p>Ombygget:</p>
          <p>Energimærke:</p>
        </div>
        <div>
          <p>{bolig.basementsize}</p>
          <p>{bolig.built}</p>
          <p>{bolig.remodel}</p>
          <p>{bolig.energylabel}</p>
        </div>

        <div>
          <p>Udbetaling:</p>
          <p>Brutto ex. ejerudgift:</p>
          <p>Netto ex. ejerudgift:</p>
          <p>Ejeruddgifter:</p>
        </div>
        <div>
          <p>Kr. {bolig.payment}</p>
          <p>Kr. {bolig.gross}</p>
          <p>Kr. {bolig.netto}</p>
          <p>Kr. {bolig.cost}</p>
        </div>
      </div>

      <section className="flex mx-56 mt-20 gap-12 pb-48">
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold">Beskrivelse</h2>
          <p className="pt-6 text-lg">{bolig.description}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Ansvarlig mægler</h2>
          <div className="flex gap-6 border-2 p-4 mt-8">
            <Image
              src={bolig.agent.image.url}
              width={bolig.agent.image.size}
              height={bolig.agent.image.size}
              className="h-[200px] w-[200px]"
            />
            <div>
              <p className="text-2xl font-semibold pb-2">{bolig.agent.name}</p>
              <p className="text-darkgrey pb-8">{bolig.agent.title}</p>
              <p className="flex gap-2 pb-2">
                <BsFillTelephoneFill /> {bolig.agent.phone}
              </p>
              <p className="flex gap-2">
                <IoIosPaperPlane /> {bolig.agent.email}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BoligDetail;
