import React from 'react'

const SubHero = () => {
    return (
        <div className="body">
          <div className="shadow-title parallax-top-shadow">work</div>
  {/* <div className="section-parallax parallax-00" style={{backgroundImage: "url('http://www.ivang-design.com/svg-load/parallax/parallax-0.png')"}}></div>
  <div className="section-parallax parallax-01" style={{backgroundImage: "url('http://www.ivang-design.com/svg-load/parallax/parallax-01.png')"}}></div> */}

<div className="section full-height">
  <div className="section-title-wrap">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center parallax-fade-top">
          <p>we do magic</p>	
          <h1>chase your<br/>passion</h1>
        </div>
      </div>	
    </div>
  </div>
</div>

<div className="section full-height z-bigger">
  <ul className="case-study-wrapper">
    <li className="case-study-name">                            	
      <a href="#" className="hover-target">light</a>
    </li>
    <li className="case-study-name">                                         	
      <a href="#" className="hover-target">flare</a>
    </li>
    <li className="case-study-name">                                        	
      <a href="#" className="hover-target">nature</a>
    </li>
    <li className="case-study-name">                                         	
      <a href="#" className="hover-target">fire</a>
    </li>
  </ul>
  <ul className="case-study-images">
    <li>
      <div className="img-hero-background">
        {/* <img src="http://www.ivang-design.com/svg-load/parallax/light.jpg" alt=""/> */}
      </div>  
      <div className="hero-number-back">01</div> 
      <div className="hero-number">01</div> 
      <div className="hero-number-fixed">04</div> 
      <div className="case-study-title">graphic design, interaction</div> 
    </li>
    <li>
      <div className="img-hero-background">
        <img src="http://www.ivang-design.com/svg-load/parallax/flare.jpg" alt=""/>
      </div> 
      <div className="hero-number-back">02</div> 
      <div className="hero-number">02</div>  
      <div className="case-study-title">advertising, art direction</div> 
    </li>
    <li>
      <div className="img-hero-background">
        <img src="http://www.ivang-design.com/svg-load/parallax/nature.jpg" alt=""/>
      </div>
      <div className="hero-number-back">03</div>  
      <div className="hero-number">03</div> 
      <div className="case-study-title">photography, retouching</div> 
    </li>
    <li>
      <div className="img-hero-background">
        <img src="http://www.ivang-design.com/svg-load/parallax/fire.jpg" alt=""/>
      </div> 
      <div className="hero-number-back">04</div> 
      <div className="hero-number">04</div> 
      <div className="case-study-title">photography, advertising</div> 
    </li>
  </ul>	
</div>



{/* <!-- Scroll back to top
================================================== --> */}

<div className="scroll-to-top hover-target"></div>

{/* <!-- Page cursor
================================================== --> */}

<div className='cursor' id="cursor"></div>
<div className='cursor2' id="cursor2"></div>
<div className='cursor3' id="cursor3"></div>

{/* <!-- Link to page
================================================== --> */}
<style jsx>{`
        .body{
            width: 100%;
            display: block;
            overflow-x: hidden;
            background-color: #1f2029;
          color: #c4c3ca;
            font-family: 'Muli', sans-serif;
        }
        ::selection {
            background-color: #000;
          color: #fff;
        }
        ::-moz-selection {
            background-color: #000;
          color: #fff;
        }
        a:hover{
          text-decoration: none;
        }
        /* #Cursor
        ================================================== */
        
        .cursor,
        .cursor2,
        .cursor3{
            position: fixed;
            border-radius: 50%;	
            transform: translateX(-50%) translateY(-50%);
            pointer-events: none;
            left: -100px;
            top: 50%
        }
        .cursor{
            background-color: #fff;
            height: 0;
            width: 0;
            z-index: 99999;
        }
        .cursor2,.cursor3{
            height: 36px;
            width: 36px;
            z-index:99998;
            -webkit-transition:all 0.3s ease-out;
            transition:all 0.3s ease-out
        }
        .cursor2.hover,
        .cursor3.hover{
            -webkit-transform:scale(2) translateX(-25%) translateY(-25%);
            transform:scale(2) translateX(-25%) translateY(-25%);
            border:none
        }
        .cursor2{
            border: 2px solid #fff;
            box-shadow: 0 0 22px rgba(255, 255, 255, 0.6);
        }
        .cursor2.hover{
            background: rgba(255,255,255,.1);
            box-shadow: 0 0 12px rgba(255, 255, 255, 0.2);
        }
        @media screen and (max-width: 1200px){
            .cursor,.cursor2,.cursor3{
                display: none
            }
        }
        
        .shadow-title{
            position: fixed;
            top: 0;
            margin-top: 30px;
            left: 20px;
            width: 100%;
            height: 300%;
            text-align: left;
            font-family: 'Muli', sans-serif;
            -webkit-writing-mode: vertical-lr;
            writing-mode: vertical-lr;
            font-size: 18vw;
            line-height: 1;
            color: rgba(200,200,200,.1);
            background: linear-gradient(90deg, rgba(200,200,200,0), rgba(200,200,200,0.35));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 900;
            z-index: 1;
        }
        .section-parallax{
            position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-position: center;
          background-size: cover;
          z-index: 2;
        }
        .section {
          position: relative;
            width: 100%;
            display: block;
        }
        .full-height {
            height: 100vh;
        }
        .section.z-bigger {
            z-index: 100;
        }
        .section.z-bigger-2 {
            z-index: 200;
        }
        .section-title-wrap{
            position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          transform: translateY(-50%);
          z-index: 3;
        }
        .section-title-wrap p{
            letter-spacing: 2px;
            font-size: 22px;
            font-weight: 700;
            padding: 0;
          color: #6f598f;
        }
        .section-title-wrap h1{
            margin: 0;
            padding: 0;
            font-size: 5vw;
          letter-spacing: 8px;
            font-weight: 900;
          color: #fff;
            line-height: 1;
          text-transform: uppercase;
        }
        .padding-top-bottom {
            padding-top: 100px;
            padding-bottom: 100px;
        }
        .over-hide{
            overflow: hidden;
        }
        .background-dark {
            background-color: #101010;
        }
        .project-link-wrap{
            position: relative;
            display: block;
            width: 100%;
            text-align: center;
            margin: 0 auto;
            cursor: pointer;
        }
        .project-link-wrap p{
            font-size: 100px;
            line-height: 80px;
            color: #c4c3ca;
            font-weight: 900;
            text-align: center;
            margin: 0 auto;
            cursor: pointer;
            opacity: 0.35;
            -webkit-transition: all 200ms linear;
            transition: all 200ms linear;
        }
        .project-link-wrap:hover p{
            opacity: 0.15;
        }
        
        /* Case Study Showcase
        ================================================== */
        
        .case-study-wrapper {
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: 10;
            width: auto;
            margin: 0;
            padding: 8px 15px;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            list-style: none;
          background-color: rgba(31,32,41,.8);
          border-radius: 10px;
          box-shadow: 0 0 30px rgba(0,0,0,.8);
        }
        .case-study-wrapper .case-study-name {
            margin: 5px;
            display: inline-block;
        }
        .case-study-wrapper .case-study-name a {
            position: relative;
            list-style: none;
            margin: 0 auto;
            display: block;
            text-align: center;
            padding: 0;
            font-size: 14px;
            font-weight: 800;
            line-height: 1;
            letter-spacing: 2px;
            color: #8e8d9a;
            opacity: 0.5;
            text-decoration: none;
          text-transform: uppercase;
            -webkit-transition: all 300ms linear;
            transition: all 300ms linear; 
        }	
        .case-study-wrapper .case-study-name a:hover {
            text-decoration: none;
        }	
        .case-study-wrapper .case-study-name.active a {
            opacity: 1;
            color: #fff;
        }	
        .case-study-images {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            margin:0;
            z-index:2;
        }	
        .case-study-images li {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            overflow: hidden;
            list-style:none;
            -webkit-transition: all 300ms linear;
            transition: all 300ms linear; 
        }	
        .case-study-images li .img-hero-background{
            position: absolute;
            width: calc(100% - 80px);
          max-width: 950px;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
            background-position:center center;
            background-repeat:no-repeat;
            top: 50%;
            left: 50%;
            overflow: hidden;
            list-style:none;
            opacity: 0;
          border-radius: 20px;
          box-shadow: 0 0 50px rgba(0,0,0,.6);
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            -webkit-transition: all 300ms linear;
            transition: all 300ms linear; 
        }
        .case-study-images li .img-hero-background img{
          width: 100%;
          height: auto;
          display: block;
        }
        .case-study-images li.show .img-hero-background {
            opacity: 1;
        } 
        .case-study-images li .case-study-title{
            position: absolute;
            top: 0;
          height: 100%;
          text-align: center;
            left: 30px;
            display: block;
            opacity: 0;
            z-index: 19;
            letter-spacing: 1px;
            font-size: 14px;
            -webkit-writing-mode: vertical-lr;
            writing-mode: vertical-lr;
            font-weight: 400;
            line-height: 16px;
            color: #fff; 
            font-style: italic;
            -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
            -webkit-transition: all 300ms linear;
            transition: all 300ms linear; 
        }
        .case-study-images li.show .case-study-title {
            opacity: 1;
            -webkit-transform: translateX(0);
            transform: translateX(0);
        } 
        .case-study-images li .hero-number-back{
            position: absolute;
            bottom: 0;
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            display: block;
            list-style:none;
            opacity: 0;
            font-size: 100px;
            font-weight: 900;
            line-height: 1;
            color: rgba(255,255,255,.2);
            z-index: 5;
            -webkit-transition: all 300ms linear;
            transition: all 300ms linear; 
        } 
        .case-study-images li .hero-number{
            position: absolute;
            bottom: 40px;
            left: 50%;
            width: 40px;
            margin-left: -70px;
            display: block;
            letter-spacing: 2px;
            text-align: center;
            list-style:none;
            opacity: 0;
            font-size: 13px;
            font-weight: 300;
            line-height: 1;
            color: #fff;
            z-index: 6;
            -webkit-transform: translateY(100%);
            transform: translateY(100%);
            -webkit-transition: all 300ms linear;
            transition: all 300ms linear; 
        } 
        .case-study-images li .hero-number-fixed{
            position: absolute;
            bottom: 40px;
            left: 50%;
            margin-left: 30px;
            width: 40px;
            text-align: center;
            display: block;
            letter-spacing: 2px;
            list-style:none;
            font-size: 13px;
            font-weight: 300;
            line-height: 1;
            color: #fff;
            z-index: 6;
        }
        .case-study-images li .hero-number-fixed:before{
            position: absolute;
            content: '';
            top: 50%;
            left: -60px;
            width: 60px;
            height: 1px;
            z-index: 1;
            background-color: rgba(255,255,255,.4);
        }
        .case-study-images li.show .hero-number {
            opacity: 1;
            -webkit-transform: translateY(0);
            transform: translateY(0);
        } 
        .case-study-images li.show .hero-number-back {
            opacity: 1;
        } 
        
        /* #back to top arrow
        ================================================== */
        
        .scroll-to-top{
            position: fixed;
            bottom: 30px;
            right: 30px;
            opacity: 0;
            visibility: hidden;
            width: 10px;
            height: 40px;
            z-index: 251;
            background-repeat: no-repeat;
            background-position: top center;
            background-size: 10px 40px;
            cursor: pointer;
            background-image: url('http://www.ivang-design.com/svg-load/parallax/arrow-up.png');
            transform: translateY(-15px);
            -webkit-transition: all 250ms linear;
            transition: all 250ms linear; 
        }
        .scroll-to-top:hover{
            bottom: 32px;
        }
        .scroll-to-top.active-arrow{
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        
        /* #Media
        ================================================== */
        
        @media (max-width: 1200px) { 
          .scroll-to-top{
            right: 13px;
          } 
          .case-study-images li .case-study-title{
            left: 13px;
          }
        }
        
        @media (max-width: 991px) { 
            .case-study-images li .hero-number-back{
                font-size: 26vw;
            } 
        }
        
        @media (max-width: 767px) {	
          .case-study-wrapper {
            background-color: rgba(31,32,41,.95);
            box-shadow: 0 0 10px rgba(0,0,0,.8);
          }
            .case-study-wrapper .case-study-name a {
                font-size: 11px;
                letter-spacing: 1px;
            text-align: center;
            margin: 5px;
            }
            .case-study-wrapper .case-study-name {
            margin: 0 auto;
            text-align: center;
            }
            .case-study-images li .hero-number-back{
                font-size: 32vw;
            } 
        }
        
        /* #Link to page
        ================================================== */
        
        .link-to-portfolio {
              position: fixed;
            top: 30px;
            right: 30px;
            z-index: 20;
            cursor: pointer;
            width: 40px;
            height: 40px;
            text-align: center;
            border-radius: 3px;
            background-position: center center;
            background-size: cover;
            background-image: url('https://ivang-design.com/ig-logo.jpg');
            box-shadow: 0 0 0 2px rgba(255,255,255,.1);
            transition: opacity .2s, border-radius .2s, box-shadow .2s;
            transition-timing-function: ease-out;
        }
        .link-to-portfolio:hover {
            opacity: 0.8;
            border-radius: 50%;
            box-shadow: 0 0 0 20px rgba(255,255,255,.1);
        }
`}</style>
        </div>
    )
}

export default SubHero
