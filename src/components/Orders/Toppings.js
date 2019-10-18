import React, { useState } from 'react'

import CreatableSelect from 'react-select/creatable'
import { toppingOptions } from './ToppingOptions'

const Toppings = ({ order, handleChange }) => {
  const [selected] = useState([])
  return (
    <CreatableSelect
      isMulti
      selected={selected}
      onChange={handleChange}
      options={toppingOptions}
    />
  )
}
export default Toppings
