import React from "react"
import Layout from "../components/layout"
import NewsImage from "../images/parabola-4.svg"

const Press = () => {
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
                <div className="news-item-wrap">
                  <h4 className="news-date">
                    <img src={NewsImage} alt="Image" />
                    2021
                  </h4>
                  <a className="news-item">
                    <span className="date"> 2021.10.01 </span>
                    <p>
                      株式会社、社員の枠組みと働き方を再定義した人事制度「WIDE」をスタート
                    </p>
                  </a>
                  <a className="news-item">
                    <span className="date">2021.10.01</span>
                    <p>
                      株式会社、社員の枠組みと働き方を再定義した人事制度「WIDE」をスタート
                    </p>
                  </a>
                  <a className="news-item">
                    <span className="date"> 2021.10.01</span>
                    <p>
                      株式会社、社員の枠組みと働き方を再定義した人事制度「WIDE」をスタート
                    </p>
                  </a>
                </div>
                <div className="news-item-wrap">
                  <h4 className="news-date">
                    <img src={NewsImage} alt="Image" />
                    2020
                  </h4>
                  <a className="news-item">
                    <span className="date"> 2020.10.01</span>
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
                    <p>
                      株式会社、社員の枠組みと働き方を再定義した人事制度「WIDE」をスタート
                    </p>
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

export default Press
