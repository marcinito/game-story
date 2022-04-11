import { configureStore } from '@reduxjs/toolkit'

import FacadeCharacter from './Slice/FacadeCharacter'


export const store = configureStore({
  reducer: {
      setFacada:FacadeCharacter,
  },
})