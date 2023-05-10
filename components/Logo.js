import Link from "next/link";
import Image from "next/image";
import dinmaegler from "/public/dinmaegler.svg"

const Logo = () => {
  return (
     <Link href="/"> <Image src={dinmaegler} /></Link>
  );
};

export default Logo;
