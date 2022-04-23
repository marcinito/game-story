export function createDataAttribute(element,data){

    element.dataset.def=data!==null?data.dataItem.def:null
    element.dataset.name=data!==null?data.dataItem.name:null
    element.dataset.img=data!==null?data.dataItem.grafika:null
    element.dataset.atak=data!==null?data.dataItem.atak:null
    
}