export default function markWearItemInSellShop(ownItems,eqShopRef,whichPart,from){
    ownItems.forEach((el,i,arr)=>{

        if(el.hash===(whichPart!==null?whichPart.dataItem.hash:null)){
             let elemnts=[...eqShopRef.current.childNodes]
             elemnts.forEach((el2)=>{
                 if(el2.getAttribute("id")===el.hash.toString()){
                    if(from==="shop")el2.style.borderImageWidth="25px"
                     
                     if(from==="bp")el2.style.backgroundColor="darkorange"
                     
                    
                 }
             })
            
             
        }
    })
}