import useInfoWindow from '../../Modules/useInfoWindow'
import s from '../../styles/SmallComponentStyle/Shop.module.scss'
import { useSelector,useDispatch } from 'react-redux'
const SellPanel=({tarItem,gold,buy,closeP})=>{
    const message=useSelector((state)=>state.message)
    const windowInfo=useSelector((state)=>state.windowInfo)
    useInfoWindow(message[0].shopSell,windowInfo,"shopSell")
    return (
        <>
        <div className={s.describe}>
      
        <h4>Value in Stall:{tarItem.cost}</h4>
        <div className={s.wallet}>Your money: <span>{gold}</span> <img className={s.imgGold} src={"./ItemsGame/gold.png"}></img></div>
    </div>
    <div className={s.pakBtn}>
        <button onClick={()=>buy(tarItem)}>Sell</button>
        <button onClick={()=>closeP()} >Wyjdz</button>
    </div> 
    </>
    )
}

export default SellPanel