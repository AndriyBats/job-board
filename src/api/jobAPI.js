import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
//////////////////////////////////////////////////

export const jobAPI = createApi({
  reducerPath: 'jobAPI',
  tagTypes: ['JobList'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data' }),
  endpoints: build => ({
    fetchJobs: build.query({
      query: body => ({
        body,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu',
        },
      }),
      providesTags: (result, error) => [{ type: 'JobList' }], // eslint-disable-line
    }),
  }),
})

export const { useFetchJobsQuery } = jobAPI
