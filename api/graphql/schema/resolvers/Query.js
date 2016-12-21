'use strict'

const config = require('../../../config')

const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB(config.database)
const client = new AWS.DynamoDB.DocumentClient({ service: dynamo })

const Query = {
    penguin(root, args) {
        return new Promise((resolve, reject) => {
            const params = {
                TableName: config.tables.penguins,
                Key: { id: args.id }
            }
            client.get(params, (err, data) => {
                if (err) reject(err)
                else resolve(data.Item)
            })
        })
    },

    penguins(root, args) {
        return new Promise((resolve, reject) => {
            client.scan({ TableName: config.tables.penguins }, (err, data) => {
                if (err) reject(err)
                else resolve(data.Items)
            })
        })
    }
}

module.exports = Query
