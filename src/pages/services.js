import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import React, { useState, useRef } from "react"
import Slider from "react-slick"
import ServiceSlider from "../components/ServiceSlider"

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
                        <img src="assets/img/parabola-3.svg" alt="Image" />
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
              <span>#1</span>地方・行政のデジタル化に向けた自社プロダクト開発
            </h2>
          </div>

          <ServiceSlider
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
