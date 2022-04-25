import s from '../styles/SmallComponentStyle/Forest.module.scss'
import {useRouter} from 'next/router'
import Player from '../SmallComponent/Player'
import Monster from '../SmallComponent/Monster'
import { useSelector,useDispatch } from 'react-redux'
import { monsterGetAtak,deleteDefeatedMonster } from '../redux/Slice/Monsters'
import { buyItems, lostAllItems } from '../redux/Slice/OwnItems'
import { debitFromAccout, getExp, paymentToAccount, setNewValueHp,getLevel } from '../redux/Slice/Levels'
import { useEffect,useRef } from 'react'
import { useCountFromEq } from '../Modules/useCountFromEq'
import { getAtakFromMonster } from '../redux/Slice/Levels'
import { dressUp, takeOffLostItem } from '../redux/Slice/WearItems'

import { setRateMonsterHp, subRateMonsterHp, subRateHp } from '../redux/Slice/OverallSlice'
import { handleHp } from '../Modules/handleHp'
const Forest = () => {
    const router=useRouter()
const monsters=useSelector((state)=>state.monsters)
const skills=useSelector((state)=>state.skills)
const dispatch=useDispatch()
useCountFromEq("atak")
const windowAfterWinRef=useRef()
const windowAfterLostRef=useRef()
const atakRef=useRef()
const monsterRef=useRef()
const playerRef=useRef()
const hitFromMonster=useRef()
const hitFromPlayer=useRef()
useEffect(()=>{
    atakRef.current.style.zIndex=`10`
windowAfterLostRef.current.style.transform=`scale(0)`
windowAfterWinRef.current.style.transform=`scale(0)`
monsterRef.current.style.filter=`blur(0px) grayscale(0%)`
playerRef.current.style.filter=`blur(0px) grayscale(0%)`
},[])


useEffect(()=>{
    
    if(monsters[0].hpLevel<=0){
        atakRef.current.style.zIndex=`-10`
        dispatch(buyItems(monsters[0].item))
        dispatch(paymentToAccount(monsters[0].gold))
        dispatch(getExp(monsters[0].experience))
        if(skills.level.exp%100===0){
            dispatch(getLevel())
            console.info("Get - level")
        }
 setTimeout(()=>{
    windowAfterWinRef.current.style.transform=`scale(1)`
    monsterRef.current.style.filter=`blur(20px) grayscale(100%)`
 },1000)
     
      
    }
 
    if(skills.hpLevel<=0){
        
     setTimeout(()=>{
        atakRef.current.style.zIndex=`-10`
        windowAfterLostRef.current.style.transform=`scale(1)`
        playerRef.current.style.filter=`blur(20px) grayscale(100%)`
     },1000)
        dispatch(debitFromAccout(skills.gold-1))
        dispatch(lostAllItems())
        dispatch(takeOffLostItem())
     
    }
},[monsters[0].hpLevel,skills.hpLevel])

const handleAtak=()=>{
    dispatch(monsterGetAtak(skills.strenght.total))
    dispatch(subRateHp(handleHp(skills.hpTotal,monsters[0].atak)))
    dispatch(getAtakFromMonster(monsters[0].atak))
dispatch(subRateMonsterHp(handleHp(monsters[0].hpTotal,skills.strenght.total)))
hitFromMonster.current.style.opacity=`1`
hitFromPlayer.current.style.opacity=`1`
setTimeout(()=>{
    hitFromMonster.current.style.opacity=`0`
hitFromPlayer.current.style.opacity=`0`
},1000)
}

const nextMonster=()=>{
    dispatch(deleteDefeatedMonster())
    dispatch(setRateMonsterHp(100))
    atakRef.current.style.zIndex=`10`
    monsterRef.current.style.filter=`blur(0px) grayscale(0%)`
    windowAfterWinRef.current.style.transform=`scale(0)`
    windowAfterLostRef.current.style.transform=`scale(0)`

}

const backAfterDefeat=()=>{
    router.push('/player-panel')
    console.info("----back----")
    dispatch(setNewValueHp(50))
}
const backAfterWin=()=>{
    dispatch(deleteDefeatedMonster())
    router.push('/player-panel')
}

    return ( 
        <div className={s.container}>
            <div className={s.arena}>
        <div className={s.player} ref={playerRef}>
            <div className={s.showHitFromMonster} 
            ref={hitFromMonster}>{monsters[0].atak}
            <div className={s.sprite}></div>
            </div>
            <Player/>
        </div>
        <div className={s.fightArea}>
            <div className={s.windowAfterWin} ref={windowAfterWinRef}>
                <h1 className={s.h1}>You are slay <span className={s.fancyText}>{monsters[0].name}</span></h1>
                <h1 className={s.h1Two}>Your loot...</h1>
                <div className={s.lootItem}>
        
                    <div className={s.gold}><img className={s.imgGold} src={"/ItemsGame/gold.png"}/>
                    <span className={s.amountGoldFromMonster}>{monsters[0].gold}</span></div>
                    <div className={s.item}><img className={s.imgItem} src={monsters[0].item.grafika}/></div>
                </div>
               <div className={s.pakBtn}>
               <button className={s.btn} onClick={()=>backAfterWin()}>Back</button>
                <button className={s.btn} onClick={()=>nextMonster()} >Next</button>
               </div>
            </div>
            <div className={s.windowAfterLost} ref={windowAfterLostRef}>
                <h1 className={s.h1}>You are lost...</h1>
               <div className={s.pakBtn}>
               <button className={s.btn} onClick={()=>backAfterDefeat()}>Back</button>
              
               </div>
            </div>
        
        <button ref={atakRef} className={s.atak} onClick={()=>handleAtak()}>Atak</button>
        </div>
        <div className={s.monster} ref={monsterRef}>
        <div className={s.showHitFromPlayer} ref={hitFromPlayer}>{skills.strenght.total}
        <div className={s.sprite}>
     
        </div>
        </div>
            <Monster />
        </div>
       
        </div>
        <button className={s.back} onClick={()=>router.push("/player-panel")}>Powrót</button>
        </div>
     );
}
 
export default Forest;