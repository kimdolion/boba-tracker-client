import React from 'react'
import { Link } from 'react-router-dom'

const authenticatedOptions = (
  <React.Fragment>
    <p>Check out the bubble tea collection so far by clicking on <Link to="/orders" className='btn btn-sm btn-dark m-2' aria-current>All Orders</Link> or your own collection <Link to="/my-orders" className='btn btn-sm btn-secondary m-2' aria-current>My Orders</Link>
    </p>
    <p>...Or get your collection going to either of those links, then click on Create Order.
    </p>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <p>Create a <strong>(fake)</strong> login to get started on your bubble tea collection.
    </p>
  </React.Fragment>
)

const Home = ({ user }) => (
  <React.Fragment>
    <h1>Welcome to Boba Tracker!</h1>
    <p>Track your bubble tea orders so you can easily remember what you&apos;ve enjoyed in the past.
    </p>
    <p>You can also see what other people have ordered and try their boba order for yourself.
    </p>
    { user ? authenticatedOptions : unauthenticatedOptions }
  </React.Fragment>
)

export default Home
