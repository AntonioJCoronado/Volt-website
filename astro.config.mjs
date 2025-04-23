import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  // Configuración del sitio
  site: 'https://voltimportado.com.ar',
  base: '/',
  
  // Integración de React
  integrations: [react()],
  
  // Configuración del servidor de desarrollo
  server: {
    port: 3000,
    host: true
  },
  
  // Configuración de compilación
  build: {
    // Opciones de salida
    assets: '_assets'
  },
  
  // Configuración de imágenes
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});

