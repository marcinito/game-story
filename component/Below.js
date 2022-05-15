import s from '../styles/Below.module.scss'
import {useRef,useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'


import { getMessageFromWordl, openWindowMessage } from '../redux/Slice/MessageSlice'
import { openCloseWindowMessage } from '../redux/Slice/infoWindowSlice'
const Below = () => {
const info=useSelector((state)=>state.message)
const windowIsOpen=useSelector((state)=>state.windowInfo)

const menuOption=useSelector((state)=>state.menuOption.option)



const [flag,setFlag]=useState("close")



const dispatch=useDispatch()

const windowRef=useRef()
const dashboardRef=useRef()
const enterMessageRef=useRef()
const talkingRef=useRef()


useEffect(()=>{
if(menuOption!=="player")
{
    setFlag("close")
}

},[menuOption])



useEffect(()=>{

if(windowIsOpen.windowIsOpen===true){
    handleWindow()
    
   
}
},[windowIsOpen])



useEffect(()=>{
    talkingRef.current.scrollTop=talkingRef.current.scrollHeight
})

    const handleWindow=(e)=>{
  
        //Close Window//
       if(flag==="open"){
           windowRef.current.style.height="50%"
           dashboardRef.current.style="height:100%"
        
           dashboardRef.current.children[0].style.width="100%"
           dashboardRef.current.children[0].textContent=``
         
           talkingRef.current.style.transform="scale(0)"
           dispatch(openCloseWindowMessage("close"))
         
setFlag("close")

return
       }
       //Open WINDOW//
       if(flag=="close"){
        windowRef.current.style.height="calc(100% * 9)"
        dashboardRef.current.style="height:10%"
        dashboardRef.current.children[0].textContent=`X`
        dashboardRef.current.children[0].style.width="12%"
     
        talkingRef.current.style.transform="scale(1)"
        setFlag("open")
       
      
       }
    }


    return ( 
        <div className={s.below}>
              <div className={s.information} ref={windowRef}>
       <div className={s.dashboard} ref={dashboardRef}>
           <button className={s.btn}  onClick={(e)=>handleWindow(e)}></button>
       </div>
       <div  ref={talkingRef} className={s.message}>
           {info.map((el,i,arr)=>{
       return (
           <div key={el.id} className={s.messages} >
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