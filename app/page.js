import Image from "next/image";
import hero from "/public/hero.jpg";
import familyImage from "/public/familyImage.svg";
import homeIcon1 from "/public/homeIcon1.svg";
import homeIcon2 from "/public/homeIcon2.svg";
import propertyIcon from "/public/propertyIcon.svg";
import mapsIcon from "/public/mapsIcon.svg";
import customerIcon from "/public/customerIcon.svg";
import MaskGroup from "/public/MaskGroup.svg";
import Link from "next/link";

const getData = async () => {
  const result = await fetch(`https://dinmaegler.onrender.com/homes?_limit=4`);
  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }
  console.log(result);
  return result.json();
};

const Home = async () => {
  const udvalgte = await getData();

  return (
    <main>
      <section className="flex justify-center relative">
        <Image src={hero} alt="dreamhouse" />
        <h2 className="absolute inset-28 text-center font-semibold text-5xl text-white">
          Søg efter din drømmebolig
        </h2>
        <div className="absolute top-1/3 bg-white w-[920px] h-[202px] flex flex-col justify-center gap-4 pl-9">
          <p className="text-xl font-semibold">
            Søg blandt 158 boliger til salg i 74 butikker
          </p>
          <p>Hvad skal din næste bolig indeholde</p>
          <form action="">
            <input
              className="border-2 w-[728px] p-3 mr-2"
              type="search"
              name="search"
              id="search"
              placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
            />
            <input
              className="bg-blue text-white w-28 h-12"
              type="button"
              value="Søg"
            />
          </form>
        </div>
      </section>

      <section className="px-56 py-24">
        <div className="flex gap-28">
          <Image src={familyImage} alt="family photo" />
          <div>
            <div>
              <h2 className="text-4xl font-semibold">
                Vi har fulgt danskerne hjem i snart 4 årtier
              </h2>
              <p className="text-2xl font-medium pt-7">
                Det synes vi siger noget om os!
              </p>
              <p className="text-lg pt-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has normal
                distribution.
              </p>
              <p className="text-lg pt-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div className="flex pt-9 justify-between">
              <div className="flex gap-5">
                <Image
                  src={homeIcon1}
                  className="bg-lightblue border-8 w-16 border-lightblue"
                  alt="hand and house icon"
                />
                <div>
                  <p className="text-2xl font-medium">4829</p>
                  <p className="text-lg">boliger solgt</p>
                </div>
              </div>
              <div className="flex gap-5">
                <Image
                  src={homeIcon2}
                  className="bg-lightblue border-8 w-16 border-lightblue"
                  alt="house icon"
                />
                <div>
                  <p className="text-2xl font-medium">158</p>
                  <p className="text-lg">boliger til salg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 bg-black mt-16"></div>

        <section className="flex gap-6 mt-14">
          <div className="flex gap-4">
            <Image
              src={propertyIcon}
              className="bg-lightblue border-[12px] w-14 h-14 border-lightblue"
              alt="property icon"
            />
            <div>
              <p className="text-2xl font-medium">Bestil et salgstjek</p>
              <p className="text-lg pt-3">
                Med et Din Mægler Salgstjek bliver du opdateret på værdien af
                din bolig.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Image
              src={mapsIcon}
              className="bg-lightblue border-[12px] w-14 h-14 border-lightblue"
              alt="maps icon"
            />
            <div>
              <p className="text-2xl font-medium">74 butikker</p>
              <p className="text-lg pt-3">
                Hos Din Mægler er din bolig til salg i alle vores 74 butikker,
                som er fordelt rundt om i Danmark.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Image
              src={customerIcon}
              className="bg-lightblue border-[12px] w-14 h-14 border-lightblue"
              alt="hand icon"
            />
            <div>
              <p className="text-2xl font-medium">Tilmeld køberkartotek</p>
              <p className="text-lg pt-3">
                Når du er tilmeldt vores køberkartotek, bliver du kontaktet
                inden en ny bolig bliver annonceret.
              </p>
            </div>
          </div>
        </section>
      </section>

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
                  <p className="text-lg pb-4">
                    Ejerudgift: {udvalgt.gross} kr.
                  </p>
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
      <section className="relative">
        <Image src={MaskGroup} className="bg-blue" />
        <div className="flex items-center gap-20 mx-56 absolute top-20">
          <h2 className="text-white text-2xl">
            Tilmeld dig vores nyhedsbrev og{" "}
            <span className="flex"> hold dig opdateret på boligmarkedet </span>
          </h2>
          <form action="">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Indtast din email adresse"
              className="relative border-2 rounded-sm w-[540px] p-3 mr-2"
            />
            <input
              type="submit"
              value="-->"
              className="absolute right-8 top-5 font-semibold"
            />
          </form>
        </div>
      </section>
    </main>
  );
};

export default Home;
