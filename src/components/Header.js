import { graphql, Link, StaticQuery } from "gatsby"
import React, { useEffect } from "react"
import headerData from "../../content/header.json"
import Img from "gatsby-image"

const Header = () => {
  useEffect(() => {}, [])
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
                  fixed(quality: 90) {
                    ...GatsbyImageSharpFixed
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
              <Link className="logo" to="/">
                <Img
                  fixed={
                    data.markdownRemark.frontmatter.logo.childImageSharp.fixed
                  }
                  alt="Logo"
                />
              </Link>
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
              <div className="hamburger-menu">
                <span className="line-top"></span>
                <span className="line-center"></span>
                <span className="line-bottom"></span>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

export default Header
