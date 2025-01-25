import glsl from 'vite-plugin-glsl';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    extensions: ['.js', '.glsl'] // Add this
  },
    server: {
        host: true,
        open: true
    },
  plugins: [glsl()],
  assetsInclude: ['**/*.glsl'] // Add this line
});