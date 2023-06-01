import Kontaktformular from "@/components/Kontaktformular";
import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosPaperPlane } from "react-icons/io";
import { BiSearch } from "react-icons/bi";

const getData = async (medarbejderId) => {
  const result = await fetch(
    `https://dinmaegler.onrender.com/agents/${medarbejderId}`
  );
  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }
  return result.json();
};

const MedarbejderDetails = async ({ params: { medarbejderId } }) => {
  const agent = await getData(medarbejderId);

  return (
    <main>
      <Image src="/KontaktBanner.png" width={1920} height={500} />
      <section className="mx-56 flex gap-6 my-24">
        <div className="border-[1px] border-[#D3DEE8] w-[730px] p-6">
          <div className="flex gap-6">
            <Image
              src={agent.image.url}
              width={agent.image.formats.thumbnail.width}
              height={agent.image.formats.thumbnail.height}
              className="w-[280px] h-[280px]"
            />
            <div>
              <p className="mt-4 text-2xl font-semibold">{agent.name}</p>
              <p className="mt-2 text-lg text-darkgrey">{agent.title}</p>
              <div className="border-t-2 my-4 w-14"></div>
              <div className="flex gap-4 my-2">
                <BsFillTelephoneFill />
                <p>{agent.phone}</p>
              </div>
              <div className="flex gap-4">
                <IoIosPaperPlane />
                <p>{agent.email}</p>
              </div>
            </div>
          </div>

          <div className="mt-9">
            <p className="text-xl font-semibold">Om {agent.name}</p>
            <div className="border-t-4 border-black my-3 w-14"></div>
            <p>{agent.description}</p>
          </div>

          <div className="border-[1px] border-[#D3DEE8] mt-24 p-6 rounded">
            <h2 className="text-xl font-semibold">Kontakt {agent.name}</h2>
            <div className="border-t-4 border-black my-3 w-14"></div>
            <Kontaktformular />
          </div>
        </div>

        <div>
          <div className="bg-lightblue h-[175px] p-6">
            <h2 className="text-2xl font-medium">Search Property</h2>
            <div className="border-t-2 my-4"></div>
            <form action="" className="relative">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search"
                className="border-2 p-2 pl-8 mt-2 rounded w-full"
              />
              <BiSearch className="absolute top-[22px] left-3 text-darkgrey" />
            </form>
          </div>

          <div className="bg-blue mt-5 text-white text-center py-28">
            <h2 className="text-3xl leading-10">
              Find The Best{" "}
              <span className="flex justify-center">Property</span> For Rent Or
              Buy
            </h2>
            <div className="border-t-4 border-white my-4 mx-28"></div>
            <p className="text-lg">Call Us Now</p>
            <p className="text-3xl mt-4">+00 123 456 789</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MedarbejderDetails;
