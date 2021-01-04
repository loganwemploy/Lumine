import React, { useState } from 'react'
import Link from 'next/link'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'

const ProductDetailAlt = () => {
    const [qty, setQty] = useState(1)
    const [rating, setRating] = useState(0)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [comment, setComment] = useState('')
  const [product, setProduct] = useState({id:'0123',image:'https://placehold.it/201x200.jpg',name:'productNum1',product:'01',price:'14.99',description:'this is the product description goes herereree',countInStock:1});
    return (
        <div className="all">
           <>
      {/* <Link className='btn btn-light my-3' href='/'>
        Go Back
      </Link> */}
      {loading ? (
        <Loader />
      ) : error ? (
       <h4>DANGER DANGER</h4>
      ) : (
        <>
          {/* <Meta title={product.name} /> */}
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  rating0---
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as='select'
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}

                  <ListGroup.Item>
                    <Button
                    
                      className='btn-block'
                      type='button'
                     
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h2>Reviews</h2>
              {/* {product.reviews.length === 0 && <Message>No Reviews</Message>} */}
              <ListGroup variant='flush'>
                  <ListGroup.Item >
                    <strong>review.name</strong>
                 
                    <p>review.createdAt.substring(0, 10)</p>
                    <p>review.comment</p>
                  </ListGroup.Item>
                {/* {product.reviews.map((review) => (
                ))} */}
                <ListGroup.Item>
                  <h2>Write a Customer Review</h2>
                 
                    <Form >
                      <Form.Group controlId='rating'>
                        <Form.Label>Rating</Form.Label>
                       <select>
                          <option value=''>Select a rating ...</option>
                          <option value='1'>1 - Poor</option>
                          <option value='2'>2 - Fair</option>
                          <option value='3'>3 - Good</option>
                          <option value='4'>4 - Very Good</option>
                          <option value='5'>5 - Excellent</option>
                       </select>
                       
                      </Form.Group>
                      <Form.Group controlId='comment'>
                        <Form.Label>Comment</Form.Label>
                       
                        
                      </Form.Group>
                      <Button
                        
                        type='submit'
                        variant='primary'
                      >
                        Submit
                      </Button>
                    </Form>
             
                    {/* <Message>
                      Please <Link href='/login'>sign in</Link> to write a review{' '}
                    </Message> */}
                
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </> 
    <style jsx>{`
    .all {
        padding: 2em 3em 2em 3em;
    }
    `}</style>
        </div>
    )
}

export default ProductDetailAlt
