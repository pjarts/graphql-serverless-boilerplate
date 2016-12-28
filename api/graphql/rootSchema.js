'use strict'

const query = require('./rootQuery')
const mutation = require('./rootMutation')
const graphql = require('graphql')

module.exports = new graphql.GraphQLSchema({ query, mutation })
