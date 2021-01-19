import React from 'react'
import styled from 'styled-components';

const StyledOptionsTable = styled.div`
  @import url(//fonts.googleapis.com/css?family=Lato:300:400);

body {
  margin:0;
}

h1 {
  font-family: 'Lato', sans-serif;
  font-weight:300;
  letter-spacing: 2px;
  font-size:48px;
}
p {
  font-family: 'Lato', sans-serif;
  letter-spacing: 1px;
  font-size:14px;
  color: #333333;
}

.header {
    position: relative;
    text-align: center;
    background: url('https://i.ytimg.com/vi/1D_WiBA8AK8/maxresdefault.jpg');
    /* background: linear-gradient(60deg,rgba(84,58,183,1) 0%,rgba(0,172,193,1) 100%); */
    color: white;
}
.logo {
  width:50px;
  fill:white;
  padding-right:15px;
  display:inline-block;
  vertical-align: middle;
}

.inner-header {
  height:65vh;
  width:100%;
  margin: 0;
  padding: 0;
}

.flex { /*Flexbox for containers*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.waves {
  position:relative;
  width: 100%;
  height:15vh;
  margin-bottom:-7px; /*Fix for safari gap*/
  min-height:100px;
  max-height:150px;
}

.content {
  position:relative;
  height:20vh;
  text-align:center;
  background-color: white;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height:40px;
    min-height:40px;
  }
  .content {
    height:30vh;
  }
  h1 {
    font-size:24px;
  }
}
`;

const OptionsTable = () => {
    return (
        <StyledOptionsTable>
            {/* <!--Hey! This is the original version
of Simple CSS Waves--> */}

<div className="header">

{/* <!--Content before waves--> */}
<div className="inner-header flex" style={{flexDirection:'column'}}>
{/* <!--Just the logo.. Don't mind this--> */}

{/* <h1>Lumi Candle Boutique</h1> */}
<img style={{maxWidth:'23vw',margin: 'auto',borderRadius:'50%'}} src="https://scontent.ford4-1.fna.fbcdn.net/v/t1.0-9/132046027_107771104544642_6249432347020636718_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=8Xr5h1inmwIAX_qA5eG&_nc_oc=AQngcDaGLrfkQC54x1nlIdfUYymY_aazkYI9v9Cq7ng3YR45UGDi8LCmcvQgwtRNX0s&_nc_ht=scontent.ford4-1.fna&oh=666044b33a3df3abc8a71a1e6f4cd362&oe=602CFE7B" alt=""/>
<button className="btn btn-primary">ORDER NOW</button>
</div>

{/* <!--Waves Container--> */}
<div>
<svg className="waves" xmlns="http://www.w3.org/2000/svg" 
viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g className="parallax">
<use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
<use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
<use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
<use href="#gentle-wave" x="48" y="7" fill="#fff" />
</g>
</svg>
</div>
{/* <!--Waves end--> */}

</div>
{/* <!--Header ends--> */}

{/* <!--Content starts--> */}
<div className="content flex">
<p>Lumi Candle Boutique| 2020 | Perfectly Handcrafted Vegan Soy-Wax Candles</p>
</div>
{/* <!--Content ends--> */}
        </StyledOptionsTable>
    )
}

export default OptionsTable
