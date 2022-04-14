import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    level:{
      experience:0,
      lvl:1,
    },
    strenght:10,
    defFromArmor:0,
    magicLevel:{
      experience:0,
      lvl:1
    },
    respect:20,
    hp:100, 
    gold:1000,
}

const levelSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    level(state) {
      state.value++
    },
    magicLevel(state) {
      state.value--
    },
    getAtakFromMonster(state,action){
      state.hp-=action.payload
    },
    respect(state, action) {
      state.value += action.payload
    },
    debitFromAccout(state,action){
      state.gold-=action.payload
    },
    paymentToAccount(state,action){
      state.gold+=action.payload
    },
    countDefFromArmor(state,action){
      console.log(action)
      state.defFromArmor=action.payload
    }  ,
     countAtakFromArmor(state,action){
      console.log(action)
      state.strenght+=action.payload
    }
  },
})

export const { level, magicLevel, respect , debitFromAccout,paymentToAccount,countDefFromArmor,countAtakFromArmor,getAtakFromMonster } = levelSlice.actions
export default levelSlice.reducer