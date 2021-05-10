module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://test.abc.com'
            }
        }
    }

}