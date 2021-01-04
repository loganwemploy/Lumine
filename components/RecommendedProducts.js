import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const RecommendedProducts = () => {
  return (
    <>
      <Container className="container">
        <Row className="row">
          <Col sm={12} md={4} className="col-md-4">
            <div className="thumbnail">
              <img
                src="https://placehold.it/200x200.jpg"
                alt=""
                className="img-responsive"
              />
              <div className="caption">
                <h4 className="pull-right product-price">$49.99</h4>
                <h4 className="product-title">
                  <a href="#">Recommended Product Title 1</a>
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer.
                </p>
              </div>
              <div className="ratings">
                <p>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  (15 reviews)
                </p>
              </div>
              <div className="space-ten"></div>
              <div className="btn-ground text-center btn-holder">
                <button type="button" className="btn btn-primary">
                  <i className="fa fa-shopping-cart"></i> Add To Cart
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#product_view"
                >
                  <i className="fa fa-search"></i> Quick View
                </button>
              </div>
              <div className="space-ten"></div>
            </div>
          </Col>
          <Col sm={12} md={4} className="col-md-4">
            <div className="thumbnail">
              <img
                src="https://placehold.it/200x200.jpg"
                alt=""
                className="img-responsive"
              />
              <div className="caption">
                <h4 className="pull-right product-price">$49.99</h4>
                <h4 className="product-title">
                  <a href="#">Recommended Product Title 2</a>
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer.
                </p>
              </div>
              <div className="ratings">
                <p>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  (15 reviews)
                </p>
              </div>
              <div className="space-ten"></div>
              <div className="btn-ground text-center btn-holder">
                <button type="button" className="btn btn-primary">
                  <i className="fa fa-shopping-cart"></i> Add To Cart
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#product_view"
                >
                  <i className="fa fa-search"></i> Quick View
                </button>
              </div>
              <div className="space-ten"></div>
            </div>
          </Col>
          <Col sm={12} md={4} className="col-md-4">
            <div className="thumbnail">
              <img
                src="https://placehold.it/200x200.jpg"
                alt=""
                className="img-responsive"
              />
              <div className="caption">
                <h4 className="pull-right product-price">$49.99</h4>
                <h4 className="product-title">
                  <a href="#">Recommended Product Title 3</a>
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer.
                </p>
              </div>
              <div className="ratings">
                <p>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  (15 reviews)
                </p>
              </div>
              <div className="space-ten"></div>
              <div className="btn-ground text-center btn-holder">
                <button type="button" className="btn btn-primary">
                  <i className="fa fa-shopping-cart"></i> Add To Cart
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#product_view"
                >
                  <i className="fa fa-search"></i> Quick View
                </button>
              </div>
              <div className="space-ten"></div>
            </div>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        .product_view .modal-dialog {
          max-width: 800px;
          width: 100%;
        }
        .pre-cost {
          text-decoration: line-through;
          color: #a5a5a5;
        }
        .space-ten {
          padding: 10px 0;
        }
        .caption {
          padding: 1.32em 0 0 0;
        }

        .btn-holder {
          display: flex;
          gap: 0.5em;
        }
        .product-title {
          padding: 0.5em 0 0 0;
        }
        .product-title > a {
          color: #222;
        }
        .product-price {
          color: #667;
        }
        .caption > p {
          color: #999;
        }
      `}</style>
    </>
  );
};

export default RecommendedProducts;
