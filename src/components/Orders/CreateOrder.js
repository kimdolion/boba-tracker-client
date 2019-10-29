import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import OrderForm from './OrderForm'
import messages from '../AutoDismissAlert/messages'
// import { toppingOptions } from './ToppingOptions'

const CreateOrder = ({ user, alert, handleCancel }) => {
  const orderObject = {
    flavor: '',
    toppings: [],
    datePurchased: '',
    location: '',
    cost: 0,
    color: '#c49c73'
  }
  const [created, setCreated] = useState(false)
  const [order, setOrder] = useState(orderObject)

  const handleChange = event => {
    event.persist()
    setOrder(order => ({ ...order, [event.target.name]: event.target.value }))
  }

  const handleSelect = selectedArray => {
    setOrder({ ...order, toppings: selectedArray })
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
      .then(responseData => setCreated(responseData.data.order._id))
      // .then(handleCancel)
      // .then(() => {
      //   history.replace('/reload')
      //   history.replace(`/orders/${created}`)
      // })
      .then(() => {
        alert({ heading: 'Success', message: messages.createSuccess, variant: 'success' })
      })
      .catch(() => alert({ heading: 'Failure', message: messages.failure, variant: 'danger' }))
  }

  if (created) {
    return <Redirect to={`/orders/${created}`} />
  }

  return (
    <OrderForm
      order={order}
      handleSelect={handleSelect}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  )
}

export default CreateOrder
