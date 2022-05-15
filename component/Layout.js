import Navbar from "./Navbar";
import s from '../styles/Container.module.scss'
import Head from 'next/head'
import Below from "./Below";
import {Provider} from 'react-redux'
import { store } from "../redux/store";
const Layout = ({children}) => {
    return ( <div className={s.container}>
        <Head>
            <title>Game Story</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Babylonica&family=Bebas+Neue&family=Creepster&family=Grape+Nuts&family=Inconsolata&family=Oleo+Script+Swash+Caps:wght@700&family=Pacifico&family=Permanent+Marker&family=Press+Start+2P&family=Rubik+Glitch&family=Rubik+Wet+Paint&family=Whisper&display=swap" rel="stylesheet"/>

        </Head>
        <Provider store={store}>
   <div className={s.navbar}><Navbar/></div> 
    <div className={s.children}>{children}</div>
    <div className={s.below}><Below/></div>
    </Provider>
    
    </div> );
}
 
export default Layout;