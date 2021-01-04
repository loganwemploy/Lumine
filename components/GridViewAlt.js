import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const GridViewAlt = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <Col sm={6} md={3} className="col-md-3 col-sm-6">
            <div className="product-grid">
              <div className="product-image">
                <a href="#">
                  <img
                    className="pic-1"
                    src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-1.jpg"
                  />
                  <img
                    className="pic-2"
                    src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-2.jpg"
                  />
                </a>
                <ul className="social">
                  <li>
                    <a href="" data-tip="Quick View">
                      <i className="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
                <span className="product-new-label">Sale</span>
                <span className="product-discount-label">20%</span>
              </div>
              <ul className="rating">
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
                <li className="fa fa-star disable"></li>
              </ul>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Women's Blouse</a>
                </h3>
                <div className="price">
                  $16.00
                  <span>$20.00</span>
                </div>
                <a className="add-to-cart" href="">
                  + Add To Cart
                </a>
              </div>
            </div>
          </Col>
          <Col sm={6} md={3} className="col-md-3 col-sm-6">
            <div className="product-grid">
              <div className="product-image">
                <a href="#">
                  <img
                    className="pic-1"
                    src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-1.jpg"
                  />
                  <img
                    className="pic-2"
                    src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-2.jpg"
                  />
                </a>
                <ul className="social">
                  <li>
                    <a href="" data-tip="Quick View">
                      <i className="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
                <span className="product-new-label">Sale</span>
                <span className="product-discount-label">20%</span>
              </div>
              <ul className="rating">
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
                <li className="fa fa-star disable"></li>
              </ul>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Women's Blouse</a>
                </h3>
                <div className="price">
                  $16.00
                  <span>$20.00</span>
                </div>
                <a className="add-to-cart" href="">
                  + Add To Cart
                </a>
              </div>
            </div>
          </Col>
          <Col sm={6} md={3} className="col-md-3 col-sm-6">
            <div className="product-grid">
              <div className="product-image">
                <a href="#">
                  <img
                    className="pic-1"
                    src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-3.jpg"
                  />
                  <img
                    className="pic-2"
                    src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-4.jpg"
                  />
                </a>
                <ul className="social">
                  <li>
                    <a href="" data-tip="Quick View">
                      <i className="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
                <span className="product-new-label">Sale</span>
                <span className="product-discount-label">50%</span>
              </div>
              <ul className="rating">
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
              </ul>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Men's Plain Tshirt</a>
                </h3>
                <div className="price">
                  $5.00
                  <span>$10.00</span>
                </div>
                <a className="add-to-cart" href="">
                  + Add To Cart
                </a>
              </div>
            </div>
          </Col>
          <Col sm={6} md={3} className="col-md-3 col-sm-6">
            <div className="product-grid">
              <div className="product-image">
                <a href="#">
                  <img
                    className="pic-1"
                    src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-5.jpg"
                  />
                  <img
                    className="pic-2"
                    src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-6.jpg"
                  />
                </a>
                <ul className="social">
                  <li>
                    <a href="" data-tip="Quick View">
                      <i className="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
                <span className="product-new-label">Sale</span>
                <span className="product-discount-label">50%</span>
              </div>
              <ul className="rating">
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
              </ul>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Men's Plain Tshirt</a>
                </h3>
                <div className="price">
                  $5.00
                  <span>$10.00</span>
                </div>
                <a className="add-to-cart" href="">
                  + Add To Cart
                </a>
              </div>
            </div>
          </Col>
          <Col
            sm={6}
            md={3}
            className="col-md-3 col-sm-6"
            style={{ height: "400px" }}
          >
            <div className="product-grid">
              <div className="product-image">
                <a href="#">
                  <img
                    className="pic-1"
                    src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-7.jpg"
                  />
                  <img
                    className="pic-2"
                    src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-8.jpg"
                  />
                </a>
                <ul className="social">
                  <li>
                    <a href="" data-tip="Quick View">
                      <i className="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
                <span className="product-new-label">Sale</span>
                <span className="product-discount-label">50%</span>
              </div>
              <ul className="rating">
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
              </ul>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Men's Plain Tshirt</a>
                </h3>
                <div className="price">
                  $5.00
                  <span>$10.00</span>
                </div>
                <a className="add-to-cart" href="">
                  + Add To Cart
                </a>
              </div>
            </div>
          </Col>
        </div>
      </div>
      <style jsx>
        {`
          .product-grid {
            font-family: Raleway, sans-serif;
            text-align: center;
            padding: 0 0 72px;
            border: 1px solid rgba(0, 0, 0, 0.1);
            overflow: hidden;
            position: relative;
            z-index: 1;
          }
          .product-grid .product-image {
            position: relative;
            transition: all 0.3s ease 0s;
          }
          .product-grid .product-image a {
            display: block;
          }
          .product-grid .product-image img {
            width: 100%;
            height: auto;
          }
          .product-grid .pic-1 {
            opacity: 1;
            transition: all 0.3s ease-out 0s;
          }
          .product-grid:hover .pic-1 {
            opacity: 1;
          }
          .product-grid .pic-2 {
            opacity: 0;
            position: absolute;
            top: 0;
            left: 0;
            transition: all 0.3s ease-out 0s;
          }
          .product-grid:hover .pic-2 {
            opacity: 1;
          }
          .product-grid .social {
            width: 150px;
            height: 80vh;
            padding: 0;
            margin: 0;
            list-style: none;
            opacity: 0;
            transform: translateY(-50%) translateX(-50%);
            position: absolute;
            top: 60%;
            left: 50%;
            z-index: 1;
            transition: all 0.3s ease 0s;
          }
          .product-grid:hover .social {
            opacity: 1;
            top: 50%;
          }
          .product-grid .social li {
            display: inline-block;
          }
          .product-grid .social li a {
            color: #fff;
            background-color: #333;
            font-size: 16px;
            line-height: 40px;
            text-align: center;
            height: 40px;
            width: 40px;
            margin: 0 2px;
            display: block;
            position: relative;
            transition: all 0.3s ease-in-out;
          }
          .product-grid .social li a:hover {
            color: #fff;
            background-color: #ef5777;
          }
          .product-grid .social li a:after,
          .product-grid .social li a:before {
            content: attr(data-tip);
            color: #fff;
            background-color: #000;
            font-size: 12px;
            letter-spacing: 1px;
            line-height: 20px;
            padding: 1px 5px;
            white-space: nowrap;
            opacity: 0;
            transform: translateX(-50%);
            position: absolute;
            left: 50%;
            top: -30px;
          }
          .product-grid .social li a:after {
            content: "";
            height: 15px;
            width: 15px;
            border-radius: 0;
            transform: translateX(-50%) rotate(45deg);
            top: -20px;
            z-index: -1;
          }
          .product-grid .social li a:hover:after,
          .product-grid .social li a:hover:before {
            opacity: 1;
          }
          .product-grid .product-discount-label,
          .product-grid .product-new-label {
            color: #fff;
            background-color: #ef5777;
            font-size: 12px;
            text-transform: uppercase;
            padding: 2px 7px;
            display: block;
            position: absolute;
            top: 10px;
            left: 0;
          }
          .product-grid .product-discount-label {
            background-color: #333;
            left: auto;
            right: 0;
          }
          .product-grid .rating {
            color: #ffd200;
            font-size: 12px;
            padding: 12px 0 0;
            margin: 0;
            list-style: none;
            position: relative;
            z-index: -1;
          }
          .product-grid .rating li.disable {
            color: rgba(0, 0, 0, 0.2);
          }
          .product-grid .product-content {
            background-color: #fff;
            text-align: center;
            padding: 12px 0;
            margin: 0 auto;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -27px;
            z-index: 1;
            transition: all 0.3s;
          }
          .product-grid:hover .product-content {
            bottom: 0;
          }
          .product-grid .title {
            font-size: 13px;
            font-weight: 400;
            letter-spacing: 0.5px;
            text-transform: capitalize;
            margin: 0 0 10px;
            transition: all 0.3s ease 0s;
          }
          .product-grid .title a {
            color: #828282;
          }
          .product-grid .title a:hover,
          .product-grid:hover .title a {
            color: #ef5777;
          }
          .product-grid .price {
            color: #333;
            font-size: 17px;
            font-family: Montserrat, sans-serif;
            font-weight: 700;
            letter-spacing: 0.6px;
            margin-bottom: 8px;
            text-align: center;
            transition: all 0.3s;
          }
          .product-grid .price span {
            color: #999;
            font-size: 13px;
            font-weight: 400;
            text-decoration: line-through;
            margin-left: 3px;
            display: inline-block;
          }
          .product-grid .add-to-cart {
            color: #000;
            font-size: 13px;
            font-weight: 600;
          }
          @media only screen and (max-width: 990px) {
            .product-grid {
              margin-bottom: 30px;
            }
          }
        `}
      </style>
    </>
  );
};

export default GridViewAlt;
