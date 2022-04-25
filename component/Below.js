import s from '../styles/Below.module.scss'
import {useRef,useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'

import answerRobot from '../Modules/answerRobot'
import userMessage from '../Modules/userMessage'
import { getMessageFromWordl, openWindowMessage } from '../redux/Slice/MessageSlice'
import { openCloseWindowMessage } from '../redux/Slice/infoWindowSlice'
const Below = () => {
const info=useSelector((state)=>state.message)
const windowIsOpen=useSelector((state)=>state.windowInfo)
const windowInfo=useSelector((state)=>state.windowInfo)

const [flag,setFlag]=useState("close")
const [conversation,setConversation]=useState("siema")
console.info("REFRESH BELOW")

const dispatch=useDispatch()
console.info(windowIsOpen)
const windowRef=useRef()
const dashboardRef=useRef()
const enterMessageRef=useRef()
const talkingRef=useRef()

useEffect(()=>{
if(windowIsOpen.windowIsOpen===true){
    handleWindow()
    console.info("Jestem tutaj")
    
   
}
},[windowInfo])

useEffect(()=>{
    talkingRef.current.scrollTop=talkingRef.current.scrollHeight
})

    const handleWindow=(e)=>{
   
        //Close Window//
       if(flag==="open"){
           windowRef.current.style.height="50%"
           dashboardRef.current.style="height:100%"
           dashboardRef.current.children[0].textContent="OPEN CHAT"
           dashboardRef.current.children[0].style.width="100%"
         
           talkingRef.current.style.transform="scale(0)"
           dispatch(openCloseWindowMessage("close"))
          
setFlag("close")

return
       }
       //Open WINDOW//
       if(flag=="close"){
        windowRef.current.style.height="calc(100% * 7)"
        dashboardRef.current.style="height:10%"
        dashboardRef.current.children[0].textContent="X"
        dashboardRef.current.children[0].style.width="12%"
        
        talkingRef.current.style.transform="scale(1)"
        setFlag("open")
       }
    }
const sendMessage=()=>{
    setArrayDialog([...arrayDialog,userMessage(conversation)])
    setTimeout(()=>{
        setArrayDialog([...arrayDialog,userMessage(conversation),answerRobot(info)])
    },1000)
    setConversation("")
}


    return ( 
        <div className={s.below}>
              <div className={s.information} ref={windowRef}>
       <div className={s.dashboard} ref={dashboardRef}>
           <button className={s.btn}  onClick={(e)=>handleWindow(e)}>OPEN CHAT</button>
       </div>
       <div  ref={talkingRef} className={s.message}>
           {info.map((el,i,arr)=>{
       return (
           <div key={Math.floor(Math.random()*23323)} className={s.messages} >
              <div className={s.text}>{el.txt}<img src={el.img}/></div>
               </div>
       )     
       
           })}
       </div>
  
     </div>
  
        </div>
     );
}
 
export default Below;