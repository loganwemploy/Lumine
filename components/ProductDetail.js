import react, { useState, useEffect } from "react";
import Head from "next/head";
import { Col, Row, Container } from "react-bootstrap";
// import TieredPricing from "./TieredPricing";

const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    if (quantity === 0) {
      setQuantity(quantity + 1);
      console.log("usingg");
    }
  }, [quantity]);
  
    return (
        <>
           {/* <Col style={{ margin: "auto" }}> */}
          <Row>
            <Col sm={12} lg={12}>
              <ul id="bc1" className="breadcrumb">
                <li>
                  <a href="http://moodle-test.warwick.ac.uk/my/">Home</a>{" "}
                  <span className="divider">
                    {" "}
                    <span className="accesshide "> </span>
                    <span className="arrow sep">►</span>{" "}
                  </span>
                </li>
                <li>
                  <span tabIndex="0">Shop</span>{" "}
                  <span className="divider">
                    {" "}
                    <span className="accesshide "> </span>
                    <span className="arrow sep">►</span>{" "}
                  </span>
                </li>
                <li>
                  <span tabIndex="0">Men's Shirts</span>{" "}
                  <span className="divider">
                    {" "}
                    <span className="accesshide"> </span>
                    <span className="arrow sep">►</span>{" "}
                  </span>
                </li>
                {/* <li><a href="http://moodle-test.warwick.ac.uk/course/management.php">Manage courses and categories</a> <span className="divider"> <span className="accesshide "> </span><span className="arrow sep">►</span> </span>
  </li>
  <li><a href="http://moodle-test.warwick.ac.uk/course/management.php?categoryid=1">Miscellaneous</a> <span className="divider"> <span className="accesshide "> </span><span className="arrow sep">►</span> </span>
  </li> */}
                <li>
                  <span tabIndex="0">Men's Short Sleeve Button Down</span>
                </li>
              </ul>
            </Col>
          </Row>
          <Row style={{ margin: "auto" }}>
            <Col xs={12} md={4} className="item-photo">
              <p style={{ textAlign: "right" }}>
                <a href="#">
                  <button className="btn btn-secondary">
                    download assets{" "}
                    <img
                      style={{
                        width: "25px",
                        height: "23px",
                        filter: "invert(100%)",
                        padding: "1px 2px 1px 2px",
                      }}
                      src="https://cdn4.iconfinder.com/data/icons/top-search-7/128/_download_save_arrow_down_move-512.png"
                      alt=""
                    />
                  </button>
                </a>
              </p>
              <Row className="preview">
                <h3 className="mobile-info">Men's Short Sleeve Button Down</h3>
                <h5 className="mobile-info" style={{ color: "#337ab7" }}>
                  vendor: <a href="https://imsretail.com">IMS</a> ·{" "}
                  <small style={{ color: "#337ab7" }}>
                    (50 other products from IMS)
                  </small>
                </h5>
              
                <img
                  style={{ maxWidth: "100%", borderRadius: "1.23em" }}
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0971%2F5004%2Fproducts%2Fmen_s_business_casual_polo_shirt_lightweight_1200x1200.jpg%3Fv%3D1576563583&f=1&nofb=1"
                />
                <ul className="preview-thumbnail nav nav-tabs">
                  <li className="active">
                    <a data-target="#pic-1" data-toggle="tab">
                      <img src="https://placehold.it/200x200.jpg" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-2" data-toggle="tab">
                      <img src="https://via.placeholder.com/650/9f9f9f" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-3" data-toggle="tab">
                      <img src="https://via.placeholder.com/650/9f9f9f" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-4" data-toggle="tab">
                      <img src="https://via.placeholder.com/650/9f9f9f" />
                    </a>
                  </li>
                </ul>
              </Row>
            </Col>
            <Col xs={12} md={7} style={{ border: "0px solid gray" }}>
              {/* <!--Vendor Data (inventory + more) & Product Price --> */}
              <h3 className="d-view">Men's Short Sleeve Button Down</h3>
              <h5 className="d-view" style={{ color: "#337ab7" }}>
                vendor: <a href="https://imsretail.com">IMS</a> ·{" "}
                <small style={{ color: "#337ab7" }}>
                  (50 other products from IMS)
                </small>
              </h5>

              {/* <!-- Price --> */}
              <h6 className="title-price">
                <small>Price Offered</small>
              </h6>
              <h3 style={{ marginTop: "0px", padding: "5px 7px 5px 7px" }}>
                $39.99
              </h3>

              {/* <!-- Product Specific Details --> */}
              <div
                className="section"
                style={{ borderRadius: "1.23em 1.23em 0 0" }}
              >
                <h6
                  className="title-attr"
                  style={{ marginTop: "15px", paddingBottom: "10px" }}
                >
                  <small>COLOR</small>
                </h6>
                <div>
                  {/* ### TODO MAP THESE OUT */}
                  <div
                    className="attr"
                    style={{
                      width: "25px",
                      height: "30px",
                      background: "#5a5a5a",
                      borderRadius: "50%",
                    }}
                  ></div>
                  <div
                    className="attr"
                    style={{
                      width: "25px",
                      height: "30px",
                      background: "white",
                      borderRadius: "50%",
                    }}
                  ></div>
                  <div
                    className="attr"
                    style={{
                      width: "25px",
                      height: "30px",
                      background: "#09f",
                      borderRadius: "50%",
                    }}
                  ></div>
                  <div
                    className="attr"
                    style={{
                      width: "25px",
                      height: "30px",
                      background: "teal",
                      borderRadius: "50%",
                    }}
                  ></div>
                </div>
              </div>
              <div className="section" style={{ paddingBottom: "5px" }}>
                <h6 className="title-attr">
                  <small>Size</small>
                </h6>
                <div>
                  {/* ##TODO - map over product because each product brings it's own variants */}
                  <div className="attr2">small</div>
                  <div className="attr2">medium</div>
                  <div className="attr2">large</div>
                  <div className="attr2">xl</div>
                  <div className="attr2">2xl</div>
                </div>
                <div>
                  <a>Need a bigger size? See other options.</a>
                </div>
              </div>
              <div className="section" style={{ paddingBottom: "20px" }}>
                {/* <ul className="rating" style={{display: 'flex', listStyle:'none'}}>
                    <li className="fa fa-star"></li>
                    <li className="fa fa-star"></li>
                    <li className="fa fa-star"></li>
                    <li className="fa fa-star"></li>
                    <li className="fa fa-star"></li>
                </ul> */}
                <h6 className="title-attr">
                  <small>Quantity</small>
                </h6>
                <div>
                  <div
                    className="btn-minus"
                    onClick={() => {
                      if (quantity >= 1) {
                        setQuantity(quantity - 1);
                      }
                    }}
                  >
                    <h6 style={{ padding: "5px 7px 0 7px" }}>-</h6>
                  </div>
                  <input
                    id="input-value"
                    className="input-value"
                    value={quantity}
                    onChange={(e) => {
                      setQuantity(Number(e.target.value));
                    }}
                  />
                  <div
                    className="btn-plus"
                    onClick={() => {
                      if (quantity < 500) {
                        setQuantity(quantity + 1);
                      }
                    }}
                  >
                    <h6 style={{ padding: "5px 7px 0 7px" }}>+</h6>
                  </div>
                </div>
              </div>

              {/* Buy Buttons */}
              <div
                className="section"
                style={{
                  paddingBottom: "20px",
                  borderRadius: "0 0 1.23em 1.23em",
                }}
              >
                {/* stars img */}
                <img
                  style={{ maxHeight: "30px", maxWidth: "150px" }}
                  className="card-img-top"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbooksofisis.files.wordpress.com%2F2016%2F10%2Fstar_rating_4_of_5.png&f=1&nofb=1"
                />
                <span> 200 reviews </span>
                <br />
                <br />
                <h4>
                  In Stock : 10 &nbsp;{" "}
                  <span
                    style={{
                      fontSize: "0.45em",
                      borderRadius: "14px",
                      backgroundColor: "#ccc",
                      padding: "5px 7px 5px 7px",
                    }}
                  >
                    {" "}
                    ... see reviews
                  </span>
                </h4>
                <p style={{ margin: "1em 0 0 0" }}>SKU: 245987345632</p>

                <button
                  className="btn btn-success"
                  style={{ borderRadius: "0.68em", marginTop: "23px" }}
                >
                  <i
                    style={{ marginRight: "20px" }}
                    className="glyphicon glyphicon-shopping-cart"
                    aria-hidden="true"
                  >
                    <img
                      style={{
                        width: "20px",
                        marginTop: "-0.23em",
                        filter: "invert(100%)",
                      }}
                      src="https://cdn0.iconfinder.com/data/icons/iconoteka-stroke/24/iconoteka_shopping_cart_add_b_s-512.png"
                      alt="cart icon"
                    />
                  </i>{" "}
                  Add to Cart
                </button>
                {/* wishlist */}
                <button
                  className="btn btn-primary"
                  style={{ borderRadius: "0.68em", marginTop: "23px",width:'100%' }}
                >
                  <i
                    style={{ marginRight: "20px" }}
                    className="glyphicon glyphicon-shopping-cart"
                    aria-hidden="true"
                  >
                    <img
                      style={{
                        width: "20px",
                        marginTop: "-0.23em",
                        filter: "invert(100%)",
                      }}
                      src="https://cdn4.iconfinder.com/data/icons/essential-app-2/16/heart-favourite-favorite-love-512.png"
                      alt="cart icon"
                    />
                  </i>{" "}
                  Add to WishList
                </button>
                <h6 style={{ opacity: "0" }}>
                  <a href="#">
                    <span
                      className="glyphicon glyphicon-heart-empty"
                      style={{ cursor: "pointer" }}
                    ></span>{" "}
                    learn more
                  </a>
                </h6>
                <br />
                {/* <TieredPricing /> */}
                <div className="table-responsive" id="sailorTableArea">
        <table
          id="sailorTable"
          className="table table-striped table-bordered"
          width="100%"
        >
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Discount</th>
              <th>Price per unit</th>
          
            </tr>
          </thead>
          <tbody>
            <tr className="bg-primary text-white">
              <td>4-9</td>
              <td>---</td>
              <td>$20.00</td>
           
            </tr>
            <tr>
              <td>10-14</td>
              <td>15%</td>
              <td>$18.00</td>
           
            </tr>
            <tr>
              <td>15+</td>
              <td>20%</td>
              <td>$15.00</td>
            </tr>
          
          </tbody>
        </table>
      </div>
                {/*  */}
              </div>
            </Col>

            <Col xs={12} md={9}>
              <ul
                className="menu-items"
                style={{
                  fontSize: "0.88em",
                  fontWeight: "bold",
                  color: "#777",
                }}
              >
                <li className="active">Product Details</li>
                <li>Reviews</li>
                <li>Vendor</li>
                <li>Delivery</li>
              </ul>
              <div style={{ width: "100%", borderTop: "1px solid silver" }}>
                <p style={{ padding: "15px", fontSize: "1.11em" }}>
                  <small>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sapiente, cum possimus. Quos sit minima animi consequatur
                    maxime. Nulla quisquam iure quas soluta quibusdam ex dolor
                    debitis voluptates quidem delectus! Itaque ratione
                    reiciendis unde blanditiis nisi, neque nostrum tempora
                    quisquam fugit? Lorem ipsum dolor sit. Lorem ipsum dolor sit
                    amet consectetur, adipisicing elit. Delectus, odit. Tempore
                    iusto explicabo debitis veritatis consequuntur odit
                    excepturi pariatur impedit optio reprehenderit porro amet
                    voluptatem fugit suscipit, natus, molestiae quasi.
                  </small>
                </p>
                <small>
                  <ul style={{ fontSize: "1.1em", lineHeight: "1.68" }}>
                    <li>
                      Super AMOLED capacitive touchscreen display with 16M
                      colors
                    </li>
                    <li>Available on GSM, AT T, T-Mobile and other carriers</li>
                    <li>
                      Compatible with GSM 850 / 900 / 1800; HSDPA 850 / 1900 /
                      2100 LTE; 700 MHz Class 17 / 1700 / 2100 networks
                    </li>
                    <li>MicroUSB and USB connectivity</li>
                    <li>
                      Interfaces with Wi-Fi 802.11 a/b/g/n/ac, dual band and
                      Bluetooth
                    </li>
                    <li>
                      Wi-Fi hotspot to keep other devices online when a
                      connection is not available
                    </li>
                    <li>SMS, MMS, email, Push Mail, IM and RSS messaging</li>
                    <li>
                      Front-facing camera features autofocus, an LED flash, dual
                      video call capability and a sharp 4128 x 3096 pixel
                      picture
                    </li>
                    <li>Features 16 GB memory and 2 GB RAM</li>
                    <li>
                      Upgradeable Jelly Bean v4.2.2 to Jelly Bean v4.3 Android
                      OS
                    </li>
                    <li>
                      17 hours of talk time, 350 hours standby time on one
                      charge
                    </li>
                    <li>Available in white or black</li>
                    <li>Model I337</li>
                    <li>
                      Package includes phone, charger, battery and user manual
                    </li>
                    <li>
                      Phone is 5.38 inches high x 2.75 inches wide x 0.13 inches
                      deep and weighs a mere 4.59 oz{" "}
                    </li>
                  </ul>
                </small>
              </div>
            </Col>
          </Row>  

        <style jsx>
        {`
        .preview {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
           
          }
          @media screen and (max-width: 996px) {
            .preview {
              margin-bottom: 20px;
            }
          }
        
          .preview-pic {
            -webkit-box-flex: 1;
            -webkit-flex-grow: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
          }
        
          .preview-thumbnail.nav-tabs {
            border: none;
            gap: 1px;
            margin: 14px auto 7px auto;
            width: 92%;
          }
          .preview-thumbnail.nav-tabs li {
            width: 24%;
            margin:0 auto 0 auto;
            padding: 0 0.12em 0 0.12em;
          }
          .preview-thumbnail.nav-tabs li img {
            max-width: 100%;
            border-radius: 8px;
            display: block;
          }
          .preview-thumbnail.nav-tabs li a {
            padding: 0;
            margin: 0;
          }
          .preview-thumbnail.nav-tabs li:last-of-type {
            margin-right: 0;
          }
        
          .tab-content {
            overflow: hidden;
          }
          .tab-content img {
            width: 100%;
            -webkit-animation-name: opacity;
            animation-name: opacity;
            -webkit-animation-duration: 0.3s;
            animation-duration: 0.3s;
          }
        
        
        
          h3 {
            padding: 5px 7px 5px 0;
          }
        
          .landing {
            margin: 23px auto 0 auto;
            max-width: 88vw;
          }
        
          ul > li {
            margin-right: 25px;
            font-weight: lighter;
            cursor: pointer;
          }
          li.active {
            border-bottom: 3px solid orange;
          }
          .nav > li.active {
            box-shadow: 1px 2px 2px rgba(0,0,0,0.12);
            // border-bottom: 1px solid rgba(0,125,245,0.45);
            border-bottom: none;
          }
          .nav > li {
            padding-top: 3px;
           
          }
        
          .item-photo {
            display: flex;
            justify-content: center;
            align-items: center;
            border-right: 1px solid #f6f6f6;
          }
          .menu-items {
            list-style-type: none;
            font-size: 11px;
            display: inline-flex;
            margin-bottom: 0;
            margin-top: 20px;
          }
          .btn-success {
            width: 100%;
            border-radius: 0;
          }
          .section {
            width: 100%;
            margin-left: -15px;
            padding: 2px;
            padding-left: 15px;
            padding-right: 15px;
            background: #f8f9f9;
          }
          .title-price {
            margin-top: 30px;
            margin-bottom: 0;
            color: black;
          }
          .title-attr {
            margin-top: 0;
            margin-bottom: 0;
            color: black;
          }
          .btn-minus {
            cursor: pointer;
            font-size: 7px;
            display: flex;
            align-items: center;
            padding: 5px;
            padding-left: 10px;
            padding-right: 10px;
            border: 1px solid gray;
            border-radius: 2px;
            border-right: 0;
          }
          .btn-plus {
            cursor: pointer;
            font-size: 7px;
            display: flex;
            align-items: center;
            padding: 5px;
            padding-left: 10px;
            padding-right: 10px;
            border: 1px solid gray;
            border-radius: 2px;
            border-left: 0;
          }
          div.section > div {
            width: 100%;
            display: inline-flex;
          }
          div.section > div > input {
            margin: 0;
            padding-left: 5px;
            font-size: 10px;
            padding-right: 5px;
            max-width: 18%;
            text-align: center;
          }
          .attr,
          .attr2 {
            cursor: pointer;
            margin-right: 5px;
            width: 100%;
            min-width: 4.5vmin;
            max-width: 100%;
            height: 20px;
            font-size: 10px;
            padding: 2px;
            border: 1px solid gray;
            border-radius: 2px;
            text-align: center;
          }
          .attr.active,
          .attr2.active {
            border: 2px solid orange;
            border-radius: 10px;
          }
        
          @media (max-width: 426px) {
            .container {
              margin-top: 0px !important;
            }
            .container > .row {
              padding: 0 !important;
            }
            .container > .row > .col-xs-12.col-sm-5 {
              padding-right: 0;
            }
            .container > .row > .col-xs-12.col-sm-9 > div > p {
              padding-left: 0 !important;
              padding-right: 0 !important;
            }
            .container > .row > .col-xs-12.col-sm-9 > div > ul {
              padding-left: 10px !important;
            }
            .section {
              width: 100%;
            }
            .menu-items {
              padding-left: 0;
            }
          }
        
        
          input.input-value#input-value {
            font-size: 18px;
          }
        
        
                    .carousel-indicators {
                        position: initial;
                        right: initial;
                        bottom: initial;
                        left: initial;
                        z-index: initial;
                        display: initial;
                        -ms-flex-pack: initial;
                        justify-content: initial;
                        padding-left: initial;
                        margin-right: initial;
                        margin-left: initial;
                        list-style: initial;
                    }
                    
                    .carousel-indicators li {
                        width: auto;
                        height: auto;
                        text-indent: 0;
                        border: none;
                    }
                    .carousel-indicators li.active {
                        border: 1px solid #aaaaaa;
                    }
        `}
        </style> 
        </>
    )
}

export default ProductDetail
