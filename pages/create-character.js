
import s from '../styles/createCharacter.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { change } from '../redux/Slice/FacadeCharacter'
import {useState,useRef} from 'react'
import {useRouter} from 'next/router'
const CreateCharacter = () => {
const [dataFacade,setDataFacade]=useState({name:"",profession:"./druid.png"})
const nameRef=useRef()
 const dane=useSelector((state)=>state.setFacada)
    const dispatch=useDispatch()
 
const nav=useRouter()
const startGame=()=>{
    if(dataFacade.name.length<3){
    nameRef.current.style.backgroundColor="orange"
    nameRef.current.placeholder="przynajmniej wiecej niż 3 znaki"
    setTimeout(()=>{
        nameRef.current.style.backgroundColor="rgb(235, 245, 200)"
        nameRef.current.placeholder="Your Name"
    },1000)
    return
    }
    dispatch(change({name:dataFacade.name,profession:dataFacade.profession}))
    nav.push('/player-panel')
}

    return ( 
        <div className={s.container}>
<div className={s.windowInput}>
    <img className={s.blackBird} src={"./kruk.png"}></img>
    <img className={s.profession} src={dataFacade.profession}></img>
    <div className={s.inputPak}>
        <h1 className={s.h1}>Create Character</h1>
    <input
    ref={nameRef}
     type="text"
     value={dataFacade.name}
      placeholder="Your Name"
      onChange={(e)=>setDataFacade({...dataFacade,name:e.target.value})}
      ></input>
   <select
  
   onChange={(e)=>setDataFacade({...dataFacade,profession:e.target.value})}
    name="proffesion"
     >
       <option className={s.option}  value="Czarodziej" disabled>Czarodziej</option>
       <option className={s.option}  value="./druid.png">Druid</option>
       <option className={s.option}  value="./rycerz.png" >Rycerz</option>
       <option className={s.option}  value="Palladyn" disabled>Palladyn</option>
   </select>
   <button
    className={s.playButton}
    onClick={()=>startGame()}
    >Play</button>
   </div>
</div>
        </div>
     );
}
 
export default CreateCharacter;