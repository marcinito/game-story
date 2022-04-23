import s from '../../styles/SmallComponentStyle/TawernaStyles/Cubic.module.scss'

import React, { useState,useRef,useEffect } from 'react';
import { changeOptionTawerna } from '../../redux/Slice/MenuOptions';
import { useSelector,useDispatch } from 'react-redux'
import { debitFromAccout, paymentToAccount } from '../../redux/Slice/Levels';
const Cubic = (props) => {
    console.info(props)
    const [payment,setPayment]=useState(5)
    const [throwResult,setThrowResult]=useState("wait")
    const [endScore,setEndScore]=useState("...")
  
    const cubicRef=useRef()
    const betRef=useRef()

    const div1=useRef()
    const div2=useRef()
    const div3=useRef()
    const div4=useRef()
    const div5=useRef()
    const div6=useRef()
    
const dispatch=useDispatch()
const gold=useSelector((state)=>state.skills.gold)
useEffect(()=>{

if(throwResult===chosenNumber.current){
    setEndScore("You are Win!")
    setTimeout(()=>{
        setEndScore("...")
        props.fn(false)
    },1000)
dispatch(paymentToAccount(parseInt(payment)))
    return
}

else if(throwResult==="wait"){
    return
}
else if(throwResult!==chosenNumber.current){
    setEndScore("You are lost!")
    setTimeout(()=>{
        setEndScore("...")
        props.fn(false)
    },1000)
    dispatch(debitFromAccout(payment))
}


},[throwResult])

const chosenNumber=useRef(null)
let betArray=[1,2,3,4,5,6]


const drawDot=(howMany)=>{
    let tablica=[]
    for(let i=0;i<howMany;i++){
    tablica.push(howMany)
    }
   
return tablica
}

const throwCubic=()=>{
    props.fn(true)
    if(gold<payment){
        setEndScore("No money")
        setTimeout(()=>{
            setEndScore("...")
            props.fn(false)
        },2000)
     
        return
    }
    let score=[
        {x:180,y:90,result:1},{x:180,y:270,result:2},{x:270,y:360,result:3},{x:90,y:90,result:4},{x:170,y:0,result:5},
        {x:0,y:0,result:6}
]
    cubicRef.current.className=`${s.box} ${s.startAnimation}`
    setTimeout(()=>{
        let scoreResult=Math.floor(Math.random()*score.length)
        cubicRef.current.className=s.box
        cubicRef.current.style.transform=`
        rotateX(${score[scoreResult].x}deg) rotateY(${score[scoreResult].y}deg)`
        console.info(score[scoreResult].result)
        setThrowResult(score[scoreResult].result)
        if(throwResult===scoreResult+1){
            throwCubic()
        }
      
    },2000)
 
}



const makeBet=(e,el)=>{
 console.info("make bet")
let allOption=[...e.target.parentNode.children]
allOption.forEach(el=>el.style.borderWidth="0px")
e.target.style.borderWidth="10px"
chosenNumber.current=el
}

useEffect(()=>{
    let betNumber=[...betRef.current.children]
if(chosenNumber.current!==null){
    betNumber[chosenNumber.current-1].style.borderWidth="10px"
}

})



    return ( <div className={s.container}>

        <div className={s.box} ref={cubicRef}>
            <div  className={`${s.one} ${s.all}`} ref={div1}>
     {drawDot(1).map(el=>{
         return (
             <div key={Math.random()*7132} className={s.dot}></div>
         )
     })}
            </div>
            <div  className={`${s.two} ${s.all}` } ref={div2}  >
            {drawDot(2).map(el=>{
         return (
             <div key={Math.random()*7132} className={s.dot}></div>
         )
     })}
            </div>
            <div  className={`${s.three} ${s.all}`} ref={div3} >
            {drawDot(3).map(el=>{
         return (
             <div key={Math.random()*7132} className={s.dot}></div>
         )
     })}
            </div>
            <div  className={`${s.four} ${s.all}`} ref={div4}  >
            {drawDot(4).map(el=>{
         return (
             <div key={Math.random()*7132} className={s.dot}></div>
         )
     })}
            </div>
            <div  className={`${s.five} ${s.all}`} ref={div5} >
            {drawDot(5).map(el=>{
         return (
             <div key={Math.random()*7132} className={s.dot}></div>
         )
     })}
            </div>
            <div  className={`${s.last} ${s.all}`} ref={div6} >
            {drawDot(6).map(el=>{
         return (
             <div key={Math.random()*7132} className={s.dot}></div>
         )
     })}
            </div>
       
         
        </div>
        <div className={s.stake}>
            <div className={s.payment}>
                <img className={s.img} src={"/ItemsGame/gold.png"}/>
                <input className={s.range} type="range" value={payment} min="1" max="10" step="1"
                 onChange={(e)=>setPayment(e.target.value)}/>
                 <span className={s.amount}>{payment}</span>
            </div>
            <div className={s.gameResult}>
              <h1>{endScore}</h1>
            </div>
            <div className={s.bet} ref={betRef}>
          {betArray.map(el=>{
              return(
                  <div key={Math.random()*4542} className={s.betChoice} onClick={(e)=>makeBet(e,el)}>{el}</div>
              )
          })}
            </div>
    
        </div>
<button className={s.play} onClick={()=>throwCubic()}>Play</button>
    </div> );
}
 
export default Cubic;