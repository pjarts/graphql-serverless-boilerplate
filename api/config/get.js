'use strict'

const common = require('./common')

const configs = {
    dev: require('./dev'),
    stage: require('./stage'),
    prod: require('./prod')
}

const defaultConfig = 'dev'

module.exports.config = (name) => {
    name = name && name in configs ? name : defaultConfig
    return extendCommon(configs[name])
}

function extendCommon(config) {
    return Object.keys(config).concat(Object.keys(common))
        .reduce((conf, key) => {
            conf[key] = Object.assign({}, common[key], config[key])
            return conf
        }, {})
}
