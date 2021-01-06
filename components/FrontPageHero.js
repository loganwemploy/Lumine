import React from 'react'
import Head from 'next/head';

const FrontPageHero = () => {
    return (
        <>
           <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
        />
      </Head>
      <div className="wrapper">
        <div
          style={{
            width: '100%',
            height: '4.2vh',
            backgroundColor: '#222',
            textAlign: 'center',
            position: 'fixed',
            top: '0',
            left: '0',
            margin: 'auto'
          }}
        >
          <h3 style={{ color: 'papayawhip' }}>Value Prop</h3>
        </div>
        <header style={{ display: 'none' }}>
          <div id="logo">
            <img
              src="https://res.cloudinary.com/prvnbist/image/upload/v1521466193/threadco.svg"
              alt="ThreadCo"
            />
          </div>
          <nav>
            <ul>
              <li>
                <a href="#">T-Shirts</a>
              </li>
              <li>
                <a className="active" href="#">
                  Jeans
                </a>
              </li>
              <li>
                <a href="#">Shoes</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
            </ul>
          </nav>
          <div id="actions">
            <i className="material-icons">search</i>
            <i className="material-icons">shopping_cart</i>
            <i className="material-icons">person</i>
          </div>
        </header>
        <main style={{ padding: '7em 0 0 0' }}>
          <div id="catalog">
            <h1>
              Lumi <br /> Candle Boutique
            </h1>
            <p>
              A curated list of <br /> trending products.
            </p>
            <a href="#">EXPLORE</a>
          </div>
          <div id="products">
            <div className="card">
              <div className="backdrop"></div>
              <div className="fav">
                <i className="material-icons">favorite</i>
              </div>
              <img
                src="https://dl3.pushbulletusercontent.com/OZBSPwJdRcuoETummWLd3UieENFmdny7/newski_lavender%20copy.png"
                alt="Product Image"
              />
              <div className="desc">
                <span>Dev T-Shirt</span>
                <span>$25</span>
                <div className="cart">
                  <i className="material-icons">shopping_cart</i>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="backdrop"></div>
              <div className="fav">
                <i className="material-icons">favorite</i>
              </div>
              <img
                src="https://dl3.pushbulletusercontent.com/OZBSPwJdRcuoETummWLd3UieENFmdny7/newski_lavender%20copy.png"
                alt="Product Image"
              />
              <div className="desc">
                <span>Nike Prime</span>
                <span>$88</span>
                <div className="cart">
                  <i className="material-icons">shopping_cart</i>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="backdrop"></div>
              <div className="fav">
                <i className="material-icons">favorite</i>
              </div>
              <img
                src="https://dl3.pushbulletusercontent.com/OZBSPwJdRcuoETummWLd3UieENFmdny7/newski_lavender%20copy.png"
                alt="Product Image"
              />
              <div className="desc">
                <span>jacket</span>
                <span>$110</span>
                <div className="cart">
                  <i className="material-icons">shopping_cart</i>
                </div>
              </div>
            </div>
          </div>
        </main>
        
      </div>
      <div style={{ width: '100%', height: '67vh', margin: 'auto' }}>
        {/* <img
          src="https://dl3.pushbulletusercontent.com/fIz4R2yVuRS7RTep8esNEGYswF79V523/websiteINspirationCandle%20slider.jpg"
          alt="image section"
        /> */}
        <div className="sub-section">
          <div className="sub-section-heading" style={{marginTop:'-3.2em'}}>
            <h1 style={{transform:'translate3d(0,4.4em,0)'}}>our creations</h1>
            <h6 style={{marginTop:'-0.2em',transform:'translate3d(0,4.4em,0)'}}>essentials</h6>
          </div>
          {/* <div className="sub-section-cards">
            <Carousel />
          </div> */}
        </div>
      </div>
      {/* <footer>
          <div id="social">
            <i className="fa fa-youtube-play"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-twitter"></i>
          </div>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">T&C</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </footer> */}  
        <style jsx>{`
          .wrapper {   
             
            margin: 0;
             padding: 0;
             text-decoration: none;
             box-sizing: border-box;
             color: #28495c;
             font-family: 'Poppins', sans-serif;
             max-width: 100vw;
             overflow-x: hidden;
             
          }
         
           
             body {
               background: #fcfcfc;
             }
           
             .wrapper {
               width: 90%;
               height: 100vh;
               max-width: 1180px;
               margin: 0 auto;
               display: grid;
               grid-template-rows: 80px 1fr 80px;
             }
           
             header,
             main,
             footer {
               display: grid;
               grid-auto-flow: column;
               align-items: center;
             }
           
             header {
               justify-content: space-between;
             }
           
             ul {
               display: grid;
               grid-auto-flow: column;
               grid-column-gap: 20px;
             }
             ul a {
               font-size: 12px;
               font-weight: 500;
               position: relative;
             }
             ul a:after {
               content: '';
               opacity: 0;
               border-radius: 50%;
               transition: 0.4s ease-in-out;
               width: 4px;
               height: 4px;
               background: #28495c;
               position: absolute;
               left: 50%;
               bottom: 0;
               transform: translate(-50%, 0);
             }
             ul a.active:after,
             ul a:hover:after {
               opacity: 1;
               bottom: -15px;
             }
           
             #actions i + i {
               margin-left: 20px;
             }
           
             main {
               grid-template-columns: 350px 1fr;
             }
           
             #catalog h1 {
               font-weight: 600;
               font-size: 48px;
             }
             #catalog p {
               font-weight: 500;
               line-height: 28px;
               font-size: 16px;
               margin: 20px 0 35px 0;
             }
             #catalog a {
               font-weight: 600;
               line-height: 28px;
               font-size: 12px;
               color: #fff;
               letter-spacing: 0.5px;
               border-radius: 90px;
               padding: 15px 20px;
               box-shadow: 0 10px 15px rgba(53, 29, 136, 0.2);
               background: linear-gradient(90deg, #9f51e8 0%, #351db8 100%);
             }
           
             #products {
               display: grid;
               grid-auto-flow: column;
               grid-auto-rows: 480px;
               grid-template-columns: repeat(3, 350px);
               grid-column-gap: 20px;
               overflow-x: scroll;
               padding: 10px;
             }
             #products::-webkit-scrollbar {
               height: 8px;
             }
             #products::-webkit-scrollbar-thumb {
               border-radius: 90px;
               background: rgba(0, 0, 0, 0.2);
             }
             #products .card {
               background: #fff;
               border-radius: 8px;
               padding: 10px;
               margin-bottom: 10px;
               cursor: pointer;
               position: relative;
               overflow: hidden;
               display: flex;
               transition: 0.4s ease-in-out;
             }
             #products .card:hover {
               box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
             }
             #products .card:hover .backdrop {
               bottom: -78%;
             }
             #products .card .backdrop {
               width: 600px;
               height: 600px;
               position: absolute;
               left: 50%;
               bottom: -80%;
               transform: translate(-50%, 0);
               border-radius: 50%;
               transition: 0.4s ease-in-out;
             }
             #products .card:first-child .backdrop {
               background: linear-gradient(180deg, #ccc 0%, #bbb 26.52%);
             }
             #products .card:nth-child(2) .backdrop {
               background: linear-gradient(180deg, #ccc 0%, #bbb 25.43%);
             }
             #products .card:last-child .backdrop {
               background: linear-gradient(180deg, #ccc 0%, #bbb 25.43%);
             }
             #products .card .fav,
             #products .card .cart {
               width: 40px;
               height: 40px;
               background: #fff;
               position: absolute;
               top: 10px;
               right: 10px;
               transform: translate();
               line-height: 52px;
               text-align: center;
               border-radius: 4px;
               cursor: pointer;
               border: 1px solid #e8e8e8;
               transition: 0.4s ease-in-out;
             }
             #products .card .fav i,
             #products .card .cart i {
               font-size: 20px;
               color: #e8e8e8;
               transition: 0.4s ease-in-out;
             }
             #products .card .fav:hover,
             #products .card .cart:hover {
               background: #ff4d4d;
               border: 1px solid transparent;
             }
             #products .card .fav:hover i,
             #products .card .cart:hover i {
               color: #fff;
             }
             #products .card .cart {
               top: unset;
               bottom: 10px;
               border: 1px solid transparent;
             }
             #products .card .cart:hover {
               background: #fff;
             }
             #products .card .cart:hover i {
               color: #28495c;
             }
             #products .card img {
               position: absolute;
               top: 50%;
               left: 50%;
               transform: translate(-50%, -50%);
             }
             #products .card .desc {
               align-self: flex-end;
               z-index: 12;
             }
             #products .card .desc span {
               width: auto;
               height: 40px;
               background: #fff;
               display: inline-block;
               line-height: 44px;
               font-size: 14px;
               border-radius: 4px;
               padding: 0 15px;
               margin-right: 10px;
             }
           
             footer {
               justify-content: space-between;
             }
           
             #social i {
               margin-right: 20px;
               cursor: pointer;
               opacity: 0.4;
             }
             #social i:hover {
               opacity: 1;
             }
             .sub-section {
               /* background-color: #0ff; */
               width: 100%;
               height: 100vhvh;
             }
           
             .sub-section-heading {
               margin: 0;
               padding: 0;
               width: 100%;
               height: 10vh;
               padding: 5vh;
               text-align: center;
               font-size: 3.2em;
               
             }
           
             .sub-section-cards {
               margin: auto;
               padding: 0;
               width: 100vw;
               /* height: 110vh; */
               overflow: hidden;
               /* background-color: #ff0; */
           
             }
        `}</style>
        </>
    )
}

export default FrontPageHero
