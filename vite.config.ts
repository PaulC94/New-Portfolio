import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base relative pour supporter n'importe quel sous-dossier (ex: /New-Portfolio/)
  base: './', 
  build: {
    outDir: 'dist',
  },
  define: {
    // Empêche le crash "process is not defined" dans le navigateur
    'process.env': {},
  }
});