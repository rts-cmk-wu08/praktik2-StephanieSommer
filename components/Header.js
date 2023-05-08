import { IoIosPaperPlane } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import Navigation from "./Navigation";
import Logo from "./Logo";

const Header = () => {
  return (
    <header>
      <section className="bg-blue text-white flex justify-between px-56 py-3">
        <div className="flex gap-6">
          <p className="flex">
            <IoIosPaperPlane className="mt-1 mr-1" /> 4000@dinmaegler.com
          </p>
          <p className="flex">
            <BsFillTelephoneFill className="mt-1 mr-1" /> +45 7070 4000
          </p>
        </div>
        <div className="flex">
          <FaUser className="mt-1 mr-2" />
          <p>Log ind</p>
        </div>
      </section>
      <section className="flex justify-between mx-56 mt-6">
        <Logo />
        <Navigation />
      </section>
    </header>
  );
};

export default Header;
