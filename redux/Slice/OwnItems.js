import { createSlice } from '@reduxjs/toolkit'

const initialState = [
        {
          name:"Krzywy-Miecz",
       grafika:"./ItemsGame/curve-miecz.png",
       atak:10,
       def:1,
       cost:5, 
       id:"weapon",
       valueStall:3,
    },
    {
      name:"Buty Chłopa",
      grafika:"./ItemsGame/plain-shoes.png",
      atak:5,
      def:5,
      cost:5,
      id:"shoe",
      valueStall:4,
    },
    {
      name:"Spodnie Chłopa",
    grafika:"./ItemsGame/plain-legs.png",
    atak:5,
    def:10,
    cost:5,
    id:"legs",
    valueStall:5,
    
    },
    ]


const ownItems = createSlice({
  name: 'ownItems',
  initialState,
  reducers: {
    buyItems(state,action) {
   
      state.push(action.payload)
    },
    lostAllItems(state){
     
      state.splice(0)
    },
    sellItems(state,action){
      
      state.forEach((el,i,arr)=>{
        if(el.name===action.payload.name){
          arr.splice(i,1)
        }
      })

 

    

    }
  
  },
})

export const { buyItems,lostAllItems,sellItems} = ownItems.actions
export default ownItems.reducer