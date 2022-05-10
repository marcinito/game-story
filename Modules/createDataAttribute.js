export function createDataAttribute(element,item){
    
    element.dataset.def = item!==null?item.dataItem.def:null
    element.dataset.name = item!==null?item.dataItem.name:null
    element.dataset.img = item!==null?item.dataItem.grafika:null
    element.dataset.atak = item!==null?item.dataItem.atak:null
    
}