import Image from "next/image";
import Kontaktformular from "@/components/Kontaktformular";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosPaperPlane } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const Kontakt = () => {
  return (
    <main>
      <Image src="/KontaktOsBanner.png" width={1920} height={500} alt="" />
      <section className="mx-56 my-20">
        <h2 className="text-3xl font-medium">
          Vi sidder klar til at besvare dine spørgsmål
        </h2>
        <div className="border-t-4 border-black my-3 w-28 mt-4"></div>
        <p className="text-lg w-[800px] mt-6">
          Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang
          med at sælge sin bolig. Vores medarbejdere sider klar alle ugens dage
          til at svare på dine spørgsmål.
        </p>
        <div className="flex my-14 gap-6">
          <div className="w-[635px] border-2 p-8">
            <Kontaktformular />
          </div>
          <div className="border-2 w-[400px]">
            <div className="flex flex-col items-center pt-8">
              <BsFillTelephoneFill className="bg-blue text-white text-4 rounded-full p-3 w-12 h-12" />
              <p className="text-xl font-medium mt-4">Ring til os</p>
              <p className="text-lg mt-4">+45 7070 4000</p>
            </div>

            <div className="border-t-2 m-5"></div>

            <div className="flex flex-col items-center pt-6">
              <IoIosPaperPlane className="bg-blue text-white text-4 rounded-full p-3 w-12 h-12" />
              <p className="text-xl font-medium mt-4">Send en mail</p>
              <p className="text-lg mt-4">4000@dinmaelger.com</p>
            </div>

            <div className="border-t-2 m-5"></div>

            <div className="flex flex-col items-center pt-6">
              <IoLocationSharp className="bg-blue text-white text-4 rounded-full p-3 w-12 h-12" />
              <p className="text-xl font-medium mt-4">Butik</p>
              <p className="text-lg mt-4">Stændertorvet 78, 4000 Roskilde</p>
            </div>
          </div>
        </div>
      </section>
      <Image src="/Map.png" width={1920} height={500} alt="" />
    </main>
  );
};

export default Kontakt;
