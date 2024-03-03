import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
    plugins: [react(), dts({insertTypesEntry: true, include: ['src/lib']}), tsconfigPaths(), cssInjectedByJsPlugin()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/lib/index.ts'),
            name: 'kelso-component-library',
            formats: ['es', 'umd'],
            fileName: 'kelsocl'
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react-router-dom', '@mui/material'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react-router-dom': 'ReactRouterDOM',
                    'styled-components': 'styled'
                }
            }
        }
    }
});
