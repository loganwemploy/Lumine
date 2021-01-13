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
  display: block;
  opacity:1;
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
@media screen and (min-width: 757px){
.toggle
{
  opacity: 0;
}

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
  opacity: 1;
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



.under-container {
  width:100vw;
  max-width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
}


@-webkit-keyframes rubberBand {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1)
  }
  30% {
    -webkit-transform: scale3d(1.25, .75, 1);
    transform: scale3d(1.25, .75, 1)
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1)
  }
  50% {
    -webkit-transform: scale3d(1.15, .85, 1);
    transform: scale3d(1.15, .85, 1)
  }
  65% {
    -webkit-transform: scale3d(.95, 1.05, 1);
    transform: scale3d(.95, 1.05, 1)
  }
  75% {
    -webkit-transform: scale3d(1.05, .95, 1);
    transform: scale3d(1.05, .95, 1)
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1)
  }
}
@keyframes rubberBand {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1)
  }
  30% {
    -webkit-transform: scale3d(1.25, .75, 1);
    -ms-transform: scale3d(1.25, .75, 1);
    transform: scale3d(1.25, .75, 1)
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    -ms-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1)
  }
  50% {
    -webkit-transform: scale3d(1.15, .85, 1);
    -ms-transform: scale3d(1.15, .85, 1);
    transform: scale3d(1.15, .85, 1)
  }
  65% {
    -webkit-transform: scale3d(.95, 1.05, 1);
    -ms-transform: scale3d(.95, 1.05, 1);
    transform: scale3d(.95, 1.05, 1)
  }
  75% {
    -webkit-transform: scale3d(1.05, .95, 1);
    -ms-transform: scale3d(1.05, .95, 1);
    transform: scale3d(1.05, .95, 1)
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1)
  }
}
.rubberBand {
  -webkit-animation-name: rubberBand;
  animation-name: rubberBand
}

.mouse {
  margin: -5em 0 0 0;
  display:flex;
  width:27px;
  height:50px;
  border:2px solid #fff;
  border-radius:30px;
}

.molette {
  margin:12px auto auto auto;
  width:5px;
  height:5px;
  background-color:#fff;
  border: 1px solid #fff;
  border-radius: 90px;
  animation: scroll 2s ease infinite;
}

@keyframes scroll {
  0%{opacity:0; margin:10px auto auto auto;}
  10%{opacity:1;}
  50%{margin:10px auto auto auto;}
  90%{opacity:1;}
  100%{opacity:0; margin:18px auto auto auto;}
}

.mousetext{
  color:#fff;
  font-weight: 500;
  padding: 5px 7px 5px 7px;
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
    <div style={{width: '100%',height: '10vh',background:'transparent'}}></div>
      <h5 style={{margin:'1em 0 0 0.12em'}}>Hi, Welcome Sabrina</h5>
      <div className="toggle"></div>
    </header> 
    {/* <video src="https://dl3.pushbulletusercontent.com/dOVziYjxRCagDI1hZAJ2fbjnmUP2f3hC/production%20ID_4127839.mp4" muted loop autoplay></video>  */}

    {/* <video id="background-video" loop autoPlay> */}
                <img src="https://image.freepik.com/free-photo/hearts-with-candles-inside_23-2147596652.jpg"  />
                {/* <img src="https://scontent.ford4-1.fna.fbcdn.net/v/t1.0-9/135818886_112515884070164_2938439365681536199_o.jpg?_nc_cat=101&ccb=2&_nc_sid=a26aad&_nc_ohc=rLV-8ot9mK4AX9XYYIn&_nc_ht=scontent.ford4-1.fna&oh=5e862cad99833334e31b8d259ef43392&oe=6020E733"  /> */}
                {/* <source src="https://media4.giphy.com/media/19GCNFw9dn4TaN9cas/200w.webp?cid=ecf05e474qmmap5bwprle3ej1a7dqgwlsy34sjh8tsuxok7d&rid=200w.webp" type="video/ogg" />
                Your browser does not support the video tag. */}
            {/* </video> */}
    
    <div className="text" style={{filter:'contrast(168%) drop-shadow(1px 2px 5px rgba(0,0,0,0.22))',marginTop:'-6.4em'}}>
      <h2>Lumi</h2> 
      <h3>Candle Boutique</h3>
      <p style={{color: '#cfcfcf'}}>Lumi Candle Handcrafted with all natural soy wax and essential oils. Naturally our wax is derived from soy grown in the USA and we use vegan cotton wicks. 🌿Handcrafted with all natural soy wax and essential oils.</p>
      <a href="#" style={{borderRadius:'1.32em'}}>Shop Candles</a>
      <div className="under-container" style={{height:"10vh",position:'absolute',top:'50vh',left:'50%',transform:'translate(-50%,0)'}}>
    {/* <div className="mouse">
      <div className="molette"></div>
    </div>
    <div className="mousetext">scroll down</div> */}
    {/* <div className="mousetext" style={{position:'absolute',right:'0',zIndex:'99999999'}}> */}
    <img style={{position:'absolute',left:'77.5vw',width:'3em',height:'3em',background:'#eee',transform:'translate3d(0,0,0)',filter:'invert(1)',padding:'5px 7px 5px 7px'}} src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-512.png" alt=""/>
    </div>
  {/* </div> */}
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
