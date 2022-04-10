import Layout from '../component/Layout'
import styles from '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <Layout> <Component {...pageProps} /></Layout>
}

export default MyApp
