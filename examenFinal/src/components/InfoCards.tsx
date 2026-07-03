import data from "../data/siteData.json";

const Icons: Record<string, JSX.Element> = {
  settings: (
    <svg viewBox="0 0 48 48" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="24" cy="24" r="6" />
      <path d="M24 6v6M24 36v6M6 24h6M36 24h6M11 11l4.2 4.2M32.8 32.8 37 37M37 11l-4.2 4.2M15.2 32.8 11 37" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 48 48" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M24 8a14 14 0 0 0-14 14v8a4 4 0 0 0 4 4h2V22h-2a12 12 0 0 1 24 0h-2v12h2a4 4 0 0 0 4-4v-8a14 14 0 0 0-14-14Z" />
      <path d="M14 34v2a4 4 0 0 0 4 4h4" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 48 48" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 40V20M18 40V10M28 40V26M38 40V16" />
      <path d="M8 40h32" />
    </svg>
  ),
  payment: (
    <svg viewBox="0 0 48 48" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="6" y="12" width="36" height="24" rx="3" />
      <path d="M6 20h36" />
      <path d="M12 28h8" />
    </svg>
  ),
};

export default function InfoCards() {
  return (
    <section className="info-cards">
      <div className="container info-cards-grid">
        {data.infoCards.map((card) => (
          <div key={card.id} className="info-card">
            <div className="info-card-icon">{Icons[card.icon]}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
      <a href="#contactos" className="chat-bubble">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M4 4h16v12H7l-3 3V4Z" />
        </svg>
        Chat
      </a>
    </section>
  );
}
