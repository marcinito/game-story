import DashBoardGame from '../SmallComponent/DashboardGame';
import DisplayOption from '../SmallComponent/DisplayOption';
import Player from '../SmallComponent/Player';
import s from '../styles/PlayerPanel.module.scss'
import { useSelector,useDispatch } from 'react-redux';
import { useEffect,useRef,useState } from 'react';
import { openCloseWindowMessage } from '../redux/Slice/infoWindowSlice';
import { changeOption } from '../redux/Slice/MenuOptions';
const PlayerPanel = () => {
    const [resize,setResize]=useState(true)
const playercomponentRef=useRef()
const containerRef=useRef()
const menuOption=useSelector((state)=>state.menuOption)
    const dispatch=useDispatch()
console.info("PLAYER PANEL")
useEffect(()=>{
    if(window.innerWidth>1100){
        dispatch(changeOption(menuOption.option==="player"?"About":menuOption.option))
    }
},[])
const resizeAction=()=>{
  

    if(window.innerWidth>1100){
        playercomponentRef.current.style.transform=`scale(1)`
        dispatch(changeOption(menuOption.option))
        console.info("w gore")
    }
    if(window.innerWidth<1100 && window.innerWidth>1090){
       console.info("w dol")
        dispatch(changeOption(menuOption))
    }

}
useEffect(()=>{


    if(window.innerWidth>1100){
        playercomponentRef.current.style.transform=`scale(1)`
    }
 
})


useEffect(()=>{
   
    if(menuOption.option==="player"){
    dispatch(openCloseWindowMessage("open"))
    }
},[])
    return ( <div ref={containerRef} className={s.containerPlayerPanel}>
        <div className={s.dashboard}><DashBoardGame/></div>
        <div ref={playercomponentRef} className={s.player}><Player/></div>
        <div className={s.displayOption}><DisplayOption/></div>

    </div> );
}
 
export default PlayerPanel;