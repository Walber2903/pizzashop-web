import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'calabresa', amount: 10 },
    { product: 'mussarela', amount: 11 },
    { product: 'frango', amount: 15 },
    { product: 'peperoni', amount: 9 },
    { product: 'portuguesa', amount: 3 },
  ])
})
