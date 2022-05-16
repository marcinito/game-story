import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    option:"default",
    optionTawerna:"choice",
    
 }

const menuOptions = createSlice({
  name: 'menuOption',
  initialState,
  reducers: {
    changeOption(state,action) {
      console.info(action)
      state.option=action.payload
    },
    changeOptionTawerna(state,action) {
      state.optionTawerna=action.payload
    },
  },
})

export const { changeOption,changeOptionTawerna } = menuOptions.actions
export default menuOptions.reducer