import { useCart, type LineItem } from "../shop/CartContext"
import { useScrollLock } from "../hooks"
import { naira } from "../data/format"

export function CartDrawer() {
  const { items, isOpen, close, subtotal, count, remove, setQty } = useCart()
  useScrollLock(isOpen)

  return (
    <>
      <div
        onClick={close}
        aria-hidden={!isOpen}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 110,
          background: "rgba(26,23,20,0.4)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.5s ease",
        }}
      />
      <aside
        role="dialog"
        aria-label="Shopping bag"
        aria-hidden={!isOpen}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(30rem, 100vw)",
          zIndex: 120,
          background: "var(--bone)",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            padding: "var(--s-4) var(--s-4) var(--s-3)",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <span className="eyebrow">Bag — {String(count).padStart(2, "0")}</span>
          <button
            onClick={close}
            className="meta"
            style={{ letterSpacing: "0.18em", textTransform: "uppercase" }}
          >
            Close
          </button>
        </header>

        <div style={{ flex: 1, overflowY: "auto", padding: "var(--s-3) var(--s-4)" }}>
          {items.length === 0 ? (
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "var(--s-2)",
              }}
            >
              <p className="h3">Nothing here yet.</p>
              <p className="body">Pieces you add will appear in your bag.</p>
              <button onClick={close} className="btn-line" style={{ marginTop: "var(--s-3)" }}>
                See the collection <span className="arr">→</span>
              </button>
            </div>
          ) : (
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {items.map((item, i) => (
                <CartLine
                  key={`${item.product.id}-${item.size}-${i}`}
                  item={item}
                  index={i}
                  onRemove={remove}
                  onQty={setQty}
                />
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer
            style={{
              padding: "var(--s-4)",
              borderTop: "1px solid var(--line)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--s-3)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <span className="eyebrow">Subtotal</span>
              <span
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "1.75rem",
                  fontWeight: 400,
                }}
              >
                {naira(subtotal)}
              </span>
            </div>
            <p className="meta" style={{ lineHeight: 1.6 }}>
              Inspection available before payment. Shipping calculated at checkout.
            </p>
            <button className="btn-solid" style={{ justifyContent: "center" }}>
              Checkout <span className="arr">→</span>
            </button>
          </footer>
        )}
      </aside>
    </>
  )
}

function CartLine({
  item,
  index,
  onRemove,
  onQty,
}: {
  item: LineItem
  index: number
  onRemove: (i: number) => void
  onQty: (i: number, q: number) => void
}) {
  return (
    <li
      style={{
        display: "grid",
        gridTemplateColumns: "5rem 1fr",
        gap: "var(--s-3)",
        padding: "var(--s-3) 0",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <img
        src={item.product.image}
        alt={item.product.name}
        style={{ width: "5rem", height: "6.5rem", objectFit: "cover" }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span className="h3" style={{ fontSize: "1.15rem" }}>
            {item.product.name}
          </span>
          <span className="meta">{naira(item.product.price)}</span>
        </div>
        <span className="meta">{item.product.brand} — {item.product.condition}</span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "0.5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <button
              onClick={() => onQty(index, item.qty - 1)}
              className="meta"
              aria-label="Decrease quantity"
              style={{ fontFamily: "var(--serif)", fontSize: "1.05rem" }}
            >
              −
            </button>
            <span style={{ fontFamily: "var(--sans)", fontVariantNumeric: "tabular-nums" }}>
              {item.qty}
            </span>
            <button
              onClick={() => onQty(index, item.qty + 1)}
              className="meta"
              aria-label="Increase quantity"
              style={{ fontFamily: "var(--serif)", fontSize: "1.05rem" }}
            >
              +
            </button>
          </div>
          <button
            onClick={() => onRemove(index)}
            className="meta link-underline"
            style={{ letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}
