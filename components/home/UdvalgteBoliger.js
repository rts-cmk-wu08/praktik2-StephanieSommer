import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const result = await fetch(`https://dinmaegler.onrender.com/homes?_limit=4`);
  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }
  console.log(result);
  return result.json();
};

const UdvalgteBoliger = async () => {
  const udvalgte = await getData();

  return (
    <section className="bg-grey py-16">
      <h2 className="text-4xl font-semibold text-center">Udvalgte Boliger</h2>
      <p className="text-lg pt-6 w-[550px] m-auto text-center">
        There are many variations of passages of Lorem Ipsum available but the
        this in majority have suffered alteration in some
      </p>
      <ul className="grid grid-cols-2 pt-16 px-56">
        {udvalgte.map((udvalgt) => (
          <li>
            <Image
              src={udvalgt.images[0].formats.thumbnail.url}
              width={udvalgt.images[0].formats.thumbnail.width}
              height={udvalgt.images[0].formats.thumbnail.height}
            />
            <div className="bg-white p-6 w-[500px] shadow-lg mb-9">
              <h2 className="text-lg font-semibold">{udvalgt.adress1}</h2>
              <div className="flex gap-1 py-4">
                <p>{udvalgt.postalcode}</p>
                <p>{udvalgt.city}</p>
              </div>
              <div className="flex gap-1">
                <p className="text-lg font-semibold">{udvalgt.type}</p>
                <p>•</p>
                <p className="text-lg pb-4">Ejerudgift: {udvalgt.gross} kr.</p>
              </div>
              <div className="border-t-2 bg-black"></div>
              <div className="flex justify-between py-4">
                <div className="flex">
                  <p className="text-3xl pr-4">{udvalgt.energylabel}</p>
                  <p>{udvalgt.rooms} værelser</p>
                  <p className="px-1">•</p>
                  <p>{udvalgt.livingspace} m²</p>
                </div>
                <p>Kr. {udvalgt.price}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="text-center mt-7">
        <button className="bg-blue text-white w-36 h-12">
          <Link href="#">Se alle boliger</Link>
        </button>
      </div>
    </section>
  );
};

export default UdvalgteBoliger;
