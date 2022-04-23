import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    rateHp: 0,
    rateHpMonster:100,
    rateDefArmor:0,
 }

const overallSlice = createSlice({
  name: 'overall',
  initialState,
  reducers: {
    subRateHp(state,action) {
        console.info(action)
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
      
      state.rateHpMonster-=action.payload
    },
    setRateDef(state,action){
     
      state.rateDefArmor=action.payload
    },
    subRateDef(state,action){
  
      state.rateDefArmor-=action.payload
    }
  },
})

export const { subRateHp ,setRateHp,setRateMonsterHp,setRateDef,subRateDef } = overallSlice.actions
export default overallSlice.reducer