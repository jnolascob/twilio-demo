const express = require('express');
const fileController = require('../controllers/fileController');

const Router = express.Router();

Router.post('/upload', fileController.uploadFileServer);
Router.post('/upload-space', fileController.uploadFileSpace);

module.exports = Router;
