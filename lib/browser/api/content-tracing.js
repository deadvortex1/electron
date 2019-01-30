'use strict'
const { deprecate } = require('electron')
const contentTracing = process.atomBinding('content_tracing')

contentTracing.getTraceBufferUsage = deprecate.promisifyMultiArg(contentTracing.getTraceBufferUsage)

module.exports = contentTracing
