import s from '../../styles/SmallComponentStyle/Shop.module.scss'
const SellPanel=({tarItem,gold,buy,closeP})=>{
    
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