export {
    startEnv,
    stopEnv,
    createEventFromQuery
}

import {
    createTable,
    deleteTable,
    uploadItems,
    waitForTableToExist,
    startDB,
    stopDB
} from './db'

import * as Penguin from '../fixtures/penguins'

import config from '../../api/config'

const tblName = config.tables.penguins

function startEnv() {
    return createTable(Penguin.table)
        .then(() => waitForTableToExist(tblName))
        .then(() => uploadItems(tblName, Penguin.items))
}

function stopEnv() {
    return deleteTable(tblName)
}

function createEventFromQuery(query, variables) {
    return {
        queryStringParameters: {
            query,
            variables
        }
    }
}
