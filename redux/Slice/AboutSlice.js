import { createSlice } from '@reduxjs/toolkit'
import { initialState as allItems } from './Items'
const initialState = [

]

const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    donowaldInfoAboutMonster(state,action) {
      return state.concat(action.payload)
    },
  },
})

export const { donowaldInfoAboutMonster } = aboutSlice.actions
export default aboutSlice.reducer