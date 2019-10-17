import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import OrderForm from './OrderForm'
import messages from '../AutoDismissAlert/messages'

const EditOrder = ({ user, match, alert, handleCancel, history }) => {
  const orderObject = {
    flavor: '',
    datePurchased: '',
    location: '',
    cost: 0,
    color: '#c49c73'
  }
  const [order, setOrder] = useState(orderObject)

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
          const dateObj = new Date(responseData.data.order.datePurchased)
          formattedDate = dateObj.toISOString().substring(0, 10)
        }
        setOrder({ ...responseData.data.order, datePurchased: formattedDate
        })
      })
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
      .then(handleCancel)
      .then(() => {
        history.replace('/reload')
        history.replace(`/orders/${match.params.id}`)
      })
      .then(() => alert({ heading: 'Success', message: messages.updateSuccess, variant: 'success' }))
      .catch(() => alert({ heading: 'Failure', message: messages.failure, variant: 'danger' }))
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

export default withRouter(EditOrder)
