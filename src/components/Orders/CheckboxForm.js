import React from 'react'
import Form from 'react-bootstrap/Form'

// const selectAll = (
//   <div>
//     <button
//       type="button"
//       className="btn btn-outline-primary mr-2"
//       onClick={this.selectAll}>Select All
//     </button>
//     <button
//       type="button"
//       className="btn btn-outline-primary mr-2"
//       onClick={this.deselectAll}>Deselect All
//     </button>
//   </div>
// )

const Checkbox = ({ order, handleChange }) => (
  <Form.Group>
    <Form.Label>Toppings</Form.Label>
    <Form.Check
      type="checkbox"
      inline label="Tapioca Boba"
      checked={order.toppings[0]}
      onChange={handleChange}
      value={order.toppings[0]}
    />
    <Form.Check
      type="checkbox"
      inline label="Popping Boba"
      checked={order.toppings[1]}
      onChange={handleChange}
      value={order.toppings[1]}
    />
    <Form.Check
      type="checkbox"
      inline label="Jelly"
      checked={order.toppings[2]}
      onChange={handleChange}
      value={order.toppings[2]}
    />
    <Form.Check
      type="checkbox"
      inline label="Pudding"
      checked={order.toppings[3]}
      onChange={handleChange}
      value={order.toppings[3]}
    />
    <Form.Check
      type="checkbox"
      inline label="Red Bean"
      checked={order.toppings[4]}
      onChange={handleChange}
      value={order.toppings[4]}
    />
    <Form.Check
      type="checkbox"
      inline label="Aloe"
      checked={order.toppings[5]}
      onChange={handleChange}
      value={order.toppings[5]}
    />
  </Form.Group>
)
export default Checkbox
