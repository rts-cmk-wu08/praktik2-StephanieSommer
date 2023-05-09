import Image from "next/image";
import dinmaegler from "/public/dinmaegler.svg"

const Logo = () => {
  return (
      <Image src={dinmaegler} />
  );
};

export default Logo;
