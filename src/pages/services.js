import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import React from "react"
import ServiceSlider from "../components/ServiceSlider"
import { StaticImage } from "gatsby-plugin-image"
import MobileServiceSlider from "../components/MobileServiceSlider"

const Services = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Service | Dreamly" />
      <div class="content-wrap">
        <div class="about-wrap service">
          <div class="container">
            <div class="about-item-wrap">
              <div class="row align-items-center">
                <div class="col-md-12">
                  <div class="about-text v2 text-center style1">
                    <h2>
                      <span>
                        <StaticImage
                          src="../../static/img/parabola-3.svg"
                          alt="Image"
                          className="orange-d"
                        />
                        What
                      </span>
                      We do
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class="service-wrap">
          <div class="service-title">
            <h2>
              <span>#1</span>
              {data.markdownRemark.frontmatter.firstSliderTitle}
            </h2>
          </div>

          <ServiceSlider
            sliderData={data.markdownRemark.frontmatter.firstSlider}
          />
          <MobileServiceSlider
            sliderData={data.markdownRemark.frontmatter.firstSlider}
          />
        </section>
        <section class="service-wrap">
          <div class="service-title">
            <h2>
              <span>#2</span>
              {data.markdownRemark.frontmatter.secondSliderTitle}
            </h2>
          </div>

          <ServiceSlider
            sliderData={data.markdownRemark.frontmatter.secondSlider}
          />
          <MobileServiceSlider
            sliderData={data.markdownRemark.frontmatter.secondSlider}
          />
        </section>
        <section class="service-wrap">
          <div class="service-title">
            <h2>
              <span>#3</span>
              {data.markdownRemark.frontmatter.thirdSliderTitle}
            </h2>
          </div>

          <ServiceSlider
            sliderData={data.markdownRemark.frontmatter.firstSlider}
          />
          <MobileServiceSlider
            sliderData={data.markdownRemark.frontmatter.firstSlider}
          />
        </section>
      </div>
    </Layout>
  )
}

export default Services

export const servicesQuery = graphql`
  query serviceQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "service" } }) {
      frontmatter {
        thirdSliderTitle
        title
        firstSliderTitle
        secondSliderTitle
        firstSlider {
          description
          heading
          image {
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        thirdSlider {
          description
          heading
          image {
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        secondSlider {
          description
          heading
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
`
