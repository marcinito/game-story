export default function markWearItemInSellShop(ownItems,eqShopRef,whichPart){
    ownItems.forEach((el,i,arr)=>{

        if(el.hash===(whichPart!==null?whichPart.dataItem.hash:null)){
             console.info("ZGADZA SIE MORDECZKO MOJA KOCHANA")
             let elemnts=[...eqShopRef.current.childNodes]
             elemnts.forEach((el2)=>{
                 console.info(el2.getAttribute("id"))
                 if(el2.getAttribute("id")===el.hash.toString()){
                     console.info(el2)
                     el2.style.borderImageWidth="25px"
                    
                 }
             })
             console.log(elemnts[0].id)
             
        }
    })
}