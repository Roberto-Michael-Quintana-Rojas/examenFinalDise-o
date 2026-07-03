import data from "../data/siteData.json";

export default function Modulos() {
  return (
    <section id="productos" className="modulos">
      <div className="container">
        <div className="modulos-grid">
          {data.modulos.map((m) => (
            <div key={m.id} className={`modulo-card ${m.destacado ? "is-destacado" : ""}`}>
              <div className="modulo-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 3h9l3 3v15H6V3Z" />
                  <path d="M9 9h6M9 13h6M9 17h4" />
                </svg>
              </div>
              <h3>{m.nombre}</h3>
              <p className="precio">US$ {m.precio.toLocaleString("es-BO")}.-</p>
              <ul>
                {m.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <a href="#contactos" className="btn btn-primary btn-small">
                DETALLES
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
