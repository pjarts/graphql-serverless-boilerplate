export {
    createTable,
    createBatchPut,
    waitForTableToExist,
    deleteTable,
    uploadItems,
    startDB,
    stopDB
}

import dynalite from 'dynalite'
import AWS from 'aws-sdk'

import config from '../../api/config'

const dynaliteServer = dynalite({ path: './db', createTableMs: 50 })

const dynamo = new AWS.DynamoDB(config.database)
const client = new AWS.DynamoDB.DocumentClient({ service: dynamo })


function createBatchPut (tablename, items) {
    return {
        RequestItems: {
            [tablename]: items.map(item => ({
                PutRequest: {
                    Item: item
                }
            }))
        }
    }
}

function createTable(params) {
    return new Promise((resolve, reject) => {
        dynamo.createTable(params, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

function waitForTableToExist(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 50)

        /*
        waitFor polls every 20 second and will timout mocha
        dynamo.waitFor('tableExists', {
            TableName: name
        }, (err, data) => {
            console.log('jahaaaaa')
            if (err) reject(err)
            resolve(data)
        })
        */
    })
}

function deleteTable(name) {
    return new Promise((resolve, reject) => {
        dynamo.deleteTable({ TableName: name }, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

function uploadItems(table, items) {
    return new Promise((resolve, reject) => {
        client.batchWrite(createBatchPut(table, items), (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

function startDB() {
    return new Promise((resolve, reject) => {
        dynaliteServer.listen(4567, (err) => {
            if (err) reject(err)
            console.log('Dynalite listening on port 4567')
            resolve()
        })
    })
}

function stopDB() {
    return new Promise((resolve, reject) => {
        dynaliteServer.close(err => {
            if (err) reject(err)
            resolve()
        })
    })
}
