import React from "react"
import logo from "../images/logo.svg"

const Header = () => {
  return (
    <div className="header-bar-area">
      <div className="header-left">
        <a className="logo" href="index.html">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="header-right">
        <ul className="main-menu">
          <li className="nav-item">
            <a className="nav-link" href="about.html">
              About{" "}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="service.html">
              Service
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="press.html">
              Press
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="recruitment.html">
              Recruitment
            </a>
          </li>
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
