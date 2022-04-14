import DashBoardGame from '../SmallComponent/DashboardGame';
import DisplayOption from '../SmallComponent/DisplayOption';
import Player from '../SmallComponent/Player';
import s from '../styles/PlayerPanel.module.scss'

const PlayerPanel = () => {
    return ( <div className={s.containerPlayerPanel}>
        <DashBoardGame/>
        <Player/>
        <DisplayOption/>

    </div> );
}
 
export default PlayerPanel;