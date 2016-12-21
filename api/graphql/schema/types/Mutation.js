'use strict'

let Penguin = require('./Penguin')

const Mutation = `
    type Mutation {
        createPenguin ( name: String!, age: Int! ): Penguin
    }
`

module.exports = () => [ Mutation, Penguin ]
