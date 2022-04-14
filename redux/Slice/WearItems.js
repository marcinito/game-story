import { createSlice } from '@reduxjs/toolkit'

const initialState = {
helmet:null,
armor:null,
weapon:null,
shield:null,
legs:null,
shoe:null,
}



const wearItems = createSlice({
  name: 'wearItems',
  initialState,
  reducers: {
    dressUp(state,action) {
        console.log(action)
        switch(action.payload.id){
            case "weapon":
                return {...state,weapon:{dataItem:action.payload}};
                case "shoe":
                    return {...state,shoe:{dataItem:action.payload}}
                    case "helmet":
                        return {...state,helmet:{dataItem:action.payload}}
                        case "legs":
                          return {...state,legs:{dataItem:action.payload}}
                          case "armor":
                            return {...state,armor:{dataItem:action.payload}}
                            case "shield":
                            return {...state,shield:{dataItem:action.payload}}


        }
      
    },
    takeOffLostItem(state) {
      console.log("usuniete2")
      state={...state,helmet:null,armor:null,weapon:null,shield:null,legs:null,shoe:null}
      console.info(initialState)
      },

  },
})

export const { dressUp, takeOffLostItem} = wearItems.actions
export default wearItems.reducer