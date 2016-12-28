'use strict'

const graphql = require('graphql')
const mutationFields = require('./resources').mutationFields

module.exports = new graphql.GraphQLObjectType({
    name: 'Mutation',
    fields: () => mutationFields
})
