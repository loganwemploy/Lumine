import React from 'react'
import styled from 'styled-components';

const StyledCartPop = styled.div`
  
`;
const CartPop = () => {
    return (
        <StyledCartPop>
           <nav>
  <div className="container">
    <ul className="navbar-left">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
    </ul>
     {/* <!--end navbar-left --> */}

    <ul className="navbar-right">
      <li><a href="#" id="cart"><i className="fa fa-shopping-cart"></i> Cart <span className="badge">3</span></a></li>
    </ul>
     {/* <!--end navbar-right --> */}
  </div>
   {/* <!--end container --> */}
</nav>


<div className="container">
  <div className="shopping-cart">
    <div className="shopping-cart-header">
      <i className="fa fa-shopping-cart cart-icon"></i><span className="badge">3</span>
      <div className="shopping-cart-total">
        <span className="lighter-text">Total:</span>
        <span className="main-color-text">$2,229.97</span>
      </div>
    </div>
     {/* <!--end shopping-cart-header --> */}

    <ul className="shopping-cart-items">
      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" />
        <span className="item-name">Sony DSC-RX100M III</span>
        <span className="item-price">$849.99</span>
        <span className="item-quantity">Quantity: 01</span>
      </li>

      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg" alt="item1" />
        <span className="item-name">KS Automatic Mechanic...</span>
        <span className="item-price">$1,249.99</span>
        <span className="item-quantity">Quantity: 01</span>
      </li>

      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg" alt="item1" />
        <span className="item-name">Kindle, 6" Glare-Free To...</span>
        <span className="item-price">$129.99</span>
        <span className="item-quantity">Quantity: 01</span>
      </li>
    </ul>

    <a href="#" className="button">Checkout</a>
  </div> 
  {/* <!--end shopping-cart --> */}
</div> 
{/* <!--end container -->  */}
        </StyledCartPop>
    )
}

export default CartPop
