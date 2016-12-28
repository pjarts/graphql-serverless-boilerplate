'use strict'

const graphql = require('graphql')
const penguin = require('./resources/Penguin/penguinQuery')

const rootFields = Object.assign({},
    penguin
)

module.exports = new graphql.GraphQLObjectType({
    name: 'RootQuery',
    fields: () => rootFields
})
