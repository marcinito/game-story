import { createSlice } from '@reduxjs/toolkit'
import { initialState as allItems } from './Items'

const initialState = [
{
        name:"Vampire",
        img:"./monster/Vampire.png",
        hpLevel:200,
        hpTotal:200,
        item:allItems[12],
        gold:10,
        info:"Vampire is dark character living near soul betrayed people",
        atak:30+Math.floor(Math.random()*10),
        experience:100,

},
{
    name:"Ghoul",
    img:"./monster/Ghoul.png",
    hpLevel:110,
    hpTotal:110,
    item:allItems[11],
    gold:12,
    atak:10+Math.floor(Math.random()*20),
    experience:100,
},
{
  name:"Minotaur",
  img:"./monster/Minotaur.png",
  hpLevel:300,
  hpTotal:300,
  item:allItems[1],
  gold:52,
  atak:70,
  experience:100,



}

]
     

const monstersSlice = createSlice({
  name: 'monsters',
  initialState,
  reducers: {
    monsterGetAtak(state,action) {
   
    state[0].hpLevel-=action.payload

  
    },

    deleteDefeatedMonster(state) {
      state.shift()
   
    },

  },
})

export const { monsterGetAtak,  deleteDefeatedMonster } = monstersSlice.actions
export default monstersSlice.reducer