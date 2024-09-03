import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/pet-saloon-web', // Update this if your GitHub Pages repo name is different
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
