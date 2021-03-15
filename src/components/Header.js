import { Link } from "gatsby"
import React, { useEffect } from "react"
import headerData from "../../content/header.json"

const Header = () => {
  useEffect(() => {})
  return (
    <div className="header-bar-area">
      <div className="header-left">
        <Link className="logo" to="/">
          <img src={headerData.logo} alt="Logo" />
        </Link>
      </div>
      <div className="header-right">
        <ul className="main-menu">
          {headerData.menu.map((item, index) => {
            return (
              <li className="nav-item" key={index}>
                <Link className="nav-link" to={item.url}>
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="hamburger-menu">
          <span className="line-top"></span>
          <span className="line-center"></span>
          <span className="line-bottom"></span>
        </div>
      </div>
    </div>
  )
}

export default Header
