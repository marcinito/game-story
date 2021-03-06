import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        txt:"Guidance:",
        backpack:true,
        tawerna:true,
        cubic:true,
        oneHandBandit:true,
        shop:true,
        shopSell:true,
        id:1,
    }
    ,{
    open:false,
    txt:"Hello Warrior, check your backpack and wear armor, it can help you against monster",
    img:"/image-face/character.png",
    id:2,
}
]
const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
      getMessageFromWordl(state,action){
        switch(action.payload){
            case "backpack":
                state.push({txt:`This is your backpack,
                 click on the item if you want dress up yourself`,img:"/image-face/character.png",id:3});
                 break;
                 case "tawerna":
                     state.push({txt:`Big greeting, you are here because you want have some fun or 
                     this is your last chance to surivive, anyway here you can play and win some money and items, which you can wear
                     or sell, drink beer and have a nice fun`,img:"/image-face/tawerna-man.png",id:4});break
                     case "cubic":
                         state.push({txt:`Try to capture fortune, mark from 1 to 6
                          and click Play, if you did not chose number you will lost 
                          only money! :D  `,img:"/image-face/tawerna-man.png",id:5});break;
                          case "oneHandBandit":
                              state.push({txt:`Here you can make yourself very rich, try click on black handle and
                              check what happend`,img:"/image-face/tawerna-man.png",id:6});break;
                              case "shop":
                                  state.push({txt:`Welcome dear customer in our shop, you can check what particular items do and what a price
                                  take your time, and dont get out
                                   with empty hand.We also can buy something from you,
                                    show as your item in "sell" part`,img:"/image-face/seller.png",id:7});break;
                                    case "shopSell":
                                        state.push({txt:`Here you see your own item, special background underneath means that you have
                                        this item on yourself,`,img:"/image-face/seller.png",id:8});break;
        }
      },
      openWindowMessage(state,action){
         if(action.payload==="close"){
             state={...state,open:false}
         }
         if(action.payload==="open"){
             state={...state,open:true}
         }
      },
      expireMessage(state,action){
          
          switch(action.payload){
              case "backpack":
                state=[...state,state[0].backpack=false];break;
                case "tawerna":
                    state=[...state,state[0].tawerna=false];break;
                    case "cubic":
                        state=[...state,state[0].cubic=false];break;
                        case "shop":
                        state=[...state,state[0].shop=false];break;
                        case "oneHandBandit":
                        state=[...state,state[0].oneHandBandit=false];break;
                        case "shopSell":
                            state=[...state,state[0].shopSell=false];break;
          }

      }
  }
 
  
})

export const { getMessageFromWordl,openWindowMessage,expireMessage } = messageSlice.actions
export default messageSlice.reducer