const g = require('graphql')
const Penguin = require('./penguinSchema')
const config = require('../../../config')
const db = require('../../../db').client

module.exports = {
    penguin: {
        type: Penguin,
        description: 'Get a penguin by it\'s ID',
        args: {
            id: {
                type: new g.GraphQLNonNull(g.GraphQLID),
                description: 'The penguin ID'
            }
        },
        resolve: (root, args) => {
            return new Promise((resolve, reject) => {
                const params = {
                    TableName: config.tables.penguins,
                    Key: { id: args.id }
                }
                db.get(params, (err, data) => {
                    if (err) reject(err)
                    else resolve(data.Item)
                })
            })
        }
    },

    penguins: {
        type: new g.GraphQLList(Penguin),
        description: 'Get a list of penguins',
        args: {

        },
        resolve: (source, args) => {
            return new Promise((resolve, reject) => {
                db.scan({ TableName: config.tables.penguins }, (err, data) => {
                    if (err) reject(err)
                    else resolve(data.Items)
                })
            })
        }
    }
}
