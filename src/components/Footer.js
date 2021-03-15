import React from "react"
import footerData from "../../content/footer.json"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="footer-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-widget v1">
              <Link to="/" className="footer-logo">
                <img src={footerData.logo} className="img-fluid" alt="Image" />
              </Link>
              <div className="copyright d-none d-sm-block">
                <div dangerouslySetInnerHTML={{ __html: footerData.copy }} />
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-widget v2">
              <h3>About</h3>
              <ul>
                {footerData.aboutMenu.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.url}>{item.name}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-widget">
              <h3>Service</h3>
              <ul>
                {footerData.serviceMenu.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.url}>{item.name}</Link>
                    </li>
                  )
                })}
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
                {footerData.recruitmentMenu.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.url}>{item.name}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="col-12 d-sm-none">
            <div className="copyright">
              <div dangerouslySetInnerHTML={{ __html: footerData.copy }} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
