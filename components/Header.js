import React from 'react'
import AstroCards from './AstroCards'
import FrontPageHero from './FrontPageHero'
import FrontPageHerov2 from './FrontPageHerov2'
import Head from 'next/head'

const Header = () => {
    return (
        <>
        <Head>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined|Material+Icons" rel="stylesheet" />
            </Head>
           <div className="body hero-anime">	
          

<div className="navigation-wrap bg-light start-header start-style" style={{width: '100%',maxWidth:'100vw'}}>
            <div id="topbar" style={{position:'absolute',top:'0',width:'100vw',height:'30px',backgroundColor:'papayawhip',textAlign:'center'}}><h6 style={{padding:'0.32em 0 0 0'}}>70% off Candy Cane Candles. See the Deal >></h6></div>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="navbar navbar-expand-md navbar-light">
                
                    <a className="navbar" href="" target="_blank">
                        <img style={{width:'80px',borderRadius:'50%',filter:'drop-shadow(2px 3px 2px rgba(0,0,0,0.25))'}} src="https://scontent.ford4-1.fna.fbcdn.net/v/t1.0-9/132046027_107771104544642_6249432347020636718_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=Qj32Tb0c0SEAX_ALX0f&_nc_oc=AQnK1yS67icH2XmJa88r9wm-9nViJ79eoyRSfyoAo7c3wWnr7JUF3ivWY-lxTgiIB8w&_nc_ht=scontent.ford4-1.fna&oh=d30f0b53b9a87371f0cc56f01525c650&oe=601D2C7B" alt=""/>
                        </a>	
                    
                    <button style={{display:'none'}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto py-4 py-md-0">
                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Home</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                </div>
                            </li>
                           
                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        
                              <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                  <a style={{transform:'translate3d(0,-0.5em,0)'}} href="#" className="link-button"><i  style={{padding: '5px 7px 5px 7px'}} className="material-icons-outlined" >shopping_cart</i></a>
                              </li>
                        </ul>
                    </div>
                    
                </nav>		
            </div>
        </div>
    </div>
</div>

{/* 
<!-- Link to page
================================================== --> */}



</div> 
<style jsx>{`
    .body{
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        color: #212112;
        background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat-back.svg');
        background-position: center;
        background-repeat: repeat;
        background-size: 7%;
        background-color: #fff;
        overflow-x: hidden;
        transition: all 200ms linear;

        width: 100%;
    }
    ::selection {
        color: #fff;
        background-color: #8167a9;
    }
    ::-moz-selection {
        color: #fff;
        background-color: #8167a9;
    }
    
    
    /* #Navigation
    ================================================== */
    
    .start-header {
        opacity: 1;
        transform: translateY(0);
        padding: 20px 0;
        box-shadow: 0 10px 30px 0 rgba(138, 155, 165, 0.15);
        -webkit-transition : all 0.3s ease-out;
        transition : all 0.3s ease-out;
    }
    .start-header.scroll-on {
        box-shadow: 0 5px 10px 0 rgba(138, 155, 165, 0.15);
        padding: 10px 0;
        -webkit-transition : all 0.3s ease-out;
        transition : all 0.3s ease-out;
    }
    .start-header.scroll-on .navbar-brand img{
        height: 24px;
        -webkit-transition : all 0.3s ease-out;
        transition : all 0.3s ease-out;
    }
    .navigation-wrap{
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 1000;
        -webkit-transition : all 0.3s ease-out;
        transition : all 0.3s ease-out;
    }
    .navbar{
        padding: 0;
    }
    .navbar-brand img{
        height: 28px;
        width: auto;
        display: block;
      filter: brightness(10%);
        -webkit-transition : all 0.3s ease-out;
        transition : all 0.3s ease-out;
    }
    .navbar-toggler {
        float: right;
        border: none;
        padding-right: 0;
    }
    .navbar-toggler:active,
    .navbar-toggler:focus {
        outline: none;
    }
    .navbar-light .navbar-toggler-icon {
        width: 24px;
        height: 17px;
        background-image: none;
        position: relative;
        border-bottom: 1px solid #000;
        transition: all 300ms linear;
    }
    .navbar-light .navbar-toggler-icon:after, 
    .navbar-light .navbar-toggler-icon:before{
        width: 24px;
        position: absolute;
        height: 1px;
        background-color: #000;
        top: 0;
        left: 0;
        content: '';
        z-index: 2;
        transition: all 300ms linear;
    }
    .navbar-light .navbar-toggler-icon:after{
        top: 8px;
    }
    .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:after {
        transform: rotate(45deg);
    }
    .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:before {
        transform: translateY(8px) rotate(-45deg);
    }
    .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon {
        border-color: transparent;
    }
    .nav-link{
        color: #212121 !important;
        font-weight: 500;
        transition: all 200ms linear;
    }
    .nav-item:hover .nav-link{
        color: #8167a9 !important;
    }
    .nav-item.active .nav-link{
        color: #777 !important;
    }
    .nav-link {
        position: relative;
        padding: 5px 0 !important;
        display: inline-block;
    }
    .nav-item:after{
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        content: '';
        background-color: #8167a9;
        opacity: 0;
        transition: all 200ms linear;
    }
    .nav-item:hover:after{
        bottom: 0;
        opacity: 1;
    }
    .nav-item.active:hover:after{
        opacity: 0;
    }
    .nav-item{
        position: relative;
        transition: all 200ms linear;
    }
    
    /* #Primary style
    ================================================== */
    
    .bg-light {
        background-color: #fff !important;
        transition: all 200ms linear;
    }
    .section {
        position: relative;
        width: 100%;
        display: block;
    }
    .full-height {
        height: 100vh;
    }
    .over-hide {
        overflow: hidden;
    }
    .absolute-center {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
      margin-top: 40px;
        transform: translateY(-50%);
        z-index: 20;
    }
    h1{
        font-size: 48px;
        line-height: 1.2;
        font-weight: 700;
        color: #212112;
        text-align: center;
    }
    p{
        text-align: center;
        margin: 0;
        padding-top: 10px;
        opacity: 1;
        transform: translate(0);
        transition: all 300ms linear;
        transition-delay: 1700ms;
    }
    .body.hero-anime p{
        opacity: 0;
        transform: translateY(40px);
        transition-delay: 1700ms;
    }
    h1 span{
        display: inline-block;
        transition: all 300ms linear;
        opacity: 1;
        transform: translate(0);
    }
    .body.hero-anime h1 span:nth-child(1){
        opacity: 0;
        transform: translateY(-20px);
    }
    .body.hero-anime h1 span:nth-child(2){
        opacity: 0;
        transform: translateY(-30px);
    }
    .body.hero-anime h1 span:nth-child(3){
        opacity: 0;
        transform: translateY(-50px);
    }
    .body.hero-anime h1 span:nth-child(4){
        opacity: 0;
        transform: translateY(-10px);
    }
    .body.hero-anime h1 span:nth-child(5){
        opacity: 0;
        transform: translateY(-50px);
    }
    .body.hero-anime h1 span:nth-child(6){
        opacity: 0;
        transform: translateY(-20px);
    }
    .body.hero-anime h1 span:nth-child(7){
        opacity: 0;
        transform: translateY(-40px);
    }
    .body.hero-anime h1 span:nth-child(8){
        opacity: 0;
        transform: translateY(-10px);
    }
    .body.hero-anime h1 span:nth-child(9){
        opacity: 0;
        transform: translateY(-30px);
    }
    .body.hero-anime h1 span:nth-child(10){
        opacity: 0;
        transform: translateY(-20px);
    }
    h1 span:nth-child(1){
        transition-delay: 1000ms;
    }
    h1 span:nth-child(2){
        transition-delay: 700ms;
    }
    h1 span:nth-child(3){
        transition-delay: 900ms;
    }
    h1 span:nth-child(4){
        transition-delay: 800ms;
    }
    h1 span:nth-child(5){
        transition-delay: 1000ms;
    }
    h1 span:nth-child(6){
        transition-delay: 700ms;
    }
    h1 span:nth-child(7){
        transition-delay: 900ms;
    }
    h1 span:nth-child(8){
        transition-delay: 800ms;
    }
    h1 span:nth-child(9){
        transition-delay: 600ms;
    }
    h1 span:nth-child(10){
        transition-delay: 700ms;
    }
    .body.hero-anime h1 span:nth-child(11){
        opacity: 0;
        transform: translateY(30px);
    }
    .body.hero-anime h1 span:nth-child(12){
        opacity: 0;
        transform: translateY(50px);
    }
    .body.hero-anime h1 span:nth-child(13){
        opacity: 0;
        transform: translateY(20px);
    }
    .body.hero-anime h1 span:nth-child(14){
        opacity: 0;
        transform: translateY(30px);
    }
    .body.hero-anime h1 span:nth-child(15){
        opacity: 0;
        transform: translateY(50px);
    }
    h1 span:nth-child(11){
        transition-delay: 1300ms;
    }
    h1 span:nth-child(12){
        transition-delay: 1500ms;
    }
    h1 span:nth-child(13){
        transition-delay: 1400ms;
    }
    h1 span:nth-child(14){
        transition-delay: 1200ms;
    }
    h1 span:nth-child(15){
        transition-delay: 1450ms;
    }
    #switch,
    #circle {
        cursor: pointer;
        -webkit-transition: all 300ms linear;
        transition: all 300ms linear; 
    } 
    #switch {
        width: 60px;
        height: 8px;
        border: 2px solid #8167a9;
        border-radius: 27px;
        background: #000;
        position: relative;
        display: block;
        margin: 0 auto;
        text-align: center;
        opacity: 1;
        transform: translate(0);
        transition: all 300ms linear;
        transition-delay: 1900ms;
    }
    .body.hero-anime #switch{
        opacity: 0;
        transform: translateY(40px);
        transition-delay: 1900ms;
    }
    #circle {
        position: absolute;
        top: -11px;
        left: -13px;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background: #000;
    }
    .switched {
        border-color: #000 !important;
        background: #8167a9 !important;
    }
    .switched #circle {
        left: 43px;
        box-shadow: 0 4px 4px rgba(26,53,71,0.25), 0 0 0 1px rgba(26,53,71,0.07);
        background: #fff;
    }
    .nav-item .dropdown-menu {
        transform: translate3d(0, 10px, 0);
        visibility: hidden;
        opacity: 0;
        max-height: 0;
        display: block;
        padding: 0;
        margin: 0;
        transition: all 200ms linear;
    }
    .nav-item.show .dropdown-menu {
        opacity: 1;
        visibility: visible;
        max-height: 999px;
        transform: translate3d(0, 0px, 0);
    }
    .dropdown-menu {
        padding: 10px!important;
        margin: 0;
        font-size: 13px;
        letter-spacing: 1px;
        color: #212121;
        background-color: #fcfaff;
        border: none;
        border-radius: 3px;
        box-shadow: 0 5px 10px 0 rgba(138, 155, 165, 0.15);
        transition: all 200ms linear;
    }
    .dropdown-toggle::after {
        display: none;
    }
    
    .dropdown-item {
        padding: 3px 15px;
        color: #212121;
        border-radius: 2px;
        transition: all 200ms linear;
    }
    .dropdown-item:hover, 
    .dropdown-item:focus {
        color: #fff;
        background-color: rgba(129,103,169,.6);
    }
    
    .body.dark{
        color: #fff;
        background-color: #1f2029;
    }
    .body.dark .navbar-brand img{
      filter: brightness(100%);
    }
    body.dark h1{
        color: #fff;
    }
    .body.dark h1 span{
        transition-delay: 0ms !important;
    }
    .body.dark p{
        color: #fff;
        transition-delay: 0ms !important;
    }
    .body.dark .bg-light {
        background-color: #14151a !important;
    }
    .body.dark .start-header {
        box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.15);
    }
    .body.dark .start-header.scroll-on {
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
    }
    .body.dark .nav-link{
        color: #fff !important;
    }
    .body.dark .nav-item.active .nav-link{
        color: #999 !important;
    }
    .body.dark .dropdown-menu {
        color: #fff;
        background-color: #1f2029;
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
    }
    .body.dark .dropdown-item {
        color: #fff;
    }
    .body.dark .navbar-light .navbar-toggler-icon {
        border-bottom: 1px solid #fff;
    }
    .body.dark .navbar-light .navbar-toggler-icon:after, 
    .body.dark .navbar-light .navbar-toggler-icon:before{
        background-color: #fff;
    }
    .body.dark .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon {
        border-color: transparent;
    }
    
    
    
    /* #Media
    ================================================== */
    
    @media (max-width: 767px) { 
        h1{
            font-size: 38px;
        }
        .nav-item:after{
            display: none;
        }
        .nav-item::before {
            position: absolute;
            display: block;
            top: 15px;
            left: 0;
            width: 11px;
            height: 1px;
            content: "";
            border: none;
            background-color: #000;
            vertical-align: 0;
        }
        .dropdown-toggle::after {
            position: absolute;
            display: block;
            top: 10px;
            left: -23px;
            width: 1px;
            height: 11px;
            content: "";
            border: none;
            background-color: #000;
            vertical-align: 0;
            transition: all 200ms linear;
        }
        .dropdown-toggle[aria-expanded="true"]::after{
            transform: rotate(90deg);
            opacity: 0;
        }
        .dropdown-menu {
            padding: 0 !important;
            background-color: transparent;
            box-shadow: none;
            transition: all 200ms linear;
        }
        .dropdown-toggle[aria-expanded="true"] + .dropdown-menu {
            margin-top: 10px !important;
            margin-bottom: 20px !important;
        }
        .body.dark .nav-item::before {
            background-color: #fff;
        }
        .body.dark .dropdown-toggle::after {
            background-color: #fff;
        }
        .body.dark .dropdown-menu {
            background-color: transparent;
            box-shadow: none;
        }
    }
    
    /* #Link to page
    ================================================== */
    
    .logo {
        position: absolute;
        bottom: 30px;
        right: 30px;
        display: block;
        z-index: 100;
        transition: all 250ms linear;
    }
    .logo img {
        height: 26px;
        width: auto;
        display: block;
      filter: brightness(10%);
        transition: all 250ms linear;
    }
    .body.dark .logo img {
      filter: brightness(100%);
    }
`}</style>
        </>
    )
}

export default Header
