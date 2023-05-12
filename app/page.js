import Hero from "@/components/home/Hero";
import LidtOmOs from "@/components/home/LidtOmOs";
import UdvalgteBoliger from "@/components/home/UdvalgteBoliger";
import Nyhedsbrev from "@/components/home/Nyhedsbrev";
import VoresMedarbejder from "@/components/home/VoresMedarbejder";
import HentApp from "@/components/home/HentApp";

const Home = async () => {
  return (
    <main>
      <Hero />
      <LidtOmOs />
      <UdvalgteBoliger />
      <Nyhedsbrev />
      <VoresMedarbejder />
      <HentApp />
    </main>
  );
};

export default Home;
