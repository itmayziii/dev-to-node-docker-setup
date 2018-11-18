const path = require('path')

module.exports = {
    apps: [{
        name: 'app',
        script: 'src/index.js',
        instances: 1,
        autorestart: true,
        watch: process.env.NODE_ENV !== 'production' ? path.resolve(__dirname, 'src') : false,
        max_memory_restart: '1G'
    }]
}
