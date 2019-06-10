const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const config = require('../../config/config');

const { space } = config;

// Save file in server app
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}.png`);
  },
});

const uploadToServer = multer({ storage }).single('file');

// Save file in digitalocean space
const spacesEndpoint = new aws.Endpoint(space.endpoint);
const s3 = new aws.S3({
  endpoint: spacesEndpoint,
  accessKeyId: space.accessKey,
  secretAccessKey: space.secretKey,
});
const storageS3 = multerS3({
  s3,
  bucket: 'doapps-server-storage',
  acl: 'public-read',
  contentType: multerS3.AUTO_CONTENT_TYPE,
  key: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadToSpace = multer({ storage: storageS3 }).array('file', 1);

module.exports = {
  uploadToServer,
  uploadToSpace,
};
