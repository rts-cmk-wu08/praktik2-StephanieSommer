import Image from "next/image";
import { HiMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const getData = async () => {
  const result = await fetch(`https://dinmaegler.onrender.com/agents?_limit=3`);
  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }
  console.log(result);
  return result.json();
};

const VoresMedarbejder = async () => {
  const agents = await getData();

  return (
    <section className="px-56 text-center my-28">
      <h2 className="text-4xl font-semibold">
        Mød vores engagerede medarbejdere
      </h2>
      <p className="text-lg text-center pt-6 w-[550px] m-auto">
        Din Mægler er garant for altid veluddannet assistance i dit boligsalg.
        Kontakt en af vores medarbejdere.
      </p>
      <ul className="grid grid-cols-3 gap-9 my-16">
        {agents.map((agent) => (
          <li className="shadow-lg">
            <Image
              src={agent.image.url}
              width={agent.image.formats.thumbnail.width}
              height={agent.image.formats.thumbnail.height}
              alt=""
            />
            <p className="mt-4 text-2xl font-semibold">{agent.name}</p>
            <p className="mt-2 text-lg text-darkgrey">{agent.title}</p>
            <div className="flex justify-center gap-2 py-5 text-xl">
              <p>
                <HiMail />
              </p>
              <p>
                {" "}
                <FaLinkedinIn />
              </p>
            </div>
          </li>
        ))}
      </ul>
      <Link href="/medarbejdere" className="bg-blue text-white p-4 mt-9">
        Se alle mæglere
      </Link>
    </section>
  );
};

export default VoresMedarbejder;
