import { createSlice } from '@reduxjs/toolkit'
import { initialState as allItems } from './Items'

const initialState = [
{
        name:"Vampire",
        img:"./monster/Vampire.png",
        hpLevel:80,
        hpTotal:80,
        item:allItems[0],
        gold:10,
        info:"Vampire is dark character living near soul betrayed people",
        atak:10,
        attackPower:[1.1,1.2,1.3,1.4,1.5,0.9,0.8,0.7],
        atakImage:"/atakMonster/atak-vampire.png",
        experience:150,
        numbersOfTreatments:0,
        describe:`Are you cut? Or have bleeding injury, becarefull Vampire can be your guest
         in oncoming night, do not desired quest.They are like shark feel smell of bleed from 
         long distance, always thirsty and clever to get what they want.Their attribute are long
         claws, sharp teeth, cunning personality`

},
{
  name:"Vampire",
  img:"./monster/Vampire.png",
  hpLevel:80,
  hpTotal:80,
  item:allItems[0],
  gold:10,
  info:"Vampire is dark character living near soul betrayed people",
  atak:10,
  attackPower:[1.1,1.2,1.3,1.4,1.5,0.9,0.8,0.7],
  atakImage:"/atakMonster/atak-vampire.png",
  experience:150,
  numbersOfTreatments:0,
  describe:`Are you cut? Or have bleeding injury, becarefull Vampire can be your guest
   in oncoming night, do not desired quest.They are like shark feel smell of bleed from 
   long distance, always thirsty and clever to get what they want.Their attribute are long
   claws, sharp teeth, cunning personality`

},
{
  name:"Vampire",
  img:"./monster/Vampire.png",
  hpLevel:80,
  hpTotal:80,
  item:allItems[0],
  gold:10,
  info:"Vampire is dark character living near soul betrayed people",
  atak:10,
  attackPower:[1.1,1.2,1.3,1.4,1.5,0.9,0.8,0.7],
  atakImage:"/atakMonster/atak-vampire.png",
  experience:150,
  numbersOfTreatments:0,
  describe:`Are you cut? Or have bleeding injury, becarefull Vampire can be your guest
   in oncoming night, do not desired quest.They are like shark feel smell of bleed from 
   long distance, always thirsty and clever to get what they want.Their attribute are long
   claws, sharp teeth, cunning personality`

},

{
    name:"Ghoul",
    img:"./monster/Ghoul.png",
    hpLevel:135,
    hpTotal:135,
    item:allItems[2],
    gold:15,
    atak:15,
    attackPower:[1.1,1.2,1.3,1.4,1.5,0.9,0.8,0.7],
    atakImage:"/atakMonster/atak-vampire.png",
    experience:200,
    numbersOfTreatments:0,
    describe:`Are you cut? Or have bleeding injury, becarefull Vampire can be your guest
    in oncoming night, do not desired quest.They are like shark feel smell of bleed from 
    long distance, always thirsty and clever to get what they want.Their attribute are long
    claws, sharp teeth, cunning personality`

},
{
  name:"Minotaur",
  img:"./monster/Minotaur.png",
  hpLevel:200,
  hpTotal:200,
  item:allItems[3],
  gold:22,
  atak:20,
  attackPower:[1.1,1.2,1.3,1.4,1.5,0.9,0.8,0.7],
  atakImage:"/atakMonster/minotaur-atak.webp",
  experience:130,
  numbersOfTreatments:0,
  describe:`Are you cut? Or have bleeding injury, becarefull Vampire can be your guest
  in oncoming night, do not desired quest.They are like shark feel smell of bleed from 
  long distance, always thirsty and clever to get what they want.Their attribute are long
  claws, sharp teeth, cunning personality`
},
{
  name:"Elf",
  img:"./monster/elf-scout.png",
  hpLevel:250,
  hpTotal:250,
  item:allItems[1],
  atak:30,
  attackPower:[1.1,1.2,1.3,1.4,1.5,0.9,0.8,0.7],
gold:50,
  atakImage:"/atakMonster/elf-atak.png",
  experience:90,
  numbersOfTreatments:0,
  describe:`Are you cut? Or have bleeding injury, becarefull Vampire can be your guest
  in oncoming night, do not desired quest.They are like shark feel smell of bleed from 
  long distance, always thirsty and clever to get what they want.Their attribute are long
  claws, sharp teeth, cunning personality`
},
{
  name:"Oblivion",
  img:"./monster/Oblivion.png",
  hpLevel:330,
  hpTotal:330,
  item:allItems[4],
  gold:50,
  atak:40,
  attackPower:[1.1,1.2,1.3,1.4,1.5,0.9,0.8,0.7],
  atakImage:"/atakMonster/oblivion-atak.gif",
  experience:175,
  numbersOfTreatments:0,
  describe:`Are you cut? Or have bleeding injury, becarefull Vampire can be your guest
  in oncoming night, do not desired quest.They are like shark feel smell of bleed from 
  long distance, always thirsty and clever to get what they want.Their attribute are long
  claws, sharp teeth, cunning personality`
},
{
  name:"Cyklop",
  img:"./monster/cyklop.png",
  hpLevel:500,
  hpTotal:500,
  item:allItems[5],
  gold:100,
  atak:50,
  attackPower:[1.1,1.2,1.3,1.4,1.5,0.9,0.8,0.7],
  atakImage:"/atakMonster/cyklop-atak.png",
  experience:175,
  numbersOfTreatments:0,
  describe:`Are you cut? Or have bleeding injury, becarefull Vampire can be your guest
  in oncoming night, do not desired quest.They are like shark feel smell of bleed from 
  long distance, always thirsty and clever to get what they want.Their attribute are long
  claws, sharp teeth, cunning personality`
},
{
  name:"Bad Mag",
  img:"./monster/mag.png",
  hpLevel:300,
  hpTotal:300,
  item:allItems[0],
  gold:100,
  atak:60,
  attackPower:[1.1,1.2,1.3,1.4,1.5,0.9,0.8,0.7],
  atakImage:"/atakMonster/mag-atak.gif",
  experience:170,
  numbersOfTreatments:0,
  describe:`Are you cut? Or have bleeding injury, becarefull Vampire can be your guest
  in oncoming night, do not desired quest.They are like shark feel smell of bleed from 
  long distance, always thirsty and clever to get what they want.Their attribute are long
  claws, sharp teeth, cunning personality`
},
{
  name:"General",
  img:"./monster/Hero.png",
  hpLevel:600,
  hpTotal:600,
  item:allItems[3],
  gold:10,
  atak:80,
  attackPower:[1.1,1.2,1.3,1.4,1.5,0.9,0.8,0.7],
  atakImage:"/atakMonster/hero-atak.gif",
  experience:100,
  numbersOfTreatments:0,
  describe:`Are you cut? Or have bleeding injury, becarefull Vampire can be your guest
  in oncoming night, do not desired quest.They are like shark feel smell of bleed from 
  long distance, always thirsty and clever to get what they want.Their attribute are long
  claws, sharp teeth, cunning personality`
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
  state[0].numbersOfTreatments+=1    
state[0].hpLevel+=action.payload
if(state[0].hpLevel>state[0].hpTotal) state[0].hpLevel=state[0].hpTotal

    },
    floorNumbersOfTreatments(state){
      state[0].numbersOfTreatments=0
    },

}})

export const { monsterGetAtak,  deleteDefeatedMonster,cureMonster,
floorNumbersOfTreatments } = monstersSlice.actions
export default monstersSlice.reducer