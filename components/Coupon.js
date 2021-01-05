import React from "react";
import { Col, Row, Container } from "react-bootstrap";

const Coupon = () => {
  return (
    <>
      <Row
        className="row coupon-all"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Col md={6} className="col-md-6 col-md-offset-3">
          <div className="panel panel-default coupon">
            <div className="panel-heading" id="head">
              <div className="panel-title" id="title">
                <img src="http://placehold.it/320x120.jpg" />
                <span className="hidden-xs">Personal Protective Equipment</span>
                {/* <span xs={4} className="visible-xs">Automatic Transmission Service</span> */}
              </div>
            </div>
            <div className="panel-body">
              <img
                style={{ height: "300px" }}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcanpromos.ca%2Fwp-content%2Fuploads%2F2020%2F07%2FPC-PPEKIT-EMP.jpg&f=1&nofb=1"
                className="coupon-img img-rounded"
              />
              <Col md={9} className="col-md-9">
                <ul className="items">
                  <li>Coupon specification number one </li>
                  <li>Coupon specification number two</li>
                  <li>Coupon specification number three</li>
                  <li>Coupon specification number four</li>
                </ul>
              </Col>
              <Col md={3} className="col-md-3">
                <div className="offer">
                  <span className="text-success">FREE</span>
                  <span className="usd">
                    <sup>$</sup>
                  </span>
                  <span className="number">0</span>
                  <span className="cents">
                    <sup>00</sup>
                  </span>
                </div>
              </Col>
              <Col md={12} className="col-md-12">
                <p className="disclosure">
                  Using Genuine Oil Filter and multigrade oil up to vehicle
                  specification. Lube as necessary. Ester Oil or Synthetic
                  available at additional cost. Excludes hazardous waste fee,
                  tax and shop supplies, where applicable. Offer not valid with
                  previous charges or with any other offers or specials.
                  Customer must offer at time of write-up. No cash value.
                </p>
              </Col>
            </div>
            <div className="panel-footer">
              <div className="coupon-code">
                Code: PPE024
                <span className="print">
                  <a href="#" className="btn btn-link">
                    <i className="fa fa-lg fa-print"></i> Print Coupon
                  </a>
                </span>
              </div>
              <div className="exp">Expires: Sep 30, 2021</div>
            </div>
          </div>
        </Col>
      </Row>
      <style jsx>{`
        .coupon {
          border: 3px dashed #bcbcbc;
          border-radius: 10px;
          font-family: "HelveticaNeue-Light", "Helvetica Neue Light",
            "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
          font-weight: 300;
        }

        .coupon #head {
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          min-height: 56px;
        }

        .coupon #footer {
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
        }

        #title .visible-xs {
          font-size: 12px;
        }

        .coupon #title img {
          font-size: 30px;
          height: 30px;
          margin-top: 5px;
        }

        @media screen and (max-width: 500px) {
          .coupon #title img {
            height: 15px;
          }
        }

        .coupon #title span {
          float: right;
          margin-top: 5px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .coupon-img {
          width: 100%;
          margin-bottom: 15px;
          padding: 0;
        }

        .items {
          margin: 15px 0;
        }

        .usd,
        .cents {
          font-size: 20px;
        }

        .number {
          font-size: 40px;
          font-weight: 700;
        }

        sup {
          top: -15px;
        }

        #business-info ul {
          margin: 0;
          padding: 0;
          list-style-type: none;
          text-align: center;
        }

        #business-info ul li {
          display: inline;
          text-align: center;
        }

        #business-info ul li span {
          text-decoration: none;
          padding: 0.2em 1em;
        }

        #business-info ul li span i {
          padding-right: 5px;
        }

        .disclosure {
          padding-top: 15px;
          font-size: 11px;
          color: #bcbcbc;
          text-align: center;
        }

        .coupon-code {
          color: #333333;
          font-size: 11px;
        }

        .exp {
          color: #f34235;
        }

        .print {
          font-size: 14px;
          float: right;
        }
      `}</style>
    </>
  );
};

export default Coupon;
