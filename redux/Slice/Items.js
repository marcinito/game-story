import { createSlice } from '@reduxjs/toolkit'

export const initialState = [
    //third class//
   {
       name:"Krzywy-Miecz",
       grafika:"./ItemsGame/curve-miecz.png",
       atak:9,
       def:1,
       cost:12, 
       id:"weapon",
       valueStall:11,
       
   },
   {
    name:"MpA ArMoR",
    grafika:"./ItemsGame/mpa-armor.png",
    atak:0,
    def:3,
    cost:15,
    id:"armor",
    valueStall:13,
},
{
    name:"Spodnie Chłopa",
    grafika:"./ItemsGame/plain-legs.png",
    atak:1,
    def:1,
    cost:5,
    id:"legs",
    valueStall:5,
},
{
    name:"Buty Chłopa",
    grafika:"./ItemsGame/plain-shoes.png",
    atak:0,
    def:1,
    cost:5,
    id:"shoe",
    valueStall:4,
},
{
    name:"Zoan Helmet",
    grafika:"./ItemsGame/zoan-helmet.png",
    atak:3,
    def:6,
    cost:15,
    id:"helmet",
    valueStall:13,
},
   //-----------------------------------------------//
   //SECOND_CLASS//
{
    name:"Soft-Shoes",
    grafika:"./ItemsGame/soft-boots.png",
    atak:2,
    def:5,
    cost:25,
    id:"shoe",
    valueStall:30,
},

{
    name:"dEmOn ArMoR",
    grafika:"./ItemsGame/demon-armor.png",
    atak:4,
    def:8,
    cost:35,
    id:"armor",
    valueStall:31,
},
{
    name:"dEmOn HeLmEt",
    grafika:"./ItemsGame/demon-helmet.png",
    atak:10,
    def:10,
    cost:28,
    id:"helmet",
    valueStall:28,
},
{
    name:"Miecz",
    grafika:"./ItemsGame/miecz.png",
    atak:16,
    def:0,
    cost:35,
    id:"weapon",
    valueStall:30,
},
{
    name:"DeMoN ShIeLd",
    grafika:"./ItemsGame/demon-shield.png",
    atak:15,
    def:20,
    cost:45,
    id:"shield",
    valueStall:40,
},
//---------------------------------------//
//THIRD_CLASS//
{
    name:"King Armor",
    grafika:"./ItemsGame/dwarve-armor.png",
    atak:8,
    def:25,
    cost:60,
    id:"armor",
    valueStall:50,
},
{
    name:"King Legs",
    grafika:"./ItemsGame/mpa-legs.png",
    atak:4,
    def:20,
    cost:45,
    id:"legs",
    valueStall:43,
},
{
    name:"King Helmet",
    grafika:"./ItemsGame/king-helmet.png",
    atak:10,
    def:30,
    cost:80,
    id:"helmet",
    valueStall:60,
},

{
    name:"Ognisty Miecz",
    grafika:"./ItemsGame/fire-miecz.png",
    atak:33,
    def:9,
    cost:65,
    id:"weapon",
    valueStall:65,
},
//---------------------------------------//

{
    name:"Golden Helmet",
    grafika:"./ItemsGame/golden-hlemet.png",
    atak:5,
    def:50,
    cost:150,
    id:"helmet",
    valueStall:165,
},
{
    name:"Golden Armor",
    grafika:"./ItemsGame/golden-armor.png",
    atak:8,
    def:38,
    cost:140,
    id:"armor",
    valueStall:140,
},

{
    name:"Golden Shoes",
    grafika:"./ItemsGame/golden-shoes.png",
    atak:10,
    def:20,
    cost:120,
    id:"shoe",
    valueStall:125,
},



{
    name:"Golden Legs",
    grafika:"./ItemsGame/golde-legs.png",
    atak:7,
    def:35,
    cost:130,
    id:"legs",
    valueStall:135,
},




{
    name:"Crown Shield",
    grafika:"./ItemsGame/crown-shield.png",
    atak:5,
    def:100,
    cost:250,
    id:"shield",
    valueStall:240,
},

{
    name:"Health Potion",
    grafika:"./ItemsGame/mana-fluid.png",
    atak:0,
    def:0,
    cost:90,
    id:"potion",
    valueStall:10,
    use:3,
    describe:`Give maxium hp and mana level`
},
{
    name:"Dark Stone",
    grafika:"./ItemsGame/dark-stone.png",
    atak:111,
    def:0,
    cost:300,
    id:"weapon",
    valueStall:10,
},
{
    name:"Toxic Axe",
    grafika:"./ItemsGame/toxic-axe.png",
    atak:90,
    def:9,
    cost:200,
    id:"weapon",
    valueStall:10,
},
{
    name:"Magic Maca",
    grafika:"./ItemsGame/magic-maca.png",
    atak:75,
    def:0,
    cost:180,
    id:"weapon",
    valueStall:10,
  
},

{
    name:"GOLD $",
    grafika:"./ItemsGame/gold.png",
    atak:null,
    def:null,
    cost:10000000,
    id:"zloto",
    valueStall:1,
},



]

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {

  },
})

export const { } = itemsSlice.actions
export default itemsSlice.reducer