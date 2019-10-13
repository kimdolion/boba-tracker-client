import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Button from 'react-bootstrap/Button'

const styles = {
  order: {
    background: 'darkgray',
    border: '2px solid black',
    borderRadius: '5px',
    margin: '10px 5px',
    padding: '10px 15px'
  }
}

const Order = ({ user, alerts, match }) => {
  const [order, setOrder] = useState(null)
  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/orders/${match.params.id}`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then(responseData => setOrder(responseData.data.order))
      .catch(console.error)
  }, [])

  if (!order) {
    return <p>...Loading</p>
  }
  return (
    <div style={ styles.order }>
      <h4 key={order.title}>Title: {order.title}</h4>
      <h5 key={order.flavor}>Flavor: {order.flavor}</h5>
      <li key={order.datePurchased}>Date Purchased: {order.datePurchased}</li>
      <li key={order.location}>Location: {order.location}</li>
      <li key={order.cost}>Cost: {order.cost}</li>
      <Button href={`#/orders/${match.params.id}/edit-order`} className='btn btn-warning m-2'>Edit</Button>
      <Link to="/orders" className='btn btn-dark m-2'>Back to all the Orders</Link>
    </div>
  )
}

export default withRouter(Order)
