
import Image from 'next/image'
import s from '../styles/Home.module.scss'
import Link from 'next/link'
import { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { donowaldInfoAboutMonster } from '../redux/Slice/AboutSlice'

export default function Home() {

  return (
    <div className={s.firstPage}>
      <div className={s.textDiv}><h1>Let the one who hunts monsters himself take care not to become a monster</h1></div>
      <div className={s.catalogDiv}>
      <div className={s.catalog}>
        <div className={`${s.div} ${s.div1}`}><img className={s.img} src={"./monster/cyklop.png"}></img></div>
        <div className={`${s.div} ${s.div2}`}><img className={s.img} src={"./monster/Ghoul.png"}></img></div>
        <div className={`${s.div} ${s.div3}`}><img className={s.img} src={"./ItemsGame/fire-miecz.png"}></img></div>
        <div className={`${s.div} ${s.div4}`}><img className={s.img} src={"./monster/Minotaur.png"}></img></div>
        <div className={`${s.div} ${s.div5}`}><img className={s.img} src={"./ItemsGame/toxic-axe.png"}></img></div>
        <div className={`${s.div} ${s.div6}`}><img className={s.img} src={"./monster/Vampire.png"}></img></div>
        <div className={`${s.div} ${s.div7}`}><img className={s.img} src={"./monster/mag.png"}></img></div>
        <div className={`${s.div} ${s.div8}`}><img className={s.img} src={"./ItemsGame/dwarve-armor.png"}></img></div>

      </div>
    
      </div>
      <div className={s.startDiv}>
        <div className={s.btnLink} ><Link href="/create-character">Start Game</Link>
        <span className={s.span1}></span>
        <span className={s.span2}></span>
        <span className={s.span3}></span>
        <span className={s.span4}></span>
        </div>
      </div>
   
    </div>
  )
}
