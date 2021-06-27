import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [date, setDate] = useState();
  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-12">
              <div className="footer-about">
                <h3 className="title">Follow Us </h3>
                <ul>
                  <li>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.facebook.com/ReactJSIndia/"
                      aria-label="React India facebook page"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://twitter.com/react_india/"
                      aria-label="React India twitter profile"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12">
              <div className="footer-pages" />
            </div>
            <div className="col-lg-2 col-sm-12" />
            <div className="col-lg-4 col-sm-12">
              <div className="footer-contact-info">
                <h3>Contact info</h3>
                <ul>
                  <li>
                    <div>APHERIO TECH PRIVATE LIMITED</div>
                    <a>
                      Geekabyte is a brand of APHERIO TECH PRIVATE LIMITED. We
                      conduct workshops, conferences across the globe.
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="flaticon-mail-black-envelope-symbol" />
                      react-india@geekabyte.tech
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="flaticon-phone-receiver" />
                      +918655559725 (On WhatsApp only),&nbsp; +491625272364
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="copyright-text">
                <p className="color-white">
                  Copyright © {date} All Rights Reserved, Powered by{' '}
                </p>
                <a>
                  <span> React India {date}</span>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <a
                rel="noreferrer"
                target="_blank"
                className="pull-right code-of-conduct-link"
                href="https://www.notion.so/apherio/CODE-OF-CONDUCT-46e5dc50604a44e1be53a34d4937682f"
              >
                <span>Code of Conduct</span>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                className="pull-right code-of-conduct-link"
                href="https://www.notion.so/apherio/ACCESSIBILITY-STATEMENT-191ec2ad04d84deeb6dfe74b638047e4"
              >
                <span>Accessibility</span>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                className="pull-right code-of-conduct-link"
                href="https://www.notion.so/Scholarship-Program-React-India-2019-490794dd0a464db0a43b4c8c5440839f"
              >
                <span>Scholarship Program</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
