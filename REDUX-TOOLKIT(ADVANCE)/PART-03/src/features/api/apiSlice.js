import { createApi ,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000/users"}),
    endpoints:(builder)=> ({
        getUsers:builder.query({
            query:()=>"users"
        }),
       addUser:builder.mutation({

       }),
    })
})