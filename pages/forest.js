import s from '../styles/SmallComponentStyle/Forest.module.scss'
import {useRouter} from 'next/router'
import Player from '../SmallComponent/Player'
import Monster from '../SmallComponent/Monster'
import { useSelector,useDispatch } from 'react-redux'
import { monsterGetAtak,deleteDefeatedMonster, cureMonster, floorNumbersOfTreatments } from '../redux/Slice/Monsters'
import { buyItems, lostItems } from '../redux/Slice/OwnItems'
import { debitFromAccout, getExp, paymentToAccount, setNewValueHp,getLevel, decreaseLevel } from '../redux/Slice/Levels'
import { useEffect,useRef,useState } from 'react'
import { useCountFromEq } from '../Modules/useCountFromEq'
import { getAtakFromMonster } from '../redux/Slice/Levels'
import { takeOffLostItem } from '../redux/Slice/WearItems'
import { setRateMonsterHp, subRateMonsterHp, subRateHp, setRateExp } from '../redux/Slice/OverallSlice'
import {handlePercentages } from '../Modules/handleHp'
const Forest = () => {
    


const [handlAtakDisabled,setHandleAtakDisabled]=useState(false)
const [disabledSpellAfterWin,setDisabledSpellAfterWin]=useState(false)
    const router=useRouter()
const monsters=useSelector((state)=>state.monsters)
const skills=useSelector((state)=>state.skills)
const ownItems=useSelector((state)=>state.ownItems)
const weapon=useSelector((state)=>state.wearItems.weapon)
const spells=useSelector((state)=>state.spells)
const overall=useSelector((state)=>state.overall)
const dispatch=useDispatch()
useCountFromEq("atak")

const windowAfterWinRef=useRef()
const windowAfterLostRef=useRef()
const atakRef=useRef()
const monsterRef=useRef()
const playerRef=useRef()
const hitFromMonster=useRef()
const hitFromPlayer=useRef()
const timeoutRef=useRef()
const sortAtakImage=useRef()
const randomActionRef=useRef()
const treatmentPlayerRef=useRef()
const treatmentMonsterRef=useRef()
const randomPowerAtakRef=useRef()

const lostRandomItems=(frequency)=>{
    /*Small function to choose random items to drop after defeat */
let copyOwn=[...ownItems]

copyOwn=copyOwn.filter((el,i,arr)=>{
    if(parseInt(Math.random()*frequency)!=1){
        return el
    }
})

dispatch(lostItems(copyOwn))
}

useEffect(()=>{
//This code serve as ratio how strong Monster will hit player its random number from own Monster scope//
randomPowerAtakRef.current=
monsters[0].attackPower[Math.floor(Math.random()*monsters[0].attackPower.length)]

    //what happen after monster dead//
    if(monsters[0].hpLevel<=0 && skills.hpLevel>0){
        clearInterval(randomActionRef.current)
        atakRef.current.style.zIndex=`-10`
        dispatch(buyItems(monsters[0].item))
        dispatch(paymentToAccount(monsters[0].gold))
        dispatch(getExp(monsters[0].experience))
        
 setTimeout(()=>{
    windowAfterWinRef.current.style.transform=`scale(1)`
    windowAfterWinRef.current.style.opacity=1
    windowAfterWinRef.current.style.zIndex=1
    monsterRef.current.style.filter=`blur(20px) grayscale(100%)`
    setDisabledSpellAfterWin(true)
 },800)
    }
 //What happen after player dead//
    if(skills.hpLevel<=0){
        clearInterval(randomActionRef.current)
        dispatch(floorNumbersOfTreatments())
        clearInterval(randomActionRef.current)
     setTimeout(()=>{
        atakRef.current.style.zIndex=`-10`
        windowAfterLostRef.current.style.transform=`scale(1)`
        playerRef.current.style.filter=`blur(20px) grayscale(100%)`
     },800)
        lostRandomItems(2)
        dispatch(debitFromAccout(skills.gold-10))
        dispatch(takeOffLostItem())
        dispatch(decreaseLevel())
        dispatch(setRateExp(handlePercentages(skills.levelExp,skills.level.exp)))
        console.info("AFTER DEAfd")
    }

},[monsters[0].hpLevel,skills.hpLevel])



const handleAtak=()=>{
  
    setHandleAtakDisabled(true)
    dispatch(monsterGetAtak(skills.strenght.total))
    dispatch(getAtakFromMonster(monsters[0].atak*randomPowerAtakRef.current))
    dispatch(subRateHp(handlePercentages(skills.hpTotal,monsters[0].atak*randomPowerAtakRef.current)))
dispatch(subRateMonsterHp(handlePercentages(monsters[0].hpTotal,skills.strenght.total)))
hitFromMonster.current.style.opacity=`1`
hitFromPlayer.current.style.opacity=`1`
hitFromPlayer.current.textContent=skills.strenght.total



timeoutRef.current=setTimeout(()=>{
    setHandleAtakDisabled(false)
    hitFromMonster.current.style.opacity=`0`
hitFromPlayer.current.style.opacity=`0`

},1000)
}

const nextMonster=()=>{
    randomActionRef.current=setInterval(randomActionFunction,3000)
    dispatch(deleteDefeatedMonster())
    dispatch(setRateMonsterHp(100))
    atakRef.current.style.zIndex=`10`
    monsterRef.current.style.filter=`blur(0px) grayscale(0%)`
    windowAfterWinRef.current.style.transform=`scale(0)`
    setDisabledSpellAfterWin(false)
    clearTimeout(timeoutRef.current)
}

const backAfterDefeat=()=>{
    router.push('/player-panel')
    clearTimeout(timeoutRef.current)
    setDisabledSpellAfterWin(false)
   
}
const backAfterWin=()=>{
    dispatch(deleteDefeatedMonster())
    router.push('/player-panel')
    clearTimeout(timeoutRef.current)
}

const randomActionFunction=()=>{
    /*It's hand over to Monster component and execute  per 1s if
    monster is alive*/
    let randomNumber=Math.floor(Math.random()*5)
    if(randomNumber===0 || randomNumber===5){
        dispatch(cureMonster(30))
    }
    if(randomNumber===1){
        dispatch(getAtakFromMonster(monsters[0].atak*randomPowerAtakRef.current))
        hitFromMonster.current.style.opacity=1
        setTimeout(()=>{
            hitFromMonster.current.style.opacity=0
        },500)
    }
}

console.info(skills.strenght.total,"siła totalna")
    return ( 
        <div className={s.container}>
           
            <div className={s.arena}>
        <div className={s.player} ref={playerRef}>
     
            <div className={s.showHitFromMonster} 
            ref={hitFromMonster}>{Math.floor(monsters[0].atak*randomPowerAtakRef.current)}
           <div className={s.sprite}>
               <img  src={monsters[0].atakImage}/>
           </div>
          
            </div>
            <img className={s.treatmentPlayer} ref={treatmentPlayerRef} src={"/spells/treatment-spell.gif"}/>
            <Player hitFromPlayer={hitFromPlayer} treatmentRef={treatmentPlayerRef} disabledSpell={disabledSpellAfterWin}/>
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
        
        <button ref={atakRef} disabled={handlAtakDisabled} className={s.atak} 
        onClick={()=>handleAtak()}>Atak</button>
        </div>
        
        <div className={s.monster} ref={monsterRef}>
        <img className={s.spells} style={spells.inUse===null?{opacity:"0"}:{opacity:"1"}} src={spells.inUse}></img>
        <div className={s.showHitFromPlayer} ref={hitFromPlayer}>
        <div className={s.sprite}><img src={weapon!==null?weapon.dataItem.grafika:null}/></div>
        </div>
        <img className={s.treatmentMonster} ref={treatmentMonsterRef} src={"/spells/treatment-spell.gif"}/>
            <Monster 
            hitFromMonster={hitFromMonster}
             randomActionRef={randomActionRef}
             randomActionFunction={randomActionFunction}
             treatmentMonsterRef={treatmentMonsterRef}
              />
        </div>
       
        </div>
        <button className={s.back} onClick={()=>router.push("/player-panel")}>Powrót</button>
        </div>
     );
}
 
export default Forest;