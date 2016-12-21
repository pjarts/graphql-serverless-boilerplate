'use strict'

let graphql = require('./graphql')

module.exports.graphql = (event, context, callback) => {
    const query = event.query.query
    const vars = event.query.variables

    graphql(query, vars)
        .then(data => callback(null, data))
        .catch(err => callback(err))
}
