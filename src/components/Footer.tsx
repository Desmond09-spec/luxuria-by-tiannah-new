export function Footer() {
  return (
    <footer
      style={{
        background: "var(--ink)",
        color: "var(--bone)",
        padding: "var(--s-8) var(--pad-x) var(--s-5)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr 1fr",
          gap: "var(--s-6)",
          alignItems: "start",
        }}
        className="footer-grid"
      >
        <div>
          <p className="eyebrow" style={{ color: "rgba(244,240,234,0.5)" }}>
            Showroom — Ibadan
          </p>
          <p className="h2" style={{ marginTop: "var(--s-3)", maxWidth: "20ch" }}>
            Buy, sell, or source. By appointment.
          </p>
          <a
            href="mailto:atelier@luxuriabytiannah.com"
            className="link-underline"
            style={{
              display: "inline-block",
              marginTop: "var(--s-4)",
              fontFamily: "var(--sans)",
              fontSize: "var(--t-small)",
              letterSpacing: "0.12em",
            }}
          >
            atelier@luxuriabytiannah.com
          </a>
        </div>

        <div>
          <p className="eyebrow" style={{ color: "rgba(244,240,234,0.5)" }}>
            Showroom hours
          </p>
          <p className="body" style={{ color: "rgba(244,240,234,0.82)", marginTop: "var(--s-2)" }}>
            By appointment.<br />
            Tue–Sat, 11–18.<br />
            Ibadan, Oyo State.
          </p>
        </div>

        <div>
          <p className="eyebrow" style={{ color: "rgba(244,240,234,0.5)" }}>
            Elsewhere
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "var(--s-2) 0 0" }}>
            {["Instagram", "WhatsApp", "Press"].map((l) => (
              <li key={l} style={{ marginBottom: "var(--s-2)" }}>
                <a
                  href="#"
                  className="link-underline body"
                  style={{ color: "rgba(244,240,234,0.82)" }}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "var(--s-7) auto 0",
          paddingTop: "var(--s-4)",
          borderTop: "1px solid rgba(244,240,234,0.14)",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "var(--s-2)",
        }}
      >
        <p className="meta" style={{ color: "rgba(244,240,234,0.45)" }}>
          © 2026 Luxuria by Tiannah. Every piece authenticated in-house.
        </p>
        <p className="meta" style={{ color: "rgba(244,240,234,0.45)" }}>
          Fine Jewelry &amp; Watches — Ibadan
        </p>
      </div>
    </footer>
  )
}
