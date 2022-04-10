
import Image from 'next/image'
import s from '../styles/Home.module.scss'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Home() {


  useEffect(()=>{

setTimeout(()=>{

},1000)

  },[])

  return (
    <div className={s.firstPage}>
      <div className={s.catalogDiv}>
      <div className={s.catalog}>
        <div className={`${s.div} ${s.div1}`}><img className={s.img} src={"./fura.png"}></img></div>
        <div className={`${s.div} ${s.div2}`}><img className={s.img} src={"./lego.png"}></img></div>
        <div className={`${s.div} ${s.div3}`}><img className={s.img} src={"./logo2.png"}></img></div>
        <div className={`${s.div} ${s.div4}`}><img className={s.img} src={"./logo3.png"}></img></div>
        <div className={`${s.div} ${s.div5}`}><img className={s.img} src={"./logo4.png"}></img></div>
        <div className={`${s.div} ${s.div6}`}><img className={s.img} src={"./dinozaur2.jpg"}></img></div>
      </div>
      </div>
      <div className={s.startDiv}>
        <div className={s.btnLink}><Link href="/game-platform">Start Game</Link>
        <span className={s.span1}></span>
        <span className={s.span2}></span>
        <span className={s.span3}></span>
        <span className={s.span4}></span>
        </div>
      </div>
   
    </div>
  )
}
