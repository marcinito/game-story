import s from '../../styles/SmallComponentStyle/Shop.module.scss'
const BuyPanel=({tarItem,gold,buy,closeP})=>{
    
    return (
        <>
        <div className={s.describe}>
      
        <h4>{tarItem.id==="potion"?`Use: ${tarItem.use}`:`Attack: ${tarItem.atak}`}</h4>
        <h4 style={{color:"brown"}}>{tarItem.id==="potion"?`${tarItem.describe}`:`Deffence: ${tarItem.def}`}</h4>
        <h4>Cost:{tarItem.cost}</h4>
        <div className={s.wallet}>Your money: <span>{gold}</span> <img className={s.imgGold} src={"./ItemsGame/gold.png"}></img></div>
    </div>
    <div className={s.pakBtn}>
        <button onClick={()=>buy(tarItem)} disabled={tarItem.cost>gold}>Kup</button>
        <button onClick={()=>closeP()} >Wyjdz</button>
    </div> 
    </>
    )
}
export default BuyPanel