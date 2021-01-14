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
{/* <OverlayModal /> */}
      {/* <Catalog /> */}
      {/* {productDetailWithBreadCrumbs} */}
      {/* <Gooey /> */}
      <Hero />
      <SubHero />
      <BubbleCategories />
      {/*  */}
      <div className="jumbotron" id="home">
  <h1>Hello!<br/>We are Lumi Candle Boutique.</h1>
  <p style={{width:'50vw',textAlign:'left'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tenetur, sed voluptatem magnam enim ipsam rem temporibus aperiam labore non sunt optio maxime obcaecati numquam excepturi atque? Fuga dignissimos odit sed? Quia doloribus asperiores fugit ducimus beatae earum, labore error, veritatis vero similique exercitationem molestias iure vel alias natus eum veniam rem, ipsum nisi saepe harum qui officiis. Voluptatibus, repellendus.</p>
  <ul className="list-inline" style={{display:'flex'}}>
    <li><a className="btn btn-default btn-lg" href="https://www.facebook.com/mtrifunovski" title="Me on Facebook" target="_blank"><i className="fa fa-facebook"></i></a></li>
    <li><a className="btn btn-default btn-lg" href="https://twitter.com/" title="Me on Twitter" target="_blank"><i className="fa fa-twitter"></i></a></li>
    <li><a className="btn btn-default btn-lg" href="https://github.com/Matko95" title="Me on GitHub" target="_blank"><i className="fa fa-github"></i></a></li>
    <li><a className="btn btn-default btn-lg" href="https://www.freecodecamp.com/matko95" title="Me on FreeCodeCamp" target="_blank"><i className="fa fa-fire"></i></a></li>
  </ul>
</div>
      {/* <SubSubSectionv2 /> */}
      <div style={{width:"100%",height:'67vh'}}></div>
      <Footer />
      {/* </div> */}
      {/* <SuggestProduct /> */}
   {/* <Slider /> */}
     {/* <Countdown /> */}
     {/* <div style={{display:'flex',flexDirection:'column',height:'auto', marginTop:'-150vh',width:'100%',maxWidth:'100vw',boxSizing:'border-box',}}>
       <div style={{position:'relative'}}>
       <Gooey />
       </div>
      

     </div> */}
      {/* <Catalog /> */}
      {/* <AstroCards /> */}
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
     
      `}</style>
    </div>
  );
}
