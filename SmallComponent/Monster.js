import s from '../styles/SmallComponentStyle/Monster.module.scss'
import {useRef,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { cureMonster, floorNumbersOfTreatments, monsterGetAtak } from '../redux/Slice/Monsters'
import { setRateMonsterHp } from '../redux/Slice/OverallSlice'
import {handlePercentages } from '../Modules/handleHp'
import { getAtakFromMonster } from '../redux/Slice/Levels'
import { useState } from 'react'
const Monster = (props) => {



const monsters=useSelector((state)=>state.monsters)
const wear=useSelector((state)=>state.wear)
const overall=useSelector((state)=>state.overall)
const skills=useSelector((state)=>state.skills)
const dispatch=useDispatch()
const checkIfMonsterNeededHelpRef=useRef()



    const hpRef=useRef()
    let procent=100
 

    



useEffect(()=>{
    if(monsters[0].hpLevel<monsters[0].hpTotal)checkIfMonsterNeededHelpRef.current=true
  


    if(monsters[0].numbersOfTreatments>0 && checkIfMonsterNeededHelpRef.current){
        hpRef.current.style.backgroundColor="green"
        props.treatmentMonsterRef.current.style.opacity=1
        setTimeout(()=>{
            props.treatmentMonsterRef.current.style.opacity=0
        },500)
    }
    let setTime=setTimeout(()=>{
        hpRef.current.style.backgroundColor="white"
        if(monsters[0].hpLevel===monsters[0].hpTotal){
            dispatch(floorNumbersOfTreatments())
        }
    },500)
if(monsters[0].hpLevel>=monsters[0].hpTotal){
    checkIfMonsterNeededHelpRef.current=false

}

    return ()=>{
        clearTimeout(setTime)
    }
},[monsters[0].numbersOfTreatments])



useEffect(()=>{ 
if(skills.hpLevel<0){
    dispatch(cureMonster(30))
}
    dispatch(setRateMonsterHp(handlePercentages(monsters[0].hpTotal,monsters[0].hpLevel)))
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
                <img className={s.displayItem} src={"./ItemsGame/gold.png"}/>
            <span className={s.displayAmountGold}>{monsters[0].gold}</span></div>
          
        </div>
        <div className={s.skills}>
            <div className={s.hp} >
                <span className={s.stageHp} ref={hpRef}>{monsters[0].hpLevel}</span>
            </div>
        
        </div>
      
    </div> );
}
 
export default Monster;