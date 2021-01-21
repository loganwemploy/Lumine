import React, { useState } from "react";
import { Form } from "react-bootstrap";
import BreadCrumbs from "./BreadCrumbs";

const ProductDetailAltv2 = ({filtered}) => {
  const [isChecked, setIsChecked] = useState(true);
  console.log('props',filtered)
  return (
    <>
         {/* <BreadCrumbs /> */}
      <div className="section-fluid-main all">
        <div className="section">
          <div className="info-wrap mob-margin">
            <p className="title-up">Branded Corporate Tshirt</p>
            {/* <h2>Gildan Comfort Tee {isChecked}</h2> */}
            <h2 style={{color: '#efefef'}}>{filtered[0].name}</h2>
            <h4>
              $24 <span>$37</span>
            </h4>
            <div className="section-fluid">
              <input
                className="desc-btn"
                type="radio"
                id="desc-1"
                name="desc-btn"
                checked
              />
              <label for="desc-1">Description</label>
              
              <input
                className="desc-btn"
                type="radio"
                id="desc-2"
                name="desc-btn"
              />
              <label for="desc-2">Details</label>
              <div className="section-fluid desc-sec accor-1">
                <p>
                  The tshirt construction is made of ash tree. Upholstery and
                  wood color at customer's request.
                </p>
              </div>
              <div className="section-fluid desc-sec accor-2">
                <div className="section-inline">
                  <p>
                    <span>76</span>cm
                    <br />
                    Lenght
                  </p>
                </div>
                <div className="section-inline">
                  <p>
                    <span>68</span>cm
                    <br />
                    Width
                  </p>
                </div>
                <div className="section-inline">
                  <p>
                    <span>87</span>cm
                    <br />
                    Height
                  </p>
                </div>
                <div className="section-inline">
                  <p>
                    <span>10</span>kg
                    <br />
                    Weight
                  </p>
                </div>
              </div>
            </div>
            <h6 style={{ transform: "translate3d(0,-10px,0)" }}>
              Choose Size:
            </h6>
            <Form>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Example select</Form.Label>
                <Form.Control as="select">
                  <option>small</option>
                  <option>medium</option>
                  <option>large</option>
                  <option>xlarge</option>
                  <option>2xlarge</option>
                </Form.Control>
              </Form.Group>
            </Form>
            <h5>Choose upholstery:</h5>
          </div>
          <div className="clearfix"></div>
          <input
            className="colorswatch-btn for-colorswatch-1"
            type="radio"
            id="colorswatch-1"
            name="colorswatch-btn"
            checked
            onClick={() => {
              setIsChecked(true);
            }}
          />
          <label className="first-color" for="colorswatch-1"></label>
          <input
            className="colorswatch-btn for-colorswatch-2"
            type="radio"
            id="colorswatch-2"
            name="colorswatch-btn"
          />
          <label className="colorswatch-2" for="colorswatch-2"></label>
          <input
            className="colorswatch-btn for-colorswatch-3"
            type="radio"
            id="colorswatch-3"
            name="colorswatch-btn"
          />
          {/* <label className="colorswatch-3" for="colorswatch-3"></label> 
	      	<input className="colorswatch-btn for-colorswatch-4" type="radio" id="colorswatch-4" name="colorswatch-btn"/>
	      	<label className="colorswatch-4" for="colorswatch-4"></label> 
	      	<input className="colorswatch-btn for-colorswatch-5" type="radio" id="colorswatch-5" name="colorswatch-btn"/>
	      	<label className="colorswatch-5" for="colorswatch-5"></label> 
	      	<input className="colorswatch-btn for-colorswatch-6" type="radio" id="colorswatch-6" name="colorswatch-btn"/>
	      	<label className="colorswatch-6" for="colorswatch-6"></label> 
	      	<div className="clearfix"></div> */}
          <div className="info-wrap">
            <a href="#" className="btn">
              <i className="uil uil-shopping-cart icon"></i> Add To Cart
            </a>
          </div>
          <div className="img-wrap tshirt-1"></div>
          <div className="img-wrap tshirt-2"></div>
          {/* <div className="img-wrap tshirt-3"></div>
	      	<div className="img-wrap tshirt-4"></div>
	      	<div className="img-wrap tshirt-5"></div>
	      	<div className="img-wrap tshirt-6"></div>		 */}
          <div className="back-color"></div>
          <div className="back-color tshirt-2"></div>
          {/* <div className="back-color tshirt-3"></div>	
	      	<div className="back-color tshirt-4"></div>	
	      	<div className="back-color tshirt-5"></div>	
	      	<div className="back-color tshirt-6"></div>	 */}

          {/* <a href="https://imsretail.com" className="logo" target="_blank">
            <img
              src="https://www.imsretail.com/wp-content/uploads/2020/01/Intergated_Merchandising_Solutions_Dark-1.png"
              alt=""
            />
          </a> */}
        </div>
      </div>
      <style jsx>{`
        .all {
          font-family: "Poppins", sans-serif;
          font-weight: 400;
          font-size: 15px;
          line-height: 1.7;
          color: #fff;
          background-image: linear-gradient(196deg, #dcdcdc, #5f7991);
          min-height: 100vh;
          margin: 0.5em 0 0 0;
          padding: 0;
          overflow-y: hidden;
        }
        p {
          font-family: "Poppins", sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 1.32;
          color: #fff;
          margin: 0;
        }
        .section-fluid-main {
          position: relative;
          display: block;
          width: 100%;
          overflow: hidden;
        }
        .section {
          position: relative;
          max-width: calc(100% - 40px);
          width: 860px;
          margin: 0 auto;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          padding: 100px 0;
        }
        .section-fluid {
          position: relative;
          width: 100%;
          display: block;
        }

        [type="radio"]:checked,
        [type="radio"]:not(:checked) {
          position: absolute;
          visibility: hidden;
        }
        .colorswatch-btn:checked + label,
        .colorswatch-btn:not(:checked) + label {
          position: relative;
          height: 40px;
          transition: all 200ms linear;
          border-radius: 4px;
          width: 40px;
          overflow: hidden;
          border: none;
          cursor: pointer;
          color: #ffeba7;
          margin-right: 10px;
          box-shadow: 0 12px 35px 0 rgba(16, 39, 112, 0.25);
          z-index: 10;
          background-position: center;
          background-size: cover;
          border: 3px solid transparent;
        }
        .colorswatch-btn:checked + label {
          border-color: #434343;
          transform: scale(1.1);
        }
        label.first-color {
          margin-left: 500px;
          background-image: url("https://dl3.pushbulletusercontent.com/vuhMsr91md9WjwAN7rXjt4bzr2I0iVGs/137578364_1538381899693720_2086790160106281551_n.jpg");
        }
        label.colorswatch-2 {
          background-image: url("https://dl3.pushbulletusercontent.com/YF4fP8qncIl7mkKfooYfRua5u9ZIZcly/mat2.jpg");
        }
        label.colorswatch-3 {
          background-image: url("https://dl3.pushbulletusercontent.com/eAgUSUOGlxVbZw4BWwuLAYHkmV2mreeS/mat3.jpg");
        }
        label.colorswatch-4 {
          background-image: url("https://dl3.pushbulletusercontent.com/nkNEZZVUB9tMZClsMti4eOgeRBueFYZ9/mat4.jpg");
        }
        label.colorswatch-5 {
          background-image: url("https://dl3.pushbulletusercontent.com/6DF3hItZ1g2NxylPg8fzekFxODnZrYni/mat5.jpg");
        }
        label.colorswatch-6 {
          background-image: url("https://dl3.pushbulletusercontent.com/CWxBtdaSIjtCbT6gfjE3GOotXoInFTtu/mat6.jpg");
        }

        .img-wrap {
          position: absolute;
          top: 100px;
          left: 0;
          width: 500px;
          height: 410px;
          display: inline-block;
          z-index: 9;
          transition: all 550ms linear;
          transition-delay: 100ms;
          background-position: center top;
          background-size: 100%;
          background-repeat: no-repeat;
          background-image: url("https://dl3.pushbulletusercontent.com/vuhMsr91md9WjwAN7rXjt4bzr2I0iVGs/137578364_1538381899693720_2086790160106281551_n.jpg");
          opacity: 0;
        }
        .for-colorswatch-1:checked ~ .img-wrap.tshirt-1 {
          opacity: 1;
          animation: shake 0.8s cubic-bezier(0.26, 0.27, 0.19, 0.27) both;
          background-position: 0 -100px;
        }
        .img-wrap.tshirt-2 {
          background-image: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftshirt2u.com.my%2Fwp-content%2Fuploads%2F2017%2F03%2F63V00-5-1.png&f=1&nofb=1");
          background-position: 0 -10px;
        }
        .for-colorswatch-2:checked ~ .img-wrap.tshirt-2 {
          opacity: 1;
          animation: shake 0.8s cubic-bezier(0.26, 0.27, 0.19, 0.27) both;
        }
        .img-wrap.tshirt-3 {
          background-image: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dekke.com.my%2Fwp-content%2Fuploads%2F2017%2F01%2F63V00-3.png&f=1&nofb=1");
        }
        .for-colorswatch-3:checked ~ .img-wrap.tshirt-3 {
          opacity: 1;
          animation: shake 0.8s cubic-bezier(0.26, 0.27, 0.19, 0.27) both;
        }
        .img-wrap.tshirt-4 {
          background-image: url("https://tshirt2u.com.my/wp-content/uploads/2017/03/Aqua.png");
          background-position: 0 -67px;
        }
        .for-colorswatch-4:checked ~ .img-wrap.tshirt-4 {
          opacity: 1;
          animation: shake 0.8s cubic-bezier(0.26, 0.27, 0.19, 0.27) both;
        }
        .img-wrap.tshirt-5 {
          background-image: url("https://tshirt2u.com.my/wp-content/uploads/2017/03/5000-1-3-1024x1024.png");
        }
        .for-colorswatch-5:checked ~ .img-wrap.tshirt-5 {
          opacity: 1;
          animation: shake 0.8s cubic-bezier(0.26, 0.27, 0.19, 0.27) both;
        }
        .img-wrap.tshirt-6 {
          background-image: url("https://tshirt2u.com.my/wp-content/uploads/2017/03/63V00-2-1.png");
        }
        .for-colorswatch-6:checked ~ .img-wrap.tshirt-6 {
          opacity: 1;
          animation: shake 0.8s cubic-bezier(0.26, 0.27, 0.19, 0.27) both;
        }
        @keyframes shake {
          10%,
          90% {
            transform: translate3d(-1px, 0, 0) rotate(-1deg);
          }
          20%,
          80% {
            transform: translate3d(2px, 0, 0) rotate(2deg);
          }
          30%,
          50%,
          70% {
            transform: translate3d(-3px, 0, 0) rotate(-3deg);
          }
          40%,
          60% {
            transform: translate3d(3px, 0, 0) rotate(3deg);
          }
        }

        .back-color {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: block;
          z-index: 1;
          transition: all 250ms linear;
          transition-delay: 300ms;
        }
        .back-color.tshirt-2 {
          background-image: linear-gradient(196deg, #f1a9a9, #e66767);
          background-image: linear-gradient(196deg, #dcdcdc, #999);
          opacity: 0;
        }
        .for-colorswatch-2:checked ~ .back-color.tshirt-2 {
          opacity: 1;
        }
        .back-color.tshirt-3 {
          background-image: linear-gradient(196deg, #dcdcdc, #5f7991);
          opacity: 0;
        }
        .for-colorswatch-3:checked ~ .back-color.tshirt-3 {
          opacity: 1;
        }
        .back-color.tshirt-4 {
          background-image: linear-gradient(196deg, #97afc3, #6789a7);
          opacity: 0;
        }
        .for-colorswatch-4:checked ~ .back-color.tshirt-4 {
          opacity: 1;
        }
        .back-color.tshirt-5 {
          background-image: linear-gradient(196deg, #afa6a0, #8c7f76);
          opacity: 0;
        }
        .for-colorswatch-5:checked ~ .back-color.tshirt-5 {
          opacity: 1;
        }
        .back-color.tshirt-6 {
          background-image: linear-gradient(196deg, #aaadac, #838786);
          opacity: 0;
        }
        .for-colorswatch-6:checked ~ .back-color.tshirt-6 {
          opacity: 1;
        }

        .info-wrap {
          position: relative;
          margin-left: 500px;
          z-index: 10;
          display: block;
          text-align: left;
        }
        .title-up {
          font-family: "Poppins", sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 13px;
          line-height: 1.2;
          color: #fff;
          margin-top: -1.5em;
          margin-bottom: 5px;
        }
        h2 {
          font-family: "Poppins", sans-serif;
          font-weight: 800;
          font-size: 34px;
          line-height: 1.2;
          color: #fff;
          margin-top: 0;
          margin-bottom: 10px;
        }
        h4 {
          font-family: "Poppins", sans-serif;
          font-weight: 500;
          font-size: 26px;
          line-height: 1.2;
          color: #fff;
          margin-top: 0;
          margin-bottom: 30px;
        }
        h4 span {
          text-decoration: line-through;
          font-size: 20px;
          opacity: 0.6;
          padding-left: 15px;
        }
        h5 {
          font-family: "Poppins", sans-serif;
          font-weight: 600;
          font-size: 18px;
          line-height: 1.2;
          color: #fff;
          margin-top: 0;
          margin-bottom: 20px;
        }
        .desc-btn:checked + label,
        .desc-btn:not(:checked) + label {
          position: relative;
          transition: all 200ms linear;
          display: inline-block;
          border: none;
          cursor: pointer;
          color: #ffeba7;
          font-family: "Poppins", sans-serif;
          font-weight: 600;
          font-size: 18px;
          line-height: 1.2;
          color: #fff;
          margin-right: 25px;
          opacity: 0.5;
        }
        .desc-btn:checked + label {
          opacity: 1;
        }
        .desc-btn:not(:checked) + label:hover {
          opacity: 0.8;
        }

        .desc-sec {
          padding-top: 20px;
          padding-bottom: 30px;
          transition: all 250ms linear;
          opacity: 0;
          overflow: hidden;
          pointer-events: none;
          transform: translateY(20px);
        }
        .desc-sec.accor-2 {
          position: absolute;
          top: 25px;
          left: 0;
          width: 100%;
          z-index: 2;
        }
        #desc-1:checked ~ .desc-sec.accor-1 {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }
        #desc-2:checked ~ .desc-sec.accor-2 {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }
        .section-inline {
          position: relative;
          display: inline-block;
          margin-right: 20px;
        }
        .section-inline p span {
          font-size: 30px;
          line-height: 1.1;
        }

        .btn {
          position: relative;
          font-family: "Poppins", sans-serif;
          font-weight: 500;
          font-size: 14px;
          line-height: 2;
          height: 48px;
          border-radius: 4px;
          width: 210px;
          letter-spacing: 1px;
          display: -webkit-inline-flex;
          display: -ms-inline-flexbox;
          display: inline-flex;
          -webkit-align-items: center;
          -moz-align-items: center;
          -ms-align-items: center;
          align-items: center;
          -webkit-justify-content: center;
          -moz-justify-content: center;
          -ms-justify-content: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          overflow: hidden;
          background-color: transparent;
          color: #fff;
          box-shadow: 0 6px 15px 0 rgba(16, 39, 112, 0.15);
          transition: all 250ms linear;
          text-decoration: none;
          margin-top: 50px;
        }
        .icon {
          padding-right: 7px;
          font-size: 20px;
        }
        .btn:before {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          content: "";
          z-index: -1;
          background-color: #944852;
          transition: background-color 250ms 300ms ease;
        }
        .btn:hover {
          box-shadow: 0 12px 35px 0 rgba(16, 39, 112, 0.25);
          background-color: #000;
        }
        .for-colorswatch-2:checked ~ .info-wrap .btn:before {
          background-color: #1a1a1a;
        }
        .for-colorswatch-3:checked ~ .info-wrap .btn:before {
          background-color: #40566e;
        }
        .for-colorswatch-4:checked ~ .info-wrap .btn:before {
          background-color: #5e89b2;
        }
        .for-colorswatch-5:checked ~ .info-wrap .btn:before {
          background-color: #8c7f76;
        }
        .for-colorswatch-6:checked ~ .info-wrap .btn:before {
          background-color: #5d6160;
        }

        .clearfix {
          width: 100%;
        }
        .clearfix::after {
          display: block;
          clear: both;
          content: "";
        }

        .logo {
          position: fixed;
          top: 25px;
          left: 25px;
          display: block;
          z-index: 1000;
          transition: all 250ms linear;
        }
        .logo img {
          height: 26px;
          width: auto;
          display: block;
          transition: filter 250ms 700ms linear;
        }

        @media screen and (max-width: 991px) {
          .section {
            margin: 0 auto;
            text-align: center;
            max-width: calc(100% - 40px);
            width: 370px;
          }
          label.first-color {
            margin-left: 0;
          }
          .info-wrap {
            margin-left: 0;
            width: 370px;
            margin: 0 auto;
            text-align: center;
          }
          .img-wrap {
            width: 375px;
            height: 308px;
            left: 50%;
            margin-left: -190px;
          }
          .mob-margin {
            margin-top: 320px;
          }
          .desc-btn:checked + label,
          .desc-btn:not(:checked) + label {
            margin-right: 15px;
            margin-left: 15px;
          }
          .colorswatch-btn:checked + label,
          .colorswatch-btn:not(:checked) + label {
            height: 40px;
            width: 40px;
            margin: 5px auto;
            text-align: center;
          }
          .section-inline {
            margin: 0 5px;
          }
        }

        @media screen and (max-width: 575px) {
          .section {
            width: 280px;
          }
          .info-wrap {
            width: 280px;
          }
          .colorswatch-btn:checked + label,
          .colorswatch-btn:not(:checked) + label {
            height: 30px;
            width: 30px;
          }
          .section-inline p span {
            font-size: 24px;
            line-height: 1.1;
          }
          .section-inline p {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
};

export default ProductDetailAltv2;
