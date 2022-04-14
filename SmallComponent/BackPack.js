import s from '../styles/SmallComponentStyle/BackPack.module.scss'
import { useSelector,useDispatch } from 'react-redux'
import { dressUp } from '../redux/Slice/WearItems'
import {useState} from 'react'
const BackPack = () => {
const dispatch=useDispatch()
const wearItem=(el)=>{
    console.log(el)

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