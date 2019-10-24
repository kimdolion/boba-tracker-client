import React from 'react'

const styles = {
  copyright: {
    marginLeft: '1rem'
  },
  footer: {
    bottom: 0,
    color: 'white',
    display: 'flex',
    minHeight: '2rem',
    padding: '5px',
    position: 'fixed',
    width: '100%'
  },
  link: {
    color: 'gray',
    marginRight: '1rem'
  }
}

// const authenticatedOptions = (
//   <Fragment>
//     <Nav.Link href="#orders">Orders</Nav.Link>
//     <Nav.Link href="#create-order">Create Order</Nav.Link>
//     <Nav.Link href="#change-password">Change Password</Nav.Link>
//     <Nav.Link href="#sign-out">Sign Out</Nav.Link>
// TO DO: Total spent, Cost for toppings?, most ordered drink
//   </Fragment>
// )
// const unauthenticatedOptions = (
//   <Fragment>
//     <Nav.Link href="#sign-up">Sign Up</Nav.Link>
//     <Nav.Link href="#sign-in">Sign In</Nav.Link>
// TODO: most liked drink, cheapest drink, most ordered toppings
//   </Fragment>
// )
// const alwaysOptions = (
//   <Fragment>
//     <Nav.Link to="/">Home</Nav.Link>
//   </Fragment>
// )
const copyright = (
  <div style={styles.copyright}>
    &copy; {new Date().getFullYear()} Copyright: <a href="https://kimdolion.github.io" target="_blank" rel="noopener noreferrer" className="text-light"> Kim Wilkes</a>
  </div>
)

const Footer = ({ user }) => (
  <div variant='dark' className="bg-dark" style={styles.footer}>
    {copyright}
    <a href="https://github.com/kimdolion/boba-tracker-client" target="_blank" rel="noopener noreferrer" className="text-light ml-auto" style={styles.link}> Github </a>
  </div>
)

export default Footer
