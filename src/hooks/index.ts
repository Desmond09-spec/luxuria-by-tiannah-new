import { useEffect, useRef, useState } from "react"

/** Adds `is-in` class when the element scrolls into view. */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return { ref, inView }
}

/** Locks body scroll — used by the cart drawer and product detail. */
export function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return
    const original = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = original
    }
  }, [active])
}
