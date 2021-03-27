import * as React from "react"
import Header from "./Header"
import "../style.scss"
import Footer from "./Footer"
import BackToTop from "./BackToTop"

interface Props {
  title?: string
}

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="global-wrapper">
      <div className="page_wrapper">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
      <BackToTop />
    </div>
  )
}

export default Layout
