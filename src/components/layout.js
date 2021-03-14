import * as React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"
import "../style.css"
import Footer from "./Footer"

const Layout = ({ location, title, children }) => {
  return (
    <div className="global-wrapper">
      <div class="page_wrapper">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
