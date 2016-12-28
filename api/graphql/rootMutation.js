'use strict'

const graphql = require('graphql')
const penguin = require('./resources/Penguin/penguinMutation')

const rootFields = Object.assign({},
    penguin
)

module.exports = new graphql.GraphQLObjectType({
    name: 'Mutation',
    fields: () => rootFields
})
