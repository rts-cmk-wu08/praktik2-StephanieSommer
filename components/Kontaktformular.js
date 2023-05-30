const Kontaktformular = () => {
  return (
    <form action="">
      <div className="flex justify-between gap-6 mt-6 text-lg">
        <div className="flex flex-col w-1/2">
          <label htmlFor="name">Navn</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Indtast navn"
            className="border-2 p-3 mt-2 rounded"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Indtast email"
            className="border-2 p-3 mt-2 rounded"
          />
        </div>
      </div>

      <div className="flex flex-col mt-6">
        <label htmlFor="emne">Emne</label>
        <input
          type="text"
          name="emne"
          id="emne"
          placeholder="Hvad drejer din henvendelse sig om?"
          className="border-2 p-3 mt-2 rounded"
        />
      </div>
      <div className="flex flex-col mt-6">
        <label htmlFor="besked">Besked</label>
        <textarea
          name="besked"
          id="besked"
          cols="50"
          rows="6"
          placeholder="Skriv din besked her..."
          className="border-2 p-3 mt-2 rounded"
        ></textarea>
      </div>
      <input
        type="button"
        value="Send besked"
        className="bg-blue text-white p-4 mt-9 rounded"
      />
    </form>
  );
};

export default Kontaktformular;
