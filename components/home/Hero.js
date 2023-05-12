import Image from "next/image";
import hero from "/public/hero.jpg";

const Hero = () => {
  return (
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
  );
};

export default Hero;
