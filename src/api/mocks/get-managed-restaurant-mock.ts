import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const GetManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    name: 'John Doe Restaurant',
    createdAt: new Date(),
    updatedAt: null,
    description: 'Some description.',
    managerId: 'custom-user-id',
  })
})
