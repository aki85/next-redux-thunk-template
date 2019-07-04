import React, { Component } from 'react'

class SampleController extends Component {
  reverseSample() {
    const { actions, samples } = this.props
    const reverseText = samples.sample.split('').reverse().join('')
    actions.setSample({sample: reverseText})
  }
}

export default SampleController