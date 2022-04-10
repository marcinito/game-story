import s from '../styles/Below.module.scss'
import {useRef,useState,useEffect} from 'react'

import answerRobot from '../Modules/answerRobot'
import userMessage from '../Modules/userMessage'
const Below = () => {

const [stan,setStan]=useState(10)
const [flag,setFlag]=useState("close")
const [conversation,setConversation]=useState("siema")
const [arrayDialog,setArrayDialog]=useState([
    {txt:`Co chcesz wiedziec:`,id:"robot"},
    {txt:`kliknij w poniższe wiadomości`,id:"robot"},
    {txt:`Czego dotyczy ta strona?`,id:"robot",propQuestion:true},
    {txt:`Jak często będzie dodawana gra?`,id:"robot",propQuestion:true},
    
    
])

const windowRef=useRef()
const dashboardRef=useRef()
const enterMessageRef=useRef()
const talkingRef=useRef()

useEffect(()=>{
setTimeout(()=>{
handleWindow()
},2000)
},[])
    const handleWindow=(e)=>{
   
        //Close Window//
       if(flag==="open"){
           windowRef.current.style.height="50%"
           dashboardRef.current.style="height:100%"
           dashboardRef.current.children[0].textContent="OPEN CHAT"
           dashboardRef.current.children[0].style.width="100%"
           enterMessageRef.current.style.transform="scale(0)"
           talkingRef.current.style.transform="scale(0)"
setFlag("close")
return
       }
       //Open WINDOW//
       if(flag=="close"){
        windowRef.current.style.height="calc(100% * 7)"
        dashboardRef.current.style="height:10%"
        dashboardRef.current.children[0].textContent="X"
        dashboardRef.current.children[0].style.width="8%"
        enterMessageRef.current.style.transform="scale(1)"
        talkingRef.current.style.transform="scale(1)"
        setFlag("open")
       }
    }
const sendMessage=()=>{
    setArrayDialog([...arrayDialog,userMessage(conversation)])
    setTimeout(()=>{
        setArrayDialog([...arrayDialog,userMessage(conversation),answerRobot(conversation)])
    },1000)
    setConversation("")
}
const answerForPropQuestion=(question)=>{
setArrayDialog([...arrayDialog,answerRobot(question)])
}

console.info(arrayDialog)
    return ( 
        <div className={s.below}>
              <div className={s.information} ref={windowRef}>
       <div className={s.dashboard} ref={dashboardRef}>
           <button  className={s.btnCloseWindow} onClick={(e)=>handleWindow(e)}>OPEN CHAT</button>
       </div>
       <div className={s.talking} ref={talkingRef}>
           {arrayDialog.map((el,i,arr)=>{
                 console.info(el)
              return( <div
            
              key={Math.random()*123123123}>
                   <h4 
                    className={el.id==="user"?`${s.userMessage}`:el.propQuestion===true?
                    `${s.specialQuestion}`:`${s.robotMessage}`}
                   onClick={el.propQuestion===true?
                   ()=>{answerForPropQuestion(el.txt)}:null}>{el.txt}
                   </h4>
                 {el.id==="robot" && el.hasOwnProperty('txt2') ?<h4 
                  className={el.id==="user"?`${s.userMessage}`:el.propQuestion===true?
                  `${s.specialQuestion}`:`${s.robotMessage}`}
                 >{el.txt2}</h4>:null}
               </div>
              )
           })}
       </div>
       <div ref={enterMessageRef} className={s.enterMessage}>
           <textarea className={s.textArea} value={conversation} 
           onChange={(e)=>setConversation(e.target.value)} ></textarea>
           <button className={s.btnSend} onClick={()=>sendMessage()}>SEND</button>
       </div>
     </div>
  
        </div>
     );
}
 
export default Below;