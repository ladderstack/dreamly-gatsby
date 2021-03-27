import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import NewsImage from "../images/parabola-4.svg"
import _ from "lodash"
import moment from "moment"

const Press: React.FC<any> = ({ data }) => {
  const dataByYear = _.groupBy(data.allMarkdownRemark.nodes, test =>
    moment(test.frontmatter.date).format("YYYY")
  )
  return (
    <Layout>
      <div className="content-wrap">
        <div className="news-wrap section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="section-title v1">
                  <h2>Press</h2>
                </div>
                {Object.keys(dataByYear)
                  .reverse()
                  .map((year: any, index: number) => {
                    return (
                      // @ts-ignore
                      <div className="news-item-wrap" index={index}>
                        <h4 className="news-date">
                          <img src={NewsImage} alt="Image" />
                          {year}
                        </h4>
                        {dataByYear[`${year}`].map((yearValue: any, index: number) => {
                          return (
                            <a className="news-item" href="" key={index}>
                              <span className="date">
                                {moment(yearValue.frontmatter.date).format(
                                  "YYYY.MM.DD"
                                )}{" "}
                              </span>
                              <p>{yearValue.frontmatter.title}</p>
                            </a>
                          )
                        })}
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Press

export const pressQuery = graphql`
  query MyQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "press" } } }
    ) {
      nodes {
        frontmatter {
          title
          date
        }
      }
    }
  }
`
