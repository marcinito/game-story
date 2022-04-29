import { createSlice } from '@reduxjs/toolkit'

const initialState = { windowIsOpen: false }

const infoWindowSlice = createSlice({
  name: 'openWindow',
  initialState,
  reducers: {
    openCloseWindowMessage(state,action){
        console.info(action)
        
     if(action.payload==="open"){

         return {...state,windowIsOpen:true}
         
     }
     if(action.payload==="close"){

         return {...state,windowIsOpen:false}
         
     }
     console.info(action)
      }
  },
})

export const { openCloseWindowMessage } = infoWindowSlice.actions
export default infoWindowSlice.reducer