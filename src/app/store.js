import { configureStore } from '@reduxjs/toolkit'
//02 we import our crypto api
import { cryptoApi } from '../services/cryptoApi'
//01 we create a store
export default configureStore({
  reducer: {
    //02 we connect our cryptoapi to our store
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
})
