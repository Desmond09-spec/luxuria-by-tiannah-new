import { useState, useEffect } from "react"
import type { Product } from "../data/products"
import { useCart } from "../shop/CartContext"
import { useScrollLock } from "../hooks"
import { naira } from "../data/format"

export function ProductDetail({
  product,
  onClose,
}: {
  product: Product | null
  onClose: () => void
}) {
  const { add, count, open } = useCart()
  const [size, setSize] = useState("M")
  const [added, setAdded] = useState(false)
  useScrollLock(!!product)

  useEffect(() => {
    if (product) {
      setSize("M")
      setAdded(false)
    }
  }, [product])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (product) window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [product, onClose])

  const viewBag = () => {
    onClose()
    open()
  }

  return (
    <div
      aria-hidden={!product}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        opacity: product ? 1 : 0,
        pointerEvents: product ? "auto" : "none",
        transition: "opacity 0.5s ease",
        overflowY: "auto",
        background: "var(--bone)",
      }}
    >
      {product && (
        <>
          <header
            style={{
              position: "sticky",
              top: 0,
              zIndex: 5,
              height: "var(--nav-h)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 var(--pad-x)",
              background: "var(--bone)",
              borderBottom: "1px solid var(--line)",
            }}
          >
            <button
              onClick={onClose}
              className="back-button meta"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6em",
                padding: "0.8em 1.25em",
                border: "1px solid var(--ink)",
                color: "var(--ink)",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontWeight: 400,
                transition: "background 0.3s ease, color 0.3s ease",
              }}
            >
              <span aria-hidden="true">←</span> Back to collection
            </button>

            <button
              onClick={viewBag}
              className="meta"
              aria-label={`View bag, ${count} items`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5em",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--ink)",
              }}
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

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
            }}
            className="detail-grid"
          >
            <div style={{ position: "relative" }}>
              <img
                src={product.image}
                alt={product.name}
                className="fade-in"
                style={{
                  width: "100%",
                  height: "min(78vh, 60rem)",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>

            <div
              style={{
                maxWidth: "32rem",
                margin: "0 var(--pad-x)",
                padding: "var(--s-6) 0 var(--s-8)",
              }}
              className="detail-text"
            >
              <p className="eyebrow">{product.brand} · {product.condition}</p>
              <h1 className="h1" style={{ margin: "var(--s-2) 0 var(--s-4)" }}>
                {product.name}
              </h1>
              <p className="h3" style={{ color: "var(--clay-deep)", fontStyle: "italic", fontWeight: 300 }}>
                {naira(product.price)}
              </p>

              <p className="lead" style={{ marginTop: "var(--s-5)" }}>
                {product.description}
              </p>
              <p
                className="h3"
                style={{
                  fontFamily: "var(--serif)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  margin: "var(--s-4) 0",
                  color: "var(--ink-2)",
                  paddingLeft: "var(--s-3)",
                  borderLeft: "1px solid var(--line)",
                }}
              >
                {product.detail}
              </p>
              <p className="body" style={{ marginTop: "var(--s-4)" }}>
                {product.spec}
              </p>

              <div style={{ marginTop: "var(--s-5)" }}>
                <p className="eyebrow" style={{ marginBottom: "var(--s-2)" }}>Provenance</p>
                <p className="body">
                  {product.material} · {product.condition}
                </p>
              </div>

              <div style={{ marginTop: "var(--s-5)", display: "flex", gap: "var(--s-3)" }}>
                {added ? (
                  <button
                    className="btn-solid"
                    style={{ flex: 1, justifyContent: "center" }}
                    onClick={viewBag}
                  >
                    View bag <span className="arr">→</span>
                  </button>
                ) : (
                  <button
                    className="btn-solid"
                    style={{ flex: 1, justifyContent: "center" }}
                    onClick={() => {
                      add(product, size)
                      setAdded(true)
                    }}
                  >
                    Add to bag <span className="arr">→</span>
                  </button>
                )}
              </div>

              <p className="meta" style={{ marginTop: "var(--s-4)", lineHeight: 1.7 }}>
                Inspection available before purchase in our Ibadan showroom. All pieces are authenticated by our in-house specialists.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
