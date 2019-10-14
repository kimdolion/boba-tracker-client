import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const OrderForm = ({ order, handleChange, userResponse, handleSubmit }) => {
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
      <Form.Group controlId="flavor">
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
      <Form.Group controlId="datePurchased">
        <Form.Label>Date Purchased</Form.Label>
        <Form.Control
          type="date"
          placeholder="YYYY-MM-DD"
          name="datePurchased"
          onChange={handleChange}
          value={order.datePurchased}
        />
      </Form.Group>
      <Form.Group controlId="location">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          name="location"
          onChange={handleChange}
          value={order.location}
        />
      </Form.Group>
      <Form.Group controlId="cost">
        <Form.Label>Cost</Form.Label>
        <Form.Control
          type="number"
          name="cost"
          placeholder="$1"
          onChange={handleChange}
          value={order.cost}
        />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
      <Button variant="dark" href={cancelPath} className="ml-2" type="button">Cancel</Button>
    </Form>
  )
}

export default OrderForm
