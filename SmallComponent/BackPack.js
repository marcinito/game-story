import s from '../styles/SmallComponentStyle/BackPack.module.scss'
import { useSelector,useDispatch } from 'react-redux'
import { dressUp } from '../redux/Slice/WearItems'
import {useState,useEffect} from 'react'
import { setNewValueHp,setNewValueMana } from '../redux/Slice/Levels'
import { openCloseWindowMessage } from '../redux/Slice/OverallSlice'
import { expireMessage, getMessageFromWordl } from '../redux/Slice/MessageSlice'
import useInfoWindow from '../Modules/useInfoWindow'
import { handleManaHpPotion } from '../redux/Slice/OwnItems'
import { useRef } from 'react'
const BackPack = () => {
const dispatch=useDispatch()
const skills=useSelector(state=>state.skills)
const windowInfo=useSelector(state=>state.windowInfo)
const message=useSelector(state=>state.message)
console.info(windowInfo)
useInfoWindow(message[0].backpack,windowInfo,"backpack")
const clickItemRef=useRef()


const wearItem=(el)=>{
    if(el.id==="potion"){
        dispatch(setNewValueHp(skills.hpTotal))
        dispatch(setNewValueMana(skills.mana.manaTotal))
        console.info(el)
        dispatch(handleManaHpPotion(el.hash))
        clickItemRef.current.style.background=`red`
        return
    }
    dispatch(dressUp(el)) 
}

    const ownedItems=useSelector((state)=>state.ownItems)
    
console.info(ownedItems)
    return ( <div className={s.container}>

{ownedItems.map(el=>{
    return(
        <div
        ref={clickItemRef}
        key={el.hash}
         className={s.slot}
         onClick={(e)=>wearItem(el)}
         >
           
             <img  className={s.itemInSlot} src={el.grafika}/>
             </div>
    )
})}

<div className={s.logoBp}>
    
</div>
    </div> );
}
 
export default BackPack;