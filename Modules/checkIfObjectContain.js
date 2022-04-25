export default function checkIfObjectContain(object,objectToCompire,element){
    const {helmet,armor,legs,shield,weapon,shoe}=object
    let array=[helmet,armor,legs,shield,weapon,shoe]
console.info(element.hash)
    array=array.filter((el)=>{
     
        if(el!==null){
            console.info(el.dataItem.hash)
            console.info("-----up to z nalozonego --- down to z zaznaczonego")
            console.info(element.hash)
            if(el.dataItem.hash===element.hash)
            {
                return el
            }
        }
    })
  
if(array.length>0){
    console.info(array[0].dataItem.name)
    let check=objectToCompire.filter((el,i,arr)=>{el.name===array[0].dataItem.name})
    console.info(check)
    return array[0].dataItem.name
}

else{ 
    return false
}




}