import { createSlice } from '@reduxjs/toolkit'

export const initialState = [
   {
       name:"Krzywy-Miecz",
       grafika:"./ItemsGame/curve-miecz.png",
       atak:parseInt(Math.random()*20 + 20),
       def:1,
       cost:80, 
       id:"weapon"
   },
{
    name:"Soft-Shoes",
    grafika:"./ItemsGame/soft-boots.png",
    atak:null,
    def:20,
    cost:200,
    id:"shoes"
},
{
    name:"Golden Helmet",
    grafika:"./ItemsGame/golden-hlemet.png",
    atak:null,
    def:30,
    cost:300,
    id:"helmet"
},
{
    name:"GOLD $",
    grafika:"./ItemsGame/gold.jpg",
    atak:null,
    def:null,
    cost:1,
    id:"zloto"
},
{
    name:"dEmOn ArMoR",
    grafika:"./ItemsGame/demon-armor.png",
    atak:10,
    def:20,
    cost:200,
    id:"armor"
},
{
    name:"dEmOn HeLmEt",
    grafika:"./ItemsGame/demon-helmet.png",
    atak:7,
    def:50,
    cost:350,
    id:"armor"
},
{
    name:"King Armor",
    grafika:"./ItemsGame/dwarve-armor.png",
    atak:5,
    def:15,
    cost:150,
    id:"armor"
},
{
    name:"Ognisty Miecz",
    grafika:"./ItemsGame/fire-miecz.png",
    atak:parseInt(Math.random()*30 + 30),
    def:15,
    cost:350,
    id:"weapon"
},
{
    name:"Golden Legs",
    grafika:"./ItemsGame/golde-legs.png",
    atak:7,
    def:50,
    cost:500,
    id:"legs"
},
{
    name:"Golden Armor",
    grafika:"./ItemsGame/golden-armor.png",
    atak:parseInt(Math.random()*10+3),
    def:80,
    cost:500,
    id:"armor"
},
{
    name:"Golden Shoes",
    grafika:"./ItemsGame/golden-shoes.png",
    atak:3,
    def:30,
    cost:290,
    id:"shoe"
},
{
    name:"King Helmet",
    grafika:"./ItemsGame/king-helmet.png",
    atak:5,
    def:45,
    cost:100,
    id:"helmet"
},
{
    name:"Miecz",
    grafika:"./ItemsGame/miecz.png",
    atak:5,
    def:45,
    cost:100,
    id:"weapon"
},
{
    name:"MpA ArMoR",
    grafika:"./ItemsGame/mpa-armor.png",
    atak:5,
    def:50,
    cost:100,
    id:"armor"
},
{
    name:"King Legs",
    grafika:"./ItemsGame/mpa-legs.png",
    atak:5,
    def:30,
    cost:150,
    id:"legs"
},
{
    name:"Spodnie Chłopa",
    grafika:"./ItemsGame/plain-legs.png",
    atak:5,
    def:30,
    cost:150,
    id:"legs"
},
{
    name:"Buty Chłopa",
    grafika:"./ItemsGame/plain-shoes.png",
    atak:5,
    def:30,
    cost:150,
    id:"shoe"
},
{
    name:"Zoan Helmet",
    grafika:"./ItemsGame/zoan-helmet.png",
    atak:5,
    def:30,
    cost:150,
    id:"helmet"
},
{
    name:"DeMoN ShIeLd",
    grafika:"./ItemsGame/demon-shield.png",
    atak:5,
    def:30,
    cost:150,
    id:"shield"
},
{
    name:"Crown Shield",
    grafika:"./ItemsGame/crown-shield.png",
    atak:5,
    def:20,
    cost:150,
    id:"shield"
},




]

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = itemsSlice.actions
export default itemsSlice.reducer