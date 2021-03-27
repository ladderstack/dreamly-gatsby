import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import data from "../../content/recruitment.json"
import thumb from "../../static/img/logo-4.svg"
import upload from "../../static/img/upload.png"
import titleImage from "../../static/img/shape-polygon.svg"
import thumbImage from "../../static/img/thumb.svg"

const Recruitment: React.FC = () => {
  return (
    <Layout title={"Recruitment"}>
      <div className="content-wrap">
        <div className="recruitment-wrap section-padding pb-0">
          <div className="section-title v4">
            <img src={titleImage} alt="Image" />
            <h2>{data.title}</h2>
          </div>
        </div>
        <div className="recruit-hero">
          <div className="container req_container">
            <div className="row">
              <div className="col-lg-10 left_md">
                <div className="recruit-hero-content">
                  <h2>
                    {data.subheading.engtext}{" "}
                    <span>{data.subheading.japtext}</span>
                  </h2>
                  <p>{data.subheading.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="quality-wrap section-padding">
          <div className="container req_container">
            <div className="row">
              <div className="col-md-12 left_md">
                <div className="section-title v5">
                  <h3>CORE VALUE</h3>
                  <p>共感いただける方、一緒に働きましょう！</p>
                </div>
              </div>
              {data.corevalues.map((value: any, index: number) => {
                return (
                  <div className="col-lg-4" key={index}>
                    <div className="quality-item">
                      <span>#{index + 1}</span>
                      <h4>{value.heading}</h4>
                      <h5>{value.japheading}</h5>
                      <p>{value.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="container req_container section-padding pb-0">
          <div className="row">
            <div className="col-md-12 left_md">
              <div className="section-title v4 style1">
                <img src={thumb} alt="Image" />
                <h2>の５いいね！</h2>
              </div>
            </div>

            {data.fivelikes.map((like, index) => {
              return (
                <div className="col-lg-4" key={index}>
                  <div className="simple-item">
                    <div className="icon">
                      <img src={thumbImage} alt="Image" />
                      <span className="number">{index + 1}</span>
                    </div>

                    <div
                      dangerouslySetInnerHTML={{ __html: like.description }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="apply-button section-padding">
          <h2>JOBS</h2>
          <p>応募はコチラから！</p>
          <a href={data.joblink} className="btn v3">
            Wantedly <img src={upload} alt="Image" />
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default Recruitment
