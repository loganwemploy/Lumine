
import React, {useState} from 'react'
import { Table, Button } from 'react-bootstrap'
import Link from 'next/link'

const OrderInfo = () => {
    const [loading, setLoading] = useState(false);
    const [orders, setOrders] = useState([
        {id:'0123',image:'https://placehold.it/201x200.jpg',user:'userA',name:'productNum1',totalPrice:'14.99'},{id:'2234',image:'https://placehold.it/202x200.jpg',user:'userB',name:'productNum2',totalPrice:'14.99'}
    ]);
    return (
        <div>

        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.user}</td>
                <td>order.createdAt</td>
                <td>${order.totalPrice}</td>
                <td>
                 
                    order.paidAt.substring(0, 10)
                  
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                
                </td>
                <td>
                 
                </td>
                <td>
                  <Link href={`/order/${order._id}`}>
                    <Button variant='light' className='btn-sm'>
                      Details
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
         
        </div>
    )
}

export default OrderInfo
