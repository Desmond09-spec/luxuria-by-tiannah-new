import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import type { Product } from "../data/products"

export type LineItem = {
  product: Product
  size: string
  qty: number
}

type CartContextValue = {
  items: LineItem[]
  count: number
  subtotal: number
  isOpen: boolean
  add: (product: Product, size: string) => void
  remove: (index: number) => void
  setQty: (index: number, qty: number) => void
  open: () => void
  close: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<LineItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((n, i) => n + i.qty, 0)
    const subtotal = items.reduce((s, i) => s + i.product.price * i.qty, 0)
    return {
      items,
      count,
      subtotal,
      isOpen,
      add: (product, size) => {
        setItems((prev) => {
          const existing = prev.findIndex(
            (i) => i.product.id === product.id && i.size === size,
          )
          if (existing >= 0) {
            const next = [...prev]
            next[existing] = { ...next[existing], qty: next[existing].qty + 1 }
            return next
          }
          return [...prev, { product, size, qty: 1 }]
        })
        setIsOpen(true)
      },
      remove: (index) =>
        setItems((prev) => prev.filter((_, i) => i !== index)),
      setQty: (index, qty) =>
        setItems((prev) =>
          prev.map((i, idx) =>
            idx === index ? { ...i, qty: Math.max(1, qty) } : i,
          ),
        ),
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }
  }, [items, isOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
