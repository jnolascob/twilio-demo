const Twilio = require('twilio');
const { MessagingResponse } = require('twilio').twiml;

const accountSid = 'AC26f11ce0f4d930cfa4c99eb299980a0a'; // Your Account SID from www.twilio.com/console
const authToken = 'a196c0c15738e8188bbccf4635f09208'; // Your Auth Token from www.twilio.com/console

function send(req, res) {
  const client = new Twilio(accountSid, authToken);
  client.messages.create({
    from: 'whatsapp:+14155238886',
    body: 'Hola ZORRO soy DOAPPS papu!!',
    to: 'whatsapp:+51993059945',
  })
    .then((message) => {
      return res.status(200).json(message);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
}

function sendMedia(req, res) {
  const client = new Twilio(accountSid, authToken);
  client.messages.create({
    mediaUrl: ['https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'],
    from: 'whatsapp:+14155238886',
    body: 'Hola ZORRO soy DOAPPS papu!!',
    to: 'whatsapp:+51933440473',
  })
    .then((message) => {
      return res.status(200).json(message);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
  // return res.status(200).json({ message: 'Se envio mensaje' });
}

function sendAnswer(req, res) {
  const { body } = req;
  const goodBoyUrl = 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?'
  + 'ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
  let message;

  if (body.NumMedia > 0) {
    message = new MessagingResponse().message('Luchito veo que perdiste, GIL');
    message.media(goodBoyUrl);
  } else {
    message = new MessagingResponse().message('Send us an image!');
  }

  res.set('Content-Type', 'text/xml');
  res.send(message.toString()).status(200);
}


module.exports = {
  send,
  sendMedia,
  sendAnswer,
};
