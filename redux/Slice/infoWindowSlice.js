import { createSlice } from '@reduxjs/toolkit'

const initialState = { windowIsOpen: false }

const infoWindowSlice = createSlice({
  name: 'windowInfo',
  initialState,
  reducers: {
    openCloseWindowMessage(state,action){
        
        
     if(action.payload==="open"){

         return {...state,windowIsOpen:true}
         
     }
     if(action.payload==="close"){

         return {...state,windowIsOpen:false}
         
     }
     
      }
  },
})

export const { openCloseWindowMessage } = infoWindowSlice.actions
export default infoWindowSlice.reducer