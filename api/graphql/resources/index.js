'use strict'

const penguin = require('./Penguin')

const mutationFields = Object.assign({},
    require('./Penguin/penguinMutation')
)

const queryFields = Object.assign({},
    require('./Penguin/penguinQuery')
)

module.exports = {
    mutationFields,
    queryFields
}
