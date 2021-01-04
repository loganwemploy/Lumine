import React from 'react'
import { Col, Row, Container } from "react-bootstrap";

const ItemThumbnails = () => {
    return (
        <>
        <Container>
            <Row className="preview">
                <ul className="preview-thumbnail nav nav-tabs">
                  <li className="active">
                    <a data-target="#pic-1" data-toggle="tab">
                      <img src="https://placehold.it/200x200.jpg" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-2" data-toggle="tab">
                      <img src="https://via.placeholder.com/650/9f9f9f" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-3" data-toggle="tab">
                      <img src="https://via.placeholder.com/650/9f9f9f" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-4" data-toggle="tab">
                      <img src="https://via.placeholder.com/650/9f9f9f" />
                    </a>
                  </li>
                </ul>
              </Row>  
        </Container>
        <style jsx>{`
        .preview {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
           
          }
          @media screen and (max-width: 996px) {
            .preview {
              margin-bottom: 20px;
            }
          }
        
          .preview-pic {
            -webkit-box-flex: 1;
            -webkit-flex-grow: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
          }
        
          .preview-thumbnail.nav-tabs {
            border: none;
            gap: 1px;
            margin: 14px auto 7px auto;
            width: 92%;
          }
          .preview-thumbnail.nav-tabs li {
            width: 24%;
            margin:0 auto 0 auto;
            padding: 0 0.12em 0 0.12em;
          }
          .preview-thumbnail.nav-tabs li img {
            max-width: 100%;
            border-radius: 8px;
            display: block;
          }
          .preview-thumbnail.nav-tabs li a {
            padding: 0;
            margin: 0;
          }
          .preview-thumbnail.nav-tabs li:last-of-type {
            margin-right: 0;
          }
        
          .tab-content {
            overflow: hidden;
          }
          .tab-content img {
            width: 100%;
            -webkit-animation-name: opacity;
            animation-name: opacity;
            -webkit-animation-duration: 0.3s;
            animation-duration: 0.3s;
          }
        
        
        `}
        </style>
        </>
    )
}

export default ItemThumbnails
