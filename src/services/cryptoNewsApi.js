import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
  'x-rapidapi-key': 'b331b163dfmsh17d3214f4e61243p14cc42jsn550b3d139b49',
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news/trendingtopics'

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders })

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })
export const cryptoApi = createNewsApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi
//1.15.17
