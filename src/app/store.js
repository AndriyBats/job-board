import logger from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
// api
import { jobAPI } from '../api/jobAPI'
//////////////////////////////////////////////////

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
    logger,
    jobAPI.middleware,
  ),
  reducer: {
    [jobAPI.reducerPath]: jobAPI.reducer,
  },
})

setupListeners(store.dispatch)
