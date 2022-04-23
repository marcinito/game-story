import s from '../styles/SmallComponentStyle/Tawerna.module.scss'
import {useRef,useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Choice from './TawernaPak/Choice'
import Cubic from './TawernaPak/Cubic'
import { changeOptionTawerna } from '../redux/Slice/MenuOptions'

import OneHandBandit from './TawernaPak/OneHandBandit'
const Tawerna = () => {
const [headBack,setHeadBack]=useState(false)

const menuTawerna=useSelector((state)=>state.menuOption.optionTawerna)
const containerRef=useRef()
const dispatch=useDispatch()
const whatDispaly=()=>{

    switch(menuTawerna){
        case "choice":
            return <Choice/>;
            case "cubic":
                return <Cubic fn={setHeadBack}/>
                case "oneHandBandit":
                return <OneHandBandit fn={setHeadBack} />
    }
}


    return ( <div className={s.container} ref={containerRef}>
        <div className={s.baner}></div>
        <div className={s.choice} >{whatDispaly()}</div>
        <button className={s.btnBack} onClick={()=>dispatch(changeOptionTawerna("choice"))} disabled={headBack} >↶</button>
    </div> );
}
 
export default Tawerna;