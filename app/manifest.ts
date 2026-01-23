import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Digambar Rajaram - DevOps & Cloud Engineer',
    short_name: 'Digambar Portfolio',
    description: 'Professional portfolio showcasing DevOps and Cloud Engineering projects',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
