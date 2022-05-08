import DashBoardGame from '../SmallComponent/DashboardGame';
import DisplayOption from '../SmallComponent/DisplayOption';
import Player from '../SmallComponent/Player';
import s from '../styles/PlayerPanel.module.scss'
import { useSelector,useDispatch } from 'react-redux';
import { useEffect,useRef } from 'react';
import { openCloseWindowMessage } from '../redux/Slice/infoWindowSlice';
const PlayerPanel = () => {
const playercomponentRef=useRef()
const menuOption=useSelector((state)=>state.menuOption)
    const dispatch=useDispatch()
console.info(menuOption.option)

useEffect(()=>{
    if(window.innerWidth>300){
      
        // playercomponentRef.current.style.opacity=0
        playercomponentRef.current.style.transform=`scale(0)`
    }
    if(window.innerWidth>500){
        // playercomponentRef.current.style.height=`0px`
        // playercomponentRef.current.style.width=`0px`
        playercomponentRef.current.style.opacity=1
    }
})


useEffect(()=>{
   
    if(menuOption.option==="player"){
    dispatch(openCloseWindowMessage("open"))
    }
},[])
    return ( <div className={s.containerPlayerPanel}>
        <div className={s.dashboard}><DashBoardGame/></div>
        <div ref={playercomponentRef} className={s.player}><Player/></div>
        <div className={s.displayOption}><DisplayOption/></div>

    </div> );
}
 
export default PlayerPanel;