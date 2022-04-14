import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    option:"default"
 }

const menuOptions = createSlice({
  name: 'menuOption',
  initialState,
  reducers: {
    changeOption(state,action) {
      state.option=action.payload
    },

  },
})

export const { changeOption } = menuOptions.actions
export default menuOptions.reducer