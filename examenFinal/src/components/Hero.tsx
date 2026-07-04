import { useEffect, useState } from "react";
import data from "../data/siteData.json";

export default function Hero() {
  const slides = data.carousel;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((v) => (v + 1) % slides.length);
    }, 6000);
    return () => clearInterval(t);
  }, [slides.length]);

  const slide = slides[active];

  return (
    <section id="inicio" className="hero" style={{ backgroundImage: `url('https://sic-jac.com/images/taxes-740202_1920.jpg?1783120684253')` }}>
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-eyebrow">{slide.eyebrow} |</p>
        <p className="hero-text">{slide.text}</p>
        <a href="#productos" className="btn btn-primary">
          {slide.cta}
        </a>
      </div>

      <div className="hero-dots">
        {slides.map((s, i) => (
          <button
            key={s.id}
            className={`hero-dot ${i === active ? "is-active" : ""}`}
            aria-label={`Ir a la diapositiva ${i + 1}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  );
}
