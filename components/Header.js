import { IoIosPaperPlane } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import Navigation from "./Navigation";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="text-lg">
      <section className="flex justify-between bg-blue text-white px-56 py-3">
        <div className="flex gap-6">
          <p className="flex">
            <IoIosPaperPlane className="mt-1 mr-1" /> 4000@dinmaegler.com
          </p>
          <p className="flex">
            <BsFillTelephoneFill className="mt-1 mr-1" /> +45 7070 4000
          </p>
        </div>
        <div className="flex">
          <FaUser className="mt-1 mr-2" />
          <Link href="#">Log ind</Link>
        </div>
      </section>
      <section className="flex justify-between mx-56 my-3">
        <Link href="/">
          <Image src="/dinmaegler.svg" width={300} height={500} />
        </Link>
        <Navigation header />
      </section>
    </header>
  );
};

export default Header;
