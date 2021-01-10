import React from 'react'
import styled from 'styled-components';
const StyledBreadCrumbs = styled.div`

*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  position: relative;
}

img {
  vertical-align: middle;
}

.chromeframe {
  margin: 0.2em 0;
  background: #ccc;
  color: #000;
  padding: 0.2em 0;
}

html,
button,
input,
select,
textarea {
  color: #000;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
}

a {
  text-decoration: none;
}
a:hover, a:active {
  text-decoration: none;
  outline: none;
}
a:link {
  outline: none;
}

strong, b {
  font-weight: bold;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
}

sup,
sub {
  text-transform: none;
}

*:focus {
  background: none;
  border: none;
  outline: none;
  text-shadow: none;
}

::-moz-selection {
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  border: none;
  outline: none;
  text-shadow: none;
}

::selection {
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  border: none;
  outline: none;
  text-shadow: none;
}

input[type=submit],
input[type=text],
input[type=password],
input[type=file],
select,
textarea {
  border: none;
  outline: none;
  outline-color: transparent;
  height: auto;
  -webkit-appearance: none;
  background-color: transparent;
  -webkit-font-smoothing: inherit !important;
}

fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

textarea {
  resize: vertical;
}

.ir {
  background-color: transparent;
  border: 0;
  overflow: hidden;
  *text-indent: -9999px;
}

.ir:before {
  content: "";
  display: block;
  width: 0;
  height: 150%;
}

.hidden {
  display: none;
}

.visuallyhidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.visuallyhidden.focusable:active,
.visuallyhidden.focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.invisible {
  visibility: hidden;
}

.text-indent {
  text-indent: -9999px;
  display: block;
  overflow: hidden;
}

.clearfix:before, form:before,
.clearfix:after,
form:after {
  content: " ";
  display: table;
}

.clearfix:after, form:after {
  clear: both;
}

.clearfix, form {
  *zoom: 1;
}

@font-face {
  font-family: "icons";
  src: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/239562/icons.eot");
  src: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/239562/icons.eot?#iefix") format("embedded-opentype"), url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/239562/icons.woff") format("woff"), url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/239562/icons.ttf") format("truetype"), url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/239562/icons.svg#icons") format("svg");
  font-weight: normal;
  font-style: normal;
}
.icon-services:before,
.icon-projects:before,
.icon-team:before,
.icon-contact:before,
.icon-blog:before,
.icon-menu:before,
.icon-circle:before,
.icon-circle-thick:before,
.icon-circle-thin:before,
.icon-arrow-left:before,
.icon-arrow-right:before,
.breadcrumbs .item:before,
.icon-play:after,
.icon-external:before,
.icon-file:before,
.icon-linkedin:before,
.icon-facebook:before,
.icon-instagram:before,
.icon-twitter:before,
.icon-retweet:before,
.icon-favorite:before,
.icon-plus:before,
.icon-close:before,
.icon-reply:before,
.icon-o2web:before,
.icon-o2:before {
  font-family: "icons";
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  text-decoration: inherit;
  text-indent: 0;
}

.icon-services:before {
  content: "";
}

.icon-projects:before {
  content: "";
}

.icon-team:before {
  content: "";
}

.icon-contact:before {
  content: "";
}

.icon-blog:before {
  content: "";
}

.icon-menu:before {
  content: "";
}

.icon-circle:before {
  content: "";
}

.icon-circle-thick:before {
  content: "";
}

.icon-circle-thin:before {
  content: "";
}

.icon-arrow-left:before {
  content: "";
}

.icon-arrow-right:before, .breadcrumbs .item:before {
  content: "";
}

.icon-play:after {
  content: "";
}

.icon-external:before {
  content: "";
}

.icon-file:before {
  content: "";
}

.icon-linkedin:before {
  content: "";
}

.icon-facebook:before {
  content: "";
}

.icon-instagram:before {
  content: "";
}

.icon-twitter:before {
  content: "";
}

.icon-retweet:before {
  content: "";
}

.icon-favorite:before {
  content: "";
}

.icon-plus:before {
  content: "";
}

.icon-close:before {
  content: "";
}

.icon-reply:before {
  content: "";
}

.icon-o2web:before {
  content: "";
}

.icon-o2:before {
  content: "";
}

html, body {
  height: 100%;
  width: 100%;
}



.container {
  max-width: 1000px;
  margin: 100px auto;
  padding: 20px;
}

.breadcrumbs {
  position: relative;
  bottom: 13em;
  left: -3.6em;
  z-index: 999999999999;
  border: 1px solid rgba(0, 0, 0, 0.2);
  zoom: 1;
}
.breadcrumbs:before, .breadcrumbs:after {
  content: " ";
  display: block;
  height: 0;
  overflow: hidden;
}
.breadcrumbs:after {
  clear: both;
}
.breadcrumbs:before, .breadcrumbs:after {
  content: "";
  position: absolute;
  top: 0;
  height: 100%;
  width: 1.5em;
  z-index: 1;
}
.breadcrumbs:before {
  left: 4em;
}
.breadcrumbs:after {
  right: 0em;
}
.breadcrumbs a {
  color: rgba(34, 34, 34, 0.8);
  padding: 0.75em 0em;
  display: inline-block;
  transition: color 120ms ease;
}
.breadcrumbs a:hover {
  color: #fff;
}
.breadcrumbs a.active {
  font-weight: bold;
  color: #222;
}
.breadcrumbs .back {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 4em;
  text-align: center;
  border: none;
  z-index: 1;
}
.breadcrumbs .back a {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 600;
}
.breadcrumbs .back a:hover {
  color: #09f;
}
.breadcrumbs .scroller {
  direction: rtl;
  overflow: auto;
  max-width: 100%;
  text-align: left;
}
.breadcrumbs .items {
  padding: 0 1.5em 0 5.5em;
  white-space: nowrap;
  display: inline-block;
  direction: ltr;
}
.breadcrumbs .items > * {
  display: inline-block;
}
.breadcrumbs .item {
  position: relative;
  margin-left: 2em;
}
.breadcrumbs .item:first-child {
  margin-left: 0;
}
.breadcrumbs .item:first-child:before {
  display: none;
}
.breadcrumbs .item:before {
  position: absolute;
  top: 50%;
  left: -1.5em;
  width: 0;
  text-align: center;
  line-height: 0;
  color: rgba(0, 0, 0, 0.5);
}
`;

const BreadCrumbs = () => {
    return (
        <StyledBreadCrumbs>
            <div className="container">
  
  <div className="breadcrumbs">
    <div className="back">
      <a href="#_">Back</a>
    </div>
    <div className="scroller">
      <ul className="items">
        <li id="1" className="item"><a href="#_">Shop</a></li>
        <li id="2" className="item"><a href="#_">7oz Candles</a></li>
        <li id="3" className="item"><a href="#_">Classic Collection</a></li>
        <li id="4" className="item"><a className="active" href="#_">Limoncello</a></li>
      </ul>
    </div>
  </div>

</div>
        </StyledBreadCrumbs>
    )
}

export default BreadCrumbs
