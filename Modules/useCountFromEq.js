import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { countDefFromArmor ,countAtakFromArmor} from "../redux/Slice/Levels"
export const useCountFromEq=(whatCount)=>{
    const wear=useSelector((state)=>state.wearItems)
    const skills=useSelector((state)=>state.skills)
    const dispatch=useDispatch()
    useEffect(()=>{
        const {helmet,armor,weapon,shield,legs,shoe} = wear
        let arrayCount=[helmet,armor,weapon,shield,legs,shoe]
  
        
        let score=arrayCount.map((el,i,arr)=>{
          
            if(el!==null){
                if(whatCount==="def"){
        return el.dataItem.def
                }
                if(whatCount==="atak"){
                    return el.dataItem.atak 
                }
            }
            else{
               return el=0
            }
         
        })
        score=score.reduce((total,sum)=>{
            total+=sum
            return total
        })
     
        if(whatCount==="def"){
        dispatch(countDefFromArmor(score))
        }
        if(whatCount==="atak"){
            dispatch(countAtakFromArmor(score))
        }
      
        },[wear])
}