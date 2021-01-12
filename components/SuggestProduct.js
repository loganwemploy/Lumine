import React from 'react'
import styled from 'styled-components';
const StyledSuggestProduct = styled.div`
   
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
  width: 68vw;
 


.lo-debug, .lo-debug:before, .lo-debug:after {
  outline: 1px solid rgba(255, 0, 255, 0.1);
}

.mq-debug:before {
  content: "Up to 449px";
  display: block;
  text-align: center;
  font-weight: 400;
  font-size: 13px;
  line-height: 2.5;
  font-family: "SFMono-Regular", Consolas, "Lucida Console", Courier, monospace;
  white-space: nowrap;
  color: #fff;
  background-color: #df7557;
}
@media (min-width: 450px) and (max-width: 767px) {
  .mq-debug:before {
    content: "from 450px, up to 767px";
    background-color: #326d4f;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .mq-debug:before {
    content: "from 768px, up to 1023px";
    background-color: #415c9a;
  }
}
@media (min-width: 1024px) and (max-width: 1279px) {
  .mq-debug:before {
    content: "from 1024px, up to 1279px";
    background-color: #944c8d;
  }
}
@media (min-width: 1280px) and (max-width: 1919px) {
  .mq-debug:before {
    content: "from 1280px, up to 1919px";
    background-color: #b8386d;
  }
}
@media (min-width: 1920px) {
  font-family: "Proxima Nova", sans-serif;
  background-color: #f4f4f4;
  color: #363636;
  margin: auto;
  margin-top: 32px;
  padding-left: 18px;
  padding-right: 18px;

  .mq-debug:before {
    content: "from 1920px and up";
    background-color: #d9434e;
  }
}

a {
  text-decoration: none;
  color: inherit;
}


}
@media screen and (min-width: 450px) {
  body {
    max-width: 486px;
  }
}
@media screen and (min-width: 768px) {
  body {
    max-width: 706px;
  }
}

.ratio {
  height: 0;
  position: relative;
}
.ratio > img,
.ratio > * {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #ddd;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  pointer-events: none;
}

.ratio--16x9 {
  padding-bottom: 56.25%;
}

.banner {
  display: block;
  overflow: hidden;
  margin-bottom: 18px;
  text-align: center;
  background-color: #fff;
  border: 1px solid #ccc;
}
@media screen and (min-width: 768px) {
  .banner {
    display: flex;
    flex-direction: row;
  }
}
@media screen and (min-width: 768px) {
  .banner-img {
    width: 214px;
    height: 180px;
    padding-bottom: 0 !important;
    order: 1;
  }
}
.banner-body {
  padding: 16px 18px;
}
@media screen and (min-width: 768px) {
  .banner-body {
    flex-grow: 1;
    order: 0;
  }
}
.banner-body__title {
  margin-bottom: 16px;
  font-size: 20px;
  text-align: center;
}
.banner-body__title b {
  font-weight: 600;
}
.banner-body__button {
  display: inline-block;
  vertical-align: middle;
  overflow: visibile;
  margin-bottom: 16px;
  padding: 12px 18px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #363636;
  border-radius: 3px;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.banner-body__excerpt {
  font-size: 13px;
  text-align: center;
  color: #363636;
}
`;

const SuggestProduct = () => {
    return (
        <StyledSuggestProduct>
            <a href="" className="banner">
  <div className="ratio ratio--16x9  banner-img">
    <img data-pin-nopin="true" src="https://img.theculturetrip.com/320x180/wp-content/uploads/2015/11/Norway-%C2%A9-Anna-Jedynak-Shutterstock.com_.jpg"/>
    {/* <!--<img src="http://via.placeholder.com/448x252" data-url="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt="I have a 16:9 aspect ratio."/>--> */}
  </div>
  <div className="banner-body">
    <p className="banner-body__title">Something tells us you might like to see more <b>food & drink in Oslo</b>.</p>
    <div className="banner-body__button">Show me more</div>
    <p className="banner-body__excerpt">
      <b>Culture Trip</b> has thousands of<br/>
      articles from around the world.
    </p>
  </div>
</a>
        </StyledSuggestProduct>
    )
}

export default SuggestProduct
