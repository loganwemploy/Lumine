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
// import RecommendedProductAlt from '../components/RecommendedProductAlt'
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



// import Login from "../components/Login";
// import Alt from "../components/Alt";
// import AdCopy from "../components/AdCopy";
// import AstroCards from "../components/AstroCards";
export default function Home() {

 const [isProductPage, setIsProductPage] = useState(false)
 
  return (
    <div className="body">
      
{/* <OverlayModal /> */}
      {/* <Catalog /> */}
      {/* {productDetailWithBreadCrumbs} */}
      {/* <Gooey /> */}
      <Hero />
      <SubHero />
      <SubSubSectionv2 />
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
