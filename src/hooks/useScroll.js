import { useState, useEffect } from "react"

export function useScroll() {
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [bodyOffset, setBodyOffset] = useState("")

  const [scrollY, setScrollY] = useState("")
  const [scrollX, setScrollX] = useState("")
  const [scrollDirection, setScrollDirection] = useState()

  const listener = e => {
    setBodyOffset(document.body.getBoundingClientRect())
    setScrollY(-bodyOffset.top)
    setScrollX(bodyOffset.left)
    setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up")
    setLastScrollTop(-bodyOffset.top)
  }

  useEffect(() => {
    setBodyOffset(document.body.getBoundingClientRect())
    setScrollY(bodyOffset.top)
    setScrollX(bodyOffset.left)
  }, [])

  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("scroll", listener)
      return () => {
        window.removeEventListener("scroll", listener)
      }
    }
  })

  return {
    scrollY,
    scrollX,
    scrollDirection,
  }
}
