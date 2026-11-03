import type { ReactNode, ElementType, CSSProperties } from "react"
import { useReveal } from "../hooks"

export function Reveal({
  as: Tag = "div",
  delay = 0,
  children,
  style,
  ...rest
}: {
  as?: ElementType
  delay?: number
  children: ReactNode
  style?: CSSProperties
  [k: string]: unknown
}) {
  const { ref, inView } = useReveal<HTMLElement>()
  return (
    <Tag
      ref={ref as never}
      className={`reveal${inView ? " is-in" : ""}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
