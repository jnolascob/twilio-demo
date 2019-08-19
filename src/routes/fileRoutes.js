const express = require('express');
const fileController = require('../controllers/fileController');

const Router = express.Router();

Router.post('/upload', fileController.uploadFileServer);
Router.post('/upload-space', fileController.uploadFileSpace);
Router.post('/upload-amazon', fileController.uploadToAmazonS3);

module.exports = Router;
