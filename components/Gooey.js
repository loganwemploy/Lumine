import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import DynamicCheckBoxes from './DynamicCheckBoxes'
import OverlayModal from './OverlayModal';

const StyledGooey = styled.div`

margin-top: 121vh;
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

@media screen and (max-width: 674px){
  .side-bar {
    display: none;
  }
}

`;

const Gooey = () => {
    return (
        <StyledGooey>
<Head>
    <link href="https://fonts.googleapis.com/css?family=Nunito:400,600|Open+Sans:400,400i,600" rel="stylesheet"/>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"/>

</Head>
           {/* <!-- FONTS & ICONS --> */}

{/* <!-- PAGE STUFF --> */}
<div id="app">
  <div className="abs-center page-container">
    <div className="side-bar">
    <div className="rela-block user-info">
        <img src="https://d30womf5coomej.cloudfront.net/ua/defaultuser.png" alt="Profile Image" className="rela-inline profile-img" />
        <p className="rela-inline">Name </p>
      </div>
      {/* <OverlayModal /> */}
   <DynamicCheckBoxes/>
    </div>
    <div className="main-container">
      <div className="top-bar">
        <div className="search-bar-container">
          <i className="fas fa-search"></i>
          <input style={{height:'40px'}} type="text" placeholder="Search..." />
        </div>
        <div className="top-icon-container">
          <i className="far fa-bell"></i>
          <i className="fas fa-power-off"></i>
        </div>
      </div>
      <div className="rela-block content-container">
        <div className="main-content">
          <div className="rela-block content-nav">
            <h2>Featured Candles</h2>
          </div>
          <div className="rela-block card-container">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </div>
        <div className="info-bar"></div>
      </div>
    </div>
  </div>
</div>
 
        </StyledGooey>
    )
}

export default Gooey
