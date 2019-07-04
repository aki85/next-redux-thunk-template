import React, { Component } from 'react'
import Link from 'next/link'
import { Button } from 'react-bootstrap'
import Layout from '../components/layout/Layout.jsx'
import enhancer from '../redux/allEnhancer'
import SampleController from './controller/sample'

import { SAMPLES } from '../utils'

class Sample extends SampleController {
  render() {
    const { samples } = this.props
    return (
      <div>
        <h2>this is sample page</h2>
        <Link href='/'>
          <a>index page</a>
        </Link>
        <br />
        <Button onClick={() => this.reverseSample()}>
          <i className="fa fa-exchange mr-2"></i>
          Reverse Text
        </Button>
        <h1>{samples.sample}</h1>
      </div>
    )
  }
}

Sample = enhancer(Sample)

export default () => (
  <Layout>
    <Sample />
  </Layout>
)