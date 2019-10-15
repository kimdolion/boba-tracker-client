import React from 'react'
import Form from 'react-bootstrap/Form'

const Checkbox = ({ user, order, handleChange, match }) => {
  const [topping, setTopping] = useState({
    toppings: {
      'tapioca boba': false,
      'popping boba': false,
      'jelly': false,
      'pudding': false,
      'red bean': false
    }
  }, [])
  return (
    <Form.Group>
      <Form.Label>Toppings</Form.Label>
      <button
        type="button"
        className="btn btn-outline-primary mr-2"
        onClick={this.selectAll}>Select All
      </button>
      <button
        type="button"
        className="btn btn-outline-primary mr-2"
        onClick={this.deselectAll}>Deselect All
      </button>
      <Form.Control
        type="checkbox"
        name="toppings"
        onChange={handleChange}
        value={order.topping[0]}
      />
      <Form.Control
        type="checkbox"
        name="toppings"
        onChange={handleChange}
        value={order.topping[1]}
      />
      <Form.Control
        type="checkbox"
        name="toppings"
        onChange={handleChange}
        value={order.topping[2]}
      />
    </Form.Group>
  )
}
export default Checkbox
