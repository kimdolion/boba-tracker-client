import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import OrderForm from './OrderForm'

const CreateOrder = ({ user }) => {
  const orderObject = {
    title: '',
    author: ''
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
        'Authorization': `Token token=${user.token}`
      },
      data: { order }
    })
      .then(responseData => setCreated(responseData.data.order._id))
      .catch(console.error)
  }

  if (created) {
    return <Redirect to={`/orders/${created}`} />
  }

  return (
    <OrderForm
      order={order}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      cancelPath='/'
    />
  )
}

export default CreateOrder
