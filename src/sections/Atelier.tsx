import { Reveal } from "../components/Reveal"

export function Atelier() {
  return (
    <section
      id="atelier"
      style={{
        position: "relative",
        padding: "var(--s-9) var(--pad-x) var(--s-8)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--s-6)",
          alignItems: "start",
        }}
        className="atelier-grid"
      >
        <Reveal style={{ paddingTop: "var(--s-6)" }}>
          <p className="eyebrow">The House</p>
          <h2 className="h1" style={{ margin: "var(--s-3) 0 var(--s-5)", maxWidth: "16ch" }}>
            We authenticate <span style={{ fontStyle: "italic", fontWeight: 300 }}>before we price.</span>
          </h2>
          <div className="body" style={{ maxWidth: "48ch" }}>
            <p>
              Christiannah started Luxuria from a single vitrine in Ibadan, with a
              loupe, a set of reference weights, and a refusal to sell anything
              she had not opened and inspected herself.
            </p>
            <p style={{ marginTop: "var(--s-3)" }}>
              That rule has not changed. Every watch is opened, every stone is
              louped, every certificate is checked against the piece in hand.
              What we sell, we would wear. What we buy, we would buy again.
            </p>
          </div>
          <div
            style={{
              marginTop: "var(--s-6)",
              display: "grid",
              gridTemplateColumns: "repeat(3, auto)",
              gap: "var(--s-5)",
              paddingTop: "var(--s-4)",
              borderTop: "1px solid var(--line)",
            }}
          >
            {[
              ["09", "Years in Ibadan"],
              ["100%", "Pieces authenticated in-house"],
              ["1", "Loupe, still the first tool"],
            ].map(([n, l]) => (
              <div key={l}>
                <p
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "2.75rem",
                    fontWeight: 400,
                    lineHeight: 1,
                    margin: 0,
                  }}
                >
                  {n}
                </p>
                <p className="meta" style={{ marginTop: "0.5rem", maxWidth: "14ch" }}>
                  {l}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div style={{ position: "relative" }}>
            <img
              src="https://images.pexels.com/photos/37401985/pexels-photo-37401985.jpeg?auto=compress&cs=tinysrgb&h=1500"
              alt="Authentication in the Luxuria showroom"
              style={{
                width: "calc(100% + 6rem)",
                marginLeft: "-3rem",
                height: "min(90vh, 60rem)",
                objectFit: "cover",
                objectPosition: "center 30%",
              }}
            />
          </div>
        </Reveal>
      </div>

      <Reveal
        delay={300}
        style={{
          maxWidth: "var(--max-w)",
          margin: "var(--s-7) auto 0",
        }}
      >
        <p
          className="h2"
          style={{
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontWeight: 300,
            maxWidth: "28ch",
            color: "var(--ash)",
          }}
        >
          “If I would not wear it on my own wrist, it does not enter the vitrine. That is the whole standard.”
        </p>
        <p className="meta" style={{ marginTop: "var(--s-3)" }}>— Christiannah, founder</p>
      </Reveal>
    </section>
  )
}
