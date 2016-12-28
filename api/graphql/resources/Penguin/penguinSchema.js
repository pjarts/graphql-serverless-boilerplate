'use strict'

const g = require('graphql')

module.exports = new g.GraphQLObjectType({
    name: 'Penguin',
    description: 'A penguin',
    fields: () => ({
        id: {
            type: new g.GraphQLNonNull(g.GraphQLID),
            description: 'The ID of the penguin' },
        name: {
            type: g.GraphQLString,
            description: 'The name of the penguin' },
        age: {
            type: g.GraphQLInt,
            description: 'The age of the penguin' },
        height: { 
            type: g.GraphQLFloat,
            description: 'The height of the penguin in meters'
        }
    })
})
