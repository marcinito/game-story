import { createSlice } from '@reduxjs/toolkit'
import { initialState as allItems } from './Items'

const initialState = [
{
        name:"Vampire",
        img:"./monster/Vampire.png",
        hpLevel:80,
        hpTotal:80,
        item:allItems[12],
        gold:10,
        info:"Vampire is dark character living near soul betrayed people",
        atak:30+Math.floor(Math.random()*10),
        experience:110,

},
{
    name:"Ghoul",
    img:"./monster/Ghoul.png",
    hpLevel:135,
    hpTotal:135,
    item:allItems[11],
    gold:15,
    atak:10+Math.floor(Math.random()*20),
    experience:60,
},
{
  name:"Minotaur",
  img:"./monster/Minotaur.png",
  hpLevel:200,
  hpTotal:200,
  item:allItems[1],
  gold:22,
  atak:70,
  experience:150,
},
{
  name:"Elf",
  img:"./monster/elf-scout.png",
  hpLevel:250,
  hpTotal:250,
  item:allItems[1],
  gold:45,
  atak:70,
  experience:90,
},
{
  name:"Oblivion",
  img:"./monster/Oblivion.png",
  hpLevel:330,
  hpTotal:330,
  item:allItems[7],
  gold:50,
  atak:100,
  experience:190,
},
{
  name:"Cyklop",
  img:"./monster/cyklop.png",
  hpLevel:500,
  hpTotal:500,
  item:allItems[3],
  gold:100,
  atak:100,
  experience:140,
},
{
  name:"Bad Mag",
  img:"./monster/mag.png",
  hpLevel:300,
  hpTotal:300,
  item:allItems[3],
  gold:100,
  atak:100,
  experience:170,
},
{
  name:"Hero",
  img:"./monster/Hero.png",
  hpLevel:600,
  hpTotal:600,
  item:allItems[3],
  gold:30,
  atak:100,
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
    cureMonster(state,action){
state[0].hpLevel+=50
    }

  },
})

export const { monsterGetAtak,  deleteDefeatedMonster,cureMonster } = monstersSlice.actions
export default monstersSlice.reducer