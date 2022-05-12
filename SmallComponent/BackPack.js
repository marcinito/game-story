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
import markWearItemInSellShop from '../Modules/markWaerItemInSellShop'
const BackPack = () => {
const dispatch=useDispatch()
const skills=useSelector(state=>state.skills)
const windowInfo=useSelector(state=>state.windowInfo)
const message=useSelector(state=>state.message)
const ownItems=useSelector(state=>state.ownItems)
const wearItems=useSelector(state=>state.wearItems)
useInfoWindow(message[0].backpack,windowInfo,"backpack")
const clickItemRef=useRef()
const containerRef=useRef()


useEffect(()=>{

    
    const {helmet,armor,weapon,shield,legs,shoe}=wearItems
    
    let tab=[...containerRef.current.childNodes]
    tab.forEach(el=>el.style.backgroundColor="gray")
    
    markWearItemInSellShop(ownItems,containerRef,helmet,"bp")
    markWearItemInSellShop(ownItems,containerRef,armor,"bp")
    markWearItemInSellShop(ownItems,containerRef,weapon,"bp")
    markWearItemInSellShop(ownItems,containerRef,shield,"bp")
    markWearItemInSellShop(ownItems,containerRef,legs,"bp")
    markWearItemInSellShop(ownItems,containerRef,shoe,"bp")

    console.info("wykonuj sie yo")
    })


const wearItem=(el)=>{
    if(el.id==="potion"){
        dispatch(setNewValueHp(skills.hpTotal))
        dispatch(setNewValueMana(skills.mana.manaTotal))
        dispatch(handleManaHpPotion(el.hash))
        clickItemRef.current.style.background=`red`
        return
    }
    
    dispatch(dressUp(el)) 
}

    const ownedItems=useSelector((state)=>state.ownItems)
    console.info("REFRESH COMPONENT")
    return ( <div className={s.container}ref={containerRef}>

{ownedItems.map(el=>{
    return(
        <div
        id={el.hash}
        ref={clickItemRef}
        key={el.hash}
         className={s.slot}
         onClick={(e)=>wearItem(el)}
         >
           
             <img  className={s.itemInSlot} src={el.grafika}/>
             </div>
    )
})}


    </div> );
}
 
export default BackPack;