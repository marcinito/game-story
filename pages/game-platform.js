import s from '../styles/gamePlatform.module.scss'
import Link from "next/link"

const GamePlatform = () => {
    return ( <div className={s.container}>
<div className={s.firstGame}>
    <div className={s.imgGame}>
        <img src={"./fura.png"}></img>
    </div>
    <div className={s.describeGame}>
      <Link href="/first-game">Gra polega na pokonaniu głownego bosa</Link>
    </div>
</div>
<div className={s.secondGame}>
<div className={s.imgGame}>
        <img src={"./fura.png"}></img>
    </div>
<div className={s.describeGame}>
Gra polega na pokonaniu głownego bosa
</div>
</div>
<div className={s.thirdGame}>
<div className={s.imgGame}>
        <img src={"./fura.png"}></img>
    </div>
<div className={s.describeGame}>
Gra polega na pokonaniu głownego bosa
</div>
</div>

    </div> );
}
 
export default GamePlatform;