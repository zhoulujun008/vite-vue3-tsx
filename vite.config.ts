import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
    return defineConfig({
        plugins: [
            vue(),
            vueJsx(),
        ],
        base: mode === 'development' ? '/' : './',
        server: {
            host: process.env.HOST,
            port: Number(process.env.PORT||9000),
            proxy: {
                '/api/': {
                    target: process.env.AJAX_URL_PREFIX,
                    ws: false,
                    changeOrigin: true,
                },
                '/user/': {
                    target: process.env.AJAX_URL_PREFIX,
                    ws: false,
                    changeOrigin: true,
                }
            },
        },
        css: {
            /* CSS 预处理器 */
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "src/style/variables.scss";'
                }
            }
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, '/src'),
                '@static': resolve(__dirname, '/static'),
                '@charts': resolve(__dirname, '/src/plugins/charts'),
                '@dashboard': resolve(__dirname, '/src/plugins/dashboard'),
                '@datasource': resolve(__dirname, '/src/plugins/datasource'),
                '@modules': resolve(__dirname, '/src/store/modules'),
                '@pages': resolve(__dirname, '/src/pages'),
            }
        }
    })
}

