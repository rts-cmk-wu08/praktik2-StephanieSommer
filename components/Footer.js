import Link from "next/link";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosPaperPlane } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import Navigation from "./Navigation";

const Footer = () => {
  return (
    <footer className="relative pt-12 bg-grey text-lg">
      <div className="px-56">
        <Link href="/">
          <Image src="/dinmaegler.svg" width={300} height={500} alt="" />
        </Link>
        <p className="w-2/3 pt-4">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words.
        </p>
        <section className="absolute bg-white shadow-md w-[434px] p-11 mt-14">
          <div className="flex gap-4 mb-6">
            <BsFillTelephoneFill className="bg-blue text-white text-4 rounded-full p-3 w-14 h-14" />
            <div className="m-2">
              <p className="text-xs">Ring til os</p>
              <p>+45 7070 4000</p>
            </div>
          </div>
          <div className="flex gap-4 mb-6">
            <IoIosPaperPlane className="bg-blue text-white text-4 rounded-full p-3 w-14 h-14" />
            <div className="m-2">
              <p className="text-xs">Send en mail</p>
              <p>4000@dinmaelger.com</p>
            </div>
          </div>
          <div className="flex gap-4">
            <IoLocationSharp className="bg-blue text-white text-4 rounded-full p-3 w-14 h-14" />
            <div className="m-2">
              <p className="text-xs">Butik</p>
              <p>Stændertorvet 78, 4000 Roskilde</p>
            </div>
          </div>
          <p className="mt-4 w-64">
            Din Mægler Roskilde, er din boligibutik i lokalområdet.
          </p>
        </section>
        <div className="ml-[500px] my-16">
          <h2 className="text-2xl font-semibold">Quick Links</h2>
          <Navigation footer />
        </div>
      </div>
      <section className="bg-white py-20">
        <p className="text-xs text-darkgrey ml-[724px]">
          Medlem af{" "}
          <span className="flex uppercase text-4xl font-bold">dms</span> Dansk
          Mægler Sammenslutning
        </p>
      </section>
      <section className="bg-blue text-white text-center h-16">
        <p className="pt-4">Layout By Jit Banik 2020</p>
      </section>
    </footer>
  );
};

export default Footer;
