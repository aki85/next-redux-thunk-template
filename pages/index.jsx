import React, { Component } from 'react'
import Link from 'next/link'
import Layout from '../components/layout/Layout.jsx'
import enhancer from '../redux/allEnhancer'
import IndexController from './controller/index'

class Index extends IndexController {
  render() {
    return (
      <div>
        <h2>this is index page</h2>
        <Link href='/sample'>
          <a>sample page</a>
        </Link>
      </div>
    )
  }
}

Index = enhancer(Index)

export default () => (
  <Layout>
    <Index />
  </Layout>
)