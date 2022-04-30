export default function checkIfObjectContain(object,objectToCompire,element){
    const {helmet,armor,legs,shield,weapon,shoe}=object
    let array=[helmet,armor,legs,shield,weapon,shoe]

    array=array.filter((el)=>{
        if(el!==null){
            if(el.dataItem.hash===element.hash)
            {
                return el
            }
        }
    })
  
return array.length>0?true:false



}