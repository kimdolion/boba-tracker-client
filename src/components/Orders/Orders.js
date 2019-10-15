import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Row, Col } from 'react-bootstrap'

const styles = {
  orders: {
    background: 'white',
    border: '2px solid black',
    borderRadius: '5px',
    margin: '10px 5px',
    padding: '10px 15px'
  }
}

const Orders = ({ user, alert }) => {
  const [orders, setOrders] = useState([])
  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/orders`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then(responseData => {
        console.log(responseData)
        return responseData
      })
      .then(responseData => setOrders(responseData.data.orders))
      .catch(console.error)
  }, [])

  const ordersJsx = orders.map(order => (
    <Col sm='6' md='3' lg='2' xl='1' key={order._id} style={styles.orders}>
      <Link to={`/orders/${order._id}`}>Flavor: {order.flavor} Location: {order.location}</Link>
    </Col>
  ))

  return (
    <React.Fragment>
      <h1>Orders</h1>
      <Row>{ordersJsx}</Row>
    </React.Fragment>
  )
}

export default Orders
