import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
//data for the api
const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'b331b163dfmsh17d3214f4e61243p14cc42jsn550b3d139b49',
}
//endpoint base
const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })
//fetch the data from the api
//03 we pass count so we can decide how many currency we want to display, we also pass the count as a limit to our endpoint so we can display currency based on the count
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
})
//useGetCryptosQuery hook create by redux toolkit to get our data (name it's use like every hook + getCryptos the query we create + query), after we say from where it came cryptoApi in this case
export const { useGetCryptosQuery } = cryptoApi
