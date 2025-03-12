import Productslice from '@/Components/Slice/Productslice'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    baritem:Productslice
  }
})