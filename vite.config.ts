import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createStyleImportPlugin } from 'vite-plugin-style-import';
import config from './env'
// https://vitejs.dev/config/
console.log(process.env.PORT)
export default ({ mode }) => {
    const env = config[mode]
    return defineConfig({
        plugins: [
            vue(),
            vueJsx(),
            createStyleImportPlugin({
                libs: [
                    {
                        libraryName: 'bkui-vue',
                        esModule: true,
                        ensureStyleFile: true,
                        resolveStyle: (name: string) => {
                            return `bkui-vue/lib/${name}/${name}.css`;
                        },
                        // resolveComponent: (name: string) => {
                        //     return `bkui-vue/lib/${name}/${name}`;
                        // },
                    },
                ],
            }),
        ],
        base: mode === 'development' ? '/' : './',
        server: {
            host: env.HOST,
            port: Number(env.PORT || 9000),
            proxy: {
                '/api/': {
                    target: env.AJAX_URL_PROXY,
                    ws: false,
                    changeOrigin: true,
                },
                '/user/': {
                    target: env.AJAX_URL_PROXY,
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
                '@': resolve(__dirname, './src'),
                '@components': resolve(__dirname, './src/components/'),
                '@pages': resolve(__dirname, './src/pages/'),
                '@static': resolve(__dirname, './static'),
                '@charts': resolve(__dirname, './src/plugins/charts'),
                '@datasource': resolve(__dirname, './src/plugins/datasource'),
                '@dashboard': resolve(__dirname, './src/plugins/dashboard'),
                '@modules': resolve(__dirname, './src/store/modules'),
            }
        },
        // build:{
        //     rollupOptions:{
        //
        //     }
        // }
    })
}

