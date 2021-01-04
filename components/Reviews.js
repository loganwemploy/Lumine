import React from 'react'
import { Col, Row, Container } from "react-bootstrap";

const Reviews = () => {
    return (
        <>
          <Container className="container" style={{border:'3px solid rgba(0,0,0,0.12)',padding:'5px 7px 5px 7px', borderRadius:'1em',maxWidth:'75vw'}}>
  <Row className="row">
    <Col md={8} className="col-md-8">
      <h2 className="page-header">Reviews</h2>
        <section className="comment-list">
          {/* <!-- Review --> */}
          <Row className="row">
            <Col md={2} sm={2} className="col-md-2 col-sm-2 hidden-xs">
              <figure className="thumbnail">
                <img className="img-responsive" style={{borderRadius:'1em',padding: '7px'}} src="https://placehold.it/160x160.jpg" />
                {/* <figcaption className="text-center">username</figcaption> */}
              </figure>
            </Col>
            <Col md={10} sm={10} className="col-md-10 col-sm-10">
              <div className="panel panel-default">
                <div className="panel-body" style={{maxWidth:'88%'}}>
                  <header className="text-left">
                    <div className="comment-user"><i className="fa fa-user"></i> <b>This Hoodie was the highest of quality, will buy again.</b></div>
                    <time className="comment-date" datetime="12-1-2021 01:05"><i className="fa fa-clock-o"></i>Jan 12, 2020</time>
                  </header>
                  <div className="comment-post">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <p className="text-right"><a href="#" className="btn btn-primary btn-sm"><i className="fa fa-reply"></i> leave a review</a></p>
                </div>
              </div>
            </Col>
          </Row>
      
        </section>
    </Col>
  </Row>
</Container>
  <style jsx>{`
  .comment-list .row {
    margin-bottom: 0px;
  }
  .comment-list .panel .panel-heading {
    padding: 4px 15px;
    position: absolute;
    border:none;

    border-top-right-radius:0px;
    top: 1px;
  }
  .comment-list .panel .panel-heading.right {
    border-right-width: 0px;

    border-top-left-radius:0px;
    right: 16px;
  }
  .comment-list .panel .panel-heading .panel-body {
    padding-top: 6px;
  }
  .comment-list figcaption {
   
    word-wrap: break-word;
  }

  @media (min-width: 768px) {
    .comment-list .arrow:after, .comment-list .arrow:before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-color: transparent;
    }
    .comment-list .panel.arrow.left:after, .comment-list .panel.arrow.left:before {
      border-left: 0;
    }
 
    .comment-list .panel.arrow.left:before {
      left: 0px;
      top: 30px;
      /*Use boarder color of panel*/
      border-right-color: inherit;
      border-width: 16px;
      display: none;    
    }
    
    .comment-list .panel.arrow.left:after {
      left: 1px;
      top: 31px;

      border-right-color: #FFFFFF;
      border-width: 15px;
      display: none;    
    }
  
    .comment-list .panel.arrow.right:before {
        display: none;
      right: -16px;
      top: 30px;
      /*Use boarder color of panel*/
      border-left-color: inherit;
      border-width: 16px;
    }
  
    .comment-list .panel.arrow.right:after {
      right: -14px;
      top: 31px;
      display: none;
   
      border-left-color: #FFFFFF;
      border-width: 15px;
    }
  }
  .comment-list .comment-post {
    margin-top: 6px;
  }

  .comment-date {
      color: #999;
  }
  .panel-body {
    margin-left: 7em;
  }
  @media screen and (max-width:758px){
      .panel-body {
        margin-left: 0.68em;
      }
      
  }
  `}</style>
        </>
    )
}

export default Reviews
