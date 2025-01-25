import glsl from 'vite-plugin-glsl';
import { defineConfig } from 'vite';

export default defineConfig({

  plugins: [glsl()],
});


// assetsInclude: ['**/*.glsl']

// vite.config.js
// import glsl from 'vite-plugin-glsl';
// import { defineConfig } from 'vite';

// export default defineConfig({
//   plugins: [glsl()],
//   assetsInclude: ['**/*.glsl'],
//   build: {
//     // Required for Vercel deployment
//     rollupOptions: {
//       external: ['three', 'motion'] // Add any other external deps here
//     }
//   },
//   resolve: {
//     // Explicitly list extensions Vite should resolve
//     extensions: ['.js', '.glsl']
//   },

// });