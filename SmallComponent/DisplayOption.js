import { useSelector,useDispatch } from "react-redux";
import s from '../styles/SmallComponentStyle/DisplayOption.module.scss'
import BackPack from "./BackPack";
import Shop from "./Shop";
import {useRouter} from 'next/router'
import { useEffect,useRef } from "react";
import Tawerna from "./Tawerna";
import About from "./About";
import Player from "./Player";
import Default from "./Default";
const DisplayOption = () => {
    
    const router=useRouter()
    const containerRef=useRef()
const whatDisplay=useSelector((state)=>state.menuOption.option)

console.info(whatDisplay,"--option")

    const selectedOption=()=>{
   
        switch(whatDisplay){
            case "shop":
                return(<Shop/>);
                case "backpack":
                    return(<BackPack/>);
                    case "tavern":
                        return(<Tawerna/>);
                        case "About":
                            return(<About/>);
                            case "player":
                                return(<Player/>)
                                case "default":
                                    return (<Default/>)
                       
                          
        }
      
    }


    return ( <div className={s.container} ref={containerRef}>
     {selectedOption()}
    </div> );
}
 
export default DisplayOption;