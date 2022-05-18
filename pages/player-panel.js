import DashBoardGame from '../SmallComponent/DashboardGame';
import DisplayOption from '../SmallComponent/DisplayOption';
import Player from '../SmallComponent/Player';
import s from '../styles/PlayerPanel.module.scss'
import { useSelector,useDispatch } from 'react-redux';
import { useEffect,useLayoutEffect,useRef,useState } from 'react';
import { openCloseWindowMessage } from '../redux/Slice/infoWindowSlice';
import { changeOption } from '../redux/Slice/MenuOptions';
const PlayerPanel = () => {
    const [focusOption,setFocusOption]=useState(5)
const playercomponentRef=useRef()
const containerRef=useRef()
const displayRef=useRef()
const menuOption=useSelector((state)=>state.menuOption)
    const dispatch=useDispatch()

const checkResize=()=>{
    window.addEventListener("resize",()=>{
        if(window.innerWidth>1100){
            dispatch(changeOption("backpack"))
        }
    })
}
useEffect(()=>{
    console.info("render")
    if(window.innerWidth<1100){
        dispatch(changeOption("player"))
     
    }
    if(window.innerWidth>1100 && menuOption.option==="default"){
        dispatch(changeOption("backpack"))
     }
    if(menuOption.option==="default"){
    dispatch(openCloseWindowMessage("open"))
    }
   checkResize()
},[])



    return ( <div ref={containerRef} className={s.containerPlayerPanel}>
    
         <div ref={playercomponentRef} className={s.player}><Player/></div>
        <div className={s.dashboard} focus={focusOption}><DashBoardGame/></div>
        <div ref={displayRef} className={s.displayOption}><DisplayOption/></div>

    </div> );
}
 
export default PlayerPanel;