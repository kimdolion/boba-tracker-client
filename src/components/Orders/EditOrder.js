import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import OrderForm from './OrderForm'

const EditOrder = ({ user, match, alert, history }) => {
  const [order, setOrder] = useState({ title: '', author: '' })

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
      .then(() => alert({ heading: 'Success', message: 'You updated a order', variant: 'success' }))
      .then(() => history.push(`/orders/${match.params.id}`))
      .catch(() => alert({ heading: 'Danger', message: 'Something went wrong!', variant: 'danger' }))
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

export default withRouter(EditOrder)
