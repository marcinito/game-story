import s from '../styles/SmallComponentStyle/Shop.module.scss'
import {useState,useRef,useEffect, createElement} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyItems } from '../redux/Slice/OwnItems'
import { debitFromAccout } from '../redux/Slice/Levels'


const Shop = () => {

const allItems=useSelector((state)=>state.items)
const skills=useSelector((state)=>state.skills)
const [targetItem,setTargetItem]=useState({name:"",grafika:null,atak:0,def:0,cost:0})
const dispatch=useDispatch()
console.info(allItems)
const panelShopRef=useRef()

useEffect(()=>{
    panelShopRef.current.style.transform=`scale(0)`
},[])

const showItem=(el)=>{
    panelShopRef.current.style.transform=`scale(1)`
setTargetItem(el)
}
const closePanel=()=>{
    panelShopRef.current.style.transform=`scale(0)`
}

const buyItemsFromShop=(el)=>{
    console.info(el)
dispatch(debitFromAccout(el.cost))
dispatch(buyItems(el))

setTimeout(()=>{
    panelShopRef.current.style.transform=`scale(0)`
},500)
}


    return ( 
        <div className={s.container}>
{allItems.map((el,i,arr)=>{
  return(
    <div 
    key={parseInt(Math.random()*123123)}
    className={s.shopSlot}
    onClick={(e)=>showItem(el)}
    >
    <img className={s.imgSlot} src={el.grafika}></img>
</div>
  )
})}
<div ref={panelShopRef} className={s.panelBuy}>
    <img className={s.imgItems} src={targetItem.grafika} />
    <div className={s.describe}>
        <h1 className={s.h1Name}>{targetItem.name}</h1>
        <h4>Atack:{targetItem.atak}</h4>
        <h4>Deffence:{targetItem.def}</h4>
        <h4>Cost:{targetItem.cost}</h4>
        <div className={s.wallet}>Your money: {skills.gold} <img className={s.imgGold} src={"./ItemsGame/gold.jpg"}></img></div>
    </div>
    <div className={s.pakBtn}>
        <button onClick={()=>buyItemsFromShop(targetItem)} disabled={targetItem.cost>skills.gold}>Kup</button>
        <button onClick={()=>closePanel()} >Wyjdz</button>
    </div>
</div>
        </div>
     );
}
 
export default Shop;