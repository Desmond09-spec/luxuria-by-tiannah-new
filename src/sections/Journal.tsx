import { Reveal } from "../components/Reveal"

export function Journal() {
  return (
    <section
      id="journal"
      style={{
        position: "relative",
        padding: "var(--s-9) 0 var(--s-8)",
        overflow: "hidden",
      }}
    >
      <Reveal
        style={{
          width: "62%",
          maxWidth: "48rem",
          marginLeft: "var(--pad-x)",
        }}
      >
        <img
          src="https://images.pexels.com/photos/3656125/pexels-photo-3656125.jpeg?auto=compress&cs=tinysrgb&h=1500"
          alt="On provenance and the loupe"
          style={{
            width: "100%",
            height: "min(88vh, 56rem)",
            objectFit: "cover",
            objectPosition: "center 30%",
          }}
        />
      </Reveal>

      <Reveal
        delay={200}
        style={{
          position: "relative",
          width: "min(36rem, 44vw)",
          marginLeft: "auto",
          marginRight: "calc(var(--pad-x) + 4vw)",
          marginTop: "-14vh",
          background: "var(--bone)",
          padding: "var(--s-6) var(--s-5)",
        }}
        className="journal-text"
      >
        <p className="eyebrow">Journal — 01</p>
        <h2 className="h2" style={{ margin: "var(--s-2) 0 var(--s-4)", maxWidth: "22ch" }}>
          On provenance, and why we open every case.
        </h2>
        <div className="body">
          <p>
            A certificate tells you what a piece is supposed to be. It does not
            tell you what the piece is. The difference is a dial that has been
            re-lumed, a stone that has been treated, a crown that has been
            replaced.
          </p>
          <p style={{ marginTop: "var(--s-3)" }}>
            We open every case. We loupe every stone. We weigh, we check
            serials, we compare against reference. It is slow. It is the whole
            business.
          </p>
        </div>
        <a
          href="#"
          className="btn-line"
          style={{ marginTop: "var(--s-5)" }}
        >
          Read the journal <span className="arr">→</span>
        </a>
      </Reveal>
    </section>
  )
}
