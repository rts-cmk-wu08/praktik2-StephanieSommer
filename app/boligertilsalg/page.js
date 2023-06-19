import SøgeFuntion from "@/components/tilsalg/SøgeFunktion";
import AlleBoliger from "@/components/tilsalg/AlleBoliger";
import Image from "next/image";

const BoligerTilSalg = () => {
  return (
    <main>
      <Image src="/Banner.svg" width={1920} height={500} alt="" />
      {/* <SøgeFuntion /> */}
      <AlleBoliger />
    </main>
  );
};

export default BoligerTilSalg;
