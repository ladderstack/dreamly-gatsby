import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeSlider from "../components/HomeSlider"
import parabola from "../../static/img/parabola-2.svg"
import parabola3 from "../../static/img/parabola-3.svg"
import upload from "../../static/img/upload.png"
import Img from "gatsby-image"

const BlogIndex = props => {
  console.log(props)
  return (
    <Layout>
      <SEO title="All posts" />

      <div className="hero-wrap">
        <Img
          fluid={
            props.data.markdownRemark.frontmatter.heroimage.image
              .childImageSharp.fluid
          }
        />
        <div className="hero-content">
          <h1>{props.data.markdownRemark.frontmatter.heroimage.heading}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html:
                props.data.markdownRemark.frontmatter.heroimage.description,
            }}
          />
        </div>
      </div>
      <div className="about-wrap section-padding pb-4 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="about-item-wrap">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-6">
                    <div className="about-text v1">
                      <h2>
                        <span>
                          <img src={parabola} alt="Image" />
                          About
                        </span>
                        Dreamly
                      </h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            props.data.markdownRemark.frontmatter.aboutDreamly
                              .description,
                        }}
                      />
                      <div className="about-btn v1">
                        <Link
                          to={
                            props.data.markdownRemark.frontmatter.aboutDreamly
                              .moreLink
                          }
                          className="link"
                        >
                          More
                        </Link>
                      </div>
                    </div>
                  </div>
                  <HomeSlider
                    sliderObject={
                      props.data.markdownRemark.frontmatter.aboutDreamly
                        .sliderImages
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="about-item-wrap">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-6">
                    <div className="about-text v2">
                      <h2>
                        <span>
                          <img src={parabola3} alt="Image" />
                          What
                        </span>
                        We do
                      </h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            props.data.markdownRemark.frontmatter.whatWeDo
                              .description,
                        }}
                      />
                      <div className="about-btn v1">
                        <Link
                          to={
                            props.data.markdownRemark.frontmatter.whatWeDo
                              .moreLink
                          }
                          className="link"
                        >
                          More
                        </Link>
                      </div>
                    </div>
                  </div>
                  <HomeSlider
                    sliderObject={
                      props.data.markdownRemark.frontmatter.whatWeDo
                        .sliderImages
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="news-wrap section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 offset-xl-1 col-lg-12">
              <div className="section-title v1">
                <h2>Press</h2>
              </div>
              <div className="news-item-wrap">
                {props.data.allMarkdownRemark.nodes.map((press, index) => {
                  return (
                    <a className="news-item" href="#">
                      <span className="date">{press.frontmatter.date}</span>
                      <p>{press.frontmatter.title}</p>
                    </a>
                  )
                })}
              </div>
              <div className="about-btn v4">
                <a href="#" className="link">
                  More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="promo-wrap section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="section-title">
                <h3>
                  {props.data.markdownRemark.frontmatter.doSomething.heading}
                </h3>
              </div>
            </div>
            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
              <div className="promo-content">
                <span className="d-xl-none">初めて見た人わからん？</span>
                <Img
                  fluid={
                    props.data.markdownRemark.frontmatter.doSomething.image
                      .childImageSharp.fluid
                  }
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <a href="#" className="btn v1">
                問い合わせはコチラから
                <img src={upload} alt="Image" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const homeQuery = graphql`
  query homeQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "press" } } }
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
        }
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "home" } }) {
      frontmatter {
        title
        templateKey
        heroimage {
          heading
          description
          image {
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        whatWeDo {
          description
          sliderImages {
            sliderTitle
            image {
              childImageSharp {
                fluid(quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        doSomething {
          heading
          link
          image {
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        aboutDreamly {
          description
          moreLink
          sliderImages {
            sliderTitle
            image {
              childImageSharp {
                fluid(quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
