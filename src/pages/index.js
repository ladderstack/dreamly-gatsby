import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import data from "../../content/home.json"
import HomeSlider from "../components/HomeSlider"
import parabola from "../../static/img/parabola-2.svg"
import parabola3 from "../../static/img/parabola-3.svg"
import upload from "../../static/img/upload.png"

const BlogIndex = ({ location }) => {
  return (
    <Layout>
      <SEO title="All posts" />

      <div className="hero-wrap">
        <img className="hero-img" src={data.heroimage.image} alt="Image" />
        <div className="hero-content">
          <h1>{data.heroimage.heading}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: data.heroimage.description }}
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
                          __html: data.aboutDreamly.description,
                        }}
                      />
                      <div className="about-btn v1">
                        <a href={data.aboutDreamly.moreLink} className="link">
                          More
                        </a>
                      </div>
                    </div>
                  </div>
                  <HomeSlider sliderObject={data.aboutDreamly.sliderImages} />
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
                          __html: data.whatWeDo.description,
                        }}
                      />
                      <div className="about-btn v1">
                        <a href={data.whatWeDo.moreLink} className="link">
                          More
                        </a>
                      </div>
                    </div>
                  </div>
                  <HomeSlider sliderObject={data.whatWeDo.sliderImages} />
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
                <a className="news-item">
                  <span className="date">2020.10.01</span>
                  <p>
                    株式会社、社員の枠組みと働き方を再定義した人事制度「WIDE」をスタート
                  </p>
                </a>
                <a className="news-item">
                  <span className="date">2020.10.01</span>
                  <p>
                    株式会社、社員の枠組みと働き方を再定義した人事制度「WIDE」をスタート
                  </p>
                </a>
                <a className="news-item">
                  <span className="date">2020.10.01</span>
                  <p>資金調達実施</p>
                </a>
                <a className="news-item">
                  <span className="date">2019.10.15</span>
                  <p>事業拡大のため、オフィス移転</p>
                </a>
                <a className="news-item">
                  <span className="date">2019.01.11</span>
                  <p>株式会社Dreamly設立</p>
                </a>
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
                <h3>{data.doSomething.heading}</h3>
              </div>
            </div>
            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
              <div className="promo-content">
                <span className="d-xl-none">初めて見た人わからん？</span>
                <img src={data.doSomething.image} alt="Image" />
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
