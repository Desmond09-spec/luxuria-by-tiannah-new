import { useState } from "react"
import { products, categories, type Product } from "../data/products"
import { Reveal } from "../components/Reveal"
import { useCart } from "../shop/CartContext"
import { naira } from "../data/format"

export function Collection({
  onOpen,
}: {
  onOpen: (p: Product) => void
}) {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All")
  const { add } = useCart()

  const shown =
    filter === "All"
      ? products
      : products.filter((p) => p.category === filter)

  return (
    <section
      id="collection"
      style={{
        padding: "var(--s-8) var(--pad-x) var(--s-9)",
        background: "var(--bone-2)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
        }}
      >
        <Reveal
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "var(--s-4)",
            flexWrap: "wrap",
            marginBottom: "var(--s-6)",
          }}
        >
          <div>
            <p className="eyebrow">The Collection</p>
            <h2 className="h1" style={{ margin: "var(--s-2) 0 0" }}>
              Nine pieces. <span style={{ fontStyle: "italic", fontWeight: 300 }}>Each one passed by hand.</span>
            </h2>
          </div>
          <div
            style={{ display: "flex", gap: "var(--s-1)", flexWrap: "wrap" }}
            role="tablist"
          >
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className="meta"
                role="tab"
                aria-selected={filter === c}
                style={{
                  padding: "0.6em 1.1em",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  borderBottom: "1px solid",
                  borderColor: filter === c ? "var(--ink)" : "transparent",
                  color: filter === c ? "var(--ink)" : "var(--ash)",
                  transition: "color 0.3s ease, border-color 0.3s ease",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--s-5) var(--s-4)",
          }}
          className="product-grid"
        >
          {shown.map((p, i) => (
            <Reveal
              key={p.id}
              delay={(i % 3) * 90}
              style={{
                marginTop: i % 2 === 1 ? "var(--s-6)" : 0,
              }}
            >
              <Card product={p} onOpen={onOpen} onAdd={add} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({
  product,
  onOpen,
  onAdd,
}: {
  product: Product
  onOpen: (p: Product) => void
  onAdd: ReturnType<typeof useCart>["add"]
}) {
  return (
    <article className="card" style={{ position: "relative" }}>
      <button
        onClick={() => onOpen(product)}
        aria-label={`${product.name} — view detail`}
        style={{
          display: "block",
          width: "100%",
          padding: 0,
          textAlign: "left",
        }}
      >
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            style={{
              width: "100%",
              height: "min(72vh, 38rem)",
              objectFit: "cover",
              objectPosition: "center top",
              transition: "transform 1.2s cubic-bezier(0.2,0.8,0.2,1)",
            }}
          />
        </div>
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          gap: "var(--s-2)",
          marginTop: "var(--s-3)",
        }}
      >
        <div>
          <p className="eyebrow">{product.brand}</p>
          <p
            style={{
              fontFamily: "var(--serif)",
              fontSize: "1.5rem",
              fontWeight: 500,
              margin: "0.3rem 0 0",
            }}
          >
            {product.name}
          </p>
        </div>
        <p
          className="meta"
          style={{
            fontFamily: "var(--serif)",
            fontSize: "1.15rem",
            fontWeight: 400,
            color: "var(--clay-deep)",
            whiteSpace: "nowrap",
          }}
        >
          {naira(product.price)}
        </p>
      </div>
      <div
        style={{
          marginTop: "var(--s-3)",
          display: "flex",
          gap: "var(--s-3)",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => onOpen(product)}
          className="meta link-underline"
          style={{ letterSpacing: "0.16em", textTransform: "uppercase" }}
        >
          View
        </button>
        <span className="meta" style={{ color: "var(--line)" }}>·</span>
        <button
          onClick={() => onAdd(product, "M")}
          className="meta link-underline"
          style={{ letterSpacing: "0.16em", textTransform: "uppercase" }}
        >
          Quick add
        </button>
      </div>
    </article>
  )
}
