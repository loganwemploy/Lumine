import React, { useState } from "react";
import GridListToggle from "./GridListToggle";
import { Row, Col, Button, Card } from "react-bootstrap";

const Catalog = () => {
  const [isGridView, setIsGridView] = useState(false);
  const listView = <GridListToggle />;
  const gridView = (
    <Row className="row">
      <Col lg={4} md={6} sm={10} className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
        <Card className="card">
          {" "}
          <img
            className="card-img-top"
            src="https://via.placeholder.com/650/333333"
          />
          <Card.Body className="card-body">
            <h5>
              <b>Item Title</b>{" "}
            </h5>
            <div className="rounded bg-white discount" id="orange">
              10% off
            </div>
            <div className="d-flex flex-row my-2">
              <div className="text-muted">$2.10</div>
              <div className="ml-auto">
                {" "}
                <button className="border rounded bg-white sign">
                  <span className="fa fa-plus" id="orange"></span>
                </button>{" "}
                <span className="px-sm-1">1 item</span>{" "}
                <button className="border rounded bg-white sign">
                  <span className="fa fa-minus" id="orange"></span>
                </button>{" "}
              </div>
            </div>{" "}
          <img style={{maxHeight:'30px'}}
            className="card-img-top"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbooksofisis.files.wordpress.com%2F2016%2F10%2Fstar_rating_4_of_5.png&f=1&nofb=1"
          />
            <button className="btn btn-primary w-100 rounded my-2">Add to cart</button>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4} md={6} sm={10} className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
        <Card className="card">
          {" "}
          <img
            className="card-img-top"
            src="https://via.placeholder.com/650/333333"
          />
          <Card.Body className="card-body">
            <h5>
              <b>Item Title 2</b>{" "}
            </h5>
            <div className="rounded bg-white discount" id="orange">
              10% off
            </div>
            <div className="d-flex flex-row my-2">
              <div className="text-muted">$1.35</div>
              <div className="ml-auto">
                {" "}
                <button className="border rounded bg-white sign">
                  <span className="fa fa-plus" id="orange"></span>
                </button>{" "}
                <span className="px-sm-1">1 item</span>{" "}
                <button className="border rounded bg-white sign">
                  <span className="fa fa-minus" id="orange"></span>
                </button>{" "}
              </div>
            </div>{" "}
            <img style={{maxHeight:'30px'}}
            className="card-img-top"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbooksofisis.files.wordpress.com%2F2016%2F10%2Fstar_rating_4_of_5.png&f=1&nofb=1"
          />
            <button className="btn btn-primary w-100 rounded my-2">Add to cart</button>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4} md={6} sm={10}  className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
        <Card className="card">
          {" "}
          <img
            className="card-img-top"
            src="https://via.placeholder.com/650/333333"
          />
          <Card.Body className="card-body">
            <h5>
              <b>Item Title 3</b>{" "}
            </h5>
            <div className="rounded bg-white discount" id="orange">
              10% off
            </div>
            <div className="d-flex flex-row my-2">
              <div className="text-muted">$2.80</div>
              <div className="ml-auto">
                {" "}
                <button className="border rounded bg-white sign">
                  <span className="fa fa-plus" id="orange"></span>
                </button>{" "}
                <span className="px-sm-1">1 item</span>{" "}
                <button className="border rounded bg-white sign">
                  <span className="fa fa-minus" id="orange"></span>
                </button>{" "}
              </div>
            </div>{" "}
            <img style={{maxHeight:'30px'}}
            className="card-img-top"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbooksofisis.files.wordpress.com%2F2016%2F10%2Fstar_rating_4_of_5.png&f=1&nofb=1"
          />
            <button className="btn btn-primary w-100 rounded my-2">Add to cart</button>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4} md={6} sm={10}className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
        <Card className="card">
          {" "}
          <img
            className="card-img-top"
            src="https://via.placeholder.com/650/333333"
          />
          <Card.Body className="card-body">
            <h5>
              <b>Item Title 4</b>{" "}
            </h5>
            <div className="rounded bg-white discount" id="orange">
              10% off
            </div>
            <div className="d-flex flex-row my-2">
              <div className="text-muted">$2.45</div>
              <div className="ml-auto">
                {" "}
                <button className="border rounded bg-white sign">
                  <span className="fa fa-plus" id="orange"></span>
                </button>{" "}
                <span className="px-sm-1">1 item</span>{" "}
                <button className="border rounded bg-white sign">
                  <span className="fa fa-minus" id="orange"></span>
                </button>{" "}
              </div>
            </div>{" "}
            <img style={{maxHeight:'30px'}}
            className="card-img-top"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbooksofisis.files.wordpress.com%2F2016%2F10%2Fstar_rating_4_of_5.png&f=1&nofb=1"
          />
            <button className="btn btn-primary w-100 rounded my-2">Add to cart</button>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4} md={6} sm={10} className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
        <Card className="card">
          {" "}
          <img
            className="card-img-top"
            src="https://via.placeholder.com/650/333333"
          />
          <Card.Body className="card-body">
            <h5>
              <b>Item Title 5</b>{" "}
            </h5>
            <div className="rounded bg-white discount" id="orange">
              10% off
            </div>
            <div className="d-flex flex-row my-2">
              <div className="text-muted">$5.35</div>
              <div className="ml-auto">
                {" "}
                <button className="border rounded bg-white sign">
                  <span className="fa fa-plus" id="orange"></span>
                </button>{" "}
                <span className="px-sm-1">1 item</span>{" "}
                <button className="border rounded bg-white sign">
                  <span className="fa fa-minus" id="orange"></span>
                </button>{" "}
              </div>
            </div>{" "}
            <img style={{maxHeight:'30px'}}
            className="card-img-top"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbooksofisis.files.wordpress.com%2F2016%2F10%2Fstar_rating_4_of_5.png&f=1&nofb=1"
          />
            <button className="btn btn-primary w-100 rounded my-2">Add to cart</button>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4} md={6} sm={10} className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
        <Card className="card d-relative">
          {" "}
          <img
            className="card-img-top"
            src="https://via.placeholder.com/650/333333"
          />
          <Card.Body className="card-body">
            <h5>
              <b>Item Title 6</b>{" "}
            </h5>
            <div className="rounded bg-white discount" id="orange">
              10% off
            </div>
            <div className="d-flex flex-row my-2">
              <div className="text-muted price">$3.45</div>
              <div className="ml-auto">
                {" "}
                <button className="border rounded bg-white sign">
                  <span className="fa fa-plus" id="orange"></span>
                </button>{" "}
                <span>1 item</span>{" "}
                <button className="border rounded bg-white sign">
                  <span className="fa fa-minus" id="orange"></span>
                </button>{" "}
              </div>
            </div>{" "}
            <img style={{maxHeight:'30px'}}
            className="card-img-top"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbooksofisis.files.wordpress.com%2F2016%2F10%2Fstar_rating_4_of_5.png&f=1&nofb=1"
          />
            <button className="btn btn-primary w-100 rounded my-2">Add to cart</button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );





  return (
    <div>
      <div className="filter">
        {" "}
        <button
          className="btn btn-default"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-filter"
          aria-expanded="true"
          aria-controls="mobile-filter"
        >
          Filters<span className="fa fa-filter pl-1"></span>
        </button>
      </div>
      <div id="mobile-filter">
        <p className="pl-sm-0 pl-2">
          {" "}
          Home | <b>All Items</b>
        </p>
        <div className="border-bottom pb-2 ml-2">
          <h4 id="burgundy">Filters</h4>
        </div>
        <div className="py-2 border-bottom ml-3">
          <h6 className="font-weight-bold">Categories</h6>
          <div id="orange">
            <span className="fa fa-minus"></span>
          </div>
          <form>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="category1" />{" "}
              <label for="category1">Category 1</label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="category2" />{" "}
              <label for="category2">Catagory 2</label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="category3" />{" "}
              <label for="category3">Category 3</label>{" "}
            </div>
          </form>
        </div>
        <div className="py-2 border-bottom ml-3">
          <h6 className="font-weight-bold">Catagory Feature Title</h6>
          <div id="orange">
            <span className="fa fa-minus"></span>
          </div>
          <form>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="categoryA" />{" "}
              <label for="categoryA">Category A</label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="categoryB" />{" "}
              <label for="categoryB">Category B</label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="categoryC" />{" "}
              <label for="categoryC">Category C</label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="categoryD" />{" "}
              <label for="categoryD">Category D</label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="categoryE" />{" "}
              <label for="categoryE">Category E</label>{" "}
            </div>
          </form>
        </div>
        <div className="py-2 ml-3">
          <h6 className="font-weight-bold">Top Offers</h6>
          <div id="orange">
            <span className="fa fa-minus"></span>
          </div>
          <form>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="25off" />{" "}
              <label for="25">25% off deals</label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="5off" />{" "}
              <label for="5off" id="off">
                5% off deals
              </label>{" "}
            </div>
          </form>
        </div>
      </div>
      {/* <!-- Sidebar filter section --> */}
      <section id="sidebar">
        <p>
          {" "}
          Home | <b>All Items</b>
        </p>
        <div className="border-bottom pb-2 ml-2">
          <h4 id="burgundy">Filters</h4>
        </div>
        <div className="py-2 border-bottom ml-3">
          <h6 className="font-weight-bold">Categories</h6>
          <div id="orange">
            <span className="fa fa-minus"></span>
          </div>
          <form>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="category1" />{" "}
              <label for="category1">Category 1</label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="category2" />{" "}
              <label for="category2">Category 2</label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="category3" />{" "}
              <label for="category3">category 3</label>{" "}
            </div>
          </form>
        </div>
        <div className="py-2 border-bottom ml-3">
          <h6 className="font-weight-bold">Category Feature Title</h6>
          <div id="orange">
            <span className="fa fa-minus"></span>
          </div>
          <form>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="categoryA" />{" "}
              <label for="categoryA">Category A</label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="categoryB" />{" "}
              <label for="categoryB">Category B</label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="categoryC" />{" "}
              <label for="categoryC">Category C</label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="categoryD" />{" "}
              <label for="categoryD">Category D</label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="catogoryE" />{" "}
              <label for="catogoryE">Catagory E</label>{" "}
            </div>
          </form>
        </div>
        <div className="py-2 ml-3">
          <h6 className="font-weight-bold">Top Offers</h6>
          <div id="orange">
            <span className="fa fa-minus"></span>
          </div>
          <form>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="25off" />{" "}
              <label for="25">25% off deals</label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="5off" />{" "}
              <label for="5off" id="off">
                5% off deals
              </label>{" "}
            </div>
          </form>
        </div>
      </section>
      {/* <!-- products section --> */}
      <section id="products">
        <div className="container">
          <div className="d-flex flex-row">
            <div className="text-muted m-2" id="res">
              Showing 44 results
            </div>
            <div className="ml-auto mr-lg-4">
              <div id="sorting" className="border rounded p-1 m-1">
                {" "}
                <span className="text-muted">Sort by</span>{" "}
                <select name="sort" id="sort">
                  <option value="popularity">
                    <b>Popularity</b>
                  </option>
                  <option value="prcie">
                    <b>Price</b>
                  </option>
                  <option value="rating">
                    <b>Rating</b>
                  </option>
                </select>{" "}
              </div>
            </div>
          </div>
          {/*  */}
          <div
            className="well well-sm"
            style={{
              position: "absolute",
              zIndex: "999",
              top: "3.5em",
              right: "2.75em",
            }}
          >
            <strong>Display</strong>
            <Button className="btn-group">
              <button
                onClick={() => {
                  setIsGridView(false);
                }}
                id="list"
                className="btn btn-primary btn-sm"
              >
                <span className="glyphicon glyphicon-th-list"></span>List
              </button>{" "}
              <button
                id="grid"
                className="btn btn-success btn-sm"
                onClick={() => {
                  setIsGridView(true);
                }}
              >
                <span className="glyphicon glyphicon-th"></span>Grid
              </button>
            </Button>
          </div>
          <div
            style={{
              backgroundColor: "#aaa",
              width: "104%",
              height: "10vh",
              margin: "0 0 0 -1em",
              borderRadius: "7px 7px 1px 1px"
            }}
          ></div>
          <div
            style={{
              backgroundColor: "transparent",
              width: "104%",
              height: "1.68vh",
              margin: "0 0 0 -1em",
            }}
          ></div>
          {isGridView ? gridView : listView}
        </div>
      </section>
      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        #search {
          outline: none;
          border: none;
          display: inline-block;
        }

        #burgundy {
          color: rgb(153, 40, 59);
        }

        #orange,
        select,
        .btn {
          color: orange;
        }

        .fa-search {
          font-size: 20px;
          padding: 10px;
          margin-bottom: 3px;
          padding-right: 20px;
        }

        .search-nav-item {
          height: 40px;
        }

        nav {
          padding: 0px 100px;
        }

        .fa-user-o,
        .fa-shopping-cart {
          font-size: 20px;
          padding: 4px;
        }

        .form-group {
          margin-bottom: 5px;
        }

        label {
          padding-left: 10px;
        }

        .form-group:last-child {
          margin-bottom: 0;
        }

        h6 {
          margin-bottom: 0px;
        }

        #sort {
          outline: none;
          border: none;
        }

        .btn {
          border: 1px solid orange;
          border-radius: 10px;
          background-color: #fff;
        }

        .btn:hover {
          color: #fff;
          background-color: orange;
        }

        .card-body {
          padding: 8px;
        }

        .sign {
          width: 25px;
          height: 25px;
        }

        .discount {
          border: 1px solid orange;
          border-radius: 5px;
          width: 65px;
          position: absolute;
          top: 2%;
        }

        @media (min-width: 1200px) {
          #search {
            width: 300px;
            padding: 5px;
            padding-left: 20px;
          }

          .search-nav-item {
            margin-left: 400px;
            width: 350px;
          }

          .fa-user-o {
            margin-left: 300px;
          }

          .text {
            display: none;
          }

          .fa-user-o,
          .fa-shopping-cart {
            font-size: 20px;
            padding-left: 20px;
          }

          #sidebar {
            width: 30%;
            padding: 20px;
            float: left;
          }

          #products {
            width: 70%;
            padding: 10px;
            margin: 0;
            float: right;
          }

          .card {
            width: 300px;
            height: 330px;
            border: none;
          }

          .card-img-top {
            width: 295px;
            height: 200px;
            border-radius: 10px;
          }

          del {
            padding-right: 2px;
          }

          .filter,
          #mobile-filter {
            display: none;
          }
        }

        @media (min-width: 992px) and (max-width: 1199px) {
          #search {
            width: 300px;
            padding: 5px;
            padding-left: 20px;
          }

          .search-nav-item {
            margin-left: 200px;
            width: 350px;
          }

          .fa-user-o {
            margin-left: 160px;
          }

          .text {
            display: none;
          }

          #sidebar {
            width: 30%;
            padding: 20px;
            float: left;
          }

          #products {
            width: 70%;
            padding: 10px;
            margin: 0;
            float: right;
          }

          .card {
            width: 200px;
            height: 330px;
            border: none;
          }

          .card-img-top {
            width: 200px;
            height: 200px;
            border-radius: 10px;
          }

          .fa-plus,
          .fa-minus {
            font-size: 12px;
          }

          .sign {
            height: 25px;
          }

          .price {
            width: 99px;
          }

          .filter,
          #mobile-filter {
            display: none;
          }
        }

        @media (min-width: 768px) and (max-width: 991px) {
          #search {
            width: 300px;
            padding: 5px;
            padding-left: 20px;
          }

          .search-nav-item {
            margin-left: 60px;
            width: 350px;
          }

          .fa-user-o {
            margin-left: 80px;
          }

          .text {
            display: none;
          }

          #sidebar {
            width: 35%;
            padding: 20px;
            float: left;
          }

          #products {
            width: 65%;
            padding: 10px;
            margin: 0;
            float: right;
          }

          .card {
            border: none;
          }

          .filter,
          #mobile-filter {
            display: none;
          }
        }

        @media (min-width: 576px) and (max-width: 767px) {
          .text {
            display: none;
          }

          .search-nav-item {
            margin-left: 35px;
            width: 270px;
          }

          #search {
            width: 240px;
            padding: 5px;
            padding-left: 20px;
          }

          .fa-search {
            padding: 3px;
            font-size: 18px;
          }

          #sidebar {
            width: 40%;
            padding: 20px;
            float: left;
          }

          #products {
            width: 60%;
            padding: 10px;
            margin: 0;
            float: right;
          }

          .card {
            border: none;
          }

          #off {
            padding-left: 2px;
          }

          #sorting span,
          #res {
            font-size: 14px;
          }

          .filter,
          #mobile-filter {
            display: none;
          }
        }

        @media (max-width: 575px) {
          .search-nav-item {
            margin: 0;
            width: 100%;
            margin-top: 10px;
          }

          #search {
            width: 80%;
            padding-left: 10px;
            margin-top: 10px;
            padding-right: 10px;
          }

          .fa-search {
            padding: 10px;
            font-size: 18px;
          }

          #sidebar {
            display: none;
          }

          .filter {
            margin-left: 70%;
            margin-top: 2%;
          }

          #sorting,
          #res {
            font-size: 12px;
            margin-top: 2%;
          }
        }
      `}</style>
    </div>
  );
};

export default Catalog;
