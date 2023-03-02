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
    getGeography: builder.query({
      query: () => `client/geography`,
    }),
    getSales: builder.query({
      query: () => `sales/overall-stats`,
    }),
    getAdmins: builder.query({
      query: () => `managment/admins`,
    }),
    getUserPerformance: builder.query({
      query: id => `managment/performance/${id}`,
    }),
    getDashboardData: builder.query({
      query: () => `general/dashboardData`,
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardDataQuery,
} = apiSlice;
