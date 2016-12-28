'use strict'

const g = require('graphql')
const Penguin = require('./penguinSchema')

module.exports = {
    createPenguin: {
        type: Penguin,
        args: {
            name: {
                type: g.GraphQLString,
                description: 'The name of the penguin'
            },
            age: {
                type: g.GraphQLInt,
                description: 'Age of the penguin'
            }
        },
        resolve: (root, args) => {

        }
    }
}
