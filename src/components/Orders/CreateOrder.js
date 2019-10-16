import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import OrderForm from './OrderForm'
import messages from '../AutoDismissAlert/messages'

const CreateOrder = ({ user, alert, handleCancel }) => {
  const orderObject = {
    flavor: '',
    toppings: [],
    datePurchased: '',
    location: '',
    cost: 0
  }
  const [created, setCreated] = useState(false)
  const [order, setOrder] = useState(orderObject)

  const handleChange = event => {
    event.persist()
    setOrder(order => ({ ...order, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      method: 'POST',
      url: `${apiUrl}/orders`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      },
      data: { order }
    })
      .then(responseData => {
        console.log(responseData)
        return responseData
      })
      .then(responseData => setCreated(responseData.data.order._id))
      .then(() => {
        alert({ heading: 'Success', message: messages.createSuccess, variant: 'success' })
      })
      .catch(console.error)
      .catch(() => alert({ heading: 'Failure', message: messages.failure, variant: 'danger' }))
  }

  if (created) {
    return <Redirect to={`/orders/${created}`} />
  }

  return (
    <OrderForm
      order={order}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  )
}

export default CreateOrder
