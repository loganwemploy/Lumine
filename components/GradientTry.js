import React from 'react'
import styled from 'styled-components';

const StyledGradientTry = styled.div`
  body {
  background-color: #F7F5FB;
  font-family: "Roboto Slab", Arial, sans-serif;
  margin: 0;
}

a {
  color: #6CA6FC;
  text-decoration: none;
}

.navbar {
  background: #80f2b3;
  background: linear-gradient(to right, #f49 10%, #99e2f3 68%);
  /* background: linear-gradient(to right, #c62a2a 32%, #f3a899 68%); */
  border-radius: 2px;
  color: #3A6C5C;
}
.navbar::before, .navbar::after {
  content: " ";
  display: table;
}
.navbar::after {
  clear: both;
}

.navbar-item {
  color: rgba(255, 255, 255, 0.8);
  float: left;
  font-family: "Muli", sans-serif;
  padding: 15px 20px;
}

.navbar-brand {
  font-size: 20px;
  font-weight: bold;
}

.section {
  padding: 40px;
  margin: auto;
  max-width: 500px;
}

.jumbo {
  line-height: 0.85;
  font-family: "Muli", sans-serif;
  font-size: 40px;
  font-weight: 900;
  margin: auto;
  max-width: 500px;
  padding: 40px;
  text-align: right;
}
.jumbo .jumbo-text {
  margin: 0;
  position: relative;
}
.jumbo .jumbo-highlight {
  display: block;
  font-size: 1.2em;
  position: relative;
}
.jumbo .jumbo-highlight::before {
  /* background: linear-gradient(to right, #c62a2a 32%, #f3a899 68%); */
  background: linear-gradient(to right, #f49 10%, #99e2f3 68%);
  content: " ";
  position: absolute;
  top: 30px;
  height: 30px;
  left: 60px;
  right: -20px;
  z-index: -1;
}

.section-text {
  font-size: 1.2em;
}

.list-tags {
  list-style: none;
  margin: 0;
  padding: 0;
  color: #999;
}
.list-tags > li {
  display: inline-block;
}

.card {
  background-color: #fff;
  box-shadow: 0 10px 40px 3px rgba(108, 166, 252, 0.15);
  margin: 0 auto 30px auto;
  width: 333.3333333333px;
}

.card-block {
  padding: 20px 20px;
}

.card-title,
.card-text {
  margin: 0;
  margin-bottom: 20px;
}

.card-text {
  color: #A9B5BC;
}

.card-img,
.card-img img {
  display: block;
  max-width: 100%;
}

.card-link {
  display: block;
  text-align: center;
}
`;

const GradientTry = () => {
    return (
        <StyledGradientTry>
            <div className="navbar clearfix">
  <span className="navbar-item navbar-brand js-app-name">#WomanOwnedBusiness</span>
</div>
<div className="jumbo">
  <p className="jumbo-text">Hello &amp; Welcome, to <span className="jumbo-highlight js-about-text">Lumi Candle Boutique</span></p>
</div>
<div className="section">
  <p className="section-text">Hey everyone, I've been <em>super excited</em> to share my journey of starting my own small business with you all and can't wait to continue to do so!</p>
  <ul className="list-tags js-list-tags">
    <li>#Natural&nbsp;</li>
    <li>#Vegan&nbsp;</li>
    <li>#ShopLocal&nbsp;</li>
    <li>#LatinaOwnedBusiness&nbsp;</li>
  
  </ul>
</div>

        </StyledGradientTry>
    )
}

export default GradientTry
