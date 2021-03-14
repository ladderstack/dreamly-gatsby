import React from "react"
import Layout from "../components/layout"
import whiteD from "../images/shape-2.png"
import Parabola from "../images/parabola-2.svg"
import CeoMessage from "../images/parabola-one.svg"

const About = () => {
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
                    <span>Vision </span>パッションに時間を費やせる社会へ。
                  </h2>
                  <p>
                    「パッション＝本当に自分がやりたいこと」に大切な時間を
                    割きたい。
                    <br />
                    しかし現実は、非効率的な作業やプロセスが溢れています。
                    <br />
                    テクノロジーによる効率化が、人々に「時間と心の余裕」を与え得ることを、北欧諸国は証明しています。
                    <br />
                    もっとシンプルでいい。注ぐべきところに、時間とエネルギーを費やせる社会を創りましょう。
                  </p>
                </div>
                <div className="about-content">
                  <img src={whiteD} alt="Iamge" className="shape-one" />
                  <h2>
                    <span>Mission </span>もっと「カンタン」へ。
                  </h2>
                  <p>
                    複雑・非効率的な作業を、もっとカンタンにすることで、人々に意義ある時間を生み出します。
                  </p>
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
                      <img src="assets/img/parabola-one.svg" alt="Image" />
                      CEO
                    </span>
                    Message
                  </h2>
                  <img src="assets/img/ceo.png" alt="Image" />
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
                    <p>
                      「カンタンへ」の先にある未来像は、「パッションに時間を費やせる社会」
                      日本とスウェーデンの両国を経験して感じたこと。
                    </p>
                    <p>
                      それは、「社会がカンタンであることは、人びとの幸せに繋がる。」
                    </p>
                    <p>
                      日本に移住してから、あらゆる場面で「無駄・複雑」なプロセスを経験しました。
                      例えば、名前・住所・電話番号を何度も書くという作業。
                      スウェーデンでは、マイナンバーさえ入力すれば自動入力されるため、「手書きで個人情報を書く」
                      という場面に遭遇することがありません。
                    </p>
                    <p>
                      しかし、日本で聞こえてくるのは「これが普通だと思って気にしたこともなかった」
                      「日本はそう簡単に変われないよ」という声。
                    </p>
                    <p>
                      ICT化すれば、どんなに「カンタンな世界」が待っているかを知ってしまっている私にとって、
                      日本の現状は決して放っておけるものではありませんでした。
                    </p>
                    <p>
                      ドリームリーが目指すのは「パッションに時間を費やせる社会」。
                      そのために私たちが為すべきことは、ITのチカラで無駄・複雑なプロセスを無くすことです。
                    </p>
                    <p>
                      これは、ICT先進国・幸福度ランキング上位・イノベーションが多く生まれる北欧で、既に実現して
                      いること。必ず日本にも実現可能な未来像です。
                    </p>
                  </div>
                  <div className="ceo-sign">
                    <img src="assets/img/ceo-sign.png" alt="Image" />
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
                      <p>株式会社Dreamly（英：Dreamly Inc.）</p>
                    </div>
                  </div>
                  <div className="comp-profile-info-item">
                    <div className="info-title">
                      <h4>設立</h4>
                    </div>
                    <div className="info-desc">
                      <p>2019年1月</p>
                    </div>
                  </div>
                  <div className="comp-profile-info-item">
                    <div className="info-title">
                      <h4>資本金</h4>
                    </div>
                    <div className="info-desc">
                      <p>300万円</p>
                    </div>
                  </div>
                  <div className="comp-profile-info-item">
                    <div className="info-title">
                      <h4>事業内容</h4>
                    </div>
                    <div className="info-desc">
                      <p>システムの開発発売および 情報処理・提供サービス業務</p>
                    </div>
                  </div>
                  <div className="comp-profile-info-item">
                    <div className="info-title">
                      <h4>代表者</h4>
                    </div>
                    <div className="info-desc">
                      <p>ラーション・ラーシュ</p>
                    </div>
                  </div>
                  <div className="comp-profile-info-item">
                    <div className="info-title">
                      <h4>顧問</h4>
                    </div>
                    <div className="info-desc">
                      <p>
                        総合顧問　　 <span>濱川武明</span>
                      </p>
                      <p>
                        顧問税理士　 <span>米田智範税理士事務所</span>
                      </p>
                      <p>
                        顧問社労士　 <span>東社会保険労務士事務所</span>
                      </p>
                      <p>
                        顧問弁護士　
                        <span>
                          八木俊則 <br />
                          　　　　　　 (あおみ総合法律事務所）
                        </span>
                      </p>
                      <p>
                        デザイン顧問　 <span>林 雄三</span>
                      </p>
                      <p>
                        アジャイル顧問 <span>懸田 剛</span>
                      </p>
                    </div>
                  </div>
                  <div className="comp-profile-info-item">
                    <div className="info-title">
                      <h4>所在地</h4>
                    </div>
                    <div className="info-desc">
                      <p>〒760-0054</p>
                      <p>香川県高松市常盤町1丁目6-6</p>
                    </div>
                  </div>
                  <div className="comp-profile-info-item">
                    <div className="info-title">
                      <h4>社員数</h4>
                    </div>
                    <div className="info-desc">
                      <p>6人</p>
                    </div>
                  </div>
                  <div className="comp-profile-info-item">
                    <div className="info-title">
                      <h4>SNS</h4>
                    </div>
                    <div className="info-desc">
                      <ul>
                        <li>
                          <a href="#">
                            <img src="assets/img/fb.png" alt="Image" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="assets/img/fb.png" alt="Image" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="assets/img/fb.png" alt="Image" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="assets/img/fb.png" alt="Image" />
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
