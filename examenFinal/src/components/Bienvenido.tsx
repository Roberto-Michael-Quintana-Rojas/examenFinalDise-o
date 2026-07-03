import data from "../data/siteData.json";

export default function Bienvenido() {
  const { bienvenido } = data;

  return (
    <section id="descargas" className="bienvenido">
      <div className="container bienvenido-grid">
        <div className="product-boxes">
          {bienvenido.boxes.map((box, i) => (
            <div className="product-box" key={box} style={{ zIndex: bienvenido.boxes.length - i }}>
              
            </div>
          ))}
        </div>

        <div className="bienvenido-copy">
          <h2>{bienvenido.title}</h2>
          <p>{bienvenido.paragraph}</p>
          <ul className="period-list">
            {bienvenido.periods.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container">
        <p className="registro">{bienvenido.registro}</p>
      </div>
    </section>
  );
}
