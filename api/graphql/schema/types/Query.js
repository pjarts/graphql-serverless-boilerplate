'use strict'

let Penguin = require('./Penguin')

const Query = `
    type Query {
        penguin(id: ID): Penguin
        penguins(minHeight: Int): [Penguin]
    }
`

module.exports = () => [ Query, Penguin ]
