import Image from "next/image";
import Link from "next/link";
import { BsGooglePlay, BsApple } from "react-icons/bs";

const HentApp = () => {
  return (
    <section className="flex justify-between bg-blue text-white px-56">
      <div className="w-1/2 pt-20">
        <h2 className="text-4xl font-medium">
          Hold dig opdateret på salgsprocessen
        </h2>
        <p className="text-lg pt-7">
          Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den
          ansvarlige mægler eller butik med vores app. Her kan du også se
          statistik på interessen for din bolig i alle vores salgskanaler.
        </p>
        <div className="flex mt-11">
          <Link
            href="/"
            className="flex gap-4 bg-white text-blue text-lg font-semibold p-3 w-44"
          >
            <BsGooglePlay className="mt-1" />
            Google Play
          </Link>
          <Link
            href="/"
            className="flex gap-4 border-white border text-lg font-semibold p-3 ml-4 w-44"
          >
            <BsApple className="mt-1" /> Apple Store
          </Link>
        </div>
      </div>
      <div className="flex pt-20">
        <Image src="/mobil1.png" width={270} height={425} />
        <Image src="/mobil2.svg" width={270} height={425} />
      </div>
    </section>
  );
};

export default HentApp;
