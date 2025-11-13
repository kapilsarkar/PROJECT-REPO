import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "products" // This will call: https://fakestoreapi.com/products
        }),

    }),

});

export const { useGetProductsQuery } = apiSlice;