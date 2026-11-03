import { useEffect, useState } from "react"

export function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="top"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "44rem",
        overflow: "hidden",
        background: "var(--ink)",
      }}
    >
      <img
        src="https://images.pexels.com/photos/29043373/pexels-photo-29043373.jpeg?auto=compress&cs=tinysrgb&h=1400"
        alt="Luxuria by Tiannah — fine jewelry and watches"
        className={loaded ? "fade-in" : ""}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          opacity: loaded ? 0.92 : 0,
          transition: "opacity 1.8s ease",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(26,23,20,0.55) 0%, rgba(26,23,20,0.15) 40%, rgba(26,23,20,0.7) 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 var(--pad-x) var(--s-7)",
          color: "var(--bone)",
        }}
      >
        <p
          className="eyebrow rise"
          style={{ color: "rgba(244,240,234,0.7)", marginBottom: "var(--s-2)" }}
        >
          Fine Jewelry &amp; Watches — Ibadan
        </p>
        <h1
          className="display rise"
          style={{
            color: "var(--bone)",
            margin: 0,
            maxWidth: "15ch",
            animationDelay: "0.1s",
          }}
        >
          Luxuria <span className="it">by</span> Tiannah
        </h1>
        <div
          className="rise"
          style={{
            animationDelay: "0.3s",
            marginTop: "var(--s-5)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "var(--s-4)",
            flexWrap: "wrap",
          }}
        >
          <p
            className="lead"
            style={{ maxWidth: "44ch", color: "rgba(244,240,234,0.85)" }}
          >
            We buy, sell, and source fine watches and jewelry. Every piece is
            authenticated in-house, by hand, before it ever reaches the vitrine.
          </p>
          <a
            href="#collection"
            className="btn-line"
            style={{
              color: "var(--bone)",
              borderColor: "rgba(244,240,234,0.7)",
            }}
          >
            See the collection <span className="arr">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
