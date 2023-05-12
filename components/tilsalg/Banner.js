import Image from "next/image";
import Banner from "/public/Banner.svg";

const Hero = () => {
  return (
    <section>
      <Image src={Banner} />
    </section>
  );
};

export default Hero;
