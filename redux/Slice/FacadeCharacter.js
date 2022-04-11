import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name:"",
  proffesion:"",

}

export const setFacada = createSlice({
  name: 'setFacada',
  initialState,
  reducers: {
    change: (state,action) => {
 
      state.name = action.payload.name
      state.proffesion=action.payload.proffesion
    },

 
  },
})

// Action creators are generated for each case reducer function
export const { change } = setFacada.actions

export default setFacada.reducer