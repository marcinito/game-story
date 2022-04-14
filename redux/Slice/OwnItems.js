import { createSlice } from '@reduxjs/toolkit'

const initialState = [
        {
            name:"Soft-Shoes",
        grafika:"./ItemsGame/soft-boots.png",
        atak:null,
        def:20,
        cost:200,
        id:"shoe"
    },
    {
    name:"Krzywy-Miecz",
    grafika:"./ItemsGame/curve-miecz.png",
    atak:parseInt(Math.random()*20 + 20),
    def:null,
    cost:80, 
    id:"weapon"
    },
    {
            name:"Golden Helmet",
            grafika:"./ItemsGame/golden-hlemet.png",
            atak:null,
            def:30,
            cost:300,
            id:"helmet"
    
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
      console.info("usuniete")
      state.splice(0)
    }
  
  },
})

export const { buyItems,lostAllItems} = ownItems.actions
export default ownItems.reducer