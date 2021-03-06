import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    level:{
      exp:0,
      totalExp:0,
      lvl:0,
    },
    strenght:{
      fromEq:10,
      fromLvl:10,
      total:0,
    },
    def:{
      defArmor:0,
      defArmorTotal:250,
    },
    magicLevel:{
      exp:0,
      totalExp:0,
      lvl:0,
      
    },
    mana:{
      mana:200,
      manaTotal:200,
    
    },
    hpLevel:200,
    hpTotal:200,
    howManyHpAddPerLvl:40, 
    gold:40,
    productExp:{
      magicExp:120,
      levelExp:120,
      product:40,//Its means how many more experiecne you need to get more to get higher level, it will increase every level//
    }
}

const levelSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    getExp(state,action) {
    
      state.level.exp+=action.payload
      state.level.totalExp+=action.payload
      state.mana.mana+=100
    while(state.level.exp>=state.productExp.levelExp){
      state.level.lvl+=1
      state.level.exp-=state.productExp.levelExp
      state.productExp.levelExp+=state.productExp.product
      state.hpTotal+=state.howManyHpAddPerLvl
      state.mana.manaTotal+=state.howManyHpAddPerLvl
    }
    },
    getMagicExp(state,action){
     
      state.magicLevel.exp+=action.payload
      state.magicLevel.totalExp+=action.payload
     while(state.magicLevel.exp>=state.productExp.magicExp){
       state.magicLevel.lvl+=1
       state.magicLevel.exp-=state.productExp.magicExp
       state.productExp.magicExp+=state.productExp.product
     }
    },
    decreaseLevel(state,action){
  state.level.lvl-=1
  state.magicLevel.lvl-=1
  state.productExp.levelExp-=state.productExp.product
  state.productExp.magicExp-=state.productExp.product
  state.hpTotal-=state.howManyHpAddPerLvl
  state.hpLevel=1

    },
    getAtakFromMonster(state,action){
     
   if(state.def.defArmor<=action.payload){
    state.hpLevel-=Math.floor(action.payload-state.def.defArmor)

   }
   if(state.def.defArmor>0)state.def.defArmor-=action.payload
   if(state.def.defArmor<=0)state.def.defArmor=0   
   
   

      
    },
    setNewValueMana(state, action) {
      state.mana.mana=action.payload
      if(state.mana.mana<=0){
        state.mana.mana=0
        return
      }
     
    },
    debitFromAccout(state,action){
      state.gold-=action.payload
    },
    paymentToAccount(state,action){
      state.gold+=action.payload
    },
    countDefFromArmor(state,action){
      
      state.def.defArmor=action.payload
    },
     countAtakFromArmor(state,action){   
    state.strenght.total=action.payload+state.strenght.fromLvl
    },
    setNewValueHp(state,action){
   
      state.hpLevel=action.payload
      if(state.hpLevel>=state.hpTotal){
        state.hpLevel=state.hpTotal
        return
      }
    },


  },
})

export const { level, magicLevel, respect , 
  debitFromAccout,paymentToAccount,countDefFromArmor,
  countAtakFromArmor,getAtakFromMonster,setNewValueHp,getExp,
decreaseLevel,setNewValueMana,getMagicExp} = levelSlice.actions
export default levelSlice.reducer