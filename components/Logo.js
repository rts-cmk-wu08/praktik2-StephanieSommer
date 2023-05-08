import { BsHouses } from "react-icons/bs";

const Logo = () => {
  return (
    <div className=" flex text-blue gap-2">
      <BsHouses className="text-4xl" />
      <h2 className="uppercase font-extrabold text-2xl mt-2">din mægler</h2>
    </div>
  );
};

export default Logo;
