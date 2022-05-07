import s from '../styles/SmallComponentStyle/DashBoardGame.module.scss'
import { useState, createContext } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { changeOption } from '../redux/Slice/MenuOptions';
import {useRouter} from 'next/router'
const DashBoardGame = () => {
    const router=useRouter()
    const dispatch=useDispatch()
    const sel=useSelector((state)=>state.menuOption)
 
   
    return ( <div className={s.containerDashBoardGame}>
        <button disabled={sel.optionTawerna==="cubic" || sel.optionTawerna==="oneHandBandit"}  className={s.shop} onClick={()=>dispatch(changeOption("shop"))} >Shop</button>
        <button disabled={sel.optionTawerna==="cubic" || sel.optionTawerna==="oneHandBandit"}  className={s.shop} onClick={()=>dispatch(changeOption("backpack"))}>Backpack</button>    
        <button disabled={sel.optionTawerna==="cubic" || sel.optionTawerna==="oneHandBandit"}  className={s.shop} onClick={()=>dispatch(changeOption("tawerna"))}>Tavern</button>    
        <button disabled={sel.optionTawerna==="cubic" || sel.optionTawerna==="oneHandBandit"} className={s.shop} onClick={()=>router.push("/forest")}>Fight</button>    
        <button disabled={sel.optionTawerna==="cubic" || sel.optionTawerna==="oneHandBandit"} className={s.shop} onClick={()=>dispatch(changeOption("About"))}>About</button>
        <div className={s.decoration}>
            <img src={"/kompas.png"}/>
            </div>    
    </div> );
}
 
export default DashBoardGame;