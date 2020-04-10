const express = require('express');
const messageController = require('../controllers/messageController');

const Router = express.Router();

Router.post('/send', messageController.send);
Router.post('/send-media', messageController.sendMedia);
Router.post('/send-answer', messageController.sendAnswer);
Router.post('/listen-status', messageController.listenStatus);

module.exports = Router;
