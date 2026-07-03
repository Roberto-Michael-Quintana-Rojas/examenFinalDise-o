import data from "../data/siteData.json";

export default function Clientes() {
  return (
    <section id="clientes" className="clientes">
      <div className="container">
        <h2>NUESTROS CLIENTES</h2>
        <div className="clientes-grid">
          {data.clientes.map((c) => (
            <div className="cliente-logo" key={c}>
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
