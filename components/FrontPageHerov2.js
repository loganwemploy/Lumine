import React, {useEffect} from 'react'
import styled from 'styled-components';

const StyledFrontPageHerov2 = styled.div`
 margin: auto;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  width: 100%;
  max-width: 100vw;


  header
{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px 100px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header .logo
{
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
}
.toggle
{
  position: relative;
  width: 60px;
  height: 60px;
  background: url('https://i.ibb.co/HrfVRcx/menu.png');
  background-repeat: no-repeat;
  background-size: 30px;
  background-position: center;
  cursor: pointer;
}
.toggle.active
{
  background: url('https://i.ibb.co/rt3HybH/close.png');
  background-repeat: no-repeat;
  background-size: 25px;
  background-position: center;
  cursor: pointer;
}
.showcase
{
  position: absolute;
  right: 0;
  width: 100%;
  min-height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background: #f11; */
  /* background-image: linear-gradient(196deg, #97afc3, #6789a7); */
  /* background-image: linear-gradient(196deg, #afa6a0, #8c7f76);
   */
  /* background-image: linear-gradient(196deg, #aaadac, #838786); */
  /* background: linear-gradient(196deg, #f1a9a9, #e64767); */
  transition: 0.5s;
  z-index: 2;
 /* filter: hue-rotate(180deg) contrast(1.2) */
}
.showcase.active
{
  right: 300px;
}

.showcase img
{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.92;
}
.overlay
{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.32);
  filter: contrast(1.2);
  mix-blend-mode: overlay;
}
.text
{
  position: relative;
  z-index: 10;
}

.text h2
{
  font-size: 5em;
  font-weight: 800;
  color: #fff;
  line-height: 1em;
  text-transform: uppercase;
}
.text h3
{
  font-size: 4em;
  font-weight: 700;
  color: #fff;
  line-height: 1em;
  text-transform: uppercase;
}
.text p
{
  font-size: 1.1em;
  color: #fff;
  margin: 20px 0;
  font-weight: 400;
  max-width: 700px;
}
.text a
{
  display: inline-block;
  font-size: 1em;
  background: #fff;
  padding: 10px 30px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 500;
  margin-top: 10px;
  color: #111;
  letter-spacing: 2px;
  transition: 0.2s;
}
.text a:hover
{
  letter-spacing: 6px;
}
.social
{
  position: absolute;
  z-index: 10;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.social li
{
  list-style: none;
}
.social li a
{
  display: inline-block;
  margin-right: 20px;
  filter: invert(1);
  transform: scale(0.5);
  transition: 0.5s;
}
.social li a:hover
{
  transform: scale(0.5) translateY(-15px);
}
.menu
{
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu ul
{
  position: relative;
}
.menu ul li
{
  list-style: none;
}
.menu ul li a
{
  text-decoration: none;
  font-size: 24px;
  color: #111;
}
.menu ul li a:hover
{
  color: #03a9f4; 
}

@media (max-width: 991px)
{
  .showcase,
  .showcase header
  {
    padding: 40px;
  }
  .text h2
  {
    font-size: 3em;
  }
  .text h3
  {
    font-size: 2em;
  }
}
`;

const FrontPageHerov2 = () => {
    useEffect(() => {
        const menuToggle = document.querySelector('.toggle');
      const showcase = document.querySelector('.showcase');

      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        showcase.classList.toggle('active');
      })
    }, []);
    return (
        <StyledFrontPageHerov2>
        <section className="showcase">
    <header> 
    
      <h5 style={{margin:'1em 0 0 -2.75em'}}>Hi, Welcome Sabrina</h5>
      <div className="toggle"></div>
    </header> 
    {/* <video src="https://dl3.pushbulletusercontent.com/dOVziYjxRCagDI1hZAJ2fbjnmUP2f3hC/production%20ID_4127839.mp4" muted loop autoplay></video>  */}

    {/* <video id="background-video" loop autoPlay> */}
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1217%2F3930%2Fproducts%2Fgs-110_2907b0fe-76e9-4f2d-a9f3-c410b887d47b_grande.jpg%3Fv%3D1487801152&f=1&nofb=1"  />
                {/* <source src="https://media4.giphy.com/media/19GCNFw9dn4TaN9cas/200w.webp?cid=ecf05e474qmmap5bwprle3ej1a7dqgwlsy34sjh8tsuxok7d&rid=200w.webp" type="video/ogg" />
                Your browser does not support the video tag. */}
            {/* </video> */}
    
    <div className="overlay"></div>
    <div className="text" style={{filter:'contrast(168%) drop-shadow(1px 2px 5px rgba(0,0,0,0.22))'}}>
      <h2>Lumi</h2> 
      <h3>Candle Boutique</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.</p>
      <a href="#">Shop Candles</a>
    </div>
    <ul className="social">
      <li><a href="#"><img src="https://i.ibb.co/x7P24fL/facebook.png"/></a></li>
      <li><a href="#"><img src="https://i.ibb.co/Wnxq2Nq/twitter.png"/></a></li>
      <li><a href="#"><img src="https://i.ibb.co/ySwtH4B/instagram.png"/></a></li>
    </ul>
  </section>
  <div className="menu">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">News</a></li>
      <li><a href="#">Destination</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
        </StyledFrontPageHerov2>
    )
}

export default FrontPageHerov2
