import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Row, Col } from 'react-bootstrap'
import ModalContainer from '../General/Modal'
import BubbleTeaSvg from './BubbleTea'
import { renderToStaticMarkup } from 'react-dom/server'

const svgString = encodeURIComponent(renderToStaticMarkup(<BubbleTeaSvg />))

const styles = {
  header: {
    justifyContent: 'center',
    textAlign: 'center'
  },
  ordersEach: {
    backgroundImage: `url("data:image/svg+xml,${svgString}")`,
    backgroundRepeat: 'noRepeat',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    height: '20rem',
    justifyContent: 'center',
    margin: '15px',
    padding: '0',
    textAlign: 'center'
  },
  link: {
    color: 'black'
  },
  orders: {
    justifyContent: 'center',
    margin: '2px'
  }
}

const OwnerOrders = ({ user, alert }) => {
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

  const ordersJsx = orders.filter(function (order) { return order.owner._id === user._id }).map(order => (
    <Col sm='6' md='3' key={order._id} style={ styles.ordersEach }>
      <Link to={`/orders/${order._id}`} style={ styles.link }>Flavor: {order.flavor} <br /> Cost: {order.cost}</Link>
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

export default OwnerOrders
