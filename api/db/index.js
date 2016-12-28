const AWS = require('aws-sdk')
const config = require('../config')

const dynamo = new AWS.DynamoDB(config.database)
const client = new AWS.DynamoDB.DocumentClient({ service: dynamo })

module.exports = {
    client
}
