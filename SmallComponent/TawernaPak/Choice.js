import s from "../../styles/SmallComponentStyle/TawernaStyles/Choice.module.scss"
import { useSelector,useDispatch } from "react-redux";
import { changeOptionTawerna } from "../../redux/Slice/MenuOptions";
const Choice = () => {

    const dispatch=useDispatch()


    return ( <div className={s.container} >
<div className={s.choice}>
        <div className={s.cubic} onClick={()=>dispatch(changeOptionTawerna("cubic"))} >
            <img className={s.img} src={'/kostak-do-gry.png'}/>
            <p>Try your luck and throw cubic</p>
        </div>
        <div className={s.oneHandBandit} onClick={()=>dispatch(changeOptionTawerna("oneHandBandit"))}>
            <img className={s.img} src={"./automat-do-gry.png"}/>
            <p className={s.p}>Check if you are lucky, a drank Jack say that after four beer you have more chance</p>
        </div>
        <div className={s.thirdGame}></div>
        
     
       
        </div>

    </div> );
}
 
export default Choice;