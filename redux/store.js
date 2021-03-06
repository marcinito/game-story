import { configureStore } from '@reduxjs/toolkit'

import FacadeCharacter from './Slice/FacadeCharacter'
import Levels from './Slice/Levels'
import Items from './Slice/Items'
import MenuOptions from './Slice/MenuOptions'
import OwnItems from './Slice/OwnItems'
import WearItems from './Slice/WearItems'
import Monsters from './Slice/Monsters'
import OverallSlice from './Slice/OverallSlice'
import TawernaSlice from './Slice/TawernaSlice'
import MessageSlice from './Slice/MessageSlice'
import infoWindowSlice from './Slice/infoWindowSlice'
import Spells from './Slice/Spells'
import AboutSlice from './Slice/AboutSlice'

export const store = configureStore({
  reducer: {
      setFacada:FacadeCharacter,
      skills:Levels,
      items:Items,
      menuOption:MenuOptions,
      ownItems:OwnItems,
      wearItems:WearItems,
      monsters:Monsters,
      overall:OverallSlice,
      tawerna:TawernaSlice,
      message:MessageSlice,
      windowInfo:infoWindowSlice,
      spells:Spells,
      about:AboutSlice,

  },
})