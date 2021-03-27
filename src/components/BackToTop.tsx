import React from "react"
import FadeIn from "react-fade-in"
import { useScroll } from "../hooks/useScroll"

const BackToTop: React.FC = () => {
  const { scrollY } = useScroll()

  return (
    <>
      {scrollY > '550' && (
        <FadeIn>
          <a href="#" className="back-to-top">
            <span>Scroll to top</span>
          </a>
        </FadeIn>
      )}
    </>
  )
}

export default BackToTop
