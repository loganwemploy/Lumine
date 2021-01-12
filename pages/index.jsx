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



// import Login from "../components/Login";
// import Alt from "../components/Alt";
// import AdCopy from "../components/AdCopy";
// import AstroCards from "../components/AstroCards";
export default function Home() {

 const [isProductPage, setIsProductPage] = useState(false)
 const [isCart, setIsCart] = useState(true)
 
  return (
    <div className="body">
      <h1>Previewing</h1>
      <hr />
      <br />
      <br />
{/* <OverlayModal /> */}
      {/* <Catalog /> */}
      {/* {productDetailWithBreadCrumbs} */}
      {/* <Gooey /> */}
      <button style={{position:'absolute',top:'0',right:'0',zIndex:'99999999'}} onClick={()=>{
        setIsCart(!isCart)
      }}>carttt</button>
    {isCart ? <>homeHeroSubHero
      <SubSubSectionv2 /> </>: <Gooey />}
      {/* <SuggestProduct /> */}
    {/* {isCart ? <>homeHeroSubHero
      <SubSubSectionv2 /> </>: null} */}
   {/* <Slider /> */}
     {/* <Countdown /> */}

     
 
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
        }



  i {
    font-size: 20px;
    color: #babfc9;
  }
  i + i {
    margin-left: 10px;
  }
  h2 {
    font-family: 'Nunito';
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }
  h3 {
    font-family: 'Nunito';
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 6px;
  }
  input {
    border: none;
    padding: 10px;
    font-size: 16px;
    font-family: 'Open Sans';
    width: 100%;
    color: #111c36;
  }
  input::-moz-placeholder {
    color: #babfc9;
  }
  input:-ms-input-placeholder {
    color: #babfc9;
  }
  input::placeholder {
    color: #babfc9;
  }
  input:focus {
    outline: none;
  }
  * {
    box-sizing: border-box;
    transition: 0.3s cubic-bezier(0.6, 0, 0.2, 1);
  }
  .abs-center {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .rela-block {
    display: block;
    position: relative;
  }
  .rela-inline {
    display: inline-block;
    position: relative;
  }
  body {
    font-family: 'Open Sans';
    transition: 0s;
    background-color: #eaecf1;
    color: #111c36;
    font-size: 13px;
    line-height: 20px;
  }
  .page-container {
    display: flex;
    height: 88vh;
    width: 92%;
    max-height: 700px;
    max-width: 1180px;
    border-radius: 3px;
    box-shadow: 0 6px 19px 0px rgba(0,0,0,0.064);
    overflow-x: hidden;
    overflow-y: hidden;
  }
  .side-bar {
    /* /* width: 220px; */
    min-width: 26vw; 
    background-color: #fff;
    border-right: 1px solid #eaecf1;
    padding: 0 30px 30px;
    overflow-y: scroll;
  }
  .user-info {
    height: 80px;
    line-height: 80px;
    padding-left: 42px;
    margin-bottom: 20px;
  }
  .user-info p {
    font-weight: 600;
  }
  .profile-img {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 34px;
    border-radius: 100%;
  }
  .side-section {
    color: #aaafb9;
  }
  .side-section + .side-section {
    margin-top: 24px;
  }
  .side-header {
    color: #4c84ff;
  }
  .side-links li {
    padding: 6px 15px;
    cursor: pointer;
  }
  .side-links li:hover,
  .side-links li.active {
    color: #4c84ff;
  }
  .main-container {
    flex: 1 1 0;
    position: relative;
    padding-top: 80px;
    background-color: #f5f6fa;
  }
  .top-bar {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    line-height: 80px;
    background-color: #fff;
    border-bottom: 1px solid #eaecf1;
    padding: 0 30px;
  }
  .search-bar-container {
    flex: 1 1 0;
    height: 100%;
    line-height: 80px;
    margin-right: 10px;
  }
  .search-bar-container input {
    padding-left: 30px;
  }
  .search-bar-container i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .content-container {
    display: flex;
    height: 100%;
  }
  .main-content {
    flex: 1 1 0;
    overflow: auto;
    padding: 20px;
  }
  .content-nav {
    padding: 20px;
    margin-bottom: 20px;
  }
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 10px;
  }
  .card {
    flex: 1 1 0;
    height: 200px;
    min-width: 180px;
    margin: 0 10px 20px;
    padding: 10px;
    border: 1px solid #eaecf1;
    border-radius: 4px;
    background-color: #fff;
  }
  .info-bar {
    background-color: #fff;
    overflow: auto;
    border-left: 0px;
  }
  .info-bar.active {
    width: 300px;
    border-left: 1px solid #eaecf1;
  }
     
      `}</style>
    </div>
  );
}
