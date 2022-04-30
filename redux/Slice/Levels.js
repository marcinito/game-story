import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    level:{
      exp:0,
      totalExp:0,
      lvl:0,
    },
    strenght:{
      fromEq:0,
      fromLvl:50,
      total:0
    },
    defArmor:0,
    defArmorTotal:300,
    magicLevel:{
      experience:0,
      lvl:1
    },
    respect:20,
    hpLevel:90,
    hpTotal:300, 
    gold:2000,
}

const levelSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    getExp(state,action) {
      console.info(action)
      state.level.exp+=action.payload
      state.level.totalExp+=action.payload
    },
    getLevel(state,action){
      console.info(action)
      state.level.exp-=100
      state.level.lvl=Math.floor(state.level.totalExp/100)
      state.hpTotal+=10
    },
    decreaseLevel(state,action){
      
      state.level.totalExp-=action.payload
      if(state.level.totalExp<0){
        state.level.totalExp=1
      }
      state.level.lvl=Math.floor(state.level.totalExp/100)
      state.level.exp=state.level.totalExp.toString().slice(-2)*1
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
  countAtakFromArmor,getAtakFromMonster,setNewValueHp,getExp,getLevel,
decreaseLevel} = levelSlice.actions
export default levelSlice.reducer