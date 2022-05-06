import s from '../styles/SmallComponentStyle/About.module.scss'
import { useSelector,useDispatch } from 'react-redux';
import {useState,useRef} from 'react'
const About = () => {
const [whatDisplay,setWhatDisplay]=useState(0)
const about=useSelector((state)=>state.about)
console.info(about,"ABOUT")

    return ( <div className={s.container}>
        <nav className={s.nav}>
            {about.map((el,i,arr)=>{
                return(
                    <li key={i} onClick={()=>setWhatDisplay(i)} >{el.name}</li>
                )
            })}
        </nav>
        <div  className={s.section}>
            <h3 className={s.name}>{about[whatDisplay].name}</h3>
       <img className={s.img} src={about[whatDisplay].img}/>
       <div className={s.describe}>{about[whatDisplay].describe}
       </div>
       <div className={s.skills}>
           <h3>HP--{about[whatDisplay].hpLevel}</h3>
           <h3>Strenght--{about[whatDisplay].atak}</h3>
           <div className={s.itemDrop}><h3>Own Item</h3><img src={about[whatDisplay].item.grafika}/></div>
           <div className={s.itemDrop}><h3>Own Money</h3><img src={"/ItemsGame/gold.png"}/>
           <span>{about[whatDisplay].gold}</span></div>
           
           
       </div>
        </div>
    </div> );
}
 
export default About;