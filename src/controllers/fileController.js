const { uploadToServer, uploadToSpace, uploadToAmazon } = require('../utils/middleware/multipart');

function uploadFileServer(req, res) {
  uploadToServer(req, res, (err) => {
    const { file } = req;
    if (err) {
      return res.status(400).json({ message: 'Algo salio mal', error: err.message });
    }
    if (!file) {
      return res.status(400).json({ message: 'No se encontro archivo' });
    }
    return res.status(200).json({ message: 'Se completó la subida el archivo' });
  });
}

function uploadToAmazonS3(req, res) {
  uploadToAmazon(req, res, (err) => {
    if (err) {
      return res.status(400).json({ message: 'Algo salio mal', error: err.message });
    }
    return res.status(200).json({ message: 'Se completó la subida el archivo' });
  });
}

function uploadFileSpace(req, res) {
  uploadToSpace(req, res, (err) => {
    const { file } = req;
    if (err) {
      return res.status(400).json({ message: 'Algo salio mal', error: err.message });
    }
    if (!file) {
      return res.status(400).json({ message: 'No se encontro archivo' });
    }
    return res.status(200).json({ message: 'Se completó la subida el archivo' });
  });
}

module.exports = {
  uploadFileServer,
  uploadFileSpace,
  uploadToAmazonS3,
};
