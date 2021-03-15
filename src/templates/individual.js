import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import upload from "../../static/img/upload.png"

const Individual = ({ data }) => {
  console.log(data)
  const { markdownRemark } = data
  return (
    <Layout>
      <div className="content-wrap">
        <div className="member-details-wrap">
          <div className="member-info-wrap">
            <img src={markdownRemark.frontmatter.profile_pic} alt="Image" />
            <div className="member-info">
              <span>{markdownRemark.frontmatter.job_title}</span>
              <p>{markdownRemark.frontmatter.jap_name}</p>
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
                  <a className="twitter" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="fb" href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="github" href="#">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
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
                    <img
                      className="mb-2"
                      src="assets/img/logo-5.png"
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
        job_title
        profile_pic
        skills
        title
        jap_name
        smallImage
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
