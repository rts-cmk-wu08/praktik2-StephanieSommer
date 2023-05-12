import Image from "next/image";
import { HiMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import medarbejdereBanner from "/public/medarbejdereBanner.png";
import Link from "next/link";

const getData = async () => {
  const result = await fetch(`https://dinmaegler.onrender.com/agents`);
  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }
  console.log(result);
  return result.json();
};

const Medarbejdere = async () => {
  const agents = await getData();

  return (
    <main>
      <Image src={medarbejdereBanner} />
      <section className="px-56 text-center my-28">
        <ul className="grid grid-cols-3 gap-9 my-16">
          {agents.map((agent) => (
            <li className="shadow-lg">
              <Link href={`/medarbejdere/${agent.id}`}>
                <Image
                  src={agent.image.url}
                  width={agent.image.formats.thumbnail.width}
                  height={agent.image.formats.thumbnail.height}
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
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Medarbejdere;
