import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  whatToRender() {
    if (this.state.secondsLeft === 0) {
      return <div>Boom!</div>
    } else {
      return <div>{this.state.secondsLeft} seconds left before I go boom!</div>
    }
  }

  render() {
    return (
      this.whatToRender()
    )
  }

}

export default Bomb;
