import React from "react"
import Layout from "../components/layout"
import whiteD from "../images/shape-2.png"
import Parabola from "../images/parabola-2.svg"
import CeoMessage from "../images/parabola-one.svg"
import ceo from "../../static/img/ceo.png"
import sign from "../../static/img/ceo-sign.png"
import fb from "../../static/img/fb.png"
import data from "../../content/about.json"

const About = () => {
  console.log(data)
  return (
    <Layout>
      <div className="content-wrap">
        <div className="about-wrap xpt-0">
          <div className="container">
            <div className="about-item-wrap v2">
              <div className="row align-items-center">
                <div className="col-md-12">
                  <div className="about-text v1 style1 text-center">
                    <h2>
                      <span>
                        <img src={Parabola} alt="Image" />
                        About
                      </span>
                      Dreamly
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-us vision_area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-0 col-xl-8">
                <div className="about-content">
                  <img src={whiteD} alt="Iamge" className="shape-one" />
                  <h2>
                    <span>Vision </span>
                    {data.vision}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: data.visionDescription }}
                  />
                </div>
                <div className="about-content">
                  <img src={whiteD} alt="Iamge" className="shape-one" />
                  <h2>
                    <span>Mission </span>
                    {data.mission}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.missionDescription,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="msg-wrap section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="about-text v3 text-center">
                  <h2>
                    <span>
                      <img src={CeoMessage} alt="Image" />
                      CEO
                    </span>
                    Message
                  </h2>
                  <img src={ceo} alt="Image" />
                </div>
              </div>
            </div>
          </div>
          <div className="ceo-msg-wrap">
            <img src={CeoMessage} alt="Image" className="shape-three" />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-8">
                  <div className="ceo-msg">
                    <div
                      dangerouslySetInnerHTML={{ __html: data.message_ceo }}
                    />
                  </div>
                  <div className="ceo-sign">
                    <img src={sign} alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-wrap section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="section-title v4">
                  <img src="assets/img/logo-3.png" alt="Image" />
                  <h2>Member</h2>
                </div>
                <div className="team-item-wrap">
                  <div className="team-member">
                    <img src="assets/img/member-1.png" alt="Image" />
                    <p>CEO・ CTO</p>
                    <h4>Lars Larsson</h4>
                  </div>
                  <div className="team-member">
                    <img src="assets/img/member-1.png" alt="Image" />
                    <p>取締役</p>
                    <h4>藤田 朋巳</h4>
                  </div>
                  <div className="team-member">
                    <img src="assets/img/member-1.png" alt="Image" />
                    <p>社外取締役</p>
                    <h4>小宮 直子</h4>
                  </div>
                  <div className="team-member">
                    <img src="assets/img/member-1.png" alt="Image" />
                    <p>プロダクトオーナー</p>
                    <h4>松原 風郎</h4>
                  </div>
                  <div className="team-member">
                    <img src="assets/img/member-1.png" alt="Image" />
                    <p>フロントエンドエンジニア</p>
                    <h4>上野 元輝</h4>
                  </div>
                  <div className="team-member">
                    <img src="assets/img/member-1.png" alt="Image" />
                    <p>UI/UXデザイナー</p>
                    <h4>林　祐里</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="comp-profile-wrap section-padding">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                <div className="comp-profile-info">
                  <h3>会社概要</h3>
                  <div className="comp-profile-info-item">
                    <div className="info-title">
                      <h4>会社名</h4>
                    </div>
                    <div className="info-desc">
                      <p>{data.companyprofile.name}</p>
                    </div>
                  </div>
                  <div className="comp-profile-info-item">
                    <div className="info-title">
                      <h4>設立</h4>
                    </div>
                    <div className="info-desc">
                      <p>{data.companyprofile.setup}</p>
                    </div>
                  </div>
                  <div className="comp-profile-info-item">
                    <div className="info-title">
                      <h4>資本金</h4>
                    </div>
                    <div className="info-desc">
                      <p>{data.companyprofile.capital}</p>
                    </div>
                  </div>
                  <div className="comp-profile-info-item">
                    <div className="info-title">
                      <h4>事業内容</h4>
                    </div>
                    <div className="info-desc">
                      <p>{data.companyprofile.business_content}</p>
                    </div>
                  </div>
                  <div className="comp-profile-info-item">
                    <div className="info-title">
                      <h4>代表者</h4>
                    </div>
                    <div className="info-desc">
                      <p>{data.companyprofile.representative}</p>
                    </div>
                  </div>
                  <div className="comp-profile-info-item">
                    <div className="info-title">
                      <h4>顧問</h4>
                    </div>
                    <div className="info-desc">
                      <p>
                        総合顧問　　{" "}
                        <span>
                          {data.companyprofile.consultant.generaladvisor}
                        </span>
                      </p>
                      <p>
                        顧問税理士　{" "}
                        <span>
                          {data.companyprofile.consultant.consultanttax}
                        </span>
                      </p>
                      <p>
                        顧問社労士　{" "}
                        <span>
                          {data.companyprofile.consultant["advisor-company"]}
                        </span>
                      </p>
                      <p>
                        顧問弁護士　
                        <span>
                          {data.companyprofile.consultant["general-counsel"]}
                        </span>
                      </p>
                      <p>
                        デザイン顧問　{" "}
                        <span>
                          {data.companyprofile.consultant["design-advisor"]}
                        </span>
                      </p>
                      <p>
                        アジャイル顧問{" "}
                        <span>
                          {data.companyprofile.consultant["agile-advisor"]}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="comp-profile-info-item">
                    <div className="info-title">
                      <h4>所在地</h4>
                    </div>
                    <div className="info-desc">
                      <p>{data.companyprofile.location}</p>
                      <p>香川県高松市常盤町1丁目6-6</p>
                    </div>
                  </div>
                  <div className="comp-profile-info-item">
                    <div className="info-title">
                      <h4>社員数</h4>
                    </div>
                    <div className="info-desc">
                      <p>{data.companyprofile["number-employees"]}</p>
                    </div>
                  </div>
                  <div className="comp-profile-info-item">
                    <div className="info-title">
                      <h4>SNS</h4>
                    </div>
                    <div className="info-desc">
                      <ul>
                        <li>
                          <a href={data.companyprofile.SNS.facebook}>
                            <img src={fb} alt="Image" />
                          </a>
                        </li>
                        <li>
                          <a href={data.companyprofile.SNS.twitter}>
                            <img src={fb} alt="Image" />
                          </a>
                        </li>
                        <li>
                          <a href={data.companyprofile.SNS.github}>
                            <img src={fb} alt="Image" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
