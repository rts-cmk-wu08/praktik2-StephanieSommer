import Hero from "@/components/home/Hero";
import LidtOmOs from "@/components/home/LidtOmOs";
import UdvalgteBoliger from "@/components/home/UdvalgteBoliger";
import Nyhedsbrev from "@/components/home/Nyhedsbrev";

const Home = async () => {
  return (
    <main>
      <Hero />
      <LidtOmOs />
      <UdvalgteBoliger />
      <Nyhedsbrev />
    </main>
  );
};

export default Home;
