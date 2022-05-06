import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    rateHp: 0,
    rateHpMonster:100,
    rateDefArmor:0,
    rateExp:0,
    rateMana:0,
    rateMagicExp:1,
   
 }

const overallSlice = createSlice({
  name: 'overall',
  initialState,
  reducers: {
    subRateHp(state,action) {
      
      state.rateHp-=action.payload
      if(state.rateHp<=0){
          state.rateHp=0
      }
     
    },
    setRateHp(state,action) {
    
        state.rateHp=action.payload
        if(state.rateHp<=0){
            state.rateHp=0
        }
    },
    setRateMonsterHp(state, action) {
      
     
      state.rateHpMonster=action.payload
    },
    subRateMonsterHp(state, action) {
      
      state.rateHpMonster-=action.payload
    },
    setRateDef(state,action){
     
      state.rateDefArmor=action.payload
    },
    subRateDef(state,action){
  
      state.rateDefArmor-=action.payload
    },
    setRateExp(state,action){
state.rateExp=action.payload
    },
    setRateMana(state,action){
   
     
state.rateMana=action.payload
    },
    setRateMagic(state,action){
  
      state.rateMagicExp=action.payload
      if(state.rateMagicExp>=100){
        
      }
      
    }
    
  },
})

export const { subRateHp ,setRateHp,setRateMonsterHp,
  setRateDef,subRateDef,subRateMonsterHp,setRateExp,setRateMana,setRateMagic } = overallSlice.actions
export default overallSlice.reducer