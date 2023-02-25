import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  endpoints: builder => ({
    getUser: builder.query({
      query: id => `general/user/${id}`,
    }),
    getProducts: builder.query({
      query: () => `general/products`,
    }),
    getCustomers: builder.query({
      query: () => `general/customers`,
    }),
    getTransactions: builder.query({
      query: ({ limit = 20, page = 1 }) => ({
        url: `general/transactions`,
        method: 'GET',
        params: { limit, page },
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
} = apiSlice;
