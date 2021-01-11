import React from 'react'
import styled from 'styled-components';
import Head from 'next/head'

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
`;
const PLP = () => {
    return (
        <StyledPLP>
            <Head>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined|Material+Icons" rel="stylesheet" />
            </Head>
            <header className="header">
	<div className="header-content">
		<div className="header-logo">
			<h1 className="logo">Frames</h1>
		</div>
		<nav className="header-navigation">
			<a href="#">About</a>
			<a href="#" className="link-button">Cart<i className="material-icons-outlined">shopping_cart</i></a>
		</nav>
	</div>
</header> 
<main>
	<div className="responsive-container">
		<div className="grid">
			<div className="grid-column">
								<a className="product" href="#">
					<div className="product-image">
						<img src="https://assets.codepen.io/285131/cosmonaut.jpg" />
					</div>
					<div className="product-content">
						<div className="product-info">
							<h2 className="product-title">Cosmonaut</h2>
							<p className="product-price">$ 10</p>
						</div>
						<button className="product-action"><i className="material-icons-outlined">favorite_border</i></button>
					</div>
				</a>

				<a className="product" href="#">
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
				</a>
			</div>
		</div>
	</div>

</main>
        </StyledPLP>
    )
}

export default PLP
