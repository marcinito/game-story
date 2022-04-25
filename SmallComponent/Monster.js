import s from '../styles/SmallComponentStyle/Monster.module.scss'
import {useRef,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { monsterGetAtak } from '../redux/Slice/Monsters'
import { setRateMonsterHp } from '../redux/Slice/OverallSlice'
const Monster = () => {
const monsters=useSelector((state)=>state.monsters)
const wear=useSelector((state)=>state.wear)
const overall=useSelector((state)=>state.overall)
const skills=useSelector((state)=>state.skills)
const dispatch=useDispatch()

    const hpRef=useRef()
    let procent=100
 

console.info("REFRESH MONSTER COMPONENT")


useEffect(()=>{ 
    console.info(overall.rateHpMonster)
    console.info(monsters[0].hpLevel)
    console.info(monsters[0].hpTotal)
    console.info(monsters[0].name)
hpRef.current.style.width=overall.rateHpMonster+"%"


},[overall.rateHpMonster,monsters])
    return ( <div className={s.container}>
    
        <img className={s.imgMonster} src={monsters[0].img}></img>
        <div className={s.eq}>
        <h1 className={s.name}>{monsters[0].name}</h1>
            <div className={s.slot}>
                <img className={s.displayItem} src={monsters[0].item.grafika}/>
            </div>
            <div className={s.slot}>
                <img className={s.displayItem} src={"./ItemsGame/gold.jpg"}/>
            <span className={s.displayAmountGold}>{monsters[0].gold}</span></div>
            <div className={s.slot}></div>
        </div>
        <div className={s.skills}>
            <div className={s.hp} >
                <span className={s.stageHp} ref={hpRef}>{monsters[0].hpLevel}</span>
            </div>
        
        </div>
      
    </div> );
}
 
export default Monster;