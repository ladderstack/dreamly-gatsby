import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import upload from "../../static/img/upload.png"
import Img from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image"

const Individual = ({ data }) => {
  const { markdownRemark } = data
  return (
    <Layout>
      <div className="content-wrap">
        <div className="member-details-wrap">
          <div className="member-info-wrap">
            {markdownRemark.frontmatter.profilePic && (
              <Img
                fluid={
                  markdownRemark.frontmatter.profilePic.childImageSharp.fluid
                }
                alt=""
                className="profile_pic"
              />
            )}

            <div className="member-info">
              <span>{markdownRemark.frontmatter.jobTitle}</span>
              <p>{markdownRemark.frontmatter.japName}</p>
              <h3>{markdownRemark.frontmatter.title}</h3>

              <ul className="taglist">
                {markdownRemark.frontmatter.skills &&
                  markdownRemark.frontmatter.skills
                    .split(",")
                    .map((skill, index) => {
                      return (
                        <li key={index}>
                          <a href="#">{skill}</a>
                        </li>
                      )
                    })}
              </ul>
              <ul className="social_profile">
                <span>SNS</span>
                <li>
                  <a
                    className="twitter"
                    href={
                      markdownRemark.frontmatter.SNS &&
                      markdownRemark.frontmatter.SNS.twitter
                    }
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="fb"
                    href={
                      markdownRemark.frontmatter.SNS &&
                      markdownRemark.frontmatter.SNS.facebook
                    }
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="github"
                    href={
                      markdownRemark.frontmatter.SNS &&
                      markdownRemark.frontmatter.SNS.github
                    }
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="linkedin"
                    href={
                      markdownRemark.frontmatter.SNS &&
                      markdownRemark.frontmatter.SNS.linkedin
                    }
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="member-desc">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-xl-6">
                  <div className="member-description">
                    <div
                      dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
                    />
                  </div>
                </div>
                <div className="col-lg-4 offset-lg-2 lg-none">
                  <div className="member-more-btn">
                    <StaticImage
                      className="mb-2"
                      src="../../static/img/logo-5.png"
                      alt="Image"
                    />
                    <a href="#" className="btn v4">
                      詳しく知りたい方はコチラから
                      <img src={upload} alt="Image" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container xl-none">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="member-more-btn">
                  <div className="section-title v6">
                    <img src="assets/img/logo-4.svg" alt="Image" />
                    <h2>について</h2>
                  </div>
                  <a href="#" className="btn v4">
                    詳しく知りたい方はコチラから
                    <img src="assets/img/upload.png" alt="Image" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Individual

export const pageQuery = graphql`
  query memberbyskug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        jobTitle
        profilePic {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        skills
        title
        japName
        smallImage {
          childImageSharp {
            fluid(maxWidth: 564, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        SNS {
          facebook
          github
          linkedin
          twitter
        }
      }
    }
  }
`
