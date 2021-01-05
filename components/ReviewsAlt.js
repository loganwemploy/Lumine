import React from "react";

const ReviewsAlt = () => {
  return (
    <>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <img
            src="https://dummyimage.com/60x60/666/ffffff&text=Product"
            className="img-rounded"
          />
          <div className="review-block-name">
            <a href="#">ProductReviewer</a>
          </div>
          <div className="review-block-date">
            January 4, 2021
            <br />1 day ago
          </div>
        </div>
        <div className="col-sm-9">
          <div className="review-block-rate">
            <button
              type="button"
              className="btn btn-warning btn-xs"
              aria-label="Left Align"
            >
              <span
                className="glyphicon glyphicon-star"
                aria-hidden="true"
              ></span>
            </button>
            <button
              type="button"
              className="btn btn-warning btn-xs"
              aria-label="Left Align"
            >
              <span
                className="glyphicon glyphicon-star"
                aria-hidden="true"
              ></span>
            </button>
            <button
              type="button"
              className="btn btn-warning btn-xs"
              aria-label="Left Align"
            >
              <span
                className="glyphicon glyphicon-star"
                aria-hidden="true"
              ></span>
            </button>
            <button
              type="button"
              className="btn btn-default btn-grey btn-xs"
              aria-label="Left Align"
            >
              <span
                className="glyphicon glyphicon-star"
                aria-hidden="true"
              ></span>
            </button>
            <button
              type="button"
              className="btn btn-default btn-grey btn-xs"
              aria-label="Left Align"
            >
              <span
                className="glyphicon glyphicon-star"
                aria-hidden="true"
              ></span>
            </button>
          </div>
          <div className="review-block-title">this was nice in buy</div>
          <div className="review-block-description">
            this was nice in buy. this was nice in buy. this was nice in buy.
            this was nice in buy this was nice in buy this was nice in buy this
            was nice in buy this was nice in buy
          </div>
        </div>
      </div>
      <style jsx>{`
        .row {
          padding: 2em 3em;
        }
        body {
          padding-top: 70px;
        }
        .btn-grey {
          background-color: #d8d8d8;
          color: #fff;
        }
        .rating-block {
          background-color: #fafafa;
          border: 1px solid #efefef;
          padding: 15px 15px 20px 15px;
          border-radius: 3px;
        }
        .bold {
          font-weight: 700;
        }
        .padding-bottom-7 {
          padding-bottom: 7px;
        }

        .review-block {
          background-color: #fafafa;
          border: 1px solid #efefef;
          padding: 15px;
          border-radius: 3px;
          margin-bottom: 15px;
        }
        .review-block-name {
          font-size: 12px;
          margin: 10px 0;
        }
        .review-block-date {
          font-size: 12px;
        }
        .review-block-rate {
          font-size: 13px;
          margin-bottom: 15px;
        }
        .review-block-title {
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .review-block-description {
          font-size: 13px;
        }
      `}</style>
    </>
  );
};

export default ReviewsAlt;
