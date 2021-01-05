import React from "react";

const ReviewsAltv2 = () => {
  return (
    <>
      <div className="detailBox">
        <div className="titleBox">
          <label>Product's Reviews</label>
        </div>
        <div className="reviewBox">
          <p className="topReview">
            Best foot forward featured review goes here
          </p>
        </div>
        <div className="actionBox">
          <ul className="reviewList">
            <li>
              <div className="reviewerImage">
                <img src="http://placekitten.com/50/50" />
              </div>
              <div className="reviewText">
                <p className="">Hello this is a test review.</p>{" "}
                <span className="date sub-text">on March 5th, 2020</span>
              </div>
            </li>
            <li>
              <div className="reviewerImage">
                <img src="http://placekitten.com/45/45" />
              </div>
              <div className="reviewText">
                <p className="">
                  Hello this is a test review and this review is particularly
                  very long and it goes on and on and on.
                </p>{" "}
                <span className="date sub-text">on March 5th, 2020</span>
              </div>
            </li>
            <li>
              <div className="reviewerImage">
                <img src="http://placekitten.com/40/40" />
              </div>
              <div className="reviewText">
                <p className="">Hello this is a test review.</p>{" "}
                <span className="date sub-text">on March 5th, 2020</span>
              </div>
            </li>
          </ul>
          <form className="form-inline" role="form">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Your reviews"
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary">Leave a Review</button>
            </div>
          </form>
        </div>
      </div>
      <style jsx>{`
        .detailBox {
          width: 75vw;
          border: 1px solid #bbb;
          margin: 50px auto 70px auto;
        }
        .titleBox {
          background-color: #fdfdfd;
          padding: 10px;
        }
        .titleBox label {
          color: #444;
          margin: 0;
          display: inline-block;
        }

        .reviewBox {
          padding: 10px;
          border-top: 1px dotted #bbb;
        }
        .reviewBox .form-group:first-child,
        .actionBox .form-group:first-child {
          width: 80%;
        }
        .reviewBox .form-group:nth-child(2),
        .actionBox .form-group:nth-child(2) {
          width: 18%;
        }
        .actionBox .form-group * {
          width: 100%;
        }
        .topReview {
          margin-top: 10px 0;
          font-weight: bold;
        }
        .reviewList {
          padding: 0;
          list-style: none;
          max-height: 200px;
          overflow: auto;
        }
        .reviewList li {
          margin: 0;
          margin-top: 10px;
        }
        .reviewList li > div {
          display: table-cell;
        }
        .reviewerImage {
          width: 30px;
          margin-right: 5px;
          height: 100%;
          float: left;
        }
        .reviewerImage img {
          width: 100%;
          border-radius: 50%;
        }
        .reviewText p {
          margin: 0;
        }
        .sub-text {
          color: #aaa;
          font-family: verdana;
          font-size: 11px;
        }
        .actionBox {
          border-top: 1px dotted #bbb;
          padding: 10px;
        }
      `}</style>
    </>
  );
};

export default ReviewsAltv2;
