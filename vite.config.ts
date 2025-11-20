import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base permet de déployer sur https://user.github.io/repo/
  // Remplacez './' par '/Nom-Du-Repo/' si nécessaire
  base: './', 
  build: {
    outDir: 'dist',
  }
});