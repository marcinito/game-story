import { useSelector,useDispatch } from "react-redux";
import s from '../styles/SmallComponentStyle/DisplayOption.module.scss'
import BackPack from "./BackPack";
import Shop from "./Shop";
import {useRouter} from 'next/router'
const DisplayOption = () => {
    const router=useRouter()
const whatDisplay=useSelector((state)=>state.menuOption.option)

    const selectedOption=()=>{
   
        switch(whatDisplay){
            case "shop":
                return(<Shop/>);
                case "backpack":
                    return(<BackPack/>);
                    case "tawerna":
                        return(<h1>Tawerna</h1>);
                        default:
                            return(<h1>Nic</h1>)

        }
      
    }


    return ( <div className={s.container}>
     {selectedOption()}
    </div> );
}
 
export default DisplayOption;