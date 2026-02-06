export default defineEventHandler((event): Marker[] => {
  return [
    {
      id: 1,
      name: 'Marker 1',
      description: 'This is marker 1',
      icon: '/geralt.png',
      latLng: { lat: 57.413220, lng: -12.219482, alt: 0 },
      ability: {
        level: 1,
        attack: 10,
        defense: 8,
        magic: 5,
        magicDefense: 6,
        speed: 10,
        luck: 4,
        minScope: 0,
        maxScope: 4,
        move: 10
      }
    },
    {
      id: 2,
      name: 'Marker 2',
      description: 'This is marker 2',
      icon: '/link.png',
      latLng: { lat: -47.413220, lng: 100.219482, alt: 0 },
      ability: {
        level: 2,
        attack: 7,
        defense: 10,
        magic: 7,
        magicDefense: 8,
        speed: 10,
        luck: 5,
        minScope: 6,
        maxScope: 12,
        move: 15
      }
    }
  ]
})

export interface Marker {
  id: number
  name: string
  description: string,
  icon: string,
  latLng: {
    lat: number
    lng: number
    alt?: number
  }
  ability: Ability
}

export interface Ability {
  level: number
  attack: number
  defense: number
  magic: number
  magicDefense: number
  speed: number
  luck: number
  minScope: number
  maxScope: number
  move: number
}