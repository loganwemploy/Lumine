import React from "react";

const RecommendedProductAlt = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-9">
              <h3>Carousel Product Cart Slider</h3>
            </div>
            <div className="col-md-3">
              {/* <!-- Controls --> */}
              <div className="controls pull-right hidden-xs">
                <a
                  className="left fa fa-chevron-left btn btn-success"
                  href="#carousel-example"
                  data-slide="prev"
                ></a>
                <a
                  className="right fa fa-chevron-right btn btn-success"
                  href="#carousel-example"
                  data-slide="next"
                ></a>
              </div>
            </div>
          </div>
          <div
            id="carousel-example"
            className="carousel slide hidden-xs"
            data-ride="carousel"
          >
            {/* <!-- Wrapper for slides --> */}
            <div className="carousel-inner">
              <div className="item active">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="col-item">
                      <div className="photo">
                        <img
                          src="http://placehold.it/350x260"
                          className="img-responsive"
                          alt="a"
                        />
                      </div>
                      <div className="info">
                        <div className="row">
                          <div className="price col-md-6">
                            <h5>Sample Product</h5>
                            <h5 className="price-text-color">$199.99</h5>
                          </div>
                          <div className="rating hidden-sm col-md-6">
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                        <div className="separator clear-left">
                          <p className="btn-add">
                            <i className="fa fa-shopping-cart"></i>
                            <a href="#" className="hidden-sm">
                              Add to cart
                            </a>
                          </p>
                          <p className="btn-details">
                            <i className="fa fa-list"></i>
                            <a href="#" className="hidden-sm">
                              More details
                            </a>
                          </p>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="col-item">
                      <div className="photo">
                        <img
                          src="http://placehold.it/350x260"
                          className="img-responsive"
                          alt="a"
                        />
                      </div>
                      <div className="info">
                        <div className="row">
                          <div className="price col-md-6">
                            <h5>Product Example</h5>
                            <h5 className="price-text-color">$249.99</h5>
                          </div>
                          <div className="rating hidden-sm col-md-6"></div>
                        </div>
                        <div className="separator clear-left">
                          <p className="btn-add">
                            <i className="fa fa-shopping-cart"></i>
                            <a href="#" className="hidden-sm">
                              Add to cart
                            </a>
                          </p>
                          <p className="btn-details">
                            <i className="fa fa-list"></i>
                            <a href="#" className="hidden-sm">
                              More details
                            </a>
                          </p>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="col-item">
                      <div className="photo">
                        <img
                          src="http://placehold.it/350x260"
                          className="img-responsive"
                          alt="a"
                        />
                      </div>
                      <div className="info">
                        <div className="row">
                          <div className="price col-md-6">
                            <h5>Next Sample Product</h5>
                            <h5 className="price-text-color">$149.99</h5>
                          </div>
                          <div className="rating hidden-sm col-md-6">
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                        <div className="separator clear-left">
                          <p className="btn-add">
                            <i className="fa fa-shopping-cart"></i>
                            <a href="#" className="hidden-sm">
                              Add to cart
                            </a>
                          </p>
                          <p className="btn-details">
                            <i className="fa fa-list"></i>
                            <a href="#" className="hidden-sm">
                              More details
                            </a>
                          </p>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="col-item">
                      <div className="photo">
                        <img
                          src="http://placehold.it/350x260"
                          className="img-responsive"
                          alt="a"
                        />
                      </div>
                      <div className="info">
                        <div className="row">
                          <div className="price col-md-6">
                            <h5>Sample Product</h5>
                            <h5 className="price-text-color">$199.99</h5>
                          </div>
                          <div className="rating hidden-sm col-md-6">
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                        <div className="separator clear-left">
                          <p className="btn-add">
                            <i className="fa fa-shopping-cart"></i>
                            <a href="#" className="hidden-sm">
                              Add to cart
                            </a>
                          </p>
                          <p className="btn-details">
                            <i className="fa fa-list"></i>
                            <a href="#" className="hidden-sm">
                              More details
                            </a>
                          </p>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="col-item">
                      <div className="photo">
                        <img
                          src="http://placehold.it/350x260"
                          className="img-responsive"
                          alt="a"
                        />
                      </div>
                      <div className="info">
                        <div className="row">
                          <div className="price col-md-6">
                            <h5>Product with Variants</h5>
                            <h5 className="price-text-color">$199.99</h5>
                          </div>
                          <div className="rating hidden-sm col-md-6">
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                        <div className="separator clear-left">
                          <p className="btn-add">
                            <i className="fa fa-shopping-cart"></i>
                            <a href="#" className="hidden-sm">
                              Add to cart
                            </a>
                          </p>
                          <p className="btn-details">
                            <i className="fa fa-list"></i>
                            <a href="#" className="hidden-sm">
                              More details
                            </a>
                          </p>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="col-item">
                      <div className="photo">
                        <img
                          src="http://placehold.it/350x260"
                          className="img-responsive"
                          alt="a"
                        />
                      </div>
                      <div className="info">
                        <div className="row">
                          <div className="price col-md-6">
                            <h5>Grouped Product</h5>
                            <h5 className="price-text-color">$249.99</h5>
                          </div>
                          <div className="rating hidden-sm col-md-6"></div>
                        </div>
                        <div className="separator clear-left">
                          <p className="btn-add">
                            <i className="fa fa-shopping-cart"></i>
                            <a href="#" className="hidden-sm">
                              Add to cart
                            </a>
                          </p>
                          <p className="btn-details">
                            <i className="fa fa-list"></i>
                            <a href="#" className="hidden-sm">
                              More details
                            </a>
                          </p>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="col-item">
                      <div className="photo">
                        <img
                          src="http://placehold.it/350x260"
                          className="img-responsive"
                          alt="a"
                        />
                      </div>
                      <div className="info">
                        <div className="row">
                          <div className="price col-md-6">
                            <h5>Product with Variants</h5>
                            <h5 className="price-text-color">$149.99</h5>
                          </div>
                          <div className="rating hidden-sm col-md-6">
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                        <div className="separator clear-left">
                          <p className="btn-add">
                            <i className="fa fa-shopping-cart"></i>
                            <a href="#" className="hidden-sm">
                              Add to cart
                            </a>
                          </p>
                          <p className="btn-details">
                            <i className="fa fa-list"></i>
                            <a href="#" className="hidden-sm">
                              More details
                            </a>
                          </p>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="col-item">
                      <div className="photo">
                        <img
                          src="http://placehold.it/350x260"
                          className="img-responsive"
                          alt="a"
                        />
                      </div>
                      <div className="info">
                        <div className="row">
                          <div className="price col-md-6">
                            <h5>Product with Variants</h5>
                            <h5 className="price-text-color">$199.99</h5>
                          </div>
                          <div className="rating hidden-sm col-md-6">
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                        <div className="separator clear-left">
                          <p className="btn-add">
                            <i className="fa fa-shopping-cart"></i>
                            <a href="#" className="hidden-sm">
                              Add to cart
                            </a>
                          </p>
                          <p className="btn-details">
                            <i className="fa fa-list"></i>
                            <a href="#" className="hidden-sm">
                              More details
                            </a>
                          </p>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row">
            <div className="col-md-9">
              <h3>Carousel Product Cart Slider</h3>
            </div>
            <div className="col-md-3">
              {/* <!-- Controls --> */}
              <div className="controls pull-right hidden-xs">
                <a
                  className="left fa fa-chevron-left btn btn-primary"
                  href="#carousel-example-generic"
                  data-slide="prev"
                ></a>
                <a
                  className="right fa fa-chevron-right btn btn-primary"
                  href="#carousel-example-generic"
                  data-slide="next"
                ></a>
              </div>
            </div>
          </div>
          <div
            id="carousel-example-generic"
            className="carousel slide hidden-xs"
            data-ride="carousel"
          >
            {/* <!-- Wrapper for slides --> */}
            <div className="carousel-inner">
              <div className="item active">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="col-item">
                      <div className="photo">
                        <img
                          src="http://placehold.it/350x260"
                          className="img-responsive"
                          alt="a"
                        />
                      </div>
                      <div className="info">
                        <div className="row">
                          <div className="price col-md-6">
                            <h5>Sample Product</h5>
                            <h5 className="price-text-color">$199.99</h5>
                          </div>
                          <div className="rating hidden-sm col-md-6">
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                        <div className="separator clear-left">
                          <p className="btn-add">
                            <i className="fa fa-shopping-cart"></i>
                            <a href="#" className="hidden-sm">
                              Add to cart
                            </a>
                          </p>
                          <p className="btn-details">
                            <i className="fa fa-list"></i>
                            <a href="#" className="hidden-sm">
                              More details
                            </a>
                          </p>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="col-item">
                      <div className="photo">
                        <img
                          src="http://placehold.it/350x260"
                          className="img-responsive"
                          alt="a"
                        />
                      </div>
                      <div className="info">
                        <div className="row">
                          <div className="price col-md-6">
                            <h5>Product Example</h5>
                            <h5 className="price-text-color">$249.99</h5>
                          </div>
                          <div className="rating hidden-sm col-md-6"></div>
                        </div>
                        <div className="separator clear-left">
                          <p className="btn-add">
                            <i className="fa fa-shopping-cart"></i>
                            <a href="#" className="hidden-sm">
                              Add to cart
                            </a>
                          </p>
                          <p className="btn-details">
                            <i className="fa fa-list"></i>
                            <a href="#" className="hidden-sm">
                              More details
                            </a>
                          </p>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="col-item">
                      <div className="photo">
                        <img
                          src="http://placehold.it/350x260"
                          className="img-responsive"
                          alt="a"
                        />
                      </div>
                      <div className="info">
                        <div className="row">
                          <div className="price col-md-6">
                            <h5>Next Sample Product</h5>
                            <h5 className="price-text-color">$149.99</h5>
                          </div>
                          <div className="rating hidden-sm col-md-6">
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                        <div className="separator clear-left">
                          <p className="btn-add">
                            <i className="fa fa-shopping-cart"></i>
                            <a href="#" className="hidden-sm">
                              Add to cart
                            </a>
                          </p>
                          <p className="btn-details">
                            <i className="fa fa-list"></i>
                            <a href="#" className="hidden-sm">
                              More details
                            </a>
                          </p>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="col-item">
                      <div className="photo">
                        <img
                          src="http://placehold.it/350x260"
                          className="img-responsive"
                          alt="a"
                        />
                      </div>
                      <div className="info">
                        <div className="row">
                          <div className="price col-md-6">
                            <h5>Product with Variants</h5>
                            <h5 className="price-text-color">$199.99</h5>
                          </div>
                          <div className="rating hidden-sm col-md-6">
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                        <div className="separator clear-left">
                          <p className="btn-add">
                            <i className="fa fa-shopping-cart"></i>
                            <a href="#" className="hidden-sm">
                              Add to cart
                            </a>
                          </p>
                          <p className="btn-details">
                            <i className="fa fa-list"></i>
                            <a href="#" className="hidden-sm">
                              More details
                            </a>
                          </p>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="col-item">
                      <div className="photo">
                        <img
                          src="http://placehold.it/350x260"
                          className="img-responsive"
                          alt="a"
                        />
                      </div>
                      <div className="info">
                        <div className="row">
                          <div className="price col-md-6">
                            <h5>Grouped Product</h5>
                            <h5 className="price-text-color">$249.99</h5>
                          </div>
                          <div className="rating hidden-sm col-md-6"></div>
                        </div>
                        <div className="separator clear-left">
                          <p className="btn-add">
                            <i className="fa fa-shopping-cart"></i>
                            <a href="#" className="hidden-sm">
                              Add to cart
                            </a>
                          </p>
                          <p className="btn-details">
                            <i className="fa fa-list"></i>
                            <a href="#" className="hidden-sm">
                              More details
                            </a>
                          </p>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="col-item">
                      <div className="photo">
                        <img
                          src="http://placehold.it/350x260"
                          className="img-responsive"
                          alt="a"
                        />
                      </div>
                      <div className="info">
                        <div className="row">
                          <div className="price col-md-6">
                            <h5>Product with Variants</h5>
                            <h5 className="price-text-color">$149.99</h5>
                          </div>
                          <div className="rating hidden-sm col-md-6">
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="price-text-color fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                        <div className="separator clear-left">
                          <p className="btn-add">
                            <i className="fa fa-shopping-cart"></i>
                            <a href="#" className="hidden-sm">
                              Add to cart
                            </a>
                          </p>
                          <p className="btn-details">
                            <i className="fa fa-list"></i>
                            <a href="#" className="hidden-sm">
                              More details
                            </a>
                          </p>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .col-item {
          border: 1px solid #e1e1e1;
          border-radius: 5px;
          background: #fff;
        }
        .col-item .photo img {
          margin: 0 auto;
          width: 100%;
        }

        .col-item .info {
          padding: 10px;
          border-radius: 0 0 5px 5px;
          margin-top: 1px;
        }

        .col-item:hover .info {
          background-color: #f5f5dc;
        }
        .col-item .price {
          /*width: 50%;*/
          float: left;
          margin-top: 5px;
        }

        .col-item .price h5 {
          line-height: 20px;
          margin: 0;
        }

        .price-text-color {
          color: #219fd1;
        }

        .col-item .info .rating {
          color: #777;
        }

        .col-item .rating {
          /*width: 50%;*/
          float: left;
          font-size: 17px;
          text-align: right;
          line-height: 52px;
          margin-bottom: 10px;
          height: 52px;
        }

        .col-item .separator {
          border-top: 1px solid #e1e1e1;
        }

        .clear-left {
          clear: left;
        }

        .col-item .separator p {
          line-height: 20px;
          margin-bottom: 0;
          margin-top: 10px;
          text-align: center;
        }

        .col-item .separator p i {
          margin-right: 5px;
        }
        .col-item .btn-add {
          width: 50%;
          float: left;
        }

        .col-item .btn-add {
          border-right: 1px solid #e1e1e1;
        }

        .col-item .btn-details {
          width: 50%;
          float: left;
          padding-left: 10px;
        }
        .controls {
          margin-top: 20px;
        }
        [data-slide="prev"] {
          margin-right: 10px;
        }
      `}</style>
    </>
  );
};

export default RecommendedProductAlt;
