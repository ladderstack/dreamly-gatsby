import { graphql, Link, StaticQuery } from "gatsby"
import React, { useState } from "react"
import Img from "gatsby-image"

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <StaticQuery
      query={graphql`
        query headerQuery {
          markdownRemark(frontmatter: { templateKey: { eq: "header" } }) {
            id
            frontmatter {
              menu {
                name
                url
              }
              logo {
                childImageSharp {
                  fluid(quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <div className="header-bar-area">
            <div className="header-left">
              <div style={{ width: "100%" }}>
                <Link className="logo" to="/">
                  <Img
                    fluid={
                      data.markdownRemark.frontmatter.logo.childImageSharp.fluid
                    }
                    alt="Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="header-right">
              <ul className="main-menu">
                {data.markdownRemark.frontmatter.menu.map((item, index) => {
                  return (
                    <li className="nav-item" key={index}>
                      <Link className="nav-link" to={item.url}>
                        {item.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
              <div
                className="hamburger-menu"
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <span className="line-top"></span>
                <span className="line-center"></span>
                <span className="line-bottom"></span>
              </div>
            </div>
            <div className={`ofcavas-menu ${toggleMenu ? "current" : null}`}>
              <ul className="navbar-nav">
                {data.markdownRemark.frontmatter.menu.map((item, index) => {
                  return (
                    <li className="nav-item" key={index}>
                      <Link className="nav-link" to={item.url}>
                        {item.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        )
      }}
    />
  )
}

export default Header
