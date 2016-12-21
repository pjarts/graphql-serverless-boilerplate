'use strict'

const common = require('./common')
const env = process.env.runEnv

module.exports = require('./get').config(env)
