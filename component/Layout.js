import Navbar from "./Navbar";
import styles from '../styles/Container.module.scss'
import Head from 'next/head'
import Below from "./Below";
import {Provider} from 'react-redux'
import { store } from "../redux/store";
const Layout = ({children}) => {
    return ( <div className={styles.container}>
        <Head>
            <title>Game Story</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Rubik+Wet+Paint&display=swap" rel="stylesheet"></link>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Babylonica&family=Grape+Nuts&display=swap" rel="stylesheet"></link>
        </Head>
        <Provider store={store}>
    <Navbar/>
    {children}
    <Below/>
    </Provider>
    
    </div> );
}
 
export default Layout;