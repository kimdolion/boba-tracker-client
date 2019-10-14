import React, { useState, useEffect } from 'react'
import { Link, withRouter, Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Button from 'react-bootstrap/Button'
import messages from '../AutoDismissAlert/messages'

const styles = {
  order: {
    background: 'darkgray',
    border: '2px solid black',
    borderRadius: '5px',
    margin: '10px 5px',
    padding: '10px 15px'
  }
}

const Order = ({ user, alert, match }) => {
  const [order, setOrder] = useState(null)
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/orders/${match.params.id}`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then(responseData => {
        let formattedDate = ''
        if (responseData.data.order.datePurchased) {
          const options = {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          }
          const dateObj = new Date(responseData.data.order.datePurchased)
          const offsetDate = new Date(dateObj.setMinutes(dateObj.getMinutes() + dateObj.getTimezoneOffset()))
          formattedDate = offsetDate.toLocaleDateString(undefined, options)
        }
        setOrder({ ...responseData.data.order, datePurchased: formattedDate
        })
      })
      .catch(console.error)
  }, [])
  const destroy = () => {
    axios({
      method: 'DELETE',
      url: `${apiUrl}/orders/${match.params.id}`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then(() => setDeleted(true))
      .then(() => {
        alert({ heading: 'Success!', message: messages.deleteSuccess, variant: 'success' })
      })
      .catch(console.error)
      .catch(() => alert({
        heading: 'Danger',
        message: messages.failure,
        variant: 'danger'
      }))
  }

  if (!order) {
    return <p>...Loading</p>
  }

  if (deleted) {
    return <Redirect to={ { pathname: '/orders' } } />
  }
  return (
    <div style={ styles.order }>
      <h4>Title: {order.title}</h4>
      <h5>Flavor: {order.flavor}</h5>
      <li>Date Purchased: {order.datePurchased}</li>
      <li>Toppings: {order.toppings}</li>
      <li>Location: {order.location}</li>
      <li>Cost: {order.cost}</li>
      <Button href={`#/orders/${match.params.id}/edit-order`} className='btn btn-warning m-2'>Edit</Button>
      <Button onClick={destroy} className='btn btn-danger m-2'>Delete</Button>
      <Link to="/orders" className='btn btn-dark m-2'>Back to all the Orders</Link>
    </div>
  )
}

export default withRouter(Order)
