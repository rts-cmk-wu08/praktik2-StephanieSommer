import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const result = await fetch(`https://dinmaegler.onrender.com/homes`);
  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }
  console.log(result);
  return result.json();
};

const AlleBoliger = async () => {
  const boliger = await getData();

  return (
    <section className="px-56">
      <ul className="grid grid-cols-2 gap-20 pt-16">
        {boliger.map((bolig) => (
          <li>
            <Link href={`/boligertilsalg/${bolig.id}`}>
              <Image
                src={bolig.images[0].formats.thumbnail.url}
                width={bolig.images[0].formats.thumbnail.width}
                height={bolig.images[0].formats.thumbnail.height}
              />
              <div className="bg-white p-6 w-[500px] shadow-lg mb-9">
                <h2 className="text-lg font-semibold">{bolig.adress1}</h2>
                <div className="flex gap-1 py-4">
                  <p>{bolig.postalcode}</p>
                  <p>{bolig.city}</p>
                </div>
                <div className="flex gap-1">
                  <p className="text-lg font-semibold">{bolig.type}</p>
                  <p>•</p>
                  <p className="text-lg pb-4">Ejerudgift: {bolig.gross} kr.</p>
                </div>
                <div className="border-t-2 bg-black"></div>
                <div className="flex justify-between py-4">
                  <div className="flex">
                    <p className="text-3xl pr-4">{bolig.energylabel}</p>
                    <p>{bolig.rooms} værelser</p>
                    <p className="px-1">•</p>
                    <p>{bolig.livingspace} m²</p>
                  </div>
                  <p>Kr. {bolig.price}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AlleBoliger;
