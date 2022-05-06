import s from '../styles/SmallComponentStyle/Player.module.scss'
import { useDispatch,useSelector } from 'react-redux';
import { useState,useRef,useEffect,useCallback } from 'react';
import React from 'react';
import { setNewValueHp, setNewValueMana,getMagicExp,getMagicLevel, getAtakFromMonster } from '../redux/Slice/Levels';
import { useCountFromEq } from '../Modules/useCountFromEq';
import { takeOffLostItem } from '../redux/Slice/WearItems';
import { createDataAttribute } from '../Modules/createDataAttribute';
import { subRateHp,setRateHp, setRateDef, setRateMana } from '../redux/Slice/OverallSlice';
import { handleHp } from '../Modules/handleHp';
import { setRateMagic } from '../redux/Slice/OverallSlice';
import { finishSpells, useSpells } from '../redux/Slice/Spells';
import { monsterGetAtak } from '../redux/Slice/Monsters';
import {useRouter} from 'next/router'
import { setRateExp } from '../redux/Slice/OverallSlice';

const Player = (props) => {
const [disabledExevoVis,setDisabledExevoVis]=useState(false)
const [disabledExevoMort,setDisabledExevoMort]=useState(false)
const [disabledExura,setDisabledExura]=useState(false)
const [disabledExuraVita,setDisabledExuraVita]=useState(false)
const [cycleLifeSpell,setCycleLifeSpell]=useState("start")

    const router=useRouter()
    const skills=useSelector((state)=>state.skills)
    const monsters=useSelector((state)=>state.monsters)
    const overall=useSelector((state)=>state.overall)
    const wear=useSelector((state)=>state.wearItems)
    const ownItems=useSelector((state)=>state.ownItems)
    const facadeCharacter=useSelector((state)=>state.setFacada)
    const menuOption=useSelector((state)=>state.menuOption.option)

    const spellsRef=useRef()
    const hpRef=useRef(null)
    const levelRef=useRef(null)
    const magicLevelRef=useRef(null)
    const defFromArmor=useRef(null)
    const manaRef=useRef(null)
    const infoAboutItemRef=useRef(null)
    const img1Ref=useRef()
    const img2Ref=useRef()
    const img3Ref=useRef()
    const img4Ref=useRef()
    const img5Ref=useRef()
    const img6Ref=useRef()
    const containerRef=useRef()
    const dispatch=useDispatch()

    const exevoVisRef=useRef()
    const exevoMortRef=useRef()
    const exuraRef=useRef()
    const exuraVitaRef=useRef()

useCountFromEq("def")
useCountFromEq("atak")
//How to customize size of primary component//
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
    dispatch(setRateDef(handleHp(skills.def.defArmorTotal,skills.def.defArmor)))
dispatch(setRateHp(handleHp(skills.hpTotal,skills.hpLevel)))
dispatch(setRateMana(handleHp(skills.mana.manaTotal,skills.mana.mana)))
dispatch(setRateMagic(handleHp(skills.productExp.magicExp,skills.magicLevel.exp)))
dispatch(setRateExp(handleHp(skills.productExp.levelExp,skills.level.exp)))
    levelRef.current.style.width=overall.rateExp+"%"
    magicLevelRef.current.style.width=overall.rateMagicExp+"%"
    defFromArmor.current.style.width=overall.rateDefArmor+"%"
  hpRef.current.style.width=overall.rateHp+"%"
  manaRef.current.style.width=overall.rateMana+"%"
 

},[
    overall.rateMana,skills.mana.mana,
    skills.hpTotal,skills.hpLevel,overall.rateHp,
    skills.def.defArmor,overall.rateDefArmor,overall.rateExp,wear,
    skills.mana.manaTotal,skills.magicLevel.exp,
    skills.magicLevel.totalExp,skills.level.exp,overall.rateMagicExp,
    overall.rateExp])
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

//Display panel with spells if you are on battle fields//
useEffect(()=>{
    if(router.pathname==="/forest"){
        spellsRef.current.style.opacity=1
        spellsRef.current.style.zIndex=1
    }
})


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


const atakSpell=(costMana,concerningSpan,spell,timeReload,disabled,hitPower)=>{
    if(cycleLifeSpell==="start"){
       
    if(skills.mana.mana>=costMana){
        setCycleLifeSpell("end")
        concerningSpan.current.style.transition=`0s`
        concerningSpan.current.style.width=0+"%"
        disabled(true)
        if(monsters[0].hpLevel>0){
            dispatch(getAtakFromMonster(monsters[0].atak))
            }
        dispatch(setNewValueMana(skills.mana.mana-costMana))
        dispatch(useSpells(spell))
            dispatch(getMagicExp(70))
        setTimeout(()=>{
            setCycleLifeSpell("start")
            props.hitFromPlayer.current.textContent=hitPower
            props.hitFromPlayer.current.style.opacity=1
            setTimeout(()=>{
                props.hitFromPlayer.current.style.opacity=0
            },500)
            dispatch(useSpells(null))
            dispatch(monsterGetAtak(hitPower))
           console.info(timeReload,"timeReload")
            concerningSpan.current.style.transition=(timeReload/1000)+"s"+" linear"
            concerningSpan.current.style.width=`100%`
            setTimeout(()=>{
          disabled(false)
            },timeReload)
        },1400)
    }
    else{
        console.info("Za mało many")
    }
}
}

const cureSpell=(costMana,might,concerningSpan,disabled,reloadTime,obtainExp)=>{
    if(cycleLifeSpell==="start"){
    if(skills.mana.mana>=costMana){
        setCycleLifeSpell("end")
        concerningSpan.current.style.transition=`0s`
        concerningSpan.current.style.width="0%"
        props.treatmentRef.current.style.opacity=1
        disabled(true)
        dispatch(getMagicExp(obtainExp))
        dispatch(setNewValueMana(skills.mana.mana-costMana))
        setTimeout(()=>{
            props.treatmentRef.current.style.opacity=0
            dispatch(setNewValueHp(skills.hpLevel+might))
            concerningSpan.current.style.transition=`${reloadTime/1000}s linear`
            concerningSpan.current.style.width="100%"
            setCycleLifeSpell("start")
            setTimeout(()=>{
                disabled(false)
            },reloadTime)
        },500)
        }
        else{
            console.info("Za mało many ziom!")
        }
    }
}

const activeSpell=(whichSpell,costMana)=>{
    switch(whichSpell){
        case "exura":
            cureSpell(costMana,50,exuraRef,setDisabledExura,1000,15)
            ;break;
        case "exura vita":
            cureSpell(costMana,100,exuraVitaRef,setDisabledExuraVita,2000,30)
          ;break;  
        case "exevo vis":
                atakSpell(costMana,exevoVisRef,"/spells/exevo-vis.webp",
                3000,setDisabledExevoVis,50)
           ;break;
            case "exevo mort":
                atakSpell(costMana,exevoMortRef,"/spells/exevo-mort.gif",
                2000,setDisabledExevoMort,90)
          ;break;
    }

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
<div className={s.spells} ref={spellsRef}>
   <button className={s.exura}   onClick={()=>activeSpell("exura",10)}><span ref={exuraRef}></span><h4>Exura</h4></button>
   <button className={s.exuraVita} disabled={skills.magicLevel.lvl<=2?true:disabledExuraVita} onClick={()=>activeSpell("exura vita",30)}><span ref={exuraVitaRef}></span><h4>Exura Vita</h4></button>
   <button className={s.exevoVis} disabled={skills.magicLevel.lvl<4?true:disabledExevoVis} onClick={()=>activeSpell("exevo vis",80)}>
       <span ref={exevoVisRef}></span><h4>Exevo Vis</h4></button>
   <button className={s.exevoMort} disabled={skills.magicLevel.lvl<7?true:disabledExevoMort} onClick={()=>activeSpell("exevo mort",80)}>
       <span ref={exevoMortRef}></span><h4>Exevo Mort</h4></button>
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
            
            <span  className={s.spanMagic} ref={magicLevelRef}></span>
            <span style={{position:"absolute",zIndex:"10"}}>{skills.magicLevel.lvl}</span>
        </div>

        <div className={s.stageMana}>
            
            <span  className={s.spanMana} ref={manaRef}></span>
            <span style={{position:"absolute",zIndex:"10"}}>{skills.mana.mana}</span>
        </div>

</div>

    </div> );
}
 
export default Player;