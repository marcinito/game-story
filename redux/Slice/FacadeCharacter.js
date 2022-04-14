import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  name:"",
  profession:"./druid.png",
  outfit:""

}

export const setFacada = createSlice({
  name: 'setFacada',
  initialState,
  reducers: {
    change: (state,action) => {


      state.name = action.payload.name
      state.profession=action.payload.profession
    },

 
  },
})

// Action creators are generated for each case reducer function
export const { change } = setFacada.actions

export default setFacada.reducer