import React from 'react'
// import Navbar from 'react-bootstrap/Navbar'
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
// TODO: most liked drink, cheapest drink
//   </Fragment>
// )
// const alwaysOptions = (
//   <Fragment>
//     <Nav.Link to="/">Home</Nav.Link>
//   </Fragment>
// )

const Footer = ({ user }) => (
  <div className="bg-dark text-light fixed-bottom">
     &copy; {new Date().getFullYear()} Copyright: <a href="https://kimdolion.github.io"> Kimberly Wilkes </a>
  </div>
)

export default Footer
