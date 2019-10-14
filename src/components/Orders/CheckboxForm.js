import React from 'react'
import Form from 'react-bootstrap/Form'

const Checkbox = ({ user, alerts, match }) => {
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
        type="text"
        name="location"
        onChange={handleChange}
        value={order.location}
      />
    </Form.Group>
  )
}
export default Checkbox
