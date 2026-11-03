import { useState } from "react"
import type { Product } from "./data/products"
import { CartProvider } from "./shop/CartContext"
import { Nav } from "./components/Nav"
import { Footer } from "./components/Footer"
import { CartDrawer } from "./components/CartDrawer"
import { ProductDetail } from "./components/ProductDetail"
import { Hero } from "./sections/Hero"
import { Atelier } from "./sections/Atelier"
import { Collection } from "./sections/Collection"
import { Journal } from "./sections/Journal"
import { AtelierVisit } from "./sections/AtelierVisit"

export default function App() {
  const [active, setActive] = useState<Product | null>(null)

  return (
    <CartProvider>
      <Nav />
      <main>
        <Hero />
        <Atelier />
        <Collection onOpen={setActive} />
        <Journal />
        <AtelierVisit />
      </main>
      <Footer />
      <CartDrawer />
      <ProductDetail product={active} onClose={() => setActive(null)} />
    </CartProvider>
  )
}
