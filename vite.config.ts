import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/pet-saloon-web/', // Replace with your GitHub repository name
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
