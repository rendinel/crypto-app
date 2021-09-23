import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
//data for the api
const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'b331b163dfmsh17d3214f4e61243p14cc42jsn550b3d139b49',
}
//endpoint base
const baseUrl = 'https://coinranking1.p.rapidapi.com'

//function that accept url as a parameter and return url:url and headers:cryptoApiHeaders
const createRequest = (url) => ({ url, headers: cryptoApiHeaders })
//fetch the data from the api
//03 we pass count so we can decide how many currency we want to display, we also pass the count as a limit to our endpoint so we can display currency based on the count
export const cryptoApi = createApi({
  //reducer path simply say what this reducer is for and we pass a string as a name
  reducerPath: 'cryptoApi',
  //we define the basequery as the fetchbasequery function from the reduxtoolkit to whom we pass our baseurl
  baseQuery: fetchBaseQuery({ baseUrl }),
  //endpoints is a function that have builder as a parameter and return an obj where we name our endpoint and are equal to builder.query to which we pass an obj with a query that is equal to function that point in the direction of that specific request,
  endpoints: (builder) => ({
    getCryptos: builder.query({
      //we invoke createrequest and pass to it our url as a params so we can write our url for the search
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
})
//useGetCryptosQuery hook create by redux toolkit to get our data (name it's use like every hook + getCryptos the query we create + query), after we say from where it came cryptoApi in this case
export const { useGetCryptosQuery } = cryptoApi
