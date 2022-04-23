import s from '../styles/SmallComponentStyle/BackPack.module.scss'
import { useSelector,useDispatch } from 'react-redux'
import { dressUp } from '../redux/Slice/WearItems'
import {useState} from 'react'
import { setNewValueHp } from '../redux/Slice/Levels'
const BackPack = () => {
const dispatch=useDispatch()
const skills=useSelector(state=>state.skills)
const wearItem=(el)=>{
    if(el.id==="potion"){
        dispatch(setNewValueHp(skills.hpTotal))
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