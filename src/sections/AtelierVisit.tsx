import { Reveal } from "../components/Reveal"

export function AtelierVisit() {
  return (
    <section
      style={{
        position: "relative",
        padding: "var(--s-9) var(--pad-x)",
        background: "var(--ink)",
        color: "var(--bone)",
      }}
    >
      <Reveal
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--s-6)",
          alignItems: "center",
        }}
        className="visit-grid"
      >
        <div>
          <p className="eyebrow" style={{ color: "rgba(244,240,234,0.5)" }}>
            Buy · Sell · Source
          </p>
          <h2 className="h1" style={{ margin: "var(--s-3) 0 var(--s-4)", maxWidth: "18ch" }}>
            Have a piece to sell, <span style={{ fontStyle: "italic", fontWeight: 300 }}>or one you want found?</span>
          </h2>
          <p className="lead" style={{ color: "rgba(244,240,234,0.78)", maxWidth: "46ch" }}>
            We buy outright and we take on consignment. We also source — tell us the reference and the condition you want, and we will find it. Private appointments in our Ibadan showroom, by the hour.
          </p>
          <a
            href="mailto:atelier@luxuriabytiannah.com"
            className="btn-line"
            style={{
              marginTop: "var(--s-5)",
              color: "var(--bone)",
              borderColor: "rgba(244,240,234,0.6)",
            }}
          >
            Book an appointment <span className="arr">→</span>
          </a>
        </div>

        <Reveal delay={150}>
          <img
            src="https://images.pexels.com/photos/29013500/pexels-photo-29013500.jpeg?auto=compress&cs=tinysrgb&h=1500"
            alt="Luxuria showroom vitrine"
            style={{
              width: "calc(100% + 4rem)",
              marginRight: "-4rem",
              height: "min(70vh, 42rem)",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Reveal>
      </Reveal>
    </section>
  )
}
