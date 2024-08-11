import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com"}),
    endpoints: (builder) =>({

        // Get all products (reading the data only)
        getAllProducts: builder.query({
            query: ()=> '/products',
        }),
    }),
});


// this is not create by us but the rkt. :-- use${___}query
export const { useGetAllProductsQuery}  = productsApi

