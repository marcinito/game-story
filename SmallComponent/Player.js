import s from '../styles/SmallComponentStyle/Player.module.scss'
import { useDispatch,useSelector } from 'react-redux';
import { useState,useRef,useEffect } from 'react';
import React from 'react';
import { countDefFromArmor } from '../redux/Slice/Levels';
import { useCountFromEq } from '../Modules/useCountFromEq';
const Player = () => {
    
    const skills=useSelector((state)=>state.skills)
    const wear=useSelector((state)=>state.wear)
    const facadeCharacter=useSelector((state)=>state.setFacada)
    const items=useSelector((state)=>state.items)
    const ownedItems=useSelector((state)=>state.ownItems)
  console.info(wear)
    const hpRef=useRef(null)
    const levelRef=useRef(null)
    const defFromArmor=useRef(null)

    
    const dispatch=useDispatch()

useCountFromEq("def")

useEffect(()=>{
    hpRef.current.style.width=skills.hp+"%"
    levelRef.current.style.width=skills.level.lvl+"%"
    defFromArmor.current.style.width=skills.defFromArmor+"%"
})
  useEffect(()=>{
      console.log("zmiana")
  },[wear])
const showDetail=(e)=>{
console.info(e.target)
}



    

    return ( <div className={s.container}>
<img className={s.imgCharacter} src={facadeCharacter.profession}></img>
<div className={s.eq}>
    <h1 className={s.name}>{facadeCharacter.name}</h1>
    <div className={s.helmet}>
    <img 
    className={s.itemsRatio}
        src={wear.helmet!==null?wear.helmet.dataItem.grafika:null}
     />
    </div>
    <div className={s.armor}>
    <img 
    className={s.itemsRatio}
        src={wear.armor!==null?wear.armor.dataItem.grafika:null}
     />
    </div>
    
    <div className={s.weapon} onMouseOver={showDetail}>
        <img 
    className={s.itemsRatio}
        src={wear.weapon!==null?wear.weapon.dataItem.grafika:null}
     />
     </div>
    <div className={s.shield}>
    <img 
    className={s.itemsRatio}
        src={wear.shield!==null?wear.shield.dataItem.grafika:null}
     />
    </div>
    <div className={s.legs}>
    <img 
    className={s.itemsRatio}
        src={wear.legs!==null?wear.legs.dataItem.grafika:null}
     />
    </div>
    {console.info(wear.shoe)}
    <div className={s.shoe}><img
     className={s.itemsRatio}
 
     src={wear.shoe!==null?wear.shoe.dataItem.grafika:null}
      /></div>
      <div className={s.gold}>
          <span className={s.spanAmountGold}>{skills.gold}</span>
      </div>
</div>
<div className={s.pakSkills}>

 
  
        <div className={s.stageHp}>
            
            <span ref={hpRef}  className={s.spanHp}></span>
            <span ref={defFromArmor}  className={s.defFromArmor}></span>
            <span style={{position:"absolute",zIndex:"10"}}>{skills.hp}</span>
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