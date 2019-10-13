import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const OrderForm = ({ order, handleChange, handleSubmit }) => {
  const cancelPath = order._id ? `#/orders/${order._id}` : '#orders'

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
          value={order.title}
          required
        />
      </Form.Group>
      <Form.Group controlId="author">
        <Form.Label>Flavor</Form.Label>
        <Form.Control
          type="text"
          placeholder="Flavor"
          name="flavor"
          onChange={handleChange}
          value={order.flavor}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
      <Button variant="dark" href={cancelPath} className="ml-2" type="button">Cancel</Button>
    </Form>
  )
}

export default OrderForm
