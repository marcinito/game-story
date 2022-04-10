import s from '../styles/Nav.module.scss'

const Navbar = () => {
    return ( 
    
    <div className={s.logo}>
     
<div className={`${s.divLogo} ${s.firstDiv}`}></div>
<div className={`${s.divLogo} ${s.secondDiv}`}></div>
<div className={`${s.divLogo} ${s.thirdDiv}`}></div>
<div className={`${s.divLogo} ${s.fourDiv}`}></div>
<h1 className={s.h1TitlePage0}>Game Story</h1>
<h1 className={s.h1TitlePage1}>Game Story</h1>
</div>

    
    );
}
 
export default Navbar;



