import { title } from "node:process"

export default defineEventHandler((event) => {
  return [
    {
      id: 1,
      title: 'Marker 1',
      description: 'This is marker 1',
      latLng: { lat: 47.413220, lng: -1.219482 }
    },
    {
      id: 2,
      title: 'Marker 2',
      description: 'This is marker 2',
      latLng: { lat: 47.413220, lng: -1.219482 } 
    }
  ]
})