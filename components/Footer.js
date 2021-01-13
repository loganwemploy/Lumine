import React from 'react'
import styled from 'styled-components';
const StyledFooter = styled.div`
  /* Mini reset */
 position: absolute;
 z-index: 99999999;
bottom: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;


/* Layout debug */
.lo-debug *,
.lo-debug *:before,
.lo-debug *:after {
  outline: 1px solid rgba(255, 0, 255, 0.5);
}

/* MQ Debug*/
.mq-debug:before {
  content: "Up to 449px";
  display: block;
  text-align: center;
  font-weight: 400;
  font-size: 13px;
  line-height: 2.5;
  font-family: "SFMono-Regular", Consolas, "Lucida Console", Courier, monospace;
  white-space: nowrap;
  color: #3A3934;
  background-color: #FFF8DD;
  border-bottom: 1px solid #E6E0C9;
}
@media (min-width: 450px) and (max-width: 767px) {
  .mq-debug:before {
    content: "from 450px, up to 767px";
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .mq-debug:before {
    content: "from 768px, up to 1023px";
  }
}
@media (min-width: 1024px) and (max-width: 1279px) {
  .mq-debug:before {
    content: "from 1024px, up to 1279px";
  }
}
@media (min-width: 1280px) and (max-width: 1919px) {
  .mq-debug:before {
    content: "from 1280px, up to 1919px";
  }
}
@media (min-width: 1920px) {
  .mq-debug:before {
    content: "from 1920px and up";
  }
}

/* Set fonts */
@font-face {
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 400;
  src: local("ProximaNova-Book");
}
@font-face {
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 500;
  src: local("ProximaNova-Semibold");
}
/* System */
@font-face {
  font-family: system;
  font-style: normal;
  font-weight: 300;
  src: local(".SFNSText-Regular"), local(".HelveticaNeueDeskInterface-Regular"), local(".LucidaGrandeUI"), local("Ubuntu Regular"), local("Segoe UI"), local("Roboto"), local("DroidSans"), local("Tahoma");
}
/* Page styles */
html {
  background: #F4F4F4;
  color: #121416;
  font: normal 400 1em/1.5 "Proxima Nova", system, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

/* Main Grid */
.page-grid {
  display: grid;
  grid-template-rows: 81px 1fr auto;
}

/* Header */
.global-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.75rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  background-color: #fff;
}
@media (min-width : 768px) {
  .global-header {
    height: 5.0625rem;
    padding-right: 1.25rem;
    padding-left: 1.25rem;
  }
}

/* Footer */
.global-footer {
  color: #fff;
  background: #121416;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 18px;
  padding: 0 18px;
}
@media (min-width : 768px) {
  .global-footer {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

/* Footer nav */
.footer-nav {
  list-style: none;
  padding-top: 40px;
  margin-bottom: 18px;
}

.footer-nav-item__title {
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.6875em;
  letter-spacing: 0.03125em;
  margin: 0 0 0.75em;
  padding: 0;
}

.footer-nav-item__link {
  font-size: 0.8125em;
  color: #fff;
  text-decoration: none;
}
.footer-nav-item__link:hover {
  text-decoration: underline;
}

/* Copyright */
.copyright {
  grid-column: 1/span 4;
  margin-bottom: 18px;
  font-size: 0.6875em;
}

/* Icons */
.icon {
  display: inline-block;
  vertical-align: middle;
  width: 1em;
  height: 1em;
  position: relative;
  font-size: 16px;
  line-height: 1;
  text-align: center;
  pointer-events: none;
  fill: inherit;
}

.bump-right {
  margin-left: 0.375rem;
}

.bump-left {
  margin-right: 0.375rem;
}

.icon--tiny {
  font-size: 0.5rem;
}

.icon--small {
  font-size: 0.75rem;
}

.icon--medium {
  font-size: 1.5rem;
}

.icon--large {
  font-size: 2rem;
}

/* Helpers */
.hide-mobile {
  display: none !important;
}
@media (min-width : 768px) {
  .hide-mobile {
    display: inherit !important;
  }
}

.hide-desktop {
  display: inherit !important;
}
@media (min-width : 768px) {
  .hide-desktop {
    display: none !important;
  }
}
`;

const Footer = () => {
    return (
        <StyledFooter>
            

<footer className="global-footer" role="contentinfo">
  <ul className="footer-nav">
    <li className="footer-nav-item"><span className="footer-nav-item__title">The Company</span></li>
    <li className="footer-nav-item"><a href="" title="" className="footer-nav-item__link">About Us</a></li>
    <li className="footer-nav-item"><a href="" title="" className="footer-nav-item__link">The Team</a></li>
    <li className="footer-nav-item"><a href="" title="" className="footer-nav-item__link">In The News</a></li>
    <li className="footer-nav-item"><a href="" title="" className="footer-nav-item__link">Our App</a></li>
    <li className="footer-nav-item"><a href="" title="" className="footer-nav-item__link">Newsletter</a></li>
  </ul>
  <ul className="footer-nav">
    <li className="footer-nav-item"><span className="footer-nav-item__title">Contact Us</span></li>
    <li className="footer-nav-item"><a href="" title="" className="footer-nav-item__link">Get in Touch</a></li>
    <li className="footer-nav-item"><a href="" title="" className="footer-nav-item__link">Advertise</a></li>
    <li className="footer-nav-item"><a href="" title="" className="footer-nav-item__link">Careers</a></li>
    <li className="footer-nav-item"><a href="" title="" className="footer-nav-item__link">Become a contributor</a></li>
  </ul>
  <ul className="footer-nav">
    <li className="footer-nav-item"><span className="footer-nav-item__title">Legal</span></li>
    <li className="footer-nav-item"><a href="" title="" className="footer-nav-item__link">Privacy Policy</a></li>
    <li className="footer-nav-item"><a href="" title="" className="footer-nav-item__link">Terms of Use</a></li>
    <li className="footer-nav-item"><a href="" title="" className="footer-nav-item__link">Cookie Policy</a></li>
    <li className="footer-nav-item"><a href="" title="" className="footer-nav-item__link">Open Source Licenses</a></li>
  </ul>
  <ul className="footer-nav">
    <li className="footer-nav-item"><span className="footer-nav-item__title">Follow Us</span></li>
   
  </ul>
  <div className="copyright">
 
    <a href="" title="" className="nav-link"><svg className="" viewBox="0 0 135 40" width="135" height="40"></svg></a>
     <span id="js-time">2021</span> Lumi Candle Boutique
  </div>
</footer>
        </StyledFooter>
    )
}

export default Footer
