import s from '../styles/SmallComponentStyle/Shop.module.scss'
import {useState,useRef,useEffect, createElement} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyItems,sellItems } from '../redux/Slice/OwnItems'
import { debitFromAccout, paymentToAccount } from '../redux/Slice/Levels'
import BuyPanel from './ShopPak/BuyPanel'
import SellPanel from './ShopPak/SellPanel'
import { removeSoldItem } from '../redux/Slice/WearItems'






const Shop = () => {

const allItems=useSelector((state)=>state.items)
const ownItems=useSelector((state)=>state.ownItems)
const skills=useSelector((state)=>state.skills)
const wearItems=useSelector((state)=>state.wearItems)
const [targetItem,setTargetItem]=useState({name:"",grafika:null,atak:0,def:0,cost:0})
const [whatDisplay,setWhatDisplay]=useState(allItems)
const [prop,setProp]=useState("buy")
const dispatch=useDispatch()

const panelShopRef=useRef()

useEffect(()=>{
    panelShopRef.current.style.transform=`scale(0)`
},[])

useEffect(()=>{
if(prop==="buy")setWhatDisplay(allItems)
if(prop==="sell")setWhatDisplay(ownItems)
},[ownItems])

const showItem=(el)=>{
    panelShopRef.current.style.transform=`scale(1)`
setTargetItem(el)
}
const closePanel=()=>{
    panelShopRef.current.style.transform=`scale(0)`
}
console.info(wearItems)
const buyItemsFromShop=(el)=>{
  
    if(prop==="buy"){
dispatch(debitFromAccout(el.cost))
dispatch(buyItems(el))
    }
    if(prop==="sell"){
        console.info(el)
        dispatch(paymentToAccount(el.valueStall))
        dispatch(sellItems(el))
       
       
       dispatch(removeSoldItem(el))
       
            }
setTimeout(()=>{
    panelShopRef.current.style.transform=`scale(0)`
},500)
}
const whichWindowDisplay=(which)=>{
    if(which==="buy"){
        return(
        <BuyPanel tarItem={targetItem} gold={skills.gold} closeP={closePanel} buy={buyItemsFromShop}/>
        )
    }
    if(which==="sell"){
        return(
        <SellPanel tarItem={targetItem} gold={skills.gold} closeP={closePanel} buy={buyItemsFromShop}/>
        )
    }
}

    return ( 
        <div className={s.container}>
            <div className={s.store}>
{whatDisplay.map((el,i,arr)=>{
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
</div>
<div ref={panelShopRef} className={s.panelBuy}>
    <img className={s.imgItems} src={targetItem.grafika} />
    <h1 className={s.h1Name}>{targetItem.name}</h1>
    {whichWindowDisplay(prop)}

</div>
<div className={s.optionShop}>
        <button onClick={()=>{setWhatDisplay(allItems);setProp("buy")}}>Buy</button>
        <button onClick={()=>{setWhatDisplay(ownItems);setProp("sell")}}>Sell</button>
    </div>
        </div>
     );
}
 
export default Shop;