'use strict'

const schema = `
    schema {
        query: Query
        mutation: Mutation
    }
`

module.exports = {
    Mutation: require('./Mutation'),
    Query: require('./Query'),
    Penguin: require('./Penguin'),
    schema: schema
}
