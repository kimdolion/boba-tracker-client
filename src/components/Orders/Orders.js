import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Row, Col } from 'react-bootstrap'

const styles = {
  orders: {
    backgroundColor: 'transparent',
    margin: '2rem'
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
      .then(responseData => setOrders(responseData.data.orders))
      .catch(console.error)
  }, [])

  const ordersJsx = orders.map(order => (
    <Col sm='6' md='3' lg='2' xl='1' key={order._id} style={styles.orders}>
      <Link to={`/orders/${order._id}`}>Title: {order.title} Location: {order.location}</Link>
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
