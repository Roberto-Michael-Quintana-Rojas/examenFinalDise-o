import data from "../data/siteData.json";

export default function Caracteristicas() {
  const { caracteristicas, objetivos, asesoria } = data;

  return (
    <section className="caracteristicas">
      <div className="container caracteristicas-grid">
        <div>
          <h2>{caracteristicas.title}</h2>
          <p className="intro">{caracteristicas.intro}</p>
          <ul className="check-list">
            {caracteristicas.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="objetivos-col">
          <div className="objetivos-block">
            <div className="objetivos-icon">
              <svg viewBox="0 0 48 48" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 38 38 10M38 10H24M38 10v14" />
              </svg>
            </div>
            <div>
              <h3>{objetivos.title}</h3>
              <ul className="arrow-list">
                {objetivos.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="objetivos-block">
            <div className="objetivos-icon">
              <svg viewBox="0 0 48 48" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="24" cy="16" r="6" />
                <path d="M10 40c0-7.7 6.3-14 14-14s14 6.3 14 14" />
              </svg>
            </div>
            <div>
              <h3>{asesoria.title}</h3>
              <p>{asesoria.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
