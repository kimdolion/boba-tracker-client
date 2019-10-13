import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const styles = {
  orders: {
    marginBottom: '2rem',
    padding: '2px 5px'
  }
}

const Orders = ({ user, alerts }) => {
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
    <div key={order._id} style={styles.orders}>
      <Link to={`/orders/${order._id}`} className='btn btn-info'>Title: {order.title}</Link>
    </div>
  ))

  return (
    <React.Fragment>
      <h1>Orders</h1>
      <ul style={{ listStyleType: 'none' }}>{ordersJsx} </ul>
    </React.Fragment>
  )
}

export default Orders
