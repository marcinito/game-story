import s from '../../styles/SmallComponentStyle/TawernaStyles/OneHandBandit.module.scss'
import { useState,useRef, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { debitFromAccout, paymentToAccount } from '../../redux/Slice/Levels';
import { buyItems } from '../../redux/Slice/OwnItems';
import useInfoWindow from '../../Modules/useInfoWindow';
const OneHandBandit = (props) => {
const [input,setInput]=useState({x:1,y:20,scaleY:0.2,scaleX:0.2})
const [check,setCheck]=useState([])
const [wonMoney,setWonMoney]=useState(null)
const [canIPlay,setCanIPlay]=useState(false)
const [display3,setDispaly3]=useState([
        {img:"/ItemsGame/gold.png",id:"box-gold"},
        {img:"/ItemsGame/demon-shield.png",id:"demon-shield"},
        {img:"/OneHandBandit/box-gold.png",id:"box-gold"},
{img:"/ItemsGame/dwarve-armor.png",id:"king-armor"},
])
const [display2,setDispaly2]=useState([  
{img:"/ItemsGame/dwarve-armor.png",id:"king-armor"},
{img:"/OneHandBandit/box-gold.png",id:"box-gold"},
{img:"ItemsGame/gold.png",id:"box-gold"},
{img:"/ItemsGame/demon-shield.png",id:"demon-shield"},])
const [display1,setDispaly1]=useState([{img:"/OneHandBandit/box-gold.png",id:"box-gold"},
        {img:"ItemsGame/gold.png",id:"box-gold"},
        {img:"/ItemsGame/demon-shield.png",id:"demon-shield"},
        {img:"/ItemsGame/dwarve-armor.png",id:"king-armor"},])

const dispatch=useDispatch()
const skills=useSelector((state)=>state.skills)

const [change1,setChange1]=useState(2)
const [change2,setChange2]=useState(0)
const [change3,setChange3]=useState(1)
const [finish,setFinish]=useState(true)

const refMachine=useRef()
const checkRef=useRef()
const awardRef=useRef()
const infoRef=useRef()
const windowInfo=useSelector((state)=>state.windowInfo)
const message=useSelector((state)=>state.message)

useInfoWindow(message[0].oneHandBandit,windowInfo,"oneHandBandit")

const play=()=>{
    props.fn(true)
   if(skills.gold<=0){
       console.log("Nie mozesz grac")
       infoRef.current.style.opacity=1
       setTimeout(()=>{
        infoRef.current.style.opacity=0
        props.fn(false)
       },3000)
       return
   }
    dispatch(debitFromAccout(1))
let dwa=setInterval(()=>{
    setChange1(Math.floor(Math.random()*4))
    setChange2(Math.floor(Math.random()*4))
    setChange3(Math.floor(Math.random()*4))
},200)

setTimeout(()=>{
    clearInterval(dwa)
    setFinish(!finish)
},1000)
}

useEffect(()=>{
    props.fn(false)
     setCheck([...checkRef.current.children])
  let result=check.filter((el,i,arr)=>{
      if(arr[0].src===arr[0].src && el.src===arr[1].src && el.src===arr[2].src){
          return el
      }
  })
if(result.length===3){
    props.fn(true)
console.info(check)
setCanIPlay(true)
    switch(check[0].src.slice(21)){
   
        case "/OneHandBandit/box-gold.png":
            dispatch(paymentToAccount(100));
            setWonMoney(100)
            break
            case "/ItemsGame/dwarve-armor.png":
                dispatch(buyItems({name: 'King Armor',
                 grafika: './ItemsGame/dwarve-armor.png',
                  atak: 5, def: 15, cost: 0,id:"armor",valueStall:80}));break
                  case "/ItemsGame/demon-shield.png":
                      dispatch(buyItems({name: 'DeMoN ShIeLd',
                       grafika: './ItemsGame/demon-shield.png',
                        atak: 5, def: 30, cost: 0,id:"shield",valueStall:45}));break
                        case "/ItemsGame/gold.png":
                            setWonMoney(20)
                            dispatch(paymentToAccount(20));break
    
    }
    awardRef.current.style.opacity=1
    setTimeout(()=>{
        awardRef.current.style.opacity=0
        setWonMoney(null)
        setCanIPlay(false)
        props.fn(false)
    },4000)
}


},[finish])


    return ( <div className={s.container}>
            <div className={s.machine} ref={refMachine}>
             
                <div className={s.one}></div>
                <div className={s.two}></div>
                <div className={s.three}></div>
                <div className={s.four}></div>
                <div className={s.five}></div>
                <div className={s.last}></div>
                <div className={s.seven}></div>
                <div className={s.eight}>
               
                </div>
                <div className={s.screen} >
                    <div className={s.award} ref={awardRef}>
                        <h1>Your award</h1>
                        <span>{wonMoney!==null?wonMoney:null}</span>
                        <img src={check.length>0?check[0].src.slice(21):null}/>
                    </div>
                    <div className={s.info} ref={infoRef}>
                        <h1>No money</h1>
                        <span>{skills.gold}</span>
                        <img src={"/ItemsGame/gold.png"}/>
                    </div>
                    <div className={s.firstPart}>
                   <img className={s.img} src={display3[change1].img}/>
                   <img className={s.img} src={display3[change2].img}/>
                   <img className={s.img} src={display3[change3].img}/>
                    </div>
                    <div className={s.secondPart} ref={checkRef}>
                    <img className={s.img} src={display2[change3].img}/>
                   <img className={s.img} src={display2[change2].img}/>
                   <img className={s.img} src={display2[change3].img}/>
                    </div>
                    <div className={s.thirdPart}>
                    <img className={s.img} src={display1[change1].img}/>
                   <img className={s.img} src={display1[change2].img}/>
                   <img className={s.img} src={display1[change3].img}/>
                    </div>
                </div>
                <button className={s.hand} onClick={()=>play()} disabled={canIPlay}><img src={"/OneHandBandit/play.png"}/></button>
                <div className={s.floor} ></div>
                <div className={s.wall} >
                    <img src={"/okno.png"} className={s.img}/>
                </div>
                <div className={s.secondWall}>
                <img src={"/wanted.png"} className={s.img}/>
                </div>
                <div className={s.thirdWall}></div>
                <div className={s.ceiling}></div>
            </div>
    </div> );
}
 
export default OneHandBandit;