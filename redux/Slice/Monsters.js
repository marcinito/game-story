import { createSlice } from '@reduxjs/toolkit'
import { initialState as allItems } from './Items'

const initialState = [
{
        name:"Vampire",
        img:"./monster/Vampire.png",
        hp:200,
        item:allItems[12],
        gold:10,

},
{
    name:"Ghoul",
    img:"./monster/Ghoul.png",
    hp:0.110,
    item:allItems[11],
    gold:12,

}
]
     

const monstersSlice = createSlice({
  name: 'monsters',
  initialState,
  reducers: {
    monsterGetAtak(state,action) {
        console.log(action.payload)
      state[0].hp-=action.payload
    },

    deleteDefeatedMonster(state) {
      state.shift()
      console.log(initialState)
    },

  },
})

export const { monsterGetAtak,  deleteDefeatedMonster } = monstersSlice.actions
export default monstersSlice.reducer