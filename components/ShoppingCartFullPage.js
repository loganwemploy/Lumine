import React, {useState} from 'react'
import Link from 'next/link'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'


const ShoppingCartFullPage = () => {
    const [cartItems, setcartItems] = useState([{id:'0123',image:'https://placehold.it/201x200.jpg',name:'productNum1',product:'01',price:'14.99'},{id:'2234',image:'https://placehold.it/202x200.jpg',name:'productNum2',product:'02',price:'10.99'}]);
    return (
        <div>
             <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
         
            <>Your cart is empty <Link to='/'>Go Back</Link></>
          
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link href={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                  {/* control quantity */}

                  </Col>
                  <Col md={2}>
                  
                <i className='fas fa-trash'>trash icon</i>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
              <h2>
                Subtotal : $25.98
                items(2)
              </h2>
           
            <ListGroup.Item>
            <Button
                type='button'
                className='btn-block'
              >
            Proceed To Checkout
            </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row> 

        </div>
    )
}

export default ShoppingCartFullPage
