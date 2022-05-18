import { createSlice } from '@reduxjs/toolkit'

const initialState = [

{
  name:"Krzywy-Miecz",
grafika:"/ItemsGame/curve-miecz.png",
atak:10,
def:1,
cost:5, 
id:"weapon",
valueStall:3,
hash:3432432432,
},
    {
      name:"Buty Chłopa",
      grafika:"/ItemsGame/plain-shoes.png",
      atak:5,
      def:5,
      cost:5,
      id:"shoe",
      valueStall:4,
      hash:41234121,
    },
    {
      name:"Spodnie Chłopa",
    grafika:"/ItemsGame/plain-legs.png",
    atak:5,
    def:10,
    cost:5,
    id:"legs",
    valueStall:5,
    hash:54325432,
    
    },


    ]


const ownItems = createSlice({
  name: 'ownItems',
  initialState,
  reducers: {
    buyItems(state,action) {
   
      state.push({...action.payload,hash:Math.floor(Math.random()*32423423)})
    },
    lostItems(state,action){
      console.info(action)
return action.payload
    },
    sellItems(state,action){
      state.forEach((el,i,arr)=>{
        if(el.hash===action.payload.hash){
          arr.splice(i,1)
          console.info("usuniete")
        }
      })
    
    },
    handleManaHpPotion(state,action){
      state.forEach((el,i,arr)=>{
        if(el.name==="Health Potion"){
          if(action.payload===el.hash){
            el.use-=1
            if(el.use<=0){
              arr.splice(i,1)
            }
          }
        }
      })
     
    }

  },
})

export const { buyItems,lostItems,sellItems,markItemsWhichYouSell,handleManaHpPotion} = ownItems.actions
export default ownItems.reducer