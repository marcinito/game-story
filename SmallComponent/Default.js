import s from "../styles/SmallComponentStyle/Default.module.scss"
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { changeOption } from "../redux/Slice/MenuOptions";
const Default = () => {


    return ( <div className={s.container}>

  <div className={s.one}></div>
  <div className={s.two}></div>
  <div className={s.three}></div>

    </div> );
}
 
export default Default;