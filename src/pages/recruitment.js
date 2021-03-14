import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Recruitment = () => {
  return (
    <Layout title={"Recruitment"}>
      <div className="content-wrap">
        <div className="recruitment-wrap section-padding pb-0">
          <div className="section-title v4">
            <img src="assets/img/shape-polygon.svg" alt="Image" />
            <h2>Recruitment</h2>
          </div>
        </div>
        <div className="recruit-hero">
          <div className="container req_container">
            <div className="row">
              <div className="col-lg-10 left_md">
                <div className="recruit-hero-content">
                  <h2>
                    Try, Fail, Iterate! <span>の精神</span>
                  </h2>
                  <p>熱い想いをもった仲間を募集しています！</p>
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

              <div className="col-lg-4">
                <div className="quality-item">
                  <span>#1</span>
                  <h4>Be Passionate</h4>
                  <h5>パッションに生きる</h5>
                  <p>
                    自分の中の「熱量」を大事にし、
                    それに向かって貪欲に成長し続けよう。
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="quality-item">
                  <span>#2</span>
                  <h4>Be Unique</h4>
                  <h5>唯一無二の存在であれ</h5>
                  <p>となりの人とは違う自分だけの強みを 磨き続けよう。</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="quality-item">
                  <span>#3</span>
                  <h4>Be Challenging</h4>
                  <h5>まずは、やってみよう</h5>
                  <p>やってみて失敗したら、何か学んで、 また次やってみよう。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container req_container section-padding pb-0">
          <div className="row">
            <div className="col-md-12 left_md">
              <div className="section-title v4 style1">
                <img src="assets/img/logo-4.svg" alt="Image" />
                <h2>の５いいね！</h2>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="simple-item">
                <div className="icon">
                  <img src="assets/img/thumb.svg" alt="Image" />
                  <span className="number">1</span>
                </div>

                <h4 className="thumb_title">人間関係</h4>
                <p>
                  オープンマインドで、どんどん意見 <br />
                  を出し合える関係です！
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="simple-item">
                <div className="icon">
                  <img src="assets/img/thumb.svg" alt="Image" />
                  <span className="number">2</span>
                </div>
                <h4>
                  フレキシブルな <br />
                  勤務時間
                </h4>
                <p>
                  「自由と責任は一対」という <br />
                  スウェーデンのマインドを取り入 <br />
                  れています。
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="simple-item">
                <div className="icon">
                  <img src="assets/img/thumb.svg" alt="Image" />
                  <span className="number">3</span>
                </div>
                <h4>
                  なんか <br />
                  インターナショナル
                </h4>
                <p>
                  北欧出身のCEOに加え、海外経験の <br />
                  あるメンバーが複数。 <br />
                  各国の情報や英語が飛び交う。
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="simple-item">
                <div className="icon">
                  <img src="assets/img/thumb.svg" alt="Image" />
                  <span className="number">4</span>
                </div>
                <h4>モダンなスキル選定</h4>
                <p>
                  主に、React, Golang, Flutterを <br />
                  用いて開発。基本的にグローバル <br />
                  水準のスキルを扱う。
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="simple-item">
                <div className="icon">
                  <img src="assets/img/thumb.svg" alt="Image" />
                  <span className="number">5</span>
                </div>
                <h4>香川</h4>
                <p>
                  田舎すぎず、都会すぎず。オフィス <br />
                  のある高松は車がなくても住める <br />
                  コンパクトシティ。郊外へ少し出 <br />
                  ると、山や田んぼが広がる地域へ。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="apply-button section-padding">
          <h2>JOBS</h2>
          <p>応募はコチラから！</p>
          <a href="#" className="btn v3">
            Wantedly <img src="assets/img/upload.png" alt="Image" />
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default Recruitment
