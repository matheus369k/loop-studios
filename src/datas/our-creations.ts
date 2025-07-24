import crypto from 'node:crypto'

export const ourCreations = [
  {
    id: crypto.randomUUID(),
    image: {
      mobile: '/mobile/image-deep-earth.jpg',
      desktop: '/desktop/image-deep-earth.jpg',
    },
    name: 'Deep earth',
  },
  {
    id: crypto.randomUUID(),
    image: {
      mobile: '/mobile/image-night-arcade.jpg',
      desktop: '/desktop/image-night-arcade.jpg',
    },
    name: 'Night arcade',
  },
  {
    id: crypto.randomUUID(),
    image: {
      mobile: '/mobile/image-soccer-team.jpg',
      desktop: '/desktop/image-soccer-team.jpg',
    },
    name: 'Soccer team VR',
  },
  {
    id: crypto.randomUUID(),
    image: {
      mobile: '/mobile/image-grid.jpg',
      desktop: '/desktop/image-grid.jpg',
    },
    name: 'The grid',
  },
  {
    id: crypto.randomUUID(),
    image: {
      mobile: '/mobile/image-from-above.jpg',
      desktop: '/desktop/image-from-above.jpg',
    },
    name: 'From up above VR',
  },
  {
    id: crypto.randomUUID(),
    image: {
      mobile: '/mobile/image-pocket-borealis.jpg',
      desktop: '/desktop/image-pocket-borealis.jpg',
    },
    name: 'Pocket borealis',
  },
  {
    id: crypto.randomUUID(),
    image: {
      mobile: '/mobile/image-curiosity.jpg',
      desktop: '/desktop/image-curiosity.jpg',
    },
    name: 'The curiosity',
  },
  {
    id: crypto.randomUUID(),
    image: {
      mobile: '/mobile/image-fisheye.jpg',
      desktop: '/desktop/image-fisheye.jpg',
    },
    name: 'Make it fisheye',
  },
]
