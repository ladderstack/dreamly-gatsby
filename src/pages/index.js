import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import test from "../../content/about.json"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  console.log(test)
  return (
    <Layout>
      <SEO title="All posts" />

      <div className="hero-wrap">
        <img className="hero-img" src="assets/img/hero-bg.png" alt="Image" />
        <div className="hero-content">
          <h1>もっと「カンタン」へ。</h1>
          <p>
            ”テクノロジーの力で無駄をなくし、
            <br className="d-lg-none" />
            もっとカンタンな社会にしたい” <br className="d-none d-lg-block" />
            という想いのもと、
            <br className="d-lg-none" />
            地方のデジタル化・行政のデジタル化を進めています。
          </p>
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
                          <img src="assets/img/parabola-2.svg" alt="Image" />
                          About
                        </span>
                        Dreamly
                      </h2>
                      <p>
                        ドリームリーは、香川に拠点を置く <br />
                        ITスタートアップ企業です。IT人材が少なく、 <br />
                        テクノロジーの恩恵を受けにくい地方から、 <br />
                        変化をもたらしていきます。
                      </p>
                      <div className="about-btn v1">
                        <a href="#" className="link">
                          More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 offset-xl-0 dreamly-bg col-md-8 col-lg-10 offset-lg-1 p-m-0">
                    <div className="about-slider-v1">
                      <div className="slider-item">
                        <img src="assets/img/photo-1.png" alt="Image" />
                        <p>弊社エントランス</p>
                      </div>
                      <div className="slider-item">
                        <img src="assets/img/photo-2.png" alt="Image" />
                        <p>弊社エントランス</p>
                      </div>
                      <div className="slider-item">
                        <img src="assets/img/photo-3.png" alt="Image" />
                        <p>弊社エントランス</p>
                      </div>
                      <div className="slider-item">
                        <img src="assets/img/photo-4.png" alt="Image" />
                        <p>弊社エントランス</p>
                      </div>
                    </div>
                  </div>
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
                          <img src="assets/img/parabola-3.svg" alt="Image" />
                          What
                        </span>
                        We do
                      </h2>
                      <p>
                        「地方・行政のデジタル化に向けた自社プロダクト <br />
                        開発」と、「ITコンサルティング及び受託開発」の <br />
                        ２事業を展開しています。 <br />
                        また、インキュベーション施設も建設中です。
                      </p>
                      <div className="about-btn v1">
                        <a href="#" className="link">
                          More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 offset-xl-0 p-m-0 col-md-8 col-lg-10 offset-lg-1">
                    <div className="about-slider-v1">
                      <div className="slider-item">
                        <img src="assets/img/photo-2.png" alt="Image" />
                        <p>弊社エントランス</p>
                      </div>
                      <div className="slider-item">
                        <img src="assets/img/photo-1.png" alt="Image" />
                        <p>弊社エントランス</p>
                      </div>
                      <div className="slider-item">
                        <img src="assets/img/photo-3.png" alt="Image" />
                        <p>弊社エントランス</p>
                      </div>
                      <div className="slider-item">
                        <img src="assets/img/photo-4.png" alt="Image" />
                        <p>弊社エントランス</p>
                      </div>
                    </div>
                  </div>
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
                <h3>一緒に何か面白いことしませんか？</h3>
              </div>
            </div>
            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
              <div className="promo-content">
                <span className="d-xl-none">初めて見た人わからん？</span>
                <img src="assets/img/img-1.png" alt="Image" />
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <a href="#" className="btn v1">
                問い合わせはコチラから
                <img src="assets/img/upload.png" alt="Image" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex
