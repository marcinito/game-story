import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    option:"player",
    optionTawerna:"choice"
 }

const menuOptions = createSlice({
  name: 'menuOption',
  initialState,
  reducers: {
    changeOption(state,action) {
      state.option=action.payload
    },
    changeOptionTawerna(state,action) {
      state.optionTawerna=action.payload
    },
  },
})

export const { changeOption,changeOptionTawerna } = menuOptions.actions
export default menuOptions.reducer