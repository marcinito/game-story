import s from '../styles/SmallComponentStyle/DashBoardGame.module.scss'
import { useState, createContext } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { changeOption } from '../redux/Slice/MenuOptions';
import {useRouter} from 'next/router'
const DashBoardGame = () => {
    const router=useRouter()
    const dispatch=useDispatch()
    const sel=useSelector((state)=>state.menuOption.option)
   
    return ( <div className={s.containerDashBoardGame}>
        <div className={s.shop} onClick={()=>dispatch(changeOption("shop"))} >Shop</div>
        <div className={s.shop} onClick={()=>dispatch(changeOption("backpack"))}>Backpack</div>    
        <div className={s.shop} onClick={()=>dispatch(changeOption("tawerna"))}>Tawerna</div>    
        <div className={s.shop} onClick={()=>router.push("/forest")}>Walka</div>    
    </div> );
}
 
export default DashBoardGame;