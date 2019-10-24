import Provider from '~/redux/Provider.jsx'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => (
  <Provider>
    <Header />
    <main>
      {props.children}
    </main>
    <Footer />
  </Provider>
)

export default Layout