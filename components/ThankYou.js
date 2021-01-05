import React from "react";

const ThankYou = () => {
  return (
    <>
      <div className="jumbotron text-center">
        <h1 className="display-3">Thank You!</h1>
        <p className="lead">
          <strong>Please check your email</strong> for further instructions on
          how to complete the complete the test test.
        </p>
        <hr />
        <p>
          Having trouble? <a href="">Contact us</a>
        </p>
        <p className="lead">
          <a className="btn btn-primary btn-sm" href="#" role="button">
            Continue to homepage
          </a>
        </p>
      </div>
    </>
  );
};

export default ThankYou;
