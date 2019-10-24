import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import makeStore from '~/redux/store'

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, store, router } = this.props

    return (
      <Provider store={store}>
        <Head>
          <title>next-redux-thunk-template</title>
          <script defer src="https://use.fontawesome.com/releases/v5.5.0/js/all.js" integrity="sha384-GqVMZRt5Gn7tB9D9q7ONtcp4gtHIUEW/yG7h98J7IpE3kpi+srfFyyB/04OV6pG0" crossOrigin="anonymous"></script>
        </Head>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withRedux(makeStore)(MyApp)