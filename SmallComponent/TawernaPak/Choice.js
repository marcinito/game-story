import s from "../../styles/SmallComponentStyle/TawernaStyles/Choice.module.scss"
import { useSelector,useDispatch } from "react-redux";
import { changeOptionTawerna } from "../../redux/Slice/MenuOptions";
const Choice = () => {

    const dispatch=useDispatch()


    return ( <div className={s.container} >
<div className={s.choice}>
        <div className={s.cubic} onClick={()=>dispatch(changeOptionTawerna("cubic"))} >
            <img className={s.img} src={'/kostak-do-gry.png'}/>
            <p>Spróboj szczęścia w grze w kości z lokalnymi bywalcami tawerny</p>
        </div>
        <div className={s.oneHandBandit} onClick={()=>dispatch(changeOptionTawerna("oneHandBandit"))}>
            <img className={s.img} src={"./automat-do-gry.png"}/>
            <p className={s.p}>Sprawdz czy los Ci sprzyja i zakręć w automat , szczerbaty Jack twierdzi że po pijaku lepiej idzie</p>
        </div>
        <div className={s.thirdGame}></div>
        
     
       
        </div>

    </div> );
}
 
export default Choice;