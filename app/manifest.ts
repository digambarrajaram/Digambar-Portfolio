import { MetadataRoute } from 'next'
import { personalInfo } from '@/data/portfolio';
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${personalInfo.name} - ${personalInfo.title}`,
    short_name: `${personalInfo.name} Portfolio`,
    description: `Professional portfolio showcasing ${personalInfo.title} projects and expertise`,
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
  };
}
