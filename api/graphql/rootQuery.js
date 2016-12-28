'use strict'

const graphql = require('graphql')
const queryFields = require('./resources').queryFields

module.exports = new graphql.GraphQLObjectType({
    name: 'RootQuery',
    fields: () => queryFields
})
