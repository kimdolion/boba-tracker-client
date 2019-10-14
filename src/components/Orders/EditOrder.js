import React, { useState, useEffect } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import OrderForm from './OrderForm'
import messages from '../AutoDismissAlert/messages'

const EditOrder = ({ user, match, alert, history }) => {
  const [order, setOrder] = useState({
    title: '',
    flavor: '',
    toppings: '',
    datePurchased: '',
    location: '',
    cost: ''
  })
  const [updated, setUpdated] = useState(false)

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

  const handleChange = event => {
    event.persist()
    setOrder(order => ({ ...order, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios({
      method: 'PATCH',
      url: `${apiUrl}/orders/${match.params.id}`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      },
      data: { order }
    })
      .then(() => setUpdated(true))
      .then(() => alert({ heading: 'Success', message: messages.updateSuccess, variant: 'success' }))
      .catch(() => alert({ heading: 'Danger', message: messages.failure, variant: 'danger' }))
      .catch(console.error)
  }
  if (updated) {
    return <Redirect to={`/orders/${match.params.id}`} />
  }

  return (
    <OrderForm
      order={order}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      cancelPath='/orders'
    />
  )
}

export default withRouter(EditOrder)
