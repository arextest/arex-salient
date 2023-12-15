import react from '@vitejs/plugin-react-swc';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
import Pages from 'vite-plugin-pages';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // plugins: [["swc-plugin-coverage-instrument", {}]],
      jsxImportSource: '@emotion/react',
    }),
    Pages(),
    Icons({ compiler: 'jsx', jsx: 'react' }),
  ],
});
