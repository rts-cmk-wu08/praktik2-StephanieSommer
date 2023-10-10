const Billetter = () => {
  return (
    <main>
      <form action="/koeb">
        <input
          type="text"
          name="type"
          value="Alm. Partoutbillet"
          readOnly="readonly"
        />
        <input type="number" name="antal" />
        <input type="number" name="price" value="1495" /> DKK
        <button type="submit">Køb billet</button>
      </form>
    </main>
  );
};

export default Billetter;
