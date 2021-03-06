import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../General/Header'
import Footer from '../General/Footer'
import Home from '../General/Home'
import SignUp from '../Auth/SignUp'
import SignIn from '../Auth/SignIn'
import SignOut from '../Auth/SignOut'
import ChangePassword from '../Auth/ChangePassword'
import Orders from '../Orders/Orders'
import OwnerOrders from '../Orders/OwnerOrders'
import Order from '../Orders/Order'
import CreateOrder from '../Orders/CreateOrder'
import EditOrder from '../Orders/EditOrder'
import GoTop from '../General/ScrollTop'

const styles = {
  main: {
    fontSize: '1.25rem'
  }
}

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = ({ heading, message, variant }) => {
    this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
  }

  render () {
    const { alerts, user } = this.state
    return (
      <Fragment>
        <Header user={user} alert={this.alert}/>
        {alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            heading={alert.heading}
            variant={alert.variant}
            message={alert.message}
          />
        ))}
        <main className="container" style={ styles.main }>
          <Route exact path='/' user={user} render={() => (
            <Home alert={this.alert} setUser={this.setUser} user={user} />
          )} />
          <Route exact path='/home' user={user} render={() => (
            <Home alert={this.alert} setUser={this.setUser} user={user} />
          )} />
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/orders' render={() => (
            <Orders alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/my-orders' render={() => (
            <OwnerOrders alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/orders/:id' render={() => (
            <Order alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/create-order' render={() => (
            <CreateOrder alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/orders/:id/edit-order' render={() => (
            <EditOrder alert={this.alert} user={user} />
          )} />
          <GoTop scrollStepInPx="50" delayInMs="20" />
        </main>
        <Footer user={user} />
      </Fragment>
    )
  }
}

export default App
