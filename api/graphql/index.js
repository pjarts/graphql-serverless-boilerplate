'use strict'

let graphql = require('graphql').graphql

let schema = require('./rootSchema')

const apiHandler = (query, vars) => {
    return graphql(schema, query, null, {}, vars)
}

module.exports = apiHandler
