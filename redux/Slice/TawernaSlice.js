import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     numberOnCubic: 1 
    }

const tawernaSlice = createSlice({
  name: 'tawerna',
  initialState,
  reducers: {
    chooseNumberOnCubic(state,action) {
        console.info(action)
       state.numberOnCubic=action.payload
    },

  },
})

export const {chooseNumberOnCubic } = tawernaSlice.actions
export default tawernaSlice.reducer