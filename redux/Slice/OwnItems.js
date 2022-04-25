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
       hash:Math.floor(Math.random()*9394329423),
    },
    {
      name:"Krzywy-Miecz",
   grafika:"./ItemsGame/curve-miecz.png",
   atak:10,
   def:1,
   cost:5, 
   id:"weapon",
   valueStall:3,
   hash:Math.floor(Math.random()*9394329423),
},
{
  name:"Krzywy-Miecz",
grafika:"./ItemsGame/curve-miecz.png",
atak:10,
def:1,
cost:5, 
id:"weapon",
valueStall:3,
hash:Math.floor(Math.random()*9394329423),
},
    {
      name:"Buty Chłopa",
      grafika:"./ItemsGame/plain-shoes.png",
      atak:5,
      def:5,
      cost:5,
      id:"shoe",
      valueStall:4,
      hash:Math.floor(Math.random()*9394329423),
    },
    {
      name:"Spodnie Chłopa",
    grafika:"./ItemsGame/plain-legs.png",
    atak:5,
    def:10,
    cost:5,
    id:"legs",
    valueStall:5,
    hash:Math.floor(Math.random()*9394329423),
    
    },
    ]


const ownItems = createSlice({
  name: 'ownItems',
  initialState,
  reducers: {
    buyItems(state,action) {
   
      state.push({...action.payload,hash:Math.floor(Math.random()*32423423)})
    },
    lostAllItems(state){
     
      state.splice(0)
    },
    sellItems(state,action){
      
      state.forEach((el,i,arr)=>{
        if(el.hash===action.payload.hash){
          arr.splice(i,1)
          console.info("usuniete")
        }
      })
      


    },

  },
})

export const { buyItems,lostAllItems,sellItems,markItemsWhichYouSell} = ownItems.actions
export default ownItems.reducer