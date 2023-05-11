import Image from "next/image";
import MaskGroup from "/public/MaskGroup.svg";

const Nyhedsbrev = () => {
  return (
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
  );
};

export default Nyhedsbrev;
