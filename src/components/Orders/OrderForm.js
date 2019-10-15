import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const OrderForm = ({ order, handleChange, handleSubmit }) => {
  const cancelPath = order._id ? `#/orders/${order._id}` : '#orders'

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="flavor">
        <Form.Label>Flavor</Form.Label>
        <Form.Control
          type="text"
          placeholder="Flavor"
          name="flavor"
          value={order.flavor}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="datePurchased">
        <Form.Label>Date Purchased</Form.Label>
        <Form.Control
          type="date"
          name="datePurchased"
          placeholder="YYYY-MM-DD"
          value={order.datePurchased}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="location">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          name="location"
          placeholder="123 Boba Street"
          value={order.location}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="cost">
        <Form.Label>Cost</Form.Label>
        <Form.Control
          type="number"
          name="cost"
          placeholder="$1"
          value={order.cost}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
      <Button variant="dark" href={cancelPath} className="ml-2" type="button">Cancel</Button>
    </Form>
  )
}

export default OrderForm
