import  { useState } from 'react';
import Head from "next/head";
// import Hero from "../components/Hero";
import BreadCrumbs from "../components/BreadCrumbs";


import ProductDetailAltv2 from "../components/ProductDetailAltv2";
// import QuickLinks from "../components/QuickLinks";
// import ReviewsAltv2 from "../components/ReviewsAltv2";
// import SideMenu from "../components/SideMenu";
// import SubHero from "../components/SubHero";
// import ThankYou from "../components/ThankYou";

// import ReviewsAlt from "../components/ReviewsAlt";
// import ProductDetail from '../components/ProductDetail'
// import Reviews from "../components/Reviews";
// import ShoppingCartFullPage from "../components/ShoppingCartFullPage";
// import GridViewAlt from '../components/GridViewAlt'
// import ItemThumbnails from '../components/ItemThumbnails'
import Catalog from '../components/Catalog'
// import RecommendedProducts from '../components/RecommendedProducts'
// import OrderInfo from '../components/OrderInfo'
// import ShoppingCartAlt from '../components/ShoppingCartAlt'
import RecommendedProductAlt from '../components/RecommendedProductAlt'
// import ThankYou from "../components/ThankYou";
import thankYouForOrder from '../lib/combos/index.js'
import homeHeroSubHero from '../lib/combos/homeHeroSubHero'
import productDetailWithBreadCrumbs from '../lib/combos/productDetailWithBreadCrumbs'
import Gooey from '../components/Gooey';
import Countdown from '../components/Countdown';
import SubSubSectionv2 from '../components/SubSubSectionv2';
import OverlayModal from '../components/OverlayModal';
import PLP from '../components/PLP';
import Slider from '../components/Slider';
import SuggestProduct from '../components/SuggestProduct';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import SubHero from '../components/SubHero';
import QuickLinks from '../components/QuickLinks';
import Coupon from '../components/Coupon';
import BubbleCategories from '../components/BubbleCategories';
import GradientTry from '../components/GradientTry';
import MainBanner from '../components/MainBanner';
import CategoriesBanner from '../components/CategoriesBanner';
import OfferStyleOne from '../components/OfferStyleOne';
// import AstroCards from '../components/AstroCards';



// import Login from "../components/Login";
// import Alt from "../components/Alt";
// import AdCopy from "../components/AdCopy";
// import AstroCards from "../components/AstroCards";
export default function Home() {

 const [isProductPage, setIsProductPage] = useState(false)
 
  return (
    <div className="body">
    <Head>
      <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"/>
    </Head>
    <div style={{width:'100%',paddingTop:'14vh'}}>
{/* <OverlayModal /> */}
      {/* <Catalog /> */}
      {/* {productDetailWithBreadCrumbs} */}
      {/* <Gooey /> */}
      {/* <Hero />
      <SubHero /> */}
      {/* <GradientTry /> */}
      {/* <BubbleCategories /> */}
      
      {/*  */}
      {/* <div className="jumbotron" id="home" style={{marginTop:'20vh',color:'#222',height:'100%',minHeight:'44vh',backgroundImage:"url('https://www.toptal.com/designers/subtlepatterns/patterns/watercolor.png)')",backgroundPosition:'center',maxWidth:'100vw',overflow:'hidden', margin:'auto',padding:'0 0 12em 0'}}>
  <h1 style={{color:'#efefef',background: "linear-gradient(to right, #c62a2a 32%, #f3a899 68%)",padding:'5px 7px',maxWidth:'32vw'}}>Champagne Rose</h1>
  <p style={{width:'50vw',textAlign:'left',color:'#efefef',background: "linear-gradient(to right, #c62a2a 32%, #f3a899 68%)",padding:'5px 7px',width:'44vw'}}>Perfectly handcrafted soy wax candle with your Valentine in mind.</p>
  <div><h3 style={{background: "linear-gradient(to right, #c62a2a 32%, #f3a899 68%)",width: "14vw",padding:'5px 7px', color: 'gold',fontSize:'22px'}}>NEW</h3>
  
  </div>
  <img className="champrose" style={{width:'18vw',position:'absolute',transform:'translate3d(52vw,-12em,0)',borderRadius:'0.88em'}} src="https://dl3.pushbulletusercontent.com/vuhMsr91md9WjwAN7rXjt4bzr2I0iVGs/137578364_1538381899693720_2086790160106281551_n.jpg" alt=""/>
  <ul className="list-inline" style={{display:'flex'}}>
  <button className="btn btn-danger">See this candle</button>
  <div style={{width:'20px',}}></div>
  <button className="btn btn-danger">See all candles</button>
  </ul>
  
</div> */}

      {/* <SubSubSectionv2 /> */}
      {/* <div style={{width:"100%"}}></div>
      <div className="site-wrap" >
 

  <footer className="site-footer">
    
  </footer>
  
</div>

      <Footer /> */}
      <MainBanner />
      {/* <AstroCards /> */}
      <CategoriesBanner />
      <OfferStyleOne />
      {/* </div> */}
      {/* <SuggestProduct /> */}
   <Slider />
     {/* <Gooey /> */}
     {/* <Countdown /> */}
     {/* <div style={{display:'flex',flexDirection:'column',height:'auto', marginTop:'-150vh',width:'100%',maxWidth:'100vw',boxSizing:'border-box',}}>
     <div style={{position:'relative'}}>
       </div>
      

     </div> */}
      {/* <Catalog /> */}
      {/* <AdCopy /> */}
      {/* <Alt /> */}
  {/* {thankYouForOrder} */}
 {/* {isProductPage ? productDetailWithBreadCrumbs : homeHeroSubHero} */}
  
  {/* <Gooey /> */}
  {/* <button style={{position:'absolute',top:'150vh',left:'23vw',zIndex:'999999999'}} onClick={()=>{setIsProductPage(!isProductPage)}}>toggle pages</button> */}




 
{/* <div className="navz">
      <Hero />
</div>
<div className="bodyz">
<SubHero />
</div>
<div className="foot">
<ProductDetailAltv2 />
</div> */}
      {/* -unhighlight the component and its corresponding import located at top of page*/}
     
      {/* ### ProductDetail Component containing a mock up of the Product Detail Page. ### */}
      {/* <ProductDetail /> */}
      {/* <ProductDetailAltv2 /> */}

      {/* ### Catalog Component containing a mockup of the Catalog-
  Grid-(alternate versions) vs. List ### */}
      {/* <Catalog /> */}

      {/* ### GridViewAlt Component containing an alternate style of grid view products ###*/}
      {/* <GridViewAlt /> */}

  {/* <Login /> */}
      {/* ### RecommededProducts Component containing a mock up of the Recommended Product Cards. ### */}
      {/* <RecommendedProducts /> */}
      {/* <RecommendedProductAlt />    */}

      {/* ### ShoppingCartFullPage Component containing a mock up of the FullPage ShoppingCart WIP ###*/}
      {/* <ShoppingCartFullPage /> */}
      {/* <ShoppingCartAlt /> */}

      {/* ### ItemThumbnails Component containing a single row of img elements - selected thumbnail should be highlighted ### */}
      {/* <ItemThumbnails /> */}

      {/* ### OrderInfo Component containing a mock up WIP of the orders page. ### */}
      {/* <OrderInfo /> */}

      {/* ### Reviews Component containing a mock up WIP of the users comments of a product or form to leave reviews. ### */}
      {/* <Reviews /> */}
      {/* <ReviewsAlt /> */}
      {/* <ReviewsAltv2 /> */}

      {/* ### Quick Links Component containing a mock up 3 buttons for quick navigation. ### */}
      {/* <QuickLinks /> */}

      {/* ### ThankYou Component containing a thankyou message for the users confirmation that an action was successful. ### */}
      {/* <ThankYou /> */}
      <style jsx>{`
        .body {
          width:100%;
          margin:0;
          padding:0;
          box-sizing: border-box;
          max-width:100vw;
          position: absolute;
          top:0;

        }

        .champrose {
          transform: scale(1);
        }
        .champrose:hover {
          transform: scale(1.1);
        }


.site-header { background-color:#5a9abf;border-bottom:solid 5px #444; }
.site-header-left { float:left;width:40%;background-color:#444;color:#fff;padding:5%; }
.site-header-right { float:left;width:60%;color:#fff;padding:5%; }
.logo-mb { 
  font-family:'Average', 'Georgia';font-size:4em;font-weight:normal;margin:0; 
  line-height:1;position:absolute;margin-top:-2%;
}
.site-content-wrap {  }
.site-nav { font-size:1.2em;text-transform:uppercase; }
.site-nav ul { list-style:none;padding:0;margin:0; }
.site-nav li { display:block;margin-bottom:16%; }
.site-nav a { 
  color:#fff;text-decoration:none;padding:2% 10%;border:solid 5px #fff; 
  text-align:center;font-weight:bold;transition:all 0.3s;
}
.site-nav a:hover { color:#444;background-color:#fff; }
.site-content-left { position:relative;float:left;width:40%;color:#444;padding:5%;border-right:solid 5px #444; }
.site-content-right { position:relative;float:left;width:60%;color:#444;padding:5%;border-right:solid 5px #444; }

@media screen and (max-width:767px) {
  .logo-mb { position:relative;font-size:3.5em;text-align:center;padding:10% 5%; }
  .site-nav {width:100%;background-color:#444;color:#fff;padding:10px 20px;}
  .site-nav ul { list-style:none;margin:0;padding:0;text-align:center;}
  .site-nav li {  display:inline;transition: all 1s;border-radius: 1.2em}
  .site-nav a { 
    display:block;color:#fff;text-decoration:none;padding:1%;
    border:solid 5px #fff;text-transform:uppercase;
    font-weight:bold;
    font-size:1.4em;width:100%;margin:20px auto;
    transition: all 0.3s;
    border-radius: 1.2em;
  }

  .site-nav a:hover {background-color:#fff;color:#444; }
  .active .site-nav {cursor:pointer;}
 
  .active .site-nav a { 
    font-size:0px;padding:0px;width:50px;
    margin:10px auto;border-width:3px;
  }
  .site-header { border-bottom:solid 0px #444; }
  .site-header-left { width:100%;height:auto;background-color:#444;color:#fff;padding:0; }
  .site-header-right { display:block;width:100%;color:#fff;padding:5%; }
  .site-content-left { position:relative;float:left;width:100%;color:#444;padding:5%;border-right:solid 0px #444; }
  .site-content-right { position:relative;float:left;width:100%;color:#444;padding:5%;border-right:solid 0px #444; }
  
}




.project-meta { 
  list-style:none;padding:0;overflow:hidden;
  border:solid #444; border-width:5px 5px 0 5px;
}
.project-meta li { padding:5%;border-bottom:solid 5px #444;font-weight:100; }
.project-meta li strong {  }
.project-tags { list-style:none;padding:0; }
.project-tags li { 
  display:inline; float:left;text-transform:uppercase;
  color:#fff;background-color:#444;padding:3% 7%;margin:0 2% 2% 0;
  border-radius: 1.32em;
}
.project h1 { font-size:2.3em;margin-bottom:0;color:#31373b;line-height:1.2em; }
.project h2 { margin-top:0.5em;color:#444; }
.project-meta {  font-size:1.2em; }
.project-meta strong { text-transform:uppercase; }
.project p { color:#31373b; }
.project-tags { font-weight:bold; }
.vertical-datestamp { 
  position:absolute;right:-44px;top:60px; padding:6px 16px;
  background-color:#444;color:#fff;
  font-size:1.4em;font-weight:bold;
  -webkit-transform: rotate(-90deg);-moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);-o-transform: rotate(-90deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
}
.device-imac { 
  width:361px;height:291px; 
  background:url('http://www.mattbeaudry.com/files/device-frame-imac.png') no-repeat center center;
}
.device-macbookpro { 
  width:361px;height:291px; /*width:294px;height:169px; */
  background:url('http://www.mattbeaudry.com/files/device-frame-macbookpro.png') no-repeat center center;
}

.device-ipad { 
  float:left;width:134px;height:176px;margin:3%;
  background:url('http://www.mattbeaudry.com/files/device-frame-ipad.png') no-repeat center center;
}
.device-ipadmini { 
  float:left;width:93px;height:138px; margin:3%;
  background:url('http://www.mattbeaudry.com/files/device-frame-ipadmini.png') no-repeat center center;
}
.device-iphone { 
  float:left;width:58px;height:124px; margin:3%;
  background:url('http://www.mattbeaudry.com/files/device-frame-iphone.png') no-repeat center center;
}
.device-imac, .device-macbookpro, .devices-mobile { margin-bottom:5%; }




@media screen and (max-width:768px) {
  

  .vertical-datestamp { right:-23px; }
  .device-imac, .device-macbookpro, .devices-mobile { width:100%; }
  .devices-mobile { padding-left:10%;text-align:center; }



  
}



     
      `}</style>
      </div>
    </div>
  );
}
