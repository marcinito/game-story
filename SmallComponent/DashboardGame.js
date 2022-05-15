import s from '../styles/SmallComponentStyle/DashBoardGame.module.scss'
import { useEffect, useRef } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { changeOption } from '../redux/Slice/MenuOptions';
import {useRouter} from 'next/router'
const DashBoardGame = () => {
    const router=useRouter()
    const dispatch=useDispatch()
    const sel=useSelector((state)=>state.menuOption)
    const container=useRef()
    const querySelectorAllRef=useRef()
    const fightConfirmRef=useRef()

useEffect(()=>{
    //Focus on "your" card from dashboard
querySelectorAllRef.current=[...container.current.children]
querySelectorAllRef.current[5].classList.add(s.focusOption)
},[])
 const changeOptions=(e,prop)=>{
     if(prop==="forest"){
         console.info(prop)
         fightConfirmRef.current.style.transform=`scale(1)`
         
         return
     }
    querySelectorAllRef.current.forEach((el,i,arr)=>{
        el.classList.remove(s.focusOption)
    })
    e.target.classList.add(s.focusOption)
     dispatch(changeOption(prop))
 }
   
    return ( <div className={s.containerDashBoardGame} ref={container}>
        <button disabled={sel.optionTawerna==="cubic" || sel.optionTawerna==="oneHandBandit"}  className={`${s.defaultOption}`} onClick={(e)=>changeOptions(e,"shop")} >Shop</button>
        <button disabled={sel.optionTawerna==="cubic" || sel.optionTawerna==="oneHandBandit"}   className={`${s.defaultOption}`} onClick={(e)=>changeOptions(e,"backpack")}>Backpack</button>    
        <button disabled={sel.optionTawerna==="cubic" || sel.optionTawerna==="oneHandBandit"}   className={`${s.defaultOption}`} onClick={(e)=>changeOptions(e,"tawerna")}>Tavern</button>    
        <button disabled={sel.optionTawerna==="cubic" || sel.optionTawerna==="oneHandBandit"}  className={`${s.defaultOption}`} onClick={(e)=>changeOptions(e,"forest")} >Fight</button>    
        <button disabled={sel.optionTawerna==="cubic" || sel.optionTawerna==="oneHandBandit"}  className={`${s.defaultOption}`} onClick={(e)=>changeOptions(e,"About")}>About</button>
        <button  disabled={sel.optionTawerna==="cubic" || sel.optionTawerna==="oneHandBandit"}  className={`${s.player} ${s.defaultOption}`} onClick={(e)=>changeOptions(e,"player")}>You</button>
        <div className={s.decoration}>
            <img src={"/kompas.png"}/>
            </div> 
            <div ref={fightConfirmRef} className={s.confirmFight}>
                <h1 className={s.askAboutConfirmFight}>Are you aware pitfalls waiting for you?</h1>
                <button className={s.btnYes} onClick={()=>router.push("/forest")}>Yes</button>
                <button className={s.btnNo} onClick={()=>{fightConfirmRef.current.style.transform=`scale(0)`}}>No</button>
            </div>   
    </div> );
}
 
export default DashBoardGame;