const express = require('express');

const fileRoutes = require('./fileRoutes');

const Router = express.Router();

// Aqui puede configurar el Router
Router.use('/file', fileRoutes);

module.exports = Router;
