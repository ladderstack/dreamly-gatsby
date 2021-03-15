import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

const Individual = ({ data }) => {
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
                <li>
                  <a href="#">マルチリンガル</a>
                </li>
                <li>
                  <a href="#">フルスタックエンジニア</a>
                </li>
                <li>
                  <a href="#">エンジニアファクトリー講師</a>
                </li>
                <li>
                  <a href="#">子煩悩</a>
                </li>
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
                    <h3>
                      <span className="xl-none">手書き</span> Try,Fail,Iterate.
                    </h3>
                    <p>
                      スウェーデン王立大コンピューターサイエンス学科卒業。Stockholm・東京での
                      エンジニア経験を経て、2019年香川にて起業（2017年日本移住)。
                      日本のパブリックサービスIT化の遅れを大問題だと感じ、業務プロセスの効率化
                      をミッションに掲げ活動中。
                      また、県内民間初のインキュベーション構想にも参画。
                      日本のアニメが大好きです。おすすめがあれば教えて下さい！
                    </p>
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
                      <img src="assets/img/upload.png" alt="Image" />
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
