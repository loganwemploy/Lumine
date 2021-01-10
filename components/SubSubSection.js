import React from 'react'
import styled from 'styled-components';
const StyledSubSubSection = styled.div`
  
  box-sizing:border-box;
  text-decoration:none;

ul,ol {
  margin:0;
  padding:0;
}
p {
  padding:0 0 10px 0;
  display:block;
}
body {
  font-family: 'Noto Serif JP', sans-serif; 
  font-size:16px;
  color:#565656;
  background:#F2F2F2;
  line-height:25px;
}
h1,h2,h3,h4,h5,h6 {
  font-family: 'Martel', serif;
  font-weight:400;
}

h1 {
  font-size:40px;
  line-height:43px;
}
h2 {
  font-size:30px;
  line-height:35px;
}

/* Estructures */
#header {
  display:flex;
  flex-direction: column;
  justify-content:center;
  height:400px;
  background-image:url('https://loremflickr.com/1200/600/cuisine');
  background-position:center center;
  background-repeat:no-repeat;
  background-size:cover;
  background-color: #444;
  margin-bottom:40px;
}
#footer {
  font-size:15px;
  background:rgb(80,80,80);
  color:rgb(200,200,200);
  padding:14px 10px;
  text-align:left;
}
#footer a {
  color:rgb(255,255,255);
}


/* Contents */
.clear-fix {
  clear:both;
  height:1px;
  width:10px;
}
.logo {
  width:70%;
  font-weight:900;  
  margin:10px auto 20px auto;
  text-align:center;
  font-family: 'Satisfy', cursive;
  font-size:5rem;
  line-height:78px;
  text-shadow:0 0 18px rgba(0,0,0,0.7);
}

/* Main Menu */
.main_menu ul {
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  align-items:center;
  list-style-type:none;
  padding:0px;
  margin-top:20px;
}
.main_menu ul li a {
  font-family: 'Noto Serif JP', sans-serif;  
  font-size:16px;
  padding:10px 18px;
  color:#DDD;
  border-right:1px dotted #DDD;
  display:inline-block;
  cursor:pointer;
  text-transform:capitalize;
  background-color:#333;
}
.main_menu ul li a.active {
  color:#222;
  background-color:#FFF;
}
.main_menu ul li a:hover {
  color:#222;
  background-color:#FFF;
}
.main_menu ul li a:first-child {
  border-left:1px dotted #DDD;
}


/* Colors */
.text-white {
  color:#FFF;
}
.text-gold {
  color:#D0AF6A;
}
.bg-white {
  background-color:#FFF;
}

/* Buttons */
.btn {
	font-size: 16px;
	text-transform: uppercase;
	font-weight: 400;
	padding: 10px 26px;
	letter-spacing: 0px;
  text-align:center;
	border-radius: 0px;
	line-height: 2;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	transition: all 0.3s;
	word-wrap: break-word;
	white-space: normal;
  display:inline;
}
.btn-default {
	background-color: transparent;
	color: #333;
	border: 2px solid #454545;
}
.btn-default:hover {
	background-color: #333;
	color: #D0AF6A;
	border: 2px solid #333;
}
.btn-inverse {
	background-color: transparent;
	color: #FEFEFE;
	border: 2px solid #FEFEFE;
}
.btn-inverse:hover {
	background-color: #FEFEFE;
	color: #333;
	border: 2px solid #FEFEFE;
}
.btn-gold {
	background-color: transparent;
	color:#D0AF6A;
	border: 2px solid #FEFEFE;
}
.btn-gold:hover {
	background-color: #FEFEFE;
	color: rgb(150,100,40);
	border: 2px solid #FEFEFE;
}
.btn-block {
  display:inline-block;
  width:100%;
}

/* Formularios */
.error {
	border: 1px solid #CC0000 !important;
}
.ok {
	border: 1px solid #119900 !important;
}
.form-group {
	margin-bottom: 5px;
}
select.form-control:not([size]):not([multiple]) {
	height: 56px;
	color: #50595e;
}
.form-control {
	border-radius: 0px;
	font-size: 14px;
	font-weight: 500;
	width: 100%;
	height: 56px;
	padding: 14px 18px;
	line-height: 1.42857143;
	border: 1px solid #d2d8db;
	background-color: #fff;
	letter-spacing: 0px;
	margin-bottom: 14px;
	-webkit-box-shadow: inset 0 0px 0px rgba(0, 0, 0, 1);
	box-shadow: inset 0 0px 0px rgba(0, 0, 0, 1);
	-webkit-appearance: none;
}
.form-control:focus {
	color: #06131a !important;
	outline: 0;
	box-shadow: 0 0 0 0.1rem rgb(234, 231, 222);
	border-color: #06131a;
}


/* Decorations */
#hero {
  padding:90px 40px;
  margin-bottom:40px;
  background-color:#333;
  color:#D0AF6A;
  clear:both;
  overflow:hidden;
  height:auto;
}
#services {
  overflow:hidden;
  clear:both;
  margin-top:0;
  margin-bottom:30px;
}
.service {
  text-align:center;
  height:auto;
  padding-bottom:30px;
}
.service h1,.service h2 {
  margin-bottom:20px;
}
.hl1line {
  width:20%;
  border-top: 2px solid rgba(47, 46, 46, 1);
  border-bottom: 2px solid rgba(47, 46, 46, 1);
  padding: 7px 0 0 0;
  margin:0px auto 10px auto;
}
.section-title {
  display:inline-block;
  width:100%;
  overflow:hidden;
  padding:0 10%;
  font-weight:700;
  margin-bottom: 10px;
  margin-left:auto;
  margin-right:auto;
  text-align:center;
  position:relative;
  text-shadow:2px 2px 0px #FFF, 3px 3px 0px #707070;
}
.section-title::after, .section-title::before {
  content:"";
  position:absolute;
  top:30%;
  width:20%;
  border-top: 2px solid rgba(80, 90, 90, 1);
  border-bottom: 2px solid rgba(80, 90, 90, 1);
  padding: 7px 0 0 0;
  transform:scale(1);
  transition: transform 0.3s ease-in-out;
}
.section-title:hover::after, .section-title:hover::before {
  transform:scale(0);
}
.section-title::after {
  right:-10%;
}
.section-title::before {
  left:-10%;
}


/* Galleries */
.gallery {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 150px;
  grid-auto-flow: row dense;
  margin-top:20px;
}

.item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  background: #0c9a9a;
  color: #fff;
  grid-column-start: auto;
  grid-row-start: auto;
  color: #fff;
  background: url("https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=");
  background-size: cover;
  background-position: center;
  box-shadow: -2px 2px 10px 0px rgba(68, 68, 68, 0.4);
  transition: -webkit-transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
  cursor: pointer;
  counter-increment: item-counter;
}
.item:nth-of-type(3n) {
  background-image: url("https://images.unsplash.com/photo-1422255198496-21531f12a6e8?dpr=2&auto=format&fit=crop&w=1500&h=996&q=80&cs=tinysrgb&crop=");
}
.item:nth-of-type(4n) {
  background-image: url("https://images.unsplash.com/photo-1490914327627-9fe8d52f4d90?dpr=2&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop=");
}
.item:nth-of-type(5n) {
  background-image: url("https://images.unsplash.com/photo-1476097297040-79e9e1603142?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=");
}
.item:nth-of-type(6n) {
  background-image: url("https://images.unsplash.com/photo-1464652149449-f3b8538144aa?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=");
}
.item:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.3;
  transition: opacity 0.3s ease-in-out;
}
.item:hover {
  -webkit-transform: scale(1.4);
          transform: scale(1.4);
  z-index:999;
}
.item:hover:after {
  opacity: 0;
}

.item--medium {
  grid-row-end: span 2;
}
.item--large {
  grid-row-end: span 3;
}
.item--full {
  grid-column-end: auto;
}


/* Social Links */
ul.social-links {
  display: inline;
  float:right;
}
ul.social-links li {
  display:inline;
}
#footer ul.social-links li a {
  display:inline-block;
  background-color:#FFF;
  color:#444;
  font-size:22px;
  text-align:center;
  line-height:32px;
  width:32px;
  height:32px;
  margin-left:4px;
}


/*
  Simple Grid
  Project Page - http://thisisdallas.github.com/Simple-Grid/
*/
[class*='grid'],
[class*='col-'],
[class*='mobile-'],
.grid:after {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;	
}

[class*='col-'] {
	float: left;
  min-height: 1px;
	padding-right: 20px; /* column-space */
}

[class*='col-'] [class*='col-']:last-child {
	padding-right: 0;
}

.grid {
	width: 100%;
	max-width: 1140px;
	min-width: 368px;
	margin: 20px auto;
	overflow: visible;
  background-color:#FFF;
  border:20px solid #FFF;
}

.grid:after {
	content: "";
	display: table;
	clear: both;
}

.grid-pad {
  height: auto;
	padding-top: 20px;
	padding-left: 0;
	padding-right: 0;
}

.push-right {
	float: right;
}

/* Content Columns */
.col-1-1 {
	width: 100%;
}
.col-2-3, .col-8-12 {
	width: 66.66%;
}

.col-1-2, .col-6-12 {
	width: 50%;
}

.col-1-3, .col-4-12 {
	width: 33.33%;
}

.col-1-4, .col-3-12 {
	width: 25%;
}

.col-1-5 {
	width: 20%;
}

.col-1-6, .col-2-12 {
	width: 16.667%;
}

.col-1-7 {
	width: 14.28%;
}

.col-1-8 {
	width: 12.5%;
}

.col-1-9 {
	width: 11.1%;
}

.col-1-10 {
	width: 10%;
}

.col-1-11 {
	width: 9.09%;
}

.col-1-12 {
	width: 8.33%
}

/* Layout Columns */
.col-11-12 {
	width: 91.66%
}

.col-10-12 {
	width: 83.333%;
}

.col-9-12 {
	width: 75%;
}

.col-5-12 {
	width: 41.66%;
}

.col-7-12 {
	width: 58.33%
}

/* Pushing blocks */
.push-2-3, .push-8-12 {
	margin-left: 66.66%;
}

.push-1-2, .push-6-12 {
	margin-left: 50%;
}

.push-1-3, .push-4-12 {
	margin-left: 33.33%;
}

.push-1-4, .push-3-12 {
	margin-left: 25%;
}

.push-1-5 {
	margin-left: 20%;
}

.push-1-6, .push-2-12 {
	margin-left: 16.667%;
}

.push-1-7 {
	margin-left: 14.28%;
}

.push-1-8 {
	margin-left: 12.5%;
}

.push-1-9 {
	margin-left: 11.1%;
}

.push-1-10 {
	margin-left: 10%;
}

.push-1-11 {
	margin-left: 9.09%;
}

.push-1-12 {
	margin-left: 8.33%
}

@media handheld, only screen and (max-width: 767px) {
	.grid {
		width: 100%;
		min-width: 368px;
		margin-left: 0;
		margin-right: 0;
		padding-left: 20px; /* grid-space to left */
		padding-right: 10px; /* grid-space to right: (grid-space-left - column-space) e.g. 20px-10px=10px */
	}

	[class*='col-'] {
		width: auto;
		float: none;
		margin: 10px 0;
		padding-left: 0;
		padding-right: 10px; /* column-space */
	}

	[class*='col-'] [class*='col-'] {
		padding-right: 0;
	}

	/* Mobile Layout */
	[class*='mobile-col-'] {
		float: left;
		margin: 0 0 10px;
		padding-left: 0;
		padding-right: 10px; /* column-space */
		padding-bottom: 0;
	}

	.mobile-col-1-1 {
		width: 100%;
	}
	.mobile-col-2-3, .mobile-col-8-12 {
		width: 66.66%;
	}

	.mobile-col-1-2, .mobile-col-6-12 {
		width: 50%;
	}

	.mobile-col-1-3, .mobile-col-4-12 {
		width: 33.33%;
	}

	.mobile-col-1-4, .mobile-col-3-12 {
		width: 25%;
	}

	.mobile-col-1-5 {
		width: 20%;
	}

	.mobile-col-1-6, .mobile-col-2-12 {
		width: 16.667%;
	}

	.mobile-col-1-7 {
		width: 14.28%;
	}

	.mobile-col-1-8 {
		width: 12.5%;
	}

	.mobile-col-1-9 {
		width: 11.1%;
	}

	.mobile-col-1-10 {
		width: 10%;
	}

	.mobile-col-1-11 {
		width: 9.09%;
	}

	.mobile-col-1-12 {
		width: 8.33%
	}

	/* Layout Columns */

	.mobile-col-11-12 {
		width: 91.66%
	}

	.mobile-col-10-12 {
		width: 83.333%;
	}

	.mobile-col-9-12 {
		width: 75%;
	}

	.mobile-col-5-12 {
		width: 41.66%;
	}

	.mobile-col-7-12 {
		width: 58.33%
	}

	.hide-on-mobile {
		display: none !important;
		width: 0;
		height: 0;
	}
}
`;

const SubSubSection = () => {
    return (
        <StyledSubSubSection>
          <div className="grid">

  
<div className="grid-pad">
  <div className="col-1-1">
    <h1 className="section-title">About Us</h1>
  </div>
</div>

<div id="services" className="grid-pad">
  <div className="col-1-3 service">
    <h2>100% VEGETABLE WAX</h2>      
    <p>Soy and coconut based</p>
    <a href="#" className="btn btn-default">More info</a>
  </div>
  <div className="col-1-3 service">      
    <h2>Essential Oils</h2>      
    <p></p>
    <a href="#" className="btn btn-default">More info</a>
  </div>
  <div className="col-1-3 service">      
    <h2>Hand Poured</h2>      
    <p>Craftsmanship</p>
    <a href="#" className="btn btn-default">More info</a>
  </div>
</div>

<div id="hero" className="grid-pad">
  <div className="col-4-12">
    <h1 className="text-white">Spanish Tapas</h1>
    <a href="#" className="btn btn-gold btn-block">Click Here!</a>
  </div>
  <div className="col-8-12">
    <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. I'm a paragraph. Click here to add your own text and edit me.</p>
    <p>It's easy. I'm a paragraph. Click here to add your own text and edit me. It's easy. I'm a paragraph. Click here to add your own text and edit me. It's easy.</p>
  </div>
  
  <div className="col-1-1"></div>
</div>

<div className="grid-pad">
  <div className="col-1-1">
    <h1 className="section-title">Gallery Menú</h1>
  </div>
</div>

<div className="clear-fix"></div>

<div className="gallery">
  <div className="item"></div>
  <div className="item item--large"></div>
  <div className="item item--full"></div>
  <div className="item item--medium"></div>
  <div className="item item--large"></div>
  <div className="item item--full"></div>
  <div className="item"></div>
</div>

<div className="grid-pad">
  <div id="footer" className="col-1-1">
    <span>Todos los derechos reservados &copy; - 2018 | Creado con <a href="https://atriodesk.com">AtrioDesk</a></span>
    <ul className="social-links">
      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
      <li><a href="#"><i className="fa fa-google"></i></a></li>
      <li><a href="#"><i className="fa fa-youtube"></i></a></li>
    </ul>  
  </div>
</div>
</div>  
        </StyledSubSubSection>
    )
}

export default SubSubSection
