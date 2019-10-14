import React from 'react'

const authenticatedOptions = (
  <React.Fragment>
    <p>Check out the bubble tea collection so far by clicking on Orders.
    </p>
    <p>...Or get your collection going by clicking on Create Order.
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
    <p>You can also see what other people have ordered and try their boba order for yourself. If you do make sure to like that order by tapping the heart next to it!
    </p>
    { user ? authenticatedOptions : unauthenticatedOptions }
  </React.Fragment>
)

export default Home
