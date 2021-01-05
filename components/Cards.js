import React from 'react'
import { Card, Button, Row, Col, Container } from "react-bootstrap";

const Cards = () => {
    return (
        <>
              <Container>
      {/* <ProductContent /> */}
     
      <p className="item-length">props.product.length product found</p>
      <Row>
       
          <Col xs={6} lg={4} sm={6}>
            <Card className="card-items">
            
              <div className="item-body">
                <Card.Img
                  alt="images-badge"
                  src="https://placehold.it/120x120.jpg"
                //   src={item.badgeImageUrl}
                  className="image-badge"
                />
                <Card.Text>item.name</Card.Text>
                <Card.Text>By item.shop.name</Card.Text>
                <Card.Text>item.price.formattedValue</Card.Text>
              </div>
            </Card>
          </Col>
      
      </Row>
      <div style={{ padding: "40px" }}>
       
          <Button
            size="lg"
            variant="outline-secondary"
            className="load-more-button"
            
          >
            Load More
          </Button>
  
      </div>
    </Container> 

    <style jsx>{`
        .subtite-text {
            padding: 15px;
          }
          
          .card-items {
            border: 0px;
          }
          
          .image-badge {
            padding-top: 5px;
            width: 75px;
            height: 32px;
          }
          
          .item-length {
            text-align: left;
            padding: 10px;
          }
          
          .item-body {
            text-align: left;
          }
          
          .btn-outline-secondary:hover,
          .btn-outline-secondary:not(:disabled):not(.disabled):active {
            background-color: #dc218a;
            border-color: #6c757d;
          }
          
    `}</style>
        </>
    )
}

export default Cards
