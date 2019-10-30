import React, { Component } from 'react'

const styles = {
  scroll: {
    bottom: '40px',
    cursor: 'pointer',
    position: 'fixed',
    right: '5px',
    textAlign: 'center',
    transition: '0.5s',
    zIndex: '1'
  }
}

class GoTop extends Component {
    state = {
      intervalId: 0,
      thePosition: false,
      _isMounted: false
    }
    componentDidMount () {
      document.addEventListener('scroll', () => {
        if (window.scrollY > 170) {
          this.setState({ thePosition: true })
        } else {
          this.setState({ thePosition: false })
        }
      })
      window.scrollTo(0, 0)
    }
    onScrollStep = () => {
      if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId)
      }
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx)
    }
    scrollToTop = () => {
      const intervalId = setInterval(this.onScrollStep, this.props.delayInMs)
      this.setState({ intervalId: intervalId })
    }
    renderGoTopIcon = () => {
      if (this.state.thePosition) {
        return (
          <div style={styles.scroll} className="go-top btn btn-dark btn-lg" onClick={this.scrollToTop}>
            Go to Top
          </div>
        )
      }
    }
    componentWillUnmount () {
      this._isMounted = false
      this.thePosition = false
      this.intervalId = 0
    }
    render () {
      return (
        <React.Fragment>
          {this.renderGoTopIcon()}
        </React.Fragment>
      )
    }
}
export default GoTop
