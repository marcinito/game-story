import { useSelector,useDispatch } from "react-redux";
import s from '../styles/SmallComponentStyle/DisplayOption.module.scss'
import BackPack from "./BackPack";
import Shop from "./Shop";
import {useRouter} from 'next/router'
import { useEffect,useRef } from "react";
import Tawerna from "./Tawerna";
import About from "./About";
const DisplayOption = () => {
    const router=useRouter()
    const containerRef=useRef()
const whatDisplay=useSelector((state)=>state.menuOption.option)
useEffect(()=>{
    if(whatDisplay==="tawerna"){
    containerRef.current.style.gridColumn="3/5"
    console.info("wow")
    }
    else if(whatDisplay==="shop"){
        containerRef.current.style.gridColumn="3/5"
    }
    else{
        containerRef.current.style.gridColumn="4/5"
    }
    },[whatDisplay])

    const selectedOption=()=>{
   
        switch(whatDisplay){
            case "shop":
                return(<Shop/>);
                case "backpack":
                    return(<BackPack/>);
                    case "tawerna":
                        return(<Tawerna/>);
                        case "about":
                            return(<About/>);
                        default:
                            return(<About/>)

        }
      
    }


    return ( <div className={s.container} ref={containerRef}>
     {selectedOption()}
    </div> );
}
 
export default DisplayOption;