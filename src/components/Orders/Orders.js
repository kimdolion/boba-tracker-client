import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Row, Col } from 'react-bootstrap'
import ModalContainer from '../General/Modal'

const styles = {
  header: {
    justifyContent: 'center',
    textAlign: 'center'
  },
  ordersEach: {
    background: 'white',
    border: '2px solid black',
    borderRadius: '5px',
    textAlign: 'center',
    margin: '20px 15px',
    padding: '10px 15px'
  },
  orders: {
    justifyContent: 'center'
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
    <Col sm='6' md='4' lg='3' key={order._id} style={styles.ordersEach}>
      <Link to={`/orders/${order._id}`}>Flavor: {order.flavor} <br /> Location: {order.location}</Link>
    </Col>
  ))

  return (
    <React.Fragment>
      <Row style={ styles.header }>
        <Col>
          <h1>Orders</h1>
        </Col>
        <Col>
          <ModalContainer modalType="create" alert={alert} user={user} />
        </Col>
      </Row>
      <Row style={ styles.orders }>{ordersJsx}</Row>
    </React.Fragment>
  )
}

export default Orders
