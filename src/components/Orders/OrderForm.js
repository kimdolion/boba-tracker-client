import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import Toppings from './Toppings'
import CreatableSelect from 'react-select/creatable'
import { toppingOptions } from './ToppingOptions'

const OrderForm = ({ order, handleSelect, handleChange, handleSubmit, handleCancel }) => {
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
      <Form.Group controlId="toppings">
        <Form.Label>Toppings</Form.Label>
        <CreatableSelect
          isMulti
          name="toppings"
          placeholder="Toppings"
          value={order.toppings}
          onChange={handleSelect}
          options={toppingOptions}
        />
      </Form.Group>
      <Form.Group controlId="datePurchased">
        <Form.Label>Date Purchased</Form.Label>
        <Form.Control
          type="date"
          name="datePurchased"
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
          max="99"
          placeholder="1"
          value={order.cost}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="color">
        <Form.Label>Color</Form.Label>
        <Form.Control
          type="color"
          name="color"
          value={order.color}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
      <Button variant="dark" onClick={handleCancel} className="ml-2" type="button">Cancel</Button>
    </Form>
  )
}

export default OrderForm
