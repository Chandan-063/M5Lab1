// app.js

const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();

// Mount loggerMiddleware for all routes
app.use(loggerMiddleware);

// Other middleware and routes...

module.exports = app;