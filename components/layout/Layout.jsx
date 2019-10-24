import Provider from '~/redux/Provider.jsx'
import Header from './Header'
import Footer from './Footer'
import Controller from '../controller/Controller'

const Layout = (props) => (
  <Provider>
    <Controller />
    <Header />
    <main>
      {props.children}
    </main>
    <Footer />
  </Provider>
)

export default Layout