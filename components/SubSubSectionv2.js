import React from 'react'
import Head from 'next/head'
import styled from 'styled-components';
import PLP from './PLP';
import Slider from './Slider';

const StyledSubSubSectionv2  = styled.div`
 
  box-sizing: border-box;
  transition: 0.35s ease;
  font-family: 'Open Sans';
  font-size: 18px;
  letter-spacing: 0px;
  font-weight: 400;
  line-height: 26px;
  color: #000;
  margin-top: -67vh;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;


.rela-block {
  display: block;
  position: relative;
  margin: auto;
  top:0 ;
  left: 0;
  right:0 ;
  bottom:0 ;
}
.rela-inline {
  display: inline-block;
  position: relative;
  margin: auto;
  top:0 ;
  left: 0;
  right:0 ;
  bottom:0 ;
}
.floated {
  display: inline-block;
  position: relative;
  margin: 0;
  top:0 ;
  left: 0;
  right:0 ;
  bottom:0 ;
  float: left;
}
.abs-center {
  display: flex;
  position: absolute;
  margin: 0;
  top: 50%;
  left: 50%;
  right: 0;
  bottom: 0;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 88%;
}
p.light {
  color: #727272;
}
h1 {
  font-family: 'Raleway';
  font-size: 54px;
  letter-spacing: 10px;
  font-weight: 200;
  line-height: 60px;
  text-transform: uppercase;
}
h2 {
  font-family: 'Montserrat';
  font-size: 24px;
  letter-spacing: 6px;
  font-weight: 200;
  line-height: 30px;
  text-transform: uppercase;
  margin-bottom: 15px;
}
.spacer {
  height: 400px;
}
.menu-container {
  display: flex;
  position: fixed;
  margin: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0;
  background-color: rgba(0,0,0,0.7);
  transition: 0.2s ease;
}
.menu-container.displayed {
  z-index: 200;
  opacity: 1;
  transition: 0.35s ease, opacity 0.5s ease;
}
.menu-container.displayed .menu-tab {
  top: 50%;
}
.menu-container .close {
  color: #fff;
  margin: 30px;
  cursor: pointer;
}
.side-nav {
  display: flex;
  position: fixed;
  margin: none;
  top: 1px;
  left: 0;
  right: none;
  bottom:0 ;
  z-index: 100;
  height: 80px;
  width: 80px;
  opacity: 0;
  overflow: hidden;
  transition: 0.35s ease, height 0s 0.35s ease, width 0.35s ease;
}
.side-nav.nav-open {
  height: 400px;
  width: 300px;
  opacity: 1;
  background-color: #f4f4f9;
  box-shadow: 2px 4px 26px 2px rgba(0,0,0,0.35);
  transition: 0.35s ease, height 0.4s 0.35s cubic-bezier(0.85, 0, 0.15, 1), width 0.4s 0.75s cubic-bezier(0.85, 0, 0.15, 1);
}
.nav-header {
  top: -20%;
  left: 48.5%;
  transition: 0.35s ease, top 0s 0.2s ease;
}
.nav-header.nav-open {
  top: 11%;
  transition: 0.35s ease, top 0.4s 1s cubic-bezier(0.85, 0, 0.15, 1);
}
.nav-options {
  width: 100%;
  height: auto;
  top: calc(50% + 5px);
}
.nav-options li {
  width: 70%;
  padding: 12px 0px;
  cursor: pointer;
  left: -120%;
}
.nav-options li:hover {
  color: #f67f74;
}
.nav-options.nav-open li {
  left: -2%;
}
.nav-options.nav-open li:nth-child(1) {
  transition: 0.35s ease, left 0.35s 0.9s cubic-bezier(0, 0, 0.15, 1.3);
}
.nav-options.nav-open li:nth-child(2) {
  transition: 0.35s ease, left 0.35s 0.95s cubic-bezier(0, 0, 0.15, 1.3);
}
.nav-options.nav-open li:nth-child(3) {
  transition: 0.35s ease, left 0.35s 1s cubic-bezier(0, 0, 0.15, 1.3);
}
.nav-options.nav-open li:nth-child(4) {
  transition: 0.35s ease, left 0.35s 1.05s cubic-bezier(0, 0, 0.15, 1.3);
}
.nav-options.nav-open li:nth-child(5) {
  transition: 0.35s ease, left 0.35s 1.1s cubic-bezier(0, 0, 0.15, 1.3);
}
.nav-options.nav-open li:nth-child(6) {
  transition: 0.35s ease, left 0.35s 1.15s cubic-bezier(0, 0, 0.15, 1.3);
}
.nav-options.nav-open li:nth-child(7) {
  transition: 0.35s ease, left 0.35s 1.2s cubic-bezier(0, 0, 0.15, 1.3);
}
.nav-options.nav-open li:nth-child(8) {
  transition: 0.35s ease, left 0.35s 1.25s cubic-bezier(0, 0, 0.15, 1.3);
}
.nav-options.nav-open li:nth-child(9) {
  transition: 0.35s ease, left 0.35s 1.3s cubic-bezier(0, 0, 0.15, 1.3);
}
.nav-options.nav-open li:nth-child(10) {
  transition: 0.35s ease, left 0.35s 1.35s cubic-bezier(0, 0, 0.15, 1.3);
}
.top-section {
  height: 640px;
  color: #e0e5f5;
  background-color: #272727;
  overflow: hidden;
}
.header-container {
  height: 400px;
  width: 400px;
  border: 4px solid;
  top: 47%;
  border-radius: 100%;
}
.header-container:before {
  content: "";
  display: flex;
  position: absolute;
  margin: none;
  top: -12px;
  left: -12px;
  right: -12px;
  bottom: -12px;
  border: 2px solid #e0e5f5;
  border-radius: 100%;
}
.food-header {
  background-color: #272727;
  font-family: 'Mr Dafoe';
  font-size: 90px;
  letter-spacing: 0px;
  font-weight: 400;
  line-height: 106px;
  width: 480px;
  text-transform: none;
  top: 60%;
  left: 52%;
  transform: translate(-50%, -50%) rotate(-8deg);
}
.food-header:first-letter {
  letter-spacing: -6px;
}
.food-header:before,
.food-header:after {
  content: "";
  display: flex;
  position: absolute;
  margin: none;
  top: none;
  left: 0;
  right: 0;
  bottom:0 ;
  height: 4px;
  background-color: #e0e5f5;
  left: 0;
}
.food-header:before {
  top: 8px;
}
.food-header:after {
  bottom: 8px;
}
.eye {
  top: 18%;
  height: 12px;
  width: 12px;
  background-color: #e0e5f5;
  border-radius: 100%;
}
.eye.left {
  left: 35%;
}
.eye.right {
  left: 65%;
}
.mouth {
  width: 140px;
  height: 72px;
  top: 31%;
  border-radius: 10px 10px 700px 700px;
  border: 3px solid #e0e5f5;
}
.extra-lines {
  display: flex;
  position: absolute;
  margin: 0;
  top: 46%;
  left: 14%;
  right: 0;
  bottom: 0;
  transform: rotate(-8deg);
  width: 280px;
  border-bottom: 2px solid;
}
.extra-lines.bottom {
  top: 74%;
  left: 18%;
  transform: rotate(-188deg);
}
.nav-button,
.search-button {
  z-index: 100;
  display: flex;
  position: fixed;
  margin: none;
  top: 25px;
  left: 0;
  right: 0;
  bottom: 0;
  height: 30px;
  width: 30px;
  cursor: pointer;
}
.nav-button {
  left: 25px;
}
.nav-button:hover .nav-bars {
  background-color: #fff;
}
.nav-button:hover .nav-bars:before,
.nav-button:hover .nav-bars:after {
  background-color: #fff;
}
.nav-button.nav-open {
  left: 245px;
  transition: 0.35s ease, left 0.4s 0.75s cubic-bezier(0.85, 0, 0.15, 1);
}
.nav-button.nav-open .nav-bars,
.nav-button.black .nav-bars {
  background-color: #272727;
}
.nav-button.nav-open .nav-bars:before,
.nav-button.black .nav-bars:before,
.nav-button.nav-open .nav-bars:after,
.nav-button.black .nav-bars:after {
  background-color: #272727;
}
.search-button {
  right: 25px;
}
.search-button:hover .magnefying-glass:before {
  border-color: #fff;
}
.search-button:hover .magnefying-glass:after {
  background-color: #fff;
}
.search-button.black .magnefying-glass:before {
  border-color: #272727;
}
.search-button.black .magnefying-glass:after {
  background-color: #272727;
}
.nav-bars {
  width: 19px;
  height: 2px;
  background-color: #bbb;
  left: 40%;
}
.nav-bars:before,
.nav-bars:after {
  content: "";
  display: flex;
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 130%;
  height: 100%;
  background-color: #bbb;
  transition: 0.35s ease;
}
.nav-bars:before {
  top: -7px;
}
.nav-bars:after {
  top: 7px;
  width: 70%;
}
.magnefying-glass {
  height: 30px;
  width: 30px;
}
.magnefying-glass:before {
  content: "";
  display: flex;
  position: absolute;
  margin: 0;
  top: 3px;
  left: 0;
  right: 3px;
  bottom: 0 ;
  height: 15px;
  width: 15px;
  border: 2px solid #bbb;
  border-radius: 100%;
  transition: 0.35s ease;
}
.magnefying-glass:after {
  content: "";
  display: flex;
  position: absolute;
  margin: 0;
  top: 20px;
  left: 3px;
  right: 0;
  bottom: 0;
  height: 2px;
  width: 9px;
  background-color: #bbb;
  transform: rotate(-42deg);
  transition: 0.35s ease;
}
.tab {
  z-index: 10;
  height: 180px;
  width: 65%;
  max-width: 1000px;
  margin: -90px auto;
  padding: 15px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0px 3px 10px -1px rgba(0,0,0,0.5);
  text-align: center;
}
.tab.menu-tab {
  min-height: 500px;
  top: 65%;
  height: auto;
  margin: auto;
  max-width: 800px;
  z-index: 300;
}
.words-section {
  height: 480px;
  overflow: hidden;
}
.words-section .content-container {
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: space-around;
  margin: 0;
  top: 50%;
  left: 450px;
  right: 80px;
  bottom: 0;
  transform: translateY(-50%);
  max-width: 900px;
}
.words-section.tea {
  display: flex;

  /* background: url("https://lh3.googleusercontent.com/hMaBVHlLGfSmqUpkaJ3kVBuYj1QIm7-eV_hQzB15SYhXxxw291ZYzU_-5fgZamTGnP2mV7qDcmSAxOGd8X-FMNBGuhTfkTNI9Ejvwfy5=s192") left no-repeat; */
  background-color: transparent;
  margin: auto;
  
}
.words-section.leaves {
  background: url("https://img0.etsystatic.com/010/0/5254040/il_570xN.440476162_heqm.jpg") left no-repeat;
  background-size: 450px;
  background-color: #fafcf9;
  display: none;
}
.words-section.right {
  background-position: right;
}
.words-section > .images img{
  width: 100%;
  height: 33.33%;
}

.words-section > .images img:nth-child(1){
  width: 100%;
  height: 33.33%;
  opacity: 0;
}
.words-section > .images img:nth-child(2){
  width: 100%;
  height: 33.33%;
  transform: translate3d(5em,0,0);
}
.words-section > .images img:nth-child(3){
  width: 100%;
  height: 33.33%;
  opacity: 0;
}
.words-section > .images {
  /* background:red;  */
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
}
.words-section.right .content-container {
  display: flex;
  position: absolute;
  margin: 0;
  top: 50%;
  left: auto;
  right: 450px;
  bottom: 0;
  text-align: right;
  width: calc(100% - 530px);
}
.large-section {
  min-height: 600px;
  padding: 80px 40px 40px;
  background-color: #ffdfd4;
  text-align: center;
  font-family: 'Open Sans';
  font-size: 16px;
  letter-spacing: 0px;
  font-weight: 400;
  line-height: 26px;
}
.large-section h1 {
  margin-bottom: 40px;
}
.option-square {
  min-height: 360px;
  width: 280px;
  margin: 20px 2px;
  padding: 10px 15px;
  vertical-align: text-top;
  border: 1px solid #000;
}
.option-image {
  height: 180px;
  width: 180px;
  margin: 10px auto 20px;
  background-color: rgba(0,0,0,0.4);
}
.heart {
  width:67vw;
  margin:0.5em auto 0 1.1em;
  opacity:0.12;
  position:relative;
}


@media screen and (max-width: 654px){
  .heart {
    width:100vw;
    height: 140px;
    margin: 0;
    opacity:0.99;

  }
}
`;

const SubSubSectionv2 = () => {
    return (
        <StyledSubSubSectionv2>
            {/* <!-- FONTS --> */}
            <Head>
{/* <link href='https://fonts.googleapis.com/css?family=Raleway:200,300,400' rel='stylesheet' type='text/css' />
<link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,600' rel='stylesheet' type='text/css' /> */}
<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css' />
{/* <link href='https://fonts.googleapis.com/css?family=Mr+Dafoe' rel='stylesheet' type='text/css' /> */}

    </Head>

{/* <!-- PAGE STUFF --> */}
<div className="menu-container">
    <div className="close">close</div>
    <div className="abs-center tab menu-tab" style={{opacity:'0'}}>The Menu stuff will go here</div>
</div>

<div className="side-nav">
    <h2 className="abs-center nav-header">Nav</h2>
    <ul className="abs-center nav-options">
        <li className="rela-block nav-link the-menu">The Menu</li>
        <li className="rela-block nav-link">About Us</li>
        <li className="rela-block nav-link">Stories</li>
        <li className="rela-block nav-link">Locations</li>
        <li className="rela-block nav-link">Contact Us</li>
    </ul>
</div>

<div style={{height:'75vh',width:'100%',maxWidth:'100vw',overflowX:'hidden'}}></div>
{/* 
<div className="rela-block tab" style={{transform:'translate3d(0,-3em,0)',height:"45vh",backgroundColor:'transparent',border:'none',boxShadow:'none'}}> 
    <Slider />
</div> */}

<div className="rela-block words-section tea">
  <div className="images">
    <img src="https://placehold.it/200x200.jpg" alt=""/>
    {/* <img style={{borderRadius:'50%',maxWidth:'180px'}} src="https://scontent.ford4-1.fna.fbcdn.net/v/t1.0-9/132046027_107771104544642_6249432347020636718_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=GWa-wmNkZXgAX9bTVCf&_nc_oc=AQlgdTH_zYffXBLBy_1dzOSHRqr-CMcaKvQN2IiqrBeXjeFMM5aGLrl9mJEHgoetIfE&_nc_ht=scontent.ford4-1.fna&oh=33b900b318488804519ce508ad359b44&oe=6025157B" alt=""/> */}
    {/* <img src="https://placehold.it/200x200.jpg" alt=""/> */}
    
    </div>
    <img className="heart" src="https://dl3.pushbulletusercontent.com/l3XgbAlDYIuVoWbEOKOKpcCq8AdDuykb/Xnip2021-01-12_15-28-21.jpg" alt=""/>
    <div className="content-container" style={{width: '100vw',position:'relative',left:'-15em'}} >
        <h2 style={{background:'black',color:'white',maxWidth:'67vw',padding: '5px 7px 5px 7px'}}>About Lumi Candles</h2>
        <p className="light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. ro sequi?.</p>
    </div>
</div>
<div className="rela-block words-section leaves right">
    <div className="content-container">
    <div className="abs-center" style={{display:'flex'}}>
     
</div>
    </div>
</div>
<div className="rela-block large-section">
    <PLP />
</div>
<div className="rela-block spacer"></div>
        </StyledSubSubSectionv2>
    )
}

export default SubSubSectionv2
