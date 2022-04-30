import s from '../styles/SmallComponentStyle/Shop.module.scss'
import {useState,useRef,useEffect, createElement} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyItems,markItemsWhichYouSell,sellItems } from '../redux/Slice/OwnItems'
import { debitFromAccout, paymentToAccount } from '../redux/Slice/Levels'
import BuyPanel from './ShopPak/BuyPanel'
import SellPanel from './ShopPak/SellPanel'
import { removeSoldItem } from '../redux/Slice/WearItems'
import checkIfObjectContain from '../Modules/checkIfObjectContain'
import markWearItemInSellShop from '../Modules/markWaerItemInSellShop'
import useInfoWindow from '../Modules/useInfoWindow'

const Shop = () => {

const allItems=useSelector((state)=>state.items)
const ownItems=useSelector((state)=>state.ownItems)
const skills=useSelector((state)=>state.skills)
const wearItems=useSelector((state)=>state.wearItems)
const message=useSelector((state)=>state.message)
const windowInfo=useSelector((state)=>state.windowInfo)
const [swapOption,setSwapOption]=useState(false)

const [targetItem,setTargetItem]=useState({name:"",grafika:null,atak:0,def:0,cost:0})
const [whatDisplay,setWhatDisplay]=useState(allItems)
const [prop,setProp]=useState("buy")
const dispatch=useDispatch()
const eqShopRef=useRef()
const panelShopRef=useRef()

useInfoWindow(message[0].shop,windowInfo,"shop")

useEffect(()=>{
    panelShopRef.current.style.transform=`scale(0)`
},[])

useEffect(()=>{
const {helmet,armor,weapon,shield,legs,shoe}=wearItems
if(prop==="sell"){
markWearItemInSellShop(ownItems,eqShopRef,helmet)
markWearItemInSellShop(ownItems,eqShopRef,armor)
markWearItemInSellShop(ownItems,eqShopRef,weapon)
markWearItemInSellShop(ownItems,eqShopRef,shield)
markWearItemInSellShop(ownItems,eqShopRef,legs)
markWearItemInSellShop(ownItems,eqShopRef,shoe)
}
})


useEffect(()=>{
if(prop==="buy")setWhatDisplay(allItems)
if(prop==="sell")setWhatDisplay(ownItems)
},[ownItems])

const showItem=(el)=>{
    console.info(el)
    panelShopRef.current.style.transform=`scale(1)`
setTargetItem(el)
setSwapOption(true)

}

const closePanel=()=>{
    panelShopRef.current.style.transform=`scale(0)`
    setSwapOption(false)
}

const buyItemsFromShop=(el)=>{
    setSwapOption(false)
    if(prop==="buy"){
dispatch(debitFromAccout(el.cost))
dispatch(buyItems(el))
    }
    if(prop==="sell"){
        console.info(el)
        dispatch(paymentToAccount(el.valueStall))
        dispatch(sellItems(el))
       
        
      
        if(checkIfObjectContain(wearItems,ownItems,el)){
            dispatch(removeSoldItem(el))
        }
       
      
       
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
            <div className={s.store} ref={eqShopRef}>
{whatDisplay.map((el,i,arr)=>{
  return(
    <div 
    key={Math.random()*123}
    id={el.hash}
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
        <button disabled={swapOption} className={s.btnBuy} onClick={()=>{setWhatDisplay(allItems);setProp("buy")}}>Buy</button>
        <button disabled={swapOption} className={s.btnSell} onClick={()=>{setWhatDisplay(ownItems);setProp("sell")}}>Sell</button>
    </div>
        </div>
     );
}
 
export default Shop;