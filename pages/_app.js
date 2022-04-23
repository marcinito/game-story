import { StrictMode } from 'react'
import Layout from '../component/Layout'
import styles from '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <StrictMode> <Layout> <Component {...pageProps} /></Layout></StrictMode>
}

export default MyApp
