import React, { useState, useEffect } from 'react'
import { Link, withRouter, Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Button from 'react-bootstrap/Button'
import { Row, Col } from 'react-bootstrap'
import messages from '../AutoDismissAlert/messages'
import ModalContainer from '../General/Modal'

const styles = {
  order: {
    background: 'white',
    border: '2px solid black',
    borderRadius: '5px',
    listStyleType: 'none',
    margin: '10px 5px',
    padding: '10px 15px'
  },
  color: {
    display: 'inline-flex'
  },
  colorBox: {
    border: 'none',
    minHeight: '2rem',
    marginLeft: '5px',
    maxWidth: '75vw',
    padding: '0',
    width: '50rem'
  },
  list: {
    marginLeft: '-2rem'
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
      .catch(() => alert({ heading: 'Failure', message: messages.failure, variant: 'danger' }))
  }
  if (!order) {
    return <p>...Loading</p>
  }

  if (deleted) {
    return <Redirect to='/my-orders' />
  }
  const ownerButtons = (
    <div>
      <Link to="/orders" className='btn btn-dark m-2' aria-current>Back to All Orders</Link>
      <Link to="/my-orders" className='btn btn-secondary m-2' aria-current>Back to My Orders</Link>
      <ModalContainer modalType="edit" alert={alert} user={user} />
      <Button onClick={destroy} className='btn btn-danger m-2'>Delete</Button>
    </div>
  )
  const allButton = (
    <div>
      <Link to="/orders" className='btn btn-dark m-2' aria-current>Back to All Orders</Link>
    </div>
  )

  const toppingsJsx = order.toppings.map(topping => (
    <li key={topping.value}>{topping.value}</li>
  ))

  return (
    <div style={ styles.order }>
      <h4>Flavor: {order.flavor}</h4>
      <Row>
        <Col s='12' md='6'>
          Toppings:
          <ul>{toppingsJsx}</ul>
        </Col>
        <Col s='12' md='6'>
          <li>Date Purchased: {order.datePurchased}</li>
          <li>Location: {order.location}</li>
          <li>Cost: ${order.cost}</li>
        </Col>
      </Row>
      <div style={ styles.color }>
        <li>Color: <input type="color" style={ styles.colorBox } value={order.color} disabled /></li>
      </div>
      { user && user._id === order.owner._id ? ownerButtons : allButton }
    </div>
  )
}

export default withRouter(Order)
