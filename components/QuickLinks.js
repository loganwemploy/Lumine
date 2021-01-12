import React from "react";
import Head from "next/head";
import { Col, Row, Container } from "react-bootstrap";

const QuickLinks = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css"
        />
      </Head>
      <section id="QuickLinks">
        <Container className="container">
          <Row className="row">
            <Col lg={12} className="col-lg-12 text-center">
              <h2>Quick Links</h2>
              <hr />
            </Col>
          </Row>
          <Row className="row">
            <Col sm={4} className="col-sm-4 portfolio-item">
              <a
                href="#"
                className="portfolio-link text-center"
                data-toggle="modal"
              >
                <span className="fa fa-fw fa-user" aria-hidden="true"></span>
              </a>
              <article className="portfolio-item-One">
                <header>
                  <h3>Link Option One</h3>
                </header>
                <p>Link Option One.</p>
              </article>
            </Col>
            <Col sm={4} className="col-sm-4 portfolio-item">
              <a
                href="#"
                className="portfolio-link text-center"
                data-toggle="modal"
              >
                <span
                  className="fa fa-fw fa-shopping-cart"
                  aria-hidden="true"
                  title="This symbolizes I Like to design and develop websites
                        "
                ></span>
              </a>
              <article className="portfolio-item-Two">
                <header>
                  <h3>Link Option Two</h3>
                </header>
                <p>Link Option Two.</p>
              </article>
            </Col>
            <Col sm={4} className="col-sm-4 portfolio-item">
              <a
                href="#"
                className="portfolio-link text-center"
                data-toggle="modal"
              >
                <span
                  className="fa fa-fw fa-truck"
                  aria-hidden="true"
                  title="This symbolizes I Love to capture moments
                        "
                ></span>
              </a>
              <article className="portfolio-item-Three">
                <header>
                  <h3>Link Option Three</h3>
                </header>
                <p>Link Option Three.</p>
              </article>
            </Col>
          </Row>
        </Container>
      </section>
      <div>
        <hr className="loc-hr" />
      </div>

      <style jsx>{`
        hr.star-light,
        hr.star-primary {
          margin: 20px auto 30px;
          padding: 0;
          max-width: 250px;
          border: 0;
          border-top: solid 5px;
          text-align: center;
        }

    

        hr.star-light {
          border-color: #212121;
        }

        hr.star-light:after {
          color: #212121;
          background-color: #fdd200;
        }

        hr.star-primary {
          border-color: #212121;
        }

        hr.star-primary:after {
          color: #212121;
          background-color: #fff;
        }

        .img-centered {
          margin: 0 auto;
        }

        header {
          text-align: center;
          color: #212121;
        }
        article > p {
          text-align: center;
          margin: auto;
        }

        header .container {
          padding-top: 100px;
          padding-bottom: 50px;
        }

        header img {
          display: block;
          margin: 0 auto 20px auto;
        }
        #QuickLinks .portfolio-link .fa {
          font-size: 10em;
          text-align: center;
          margin: auto;
          padding: 10px 14px;
          color: #212121;
          border-radius: 6px;
          background-color: #f7cc01;
          position: relative;
          left: 50%;
          transform: translate(-50%, 0%);
        }

        .seeMore-btn .fa,
        #portfolio .fa,
        .contact-btn .fa {
          padding-right: 5px;
        }

        #QuickLinks {
          margin-top: -6em;
        }
      `}</style>
    </>
  );
};

export default QuickLinks;
