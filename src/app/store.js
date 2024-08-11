import {configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productsApi } from './service/dummyData'


export const store = configureStore({
    reducer:{
        // NOte:- here we are working with RTK query not with toolkit
        [productsApi.reducerPath] : productsApi.reducer,
    },

    // this only help in chaching
    middleware: (getDeaultMiddleware) =>
       getDeaultMiddleware().concat(productsApi.middleware), 

})


setupListeners(store.dispatch)
