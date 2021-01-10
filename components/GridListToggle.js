import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";

const GridListToggle = () => {
  const [productView, setProductView] = useState("list");
  return (
    <div style={{ display: "flex" }}>
      <Row className="row" style={{ fontSize: "16px" }}>
        <div className="well">
          <div className="list-group">
            <a href="#" className="list-group-item bg-alt">
              <Row>
                <Col md={4} className="media col-md-3">
                  <figure className="pull-left">
                    <img
                      style={{ height: "50px", width: "50px" }}
                      className="media-object img-rounded img-responsive"
                      src="http://placehold.it/350x250"
                      alt="placehold.it/50x50"
                    />
                  </figure>
                </Col>
                <Col md={2}></Col>
                <Col
                  md={6}
                  className="col-md-6"
                  style={{ textDecoration: "none" }}
                >
                  <h4 className="list-group-item-heading"> Item Title </h4>
                  <p className="list-group-item-text">
                    {" "}
                    Qui diam libris ei, vidisse incorrupte at mel. His euismod
                    salutandi dissentiunt eu. Habeo offendit ea mea. Nostro
                    blandit sea ea, viris timeam molestiae an has. At nisl
                    platonem eum.
                  </p>
                  <img
                    style={{ maxWidth: "100px" }}
                    className="card-img-top"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbooksofisis.files.wordpress.com%2F2016%2F10%2Fstar_rating_4_of_5.png&f=1&nofb=1"
                  />
                  &nbsp;
                  <span>
                    <button>220 reviews</button>
                  </span>
                </Col>
              </Row>
            </a>
            {/* ########### */}
            <a href="#" className="list-group-item bg-alt">
              <Row>
                <Col md={4} className="media col-md-3">
                  <figure className="pull-left">
                    <img
                      style={{ height: "50px", width: "50px" }}
                      className="media-object img-rounded img-responsive"
                      src="http://placehold.it/350x250"
                      alt="placehold.it/50x50"
                    />
                  </figure>
                </Col>
                <Col md={2}></Col>
                <Col md={6} className="col-md-6">
                  <h4 className="list-group-item-heading"> Item Title </h4>
                  <p className="list-group-item-text">
                    {" "}
                    Qui diam libris ei, vidisse incorrupte at mel. His euismod
                    salutandi dissentiunt eu. Habeo offendit ea mea. Nostro
                    blandit sea ea, viris timeam molestiae an has. At nisl
                    platonem eum.
                  </p>
                  <img
                    style={{ maxWidth: "100px" }}
                    className="card-img-top"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbooksofisis.files.wordpress.com%2F2016%2F10%2Fstar_rating_4_of_5.png&f=1&nofb=1"
                  />
                  &nbsp;
                  <span>
                    <button>220 reviews</button>
                  </span>
                </Col>
              </Row>
            </a>
            {/* ################ */}
            <a href="#" className="list-group-item bg-alt">
              <Row>
                <Col md={4} className="media col-md-3">
                  <figure className="pull-left">
                    <img
                      style={{ height: "50px", width: "50px" }}
                      className="media-object img-rounded img-responsive"
                      src="http://placehold.it/350x250"
                      alt="placehold.it/50x50"
                    />
                  </figure>
                </Col>
                <Col md={2}></Col>
                <Col md={6} className="col-md-6">
                  <h4 className="list-group-item-heading"> Item Title </h4>
                  <p className="list-group-item-text">
                    {" "}
                    Qui diam libris ei, vidisse incorrupte at mel. His euismod
                    salutandi dissentiunt eu. Habeo offendit ea mea. Nostro
                    blandit sea ea, viris timeam molestiae an has. At nisl
                    platonem eum.
                  </p>
                  <img
                    style={{ maxWidth: "100px" }}
                    className="card-img-top"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbooksofisis.files.wordpress.com%2F2016%2F10%2Fstar_rating_4_of_5.png&f=1&nofb=1"
                  />
                  &nbsp;
                  <span>
                    <button>220 reviews</button>
                  </span>
                </Col>
              </Row>
            </a>
            {/* ############ */}
          </div>
        </div>
      </Row>
      <style jsx>
        {`
          a.list-group-item {
            height: auto;
            min-height: 220px;
          }
          a.list-group-item.active small {
            color: #fff;
          }
          .stars {
            margin: 20px auto 1px;
          }

          .list-group-item-text {
            color: black;
            text-decoration: none;
          }
          span > button {
            margin-top: 5px;
          }
          .bg-alt {
            background-color: #fefefe;
            text-decoration: none;
          }
          .bg-alt:nth-child(odd) {
            background-color: #ededed;
          }
        `}
      </style>
    </div>
  );
};

export default GridListToggle;
