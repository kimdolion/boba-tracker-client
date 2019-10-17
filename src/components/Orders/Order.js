import React, { useState, useEffect } from 'react'
import { Link, withRouter, Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Button from 'react-bootstrap/Button'
import messages from '../AutoDismissAlert/messages'
import ModalContainer from '../General/Modal'

const styles = {
  order: {
    background: 'white',
    border: '2px solid black',
    borderRadius: '5px',
    margin: '10px 5px',
    padding: '10px 15px'
  }
}

const Order = ({ user, alert, match }) => {
  const orderObject = {
    flavor: '',
    toppings: [],
    datePurchased: '',
    location: '',
    cost: 0,
    color: '#c49c73',
    owner: {}
  }
  const [order, setOrder] = useState(orderObject)
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
        console.log(responseData)
        return responseData
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
      .catch(() => alert({ heading: 'Failure', message: messages.failure, variant: 'danger' }))
  }
  if (!order) {
    return <p>...Loading</p>
  }

  if (deleted) {
    return <Redirect to={ { pathname: '/orders' } } />
  }
  const ownerButtons = (
    <div>
      <Link to="/orders" className='btn btn-dark m-2'>Back to All Orders</Link>
      <ModalContainer modalType="edit" alert={alert} user={user} />
      <Button onClick={destroy} className='btn btn-danger m-2'>Delete</Button>
    </div>
  )
  const allButton = (
    <Link to="/orders" className='btn btn-dark m-2'>Back to All Orders</Link>
  )
  return (
    <div style={ styles.order }>
      <h4>Flavor: {order.flavor}</h4>
      <li>Date Purchased: {order.datePurchased}</li>
      <li>Location: {order.location}</li>
      <li>Cost: {order.cost}</li>
      <li>Color: <input type="color" value={order.color} disabled /></li>
      { user && user._id === order.owner._id ? ownerButtons : allButton }
    </div>
  )
}

export default withRouter(Order)
