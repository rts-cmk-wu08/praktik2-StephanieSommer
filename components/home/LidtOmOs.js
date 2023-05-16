import Image from "next/image";

const LidtOmOs = () => {
  return (
    <section className="px-56 py-24">
      <div className="flex gap-28">
        <Image src="/familyImage.svg" width={500} height={500} />
        <div>
          <div>
            <h2 className="text-4xl font-semibold">
              Vi har fulgt danskerne hjem i snart 4 årtier
            </h2>
            <p className="text-2xl font-medium pt-7">
              Det synes vi siger noget om os!
            </p>
            <p className="text-lg pt-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has normal distribution.
            </p>
            <p className="text-lg pt-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="flex justify-between pt-9">
            <div className="flex gap-5">
              <Image
                src="/homeIcon1.svg"
                width={500}
                height={500}
                className="bg-lightblue border-8 border-lightblue w-16"
                alt="hand and house icon"
              />
              <div>
                <p className="text-2xl font-medium">4829</p>
                <p className="text-lg">boliger solgt</p>
              </div>
            </div>
            <div className="flex gap-5">
              <Image
                src="/homeIcon2.svg"
                width={500}
                height={500}
                className="bg-lightblue border-8 border-lightblue w-16"
                alt="house icon"
              />
              <div>
                <p className="text-2xl font-medium">158</p>
                <p className="text-lg">boliger til salg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 bg-black mt-16"></div>

      <section className="flex gap-6 mt-14">
        <div className="flex gap-4">
          <Image
            src="/propertyIcon.svg"
            width={500}
            height={500}
            className="bg-lightblue border-[12px] border-lightblue w-14 h-14"
            alt="property icon"
          />
          <div>
            <p className="text-2xl font-medium">Bestil et salgstjek</p>
            <p className="text-lg pt-3">
              Med et Din Mægler Salgstjek bliver du opdateret på værdien af din
              bolig.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <Image
            src="/mapsIcon.svg"
            width={500}
            height={500}
            className="bg-lightblue border-[12px] border-lightblue w-14 h-14"
            alt="maps icon"
          />
          <div>
            <p className="text-2xl font-medium">74 butikker</p>
            <p className="text-lg pt-3">
              Hos Din Mægler er din bolig til salg i alle vores 74 butikker, som
              er fordelt rundt om i Danmark.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <Image
            src="/customerIcon.svg"
            width={500}
            height={500}
            className="bg-lightblue border-[12px] border-lightblue w-14 h-14"
            alt="hand icon"
          />
          <div>
            <p className="text-2xl font-medium">Tilmeld køberkartotek</p>
            <p className="text-lg pt-3">
              Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden
              en ny bolig bliver annonceret.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default LidtOmOs;
