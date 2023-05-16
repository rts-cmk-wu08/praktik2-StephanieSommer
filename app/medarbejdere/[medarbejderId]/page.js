import Image from "next/image";

const getData = async (medarbejderId) => {
  const result = await fetch(
    `https://dinmaegler.onrender.com/agents/${medarbejderId}`
  );
  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }
  return result.json();
};

const MedarbejderDetails = async ({ params: { medarbejderId } }) => {
  const agent = await getData(medarbejderId);

  return (
    <main>
      <Image src="/KontaktBanner.png" width={1920} height={500} />
      <Image
        src={agent.image.url}
        width={agent.image.formats.thumbnail.width}
        height={agent.image.formats.thumbnail.height}
      />
      <p className="mt-4 text-2xl font-semibold">{agent.name}</p>
      <p className="mt-2 text-lg text-darkgrey">{agent.title}</p>
      <p>{agent.phone}</p>
      <p>{agent.email}</p>
      <p>Om {agent.name}</p>
      {/* <p>{agent.description}</p> */}

      <div>
        <h2>Kontakt {agent.name}</h2>
        <form action="">
          <label htmlFor="name">Navn</label>
          <input type="text" name="name" id="name" placeholder="Indtast navn" />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Indtast email"
          />
          <label htmlFor="emne">Emne</label>
          <input
            type="text"
            name="emne"
            id="emne"
            placeholder="Hvad drejer din henvendelse sig om?"
          />
          <label htmlFor="besked">Besked</label>
          <textarea
            name="besked"
            id="besked"
            cols="30"
            rows="10"
            placeholder="Skriv din besked her..."
          ></textarea>
          <input type="button" value="Send besked" />
        </form>
      </div>

      <div>
        <h2>Search Property</h2>
        <form action="">
          <input type="search" name="search" id="search" placeholder="Search" />
        </form>
      </div>

      <div>
        <h2>Find The Best Property For Rent Or Buy</h2>
        <p>Call Us Now</p>
        <p>+00 123 456 789</p>
      </div>
    </main>
  );
};

export default MedarbejderDetails;
