import React,{ useContext } from 'react'
// import { useRouter } from 'next/router'
import styled from 'styled-components'
import Head from 'next/head'
import { UserContext } from '../UserContext'
import Products from '../components/Products'

const StyledPLP = styled.div`


  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap");
*,
*:before,
*:after {
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

body {
  scroll-behavior: smooth;
  line-height: 1.5;
  background-color: #FFF;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  font-weight: bold;
}

input,
button,
textarea,
select {
  font: inherit;
}

button {
  border: 1px solid;
  background-color: transparent;
}

body {
  font-family: "DM Sans", sans-serif;
}

.responsive-container {
  max-width: 1080px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.header {
  border-bottom: 1px solid #d0d0d0;
  min-height: 60px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: center;
}

.header-content {
  display: flex;
  width: 100%;
  max-width: 2000px;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  align-items: center;
  justify-content: space-between;
}

.header-navigation {
  display: flex;
  align-items: center;
}
.header-navigation a {
  margin-left: 1.5rem;
  text-decoration: none;
  font-size: 1rem;
}

.link-button {
  display: flex;
  align-items: center;
  background-color: #000;
  border-radius: 0.375rem;
  padding: 0.5em 1.25em;
  color: #fff;
}
.link-button i {
  font-size: 1.25rem;
  margin-left: 0.5rem;
}

.logo {
  font-size: 1.25rem;
  font-weight: 700;
}

main {
  padding-top: 2rem;
  padding-bottom: 6rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2.3em;
}

.grid-column {
  display: flex;
  flex-direction: column;
}
.grid-column > * + * {
  margin-top: 2rem;
}

.product {
  border-radius: 0.25rem;
  text-decoration: none;
  font-weight: 400;
  transition: 0.15s ease;
  overflow: hidden;
}
.product:hover, .product:focus {
  outline: none;
  box-shadow: 0 0 0 0.25rem pink;
}
.product:hover .product-content, .product:focus .product-content {
  border-color: transparent;
}

.product-image {
  border-radius: 0.25rem 0.25rem 0 0;
  overflow: hidden;
}

.product-content {
  padding: 1rem;
  border-left: 1px solid #dedede;
  border-right: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
  border-radius: 0 0 0.25rem 0.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.15s ease;
  background-color: #FFF;
}

.product-action {
  color: #000;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.25rem;
  font-size: 1.25rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.15s ease;
}
.product-action:hover {
  background-color: #ebebeb;
}

.product-info {
  display: flex;
  flex-direction: column;
}

.product-title {
  font-size: 1.125rem;
  line-height: 1.25;
}

.product-price {
  margin-top: 0.25rem;
}

.credits {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 10rem;
  color: #777;
  font-size: 0.875rem;
}
.credits a {
  display: block;
}

@media all and (max-width: 600px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
  }

  .grid-column > * + * {
    margin-top: 1.5rem;
  }
}

/* Case Study Showcase
        ================================================== */
        
        .case-study-wrapper {
            position: absolute;
            top: 14%;
            left: 50%;
            z-index: 10;
            width: 68%;
            margin: 0 auto;
            padding: 8px 35px;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            list-style: none;
          background-color: rgba(31,32,41,1);
          border-radius: 10px;
          box-shadow: 0 0 30px rgba(0,0,0,.8);
          text-align: center;
        }
        .case-study-wrapper .case-study-name {
            margin: 5px;
            text-align: center;
            display: inline-block;
        }
        .case-study-wrapper .case-study-name a {
          position: relative;
          list-style: none;
          margin: 0 auto;
          display: block;
          text-align: center;
          padding: 0 35px;
          font-size: 14px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: 2px;
          color: #8e8d9a;
          opacity: 0.5;
          text-decoration: none;
          text-transform: uppercase;
          -webkit-transition: all 300ms linear;
          transition: all 400ms linear; 
        }	
        .case-study-wrapper .case-study-name a:hover {
            transform: translate3d(0,-3px,0);
            text-decoration: none;
            filter: invert(1);
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

            .grid a {
              width: 33vw;
              }
        }

`;
const PLP = (props) => {
  const users = useContext(UserContext);
  let useIt;
  // const router = useRouter();
  // const { pid } = router.query;
  function extractID(m){
e.preventDefault;

 useIt = m.id;
 console.log(useIt);
//  router.push(`/products/${useIt}`);
  }
    return (
        <StyledPLP>
            <Head>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined|Material+Icons" rel="stylesheet" />
            </Head>
            <header className="header">
	<div className="header-content">
		<div className="header-logo">
			<h1 className="logo">Candles</h1>
		</div>
		<nav className="header-navigation">
			<a href="#">About</a>
			<a href="#" className="link-button">Cart<i className="material-icons-outlined">shopping_cart</i></a>
		</nav>
    
  {/*  */}
	</div>
</header> 
  {/* <div style={{width:'100%'}}>
  <div className="section full-height z-bigger">
  <ul className="case-study-wrapper">
    <li className="case-study-name">                            	
      <a href="#" className="hover-target">Classic</a>
    </li>
    <li className="case-study-name">                                         	
      <a href="#" className="hover-target">Floral</a>
    </li>
    <li className="case-study-name">                                        	
      <a href="#" className="hover-target">Winter</a>
    </li>
    <li className="case-study-name">                                         	
      <a href="#" className="hover-target">Limited-Edition</a>
    </li>
  </ul>
  </div>
  </div> */}
<main>
	<div className="responsive-container" style={{marginTop:'0.23em'}}>
		<div className="grid" style={{width:'90vw',margin:'auto'}}>
			<div className="grid" style={{width:'88vw',margin:'auto'}}>
      {/* <div>{users.map((m,index)=>(<h3>welcome {m.name}</h3>))}</div> */}
							{users.map((m,index)=>(	
                
               <Products key={index} extractID={extractID} m={m} />
             
        ))}

				{/* <a className="product" href="#">
					<div className="product-image">
						<img src="https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg" />
					</div>
					<div className="product-content">
						<div className="product-info">
							<h2 className="product-title">Monster Milkshake</h2>
							<p className="product-price">$ 9</p>
						</div>
						<button className="product-action"><i className="material-icons-outlined">favorite_border</i></button>
					</div>
				</a>
				<a className="product" href="#">
					<div className="product-image">
							<img src="https://assets.codepen.io/285131/pink-pastel-juicy-banana.jpg" />
					</div>
					<div className="product-content">
						<div className="product-info">
							<h2 className="product-title">Juicy Banana</h2>
							<p className="product-price">$ 9</p>
						</div>
						<button className="product-action"><i className="material-icons-outlined">favorite_border</i></button>
					</div>
				</a>
			</div>
			<div className="grid-column">
				<a className="product" href="#">
					<div className="product-image">
						<img src="https://assets.codepen.io/285131/palmistry.jpg" />
					</div>
					<div className="product-content">
						<div className="product-info">
							<h2 className="product-title">Palmistry</h2>
							<p className="product-price">$ 9</p>
						</div>
						<button className="product-action"><i className="material-icons-outlined">favorite_border</i></button>
					</div>
				</a>
				<a className="product" href="#">
					<div className="product-image"> 
						<img src="https://assets.codepen.io/285131/fish-gas-mark.jpg" />
					</div>
					<div className="product-content">
						<div className="product-info">
							<h2 className="product-title">Fish With Gas Mask</h2>
							<p className="product-price">$ 12</p>
						</div>
						<button className="product-action"><i className="material-icons-outlined">favorite_border</i></button>
					</div>
				</a>
				<a className="product" href="#">
					<div className="product-image">
						<img src="https://assets.codepen.io/285131/mysterious-gangster-character-style.jpg" />
					</div>
					<div className="product-content">
						<div className="product-info">
							<h2 className="product-title">Gangster</h2>
							<p className="product-price">$ 5</p>
						</div>
						<button className="product-action"><i className="material-icons-outlined">favorite_border</i></button>
					</div>
				</a>
			</div>
			<div className="grid-column">
				<a className="product" href="#">
					<div className="product-image">
						<img src="https://assets.codepen.io/285131/adventure.jpg" />
					</div>
					<div className="product-content">
						<div className="product-info">
							<h2 className="product-title">Adventure in a Bottle</h2>
							<p className="product-price">$ 15</p>
						</div>
						<button className="product-action"><i className="material-icons-outlined">favorite_border</i></button>
					</div>
				</a>
				<a className="product" href="#">
					<div className="product-image">
						<img src="https://assets.codepen.io/285131/illustration-hand-with-cigarette-icon.jpg" />
					</div>
					<div className="product-content">
						<div className="product-info">
							<h2 className="product-title">Smoking Ain't Cool</h2>
							<p className="product-price">$ 5</p>
						</div>
						<button className="product-action"><i className="material-icons-outlined">favorite_border</i></button>
					</div>
				</a> */}
			</div>
		</div>
	</div>

</main>
        </StyledPLP>
    )
}

export default PLP
