import s from '../styles/SmallComponentStyle/Player.module.scss'
import { useDispatch,useSelector } from 'react-redux';
import { useState,useRef,useEffect,useCallback } from 'react';
import React from 'react';
import { countDefFromArmor, getLevel, setNewValueHp } from '../redux/Slice/Levels';
import { useCountFromEq } from '../Modules/useCountFromEq';
import { takeOffLostItem } from '../redux/Slice/WearItems';
import { createDataAttribute } from '../Modules/createDataAttribute';
import { subRateHp,setRateHp, setRateDef } from '../redux/Slice/OverallSlice';
import { handleHp } from '../Modules/handleHp';
import { setRateExp } from '../redux/Slice/OverallSlice';

const Player = () => {
console.info("PLAYER COMPONENT")

    const skills=useSelector((state)=>state.skills)
    const monsters=useSelector((state)=>state.monsters)
    const overall=useSelector((state)=>state.overall)
    const wear=useSelector((state)=>state.wearItems)
    const ownItems=useSelector((state)=>state.ownItems)
    const facadeCharacter=useSelector((state)=>state.setFacada)
 const menuOption=useSelector((state)=>state.menuOption.option)

    const hpRef=useRef(null)
    const levelRef=useRef(null)
    const defFromArmor=useRef(null)
    const infoAboutItemRef=useRef(null)
    const img1Ref=useRef()
    const img2Ref=useRef()
    const img3Ref=useRef()
    const img4Ref=useRef()
    const img5Ref=useRef()
    const img6Ref=useRef()
    const containerRef=useRef()

    const dispatch=useDispatch()

useCountFromEq("def")
useCountFromEq("atak")

useEffect(()=>{
if(menuOption==="tawerna"){
containerRef.current.style.gridColumn="2/3"

}
 else if(menuOption==="shop"){
    containerRef.current.style.gridColumn="2/3"
    
    }
else{
    containerRef.current.style.gridColumn="2/4"
}
},[menuOption])


useEffect(()=>{
    // dispatch(setRateDef(handleHp(skills.defArmorTotal,skills.defArmor)))
dispatch(setRateHp(handleHp(skills.hpTotal,skills.hpLevel)))

    levelRef.current.style.width=overall.rateExp+"%"
    defFromArmor.current.style.width=overall.rateDefArmor+"%"
  hpRef.current.style.width=overall.rateHp+"%"
  console.info("REFRESH PLAYER COMPONENT")
  if(skills.hpLevel<=0){
      dispatch(setNewValueHp(50))
  }

},[skills.hpTotal,skills.hpLevel,overall.rateHp,skills.defArmor,overall.rateExp,wear])

console.info(skills.level.exp)
console.info(skills.level.totalExp)


useEffect(()=>{
    createDataAttribute(img1Ref.current,wear.helmet)   
    createDataAttribute(img2Ref.current,wear.armor)   
    createDataAttribute(img3Ref.current,wear.weapon)   
    createDataAttribute(img4Ref.current,wear.shield)   
    createDataAttribute(img5Ref.current,wear.legs)   
    createDataAttribute(img6Ref.current,wear.shoe) 
   
})
useEffect(()=>{
    const infoAboutItem=document.createElement("div")
    infoAboutItemRef.current=infoAboutItem
    infoAboutItem.className=s.infoAboutItem
    document.body.appendChild(infoAboutItem)
},[])

useEffect(()=>{

},[skills.level.exp])

const showDetail=(e)=>{

    
 if(e.target.src){
infoAboutItemRef.current.style.left=e.target.x +"px"
infoAboutItemRef.current.style.top=e.target.y +"px"
infoAboutItemRef.current.style.opacity=1
infoAboutItemRef.current.style.transform=`scale(1)`
infoAboutItemRef.current.innerHTML=`<div class="InfoAboutItemPlayerComponent">
<h5>${e.target.dataset.name}</h5>
<img  src=${e.target.dataset.img}/>
<h6>Def:${e.target.dataset.def}</h6>
<h6>Atak:${e.target.dataset.atak}</h6>
</div>`

 }

 setTimeout(()=>{
    infoAboutItemRef.current.style.transform=`scale(0)`
    return
 },2000)
}



    return ( <div className={s.container} ref={containerRef}>
<img className={s.imgCharacter} src={facadeCharacter.profession}></img>
<div className={s.eq}  >
    <h1 className={s.name}>{facadeCharacter.name}</h1>

    <div className={s.helmet}>
    <img className={s.itemsRatio}
    onMouseEnter={showDetail}
    style={wear.helmet!==null?{opacity:"1"}:{opacity:"0",border:"10px solid red"}}
    src={wear.helmet!==null?wear.helmet.dataItem.grafika:null}
    ref={img1Ref}
    />
    </div>
    <div className={s.armor} onMouseOver={showDetail}>  
    <img className={s.itemsRatio}
        style={wear.armor!==null?{opacity:"1"}:{opacity:"0",border:"10px solid red"}}
    src={wear.armor!==null?wear.armor.dataItem.grafika:null}
    ref={img2Ref}
     />
    </div>
    
    <div className={s.weapon} onMouseOver={showDetail}>
        <img className={s.itemsRatio}
            style={wear.weapon!==null?{opacity:"1"}:{opacity:"0",border:"10px solid red"}}
        src={wear.weapon!==null?wear.weapon.dataItem.grafika:null}
        ref={img3Ref}
     />
     </div>
    <div className={s.shield}  onMouseOver={showDetail}>
    <img className={s.itemsRatio}
        style={wear.shield!==null?{opacity:"1"}:{opacity:"0",border:"10px solid red"}}
        src={wear.shield!==null?wear.shield.dataItem.grafika:null}
        ref={img4Ref}
     />
    </div>
    <div className={s.legs}  onMouseOver={showDetail}>
    <img className={s.itemsRatio}
        style={wear.legs!==null?{opacity:"1"}:{opacity:"0",border:"10px solid red"}}
        src={wear.legs!==null?wear.legs.dataItem.grafika:null}
        ref={img5Ref}
     />
    </div>

    <div className={s.shoe}   onMouseOver={showDetail}><img
     className={s.itemsRatio}
     style={wear.shoe!==null?{opacity:"1"}:{opacity:"0",border:"10px solid red"}}
     src={wear.shoe!==null?wear.shoe.dataItem.grafika:null}
     ref={img6Ref}
      /></div>
      <div className={s.gold}>
          <span className={s.spanAmountGold}>{skills.gold}</span>
      </div>
      <div className={s.strenght}>
          <img className={s.img} src={"/atak-power.png"}/>
          <span className={s.displayStrenght}>{skills.strenght.total}</span>
      </div>
</div>
<div className={s.pakSkills}>

 

        <div className={s.stageHp}>
            
            <span ref={hpRef}  className={s.spanHp}></span>
            <span ref={defFromArmor}  className={s.defFromArmor}></span>
            <span style={{position:"absolute",zIndex:"10"}}>{skills.hpLevel}</span>
        </div>
        
        <div className={s.stageLevel}>
            
            <span ref={levelRef}  className={s.spanLevel}></span>
            <span style={{position:"absolute",zIndex:"10"}}>{skills.level.lvl}</span>
        </div>

        <div className={s.stageMagic}>
            
            <span  className={s.spanMagic}></span>
            <span style={{position:"absolute",zIndex:"10"}}>{skills.magicLevel.lvl}</span>
        </div>

        <div className={s.stageRespect}>
            
            <span  className={s.spanRespect}></span>
            <span style={{position:"absolute",zIndex:"10"}}>{skills.respect}</span>
        </div>

</div>

    </div> );
}
 
export default Player;