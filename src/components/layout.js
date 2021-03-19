import * as React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"
import "../style.scss"
import Footer from "./Footer"
import BackToTop from "./BackToTop"

const Layout = ({ location, title, children }) => {
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
