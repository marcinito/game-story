import s from '../styles/SmallComponentStyle/Monster.module.scss'
import {useRef,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
const Monster = () => {
const monsters=useSelector((state)=>state.monsters)
const wear=useSelector((state)=>state.wear)
console.info(monsters)

    const hpRef=useRef()
    let procent=100
    let hp=monsters[0].hp
    console.info(hp)

useEffect(()=>{

hpRef.current.style.width=monsters[0].hp+"%"
})
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
                <span className={s.stageHp} ref={hpRef}></span>
            </div>
        
        </div>
      
    </div> );
}
 
export default Monster;