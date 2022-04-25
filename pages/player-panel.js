import DashBoardGame from '../SmallComponent/DashboardGame';
import DisplayOption from '../SmallComponent/DisplayOption';
import Player from '../SmallComponent/Player';
import s from '../styles/PlayerPanel.module.scss'
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { openCloseWindowMessage } from '../redux/Slice/infoWindowSlice';
const PlayerPanel = () => {
    const dispatch=useDispatch()
useEffect(()=>{
    console.info("FROM PANEL-PLAYER")
    dispatch(openCloseWindowMessage("open"))
},[])
    return ( <div className={s.containerPlayerPanel}>
        <DashBoardGame/>
        <Player/>
        <DisplayOption/>

    </div> );
}
 
export default PlayerPanel;