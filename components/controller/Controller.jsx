import React, { Component } from 'react'
import enhancer from '../../redux/allEnhancer'

class Controller extends Component {
  componentDidMount() {
  }
  render() {
    return(
      <div>
        <link href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet' integrity='sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN' crossOrigin='anonymous' />
      </div>
    )
  }
}

export default enhancer(Controller)