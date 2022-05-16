import DashBoardGame from '../SmallComponent/DashboardGame';
import DisplayOption from '../SmallComponent/DisplayOption';
import Player from '../SmallComponent/Player';
import s from '../styles/PlayerPanel.module.scss'
import { useSelector,useDispatch } from 'react-redux';
import { useEffect,useLayoutEffect,useRef,useState } from 'react';
import { openCloseWindowMessage } from '../redux/Slice/infoWindowSlice';
import { changeOption } from '../redux/Slice/MenuOptions';
const PlayerPanel = () => {
    const [resize,setResize]=useState(true)
const playercomponentRef=useRef()
const containerRef=useRef()
const menuOption=useSelector((state)=>state.menuOption)
    const dispatch=useDispatch()
console.info("panel")


const resizeDetec=()=>{
    window.addEventListener("resize",()=>{
        if(window.innerWidth>1100){
            dispatch(changeOption("backpack"))
        }
    })
}


useEffect(()=>{
    resizeDetec()
    if(menuOption.option==="default"){
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