export default {
    css: [
        'swiper/dist/css/swiper.css',
        '@/assets/scss/index.scss'
    ],
    build: {
        optimization: {
            runtimeChunk: true,
            splitChunks: {
                name: true,
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.(css|vue)$/,
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        },
        extractCSS: true,
        filenames: {
            css: ({ isDev }) => isDev ? '[name].css' : '[name].[contenthash].css'
        }
    },
    plugins: [
        {src: '@/plugins/swiper', ssr: false},
    ]
}