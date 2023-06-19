import Image from "next/image";

const Nyhedsbrev = () => {
  return (
    <section className="relative">
      <Image
        src="/MaskGroup.svg"
        width={1920}
        height={500}
        className="bg-blue"
        alt=""
      />
      <div className="flex absolute top-20 items-center gap-20 mx-56">
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
