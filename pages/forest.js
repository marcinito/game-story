import s from '../styles/SmallComponentStyle/Forest.module.scss'
import {useRouter} from 'next/router'
import Player from '../SmallComponent/Player'
import Monster from '../SmallComponent/Monster'
import { useSelector,useDispatch } from 'react-redux'
import { monsterGetAtak,deleteDefeatedMonster } from '../redux/Slice/Monsters'
import { buyItems, lostAllItems } from '../redux/Slice/OwnItems'
import { debitFromAccout, paymentToAccount } from '../redux/Slice/Levels'
import { useEffect,useRef } from 'react'
import { useCountFromEq } from '../Modules/useCountFromEq'
import { getAtakFromMonster } from '../redux/Slice/Levels'
import { takeOffLostItem } from '../redux/Slice/WearItems'
const Forest = () => {
    const router=useRouter()
const monsters=useSelector((state)=>state.monsters)
const skills=useSelector((state)=>state.skills)
const dispatch=useDispatch()
useCountFromEq("atak")
const windowAfterWinRef=useRef()
const monsterRef=useRef()
const playerRef=useRef()
useEffect(()=>{
windowAfterWinRef.current.style.transform=`scale(0)`
monsterRef.current.style.filter=`blur(0px) grayscale(0%)`
},[])
console.info(skills.strenght)
const handleAtak=()=>{
    console.log("siema")
    dispatch(monsterGetAtak(skills.strenght))
    dispatch(getAtakFromMonster(10))
    if(monsters[0].hp<=0){

        dispatch(buyItems(monsters[0].item))
        dispatch(paymentToAccount(monsters[0].gold))
        windowAfterWinRef.current.style.transform=`scale(1)`
        playerRef.current.style.filter=`blur(20px) grayscale(100%)`
      
    }
    if(skills.hp<=0){
        windowAfterWinRef.current.style.transform=`scale(1)`
        playerRef.current.style.filter=`blur(20px) grayscale(100%)`
        dispatch(debitFromAccout(skills.gold))
        dispatch(lostAllItems())
        dispatch(takeOffLostItem())
    }
}

const nextMonster=()=>{
    dispatch(deleteDefeatedMonster())
    

    monsterRef.current.style.filter=`blur(0px) grayscale(0%)`
    windowAfterWinRef.current.style.transform=`scale(0)`

}

    return ( 
        <div className={s.container}>
            <div className={s.arena}>
        <div className={s.player} ref={playerRef}>
            <Player/>
        </div>
        <div className={s.fightArea}>
            <div className={s.windowAfterWin} ref={windowAfterWinRef}>
                <h1 className={s.h1}>You are slay <span className={s.fancyText}>{monsters[0].name}</span></h1>
                <h1 className={s.h1Two}>Your loot...</h1>
                <div className={s.lootItem}>
        
                    <div className={s.gold}><img className={s.imgGold} src={"/ItemsGame/gold.jpg"}/>
                    <span className={s.amountGoldFromMonster}>{monsters[0].gold}</span></div>
                    <div className={s.item}><img className={s.imgItem} src={monsters[0].item.grafika}/></div>
                </div>
               <div className={s.pakBtn}>
               <button className={s.btn} onClick={()=>router.push("/player-panel")}>Back</button>
                <button className={s.btn} onClick={()=>nextMonster()} >Next</button>
               </div>
            </div>
        <button className={s.atak} onClick={()=>handleAtak()}>Atak</button>
        </div>
        <div className={s.monster} ref={monsterRef}>
            <Monster/>
        </div>
       
        </div>
        <button className={s.back} onClick={()=>router.push("/player-panel")}>Powrót</button>
        </div>
     );
}
 
export default Forest;