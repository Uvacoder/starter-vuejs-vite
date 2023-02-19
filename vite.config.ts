import path from 'node:path';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import pages from 'vite-plugin-pages';
import {fileURLToPath} from 'node:url';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
    plugins: [vue(), pages(), WindiCSS()],
    resolve: {
        alias: {
            '@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src')
        }
    }
});
