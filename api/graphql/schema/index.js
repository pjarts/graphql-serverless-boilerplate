'use strict'

let types = require('./types')
let resolvers = require('./resolvers')
let graphqlTools = require('graphql-tools')

// typeDefs should be an array of type objects
const typeDefs = Object.keys(types).map(name => types[name])

module.exports = graphqlTools.makeExecutableSchema({
    typeDefs,
    resolvers
})
