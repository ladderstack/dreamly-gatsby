import React from "react"
import logo from "../images/logo.svg"

const Footer = () => {
  return (
    <footer className="footer-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-widget v1">
              <a href="index.html" className="footer-logo">
                <img src={logo} className="img-fluid" alt="Image" />
              </a>
              <div className="copyright d-none d-sm-block">
                <a href="#">利用規約／免責事項</a>
                <a href="#">プライバシーポリシー</a>
                <p>©Dreamly Inc. All Rights Reserved.</p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-widget v2">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">VISION</a>
                </li>
                <li>
                  <a href="#">MISSION</a>
                </li>
                <li>
                  <a href="#">CEO MESSAGE</a>
                </li>
                <li>
                  <a href="#">MEMBER</a>
                </li>
                <li>
                  <a href="#">会社概要</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-widget">
              <h3>Service</h3>
              <ul>
                <li>
                  <a href="#">WHAT WE DO</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-widget">
              <h3>Press</h3>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-widget">
              <h3>Recruitment</h3>
              <ul>
                <li>
                  <a href="#">CORE VALUE</a>
                </li>
                <li>
                  <a href="#">Dreamy’s 5 LIKE!</a>
                </li>
                <li>
                  <a href="#">JOBS</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 d-sm-none">
            <div className="copyright">
              <a href="#">利用規約／免責事項</a>
              <a href="#">プライバシーポリシー</a>
              <p>©Dreamly Inc. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
