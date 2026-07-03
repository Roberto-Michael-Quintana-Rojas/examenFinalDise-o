import data from "../data/siteData.json";

export default function Footer() {
  return (
    <footer id="distribuidores" className="site-footer">
      <div className="container">
        <h2>SUCURSALES Y DISTRIBUIDORES</h2>
        <div className="sucursales-grid">
          {data.sucursales.map((s) => (
            <div className="sucursal" key={s.titulo}>
              <h4>{s.titulo}</h4>
              {s.lineas.map((linea, i) => (
                <p key={i}>{linea}</p>
              ))}
            </div>
          ))}
        </div>

        <div id="contactos" className="footer-bottom">
          <div className="footer-socials">
            {data.socials.map((s) => (
              <a key={s.name} href={s.href} aria-label={s.name}>
                {s.icon[0].toUpperCase()}
              </a>
            ))}
          </div>
          <a href="#inicio" className="btn btn-primary btn-small">
            MAS DETALLES
          </a>
        </div>

        <p className="credit">{data.footer.credit}</p>
      </div>
    </footer>
  );
}
