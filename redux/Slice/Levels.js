import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    level:{
      exp:0,
      lvl:1,
    },
    strenght:{
      fromEq:0,
      fromLvl:10,
      total:0
    },
    defArmor:0,
    defArmorTotal:300,
    magicLevel:{
      experience:0,
      lvl:1
    },
    respect:20,
    hpLevel:1000,
    hpTotal:1000, 
    gold:2000,
}

const levelSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    getExp(state,action) {
      state.level.exp+=action.payload
    },
    getLevel(state,action){
      state.level.lvl+=1
      state.hpTotal+=50
    
    },
    magicLevel(state) {
      state.value--
    },
    getAtakFromMonster(state,action){
      state.hpLevel-=action.payload
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
      state.defArmor=action.payload
    }  ,

     countAtakFromArmor(state,action){
       
    state.strenght.total=action.payload+state.strenght.fromLvl
    },
    setNewValueHp(state,action){
      state.hpLevel=action.payload
    },


  },
})

export const { level, magicLevel, respect , 
  debitFromAccout,paymentToAccount,countDefFromArmor,
  countAtakFromArmor,getAtakFromMonster,setNewValueHp,getExp,getLevel} = levelSlice.actions
export default levelSlice.reducer