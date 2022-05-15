import { useSelector,useDispatch } from "react-redux";
import { openCloseWindowMessage } from "../redux/Slice/infoWindowSlice";
import { expireMessage, getMessageFromWordl } from '../redux/Slice/MessageSlice'
import { useEffect } from "react";
const useInfoWindow = (message,windowInfo,from) => {
const dispatch=useDispatch()
useEffect(()=>{
    if(message===true){
       
        dispatch(expireMessage(from))
        
        if(windowInfo.windowIsOpen===false){
            dispatch(openCloseWindowMessage("open"))
        }

dispatch(getMessageFromWordl(from))

    }

},[])

}
 
export default useInfoWindow;