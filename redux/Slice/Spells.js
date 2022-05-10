import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    exevoVis:"/spells/exevo-vis.webp",
    inUse:null
 }

const Spells = createSlice({
  name: 'spells',
  initialState,
  reducers: {
    spellsUse(state,action) {
        console.info(action)
      return {...state,inUse:action.payload}
    },
 

  },
})

export const { spellsUse} = Spells.actions
export default Spells.reducer