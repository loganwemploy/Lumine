import React from 'react'
import Head from 'next/head'
import styled from 'styled-components';

const StyledProductZoom = styled.div`

margin-top:10vh;

  font-size: 1.4rem;
  font-family: "Corporate-s", Helvetica, sans-serif;

h1 {
  font-size: 6rem;
  font-weight: 400;
  font-family: "Corporate-a", Georgia, serif;
  color: #222;
}
h4 {
  font-size: 2.8rem;
  font-weight: 200;
  font-family: "Corporate-a", Georgia, serif;
  color: #222;
}
.hero-container {
  height: 70vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
  background: #f2f2f2;
  padding-top: 15rem;
}
.hero-container:hover .hero {
  transform: scale(1.15);
}
.hero-container .hero {
  background: url("https://scontent.ford4-1.fna.fbcdn.net/v/t1.0-9/136477852_111897047465381_244922489701447313_n.jpg?_nc_cat=106&ccb=2&_nc_sid=e3f864&_nc_ohc=e0wgzJTCEo8AX8D7vrB&_nc_ht=scontent.ford4-1.fna&oh=d40cf338593e7d3d4a94370c7a862a88&oe=6035D2BB") no-repeat center center;
  background-size: 100% 50%;
  height: 100vh;
  width: 100%;
  padding: 40px;
  transition: transform 2000ms;
}
.hero-container .hero-content {
  position: absolute;
  top: 0;
  left: 40px;
}
.hero-container .hero-content .btn {
  display: inline-block;
  font-family: "Corporate-s", Helvetica, sans-serif;
  font-weight: bold;
  color: #fff;
  font-size: 1.3rem;
  line-height: 34px;
  padding: 0 15px;
  border: 0;
  text-align: center;
  min-width: 85px;
  border-radius: 2px;
  cursor: pointer;
  outline: none;
  background-color: #176db7;
  text-decoration: none;
  -webkit-user-select: none;
  -moz-user-select: none;
}
.hero-container .hero-content .btn:hover {
  background-color: #1e8df4;
  transition: background-color 500ms ease;
}
.wrapper {
  padding: 0 10rem 4rem;
}
.wrapper h1 {
  font-size: 3.5rem;
  line-height: 1;
}
.wrapper p {
  font-size: 1.6rem;
  font-family: "Corporate-s", Helvetica, sans-serif;
  line-height: 1.3;
}

`;

const productzoom = () => {
    return (
        <StyledProductZoom>
            <Head>
            <link rel="stylesheet" href="https://use.typekit.net/hih4wjs.css"/>
            </Head>
<div className="hero-container">
  <div className="hero"></div>
  {/* <div className="hero-content">
    <h1>Perfectly refined.</h1>
    <h4>Discover the all-new 2018 C-Class, a bold achievement of automotive excellence.</h4><a className="btn" href="#">View Inventory</a>
  </div> */}
</div>
<div className="wrapper">
  <h1>Luxury that goes beyond the vehicle.</h1>
  <p>Mercedes me brings your vehicle information, 24/7 support, and the Mercedes-Benz lifestyle to one place. With mbrace Connect free for five years on vehicles 2016 and newer; you can access services like Remote Start, Lock/Unlock, and more.</p>
  <p>...</p>
</div>
        </StyledProductZoom>
    )
}

export default productzoom
