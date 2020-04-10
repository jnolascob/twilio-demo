const express = require('express');

const fileRoutes = require('./fileRoutes');
const messageRoutes = require('./messageRoutes');

const Router = express.Router();

// Aqui puede configurar el Router
Router.use('/file', fileRoutes);
Router.use('/message', messageRoutes);

module.exports = Router;
