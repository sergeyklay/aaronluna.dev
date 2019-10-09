module.exports = {
    plugins: [
        require('autoprefixer')({
            grid: true,
        }),
        require('postcss-uncss')({
            html: ['public/**/*.html'],
            whitelist: ['#menu a.active']
        })
    ]
    ]
}