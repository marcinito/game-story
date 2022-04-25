import s from '../styles/SmallComponentStyle/BackPack.module.scss'
import { useSelector,useDispatch } from 'react-redux'
import { dressUp } from '../redux/Slice/WearItems'
import {useState,useEffect} from 'react'
import { setNewValueHp } from '../redux/Slice/Levels'
import { openCloseWindowMessage } from '../redux/Slice/OverallSlice'
import { expireMessage, getMessageFromWordl } from '../redux/Slice/MessageSlice'
import useInfoWindow from '../Modules/useInfoWindow'
const BackPack = () => {
const dispatch=useDispatch()
const skills=useSelector(state=>state.skills)
const windowInfo=useSelector(state=>state.windowInfo)
const message=useSelector(state=>state.message)
console.info(windowInfo)
useInfoWindow(message[0].backpack,windowInfo,"backpack")



const wearItem=(el)=>{
    if(el.id==="potion"){
        dispatch(setNewValueHp(skills.hpTotal))
        return
    }
    dispatch(dressUp(el)) 
}

    const ownedItems=useSelector((state)=>state.ownItems)
    

    return ( <div className={s.container}>

{ownedItems.map(el=>{
    return(
        <div
        key={parseInt(Math.random()*345345)}
         className={s.slot}
         onClick={(e)=>wearItem(el)}
         >
             
             <img className={s.itemInSlot} src={el.grafika}/>
             </div>
    )
})}

<div className={s.logoBp}>
    
</div>
    </div> );
}
 
export default BackPack;