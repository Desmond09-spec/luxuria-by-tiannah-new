import { useEffect, useState } from "react"
import { useCart } from "../shop/CartContext"

const links = [
  { label: "Collection", href: "#collection" },
  { label: "The House", href: "#atelier" },
  { label: "Journal", href: "#journal" },
]

export function Nav() {
  const { count, open } = useCart()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const fg = scrolled ? "var(--ink)" : "var(--bone)"

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        height: "var(--nav-h)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 var(--pad-x)",
        color: fg,
        background: scrolled ? "rgba(244, 240, 234, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        transition:
          "background 0.5s ease, backdrop-filter 0.5s ease, border-color 0.5s ease, color 0.5s ease",
      }}
    >
      <a
        href="#top"
        style={{
          fontFamily: "var(--serif)",
          fontSize: "1.35rem",
          fontWeight: 500,
          letterSpacing: "0.02em",
          color: fg,
        }}
      >
        Luxuria
        <span style={{ fontStyle: "italic", fontWeight: 300 }}> by </span>
        Tiannah
      </a>

      <nav
        aria-label="Primary"
        style={{ display: "flex", gap: "var(--s-5)" }}
        className="nav-links"
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="meta link-underline"
            style={{ textTransform: "uppercase", color: fg }}
          >
            {l.label}
          </a>
        ))}
      </nav>

      <button
        onClick={open}
        className="meta"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5em",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: fg,
        }}
        aria-label={`Open bag, ${count} items`}
      >
        Bag
        <span
          style={{
            fontFamily: "var(--serif)",
            fontSize: "1rem",
            fontWeight: 500,
            minWidth: "1.1em",
            textAlign: "center",
          }}
        >
          {String(count).padStart(2, "0")}
        </span>
      </button>
    </header>
  )
}
